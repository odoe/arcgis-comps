'use strict';

const request = require('./MapView-1726f571.js');
const clientSideDefaults = require('./clientSideDefaults-fff49c54.js');
require('./index-fde8502c.js');
require('./QueryEngineCapabilities-15e8d907.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=request.s$2.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends request.m$1{constructor(){super(...arguments),this.type="geojson",this.refresh=request.z$2((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=request.r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>request.g$4.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:request.M$1.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new request.s$1("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new request.s$1("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return request.t(t)?null:"mesh"===t.type||"extent"===t.type?request.v$2.fromExtent(t.extent):t}async _startWorker(e){this._connection=await request.u$10("GeoJSONSourceWorker",{strategy:request.s$5("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i,objectIdField:n,url:a,timeInfo:l,customParameters:c}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a,customParameters:c,fields:t&&t.map((e=>e.toJSON())),geometryType:request.i$22.toJSON(i),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=clientSideDefaults.a(this.sourceJSON.hasZ,!0);}};request.e([request.d()],g.prototype,"capabilities",void 0),request.e([request.d()],g.prototype,"type",void 0),request.e([request.d({constructOnly:!0})],g.prototype,"layer",void 0),request.e([request.d()],g.prototype,"sourceJSON",void 0),g=request.e([request.i("esri.layers.graphics.sources.GeoJSONSource")],g);const S=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=request.l$23();let B=class extends(request.p$19(request.o$18(request.t$24(request.i$25(request.a$28(request.s$21(request.n$22(request.y$5(request.l$4(request.b$10)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new S({layer:this}),this.spatialReference=request.k.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),request.d$20(this.renderer,this.fieldsIndex),request.m$23(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?request.U(this.url):null}set renderer(e){request.d$20(e,this.fieldsIndex),this._set("renderer",e);}async applyEdits(e,t){const r=await Promise.resolve().then(function () { return require('./editingSupport-18a50aba.js'); });await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return request.a$29(this,e)}createQuery(){const e=new request.b$15,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(request.b$15.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(request.b$15.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(request.b$15.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(request.b$15.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return request.r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),request.e([request.d({type:String})],B.prototype,"copyright",void 0),request.e([request.d({readOnly:!0})],B.prototype,"createQueryVersion",null),request.e([request.d({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),request.e([request.d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),request.e([request.d({type:String})],B.prototype,"displayField",void 0),request.e([request.d({type:Boolean})],B.prototype,"editingEnabled",void 0),request.e([request.d(request.d$19)],B.prototype,"elevationInfo",void 0),request.e([request.d(request.s$23)],B.prototype,"featureReduction",void 0),request.e([request.d({type:[request.y$7],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),request.e([request.d(_.fieldsIndex)],B.prototype,"fieldsIndex",void 0),request.e([request.d({type:request.M$1,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),request.e([request.d({type:["point","polygon","polyline","multipoint"],json:{read:{reader:request.i$22.read}}})],B.prototype,"geometryType",void 0),request.e([request.d({type:Boolean})],B.prototype,"hasZ",void 0),request.e([request.d(request.j$13)],B.prototype,"id",void 0),request.e([request.d({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),request.e([request.d(request.m$24)],B.prototype,"labelsVisible",void 0),request.e([request.d({type:[request.E$6],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:request.r$21},write:!0}})],B.prototype,"labelingInfo",void 0),request.e([request.d(request.c$25)],B.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],B.prototype,"listMode",void 0),request.e([request.d({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),request.e([request.d(request.u$16)],B.prototype,"opacity",void 0),request.e([request.d({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),request.e([request.d({readOnly:!0})],B.prototype,"parsedUrl",null),request.e([request.d(request.p$15)],B.prototype,"popupEnabled",void 0),request.e([request.d({type:request.M$2,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),request.e([request.d({types:request.m$20,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:request.n$23}}}})],B.prototype,"renderer",null),request.e([request.d(request.l$24)],B.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({readOnly:!0})],B.prototype,"source",void 0),request.e([request.d({type:request.k})],B.prototype,"spatialReference",void 0),request.e([request.d({type:[request.a$30]})],B.prototype,"templates",void 0),request.e([request.d()],B.prototype,"title",void 0),request.e([request.d({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),request.e([request.d({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),request.e([request.d({type:[request.m$21]})],B.prototype,"types",void 0),request.e([request.d(request.f$4)],B.prototype,"url",void 0),B=request.e([request.i("esri.layers.GeoJSONLayer")],B);const Z=B;

exports.default = Z;