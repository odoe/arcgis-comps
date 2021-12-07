import { e, d, i as i$2, ah as b, a1 as a$2, N as o$3 } from './messageBundle-f75b4090.js';
import { d as d$1, v } from './jsonUtils-13b1f6fd.js';
import { m as m$2 } from './geometry-7e07b1ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$1=class extends a$2{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null;}};e([d({type:String,json:{write:!0}})],p$1.prototype,"deviationUnit",void 0),e([d({json:{read:{reader:r=>r?r.map((r=>d$1(r))):null},write:{writer:(r,o)=>{o.geometries=r.map((r=>r.toJSON()));}}}})],p$1.prototype,"geometries",void 0),e([d({type:Number,json:{write:!0}})],p$1.prototype,"maxDeviation",void 0),p$1=e([i$2("esri.rest.support.GeneralizeParameters")],p$1),p$1.from=b(p$1);const a$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$1=new o$3({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function r$1(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:v(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),i$1.write(s,n,"deviationUnit"),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends a$2{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null;}};e([d({type:String,json:{write:!0}})],l.prototype,"calculationType",void 0),e([d({type:Boolean,json:{write:!0}})],l.prototype,"geodesic",void 0),e([d({json:{write:!0}})],l.prototype,"lengthUnit",void 0),e([d({type:[m$2],json:{read:{reader:o=>o?o.map((o=>d$1(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()));}}}})],l.prototype,"polylines",void 0),l=e([i$2("esri.rest.support.LengthsParameters")],l),l.from=b(l);const n$3=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$2=new o$3({preserveShape:"preserve-shape"});function o$2(e){const{polylines:o,lengthUnit:t,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(o);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),t&&(r.lengthUnit=t),i&&(r.geodesic=i),s&&(r.calculationType=n$2.toJSON(s)),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends a$2{constructor(o){super(o),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null;}};e([d({type:Number,json:{write:!0}})],i.prototype,"bevelRatio",void 0),e([d({json:{read:{reader:o=>o?o.map((o=>d$1(o))):null},write:{writer:(o,t)=>{t.geometries=o.map((o=>o.toJSON()));}}}})],i.prototype,"geometries",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"offsetDistance",void 0),e([d({type:String,json:{write:!0}})],i.prototype,"offsetHow",void 0),e([d({type:String,json:{write:!0}})],i.prototype,"offsetUnit",void 0),i=e([i$2("esri.rest.support.OffsetParameters")],i),i.from=b(i);const m$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$1=new o$3({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),s=new o$3({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function r(e){const{geometries:r,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:m}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return r&&r.length&&(l.geometries=JSON.stringify({geometryType:v(r[0]),geometries:r}),l.sr=JSON.stringify(r[0].spatialReference)),n&&(l.offsetHow=o$1.toJSON(n)),m&&(l.offsetUnit=s.toJSON(m)),l}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends a$2{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null;}};e([d({json:{read:{reader:r=>r?r.map((r=>d$1(r))):null},write:{writer:(r,e)=>{e.geometries1=r.map((r=>r.toJSON()));}}}})],p.prototype,"geometries1",void 0),e([d({json:{read:{reader:r=>r?r.map((r=>d$1(r))):null},write:{writer:(r,e)=>{e.geometries2=r.map((r=>r.toJSON()));}}}})],p.prototype,"geometries2",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"relation",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"relationParameter",void 0),p=e([i$2("esri.rest.support.RelationParameters")],p),p.from=b(p);const a=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$1=new o$3({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function o(e){const{geometries1:o,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),a={};if(o&&o.length){a.geometries1=JSON.stringify({geometryType:v(o[0]),geometries:o});const e=o[0].spatialReference;a.sr=e.wkid?e.wkid:JSON.stringify(e);}return r&&r.length>0&&(a.geometries2=JSON.stringify({geometryType:v(r[0]),geometries:r})),n&&(a.relation=t$1.toJSON(n)),s&&(a.relationParam=s),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends a$2{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null;}};e([d({type:String,json:{write:!0}})],m.prototype,"extendHow",void 0),e([d({type:[m$2],json:{read:{reader:r=>r?r.map((r=>d$1(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()));}}}})],m.prototype,"polylines",void 0),e([d({json:{read:{reader:r=>r?d$1(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON();}}}})],m.prototype,"trimExtendTo",void 0),m=e([i$2("esri.rest.support.TrimExtendParameters")],m),m.from=b(m);const n$1=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new o$3({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function n(e){const{extendHow:n,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=t.toJSON(n),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}

export { a$1 as a, r as b, a as c, o as d, n$1 as e, n as f, m$1 as m, n$3 as n, o$2 as o, r$1 as r };
