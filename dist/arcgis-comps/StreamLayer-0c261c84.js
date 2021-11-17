import { e, a as d, i as i$1, f as s, b7 as e$1, C as s$2, r, Z as b$1, a3 as E, a9 as S, a4 as u } from './jsxFactory-ef3e403e.js';
import { k, l as d$1, n as m, M, a6 as i$3, q as M$1, o as o$2, s as M$2 } from './unitUtils-8a2b838a.js';
import { P } from './UniqueValueRenderer-1e1c8bf1.js';
import './DictionaryRenderer-b0e19146.js';
import { o as o$1, p as p$2, m as m$2, n as n$1 } from './jsonUtils-595f52d3.js';
import './VisualVariablesMixin-0776df0b.js';
import { l as l$1, b } from './Layer-5a380094.js';
import { p as p$1 } from './ArcGISService-30368d07.js';
import { i as i$2 } from './BlendLayer-81c24642.js';
import { o } from './CustomParametersMixin-ca53bbdf.js';
import { t as t$1, s as s$3, r as r$1 } from './labelingInfo-1b49455f.js';
import { y } from './OperationalLayer-63ec0fa5.js';
import { w } from './PortalLayer-2d4eca15.js';
import { n } from './RefreshableLayer-079cea19.js';
import { s as s$1 } from './ScaleRangeLayer-cb457ce8.js';
import { a as a$1 } from './TemporalLayer-64ff2afe.js';
import { x, m as m$1, c, I, b as b$3, p as p$3, l as l$2, f } from './commonProperties-e22a7011.js';
import { l } from './fieldProperties-cc8fc820.js';
import { E as E$1 } from './LabelClass-5f15d30f.js';
import { a } from './JSONSupport-a5eb98e7.js';
import { t as t$2 } from './styleUtils-305b69b7.js';
import { b as b$2 } from './Query-fd5e1b7b.js';
import { a as a$2 } from './popupUtils-5accf1e0.js';
import './index-5b4f4de1.js';
import './ColorStop-d3744592.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './colorRamps-a6280e46.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './compilerUtils-be3a2322.js';
import './lengthUtils-26f6142e.js';
import './arcgisLayerUrl-06668ce7.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-fb7ed3e3.js';
import './asyncUtils-968a02e9.js';
import './PortalItem-496c46b9.js';
import './TimeInfo-e0d5d311.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './FieldsIndex-d76382ca.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([d({type:Number,json:{write:!0}})],i.prototype,"age",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=e([i$1("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Y=s.getLogger("esri.layers.StreamLayer"),Z=l();let $=class extends(t$1(i$2(a$1(s$1(n(p$1(y(w(l$1(o(b))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in e$1))return this.addResolvingPromise(Promise.reject(new s$2("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=o$1(n,r,s)||void 0;return e||Y.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new P({defaultSymbol:ee(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:ee(e.symbol,e,s)})))}):new p$2({symbol:ee(r.defaultSymbol,r,s)})}createPopupTemplate(e){return a$2(this,e)}createQuery(){const e=new b$2;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new s$2("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new s$2("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new s$2("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new s$2("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),d$1(this.renderer,this.fieldsIndex),m(this.timeInfo,this.fieldsIndex),t$2(this,{origin:"service"})}};e([d({type:String})],$.prototype,"copyright",void 0),e([d({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),e([d({type:String})],$.prototype,"displayField",void 0),e([d({type:x})],$.prototype,"elevationInfo",void 0),e([d(s$3)],$.prototype,"featureReduction",void 0),e([d(Z.fields)],$.prototype,"fields",void 0),e([d(Z.fieldsIndex)],$.prototype,"fieldsIndex",void 0),e([d({type:M})],$.prototype,"geometryDefinition",void 0),e([d({type:i$3.apiValues,json:{read:{reader:i$3.read}}})],$.prototype,"geometryType",void 0),e([d(m$1)],$.prototype,"labelsVisible",void 0),e([d({type:[E$1],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],$.prototype,"labelingInfo",void 0),e([d(c)],$.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],$.prototype,"listMode",void 0),e([d({type:S})],$.prototype,"maxReconnectionAttempts",void 0),e([d({type:S})],$.prototype,"maxReconnectionInterval",void 0),e([d(I)],$.prototype,"maxScale",void 0),e([d(b$3)],$.prototype,"minScale",void 0),e([d({type:String})],$.prototype,"objectIdField",void 0),e([d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],$.prototype,"operationalLayerType",void 0),e([d(p$3)],$.prototype,"popupEnabled",void 0),e([d({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],$.prototype,"popupTemplate",void 0),e([d({type:p})],$.prototype,"purgeOptions",void 0),e([d({types:m$2,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:n$1,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],$.prototype,"renderer",null),e([o$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),o$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],$.prototype,"readRenderer",null),e([d(l$2)],$.prototype,"screenSizePerspectiveEnabled",void 0),e([d({type:k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],$.prototype,"spatialReference",void 0),e([d({json:{read:!1}})],$.prototype,"type",void 0),e([d(f)],$.prototype,"url",void 0),e([d({type:Number})],$.prototype,"updateInterval",void 0),e([d({type:String})],$.prototype,"webSocketUrl",void 0),$=e([i$1("esri.layers.StreamLayer")],$);const ee=u({types:M$2}),re=$;

export default re;
