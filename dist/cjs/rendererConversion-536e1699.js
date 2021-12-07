'use strict';

const request = require('./messageBundle-8be88d04.js');
const jsonUtils = require('./jsonUtils-62d28b73.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(r){return request.t$1(r)||"simple"===r.type||"unique-value"===r.type||"class-breaks"===r.type||"dictionary"===r.type}function s(n){if(request.t$1(n))return null;if(!o(n))return new request.s("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${n.type||n.declaredClass}'`,{renderer:n});switch(n.type){case"simple":return u(n);case"unique-value":return l(n);case"class-breaks":return i(n);case"dictionary":return null}return null}function t(e,n){if(!n)return null;let o;if(o=Array.isArray(n)?n:[n],o.length>0){const n=o.map((r=>r.details.symbol.type||r.details.symbol.declaredClass)).filter((r=>!!r));n.sort();const s=[];return n.forEach(((r,e)=>{0!==e&&r===n[e-1]||s.push(r);})),new request.s("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${s.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:o})}return null}function u(r){return t(r,jsonUtils.a(r.symbol).error)}function l(r){const e=r.uniqueValueInfos.map((r=>jsonUtils.a(r.symbol).error)).filter((r=>!!r)),o=jsonUtils.a(r.defaultSymbol);return o.error&&e.unshift(o.error),t(r,e)}function i(r){const e=r.classBreakInfos.map((r=>jsonUtils.a(r.symbol).error)).filter((r=>!!r)),o=jsonUtils.a(r.defaultSymbol);return o.error&&e.unshift(o.error),t(r,e)}

exports.o = o;
exports.s = s;
