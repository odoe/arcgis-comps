import { h, an as D, z, a as b, $, e as ee, A, ao as le, ap as se, aq as ue, ar as X, F as O } from './arcadeUtils-3938dc20.js';
import './Graphic-75d1efd2.js';
import './jsxFactory-b8b7429b.js';
import './index-921bd636.js';
import './JSONSupport-15eefdaf.js';
import './number-b10a185b.js';
import './Field-3662c57d.js';
import './fieldType-1c6ed2e9.js';
import './featureConversionUtils-3b0788c3.js';
import './OptimizedFeature-ac6d77d3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './FeatureSetReader-cba66de5.js';
import './centroid-42fbbfc8.js';
import './sizeVariableUtils-4d3662df.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?h.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:D[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):h.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:D[e.field.type],min:e.domain.min,max:e.domain.max}):null}function l(f){"async"===f.mode&&(f.functions.domain=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,u){if(z(u,2,3),u[0]instanceof b){return m(u[0].fullDomain($(u[1]),void 0===u[2]?void 0:ee(u[2])))}if(A(u[0]))return u[0]._ensureLoaded().then((()=>m(le($(u[1]),u[0],null,void 0===u[2]?void 0:ee(u[2])))));throw new Error("Invalid Parameter")}))},f.functions.subtypes=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(z(i,1,1),i[0]instanceof b){const e=i[0].subtypes();return e?h.convertObjectToArcadeDictionary(e):null}if(A(i[0]))return i[0]._ensureLoaded().then((()=>{const e=i[0].subtypes();return e?h.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},f.functions.domainname=function(n,u){return f.standardFunctionAsync(n,u,(function(n,u,d){if(z(d,2,4),d[0]instanceof b)return d[0].domainValueLookup($(d[1]),d[2],void 0===d[3]?void 0:ee(d[3]));if(A(d[0]))return d[0]._ensureLoaded().then((()=>{const n=le($(d[1]),d[0],null,void 0===d[3]?void 0:ee(d[3]));return se(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domainname",min:"2",max:"4"}),f.functions.domaincode=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,d){if(z(d,2,4),d[0]instanceof b)return d[0].domainCodeLookup($(d[1]),d[2],void 0===d[3]?void 0:ee(d[3]));if(A(d[0]))return d[0]._ensureLoaded().then((()=>{const n=le($(d[1]),d[0],null,void 0===d[3]?void 0:ee(d[3]));return ue(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domaincode",min:"2",max:"4"})),f.functions.text=function(n,e){return f.standardFunctionAsync(n,e,(function(n,e,o){if(z(o,1,2),!A(o[0]))return X(o[0],o[1]);{const e=O(o[1],"");if(""===e)return o[0].castToText();if("schema"===e.toLowerCase())return o[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return o[0].convertToText("featureset",n.abortSignal)}}))},f.functions.gdbversion=function(n,o){return f.standardFunctionAsync(n,o,(function(n,o,r){if(z(r,1,1),r[0]instanceof b)return r[0].gdbVersion();if(A(r[0]))return r[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},f.functions.schema=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(z(i,1,1),A(i[0]))return i[0].load().then((()=>h.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof b){const e=i[0].schema();return e?h.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))};}

export { l as registerFunctions };
