'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const workers = require('./workers-1668d5a8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(n){var t;return Array.isArray(n)?null==(t=n[0])?void 0:t.spatialReference:null==n?void 0:n.spatialReference}function i(n){return n?Array.isArray(n)?n.map(i):n.toJSON?n.toJSON():n:n}function a(n){return Array.isArray(n)?n.map((n=>unitUtils.d$1(n))):unitUtils.d$1(n)}function o(n,t){let r;return Array.isArray(n)?r=n:(r=[],r.push(n),null!=t&&r.push(t)),r}let c;async function u(){return c||(c=workers.u("geometryEngineWorker",{strategy:"distributed"})),c}async function s(n,t){return (await u()).invoke("executeGEOperation",{operation:n,parameters:i(t)})}async function l(n,t){return a(await s("clip",[e(n),n,t]))}async function y(n,t){return a(await s("cut",[e(n),n,t]))}function p(n,t){return s("contains",[e(n),n,t])}function w(n,t){return s("crosses",[e(n),n,t])}function m(n,t,r){return s("distance",[e(n),n,t,r])}function d(n,t){return s("equals",[e(n),n,t])}function g(n,t){return s("intersects",[e(n),n,t])}function A(n,t){return s("touches",[e(n),n,t])}function x(n,t){return s("within",[e(n),n,t])}function S(n,t){return s("disjoint",[e(n),n,t])}function O(n,t){return s("overlaps",[e(n),n,t])}function h(n,t,r){return s("relate",[e(n),n,t,r])}function v(n){return s("isSimple",[e(n),n])}async function J(n){return a(await s("simplify",[e(n),n]))}async function R(n,t){return a(await s("difference",[e(n),n,t]))}async function E(n,t){return a(await s("symmetricDifference",[e(n),n,t]))}async function j(n,t){return a(await s("intersect",[e(n),n,t]))}async function k(n,t=null){const r=o(n,t);return a(await s("union",[e(r),r]))}async function I(n,t,r,i,o,c){return a(await s("offset",[e(n),n,t,r,i,o,c]))}async function V(n,t,r,i=!1){const o=[e(n),n,t,r,i];return a(await s("buffer",o))}async function b(n,t,r,i,o,c){const u=[e(n),n,t,r,i,o,c];return a(await s("geodesicBuffer",u))}function L(n){return "xmin"in n?n.center:"x"in n?n:n.extent.center}async function q(n,t,r){var e;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;r=null!=(e=r)?e:L(n);const a=n.constructor.fromJSON(await s("rotate",[i,n,t,r]));return a.spatialReference=i,a}async function G(n,t,r,i){return a(await s("generalize",[e(n),n,t,r,i]))}async function P(n,t,r){return a(await s("densify",[e(n),n,t,r]))}async function U(n,t,r,i=0){return a(await s("geodesicDensify",[e(n),n,t,r,i]))}function W(n,t){return s("planarArea",[e(n),n,t])}function F(n,t){return s("planarLength",[e(n),n,t])}function K(n,t,r){return s("geodesicArea",[e(n),n,t,r])}function M(n,t,r){return s("geodesicLength",[e(n),n,t,r])}

exports.A = A;
exports.E = E;
exports.F = F;
exports.G = G;
exports.I = I;
exports.J = J;
exports.K = K;
exports.M = M;
exports.O = O;
exports.P = P;
exports.R = R;
exports.S = S;
exports.U = U;
exports.V = V;
exports.W = W;
exports.b = b;
exports.d = d;
exports.g = g;
exports.h = h;
exports.j = j;
exports.k = k;
exports.l = l;
exports.m = m;
exports.p = p;
exports.q = q;
exports.v = v;
exports.w = w;
exports.x = x;
exports.y = y;