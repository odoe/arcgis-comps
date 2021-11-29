'use strict';

const geometryEngineBase = require('./geometryEngineBase-18aba9d5.js');
const hydrated = require('./hydrated-7211fa7d.js');
require('./MapView-1726f571.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function t(e){return geometryEngineBase.G.extendedSpatialReferenceInfo(e)}function u(t,u){return geometryEngineBase.G.clip(hydrated.hydratedAdapter,r(t),t,u)}function i(t,u){return geometryEngineBase.G.cut(hydrated.hydratedAdapter,r(t),t,u)}function o(t,u){return geometryEngineBase.G.contains(hydrated.hydratedAdapter,r(t),t,u)}function c(t,u){return geometryEngineBase.G.crosses(hydrated.hydratedAdapter,r(t),t,u)}function f(t,u,i){return geometryEngineBase.G.distance(hydrated.hydratedAdapter,r(t),t,u,i)}function l(t,u){return geometryEngineBase.G.equals(hydrated.hydratedAdapter,r(t),t,u)}function a(t,u){return geometryEngineBase.G.intersects(hydrated.hydratedAdapter,r(t),t,u)}function s(t,u){return geometryEngineBase.G.touches(hydrated.hydratedAdapter,r(t),t,u)}function p(t,u){return geometryEngineBase.G.within(hydrated.hydratedAdapter,r(t),t,u)}function g(t,u){return geometryEngineBase.G.disjoint(hydrated.hydratedAdapter,r(t),t,u)}function m(t,u){return geometryEngineBase.G.overlaps(hydrated.hydratedAdapter,r(t),t,u)}function d(t,u,i){return geometryEngineBase.G.relate(hydrated.hydratedAdapter,r(t),t,u,i)}function x(t){return geometryEngineBase.G.isSimple(hydrated.hydratedAdapter,r(t),t)}function w(t){return geometryEngineBase.G.simplify(hydrated.hydratedAdapter,r(t),t)}function E(t,u=!1){return geometryEngineBase.G.convexHull(hydrated.hydratedAdapter,r(t),t,u)}function h(t,u){return geometryEngineBase.G.difference(hydrated.hydratedAdapter,r(t),t,u)}function A(t,u){return geometryEngineBase.G.symmetricDifference(hydrated.hydratedAdapter,r(t),t,u)}function y(t,u){return geometryEngineBase.G.intersect(hydrated.hydratedAdapter,r(t),t,u)}function R(t,u=null){return geometryEngineBase.G.union(hydrated.hydratedAdapter,r(t),t,u)}function I(t,u,i,o,c,f){return geometryEngineBase.G.offset(hydrated.hydratedAdapter,r(t),t,u,i,o,c,f)}function v(t,u,i,o=!1){return geometryEngineBase.G.buffer(hydrated.hydratedAdapter,r(t),t,u,i,o)}function S(t,u,i,o,c,f){return geometryEngineBase.G.geodesicBuffer(hydrated.hydratedAdapter,r(t),t,u,i,o,c,f)}function j(t,u,i=!0){return geometryEngineBase.G.nearestCoordinate(hydrated.hydratedAdapter,r(t),t,u,i)}function J(t,u){return geometryEngineBase.G.nearestVertex(hydrated.hydratedAdapter,r(t),t,u)}function N(t,u,i,o){return geometryEngineBase.G.nearestVertices(hydrated.hydratedAdapter,r(t),t,u,i,o)}function O(n){return "xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function V(e,r,t){var u;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(t=null!=(u=t)?u:O(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(geometryEngineBase.G.rotate(e,r,t));return o.spatialReference=i,o}function z(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if(null==(r=null!=(t=r)?t:O(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(geometryEngineBase.G.flipHorizontal(e,r));return i.spatialReference=u,i}function B(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if(null==(r=null!=(t=r)?t:O(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(geometryEngineBase.G.flipVertical(e,r));return i.spatialReference=u,i}function D(t,u,i,o){return geometryEngineBase.G.generalize(hydrated.hydratedAdapter,r(t),t,u,i,o)}function H(t,u,i){return geometryEngineBase.G.densify(hydrated.hydratedAdapter,r(t),t,u,i)}function L(t,u,i,o=0){return geometryEngineBase.G.geodesicDensify(hydrated.hydratedAdapter,r(t),t,u,i,o)}function b(t,u){return geometryEngineBase.G.planarArea(hydrated.hydratedAdapter,r(t),t,u)}function k(t,u){return geometryEngineBase.G.planarLength(hydrated.hydratedAdapter,r(t),t,u)}function q(t,u,i){return geometryEngineBase.G.geodesicArea(hydrated.hydratedAdapter,r(t),t,u,i)}function C(t,u,i){return geometryEngineBase.G.geodesicLength(hydrated.hydratedAdapter,r(t),t,u,i)}

exports.buffer = v;
exports.clip = u;
exports.contains = o;
exports.convexHull = E;
exports.crosses = c;
exports.cut = i;
exports.densify = H;
exports.difference = h;
exports.disjoint = g;
exports.distance = f;
exports.equals = l;
exports.extendedSpatialReferenceInfo = t;
exports.flipHorizontal = z;
exports.flipVertical = B;
exports.generalize = D;
exports.geodesicArea = q;
exports.geodesicBuffer = S;
exports.geodesicDensify = L;
exports.geodesicLength = C;
exports.intersect = y;
exports.intersects = a;
exports.isSimple = x;
exports.nearestCoordinate = j;
exports.nearestVertex = J;
exports.nearestVertices = N;
exports.offset = I;
exports.overlaps = m;
exports.planarArea = b;
exports.planarLength = k;
exports.relate = d;
exports.rotate = V;
exports.simplify = w;
exports.symmetricDifference = A;
exports.touches = s;
exports.union = R;
exports.within = p;
