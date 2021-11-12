import { aq as d$1, ao as b$1 } from './Graphic-08cda9ca.js';
import { u as u$1 } from './workers-82dadb41.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(n){var t;return Array.isArray(n)?null==(t=n[0])?void 0:t.spatialReference:null==n?void 0:n.spatialReference}function i(n){return n?Array.isArray(n)?n.map(i):n.toJSON?n.toJSON():n:n}function a(n){return Array.isArray(n)?n.map((n=>d$1(n))):d$1(n)}function o(n,t){let r;return Array.isArray(n)?r=n:(r=[],r.push(n),null!=t&&r.push(t)),r}let c;async function u(){return c||(c=u$1("geometryEngineWorker",{strategy:"distributed"})),c}async function s(n,t){return (await u()).invoke("executeGEOperation",{operation:n,parameters:i(t)})}function f(n){return s("extendedSpatialReferenceInfo",[n])}async function l(n,t){return a(await s("clip",[e(n),n,t]))}async function y(n,t){return a(await s("cut",[e(n),n,t]))}function p(n,t){return s("contains",[e(n),n,t])}function w(n,t){return s("crosses",[e(n),n,t])}function m(n,t,r){return s("distance",[e(n),n,t,r])}function d(n,t){return s("equals",[e(n),n,t])}function g(n,t){return s("intersects",[e(n),n,t])}function A(n,t){return s("touches",[e(n),n,t])}function x(n,t){return s("within",[e(n),n,t])}function S(n,t){return s("disjoint",[e(n),n,t])}function O(n,t){return s("overlaps",[e(n),n,t])}function h(n,t,r){return s("relate",[e(n),n,t,r])}function v(n){return s("isSimple",[e(n),n])}async function J(n){return a(await s("simplify",[e(n),n]))}async function N(n,t=!1){return a(await s("convexHull",[e(n),n,t]))}async function R(n,t){return a(await s("difference",[e(n),n,t]))}async function E(n,t){return a(await s("symmetricDifference",[e(n),n,t]))}async function j(n,t){return a(await s("intersect",[e(n),n,t]))}async function k(n,t=null){const r=o(n,t);return a(await s("union",[e(r),r]))}async function I(n,t,r,i,o,c){return a(await s("offset",[e(n),n,t,r,i,o,c]))}async function V(n,t,r,i=!1){const o=[e(n),n,t,r,i];return a(await s("buffer",o))}async function b(n,t,r,i,o,c){const u=[e(n),n,t,r,i,o,c];return a(await s("geodesicBuffer",u))}async function z(n,r,i=!0){const a=await s("nearestCoordinate",[e(n),n,r,i]);return {...a,coordinate:b$1.fromJSON(a.coordinate)}}async function D(n,r){const i=await s("nearestVertex",[e(n),n,r]);return {...i,coordinate:b$1.fromJSON(i.coordinate)}}async function H(n,r,i,a){return (await s("nearestVertices",[e(n),n,r,i,a])).map((n=>({...n,coordinate:b$1.fromJSON(n.coordinate)})))}function L(n){return "xmin"in n?n.center:"x"in n?n:n.extent.center}async function q(n,t,r){var e;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;r=null!=(e=r)?e:L(n);const a=n.constructor.fromJSON(await s("rotate",[i,n,t,r]));return a.spatialReference=i,a}async function B(n,t){var r;if(null==n)throw new Error("Illegal Argument Exception");const e=n.spatialReference;t=null!=(r=t)?r:L(n);const i=n.constructor.fromJSON(await s("flipHorizontal",[e,n,t]));return i.spatialReference=e,i}async function C(n,t){var r;if(null==n)throw new Error("Illegal Argument Exception");const e=n.spatialReference;t=null!=(r=t)?r:L(n);const i=n.constructor.fromJSON(await s("flipVertical",[e,n,t]));return i.spatialReference=e,i}async function G(n,t,r,i){return a(await s("generalize",[e(n),n,t,r,i]))}async function P(n,t,r){return a(await s("densify",[e(n),n,t,r]))}async function U(n,t,r,i=0){return a(await s("geodesicDensify",[e(n),n,t,r,i]))}function W(n,t){return s("planarArea",[e(n),n,t])}function F(n,t){return s("planarLength",[e(n),n,t])}function K(n,t,r){return s("geodesicArea",[e(n),n,t,r])}function M(n,t,r){return s("geodesicLength",[e(n),n,t,r])}

export { A, E, F, G, I, J, K, M, O, P, R, S, U, V, W, b, d, g, h, j, k, l, m, p, q, v, w, x, y };