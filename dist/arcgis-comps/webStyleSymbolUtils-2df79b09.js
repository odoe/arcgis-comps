import { x, q as c$2, r as l$1 } from './symbols-dc010d3b.js';
import { a, t } from './devEnvironmentUtils-50196127.js';
import { ae as U, b1 as ht, a as s } from './cast-e5ea2533.js';
import { B } from './Portal-f1457cb4.js';
import { c } from './persistableUrlUtils-a9da326c.js';
import { l } from './jsonUtils-528e9eda.js';
import { b, m, p, c as c$1, j as j$1 } from './styleUtils-5c87d3a9.js';
import './enumeration-da141e85.js';
import './opacityUtils-5755cb64.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './JSONSupport-8dda8bae.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './Collection-ac20f1a1.js';
import './collectionUtils-b35b097b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):m(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c$3,g,h,j){const d=y.data,U$1={portal:g&&g.portal||B.getDefault(),url:U(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c$3));if(!N){const t=`The symbol name '${c$3}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:c$3}))}let w=c(p(N,h),U$1),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;a()&&(w=t(w),P=t(P));const D={portal:g.portal,url:U(ht(w)),origin:"portal-item"};return b(w,j).then((e=>{const r="cimRef"===h?c$1(e.data):e.data,o=l(r,D);if(o&&x(o)){if(P){const t=c(P,U$1);o.thumbnail=new c$2({url:t});}else S&&(o.thumbnail=new c$2({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new l$1({portal:g.portal,styleUrl:y.styleUrl,name:c$3}):y.styleName&&(o.styleOrigin=new l$1({portal:g.portal,styleName:y.styleName,name:c$3}));}return o}))}function j(t,e,r){const o=j$1.replace(/\{SymbolName\}/gi,t.name);return b(o,r).then((t=>{const r=c$1(t.data);return l(r,{portal:e.portal,url:U(ht(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, g as resolveWebStyleSymbol };
