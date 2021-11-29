import{w as e,A as t,am as r,z as n,$ as a}from"./p-082c34d3.js";import{g as i,c as s}from"./p-ba99496d.js";import{fw as l,fr as o,fv as u}from"./p-5420851c.js";import{w as p,A as c,x as f,O as m,p as R,g as S,h as w}from"./p-18b587e8.js";import"./p-a184d75f.js";import"./p-a96c61aa.js";import"./p-dcac8868.js";import"./p-c3fd4463.js";import"./p-c0f8009d.js";import"./p-53bb6ab4.js";function b(e){return e instanceof o}function h(n,a,w,h,j){return j(n,a,(function(n,a,j){if(j.length<2)return h(new Error("Missing Parameters"));if(null===(j=e(j))[0]&&null===j[1])return l(!1);if(t(j[0]))return j[1]instanceof o?l(new i({parentfeatureset:j[0],relation:w,relationGeom:j[1]})):null===j[1]?l(new s({parentfeatureset:j[0]})):h("Spatial Relation cannot accept this parameter type");if(b(j[0])){if(b(j[1])){let e=null;switch(w){case"esriSpatialRelEnvelopeIntersects":e=S(r(j[0]),r(j[1]));break;case"esriSpatialRelIntersects":e=S(j[0],j[1]);break;case"esriSpatialRelContains":e=R(j[0],j[1]);break;case"esriSpatialRelOverlaps":e=m(j[0],j[1]);break;case"esriSpatialRelWithin":e=f(j[0],j[1]);break;case"esriSpatialRelTouches":e=c(j[0],j[1]);break;case"esriSpatialRelCrosses":e=p(j[0],j[1])}return null!==e?e:u(new Error("Unrecognised Relationship"))}return t(j[1])?l(new i({parentfeatureset:j[1],relation:w,relationGeom:j[0]})):null===j[1]?l(!1):h("Spatial Relation cannot accept this parameter type")}return null!==j[0]?h("Spatial Relation cannot accept this parameter type"):t(j[1])?l(new s({parentfeatureset:j[1]})):j[1]instanceof o||null===j[1]?l(!1):void 0}))}function j(r){"async"===r.mode&&(r.functions.intersects=function(e,t){return h(e,t,"esriSpatialRelIntersects",r.failDefferred,r.standardFunctionAsync)},r.functions.envelopeintersects=function(e,t){return h(e,t,"esriSpatialRelEnvelopeIntersects",r.failDefferred,r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),r.functions.contains=function(e,t){return h(e,t,"esriSpatialRelContains",r.failDefferred,r.standardFunctionAsync)},r.functions.overlaps=function(e,t){return h(e,t,"esriSpatialRelOverlaps",r.failDefferred,r.standardFunctionAsync)},r.functions.within=function(e,t){return h(e,t,"esriSpatialRelWithin",r.failDefferred,r.standardFunctionAsync)},r.functions.touches=function(e,t){return h(e,t,"esriSpatialRelTouches",r.failDefferred,r.standardFunctionAsync)},r.functions.crosses=function(e,t){return h(e,t,"esriSpatialRelCrosses",r.failDefferred,r.standardFunctionAsync)},r.functions.relate=function(i,l){return r.standardFunctionAsync(i,l,(function(r,i,l){if(l=e(l),n(l,3,3),b(l[0])&&b(l[1]))return w(l[0],l[1],a(l[2]));if(l[0]instanceof o&&null===l[1])return!1;if(l[1]instanceof o&&null===l[0])return!1;if(t(l[0])&&null===l[1])return new s({parentfeatureset:l[0]});if(t(l[1])&&null===l[0])return new s({parentfeatureset:l[1]});if(t(l[0])&&l[1]instanceof o)return l[0].relate(l[1],a(l[2]));if(t(l[1])&&l[0]instanceof o)return l[1].relate(l[0],a(l[2]));if(null===l[0]&&null===l[1])return!1;throw new Error("Illegal Argument")}))})}export{j as registerFunctions}