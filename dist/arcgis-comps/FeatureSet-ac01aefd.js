import { j as o, A as r, y as e, e as e$1, a as d$2, i as i$1 } from './jsxFactory-b8b7429b.js';
import { z as k, Z as h$1, aq as d$1, br as c, g as o$1, k as r$1, ap as i } from './Graphic-75d1efd2.js';
import { a } from './JSONSupport-15eefdaf.js';
import { y } from './Field-3662c57d.js';
import './index-921bd636.js';
import './fieldType-1c6ed2e9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=new o({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let d=class extends a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null;}readFeatures(e,t){const o=k.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],p=h$1.fromJSON(t),a=t.geometry&&t.geometry.spatialReference;r(p.geometry)&&!a&&(p.geometry.spatialReference=o),s.push(p);}return s}writeGeometryType(e,t,r$1,o){if(e)return void h.write(e,t,r$1,o);const{features:s}=this;if(s)for(const i of s)if(i&&r(i.geometry))return void h.write(i.geometry.type,t,r$1,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=d$1(e);return !r&&t.spatialReference&&(o.spatialReference=k.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r$1}=this;if(r$1)for(const o of r$1)if(o&&r(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry;}}return t}quantize(e$1){const{scale:[t,r],translate:[o,s]}=e$1,n=e=>Math.round((e-o)/t),p=e=>Math.round((s-e)/r),a=this.features,l=this._getQuantizationFunction(this.geometryType,n,p);for(let y=0,m=a.length;y<m;y++)l(e(a[y].geometry))||(a.splice(y,1),y--,m--);return this.transform=e$1,this}unquantize(){const{geometryType:e,features:t,transform:r$1}=this;if(!r$1)return this;const{translate:[o,s],scale:[i,p]}=r$1,a=e=>e*i+o,l=e=>s-e*p,y=this._getHydrationFunction(e,a,l);for(const{geometry:m}of t)r(m)&&y(m);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,p=e.length;i<p;i++){const p=e[i];if(i>0){const e=t(p[0]),i=r(p[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i);}else o=t(p[0]),s=r(p[1]),n.push([o,s]);}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return "point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i);}return s.length>0?(c(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return "point"===e?e=>{e.x=t(e.x),e.y=r(e.y);}:"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];for(let o=0,i=e.length;o<i;o++){const i=e[o];o>0?(s+=i[0],n+=i[1]):(s=i[0],n=i[1]),i[0]=t(s),i[1]=r(n);}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax);}:"multipoint"===e?e=>{const o=e.points;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];i>0?(s+=e[0],n+=e[1]):(s=e[0],n=e[1]),e[0]=t(s),e[1]=r(n);}}:void 0}};e$1([d$2({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"exceededTransferLimit",void 0),e$1([d$2({type:[h$1],json:{write:!0}})],d.prototype,"features",void 0),e$1([o$1("features")],d.prototype,"readFeatures",null),e$1([d$2({type:[y],json:{write:!0}})],d.prototype,"fields",void 0),e$1([d$2({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],d.prototype,"geometryType",void 0),e$1([r$1("geometryType")],d.prototype,"writeGeometryType",null),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasM",void 0),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasZ",void 0),e$1([d$2({types:i,json:{write:!0}})],d.prototype,"queryGeometry",void 0),e$1([o$1("queryGeometry")],d.prototype,"readQueryGeometry",null),e$1([d$2({type:k,json:{write:!0}})],d.prototype,"spatialReference",void 0),e$1([r$1("spatialReference")],d.prototype,"writeSpatialReference",null),e$1([d$2({json:{write:!0}})],d.prototype,"transform",void 0),d=e$1([i$1("esri.rest.support.FeatureSet")],d),d.prototype.toJSON.isDefaultToJSON=!0;const g=d;

export default g;
