'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const request = require('./messageBundle-8be88d04.js');
const common = require('./common-41a349f2.js');
require('./sphere-ef7f801f.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(n=X){return [n[0],n[1],n[2],n[3]]}function M(n,t,r,c){return j(n,t,r,c,vectorStacks.r.get())}function b(n,t=p()){return j(n[0],n[1],n[2],n[3],t)}function j(n,t,r,c,o=p()){return o[0]=n,o[1]=t,o[2]=r,o[3]=c,o}function k(n,t,c){return mathUtils.r(c,n),c[3]=t,c}function v(n,t,r){const c=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],o=Math.abs(c-1)>1e-5&&c>1e-12?1/Math.sqrt(c):1;return r[0]=t[0]*o,r[1]=t[1]*o,r[2]=t[2]*o,r[3]=-(r[0]*n[0]+r[1]*n[1]+r[2]*n[2]),r}function y(n,t,r,c=p()){const o=r[0]-t[0],e=r[1]-t[1],u=r[2]-t[2],i=n[0]-t[0],f=n[1]-t[1],s=n[2]-t[2],a=e*s-u*f,g=u*i-o*s,m=o*f-e*i,h=a*a+g*g+m*m,M=Math.abs(h-1)>1e-5&&h>1e-12?1/Math.sqrt(h):1;c[0]=a*M,c[1]=g*M,c[2]=m*M,c[3]=-(c[0]*n[0]+c[1]*n[1]+c[2]*n[2]);}function l(n,t,r,i,f){if(n.count<3)return !1;n.getVec(r,q);let s=i,a=!1;for(;s<n.count-1&&!a;)n.getVec(s,x),s++,a=!mathUtils.F(q,x);if(!a)return !1;for(s=Math.max(s,f),a=!1;s<n.count&&!a;)n.getVec(s,S),s++,mathUtils.c(U,q,x),mathUtils.j$1(U,U),mathUtils.c(w,x,S),mathUtils.j$1(w,w),a=!mathUtils.F(q,S)&&!mathUtils.F(x,S)&&Math.abs(mathUtils.z(U,w))<V;return a?(y(q,x,S,t),!0):(0!==r||1!==i||2!==f)&&l(n,t,0,1,2)}const V=.99619469809,q=common.n(),x=common.n(),S=common.n(),U=common.n(),w=common.n();function z(n,t,r){return n!==r&&b(n,r),r[3]=-mathUtils.z(W(r),t),r}function A(n,t){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function B(n,t,r,c){return mathUtils._(S,t,n),v(r,S,c)}function C(n,t,r,c){return T(n,t,mathUtils.c(vectorStacks.c.get(),r,t),Y,c)}function D(n,r,c){return !!request.r(r)&&T(n,r.origin,r.direction,Z,c)}function E(n,t,r){return T(n,t.origin,t.vector,0,r)}function F(n,t,r){return T(n,t.origin,t.vector,1,r)}function I(n,t){return R(n,t)>=0}function K(n,t){const r=t[0],c=t[1],o=t[2],e=t[3],u=t[4],i=t[5];return n[0]*(n[0]>0?r:e)+n[1]*(n[1]>0?c:u)+n[2]*(n[2]>0?o:i)+n[3]>=0}function L(n,t){const r=mathUtils.z(W(n),t.ray.direction),c=-R(n,t.ray.origin);if(c<0&&r>=0)return !1;if(r>-1e-6&&r<1e-6)return c>0;if((c<0||r<0)&&!(c<0&&r<0))return !0;const o=c/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function N(n,t){const r=mathUtils.z(W(n),t.ray.direction),c=-R(n,t.ray.origin);if(r>-1e-6&&r<1e-6)return c>0;const o=c/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function O(n,t,r){const c=mathUtils.d(vectorStacks.c.get(),W(n),-n[3]),e=P(n,mathUtils.c(vectorStacks.c.get(),t,c),vectorStacks.c.get());return mathUtils.u(r,e,c),r}function P(n,t,r){const c=mathUtils.d(vectorStacks.c.get(),W(n),mathUtils.z(W(n),t));return mathUtils.c(r,t,c),r}function R(n,t){return mathUtils.z(W(n),t)+n[3]}function T(t,r,c,o,e){const i=mathUtils.z(W(t),c);if(0===i)return !1;let a=-(mathUtils.z(W(t),r)+t[3])/i;return 1&o&&(a=mathUtils.e(a,0,1)),!(!(4&o)&&a<0||!(8&o)&&a>1)&&(mathUtils.u(e,r,mathUtils.d(e,c,a)),!0)}function W(n){return n}const X=[0,0,1,0],Y=12,Z=8;

exports.A = A;
exports.B = B;
exports.C = C;
exports.D = D;
exports.E = E;
exports.F = F;
exports.I = I;
exports.K = K;
exports.L = L;
exports.M = M;
exports.N = N;
exports.O = O;
exports.P = P;
exports.R = R;
exports.W = W;
exports.b = b;
exports.j = j;
exports.k = k;
exports.l = l;
exports.p = p;
exports.v = v;
exports.y = y;
exports.z = z;
