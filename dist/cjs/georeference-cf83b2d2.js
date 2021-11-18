'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const quatf64 = require('./quatf64-755c8047.js');
const mat4 = require('./mat4-1439266d.js');
const mat4f64 = require('./mat4f64-f8b0b0f1.js');
const mat3 = require('./mat3-1bc0ab17.js');
const projection = require('./projection-e04cb9d0.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const quat = require('./quat-e40325e0.js');
const BufferView = require('./BufferView-e93c0848.js');
const vec33 = require('./vec33-b2dc30c9.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n=U$2){return [n[0],n[1],n[2],n[3]]}function k$2(n,r,t=a()){return unitUtils.r$8(l(t),n),t[3]=r,t}function q$1(r,c,s=a()){return quat.I(b$2,l(r),x$2(r)),quat.I(d,l(c),x$2(c)),quat.v(b$2,d,b$2),y(s,unitUtils.m$2(quat.P(l(s),b$2)))}function l(n){return n}function x$2(n){return unitUtils.M$4(n[3])}function y(n,r){return n[3]=r,n}const U$2=[0,0,1,0],b$2=quatf64.e(),d=quatf64.e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B$2;let L$2=B$2=class extends JSONSupport.a{constructor(r){super(r),this.origin=unitUtils.n$4(),this.translation=unitUtils.n$4(),this.rotation=a(),this.scale=unitUtils.r$7(1,1,1),this.geographic=!0;}get localMatrix(){const r=mat4f64.e();return mat4.i(r,r,this.scale),mat4.f(r,r,x$2(this.rotation),l(this.rotation)),mat4.c(r,r,this.translation),r}get localMatrixInverse(){return mat4.h(mat4f64.e(),this.localMatrix)}applyLocal(r,o){return unitUtils.I$2(o,r,this.localMatrix)}applyLocalInverse(r,o){return unitUtils.I$2(o,r,this.localMatrixInverse)}project(r,o){const t=new Float64Array(r.length),s=BufferView.T.fromTypedArray(t),e=BufferView.T.fromTypedArray(r);if(this.geographic){const r=unitUtils.A$4(unitUtils.p$4(o)),i=mat4f64.e();return projection.vn(o,this.origin,i,r),mat4.e(i,i,this.localMatrix),vec33.e(s,e,i),projection.xn(t,r,0,t,o,0,t.length/3),t}const{localMatrix:i,origin:a}=this;mat4.C(i,mat4f64.a)?vec33.e$1(s,e):vec33.e(s,e,i);for(let n=0;n<t.length;n+=3)t[n+0]+=a[0],t[n+1]+=a[1],t[n+2]+=a[2];return t}getOriginPoint(r){const[o,t,s]=this.origin;return new unitUtils.b({x:o,y:t,z:s,spatialReference:r})}equals(r){return request.r(r)&&this.geographic===r.geographic&&unitUtils.F$2(this.origin,r.origin)&&mat4.B(this.localMatrix,r.localMatrix)}clone(){const r={origin:unitUtils.t$4(this.origin),translation:unitUtils.t$4(this.translation),rotation:a(this.rotation),scale:unitUtils.t$4(this.scale),geographic:this.geographic};return new B$2(r)}};request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"origin",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"translation",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"rotation",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$2.prototype,"scale",void 0),request.e([request.d({type:Boolean,nonNullable:!0,json:{write:!0}})],L$2.prototype,"geographic",void 0),request.e([request.d()],L$2.prototype,"localMatrix",null),request.e([request.d()],L$2.prototype,"localMatrixInverse",null),L$2=B$2=request.e([request.i("esri.geometry.support.MeshTransform")],L$2);const O$1=L$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){var i;return r.isGeographic||r.isWebMercator&&(null==(i=null==e?void 0:e.geographic)||i)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C$1=request.s$2.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(r,e,o,t,n){return b$1(t)?(S$1(0,BufferView.i.fromTypedArray(r),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n)),n):(C$1.error("Cannot convert spatial reference to PCPF"),n)}function _$1(r,e,o,t,n){return b$1(t)?(S$1(1,BufferView.i.fromTypedArray(r),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n)),n):(C$1.error("Cannot convert to spatial reference from PCPF"),n)}function v(r,e,o){return projection.xn(r,e,0,o,unitUtils.O$2(e),0,r.length/3),o}function M$1(r,e,o){return projection.xn(r,unitUtils.O$2(o),0,e,o,0,r.length/3),e}function V$1(r,o,t){if(request.t(r))return o;const n=BufferView.T.fromTypedArray(r),f=BufferView.T.fromTypedArray(o);return vec33.e(f,n,t),o}function k$1(r,n,f){if(request.t(r))return n;mat3.j(x$1,f);const a=BufferView.i.fromTypedArray(r),m=BufferView.i.fromTypedArray(n);return vec33.f(m,a,x$1),mat3.B(x$1)||vec33.o(m,m),n}function L$1(r,n,f){if(request.t(r))return n;mat3.j(x$1,f);const a=BufferView.i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),m=BufferView.i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if(vec33.f(m,a,x$1),mat3.B(x$1)||vec33.o(m,m),r!==n)for(let e=3;e<r.length;e+=4)n[e]=r[e];return n}function B$1(r,e,o,t,n){if(!b$1(t))return C$1.error("Cannot convert spatial reference to PCPF"),n;S$1(0,BufferView.i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function R(r,e,o,t,n){if(!b$1(t))return C$1.error("Cannot convert to spatial reference from PCPF"),n;S$1(1,BufferView.i.fromTypedArray(r,16),BufferView.T.fromTypedArray(e),BufferView.T.fromTypedArray(o),t,BufferView.i.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function S$1(r,e,o,t,a,m){if(!e)return;const i=o.count,y=unitUtils.O$2(a);if(N$1(a))for(let s=0;s<i;s++)t.getVec(s,U$1),e.getVec(s,w),projection.vn(y,U$1,W,y),mat3.a(x$1,W),1===r&&mat3.o(x$1,x$1),unitUtils.L$2(w,w,x$1),m.setVec(s,w);else for(let u=0;u<i;u++){t.getVec(u,U$1),e.getVec(u,w),projection.vn(y,U$1,W,y),mat3.a(x$1,W);const a=unitUtils.c$17(o.get(u,1));let i=Math.cos(a);0===r&&(i=1/i),x$1[0]*=i,x$1[1]*=i,x$1[2]*=i,x$1[3]*=i,x$1[4]*=i,x$1[5]*=i,1===r&&mat3.o(x$1,x$1),unitUtils.L$2(w,w,x$1),unitUtils.j$3(w,w),m.setVec(u,w);}return m}function b$1(r){return N$1(r)||Y$1(r)}function N$1(r){return r.isWGS84||unitUtils.u$4(r)||unitUtils.G$2(r)||unitUtils.C(r)}function Y$1(r){return r.isWebMercator}const U$1=unitUtils.n$4(),w=unitUtils.n$4(),W=mat4f64.e(),x$1=quatf64.e$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function x(n,r$1,t){return r(r$1.spatialReference,t)?B(n,r$1,t):P(n,r$1,t)}function _(t,o,e){const{position:a,normal:i,tangent:l}=t;if(request.t(o))return {position:a,normal:i,tangent:l};const s=o.localMatrix;return x({position:V$1(a,new Float64Array(a.length),s),normal:request.r(i)?k$1(i,new Float32Array(i.length),s):null,tangent:request.r(l)?L$1(l,new Float32Array(l.length),s):null},o.getOriginPoint(e),{geographic:o.geographic})}function b(n,r$1,t){if(null!=t&&t.useTransform){var o;const{position:e,normal:a,tangent:i}=n;return {vertexAttributes:{position:e,normal:a,tangent:i},transform:new O$1({origin:[r$1.x,r$1.y,null!=(o=r$1.z)?o:0],geographic:r(r$1.spatialReference,t)})}}return {vertexAttributes:x(n,r$1,t),transform:null}}function k(n,r$1,t){return r(r$1.spatialReference,t)?G(n,r$1,t):Y(n,r$1,t)}function M(r$1,t,o,e){if(request.t(t))return k(r$1,o,e);const a=_(r$1,t,o.spatialReference);return o.equals(t.getOriginPoint(o.spatialReference))?Y(a,o,e):r(o.spatialReference,e)?G(a,o,e):Y(a,o,e)}function P(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=e[c+0]*s+a,o[c+1]=e[c+1]*s+i,o[c+2]=e[c+2]*f+l;return {position:o,normal:n.normal,tangent:n.tangent}}function B(n,r,t){const o=r.spatialReference,e=O(r,t,D),a=new Float64Array(n.position.length),i=L(n.position,e,o,a),l=mat3.j(I,e);return {position:i,normal:N(i,a,n.normal,l,o),tangent:S(i,a,n.tangent,l,o)}}function L(n,r,t,o){vec33.e(BufferView.T.fromTypedArray(o),BufferView.T.fromTypedArray(n),r);const e=new Float64Array(n.length);return M$1(o,e,t)}function N(r,t,o,e,a){if(request.t(o))return null;const i=new Float32Array(o.length);return vec33.f(BufferView.i.fromTypedArray(i),BufferView.i.fromTypedArray(o),e),_$1(i,r,t,a,i),i}function S(r,t,o,e,a){if(request.t(o))return null;const i=new Float32Array(o.length);vec33.f(BufferView.i.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),BufferView.i.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),e);for(let n=3;n<i.length;n+=4)i[n]=o[n];return R(i,r,t,a,i),i}function Y(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=(e[c+0]-a)/s,o[c+1]=(e[c+1]-i)/s,o[c+2]=(e[c+2]-l)/f;return {position:o,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const o=r.spatialReference;O(r,t,D);const e=mat4.h(H,D),a=new Float64Array(n.position.length),l=U(n.position,o,e,a),s=mat3.j(I,e);return {position:l,normal:q(n.normal,n.position,a,o,s),tangent:V(n.tangent,n.position,a,o,s)}}function O(n,r,t){projection.vn(n.spatialReference,[n.x,n.y,n.z||0],t,unitUtils.O$2(n.spatialReference));const{horizontal:o,vertical:e}=C(r?r.unit:null,n.spatialReference);return mat4.i(t,t,[o,o,e]),t}function U(n,r,t,o){const e=v(n,r,o),a=BufferView.T.fromTypedArray(e),i=new Float64Array(e.length),l=BufferView.T.fromTypedArray(i);return vec33.e(l,a,t),i}function q(r,t,o,e,a){if(request.t(r))return null;const i=F(r,t,o,e,new Float32Array(r.length)),l=BufferView.i.fromTypedArray(i);return vec33.f(l,l,a),i}function V(r,t,o,e,a){if(request.t(r))return null;const i=B$1(r,t,o,e,new Float32Array(r.length)),l=BufferView.i.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return vec33.f(l,l,a),i}function C(r,a){if(request.t(r))return J;const i=a.isGeographic?1:unitUtils.L$3(a),l=a.isGeographic?1:unitUtils.Y(a),s=unitUtils.D$1(1,r,"meters");return {horizontal:s*i,vertical:s*l}}const D=mat4f64.e(),H=mat4f64.e(),I=quatf64.e$1(),J={horizontal:1,vertical:1};

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
