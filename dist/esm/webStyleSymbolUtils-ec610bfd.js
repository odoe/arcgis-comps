import { x, q as c$1, r as l$1 } from './symbols-b414aa72.js';
import { a, t } from './devEnvironmentUtils-9331429c.js';
import { Z as U, c0 as ht, s } from './messageBundle-f75b4090.js';
import { B } from './Portal-c5cfa317.js';
import { c } from './persistableUrlUtils-40bbec67.js';
import { l } from './jsonUtils-ade233cd.js';
import { b, m, p, j as j$1, c as c$2 } from './styleUtils-cb28c5ef.js';
import './enumeration-d3301938.js';
import './opacityUtils-5e864561.js';
import './geometry-7e07b1ba.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './index-b157fcf2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):m(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c$3,g,h,j){const d=y.data,U$1={portal:g&&g.portal||B.getDefault(),url:U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c$3));if(!N){const t=`The symbol name '${c$3}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:c$3}))}let w=c(p(N,h),U$1),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;a()&&(w=t(w),P=t(P));const D={portal:g.portal,url:U(ht(w)),origin:"portal-item"};return b(w,j).then((e=>{const r="cimRef"===h?c$2(e.data):e.data,o=l(r,D);if(o&&x(o)){if(P){const t=c(P,U$1);o.thumbnail=new c$1({url:t});}else S&&(o.thumbnail=new c$1({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new l$1({portal:g.portal,styleUrl:y.styleUrl,name:c$3}):y.styleName&&(o.styleOrigin=new l$1({portal:g.portal,styleName:y.styleName,name:c$3}));}return o}))}function j(t,e,r){const o=j$1.replace(/\{SymbolName\}/gi,t.name);return b(o,r).then((t=>{const r=c$2(t.data);return l(r,{portal:e.portal,url:U(ht(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, g as resolveWebStyleSymbol };
