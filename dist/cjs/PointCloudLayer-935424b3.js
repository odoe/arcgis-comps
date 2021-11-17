'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const Layer = require('./Layer-849337e0.js');
const APIKeyMixin = require('./APIKeyMixin-f99c03a8.js');
const ArcGISService = require('./ArcGISService-a170c777.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const SceneService = require('./SceneService-7679c5da.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const Field = require('./Field-9f319836.js');
const fieldProperties = require('./fieldProperties-f6acb896.js');
const PointCloudUniqueValueRenderer = require('./PointCloudUniqueValueRenderer-13474b4d.js');
const popupUtils = require('./popupUtils-180c3a12.js');
require('./index-57f2cfbb.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./asyncUtils-9f974032.js');
require('./PortalItem-42e06deb.js');
require('./originUtils-be03c485.js');
require('./HeightModelInfo-3363f0e0.js');
require('./resourceUtils-07f4c6c8.js');
require('./TimeExtent-cdfe048b.js');
require('./lengthUtils-3475e67e.js');
require('./fieldType-a54c379b.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./ColorStop-c5f3f911.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends JSONSupport.a{constructor(r){super(r),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),request.e([request.d({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=request.e([request.i("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let p$2=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:request.l$1(this.requiredClearBits),requiredSetBits:request.l$1(this.requiredSetBits)})}};request.e([request.d({type:[request.S$2],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$2.prototype,"requiredClearBits",void 0),request.e([request.d({type:[request.S$2],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$2.prototype,"requiredSetBits",void 0),request.e([unitUtils.r$2({pointCloudBitfieldFilter:"bitfield"})],p$2.prototype,"type",void 0),p$2=d=request.e([request.i("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$2);const u$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$1;let p$1=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:request.l$1(this.includedReturns)})}};request.e([request.d({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"includedReturns",void 0),request.e([unitUtils.r$2({pointCloudReturnFilter:"return"})],p$1.prototype,"type",void 0),p$1=n$1=request.e([request.i("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$1);const u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let l=p=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new p({field:this.field,mode:this.mode,values:request.l$1(this.values)})}};request.e([request.d({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),request.e([unitUtils.r$2({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=request.e([request.i("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);const u=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$1;let c=i$1=class extends PointCloudUniqueValueRenderer.a$2{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new i$1({...this.cloneProperties(),field:request.l$1(this.field)})}};request.e([unitUtils.r$2({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),request.e([request.d({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i$1=request.e([request.i("esri.renderers.PointCloudRGBRenderer")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i={key:"type",base:PointCloudUniqueValueRenderer.a$2,typeMap:{"point-cloud-class-breaks":PointCloudUniqueValueRenderer.d,"point-cloud-rgb":n,"point-cloud-stretch":PointCloudUniqueValueRenderer.a$1,"point-cloud-unique-value":PointCloudUniqueValueRenderer.a},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const N=request.s$2.getLogger("esri.layers.PointCloudLayer"),R=fieldProperties.l();let O=class extends(SceneService.N(ArcGISService.p(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(Layer.l(APIKeyMixin.i(Layer.b)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new Field.y;return "FieldTypeInteger"===e.type&&((e=request.l$1(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new Field.y({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o){request.o$2("layerDefinition.drawingInfo.renderer",e.write({},o),r);}load(e){const r=request.r(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=popupUtils.a(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new unitUtils.i$1({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new unitUtils.i$1({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new request.s$1("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new request.s$1("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=request.D(this.parsedUrl.path,`./statistics/${o.key}`);return request.E(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new request.s$1("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new request.s$1("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new request.s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new request.s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&N.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&N.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"));}};request.e([request.d({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),request.e([request.d(commonProperties.p)],O.prototype,"popupEnabled",void 0),request.e([request.d({type:unitUtils.M$1,json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),request.e([request.d({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),request.e([request.d({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),request.e([request.d({type:["show","hide"]})],O.prototype,"listMode",void 0),request.e([request.d({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),request.e([request.d({type:[Field.y]})],O.prototype,"fields",void 0),request.e([request.d(R.fieldsIndex)],O.prototype,"fieldsIndex",void 0),request.e([unitUtils.o("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),request.e([request.d(R.outFields)],O.prototype,"outFields",void 0),request.e([request.d({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),request.e([request.d(commonProperties.d)],O.prototype,"elevationInfo",null),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),request.e([request.d(commonProperties.c)],O.prototype,"legendEnabled",void 0),request.e([request.d({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),request.e([unitUtils.r$1("renderer")],O.prototype,"writeRenderer",null),request.e([request.d({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=request.e([request.i("esri.layers.PointCloudLayer")],O);const _=O;

exports.default = _;