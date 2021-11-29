'use strict';

const request = require('./MapView-1726f571.js');
const devEnvironmentUtils = require('./devEnvironmentUtils-a59d6ef8.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):request.m$8(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new request.s$1("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||request.B$1.getDefault(),url:request.U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new request.s$1("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=request.c$6(request.p$3(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;devEnvironmentUtils.a()&&(w=devEnvironmentUtils.t(w),P=devEnvironmentUtils.t(P));const D={portal:g.portal,url:request.U(request.ht(w)),origin:"portal-item"};return request.b$8(w,j).then((e=>{const r="cimRef"===h?request.c$8(e.data):e.data,o=request.l$6(r,D);if(o&&request.x$2(o)){if(P){const t=request.c$6(P,U);o.thumbnail=new request.c$7({url:t});}else S&&(o.thumbnail=new request.c$7({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new request.l$7({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new request.l$7({portal:g.portal,styleName:y.styleName,name:c}));}return o}))}function j(t,e,r){const o=request.j$7.replace(/\{SymbolName\}/gi,t.name);return request.b$8(o,r).then((t=>{const r=request.c$8(t.data);return request.l$6(r,{portal:e.portal,url:request.U(request.ht(o)),origin:"portal-item"})}))}

exports.fetchSymbolFromStyle = h;
exports.resolveWebStyleSymbol = g;
