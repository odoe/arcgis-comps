import { c as s, e, d, i, I as z, _ as M, s as s$1, af as t, K as s$2, A as r, a0 as k, Z as U } from './messageBundle-f75b4090.js';
import { v, a as i$1 } from './geometry-7e07b1ba.js';
import { M as M$1 } from './PopupTemplate-6e5ecad2.js';
import './UniqueValueRenderer-3c55992d.js';
import './DictionaryRenderer-bea76550.js';
import { m as m$3, n as n$1 } from './jsonUtils-aa645e92.js';
import './VisualVariablesMixin-0befdf7b.js';
import { l } from './MultiOriginJSONSupport-cb4804f4.js';
import { b } from './Layer-b50ea610.js';
import { m } from './Portal-c5cfa317.js';
import { u } from './workers-c4ad1958.js';
import { a } from './clientSideDefaults-1417a571.js';
import g$1 from './FeatureSet-58481609.js';
import { i as i$2 } from './BlendLayer-38b8abf7.js';
import { o } from './CustomParametersMixin-758e21ed.js';
import { t as t$1, s as s$4, r as r$1 } from './labelingInfo-1bb19962.js';
import { y, d as d$2, j, m as m$2, c, e as u$1, p as p$1, l as l$1, f as f$1 } from './OperationalLayer-d609e521.js';
import { p } from './OrderedLayer-7fa2fd9d.js';
import { n } from './RefreshableLayer-f4d1c27c.js';
import { s as s$3 } from './ScaleRangeLayer-584ce37b.js';
import { a as a$1 } from './TemporalLayer-5a7f466a.js';
import { a as a$3, m as m$4 } from './FeatureType-aa59abbf.js';
import { y as y$1 } from './Field-bfaa8af9.js';
import { l as l$2 } from './fieldProperties-d7b323c6.js';
import { d as d$1, m as m$1 } from './opacityUtils-5e864561.js';
import { E } from './LabelClass-47fb4a25.js';
import { b as b$1 } from './Query-d6335b3a.js';
import { a as a$2 } from './popupUtils-c3247ec1.js';
import './index-b157fcf2.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './ColorStop-d4fc22fe.js';
import './diffUtils-849b3672.js';
import './jsonUtils-ade233cd.js';
import './styleUtils-cb28c5ef.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './colorRamps-22c88e98.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-26c41ea6.js';
import './Graphic-3961df6c.js';
import './jsonUtils-13b1f6fd.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './QueryEngineCapabilities-d289cd19.js';
import './defaultsJSON-0b68054b.js';
import './fieldType-66a19d8a.js';
import './mat4-f34c6460.js';
import './TimeExtent-a024c0d8.js';
import './ElevationInfo-be94499b.js';
import './TimeInfo-44dec2e0.js';
import './FieldsIndex-2a111e7e.js';
import './labelUtils-8999bd11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends m{constructor(){super(...arguments),this.type="geojson",this.refresh=z((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>g$1.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new s$1("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new s$1("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t$1}=e;return t(t$1)?null:"mesh"===t$1.type||"extent"===t$1.type?v.fromExtent(t$1.extent):t$1}async _startWorker(e){this._connection=await u("GeoJSONSourceWorker",{strategy:s$2("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i,objectIdField:n,url:a$1,timeInfo:l,customParameters:c}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a$1,customParameters:c,fields:t&&t.map((e=>e.toJSON())),geometryType:i$1.toJSON(i),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=a(this.sourceJSON.hasZ,!0);}};e([d()],g.prototype,"capabilities",void 0),e([d()],g.prototype,"type",void 0),e([d({constructOnly:!0})],g.prototype,"layer",void 0),e([d()],g.prototype,"sourceJSON",void 0),g=e([i("esri.layers.graphics.sources.GeoJSONSource")],g);const S=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=l$2();let B=class extends(p(o(t$1(i$2(a$1(s$3(n(y(l(b)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new S({layer:this}),this.spatialReference=k.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),d$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?U(this.url):null}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}async applyEdits(e,t){const r=await import('./editingSupport-d70dc691.js');await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return a$2(this,e)}createQuery(){const e=new b$1,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};e([d({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),e([d({type:String})],B.prototype,"copyright",void 0),e([d({readOnly:!0})],B.prototype,"createQueryVersion",null),e([d({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),e([d({type:String})],B.prototype,"displayField",void 0),e([d({type:Boolean})],B.prototype,"editingEnabled",void 0),e([d(d$2)],B.prototype,"elevationInfo",void 0),e([d(s$4)],B.prototype,"featureReduction",void 0),e([d({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),e([d(_.fieldsIndex)],B.prototype,"fieldsIndex",void 0),e([d({type:M,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),e([d({type:["point","polygon","polyline","multipoint"],json:{read:{reader:i$1.read}}})],B.prototype,"geometryType",void 0),e([d({type:Boolean})],B.prototype,"hasZ",void 0),e([d(j)],B.prototype,"id",void 0),e([d({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),e([d(m$2)],B.prototype,"labelsVisible",void 0),e([d({type:[E],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}})],B.prototype,"labelingInfo",void 0),e([d(c)],B.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],B.prototype,"listMode",void 0),e([d({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),e([d(u$1)],B.prototype,"opacity",void 0),e([d({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),e([d({readOnly:!0})],B.prototype,"parsedUrl",null),e([d(p$1)],B.prototype,"popupEnabled",void 0),e([d({type:M$1,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),e([d({types:m$3,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$1}}}})],B.prototype,"renderer",null),e([d(l$1)],B.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],B.prototype,"source",void 0),e([d({type:k})],B.prototype,"spatialReference",void 0),e([d({type:[a$3]})],B.prototype,"templates",void 0),e([d()],B.prototype,"title",void 0),e([d({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),e([d({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),e([d({type:[m$4]})],B.prototype,"types",void 0),e([d(f$1)],B.prototype,"url",void 0),B=e([i("esri.layers.GeoJSONLayer")],B);const Z=B;

export default Z;
