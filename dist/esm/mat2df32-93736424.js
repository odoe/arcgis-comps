/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){const n=new Float32Array(6);return n[0]=1,n[3]=1,n}function t(n){const t=new Float32Array(6);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function r(n,t,r,o,a,e){const c=new Float32Array(6);return c[0]=n,c[1]=t,c[2]=r,c[3]=o,c[4]=a,c[5]=e,c}function o(n,t){return new Float32Array(n,t,6)}function a(n,t,r,o){const a=t[o],e=t[o+1];n[o]=r[0]*a+r[2]*e+r[4],n[o+1]=r[1]*a+r[3]*e+r[5];}function e(n,t,r,o=0,e=0,c=2){const s=e||t.length/c;for(let f=o;f<s;f++){a(n,t,r,f*c);}}Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,createView:o,transform:a,transformMany:e});

export { e, n };
