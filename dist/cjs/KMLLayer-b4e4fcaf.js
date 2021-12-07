'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const CollectionFlattener = require('./CollectionFlattener-bc4cde45.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const Portal = require('./Portal-8d16604d.js');
const kmlUtils = require('./kmlUtils-c9aefbb9.js');
require('./index-fde8502c.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./Identifiable-a4f50f85.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./mat4-f68486bc.js');
require('./common-41a349f2.js');
require('./TimeExtent-8b558884.js');
require('./persistableUrlUtils-c611d652.js');
require('./ElevationInfo-d3e3d64f.js');
require('./opacityUtils-f2e4b347.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./PopupTemplate-a0b855f8.js');
require('./enumeration-f235fe07.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./mathUtils-af6066f0.js');
require('./jsonUtils-fc4080da.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./Graphic-0aff6059.js');
require('./jsonUtils-b6068079.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./FeatureSet-8efc5965.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var j;let S=j=class extends(request.n$2.EventedMixin(request.i$5(Portal.m))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){request.a(this,"networkLink").then((()=>request.d$2(this,"visible"))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=request.r(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=kmlUtils.j(e.sublayers);this.fullExtent=request.M.fromJSON(t),this.sourceJSON=e;const s=request.b(request.S.ofType(j),kmlUtils.S(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return request.b(request.S.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return kmlUtils.g(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>kmlUtils.d(e.data)))}};request.e([request.d()],S.prototype,"description",void 0),request.e([request.d()],S.prototype,"id",void 0),request.e([request.d({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),request.e([request.d({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),request.e([request.d({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),request.e([request.c("sublayers")],S.prototype,"castSublayers",null),request.e([request.d({value:null,json:{read:{source:"name",reader:e=>request.u$13(e)}}})],S.prototype,"title",void 0),request.e([request.d({value:!0})],S.prototype,"visible",null),request.e([request.o$2("visible",["visibility"])],S.prototype,"readVisible",null),request.e([request.d()],S.prototype,"sourceJSON",void 0),request.e([request.d({value:null})],S.prototype,"layer",null),request.e([request.d({type:request.M})],S.prototype,"fullExtent",void 0),S=j=request.e([request.i("esri.layers.support.KMLSublayer")],S);const k=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=["kml","xml"];let E=class extends(BlendLayer.i(RefreshableLayer.n(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(MultiOriginJSONSupport.l(Layer.b))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new CollectionFlattener.p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=request.k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")));}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return kmlUtils.S(k,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?request.pt(this.url,w)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(request.b$1).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:kmlUtils.g(this.url,this.outSpatialReference,this.refreshInterval,e))),t=kmlUtils.d(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;request.r(this.extent)&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const s of t.sublayers.items)r(s),s.visible&&s.fullExtent&&(request.r(e)?e.union(s.fullExtent):e=s.fullExtent.clone());};return r(this),e}};request.e([request.d({readOnly:!0})],E.prototype,"allSublayers",void 0),request.e([request.d({type:request.k})],E.prototype,"outSpatialReference",void 0),request.e([request.d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),request.e([request.d({type:["KML"]})],E.prototype,"operationalLayerType",void 0),request.e([request.d({})],E.prototype,"resourceInfo",void 0),request.e([request.d({type:request.S.ofType(k),json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),request.e([request.o$2(["web-map","portal-item"],"sublayers",["visibleFolders"])],E.prototype,"readSublayersFromItemOrWebMap",null),request.e([request.o$2("service","sublayers",["sublayers"])],E.prototype,"readSublayers",null),request.e([request.r$2("sublayers")],E.prototype,"writeSublayers",null),request.e([request.d({readOnly:!0,json:{read:!1}})],E.prototype,"type",void 0),request.e([request.d({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],E.prototype,"title",null),request.e([request.d(OperationalLayer.f)],E.prototype,"url",void 0),request.e([request.d({readOnly:!0})],E.prototype,"visibleSublayers",null),request.e([request.d({type:request.M})],E.prototype,"extent",void 0),request.e([request.d()],E.prototype,"fullExtent",null),E=request.e([request.i("esri.layers.KMLLayer")],E);const F=E;

exports.default = F;
