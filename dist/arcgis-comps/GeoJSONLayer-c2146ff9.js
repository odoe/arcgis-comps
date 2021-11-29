import { g as s, C as z, r, a as s$1, t, aw as s$2, e, b as d, i as i$1, ae as U } from './cast-e5ea2533.js';
import { a as i } from './geometry-160ffbb5.js';
import { M as M$1 } from './PopupTemplate-87ca9924.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './DictionaryRenderer-09505309.js';
import { m as m$3, n as n$1 } from './jsonUtils-efd42703.js';
import './VisualVariablesMixin-a8b13e1b.js';
import { l as l$1, b } from './Layer-663fafaf.js';
import { m, M, k } from './Portal-f1457cb4.js';
import { u } from './workers-a7d3d5f6.js';
import { a } from './clientSideDefaults-51baea5c.js';
import g$1 from './FeatureSet-c6e91f97.js';
import { v } from './Polyline-56152656.js';
import { i as i$2 } from './BlendLayer-34bd1b5b.js';
import { o } from './CustomParametersMixin-171b3366.js';
import { t as t$1, s as s$4, r as r$1 } from './labelingInfo-4e582940.js';
import { y } from './OperationalLayer-0f16c161.js';
import { p } from './OrderedLayer-5c55613e.js';
import { n } from './RefreshableLayer-0c4b9daf.js';
import { s as s$3 } from './ScaleRangeLayer-f5a96945.js';
import { a as a$1 } from './TemporalLayer-b9cacecc.js';
import { d as d$2, j, m as m$2, c, u as u$1, p as p$1, l as l$2, f as f$1 } from './commonProperties-4c10a963.js';
import { a as a$3, m as m$4 } from './FeatureType-1c489c5b.js';
import { y as y$1 } from './Field-67832b5b.js';
import { l } from './fieldProperties-dc649a5f.js';
import { d as d$1, m as m$1 } from './opacityUtils-5755cb64.js';
import { E } from './LabelClass-a646d1d3.js';
import { b as b$1 } from './Query-b8b0a5e8.js';
import { a as a$2 } from './popupUtils-71e7198e.js';
import './Collection-ac20f1a1.js';
import './JSONSupport-8dda8bae.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './Identifiable-0fb3fc58.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './ColorStop-0035d362.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './colorRamps-fcb1175a.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './Graphic-79de2095.js';
import './compilerUtils-2d7ddb00.js';
import './lengthUtils-2084b777.js';
import './unitUtils-5dcccb3c.js';
import './aliasOf-e543e228.js';
import './assets-1ab0ccbe.js';
import './intl-0d87e9f4.js';
import './messages-1d31e380.js';
import './QueryEngineCapabilities-d289cd19.js';
import './defaultsJSON-53258912.js';
import './fieldType-7f6b02ef.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-ecf7e6f2.js';
import './TimeInfo-5f646e9b.js';
import './FieldsIndex-e09edd96.js';
import './labelUtils-a20584ac.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends m{constructor(){super(...arguments),this.type="geojson",this.refresh=z((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>g$1.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new s$1("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new s$1("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t$1}=e;return t(t$1)?null:"mesh"===t$1.type||"extent"===t$1.type?v.fromExtent(t$1.extent):t$1}async _startWorker(e){this._connection=await u("GeoJSONSourceWorker",{strategy:s$2("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i$1,objectIdField:n,url:a$1,timeInfo:l,customParameters:c}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a$1,customParameters:c,fields:t&&t.map((e=>e.toJSON())),geometryType:i.toJSON(i$1),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=a(this.sourceJSON.hasZ,!0);}};e([d()],g.prototype,"capabilities",void 0),e([d()],g.prototype,"type",void 0),e([d({constructOnly:!0})],g.prototype,"layer",void 0),e([d()],g.prototype,"sourceJSON",void 0),g=e([i$1("esri.layers.graphics.sources.GeoJSONSource")],g);const S=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=l();let B=class extends(p(o(t$1(i$2(a$1(s$3(n(y(l$1(b)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new S({layer:this}),this.spatialReference=k.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),d$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?U(this.url):null}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}async applyEdits(e,t){const r=await import('./editingSupport-e95cd18c.js');await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return a$2(this,e)}createQuery(){const e=new b$1,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};e([d({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),e([d({type:String})],B.prototype,"copyright",void 0),e([d({readOnly:!0})],B.prototype,"createQueryVersion",null),e([d({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),e([d({type:String})],B.prototype,"displayField",void 0),e([d({type:Boolean})],B.prototype,"editingEnabled",void 0),e([d(d$2)],B.prototype,"elevationInfo",void 0),e([d(s$4)],B.prototype,"featureReduction",void 0),e([d({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),e([d(_.fieldsIndex)],B.prototype,"fieldsIndex",void 0),e([d({type:M,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),e([d({type:["point","polygon","polyline","multipoint"],json:{read:{reader:i.read}}})],B.prototype,"geometryType",void 0),e([d({type:Boolean})],B.prototype,"hasZ",void 0),e([d(j)],B.prototype,"id",void 0),e([d({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),e([d(m$2)],B.prototype,"labelsVisible",void 0),e([d({type:[E],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}})],B.prototype,"labelingInfo",void 0),e([d(c)],B.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],B.prototype,"listMode",void 0),e([d({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),e([d(u$1)],B.prototype,"opacity",void 0),e([d({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),e([d({readOnly:!0})],B.prototype,"parsedUrl",null),e([d(p$1)],B.prototype,"popupEnabled",void 0),e([d({type:M$1,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),e([d({types:m$3,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$1}}}})],B.prototype,"renderer",null),e([d(l$2)],B.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],B.prototype,"source",void 0),e([d({type:k})],B.prototype,"spatialReference",void 0),e([d({type:[a$3]})],B.prototype,"templates",void 0),e([d()],B.prototype,"title",void 0),e([d({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),e([d({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),e([d({type:[m$4]})],B.prototype,"types",void 0),e([d(f$1)],B.prototype,"url",void 0),B=e([i$1("esri.layers.GeoJSONLayer")],B);const Z=B;

export default Z;
