import { e, d, i as i$1, E as S$1, H as l$1, t, m as s$1, r, Q as o, b2 as t$1 } from './messageBundle-8a146a9b.js';
import { Y as S, ap as m, ax as y$1, ay as c$1, k as k$1, M, h as h$1, o as o$1, d as r$1, a2 as E } from './unitUtils-c707ba3c.js';
import { b, l } from './Layer-455faab4.js';
import { t as tn, H, J, O } from './projection-b812ba08.js';
import { v } from './normalizeUtils-c91b4ce9.js';
import Ge from './FeatureLayer-52da5e2e.js';
import { c, a } from './GraphicsCollection-d1498daf.js';
import { i } from './BlendLayer-286c847c.js';
import { s } from './ScaleRangeLayer-aeac5429.js';
import { x } from './commonProperties-0e370622.js';
import { n as n$1 } from './objectIdUtils-0db9c3c6.js';
import { y as y$2 } from './OperationalLayer-52601c7c.js';
import { w } from './PortalLayer-faa3179f.js';
import { y } from './Field-fbfaf20d.js';
import './index-41925fe8.js';
import './JSONSupport-4e29e63d.js';
import './mat4-1ee7ce2f.js';
import './UniqueValueRenderer-75e84d49.js';
import './VisualVariablesMixin-66f084f4.js';
import './colorRamps-b0e37c54.js';
import './ColorStop-ff4a3943.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-3ac464e8.js';
import './lengthUtils-a6878787.js';
import './diffUtils-14ca3884.js';
import './jsonUtils-7105a0de.js';
import './styleUtils-5fe9231e.js';
import './DictionaryRenderer-4a77ed62.js';
import './LRUCache-b68d19e5.js';
import './MemCache-73bb45e2.js';
import './jsonUtils-f2130780.js';
import './HeightModelInfo-899d5d07.js';
import './HandleOwner-6cdc634d.js';
import './reactiveUtils-a5f838c7.js';
import './workers-c79250a3.js';
import './queryZScale-f92acabb.js';
import './zscale-5703857d.js';
import './FeatureSet-e481fbb3.js';
import './fieldType-f80f0b3d.js';
import './APIKeyMixin-f2be3dfc.js';
import './ArcGISService-adf08a63.js';
import './arcgisLayerUrl-30839db3.js';
import './CustomParametersMixin-05dda462.js';
import './labelingInfo-136b2123.js';
import './jsonUtils-433a912a.js';
import './TimeExtent-16986fe0.js';
import './Query-71270a43.js';
import './LabelClass-080f9590.js';
import './labelUtils-17428bb2.js';
import './defaultsJSON-f90363d8.js';
import './OrderedLayer-1aa033f7.js';
import './RefreshableLayer-f326088d.js';
import './TemporalLayer-f8f255e9.js';
import './TimeInfo-3ee9ad62.js';
import './FeatureType-30442694.js';
import './fieldProperties-530951df.js';
import './FieldsIndex-041474f9.js';
import './LayerFloorInfo-e1a08643.js';
import './styleUtils-32c9f97f.js';
import './asyncUtils-c98101f9.js';
import './TopFeaturesQuery-5a679b50.js';
import './popupUtils-b5ee0759.js';
import './PortalItem-3f93baa8.js';

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
