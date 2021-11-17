'use strict';

const request = require('./messageBundle-312ceb47.js');
const arcadeUtils = require('./arcadeUtils-443fd928.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const geometryEngineAsync = require('./geometryEngineAsync-b91d0dc4.js');
require('./index-57f2cfbb.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./number-12de6c3e.js');
require('./Field-9f319836.js');
require('./JSONSupport-53c01d03.js');
require('./fieldType-a54c379b.js');
require('./featureConversionUtils-e6cca372.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./FeatureSetReader-56da5c2b.js');
require('./centroid-fbe1334b.js');
require('./sizeVariableUtils-9012516e.js');
require('./workers-1668d5a8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function un(t){return 0===request.a.indexOf("4.")?unitUtils.v.fromExtent(t):new unitUtils.v({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function sn(n){if(arcadeUtils.z(n,2,2),n[0]instanceof unitUtils.p&&n[1]instanceof unitUtils.p);else if(n[0]instanceof unitUtils.p&&null===n[1]);else if(n[1]instanceof unitUtils.p&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function an(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return request.k$1(0);let r=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){r=arcadeUtils.s$1(n.spatialReference)/unitUtils.H$1(n.spatialReference);}let e=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)e+=arcadeUtils.e$1(i[n],i[n-1],r);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)e+=arcadeUtils.e$1(i[n],i[n-1],r);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(e+=arcadeUtils.e$1(i[0],i[i.length-1],r));}else "extent"===n.type&&(e+=2*arcadeUtils.e$1([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],r),e+=2*arcadeUtils.e$1([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],r),e*=2,e+=4*Math.abs(arcadeUtils.O$1(n.zmax,0)*r-arcadeUtils.O$1(n.zmin,0)*r));const o=new unitUtils.m$4({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,e]]});return geometryEngineAsync.F(o,t)}function fn(n){"async"===n.mode&&(n.functions.disjoint=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null===r[0]||null===r[1]||geometryEngineAsync.S(r[0],r[1])}))},n.functions.intersects=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.g(r[0],r[1])}))},n.functions.touches=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.A(r[0],r[1])}))},n.functions.crosses=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.w(r[0],r[1])}))},n.functions.within=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.x(r[0],r[1])}))},n.functions.contains=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.p(r[0],r[1])}))},n.functions.overlaps=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null!==r[0]&&null!==r[1]&&geometryEngineAsync.O(r[0],r[1])}))},n.functions.equals=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return arcadeUtils.z(r,2,2),r[0]===r[1]||(r[0]instanceof unitUtils.p&&r[1]instanceof unitUtils.p?geometryEngineAsync.d(r[0],r[1]):!(!arcadeUtils.E(r[0])||!arcadeUtils.E(r[1]))&&r[0].getTime()===r[1].getTime())}))},n.functions.relate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,3,3),r[0]instanceof unitUtils.p&&r[1]instanceof unitUtils.p)return geometryEngineAsync.h(r[0],r[1],arcadeUtils.$(r[2]));if(r[0]instanceof unitUtils.p&&null===r[1])return !1;if(r[1]instanceof unitUtils.p&&null===r[0])return !1;if(null===r[0]&&null===r[1])return !1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=arcadeUtils.me(r)),null===r[0]||null===r[1]?null:geometryEngineAsync.j(r[0],r[1])}))},n.functions.union=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,i){const l=[];if(0===(i=arcadeUtils.me(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(arcadeUtils.I$1(i[0])){const n=arcadeUtils.me(i[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof unitUtils.p))throw new Error("Illegal Argument");l.push(n[t]);}}else {if(!arcadeUtils.J(i[0])){if(i[0]instanceof unitUtils.p)return arcadeUtils.ae(arcadeUtils.c(i[0]),r.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const n=arcadeUtils.me(i[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof unitUtils.p))throw new Error("Illegal Argument");l.push(n[t]);}}}else for(let t=0;t<i.length;t++)if(null!==i[t]){if(!(i[t]instanceof unitUtils.p))throw new Error("Illegal Argument");l.push(i[t]);}return 0===l.length?null:geometryEngineAsync.k(l)}))},n.functions.difference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=arcadeUtils.me(e)),null!==e[0]&&null===e[1]?arcadeUtils.c(e[0]):null===e[0]?null:geometryEngineAsync.R(e[0],e[1])}))},n.functions.symmetricdifference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=arcadeUtils.me(e)),null===e[0]&&null===e[1]?null:null===e[0]?arcadeUtils.c(e[1]):null===e[1]?arcadeUtils.c(e[0]):geometryEngineAsync.E(e[0],e[1])}))},n.functions.clip=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,2),!(r[1]instanceof unitUtils.M)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return null===r[1]?null:geometryEngineAsync.l(r[0],r[1])}))},n.functions.cut=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){if(e=arcadeUtils.me(e),arcadeUtils.z(e,2,2),!(e[1]instanceof unitUtils.m$4)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return [];if(!(e[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return null===e[1]?[arcadeUtils.c(e[0])]:geometryEngineAsync.y(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumArea(arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.de(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.W(n,arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.W(l[0],arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumArea(arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.de(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.K(n,arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.K(l[0],arcadeUtils.r$1(arcadeUtils.O$1(l[1],-1)))}))},n.functions.length=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumLength(arcadeUtils.a(arcadeUtils.O$1(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.he(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.F(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.F(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}))},n.functions.length3d=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.he(l[0],t.spatialReference);return null===n?0:!0===n.hasZ?an(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1))):geometryEngineAsync.F(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return !0===l[0].hasZ?an(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1))):geometryEngineAsync.F(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}))},n.functions.lengthgeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(arcadeUtils.z(l,1,2),null===(l=arcadeUtils.me(l))[0])return 0;if(arcadeUtils.A(l[0]))return l[0].sumLength(arcadeUtils.a(arcadeUtils.O$1(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0])){const n=arcadeUtils.he(l[0],t.spatialReference);return null===n?0:geometryEngineAsync.M(n,arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.M(l[0],arcadeUtils.a(arcadeUtils.O$1(l[1],-1)))}))},n.functions.distance=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){l=arcadeUtils.me(l),arcadeUtils.z(l,2,3);let u=l[0];(arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0]))&&(u=arcadeUtils.pe(l[0],t.spatialReference));let f=l[1];if((arcadeUtils.I$1(l[1])||arcadeUtils.J(l[1]))&&(f=arcadeUtils.pe(l[1],t.spatialReference)),!(u instanceof unitUtils.p))throw new Error("Illegal Argument");if(!(f instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.m(u,f,arcadeUtils.a(arcadeUtils.O$1(l[2],-1)))}))},n.functions.distancegeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=arcadeUtils.me(r),arcadeUtils.z(r,2,3);const l=r[0],u=r[1];if(!(l instanceof unitUtils.b))throw new Error("Illegal Argument");if(!(u instanceof unitUtils.b))throw new Error("Illegal Argument");const s=new unitUtils.m$4({paths:[],spatialReference:l.spatialReference});return s.addPath([l,u]),geometryEngineAsync.M(s,arcadeUtils.a(arcadeUtils.O$1(r[2],-1)))}))},n.functions.densify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,3),null===r[0])return null;if(!(r[0]instanceof unitUtils.p))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof unitUtils.v||r[0]instanceof unitUtils.m$4?geometryEngineAsync.P(r[0],l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]instanceof unitUtils.M?geometryEngineAsync.P(un(r[0]),l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]}))},n.functions.densifygeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,3),null===r[0])return null;if(!(r[0]instanceof unitUtils.p))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof unitUtils.v||r[0]instanceof unitUtils.m$4?geometryEngineAsync.U(r[0],l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]instanceof unitUtils.M?geometryEngineAsync.U(un(r[0]),l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1))):r[0]}))},n.functions.generalize=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,4),null===r[0])return null;if(!(r[0]instanceof unitUtils.p))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");return geometryEngineAsync.G(r[0],l,arcadeUtils.ie(arcadeUtils.O$1(r[2],!0)),arcadeUtils.a(arcadeUtils.O$1(r[3],-1)))}))},n.functions.buffer=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,2,3),null===l[0])return null;if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");const u=arcadeUtils.ee(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?arcadeUtils.c(l[0]):geometryEngineAsync.V(l[0],u,arcadeUtils.a(arcadeUtils.O$1(l[2],-1)))}))},n.functions.buffergeodetic=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,2,3),null===l[0])return null;if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");const u=arcadeUtils.ee(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?arcadeUtils.c(l[0]):geometryEngineAsync.b(l[0],u,arcadeUtils.a(arcadeUtils.O$1(l[2],-1)))}))},n.functions.offset=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,2,6),null===r[0])return null;if(!(r[0]instanceof unitUtils.v||r[0]instanceof unitUtils.m$4))throw new Error("Illegal Argument");const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const s=arcadeUtils.ee(arcadeUtils.O$1(r[4],10));if(isNaN(s))throw new Error("Illegal Argument");const a=arcadeUtils.ee(arcadeUtils.O$1(r[5],0));if(isNaN(a))throw new Error("Illegal Argument");return geometryEngineAsync.I(r[0],l,arcadeUtils.a(arcadeUtils.O$1(r[2],-1)),arcadeUtils.$(arcadeUtils.O$1(r[3],"round")).toLowerCase(),s,a)}))},n.functions.rotate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=arcadeUtils.me(r),arcadeUtils.z(r,2,3);let e=r[0];if(null===e)return null;if(!(e instanceof unitUtils.p))throw new Error("Illegal Argument");e instanceof unitUtils.M&&(e=unitUtils.v.fromExtent(e));const l=arcadeUtils.ee(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const u=arcadeUtils.O$1(r[2],null);if(null===u)return geometryEngineAsync.q(e,l);if(u instanceof unitUtils.b)return geometryEngineAsync.q(e,l,u);throw new Error("Illegal Argument")}))},n.functions.centroid=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){if(l=arcadeUtils.me(l),arcadeUtils.z(l,1,1),null===l[0])return null;let u=l[0];if((arcadeUtils.I$1(l[0])||arcadeUtils.J(l[0]))&&(u=arcadeUtils.pe(l[0],r.spatialReference)),null===u)return null;if(!(u instanceof unitUtils.p))throw new Error("Illegal Argument");return u instanceof unitUtils.b?arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference):u instanceof unitUtils.v?u.centroid:u instanceof unitUtils.m$4?arcadeUtils.l(u):u instanceof unitUtils.m$5?arcadeUtils.u$1(u):u instanceof unitUtils.M?u.center:null}))},n.functions.multiparttosinglepart=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){l=arcadeUtils.me(l),arcadeUtils.z(l,1,1);const u=[];if(null===l[0])return null;if(!(l[0]instanceof unitUtils.p))throw new Error("Illegal Argument");if(l[0]instanceof unitUtils.b)return [arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference)];if(l[0]instanceof unitUtils.M)return [arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference)];return geometryEngineAsync.J(l[0]).then((n=>{if(n instanceof unitUtils.v){const t=[],r=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const r=unitUtils.d$1({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r);}else r.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<r.length;n++)for(let e=0;e<t.length;e++)if(t[e].contains(r[n].pt)){t[e].addRing(r[n].ring);break}return t}if(n instanceof unitUtils.m$4){const t=[];for(let r=0;r<n.paths.length;r++){const e=unitUtils.d$1({paths:[n.paths[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e);}return t}if(l[0]instanceof unitUtils.m$5){const n=arcadeUtils.ae(arcadeUtils.c(l[0]),r.spatialReference);for(let t=0;t<n.points.length;t++)u.push(n.getPoint(t));return u}return null}))}))},n.functions.issimple=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,1,1),null===r[0])return !0;if(!(r[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.v(r[0])}))},n.functions.simplify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=arcadeUtils.me(r),arcadeUtils.z(r,1,1),null===r[0])return null;if(!(r[0]instanceof unitUtils.p))throw new Error("Illegal Argument");return geometryEngineAsync.J(r[0])}))});}

exports.registerFunctions = fn;
