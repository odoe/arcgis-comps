'use strict';

const request = require('./MapView-1195e7f1.js');
const quatf64 = require('./quatf64-755c8047.js');
const mat4f64 = require('./mat4f64-f8b0b0f1.js');
const quat = require('./quat-1ebec6a2.js');
const BufferView = require('./BufferView-9dddf564.js');
const vec33 = require('./vec33-bee5e0e6.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n=U$2){return [n[0],n[1],n[2],n[3]]}function k$2(n,r,t=a()){return request.r$14(l(t),n),t[3]=r,t}function q$1(r,c,s=a()){return quat.I(b$2,l(r),x$2(r)),quat.I(d,l(c),x$2(c)),quat.v(b$2,d,b$2),y(s,request.m$15(quat.P(l(s),b$2)))}function l(n){return n}function x$2(n){return request.M$5(n[3])}function y(n,r){return n[3]=r,n}const U$2=[0,0,1,0],b$2=quatf64.e(),d=quatf64.e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B$2;let L$2=B$2=class extends request.a$1{constructor(r){super(r),this.origin=request.n$13(),this.translation=request.n$13(),this.rotation=a(),this.scale=request.r$7(1,1,1),this.geographic=!0;}get localMatrix(){const r=mat4f64.e();return request.i$19(r,r,this.scale),request.f$8(r,r,x$2(this.rotation),l(this.rotation)),request.c$15(r,r,this.translation),r}get localMatrixInverse(){return request.h$8(mat4f64.e(),this.localMatrix)}applyLocal(r,o){return request.I$3(o,r,this.localMatrix)}applyLocalInverse(r,o){return request.I$3(o,r,this.localMatrixInverse)}project(r,o){const t=new Float64Array(r.length),s=BufferView.T.fromTypedArray(t),e=BufferView.T.fromTypedArray(r);if(this.geographic){const r=request.A$4(request.p$7(o)),i=mat4f64.e();return request.vn(o,this.origin,i,r),request.e$25(i,i,this.localMatrix),vec33.e(s,e,i),request.xn(t,r,0,t,o,0,t.length/3),t}const{localMatrix:i,origin:a}=this;request.C$4(i,mat4f64.a)?vec33.e$1(s,e):vec33.e(s,e,i);for(let n=0;n<t.length;n+=3)t[n+0]+=a[0],t[n+1]+=a[1],t[n+2]+=a[2];return t}getOriginPoint(r){const[o,t,s]=this.origin;return new request.b$3({x:o,y:t,z:s,spatialReference:r})}equals(r){return request.r(r)&&this.geographic===r.geographic&&request.F$1(this.origin,r.origin)&&request.B$2(this.localMatrix,r.localMatrix)}clone(){const r={origin:request.t$13(this.origin),translation:request.t$13(this.translation),rotation:a(this.rotation),scale:request.t$13(this.scale),geographic:this.geographic};return new B$2(r)}};request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"origin",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"translation",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"rotation",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"scale",void 0),request.e([request.d({type:Boolean,nonNullable:!0,json:{write:!0}})],L$2.prototype,"geographic",void 0),request.e([request.d()],L$2.prototype,"localMatrix",null),request.e([request.d()],L$2.prototype,"localMatrixInverse",null),L$2=B$2=request.e([request.i("esri.geometry.support.MeshTransform")],L$2);const O$1=L$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){var i;return r.isGeographic||r.isWebMercator&&(null==(i=null==e?void 0:e.geographic)||i)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C$1=request.s.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(r,e,o,t,n){return b$1(t)?(S$1(0,BufferView.i.fromTypedArray(r),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n)),n):(C$1.error("Cannot convert spatial reference to PCPF"),n)}function _$1(r,e,o,t,n){return b$1(t)?(S$1(1,BufferView.i.fromTypedArray(r),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n)),n):(C$1.error("Cannot convert to spatial reference from PCPF"),n)}function v(r,e,o){return request.xn(r,e,0,o,request.O$5(e),0,r.length/3),o}function M$1(r,e,o){return request.xn(r,request.O$5(o),0,e,o,0,r.length/3),e}function V$1(r,o,t){if(request.t$2(r))return o;const n=BufferView.T.fromTypedArray(r),f=BufferView.T.fromTypedArray(o);return vec33.e(f,n,t),o}function k$1(r,n,f){if(request.t$2(r))return n;request.j$9(x$1,f);const a=BufferView.i.fromTypedArray(r),m=BufferView.i.fromTypedArray(n);return vec33.f(m,a,x$1),request.B$3(x$1)||vec33.o(m,m),n}function L$1(r,n,f){if(request.t$2(r))return n;request.j$9(x$1,f);const a=BufferView.i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),m=BufferView.i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if(vec33.f(m,a,x$1),request.B$3(x$1)||vec33.o(m,m),r!==n)for(let e=3;e<r.length;e+=4)n[e]=r[e];return n}function B$1(r,e,o,t,n){if(!b$1(t))return C$1.error("Cannot convert spatial reference to PCPF"),n;S$1(0,BufferView.i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function R(r,e,o,t,n){if(!b$1(t))return C$1.error("Cannot convert to spatial reference from PCPF"),n;S$1(1,BufferView.i.fromTypedArray(r,16),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function S$1(r,e,o,t,a,m){if(!e)return;const i=o.count,y=request.O$5(a);if(N$1(a))for(let s=0;s<i;s++)t.getVec(s,U$1),e.getVec(s,w),request.vn(y,U$1,W,y),request.a$19(x$1,W),1===r&&request.o$15(x$1,x$1),request.L$3(w,w,x$1),m.setVec(s,w);else for(let u=0;u<i;u++){t.getVec(u,U$1),e.getVec(u,w),request.vn(y,U$1,W,y),request.a$19(x$1,W);const a=request.c$16(o.get(u,1));let i=Math.cos(a);0===r&&(i=1/i),x$1[0]*=i,x$1[1]*=i,x$1[2]*=i,x$1[3]*=i,x$1[4]*=i,x$1[5]*=i,1===r&&request.o$15(x$1,x$1),request.L$3(w,w,x$1),request.j$8(w,w),m.setVec(u,w);}return m}function b$1(r){return N$1(r)||Y$1(r)}function N$1(r){return r.isWGS84||request.u$10(r)||request.G$4(r)||request.C$5(r)}function Y$1(r){return r.isWebMercator}const U$1=request.n$13(),w=request.n$13(),W=mat4f64.e(),x$1=quatf64.e$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function x(n,r$1,t){return r(r$1.spatialReference,t)?B(n,r$1,t):P(n,r$1,t)}function _(t,o,e){const{position:a,normal:i,tangent:l}=t;if(request.t$2(o))return {position:a,normal:i,tangent:l};const s=o.localMatrix;return x({position:V$1(a,new Float64Array(a.length),s),normal:request.r(i)?k$1(i,new Float32Array(i.length),s):null,tangent:request.r(l)?L$1(l,new Float32Array(l.length),s):null},o.getOriginPoint(e),{geographic:o.geographic})}function b(n,r$1,t){if(null!=t&&t.useTransform){var o;const{position:e,normal:a,tangent:i}=n;return {vertexAttributes:{position:e,normal:a,tangent:i},transform:new O$1({origin:[r$1.x,r$1.y,null!=(o=r$1.z)?o:0],geographic:r(r$1.spatialReference,t)})}}return {vertexAttributes:x(n,r$1,t),transform:null}}function k(n,r$1,t){return r(r$1.spatialReference,t)?G(n,r$1,t):Y(n,r$1,t)}function M(r$1,t,o,e){if(request.t$2(t))return k(r$1,o,e);const a=_(r$1,t,o.spatialReference);return o.equals(t.getOriginPoint(o.spatialReference))?Y(a,o,e):r(o.spatialReference,e)?G(a,o,e):Y(a,o,e)}function P(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=e[c+0]*s+a,o[c+1]=e[c+1]*s+i,o[c+2]=e[c+2]*f+l;return {position:o,normal:n.normal,tangent:n.tangent}}function B(n,r,t){const o=r.spatialReference,e=O(r,t,D),a=new Float64Array(n.position.length),i=L(n.position,e,o,a),l=request.j$9(I,e);return {position:i,normal:N(i,a,n.normal,l,o),tangent:S(i,a,n.tangent,l,o)}}function L(n,r,t,o){vec33.e(BufferView.T.fromTypedArray(o),BufferView.T.fromTypedArray(n),r);const e=new Float64Array(n.length);return M$1(o,e,t)}function N(r,t,o,e,a){if(request.t$2(o))return null;const i=new Float32Array(o.length);return vec33.f(BufferView.i.fromTypedArray(i),BufferView.i.fromTypedArray(o),e),_$1(i,r,t,a,i),i}function S(r,t,o,e,a){if(request.t$2(o))return null;const i=new Float32Array(o.length);vec33.f(BufferView.i.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),BufferView.i.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),e);for(let n=3;n<i.length;n+=4)i[n]=o[n];return R(i,r,t,a,i),i}function Y(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=(e[c+0]-a)/s,o[c+1]=(e[c+1]-i)/s,o[c+2]=(e[c+2]-l)/f;return {position:o,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const o=r.spatialReference;O(r,t,D);const e=request.h$8(H,D),a=new Float64Array(n.position.length),l=U(n.position,o,e,a),s=request.j$9(I,e);return {position:l,normal:q(n.normal,n.position,a,o,s),tangent:V(n.tangent,n.position,a,o,s)}}function O(n,r,t){request.vn(n.spatialReference,[n.x,n.y,n.z||0],t,request.O$5(n.spatialReference));const{horizontal:o,vertical:e}=C(r?r.unit:null,n.spatialReference);return request.i$19(t,t,[o,o,e]),t}function U(n,r,t,o){const e=v(n,r,o),a=BufferView.T.fromTypedArray(e),i=new Float64Array(e.length),l=BufferView.T.fromTypedArray(i);return vec33.e(l,a,t),i}function q(r,t,o,e,a){if(request.t$2(r))return null;const i=F(r,t,o,e,new Float32Array(r.length)),l=BufferView.i.fromTypedArray(i);return vec33.f(l,l,a),i}function V(r,t,o,e,a){if(request.t$2(r))return null;const i=B$1(r,t,o,e,new Float32Array(r.length)),l=BufferView.i.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return vec33.f(l,l,a),i}function C(r,a){if(request.t$2(r))return J;const i=a.isGeographic?1:request.L$4(a),l=a.isGeographic?1:request.Y(a),s=request.D$4(1,r,"meters");return {horizontal:s*i,vertical:s*l}}const D=mat4f64.e(),H=mat4f64.e(),I=quatf64.e$1(),J={horizontal:1,vertical:1};

exports.B = B$1;
exports.F = F;
exports.M = M$1;
exports.M$1 = M;
exports.O = O$1;
exports.R = R;
exports._ = _;
exports._$1 = _$1;
exports.a = a;
exports.b = b;
exports.k = k;
exports.k$1 = k$2;
exports.l = l;
exports.q = q$1;
exports.r = r;
exports.v = v;
exports.x = x;
exports.x$1 = x$2;
