'use strict';

const request = require('./messageBundle-8be88d04.js');
const CollectionFlattener = require('./CollectionFlattener-bc4cde45.js');
const loadAll = require('./loadAll-e25ec3d0.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const BuildingComponentSublayer = require('./BuildingComponentSublayer-0ed854cd.js');
const BuildingGroupSublayer = require('./BuildingGroupSublayer-cd5d028e.js');
const APIKeyMixin = require('./APIKeyMixin-77c99036.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const SceneService = require('./SceneService-0beb7b88.js');
const enumeration = require('./enumeration-f235fe07.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const Portal = require('./Portal-8d16604d.js');
const FetchAssociatedFeatureLayer = require('./FetchAssociatedFeatureLayer-dee8de8d.js');
require('./index-fde8502c.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./asyncUtils-cd78b718.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./ColorStop-ce63948c.js');
require('./screenUtils-d911ae62.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./Symbol-f0556e23.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./FeatureLayer-68e51b64.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./HeightModelInfo-06fd3d80.js');
require('./workers-bde9fe32.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./FeatureSet-8efc5965.js');
require('./BlendLayer-6a2ab430.js');
require('./mat4-f68486bc.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./TimeExtent-8b558884.js');
require('./Query-354911d3.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./RefreshableLayer-487bd7b3.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./arcgisLayerUrl-5174d661.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./TopFeaturesQuery-92caa731.js');
require('./popupUtils-7a76fb7d.js');
require('./capabilities-61a37c22.js');
require('./I3SIndexInfo-7e127a6f.js');
require('./I3SLayerDefinitions-b8d36b66.js');
require('./ElevationInfo-d3e3d64f.js');
require('./PortalItem-8bcd02f8.js');
require('./originUtils-fc18d7d8.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends request.a$2{constructor(){super(...arguments),this.type=null;}};request.e([request.d({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends request.a$2{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$4({filterType:this.filterType,filterValues:request.l$1(this.filterValues)})}};request.e([request.d({type:String,json:{write:!0}})],i$1.prototype,"filterType",void 0),request.e([request.d({type:[String],json:{write:!0}})],i$1.prototype,"filterValues",void 0),i$1=p$4=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfoType")],i$1);const l$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$4;const l$1=request.S.ofType(l$2);let n$2=c$4=class extends request.a$2{clone(){return new c$4({filterTypes:request.l$1(this.filterTypes)})}};request.e([request.d({type:l$1,json:{write:!0}})],n$2.prototype,"filterTypes",void 0),n$2=c$4=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n$2);const m$3=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$3;const l=request.S.ofType(m$3);let n$1=p$3=class extends p$5{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$3({filterBlocks:request.l$1(this.filterBlocks)})}};request.e([request.d({type:["checkbox"]})],n$1.prototype,"type",void 0),request.e([request.d({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$3=request.e([request.i("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);const u$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends request.a$2{};request.e([request.d({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=request.e([request.i("esri.layers.support.BuildingFilterMode")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends p$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};request.e([request.d({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=request.e([request.i("esri.layers.support.BuildingFilterModeSolid")],p$1);const i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$3;let m$2=c$3=class extends p$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$3({edges:request.l$1(this.edges)})}};request.e([enumeration.r({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),request.e([request.d(SimpleLineSymbol.t$1)],m$2.prototype,"edges",void 0),m$2=c$3=request.e([request.i("esri.layers.support.BuildingFilterModeWireFrame")],m$2);const a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p=t=class extends p$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};request.e([request.d({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=request.e([request.i("esri.layers.support.BuildingFilterModeXRay")],p);const c$2=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$1;const a={nonNullable:!0,types:{key:"type",base:p$2,typeMap:{solid:i,"wire-frame":a$1,"x-ray":c$2}},json:{read:e=>{switch(e&&e.type){case"solid":return i.fromJSON(e);case"wireFrame":return a$1.fromJSON(e);case"x-ray":return c$2.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let u$2=d$1=class extends request.a$2{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new d$1({filterExpression:this.filterExpression,filterMode:request.l$1(this.filterMode),title:this.title})}};request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"filterExpression",void 0),request.e([request.d(a)],u$2.prototype,"filterMode",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"title",void 0),u$2=d$1=request.e([request.i("esri.layers.support.BuildingFilterBlock")],u$2);const c$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$1;const d=request.S.ofType(c$1);let m$1=u$1=class extends request.a$2{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=request.o$9(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:request.l$1(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:request.l$1(this.filterAuthoringInfo)})}};request.e([request.d({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),request.e([request.d({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),request.e([request.d({types:{key:"type",base:p$5,typeMap:{checkbox:u$3}},json:{read:o=>"checkbox"===(o&&o.type)?u$3.fromJSON(o):null,write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),request.e([request.d({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=request.e([request.i("esri.layers.support.BuildingFilter")],m$1);const f=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=request.s$1.getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends request.a$2{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};request.e([request.d({type:String})],n.prototype,"fieldName",void 0),request.e([request.d({type:String})],n.prototype,"modelName",void 0),request.e([request.d({type:String})],n.prototype,"label",void 0),request.e([request.d({type:Number})],n.prototype,"min",void 0),request.e([request.d({type:Number})],n.prototype,"max",void 0),request.e([request.d({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],n.prototype,"mostFrequentValues",void 0),request.e([request.d({type:[Number]})],n.prototype,"subLayerIds",void 0),n=request.e([request.i("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(Portal.m.LoadableMixin(request.n(request.a$2))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await request.E(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};request.e([request.d({constructOnly:!0,type:String})],m.prototype,"url",void 0),request.e([request.d({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=request.e([request.i("esri.layers.support.BuildingSummaryStatistics")],m);const c=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const A=request.s$1.getLogger("esri.layers.BuildingSceneLayer"),E=request.S.ofType(f),_=request.l$1(BuildingGroupSublayer.d.sublayersProperty);_.json.origins["web-scene"]={type:[BuildingComponentSublayer.U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[BuildingComponentSublayer.U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends(SceneService.N(ArcGISService.p(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(MultiOriginJSONSupport.l(APIKeyMixin.i(Layer.b)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new CollectionFlattener.p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=BuildingGroupSublayer.d.readSublayers(e,r,t);return BuildingGroupSublayer.d.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){BuildingGroupSublayer.d.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new request.s("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];BuildingGroupSublayer.d.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(request.l$1(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=request.D(this.parsedUrl.path,r.statisticsHRef);return new c({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=request.r(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return loadAll.n(this,(e=>{BuildingGroupSublayer.d.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new request.s("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new FetchAssociatedFeatureLayer.l(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){A.warn("Associated feature service item could not be loaded",t);}}};request.e([request.d({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),request.e([request.d({readOnly:!0})],P.prototype,"allSublayers",void 0),request.e([request.d(_)],P.prototype,"sublayers",void 0),request.e([request.o$2("service","sublayers")],P.prototype,"readSublayers",null),request.e([request.d({type:E,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),request.e([request.d({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),request.e([request.d({readOnly:!0,type:c})],P.prototype,"summaryStatistics",void 0),request.e([request.o$2("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),request.e([request.d({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),request.e([request.d(OperationalLayer.v)],P.prototype,"fullExtent",void 0),request.e([request.d({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),request.e([request.d(OperationalLayer.y$1(request.k))],P.prototype,"spatialReference",void 0),request.e([request.d(OperationalLayer.d)],P.prototype,"elevationInfo",null),request.e([request.d({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),request.e([request.d()],P.prototype,"associatedFeatureServiceItem",void 0),P=request.e([request.i("esri.layers.BuildingSceneLayer")],P);const K=P;

exports.default = K;
