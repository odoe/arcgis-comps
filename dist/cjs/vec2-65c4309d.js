'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n){return t[0]=n[0],t[1]=n[1],t}function r(t,n,a){return t[0]=n,t[1]=a,t}function s(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function o(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function u(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function c(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function e(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function i(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function f(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function M(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function h(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function l(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function m(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t}function d(t,n){const a=n[0]-t[0],r=n[1]-t[1];return Math.sqrt(a*a+r*r)}function q(t,n){const a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function b(t){const n=t[0],a=t[1];return Math.sqrt(n*n+a*a)}function p(t){const n=t[0],a=t[1];return n*n+a*a}function x(t,n){return t[0]=-n[0],t[1]=-n[1],t}function g(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function v(t,n){const a=n[0],r=n[1];let s=a*a+r*r;return s>0&&(s=1/Math.sqrt(s),t[0]=n[0]*s,t[1]=n[1]*s),t}function j(t,n){return t[0]*n[0]+t[1]*n[1]}function A(t,n,a){const r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t}function _(t,n,a,r){const s=n[0],o=n[1];return t[0]=s+r*(a[0]-s),t[1]=o+r*(a[1]-o),t}function y(t,a){a=a||1;const r=2*unitUtils.t$2()*Math.PI;return t[0]=Math.cos(r)*a,t[1]=Math.sin(r)*a,t}function z(t,n,a){const r=n[0],s=n[1];return t[0]=a[0]*r+a[2]*s,t[1]=a[1]*r+a[3]*s,t}function D(t,n,a){const r=n[0],s=n[1];return t[0]=a[0]*r+a[2]*s+a[4],t[1]=a[1]*r+a[3]*s+a[5],t}function E(t,n,a){const r=n[0],s=n[1];return t[0]=a[0]*r+a[3]*s+a[6],t[1]=a[1]*r+a[4]*s+a[7],t}function I(t,n,a){const r=n[0],s=n[1];return t[0]=a[0]*r+a[4]*s+a[12],t[1]=a[1]*r+a[5]*s+a[13],t}function L(t,n,a,r){const s=n[0]-a[0],o=n[1]-a[1],u=Math.sin(r),c=Math.cos(r);return t[0]=s*c-o*u+a[0],t[1]=s*u+o*c+a[1],t}function P(t,n){const a=t[0],r=t[1],s=n[0],o=n[1];let u=a*a+r*r;u>0&&(u=1/Math.sqrt(u));let c=s*s+o*o;c>0&&(c=1/Math.sqrt(c));const e=(a*s+r*o)*u*c;return e>1?0:e<-1?Math.PI:Math.acos(e)}function O(t){return "vec2("+t[0]+", "+t[1]+")"}function k(t,n){return t[0]===n[0]&&t[1]===n[1]}function w(n,a){const r=n[0],s=n[1],o=a[0],u=a[1];return Math.abs(r-o)<=unitUtils.a$7*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(s-u)<=unitUtils.a$7*Math.max(1,Math.abs(s),Math.abs(u))}function B(t,n,a,r,s){let o=n[0]-a[0],u=n[1]-a[1];const c=(r[0]*o+r[1]*u)*(s-1);return o=r[0]*c,u=r[1]*c,t[0]=n[0]+o,t[1]=n[1]+u,t}const C=b,F=o,G=u,H=c,J=d,K=q,N=p;Object.freeze({__proto__:null,copy:a,set:r,add:s,subtract:o,multiply:u,divide:c,ceil:e,floor:i,min:f,max:M,round:h,scale:l,scaleAndAdd:m,distance:d,squaredDistance:q,length:b,squaredLength:p,negate:x,inverse:g,normalize:v,dot:j,cross:A,lerp:_,random:y,transformMat2:z,transformMat2d:D,transformMat3:E,transformMat4:I,rotate:L,angle:P,str:O,exactEquals:k,equals:w,projectAndScale:B,len:C,sub:F,mul:G,div:H,dist:J,sqrDist:K,sqrLen:N});

exports.A = A;
exports.D = D;
exports.F = F;
exports.a = a;
exports.b = b;
exports.d = d;
exports.j = j;
exports.l = l;
exports.o = o;
exports.q = q;
exports.r = r;
exports.s = s;
exports.v = v;
exports.x = x;
