'use strict';

const arcadeUtils = require('./arcadeUtils-443fd928.js');
const request = require('./messageBundle-312ceb47.js');
const WhereClause = require('./WhereClause-f18f6e56.js');
require('./unitUtils-61d611e2.js');
require('./JSONSupport-53c01d03.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./number-12de6c3e.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./featureConversionUtils-e6cca372.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./FeatureSetReader-56da5c2b.js');
require('./centroid-fbe1334b.js');
require('./sizeVariableUtils-9012516e.js');
require('./index-57f2cfbb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(arcadeUtils.I$1(s[0]))return request.k$1(arcadeUtils.l$2(n,s[0],arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.J(s[0]))return request.k$1(arcadeUtils.l$2(n,s[0].toArray(),arcadeUtils.O$1(s[1],-1)))}else if(2===s.length){if(arcadeUtils.I$1(s[0]))return request.k$1(arcadeUtils.l$2(n,s[0],arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.J(s[0]))return request.k$1(arcadeUtils.l$2(n,s[0].toArray(),arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.A(s[0]))return s[0].load().then((t=>d(WhereClause.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,arcadeUtils.O$1(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&arcadeUtils.A(s[0]))return s[0].load().then((t=>d(WhereClause.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,arcadeUtils.O$1(s[2],1e3),e.abortSignal)))));return request.k$1(arcadeUtils.l$2(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return request.s$4(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return request.k$1(n)}catch(e){return request.C$2(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(arcadeUtils.z(o,1,1),arcadeUtils.A(o[0]))return o[0].count(i.abortSignal);if(arcadeUtils.I$1(o[0])||arcadeUtils.Z(o[0]))return o[0].length;if(arcadeUtils.J(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

exports.registerFunctions = m;
