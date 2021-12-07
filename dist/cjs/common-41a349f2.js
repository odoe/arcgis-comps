'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(){return [0,0,0]}function t$1(n){return [n[0],n[1],n[2]]}function r$1(n,t,r){return [n,t,r]}function e$1(t){const r=n$1(),e=Math.min(3,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,3)}function a$1(){return n$1()}function o$1(){return r$1(1,1,1)}function s$1(){return r$1(1,0,0)}function c(){return r$1(0,1,0)}function i(){return r$1(0,0,1)}const f=a$1(),l=o$1(),_=s$1(),N=c(),O=i();Object.freeze({__proto__:null,create:n$1,clone:t$1,fromValues:r$1,fromArray:e$1,createView:u,zeros:a$1,ones:o$1,unitX:s$1,unitY:c,unitZ:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:N,UNIT_Z:O});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=1e-6,t=Math.random,e=Math.PI/180,n=180/Math.PI;function s(a){return a*e}function o(a){return a*n}function r(t,e){return Math.abs(t-e)<=a*Math.max(1,Math.abs(t),Math.abs(e))}Object.freeze({__proto__:null,EPSILON:a,RANDOM:t,toRadian:s,toDegree:o,equals:r});

exports.a = a;
exports.e = e$1;
exports.f = f;
exports.i = i;
exports.l = l;
exports.n = n$1;
exports.o = o;
exports.r = r$1;
exports.s = s;
exports.t = t;
exports.t$1 = t$1;
exports.u = u;
