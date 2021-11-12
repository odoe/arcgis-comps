import { A as r, g as t, h as s, e, a as d, i } from './jsxFactory-b8b7429b.js';
import { a5 as m, z as k, bf as t$1, bi as d$1, bj as m$1, M, bd as i$3, bk as M$1 } from './Graphic-75d1efd2.js';
import './UniqueValueRenderer-c001e8b8.js';
import './DictionaryRenderer-5a73e1dd.js';
import { m as m$3, n as n$1 } from './jsonUtils-5413cd65.js';
import './VisualVariablesMixin-a733e60f.js';
import { l as l$1, b } from './MultiOriginJSONSupport-409caa57.js';
import { N, F, v as v$1, x as x$1, k as k$1, T, S, I, j } from './ogcFeatureUtils-a6bbc7fa.js';
import g from './FeatureSet-ac01aefd.js';
import { i as i$1 } from './APIKeyMixin-e6f88474.js';
import { i as i$2 } from './BlendLayer-8a19cb4c.js';
import { o } from './CustomParametersMixin-65dc0d22.js';
import { t as t$2, s as s$2, r as r$1 } from './labelingInfo-7446840d.js';
import { y } from './OperationalLayer-7b6946f0.js';
import { p } from './OrderedLayer-d05dde4e.js';
import { w } from './PortalLayer-c699b91c.js';
import { n } from './RefreshableLayer-eff019c1.js';
import { s as s$1 } from './ScaleRangeLayer-fd3df739.js';
import { a } from './TemporalLayer-1525e917.js';
import { d as d$2, m as m$2, c, p as p$1, f } from './commonProperties-c39cb6e7.js';
import { m as m$4 } from './FeatureType-f5fde895.js';
import { y as y$1 } from './Field-3662c57d.js';
import { l } from './fieldProperties-666e1160.js';
import { E } from './LabelClass-37380caa.js';
import { b as b$1 } from './Query-d6a1dd36.js';
import { a as a$1 } from './popupUtils-62f80c9e.js';
import './index-921bd636.js';
import './JSONSupport-15eefdaf.js';
import './ColorStop-6bbf8625.js';
import './diffUtils-7afe88f2.js';
import './jsonUtils-904bd6e1.js';
import './styleUtils-2aef643e.js';
import './LRUCache-4697cf73.js';
import './MemCache-ba22e87a.js';
import './colorRamps-564a1b52.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-d30b1042.js';
import './compilerUtils-fd4d1928.js';
import './lengthUtils-c1fc84e6.js';
import './featureConversionUtils-3b0788c3.js';
import './OptimizedFeature-ac6d77d3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './geojson-8cadab25.js';
import './clientSideDefaults-18a63b7a.js';
import './QueryEngineCapabilities-d289cd19.js';
import './defaultsJSON-53258912.js';
import './FieldsIndex-b4d96270.js';
import './fieldType-1c6ed2e9.js';
import './jsonUtils-9b8c4071.js';
import './mat4-7dc89e3f.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-11f1925b.js';
import './asyncUtils-4aacff64.js';
import './PortalItem-86be48d7.js';
import './TimeInfo-1e2583f2.js';
import './labelUtils-27593fd8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let v=class extends m{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature";}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:p}}=this;return {capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>g.fromJSON(e)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>N(s,e,t)))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return !(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var s;const r=new RegExp(`^${t}$`,"i");return null!=(s=e.conformsTo.some((e=>r.test(e))))&&s}_getCapabilities(e,t){var s,o,i,p,a,n,u;const l=r(t)?null==(s=t.components)?void 0:s.parameters:null;return {attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(o=null!=(i=null==l||null==(p=l.limit)||null==(a=p.schema)?void 0:a.maximum)?i:null==l||null==(n=l.limitFeatures)||null==(u=n.schema)?void 0:u.maximum)?o:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const s=null==(t=e.extent)?void 0:t.spatial;if(!s)return null;const r=s.bbox[0],o=4===r.length,i=r[0],p=r[1],a=o?void 0:r[2];return {xmin:i,ymin:p,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:a,zmax:o?void 0:r[5],spatialReference:k.WGS84.toJSON()}}_getStorageSpatialReference(e){var t$1;const s=null!=(t$1=e.storageCrs)?t$1:F,r=v$1(s);return t(r)?k.WGS84:new k({wkid:r})}_getSupportedSpatialReferences(e,t){var s;const r="#/crs",o=null!=(s=e.crs)?s:[F],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!p.test(e)))}async _loadOGCServices(e,s$1){const o=r(s$1)?s$1.signal:null,{apiKey:i,collectionId:p,customParameters:a,fields:y,geometryType:h,hasZ:g,objectIdField:v,timeInfo:x,url:R}=e,w={fields:null==y?void 0:y.map((e=>e.toJSON())),geometryType:t$1.toJSON(h),hasZ:g,objectIdField:v,timeInfo:null==x?void 0:x.toJSON()},C={apiKey:i,customParameters:a,signal:o},j$1=await x$1(R,C),[O,F]=await Promise.all([k$1(j$1,C),T(j$1,C)]);if(!this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const b=F.collections.find((e=>e.id===p));if(!b)throw new s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const D=this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await S(j$1,C):null,P=await I(b,w,C),T$1=this._getCapabilities(P.hasZ,D),_=this._getExtent(b),q=this._getStorageSpatialReference(b).toJSON(),E=this._getSupportedSpatialReferences(b,F),G=new RegExp(`^${j}`,"i"),I$1={};for(const t of E){const e=v$1(t);r(e)&&(I$1[e]||(I$1[e]=t.replace(G,"")));}P.extent=_,this.featureDefinition={capabilities:T$1,collection:b,layerDefinition:P,queryParameters:{},spatialReference:q,supportedCrs:I$1};}};e([d()],v.prototype,"featureDefinition",void 0),e([d({constructOnly:!0})],v.prototype,"layer",void 0),e([d()],v.prototype,"type",void 0),v=e([i("esri.layers.graphics.sources.OGCFeatureSource")],v);const x=v;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const G=l();let q=class extends(i$1(o(t$2(i$2(p(a(s$1(y(w(n(l$1(b)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}on(e,r){return super.on(e,r)}createPopupTemplate(e){return a$1(this,e)}createQuery(){return new b$1}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t;let i,o=!1;const s=null==r||null==(t=r.feature)?void 0:t.attributes,n=this.typeIdField&&(null==s?void 0:s[this.typeIdField]);return null!=n&&this.types&&(o=this.types.some((r=>{var t,o;return r.id==n&&(i=null==(t=r.domains)?void 0:t[e],"inherited"===(null==(o=i)?void 0:o.type)&&(i=this._getLayerDomain(e)),!0)}))),o||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{var r;return null==e||null==(r=e.features)||r.forEach((e=>{e.layer=e.sourceLayer=this;})),e}))}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),d$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};e([d({readOnly:!0,json:{origins:{service:{read:!0}}}})],q.prototype,"capabilities",void 0),e([d({type:String,json:{write:!0}})],q.prototype,"collectionId",void 0),e([d({type:String})],q.prototype,"copyright",void 0),e([d({readOnly:!0})],q.prototype,"defaultPopupTemplate",null),e([d({type:String})],q.prototype,"definitionExpression",void 0),e([d({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],q.prototype,"description",void 0),e([d({type:String})],q.prototype,"displayField",void 0),e([d(d$2)],q.prototype,"elevationInfo",void 0),e([d(s$2)],q.prototype,"featureReduction",void 0),e([d({type:[y$1],json:{origins:{service:{name:"layerDefinition.fields"}}}})],q.prototype,"fields",void 0),e([d(G.fieldsIndex)],q.prototype,"fieldsIndex",void 0),e([d({readOnly:!0,type:M,json:{origins:{service:{name:"layerDefinition.extent"}}}})],q.prototype,"fullExtent",void 0),e([d({type:i$3.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:i$3.read}}}}})],q.prototype,"geometryType",void 0),e([d({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],q.prototype,"hasZ",void 0),e([d({type:Boolean,readOnly:!0})],q.prototype,"isTable",null),e([d({type:[E],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}}}})],q.prototype,"labelingInfo",void 0),e([d(m$2)],q.prototype,"labelsVisible",void 0),e([d(c)],q.prototype,"legendEnabled",void 0),e([d({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],q.prototype,"objectIdField",void 0),e([d({type:["OGCFeatureLayer"]})],q.prototype,"operationalLayerType",void 0),e([d(p$1)],q.prototype,"popupEnabled",void 0),e([d({type:M$1,json:{name:"popupInfo",write:!0}})],q.prototype,"popupTemplate",void 0),e([d({types:m$3,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:n$1,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],q.prototype,"renderer",null),e([d({type:Boolean})],q.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],q.prototype,"source",void 0),e([d({readOnly:!0,type:k,json:{origins:{service:{read:!0}}}})],q.prototype,"spatialReference",void 0),e([d({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],q.prototype,"title",void 0),e([d({readOnly:!0,json:{read:!1}})],q.prototype,"type",void 0),e([d({type:String,readOnly:!0})],q.prototype,"typeIdField",void 0),e([d({type:[m$4]})],q.prototype,"types",void 0),e([d(f)],q.prototype,"url",void 0),q=e([i("esri.layers.OGCFeatureLayer")],q);const V=q;

export default V;
