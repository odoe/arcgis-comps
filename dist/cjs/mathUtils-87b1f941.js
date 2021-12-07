'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],i=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],o=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,i,o))}function z(t,n){const o=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),s=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),r=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return mathUtils.o(t,o,s,r),t}function b(t,n,r){r=r||t;const a=mathUtils.z(t,n);mathUtils.o(r,t[0]-a*n[0],t[1]-a*n[1],t[2]-a*n[2]),mathUtils.j$1(r,r);}function g(t,n,o){Math.abs(t[0])>Math.abs(t[1])?mathUtils.o(n,0,1,0):mathUtils.o(n,1,0,0),mathUtils._(o,t,n),mathUtils.j$1(n,n),mathUtils._(n,o,t),mathUtils.j$1(o,o);}function p(t,n){return (t%n+n)%n}function x(t,n,i,o,s,r){const a=t+(n-t)*s;return a+(i+(o-i)*s-a)*r}function q(t,n,i,s=common.n()){const r=mathUtils.s(t),u=mathUtils.s(n),m=mathUtils.z(t,n)/(r*u);if(m<.9999999999999999){const o=Math.acos(m),a=((1-i)*r+i*u)/Math.sin(o),e=a/r*Math.sin((1-i)*o),f=a/u*Math.sin(i*o);return mathUtils.d(A,t,e),mathUtils.d(B,n,f),mathUtils.u(s,A,B)}return mathUtils.y(s,t,n,i)}function j(t,n,i,r=common.n(),m=common.n()){const M=mathUtils.s(t),l=mathUtils.s(n),d=mathUtils.z(t,n)/(M*l);if(d<.9999999999999999){const o=Math.acos(d),s=Math.sin(o),a=Math.sin(i*o),e=Math.sin((1-i)*o),u=(1-i)*M+i*l;{const i=u/s,o=i/l*a;mathUtils.d(A,t,i/M*e),mathUtils.d(B,n,o),mathUtils.u(r,A,B);}{const r=1/M*(-Math.cos((1-i)*o)*o*u+e*(-M+l));mathUtils.d(A,t,r);const f=1/l*(Math.cos(i*o)*o*u+a*(-M+l));mathUtils.d(B,n,f),mathUtils.u(m,A,B),mathUtils.d(m,m,1/s);}return m}return mathUtils.y(r,t,n,i),mathUtils.c(m,n,t),mathUtils.j$1(m,m),m}function w(n,i,a){n=mathUtils.j$1(A,n),i=mathUtils.j$1(B,i);const c=mathUtils.l(mathUtils.z(n,i));if(a){const t=mathUtils._(y,n,i);if(mathUtils.z(t,a)<0)return -c}return c}function I(t){const n=t.length;return function(i){if(i<=t[0][0])return t[0][1];if(i>=t[n-1][0])return t[n-1][1];let o=1;for(;i>t[o][0];)o++;const s=t[o-1][0],r=t[o][0],a=(r-i)/(r-s);return a*t[o-1][1]+(1-a)*t[o][1]}}class P{constructor(t,n){this.min=t,this.max=n,this.range=n-t;}ndiff(t,n=0){return Math.ceil((t-n)/this.range)*this.range+n}_normalize(t,n,i,o=0,s=!1){return (i-=o)<t?i+=this.ndiff(t-i):i>n&&(i-=this.ndiff(i-n)),s&&i===n&&(i=t),i+o}normalize(t,n=0,i=!1){return this._normalize(this.min,this.max,t,n,i)}clamp(t,i=0){return mathUtils.e(t-i,this.min,this.max)+i}monotonic(t,n,i){return t<n?n:n+this.ndiff(t-n,i)}minimalMonotonic(t,n,i){return this._normalize(t,t+this.range,n,i)}center(t,n,i){return n=this.monotonic(t,n,i),this.normalize((t+n)/2,i)}diff(t,n,i){return this.monotonic(t,n,i)-t}shortestSignedDiff(t,n){t=this.normalize(t);const i=(n=this.normalize(n))-t,o=n<t?this.minimalMonotonic(t,n)-t:n-this.minimalMonotonic(n,t);return Math.abs(i)<Math.abs(o)?i:o}contains(t,n,i){return n=this.minimalMonotonic(t,n),(i=this.minimalMonotonic(t,i))>t&&i<n}}function _(t,n,i,a){mathUtils.c(k,n,t),mathUtils.c(v,i,t),mathUtils._(a,k,v),mathUtils.j$1(a,a),a[3]=-mathUtils.z(t,a);}const k=common.n(),v=common.n();function D(t){for(const n in t){const i=t[n];i instanceof Function&&(t[n]=i.bind(t));}return t}const F=D(new P(0,2*Math.PI)),S=D(new P(-Math.PI,Math.PI)),U=D(new P(0,360)),y=common.n(),A=common.n(),B=common.n();

exports.F = F;
exports.I = I;
exports.P = P;
exports.S = S;
exports.U = U;
exports._ = _;
exports.b = b;
exports.d = d;
exports.g = g;
exports.j = j;
exports.p = p;
exports.q = q;
exports.w = w;
exports.x = x;
exports.z = z;
