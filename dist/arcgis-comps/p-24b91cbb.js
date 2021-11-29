import{e,d as i,i as t,bj as s,T as r,j8 as a,iw as n,ix as o,iy as l,iz as d,cP as h,cQ as u,cR as p,bE as y,iB as c,cX as m,k as f,cB as v,b,cT as g,j9 as w,jU as j,jv as S,eT as I,iI as T,g$ as x,E as D,ja as P,db as R,iS as F,jb as L,o as E,hK as _,jc as A,iK as N,jd as k,j6 as O,bP as W,jV as z,jW as C,iE as G,bA as V,iL as q,iM as B,bH as K,jf as M,cW as Q,jX as U,jY as X,iT as H,r as Y}from"./p-5420851c.js";import"./p-53bb6ab4.js";var $;let J=$=class extends s{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new $({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],J.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],J.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],J.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],J.prototype,"maxObservations",void 0),J=$=e([t("esri.layers.support.PurgeOptions")],J);const Z=J,ee=r.getLogger("esri.layers.StreamLayer"),ie=H();let te=class extends(a(n(o(l(d(h(u(p(y(c(m))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new Z,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=f.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,i){return"string"==typeof e?{url:e,...i}:e}load(e){if(!("WebSocket"in v))return this.addResolvingPromise(Promise.reject(new b("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const i=Y(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(g).then((()=>this._fetchService(i)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){w(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,i,t){const s=(i=i.layerDefinition||i).drawingInfo&&i.drawingInfo.renderer||void 0;if(s){const e=j(s,i,t)||void 0;return e||ee.error("Failed to create renderer",{rendererDefinition:i.drawingInfo.renderer,layer:this,context:t}),e}if(i.defaultSymbol)return i.types&&i.types.length?new S({defaultSymbol:se(i.defaultSymbol,i,t),field:i.typeIdField,uniqueValueInfos:i.types.map((e=>({id:e.id,symbol:se(e.symbol,e,t)})))}):new I({symbol:se(i.defaultSymbol,i,t)})}createPopupTemplate(e){return T(this,e)}createQuery(){const e=new x;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,i){if(!this.fields)return null;let t=null;return this.fields.some((i=>(i.name===e&&(t=i.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var i;if(this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new b("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new b("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new b("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new b("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:i}=await D(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=i}return this.sourceJSON={...null!=(i=this.sourceJSON)?i:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),w(this.renderer,this.fieldsIndex),P(this.timeInfo,this.fieldsIndex),R(this,{origin:"service"})}};e([i({type:String})],te.prototype,"copyright",void 0),e([i({readOnly:!0})],te.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],te.prototype,"definitionExpression",void 0),e([i({type:String})],te.prototype,"displayField",void 0),e([i({type:F})],te.prototype,"elevationInfo",void 0),e([i(L)],te.prototype,"featureReduction",void 0),e([i(ie.fields)],te.prototype,"fields",void 0),e([i(ie.fieldsIndex)],te.prototype,"fieldsIndex",void 0),e([i({type:E})],te.prototype,"geometryDefinition",void 0),e([i({type:_.apiValues,json:{read:{reader:_.read}}})],te.prototype,"geometryType",void 0),e([i(A)],te.prototype,"labelsVisible",void 0),e([i({type:[N],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:k},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],te.prototype,"labelingInfo",void 0),e([i(O)],te.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],te.prototype,"listMode",void 0),e([i({type:W})],te.prototype,"maxReconnectionAttempts",void 0),e([i({type:W})],te.prototype,"maxReconnectionInterval",void 0),e([i(z)],te.prototype,"maxScale",void 0),e([i(C)],te.prototype,"minScale",void 0),e([i({type:String})],te.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],te.prototype,"operationalLayerType",void 0),e([i(G)],te.prototype,"popupEnabled",void 0),e([i({type:V,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],te.prototype,"popupTemplate",void 0),e([i({type:Z})],te.prototype,"purgeOptions",void 0),e([i({types:q,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:B,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],te.prototype,"renderer",null),e([K("service","renderer",["drawingInfo.renderer","defaultSymbol"]),K("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],te.prototype,"readRenderer",null),e([i(M)],te.prototype,"screenSizePerspectiveEnabled",void 0),e([i({type:f,json:{origins:{service:{read:{source:"spatialReference"}}}}})],te.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],te.prototype,"type",void 0),e([i(Q)],te.prototype,"url",void 0),e([i({type:Number})],te.prototype,"updateInterval",void 0),e([i({type:String})],te.prototype,"webSocketUrl",void 0),te=e([t("esri.layers.StreamLayer")],te);const se=U({types:X}),re=te;export default re;