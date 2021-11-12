import { A as r, ak as b$1, aL as U, E, bU as C$1, h as s$2, Y as T, e, a as d$1, H as c, i as i$2 } from './jsxFactory-a3b6abde.js';
import { z as k, g as o$1, k as r$1 } from './Graphic-08cda9ca.js';
import { a } from './HandleOwner-a0b41b75.js';
import { l, b } from './MultiOriginJSONSupport-22dd2d29.js';
import { i as i$1 } from './APIKeyMixin-d87deecc.js';
import { s as s$1 } from './ArcGISCachedService-a340efe0.js';
import { f, y as y$1, K } from './SublayersOwner-793dd450.js';
import { p } from './ArcGISService-88c76264.js';
import { i } from './BlendLayer-1d9f1c9a.js';
import { o } from './CustomParametersMixin-92abdfc3.js';
import { y } from './OperationalLayer-26aa2ff7.js';
import { w } from './PortalLayer-8e73039a.js';
import { n } from './RefreshableLayer-5b977e98.js';
import { s } from './ScaleRangeLayer-2f975321.js';
import { d, y as y$2, p as p$1 } from './arcgisLayerUrl-a1acfaeb.js';
import { f as f$1 } from './commonProperties-ad8badbd.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './reactiveUtils-aa11596b.js';
import './TilemapCache-4cb00319.js';
import './TileInfo-11d4e5af.js';
import './LRUCache-d4f192fd.js';
import './MemCache-dfacc658.js';
import './Version-6b31ee09.js';
import './CollectionFlattener-6fc74400.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './compilerUtils-a5ae094d.js';
import './lengthUtils-e1fe9a45.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './jsonUtils-66ddb072.js';
import './FeatureType-ba8f07c3.js';
import './Field-416cada2.js';
import './fieldType-7f2a820b.js';
import './FieldsIndex-87a4d86b.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './LayerFloorInfo-a2a78182.js';
import './Query-a20a7572.js';
import './TimeExtent-a92e5996.js';
import './popupUtils-9dc503ca.js';
import './floorFilterUtils-a09da11b.js';
import './sublayerUtils-c6a17833.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './asyncUtils-9a49e799.js';
import './PortalItem-4dd070a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(i(f(s(y(w(s$1(y$1(p(l(a(n(i$1(o(b)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r);}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>U(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return E(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=C$1({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return `${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new s$2("tile-layer:undefined-url","layer's url is not defined");const a=d(this.parsedUrl.path);if(r(a)&&"ImageServer"===a.serverType)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!y$2(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!p$1(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return E(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s$2("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return T("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d$1({readOnly:!0})],M.prototype,"attributionDataUrl",null),e([d$1({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),e([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),e([d$1({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),e([d$1({type:Boolean})],M.prototype,"resampling",void 0),e([d$1()],M.prototype,"sourceJSON",void 0),e([d$1({type:k})],M.prototype,"spatialReference",void 0),e([o$1("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),e([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),e([d$1({readOnly:!0})],M.prototype,"sublayers",void 0),e([r$1("sublayers",{layers:{type:[K]}})],M.prototype,"writeSublayers",null),e([d$1({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),e([d$1()],M.prototype,"tileServers",null),e([c("tileServers")],M.prototype,"castTileServers",null),e([d$1({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),e([d$1(f$1)],M.prototype,"url",void 0),M=e([i$2("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;

export default C;
