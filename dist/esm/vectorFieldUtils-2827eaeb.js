import { P as o$1, r } from './messageBundle-8a146a9b.js';
import { i as i$1, u as u$1 } from './pixelUtils-fc1bd760.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new Map;o.set("meter-per-second",1),o.set("kilometer-per-hour",.277778),o.set("knots",.514444),o.set("feet-per-second",.3048),o.set("mile-per-hour",.44704);const a=180/Math.PI,s=5,i=new o$1({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function h(t,e){return o.get(t)/o.get(e)||1}function l(t){return (450-t)%360}function c(t,e="geographic"){const[n,r]=t,o=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n)*a;return s=(360+s)%360,"geographic"===e&&(s=l(s)),[o,s]}function u(t,e="geographic"){let n=t[1];"geographic"===e&&(n=l(n)),n%=360;const r=t[0];return [r*Math.cos(n/a),r*Math.sin(n/a)]}function f(t,e,o="geographic",a=1){if(!i$1(t))return t;const{pixels:s,width:i,height:h}=t,l=i*h,f=s[0],p=s[1],m=u$1.createEmptyBand(t.pixelType,l),M=u$1.createEmptyBand(t.pixelType,l);let x=0;for(let n=0;n<h;n++)for(let t=0;t<i;t++)"vector-uv"===e?([m[x],M[x]]=c([f[x],p[x]],o),m[x]*=a):([m[x],M[x]]=u([f[x],p[x]],o),m[x]*=a,M[x]*=a),x++;const d=new u$1({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[m,M]});return d.updateStatistics(),d}function p(t,e,n=1){if(1===n||!i$1(t))return t;const o=t.clone(),{pixels:a,width:s,height:i}=o,h=a[0],l=a[1];let c=0;for(let r=0;r<i;r++)for(let t=0;t<s;t++)"vector-uv"===e?(h[c]*=n,l[c]*=n):h[c]*=n,c++;return o.updateStatistics(),o}function m(t,n,r$1,o,a){if(!r(a)||!a.spatialReference.equals(t.spatialReference))return {extent:t,width:n,height:r$1,resolution:t.width/n};const s=a.xmin,i=a.ymax;o=Math.max(o||0,30);const h=Math.ceil(n*(1/o)),l=Math.ceil(r$1*(1/o)),c=((t.xmax-t.xmin)/h+(t.ymax-t.ymin)/l)/2;return t.xmin=s+Math.floor((t.xmin-s)/c)*c,t.xmax=s+Math.ceil((t.xmax-s)/c)*c,t.ymin=i+Math.floor((t.ymin-i)/c)*c,t.ymax=i+Math.ceil((t.ymax-i)/c)*c,{extent:t,width:Math.round(t.width/c),height:Math.round(t.height/c),resolution:c}}const M=x(0,0,0);function x(t=0,e=0,n=Math.PI,r=!0){r&&(n=(2*Math.PI-n)%(2*Math.PI));const o=r?-1:1,a=13*o,s=-7*o,i=-2*o,h=-16*o,l=29,[c,u]=g(0,e+a,n,l),[f,p]=g(t-5.5,e+s,n,l),[m,M]=g(t+5.5,e+s,n,l),[x,d]=g(t-1.5,e+i,n,l),[k,w]=g(t+1.5,e+i,n,l),[y,P]=g(t-1.5,e+h,n,l),[b,I]=g(t+1.5,e+h,n,l);return [c,u,f,p,x,d,k,w,m,M,y,P,b,I]}function d(t=0,e=Math.PI,n=!0){n&&(e=(2*Math.PI-e)%(2*Math.PI));const r=10,o=n?-1:1,a=5*o,i=20*o,h=25*o,l=45,c=0,u=0,f=2,p=0,m=f*o;let[M,x]=[c+r/2,u-i],[d,k]=[M+f,x],[w,y]=[d-p,k+m],[P,b]=[c-r/2,u-h],[I,v]=[P+p,b-m],A=Math.ceil(t/s),_=Math.floor(A/10);A-=8*_;const U=[],S=[];for(let s=0;s<A/2;s++,_--){_<=0&&A%2==1&&s===(A-1)/2&&(P=c,I=P+p,b=(b+x)/2,v=b-m);const[t,n]=g(P,b,e,l);if(_>0){const[r,o]=g(d,b,e,l),[a,s]=g(M,x,e,l);U.push(r),U.push(o),U.push(t),U.push(n),U.push(a),U.push(s);}else {const[r,o]=g(d,k,e,l),[a,s]=g(w,y,e,l),[i,h]=g(I,v,e,l);S.push(t),S.push(n),S.push(i),S.push(h),S.push(a),S.push(s),S.push(r),S.push(o);}b+=a,x+=a,k+=a,y+=a,v+=a;}const[D,F]=g(c+r/2,u+i,e,l),j=r/2+f,[N,T]=g(c+j,u+i,e,l),[q,B]=g(c+r/2,u-h,e,l),[E,J]=g(c+j,u-h,e,l);return {pennants:U,barbs:S,shaft:[D,F,N,T,q,B,E,J]}}function g(t,e,n,r=1){const o=Math.sqrt(t*t+e*e)/r,a=(2*Math.PI+Math.atan2(e,t))%(2*Math.PI);return [o,(2*Math.PI+a-n)%(2*Math.PI)]}const k=[0,1,3,6,10,16,21,27,33,40,47,55,63],w=[0,.5,1,1.5,2],y=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function P(t,e,n,r){const o=h(r||"knots",n);let a;for(a=1;a<e.length;a++)if(a===e.length-1){if(t<e[a]*o)break}else if(t<=e[a]*o)break;return Math.min(a-1,e.length-2)}function b(t,e,n,r,o){let a=0;switch(e){case"beaufort_kn":a=P(t,k,"knots",n);break;case"beaufort_km":a=P(t,k,"kilometer-per-hour",n);break;case"beaufort_ft":a=P(t,k,"feet-per-second",n);break;case"beaufort_m":a=P(t,k,"meter-per-second",n);break;case"classified_arrow":a=P(t,o,r,n);break;case"ocean_current_m":a=P(t,w,"meter-per-second",n);break;case"ocean_current_kn":a=P(t,y,"knots",n);}return a}function I(t,e){const{style:n,inputUnit:r,outputUnit:o,breakValues:a}=e,s=i.fromJSON(r),h=i.fromJSON(o),l=7*6,c=15;let u=0,f=0;const{width:p,height:m,mask:x}=t,d=t.pixels[0],g=t.pixels[1],k=x?x.filter((t=>t>0)).length:p*m,w=new Float32Array(k*l),y=new Uint32Array(c*k);for(let i=0;i<m;i++)for(let t=0;t<p;t++){const e=i*p+t;if(!x||x[i*p+t]){var P;const r=null!=(P=(g[e]+360)%360/180*Math.PI)?P:2*Math.PI*Math.random(),o=b(d[e],n,s,h,a);for(let n=0;n<M.length;n+=2)w[u++]=(t+.5)/p,w[u++]=(i+.5)/m,w[u++]=M[n],w[u++]=M[n+1]+r,w[u++]=o,w[u++]=d[e];const c=7*(u/l-1);y[f++]=c,y[f++]=c+1,y[f++]=c+2,y[f++]=c+0,y[f++]=c+4,y[f++]=c+3,y[f++]=c+0,y[f++]=c+2,y[f++]=c+3,y[f++]=c+2,y[f++]=c+5,y[f++]=c+3,y[f++]=c+5,y[f++]=c+6,y[f++]=c+3;}}return {vertexData:w,indexData:y}}const v=[];function A(t,e){if(0===v.length)for(let s=0;s<30;s++)v.push(d(5*s,0));const n=h(i.fromJSON(e.inputUnit),"knots"),{width:r,height:o,mask:a}=t,l=t.pixels[0],c=t.pixels[1],u=6,f=[],p=[];let m=0,M=0;for(let i=0;i<o;i++)for(let t=0;t<r;t++){const e=i*r+t,h=l[e]*n;if((!a||a[i*r+t])&&h>=s){var x;const n=null!=(x=(c[e]+360)%360/180*Math.PI)?x:2*Math.PI*Math.random(),{pennants:a,barbs:s,shaft:l}=v[Math.min(Math.floor(h/5),29)];if(a.length+s.length===0)continue;let d=f.length/u;const g=(t+.5)/r,k=(i+.5)/o;for(let t=0;t<a.length;t+=2)f[m++]=g,f[m++]=k,f[m++]=a[t],f[m++]=a[t+1]+n,f[m++]=0,f[m++]=h;for(let t=0;t<s.length;t+=2)f[m++]=g,f[m++]=k,f[m++]=s[t],f[m++]=s[t+1]+n,f[m++]=0,f[m++]=h;for(let t=0;t<l.length;t+=2)f[m++]=g,f[m++]=k,f[m++]=l[t],f[m++]=l[t+1]+n,f[m++]=0,f[m++]=h;for(let t=0;t<a.length/6;t++)p[M++]=d,p[M++]=d+1,p[M++]=d+2,d+=3;for(let t=0;t<s.length/8;t++)p[M++]=d,p[M++]=d+1,p[M++]=d+2,p[M++]=d+1,p[M++]=d+2,p[M++]=d+3,d+=4;p[M++]=d+0,p[M++]=d+1,p[M++]=d+2,p[M++]=d+1,p[M++]=d+3,p[M++]=d+2,d+=4;}}return {vertexData:new Float32Array(f),indexData:new Uint32Array(p)}}function _(t,e){const n=4*6;let r=0,o=0;const{width:a,height:i,mask:h}=t,l=t.pixels[0],c=[],u=[],f="wind_speed"===e.style?s:Number.MAX_VALUE;for(let s=0;s<i;s++)for(let t=0;t<a;t++){const e=s*a+t;if((!h||h[s*a+t])&&l[e]<f){for(let n=0;n<4;n++)c[r++]=(t+.5)/a,c[r++]=(s+.5)/i,c[r++]=n<2?-.5:.5,c[r++]=n%2==0?-.5:.5,c[r++]=0,c[r++]=l[e];const h=4*(r/n-1);u[o++]=h,u[o++]=h+1,u[o++]=h+2,u[o++]=h+1,u[o++]=h+2,u[o++]=h+3;}}return {vertexData:new Float32Array(c),indexData:new Uint32Array(u)}}function U(t,e){return "simple_scalar"===e.style?_(t,e):"wind_speed"===e.style?A(t,e):I(t,e)}function S(t,e,r,o=[0,0],a=.5){const{width:s,height:i,mask:h}=t,[l,f]=t.pixels,[p,m]=o,M=Math.round((s-p)/r),x=Math.round((i-m)/r),d=M*x,g=new Float32Array(d),k=new Float32Array(d),w=new Uint8Array(d),y="vector-uv"===e;for(let n=0;n<x;n++)for(let t=0;t<M;t++){let e=0;const o=n*M+t,x=Math.max(0,n*r+m),d=Math.max(0,t*r+p),P=Math.min(i,x+r),b=Math.min(s,d+r);for(let t=x;t<P;t++)for(let n=d;n<b;n++){const r=t*s+n;if(!h||h[r]){e++;const t=y?[l[r],f[r]]:[l[r],(360+f[r])%360],[n,a]=y?t:u(t);g[o]+=n,k[o]+=a;}}if(e>=(P-x)*(b-d)*(1-a)){w[o]=1;const[t,n]=c([g[o]/e,k[o]/e]);g[o]=t,k[o]=n;}else w[o]=0,g[o]=0,k[o]=0;}const P=new u$1({width:M,height:x,pixels:[g,k],mask:w});return P.updateStatistics(),P}

export { S, U, _, c, f, h, i, m, p };
