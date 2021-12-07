'use strict';

const SimpleLineSymbol = require('./symbols-29b793e5.js');
const devEnvironmentUtils = require('./devEnvironmentUtils-aafb5541.js');
const request = require('./messageBundle-8be88d04.js');
const Portal = require('./Portal-8d16604d.js');
const persistableUrlUtils = require('./persistableUrlUtils-c611d652.js');
const jsonUtils = require('./jsonUtils-62d28b73.js');
const styleUtils = require('./styleUtils-2b475600.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):styleUtils.m(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new request.s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||Portal.B.getDefault(),url:request.U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new request.s("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=persistableUrlUtils.c(styleUtils.p(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;devEnvironmentUtils.a()&&(w=devEnvironmentUtils.t(w),P=devEnvironmentUtils.t(P));const D={portal:g.portal,url:request.U(request.ht(w)),origin:"portal-item"};return styleUtils.b(w,j).then((e=>{const r="cimRef"===h?styleUtils.c(e.data):e.data,o=jsonUtils.l(r,D);if(o&&SimpleLineSymbol.x(o)){if(P){const t=persistableUrlUtils.c(P,U);o.thumbnail=new SimpleLineSymbol.c$2({url:t});}else S&&(o.thumbnail=new SimpleLineSymbol.c$2({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new SimpleLineSymbol.l({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new SimpleLineSymbol.l({portal:g.portal,styleName:y.styleName,name:c}));}return o}))}function j(t,e,r){const o=styleUtils.j.replace(/\{SymbolName\}/gi,t.name);return styleUtils.b(o,r).then((t=>{const r=styleUtils.c(t.data);return jsonUtils.l(r,{portal:e.portal,url:request.U(request.ht(o)),origin:"portal-item"})}))}

exports.fetchSymbolFromStyle = h;
exports.resolveWebStyleSymbol = g;
