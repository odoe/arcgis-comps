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
const ogcFeatureUtils = require('./ogcFeatureUtils-28a920fa.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const APIKeyMixin = require('./APIKeyMixin-77c99036.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const CustomParametersMixin = require('./CustomParametersMixin-996a5732.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const OrderedLayer = require('./OrderedLayer-8690aaf5.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
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
require('./featureConversionUtils-df21e951.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./geojson-c71d572b.js');
require('./clientSideDefaults-65642e53.js');
require('./QueryEngineCapabilities-15e8d907.js');
require('./defaultsJSON-0cdf7a99.js');
require('./FieldsIndex-664af19b.js');
require('./fieldType-32f95259.js');
require('./mat4-f68486bc.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./TimeInfo-050c5617.js');
require('./labelUtils-73814dda.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let v=class extends Portal.m{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature";}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:p}}=this;return {capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>FeatureSet['default'].fromJSON(e)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>ogcFeatureUtils.N(s,e,t)))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return !(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var s;const r=new RegExp(`^${t}$`,"i");return null!=(s=e.conformsTo.some((e=>r.test(e))))&&s}_getCapabilities(e,t){var s,o,i,p,a,n,u;const l=request.r(t)?null==(s=t.components)?void 0:s.parameters:null;return {attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(o=null!=(i=null==l||null==(p=l.limit)||null==(a=p.schema)?void 0:a.maximum)?i:null==l||null==(n=l.limitFeatures)||null==(u=n.schema)?void 0:u.maximum)?o:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const s=null==(t=e.extent)?void 0:t.spatial;if(!s)return null;const r=s.bbox[0],o=4===r.length,i=r[0],p=r[1],a=o?void 0:r[2];return {xmin:i,ymin:p,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:a,zmax:o?void 0:r[5],spatialReference:request.k.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const s=null!=(t=e.storageCrs)?t:ogcFeatureUtils.F,r=ogcFeatureUtils.v(s);return request.t$1(r)?request.k.WGS84:new request.k({wkid:r})}_getSupportedSpatialReferences(e,t){var s;const r="#/crs",o=null!=(s=e.crs)?s:[ogcFeatureUtils.F],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!p.test(e)))}async _loadOGCServices(e,s){const o=request.r(s)?s.signal:null,{apiKey:i,collectionId:p,customParameters:a,fields:y,geometryType:h,hasZ:g,objectIdField:v,timeInfo:x,url:R}=e,w={fields:null==y?void 0:y.map((e=>e.toJSON())),geometryType:geometry.t.toJSON(h),hasZ:g,objectIdField:v,timeInfo:null==x?void 0:x.toJSON()},C={apiKey:i,customParameters:a,signal:o},j=await ogcFeatureUtils.x(R,C),[O,F]=await Promise.all([ogcFeatureUtils.k(j,C),ogcFeatureUtils.T(j,C)]);if(!this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new request.s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const b=F.collections.find((e=>e.id===p));if(!b)throw new request.s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const D=this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await ogcFeatureUtils.S(j,C):null,P=await ogcFeatureUtils.I(b,w,C),T=this._getCapabilities(P.hasZ,D),_=this._getExtent(b),q=this._getStorageSpatialReference(b).toJSON(),E=this._getSupportedSpatialReferences(b,F),G=new RegExp(`^${ogcFeatureUtils.j}`,"i"),I={};for(const t of E){const e=ogcFeatureUtils.v(t);request.r(e)&&(I[e]||(I[e]=t.replace(G,"")));}P.extent=_,this.featureDefinition={capabilities:T,collection:b,layerDefinition:P,queryParameters:{},spatialReference:q,supportedCrs:I};}};request.e([request.d()],v.prototype,"featureDefinition",void 0),request.e([request.d({constructOnly:!0})],v.prototype,"layer",void 0),request.e([request.d()],v.prototype,"type",void 0),v=request.e([request.i("esri.layers.graphics.sources.OGCFeatureSource")],v);const x=v;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const G=fieldProperties.l();let q=class extends(APIKeyMixin.i(CustomParametersMixin.o(labelingInfo.t(BlendLayer.i(OrderedLayer.p(TemporalLayer.a(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(RefreshableLayer.n(MultiOriginJSONSupport.l(Layer.b)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){opacityUtils.d(e,this.fieldsIndex),this._set("renderer",e);}on(e,r){return super.on(e,r)}createPopupTemplate(e){return popupUtils.a(this,e)}createQuery(){return new Query.b}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t;let i,o=!1;const s=null==r||null==(t=r.feature)?void 0:t.attributes,n=this.typeIdField&&(null==s?void 0:s[this.typeIdField]);return null!=n&&this.types&&(o=this.types.some((r=>{var t,o;return r.id==n&&(i=null==(t=r.domains)?void 0:t[e],"inherited"===(null==(o=i)?void 0:o.type)&&(i=this._getLayerDomain(e)),!0)}))),o||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(Query.b.from(e)||this.createQuery(),r))).then((e=>{var r;return null==e||null==(r=e.features)||r.forEach((e=>{e.layer=e.sourceLayer=this;})),e}))}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),opacityUtils.d(this.renderer,this.fieldsIndex),opacityUtils.m(this.timeInfo,this.fieldsIndex);}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};request.e([request.d({readOnly:!0,json:{origins:{service:{read:!0}}}})],q.prototype,"capabilities",void 0),request.e([request.d({type:String,json:{write:!0}})],q.prototype,"collectionId",void 0),request.e([request.d({type:String})],q.prototype,"copyright",void 0),request.e([request.d({readOnly:!0})],q.prototype,"defaultPopupTemplate",null),request.e([request.d({type:String})],q.prototype,"definitionExpression",void 0),request.e([request.d({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],q.prototype,"description",void 0),request.e([request.d({type:String})],q.prototype,"displayField",void 0),request.e([request.d(OperationalLayer.d)],q.prototype,"elevationInfo",void 0),request.e([request.d(labelingInfo.s)],q.prototype,"featureReduction",void 0),request.e([request.d({type:[Field.y],json:{origins:{service:{name:"layerDefinition.fields"}}}})],q.prototype,"fields",void 0),request.e([request.d(G.fieldsIndex)],q.prototype,"fieldsIndex",void 0),request.e([request.d({readOnly:!0,type:request.M,json:{origins:{service:{name:"layerDefinition.extent"}}}})],q.prototype,"fullExtent",void 0),request.e([request.d({type:geometry.i$1.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:geometry.i$1.read}}}}})],q.prototype,"geometryType",void 0),request.e([request.d({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],q.prototype,"hasZ",void 0),request.e([request.d({type:Boolean,readOnly:!0})],q.prototype,"isTable",null),request.e([request.d({type:[LabelClass.E],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo.r},write:!0}}}})],q.prototype,"labelingInfo",void 0),request.e([request.d(OperationalLayer.m)],q.prototype,"labelsVisible",void 0),request.e([request.d(OperationalLayer.c)],q.prototype,"legendEnabled",void 0),request.e([request.d({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],q.prototype,"objectIdField",void 0),request.e([request.d({type:["OGCFeatureLayer"]})],q.prototype,"operationalLayerType",void 0),request.e([request.d(OperationalLayer.p)],q.prototype,"popupEnabled",void 0),request.e([request.d({type:PopupTemplate.M,json:{name:"popupInfo",write:!0}})],q.prototype,"popupTemplate",void 0),request.e([request.d({types:jsonUtils.m,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:jsonUtils.n,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],q.prototype,"renderer",null),request.e([request.d({type:Boolean})],q.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({readOnly:!0})],q.prototype,"source",void 0),request.e([request.d({readOnly:!0,type:request.k,json:{origins:{service:{read:!0}}}})],q.prototype,"spatialReference",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],q.prototype,"title",void 0),request.e([request.d({readOnly:!0,json:{read:!1}})],q.prototype,"type",void 0),request.e([request.d({type:String,readOnly:!0})],q.prototype,"typeIdField",void 0),request.e([request.d({type:[FeatureType.m]})],q.prototype,"types",void 0),request.e([request.d(OperationalLayer.f)],q.prototype,"url",void 0),q=request.e([request.i("esri.layers.OGCFeatureLayer")],q);const V=q;

exports.default = V;
