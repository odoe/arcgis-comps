'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
require('./mat4-f68486bc.js');
const vec2 = require('./vec2-d000a8cb.js');
const vec2f64 = require('./vec2f64-60b3c97e.js');
require('./common-41a349f2.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=vec4f64.n();class e{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function i(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e(n)}}function f(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack));}function j(t,n,r,o){let a,u=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];u>c&&(a=u,u=c,c=a);let s=(r[1]-t[1])/n[1],e=(o[1]-t[1])/n[1];if(s>e&&(a=s,s=e,e=a),u>e||s>c)return !1;s>u&&(u=s),e<c&&(c=e);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(u>f||i>c)&&(f<c&&(c=f),!(c<0))}function v(t,n,r,a,u,c=vec2f64.n()){const s=(a[u]-r[u])*(n[0]-t[0])-(a[0]-r[0])*(n[u]-t[u]),e=(a[0]-r[0])*(t[u]-r[u])-(a[u]-r[u])*(t[0]-r[0]);if(0===s)return !1;const i=e/s;return c[0]=t[0]+i*(n[0]-t[0]),c[1]=t[u]+i*(n[u]-t[u]),!0}function d(t,n,r,o,a){a||(a=t),s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=1,mathUtils.y$1(s,s,n),a.length>2&&(a[2]=-s[2]),mathUtils.y$1(s,s,r),i(0!==s[3]),a[0]=s[0]/s[3],a[1]=s[1]/s[3],a[2]=s[2]/s[3],a[0]=(.5*a[0]+.5)*o[2]+o[0],a[1]=(.5*a[1]+.5)*o[3]+o[1];}function q(t,n){return Math.log(t)/Math.log(n)}function E(t,n,r,o){t[12]=n,t[13]=r,t[14]=o;}function A(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function $(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function z(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function B(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function C(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function D(t,n,o,a,u){const c=t;0===t[11]?(a[0]=2/(n*c[0]),a[1]=2/(o*c[5]),a[2]=(1+c[12])/c[0],a[3]=(1+c[13])/c[5],vec2.r(u,0,1)):(a[0]=-2/(n*c[0]),a[1]=-2/(o*c[5]),a[2]=(1-c[8])/c[0],a[3]=(1-c[9])/c[5],vec2.r(u,1,0));}

exports.$ = $;
exports.A = A;
exports.B = B;
exports.C = C;
exports.D = D;
exports.E = E;
exports.d = d;
exports.f = f;
exports.i = i;
exports.j = j;
exports.q = q;
exports.v = v;
exports.z = z;
