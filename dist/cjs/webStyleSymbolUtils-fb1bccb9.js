'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const devEnvironmentUtils = require('./devEnvironmentUtils-98ac846b.js');
const request = require('./messageBundle-312ceb47.js');
const jsonUtils = require('./jsonUtils-1999c7ae.js');
const styleUtils = require('./styleUtils-10128dd7.js');
require('./JSONSupport-53c01d03.js');
require('./index-57f2cfbb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):styleUtils.m(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new request.s$1("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||unitUtils.B$1.getDefault(),url:request.U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new request.s$1("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=unitUtils.c$7(styleUtils.p(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;devEnvironmentUtils.a()&&(w=devEnvironmentUtils.t(w),P=devEnvironmentUtils.t(P));const D={portal:g.portal,url:request.U(request.ht(w)),origin:"portal-item"};return styleUtils.b(w,j).then((e=>{const r="cimRef"===h?styleUtils.c(e.data):e.data,o=jsonUtils.l(r,D);if(o&&unitUtils.x(o)){if(P){const t=unitUtils.c$7(P,U);o.thumbnail=new unitUtils.c$12({url:t});}else S&&(o.thumbnail=new unitUtils.c$12({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new unitUtils.l$3({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new unitUtils.l$3({portal:g.portal,styleName:y.styleName,name:c}));}return o}))}function j(t,e,r){const o=styleUtils.j.replace(/\{SymbolName\}/gi,t.name);return styleUtils.b(o,r).then((t=>{const r=styleUtils.c(t.data);return jsonUtils.l(r,{portal:e.portal,url:request.U(request.ht(o)),origin:"portal-item"})}))}

exports.fetchSymbolFromStyle = h;
exports.resolveWebStyleSymbol = g;
