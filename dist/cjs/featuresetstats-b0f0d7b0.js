'use strict';

const arcadeUtils = require('./arcadeUtils-ded9452f.js');
const request = require('./MapView-1726f571.js');
const WhereClause = require('./WhereClause-ff555802.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./number-474b2a5a.js');
require('./FeatureSetReader-69300d2f.js');
require('./centroid-07923388.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(arcadeUtils.I$1(s[0]))return request.k$3(arcadeUtils.l$2(n,s[0],arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.J(s[0]))return request.k$3(arcadeUtils.l$2(n,s[0].toArray(),arcadeUtils.O$1(s[1],-1)))}else if(2===s.length){if(arcadeUtils.I$1(s[0]))return request.k$3(arcadeUtils.l$2(n,s[0],arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.J(s[0]))return request.k$3(arcadeUtils.l$2(n,s[0].toArray(),arcadeUtils.O$1(s[1],-1)));if(arcadeUtils.A(s[0]))return s[0].load().then((t=>d(WhereClause.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,arcadeUtils.O$1(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&arcadeUtils.A(s[0]))return s[0].load().then((t=>d(WhereClause.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,arcadeUtils.O$1(s[2],1e3),e.abortSignal)))));return request.k$3(arcadeUtils.l$2(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return request.s$16(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return request.k$3(n)}catch(e){return request.C$3(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(arcadeUtils.z(o,1,1),arcadeUtils.A(o[0]))return o[0].count(i.abortSignal);if(arcadeUtils.I$1(o[0])||arcadeUtils.Z(o[0]))return o[0].length;if(arcadeUtils.J(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

exports.registerFunctions = m;
