import numpy as np, random, sys
from PIL import Image, ImageDraw
W,H,FPS=1280,720,24
out=sys.argv[1]
CX,TY=640,250            # tree position
HZ=140                   # top of hill
yy,xx=np.mgrid[0:H,0:W]
# protected strip below the tree (V shape), plus a circle around the trunk
half=np.where(yy>TY, 70+(yy-TY)*0.22, 0)
protect=((yy>TY)&(np.abs(xx-CX)<half)) | ((xx-CX)**2+(yy-TY)**2<95**2)
hill=yy>HZ+0.0004*(xx-CX)**2*0  # whole lower area is hill
random.seed(3)
stumps=[(x,y) for x,y in ((random.randint(60,1220),random.randint(170,560)) for _ in range(60))
        if not protect[y,x] and abs(x-CX)>110]
houses=[(570,600),(640,630),(710,600),(605,665),(680,670)]

def lerp(a,b,t): return tuple(int(a[i]+(b[i]-a[i])*t) for i in range(3))

def frame(t):
    # phases: 0-1.5 storm builds, 1.5-7 mud flows, 7-8 fade, 8-11 morning
    morning=min(max((t-7)/1.0,0),1)
    sky_top=lerp((40,48,62),(255,190,120),morning); sky_bot=lerp((70,80,95),(255,230,170),morning)
    img=np.zeros((H,W,3),np.uint8)
    for c in range(3):
        img[:,:,c]=np.linspace(sky_top[c],sky_bot[c],H)[:,None]
    green=np.array(lerp((52,92,48),(95,165,70),morning))
    img[yy>HZ]=green
    # river at the bottom
    img[(yy>700)]=lerp((60,80,100),(90,150,190),morning)
    # mud
    front=HZ+max(0,(t-1.5))/5.0*(H-HZ+40)
    flow=np.sin((yy-t*160)/14.0+np.sin(xx/37.0)*2)*0.5+0.5
    mud=(yy>HZ)&(yy<front)&~protect
    base=np.array(lerp((92,62,38),(120,86,55),morning),float)
    shade=(base[None,:]*(0.75+0.35*flow[mud][:,None])).clip(0,255)
    img[mud]=shade.astype(np.uint8)
    im=Image.fromarray(img); d=ImageDraw.Draw(im)
    # stumps (only visible where no mud yet)
    for x,y in stumps:
        if y>front: d.rectangle([x-6,y-10,x+6,y],fill=(110,80,50)); d.ellipse([x-7,y-14,x+7,y-6],fill=(190,160,110))
    # sun
    if morning>0: d.ellipse([1000,40,1100,140],fill=lerp(sky_top,(255,245,200),morning))
    # houses
    for x,y in houses:
        d.rectangle([x-24,y-18,x+24,y+14],fill=(205,170,130)); d.polygon([(x-30,y-18),(x,y-40),(x+30,y-18)],fill=(150,70,50))
        d.rectangle([x-6,y-2,x+6,y+14],fill=(90,60,40))
    # banyan: trunk, hanging roots, canopy, face
    sway=int(4*np.sin(t*3)) if t<7 else 0
    d.rectangle([CX-30,TY-60,CX+30,TY+40],fill=(120,82,50))
    for i in range(-150,151,22):
        d.line([CX+i+sway,TY-80,CX+i*0.8,TY+30],fill=(100,70,45),width=3)
    d.ellipse([CX-190+sway,TY-190,CX+190+sway,TY-50],fill=(40,110,50))
    d.ellipse([CX-130+sway,TY-215,CX+110+sway,TY-110],fill=(55,130,60))
    eyes_closed = 1.5<t<7
    for ex in (CX-13,CX+13):
        if eyes_closed: d.line([ex-7,TY-25,ex+7,TY-25],fill=(40,25,15),width=3)
        else: d.ellipse([ex-7,TY-32,ex+7,TY-18],fill=(255,255,255)); d.ellipse([ex-3,TY-28,ex+3,TY-22],fill=(20,20,20))
    if morning>0.5: d.arc([CX-14,TY-12,CX+14,TY+6],20,160,fill=(40,25,15),width=3)
    # rain
    if t<7:
        r=random.Random(int(t*FPS))
        a=int(160*min(1,t/1.0)*(1-morning))
        for _ in range(350):
            x=r.randint(0,W); y=r.randint(0,H)
            d.line([x,y,x-6,y+22],fill=(200,210,225),width=1)
    # caption
    cap="STORM: bare hill slides, roots hold" if t<7 else "MORNING: the V of mud - village safe below the tree"
    d.rectangle([0,0,W,36],fill=(0,0,0)); d.text((14,10),cap,fill=(255,255,255))
    return im

T=11
for i in range(int(T*FPS)):
    frame(i/FPS).save(f"{out}/f{i:04d}.png")
frame(10.5).save(f"{out}/final_still.png")
