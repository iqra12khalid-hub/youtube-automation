import sys,subprocess,numpy as np,wave
from PIL import Image,ImageDraw,ImageFont,ImageFilter
text=sys.argv[1]; out=sys.argv[2]
W,H,FPS,DUR,HIT=1920,1080,24,4.0,0.4
FF='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2'
S='/tmp/claude-0/-home-user-youtube-automation/d5454360-4f37-52b6-a54c-8b73145a27bf/scratchpad/'
font=ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf',96)
spacing=18
def text_layer():
    chars=list(text); widths=[font.getbbox(c)[2]-font.getbbox(c)[0] if c!=' ' else 40 for c in chars]
    tw=sum(widths)+spacing*(len(chars)-1)
    img=Image.new('L',(W,H),0); d=ImageDraw.Draw(img); x=(W-tw)//2; y=H//2-60
    for c,w in zip(chars,widths):
        if c!=' ': d.text((x-font.getbbox(c)[0],y),c,font=font,fill=255)
        x+=w+spacing
    return np.array(img).astype(np.float32)/255
base=text_layer()
glow=np.array(Image.fromarray((base*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))).astype(np.float32)/255
rng=np.random.default_rng(1)
p=subprocess.Popen([FF,'-loglevel','error','-y','-f','rawvideo','-pix_fmt','gray','-s',f'{W}x{H}','-r',str(FPS),'-i','-','-c:v','libx264','-crf','14','-pix_fmt','yuv420p',S+'_v.mp4'],stdin=subprocess.PIPE)
N=int(DUR*FPS)
for i in range(N):
    t=i/FPS
    if t<HIT: frame=np.zeros((H,W),np.float32)
    else:
        u=t-HIT
        sc=1.0+0.05*np.exp(-u/0.12)+0.02*(u/(DUR-HIT))  # slam then slow push
        M=Image.fromarray((base*255).astype(np.uint8)).resize((int(W*sc),int(H*sc)),Image.LANCZOS)
        M=np.array(M).astype(np.float32)/255; oy=(M.shape[0]-H)//2; ox=(M.shape[1]-W)//2; M=M[oy:oy+H,ox:ox+W]
        fade=1.0 if t<DUR-0.8 else max(0,(DUR-t)/0.8)
        flash=0.9*np.exp(-u/0.18)
        frame=(M*0.93+glow*flash)*fade
        frame+=rng.normal(0,0.012,(H,W)).astype(np.float32)*fade
    p.stdin.write((np.clip(frame,0,1)*255).astype(np.uint8).tobytes())
p.stdin.close();p.wait()
# sound: deep cinematic boom
SR=48000;n=int(DUR*SR);a=np.zeros(n);tt=np.arange(n)/SR
h=int(HIT*SR);u=tt[h:]-HIT
f=32+38*np.exp(-u/0.25); ph=2*np.pi*np.cumsum(f)/SR
sub=np.sin(ph)*np.exp(-u/1.1)
thud=np.sin(2*np.pi*95*u)*np.exp(-u/0.09)*0.6
nz=rng.normal(0,1,len(u)); 
from numpy.fft import rfft,irfft
def lp(x,fc):
    X=rfft(x);fr=np.fft.rfftfreq(len(x),1/SR);X[fr>fc]=0;return irfft(X,len(x))
click=lp(nz,2500)*np.exp(-u/0.015)*0.5
dry=sub+thud+click
ir_n=int(1.6*SR);ir=lp(rng.normal(0,1,ir_n),1200)*np.exp(-np.arange(ir_n)/SR/0.45);ir/=np.abs(ir).sum()/6
wet=np.convolve(dry,ir)[:len(dry)]*0.35
a[h:]=dry+wet
a*=np.where(tt>DUR-0.8,np.clip((DUR-tt)/0.8,0,1),1)
a=a/np.abs(a).max()*0.89
st=np.stack([a,a],1);st=(st*32767).astype(np.int16)
w=wave.open(S+'_a.wav','wb');w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes(st.tobytes());w.close()
subprocess.run([FF,'-loglevel','error','-y','-i',S+'_v.mp4','-i',S+'_a.wav','-c:v','copy','-c:a','aac','-b:a','256k','-shortest',out],check=True)
print('ok',out)
