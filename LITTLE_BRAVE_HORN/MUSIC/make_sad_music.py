import numpy as np,wave,subprocess,os
from numpy.fft import rfft,irfft
SR=44100;rng=np.random.default_rng(11);OUT=os.path.dirname(os.path.abspath(__file__))
FF='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2'
BPM=66;B=60/BPM
def hz(n):return 440*2**((n-69)/12)
def piano(f,d,v=0.5):
    t=np.arange(int((d+2.5)*SR))/SR
    x=sum(np.sin(2*np.pi*f*k*t)*np.exp(-t*(1.2+0.9*k))/k**1.3 for k in range(1,7))
    a=np.minimum(t/0.006,1);rel=np.where(t>d,np.exp(-(t-d)/0.6),1)
    return x*a*rel*v
def musicbox(f,d,v=0.3):
    t=np.arange(int(2.0*SR))/SR
    x=np.sin(2*np.pi*f*t)+0.35*np.sin(2*np.pi*f*2.76*t)*np.exp(-t*6)+0.2*np.sin(2*np.pi*f*5.4*t)*np.exp(-t*12)
    return x*np.exp(-t*2.2)*np.minimum(t/0.002,1)*v
def pad(fs,d,v=0.1):
    t=np.arange(int(d*SR))/SR
    x=sum(np.sin(2*np.pi*f*(1+0.002*np.sin(2*np.pi*0.3*t+i))*t)+0.3*np.sin(2*np.pi*f*2*t) for i,f in enumerate(fs))
    e=np.minimum(t/1.2,1)*np.minimum((d-t)/1.2,1)
    return x*np.clip(e,0,1)*v
L=int(66*SR);mix=np.zeros(L+SR*4)
def put(x,start):
    s=int(start*SR);e=min(s+len(x),len(mix));mix[s:e]+=x[:e-s]
# chords (A minor): Am F C G | Am F G Am  (bars of 4 beats)
prog=[[57,60,64],[53,57,60],[48,52,55],[55,59,62],[57,60,64],[53,57,60],[55,59,62],[57,60,64]]
melA=[(76,1),(74,0.5),(72,0.5),(71,2),(72,1),(71,0.5),(69,0.5),(69,2),(67,1),(69,1),(72,2),(71,1),(69,0.5),(67,0.5),(67,2),
      (76,1),(77,0.5),(76,0.5),(74,2),(72,1),(74,0.5),(72,0.5),(69,2),(71,1),(72,1),(74,1.5),(72,0.5),(69,4)]
bar=4*B
def section(t0,mel_inst,with_pad):
    for i,ch in enumerate(prog):
        bt=t0+i*bar
        root=ch[0]-12
        put(piano(hz(root),bar*0.9,0.35),bt)
        for j,n in enumerate([ch[0],ch[1],ch[2],ch[1]]):  # gentle arpeggio
            put(piano(hz(n),B*0.9,0.18),bt+j*B)
        if with_pad: put(pad([hz(n) for n in ch],bar+0.3,0.05),bt)
    tt=t0
    for n,d in melA:
        put(mel_inst(hz(n),d*B),tt);tt+=d*B
intro=0.0
for i,ch in enumerate(prog[:2]):  # soft intro
    for j,n in enumerate([ch[0],ch[1],ch[2],ch[1]]):put(piano(hz(n),B*0.9,0.15),i*bar+j*B)
s1=2*bar
section(s1,lambda f,d:musicbox(f*2,d,0.28),False)
s2=s1+8*bar
section(s2,lambda f,d:piano(f,d,0.42),True)
end=s2+8*bar
put(piano(hz(45),3,0.4)+0,end);put(piano(hz(57),3,0.25),end);put(piano(hz(64),3,0.2),end);put(musicbox(hz(81),2,0.2),end+0.4)
x=mix[:int((end+4)*SR)]
# reverb
m=int(2.8*SR);ir=np.convolve(rng.normal(0,1,m)*np.exp(-np.arange(m)/SR/0.9),np.ones(8)/8,'same');ir/=np.sqrt((ir**2).sum())
X=np.fft.rfft(np.concatenate([x,np.zeros(m)]));I=np.fft.rfft(ir,len(x)+m)
wet=np.fft.irfft(X*I,len(x)+m)[:len(x)]
y=x+wet*0.35
fade=np.ones(len(y));fl=int(3*SR);fade[-fl:]=np.linspace(1,0,fl)
y*=fade;y=y/np.abs(y).max()*0.85
w=wave.open(f'{OUT}/SAD_BABY_CARTOON_MUSIC.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((y*32767).astype(np.int16).tobytes());w.close()
subprocess.run([FF,'-loglevel','error','-y','-i',f'{OUT}/SAD_BABY_CARTOON_MUSIC.wav','-ac','2','-b:a','256k',f'{OUT}/SAD_BABY_CARTOON_MUSIC.mp3'],check=True)
print('len',len(y)/SR)
