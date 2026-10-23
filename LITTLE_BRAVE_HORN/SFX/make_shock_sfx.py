import numpy as np,wave,subprocess,os
from numpy.fft import rfft,irfft
SR=48000;rng=np.random.default_rng(3)
OUT=os.path.dirname(os.path.abspath(__file__))
FF='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2'
def T(d):return np.arange(int(d*SR))/SR
def filt(x,lo=0,hi=24000):
    X=rfft(x);f=np.fft.rfftfreq(len(x),1/SR);X[(f<lo)|(f>hi)]=0;return irfft(X,len(x))
def env(t,a,d):return np.minimum(t/max(a,1e-4),1)*np.exp(-np.maximum(t-a,0)/d)
def sweep(t,f0,f1,curve=1.0):
    k=(t/t[-1])**curve;f=f0+(f1-f0)*k;return np.sin(2*np.pi*np.cumsum(f)/SR)
def rev(x,l=1.2,dec=0.35,mix=0.3):
    m=int(l*SR);ir=filt(rng.normal(0,1,m),100,5000)*np.exp(-np.arange(m)/SR/dec);ir/=np.sqrt((ir**2).sum())
    c=np.convolve(x,ir);y=np.zeros(len(c));y[:len(x)]=x;return y+c*mix
def save(name,x):
    x=x/np.abs(x).max()*0.92
    w=wave.open(f'{OUT}/{name}.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((x*32767).astype(np.int16).tobytes());w.close()
    subprocess.run([FF,'-loglevel','error','-y','-i',f'{OUT}/{name}.wav','-b:a','256k',f'{OUT}/{name}.mp3'],check=True)
# 1 cartoon shock: slide whistle up + boing + eye pop
t=T(0.45);whistle=sweep(t,500,2400,1.6)*env(t,0.02,1)*0.6
tb=T(0.7);boing=np.sin(2*np.pi*np.cumsum(180+120*np.exp(-tb/0.08)*np.sin(2*np.pi*14*tb))/SR)*env(tb,0.003,0.25)
pop=filt(rng.normal(0,1,int(0.05*SR)),800,6000)*env(T(0.05),0.001,0.008)
x=np.concatenate([whistle,pop*0.8,boing]);save('SHOCK_1_CARTOON',rev(x,0.6,0.15,0.15))
# 2 dramatic shock hit: low brass + timpani boom + string screech
t=T(2.2)
brass=sum(np.sign(np.sin(2*np.pi*f*t))*g for f,g in [(55,1),(82.4,0.6),(110,0.5)]);brass=filt(np.tanh(2*brass),40,1500)*env(t,0.01,0.6)
timp=np.sin(2*np.pi*np.cumsum(90+60*np.exp(-t/0.05))/SR)*env(t,0.002,0.5)*1.3
scr=sum(np.sin(2*np.pi*(f*(1+0.01*np.sin(2*np.pi*6*t)))*t) for f in [1760,1864,2093])*env(np.maximum(t-0.05,0),0.05,0.4)*0.25
save('SHOCK_2_DRAMATIC_HIT',rev(brass*0.8+timp+scr+filt(rng.normal(0,1,len(t)),200,4000)*env(t,0.001,0.03)*0.5,2.0,0.6,0.5))
# 3 gasp sting: whoosh into string stab + cymbal swell
t=T(1.4);wh=filt(rng.normal(0,1,len(t)),300,5000)*np.where(t<0.35,(t/0.35)**2,0)*0.5
ts=np.maximum(t-0.35,0);stab=sum(np.sign(np.sin(2*np.pi*f*t)) for f in [880,1046,1318])*env(ts,0.005,0.18)*(t>0.35)*0.25
cym=filt(rng.normal(0,1,len(t)),4000,16000)*env(ts,0.15,0.5)*(t>0.35)*0.3
save('SHOCK_3_GASP_STING',rev(wh+filt(stab,200,6000)+cym,1.0,0.3,0.3))
# 4 cute dun-dun (kids fright)
def xylo(f,d=0.35):
    t=T(d);return (np.sin(2*np.pi*f*t)+0.4*np.sin(2*np.pi*f*3.9*t)*np.exp(-t/0.03))*env(t,0.002,0.12)
def pluck(f,d=0.4):
    t=T(d);return filt(np.sign(np.sin(2*np.pi*f*t)),50,2500)*env(t,0.002,0.09)
x=np.concatenate([xylo(392,0.4)+pluck(98,0.4),np.zeros(int(0.08*SR)),xylo(370,0.6)+pluck(92,0.6)])
sq=sweep(T(0.12),1800,2600)*env(T(0.12),0.01,0.05)*0.35
save('SHOCK_4_CUTE_DUN_DUN',rev(np.concatenate([x,sq]),0.5,0.12,0.12))
# 5 record scratch + silence
t=T(0.45);fr=filt(rng.normal(0,1,len(t)),300,5000)
mod=np.abs(np.sin(2*np.pi*np.cumsum(9+25*(t/t[-1]))/SR))
sc=fr*mod*env(t,0.005,0.2)*sweep(t,1,1)*0+fr*mod*env(t,0.005,0.25)
sc+=sweep(t,900,250,0.7)*env(t,0.005,0.2)*0.4
save('SHOCK_5_RECORD_SCRATCH',np.concatenate([sc,np.zeros(int(1.0*SR))]))
print('done')
