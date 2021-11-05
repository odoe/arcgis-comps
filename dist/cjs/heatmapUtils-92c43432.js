'use strict';

const request = require('./MapView-1195e7f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=(()=>{if(!("document"in request.e$10))return ()=>null;const e=document.createElement("canvas"),n=e.getContext("2d"),r=512;return e.height=r,e.width=1,t=>{n.clearRect(0,0,1,e.height);const r=n.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:n}of t.colorStops)r.addColorStop(Math.max(e,.001),`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`);return n.fillStyle=r,n.fillRect(0,0,1,e.height),n.getImageData(0,0,1,e.height).data}})();function o(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:i}=e,c=new Float64Array(n*r),l=f(o),s=Math.round(3*o);let h,d=Number.NEGATIVE_INFINITY;const m=u(i,a),g=new Set;for(const f of t){const t=f.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-s,u=Math.round(o.y)-s,y=Math.max(0,f),M=Math.max(0,u),x=Math.min(r,Math.round(o.y)+s),b=Math.min(n,Math.round(o.x)+s);for(let t=M;t<x;t++){const e=l[t-u];for(let r=y;r<b;r++){const o=l[r-f];h=c[t*n+r]+=e*o*i,h>d&&(d=h);}}}}return {matrix:c.buffer,max:d}}function a(t,e,n,r,o,a){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(i(e,n,r,o,a))),t.putImageData(f,0,0);}function i(t,n,r,o,a){const i=new Uint32Array(t*t),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const t=f[l],n=Math.floor((t-o)*u);i[l]=c[request.e$13(n,0,c.length-1)];}return i.buffer}function f(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function u(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}

exports.a = a;
exports.n = n;
exports.o = o;
