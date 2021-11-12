import { r as z$1, A as r, h as s, y as e, T, s as s$1, e as e$1, a as d, i as i$1, W as o$1, aL as U$1, M as S } from './jsxFactory-a3b6abde.js';
import { a5 as m, M as M$1, bd as i, z as k, bi as d$1, bj as m$1, k as r$1, bk as M$2 } from './Graphic-08cda9ca.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './DictionaryRenderer-80042e03.js';
import { m as m$3, n as n$1 } from './jsonUtils-66ddb072.js';
import './VisualVariablesMixin-b52a2c87.js';
import { l as l$1, b } from './MultiOriginJSONSupport-22dd2d29.js';
import { a } from './HandleOwner-a0b41b75.js';
import { u } from './workers-82dadb41.js';
import { a as a$1, u as u$1 } from './clientSideDefaults-ae23259e.js';
import { U, W, q, V, x } from './wfsUtils-db6562ee.js';
import g from './FeatureSet-d7537daf.js';
import { i as i$2 } from './BlendLayer-1d9f1c9a.js';
import { o } from './CustomParametersMixin-92abdfc3.js';
import { t, s as s$3, r as r$2 } from './labelingInfo-af47848f.js';
import { y } from './OperationalLayer-26aa2ff7.js';
import { p } from './OrderedLayer-2f7497c3.js';
import { w } from './PortalLayer-8e73039a.js';
import { n } from './RefreshableLayer-5b977e98.js';
import { s as s$2 } from './ScaleRangeLayer-2f975321.js';
import { a as a$2 } from './TemporalLayer-f3b14395.js';
import { d as d$2, m as m$2, c, w as w$1, p as p$1, f } from './commonProperties-ad8badbd.js';
import { y as y$1 } from './Field-416cada2.js';
import { l } from './fieldProperties-f216bcfb.js';
import { E } from './LabelClass-a0793742.js';
import { b as b$1 } from './Query-a20a7572.js';
import { a as a$3 } from './popupUtils-9dc503ca.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './ColorStop-e7cb8b17.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './LRUCache-d4f192fd.js';
import './MemCache-dfacc658.js';
import './colorRamps-270af342.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './compilerUtils-a5ae094d.js';
import './lengthUtils-e1fe9a45.js';
import './reactiveUtils-aa11596b.js';
import './QueryEngineCapabilities-d289cd19.js';
import './defaultsJSON-53258912.js';
import './projection-0b5fc15a.js';
import './mat4-3acd3594.js';
import './geojson-f48683d5.js';
import './OptimizedFeature-3d0408e5.js';
import './xmlUtils-ed1df04b.js';
import './fieldType-7f2a820b.js';
import './jsonUtils-efaaa503.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-a92e5996.js';
import './asyncUtils-9a49e799.js';
import './PortalItem-4dd070a8.js';
import './TimeInfo-8ecf4da2.js';
import './FieldsIndex-87a4d86b.js';
import './labelUtils-434b8348.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let j=class extends(a(m)){constructor(){super(...arguments),this.capabilities=a$1(!1,!1),this.type="wfs",this.refresh=z$1((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){var t;const r$1=null!=(t=r(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r$1})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return g.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:M$1.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e$1){const{url:r,customParameters:o,name:s$1,namespaceUri:a,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await U(r,{customParameters:o,...e$1}));const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=u?await W(this.wfsCapabilities,s$1,a,{spatialReference:n,customParameters:o,signal:null==e$1?void 0:e$1.signal}):{...q(c),geometryType:p,name:s$1,namespaceUri:a,spatialReference:n,swapXY:l},d=e(V(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=i.toJSON(y.geometryType);return {customParameters:o,featureType:d,fields:y.fields.map((e=>e.toJSON())),geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY}}async _startWorker(e){const[t,r]=await T([this._createLoadOptions(e),u("WFSSourceWorker",{...e,strategy:s$1("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,a=r.value||null;if(s)throw a&&a.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:u$1(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}};}};e$1([d()],j.prototype,"capabilities",void 0),e$1([d({constructOnly:!0})],j.prototype,"layer",void 0),e$1([d()],j.prototype,"sourceJSON",void 0),e$1([d()],j.prototype,"type",void 0),e$1([d()],j.prototype,"wfsCapabilities",void 0),j=e$1([i$1("esri.layers.graphics.sources.WFSSource")],j);const v=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B;const z=l();let J=B=class extends(p(o(t(i$2(a$2(n(s$2(y(w(l$1(b))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=k.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new B({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),d$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==x));this.geometryField&&i.unshift(new y$1({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$1(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return this.url?U$1(this.url):null}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}createPopupTemplate(e){return a$3(this,e)}createQuery(){const e=new b$1;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){var t;return null==(t=this.getField(e))?void 0:t.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r$1}=await this.source.refresh(this.customParameters);return r(r$1)&&this.read(r$1,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e$1([d({readOnly:!0,aliasOf:"source.capabilities"})],J.prototype,"capabilities",void 0),e$1([d({type:String})],J.prototype,"copyright",void 0),e$1([d({readOnly:!0})],J.prototype,"createQueryVersion",null),e$1([d({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],J.prototype,"customParameters",void 0),e$1([d({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),e$1([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],J.prototype,"definitionExpression",void 0),e$1([d({type:String})],J.prototype,"displayField",void 0),e$1([d(d$2)],J.prototype,"elevationInfo",void 0),e$1([d(s$3)],J.prototype,"featureReduction",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"featureUrl",void 0),e$1([d({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],J.prototype,"fields",void 0),e$1([r$1("fields")],J.prototype,"writeFields",null),e$1([d(z.fieldsIndex)],J.prototype,"fieldsIndex",void 0),e$1([d({type:M$1,json:{name:"extent"}})],J.prototype,"fullExtent",void 0),e$1([d()],J.prototype,"geometryField",void 0),e$1([d({type:String,json:{read:{source:"layerDefinition.geometryType",reader:i.read},write:{target:"layerDefinition.geometryType",writer:i.write,ignoreOrigin:!0},origins:{service:{read:i.read}}}})],J.prototype,"geometryType",void 0),e$1([d({type:String})],J.prototype,"id",void 0),e$1([d(m$2)],J.prototype,"labelsVisible",void 0),e$1([d({type:[E],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$2},write:!0}})],J.prototype,"labelingInfo",void 0),e$1([d(c)],J.prototype,"legendEnabled",void 0),e$1([d({type:["show","hide"]})],J.prototype,"listMode",void 0),e$1([d({type:String})],J.prototype,"objectIdField",void 0),e$1([d({type:["WFS"]})],J.prototype,"operationalLayerType",void 0),e$1([d({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"maxFeatures",void 0),e$1([d({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],J.prototype,"mode",void 0),e$1([d({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"name",void 0),e$1([d({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"namespaceUri",void 0),e$1([d(w$1)],J.prototype,"opacity",void 0),e$1([d(z.outFields)],J.prototype,"outFields",void 0),e$1([d({readOnly:!0})],J.prototype,"parsedUrl",null),e$1([d(p$1)],J.prototype,"popupEnabled",void 0),e$1([d({type:M$2,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),e$1([d({types:m$3,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$1,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],J.prototype,"renderer",null),e$1([d({type:Boolean,json:{write:!0,name:"screenSizePerspective"}})],J.prototype,"screenSizePerspectiveEnabled",void 0),e$1([d({readOnly:!0})],J.prototype,"source",void 0),e$1([d({type:k,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],J.prototype,"spatialReference",void 0),e$1([d({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"spatialReferences",void 0),e$1([d({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"swapXY",void 0),e$1([d({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],J.prototype,"title",void 0),e$1([d({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),e$1([d(f)],J.prototype,"url",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"version",void 0),e$1([d({aliasOf:"source.wfsCapabilities"})],J.prototype,"wfsCapabilities",void 0),J=B=e$1([i$1("esri.layers.WFSLayer")],J);const M=J;

export default M;
