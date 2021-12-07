import { fp as d$1, t, s, E, fq as m$1, r, fr as pt, ci as U } from './index.js';
import { a } from './lazyLayerLoader.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(e){var r;const a=null==(r=e.properties)?void 0:r.customParameters,t=await d(e.url,a),l={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(l.layerId=t.layerOrTableId,l.sourceJSON=t.sourceJSON),new t.Constructor(l);const n=new((await import('./GroupLayer.js')).default)({title:t.parsedUrl.title});return c(n,t,l),n}function y(e,r){return e?e.find((e=>e.id===r)):null}function c(e,r$1,a){function l(e,l){const n={...a,layerId:e,sublayerTitleMode:"service-name"};return r(l)&&(n.sourceJSON=l),new r$1.Constructor(n)}r$1.sublayerIds.forEach((a=>{const t=l(a,y(r$1.sublayerInfos,a));e.add(t);})),r$1.tableIds.forEach((a=>{const t=l(a,y(r$1.tableInfos,a));e.tables.add(t);}));}async function d(e,t$1){let l=d$1(e);if(t(l)&&(l=await f(e,t$1)),t(l))throw new s("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:n,sublayer:o}=l;let u;const i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(n){case"MapServer":u=null!=o?"FeatureLayer":S(e,t$1).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=w(e,t$1).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=w(l.url.path,t$1).then((e=>{if(e){if("Voxel"===(null==e?void 0:e.layerType))return "VoxelLayer";if(null!=e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r;const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},t=null==(r=e.layers[0])?void 0:r.layerType;if(null!=a[t])return a[t]}}return "SceneLayer"}));break;default:u=i[n];}const y={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===n,d={parsedUrl:l,Constructor:null,layerOrTableId:c?o:null,sublayerIds:null,tableIds:null},p=await u;if(y[p]&&null==o){const r=await v(e,n,t$1);c&&(d.sublayerInfos=r.layerInfos,d.tableInfos=r.tableInfos);if(1!==r.layerIds.length+r.tableIds.length)d.sublayerIds=r.layerIds,d.tableIds=r.tableIds;else if(c){var I,b;d.layerOrTableId=null!=(I=r.layerIds[0])?I:r.tableIds[0],d.sourceJSON=null!=(b=r.layerInfos[0])?b:r.tableInfos[0];}}return d.Constructor=await m(p),d}async function f(e,r$1){var a;const s=await w(e,r$1);let u=null,i=null;const y=s.type;if("Feature Layer"===y||"Table"===y?(u="FeatureServer",i=s.id):"indexedVector"===y?u="VectorTileServer":s.hasOwnProperty("mapName")?u="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?u="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?u="FeatureServer":s.hasOwnProperty("streamUrls")?u="StreamServer":p(s)?(u="SceneServer",i=s.id):s.hasOwnProperty("layers")&&p(null==(a=s.layers)?void 0:a[0])&&(u="SceneServer"),!u)return null;const c=null!=i?m$1(e):null;return {title:r(c)&&s.name||pt(e),serverType:u,sublayer:i,url:{path:r(c)?c.serviceUrl:U(e).path}}}function p(e){return (null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function v(e,r,a){var t,l;let n,s=!1;if("FeatureServer"===r){const r=await b(e,a);s=!!r.layersJSON,n=r.layersJSON||r.serviceJSON;}else n=await w(e,a);const o=null==(t=n)?void 0:t.layers,u=null==(l=n)?void 0:l.tables;return {layerIds:(null==o?void 0:o.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:s?o:[],tableInfos:s?u:[]}}function I(e){return !e.type||"Feature Layer"===e.type}async function b(e,r){var a,t;let l=await w(e,r);l=l||{},l.layers=(null==(a=l.layers)?void 0:a.filter(I))||[];const n={serviceJSON:l};if(l.currentVersion<10.5)return n;const s=await w(e+"/layers",r);return n.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(I))||[],tables:(null==s?void 0:s.tables)||[]},n}async function m(e){return (0, a[e])()}async function S(e,r){return (await w(e,r)).tileInfo}async function w(r,a){return (await E(r,{responseType:"json",query:{f:"json",...a}})).data}

export { i as fromUrl };
