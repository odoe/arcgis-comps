'use strict';

const request = require('./messageBundle-312ceb47.js');
const CollectionFlattener = require('./CollectionFlattener-3dadfe6b.js');
const loadAll = require('./loadAll-57962b35.js');
const Layer = require('./Layer-849337e0.js');
const unitUtils = require('./unitUtils-61d611e2.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./DictionaryRenderer-7157833a.js');
const jsonUtils = require('./jsonUtils-fa6e9edd.js');
require('./VisualVariablesMixin-fd7d8973.js');
const FeatureLayer = require('./FeatureLayer-47713b0f.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const FetchAssociatedFeatureLayer = require('./FetchAssociatedFeatureLayer-9efd3647.js');
const fieldProperties = require('./fieldProperties-f6acb896.js');
const FieldsIndex = require('./FieldsIndex-8c8f3ac6.js');
const SceneService = require('./SceneService-7679c5da.js');
const I3SLayerDefinitions = require('./I3SLayerDefinitions-ff08fe3f.js');
const Query = require('./Query-35be2e91.js');
const popupUtils = require('./popupUtils-180c3a12.js');
const APIKeyMixin = require('./APIKeyMixin-f99c03a8.js');
const ArcGISService = require('./ArcGISService-a170c777.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
require('./index-57f2cfbb.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./asyncUtils-9f974032.js');
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
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./HeightModelInfo-3363f0e0.js');
require('./workers-1668d5a8.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./FeatureSet-2e9b97a5.js');
require('./BlendLayer-7e864068.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./labelingInfo-b4dde768.js');
require('./TimeExtent-cdfe048b.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./OrderedLayer-1ea23e5d.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./FeatureType-5a860566.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./PortalItem-42e06deb.js');
require('./originUtils-be03c485.js');
require('./resourceUtils-07f4c6c8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$4=class extends(unitUtils.r$3(Layer.O)){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1;}readTitle(r,e){return "string"==typeof e.alias?e.alias:"string"==typeof e.name?e.name:""}readIdOnlyOnce(r){return -1!==this.id?this.id:"number"==typeof r?r:void 0}};request.e([request.d({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l$4.prototype,"title",void 0),request.e([unitUtils.o("service","title",["alias","name"])],l$4.prototype,"readTitle",null),request.e([request.d()],l$4.prototype,"layer",void 0),request.e([request.d({type:request.S$2,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l$4.prototype,"id",void 0),request.e([unitUtils.o("service","id")],l$4.prototype,"readIdOnlyOnce",null),request.e([request.d(commonProperties.y(String))],l$4.prototype,"modelName",void 0),request.e([request.d(commonProperties.y(Boolean))],l$4.prototype,"isEmpty",void 0),request.e([request.d({type:Boolean,json:{name:"visibility",write:!0}})],l$4.prototype,"visible",void 0),request.e([request.d({type:Number,json:{write:!0}})],l$4.prototype,"opacity",void 0),l$4=request.e([request.i("esri.layers.buildingSublayers.BuildingSublayer")],l$4);const n$3=l$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D=request.s$2.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Q=fieldProperties.l();let R=class extends(unitUtils.m.LoadableMixin(request.n$3(n$3))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object";}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new FieldsIndex.d(this.fields)}readAssociatedLayer(e,r){const t=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return request.r(t)&&"number"==typeof o?new FeatureLayer['default']({portalItem:t,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return request.r(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=request.r(e)?e.signal:null,t=this._fetchService(r).then((()=>{this.indexInfo=SceneService.n(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,D,r);}));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){return popupUtils.a(this,e)}async _fetchService(e){const r=(await request.E(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl});}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t,o,s,i;const a=null==(t=this.getFeatureType(null==r?void 0:r.feature))||null==(o=t.domains)?void 0:o[e];return a&&"inherited"!==a.type?a:null!=(s=null==(i=this.getField(e))?void 0:i.domain)?s:null}getFeatureType(e){return e&&request.r(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return request.r(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return request.r(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return "3d-object"===this.layerType?"mesh":"point"}get profile(){return "3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=request.r(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:FetchAssociatedFeatureLayer.s,{query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}=e;return {query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}}createQuery(){const e=new Query.b;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:request.r(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return request.r(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),request.t(this.associatedLayer))throw new request.s$1("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new request.s$1("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};request.e([request.d({readOnly:!0})],R.prototype,"parsedUrl",null),request.e([request.d({type:I3SLayerDefinitions.s,readOnly:!0})],R.prototype,"nodePages",void 0),request.e([request.d({type:[I3SLayerDefinitions.l],readOnly:!0})],R.prototype,"materialDefinitions",void 0),request.e([request.d({type:[I3SLayerDefinitions.u],readOnly:!0})],R.prototype,"textureSetDefinitions",void 0),request.e([request.d({type:[I3SLayerDefinitions.m],readOnly:!0})],R.prototype,"geometryDefinitions",void 0),request.e([request.d({readOnly:!0})],R.prototype,"serviceUpdateTimeStamp",void 0),request.e([request.d({readOnly:!0})],R.prototype,"store",void 0),request.e([request.d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],R.prototype,"rootNode",void 0),request.e([request.d({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),request.e([request.d(Q.fields)],R.prototype,"fields",void 0),request.e([request.d({readOnly:!0})],R.prototype,"fieldsIndex",null),request.e([request.d({readOnly:!0,type:FeatureLayer['default']})],R.prototype,"associatedLayer",void 0),request.e([unitUtils.o("service","associatedLayer",["associatedLayerID"])],R.prototype,"readAssociatedLayer",null),request.e([request.d(Q.outFields)],R.prototype,"outFields",void 0),request.e([request.d({type:String,readOnly:!0})],R.prototype,"objectIdField",null),request.e([request.d({readOnly:!0,type:String,json:{read:!1}})],R.prototype,"displayField",null),request.e([request.d({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],R.prototype,"apiKey",void 0),request.e([request.d({readOnly:!0,type:unitUtils.M,aliasOf:"layer.fullExtent"})],R.prototype,"fullExtent",void 0),request.e([request.d({readOnly:!0,type:unitUtils.k,aliasOf:"layer.spatialReference"})],R.prototype,"spatialReference",void 0),request.e([request.d({readOnly:!0,aliasOf:"layer.version"})],R.prototype,"version",void 0),request.e([request.d({readOnly:!0,type:commonProperties.x,aliasOf:"layer.elevationInfo"})],R.prototype,"elevationInfo",void 0),request.e([request.d({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],R.prototype,"minScale",void 0),request.e([request.d({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],R.prototype,"maxScale",void 0),request.e([request.d({type:["hide","show"],json:{write:!0}})],R.prototype,"listMode",void 0),request.e([request.d({types:jsonUtils.n,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],R.prototype,"renderer",void 0),request.e([request.d({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),request.e([request.d(commonProperties.p)],R.prototype,"popupEnabled",void 0),request.e([request.d({type:unitUtils.M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],R.prototype,"popupTemplate",void 0),request.e([request.d({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],R.prototype,"normalReferenceFrame",void 0),request.e([request.d({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),request.e([request.d()],R.prototype,"types",null),request.e([request.d()],R.prototype,"typeIdField",null),request.e([request.d({json:{write:!1}}),unitUtils.r$2(new request.o$1({"3DObject":"3d-object",Point:"point"}))],R.prototype,"layerType",void 0),request.e([request.d()],R.prototype,"geometryType",null),request.e([request.d()],R.prototype,"profile",null),request.e([request.d({readOnly:!0,json:{read:!1}})],R.prototype,"capabilities",null),R=request.e([request.i("esri.layers.buildingSublayers.BuildingComponentSublayer")],R);const U=R;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$2;const p$6={type:request.S$1,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l$3}}},read:!1}};function l$3(r,o,t){if(r&&Array.isArray(r))return new request.S$1(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}t&&t.messages&&r&&t.messages.push(new request.t$6("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t}));})))}let c$5=a$2=class extends n$3{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return loadAll.i(this,(r=>a$2.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c$5:U}request.e([request.d({type:["hide","show","hide-children"],json:{write:!0}})],c$5.prototype,"listMode",void 0),request.e([request.d(p$6)],c$5.prototype,"sublayers",void 0),c$5=a$2=request.e([request.i("esri.layers.buildingSublayers.BuildingGroupSublayer")],c$5),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=p$6,r.readSublayers=l$3,r.forEachSublayer=e;}(c$5||(c$5={}));const d$2=c$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends JSONSupport.a{constructor(){super(...arguments),this.type=null;}};request.e([request.d({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends JSONSupport.a{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$4({filterType:this.filterType,filterValues:request.l$1(this.filterValues)})}};request.e([request.d({type:String,json:{write:!0}})],i$1.prototype,"filterType",void 0),request.e([request.d({type:[String],json:{write:!0}})],i$1.prototype,"filterValues",void 0),i$1=p$4=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfoType")],i$1);const l$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$4;const l$1=request.S$1.ofType(l$2);let n$2=c$4=class extends JSONSupport.a{clone(){return new c$4({filterTypes:request.l$1(this.filterTypes)})}};request.e([request.d({type:l$1,json:{write:!0}})],n$2.prototype,"filterTypes",void 0),n$2=c$4=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n$2);const m$3=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$3;const l=request.S$1.ofType(m$3);let n$1=p$3=class extends p$5{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$3({filterBlocks:request.l$1(this.filterBlocks)})}};request.e([request.d({type:["checkbox"]})],n$1.prototype,"type",void 0),request.e([request.d({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$3=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);const u$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends JSONSupport.a{};request.e([request.d({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=request.e([request.i("esri.layers.support.BuildingFilterMode")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends p$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};request.e([request.d({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=request.e([request.i("esri.layers.support.BuildingFilterModeSolid")],p$1);const i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$3;let m$2=c$3=class extends p$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$3({edges:request.l$1(this.edges)})}};request.e([unitUtils.r$2({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),request.e([request.d(unitUtils.t$6)],m$2.prototype,"edges",void 0),m$2=c$3=request.e([request.i("esri.layers.support.BuildingFilterModeWireFrame")],m$2);const a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p=t=class extends p$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};request.e([request.d({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=request.e([request.i("esri.layers.support.BuildingFilterModeXRay")],p);const c$2=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$1;const a={nonNullable:!0,types:{key:"type",base:p$2,typeMap:{solid:i,"wire-frame":a$1,"x-ray":c$2}},json:{read:e=>{switch(e&&e.type){case"solid":return i.fromJSON(e);case"wireFrame":return a$1.fromJSON(e);case"x-ray":return c$2.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let u$2=d$1=class extends JSONSupport.a{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new d$1({filterExpression:this.filterExpression,filterMode:request.l$1(this.filterMode),title:this.title})}};request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"filterExpression",void 0),request.e([request.d(a)],u$2.prototype,"filterMode",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"title",void 0),u$2=d$1=request.e([request.i("esri.layers.support.BuildingFilterBlock")],u$2);const c$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$1;const d=request.S$1.ofType(c$1);let m$1=u$1=class extends JSONSupport.a{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=request.o$10(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:request.l$1(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:request.l$1(this.filterAuthoringInfo)})}};request.e([request.d({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),request.e([request.d({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),request.e([request.d({types:{key:"type",base:p$5,typeMap:{checkbox:u$3}},json:{read:o=>"checkbox"===(o&&o.type)?u$3.fromJSON(o):null,write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),request.e([request.d({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=request.e([request.i("esri.layers.support.BuildingFilter")],m$1);const f=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$2.getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends JSONSupport.a{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};request.e([request.d({type:String})],n.prototype,"fieldName",void 0),request.e([request.d({type:String})],n.prototype,"modelName",void 0),request.e([request.d({type:String})],n.prototype,"label",void 0),request.e([request.d({type:Number})],n.prototype,"min",void 0),request.e([request.d({type:Number})],n.prototype,"max",void 0),request.e([request.d({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],n.prototype,"mostFrequentValues",void 0),request.e([request.d({type:[Number]})],n.prototype,"subLayerIds",void 0),n=request.e([request.i("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(unitUtils.m.LoadableMixin(request.n$3(JSONSupport.a))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await request.E(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};request.e([request.d({constructOnly:!0,type:String})],m.prototype,"url",void 0),request.e([request.d({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=request.e([request.i("esri.layers.support.BuildingSummaryStatistics")],m);const c=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const A=request.s$2.getLogger("esri.layers.BuildingSceneLayer"),E=request.S$1.ofType(f),_=request.l$1(d$2.sublayersProperty);_.json.origins["web-scene"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends(SceneService.N(ArcGISService.p(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(Layer.l(APIKeyMixin.i(Layer.b)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new CollectionFlattener.p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$2.readSublayers(e,r,t);return d$2.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$2.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new request.s$1("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$2.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(request.l$1(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=request.D(this.parsedUrl.path,r.statisticsHRef);return new c({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=request.r(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return loadAll.n(this,(e=>{d$2.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new request.s$1("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new FetchAssociatedFeatureLayer.l(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){A.warn("Associated feature service item could not be loaded",t);}}};request.e([request.d({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),request.e([request.d({readOnly:!0})],P.prototype,"allSublayers",void 0),request.e([request.d(_)],P.prototype,"sublayers",void 0),request.e([unitUtils.o("service","sublayers")],P.prototype,"readSublayers",null),request.e([request.d({type:E,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),request.e([request.d({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),request.e([request.d({readOnly:!0,type:c})],P.prototype,"summaryStatistics",void 0),request.e([unitUtils.o("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),request.e([request.d({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),request.e([request.d(commonProperties.v)],P.prototype,"fullExtent",void 0),request.e([request.d({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),request.e([request.d(commonProperties.y(unitUtils.k))],P.prototype,"spatialReference",void 0),request.e([request.d(commonProperties.d)],P.prototype,"elevationInfo",null),request.e([request.d({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),request.e([request.d()],P.prototype,"associatedFeatureServiceItem",void 0),P=request.e([request.i("esri.layers.BuildingSceneLayer")],P);const K=P;

exports.default = K;