import { e, d, i, m, z, cu as g, M, cC as u$1, a as s, r, cs as o, i0 as m$1, hb as p$1, hO as Ge, k, fu as b } from './index.js';
import { a } from './clientSideDefaults.js';

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