import { e, d, i, bm as z, a7 as s, r } from './messageBundle-8a146a9b.js';
import { m, M, o, cJ as m$1, av as p$1, k } from './unitUtils-c707ba3c.js';
import Ge from './FeatureLayer-52da5e2e.js';
import { u as u$1 } from './workers-c79250a3.js';
import g from './FeatureSet-e481fbb3.js';
import { a } from './clientSideDefaults-b17b6c02.js';
import { b } from './Query-71270a43.js';
import './index-41925fe8.js';
import './JSONSupport-4e29e63d.js';
import './UniqueValueRenderer-75e84d49.js';
import './VisualVariablesMixin-66f084f4.js';
import './colorRamps-b0e37c54.js';
import './ColorStop-ff4a3943.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-3ac464e8.js';
import './lengthUtils-a6878787.js';
import './diffUtils-14ca3884.js';
import './jsonUtils-7105a0de.js';
import './styleUtils-5fe9231e.js';
import './DictionaryRenderer-4a77ed62.js';
import './LRUCache-b68d19e5.js';
import './MemCache-73bb45e2.js';
import './jsonUtils-f2130780.js';
import './Layer-455faab4.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';
import './HeightModelInfo-899d5d07.js';
import './HandleOwner-6cdc634d.js';
import './reactiveUtils-a5f838c7.js';
import './queryZScale-f92acabb.js';
import './zscale-5703857d.js';
import './APIKeyMixin-f2be3dfc.js';
import './ArcGISService-adf08a63.js';
import './arcgisLayerUrl-30839db3.js';
import './BlendLayer-286c847c.js';
import './jsonUtils-433a912a.js';
import './mat4-1ee7ce2f.js';
import './CustomParametersMixin-05dda462.js';
import './labelingInfo-136b2123.js';
import './TimeExtent-16986fe0.js';
import './commonProperties-0e370622.js';
import './LabelClass-080f9590.js';
import './labelUtils-17428bb2.js';
import './defaultsJSON-f90363d8.js';
import './OperationalLayer-52601c7c.js';
import './OrderedLayer-1aa033f7.js';
import './PortalLayer-faa3179f.js';
import './asyncUtils-c98101f9.js';
import './PortalItem-3f93baa8.js';
import './RefreshableLayer-f326088d.js';
import './ScaleRangeLayer-aeac5429.js';
import './TemporalLayer-f8f255e9.js';
import './TimeInfo-3ee9ad62.js';
import './FeatureType-30442694.js';
import './fieldProperties-530951df.js';
import './FieldsIndex-041474f9.js';
import './LayerFloorInfo-e1a08643.js';
import './styleUtils-32c9f97f.js';
import './TopFeaturesQuery-5a679b50.js';
import './popupUtils-b5ee0759.js';
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
