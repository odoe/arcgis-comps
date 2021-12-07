import { x } from './earcut-05cd758b.js';
import { f } from './geometry-7e07b1ba.js';
import { n } from './deduplicate-c3c4ee02.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(t){const o=l(t.rings,t.hasZ,1),s=[];let i=0,c=0;for(const e of o.polygons){const t=e.count,r=e.index,l=new Float64Array(o.position.buffer,3*r*o.position.BYTES_PER_ELEMENT,3*t),h=e.holeIndices.map((n=>n-r)),f=new Uint32Array(x(l,h,3));s.push({position:l,faces:f}),i+=l.length,c+=f.length;}const h=r(s,i,c),f=n(h.position.buffer,6,{originalIndices:h.faces});return h.position=new Float64Array(f.buffer),h.faces=f.indices,h}function r(n,t,e){if(1===n.length)return n[0];const o=new Float64Array(t),r=new Uint32Array(e);let l=0,s=0,i=0;for(const c of n){for(let n=0;n<c.position.length;n++)o[l++]=c.position[n];for(let n=0;n<c.faces.length;n++)r[s++]=c.faces[n]+i;i=l/3;}return {position:o,faces:r}}function l(n,t,e){const o=n.length,r=new Array(o),l=new Array(o),c=new Array(o);let h=0,f=0,g=0,a=0;for(let s=0;s<o;++s)a+=n[s].length;const u=new Float64Array(3*a);let p=0;for(let d=o-1;d>=0;d--){const a=n[d],y=1===e&&i(a);if(y&&1!==o)r[h++]=a;else {let n=a.length;for(let t=0;t<h;++t)n+=r[t].length;const e={index:p,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=a.length,a.length>0&&(c[g++]={index:p,count:a.length}),p=y?s(a,a.length-1,-1,u,p,a.length,t):s(a,0,1,u,p,a.length,t);for(let o=0;o<h;++o){const n=r[o];e.holeIndices[o]=p,e.pathLengths[o+1]=n.length,n.length>0&&(c[g++]={index:p,count:n.length}),p=s(n,0,1,u,p,n.length,t);}h=0,e.count>0&&(l[f++]=e);}}for(let i=0;i<h;++i){const n=r[i];n.length>0&&(c[g++]={index:p,count:n.length}),p=s(n,0,1,u,p,n.length,t);}return f<o&&(l.length=f),g<o&&(c.length=g),{position:u,polygons:l,outlines:c}}function s(n,t,e,o,r,l,s){r*=3;for(let i=0;i<l;++i){const l=n[t];o[r++]=l[0],o[r++]=l[1],o[r++]=s?l[2]:0,t+=e;}return r/3}function i(n){return !f(n,!1,!1)}

export { l, o };
