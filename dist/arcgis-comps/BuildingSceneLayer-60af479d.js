import { e as e$1, a as d$3, a9 as S, i as i$2, f as s, U as n$4, r as r$1, a3 as E$1, l as t$3, C as s$2, X as o$1, I as S$1, ar as t$4, M as l$7, cA as o$2, a1 as D$1, Z as b$2 } from './jsxFactory-ef3e403e.js';
import { p as p$9 } from './CollectionFlattener-70fb34fc.js';
import { i as i$3, n as n$7 } from './loadAll-5f59a7da.js';
import { O, l as l$8, b as b$1 } from './Layer-5a380094.js';
import { V as r, o, m as m$4, M, k, q as M$1, C as r$2, d9 as t$5 } from './unitUtils-8a2b838a.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './DictionaryRenderer-b0e19146.js';
import { n as n$6 } from './jsonUtils-595f52d3.js';
import './VisualVariablesMixin-0776df0b.js';
import Ge from './FeatureLayer-0ee96f86.js';
import { y as y$1, x, p as p$7, v, d as d$5 } from './commonProperties-e22a7011.js';
import { s as s$1, l as l$9 } from './FetchAssociatedFeatureLayer-9edd6d27.js';
import { l as l$5 } from './fieldProperties-cc8fc820.js';
import { d as d$4 } from './FieldsIndex-d76382ca.js';
import { n as n$5, N } from './SceneService-bc5bc51c.js';
import { s as s$3, l as l$6, u as u$4, m as m$5 } from './I3SLayerDefinitions-1d8c4ebd.js';
import { b } from './Query-fd5e1b7b.js';
import { a as a$3 } from './popupUtils-5accf1e0.js';
import { i as i$4 } from './APIKeyMixin-a3a0d40c.js';
import { p as p$8 } from './ArcGISService-30368d07.js';
import { y as y$2 } from './OperationalLayer-63ec0fa5.js';
import { w } from './PortalLayer-2d4eca15.js';
import { s as s$4 } from './ScaleRangeLayer-cb457ce8.js';
import { a as a$4 } from './JSONSupport-a5eb98e7.js';
import './index-5b4f4de1.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './asyncUtils-968a02e9.js';
import './ColorStop-d3744592.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './colorRamps-a6280e46.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './compilerUtils-be3a2322.js';
import './lengthUtils-26f6142e.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './HeightModelInfo-2bd39a29.js';
import './workers-f3905e14.js';
import './queryZScale-69ba1f2b.js';
import './zscale-5759f488.js';
import './FeatureSet-2b04e61f.js';
import './BlendLayer-81c24642.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-ca53bbdf.js';
import './labelingInfo-1b49455f.js';
import './TimeExtent-fb7ed3e3.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-d40ec16a.js';
import './RefreshableLayer-079cea19.js';
import './TemporalLayer-64ff2afe.js';
import './TimeInfo-e0d5d311.js';
import './arcgisLayerUrl-06668ce7.js';
import './FeatureType-6da2d9f8.js';
import './LayerFloorInfo-c765d601.js';
import './styleUtils-305b69b7.js';
import './TopFeaturesQuery-10871c16.js';
import './PortalItem-496c46b9.js';
import './originUtils-7b0bbc60.js';
import './resourceUtils-012f088e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$4=class extends(r(O)){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1;}readTitle(r,e){return "string"==typeof e.alias?e.alias:"string"==typeof e.name?e.name:""}readIdOnlyOnce(r){return -1!==this.id?this.id:"number"==typeof r?r:void 0}};e$1([d$3({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l$4.prototype,"title",void 0),e$1([o("service","title",["alias","name"])],l$4.prototype,"readTitle",null),e$1([d$3()],l$4.prototype,"layer",void 0),e$1([d$3({type:S,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l$4.prototype,"id",void 0),e$1([o("service","id")],l$4.prototype,"readIdOnlyOnce",null),e$1([d$3(y$1(String))],l$4.prototype,"modelName",void 0),e$1([d$3(y$1(Boolean))],l$4.prototype,"isEmpty",void 0),e$1([d$3({type:Boolean,json:{name:"visibility",write:!0}})],l$4.prototype,"visible",void 0),e$1([d$3({type:Number,json:{write:!0}})],l$4.prototype,"opacity",void 0),l$4=e$1([i$2("esri.layers.buildingSublayers.BuildingSublayer")],l$4);const n$3=l$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D=s.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Q=l$5();let R=class extends(m$4.LoadableMixin(n$4(n$3))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object";}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new d$4(this.fields)}readAssociatedLayer(e,r){const t=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return r$1(t)&&"number"==typeof o?new Ge({portalItem:t,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return r$1(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=r$1(e)?e.signal:null,t=this._fetchService(r).then((()=>{this.indexInfo=n$5(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,D,r);}));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){return a$3(this,e)}async _fetchService(e){const r=(await E$1(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl});}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t,o,s,i;const a=null==(t=this.getFeatureType(null==r?void 0:r.feature))||null==(o=t.domains)?void 0:o[e];return a&&"inherited"!==a.type?a:null!=(s=null==(i=this.getField(e))?void 0:i.domain)?s:null}getFeatureType(e){return e&&r$1(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return r$1(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return r$1(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return "3d-object"===this.layerType?"mesh":"point"}get profile(){return "3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=r$1(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:s$1,{query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}=e;return {query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}}createQuery(){const e=new b;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:r$1(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return r$1(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),t$3(this.associatedLayer))throw new s$2("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$2("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};e$1([d$3({readOnly:!0})],R.prototype,"parsedUrl",null),e$1([d$3({type:s$3,readOnly:!0})],R.prototype,"nodePages",void 0),e$1([d$3({type:[l$6],readOnly:!0})],R.prototype,"materialDefinitions",void 0),e$1([d$3({type:[u$4],readOnly:!0})],R.prototype,"textureSetDefinitions",void 0),e$1([d$3({type:[m$5],readOnly:!0})],R.prototype,"geometryDefinitions",void 0),e$1([d$3({readOnly:!0})],R.prototype,"serviceUpdateTimeStamp",void 0),e$1([d$3({readOnly:!0})],R.prototype,"store",void 0),e$1([d$3({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],R.prototype,"rootNode",void 0),e$1([d$3({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),e$1([d$3(Q.fields)],R.prototype,"fields",void 0),e$1([d$3({readOnly:!0})],R.prototype,"fieldsIndex",null),e$1([d$3({readOnly:!0,type:Ge})],R.prototype,"associatedLayer",void 0),e$1([o("service","associatedLayer",["associatedLayerID"])],R.prototype,"readAssociatedLayer",null),e$1([d$3(Q.outFields)],R.prototype,"outFields",void 0),e$1([d$3({type:String,readOnly:!0})],R.prototype,"objectIdField",null),e$1([d$3({readOnly:!0,type:String,json:{read:!1}})],R.prototype,"displayField",null),e$1([d$3({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],R.prototype,"apiKey",void 0),e$1([d$3({readOnly:!0,type:M,aliasOf:"layer.fullExtent"})],R.prototype,"fullExtent",void 0),e$1([d$3({readOnly:!0,type:k,aliasOf:"layer.spatialReference"})],R.prototype,"spatialReference",void 0),e$1([d$3({readOnly:!0,aliasOf:"layer.version"})],R.prototype,"version",void 0),e$1([d$3({readOnly:!0,type:x,aliasOf:"layer.elevationInfo"})],R.prototype,"elevationInfo",void 0),e$1([d$3({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],R.prototype,"minScale",void 0),e$1([d$3({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],R.prototype,"maxScale",void 0),e$1([d$3({type:["hide","show"],json:{write:!0}})],R.prototype,"listMode",void 0),e$1([d$3({types:n$6,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],R.prototype,"renderer",void 0),e$1([d$3({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),e$1([d$3(p$7)],R.prototype,"popupEnabled",void 0),e$1([d$3({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],R.prototype,"popupTemplate",void 0),e$1([d$3({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],R.prototype,"normalReferenceFrame",void 0),e$1([d$3({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),e$1([d$3()],R.prototype,"types",null),e$1([d$3()],R.prototype,"typeIdField",null),e$1([d$3({json:{write:!1}}),r$2(new o$1({"3DObject":"3d-object",Point:"point"}))],R.prototype,"layerType",void 0),e$1([d$3()],R.prototype,"geometryType",null),e$1([d$3()],R.prototype,"profile",null),e$1([d$3({readOnly:!0,json:{read:!1}})],R.prototype,"capabilities",null),R=e$1([i$2("esri.layers.buildingSublayers.BuildingComponentSublayer")],R);const U=R;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$2;const p$6={type:S$1,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l$3}}},read:!1}};function l$3(r,o,t){if(r&&Array.isArray(r))return new S$1(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}t&&t.messages&&r&&t.messages.push(new t$4("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t}));})))}let c$5=a$2=class extends n$3{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return i$3(this,(r=>a$2.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c$5:U}e$1([d$3({type:["hide","show","hide-children"],json:{write:!0}})],c$5.prototype,"listMode",void 0),e$1([d$3(p$6)],c$5.prototype,"sublayers",void 0),c$5=a$2=e$1([i$2("esri.layers.buildingSublayers.BuildingGroupSublayer")],c$5),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=p$6,r.readSublayers=l$3,r.forEachSublayer=e;}(c$5||(c$5={}));const d$2=c$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends a$4{constructor(){super(...arguments),this.type=null;}};e$1([d$3({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=e$1([i$2("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends a$4{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$4({filterType:this.filterType,filterValues:l$7(this.filterValues)})}};e$1([d$3({type:String,json:{write:!0}})],i$1.prototype,"filterType",void 0),e$1([d$3({type:[String],json:{write:!0}})],i$1.prototype,"filterValues",void 0),i$1=p$4=e$1([i$2("esri.layers.support.BuildingFilterAuthoringInfoType")],i$1);const l$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$4;const l$1=S$1.ofType(l$2);let n$2=c$4=class extends a$4{clone(){return new c$4({filterTypes:l$7(this.filterTypes)})}};e$1([d$3({type:l$1,json:{write:!0}})],n$2.prototype,"filterTypes",void 0),n$2=c$4=e$1([i$2("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n$2);const m$3=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$3;const l=S$1.ofType(m$3);let n$1=p$3=class extends p$5{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$3({filterBlocks:l$7(this.filterBlocks)})}};e$1([d$3({type:["checkbox"]})],n$1.prototype,"type",void 0),e$1([d$3({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$3=e$1([i$2("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);const u$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends a$4{};e$1([d$3({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=e$1([i$2("esri.layers.support.BuildingFilterMode")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends p$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};e$1([d$3({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=e$1([i$2("esri.layers.support.BuildingFilterModeSolid")],p$1);const i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$3;let m$2=c$3=class extends p$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$3({edges:l$7(this.edges)})}};e$1([r$2({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),e$1([d$3(t$5)],m$2.prototype,"edges",void 0),m$2=c$3=e$1([i$2("esri.layers.support.BuildingFilterModeWireFrame")],m$2);const a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p=t=class extends p$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};e$1([d$3({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=e$1([i$2("esri.layers.support.BuildingFilterModeXRay")],p);const c$2=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$1;const a={nonNullable:!0,types:{key:"type",base:p$2,typeMap:{solid:i,"wire-frame":a$1,"x-ray":c$2}},json:{read:e=>{switch(e&&e.type){case"solid":return i.fromJSON(e);case"wireFrame":return a$1.fromJSON(e);case"x-ray":return c$2.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let u$2=d$1=class extends a$4{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new d$1({filterExpression:this.filterExpression,filterMode:l$7(this.filterMode),title:this.title})}};e$1([d$3({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"filterExpression",void 0),e$1([d$3(a)],u$2.prototype,"filterMode",void 0),e$1([d$3({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"title",void 0),u$2=d$1=e$1([i$2("esri.layers.support.BuildingFilterBlock")],u$2);const c$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$1;const d=S$1.ofType(c$1);let m$1=u$1=class extends a$4{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=o$2(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:l$7(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:l$7(this.filterAuthoringInfo)})}};e$1([d$3({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),e$1([d$3({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),e$1([d$3({types:{key:"type",base:p$5,typeMap:{checkbox:u$3}},json:{read:o=>"checkbox"===(o&&o.type)?u$3.fromJSON(o):null,write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),e$1([d$3({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),e$1([d$3({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=e$1([i$2("esri.layers.support.BuildingFilter")],m$1);const f=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=s.getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends a$4{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};e$1([d$3({type:String})],n.prototype,"fieldName",void 0),e$1([d$3({type:String})],n.prototype,"modelName",void 0),e$1([d$3({type:String})],n.prototype,"label",void 0),e$1([d$3({type:Number})],n.prototype,"min",void 0),e$1([d$3({type:Number})],n.prototype,"max",void 0),e$1([d$3({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],n.prototype,"mostFrequentValues",void 0),e$1([d$3({type:[Number]})],n.prototype,"subLayerIds",void 0),n=e$1([i$2("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(m$4.LoadableMixin(n$4(a$4))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(e){const r=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await E$1(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};e$1([d$3({constructOnly:!0,type:String})],m.prototype,"url",void 0),e$1([d$3({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=e$1([i$2("esri.layers.support.BuildingSummaryStatistics")],m);const c=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const A=s.getLogger("esri.layers.BuildingSceneLayer"),E=S$1.ofType(f),_=l$7(d$2.sublayersProperty);_.json.origins["web-scene"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends(N(p$8(y$2(w(s$4(l$8(i$4(b$1)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new p$9({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$2.readSublayers(e,r,t);return d$2.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$2.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new s$2("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$2.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(l$7(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=D$1(this.parsedUrl.path,r.statisticsHRef);return new c({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(b$2).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return n$7(this,(e=>{d$2.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s$2("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new l$9(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){A.warn("Associated feature service item could not be loaded",t);}}};e$1([d$3({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),e$1([d$3({readOnly:!0})],P.prototype,"allSublayers",void 0),e$1([d$3(_)],P.prototype,"sublayers",void 0),e$1([o("service","sublayers")],P.prototype,"readSublayers",null),e$1([d$3({type:E,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),e$1([d$3({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),e$1([d$3({readOnly:!0,type:c})],P.prototype,"summaryStatistics",void 0),e$1([o("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),e$1([d$3({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),e$1([d$3(v)],P.prototype,"fullExtent",void 0),e$1([d$3({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),e$1([d$3(y$1(k))],P.prototype,"spatialReference",void 0),e$1([d$3(d$5)],P.prototype,"elevationInfo",null),e$1([d$3({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),e$1([d$3()],P.prototype,"associatedFeatureServiceItem",void 0),P=e$1([i$2("esri.layers.BuildingSceneLayer")],P);const K=P;

export default K;
