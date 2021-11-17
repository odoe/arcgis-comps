'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const mat4 = require('./mat4-1439266d.js');
const lineSegment = require('./lineSegment-25e194bd.js');
require('./vec2-65c4309d.js');
require('./vec2f64-c36614be.js');
require('./mat4f64-f8b0b0f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:unitUtils.t$4(i.origin),direction:unitUtils.t$4(i.direction)}:{origin:unitUtils.n$4(),direction:unitUtils.n$4()}}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function k$1(i,n,o=d()){return unitUtils.r$8(o.origin,i),unitUtils.r$8(o.direction,n),o}function h(i,n){const r=unitUtils._(lineSegment.c.get(),unitUtils.j$3(lineSegment.c.get(),i.direction),unitUtils.c$16(lineSegment.c.get(),n,i.origin));return unitUtils.z$2(r,r)}function b(i,n,r){const t=unitUtils.z$2(i.direction,unitUtils.c$16(r,n,i.origin));return unitUtils.u$3(r,i.origin,unitUtils.d$2(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}new lineSegment.s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(n,r){return unitUtils.z$2(n,r)/unitUtils.s$2(n)}function f$1(r,s){const c=unitUtils.z$2(r,s)/(unitUtils.s$2(r)*unitUtils.s$2(s));return -unitUtils.l$5(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=request.s$2.getLogger("esri.geometry.support.sphere");function P(){return lineSegment.n()}function _(t,r=P()){return unitUtils.a$11(r,t)}function q(t,r){return lineSegment.r$1(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return lineSegment.r$1(t,r,n,s)}function T(t,r,n){return t!==n&&unitUtils.r$8(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(request.t(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=unitUtils.n$4();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,lineSegment.c.get());return unitUtils.u$3(n,r.origin,unitUtils.d$2(lineSegment.c.get(),r.direction,unitUtils.q(r.origin,s)/unitUtils.s$2(r.direction))),n}function F(t,r,n){const s=lineSegment.c.get(),i=lineSegment.f.get();unitUtils._(s,r.origin,r.direction);const a=E(t);unitUtils._(n,s,r.origin),unitUtils.d$2(n,n,1/unitUtils.s$2(n)*a);const u=J(t,r.origin),g=f$1(r.origin,n);return mat4.r(i),mat4.f(i,i,g+u,s),unitUtils.I$2(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=unitUtils.c$16(lineSegment.c.get(),r,L(t)),e=unitUtils.d$2(lineSegment.c.get(),s,t[3]/unitUtils.s$2(s));return unitUtils.u$3(n,e,L(t))}function I(t,r){const n=unitUtils.c$16(lineSegment.c.get(),r,L(t)),s=unitUtils.p$5(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=unitUtils.c$16(lineSegment.c.get(),n,L(t)),e=unitUtils.s$2(s),o=E(t),i=o+Math.abs(o-e);return unitUtils.l$5(o/i)}const K=unitUtils.n$4();function N(t,r,s,e){const o=unitUtils.c$16(K,r,L(t));switch(s){case 0:{const t=unitUtils.P$3(o,K)[2];return unitUtils.o$6(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=unitUtils.P$3(o,K),r=t[1],s=t[2],i=Math.sin(r);return unitUtils.o$6(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return unitUtils.j$3(e,o);default:return}}function Q(t,r){const n=unitUtils.c$16(Y,r,L(t));return unitUtils.s$2(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=unitUtils.d$2(Y,o,n-e);return unitUtils.u$3(s,r,i)}const X=unitUtils.n$4(),Y=unitUtils.n$4();Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=request.e$4();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function i(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e(n)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(r,n){return request.t(r)&&(r=[]),r.push(n),r}function u(r,n){if(request.t(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!request.r(t)&&!t.visible}

exports.C = C;
exports.P = P;
exports.c = c;
exports.d = d;
exports.e = e$1;
exports.f = f;
exports.h = h;
exports.i = i;
exports.l = l;
exports.r = r;
exports.u = u;