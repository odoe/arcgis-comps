import{z as r,d as n,$ as e,e as t,c as o,an as i,A as a,ao as u,ap as f,aq as c,ar as s,V as d}from"./p-4ddfade5.js";import"./p-566b0715.js";import"./p-9ae46e68.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-a184d75f.js";import"./p-023ccb69.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-4003c7ae.js";import"./p-b2d0e2de.js";import"./p-db87794e.js";import"./p-9dcf03f7.js";import"./p-2a252a78.js";import"./p-dfc6337f.js";function m(r){return r&&r.domain?o.convertObjectToArcadeDictionary("coded-value"===r.domain.type||"codedValue"===r.domain.type?{type:"codedValue",name:r.domain.name,dataType:i[r.field.type],codedValues:r.domain.codedValues.map((r=>({name:r.name,code:r.code})))}:{type:"range",name:r.domain.name,dataType:i[r.field.type],min:r.domain.min,max:r.domain.max}):null}function p(i){"async"===i.mode&&(i.functions.domain=function(o,f){return i.standardFunctionAsync(o,f,(function(o,i,f){if(r(f,2,3),f[0]instanceof n)return m(f[0].fullDomain(e(f[1]),void 0===f[2]?void 0:t(f[2])));if(a(f[0]))return f[0]._ensureLoaded().then((()=>m(u(e(f[1]),f[0],null,void 0===f[2]?void 0:t(f[2])))));throw new Error("Invalid Parameter")}))},i.functions.subtypes=function(e,t){return i.standardFunctionAsync(e,t,(function(e,t,i){if(r(i,1,1),i[0]instanceof n){const r=i[0].subtypes();return r?o.convertObjectToArcadeDictionary(r):null}if(a(i[0]))return i[0]._ensureLoaded().then((()=>{const r=i[0].subtypes();return r?o.convertObjectToArcadeDictionary(r):null}));throw new Error("Invalid Parameter")}))},i.functions.domainname=function(o,c){return i.standardFunctionAsync(o,c,(function(o,i,c){if(r(c,2,4),c[0]instanceof n)return c[0].domainValueLookup(e(c[1]),c[2],void 0===c[3]?void 0:t(c[3]));if(a(c[0]))return c[0]._ensureLoaded().then((()=>{const r=u(e(c[1]),c[0],null,void 0===c[3]?void 0:t(c[3]));return f(r,c[2])}));throw new Error("Invalid Parameter")}))},i.signatures.push({name:"domainname",min:"2",max:"4"}),i.functions.domaincode=function(o,f){return i.standardFunctionAsync(o,f,(function(o,i,f){if(r(f,2,4),f[0]instanceof n)return f[0].domainCodeLookup(e(f[1]),f[2],void 0===f[3]?void 0:t(f[3]));if(a(f[0]))return f[0]._ensureLoaded().then((()=>{const r=u(e(f[1]),f[0],null,void 0===f[3]?void 0:t(f[3]));return c(r,f[2])}));throw new Error("Invalid Parameter")}))},i.signatures.push({name:"domaincode",min:"2",max:"4"})),i.functions.text=function(n,e){return i.standardFunctionAsync(n,e,(function(n,e,t){if(r(t,1,2),!a(t[0]))return s(t[0],t[1]);{const r=d(t[1],"");if(""===r)return t[0].castToText();if("schema"===r.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===r.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},i.functions.gdbversion=function(e,t){return i.standardFunctionAsync(e,t,(function(e,t,o){if(r(o,1,1),o[0]instanceof n)return o[0].gdbVersion();if(a(o[0]))return o[0].load().then((r=>r.gdbVersion));throw new Error("Invalid Parameter")}))},i.functions.schema=function(e,t){return i.standardFunctionAsync(e,t,(function(e,t,i){if(r(i,1,1),a(i[0]))return i[0].load().then((()=>o.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof n){const r=i[0].schema();return r?o.convertObjectToArcadeDictionary(r):null}throw new Error("Invalid Parameter")}))}}export{p as registerFunctions}