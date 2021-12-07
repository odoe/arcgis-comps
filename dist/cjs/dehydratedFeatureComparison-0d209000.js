'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e,n){if(e===n)return !0;if(null==e||null==n)return !1;if(e.length!==n.length)return !1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return !1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return !1}return !0}function t(e,t){if(e===t)return !0;if(null==e||null==t)return !1;if(e.length!==t.length)return !1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return !1;return !0}function r(e,n){return !!f(e.spatialReference,n.spatialReference)&&(e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m)}function a(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&t(e.paths,n.paths))}function i(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&t(e.rings,n.rings))}function u(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!f(e.spatialReference,t.spatialReference)&&n(e.points,t.points))}function s(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&(e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax))}function f(e,n){return e===n||e&&n&&e.equals(n)}function l(n,t){if(n===t)return !0;if(request.t$1(n)||request.t$1(t))return !1;if(n.type!==t.type)return !1;switch(n.type){case"point":return r(n,t);case"extent":return s(n,t);case"polyline":return a(n,t);case"polygon":return i(n,t);case"multipoint":return u(n,t);case"mesh":return !1;default:return}}function c(e,n){if(e===n)return !0;if(!e||!n)return !1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return !1;for(const a of t)if(e[a]!==n[a])return !1;return !0}function o(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!l(e.geometry,n.geometry)&&!!c(e.attributes,n.attributes))}

exports.o = o;
exports.r = r;
