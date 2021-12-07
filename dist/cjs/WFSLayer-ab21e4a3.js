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
const HandleOwner = require('./HandleOwner-9c4c158c.js');
const Portal = require('./Portal-8d16604d.js');
const workers = require('./workers-bde9fe32.js');
const clientSideDefaults = require('./clientSideDefaults-65642e53.js');
const wfsUtils = require('./wfsUtils-99b7b121.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const CustomParametersMixin = require('./CustomParametersMixin-996a5732.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const OrderedLayer = require('./OrderedLayer-8690aaf5.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const TemporalLayer = require('./TemporalLayer-06f08bdd.js');
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
require('./reactiveUtils-ef5dccea.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./defaultsJSON-0cdf7a99.js');
require('./projection-b19710fa.js');
require('./mat4-f68486bc.js');
require('./geodesicConstants-047d586a.js');
require('./geojson-c71d572b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./xmlUtils-8481ca21.js');
require('./fieldType-32f95259.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./TimeInfo-050c5617.js');
require('./FieldsIndex-664af19b.js');
require('./labelUtils-73814dda.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let j=class extends(HandleOwner.a(Portal.m)){constructor(){super(...arguments),this.capabilities=clientSideDefaults.a(!1,!1),this.type="wfs",this.refresh=request.z$1((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){var t;const r=null!=(t=request.r(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return FeatureSet['default'].fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:request.M.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:r,customParameters:o,name:s,namespaceUri:a,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new request.s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await wfsUtils.U(r,{customParameters:o,...e}));const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=u?await wfsUtils.W(this.wfsCapabilities,s,a,{spatialReference:n,customParameters:o,signal:null==e?void 0:e.signal}):{...wfsUtils.q(c),geometryType:p,name:s,namespaceUri:a,spatialReference:n,swapXY:l},d=request.e$2(wfsUtils.V(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=geometry.i$1.toJSON(y.geometryType);return {customParameters:o,featureType:d,fields:y.fields.map((e=>e.toJSON())),geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY}}async _startWorker(e){const[t,r]=await request.T([this._createLoadOptions(e),workers.u("WFSSourceWorker",{...e,strategy:request.s$3("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,a=r.value||null;if(s)throw a&&a.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:clientSideDefaults.u(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}};}};request.e([request.d()],j.prototype,"capabilities",void 0),request.e([request.d({constructOnly:!0})],j.prototype,"layer",void 0),request.e([request.d()],j.prototype,"sourceJSON",void 0),request.e([request.d()],j.prototype,"type",void 0),request.e([request.d()],j.prototype,"wfsCapabilities",void 0),j=request.e([request.i("esri.layers.graphics.sources.WFSSource")],j);const v=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B;const z=fieldProperties.l();let J=B=class extends(OrderedLayer.p(CustomParametersMixin.o(labelingInfo.t(BlendLayer.i(TemporalLayer.a(RefreshableLayer.n(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(MultiOriginJSONSupport.l(Layer.b))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=request.k.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new B({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),opacityUtils.d(this.renderer,this.fieldsIndex),opacityUtils.m(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==wfsUtils.x));this.geometryField&&i.unshift(new Field.y({name:this.geometryField,alias:this.geometryField,type:"geometry"})),request.o$3(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return this.url?request.U(this.url):null}set renderer(e){opacityUtils.d(e,this.fieldsIndex),this._set("renderer",e);}createPopupTemplate(e){return popupUtils.a(this,e)}createQuery(){const e=new Query.b;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){var t;return null==(t=this.getField(e))?void 0:t.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(Query.b.from(e)||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(Query.b.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(Query.b.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(Query.b.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh(this.customParameters);return request.r(r)&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};request.e([request.d({readOnly:!0,aliasOf:"source.capabilities"})],J.prototype,"capabilities",void 0),request.e([request.d({type:String})],J.prototype,"copyright",void 0),request.e([request.d({readOnly:!0})],J.prototype,"createQueryVersion",null),request.e([request.d({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],J.prototype,"customParameters",void 0),request.e([request.d({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),request.e([request.d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],J.prototype,"definitionExpression",void 0),request.e([request.d({type:String})],J.prototype,"displayField",void 0),request.e([request.d(OperationalLayer.d)],J.prototype,"elevationInfo",void 0),request.e([request.d(labelingInfo.s)],J.prototype,"featureReduction",void 0),request.e([request.d({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"featureUrl",void 0),request.e([request.d({type:[Field.y],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],J.prototype,"fields",void 0),request.e([request.r$2("fields")],J.prototype,"writeFields",null),request.e([request.d(z.fieldsIndex)],J.prototype,"fieldsIndex",void 0),request.e([request.d({type:request.M,json:{name:"extent"}})],J.prototype,"fullExtent",void 0),request.e([request.d()],J.prototype,"geometryField",void 0),request.e([request.d({type:String,json:{read:{source:"layerDefinition.geometryType",reader:geometry.i$1.read},write:{target:"layerDefinition.geometryType",writer:geometry.i$1.write,ignoreOrigin:!0},origins:{service:{read:geometry.i$1.read}}}})],J.prototype,"geometryType",void 0),request.e([request.d({type:String})],J.prototype,"id",void 0),request.e([request.d(OperationalLayer.m)],J.prototype,"labelsVisible",void 0),request.e([request.d({type:[LabelClass.E],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo.r},write:!0}})],J.prototype,"labelingInfo",void 0),request.e([request.d(OperationalLayer.c)],J.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],J.prototype,"listMode",void 0),request.e([request.d({type:String})],J.prototype,"objectIdField",void 0),request.e([request.d({type:["WFS"]})],J.prototype,"operationalLayerType",void 0),request.e([request.d({type:request.S$2,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"maxFeatures",void 0),request.e([request.d({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],J.prototype,"mode",void 0),request.e([request.d({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"name",void 0),request.e([request.d({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"namespaceUri",void 0),request.e([request.d(OperationalLayer.w)],J.prototype,"opacity",void 0),request.e([request.d(z.outFields)],J.prototype,"outFields",void 0),request.e([request.d({readOnly:!0})],J.prototype,"parsedUrl",null),request.e([request.d(OperationalLayer.p)],J.prototype,"popupEnabled",void 0),request.e([request.d({type:PopupTemplate.M,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),request.e([request.d({types:jsonUtils.m,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:jsonUtils.n,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],J.prototype,"renderer",null),request.e([request.d({type:Boolean,json:{write:!0,name:"screenSizePerspective"}})],J.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({readOnly:!0})],J.prototype,"source",void 0),request.e([request.d({type:request.k,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],J.prototype,"spatialReference",void 0),request.e([request.d({readOnly:!0,type:[request.S$2],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"spatialReferences",void 0),request.e([request.d({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"swapXY",void 0),request.e([request.d({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],J.prototype,"title",void 0),request.e([request.d({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),request.e([request.d(OperationalLayer.f)],J.prototype,"url",void 0),request.e([request.d({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"version",void 0),request.e([request.d({aliasOf:"source.wfsCapabilities"})],J.prototype,"wfsCapabilities",void 0),J=B=request.e([request.i("esri.layers.WFSLayer")],J);const M=J;

exports.default = M;
