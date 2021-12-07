'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let p=i=class extends request.a$2{constructor(r){super(r);}clone(){return new i({customLayerParameters:request.l$1(this.customLayerParameters),customParameters:request.l$1(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};request.e([request.d({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),request.e([request.d({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),request.e([request.d({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),request.e([request.d({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),request.e([request.d({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=request.e([request.i("esri.layer.support.WMTSLayerInfo")],p);const a=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let R=class extends(BlendLayer.i(RefreshableLayer.n(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(MultiOriginJSONSupport.l(Layer.b))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new request.M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,request.k.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=request.k.WebMercator,this.subDomains=null,this.tileInfo=new TileInfo.j({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new request.b$2({x:-20037508.342787,y:20037508.342787,spatialReference:request.k.WebMercator}),spatialReference:request.k.WebMercator,lods:[new TileInfo.p({level:0,scale:591657527.591555,resolution:156543.033928}),new TileInfo.p({level:1,scale:295828763.795777,resolution:78271.5169639999}),new TileInfo.p({level:2,scale:147914381.897889,resolution:39135.7584820001}),new TileInfo.p({level:3,scale:73957190.948944,resolution:19567.8792409999}),new TileInfo.p({level:4,scale:36978595.474472,resolution:9783.93962049996}),new TileInfo.p({level:5,scale:18489297.737236,resolution:4891.96981024998}),new TileInfo.p({level:6,scale:9244648.868618,resolution:2445.98490512499}),new TileInfo.p({level:7,scale:4622324.434309,resolution:1222.99245256249}),new TileInfo.p({level:8,scale:2311162.217155,resolution:611.49622628138}),new TileInfo.p({level:9,scale:1155581.108577,resolution:305.748113140558}),new TileInfo.p({level:10,scale:577790.554289,resolution:152.874056570411}),new TileInfo.p({level:11,scale:288895.277144,resolution:76.4370282850732}),new TileInfo.p({level:12,scale:144447.638572,resolution:38.2185141425366}),new TileInfo.p({level:13,scale:72223.819286,resolution:19.1092570712683}),new TileInfo.p({level:14,scale:36111.909643,resolution:9.55462853563415}),new TileInfo.p({level:15,scale:18055.954822,resolution:4.77731426794937}),new TileInfo.p({level:16,scale:9027.977411,resolution:2.38865713397468}),new TileInfo.p({level:17,scale:4513.988705,resolution:1.19432856685505}),new TileInfo.p({level:18,scale:2256.994353,resolution:.597164283559817}),new TileInfo.p({level:19,scale:1128.497176,resolution:.298582141647617}),new TileInfo.p({level:20,scale:564.248588,resolution:.14929107082380833}),new TileInfo.p({level:21,scale:282.124294,resolution:.07464553541190416}),new TileInfo.p({level:22,scale:141.062147,resolution:.03732276770595208}),new TileInfo.p({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null;}normalizeCtorArgs(e,t){return "string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new request.$$1(this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property");}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new request.s("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&request.k.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new request.$$1(t),o=l.scheme?l.scheme+"://":"//",i=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(i);else if(r&&r.length>0&&l.authority.split(".").length>1)for(const s of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new request.$$1(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&request.et(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=request.z$2(e)),t.templateUrl=e;}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return request.E(i,n).then((e=>e.data))}getTileUrl(e,t,r){const l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+request.r$8(this.urlPath,{level:l,z:l,col:r,x:r,row:t,y:t})}};request.e([request.d({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),request.e([request.d({type:request.M,json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],R.prototype,"listMode",void 0),request.e([request.d()],R.prototype,"levelValues",null),request.e([request.d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),request.e([request.d({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),request.e([request.d({type:request.k})],R.prototype,"spatialReference",void 0),request.e([request.o$2("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),request.e([request.d({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),request.e([request.d({type:TileInfo.j,json:{write:!0}})],R.prototype,"tileInfo",void 0),request.e([request.d({readOnly:!0})],R.prototype,"tileServers",null),request.e([request.d({json:{read:!1}})],R.prototype,"type",void 0),request.e([request.d()],R.prototype,"urlPath",null),request.e([request.d({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),request.e([request.o$2("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),request.e([request.r$2("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),request.e([request.d({type:a,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=request.e([request.i("esri.layers.WebTileLayer")],R);const x=R;

const WebTileLayer = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': x
});

exports.WebTileLayer = WebTileLayer;
exports.a = a;
exports.x = x;
