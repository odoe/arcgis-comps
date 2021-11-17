'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=()=>!!request.s$3("enable-feature:force-wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f={};async function u(e,t){try{return {data:(await b(e,t)).data,baseUrl:request.ht(e),styleUrl:e}}catch(o){return request.b$1(o),null}}function i(e,t,r){const o=t&&t.portal||unitUtils.B$1.getDefault();let s;const l=`${o.url} - ${o.user&&o.user.username} - ${e}`;return f[l]||(f[l]=y(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl,styleName:e})))),f[l]}function y(e,r,o){return r.load(o).then((()=>{const t=new unitUtils.d$4({disableExtraQuery:!0,query:`owner:${w} AND type:${h} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){if(e.typeKeywords.some((e=>e.toLowerCase()===n))&&e.type===h&&e.owner===w){s=e;break}}if(!s)throw new request.s$1("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function m(e,r,o){return e.styleUrl?u(e.styleUrl,o):e.styleName?i(e.styleName,r,o):Promise.reject(new request.s$1("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function c(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function p(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!a())for(const r of e.formatInfos)if("gltf"===r.type)return r.href;return e.webRef}function b(t,r){const s={responseType:"json",query:{f:"json"},...r};return request.E(request.z$1(t),s)}const w="esri_en",h="Style",j="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

exports.b = b;
exports.c = c;
exports.j = j;
exports.m = m;
exports.p = p;
