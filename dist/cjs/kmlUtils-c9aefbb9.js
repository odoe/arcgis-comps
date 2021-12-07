'use strict';

const request = require('./messageBundle-8be88d04.js');
const PopupTemplate = require('./PopupTemplate-a0b855f8.js');
const aaBoundingBox = require('./aaBoundingBox-c372701a.js');
const geometry = require('./geometry-ef17530a.js');
const jsonUtils = require('./jsonUtils-fc4080da.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const o=request.l$1(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?G(n,a,e.featureSet.features):"esriGeometryPolyline"===t?G(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&G(f,a,e.featureSet.features);})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e);})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s);}));})),t.forEach((e=>{if(e.featureInfos){e.points=request.l$1(r.get("esriGeometryPoint")),e.polylines=request.l$1(r.get("esriGeometryPolyline")),e.polygons=request.l$1(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e]);}}));const u=j(t);return {folders:o,sublayers:t,extent:u}}function g(t,s,i,f){const a=request.n$4&&request.n$4.findCredential(t);t=request.Rt(t,{token:a&&a.token});const l=request.t.kmlServiceUrl;return request.E(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i);}else s.unshift(i);})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t);}));}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=FeatureSet['default'].fromJSON(e.featureSet).features,r=e.layerDefinition,s=jsonUtils.t(r.drawingInfo.renderer),n=PopupTemplate.M.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t);}return i}function j(e){const o=aaBoundingBox.a(aaBoundingBox.D),t=aaBoundingBox.a(aaBoundingBox.D);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)geometry.f$1(o,e.geometry),aaBoundingBox.f(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)geometry.f$1(o,e.geometry),aaBoundingBox.f(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)geometry.f$1(o,e.geometry),aaBoundingBox.f(t,o);if(r.mapImages)for(const e of r.mapImages)geometry.f$1(o,e.extent),aaBoundingBox.f(t,o);}return aaBoundingBox.k(t,aaBoundingBox.D)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:request.k.WGS84}}

exports.S = S;
exports.b = b;
exports.d = d;
exports.g = g;
exports.j = j;
