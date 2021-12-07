'use strict';

const request = require('./messageBundle-8be88d04.js');
const arcadeUtils = require('./arcadeUtils-86f086c4.js');
const geometryEngineAsync = require('./geometryEngineAsync-37ade916.js');
const geometry = require('./geometry-ef17530a.js');
const jsonUtils = require('./jsonUtils-b6068079.js');
const unitUtils = require('./unitUtils-083cb8d0.js');
require('./index-fde8502c.js');
require('./luxon-b6474344.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./number-5cee27f2.js');
require('./Field-b92c6f4a.js');
require('./enumeration-f235fe07.js');
require('./fieldType-32f95259.js');
require('./featureConversionUtils-df21e951.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./FeatureSetReader-ed625ea0.js');
require('./centroid-d874c2ee.js');
require('./sizeVariableUtils-9012516e.js');
require('./workers-bde9fe32.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function un(t){return 0===request.a$3.indexOf("4.")?geometry.v.fromExtent(t):new geometry.v({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function sn(n){if(arcadeUtils.z(n,2,2),n[0]instanceof request.p$3&&n[1]instanceof request.p$3);else if(n[0]instanceof request.p$3&&null===n[1]);else if(n[1]instanceof request.p$3&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function an(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return request.k$2(0);let r=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){r=arcadeUtils.s$1(n.spatialReference)/unitUtils.H(n.spatialReference);}let e=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)e+=arcadeUtils.e$1(i[n],i[n-1],r);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)e+=arcadeUtils.e$1(i[n],i[n-1],r);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(e+=arcadeUtils.e$1(i[0],i[i.length-1],r));}else "extent"===n.type&&(e+=2*arcadeUtils.e$1([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],r),e+=2*arcadeUtils.e$1([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],r),e*=2,e+=4*Math.abs(arcadeUtils.O$1(n.zmax,0)*r-arcadeUtils.O$1(n.zmin,0)*r));const o=new geometry.m({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,e]]});return geometryEngineAsync.F(o,t)}function fn(n){"async"===n.mode&&(n.functions.disjoint=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null===r[0]||null===r[1]||geometryEngineAsync.S(r[0],r[1])}))},n.functions.intersects=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.g(r[0],r[1])}))},n.functions.touches=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.A(r[0],r[1])}))},n.functions.crosses=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.w(r[0],r[1])}))},n.functions.within=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.x(r[0],r[1])}))},n.functions.contains=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.p(r[0],r[1])}))},n.functions.overlaps=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.O(r[0],r[1])}))},n.functions.equals=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return arcadeUtils.z(r,2,2),r[0]===r[1]||(r[0]instanceof request.p$3&&r[1]instanceof request.p$3?geometryEngineAsync.d(r[0],r[1]):!(!arcadeUtils.E(r[0])||!arcadeUtils.E(r[1]))&&r[0].getTime()===r[1].getTime())}))},n.functions.relate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,3,3),r[0]instanceof request.p$3&&r[1]instanceof request.p$3)return geometryEngineAsync.h(r[0],r[1],arcadeUtils.$(r[2]));if(r[0]instanceof request.p$3&&null===r[1])return !1;if(r[1]instanceof request.p$3&&null===r[0])return !1;if(null===r[0]&&null===r[1])return !1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null===r[0]||null===r[1]?null:geometryEngineAsync.j(r[0],r[1])}))},n.functions.union=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,i){const l=[];if(0===(i=arcadeUtils.me(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(arcadeUtils.I$1(i[0])){const n=arcadeUtils.me(i[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof request.p$3))throw new Error("Illegal Argument");l.push(n[t]);}}else {if(!arcadeUtils.J(i[0])){if(i[0]instanceof request.p$3)return arcadeUtils.ae(arcadeUtils.c(i[0]),r.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const n=arcadeUtils.me(i[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof request.p$3))throw new Error("Illegal Argument");l.push(n[t]);}}}else for(let t=0;t<i.length;t++)if(null!==i[t]){if(!(i[t]instanceof request.p$3))throw new Error("Illegal Argument");l.push(i[t]);}return 0===l.length?null:geometryEngineAsync.k(l)}))},n.functions.difference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=arcadeUtils.me(e)),null!==e[0]&&null===e[1]?arcadeUtils.c(e[0]):null===e[0]?null:geometryEngineAsync.R(e[0],e[1])}))},n.functions.symmetricdifference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=arcadeUtils.me(e)),null===e[0]&&null===e[1]?null:null===e[0]?arcadeUtils.c(e[1]):null===e[1]?arcadeUtils.c(e[0]):geometryEngineAsync.E(e[0],e[1])}))},n.functions.clip=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,2),!(r[1]instanceof request.M)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof request.p$3))throw new Error("Illegal Argument");return null===r[1]?null:geometryEngineAsync.l(r[0],r[1])}))},n.functions.cut=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){if(e=arcadeUtils.me(e),arcadeUtils.z(e,2,2),!(e[1]instanceof geometry.m)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return [];if(!(e[0]instanceof request.p$3))throw new Error("Illegal Argument");return null===e[1]?[arcadeUtils.c(e[0])]:geometryEngineAsync.y(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumArea(arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.de(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.W(n,arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.W(l[0],arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumArea(arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.de(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.K(n,arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.K(l[0],arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}))},n.functions.length=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumLength(arcadeUtils.a(arcadeUtils.O$1(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.he(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.F(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.F(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}))},n.functions.length3d=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.he(l[0],t.spatialReference);return null===n?0:!0===n.hasZ?an(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1))):geometryEngineAsync.F(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");return !0===l[0].hasZ?an(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1))):geometryEngineAsync.F(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}))},n.functions.lengthgeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumLength(arcadeUtils.a(arcadeUtils.O$1(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.he(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.M(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.M(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}))},n.functions.distance=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){l=arcadeUtils.me(l),arcadeUtils.z(l,2,3);let u=l[0];(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0]))&&(u=arcadeUtils.pe(l[0],t.spatialReference));let f=l[1];if((arcadeUtils.I$1(l[1])||arcadeUtils.J(l[1]))&&(f=arcadeUtils.pe(l[1],t.spatialReference)),!(u instanceof request.p$3))throw new Error("Illegal Argument");if(!(f instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.m(u,f,arcadeUtils.a(arcadeUtils.O$1(l[2],-1)))}))},n.functions.distancegeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=arcadeUtils.me(r),arcadeUtils.z(r,2,3);const l=r[0],u=r[1];if(!(l instanceof request.b$2))throw new Error("Illegal Argument");if(!(u instanceof request.b$2))throw new Error("Illegal Argument");const s=new geometry.m({paths:[],spatialReference:l.spatialReference});return s.addPath([l,u]),geometryEngineAsync.M(s,arcadeUtils.a(arcadeUtils.O$1(r[2],-1)))}))},n.functions.densify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,3),null===r[0])return null;if(!(r[0]instanceof request.p$3))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof geometry.v||r[0]instanceof geometry.m?geometryEngineAsync.P(r[0],l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]instanceof request.M?geometryEngineAsync.P(un(r[0]),l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]}))},n.functions.densifygeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,3),null===r[0])return null;if(!(r[0]instanceof request.p$3))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof geometry.v||r[0]instanceof geometry.m?geometryEngineAsync.U(r[0],l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]instanceof request.M?geometryEngineAsync.U(un(r[0]),l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]}))},n.functions.generalize=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,4),null===r[0])return null;if(!(r[0]instanceof request.p$3))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");return geometryEngineAsync.G(r[0],l,arcadeUtils.ie(arcadeUtils.O$1(r[2],!0)),arcadeUtils.a(arcadeUtils.O$1(r[3],-1)))}))},n.functions.buffer=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,2,3),null===l[0])return null;if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");const u=arcadeUtils.ee(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?arcadeUtils.c(l[0]):geometryEngineAsync.V(l[0],u,arcadeUtils.a(arcadeUtils.O$1(l[2],-1)))}))},n.functions.buffergeodetic=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,2,3),null===l[0])return null;if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");const u=arcadeUtils.ee(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?arcadeUtils.c(l[0]):geometryEngineAsync.b(l[0],u,arcadeUtils.a(arcadeUtils.O$1(l[2],-1)))}))},n.functions.offset=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,6),null===r[0])return null;if(!(r[0]instanceof geometry.v||r[0]instanceof geometry.m))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const s=arcadeUtils.ee(arcadeUtils.O$1(r[4],10));if(isNaN(s))throw new Error("Illegal Argument");const a=arcadeUtils.ee(arcadeUtils.O$1(r[5],0));if(isNaN(a))throw new Error("Illegal Argument");return geometryEngineAsync.I(r[0],l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1)),arcadeUtils.$(arcadeUtils.O$1(r[3],"round")).toLowerCase(),s,a)}))},n.functions.rotate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=arcadeUtils.me(r),arcadeUtils.z(r,2,3);let e=r[0];if(null===e)return null;if(!(e instanceof request.p$3))throw new Error("Illegal Argument");e instanceof request.M&&(e=geometry.v.fromExtent(e));const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const u=arcadeUtils.O$1(r[2],null);if(null===u)return geometryEngineAsync.q(e,l);if(u instanceof request.b$2)return geometryEngineAsync.q(e,l,u);throw new Error("Illegal Argument")}))},n.functions.centroid=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,1,1),null===l[0])return null;let u=l[0];if((arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0]))&&(u=arcadeUtils.pe(l[0],r.spatialReference)),null===u)return null;if(!(u instanceof request.p$3))throw new Error("Illegal Argument");return u instanceof request.b$2?arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference):u instanceof geometry.v?u.centroid:u instanceof geometry.m?arcadeUtils.l(u):u instanceof geometry.m$1?arcadeUtils.u$1(u):u instanceof request.M?u.center:null}))},n.functions.multiparttosinglepart=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){l=arcadeUtils.me(l),arcadeUtils.z(l,1,1);const u=[];if(null===l[0])return null;if(!(l[0]instanceof request.p$3))throw new Error("Illegal Argument");if(l[0]instanceof request.b$2)return [arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference)];if(l[0]instanceof request.M)return [arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference)];return geometryEngineAsync.J(l[0]).then((n=>{if(n instanceof geometry.v){const t=[],r=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const r=jsonUtils.d({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r);}else r.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<r.length;n++)for(let e=0;e<t.length;e++)if(t[e].contains(r[n].pt)){t[e].addRing(r[n].ring);break}return t}if(n instanceof geometry.m){const t=[];for(let r=0;r<n.paths.length;r++){const e=jsonUtils.d({paths:[n.paths[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e);}return t}if(l[0]instanceof geometry.m$1){const n=arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference);for(let t=0;t<n.points.length;t++)u.push(n.getPoint(t));return u}return null}))}))},n.functions.issimple=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,1,1),null===r[0])return !0;if(!(r[0]instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.v(r[0])}))},n.functions.simplify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,1,1),null===r[0])return null;if(!(r[0]instanceof request.p$3))throw new Error("Illegal Argument");return geometryEngineAsync.J(r[0])}))});}

exports.registerFunctions = fn;
