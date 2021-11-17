'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const CollectionFlattener = require('./CollectionFlattener-3dadfe6b.js');
const Layer = require('./Layer-849337e0.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const RefreshableLayer = require('./RefreshableLayer-22c5fbbd.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const kmlUtils = require('./kmlUtils-f95e4024.js');
require('./index-57f2cfbb.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./asyncUtils-9f974032.js');
require('./PortalItem-42e06deb.js');
require('./TimeExtent-cdfe048b.js');
require('./lengthUtils-3475e67e.js');
require('./jsonUtils-fa6e9edd.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./FeatureSet-2e9b97a5.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var j;let S=j=class extends(request.n$1.EventedMixin(JSONSupport.i(unitUtils.m))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){request.a$3(this,"networkLink").then((()=>request.d$3(this,"visible"))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=request.r(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=kmlUtils.j(e.sublayers);this.fullExtent=unitUtils.M.fromJSON(t),this.sourceJSON=e;const s=request.b(request.S$1.ofType(j),kmlUtils.S(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return request.b(request.S$1.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return kmlUtils.g(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>kmlUtils.d(e.data)))}};request.e([request.d()],S.prototype,"description",void 0),request.e([request.d()],S.prototype,"id",void 0),request.e([request.d({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),request.e([request.d({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),request.e([request.d({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),request.e([request.c("sublayers")],S.prototype,"castSublayers",null),request.e([request.d({value:null,json:{read:{source:"name",reader:e=>request.u$9(e)}}})],S.prototype,"title",void 0),request.e([request.d({value:!0})],S.prototype,"visible",null),request.e([unitUtils.o("visible",["visibility"])],S.prototype,"readVisible",null),request.e([request.d()],S.prototype,"sourceJSON",void 0),request.e([request.d({value:null})],S.prototype,"layer",null),request.e([request.d({type:unitUtils.M})],S.prototype,"fullExtent",void 0),S=j=request.e([request.i("esri.layers.support.KMLSublayer")],S);const k=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=["kml","xml"];let E=class extends(BlendLayer.i(RefreshableLayer.n(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(Layer.l(Layer.b))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new CollectionFlattener.p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=unitUtils.k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")));}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return kmlUtils.S(k,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?request.pt(this.url,w)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:kmlUtils.g(this.url,this.outSpatialReference,this.refreshInterval,e))),t=kmlUtils.d(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;request.r(this.extent)&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const s of t.sublayers.items)r(s),s.visible&&s.fullExtent&&(request.r(e)?e.union(s.fullExtent):e=s.fullExtent.clone());};return r(this),e}};request.e([request.d({readOnly:!0})],E.prototype,"allSublayers",void 0),request.e([request.d({type:unitUtils.k})],E.prototype,"outSpatialReference",void 0),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),request.e([request.d({type:["KML"]})],E.prototype,"operationalLayerType",void 0),request.e([request.d({})],E.prototype,"resourceInfo",void 0),request.e([request.d({type:request.S$1.ofType(k),json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),request.e([unitUtils.o(["web-map","portal-item"],"sublayers",["visibleFolders"])],E.prototype,"readSublayersFromItemOrWebMap",null),request.e([unitUtils.o("service","sublayers",["sublayers"])],E.prototype,"readSublayers",null),request.e([unitUtils.r$1("sublayers")],E.prototype,"writeSublayers",null),request.e([request.d({readOnly:!0,json:{read:!1}})],E.prototype,"type",void 0),request.e([request.d({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],E.prototype,"title",null),request.e([request.d(commonProperties.f)],E.prototype,"url",void 0),request.e([request.d({readOnly:!0})],E.prototype,"visibleSublayers",null),request.e([request.d({type:unitUtils.M})],E.prototype,"extent",void 0),request.e([request.d()],E.prototype,"fullExtent",null),E=request.e([request.i("esri.layers.KMLLayer")],E);const F=E;

exports.default = F;
