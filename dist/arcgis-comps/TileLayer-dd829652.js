import { r, a9 as b$1, ae as U, E, bo as C$1, a as s$2, T, e, b as d$1, k as c, i as i$2 } from './cast-e5ea2533.js';
import './geometry-160ffbb5.js';
import { a } from './HandleOwner-0793ecee.js';
import { l, b } from './Layer-663fafaf.js';
import { k, o as o$1, r as r$1 } from './Portal-f1457cb4.js';
import { i as i$1 } from './APIKeyMixin-5ecbc947.js';
import { s as s$1 } from './ArcGISCachedService-698c0959.js';
import { f, y as y$1, K } from './SublayersOwner-c1f95c9b.js';
import { p } from './ArcGISService-00a30f8e.js';
import { i } from './BlendLayer-34bd1b5b.js';
import { o } from './CustomParametersMixin-171b3366.js';
import { y } from './OperationalLayer-0f16c161.js';
import { w } from './PortalLayer-0ef8a2d2.js';
import { n } from './RefreshableLayer-0c4b9daf.js';
import { s } from './ScaleRangeLayer-f5a96945.js';
import { d, y as y$2, p as p$1 } from './arcgisLayerUrl-4273e4b3.js';
import { f as f$1 } from './commonProperties-4c10a963.js';
import './Polyline-56152656.js';
import './Handles-24a27aa9.js';
import './Collection-ac20f1a1.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './JSONSupport-8dda8bae.js';
import './Identifiable-0fb3fc58.js';
import './TilemapCache-16e250d2.js';
import './TileInfo-a7d4b50d.js';
import './unitUtils-5dcccb3c.js';
import './aaBoundingRect-2a187de3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './Version-f16e65fc.js';
import './CollectionFlattener-4b03d02c.js';
import './PopupTemplate-87ca9924.js';
import './opacityUtils-5755cb64.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './VisualVariablesMixin-a8b13e1b.js';
import './colorRamps-fcb1175a.js';
import './ColorStop-0035d362.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './Graphic-79de2095.js';
import './compilerUtils-2d7ddb00.js';
import './lengthUtils-2084b777.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './DictionaryRenderer-09505309.js';
import './jsonUtils-efd42703.js';
import './aliasOf-e543e228.js';
import './FeatureType-1c489c5b.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './FieldsIndex-e09edd96.js';
import './LabelClass-a646d1d3.js';
import './labelUtils-a20584ac.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-8df7be66.js';
import './Query-b8b0a5e8.js';
import './TimeExtent-ecf7e6f2.js';
import './popupUtils-71e7198e.js';
import './floorFilterUtils-a09da11b.js';
import './sublayerUtils-c6a17833.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(i(f(s(y(w(s$1(y$1(p(l(a(n(i$1(o(b)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r);}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>U(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return E(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=C$1({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return `${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new s$2("tile-layer:undefined-url","layer's url is not defined");const a=d(this.parsedUrl.path);if(r(a)&&"ImageServer"===a.serverType)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!y$2(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!p$1(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return E(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s$2("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return T("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d$1({readOnly:!0})],M.prototype,"attributionDataUrl",null),e([d$1({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),e([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),e([d$1({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),e([d$1({type:Boolean})],M.prototype,"resampling",void 0),e([d$1()],M.prototype,"sourceJSON",void 0),e([d$1({type:k})],M.prototype,"spatialReference",void 0),e([o$1("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),e([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),e([d$1({readOnly:!0})],M.prototype,"sublayers",void 0),e([r$1("sublayers",{layers:{type:[K]}})],M.prototype,"writeSublayers",null),e([d$1({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),e([d$1()],M.prototype,"tileServers",null),e([c("tileServers")],M.prototype,"castTileServers",null),e([d$1({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),e([d$1(f$1)],M.prototype,"url",void 0),M=e([i$2("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;

export default C;