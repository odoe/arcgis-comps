import { w as me, A, am as s, z, $ } from './arcadeUtils-8299a97a.js';
import { g as g$1, c as n } from './SpatialFilter-006e8691.js';
import { fw as k, fr as p, fv as C } from './MapView-ac75aae8.js';
import { w, A as A$1, x, O, p as p$1, g as g$2, h as h$1 } from './geometryEngineAsync-769c4f53.js';
import './_commonjsHelpers-80e09147.js';
import './number-a05c0e0a.js';
import './FeatureSetReader-42fa969a.js';
import './centroid-6e7cbbe1.js';
import './WhereClause-b6db4473.js';
import './index-b157fcf2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function S(e){return e instanceof p}function h(r,a,R,h,g){return g(r,a,(function(r,a,g){if(g.length<2)return h(new Error("Missing Parameters"));if(null===(g=me(g))[0]&&null===g[1])return k(!1);if(A(g[0]))return g[1]instanceof p?k(new g$1({parentfeatureset:g[0],relation:R,relationGeom:g[1]})):null===g[1]?k(new n({parentfeatureset:g[0]})):h("Spatial Relation cannot accept this parameter type");if(S(g[0])){if(S(g[1])){let n=null;switch(R){case"esriSpatialRelEnvelopeIntersects":n=g$2(s(g[0]),s(g[1]));break;case"esriSpatialRelIntersects":n=g$2(g[0],g[1]);break;case"esriSpatialRelContains":n=p$1(g[0],g[1]);break;case"esriSpatialRelOverlaps":n=O(g[0],g[1]);break;case"esriSpatialRelWithin":n=x(g[0],g[1]);break;case"esriSpatialRelTouches":n=A$1(g[0],g[1]);break;case"esriSpatialRelCrosses":n=w(g[0],g[1]);}return null!==n?n:C(new Error("Unrecognised Relationship"))}return A(g[1])?k(new g$1({parentfeatureset:g[1],relation:R,relationGeom:g[0]})):null===g[1]?k(!1):h("Spatial Relation cannot accept this parameter type")}return null!==g[0]?h("Spatial Relation cannot accept this parameter type"):A(g[1])?k(new n({parentfeatureset:g[1]})):g[1]instanceof p||null===g[1]?k(!1):void 0}))}function g(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return h(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return h(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return h(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return h(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return h(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return h(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return h(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(i,l){return e.standardFunctionAsync(i,l,(function(e,i,l){if(l=me(l),z(l,3,3),S(l[0])&&S(l[1]))return h$1(l[0],l[1],$(l[2]));if(l[0]instanceof p&&null===l[1])return !1;if(l[1]instanceof p&&null===l[0])return !1;if(A(l[0])&&null===l[1])return new n({parentfeatureset:l[0]});if(A(l[1])&&null===l[0])return new n({parentfeatureset:l[1]});if(A(l[0])&&l[1]instanceof p)return l[0].relate(l[1],$(l[2]));if(A(l[1])&&l[0]instanceof p)return l[1].relate(l[0],$(l[2]));if(null===l[0]&&null===l[1])return !1;throw new Error("Illegal Argument")}))});}

export { g as registerFunctions };
