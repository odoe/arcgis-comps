import{cB as t,dB as n}from"./p-5420851c.js";const r=(()=>{if(!("document"in t))return()=>null;const n=document.createElement("canvas"),r=n.getContext("2d");return n.height=512,n.width=1,t=>{r.clearRect(0,0,1,n.height);const o=r.createLinearGradient(0,0,0,n.height);for(const{ratio:n,color:r}of t.colorStops)o.addColorStop(Math.max(n,.001),`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`);return r.fillStyle=o,r.fillRect(0,0,1,n.height),r.getImageData(0,0,1,n.height).data}})();function o(t,n,r,o){const{blurRadius:a,fieldOffset:e,field:c}=n,f=new Float64Array(r*o),i=function(t){const n=Math.round(3*t),r=2*t*t,o=new Float64Array(2*n+1);for(let a=0;a<=o.length;a++)o[a]=Math.exp(-((a-n)**2)/r)/Math.sqrt(2*Math.PI)*(t/2);return o}(a),s=Math.round(3*a);let u,l=Number.NEGATIVE_INFINITY;const h=function(t,n){return null!=t?"string"==typeof n?n=>-1*+n.readAttribute(t):r=>+r.readAttribute(t)+n:()=>1}(c,e),M=new Set;for(const n of t){const t=n.getCursor();for(;t.next();){const n=t.getObjectId();if(M.has(n))continue;M.add(n);const a=t.readLegacyPointGeometry(),e=128;if(a.x<-e||a.x>=r+e||a.y<-e||a.y>o+e)continue;const c=+h(t),w=Math.round(a.x)-s,y=Math.round(a.y)-s,d=Math.max(0,w),m=Math.max(0,y),A=Math.min(o,Math.round(a.y)+s),b=Math.min(r,Math.round(a.x)+s);for(let t=m;t<A;t++){const n=i[t-y];for(let o=d;o<b;o++)u=f[t*r+o]+=n*i[o-w]*c,u>l&&(l=u)}}}return{matrix:f.buffer,max:l}}function a(t,r,o,a,e,c){t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r);const f=t.getImageData(0,0,r,r);o&&a&&f.data.set(new Uint8ClampedArray(function(t,r,o,a,e){const c=new Uint32Array(t*t),f="buffer"in r?r:new Float64Array(r),i="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),s=i.length/(e-a);for(let t=0;t<f.length;t++){const r=Math.floor((f[t]-a)*s);c[t]=i[n(r,0,i.length-1)]}return c.buffer}(r,o,a,e,c))),t.putImageData(f,0,0)}export{a,r as n,o}