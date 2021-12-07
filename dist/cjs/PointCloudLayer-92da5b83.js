'use strict';

const request = require('./messageBundle-8be88d04.js');
const PopupTemplate = require('./PopupTemplate-a0b855f8.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const APIKeyMixin = require('./APIKeyMixin-77c99036.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const SceneService = require('./SceneService-0beb7b88.js');
const enumeration = require('./enumeration-f235fe07.js');
const Field = require('./Field-b92c6f4a.js');
const fieldProperties = require('./fieldProperties-c9dd6469.js');
const PointCloudUniqueValueRenderer = require('./PointCloudUniqueValueRenderer-3a8ae939.js');
const popupUtils = require('./popupUtils-7a76fb7d.js');
require('./index-fde8502c.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./arcgisLayerUrl-5174d661.js');
require('./persistableUrlUtils-c611d652.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./originUtils-fc18d7d8.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./HeightModelInfo-06fd3d80.js');
require('./I3SIndexInfo-7e127a6f.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');
require('./fieldType-32f95259.js');
require('./FieldsIndex-664af19b.js');
require('./ColorStop-ce63948c.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends request.a$2{constructor(r){super(r),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),request.e([request.d({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=request.e([request.i("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let p$2=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:request.l$1(this.requiredClearBits),requiredSetBits:request.l$1(this.requiredSetBits)})}};request.e([request.d({type:[request.S$2],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$2.prototype,"requiredClearBits",void 0),request.e([request.d({type:[request.S$2],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$2.prototype,"requiredSetBits",void 0),request.e([enumeration.r({pointCloudBitfieldFilter:"bitfield"})],p$2.prototype,"type",void 0),p$2=d=request.e([request.i("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$2);const u$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$1;let p$1=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:request.l$1(this.includedReturns)})}};request.e([request.d({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"includedReturns",void 0),request.e([enumeration.r({pointCloudReturnFilter:"return"})],p$1.prototype,"type",void 0),p$1=n$1=request.e([request.i("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$1);const u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let l=p=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new p({field:this.field,mode:this.mode,values:request.l$1(this.values)})}};request.e([request.d({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),request.e([enumeration.r({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=request.e([request.i("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);const u=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$1;let c=i$1=class extends PointCloudUniqueValueRenderer.a$2{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new i$1({...this.cloneProperties(),field:request.l$1(this.field)})}};request.e([enumeration.r({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),request.e([request.d({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i$1=request.e([request.i("esri.renderers.PointCloudRGBRenderer")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i={key:"type",base:PointCloudUniqueValueRenderer.a$2,typeMap:{"point-cloud-class-breaks":PointCloudUniqueValueRenderer.d,"point-cloud-rgb":n,"point-cloud-stretch":PointCloudUniqueValueRenderer.a$1,"point-cloud-unique-value":PointCloudUniqueValueRenderer.a},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const N=request.s$1.getLogger("esri.layers.PointCloudLayer"),R=fieldProperties.l();let O=class extends(SceneService.N(ArcGISService.p(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(MultiOriginJSONSupport.l(APIKeyMixin.i(Layer.b)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new Field.y;return "FieldTypeInteger"===e.type&&((e=request.l$1(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new Field.y({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o){request.o$3("layerDefinition.drawingInfo.renderer",e.write({},o),r);}load(e){const r=request.r(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=popupUtils.a(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new PopupTemplate.i({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new PopupTemplate.i({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new request.s("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new request.s("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=request.D(this.parsedUrl.path,`./statistics/${o.key}`);return request.E(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new request.s("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new request.s("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new request.s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new request.s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&N.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&N.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"));}};request.e([request.d({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),request.e([request.d(OperationalLayer.p)],O.prototype,"popupEnabled",void 0),request.e([request.d({type:PopupTemplate.M,json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),request.e([request.d({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),request.e([request.d({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),request.e([request.d({type:["show","hide"]})],O.prototype,"listMode",void 0),request.e([request.d({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),request.e([request.d({type:[Field.y]})],O.prototype,"fields",void 0),request.e([request.d(R.fieldsIndex)],O.prototype,"fieldsIndex",void 0),request.e([request.o$2("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),request.e([request.d(R.outFields)],O.prototype,"outFields",void 0),request.e([request.d({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),request.e([request.d(OperationalLayer.d)],O.prototype,"elevationInfo",null),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),request.e([request.d(OperationalLayer.c)],O.prototype,"legendEnabled",void 0),request.e([request.d({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),request.e([request.r$2("renderer")],O.prototype,"writeRenderer",null),request.e([request.d({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=request.e([request.i("esri.layers.PointCloudLayer")],O);const _=O;

exports.default = _;
