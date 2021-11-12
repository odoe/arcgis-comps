import { G as me, A, am as s, z, $ } from './arcadeUtils-30adc9b1.js';
import { g as g$1, c as n } from './SpatialFilter-93aad8e2.js';
import { aX as k, c1 as C } from './jsxFactory-c96bb45c.js';
import { aJ as p } from './Graphic-6c72131a.js';
import { w, A as A$1, x, O, p as p$1, g as g$2, h as h$1 } from './geometryEngineAsync-527ab131.js';
import './_commonjsHelpers-3cea27e3.js';
import './number-11ba5309.js';
import './Field-2b6029f8.js';
import './JSONSupport-5a9f556a.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './featureConversionUtils-0aaeda4b.js';
import './OptimizedFeature-6034ce0f.js';
import './OptimizedFeatureSet-27736f1f.js';
import './unitUtils-b25ae8cb.js';
import './FeatureSetReader-c80a5de6.js';
import './centroid-373eb2cf.js';
import './sizeVariableUtils-4d3662df.js';
import './WhereClause-389fdd35.js';
import './_commonjsHelpers-020ca939.js';
import './index-921bd636.js';
import './FieldsIndex-56cf15de.js';
import './workers-5ad649f9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function S(e){return e instanceof p}function h(r,a,R,h,g){return g(r,a,(function(r,a,g){if(g.length<2)return h(new Error("Missing Parameters"));if(null===(g=me(g))[0]&&null===g[1])return k(!1);if(A(g[0]))return g[1]instanceof p?k(new g$1({parentfeatureset:g[0],relation:R,relationGeom:g[1]})):null===g[1]?k(new n({parentfeatureset:g[0]})):h("Spatial Relation cannot accept this parameter type");if(S(g[0])){if(S(g[1])){let n=null;switch(R){case"esriSpatialRelEnvelopeIntersects":n=g$2(s(g[0]),s(g[1]));break;case"esriSpatialRelIntersects":n=g$2(g[0],g[1]);break;case"esriSpatialRelContains":n=p$1(g[0],g[1]);break;case"esriSpatialRelOverlaps":n=O(g[0],g[1]);break;case"esriSpatialRelWithin":n=x(g[0],g[1]);break;case"esriSpatialRelTouches":n=A$1(g[0],g[1]);break;case"esriSpatialRelCrosses":n=w(g[0],g[1]);}return null!==n?n:C(new Error("Unrecognised Relationship"))}return A(g[1])?k(new g$1({parentfeatureset:g[1],relation:R,relationGeom:g[0]})):null===g[1]?k(!1):h("Spatial Relation cannot accept this parameter type")}return null!==g[0]?h("Spatial Relation cannot accept this parameter type"):A(g[1])?k(new n({parentfeatureset:g[1]})):g[1]instanceof p||null===g[1]?k(!1):void 0}))}function g(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return h(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return h(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return h(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return h(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return h(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return h(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return h(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(i,l){return e.standardFunctionAsync(i,l,(function(e,i,l){if(l=me(l),z(l,3,3),S(l[0])&&S(l[1]))return h$1(l[0],l[1],$(l[2]));if(l[0]instanceof p&&null===l[1])return !1;if(l[1]instanceof p&&null===l[0])return !1;if(A(l[0])&&null===l[1])return new n({parentfeatureset:l[0]});if(A(l[1])&&null===l[0])return new n({parentfeatureset:l[1]});if(A(l[0])&&l[1]instanceof p)return l[0].relate(l[1],$(l[2]));if(A(l[1])&&l[0]instanceof p)return l[1].relate(l[0],$(l[2]));if(null===l[0]&&null===l[1])return !1;throw new Error("Illegal Argument")}))});}

export { g as registerFunctions };
