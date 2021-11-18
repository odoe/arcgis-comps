'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const UniqueValueRenderer = require('./UniqueValueRenderer-cac6e88d.js');
require('./DictionaryRenderer-7157833a.js');
const jsonUtils = require('./jsonUtils-fa6e9edd.js');
require('./VisualVariablesMixin-fd7d8973.js');
const Layer = require('./Layer-849337e0.js');
const ArcGISService = require('./ArcGISService-a170c777.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const CustomParametersMixin = require('./CustomParametersMixin-8fc5bf2f.js');
const labelingInfo = require('./labelingInfo-b4dde768.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const RefreshableLayer = require('./RefreshableLayer-22c5fbbd.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const TemporalLayer = require('./TemporalLayer-0201042a.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const fieldProperties = require('./fieldProperties-f6acb896.js');
const LabelClass = require('./LabelClass-21df7ce2.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const styleUtils = require('./styleUtils-2856ad11.js');
const Query = require('./Query-35be2e91.js');
const popupUtils = require('./popupUtils-180c3a12.js');
require('./index-57f2cfbb.js');
require('./ColorStop-c5f3f911.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./colorRamps-c066f1f7.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./TimeExtent-cdfe048b.js');
require('./asyncUtils-9f974032.js');
require('./PortalItem-42e06deb.js');
require('./TimeInfo-e2561319.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends JSONSupport.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"age",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=request.e([request.i("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Y=request.s$2.getLogger("esri.layers.StreamLayer"),Z=fieldProperties.l();let $=class extends(labelingInfo.t(BlendLayer.i(TemporalLayer.a(ScaleRangeLayer.s(RefreshableLayer.n(ArcGISService.p(OperationalLayer.y(PortalLayer.w(Layer.l(CustomParametersMixin.o(Layer.b))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=unitUtils.k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in request.e$7))return this.addResolvingPromise(Promise.reject(new request.s$1("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){unitUtils.d(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=jsonUtils.o(n,r,s)||void 0;return e||Y.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new UniqueValueRenderer.P({defaultSymbol:ee(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:ee(e.symbol,e,s)})))}):new jsonUtils.p({symbol:ee(r.defaultSymbol,r,s)})}createPopupTemplate(e){return popupUtils.a(this,e)}createQuery(){const e=new Query.b;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new request.s$1("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new request.s$1("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new request.s$1("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new request.s$1("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await request.E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),unitUtils.d(this.renderer,this.fieldsIndex),unitUtils.m$1(this.timeInfo,this.fieldsIndex),styleUtils.t(this,{origin:"service"})}};request.e([request.d({type:String})],$.prototype,"copyright",void 0),request.e([request.d({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),request.e([request.d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),request.e([request.d({type:String})],$.prototype,"displayField",void 0),request.e([request.d({type:commonProperties.x})],$.prototype,"elevationInfo",void 0),request.e([request.d(labelingInfo.s)],$.prototype,"featureReduction",void 0),request.e([request.d(Z.fields)],$.prototype,"fields",void 0),request.e([request.d(Z.fieldsIndex)],$.prototype,"fieldsIndex",void 0),request.e([request.d({type:unitUtils.M})],$.prototype,"geometryDefinition",void 0),request.e([request.d({type:unitUtils.i$3.apiValues,json:{read:{reader:unitUtils.i$3.read}}})],$.prototype,"geometryType",void 0),request.e([request.d(commonProperties.m)],$.prototype,"labelsVisible",void 0),request.e([request.d({type:[LabelClass.E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:labelingInfo.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],$.prototype,"labelingInfo",void 0),request.e([request.d(commonProperties.c)],$.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],$.prototype,"listMode",void 0),request.e([request.d({type:request.S$2})],$.prototype,"maxReconnectionAttempts",void 0),request.e([request.d({type:request.S$2})],$.prototype,"maxReconnectionInterval",void 0),request.e([request.d(commonProperties.I)],$.prototype,"maxScale",void 0),request.e([request.d(commonProperties.b)],$.prototype,"minScale",void 0),request.e([request.d({type:String})],$.prototype,"objectIdField",void 0),request.e([request.d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],$.prototype,"operationalLayerType",void 0),request.e([request.d(commonProperties.p)],$.prototype,"popupEnabled",void 0),request.e([request.d({type:unitUtils.M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],$.prototype,"popupTemplate",void 0),request.e([request.d({type:p})],$.prototype,"purgeOptions",void 0),request.e([request.d({types:jsonUtils.m,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:jsonUtils.n,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],$.prototype,"renderer",null),request.e([unitUtils.o("service","renderer",["drawingInfo.renderer","defaultSymbol"]),unitUtils.o("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],$.prototype,"readRenderer",null),request.e([request.d(commonProperties.l)],$.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({type:unitUtils.k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],$.prototype,"spatialReference",void 0),request.e([request.d({json:{read:!1}})],$.prototype,"type",void 0),request.e([request.d(commonProperties.f)],$.prototype,"url",void 0),request.e([request.d({type:Number})],$.prototype,"updateInterval",void 0),request.e([request.d({type:String})],$.prototype,"webSocketUrl",void 0),$=request.e([request.i("esri.layers.StreamLayer")],$);const ee=request.u$4({types:unitUtils.M$2}),re=$;

exports.default = re;
