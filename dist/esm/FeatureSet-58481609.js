import { N as o, e, d as d$1, a2 as o$1, a3 as r, a0 as k, i as i$1, a1 as a, A as r$1, V as e$1 } from './messageBundle-f75b4090.js';
import { i } from './geometry-7e07b1ba.js';
import { h as h$1 } from './Graphic-3961df6c.js';
import { d as d$2, c } from './jsonUtils-13b1f6fd.js';
import { y } from './Field-bfaa8af9.js';
import './index-b157fcf2.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './fieldType-66a19d8a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=new o({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let d=class extends a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null;}readFeatures(e,t){const o=k.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],p=h$1.fromJSON(t),a=t.geometry&&t.geometry.spatialReference;r$1(p.geometry)&&!a&&(p.geometry.spatialReference=o),s.push(p);}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const i of s)if(i&&r$1(i.geometry))return void h.write(i.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=d$2(e);return !r&&t.spatialReference&&(o.spatialReference=k.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&r$1(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry;}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),p=e=>Math.round((s-e)/r),a=this.features,l=this._getQuantizationFunction(this.geometryType,n,p);for(let y=0,m=a.length;y<m;y++)l(e$1(a[y].geometry))||(a.splice(y,1),y--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[i,p]}=r,a=e=>e*i+o,l=e=>s-e*p,y=this._getHydrationFunction(e,a,l);for(const{geometry:m}of t)r$1(m)&&y(m);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,p=e.length;i<p;i++){const p=e[i];if(i>0){const e=t(p[0]),i=r(p[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i);}else o=t(p[0]),s=r(p[1]),n.push([o,s]);}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return "point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i);}return s.length>0?(c(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return "point"===e?e=>{e.x=t(e.x),e.y=r(e.y);}:"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];for(let o=0,i=e.length;o<i;o++){const i=e[o];o>0?(s+=i[0],n+=i[1]):(s=i[0],n=i[1]),i[0]=t(s),i[1]=r(n);}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax);}:"multipoint"===e?e=>{const o=e.points;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];i>0?(s+=e[0],n+=e[1]):(s=e[0],n=e[1]),e[0]=t(s),e[1]=r(n);}}:void 0}};e([d$1({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),e([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"exceededTransferLimit",void 0),e([d$1({type:[h$1],json:{write:!0}})],d.prototype,"features",void 0),e([o$1("features")],d.prototype,"readFeatures",null),e([d$1({type:[y],json:{write:!0}})],d.prototype,"fields",void 0),e([d$1({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],d.prototype,"geometryType",void 0),e([r("geometryType")],d.prototype,"writeGeometryType",null),e([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasM",void 0),e([d$1({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasZ",void 0),e([d$1({types:i,json:{write:!0}})],d.prototype,"queryGeometry",void 0),e([o$1("queryGeometry")],d.prototype,"readQueryGeometry",null),e([d$1({type:k,json:{write:!0}})],d.prototype,"spatialReference",void 0),e([r("spatialReference")],d.prototype,"writeSpatialReference",null),e([d$1({json:{write:!0}})],d.prototype,"transform",void 0),d=e([i$1("esri.rest.support.FeatureSet")],d),d.prototype.toJSON.isDefaultToJSON=!0;const g=d;

export default g;
