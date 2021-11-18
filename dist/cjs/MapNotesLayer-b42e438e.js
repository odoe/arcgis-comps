'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const Layer = require('./Layer-849337e0.js');
const projection = require('./projection-e04cb9d0.js');
const normalizeUtils = require('./normalizeUtils-b6002011.js');
const FeatureLayer = require('./FeatureLayer-47713b0f.js');
const GraphicsCollection = require('./GraphicsCollection-761d7a93.js');
const BlendLayer = require('./BlendLayer-7e864068.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-52589af6.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const objectIdUtils = require('./objectIdUtils-d5a9efb9.js');
const OperationalLayer = require('./OperationalLayer-f89b9d70.js');
const PortalLayer = require('./PortalLayer-19d79370.js');
const Field = require('./Field-9f319836.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./mat4-1439266d.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./MemCache-1ae72e1e.js');
require('./jsonUtils-fa6e9edd.js');
require('./HeightModelInfo-3363f0e0.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./workers-1668d5a8.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./FeatureSet-2e9b97a5.js');
require('./fieldType-a54c379b.js');
require('./APIKeyMixin-f99c03a8.js');
require('./ArcGISService-a170c777.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./labelingInfo-b4dde768.js');
require('./jsonUtils-4461cf25.js');
require('./TimeExtent-cdfe048b.js');
require('./Query-35be2e91.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./OrderedLayer-1ea23e5d.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./FeatureType-5a860566.js');
require('./fieldProperties-f6acb896.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./asyncUtils-9f974032.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./popupUtils-180c3a12.js');
require('./PortalItem-42e06deb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends(BlendLayer.i(ScaleRangeLayer.s(Layer.b))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new GraphicsCollection.c,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1;}destroy(){this.removeAll(),this.graphics.destroy();}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r);}removeMany(r){this.graphics.removeMany(r);}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r);}};request.e([request.d({type:commonProperties.x})],n.prototype,"elevationInfo",void 0),request.e([request.d(GraphicsCollection.a(GraphicsCollection.c,"graphics"))],n.prototype,"graphics",void 0),request.e([request.d({type:["show","hide"]})],n.prototype,"listMode",void 0),request.e([request.d()],n.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({readOnly:!0})],n.prototype,"type",void 0),request.e([request.d({constructOnly:!0})],n.prototype,"internal",void 0),n=request.e([request.i("esri.layers.GraphicsLayer")],n);const h=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function F(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new Field.y({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),_=new Field.y({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let P=class extends h{constructor(){super(...arguments),this.visibilityMode="inherited";}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer;})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null;}));}get sublayers(){return this.graphics}};request.e([request.d({readOnly:!0})],P.prototype,"sublayers",null),request.e([request.d()],P.prototype,"layer",void 0),request.e([request.d({readOnly:!0})],P.prototype,"visibilityMode",void 0),P=request.e([request.i("esri.layers.MapNotesLayer.MapNotesSublayer")],P);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new unitUtils.S).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new unitUtils.m$3).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new unitUtils.y$1).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new unitUtils.y$1).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new unitUtils.c$8).toJSON()}];let z=class extends(BlendLayer.i(ScaleRangeLayer.s(OperationalLayer.y(PortalLayer.w(Layer.l(Layer.b)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=unitUtils.k.WGS84,this.sublayers=new request.S$1(k.map((e=>new P({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited";}readCapabilities(e,t,r){return {operations:{supportsMapNotesEditing:!F(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,o){if(!F(t))return null;const i=t.layers.map((e=>{const t=new FeatureLayer['default'];return t.read(e,o),t}));return new request.S$1({items:i})}readLegacyfeatureCollectionJSON(e,t){return F(t)?request.l$1(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every((e=>!e.layerDefinition.extent)))return new unitUtils.M({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:unitUtils.k.WGS84});const r=unitUtils.k.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?unitUtils.M.fromJSON(r).union(e):e}),new unitUtils.M({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?unitUtils.k.fromJSON(t.layers[0].layerDefinition.spatialReference):unitUtils.k.WGS84}readSublayers(e,o,i){if(F(o))return null;const l=[];for(let r=0;r<o.layers.length;r++){var a;const{layerDefinition:e,featureSet:i}=o.layers[r],n=null!=(a=e.geometryType)?a:i.geometryType,s=k.find((t=>{var r,o,i;return n===t.geometryTypeJSON&&(null==(r=e.drawingInfo)||null==(o=r.renderer)||null==(i=o.symbol)?void 0:i.type)===t.identifyingSymbol.type}));if(s){const r=new P({id:s.layerId,title:e.name,layer:this,graphics:i.features.map((({geometry:e,symbol:r,attributes:o,popupInfo:i})=>unitUtils.h.fromJSON({attributes:o,geometry:e,symbol:r,popupTemplate:i})))});l.push(r);}}return new request.S$1(l)}writeSublayers(e,t,r,i){const{minScale:n,maxScale:p}=this;if(request.t(e))return;const y=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing){var m;if(y)null==i||null==(m=i.messages)||m.push(new request.s$1("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"));return}const u=[];let c=this.spatialReference.toJSON();e:for(const o of e)for(const e of o.graphics)if(request.r(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const o of k){const t=e.find((e=>o.layerId===e.id));this._writeMapNoteSublayer(u,t,o,n,p,c,i);}request.o$2("featureCollection.layers",u,t);}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=request.l$1(e),Object.assign(e,e.featureCollection)),super.read(e,t);}async beforeSave(){if(request.t(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(request.r(r.geometry)){const o=r.geometry;e?unitUtils.E(o.spatialReference,e)||(projection.tn(o.spatialReference,e)||projection.H()||await projection.J(),r.geometry=projection.O(o,e)):e=o.spatialReference,t.push(r);}const r=await normalizeUtils.v(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]));}_findSublayer(e){var t,r;return request.t(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,a,n,s){const p=[];if(!request.t(t)){for(const e of t.graphics)this._writeMapNote(p,e,r.geometryType,s);this._normalizeObjectIds(p,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:request.l$1(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[G.toJSON(),_.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}});}}_writeMapNote(e,t,r,o){if(request.t(t))return;const{geometry:i,symbol:n,popupTemplate:s}=t;if(request.t(i))return;var y,m;if(i.type!==r)return void(null==o||null==(y=o.messages)||y.push(new request.t$6("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(request.t(n))return void(null==o||null==(m=o.messages)||m.push(new request.t$6("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const u={attributes:{...t.attributes},geometry:i.toJSON(),symbol:n.toJSON()};request.r(s)&&(u.popupInfo=s.toJSON()),e.push(u);}_normalizeObjectIds(e,t){const r=t.name;let o=objectIdUtils.n(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r]);}}};request.e([request.d({readOnly:!0})],z.prototype,"capabilities",void 0),request.e([unitUtils.o(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),request.e([request.d({readOnly:!0})],z.prototype,"featureCollections",void 0),request.e([unitUtils.o(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),request.e([request.d({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),request.e([unitUtils.o(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),request.e([request.d({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),request.e([request.d({json:{write:!1}})],z.prototype,"fullExtent",void 0),request.e([unitUtils.o(["web-map","portal-item"],"fullExtent",["layers"])],z.prototype,"readFullExtent",null),request.e([request.d({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return {enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),request.e([request.d({type:["show","hide"]})],z.prototype,"listMode",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),request.e([unitUtils.o(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),request.e([request.d({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),request.e([unitUtils.o(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),request.e([request.d({readOnly:!0})],z.prototype,"multipointLayer",null),request.e([request.d({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),request.e([request.d({readOnly:!0})],z.prototype,"pointLayer",null),request.e([request.d({readOnly:!0})],z.prototype,"polygonLayer",null),request.e([request.d({readOnly:!0})],z.prototype,"polylineLayer",null),request.e([request.d({type:unitUtils.k})],z.prototype,"spatialReference",void 0),request.e([unitUtils.o(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),request.e([request.d({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),request.e([unitUtils.o("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),request.e([unitUtils.r$1("web-map","sublayers")],z.prototype,"writeSublayers",null),request.e([request.d({readOnly:!0})],z.prototype,"textLayer",null),request.e([request.d()],z.prototype,"title",void 0),request.e([request.d({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=request.e([request.i("esri.layers.MapNotesLayer")],z);const B=z;

exports.default = B;
