import { eS as k, k as k$1, E, l, ff as n, k2 as Rt, P as t, eR as a, h9 as D, oz as f, ih as f$1, cX as g$1, ow as t$1, h5 as M } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l$1={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const o=l(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?G(n,a,e.featureSet.features):"esriGeometryPolyline"===t?G(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&G(f,a,e.featureSet.features);})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e);})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s);}));})),t.forEach((e=>{if(e.featureInfos){e.points=l(r.get("esriGeometryPoint")),e.polylines=l(r.get("esriGeometryPolyline")),e.polygons=l(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l$1[o.type].get(o.id);t&&e[c[o.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e]);}}));const u=j(t);return {folders:o,sublayers:t,extent:u}}function g(t$1,s,i,f){const a=n&&n.findCredential(t$1);t$1=Rt(t$1,{token:a&&a.token});const l=t.kmlServiceUrl;return E(l,{query:{url:t$1,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i);}else s.unshift(i);})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t);}));}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=g$1.fromJSON(e.featureSet).features,r=e.layerDefinition,s=t$1(r.drawingInfo.renderer),n=M.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t);}return i}function j(e){const o=a(D),t=a(D);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)f(o,e.geometry),f$1(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)f(o,e.geometry),f$1(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)f(o,e.geometry),f$1(t,o);if(r.mapImages)for(const e of r.mapImages)f(o,e.extent),f$1(t,o);}return k(t,D)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:k$1.WGS84}}

export { S, b, d, g, j };
