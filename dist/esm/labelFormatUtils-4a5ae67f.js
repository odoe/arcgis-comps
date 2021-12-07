import { c as s, s as s$2, t as L, x as S, v as m$1 } from './messageBundle-f75b4090.js';
import { s as s$1, B } from './opacityUtils-5e864561.js';
import { x, _ } from './labelUtils-8999bd11.js';
import './index-b157fcf2.js';
import './geometry-7e07b1ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=s.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function f(t,r,a){if(!t||!t.symbol)return p;const n=t.where,o=x(t),f=n?await import('./WhereClause-a0e7b548.js'):null;let d;if("arcade"===o.type){const t=await s$1(o.expression,a,r);d={type:"arcade",evaluate(r){try{const e=t.evaluate({$feature:"attributes"in r?t.repurposeFeature(r):t.repurposeAdapter(r)});if(null!=e)return e.toString()}catch(a){u.error(new s$2("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:o}));}return null},needsHydrationToEvaluate:()=>null==_(o.expression)};}else d={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[n.name]);}else o=e.field(n.name);return null==o?"":m(o,n)}))};if(n){let e;try{e=f.WhereClause.create(n,r);}catch(y){return p}const t=d.evaluate;d.evaluate=r=>{const a="attributes"in r?void 0:c;return e.testFeature(r,a)?t(r):null};}return d}function m(e,t){if(null==e)return "";const l=t.domain;if(l)if("codedValue"===l.type||"coded-value"===l.type){const t=e;for(const e of l.codedValues)if(e.code===t)return e.name}else if("range"===l.type){const t=+e,r="range"in l?l.range[0]:l.minValue,a="range"in l?l.range[1]:l.maxValue;if(r<=t&&t<=a)return l.name}let i=e;return "date"===t.type||"esriFieldTypeDate"===t.type?i=L(i,S("short-date")):B(t)&&(i=m$1(+i)),i||""}

export { f as createLabelFunction, m as formatField };
