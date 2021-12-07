'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const vec2 = require('./vec2-d000a8cb.js');
const lineSegment = require('./lineSegment-a86bf7bd.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b(t,r,e){const p=vec2.d(t,r),o=vec2.d(r,e),s=vec2.d(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function M(t,n,r){return mathUtils.c(O,n,t),mathUtils.c(V,r,t),mathUtils.s(mathUtils._(O,O,V))/2}new vectorStacks.s(lineSegment.v);new vectorStacks.s((()=>({p0:null,p1:null,p2:null})));const O=common.n(),V=common.n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f=new Uint16Array([0]),c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return f;if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint32Array(n);for(let t=0;t<s.length;t++)s[t]=t;}return new Uint32Array(s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(f);if(t<c.length)return new Uint16Array(c.slice(0,t));if(t>s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(s.slice(0,t))}function u(e,o,s){if(!e)return !1;const{size:f,data:c}=e;mathUtils.o(s,0,0,0),mathUtils.o(U,0,0,0);let l=0,a=0;for(let u=0;u<o.length-2;u+=3){const e=o[u+0]*f,h=o[u+1]*f,g=o[u+2]*f;mathUtils.o(y,c[e+0],c[e+1],c[e+2]),mathUtils.o(w,c[h+0],c[h+1],c[h+2]),mathUtils.o(A,c[g+0],c[g+1],c[g+2]);const m=M(y,w,A);m?(mathUtils.u(y,y,w),mathUtils.u(y,y,A),mathUtils.d(y,y,1/3*m),mathUtils.u(s,s,y),l+=m):(mathUtils.u(U,U,y),mathUtils.u(U,U,w),mathUtils.u(U,U,A),a+=3);}return (0!==a||0!==l)&&(0!==l?(mathUtils.d(s,s,1/l),!0):0!==a&&(mathUtils.d(s,U,1/a),!0))}function h(n,e,o){if(!n||!e)return !1;const{size:i,data:s}=n;mathUtils.o(o,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o[0]+=s[n+0],o[1]+=s[n+1],o[2]+=s[n+2],c++),f=n;}return c>1&&mathUtils.d(o,o,1/c),c>0}function g(o,i,s,f){if(!o)return !1;const{size:c,data:l}=o;mathUtils.o(f,0,0,0),mathUtils.o(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],w[0]=l[A+0],w[1]=l[A+1],w[2]=l[A+2],mathUtils.d(y,mathUtils.u(y,y,w),.5);const m=mathUtils.S(y,w);m>0?(mathUtils.u(f,f,mathUtils.d(y,y,m)),a+=m):(mathUtils.u(U,U,y),u++);}return 0!==a?(mathUtils.d(f,f,1/a),!0):0!==u&&(mathUtils.d(f,U,1/u),!0)}const y=common.n(),w=common.n(),A=common.n(),U=common.n();

exports.a = a;
exports.b = b;
exports.g = g;
exports.h = h;
exports.l = l;
exports.u = u;
