import{bB as t}from"./p-9ae46e68.js";import{F as n}from"./p-566b0715.js";const r=(()=>{if(!("document"in t))return()=>null;const n=document.createElement("canvas"),r=n.getContext("2d");return n.height=512,n.width=1,t=>{r.clearRect(0,0,1,n.height);const o=r.createLinearGradient(0,0,0,n.height);for(const{ratio:n,color:r}of t.colorStops)o.addColorStop(Math.max(n,.001),`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`);return r.fillStyle=o,r.fillRect(0,0,1,n.height),r.getImageData(0,0,1,n.height).data}})();function o(t,n,r,o){const{blurRadius:a,fieldOffset:e,field:f}=n,c=new Float64Array(r*o),i=function(t){const n=Math.round(3*t),r=2*t*t,o=new Float64Array(2*n+1);for(let a=0;a<=o.length;a++)o[a]=Math.exp(-((a-n)**2)/r)/Math.sqrt(2*Math.PI)*(t/2);return o}(a),s=Math.round(3*a);let u,l=Number.NEGATIVE_INFINITY;const h=function(t,n){return null!=t?"string"==typeof n?n=>-1*+n.readAttribute(t):r=>+r.readAttribute(t)+n:()=>1}(f,e),M=new Set;for(const n of t){const t=n.getCursor();for(;t.next();){const n=t.getObjectId();if(M.has(n))continue;M.add(n);const a=t.readLegacyPointGeometry(),e=128;if(a.x<-e||a.x>=r+e||a.y<-e||a.y>o+e)continue;const f=+h(t),m=Math.round(a.x)-s,w=Math.round(a.y)-s,y=Math.max(0,m),A=Math.max(0,w),b=Math.min(o,Math.round(a.y)+s),d=Math.min(r,Math.round(a.x)+s);for(let t=A;t<b;t++){const n=i[t-w];for(let o=y;o<d;o++)u=c[t*r+o]+=n*i[o-m]*f,u>l&&(l=u)}}}return{matrix:c.buffer,max:l}}function a(t,r,o,a,e,f){t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r);const c=t.getImageData(0,0,r,r);o&&a&&c.data.set(new Uint8ClampedArray(function(t,r,o,a,e){const f=new Uint32Array(t*t),c="buffer"in r?r:new Float64Array(r),i="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),s=i.length/(e-a);for(let t=0;t<c.length;t++){const r=Math.floor((c[t]-a)*s);f[t]=i[n(r,0,i.length-1)]}return f.buffer}(r,o,a,e,f))),t.putImageData(c,0,0)}export{a,r as n,o}