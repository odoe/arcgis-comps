'use strict';

const request = require('./MapView-922b9f1e.js');
const projectionSupport = require('./projectionSupport-4a0b34fb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o));}));else {const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u));}));}return {start:r,end:i}}function n$2(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e$1(r,i,o,s,a):u(r,i||o,s,a)}function e$1(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return (null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return ()=>!1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const j$1=new request.o$1({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),U=Object.freeze({}),M=new request.t$9,F=new request.t$9,G$1=new request.t$9,N={esriGeometryPoint:request.G$2,esriGeometryPolyline:request.U$1,esriGeometryPolygon:request.C$3,esriGeometryMultipoint:request._};function O(e,r,i,o=e.hasZ,n=e.hasM){if(request.t$2(r))return null;const s=e.hasZ&&o,l=e.hasM&&n;if(i){const t=request.it(G$1,r,e.hasZ,e.hasM,"esriGeometryPoint",i,o,n);return request.G$2(t,s,l)}return request.G$2(r,s,l)}function J(e,i,o,n,s,l,a=i,m=o){const c=i&&a,f=o&&m,g=request.r(n)?"coords"in n?n:n.geometry:null;if(request.t$2(g))return null;if(s){let t=request.ft(F,g,i,o,e,s,a,m);return l&&(t=request.it(G$1,t,c,f,e,l)),N[e](t,c,f)}if(l){const t=request.it(G$1,g,i,o,e,l,a,m);return N[e](t,c,f)}return request.yt(M,g,i,o,a,m),N[e](M,c,f)}async function P$1(e,t,r){const{outFields:i,orderByFields:o,groupByFieldsForStatistics:n,outStatistics:s}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(o)for(let l=0;l<o.length;l++)o[l]=o[l].trim();if(n)for(let l=0;l<n.length;l++)n[l]=n[l].trim();if(s)for(let l=0;l<s.length;l++)s[l].onStatisticField&&(s[l].onStatisticField=s[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),Z(e,t,r)}async function Z(e,r,i){if(!e)return null;let{where:l}=e;if(e.where=l=l&&l.trim(),(!l||/^1 *= *1$/.test(l)||r&&r===l)&&(e.where=null),!e.geometry)return e;let a=await b(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;a=request.l$14(a),a.spatialReference=t;}e.geometry=a,await projectionSupport.f(a.spatialReference,i);const m=(await request.v$4(request.d$7(a)))[0];if(request.t$2(m))throw U;const c=m.toJSON(),u=await projectionSupport.g(c,c.spatialReference,i);if(!u)throw U;return u.spatialReference=i,e.geometry=u,e}async function b(e){const{geometry:t,distance:r,units:o}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,s=o?j$1.fromJSON(o):request.z$3(n),c=n&&(request.R$1(n)||request.T$1(n))?t:await projectionSupport.f(n,request.c$13).then((()=>projectionSupport.g(t,request.c$13)));return (await x())(c.spatialReference,c,r,s)}async function x(){return (await Promise.resolve().then(function () { return require('./geometryEngineJSON-9696d850.js'); })).geodesicBuffer}function z(e){return e&&B in e?JSON.parse(JSON.stringify(e,E)):e}const B="_geVersion",E=(e,t)=>e!==B?t:void 0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){return "mesh"===n?request.o$14:request.G$3(n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return !1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return !1;return !0}function o(t,r,o,c,u){if(!t)return !1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f);}return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return !0===S.spatialRelationship[e]}function g(e){return !0===S.queryGeometry[request.v$2(e)]}function j(e){return !0===S.layerGeometry[e]}function h(){return Promise.resolve().then(function () { return require('./geometryEngineJSON-9696d850.js'); })}function v(e,n,l,y,c){if(request.c$7(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=request.D$1(new request.t$9,n,!1,!1);return Promise.resolve((r=>t(e,!1,!1,r)))}if(request.c$7(n)&&"esriGeometryMultipoint"===l){const r$1=request.D$1(new request.t$9,n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>r(r$1,!1,!1,e,y,c)))}if(request.s$9(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>request.r$13(n,J(l,y,c,e))));if(request.s$9(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>request.i$18(n,J(l,y,c,e))));if(request.s$9(n)&&"esriSpatialRelIntersects"===e){const e=n$1(l);return Promise.resolve((r=>e(n,J(l,y,c,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t(J(l,y,c,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new request.s$3(c,"Unsupported query spatial relationship",{query:r});if(request.I$1(o.spatialReference)&&request.I$1(i)){if(!g(o))throw new request.s$3(c,"Unsupported query geometry type",{query:r});if(!j(t))throw new request.s$3(c,"Unsupported layer geometry type",{query:r});if(r.outSR)return projectionSupport.f(r.geometry&&r.geometry.spatialReference,r.outSR)}}}function I(e){if(request.s$9(e))return !0;if(request.c$7(e)){for(const r of e.rings){if(5!==r.length)return !1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return !1}return !0}return !1}

exports.I = I;
exports.J = J;
exports.O = O;
exports.P = P$1;
exports.P$1 = P;
exports.U = U;
exports.Z = Z;
exports.n = n$2;
exports.t = t$1;
exports.v = v;
exports.z = z;
