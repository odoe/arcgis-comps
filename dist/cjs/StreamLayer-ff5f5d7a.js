'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const PopupTemplate = require('./PopupTemplate-a0b855f8.js');
const UniqueValueRenderer = require('./UniqueValueRenderer-1c485e9f.js');
require('./DictionaryRenderer-a0dce499.js');
const jsonUtils = require('./jsonUtils-fc4080da.js');
require('./VisualVariablesMixin-a105fcfa.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const CustomParametersMixin = require('./CustomParametersMixin-996a5732.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const TemporalLayer = require('./TemporalLayer-06f08bdd.js');
const fieldProperties = require('./fieldProperties-c9dd6469.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const LabelClass = require('./LabelClass-4b91d60e.js');
const styleUtils = require('./styleUtils-536b017f.js');
const Query = require('./Query-354911d3.js');
const popupUtils = require('./popupUtils-7a76fb7d.js');
const ElevationInfo = require('./ElevationInfo-d3e3d64f.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./ColorStop-ce63948c.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./diffUtils-df69757f.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-62d28b73.js');
require('./Symbol-f0556e23.js');
require('./persistableUrlUtils-c611d652.js');
require('./styleUtils-2b475600.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./colorRamps-d0c2cb9d.js');
require('./screenUtils-d911ae62.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./arcgisLayerUrl-5174d661.js');
require('./mat4-f68486bc.js');
require('./TimeExtent-8b558884.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./TimeInfo-050c5617.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./FieldsIndex-664af19b.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends request.a$2{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"age",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=request.e([request.i("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Y=request.s$1.getLogger("esri.layers.StreamLayer"),Z=fieldProperties.l();let $=class extends(labelingInfo.t(BlendLayer.i(TemporalLayer.a(ScaleRangeLayer.s(RefreshableLayer.n(ArcGISService.p(OperationalLayer.y(PortalLayer.w(MultiOriginJSONSupport.l(CustomParametersMixin.o(Layer.b))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=request.k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in request.e$7))return this.addResolvingPromise(Promise.reject(new request.s("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){opacityUtils.d(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=jsonUtils.o(n,r,s)||void 0;return e||Y.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new UniqueValueRenderer.P({defaultSymbol:ee(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:ee(e.symbol,e,s)})))}):new jsonUtils.p({symbol:ee(r.defaultSymbol,r,s)})}createPopupTemplate(e){return popupUtils.a(this,e)}createQuery(){const e=new Query.b;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new request.s("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new request.s("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new request.s("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new request.s("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await request.E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),opacityUtils.d(this.renderer,this.fieldsIndex),opacityUtils.m(this.timeInfo,this.fieldsIndex),styleUtils.t(this,{origin:"service"})}};request.e([request.d({type:String})],$.prototype,"copyright",void 0),request.e([request.d({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),request.e([request.d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),request.e([request.d({type:String})],$.prototype,"displayField",void 0),request.e([request.d({type:ElevationInfo.x})],$.prototype,"elevationInfo",void 0),request.e([request.d(labelingInfo.s)],$.prototype,"featureReduction",void 0),request.e([request.d(Z.fields)],$.prototype,"fields",void 0),request.e([request.d(Z.fieldsIndex)],$.prototype,"fieldsIndex",void 0),request.e([request.d({type:request.M})],$.prototype,"geometryDefinition",void 0),request.e([request.d({type:geometry.i$1.apiValues,json:{read:{reader:geometry.i$1.read}}})],$.prototype,"geometryType",void 0),request.e([request.d(OperationalLayer.m)],$.prototype,"labelsVisible",void 0),request.e([request.d({type:[LabelClass.E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:labelingInfo.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],$.prototype,"labelingInfo",void 0),request.e([request.d(OperationalLayer.c)],$.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],$.prototype,"listMode",void 0),request.e([request.d({type:request.S$2})],$.prototype,"maxReconnectionAttempts",void 0),request.e([request.d({type:request.S$2})],$.prototype,"maxReconnectionInterval",void 0),request.e([request.d(OperationalLayer.I)],$.prototype,"maxScale",void 0),request.e([request.d(OperationalLayer.b)],$.prototype,"minScale",void 0),request.e([request.d({type:String})],$.prototype,"objectIdField",void 0),request.e([request.d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],$.prototype,"operationalLayerType",void 0),request.e([request.d(OperationalLayer.p)],$.prototype,"popupEnabled",void 0),request.e([request.d({type:PopupTemplate.M,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],$.prototype,"popupTemplate",void 0),request.e([request.d({type:p})],$.prototype,"purgeOptions",void 0),request.e([request.d({types:jsonUtils.m,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:jsonUtils.n,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],$.prototype,"renderer",null),request.e([request.o$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),request.o$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],$.prototype,"readRenderer",null),request.e([request.d(OperationalLayer.l)],$.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({type:request.k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],$.prototype,"spatialReference",void 0),request.e([request.d({json:{read:!1}})],$.prototype,"type",void 0),request.e([request.d(OperationalLayer.f)],$.prototype,"url",void 0),request.e([request.d({type:Number})],$.prototype,"updateInterval",void 0),request.e([request.d({type:String})],$.prototype,"webSocketUrl",void 0),$=request.e([request.i("esri.layers.StreamLayer")],$);const ee=request.u$3({types:SimpleLineSymbol.M}),re=$;

exports.default = re;
