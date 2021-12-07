import { C as l$1, c as s$2, af as t$1 } from './messageBundle-f75b4090.js';
import { u, d as d$1, z as z$1, r, c, _ as _$1, a as j$1, s as s$1, l as l$2, B as a$1, I as I$1, q as q$2, $ as P$1, o, i as p$1 } from './mathUtils-e16f9389.js';
import { r as r$2, f as f$1 } from './mat4-f34c6460.js';
import { b as t, n } from './common-d5b993de.js';
import { n as n$1, r as r$1 } from './vec4f64-2ec4ac08.js';
import { s, c as c$1, f as f$2 } from './vectorStacks-9205ea46.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:t(i.origin),direction:t(i.direction)}:{origin:n(),direction:n()}}function m$1(n,r){return l$1(n.origin,r.origin)&&l$1(n.direction,r.direction)}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function p(i,n,t=d()){return r(t.origin,i),c(t.direction,n,i),t}function k$1(i,n,o=d()){return r(o.origin,i),r(o.direction,n),o}function h$1(i,n){const r=_$1(c$1.get(),j$1(c$1.get(),i.direction),c(c$1.get(),n,i.origin));return z$1(r,r)}function b(i,n,r){const t=z$1(i.direction,c(r,n,i.origin));return u(r,i.origin,d$1(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}const S=new s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n,o,s){const c=z$1(n,o)/z$1(n,n);return d$1(s,n,c)}function e(n,r){return z$1(n,r)/s$1(n)}function f(r,s){const c=z$1(r,s)/(s$1(r)*s$1(s));return -l$2(c)}function i(o,r,u){j$1(m,o),j$1(h,r);const a=z$1(m,h),e=l$2(a),f=_$1(m,m,h);return z$1(f,u)<0?2*Math.PI-e:e}const m=n(),h=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=s$2.getLogger("esri.geometry.support.sphere");function P(){return n$1()}function _(t,r=P()){return a$1(r,t)}function q(t,r){return r$1(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return r$1(t,r,n,s)}function T(t,r$1,n){return t!==n&&r(n,t),n[3]=t[3]+r$1,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(t$1(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=n();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,c$1.get());return u(n,r.origin,d$1(c$1.get(),r.direction,q$2(r.origin,s)/s$1(r.direction))),n}function F(t,r,n){const s=c$1.get(),i=f$2.get();_$1(s,r.origin,r.direction);const a=E(t);_$1(n,s,r.origin),d$1(n,n,1/s$1(n)*a);const u=J(t,r.origin),g=f(r.origin,n);return r$2(i),f$1(i,i,g+u,s),I$1(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=c(c$1.get(),r,L(t)),e=d$1(c$1.get(),s,t[3]/s$1(s));return u(n,e,L(t))}function I(t,r){const n=c(c$1.get(),r,L(t)),s=p$1(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=c(c$1.get(),n,L(t)),e=s$1(s),o=E(t),i=o+Math.abs(o-e);return l$2(o/i)}const K=n();function N(t,r,s,e){const o$1=c(K,r,L(t));switch(s){case 0:{const t=P$1(o$1,K)[2];return o(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=P$1(o$1,K),r=t[1],s=t[2],i=Math.sin(r);return o(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return j$1(e,o$1);default:return}}function Q(t,r){const n=c(Y,r,L(t));return s$1(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=d$1(Y,o,n-e);return u(s,r,i)}const X=n(),Y=n(),Z=Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

export { B, C, E, F, I, L, O, P, U, Z, _, k$1 as a, a as b, d, e, f, h$1 as h, i, j, k, l, m$1 as m, p, q, w };
