import { ar as e$3, g as t, A as r$3, P as l$3, f as s$3 } from './jsxFactory-a3b6abde.js';
import { r as r$1, e as e$4, n as n$3, h as h$3, o, f as f$4 } from './mat4-3acd3594.js';
import { e as e$5 } from './mat4f64-f06bdb4b.js';
import { b as e$2, a4 as n$1, da as y$1, cq as t$1, b9 as r$4, aW as c$1, aS as _$1, aR as j$3, aQ as z$2, aU as u$1, aG as d$2, aT as s$2, aX as l$4, cw as a$1, ch as q$3, cm as I$1, db as p$3, dc as P$1, aP as o$2 } from './Graphic-08cda9ca.js';
import { r as r$2 } from './vec2-42a7347f.js';
import { n as n$2 } from './vec2f64-503345b4.js';
import { n, c as c$2, s as s$1, r as r$5, f as f$3 } from './lineSegment-a640b054.js';
import { o as o$1 } from './doublePrecisionUtils-d9dd3556.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=n();class e$1{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function i$1(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e$1(n)}}function f$2(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack));}function h$2(n){return e$2(Math.round(32767*n),-32767,32767)}function M(t,n){const r=Math.abs(t[0]),o=Math.abs(t[1]),a=1/(r+o+Math.abs(t[2])),u=r*a,c=o*a,s=Math.min(t[2]*a,0);n[0]=(t[0]<0?-1:1)*(u-s),n[1]=(t[1]<0?-1:1)*(c-s);}function m$2(t,n){return void 0===t?n:t}function l$2(t){return [((t=Math.floor(t))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function g$1(n){return "0x"+((e$2(Math.round(255*n[0]),0,255)<<16)+(e$2(Math.round(255*n[1]),0,255)<<8)+e$2(Math.round(255*n[2]),0,255)).toString(16)}function k$2(t){const n=t.toString(16);return "00000000".substr(0,8-n.length)+n}function p$2(t,n,r,o,u,c,s,e,i=n$1()){const f=1e-5,h=o[s]-r[c],M=o[s+1]-r[c+1],m=o[s+2]-r[c+2],l=u[e]-r[c],g=u[e+1]-r[c+1],k=u[e+2]-r[c+2],p=n[1]*k-g*n[2],j=n[2]*l-k*n[0],v=n[0]*g-l*n[1],d=h*p+M*j+m*v;if(d>-f&&d<f)return !1;const w=1/d,b=t[0]-r[c],q=t[1]-r[c+1],x=t[2]-r[c+2];if(i[1]=w*(b*p+q*j+x*v),i[1]<0||i[1]>1)return !1;const E=q*m-M*x,S=x*h-m*b,y=b*M-h*q;return i[2]=w*(n[0]*E+n[1]*S+n[2]*y),!(i[2]<0||i[1]+i[2]>1)&&(i[0]=w*(l*E+g*S+k*y),!0)}function j$2(t,n,r,o){let a,u=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];u>c&&(a=u,u=c,c=a);let s=(r[1]-t[1])/n[1],e=(o[1]-t[1])/n[1];if(s>e&&(a=s,s=e,e=a),u>e||s>c)return !1;s>u&&(u=s),e<c&&(c=e);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(u>f||i>c)&&(f<c&&(c=f),!(c<0))}function v$1(t,n,r,a,u,c=n$2()){const s=(a[u]-r[u])*(n[0]-t[0])-(a[0]-r[0])*(n[u]-t[u]),e=(a[0]-r[0])*(t[u]-r[u])-(a[u]-r[u])*(t[0]-r[0]);if(0===s)return !1;const i=e/s;return c[0]=t[0]+i*(n[0]-t[0]),c[1]=t[u]+i*(n[u]-t[u]),!0}function d$1(t,n,r,o,a){a||(a=t),s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=1,y$1(s,s,n),a.length>2&&(a[2]=-s[2]),y$1(s,s,r),i$1(0!==s[3]),a[0]=s[0]/s[3],a[1]=s[1]/s[3],a[2]=s[2]/s[3],a[0]=(.5*a[0]+.5)*o[2]+o[0],a[1]=(.5*a[1]+.5)*o[3]+o[1];}function w$1(t){for(const n in t)return n}function b$2(t){for(const n in t)return !1;return !0}function q$2(t,n){return Math.log(t)/Math.log(n)}function x$1(t,n){t[12]=n[0],t[13]=n[1],t[14]=n[2];}function E$1(t,n,r,o){t[12]=n,t[13]=r,t[14]=o;}function S$1(t,n=n$1()){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function y(t,r){return x$1(t=r$1(t),r),t}function A(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function U$1(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/n)}function V$1(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/r)}function $(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function z$1(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function B$1(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function C$1(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function D$1(t,n,o,a,u){const c=t;0===t[11]?(a[0]=2/(n*c[0]),a[1]=2/(o*c[5]),a[2]=(1+c[12])/c[0],a[3]=(1+c[13])/c[5],r$2(u,0,1)):(a[0]=-2/(n*c[0]),a[1]=-2/(o*c[5]),a[2]=(1-c[8])/c[0],a[3]=(1-c[9])/c[5],r$2(u,1,0));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=e$3();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$1(r,n){return t(r)&&(r=[]),r.push(n),r}function u(r,n){if(t(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function c(t){return !!r$3(t)&&!t.visible}function l$1(t,i,m){const f=t.origin.vec3;E$1(j$1,-f[0],-f[1],-f[2]),r$3(t.transformation)?e$4(i,j$1,t.transformation):n$3(i,j$1),m&&(h$3(m,i),o(m,m));}function p$1(t,r,n,o,s){b$1[0]=t.get(r,0),b$1[1]=t.get(r,1),b$1[2]=t.get(r,2),o$1(b$1,g,3),n.set(s,0,g[0]),o.set(s,0,g[1]),n.set(s,1,g[2]),o.set(s,1,g[3]),n.set(s,2,g[4]),o.set(s,2,g[5]);}const b$1=new Float64Array(3),g=new Float32Array(6),j$1=e$5();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:t$1(i.origin),direction:t$1(i.direction)}:{origin:n$1(),direction:n$1()}}function m$1(n,r){return l$3(n.origin,r.origin)&&l$3(n.direction,r.direction)}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function p(i,n,t=d()){return r$4(t.origin,i),c$1(t.direction,n,i),t}function k$1(i,n,o=d()){return r$4(o.origin,i),r$4(o.direction,n),o}function h$1(i,n){const r=_$1(c$2.get(),j$3(c$2.get(),i.direction),c$1(c$2.get(),n,i.origin));return z$2(r,r)}function v(i,n){return Math.sqrt(h$1(i,n))}function b(i,n,r){const t=z$2(i.direction,c$1(r,n,i.origin));return u$1(r,i.origin,d$2(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}const S=new s$1(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n,o,s){const c=z$2(n,o)/z$2(n,n);return d$2(s,n,c)}function e(n,r){return z$2(n,r)/s$2(n)}function f(r,s){const c=z$2(r,s)/(s$2(r)*s$2(s));return -l$4(c)}function i(o,r,u){j$3(m,o),j$3(h,r);const a=z$2(m,h),e=l$4(a),f=_$1(m,m,h);return z$2(f,u)<0?2*Math.PI-e:e}const m=n$1(),h=n$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=s$3.getLogger("esri.geometry.support.sphere");function P(){return n()}function _(t,r=P()){return a$1(r,t)}function q(t,r){return r$5(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return r$5(t,r,n,s)}function T(t,r,n){return t!==n&&r$4(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t$1,r,n){if(t(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t$1[0],i[1]=e[1]-t$1[1],i[2]=e[2]-t$1[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t$1[3]*t$1[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=n$1();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,c$2.get());return u$1(n,r.origin,d$2(c$2.get(),r.direction,q$3(r.origin,s)/s$2(r.direction))),n}function F(t,r,n){const s=c$2.get(),i=f$3.get();_$1(s,r.origin,r.direction);const a=E(t);_$1(n,s,r.origin),d$2(n,n,1/s$2(n)*a);const u=J(t,r.origin),g=f(r.origin,n);return r$1(i),f$4(i,i,g+u,s),I$1(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=c$1(c$2.get(),r,L(t)),e=d$2(c$2.get(),s,t[3]/s$2(s));return u$1(n,e,L(t))}function I(t,r){const n=c$1(c$2.get(),r,L(t)),s=p$3(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=c$1(c$2.get(),n,L(t)),e=s$2(s),o=E(t),i=o+Math.abs(o-e);return l$4(o/i)}const K=n$1();function N(t,r,s,e){const o=c$1(K,r,L(t));switch(s){case 0:{const t=P$1(o,K)[2];return o$2(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=P$1(o,K),r=t[1],s=t[2],i=Math.sin(r);return o$2(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return j$3(e,o);default:return}}function Q(t,r){const n=c$1(Y,r,L(t));return s$2(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=d$2(Y,o,n-e);return u$1(s,r,i)}const X=n$1(),Y=n$1(),Z=Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

export { C, L, P, c, d, e, f$1 as f, h$1 as h, i$1 as i, l, r, u };
