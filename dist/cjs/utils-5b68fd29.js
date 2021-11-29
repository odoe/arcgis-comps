'use strict';

const request = require('./MapView-1726f571.js');
const vec4f64 = require('./vec4f64-ccf8d057.js');
const lineSegment = require('./lineSegment-51eeda9b.js');
require('./mat4f64-f8b0b0f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:request.t$13(i.origin),direction:request.t$13(i.direction)}:{origin:request.n(),direction:request.n()}}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function k$1(i,n,o=d()){return request.r$1(o.origin,i),request.r$1(o.direction,n),o}function h(i,n){const r=request._$1(lineSegment.c.get(),request.j$9(lineSegment.c.get(),i.direction),request.c$2(lineSegment.c.get(),n,i.origin));return request.z(r,r)}function b(i,n,r){const t=request.z(i.direction,request.c$2(r,n,i.origin));return request.u$1(r,i.origin,request.d$2(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}new lineSegment.s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(n,r){return request.z(n,r)/request.s$9(n)}function f$1(r,s){const c=request.z(r,s)/(request.s$9(r)*request.s$9(s));return -request.l$17(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=request.s$2.getLogger("esri.geometry.support.sphere");function P(){return vec4f64.n()}function _(t,r=P()){return request.a$23(r,t)}function q(t,r){return vec4f64.r(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return vec4f64.r(t,r,n,s)}function T(t,r,n){return t!==n&&request.r$1(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(request.t(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=request.n();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,lineSegment.c.get());return request.u$1(n,r.origin,request.d$2(lineSegment.c.get(),r.direction,request.q$2(r.origin,s)/request.s$9(r.direction))),n}function F(t,r,n){const s=lineSegment.c.get(),i=lineSegment.f.get();request._$1(s,r.origin,r.direction);const a=E(t);request._$1(n,s,r.origin),request.d$2(n,n,1/request.s$9(n)*a);const u=J(t,r.origin),g=f$1(r.origin,n);return request.r$20(i),request.f$12(i,i,g+u,s),request.I$3(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=request.c$2(lineSegment.c.get(),r,L(t)),e=request.d$2(lineSegment.c.get(),s,t[3]/request.s$9(s));return request.u$1(n,e,L(t))}function I(t,r){const n=request.c$2(lineSegment.c.get(),r,L(t)),s=request.p$25(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=request.c$2(lineSegment.c.get(),n,L(t)),e=request.s$9(s),o=E(t),i=o+Math.abs(o-e);return request.l$17(o/i)}const K=request.n();function N(t,r,s,e){const o=request.c$2(K,r,L(t));switch(s){case 0:{const t=request.P$4(o,K)[2];return request.o$8(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=request.P$4(o,K),r=t[1],s=t[2],i=Math.sin(r);return request.o$8(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return request.j$9(e,o);default:return}}function Q(t,r){const n=request.c$2(Y,r,L(t));return request.s$9(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=request.d$2(Y,o,n-e);return request.u$1(s,r,i)}const X=request.n(),Y=request.n();Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=request.e$28();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(r,n){return request.t(r)&&(r=[]),r.push(n),r}function u(r,n){if(request.t(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!request.r(t)&&!t.visible}

exports.C = C;
exports.P = P;
exports.c = c;
exports.d = d;
exports.e = e;
exports.f = f;
exports.h = h;
exports.l = l;
exports.r = r;
exports.u = u;
