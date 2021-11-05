'use strict';

const request = require('./MapView-1195e7f1.js');
const devEnvironmentUtils = require('./devEnvironmentUtils-2fe58900.js');
require('./index-b630e408.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):request.m$6(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new request.s$3("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||request.B.getDefault(),url:request.U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new request.s$3("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=request.c$3(request.p$2(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;devEnvironmentUtils.a()&&(w=devEnvironmentUtils.t(w),P=devEnvironmentUtils.t(P));const D={portal:g.portal,url:request.U(request.ht(w)),origin:"portal-item"};return request.b$6(w,j).then((e=>{const r="cimRef"===h?request.c$5(e.data):e.data,o=request.l$5(r,D);if(o&&request.x(o)){if(P){const t=request.c$3(P,U);o.thumbnail=new request.c$4({url:t});}else S&&(o.thumbnail=new request.c$4({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new request.l$6({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new request.l$6({portal:g.portal,styleName:y.styleName,name:c}));}return o}))}function j(t,e,r){const o=request.j$4.replace(/\{SymbolName\}/gi,t.name);return request.b$6(o,r).then((t=>{const r=request.c$5(t.data);return request.l$5(r,{portal:e.portal,url:request.U(request.ht(o)),origin:"portal-item"})}))}

exports.fetchSymbolFromStyle = h;
exports.resolveWebStyleSymbol = g;
