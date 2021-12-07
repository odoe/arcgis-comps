import { I as z$1, _ as M$1, s, V as e, T, K as s$1, e as e$1, d, i as i$1, A as r, a0 as k, a4 as o$1, Z as U$1, a3 as r$1, aT as S } from './messageBundle-f75b4090.js';
import { a as i } from './geometry-7e07b1ba.js';
import { M as M$2 } from './PopupTemplate-6e5ecad2.js';
import './UniqueValueRenderer-3c55992d.js';
import './DictionaryRenderer-bea76550.js';
import { m as m$3, n as n$1 } from './jsonUtils-aa645e92.js';
import './VisualVariablesMixin-0befdf7b.js';
import { l } from './MultiOriginJSONSupport-cb4804f4.js';
import { b } from './Layer-b50ea610.js';
import { a } from './HandleOwner-88326c19.js';
import { m } from './Portal-c5cfa317.js';
import { u } from './workers-c4ad1958.js';
import { a as a$1, u as u$1 } from './clientSideDefaults-1417a571.js';
import { U, W, q, V, x } from './wfsUtils-40c8ed95.js';
import g from './FeatureSet-58481609.js';
import { i as i$2 } from './BlendLayer-38b8abf7.js';
import { o } from './CustomParametersMixin-758e21ed.js';
import { t, s as s$3, r as r$2 } from './labelingInfo-1bb19962.js';
import { y, d as d$2, m as m$2, c, w as w$1, p as p$1, f } from './OperationalLayer-d609e521.js';
import { p } from './OrderedLayer-7fa2fd9d.js';
import { w } from './PortalLayer-290979fa.js';
import { n } from './RefreshableLayer-f4d1c27c.js';
import { s as s$2 } from './ScaleRangeLayer-584ce37b.js';
import { a as a$2 } from './TemporalLayer-5a7f466a.js';
import { y as y$1 } from './Field-bfaa8af9.js';
import { l as l$1 } from './fieldProperties-d7b323c6.js';
import { d as d$1, m as m$1 } from './opacityUtils-5e864561.js';
import { E } from './LabelClass-47fb4a25.js';
import { b as b$1 } from './Query-d6335b3a.js';
import { a as a$3 } from './popupUtils-c3247ec1.js';
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
import './reactiveUtils-8f9c3a3d.js';
import './QueryEngineCapabilities-d289cd19.js';
import './defaultsJSON-0b68054b.js';
import './projection-f3d8779d.js';
import './mat4-f34c6460.js';
import './geodesicConstants-54cb88d4.js';
import './geojson-5a4ac292.js';
import './OptimizedFeature-44d5df5b.js';
import './xmlUtils-ed1df04b.js';
import './fieldType-66a19d8a.js';
import './TimeExtent-a024c0d8.js';
import './ElevationInfo-be94499b.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './TimeInfo-44dec2e0.js';
import './FieldsIndex-2a111e7e.js';
import './labelUtils-8999bd11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let j=class extends(a(m)){constructor(){super(...arguments),this.capabilities=a$1(!1,!1),this.type="wfs",this.refresh=z$1((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){var t;const r$1=null!=(t=r(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r$1})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return g.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:M$1.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e$1){const{url:r,customParameters:o,name:s$1,namespaceUri:a,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await U(r,{customParameters:o,...e$1}));const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=u?await W(this.wfsCapabilities,s$1,a,{spatialReference:n,customParameters:o,signal:null==e$1?void 0:e$1.signal}):{...q(c),geometryType:p,name:s$1,namespaceUri:a,spatialReference:n,swapXY:l},d=e(V(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=i.toJSON(y.geometryType);return {customParameters:o,featureType:d,fields:y.fields.map((e=>e.toJSON())),geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY}}async _startWorker(e){const[t,r]=await T([this._createLoadOptions(e),u("WFSSourceWorker",{...e,strategy:s$1("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,a=r.value||null;if(s)throw a&&a.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:u$1(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}};}};e$1([d()],j.prototype,"capabilities",void 0),e$1([d({constructOnly:!0})],j.prototype,"layer",void 0),e$1([d()],j.prototype,"sourceJSON",void 0),e$1([d()],j.prototype,"type",void 0),e$1([d()],j.prototype,"wfsCapabilities",void 0),j=e$1([i$1("esri.layers.graphics.sources.WFSSource")],j);const v=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B;const z=l$1();let J=B=class extends(p(o(t(i$2(a$2(n(s$2(y(w(l(b))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=k.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new B({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),d$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==x));this.geometryField&&i.unshift(new y$1({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$1(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return this.url?U$1(this.url):null}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}createPopupTemplate(e){return a$3(this,e)}createQuery(){const e=new b$1;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){var t;return null==(t=this.getField(e))?void 0:t.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r$1}=await this.source.refresh(this.customParameters);return r(r$1)&&this.read(r$1,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e$1([d({readOnly:!0,aliasOf:"source.capabilities"})],J.prototype,"capabilities",void 0),e$1([d({type:String})],J.prototype,"copyright",void 0),e$1([d({readOnly:!0})],J.prototype,"createQueryVersion",null),e$1([d({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],J.prototype,"customParameters",void 0),e$1([d({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),e$1([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],J.prototype,"definitionExpression",void 0),e$1([d({type:String})],J.prototype,"displayField",void 0),e$1([d(d$2)],J.prototype,"elevationInfo",void 0),e$1([d(s$3)],J.prototype,"featureReduction",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"featureUrl",void 0),e$1([d({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],J.prototype,"fields",void 0),e$1([r$1("fields")],J.prototype,"writeFields",null),e$1([d(z.fieldsIndex)],J.prototype,"fieldsIndex",void 0),e$1([d({type:M$1,json:{name:"extent"}})],J.prototype,"fullExtent",void 0),e$1([d()],J.prototype,"geometryField",void 0),e$1([d({type:String,json:{read:{source:"layerDefinition.geometryType",reader:i.read},write:{target:"layerDefinition.geometryType",writer:i.write,ignoreOrigin:!0},origins:{service:{read:i.read}}}})],J.prototype,"geometryType",void 0),e$1([d({type:String})],J.prototype,"id",void 0),e$1([d(m$2)],J.prototype,"labelsVisible",void 0),e$1([d({type:[E],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$2},write:!0}})],J.prototype,"labelingInfo",void 0),e$1([d(c)],J.prototype,"legendEnabled",void 0),e$1([d({type:["show","hide"]})],J.prototype,"listMode",void 0),e$1([d({type:String})],J.prototype,"objectIdField",void 0),e$1([d({type:["WFS"]})],J.prototype,"operationalLayerType",void 0),e$1([d({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"maxFeatures",void 0),e$1([d({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],J.prototype,"mode",void 0),e$1([d({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"name",void 0),e$1([d({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"namespaceUri",void 0),e$1([d(w$1)],J.prototype,"opacity",void 0),e$1([d(z.outFields)],J.prototype,"outFields",void 0),e$1([d({readOnly:!0})],J.prototype,"parsedUrl",null),e$1([d(p$1)],J.prototype,"popupEnabled",void 0),e$1([d({type:M$2,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),e$1([d({types:m$3,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$1,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],J.prototype,"renderer",null),e$1([d({type:Boolean,json:{write:!0,name:"screenSizePerspective"}})],J.prototype,"screenSizePerspectiveEnabled",void 0),e$1([d({readOnly:!0})],J.prototype,"source",void 0),e$1([d({type:k,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],J.prototype,"spatialReference",void 0),e$1([d({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"spatialReferences",void 0),e$1([d({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"swapXY",void 0),e$1([d({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],J.prototype,"title",void 0),e$1([d({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),e$1([d(f)],J.prototype,"url",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"version",void 0),e$1([d({aliasOf:"source.wfsCapabilities"})],J.prototype,"wfsCapabilities",void 0),J=B=e$1([i$1("esri.layers.WFSLayer")],J);const M=J;

export default M;
