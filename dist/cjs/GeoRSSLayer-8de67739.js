'use strict';

const request = require('./MapView-1195e7f1.js');
require('./index-b630e408.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:request.a$15,key:"type",typeMap:{"simple-line":request.m$1},errorContext:"symbol"},k={base:request.a$15,key:"type",typeMap:{"picture-marker":request.n$3,"simple-marker":request.y},errorContext:"symbol"},_={base:request.a$15,key:"type",typeMap:{"simple-fill":request.S$1},errorContext:"symbol"};let w=class extends(request.i$23(request.n$21(request.y$9(request.w$5(request.s$21(request.l$3(request.b$9))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?request.pt(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const r=request.r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(request.b$7).then((()=>this._fetchService(r))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const s=this.spatialReference,{data:i}=await request.E(request.t$4.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:request.A$7(s)?void 0:null!=(t=s.wkid)?t:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return (null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};request.e([request.d()],w.prototype,"description",void 0),request.e([request.d()],w.prototype,"featureCollections",void 0),request.e([request.o$3("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),request.e([request.d({type:request.M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),request.e([request.d(request.j$13)],w.prototype,"id",void 0),request.e([request.d(request.c$24)],w.prototype,"legendEnabled",void 0),request.e([request.d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),request.e([request.d({type:["show","hide"]})],w.prototype,"listMode",void 0),request.e([request.d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),request.e([request.d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),request.e([request.d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),request.e([request.d(request.f$6)],w.prototype,"url",void 0),request.e([request.d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),request.e([request.d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=request.e([request.i("esri.layers.GeoRSSLayer")],w);const F=w;

exports.default = F;
