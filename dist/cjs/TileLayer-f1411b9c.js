'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const APIKeyMixin = require('./APIKeyMixin-77c99036.js');
const ArcGISCachedService = require('./ArcGISCachedService-63a64e73.js');
const SublayersOwner = require('./SublayersOwner-98b1c5c4.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const CustomParametersMixin = require('./CustomParametersMixin-996a5732.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const arcgisLayerUrl = require('./arcgisLayerUrl-5174d661.js');
require('./index-fde8502c.js');
require('./reactiveUtils-ef5dccea.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./TilemapCache-cec6e7d3.js');
require('./TileInfo-83a1d8a2.js');
require('./unitUtils-083cb8d0.js');
require('./aaBoundingRect-56648c00.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./Version-55b8a4e7.js');
require('./CollectionFlattener-bc4cde45.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./jsonUtils-fc4080da.js');
require('./FeatureType-d8b81062.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./FieldsIndex-664af19b.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./LayerFloorInfo-c56fa764.js');
require('./Query-354911d3.js');
require('./TimeExtent-8b558884.js');
require('./popupUtils-7a76fb7d.js');
require('./floorFilterUtils-a9b30733.js');
require('./sublayerUtils-a9071b30.js');
require('./mat4-f68486bc.js');
require('./ElevationInfo-d3e3d64f.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(BlendLayer.i(SublayersOwner.f(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(ArcGISCachedService.s(SublayersOwner.y(ArcGISService.p(MultiOriginJSONSupport.l(HandleOwner.a(RefreshableLayer.n(APIKeyMixin.i(CustomParametersMixin.o(Layer.b)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&request.k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r);}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>request.U(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return request.E(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=request.C$2({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return `${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new request.s("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new request.s("tile-layer:undefined-url","layer's url is not defined");const a=arcgisLayerUrl.d(this.parsedUrl.path);if(request.r(a)&&"ImageServer"===a.serverType)throw new request.s("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");request.E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!arcgisLayerUrl.y(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!arcgisLayerUrl.p(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return request.E(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new request.s("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return request.T$2("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};request.e([request.d({readOnly:!0})],M.prototype,"attributionDataUrl",null),request.e([request.d({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),request.e([request.d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),request.e([request.d({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),request.e([request.d({type:Boolean})],M.prototype,"resampling",void 0),request.e([request.d()],M.prototype,"sourceJSON",void 0),request.e([request.d({type:request.k})],M.prototype,"spatialReference",void 0),request.e([request.o$2("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),request.e([request.d({readOnly:!0})],M.prototype,"sublayers",void 0),request.e([request.r$2("sublayers",{layers:{type:[SublayersOwner.K]}})],M.prototype,"writeSublayers",null),request.e([request.d({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),request.e([request.d()],M.prototype,"tileServers",null),request.e([request.c("tileServers")],M.prototype,"castTileServers",null),request.e([request.d({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),request.e([request.d(OperationalLayer.f)],M.prototype,"url",void 0),M=request.e([request.i("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;

exports.default = C;
