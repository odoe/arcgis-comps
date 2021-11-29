import{e,d as t,i,U as r,b5 as s,cJ as a,o as n,cN as o,bs as l,r as u,bH as d,j2 as h,io as c,aR as y,k as p,g$ as g}from"./p-5420851c.js";import{a as f}from"./p-3bb1fb67.js";import"./p-53bb6ab4.js";import"./p-06d309e6.js";let m=class extends r{constructor(e){super(e),this.type="csv",this.refresh=s((async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return a.fromJSON(i)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const i=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:i.count,extent:n.fromJSON(i.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await o("CSVSourceWorker",{strategy:l("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:i,fields:r,latitudeField:s,longitudeField:a,spatialReference:n,timeInfo:u}=this.loadOptions,d=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:i,fields:null==r?void 0:r.map((e=>e.toJSON())),latitudeField:s,longitudeField:a,spatialReference:null==n?void 0:n.toJSON(),timeInfo:null==u?void 0:u.toJSON()}},{signal:e});this.locationInfo=d.locationInfo,this.sourceJSON=d.layerDefinition,this.delimiter=d.delimiter}};e([t()],m.prototype,"type",void 0),e([t()],m.prototype,"loadOptions",void 0),e([t()],m.prototype,"customParameters",void 0),e([t()],m.prototype,"locationInfo",void 0),e([t()],m.prototype,"sourceJSON",void 0),e([t()],m.prototype,"delimiter",void 0),m=e([i("esri.layers.graphics.sources.CSVSource")],m);const w=m;let v=class extends y{constructor(...e){super(...e),this.capabilities=f(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=p.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new w({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(g.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(g.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(g.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(g.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return u(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};e([t({readOnly:!0,json:{read:!1,write:!1}})],v.prototype,"capabilities",void 0),e([t({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],v.prototype,"delimiter",void 0),e([t({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"editingEnabled",void 0),e([t({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],v.prototype,"fields",void 0),e([t({type:Boolean,readOnly:!0})],v.prototype,"isTable",null),e([d("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],v.prototype,"readWebMapLabelsVisible",null),e([t({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],v.prototype,"latitudeField",void 0),e([t({type:["show","hide"]})],v.prototype,"listMode",void 0),e([t({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],v.prototype,"locationType",void 0),e([t({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],v.prototype,"longitudeField",void 0),e([t({type:["CSV"]})],v.prototype,"operationalLayerType",void 0),e([t()],v.prototype,"outFields",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],v.prototype,"path",void 0),e([t({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],v.prototype,"portalItem",void 0),e([t({json:{read:!1},cast:null,type:w,readOnly:!0})],v.prototype,"source",void 0),e([t({json:{read:!1},value:"csv",readOnly:!0})],v.prototype,"type",void 0),e([t({json:{read:h,write:{isRequired:!0,ignoreOrigin:!0,writer:c}}})],v.prototype,"url",null),v=e([i("esri.layers.CSVLayer")],v);const b=v;export default b;