import { e, a as d, i as i$1, k as S$1, l as l$1, g as t, h as s$1, A as r, W as o, a8 as t$1 } from './jsxFactory-a3b6abde.js';
import { S, m, y as y$1, E as c$1, z as k$1, M, Z as h$1, av as E, g as o$1, k as r$1 } from './Graphic-08cda9ca.js';
import { b, l } from './MultiOriginJSONSupport-22dd2d29.js';
import { t as tn, H, J, O } from './projection-0b5fc15a.js';
import { v } from './normalizeUtils-359d2c6f.js';
import Ge from './FeatureLayer-6179c233.js';
import { c, a } from './GraphicsCollection-bd1f8010.js';
import { i } from './BlendLayer-1d9f1c9a.js';
import { s } from './ScaleRangeLayer-2f975321.js';
import { x } from './commonProperties-ad8badbd.js';
import { n as n$1 } from './objectIdUtils-0db9c3c6.js';
import { y as y$2 } from './OperationalLayer-26aa2ff7.js';
import { w } from './PortalLayer-8e73039a.js';
import { y } from './Field-416cada2.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './mat4-3acd3594.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './compilerUtils-a5ae094d.js';
import './lengthUtils-e1fe9a45.js';
import './diffUtils-a2ab1186.js';
import './jsonUtils-43243fe0.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './LRUCache-d4f192fd.js';
import './MemCache-dfacc658.js';
import './jsonUtils-66ddb072.js';
import './HeightModelInfo-5a7b6583.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './workers-82dadb41.js';
import './queryZScale-407bfc75.js';
import './zscale-6af4ef9a.js';
import './FeatureSet-d7537daf.js';
import './fieldType-7f2a820b.js';
import './APIKeyMixin-d87deecc.js';
import './ArcGISService-88c76264.js';
import './arcgisLayerUrl-a1acfaeb.js';
import './CustomParametersMixin-92abdfc3.js';
import './labelingInfo-af47848f.js';
import './jsonUtils-efaaa503.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-a92e5996.js';
import './Query-a20a7572.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-2f7497c3.js';
import './RefreshableLayer-5b977e98.js';
import './TemporalLayer-f3b14395.js';
import './TimeInfo-8ecf4da2.js';
import './FeatureType-ba8f07c3.js';
import './fieldProperties-f216bcfb.js';
import './FieldsIndex-87a4d86b.js';
import './LayerFloorInfo-a2a78182.js';
import './styleUtils-22872348.js';
import './asyncUtils-9a49e799.js';
import './TopFeaturesQuery-4aea53d6.js';
import './popupUtils-9dc503ca.js';
import './PortalItem-4dd070a8.js';

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
