import { e, d, i, I as z, _ as M, K as s, A as r, a2 as o, a0 as k } from './messageBundle-f75b4090.js';
import './geometry-7e07b1ba.js';
import { G as Ge } from './FeatureLayer-91daf6b1.js';
import { m } from './Portal-c5cfa317.js';
import { u as u$1 } from './workers-c4ad1958.js';
import g from './FeatureSet-58481609.js';
import { a } from './clientSideDefaults-1417a571.js';
import { b } from './Query-d6335b3a.js';
import { m as m$1, p as p$1 } from './persistableUrlUtils-40bbec67.js';
import './index-b157fcf2.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './UniqueValueRenderer-3c55992d.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './VisualVariablesMixin-0befdf7b.js';
import './colorRamps-22c88e98.js';
import './ColorStop-d4fc22fe.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-26c41ea6.js';
import './Graphic-3961df6c.js';
import './jsonUtils-13b1f6fd.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './diffUtils-849b3672.js';
import './jsonUtils-ade233cd.js';
import './styleUtils-cb28c5ef.js';
import './DictionaryRenderer-bea76550.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './jsonUtils-aa645e92.js';
import './MultiOriginJSONSupport-cb4804f4.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './HeightModelInfo-1a6d7a08.js';
import './Layer-b50ea610.js';
import './HandleOwner-88326c19.js';
import './reactiveUtils-8f9c3a3d.js';
import './queryZScale-f42386f8.js';
import './zscale-faf9ffc2.js';
import './APIKeyMixin-d7a9a0ad.js';
import './ArcGISService-49a9bda6.js';
import './arcgisLayerUrl-49ef2818.js';
import './BlendLayer-38b8abf7.js';
import './mat4-f34c6460.js';
import './CustomParametersMixin-758e21ed.js';
import './labelingInfo-1bb19962.js';
import './TimeExtent-a024c0d8.js';
import './OperationalLayer-d609e521.js';
import './ElevationInfo-be94499b.js';
import './LabelClass-47fb4a25.js';
import './labelUtils-8999bd11.js';
import './defaultsJSON-0b68054b.js';
import './OrderedLayer-7fa2fd9d.js';
import './PortalLayer-290979fa.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './RefreshableLayer-f4d1c27c.js';
import './ScaleRangeLayer-584ce37b.js';
import './TemporalLayer-5a7f466a.js';
import './TimeInfo-44dec2e0.js';
import './FeatureType-aa59abbf.js';
import './fieldProperties-d7b323c6.js';
import './FieldsIndex-2a111e7e.js';
import './LayerFloorInfo-c2959bac.js';
import './styleUtils-61c488eb.js';
import './TopFeaturesQuery-cc717439.js';
import './popupUtils-c3247ec1.js';
import './QueryEngineCapabilities-d289cd19.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let u=class extends m{constructor(t){super(t),this.type="csv",this.refresh=z((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(t){const e=r(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null==(t=this._connection)||t.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return g.fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return {count:o.count,extent:M.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await u$1("CSVSourceWorker",{strategy:s("feature-layers-workers")?"dedicated":"local",signal:t});const{url:o,delimiter:r,fields:s$1,latitudeField:n,longitudeField:a,spatialReference:c,timeInfo:l}=this.loadOptions,u=await this._connection.invoke("load",{url:o,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:null==s$1?void 0:s$1.map((t=>t.toJSON())),latitudeField:n,longitudeField:a,spatialReference:null==c?void 0:c.toJSON(),timeInfo:null==l?void 0:l.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter;}};e([d()],u.prototype,"type",void 0),e([d()],u.prototype,"loadOptions",void 0),e([d()],u.prototype,"customParameters",void 0),e([d()],u.prototype,"locationInfo",void 0),e([d()],u.prototype,"sourceJSON",void 0),e([d()],u.prototype,"delimiter",void 0),u=e([i("esri.layers.graphics.sources.CSVSource")],u);const p=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends Ge{constructor(...e){super(...e),this.capabilities=a(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=k.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e);}async createGraphicsSource(e){const r=new p({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",r),await r.load({signal:e}),this.read({locationInfo:r.locationInfo,columnDelimiter:r.delimiter},{origin:"service",url:this.parsedUrl}),r}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery())))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery())))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery())))}write(e,r){return super.write(e,{...r,writeLayerSchema:!0})}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};e([d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"capabilities",void 0),e([d({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],c.prototype,"delimiter",void 0),e([d({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],c.prototype,"editingEnabled",void 0),e([d({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],c.prototype,"fields",void 0),e([d({type:Boolean,readOnly:!0})],c.prototype,"isTable",null),e([o("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],c.prototype,"readWebMapLabelsVisible",null),e([d({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"latitudeField",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],c.prototype,"locationType",void 0),e([d({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"longitudeField",void 0),e([d({type:["CSV"]})],c.prototype,"operationalLayerType",void 0),e([d()],c.prototype,"outFields",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],c.prototype,"path",void 0),e([d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),e([d({json:{read:!1},cast:null,type:p,readOnly:!0})],c.prototype,"source",void 0),e([d({json:{read:!1},value:"csv",readOnly:!0})],c.prototype,"type",void 0),e([d({json:{read:m$1,write:{isRequired:!0,ignoreOrigin:!0,writer:p$1}}})],c.prototype,"url",null),c=e([i("esri.layers.CSVLayer")],c);const y=c;

export default y;
