'use strict';

const arcadeUtils = require('./arcadeUtils-86f086c4.js');
require('./messageBundle-8be88d04.js');
require('./index-fde8502c.js');
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?arcadeUtils.h$1.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:arcadeUtils.D$1[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):arcadeUtils.h$1.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:arcadeUtils.D$1[e.field.type],min:e.domain.min,max:e.domain.max}):null}function l(f){"async"===f.mode&&(f.functions.domain=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,u){if(arcadeUtils.z(u,2,3),u[0]instanceof arcadeUtils.b$1){return m(u[0].fullDomain(arcadeUtils.$(u[1]),void 0===u[2]?void 0:arcadeUtils.ee(u[2])))}if(arcadeUtils.A(u[0]))return u[0]._ensureLoaded().then((()=>m(arcadeUtils.le(arcadeUtils.$(u[1]),u[0],null,void 0===u[2]?void 0:arcadeUtils.ee(u[2])))));throw new Error("Invalid Parameter")}))},f.functions.subtypes=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(arcadeUtils.z(i,1,1),i[0]instanceof arcadeUtils.b$1){const e=i[0].subtypes();return e?arcadeUtils.h$1.convertObjectToArcadeDictionary(e):null}if(arcadeUtils.A(i[0]))return i[0]._ensureLoaded().then((()=>{const e=i[0].subtypes();return e?arcadeUtils.h$1.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},f.functions.domainname=function(n,u){return f.standardFunctionAsync(n,u,(function(n,u,d){if(arcadeUtils.z(d,2,4),d[0]instanceof arcadeUtils.b$1)return d[0].domainValueLookup(arcadeUtils.$(d[1]),d[2],void 0===d[3]?void 0:arcadeUtils.ee(d[3]));if(arcadeUtils.A(d[0]))return d[0]._ensureLoaded().then((()=>{const n=arcadeUtils.le(arcadeUtils.$(d[1]),d[0],null,void 0===d[3]?void 0:arcadeUtils.ee(d[3]));return arcadeUtils.se(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domainname",min:"2",max:"4"}),f.functions.domaincode=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,d){if(arcadeUtils.z(d,2,4),d[0]instanceof arcadeUtils.b$1)return d[0].domainCodeLookup(arcadeUtils.$(d[1]),d[2],void 0===d[3]?void 0:arcadeUtils.ee(d[3]));if(arcadeUtils.A(d[0]))return d[0]._ensureLoaded().then((()=>{const n=arcadeUtils.le(arcadeUtils.$(d[1]),d[0],null,void 0===d[3]?void 0:arcadeUtils.ee(d[3]));return arcadeUtils.ue(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domaincode",min:"2",max:"4"})),f.functions.text=function(n,e){return f.standardFunctionAsync(n,e,(function(n,e,o){if(arcadeUtils.z(o,1,2),!arcadeUtils.A(o[0]))return arcadeUtils.X(o[0],o[1]);{const e=arcadeUtils.O$1(o[1],"");if(""===e)return o[0].castToText();if("schema"===e.toLowerCase())return o[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return o[0].convertToText("featureset",n.abortSignal)}}))},f.functions.gdbversion=function(n,o){return f.standardFunctionAsync(n,o,(function(n,o,r){if(arcadeUtils.z(r,1,1),r[0]instanceof arcadeUtils.b$1)return r[0].gdbVersion();if(arcadeUtils.A(r[0]))return r[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},f.functions.schema=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(arcadeUtils.z(i,1,1),arcadeUtils.A(i[0]))return i[0].load().then((()=>arcadeUtils.h$1.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof arcadeUtils.b$1){const e=i[0].schema();return e?arcadeUtils.h$1.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))};}

exports.registerFunctions = l;
