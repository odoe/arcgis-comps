'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const Graphic = require('./Graphic-0aff6059.js');
const jsonUtils = require('./jsonUtils-b6068079.js');
const Field = require('./Field-b92c6f4a.js');
require('./index-fde8502c.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./fieldType-32f95259.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=new request.o$1({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let d=class extends request.a$2{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null;}readFeatures(e,t){const o=request.k.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],p=Graphic.h.fromJSON(t),a=t.geometry&&t.geometry.spatialReference;request.r(p.geometry)&&!a&&(p.geometry.spatialReference=o),s.push(p);}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const i of s)if(i&&request.r(i.geometry))return void h.write(i.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=jsonUtils.d(e);return !r&&t.spatialReference&&(o.spatialReference=request.k.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&request.r(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry;}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),p=e=>Math.round((s-e)/r),a=this.features,l=this._getQuantizationFunction(this.geometryType,n,p);for(let y=0,m=a.length;y<m;y++)l(request.e$2(a[y].geometry))||(a.splice(y,1),y--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[i,p]}=r,a=e=>e*i+o,l=e=>s-e*p,y=this._getHydrationFunction(e,a,l);for(const{geometry:m}of t)request.r(m)&&y(m);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,p=e.length;i<p;i++){const p=e[i];if(i>0){const e=t(p[0]),i=r(p[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i);}else o=t(p[0]),s=r(p[1]),n.push([o,s]);}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return "point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=jsonUtils.c(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i);}return s.length>0?(jsonUtils.c(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return "point"===e?e=>{e.x=t(e.x),e.y=r(e.y);}:"polyline"===e||"polygon"===e?e=>{const o=jsonUtils.c(e)?e.rings:e.paths;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];for(let o=0,i=e.length;o<i;o++){const i=e[o];o>0?(s+=i[0],n+=i[1]):(s=i[0],n=i[1]),i[0]=t(s),i[1]=r(n);}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax);}:"multipoint"===e?e=>{const o=e.points;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];i>0?(s+=e[0],n+=e[1]):(s=e[0],n=e[1]),e[0]=t(s),e[1]=r(n);}}:void 0}};request.e([request.d({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),request.e([request.d({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"exceededTransferLimit",void 0),request.e([request.d({type:[Graphic.h],json:{write:!0}})],d.prototype,"features",void 0),request.e([request.o$2("features")],d.prototype,"readFeatures",null),request.e([request.d({type:[Field.y],json:{write:!0}})],d.prototype,"fields",void 0),request.e([request.d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],d.prototype,"geometryType",void 0),request.e([request.r$2("geometryType")],d.prototype,"writeGeometryType",null),request.e([request.d({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasM",void 0),request.e([request.d({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasZ",void 0),request.e([request.d({types:geometry.i,json:{write:!0}})],d.prototype,"queryGeometry",void 0),request.e([request.o$2("queryGeometry")],d.prototype,"readQueryGeometry",null),request.e([request.d({type:request.k,json:{write:!0}})],d.prototype,"spatialReference",void 0),request.e([request.r$2("spatialReference")],d.prototype,"writeSpatialReference",null),request.e([request.d({json:{write:!0}})],d.prototype,"transform",void 0),d=request.e([request.i("esri.rest.support.FeatureSet")],d),d.prototype.toJSON.isDefaultToJSON=!0;const g=d;

exports.default = g;
