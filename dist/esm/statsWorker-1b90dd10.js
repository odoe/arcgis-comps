import { fH as a$1, k } from './MapView-ac75aae8.js';
import { h, s as s$1, u as u$1, v, b, g, y, D, o } from './utils-f2e5378d.js';
import './index-b157fcf2.js';
import './ClassBreaksDefinition-bd022896.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=null;async function a(e,t){if(!t)return [];const i=e.field,o=e.valueExpression,a=e.normalizationType,f=e.normalizationField,c=e.normalizationTotal,u=[],d=e.viewInfoParams;let p=null,m=null;if(o){if(!s){const{arcadeUtils:e}=await a$1();s=e;}p=s.createFunction(o),m=d&&s.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new k(d.spatialReference)});}return t.forEach((e=>{const t=e.attributes;let n;if(o){const t=s.createExecContext(e,m);n=s.executeFunction(p,t);}else t&&(n=t[i]);if(a&&isFinite(n)){const e=t&&parseFloat(t[f]);n=h(n,a,e,c);}u.push(n);})),u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function u(o$1){const{attribute:t,featuresJSON:r}=o$1,{normalizationType:s,normalizationField:u,minValue:m,maxValue:d,fieldType:p}=t,f=await a({field:t.field,valueExpression:t.valueExpression,normalizationType:s,normalizationField:u,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},r),v$1=o({normalizationType:s,normalizationField:u,minValue:m,maxValue:d}),z={value:.5,fieldType:p},c="esriFieldTypeString"===p?s$1({values:f,supportsNullCount:v$1,percentileParams:z}):u$1({values:f,minValue:m,maxValue:d,useSampleStdDev:!s,supportsNullCount:v$1,percentileParams:z});return v(c,"esriFieldTypeDate"===p)}async function m(i){const{attribute:e,featuresJSON:n}=i,l=await a({field:e.field,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams},n),r=b(l);return g(r,e.domain,e.returnAllCodedValues)}async function d(i){const{attribute:e,featuresJSON:n}=i,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:u,classificationMethod:m}=e,d=await a({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:u,viewInfoParams:e.viewInfoParams},n),p=y(d,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:u,classificationMethod:m,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return D(p,m)}

export { d as classBreaks, u as summaryStatistics, m as uniqueValues };
