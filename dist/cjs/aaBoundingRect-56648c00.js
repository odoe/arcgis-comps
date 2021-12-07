'use strict';

const request = require('./messageBundle-8be88d04.js');
const mathUtils = require('./mathUtils-af6066f0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(n){return n}function u(n=J){return i([n[0],n[1],n[2],n[3]])}function e(n){return i([n[0],n[1],n[2],n[3]])}function a(n,t){return n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3]),n}function o(n,t,r,i,e=u()){return e[0]=n,e[1]=t,e[2]=r,e[3]=i,e}function c(n,t=u()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function m(n,t){return new request.M({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function f(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1]);}function h(n,r,i){if(request.t$1(r))a(i,n);else if("length"in r)C(r)?(i[0]=Math.min(n[0],r[0]),i[1]=Math.min(n[1],r[1]),i[2]=Math.max(n[2],r[2]),i[3]=Math.max(n[3],r[3])):2!==r.length&&3!==r.length||(i[0]=Math.min(n[0],r[0]),i[1]=Math.min(n[1],r[1]),i[2]=Math.max(n[2],r[0]),i[3]=Math.max(n[3],r[1]));else switch(r.type){case"extent":i[0]=Math.min(n[0],r.xmin),i[1]=Math.min(n[1],r.ymin),i[2]=Math.max(n[2],r.xmax),i[3]=Math.max(n[3],r.ymax);break;case"point":i[0]=Math.min(n[0],r.x),i[1]=Math.min(n[1],r.y),i[2]=Math.max(n[2],r.x),i[3]=Math.max(n[3],r.y);}}function x(n,t,r=n){const i=t.length;let u=n[0],e=n[1],a=n[2],o=n[3];for(let c=0;c<i;c++){const n=t[c];u=Math.min(u,n[0]),e=Math.min(e,n[1]),a=Math.max(a,n[0]),o=Math.max(o,n[1]);}return r[0]=u,r[1]=e,r[2]=a,r[3]=o,r}function M(n){for(let t=0;t<4;t++)if(!isFinite(n[t]))return !1;return !0}function s(n){return request.t$1(n)||n[0]>=n[2]?0:n[2]-n[0]}function l(n){return n[1]>=n[3]?0:n[3]-n[1]}function y(n){return s(n)*l(n)}function p(n,t=[0,0]){return t[0]=(n[0]+n[2])/2,t[1]=(n[1]+n[3])/2,t}function b(n,t){return F(n,t[0],t[1])}function g(n,t){const r=t[3],i=.5*(n[0]+n[2]),u=Math.abs(t[0]-i),e=.5*(n[2]-n[0]);if(u>r+e)return !1;const a=.5*(n[1]+n[3]),o=.5*(n[3]-n[1]),c=Math.abs(t[1]-a);if(c>r+o)return !1;if(u<e||c<o)return !0;const m=u-e,f=c-o;return m*m+f*f<=r*r}function j(n,t){return F(n,t.x,t.y)}function F(n,t,r){return t>=n[0]&&r>=n[1]&&t<=n[2]&&r<=n[3]}function w(n,t,r){return t[0]>=n[0]-r&&t[1]>=n[1]-r&&t[0]<=n[2]+r&&t[1]<=n[3]+r}function k(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function q(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function E(r,i,u){if(request.t$1(i))return a(u,r);const e=i[0],o=i[1],c=i[2],m=i[3];return u[0]=mathUtils.e(r[0],e,c),u[1]=mathUtils.e(r[1],o,m),u[2]=mathUtils.e(r[2],e,c),u[3]=mathUtils.e(r[3],o,m),u}function R(n,t){const r=(n[0]+n[2])/2,i=(n[1]+n[3])/2,u=Math.max(Math.abs(t[0]-r)-s(n)/2,0),e=Math.max(Math.abs(t[1]-i)-l(n)/2,0);return Math.sqrt(u*u+e*e)}function d(n,t,r,i=n){return i[0]=n[0]+t,i[1]=n[1]+r,i[2]=n[2]+t,i[3]=n[3]+r,i}function B(n){return n?a(n,I):u(I)}function C(n){return null!=n&&4===n.length}function D(n){return !(0!==s(n)&&isFinite(n[0])||0!==l(n)&&isFinite(n[1]))}function G(n,t){return C(n)&&C(t)?n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]:n===t}const H=i([-1/0,-1/0,1/0,1/0]),I=i([1/0,1/0,-1/0,-1/0]),J=i([0,0,0,0]);

exports.B = B;
exports.D = D;
exports.E = E;
exports.F = F;
exports.G = G;
exports.H = H;
exports.I = I;
exports.M = M;
exports.R = R;
exports.a = a;
exports.b = b;
exports.c = c;
exports.d = d;
exports.e = e;
exports.f = f;
exports.g = g;
exports.h = h;
exports.j = j;
exports.k = k;
exports.l = l;
exports.m = m;
exports.o = o;
exports.p = p;
exports.q = q;
exports.s = s;
exports.u = u;
exports.w = w;
exports.x = x;
exports.y = y;
