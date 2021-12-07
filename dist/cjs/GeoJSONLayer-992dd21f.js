'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const PopupTemplate = require('./PopupTemplate-a0b855f8.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./DictionaryRenderer-a0dce499.js');
const jsonUtils = require('./jsonUtils-fc4080da.js');
require('./VisualVariablesMixin-a105fcfa.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const Portal = require('./Portal-8d16604d.js');
const workers = require('./workers-bde9fe32.js');
const clientSideDefaults = require('./clientSideDefaults-65642e53.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const CustomParametersMixin = require('./CustomParametersMixin-996a5732.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const OrderedLayer = require('./OrderedLayer-8690aaf5.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const TemporalLayer = require('./TemporalLayer-06f08bdd.js');
const FeatureType = require('./FeatureType-d8b81062.js');
const Field = require('./Field-b92c6f4a.js');
const fieldProperties = require('./fieldProperties-c9dd6469.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const LabelClass = require('./LabelClass-4b91d60e.js');
const Query = require('./Query-354911d3.js');
const popupUtils = require('./popupUtils-7a76fb7d.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./ColorStop-ce63948c.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./colorRamps-d0c2cb9d.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./defaultsJSON-0cdf7a99.js');
require('./fieldType-32f95259.js');
require('./mat4-f68486bc.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./TimeInfo-050c5617.js');
require('./FieldsIndex-664af19b.js');
require('./labelUtils-73814dda.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=request.s$1.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends Portal.m{constructor(){super(...arguments),this.type="geojson",this.refresh=request.z$1((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=request.r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>FeatureSet['default'].fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:request.M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new request.s("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new request.s("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return request.t$1(t)?null:"mesh"===t.type||"extent"===t.type?geometry.v.fromExtent(t.extent):t}async _startWorker(e){this._connection=await workers.u("GeoJSONSourceWorker",{strategy:request.s$3("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i,objectIdField:n,url:a,timeInfo:l,customParameters:c}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a,customParameters:c,fields:t&&t.map((e=>e.toJSON())),geometryType:geometry.i$1.toJSON(i),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=clientSideDefaults.a(this.sourceJSON.hasZ,!0);}};request.e([request.d()],g.prototype,"capabilities",void 0),request.e([request.d()],g.prototype,"type",void 0),request.e([request.d({constructOnly:!0})],g.prototype,"layer",void 0),request.e([request.d()],g.prototype,"sourceJSON",void 0),g=request.e([request.i("esri.layers.graphics.sources.GeoJSONSource")],g);const S=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=fieldProperties.l();let B=class extends(OrderedLayer.p(CustomParametersMixin.o(labelingInfo.t(BlendLayer.i(TemporalLayer.a(ScaleRangeLayer.s(RefreshableLayer.n(OperationalLayer.y(MultiOriginJSONSupport.l(Layer.b)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new S({layer:this}),this.spatialReference=request.k.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),opacityUtils.d(this.renderer,this.fieldsIndex),opacityUtils.m(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?request.U(this.url):null}set renderer(e){opacityUtils.d(e,this.fieldsIndex),this._set("renderer",e);}async applyEdits(e,t){const r=await Promise.resolve().then(function () { return require('./editingSupport-7c5a3691.js'); });await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return popupUtils.a(this,e)}createQuery(){const e=new Query.b,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Query.b.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Query.b.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Query.b.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Query.b.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return request.r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),request.e([request.d({type:String})],B.prototype,"copyright",void 0),request.e([request.d({readOnly:!0})],B.prototype,"createQueryVersion",null),request.e([request.d({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),request.e([request.d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),request.e([request.d({type:String})],B.prototype,"displayField",void 0),request.e([request.d({type:Boolean})],B.prototype,"editingEnabled",void 0),request.e([request.d(OperationalLayer.d)],B.prototype,"elevationInfo",void 0),request.e([request.d(labelingInfo.s)],B.prototype,"featureReduction",void 0),request.e([request.d({type:[Field.y],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),request.e([request.d(_.fieldsIndex)],B.prototype,"fieldsIndex",void 0),request.e([request.d({type:request.M,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),request.e([request.d({type:["point","polygon","polyline","multipoint"],json:{read:{reader:geometry.i$1.read}}})],B.prototype,"geometryType",void 0),request.e([request.d({type:Boolean})],B.prototype,"hasZ",void 0),request.e([request.d(OperationalLayer.j)],B.prototype,"id",void 0),request.e([request.d({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),request.e([request.d(OperationalLayer.m)],B.prototype,"labelsVisible",void 0),request.e([request.d({type:[LabelClass.E],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo.r},write:!0}})],B.prototype,"labelingInfo",void 0),request.e([request.d(OperationalLayer.c)],B.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],B.prototype,"listMode",void 0),request.e([request.d({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),request.e([request.d(OperationalLayer.u$1)],B.prototype,"opacity",void 0),request.e([request.d({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),request.e([request.d({readOnly:!0})],B.prototype,"parsedUrl",null),request.e([request.d(OperationalLayer.p)],B.prototype,"popupEnabled",void 0),request.e([request.d({type:PopupTemplate.M,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),request.e([request.d({types:jsonUtils.m,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:jsonUtils.n}}}})],B.prototype,"renderer",null),request.e([request.d(OperationalLayer.l)],B.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({readOnly:!0})],B.prototype,"source",void 0),request.e([request.d({type:request.k})],B.prototype,"spatialReference",void 0),request.e([request.d({type:[FeatureType.a]})],B.prototype,"templates",void 0),request.e([request.d()],B.prototype,"title",void 0),request.e([request.d({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),request.e([request.d({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),request.e([request.d({type:[FeatureType.m]})],B.prototype,"types",void 0),request.e([request.d(OperationalLayer.f)],B.prototype,"url",void 0),B=request.e([request.i("esri.layers.GeoJSONLayer")],B);const Z=B;

exports.default = Z;
