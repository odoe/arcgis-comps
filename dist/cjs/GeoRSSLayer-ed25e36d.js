'use strict';

const request = require('./messageBundle-8be88d04.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const Layer = require('./Layer-31cde361.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const RefreshableLayer = require('./RefreshableLayer-487bd7b3.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const _Symbol = require('./Symbol-f0556e23.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./Identifiable-a4f50f85.js');
require('./mat4-f68486bc.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:_Symbol.a,key:"type",typeMap:{"simple-line":SimpleLineSymbol.m},errorContext:"symbol"},k={base:_Symbol.a,key:"type",typeMap:{"picture-marker":SimpleLineSymbol.n,"simple-marker":SimpleLineSymbol.y},errorContext:"symbol"},_={base:_Symbol.a,key:"type",typeMap:{"simple-fill":SimpleLineSymbol.S},errorContext:"symbol"};let w=class extends(BlendLayer.i(RefreshableLayer.n(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(MultiOriginJSONSupport.l(Layer.b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?request.pt(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(r))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const s=this.spatialReference,{data:i}=await request.E(request.t.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:request.A$4(s)?void 0:null!=(t=s.wkid)?t:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return (null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};request.e([request.d()],w.prototype,"description",void 0),request.e([request.d()],w.prototype,"featureCollections",void 0),request.e([request.o$2("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),request.e([request.d({type:request.M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),request.e([request.d(OperationalLayer.j)],w.prototype,"id",void 0),request.e([request.d(OperationalLayer.c)],w.prototype,"legendEnabled",void 0),request.e([request.d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),request.e([request.d({type:["show","hide"]})],w.prototype,"listMode",void 0),request.e([request.d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),request.e([request.d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),request.e([request.d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),request.e([request.d(OperationalLayer.f)],w.prototype,"url",void 0),request.e([request.d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),request.e([request.d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=request.e([request.i("esri.layers.GeoRSSLayer")],w);const F=w;

exports.default = F;
