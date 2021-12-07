'use strict';

const request = require('./messageBundle-8be88d04.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const labelUtils = require('./labelUtils-73814dda.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$1.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function f(t,r,a){if(!t||!t.symbol)return p;const n=t.where,o=labelUtils.x(t),f=n?await Promise.resolve().then(function () { return require('./WhereClause-f1cc2353.js'); }):null;let d;if("arcade"===o.type){const t=await opacityUtils.s(o.expression,a,r);d={type:"arcade",evaluate(r){try{const e=t.evaluate({$feature:"attributes"in r?t.repurposeFeature(r):t.repurposeAdapter(r)});if(null!=e)return e.toString()}catch(a){u.error(new request.s("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:o}));}return null},needsHydrationToEvaluate:()=>null==labelUtils._(o.expression)};}else d={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[n.name]);}else o=e.field(n.name);return null==o?"":m(o,n)}))};if(n){let e;try{e=f.WhereClause.create(n,r);}catch(y){return p}const t=d.evaluate;d.evaluate=r=>{const a="attributes"in r?void 0:c;return e.testFeature(r,a)?t(r):null};}return d}function m(e,t){if(null==e)return "";const l=t.domain;if(l)if("codedValue"===l.type||"coded-value"===l.type){const t=e;for(const e of l.codedValues)if(e.code===t)return e.name}else if("range"===l.type){const t=+e,r="range"in l?l.range[0]:l.minValue,a="range"in l?l.range[1]:l.maxValue;if(r<=t&&t<=a)return l.name}let i=e;return "date"===t.type||"esriFieldTypeDate"===t.type?i=request.L$1(i,request.S$1("short-date")):opacityUtils.B(t)&&(i=request.m(+i)),i||""}

exports.createLabelFunction = f;
exports.formatField = m;
