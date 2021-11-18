import{m as e}from"./p-9ae46e68.js";import{a as r}from"./p-a4ee4923.js";import a from"./p-725fd184.js";import{m as t,h as s,f as n,n as c}from"./p-8ef38626.js";import{t as o}from"./p-e0707b10.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-566b0715.js";import"./p-347860a7.js";import"./p-da143060.js";import"./p-57ae469d.js";function i(e){return!e.portalItem||e.portalItem instanceof a||(e={...e,portalItem:new a(e.portalItem)}),function(e){return e.load().then(l).then(u)}(e.portalItem).then((r=>{const a={portalItem:e.portalItem,...r.properties};return Promise.resolve(new(0,r.constructor)(a))}))}function l(r){switch(r.type){case"Map Service":return(a=r,c(a.url).then((e=>e.tileInfo))).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return m(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(r);case"Feature Collection":return async function(e){if(await e.load(),o(e,"Map Notes"))return{className:"MapNotesLayer"};if(o(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===s(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(r);case"Scene Service":return function(e){return m(e).then((r=>{if("object"==typeof r){const a={};let t;if(null!=r.id?(a.layerId=r.id,t=`${e.url}/layers/${r.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(r))if(-1!==e.typeKeywords.indexOf(a))return{className:r[a]}}return c(t).then((e=>{let r="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return!1===r?c(e.url).then((e=>"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(r);case"Image Service":return async function(e){var r,a,t;await e.load();const s=null!=(r=null==(a=e.typeKeywords)?void 0:a.map((e=>e.toLowerCase())))?r:[];if(s.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(s.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const n=await e.fetchData(),o=null==n?void 0:n.layerType;return"ArcGISTiledImageServiceLayer"===o?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===o?{className:"ImageryLayer"}:"map"===(null==(t=(await c(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(r);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Feed":return{className:"StreamLayer"};default:return Promise.reject(new e("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type}))}var a}function u(e){return(0,r[e.className])().then((r=>({constructor:r,properties:e.properties})))}function m(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>"Feature Service"===e.type?y(r=await t(r,e.url)):s(r)>0?y(r):c(e.url).then(y)))}function y(e){return 1===s(e)&&{id:n(e)}}export{i as fromItem,l as selectLayerClassPath}