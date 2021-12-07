'use strict';

const common = require('./common-41a349f2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t}function n(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function s(t,a,n,s,r,u,o){return t[0]=a,t[1]=n,t[2]=s,t[3]=r,t[4]=u,t[5]=o,t}function r(t,a){const n=a[0],s=a[1],r=a[2],u=a[3],o=a[4],c=a[5];let e=n*u-s*r;return e?(e=1/e,t[0]=u*e,t[1]=-s*e,t[2]=-r*e,t[3]=n*e,t[4]=(r*c-u*o)*e,t[5]=(s*o-n*c)*e,t):null}function u(t){return t[0]*t[3]-t[1]*t[2]}function o(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],c=a[4],e=a[5],i=n[0],h=n[1],M=n[2],f=n[3],b=n[4],l=n[5];return t[0]=s*i+u*h,t[1]=r*i+o*h,t[2]=s*M+u*f,t[3]=r*M+o*f,t[4]=s*b+u*l+c,t[5]=r*b+o*l+e,t}function c(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],c=a[4],e=a[5],i=Math.sin(n),h=Math.cos(n);return t[0]=s*h+u*i,t[1]=r*h+o*i,t[2]=s*-i+u*h,t[3]=r*-i+o*h,t[4]=c,t[5]=e,t}function e(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],c=a[4],e=a[5],i=n[0],h=n[1];return t[0]=s*i,t[1]=r*i,t[2]=u*h,t[3]=o*h,t[4]=c,t[5]=e,t}function i(t,a,n){const s=a[0],r=a[1],u=a[2],o=a[3],c=a[4],e=a[5],i=n[0],h=n[1];return t[0]=s,t[1]=r,t[2]=u,t[3]=o,t[4]=s*i+u*h+c,t[5]=r*i+o*h+e,t}function h(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=n,t[2]=-n,t[3]=s,t[4]=0,t[5]=0,t}function M(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t}function f(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t}function b(t){return "mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function l(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+1)}function m(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t}function d(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t}function p(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t}function x(t,a,n,s){return t[0]=a[0]+n[0]*s,t[1]=a[1]+n[1]*s,t[2]=a[2]+n[2]*s,t[3]=a[3]+n[3]*s,t[4]=a[4]+n[4]*s,t[5]=a[5]+n[5]*s,t}function y(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]}function q(a,n){const s=a[0],r=a[1],u=a[2],o=a[3],c=a[4],e=a[5],i=n[0],h=n[1],M=n[2],f=n[3],b=n[4],l=n[5];return Math.abs(s-i)<=common.a*Math.max(1,Math.abs(s),Math.abs(i))&&Math.abs(r-h)<=common.a*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(u-M)<=common.a*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-f)<=common.a*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(c-b)<=common.a*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(e-l)<=common.a*Math.max(1,Math.abs(e),Math.abs(l))}const _=o,j=d;Object.freeze({__proto__:null,copy:a,identity:n,set:s,invert:r,determinant:u,multiply:o,rotate:c,scale:e,translate:i,fromRotation:h,fromScaling:M,fromTranslation:f,str:b,frob:l,add:m,subtract:d,multiplyScalar:p,multiplyScalarAndAdd:x,exactEquals:y,equals:q,mul:_,sub:j});

exports.M = M;
exports.c = c;
exports.e = e;
exports.h = h;
exports.i = i;
exports.n = n;
exports.o = o;
exports.r = r;
