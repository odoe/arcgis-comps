'use strict';

const arcadeUtils = require('./arcadeUtils-ded9452f.js');
const SpatialFilter = require('./SpatialFilter-687802d7.js');
const request = require('./MapView-1726f571.js');
const geometryEngineAsync = require('./geometryEngineAsync-c3135f0a.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./number-474b2a5a.js');
require('./FeatureSetReader-69300d2f.js');
require('./centroid-07923388.js');
require('./WhereClause-ff555802.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function S(e){return e instanceof request.p$7}function h(r,a,R,h,g){return g(r,a,(function(r,a,g){if(g.length<2)return h(new Error("Missing Parameters"));if(null===(g=arcadeUtils.me(g))[0]&&null===g[1])return request.k$3(!1);if(arcadeUtils.A(g[0]))return g[1]instanceof request.p$7?request.k$3(new SpatialFilter.g({parentfeatureset:g[0],relation:R,relationGeom:g[1]})):null===g[1]?request.k$3(new SpatialFilter.n$1({parentfeatureset:g[0]})):h("Spatial Relation cannot accept this parameter type");if(S(g[0])){if(S(g[1])){let n=null;switch(R){case"esriSpatialRelEnvelopeIntersects":n=geometryEngineAsync.g(arcadeUtils.s$3(g[0]),arcadeUtils.s$3(g[1]));break;case"esriSpatialRelIntersects":n=geometryEngineAsync.g(g[0],g[1]);break;case"esriSpatialRelContains":n=geometryEngineAsync.p(g[0],g[1]);break;case"esriSpatialRelOverlaps":n=geometryEngineAsync.O(g[0],g[1]);break;case"esriSpatialRelWithin":n=geometryEngineAsync.x(g[0],g[1]);break;case"esriSpatialRelTouches":n=geometryEngineAsync.A(g[0],g[1]);break;case"esriSpatialRelCrosses":n=geometryEngineAsync.w(g[0],g[1]);}return null!==n?n:request.C$3(new Error("Unrecognised Relationship"))}return arcadeUtils.A(g[1])?request.k$3(new SpatialFilter.g({parentfeatureset:g[1],relation:R,relationGeom:g[0]})):null===g[1]?request.k$3(!1):h("Spatial Relation cannot accept this parameter type")}return null!==g[0]?h("Spatial Relation cannot accept this parameter type"):arcadeUtils.A(g[1])?request.k$3(new SpatialFilter.n$1({parentfeatureset:g[1]})):g[1]instanceof request.p$7||null===g[1]?request.k$3(!1):void 0}))}function g(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return h(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return h(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return h(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return h(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return h(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return h(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return h(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(i,l){return e.standardFunctionAsync(i,l,(function(e,i,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,3,3),S(l[0])&&S(l[1]))return geometryEngineAsync.h(l[0],l[1],arcadeUtils.$(l[2]));if(l[0]instanceof request.p$7&&null===l[1])return !1;if(l[1]instanceof request.p$7&&null===l[0])return !1;if(arcadeUtils.A(l[0])&&null===l[1])return new SpatialFilter.n$1({parentfeatureset:l[0]});if(arcadeUtils.A(l[1])&&null===l[0])return new SpatialFilter.n$1({parentfeatureset:l[1]});if(arcadeUtils.A(l[0])&&l[1]instanceof request.p$7)return l[0].relate(l[1],arcadeUtils.$(l[2]));if(arcadeUtils.A(l[1])&&l[0]instanceof request.p$7)return l[1].relate(l[0],arcadeUtils.$(l[2]));if(null===l[0]&&null===l[1])return !1;throw new Error("Illegal Argument")}))});}

exports.registerFunctions = g;
