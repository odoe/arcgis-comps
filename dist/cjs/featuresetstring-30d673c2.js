'use strict';

const arcadeUtils = require('./arcadeUtils-443fd928.js');
require('./unitUtils-61d611e2.js');
require('./messageBundle-312ceb47.js');
require('./index-57f2cfbb.js');
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?arcadeUtils.h$1.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:arcadeUtils.D$1[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):arcadeUtils.h$1.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:arcadeUtils.D$1[e.field.type],min:e.domain.min,max:e.domain.max}):null}function l(f){"async"===f.mode&&(f.functions.domain=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,u){if(arcadeUtils.z(u,2,3),u[0]instanceof arcadeUtils.b$1){return m(u[0].fullDomain(arcadeUtils.$(u[1]),void 0===u[2]?void 0:arcadeUtils.ee(u[2])))}if(arcadeUtils.A(u[0]))return u[0]._ensureLoaded().then((()=>m(arcadeUtils.le(arcadeUtils.$(u[1]),u[0],null,void 0===u[2]?void 0:arcadeUtils.ee(u[2])))));throw new Error("Invalid Parameter")}))},f.functions.subtypes=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(arcadeUtils.z(i,1,1),i[0]instanceof arcadeUtils.b$1){const e=i[0].subtypes();return e?arcadeUtils.h$1.convertObjectToArcadeDictionary(e):null}if(arcadeUtils.A(i[0]))return i[0]._ensureLoaded().then((()=>{const e=i[0].subtypes();return e?arcadeUtils.h$1.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},f.functions.domainname=function(n,u){return f.standardFunctionAsync(n,u,(function(n,u,d){if(arcadeUtils.z(d,2,4),d[0]instanceof arcadeUtils.b$1)return d[0].domainValueLookup(arcadeUtils.$(d[1]),d[2],void 0===d[3]?void 0:arcadeUtils.ee(d[3]));if(arcadeUtils.A(d[0]))return d[0]._ensureLoaded().then((()=>{const n=arcadeUtils.le(arcadeUtils.$(d[1]),d[0],null,void 0===d[3]?void 0:arcadeUtils.ee(d[3]));return arcadeUtils.se(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domainname",min:"2",max:"4"}),f.functions.domaincode=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,d){if(arcadeUtils.z(d,2,4),d[0]instanceof arcadeUtils.b$1)return d[0].domainCodeLookup(arcadeUtils.$(d[1]),d[2],void 0===d[3]?void 0:arcadeUtils.ee(d[3]));if(arcadeUtils.A(d[0]))return d[0]._ensureLoaded().then((()=>{const n=arcadeUtils.le(arcadeUtils.$(d[1]),d[0],null,void 0===d[3]?void 0:arcadeUtils.ee(d[3]));return arcadeUtils.ue(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domaincode",min:"2",max:"4"})),f.functions.text=function(n,e){return f.standardFunctionAsync(n,e,(function(n,e,o){if(arcadeUtils.z(o,1,2),!arcadeUtils.A(o[0]))return arcadeUtils.X(o[0],o[1]);{const e=arcadeUtils.O$1(o[1],"");if(""===e)return o[0].castToText();if("schema"===e.toLowerCase())return o[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return o[0].convertToText("featureset",n.abortSignal)}}))},f.functions.gdbversion=function(n,o){return f.standardFunctionAsync(n,o,(function(n,o,r){if(arcadeUtils.z(r,1,1),r[0]instanceof arcadeUtils.b$1)return r[0].gdbVersion();if(arcadeUtils.A(r[0]))return r[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},f.functions.schema=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(arcadeUtils.z(i,1,1),arcadeUtils.A(i[0]))return i[0].load().then((()=>arcadeUtils.h$1.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof arcadeUtils.b$1){const e=i[0].schema();return e?arcadeUtils.h$1.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))};}

exports.registerFunctions = l;
