import { a3 as o, r, c as e, e as e$1, b as d$2, i as i$1 } from './cast-e5ea2533.js';
import { d as d$1, c, i } from './geometry-160ffbb5.js';
import { h as h$1 } from './Graphic-79de2095.js';
import { a } from './JSONSupport-8dda8bae.js';
import { k, o as o$1, r as r$1 } from './Portal-f1457cb4.js';
import { y } from './Field-67832b5b.js';
import './Polyline-56152656.js';
import './PopupTemplate-87ca9924.js';
import './Collection-ac20f1a1.js';
import './opacityUtils-5755cb64.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './Identifiable-0fb3fc58.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './fieldType-7f6b02ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=new o({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let d=class extends a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null;}readFeatures(e,t){const o=k.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],p=h$1.fromJSON(t),a=t.geometry&&t.geometry.spatialReference;r(p.geometry)&&!a&&(p.geometry.spatialReference=o),s.push(p);}return s}writeGeometryType(e,t,r$1,o){if(e)return void h.write(e,t,r$1,o);const{features:s}=this;if(s)for(const i of s)if(i&&r(i.geometry))return void h.write(i.geometry.type,t,r$1,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=d$1(e);return !r&&t.spatialReference&&(o.spatialReference=k.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r$1}=this;if(r$1)for(const o of r$1)if(o&&r(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry;}}return t}quantize(e$1){const{scale:[t,r],translate:[o,s]}=e$1,n=e=>Math.round((e-o)/t),p=e=>Math.round((s-e)/r),a=this.features,l=this._getQuantizationFunction(this.geometryType,n,p);for(let y=0,m=a.length;y<m;y++)l(e(a[y].geometry))||(a.splice(y,1),y--,m--);return this.transform=e$1,this}unquantize(){const{geometryType:e,features:t,transform:r$1}=this;if(!r$1)return this;const{translate:[o,s],scale:[i,p]}=r$1,a=e=>e*i+o,l=e=>s-e*p,y=this._getHydrationFunction(e,a,l);for(const{geometry:m}of t)r(m)&&y(m);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,p=e.length;i<p;i++){const p=e[i];if(i>0){const e=t(p[0]),i=r(p[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i);}else o=t(p[0]),s=r(p[1]),n.push([o,s]);}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return "point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i);}return s.length>0?(c(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return "point"===e?e=>{e.x=t(e.x),e.y=r(e.y);}:"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];for(let o=0,i=e.length;o<i;o++){const i=e[o];o>0?(s+=i[0],n+=i[1]):(s=i[0],n=i[1]),i[0]=t(s),i[1]=r(n);}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax);}:"multipoint"===e?e=>{const o=e.points;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];i>0?(s+=e[0],n+=e[1]):(s=e[0],n=e[1]),e[0]=t(s),e[1]=r(n);}}:void 0}};e$1([d$2({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"exceededTransferLimit",void 0),e$1([d$2({type:[h$1],json:{write:!0}})],d.prototype,"features",void 0),e$1([o$1("features")],d.prototype,"readFeatures",null),e$1([d$2({type:[y],json:{write:!0}})],d.prototype,"fields",void 0),e$1([d$2({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],d.prototype,"geometryType",void 0),e$1([r$1("geometryType")],d.prototype,"writeGeometryType",null),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasM",void 0),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasZ",void 0),e$1([d$2({types:i,json:{write:!0}})],d.prototype,"queryGeometry",void 0),e$1([o$1("queryGeometry")],d.prototype,"readQueryGeometry",null),e$1([d$2({type:k,json:{write:!0}})],d.prototype,"spatialReference",void 0),e$1([r$1("spatialReference")],d.prototype,"writeSpatialReference",null),e$1([d$2({json:{write:!0}})],d.prototype,"transform",void 0),d=e$1([i$1("esri.rest.support.FeatureSet")],d),d.prototype.toJSON.isDefaultToJSON=!0;const g=d;

export default g;
