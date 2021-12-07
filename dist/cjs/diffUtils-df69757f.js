'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function i(e){return e instanceof request.p}function c(t){return t instanceof request.S?Object.keys(t.items):i(t)?request.e$3(t).keys():t?Object.keys(t):[]}function u(t,n){return t instanceof request.S?t.items[n]:t[n]}function l(t,e){return !(!Array.isArray(t)||!Array.isArray(e))&&t.length!==e.length}function s(t){return t?t.declaredClass:null}function p(t,e){const n=t.diff;if(n&&"function"==typeof n)return n(t,e);const r=c(t),a=c(e);if(0===r.length&&0===a.length)return;if(!r.length||!a.length||l(t,e))return {type:"complete",oldValue:t,newValue:e};const y=a.filter((t=>-1===r.indexOf(t))),m=r.filter((t=>-1===a.indexOf(t))),d=r.filter((n=>a.indexOf(n)>-1&&u(t,n)!==u(e,n))).concat(y,m).sort(),b=s(t);if(b&&f.indexOf(b)>-1&&d.length)return {type:"complete",oldValue:t,newValue:e};let h;const j=i(t)&&i(e);for(const f of d){const r=u(t,f),i=u(e,f);let c;(j||"function"!=typeof r&&"function"!=typeof i)&&(r!==i&&(null==r&&null==i||(c=n&&n[f]&&"function"==typeof n[f]?n[f](r,i):"object"==typeof r&&"object"==typeof i&&s(r)===s(i)?p(r,i):{type:"complete",oldValue:r,newValue:i},request.r(c)&&(request.r(h)?h.diff[f]=c:h={type:"partial",diff:{[f]:c}}))));}return h}function a(t,e){if(request.t$1(t))return !1;const o=e.split(".");let r=t;for(const n of o){if("complete"===r.type)return !0;if("partial"!==r.type)return !1;{const t=r.diff[n];if(!t)return !1;r=t;}}return !0}function y(t,e){for(const n of e)if(a(t,n))return !0;return !1}function m(t,e){if(!("function"==typeof t||"function"==typeof e||request.t$1(t)&&request.t$1(e)))return request.t$1(t)||request.t$1(e)||"object"==typeof t&&"object"==typeof e&&s(t)!==s(e)?{type:"complete",oldValue:t,newValue:e}:p(t,e)}function d(t){if(request.t$1(t))return !0;switch(t.type){case"complete":return !1;case"collection":{const e=t;for(const t of e.added)if(!d(t))return !1;for(const t of e.removed)if(!d(t))return !1;for(const t of e.changed)if(!d(t))return !1;return !0}case"partial":for(const e in t.diff){if(!d(t.diff[e]))return !1}return !0}}

exports.a = a;
exports.d = d;
exports.m = m;
exports.y = y;
