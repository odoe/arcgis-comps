import { E, bn as e, bp as r$2, bk as v, cj as d, c6 as v$1, bF as U, ck as m$3, e as e$1, d as d$1, i as i$7, bq as l } from './MapView-ac75aae8.js';
import { r as r$3, o as o$6, n as n$4 } from './project-28ed5c91.js';
import { _, a as a$1, r as r$4, n as n$1, o as o$4, m as m$2, b as r$5, c as a$2, d as o$5, e as n$2, f as n$3 } from './trimExtend-ee7d6edc.js';
import './index-b157fcf2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o$3(o,s,e$1){const a=e(o),u={...a.query,f:"json",...s.toJSON()},f=r$2(u,e$1);return E(a.path+"/areasAndLengths",f).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i$6(i,n,m,p){const g=n[0].spatialReference,f=e(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(r$3(n).geometries),polylines:JSON.stringify(r$3(m).geometries)},y=r$2(a,p);return E(f.path+"/autoComplete",y).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new v({spatialReference:g,rings:e})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s(s,n,i){const m=e(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=r$2(a,i);return E(m.path+"/buffer",p).then((e=>(e.data.geometries||[]).map((({rings:e})=>new v({spatialReference:f,rings:e})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i$5(i,n,m){const f=n[0].spatialReference,p=e(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r$3(n))},u=r$2(a,m);return E(p.path+"/convexHull",u).then((({data:t})=>d(t.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o$2(o,i,n,m){const a=e(o),p=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:v$1(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await E(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return {cutIndexes:f,geometries:g.map((e=>{const t=d(e);return t.spatialReference=p,t}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o$1(o,i,n){const m=i.geometries[0].spatialReference,p=e(o),a={...p.query,f:"json",...i.toJSON()},f=r$2(a,n);return E(p.path+"/densify",f).then((({data:e})=>(e.geometries||[]).map((e=>d(e).set({spatialReference:m})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i$4(i,m,n,f){const p=m[0].spatialReference,y=e(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(r$3(m)),geometry:JSON.stringify({geometryType:v$1(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),E(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>d(e).set({spatialReference:p})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function r$1(r,s,e$1){const a=e(r),i={...a.query,f:"json",...s.toJSON()},c=r$2(i,e$1);return E(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t$1(t,i,e$1){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_.toJSON(f),c.conversionMode=i.conversionMode;const m=e(t),p={...m.query,f:"json",...c},u=r$2(p,e$1);return E(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i$3(i,m,p){const n=(m=a$1.from(m)).toJSON(),f=r$4(m),j=e(i),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=r$2(l,p);return E(j.path+"/generalize",c).then((({data:e})=>(e.geometries||[]).map((e=>d(e).set({spatialReference:u})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function m$1(m,n,p,f){const y=n[0].spatialReference,a=e(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(r$3(n)),geometry:JSON.stringify({geometryType:v$1(p),geometry:p.toJSON()})},u=r$2(g,f);return E(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>d(e).set({spatialReference:y})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=e(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=r$2(l,n);return E(f.path+"/labelPoints",m).then((({data:t})=>(t.labelPoints||[]).map((t=>d(t).set({spatialReference:a})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n,m,p){m=n$1.from(m);const a=o$4(m),f=e(n),i={...f.query,f:"json",...a},u=r$2(i,p);return E(f.path+"/lengths",u).then((({data:t})=>t))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function m(m,p,a){p=m$2.from(p);const i=r$5(p),n=e(m),j={...n.query,f:"json",...i},u=p.geometries[0].spatialReference,c=r$2(j,a);return E(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>d(e).set({spatialReference:u})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function a(a,n,i){n=a$2.from(n);const m=o$5(n),p=e(a),f={...p.query,f:"json",...m},u=r$2(f,i);return E(p.path+"/relation",u).then((({data:r})=>r.relations))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i$2(i,n,p,a){const f=n.spatialReference,m=e(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:v$1(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p.toJSON())},g=r$2(y,a);return E(m.path+"/reshape",g).then((({data:e})=>d(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o(o,m,f){const n="string"==typeof o?U(o):o,p=m[0].spatialReference,a=v$1(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(r$3(m))}},{data:y}=await E(n.path+"/simplify",u);return o$6(y.geometries,a,p)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,i,e$1){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=e(t),u={...a.query,f:"json",...c},f=r$2(u,e$1);return E(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i$1(i,p,n){p=n$2.from(p);const a=n$3(p),f=e(i),j={...f.query,f:"json",...a},u=p.sr,y=r$2(j,n);return E(f.path+"/trimExtend",y).then((({data:t})=>(t.geometries||[]).map((({paths:t})=>new m$3({spatialReference:u,paths:t})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(i,n,m){const f=n[0].spatialReference,p=e(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r$3(n))},u=r$2(a,m);return E(p.path+"/union",u).then((({data:t})=>d(t.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let C=class extends l{constructor(r){super(r),this.url=null;}areasAndLengths(r,e){return o$3(this.url,r,e)}autoComplete(r,e,t){return i$6(this.url,r,e,t)}buffer(r,e){return s(this.url,r,e)}convexHull(r,e){return i$5(this.url,r,e)}cut(r,e,t){return o$2(this.url,r,e,t)}densify(r,e){return o$1(this.url,r,e)}difference(r,e,t){return i$4(this.url,r,e,t)}distance(r,e){return r$1(this.url,r,e)}fromGeoCoordinateString(r,e){return t$1(this.url,r,e)}generalize(r,e){return i$3(this.url,r,e)}intersect(r,e,t){return m$1(this.url,r,e,t)}labelPoints(r$1,e){return r(this.url,r$1,e)}lengths(r,e){return n(this.url,r,e)}offset(r,e){return m(this.url,r,e)}project(r,e){return n$4(this.url,r,e)}relation(r,e){return a(this.url,r,e)}reshape(r,e,t){return i$2(this.url,r,e,t)}simplify(r,e){return o(this.url,r,e)}toGeoCoordinateString(r,e){return t(this.url,r,e)}trimExtend(r,e){return i$1(this.url,r,e)}union(r,e){return i(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",e$1([d$1()],C.prototype,"url",void 0),C=e$1([i$7("esri.tasks.GeometryService")],C);const g=C;

export default g;
