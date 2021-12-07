'use strict';

const request = require('./messageBundle-8be88d04.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const HeightModelInfo = require('./HeightModelInfo-06fd3d80.js');
const Layer = require('./Layer-31cde361.js');
const ArcGISCachedService = require('./ArcGISCachedService-63a64e73.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const LercDecoder = require('./LercDecoder-b90fa97a.js');
require('./index-fde8502c.js');
require('./unitUtils-083cb8d0.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./TilemapCache-cec6e7d3.js');
require('./TileInfo-83a1d8a2.js');
require('./aaBoundingRect-56648c00.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./arcgisLayerUrl-5174d661.js');
require('./persistableUrlUtils-c611d652.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./opacityUtils-f2e4b347.js');
require('./lengthUtils-179eaf12.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./WorkerHandle-fc87c5d8.js');
require('./workers-bde9fe32.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=request.s$1.getLogger("esri.layers.ElevationLayer");let T=class extends(ArcGISCachedService.s(ArcGISService.p(OperationalLayer.y(PortalLayer.w(MultiOriginJSONSupport.l(Layer.b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=LercDecoder.n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=request.h$2(this._lercDecoder);}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new request.s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(request.b$1).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=request.r((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>request.E(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=request.C$2({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await Promise.resolve().then(function () { return require('./ElevationQuery-eff22534.js'); });request.h(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await Promise.resolve().then(function () { return require('./ElevationQuery-eff22534.js'); });request.h(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await request.E(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};request.e([request.d({json:{read:{source:"copyrightText"}}})],T.prototype,"copyright",void 0),request.e([request.d({readOnly:!0,type:HeightModelInfo.v})],T.prototype,"heightModelInfo",void 0),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),request.e([request.d({type:["show","hide"]})],T.prototype,"listMode",void 0),request.e([request.d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"minScale",null),request.e([request.d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"maxScale",null),request.e([request.d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],T.prototype,"opacity",void 0),request.e([request.d({type:["ArcGISTiledElevationServiceLayer"]})],T.prototype,"operationalLayerType",void 0),request.e([request.d()],T.prototype,"sourceJSON",void 0),request.e([request.d({json:{read:!1},value:"elevation",readOnly:!0})],T.prototype,"type",void 0),request.e([request.d(OperationalLayer.f)],T.prototype,"url",void 0),request.e([request.d()],T.prototype,"version",void 0),request.e([request.o$2("version",["currentVersion"])],T.prototype,"readVersion",null),T=request.e([request.i("esri.layers.ElevationLayer")],T),T.prototype.fetchTile.__isDefault__=!0;const x=T;

exports.default = x;
