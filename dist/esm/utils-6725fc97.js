import { L as u$1, N as d$1, O as z$1, gg as _$1, K as c$1, gd as j, gz as t, I as n, J as r$1, dG as s$1, gh as l$1, T as s$2, gM as a, t as t$1, iv as r$3, go as f$2, gr as I$1, gj as q$2, k8 as P$1, dF as o, k2 as p, he as e$1, r as r$4 } from './MapView-ac75aae8.js';
import { n as n$1, r as r$2 } from './vec4f64-c9cf6e2d.js';
import { s, c as c$2, f as f$3 } from './lineSegment-36b970d1.js';
import './mat4f64-f8b93042.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:t(i.origin),direction:t(i.direction)}:{origin:n(),direction:n()}}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function k$1(i,n,o=d()){return r$1(o.origin,i),r$1(o.direction,n),o}function h(i,n){const r=_$1(c$2.get(),j(c$2.get(),i.direction),c$1(c$2.get(),n,i.origin));return z$1(r,r)}function b(i,n,r){const t=z$1(i.direction,c$1(r,n,i.origin));return u$1(r,i.origin,d$1(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}new s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(n,r){return z$1(n,r)/s$1(n)}function f$1(r,s){const c=z$1(r,s)/(s$1(r)*s$1(s));return -l$1(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=s$2.getLogger("esri.geometry.support.sphere");function P(){return n$1()}function _(t,r=P()){return a(r,t)}function q(t,r){return r$2(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return r$2(t,r,n,s)}function T(t,r,n){return t!==n&&r$1(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(t$1(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=n();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,c$2.get());return u$1(n,r.origin,d$1(c$2.get(),r.direction,q$2(r.origin,s)/s$1(r.direction))),n}function F(t,r,n){const s=c$2.get(),i=f$3.get();_$1(s,r.origin,r.direction);const a=E(t);_$1(n,s,r.origin),d$1(n,n,1/s$1(n)*a);const u=J(t,r.origin),g=f$1(r.origin,n);return r$3(i),f$2(i,i,g+u,s),I$1(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=c$1(c$2.get(),r,L(t)),e=d$1(c$2.get(),s,t[3]/s$1(s));return u$1(n,e,L(t))}function I(t,r){const n=c$1(c$2.get(),r,L(t)),s=p(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=c$1(c$2.get(),n,L(t)),e=s$1(s),o=E(t),i=o+Math.abs(o-e);return l$1(o/i)}const K=n();function N(t,r,s,e){const o$1=c$1(K,r,L(t));switch(s){case 0:{const t=P$1(o$1,K)[2];return o(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=P$1(o$1,K),r=t[1],s=t[2],i=Math.sin(r);return o(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return j(e,o$1);default:return}}function Q(t,r){const n=c$1(Y,r,L(t));return s$1(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=d$1(Y,o,n-e);return u$1(s,r,i)}const X=n(),Y=n();Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=e$1();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(r,n){return t$1(r)&&(r=[]),r.push(n),r}function u(r,n){if(t$1(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!r$4(t)&&!t.visible}

export { C, P, c, d, e, f, h, l, r, u };
