import { T as T$1, S as S$1 } from './messageBundle-f75b4090.js';
import { a } from './lazyLayerLoader-f96eebd6.js';
import b from './PortalItem-155284f3.js';
import { t } from './portalItemUtils-6e127923.js';
import { selectLayerClassPath as i } from './portalLayers-db08b3a2.js';
import { t as t$1 } from './styleUtils-61c488eb.js';
import './index-b157fcf2.js';
import './Portal-c5cfa317.js';
import './layersLoader-cbb71ce1.js';
import './jsonContext-0ee4102f.js';
import './asyncUtils-fe35d349.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(e,t){return n$1(e,t,"notes","Map Notes")}function o(e,t){return n$1(e,t,"route","Route Layer")}async function n$1(r,o,n,i){if(!r.layerType||"ArcGISFeatureLayer"!==r.layerType)return !1;if(r.url)return !1;if(r.featureCollectionType&&r.featureCollectionType===n)return !0;if(r.itemId){const n=new b({id:r.itemId,portal:o});return await n.load(),"Feature Collection"===n.type&&t(n,i)}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(e,a,y){if(!a)return;const t=[];for(const r of a){const e=d(r,y);"GroupLayer"===r.layerType?t.push(G(e,r,y)):t.push(e);}const i=await T$1(t);for(const r of i)!r.value||y.filter&&!y.filter(r.value)||e.add(r.value);}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function d(e,r){return I(await T(e,r),e,r)}async function I(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&m(r)&&await M(y,r,a.context),await t$1(y,a.context),y}async function T(e,r$1){const o$1=r$1.context,n=g(o$1);let l=e.layerType||e.type;!l&&r$1&&r$1.defaultLayerType&&(l=r$1.defaultLayerType);const c=n[l];let s=c?a[c]:a.UnknownLayer;const p=o$1&&o$1.portal;if(f(e)){if(e.itemId){const r=new b({id:e.itemId,portal:p});await r.load();const t=(await i(r)).className||"UnknownLayer";s=a[t];}}else "ArcGISFeatureLayer"===l?await r(e,p)?s=a.MapNotesLayer:await o(e,p)?s=a.RouteLayer:m(e)&&(s=a.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?s=a.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo.version&&(s=a.UnsupportedLayer);return s()}function m(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return !1;const r=e.featureCollection;return !!(r&&r.layers&&r.layers.length>1)}function f(e){return "Feature Collection"===e.type}function g(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l;}else switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=S;break;default:r=p;}return r}async function G(r,a,y){const t=new S$1,i=n(t,Array.isArray(a.layers)?a.layers:[],y),L=await r;if(await i,"group"===L.type)return L.layers.addMany(t),L}async function M(e,r,y){const t=a.FeatureLayer,i=await t(),L=r.featureCollection,o=L.showLegend,n=L.layers.map(((a,t)=>{var L,n;const l=new i;l.read(a,y);const c={...y,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${t}`,visibility:null==(L=null==(n=r.visibleLayers)?void 0:n.includes(t))||L},c),null!=o&&l.read({showLegend:o},c),l}));e.layers.addMany(n);}

export { n as populateOperationalLayers };
