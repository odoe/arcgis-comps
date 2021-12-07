import{z as r,d as n,$ as t,e,c as o,am as i,A as a,an as u,ao as c,ap as f,aq as s,V as d}from"./p-1ce5adcc.js";import"./p-e58503d5.js";import"./p-53bb6ab4.js";import"./p-b79fcce3.js";import"./p-6f4b0bc8.js";import"./p-a184d75f.js";import"./p-5a4bf917.js";import"./p-c048b814.js";import"./p-a131049b.js";import"./p-a9a30646.js";import"./p-a2324023.js";import"./p-5032dfbd.js";import"./p-182bb5be.js";import"./p-db87794e.js";import"./p-01e5a461.js";import"./p-c0f84cd3.js";import"./p-8925cd73.js";import"./p-dfc6337f.js";function m(r){return r&&r.domain?o.convertObjectToArcadeDictionary("coded-value"===r.domain.type||"codedValue"===r.domain.type?{type:"codedValue",name:r.domain.name,dataType:i[r.field.type],codedValues:r.domain.codedValues.map((r=>({name:r.name,code:r.code})))}:{type:"range",name:r.domain.name,dataType:i[r.field.type],min:r.domain.min,max:r.domain.max}):null}function p(i){"async"===i.mode&&(i.functions.domain=function(o,c){return i.standardFunctionAsync(o,c,(function(o,i,c){if(r(c,2,3),c[0]instanceof n)return m(c[0].fullDomain(t(c[1]),void 0===c[2]?void 0:e(c[2])));if(a(c[0]))return c[0]._ensureLoaded().then((()=>m(u(t(c[1]),c[0],null,void 0===c[2]?void 0:e(c[2])))));throw new Error("Invalid Parameter")}))},i.functions.subtypes=function(t,e){return i.standardFunctionAsync(t,e,(function(t,e,i){if(r(i,1,1),i[0]instanceof n){const r=i[0].subtypes();return r?o.convertObjectToArcadeDictionary(r):null}if(a(i[0]))return i[0]._ensureLoaded().then((()=>{const r=i[0].subtypes();return r?o.convertObjectToArcadeDictionary(r):null}));throw new Error("Invalid Parameter")}))},i.functions.domainname=function(o,f){return i.standardFunctionAsync(o,f,(function(o,i,f){if(r(f,2,4),f[0]instanceof n)return f[0].domainValueLookup(t(f[1]),f[2],void 0===f[3]?void 0:e(f[3]));if(a(f[0]))return f[0]._ensureLoaded().then((()=>{const r=u(t(f[1]),f[0],null,void 0===f[3]?void 0:e(f[3]));return c(r,f[2])}));throw new Error("Invalid Parameter")}))},i.signatures.push({name:"domainname",min:"2",max:"4"}),i.functions.domaincode=function(o,c){return i.standardFunctionAsync(o,c,(function(o,i,c){if(r(c,2,4),c[0]instanceof n)return c[0].domainCodeLookup(t(c[1]),c[2],void 0===c[3]?void 0:e(c[3]));if(a(c[0]))return c[0]._ensureLoaded().then((()=>{const r=u(t(c[1]),c[0],null,void 0===c[3]?void 0:e(c[3]));return f(r,c[2])}));throw new Error("Invalid Parameter")}))},i.signatures.push({name:"domaincode",min:"2",max:"4"})),i.functions.text=function(n,t){return i.standardFunctionAsync(n,t,(function(n,t,e){if(r(e,1,2),!a(e[0]))return s(e[0],e[1]);{const r=d(e[1],"");if(""===r)return e[0].castToText();if("schema"===r.toLowerCase())return e[0].convertToText("schema",n.abortSignal);if("featureset"===r.toLowerCase())return e[0].convertToText("featureset",n.abortSignal)}}))},i.functions.gdbversion=function(t,e){return i.standardFunctionAsync(t,e,(function(t,e,o){if(r(o,1,1),o[0]instanceof n)return o[0].gdbVersion();if(a(o[0]))return o[0].load().then((r=>r.gdbVersion));throw new Error("Invalid Parameter")}))},i.functions.schema=function(t,e){return i.standardFunctionAsync(t,e,(function(t,e,i){if(r(i,1,1),a(i[0]))return i[0].load().then((()=>o.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof n){const r=i[0].schema();return r?o.convertObjectToArcadeDictionary(r):null}throw new Error("Invalid Parameter")}))}}export{p as registerFunctions}