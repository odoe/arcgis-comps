import { e, d, i as i$1, a1 as a, c as s, a0 as k, bO as e$1, s as s$2, aj as b$1, Q as E, _ as M, aT as S, a2 as o$2, am as u, A as r$1 } from './messageBundle-f75b4090.js';
import { a as i$3 } from './geometry-7e07b1ba.js';
import { M as M$1 } from './PopupTemplate-6e5ecad2.js';
import { P } from './UniqueValueRenderer-3c55992d.js';
import './DictionaryRenderer-bea76550.js';
import { o as o$1, p as p$2, m as m$2, n as n$1 } from './jsonUtils-aa645e92.js';
import './VisualVariablesMixin-0befdf7b.js';
import { M as M$2 } from './symbols-b414aa72.js';
import { l } from './MultiOriginJSONSupport-cb4804f4.js';
import { b } from './Layer-b50ea610.js';
import { p as p$1 } from './ArcGISService-49a9bda6.js';
import { i as i$2 } from './BlendLayer-38b8abf7.js';
import { o } from './CustomParametersMixin-758e21ed.js';
import { t as t$1, s as s$3, r } from './labelingInfo-1bb19962.js';
import { y, m as m$1, c, I, b as b$3, p as p$3, l as l$1, f } from './OperationalLayer-d609e521.js';
import { w } from './PortalLayer-290979fa.js';
import { n } from './RefreshableLayer-f4d1c27c.js';
import { s as s$1 } from './ScaleRangeLayer-584ce37b.js';
import { a as a$1 } from './TemporalLayer-5a7f466a.js';
import { l as l$2 } from './fieldProperties-d7b323c6.js';
import { d as d$1, m } from './opacityUtils-5e864561.js';
import { E as E$1 } from './LabelClass-47fb4a25.js';
import { t as t$2 } from './styleUtils-61c488eb.js';
import { b as b$2 } from './Query-d6335b3a.js';
import { a as a$2 } from './popupUtils-c3247ec1.js';
import { x } from './ElevationInfo-be94499b.js';
import './index-b157fcf2.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './ColorStop-d4fc22fe.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './diffUtils-849b3672.js';
import './Portal-c5cfa317.js';
import './jsonUtils-ade233cd.js';
import './Symbol-cad56b52.js';
import './persistableUrlUtils-40bbec67.js';
import './styleUtils-cb28c5ef.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './colorRamps-22c88e98.js';
import './screenUtils-9bb7e30c.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-26c41ea6.js';
import './Graphic-3961df6c.js';
import './jsonUtils-13b1f6fd.js';
import './lengthUtils-f033d4fe.js';
import './unitUtils-38774114.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './arcgisLayerUrl-49ef2818.js';
import './mat4-f34c6460.js';
import './TimeExtent-a024c0d8.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './TimeInfo-44dec2e0.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './FieldsIndex-2a111e7e.js';
import './labelUtils-8999bd11.js';
import './defaultsJSON-0b68054b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([d({type:Number,json:{write:!0}})],i.prototype,"age",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=e([i$1("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Y=s.getLogger("esri.layers.StreamLayer"),Z=l$2();let $=class extends(t$1(i$2(a$1(s$1(n(p$1(y(w(l(o(b))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in e$1))return this.addResolvingPromise(Promise.reject(new s$2("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=r$1(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=o$1(n,r,s)||void 0;return e||Y.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new P({defaultSymbol:ee(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:ee(e.symbol,e,s)})))}):new p$2({symbol:ee(r.defaultSymbol,r,s)})}createPopupTemplate(e){return a$2(this,e)}createQuery(){const e=new b$2;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new s$2("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new s$2("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new s$2("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new s$2("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),d$1(this.renderer,this.fieldsIndex),m(this.timeInfo,this.fieldsIndex),t$2(this,{origin:"service"})}};e([d({type:String})],$.prototype,"copyright",void 0),e([d({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),e([d({type:String})],$.prototype,"displayField",void 0),e([d({type:x})],$.prototype,"elevationInfo",void 0),e([d(s$3)],$.prototype,"featureReduction",void 0),e([d(Z.fields)],$.prototype,"fields",void 0),e([d(Z.fieldsIndex)],$.prototype,"fieldsIndex",void 0),e([d({type:M})],$.prototype,"geometryDefinition",void 0),e([d({type:i$3.apiValues,json:{read:{reader:i$3.read}}})],$.prototype,"geometryType",void 0),e([d(m$1)],$.prototype,"labelsVisible",void 0),e([d({type:[E$1],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],$.prototype,"labelingInfo",void 0),e([d(c)],$.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],$.prototype,"listMode",void 0),e([d({type:S})],$.prototype,"maxReconnectionAttempts",void 0),e([d({type:S})],$.prototype,"maxReconnectionInterval",void 0),e([d(I)],$.prototype,"maxScale",void 0),e([d(b$3)],$.prototype,"minScale",void 0),e([d({type:String})],$.prototype,"objectIdField",void 0),e([d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],$.prototype,"operationalLayerType",void 0),e([d(p$3)],$.prototype,"popupEnabled",void 0),e([d({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],$.prototype,"popupTemplate",void 0),e([d({type:p})],$.prototype,"purgeOptions",void 0),e([d({types:m$2,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:n$1,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],$.prototype,"renderer",null),e([o$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),o$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],$.prototype,"readRenderer",null),e([d(l$1)],$.prototype,"screenSizePerspectiveEnabled",void 0),e([d({type:k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],$.prototype,"spatialReference",void 0),e([d({json:{read:!1}})],$.prototype,"type",void 0),e([d(f)],$.prototype,"url",void 0),e([d({type:Number})],$.prototype,"updateInterval",void 0),e([d({type:String})],$.prototype,"webSocketUrl",void 0),$=e([i$1("esri.layers.StreamLayer")],$);const ee=u({types:M$2}),re=$;

export default re;
