'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){const n=new Float32Array(4);return n[3]=1,n}function r(n){const r=new Float32Array(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r}function t(n,r,t,e){const a=new Float32Array(4);return a[0]=n,a[1]=r,a[2]=t,a[3]=e,a}function e(n,r){return new Float32Array(n,r,4)}Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e});

exports.e = e;
exports.n = n;
exports.r = r;
