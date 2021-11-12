import { e, a as d, i as i$1, I as S$1, M as l$1, l as t, C as s$1, r, a1 as o, ah as t$1 } from './jsxFactory-c96bb45c.js';
import { S, s as m, y as y$1, U as c$1, J as k$1, M, h as h$1, aF as E, v as o$1, f as r$1 } from './Graphic-6c72131a.js';
import { b, l } from './MultiOriginJSONSupport-f6506b2f.js';
import { t as tn, H, J, O } from './projection-32646abc.js';
import { v } from './normalizeUtils-1fd7c0f1.js';
import Ge from './FeatureLayer-9672bbd9.js';
import { c, a } from './GraphicsCollection-f199ec2b.js';
import { i } from './BlendLayer-70766503.js';
import { s } from './ScaleRangeLayer-99043c54.js';
import { x } from './commonProperties-fa43a2ed.js';
import { n as n$1 } from './objectIdUtils-0db9c3c6.js';
import { y as y$2 } from './OperationalLayer-b04e38aa.js';
import { w } from './PortalLayer-df690c5a.js';
import { y } from './Field-2b6029f8.js';
import './index-921bd636.js';
import './JSONSupport-5a9f556a.js';
import './unitUtils-b25ae8cb.js';
import './mat4-ef633c62.js';
import './UniqueValueRenderer-f2af8ece.js';
import './VisualVariablesMixin-bafacb39.js';
import './colorRamps-693d6433.js';
import './ColorStop-fb26d745.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './compilerUtils-128fda14.js';
import './lengthUtils-7a485aa7.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './DictionaryRenderer-78308a28.js';
import './LRUCache-81490262.js';
import './MemCache-e219bcfb.js';
import './jsonUtils-580ae154.js';
import './HeightModelInfo-a87824be.js';
import './HandleOwner-6fdf8ee8.js';
import './reactiveUtils-4ba1fb4b.js';
import './workers-5ad649f9.js';
import './queryZScale-0ff40b9b.js';
import './zscale-cec9b507.js';
import './FeatureSet-22102ca4.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './APIKeyMixin-4866fda4.js';
import './ArcGISService-4cc51fbf.js';
import './arcgisLayerUrl-2aeded02.js';
import './CustomParametersMixin-89544c0d.js';
import './labelingInfo-683f3119.js';
import './jsonUtils-352e8eb7.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-1bc95591.js';
import './Query-792b142d.js';
import './LabelClass-65776e47.js';
import './labelUtils-45e9126f.js';
import './defaultsJSON-53258912.js';
import './OrderedLayer-8b694b55.js';
import './RefreshableLayer-702beb88.js';
import './TemporalLayer-b41e8e6e.js';
import './TimeInfo-9a5e9434.js';
import './FeatureType-8cae0f8f.js';
import './fieldProperties-b0c243c7.js';
import './FieldsIndex-56cf15de.js';
import './LayerFloorInfo-2c65601c.js';
import './styleUtils-e2196c57.js';
import './asyncUtils-dc4bd819.js';
import './AttachmentQuery-42d07544.js';
import './TopFeaturesQuery-31a64765.js';
import './popupUtils-4957d444.js';
import './PortalItem-209a51a1.js';

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
