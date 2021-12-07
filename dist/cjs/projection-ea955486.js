'use strict';

const request = require('./messageBundle-8be88d04.js');
const mat3 = require('./mat3-1d3e0d51.js');
const quatf64 = require('./quatf64-e7a7f39e.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const projection = require('./projection-b19710fa.js');
const unitUtils = require('./unitUtils-083cb8d0.js');
const BufferView = require('./BufferView-b78db189.js');
const vec33 = require('./vec33-1fc512be.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C=request.s$1.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(r,e,o,t,n){return b(t)?(S(0,BufferView.i.fromTypedArray(r),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n)),n):(C.error("Cannot convert spatial reference to PCPF"),n)}function _(r,e,o,t,n){return b(t)?(S(1,BufferView.i.fromTypedArray(r),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n)),n):(C.error("Cannot convert to spatial reference from PCPF"),n)}function v(r,e,o){return projection.xn(r,e,0,o,unitUtils.O$1(e),0,r.length/3),o}function M(r,e,o){return projection.xn(r,unitUtils.O$1(o),0,e,o,0,r.length/3),e}function V(r,o,t){if(request.t$1(r))return o;const n=BufferView.T.fromTypedArray(r),f=BufferView.T.fromTypedArray(o);return vec33.e$1(f,n,t),o}function k(r,n,f){if(request.t$1(r))return n;mat3.j(x,f);const a=BufferView.i.fromTypedArray(r),m=BufferView.i.fromTypedArray(n);return vec33.f(m,a,x),mat3.B(x)||vec33.o(m,m),n}function L(r,n,f){if(request.t$1(r))return n;mat3.j(x,f);const a=BufferView.i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),m=BufferView.i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if(vec33.f(m,a,x),mat3.B(x)||vec33.o(m,m),r!==n)for(let e=3;e<r.length;e+=4)n[e]=r[e];return n}function B(r,e,o,t,n){if(!b(t))return C.error("Cannot convert spatial reference to PCPF"),n;S(0,BufferView.i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function R(r,e,o,t,n){if(!b(t))return C.error("Cannot convert to spatial reference from PCPF"),n;S(1,BufferView.i.fromTypedArray(r,16),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function S(r,e,o,t,a,m){if(!e)return;const i=o.count,y=unitUtils.O$1(a);if(N(a))for(let s=0;s<i;s++)t.getVec(s,U),e.getVec(s,w),projection.vn(y,U,W,y),mat3.a(x,W),1===r&&mat3.o(x,x),mathUtils.L(w,w,x),m.setVec(s,w);else for(let u=0;u<i;u++){t.getVec(u,U),e.getVec(u,w),projection.vn(y,U,W,y),mat3.a(x,W);const a=request.c$4(o.get(u,1));let i=Math.cos(a);0===r&&(i=1/i),x[0]*=i,x[1]*=i,x[2]*=i,x[3]*=i,x[4]*=i,x[5]*=i,1===r&&mat3.o(x,x),mathUtils.L(w,w,x),mathUtils.j$1(w,w),m.setVec(u,w);}return m}function b(r){return N(r)||Y(r)}function N(r){return r.isWGS84||request.u$10(r)||request.G$1(r)||request.C$1(r)}function Y(r){return r.isWebMercator}const U=common.n(),w=common.n(),W=mat4f64.e(),x=quatf64.e();

exports.B = B;
exports.F = F;
exports.L = L;
exports.M = M;
exports.R = R;
exports.V = V;
exports._ = _;
exports.k = k;
exports.v = v;
