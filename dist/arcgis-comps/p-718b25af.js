import{e,d as i,i as t,a6 as s,s as r,ix as a,i0 as n,iy as o,i1 as l,i2 as d,e5 as u,e6 as h,e7 as p,aG as y,iw as c,ec as m,ad as f,bH as v,a7 as g,cY as w,iz as b,jr as S,iY as I,dB as j,i5 as T,gh as x,H as D,iA as F,bI as R,i6 as L,iB as P,a8 as _,h3 as A,iC as E,iD as N,iE as k,iu as G,aT as O,js as C,jt as z,i8 as H,ay as W,iG as q,i7 as B,aL as V,iH as Y,eb as M,ju as Q,jv as U,i9 as J,W as K}from"./p-7b6f6c18.js";import"./p-227a5838.js";var X;let Z=X=class extends s{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new X({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],Z.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],Z.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],Z.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],Z.prototype,"maxObservations",void 0),Z=X=e([t("esri.layers.support.PurgeOptions")],Z);const $=Z,ee=r.getLogger("esri.layers.StreamLayer"),ie=J();let te=class extends(a(n(o(l(d(u(h(p(y(c(m))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=f.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,i){return"string"==typeof e?{url:e,...i}:e}load(e){if(!("WebSocket"in v))return this.addResolvingPromise(Promise.reject(new g("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const i=K(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(w).then((()=>this._fetchService(i)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,i,t){const s=(i=i.layerDefinition||i).drawingInfo&&i.drawingInfo.renderer||void 0;if(s){const e=S(s,i,t)||void 0;return e||ee.error("Failed to create renderer",{rendererDefinition:i.drawingInfo.renderer,layer:this,context:t}),e}if(i.defaultSymbol)return i.types&&i.types.length?new I({defaultSymbol:se(i.defaultSymbol,i,t),field:i.typeIdField,uniqueValueInfos:i.types.map((e=>({id:e.id,symbol:se(e.symbol,e,t)})))}):new j({symbol:se(i.defaultSymbol,i,t)})}createPopupTemplate(e){return T(this,e)}createQuery(){const e=new x;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,i){if(!this.fields)return null;let t=null;return this.fields.some((i=>(i.name===e&&(t=i.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var i;if(this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new g("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new g("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new g("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new g("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:i}=await D(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=i}return this.sourceJSON={...null!=(i=this.sourceJSON)?i:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),b(this.renderer,this.fieldsIndex),F(this.timeInfo,this.fieldsIndex),R(this,{origin:"service"})}};e([i({type:String})],te.prototype,"copyright",void 0),e([i({readOnly:!0})],te.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],te.prototype,"definitionExpression",void 0),e([i({type:String})],te.prototype,"displayField",void 0),e([i({type:L})],te.prototype,"elevationInfo",void 0),e([i(P)],te.prototype,"featureReduction",void 0),e([i(ie.fields)],te.prototype,"fields",void 0),e([i(ie.fieldsIndex)],te.prototype,"fieldsIndex",void 0),e([i({type:_})],te.prototype,"geometryDefinition",void 0),e([i({type:A.apiValues,json:{read:{reader:A.read}}})],te.prototype,"geometryType",void 0),e([i(E)],te.prototype,"labelsVisible",void 0),e([i({type:[N],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:k},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],te.prototype,"labelingInfo",void 0),e([i(G)],te.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],te.prototype,"listMode",void 0),e([i({type:O})],te.prototype,"maxReconnectionAttempts",void 0),e([i({type:O})],te.prototype,"maxReconnectionInterval",void 0),e([i(C)],te.prototype,"maxScale",void 0),e([i(z)],te.prototype,"minScale",void 0),e([i({type:String})],te.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],te.prototype,"operationalLayerType",void 0),e([i(H)],te.prototype,"popupEnabled",void 0),e([i({type:W,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],te.prototype,"popupTemplate",void 0),e([i({type:$})],te.prototype,"purgeOptions",void 0),e([i({types:q,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:B,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],te.prototype,"renderer",null),e([V("service","renderer",["drawingInfo.renderer","defaultSymbol"]),V("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],te.prototype,"readRenderer",null),e([i(Y)],te.prototype,"screenSizePerspectiveEnabled",void 0),e([i({type:f,json:{origins:{service:{read:{source:"spatialReference"}}}}})],te.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],te.prototype,"type",void 0),e([i(M)],te.prototype,"url",void 0),e([i({type:Number})],te.prototype,"updateInterval",void 0),e([i({type:String})],te.prototype,"webSocketUrl",void 0),te=e([t("esri.layers.StreamLayer")],te);const se=Q({types:U}),re=te;export default re;