'use strict';

const arcadeUtils = require('./arcadeUtils-86f086c4.js');
const request = require('./messageBundle-8be88d04.js');
const WhereClause = require('./WhereClause-f1cc2353.js');
require('./geometry-ef17530a.js');
require('./luxon-b6474344.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./number-5cee27f2.js');
require('./jsonUtils-b6068079.js');
require('./Field-b92c6f4a.js');
require('./enumeration-f235fe07.js');
require('./fieldType-32f95259.js');
require('./featureConversionUtils-df21e951.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./unitUtils-083cb8d0.js');
require('./FeatureSetReader-ed625ea0.js');
require('./centroid-d874c2ee.js');
require('./sizeVariableUtils-9012516e.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(arcadeUtils.I$1(s[0]))return request.k$2(arcadeUtils.l$2(n,s[0],arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.J(s[0]))return request.k$2(arcadeUtils.l$2(n,s[0].toArray(),arcadeUtils.O$1(s[1],-1)))}else if(2===s.length){if(arcadeUtils.I$1(s[0]))return request.k$2(arcadeUtils.l$2(n,s[0],arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.J(s[0]))return request.k$2(arcadeUtils.l$2(n,s[0].toArray(),arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.A(s[0]))return s[0].load().then((t=>d(WhereClause.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,arcadeUtils.O$1(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&arcadeUtils.A(s[0]))return s[0].load().then((t=>d(WhereClause.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,arcadeUtils.O$1(s[2],1e3),e.abortSignal)))));return request.k$2(arcadeUtils.l$2(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return request.s$11(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return request.k$2(n)}catch(e){return request.C$3(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(arcadeUtils.z(o,1,1),arcadeUtils.A(o[0]))return o[0].count(i.abortSignal);if(arcadeUtils.I$1(o[0])||arcadeUtils.Z(o[0]))return o[0].length;if(arcadeUtils.J(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

exports.registerFunctions = m;
