'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const HandleOwner = require('./HandleOwner-f254dc86.js');
const Layer = require('./Layer-849337e0.js');
const APIKeyMixin = require('./APIKeyMixin-f99c03a8.js');
const ArcGISCachedService = require('./ArcGISCachedService-3d2be8af.js');
const SublayersOwner = require('./SublayersOwner-479438db.js');
const ArcGISService = require('./ArcGISService-a170c777.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const CustomParametersMixin = require('./CustomParametersMixin-8fc5bf2f.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const RefreshableLayer = require('./RefreshableLayer-22c5fbbd.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const arcgisLayerUrl = require('./arcgisLayerUrl-b24ae301.js');
const commonProperties = require('./commonProperties-75b954b3.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./reactiveUtils-9e33ad73.js');
require('./TilemapCache-4970592b.js');
require('./TileInfo-363ea532.js');
require('./aaBoundingRect-7e7e678f.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./Version-3676e068.js');
require('./CollectionFlattener-3dadfe6b.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./jsonUtils-fa6e9edd.js');
require('./FeatureType-5a860566.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./LayerFloorInfo-154885ea.js');
require('./Query-35be2e91.js');
require('./TimeExtent-cdfe048b.js');
require('./popupUtils-180c3a12.js');
require('./floorFilterUtils-a9b30733.js');
require('./sublayerUtils-a9071b30.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./asyncUtils-9f974032.js');
require('./PortalItem-42e06deb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(BlendLayer.i(SublayersOwner.f(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(ArcGISCachedService.s(SublayersOwner.y(ArcGISService.p(Layer.l(HandleOwner.a(RefreshableLayer.n(APIKeyMixin.i(CustomParametersMixin.o(Layer.b)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&unitUtils.k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r);}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>request.U(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return request.E(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=request.C$1({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return `${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new request.s$1("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new request.s$1("tile-layer:undefined-url","layer's url is not defined");const a=arcgisLayerUrl.d(this.parsedUrl.path);if(request.r(a)&&"ImageServer"===a.serverType)throw new request.s$1("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");request.E(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!arcgisLayerUrl.y(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!arcgisLayerUrl.p(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return request.E(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new request.s$1("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return request.T$2("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};request.e([request.d({readOnly:!0})],M.prototype,"attributionDataUrl",null),request.e([request.d({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),request.e([request.d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),request.e([request.d({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),request.e([request.d({type:Boolean})],M.prototype,"resampling",void 0),request.e([request.d()],M.prototype,"sourceJSON",void 0),request.e([request.d({type:unitUtils.k})],M.prototype,"spatialReference",void 0),request.e([unitUtils.o("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),request.e([request.d({readOnly:!0})],M.prototype,"sublayers",void 0),request.e([unitUtils.r$1("sublayers",{layers:{type:[SublayersOwner.K]}})],M.prototype,"writeSublayers",null),request.e([request.d({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),request.e([request.d()],M.prototype,"tileServers",null),request.e([request.c("tileServers")],M.prototype,"castTileServers",null),request.e([request.d({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),request.e([request.d(commonProperties.f)],M.prototype,"url",void 0),M=request.e([request.i("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;

exports.default = C;
