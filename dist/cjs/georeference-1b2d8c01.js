'use strict';

const request = require('./messageBundle-8be88d04.js');
const unitUtils = require('./unitUtils-083cb8d0.js');
const quatf64 = require('./quatf64-e7a7f39e.js');
const mat4 = require('./mat4-f68486bc.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const mat3 = require('./mat3-1d3e0d51.js');
const projection = require('./projection-b19710fa.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const axisAngleDegrees = require('./axisAngleDegrees-e1bd0682.js');
const BufferView = require('./BufferView-b78db189.js');
const vec33 = require('./vec33-1fc512be.js');
const projection$1 = require('./projection-ea955486.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B$1;let L$1=B$1=class extends request.a$2{constructor(r){super(r),this.origin=common.n(),this.translation=common.n(),this.rotation=axisAngleDegrees.a(),this.scale=common.r(1,1,1),this.geographic=!0;}get localMatrix(){const r=mat4f64.e();return mat4.i(r,r,this.scale),mat4.f(r,r,axisAngleDegrees.x(this.rotation),axisAngleDegrees.l(this.rotation)),mat4.c(r,r,this.translation),r}get localMatrixInverse(){return mat4.h(mat4f64.e(),this.localMatrix)}applyLocal(r,o){return mathUtils.I(o,r,this.localMatrix)}applyLocalInverse(r,o){return mathUtils.I(o,r,this.localMatrixInverse)}project(r,o){const t=new Float64Array(r.length),s=BufferView.T.fromTypedArray(t),e=BufferView.T.fromTypedArray(r);if(this.geographic){const r=unitUtils.A$1(unitUtils.p(o)),i=mat4f64.e();return projection.vn(o,this.origin,i,r),mat4.e(i,i,this.localMatrix),vec33.e$1(s,e,i),projection.xn(t,r,0,t,o,0,t.length/3),t}const{localMatrix:i,origin:a}=this;mat4.C(i,mat4f64.a)?vec33.e(s,e):vec33.e$1(s,e,i);for(let n=0;n<t.length;n+=3)t[n+0]+=a[0],t[n+1]+=a[1],t[n+2]+=a[2];return t}getOriginPoint(r){const[o,t,s]=this.origin;return new request.b$2({x:o,y:t,z:s,spatialReference:r})}equals(r){return request.r(r)&&this.geographic===r.geographic&&mathUtils.F(this.origin,r.origin)&&mat4.B(this.localMatrix,r.localMatrix)}clone(){const r={origin:common.t$1(this.origin),translation:common.t$1(this.translation),rotation:axisAngleDegrees.a(this.rotation),scale:common.t$1(this.scale),geographic:this.geographic};return new B$1(r)}};request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$1.prototype,"origin",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$1.prototype,"translation",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$1.prototype,"rotation",void 0),request.e([request.d({type:[Number],nonNullable:!0,json:{write:!0}})],L$1.prototype,"scale",void 0),request.e([request.d({type:Boolean,nonNullable:!0,json:{write:!0}})],L$1.prototype,"geographic",void 0),request.e([request.d()],L$1.prototype,"localMatrix",null),request.e([request.d()],L$1.prototype,"localMatrixInverse",null),L$1=B$1=request.e([request.i("esri.geometry.support.MeshTransform")],L$1);const O$1=L$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){var i;return r.isGeographic||r.isWebMercator&&(null==(i=null==e?void 0:e.geographic)||i)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function x(n,r$1,t){return r(r$1.spatialReference,t)?B(n,r$1,t):P(n,r$1,t)}function _(t,o,e){const{position:a,normal:i,tangent:l}=t;if(request.t$1(o))return {position:a,normal:i,tangent:l};const s=o.localMatrix;return x({position:projection$1.V(a,new Float64Array(a.length),s),normal:request.r(i)?projection$1.k(i,new Float32Array(i.length),s):null,tangent:request.r(l)?projection$1.L(l,new Float32Array(l.length),s):null},o.getOriginPoint(e),{geographic:o.geographic})}function b(n,r$1,t){if(null!=t&&t.useTransform){var o;const{position:e,normal:a,tangent:i}=n;return {vertexAttributes:{position:e,normal:a,tangent:i},transform:new O$1({origin:[r$1.x,r$1.y,null!=(o=r$1.z)?o:0],geographic:r(r$1.spatialReference,t)})}}return {vertexAttributes:x(n,r$1,t),transform:null}}function k(n,r$1,t){return r(r$1.spatialReference,t)?G(n,r$1,t):Y(n,r$1,t)}function M(r$1,t,o,e){if(request.t$1(t))return k(r$1,o,e);const a=_(r$1,t,o.spatialReference);return o.equals(t.getOriginPoint(o.spatialReference))?Y(a,o,e):r(o.spatialReference,e)?G(a,o,e):Y(a,o,e)}function P(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=e[c+0]*s+a,o[c+1]=e[c+1]*s+i,o[c+2]=e[c+2]*f+l;return {position:o,normal:n.normal,tangent:n.tangent}}function B(n,r,t){const o=r.spatialReference,e=O(r,t,D),a=new Float64Array(n.position.length),i=L(n.position,e,o,a),l=mat3.j(I,e);return {position:i,normal:N(i,a,n.normal,l,o),tangent:S(i,a,n.tangent,l,o)}}function L(n,r,t,o){vec33.e$1(BufferView.T.fromTypedArray(o),BufferView.T.fromTypedArray(n),r);const e=new Float64Array(n.length);return projection$1.M(o,e,t)}function N(r,t,o,e,a){if(request.t$1(o))return null;const i=new Float32Array(o.length);return vec33.f(BufferView.i.fromTypedArray(i),BufferView.i.fromTypedArray(o),e),projection$1._(i,r,t,a,i),i}function S(r,t,o,e,a){if(request.t$1(o))return null;const i=new Float32Array(o.length);vec33.f(BufferView.i.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),BufferView.i.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),e);for(let n=3;n<i.length;n+=4)i[n]=o[n];return projection$1.R(i,r,t,a,i),i}function Y(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=(e[c+0]-a)/s,o[c+1]=(e[c+1]-i)/s,o[c+2]=(e[c+2]-l)/f;return {position:o,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const o=r.spatialReference;O(r,t,D);const e=mat4.h(H,D),a=new Float64Array(n.position.length),l=U(n.position,o,e,a),s=mat3.j(I,e);return {position:l,normal:q(n.normal,n.position,a,o,s),tangent:V(n.tangent,n.position,a,o,s)}}function O(n,r,t){projection.vn(n.spatialReference,[n.x,n.y,n.z||0],t,unitUtils.O$1(n.spatialReference));const{horizontal:o,vertical:e}=C(r?r.unit:null,n.spatialReference);return mat4.i(t,t,[o,o,e]),t}function U(n,r,t,o){const e=projection$1.v(n,r,o),a=BufferView.T.fromTypedArray(e),i=new Float64Array(e.length),l=BufferView.T.fromTypedArray(i);return vec33.e$1(l,a,t),i}function q(r,t,o,e,a){if(request.t$1(r))return null;const i=projection$1.F(r,t,o,e,new Float32Array(r.length)),l=BufferView.i.fromTypedArray(i);return vec33.f(l,l,a),i}function V(r,t,o,e,a){if(request.t$1(r))return null;const i=projection$1.B(r,t,o,e,new Float32Array(r.length)),l=BufferView.i.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return vec33.f(l,l,a),i}function C(r,a){if(request.t$1(r))return J;const i=a.isGeographic?1:unitUtils.L(a),l=a.isGeographic?1:unitUtils.Y(a),s=unitUtils.D(1,r,"meters");return {horizontal:s*i,vertical:s*l}}const D=mat4f64.e(),H=mat4f64.e(),I=quatf64.e(),J={horizontal:1,vertical:1};

exports.M = M;
exports.O = O$1;
exports._ = _;
exports.b = b;
exports.k = k;
exports.r = r;
exports.x = x;
