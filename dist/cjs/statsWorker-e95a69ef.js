'use strict';

const request = require('./messageBundle-8be88d04.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const utils = require('./utils-16feefb0.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');
require('./ClassBreaksDefinition-fc75df48.js');
require('./colorRamps-d0c2cb9d.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./enumeration-f235fe07.js');
require('./Symbol-f0556e23.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=null;async function a(e,t){if(!t)return [];const i=e.field,o=e.valueExpression,a=e.normalizationType,f=e.normalizationField,c=e.normalizationTotal,u=[],d=e.viewInfoParams;let p=null,m=null;if(o){if(!s){const{arcadeUtils:e}=await opacityUtils.a();s=e;}p=s.createFunction(o),m=d&&s.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new request.k(d.spatialReference)});}return t.forEach((e=>{const t=e.attributes;let n;if(o){const t=s.createExecContext(e,m);n=s.executeFunction(p,t);}else t&&(n=t[i]);if(a&&isFinite(n)){const e=t&&parseFloat(t[f]);n=utils.h(n,a,e,c);}u.push(n);})),u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function u(o){const{attribute:t,featuresJSON:r}=o,{normalizationType:s,normalizationField:u,minValue:m,maxValue:d,fieldType:p}=t,f=await a({field:t.field,valueExpression:t.valueExpression,normalizationType:s,normalizationField:u,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},r),v=utils.o({normalizationType:s,normalizationField:u,minValue:m,maxValue:d}),z={value:.5,fieldType:p},c="esriFieldTypeString"===p?utils.s({values:f,supportsNullCount:v,percentileParams:z}):utils.u({values:f,minValue:m,maxValue:d,useSampleStdDev:!s,supportsNullCount:v,percentileParams:z});return utils.v(c,"esriFieldTypeDate"===p)}async function m(i){const{attribute:e,featuresJSON:n}=i,l=await a({field:e.field,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams},n),r=utils.b(l);return utils.g(r,e.domain,e.returnAllCodedValues)}async function d(i){const{attribute:e,featuresJSON:n}=i,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:u,classificationMethod:m}=e,d=await a({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:u,viewInfoParams:e.viewInfoParams},n),p=utils.y(d,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:u,classificationMethod:m,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return utils.D(p,m)}

exports.classBreaks = d;
exports.summaryStatistics = u;
exports.uniqueValues = m;
