import{e,d as i,i as t,a1 as r,c as s,a0 as o,bO as a,s as p,aj as n,Q as d,_ as m,aT as l,a2 as f,am as c,A as u}from"./p-e58503d5.js";import{a as h}from"./p-b79fcce3.js";import{M as j}from"./p-93765525.js";import{P as y}from"./p-0e784e4d.js";import"./p-5ce39624.js";import{o as b,p as v,m as g,n as w}from"./p-51a17e75.js";import"./p-dbdf15fc.js";import{M as S}from"./p-8bc9b36a.js";import{l as I}from"./p-d208934e.js";import{b as T}from"./p-3e39c093.js";import{p as x}from"./p-c096b5df.js";import{i as D}from"./p-a24f7752.js";import{o as F}from"./p-4a6dc5e4.js";import{t as R,s as P,r as _}from"./p-6a92ecb9.js";import{y as L,m as A,c as E,I as N,b as O,p as k,l as C,f as G}from"./p-1ab449fc.js";import{w as M}from"./p-e44bd0a6.js";import{n as q}from"./p-fe68aab5.js";import{s as z}from"./p-c6970847.js";import{a as Q}from"./p-de86b3c9.js";import{l as V}from"./p-b1eff69d.js";import{d as W,m as U}from"./p-765e6c28.js";import{E as B}from"./p-0edb3309.js";import{t as H}from"./p-ab0e9273.js";import{b as J}from"./p-5e833dfc.js";import{a as K}from"./p-15a9486c.js";import{x as X}from"./p-a6c8fb32.js";import"./p-53bb6ab4.js";import"./p-a9a30646.js";import"./p-8747982c.js";import"./p-08e5f531.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-889f7a78.js";import"./p-efbca0ca.js";import"./p-1f81b35d.js";import"./p-7a658388.js";import"./p-8a919d07.js";import"./p-81b9df84.js";import"./p-e9bae5e9.js";import"./p-b0565d49.js";import"./p-e0d9ff4c.js";import"./p-fb38a9d0.js";import"./p-dfc6337f.js";import"./p-9f1c2d50.js";import"./p-54330161.js";import"./p-c048b814.js";import"./p-6b2eb7a7.js";import"./p-01e5a461.js";import"./p-f94762ac.js";import"./p-ea916a39.js";import"./p-da33e926.js";import"./p-ccdb8e80.js";import"./p-7a5bfd29.js";import"./p-e654504b.js";import"./p-0eb619a6.js";import"./p-37d3434c.js";import"./p-a131049b.js";import"./p-a2324023.js";import"./p-612de336.js";import"./p-e8160b60.js";import"./p-2e8ad983.js";var Y;let Z=Y=class extends r{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new Y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],Z.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],Z.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],Z.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],Z.prototype,"maxObservations",void 0),Z=Y=e([t("esri.layers.support.PurgeOptions")],Z);const $=Z,ee=s.getLogger("esri.layers.StreamLayer"),ie=V();let te=class extends(R(D(Q(z(q(x(L(M(I(F(T))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=o.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,i){return"string"==typeof e?{url:e,...i}:e}load(e){if(!("WebSocket"in a))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const i=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(n).then((()=>this._fetchService(i)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){W(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,i,t){const r=(i=i.layerDefinition||i).drawingInfo&&i.drawingInfo.renderer||void 0;if(r){const e=b(r,i,t)||void 0;return e||ee.error("Failed to create renderer",{rendererDefinition:i.drawingInfo.renderer,layer:this,context:t}),e}if(i.defaultSymbol)return i.types&&i.types.length?new y({defaultSymbol:re(i.defaultSymbol,i,t),field:i.typeIdField,uniqueValueInfos:i.types.map((e=>({id:e.id,symbol:re(e.symbol,e,t)})))}):new v({symbol:re(i.defaultSymbol,i,t)})}createPopupTemplate(e){return K(this,e)}createQuery(){const e=new J;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,i){if(!this.fields)return null;let t=null;return this.fields.some((i=>(i.name===e&&(t=i.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var i;if(this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:i}=await d(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=i}return this.sourceJSON={...null!=(i=this.sourceJSON)?i:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),W(this.renderer,this.fieldsIndex),U(this.timeInfo,this.fieldsIndex),H(this,{origin:"service"})}};e([i({type:String})],te.prototype,"copyright",void 0),e([i({readOnly:!0})],te.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],te.prototype,"definitionExpression",void 0),e([i({type:String})],te.prototype,"displayField",void 0),e([i({type:X})],te.prototype,"elevationInfo",void 0),e([i(P)],te.prototype,"featureReduction",void 0),e([i(ie.fields)],te.prototype,"fields",void 0),e([i(ie.fieldsIndex)],te.prototype,"fieldsIndex",void 0),e([i({type:m})],te.prototype,"geometryDefinition",void 0),e([i({type:h.apiValues,json:{read:{reader:h.read}}})],te.prototype,"geometryType",void 0),e([i(A)],te.prototype,"labelsVisible",void 0),e([i({type:[B],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:_},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],te.prototype,"labelingInfo",void 0),e([i(E)],te.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],te.prototype,"listMode",void 0),e([i({type:l})],te.prototype,"maxReconnectionAttempts",void 0),e([i({type:l})],te.prototype,"maxReconnectionInterval",void 0),e([i(N)],te.prototype,"maxScale",void 0),e([i(O)],te.prototype,"minScale",void 0),e([i({type:String})],te.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],te.prototype,"operationalLayerType",void 0),e([i(k)],te.prototype,"popupEnabled",void 0),e([i({type:j,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],te.prototype,"popupTemplate",void 0),e([i({type:$})],te.prototype,"purgeOptions",void 0),e([i({types:g,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:w,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],te.prototype,"renderer",null),e([f("service","renderer",["drawingInfo.renderer","defaultSymbol"]),f("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],te.prototype,"readRenderer",null),e([i(C)],te.prototype,"screenSizePerspectiveEnabled",void 0),e([i({type:o,json:{origins:{service:{read:{source:"spatialReference"}}}}})],te.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],te.prototype,"type",void 0),e([i(G)],te.prototype,"url",void 0),e([i({type:Number})],te.prototype,"updateInterval",void 0),e([i({type:String})],te.prototype,"webSocketUrl",void 0),te=e([t("esri.layers.StreamLayer")],te);const re=c({types:S}),se=te;export default se;