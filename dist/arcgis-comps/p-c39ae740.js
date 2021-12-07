import{T as e,S as r}from"./p-e58503d5.js";import{a}from"./p-48b2d961.js";import t from"./p-0eb619a6.js";import{t as i}from"./p-e0707b10.js";import{selectLayerClassPath as y}from"./p-e0b6f51d.js";import{t as L}from"./p-ab0e9273.js";import"./p-53bb6ab4.js";import"./p-efbca0ca.js";import"./p-5e8844f3.js";import"./p-a6456b8e.js";import"./p-e654504b.js";async function n(e,r,a,y){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===a)return!0;if(e.itemId){const a=new t({id:e.itemId,portal:r});return await a.load(),"Feature Collection"===a.type&&i(a,y)}return!1}async function o(r,a,t){if(!a)return;const i=[];for(const e of a){const r=I(e,t);i.push("GroupLayer"===e.layerType?g(r,e,t):r)}const y=await e(i);for(const e of y)!e.value||t.filter&&!t.filter(e.value)||r.add(e.value)}const c={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},l={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},S={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&G(r)&&await m(t,r,a.context),await L(t,a.context),t}(await async function(e,r){const i=r.context,L=f(i);let o=e.layerType||e.type;!o&&r&&r.defaultLayerType&&(o=r.defaultLayerType);const c=L[o];let l=c?a[c]:a.UnknownLayer;const s=i&&i.portal;if(T(e)){if(e.itemId){const r=new t({id:e.itemId,portal:s});await r.load();const i=(await y(r)).className||"UnknownLayer";l=a[i]}}else"ArcGISFeatureLayer"===o?await function(e,r){return n(e,r,"notes","Map Notes")}(e,s)?l=a.MapNotesLayer:await function(e,r){return n(e,r,"route","Route Layer")}(e,s)?l=a.RouteLayer:G(e)&&(l=a.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?l=a.WMTSLayer:"WFS"===o&&"2.0.0"!==e.wfsInfo.version&&(l=a.UnsupportedLayer);return l()}(e,r),e,r)}function G(e){if("ArcGISFeatureLayer"!==e.layerType||T(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function T(e){return"Feature Collection"===e.type}function f(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=l;break;default:r=c}else switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=p;break;default:r=S}return r}async function g(e,a,t){const i=new r,y=o(i,Array.isArray(a.layers)?a.layers:[],t),L=await e;if(await y,"group"===L.type)return L.layers.addMany(i),L}async function m(e,r,t){const i=a.FeatureLayer,y=await i(),L=r.featureCollection,n=L.showLegend,o=L.layers.map(((a,i)=>{var L,o;const c=new y;c.read(a,t);const l={...t,ignoreDefaults:!0};return c.read({id:`${e.id}-sublayer-${i}`,visibility:null==(L=null==(o=r.visibleLayers)?void 0:o.includes(i))||L},l),null!=n&&c.read({showLegend:n},l),c}));e.layers.addMany(o)}export{o as populateOperationalLayers}