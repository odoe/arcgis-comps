'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const FeatureLayer = require('./FeatureLayer-68e51b64.js');
const Portal = require('./Portal-8d16604d.js');
const workers = require('./workers-bde9fe32.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const clientSideDefaults = require('./clientSideDefaults-65642e53.js');
const Query = require('./Query-354911d3.js');
const persistableUrlUtils = require('./persistableUrlUtils-c611d652.js');
require('./index-fde8502c.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./HeightModelInfo-06fd3d80.js');
require('./Layer-31cde361.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./TimeExtent-8b558884.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./TopFeaturesQuery-92caa731.js');
require('./popupUtils-7a76fb7d.js');
require('./QueryEngineCapabilities-15e8d907.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let u=class extends Portal.m{constructor(t){super(t),this.type="csv",this.refresh=request.z$1((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(t){const e=request.r(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null==(t=this._connection)||t.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return FeatureSet['default'].fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return {count:o.count,extent:request.M.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await workers.u("CSVSourceWorker",{strategy:request.s$3("feature-layers-workers")?"dedicated":"local",signal:t});const{url:o,delimiter:r,fields:s,latitudeField:n,longitudeField:a,spatialReference:c,timeInfo:l}=this.loadOptions,u=await this._connection.invoke("load",{url:o,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:null==s?void 0:s.map((t=>t.toJSON())),latitudeField:n,longitudeField:a,spatialReference:null==c?void 0:c.toJSON(),timeInfo:null==l?void 0:l.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter;}};request.e([request.d()],u.prototype,"type",void 0),request.e([request.d()],u.prototype,"loadOptions",void 0),request.e([request.d()],u.prototype,"customParameters",void 0),request.e([request.d()],u.prototype,"locationInfo",void 0),request.e([request.d()],u.prototype,"sourceJSON",void 0),request.e([request.d()],u.prototype,"delimiter",void 0),u=request.e([request.i("esri.layers.graphics.sources.CSVSource")],u);const p=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends FeatureLayer.Ge{constructor(...e){super(...e),this.capabilities=clientSideDefaults.a(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=request.k.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e);}async createGraphicsSource(e){const r=new p({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",r),await r.load({signal:e}),this.read({locationInfo:r.locationInfo,columnDelimiter:r.delimiter},{origin:"service",url:this.parsedUrl}),r}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(Query.b.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(Query.b.from(e)||this.createQuery())))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(Query.b.from(e)||this.createQuery())))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(Query.b.from(e)||this.createQuery())))}write(e,r){return super.write(e,{...r,writeLayerSchema:!0})}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return request.r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"capabilities",void 0),request.e([request.d({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],c.prototype,"delimiter",void 0),request.e([request.d({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],c.prototype,"editingEnabled",void 0),request.e([request.d({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],c.prototype,"fields",void 0),request.e([request.d({type:Boolean,readOnly:!0})],c.prototype,"isTable",null),request.e([request.o$2("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],c.prototype,"readWebMapLabelsVisible",null),request.e([request.d({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"latitudeField",void 0),request.e([request.d({type:["show","hide"]})],c.prototype,"listMode",void 0),request.e([request.d({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],c.prototype,"locationType",void 0),request.e([request.d({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"longitudeField",void 0),request.e([request.d({type:["CSV"]})],c.prototype,"operationalLayerType",void 0),request.e([request.d()],c.prototype,"outFields",void 0),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],c.prototype,"path",void 0),request.e([request.d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),request.e([request.d({json:{read:!1},cast:null,type:p,readOnly:!0})],c.prototype,"source",void 0),request.e([request.d({json:{read:!1},value:"csv",readOnly:!0})],c.prototype,"type",void 0),request.e([request.d({json:{read:persistableUrlUtils.m,write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.p}}})],c.prototype,"url",null),c=request.e([request.i("esri.layers.CSVLayer")],c);const y=c;

exports.default = y;
