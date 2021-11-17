import { r, Z as b$1, a0 as U, a3 as E, b_ as C$1, C as s$2, ag as T, e, a as d$1, g as c, i as i$2 } from './jsxFactory-ef3e403e.js';
import { k, o as o$1, d as r$1 } from './unitUtils-8a2b838a.js';
import { a } from './HandleOwner-ebad91ab.js';
import { l, b } from './Layer-5a380094.js';
import { i as i$1 } from './APIKeyMixin-a3a0d40c.js';
import { s as s$1 } from './ArcGISCachedService-05a37e31.js';
import { f, y as y$1, K } from './SublayersOwner-97dc18c3.js';
import { p } from './ArcGISService-30368d07.js';
import { i } from './BlendLayer-81c24642.js';
import { o } from './CustomParametersMixin-ca53bbdf.js';
import { y } from './OperationalLayer-63ec0fa5.js';
import { w } from './PortalLayer-2d4eca15.js';
import { n } from './RefreshableLayer-079cea19.js';
import { s } from './ScaleRangeLayer-cb457ce8.js';
import { d, y as y$2, p as p$1 } from './arcgisLayerUrl-06668ce7.js';
import { f as f$1 } from './commonProperties-e22a7011.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './reactiveUtils-2b52b231.js';
import './TilemapCache-b1c04324.js';
import './TileInfo-8df7de31.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './Version-38dfe388.js';
import './CollectionFlattener-70fb34fc.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './compilerUtils-be3a2322.js';
import './lengthUtils-26f6142e.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './jsonUtils-595f52d3.js';
import './FeatureType-6da2d9f8.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './FieldsIndex-d76382ca.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-c765d601.js';
import './Query-fd5e1b7b.js';
import './TimeExtent-fb7ed3e3.js';
import './popupUtils-5accf1e0.js';
import './floorFilterUtils-a09da11b.js';
import './sublayerUtils-c6a17833.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './asyncUtils-968a02e9.js';
import './PortalItem-496c46b9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(i(f(s(y(w(s$1(y$1(p(l(a(n(i$1(o(b)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r);}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>U(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return E(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=C$1({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return `${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new s$2("tile-layer:undefined-url","layer's url is not defined");const a=d(this.parsedUrl.path);if(r(a)&&"ImageServer"===a.serverType)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!y$2(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!p$1(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return E(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s$2("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return T("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d$1({readOnly:!0})],M.prototype,"attributionDataUrl",null),e([d$1({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),e([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),e([d$1({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),e([d$1({type:Boolean})],M.prototype,"resampling",void 0),e([d$1()],M.prototype,"sourceJSON",void 0),e([d$1({type:k})],M.prototype,"spatialReference",void 0),e([o$1("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),e([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),e([d$1({readOnly:!0})],M.prototype,"sublayers",void 0),e([r$1("sublayers",{layers:{type:[K]}})],M.prototype,"writeSublayers",null),e([d$1({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),e([d$1()],M.prototype,"tileServers",null),e([c("tileServers")],M.prototype,"castTileServers",null),e([d$1({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),e([d$1(f$1)],M.prototype,"url",void 0),M=e([i$2("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;

export default C;
