import { e, a as d, i as i$1, I as S$1, M as l$1, l as t, C as s$1, r, _ as o, ar as t$1 } from './jsxFactory-ef3e403e.js';
import { S, Q as m, a2 as y$1, a3 as c$1, k as k$1, M, h as h$1, ag as E, o as o$1, d as r$1 } from './unitUtils-8a2b838a.js';
import { b, l } from './Layer-5a380094.js';
import { t as tn, H, J, O } from './projection-0d4d5278.js';
import { v } from './normalizeUtils-9f7b714c.js';
import Ge from './FeatureLayer-0ee96f86.js';
import { c, a } from './GraphicsCollection-93be4d65.js';
import { i } from './BlendLayer-81c24642.js';
import { s } from './ScaleRangeLayer-cb457ce8.js';
import { x } from './commonProperties-e22a7011.js';
import { n as n$1 } from './objectIdUtils-0db9c3c6.js';
import { y as y$2 } from './OperationalLayer-63ec0fa5.js';
import { w } from './PortalLayer-2d4eca15.js';
import { y } from './Field-c395cfbd.js';
import './index-5b4f4de1.js';
import './JSONSupport-a5eb98e7.js';
import './mat4-fe6f4784.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './compilerUtils-be3a2322.js';
import './lengthUtils-26f6142e.js';
import './diffUtils-1f52a3dd.js';
import './jsonUtils-9c0d7442.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './LRUCache-59f5b25d.js';
import './MemCache-bf2be364.js';
import './jsonUtils-595f52d3.js';
import './HeightModelInfo-2bd39a29.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './workers-f3905e14.js';
import './queryZScale-69ba1f2b.js';
import './zscale-5759f488.js';
import './FeatureSet-2b04e61f.js';
import './fieldType-d6b0953a.js';
import './APIKeyMixin-a3a0d40c.js';
import './ArcGISService-30368d07.js';
import './arcgisLayerUrl-06668ce7.js';
import './CustomParametersMixin-ca53bbdf.js';
import './labelingInfo-1b49455f.js';
import './jsonUtils-7ed7a510.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-fb7ed3e3.js';
import './Query-fd5e1b7b.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-d40ec16a.js';
import './RefreshableLayer-079cea19.js';
import './TemporalLayer-64ff2afe.js';
import './TimeInfo-e0d5d311.js';
import './FeatureType-6da2d9f8.js';
import './fieldProperties-cc8fc820.js';
import './FieldsIndex-d76382ca.js';
import './LayerFloorInfo-c765d601.js';
import './styleUtils-305b69b7.js';
import './asyncUtils-968a02e9.js';
import './TopFeaturesQuery-10871c16.js';
import './popupUtils-5accf1e0.js';
import './PortalItem-496c46b9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends(i(s(b))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new c,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1;}destroy(){this.removeAll(),this.graphics.destroy();}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r);}removeMany(r){this.graphics.removeMany(r);}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r);}};e([d({type:x})],n.prototype,"elevationInfo",void 0),e([d(a(c,"graphics"))],n.prototype,"graphics",void 0),e([d({type:["show","hide"]})],n.prototype,"listMode",void 0),e([d()],n.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],n.prototype,"type",void 0),e([d({constructOnly:!0})],n.prototype,"internal",void 0),n=e([i$1("esri.layers.GraphicsLayer")],n);const h=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function F(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new y({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),_=new y({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let P=class extends h{constructor(){super(...arguments),this.visibilityMode="inherited";}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer;})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null;}));}get sublayers(){return this.graphics}};e([d({readOnly:!0})],P.prototype,"sublayers",null),e([d()],P.prototype,"layer",void 0),e([d({readOnly:!0})],P.prototype,"visibilityMode",void 0),P=e([i$1("esri.layers.MapNotesLayer.MapNotesSublayer")],P);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new S).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new m).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new y$1).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new y$1).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new c$1).toJSON()}];let z=class extends(i(s(y$2(w(l(b)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=k$1.WGS84,this.sublayers=new S$1(k.map((e=>new P({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited";}readCapabilities(e,t,r){return {operations:{supportsMapNotesEditing:!F(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,o){if(!F(t))return null;const i=t.layers.map((e=>{const t=new Ge;return t.read(e,o),t}));return new S$1({items:i})}readLegacyfeatureCollectionJSON(e,t){return F(t)?l$1(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every((e=>!e.layerDefinition.extent)))return new M({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:k$1.WGS84});const r=k$1.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?M.fromJSON(r).union(e):e}),new M({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?k$1.fromJSON(t.layers[0].layerDefinition.spatialReference):k$1.WGS84}readSublayers(e,o,i){if(F(o))return null;const l=[];for(let r=0;r<o.layers.length;r++){var a;const{layerDefinition:e,featureSet:i}=o.layers[r],n=null!=(a=e.geometryType)?a:i.geometryType,s=k.find((t=>{var r,o,i;return n===t.geometryTypeJSON&&(null==(r=e.drawingInfo)||null==(o=r.renderer)||null==(i=o.symbol)?void 0:i.type)===t.identifyingSymbol.type}));if(s){const r=new P({id:s.layerId,title:e.name,layer:this,graphics:i.features.map((({geometry:e,symbol:r,attributes:o,popupInfo:i})=>h$1.fromJSON({attributes:o,geometry:e,symbol:r,popupTemplate:i})))});l.push(r);}}return new S$1(l)}writeSublayers(e,t$1,r$1,i){const{minScale:n,maxScale:p}=this;if(t(e))return;const y=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing){var m;if(y)null==i||null==(m=i.messages)||m.push(new s$1("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"));return}const u=[];let c=this.spatialReference.toJSON();e:for(const o of e)for(const e of o.graphics)if(r(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const o of k){const t=e.find((e=>o.layerId===e.id));this._writeMapNoteSublayer(u,t,o,n,p,c,i);}o("featureCollection.layers",u,t$1);}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=l$1(e),Object.assign(e,e.featureCollection)),super.read(e,t);}async beforeSave(){if(t(this.sublayers))return;let e=null;const t$1=[];for(const o of this.sublayers)for(const r$1 of o.graphics)if(r(r$1.geometry)){const o=r$1.geometry;e?E(o.spatialReference,e)||(tn(o.spatialReference,e)||H()||await J(),r$1.geometry=O(o,e)):e=o.spatialReference,t$1.push(r$1);}const r$1=await v(t$1.map((e=>e.geometry)));t$1.forEach(((e,t)=>e.geometry=r$1[t]));}_findSublayer(e){var t$1,r;return t(this.sublayers)?null:null!=(t$1=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t$1:null}_writeMapNoteSublayer(e,t$1,r,o,a,n,s){const p=[];if(!t(t$1)){for(const e of t$1.graphics)this._writeMapNote(p,e,r.geometryType,s);this._normalizeObjectIds(p,G),e.push({layerDefinition:{name:t$1.title,drawingInfo:{renderer:{type:"simple",symbol:l$1(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[G.toJSON(),_.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}});}}_writeMapNote(e,t$2,r$1,o){if(t(t$2))return;const{geometry:i,symbol:n,popupTemplate:s}=t$2;if(t(i))return;var y,m;if(i.type!==r$1)return void(null==o||null==(y=o.messages)||y.push(new t$1("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r$1}" layer`,{graphic:t$2})));if(t(n))return void(null==o||null==(m=o.messages)||m.push(new t$1("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t$2})));const u={attributes:{...t$2.attributes},geometry:i.toJSON(),symbol:n.toJSON()};r(s)&&(u.popupInfo=s.toJSON()),e.push(u);}_normalizeObjectIds(e,t){const r=t.name;let o=n$1(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r]);}}};e([d({readOnly:!0})],z.prototype,"capabilities",void 0),e([o$1(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),e([d({readOnly:!0})],z.prototype,"featureCollections",void 0),e([o$1(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),e([d({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),e([o$1(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),e([d({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),e([d({json:{write:!1}})],z.prototype,"fullExtent",void 0),e([o$1(["web-map","portal-item"],"fullExtent",["layers"])],z.prototype,"readFullExtent",null),e([d({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return {enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],z.prototype,"listMode",void 0),e([d({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),e([o$1(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),e([d({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),e([o$1(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),e([d({readOnly:!0})],z.prototype,"multipointLayer",null),e([d({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),e([d({readOnly:!0})],z.prototype,"pointLayer",null),e([d({readOnly:!0})],z.prototype,"polygonLayer",null),e([d({readOnly:!0})],z.prototype,"polylineLayer",null),e([d({type:k$1})],z.prototype,"spatialReference",void 0),e([o$1(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),e([d({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),e([o$1("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),e([r$1("web-map","sublayers")],z.prototype,"writeSublayers",null),e([d({readOnly:!0})],z.prototype,"textLayer",null),e([d()],z.prototype,"title",void 0),e([d({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=e([i$1("esri.layers.MapNotesLayer")],z);const B=z;

export default B;
