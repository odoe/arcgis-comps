import { C as s$1, r } from './jsxFactory-ef3e403e.js';
import { z as a$1, k, B, bP as J } from './unitUtils-8a2b838a.js';
import { h as h$1, o, s as s$2, u as u$2, v, b, g as g$1, y as y$1, D } from './utils-40c37ba2.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './generateRendererUtils-b7d21cae.js';
import './colorRamps-a6280e46.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=null;async function a(e,t){if(!t)return [];const i=e.field,o=e.valueExpression,a=e.normalizationType,f=e.normalizationField,c=e.normalizationTotal,u=[],d=e.viewInfoParams;let p=null,m=null;if(o){if(!s){const{arcadeUtils:e}=await a$1();s=e;}p=s.createFunction(o),m=d&&s.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new k(d.spatialReference)});}return t.forEach((e=>{const t=e.attributes;let n;if(o){const t=s.createExecContext(e,m);n=s.executeFunction(p,t);}else t&&(n=t[i]);if(a&&isFinite(n)){const e=t&&parseFloat(t[f]);n=h$1(n,a,e,c);}u.push(n);})),u}function f(e){const t=e.field,n=e.normalizationType,i=e.normalizationField;let o;return "log"===n?o="(NOT "+t+" = 0)":"field"===n?o="(NOT "+i+" = 0)":"natural-log"!==n&&"square-root"!==n||(o=`(${t} > 0)`),o}function c(t,n){return new s$1(t,n)}function u$1(e,t,n){const i=null!=t?e+" >= "+t:"",o=null!=n?e+" <= "+n:"";let r="";return r=i&&o?m$1(i,o):i||o,r?"("+r+")":""}function d$1(e,t,n,i){let o=null;return t?t.name!==e.objectIdField&&-1!==i.indexOf(t.type)||(o=c(n,"'field' should be one of these types: "+i.join(","))):o=c(n,"'field' is not defined in the layer schema"),o}function p(e,t,n){let r;return t?t.name!==e.objectIdField&&B(t)||(r=c(n,"'field' should be one of these numeric types: "+J.join(","))):r=c(n,"'field' is not defined in the layer schema"),r}function m$1(e,n){let i=r(e)?e:"";return r(n)&&n&&(i=i?"("+i+") AND ("+n+")":n),i}function y(e,t,n){const i=h({layer:e,fields:t});if(i.length)return c(n,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");const o=g({layer:e,fields:t});return o.length?c(n,"Unsupported fields: "+o.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function h(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}function g(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return !n||!n.supportsStatistics}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function u(o$1){const{attribute:t,featuresJSON:r}=o$1,{normalizationType:s,normalizationField:u,minValue:m,maxValue:d,fieldType:p}=t,f=await a({field:t.field,valueExpression:t.valueExpression,normalizationType:s,normalizationField:u,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},r),v$1=o({normalizationType:s,normalizationField:u,minValue:m,maxValue:d}),z={value:.5,fieldType:p},c="esriFieldTypeString"===p?s$2({values:f,supportsNullCount:v$1,percentileParams:z}):u$2({values:f,minValue:m,maxValue:d,useSampleStdDev:!s,supportsNullCount:v$1,percentileParams:z});return v(c,"esriFieldTypeDate"===p)}async function m(i){const{attribute:e,featuresJSON:n}=i,l=await a({field:e.field,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams},n),r=b(l);return g$1(r,e.domain,e.returnAllCodedValues)}async function d(i){const{attribute:e,featuresJSON:n}=i,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:u,classificationMethod:m}=e,d=await a({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:u,viewInfoParams:e.viewInfoParams},n),p=y$1(d,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:u,classificationMethod:m,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return D(p,m)}

export { d as classBreaks, u as summaryStatistics, m as uniqueValues };
