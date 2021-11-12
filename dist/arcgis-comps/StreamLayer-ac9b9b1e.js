import { e, a as d, i as i$1, f as s, b4 as e$1, C as s$2, r, as as b$1, at as E, X as S, ax as u } from './jsxFactory-c96bb45c.js';
import { J as k, bf as d$1, bg as m, M, bc as i$3, bh as M$1, v as o$2, $ as M$2 } from './Graphic-6c72131a.js';
import { P } from './UniqueValueRenderer-f2af8ece.js';
import './DictionaryRenderer-78308a28.js';
import { o as o$1, p as p$2, m as m$2, n as n$1 } from './jsonUtils-580ae154.js';
import './VisualVariablesMixin-bafacb39.js';
import { l as l$1, b } from './MultiOriginJSONSupport-f6506b2f.js';
import { p as p$1 } from './ArcGISService-4cc51fbf.js';
import { i as i$2 } from './BlendLayer-70766503.js';
import { o } from './CustomParametersMixin-89544c0d.js';
import { t as t$1, s as s$3, r as r$1 } from './labelingInfo-683f3119.js';
import { y } from './OperationalLayer-b04e38aa.js';
import { w } from './PortalLayer-df690c5a.js';
import { n } from './RefreshableLayer-702beb88.js';
import { s as s$1 } from './ScaleRangeLayer-99043c54.js';
import { a as a$1 } from './TemporalLayer-b41e8e6e.js';
import { x, m as m$1, c, I, b as b$3, p as p$3, l as l$2, f } from './commonProperties-fa43a2ed.js';
import { l } from './fieldProperties-b0c243c7.js';
import { E as E$1 } from './LabelClass-65776e47.js';
import { a } from './JSONSupport-5a9f556a.js';
import { t as t$2 } from './styleUtils-e2196c57.js';
import { b as b$2 } from './Query-792b142d.js';
import { a as a$2 } from './popupUtils-4957d444.js';
import './index-921bd636.js';
import './ColorStop-fb26d745.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './LRUCache-81490262.js';
import './MemCache-e219bcfb.js';
import './colorRamps-693d6433.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './compilerUtils-128fda14.js';
import './lengthUtils-7a485aa7.js';
import './unitUtils-b25ae8cb.js';
import './arcgisLayerUrl-2aeded02.js';
import './jsonUtils-352e8eb7.js';
import './mat4-ef633c62.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-1bc95591.js';
import './asyncUtils-dc4bd819.js';
import './PortalItem-209a51a1.js';
import './TimeInfo-9a5e9434.js';
import './Field-2b6029f8.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './FieldsIndex-56cf15de.js';
import './labelUtils-45e9126f.js';
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
