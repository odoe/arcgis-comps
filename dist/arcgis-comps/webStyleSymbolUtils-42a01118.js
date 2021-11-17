import { D as B, E as c, ap as x, aI as c$2, aJ as l$1 } from './unitUtils-8a2b838a.js';
import { a, t } from './devEnvironmentUtils-930ae782.js';
import { a0 as U, b2 as ht, C as s } from './jsxFactory-ef3e403e.js';
import { l } from './jsonUtils-9c0d7442.js';
import { b, m, p, c as c$1, j as j$1 } from './styleUtils-f18fb225.js';
import './JSONSupport-a5eb98e7.js';
import './index-5b4f4de1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):m(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c$3,g,h,j){const d=y.data,U$1={portal:g&&g.portal||B.getDefault(),url:U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c$3));if(!N){const t=`The symbol name '${c$3}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:c$3}))}let w=c(p(N,h),U$1),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;a()&&(w=t(w),P=t(P));const D={portal:g.portal,url:U(ht(w)),origin:"portal-item"};return b(w,j).then((e=>{const r="cimRef"===h?c$1(e.data):e.data,o=l(r,D);if(o&&x(o)){if(P){const t=c(P,U$1);o.thumbnail=new c$2({url:t});}else S&&(o.thumbnail=new c$2({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new l$1({portal:g.portal,styleUrl:y.styleUrl,name:c$3}):y.styleName&&(o.styleOrigin=new l$1({portal:g.portal,styleName:y.styleName,name:c$3}));}return o}))}function j(t,e,r){const o=j$1.replace(/\{SymbolName\}/gi,t.name);return b(o,r).then((t=>{const r=c$1(t.data);return l(r,{portal:e.portal,url:U(ht(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, g as resolveWebStyleSymbol };
