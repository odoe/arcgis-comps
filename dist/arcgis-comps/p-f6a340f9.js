function n(){const n=new Float32Array(4);return n[3]=1,n}function r(n){const r=new Float32Array(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r}function t(n,r){return new Float32Array(n,r,4)}Object.freeze({__proto__:null,create:n,clone:r,fromValues:function(n,r,t,e){const o=new Float32Array(4);return o[0]=n,o[1]=r,o[2]=t,o[3]=e,o},createView:t});export{t as e,n,r}