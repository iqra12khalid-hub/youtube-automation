import numpy as np,wave,subprocess
from numpy.fft import rfft,irfft
SR=48000;DUR=4.0;HIT=0.4;n=int(DUR*SR);t=np.arange(n)/SR;rng=np.random.default_rng(7)
S='/tmp/claude-0/-home-user-youtube-automation/d5454360-4f37-52b6-a54c-8b73145a27bf/scratchpad/'
FF='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2'
def filt(x,lo=0,hi=24000):
    X=rfft(x);f=np.fft.rfftfreq(len(x),1/SR);X[(f<lo)|(f>hi)]=0;return irfft(X,len(x))
def env(u,a,d):return np.where(u<0,0,np.minimum(u/a,1)*np.exp(-np.maximum(u-a,0)/d))
def reverb(x,length,decay,mix,hi=3000):
    m=int(length*SR);ir=filt(rng.normal(0,1,m),80,hi)*np.exp(-np.arange(m)/SR/decay);ir/=np.sqrt((ir**2).sum())
    return x+np.convolve(x,ir)[:len(x)]*mix
u=t-HIT
def sub_kick(f0=110,f1=42,d=0.7):
    f=f1+(f0-f1)*np.exp(-np.maximum(u,0)/0.06);ph=2*np.pi*np.cumsum(f)/SR;return np.sin(ph)*env(u,0.002,d)
def saw(f):
    ph=(t*f)%1;return 2*ph-1
# A: BRAAM (low brass, heard on laptop speakers)
br=sum(saw(f)*g for f,g in [(55,1),(55.4,0.8),(54.6,0.8),(110.3,0.5),(82.5,0.35)])
br=np.tanh(2.5*br)*env(u,0.02,1.6)
br=filt(br,40,1400)
A=reverb(br*0.9+sub_kick()*0.8+filt(rng.normal(0,1,n),300,4000)*env(u,0.001,0.03)*0.4,2.5,0.7,0.6)
# B: trailer IMPACT (punchy thump + metal ring)
ring=sum(np.sin(2*np.pi*f*t)*g for f,g in [(196,1),(311,0.7),(467,0.5),(733,0.35),(1103,0.2)])*env(u,0.003,1.3)*0.35
B=reverb(sub_kick(140,45,0.9)*1.2+filt(rng.normal(0,1,n),150,5000)*env(u,0.001,0.07)*0.9+ring+np.tanh(3*np.sin(2*np.pi*70*t))*env(u,0.005,0.35)*0.5,3.0,0.9,0.7)
# C: WHOOSH + DUM (rising suck-in then hit)
rise=filt(rng.normal(0,1,n),400,6000)*np.where((t>0.0)&(t<HIT),(t/HIT)**3,0)*0.6
C=reverb(rise+sub_kick(120,40,1.0)*1.3+np.tanh(2*br)*env(u,0.01,0.9)*0.5+filt(rng.normal(0,1,n),200,3500)*env(u,0.001,0.05)*0.7,2.8,0.8,0.65)
for name,x in [('A_BRAAM',A),('B_IMPACT',B),('C_WHOOSH_DUM',C)]:
    x=x*np.where(t>DUR-0.8,np.clip((DUR-t)/0.8,0,1),1)
    x=np.tanh(1.4*x/np.abs(x).max())  # glue + loudness
    x=x/np.abs(x).max()*0.93
    st=(np.stack([x,x],1)*32767).astype(np.int16)
    w=wave.open(S+name+'.wav','wb');w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes(st.tobytes());w.close()
    for card in ['28_HOURS_EARLIER','28_HOURS_AGO']:
        out=f'/home/user/youtube-automation/LITTLE_BRAVE_HORN/TITLE_CARDS/{card}_{name}.mp4'
        subprocess.run([FF,'-loglevel','error','-y','-i',f'/home/user/youtube-automation/LITTLE_BRAVE_HORN/TITLE_CARDS/{card}.mp4','-i',S+name+'.wav','-map','0:v','-map','1:a','-c:v','copy','-c:a','aac','-b:a','256k','-shortest',out],check=True)
    print(name,'rms dB',20*np.log10(np.sqrt((x**2).mean())))
