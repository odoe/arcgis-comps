'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t,e,i=32774,n=[0,0,0,0]){return {srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function e$2(t,e,i,n,s=32774,l=32774,r=[0,0,0,0]){return {srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}const i$1={face:1029,mode:2305},n={face:1028,mode:2305},s$1=t=>2===t?i$1:1===t?n:null,l={zNear:0,zFar:1},r$1={r:!0,g:!0,b:!0,a:!0};function h(t){return I.intern(t)}function o$2(t){return S.intern(t)}function a$1(t){return T.intern(t)}function c$1(t){return O.intern(t)}function d(t){return w.intern(t)}function p(t){return D.intern(t)}function u$1(t){return A.intern(t)}function _(t){return k.intern(t)}function g(t){return B.intern(t)}class f$2{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map;}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function v(t){return "["+t.join(",")+"]"}const I=new f$2(W,(t=>({__tag:"Blending",...t})));function W(t){return t?v([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const S=new f$2(b,(t=>({__tag:"Culling",...t})));function b(t){return t?v([t.face,t.mode]):null}const T=new f$2(y,(t=>({__tag:"PolygonOffset",...t})));function y(t){return t?v([t.factor,t.units]):null}const O=new f$2(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?v([t.func]):null}const w=new f$2(C,(t=>({__tag:"StencilTest",...t})));function C(t){return t?v([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const D=new f$2(m,(t=>({__tag:"DepthWrite",...t})));function m(t){return t?v([t.zNear,t.zFar]):null}const A=new f$2(P,(t=>({__tag:"ColorWrite",...t})));function P(t){return t?v([t.r,t.g,t.b,t.a]):null}const k=new f$2(z,(t=>({__tag:"StencilWrite",...t})));function z(t){return t?v([t.mask]):null}const B=new f$2(F,(t=>({blending:h(t.blending),culling:o$2(t.culling),polygonOffset:a$1(t.polygonOffset),depthTest:c$1(t.depthTest),stencilTest:d(t.stencilTest),depthWrite:p(t.depthWrite),colorWrite:u$1(t.colorWrite),stencilWrite:_(t.stencilWrite)})));function F(t){return t?v([W(t.blending),b(t.culling),y(t.polygonOffset),R(t.depthTest),C(t.stencilTest),m(t.depthWrite),P(t.colorWrite),z(t.stencilWrite)]):null}class K{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t;}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1;}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0;}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0;}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0;}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0;}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0;}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0;}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0;}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0;}setBlending(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1;}setCulling(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1;}setPolygonOffset(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1;}setDepthTest(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1;}setStencilTest(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1;}setDepthWrite(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1;}setColorWrite(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1;}setStencilWrite(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1;}setSubState(t,e,i,n){return (i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$1(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r];}function r(n,t,r,c){for(let l=0;l<c;++l)f$1[0]=n[l],o$1(f$1,e$1,1),t[l]=e$1[0],r[l]=e$1[1];}const f$1=new Float64Array(1),e$1=new Float32Array(2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=e$2(770,1,771,771),e=t$1(1,1),o=t$1(0,771);function c(n){return 2===n?null:1===n?o:e}const f=5e5,i={factor:-1,units:-2};function s(n){return n?i:null}function a(n){return 3===n||2===n?513:515}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await request.E(t,{responseType:"image",...r});return a}

exports.K = K;
exports.a = a;
exports.c = c;
exports.f = f;
exports.g = g;
exports.l = l;
exports.o = o$1;
exports.o$1 = o;
exports.r = r;
exports.r$1 = r$1;
exports.s = s$1;
exports.s$1 = s;
exports.t = t;
exports.u = u;
