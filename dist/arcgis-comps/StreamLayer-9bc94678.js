import { e, b as d, i as i$1, g as s, W as e$1, a as s$2, r, a9 as b$1, E, a1 as S, aJ as u } from './cast-e5ea2533.js';
import { a as i$3 } from './geometry-160ffbb5.js';
import { M as M$1 } from './PopupTemplate-87ca9924.js';
import { P } from './UniqueValueRenderer-b8a9ac2d.js';
import './DictionaryRenderer-09505309.js';
import { o as o$1, p as p$2, m as m$2, n as n$1 } from './jsonUtils-efd42703.js';
import './VisualVariablesMixin-a8b13e1b.js';
import { M as M$2 } from './symbols-dc010d3b.js';
import { l as l$1, b } from './Layer-663fafaf.js';
import { k, M, o as o$2 } from './Portal-f1457cb4.js';
import { p as p$1 } from './ArcGISService-00a30f8e.js';
import { i as i$2 } from './BlendLayer-34bd1b5b.js';
import { o } from './CustomParametersMixin-171b3366.js';
import { t as t$1, s as s$3, r as r$1 } from './labelingInfo-4e582940.js';
import { y } from './OperationalLayer-0f16c161.js';
import { w } from './PortalLayer-0ef8a2d2.js';
import { n } from './RefreshableLayer-0c4b9daf.js';
import { s as s$1 } from './ScaleRangeLayer-f5a96945.js';
import { a as a$1 } from './TemporalLayer-b9cacecc.js';
import { x, m as m$1, c, I, b as b$3, p as p$3, l as l$2, f } from './commonProperties-4c10a963.js';
import { l } from './fieldProperties-dc649a5f.js';
import { d as d$1, m } from './opacityUtils-5755cb64.js';
import { E as E$1 } from './LabelClass-a646d1d3.js';
import { a } from './JSONSupport-8dda8bae.js';
import { t as t$2 } from './styleUtils-545def82.js';
import { b as b$2 } from './Query-b8b0a5e8.js';
import { a as a$2 } from './popupUtils-71e7198e.js';
import './Polyline-56152656.js';
import './Collection-ac20f1a1.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './Identifiable-0fb3fc58.js';
import './ColorStop-0035d362.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './Symbol-ac21e497.js';
import './persistableUrlUtils-a9da326c.js';
import './styleUtils-5c87d3a9.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './colorRamps-fcb1175a.js';
import './screenUtils-9ed89fa7.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './Graphic-79de2095.js';
import './compilerUtils-2d7ddb00.js';
import './lengthUtils-2084b777.js';
import './unitUtils-5dcccb3c.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './collectionUtils-b35b097b.js';
import './aliasOf-e543e228.js';
import './arcgisLayerUrl-4273e4b3.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-ecf7e6f2.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';
import './TimeInfo-5f646e9b.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './FieldsIndex-e09edd96.js';
import './labelUtils-a20584ac.js';
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
