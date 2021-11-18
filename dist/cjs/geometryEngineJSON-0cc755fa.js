'use strict';

const geometryEngineBase = require('./geometryEngineBase-18aba9d5.js');
const json = require('./json-2c41fbe0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(n){return geometryEngineBase.G.extendedSpatialReferenceInfo(n)}function t(r,t,i){return geometryEngineBase.G.clip(json.t,r,t,i)}function i(r,t,i){return geometryEngineBase.G.cut(json.t,r,t,i)}function s(r,t,i){return geometryEngineBase.G.contains(json.t,r,t,i)}function u(r,t,i){return geometryEngineBase.G.crosses(json.t,r,t,i)}function o(r,t,i,s){return geometryEngineBase.G.distance(json.t,r,t,i,s)}function a(r,t,i){return geometryEngineBase.G.equals(json.t,r,t,i)}function c(r,t,i){return geometryEngineBase.G.intersects(json.t,r,t,i)}function f(r,t,i){return geometryEngineBase.G.touches(json.t,r,t,i)}function l(r,t,i){return geometryEngineBase.G.within(json.t,r,t,i)}function p(r,t,i){return geometryEngineBase.G.disjoint(json.t,r,t,i)}function g(r,t,i){return geometryEngineBase.G.overlaps(json.t,r,t,i)}function d(r,t,i,s){return geometryEngineBase.G.relate(json.t,r,t,i,s)}function m(r,t){return geometryEngineBase.G.isSimple(json.t,r,t)}function h(r,t){return geometryEngineBase.G.simplify(json.t,r,t)}function y(r,t,i=!1){return geometryEngineBase.G.convexHull(json.t,r,t,i)}function x(r,t,i){return geometryEngineBase.G.difference(json.t,r,t,i)}function w(r,t,i){return geometryEngineBase.G.symmetricDifference(json.t,r,t,i)}function A(r,t,i){return geometryEngineBase.G.intersect(json.t,r,t,i)}function E(r,t,i=null){return geometryEngineBase.G.union(json.t,r,t,i)}function j(r,t,i,s,u,o,a){return geometryEngineBase.G.offset(json.t,r,t,i,s,u,o,a)}function z(r,t,i,s,u=!1){return geometryEngineBase.G.buffer(json.t,r,t,i,s,u)}function I(r,t,i,s,u,o,a){return geometryEngineBase.G.geodesicBuffer(json.t,r,t,i,s,u,o,a)}function V(r,t,i,s=!0){return geometryEngineBase.G.nearestCoordinate(json.t,r,t,i,s)}function v(r,t,i){return geometryEngineBase.G.nearestVertex(json.t,r,t,i)}function D(r,t,i,s,u){return geometryEngineBase.G.nearestVertices(json.t,r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=geometryEngineBase.G.rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=geometryEngineBase.G.flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=geometryEngineBase.G.flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return geometryEngineBase.G.generalize(json.t,r,t,i,s,u)}function L(r,t,i,s){return geometryEngineBase.G.densify(json.t,r,t,i,s)}function S(r,t,i,s,u=0){return geometryEngineBase.G.geodesicDensify(json.t,r,t,i,s,u)}function _(r,t,i){return geometryEngineBase.G.planarArea(json.t,r,t,i)}function q(r,t,i){return geometryEngineBase.G.planarLength(json.t,r,t,i)}function C(r,t,i,s){return geometryEngineBase.G.geodesicArea(json.t,r,t,i,s)}function G(r,t,i,s){return geometryEngineBase.G.geodesicLength(json.t,r,t,i,s)}const k=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:z,geodesicBuffer:I,nearestCoordinate:V,nearestVertex:v,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:G});

exports.A = A;
exports.B = B;
exports.C = C;
exports.D = D;
exports.E = E;
exports.G = G;
exports.H = H;
exports.I = I;
exports.L = L;
exports.R = R;
exports.S = S;
exports.V = V;
exports._ = _;
exports.a = a;
exports.b = b;
exports.c = c;
exports.d = d;
exports.f = f;
exports.g = g;
exports.h = h;
exports.i = i;
exports.j = j;
exports.k = k;
exports.l = l;
exports.m = m;
exports.o = o;
exports.p = p;
exports.q = q;
exports.r = r;
exports.s = s;
exports.t = t;
exports.u = u;
exports.v = v;
exports.w = w;
exports.x = x;
exports.y = y;
exports.z = z;
