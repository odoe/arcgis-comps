import { I, aj as l$1, F as O, J, A, z, Z } from './arcadeUtils-c6c756c3.js';
import { ax as k, ba as s, bx as C } from './cast-e5ea2533.js';
import { WhereClause as m$1 } from './WhereClause-e7087be7.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './Polyline-56152656.js';
import './_commonjsHelpers-3cea27e3.js';
import './number-399be3ea.js';
import './geometry-160ffbb5.js';
import './Field-67832b5b.js';
import './enumeration-da141e85.js';
import './fieldType-7f6b02ef.js';
import './featureConversionUtils-dd47b9b4.js';
import './OptimizedFeature-53745eb6.js';
import './OptimizedFeatureSet-27736f1f.js';
import './unitUtils-5dcccb3c.js';
import './FeatureSetReader-732e84ff.js';
import './centroid-5b845b7c.js';
import './sizeVariableUtils-4d3662df.js';
import './_commonjsHelpers-020ca939.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(I(s[0]))return k(l$1(n,s[0],O(s[1],-1)));if(J(s[0]))return k(l$1(n,s[0].toArray(),O(s[1],-1)))}else if(2===s.length){if(I(s[0]))return k(l$1(n,s[0],O(s[1],-1)));if(J(s[0]))return k(l$1(n,s[0].toArray(),O(s[1],-1)));if(A(s[0]))return s[0].load().then((t=>d(m$1.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&A(s[0]))return s[0].load().then((t=>d(m$1.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))));return k(l$1(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return s(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return k(n)}catch(e){return C(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(z(o,1,1),A(o[0]))return o[0].count(i.abortSignal);if(I(o[0])||Z(o[0]))return o[0].length;if(J(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { m as registerFunctions };
