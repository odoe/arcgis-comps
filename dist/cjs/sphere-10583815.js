'use strict';

const request = require('./MapView-922b9f1e.js');
const lineSegment = require('./lineSegment-01513961.js');
require('./mat4f64-f8b0b0f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$1{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function i(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e$1(n)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=request.e$26();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$1(r,n){return request.t$2(r)&&(r=[]),r.push(n),r}function u(r,n){if(request.t$2(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!request.r(t)&&!t.visible}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:request.t$13(i.origin),direction:request.t$13(i.direction)}:{origin:request.n$13(),direction:request.n$13()}}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function k$1(i,n,o=d()){return request.r$14(o.origin,i),request.r$14(o.direction,n),o}function h(i,n){const r=request._$1(lineSegment.c.get(),request.j$8(lineSegment.c.get(),i.direction),request.c$14(lineSegment.c.get(),n,i.origin));return request.z$4(r,r)}function b(i,n,r){const t=request.z$4(i.direction,request.c$14(r,n,i.origin));return request.u$9(r,i.origin,request.d$11(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}new lineSegment.s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(n,r){return request.z$4(n,r)/request.s$7(n)}function f(r,s){const c=request.z$4(r,s)/(request.s$7(r)*request.s$7(s));return -request.l$15(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=request.s.getLogger("esri.geometry.support.sphere");function P(){return lineSegment.n()}function _(t,r=P()){return request.a$21(r,t)}function q(t,r){return lineSegment.r$1(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return lineSegment.r$1(t,r,n,s)}function T(t,r,n){return t!==n&&request.r$14(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(request.t$2(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=request.n$13();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,lineSegment.c.get());return request.u$9(n,r.origin,request.d$11(lineSegment.c.get(),r.direction,request.q$2(r.origin,s)/request.s$7(r.direction))),n}function F(t,r,n){const s=lineSegment.c.get(),i=lineSegment.f.get();request._$1(s,r.origin,r.direction);const a=E(t);request._$1(n,s,r.origin),request.d$11(n,n,1/request.s$7(n)*a);const u=J(t,r.origin),g=f(r.origin,n);return request.r$19(i),request.f$8(i,i,g+u,s),request.I$3(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=request.c$14(lineSegment.c.get(),r,L(t)),e=request.d$11(lineSegment.c.get(),s,t[3]/request.s$7(s));return request.u$9(n,e,L(t))}function I(t,r){const n=request.c$14(lineSegment.c.get(),r,L(t)),s=request.p$24(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=request.c$14(lineSegment.c.get(),n,L(t)),e=request.s$7(s),o=E(t),i=o+Math.abs(o-e);return request.l$15(o/i)}const K=request.n$13();function N(t,r,s,e){const o=request.c$14(K,r,L(t));switch(s){case 0:{const t=request.P$4(o,K)[2];return request.o$7(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=request.P$4(o,K),r=t[1],s=t[2],i=Math.sin(r);return request.o$7(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return request.j$8(e,o);default:return}}function Q(t,r){const n=request.c$14(Y,r,L(t));return request.s$7(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=request.d$11(Y,o,n-e);return request.u$9(s,r,i)}const X=request.n$13(),Y=request.n$13();Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

exports.C = C;
exports.P = P;
exports.c = c;
exports.d = d;
exports.e = e;
exports.f = f$1;
exports.h = h;
exports.i = i;
exports.l = l;
exports.r = r;
exports.u = u;
