'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const Layer = require('./Layer-849337e0.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const RefreshableLayer = require('./RefreshableLayer-22c5fbbd.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const commonProperties = require('./commonProperties-75b954b3.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./asyncUtils-9f974032.js');
require('./PortalItem-42e06deb.js');
require('./TimeExtent-cdfe048b.js');
require('./lengthUtils-3475e67e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:unitUtils.a$4,key:"type",typeMap:{"simple-line":unitUtils.m$3},errorContext:"symbol"},k={base:unitUtils.a$4,key:"type",typeMap:{"picture-marker":unitUtils.n$3,"simple-marker":unitUtils.y$1},errorContext:"symbol"},_={base:unitUtils.a$4,key:"type",typeMap:{"simple-fill":unitUtils.S},errorContext:"symbol"};let w=class extends(BlendLayer.i(RefreshableLayer.n(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(Layer.l(Layer.b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?request.pt(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(r))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const s=this.spatialReference,{data:i}=await request.E(request.t$2.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:unitUtils.A$2(s)?void 0:null!=(t=s.wkid)?t:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return (null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};request.e([request.d()],w.prototype,"description",void 0),request.e([request.d()],w.prototype,"featureCollections",void 0),request.e([unitUtils.o("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),request.e([request.d({type:unitUtils.M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),request.e([request.d(commonProperties.j)],w.prototype,"id",void 0),request.e([request.d(commonProperties.c)],w.prototype,"legendEnabled",void 0),request.e([request.d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),request.e([request.d({type:["show","hide"]})],w.prototype,"listMode",void 0),request.e([request.d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),request.e([request.d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),request.e([request.d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),request.e([request.d(commonProperties.f)],w.prototype,"url",void 0),request.e([request.d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),request.e([request.d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=request.e([request.i("esri.layers.GeoRSSLayer")],w);const F=w;

exports.default = F;
