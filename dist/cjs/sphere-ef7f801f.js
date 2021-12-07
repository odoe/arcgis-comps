'use strict';

const request = require('./messageBundle-8be88d04.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const mat4 = require('./mat4-f68486bc.js');
const common = require('./common-41a349f2.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:common.t$1(i.origin),direction:common.t$1(i.direction)}:{origin:common.n(),direction:common.n()}}function m$1(n,r){return request.l(n.origin,r.origin)&&request.l(n.direction,r.direction)}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function p(i,n,t=d()){return mathUtils.r(t.origin,i),mathUtils.c(t.direction,n,i),t}function k$1(i,n,o=d()){return mathUtils.r(o.origin,i),mathUtils.r(o.direction,n),o}function h$1(i,n){const r=mathUtils._(vectorStacks.c.get(),mathUtils.j$1(vectorStacks.c.get(),i.direction),mathUtils.c(vectorStacks.c.get(),n,i.origin));return mathUtils.z(r,r)}function b(i,n,r){const t=mathUtils.z(i.direction,mathUtils.c(r,n,i.origin));return mathUtils.u(r,i.origin,mathUtils.d(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}const S=new vectorStacks.s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n,o,s){const c=mathUtils.z(n,o)/mathUtils.z(n,n);return mathUtils.d(s,n,c)}function e(n,r){return mathUtils.z(n,r)/mathUtils.s(n)}function f(r,s){const c=mathUtils.z(r,s)/(mathUtils.s(r)*mathUtils.s(s));return -mathUtils.l(c)}function i(o,r,u){mathUtils.j$1(m,o),mathUtils.j$1(h,r);const a=mathUtils.z(m,h),e=mathUtils.l(a),f=mathUtils._(m,m,h);return mathUtils.z(f,u)<0?2*Math.PI-e:e}const m=common.n(),h=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=request.s$1.getLogger("esri.geometry.support.sphere");function P(){return vec4f64.n()}function _(t,r=P()){return mathUtils.a$1(r,t)}function q(t,r){return vec4f64.r(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return vec4f64.r(t,r,n,s)}function T(t,r,n){return t!==n&&mathUtils.r(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(request.t$1(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=common.n();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,vectorStacks.c.get());return mathUtils.u(n,r.origin,mathUtils.d(vectorStacks.c.get(),r.direction,mathUtils.q(r.origin,s)/mathUtils.s(r.direction))),n}function F(t,r,n){const s=vectorStacks.c.get(),i=vectorStacks.f.get();mathUtils._(s,r.origin,r.direction);const a=E(t);mathUtils._(n,s,r.origin),mathUtils.d(n,n,1/mathUtils.s(n)*a);const u=J(t,r.origin),g=f(r.origin,n);return mat4.r(i),mat4.f(i,i,g+u,s),mathUtils.I(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=mathUtils.c(vectorStacks.c.get(),r,L(t)),e=mathUtils.d(vectorStacks.c.get(),s,t[3]/mathUtils.s(s));return mathUtils.u(n,e,L(t))}function I(t,r){const n=mathUtils.c(vectorStacks.c.get(),r,L(t)),s=mathUtils.p$1(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=mathUtils.c(vectorStacks.c.get(),n,L(t)),e=mathUtils.s(s),o=E(t),i=o+Math.abs(o-e);return mathUtils.l(o/i)}const K=common.n();function N(t,r,s,e){const o=mathUtils.c(K,r,L(t));switch(s){case 0:{const t=mathUtils.P$1(o,K)[2];return mathUtils.o(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=mathUtils.P$1(o,K),r=t[1],s=t[2],i=Math.sin(r);return mathUtils.o(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return mathUtils.j$1(e,o);default:return}}function Q(t,r){const n=mathUtils.c(Y,r,L(t));return mathUtils.s(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=mathUtils.d(Y,o,n-e);return mathUtils.u(s,r,i)}const X=common.n(),Y=common.n(),Z=Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

exports.B = B;
exports.C = C;
exports.E = E;
exports.F = F;
exports.I = I;
exports.L = L;
exports.O = O;
exports.P = P;
exports.U = U;
exports.Z = Z;
exports._ = _;
exports.a = a;
exports.d = d;
exports.e = e;
exports.f = f;
exports.h = h$1;
exports.i = i;
exports.j = j;
exports.k = k;
exports.k$1 = k$1;
exports.l = l;
exports.m = m$1;
exports.p = p;
exports.q = q;
exports.w = w;
