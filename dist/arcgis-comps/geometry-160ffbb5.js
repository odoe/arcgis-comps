import { ac as s$2, t as t$1, S as N } from './cast-e5ea2533.js';
import { p as p$1, d as b, M } from './Portal-f1457cb4.js';
import { m, v as v$1, a as m$1 } from './Polyline-56152656.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(o){return "point"===o||"multipoint"===o||"polyline"===o||"polygon"===o}const i$1=s$2()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),t=s$2()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(o){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(r){console.warn(r.stack);}return d(o)}function s$1(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function f(o){return void 0!==o.points}function l(o){return void 0!==o.x&&void 0!==o.y}function y(o){return void 0!==o.paths}function c(o){return void 0!==o.rings}function p(o){return void 0!==o.vertexAttributes}function d(u){return t$1(u)?null:u instanceof p$1?u:l(u)?b.fromJSON(u):y(u)?m.fromJSON(u):c(u)?v$1.fromJSON(u):f(u)?m$1.fromJSON(u):s$1(u)?M.fromJSON(u):null}function v(o){return o?l(o)?"esriGeometryPoint":y(o)?"esriGeometryPolyline":c(o)?"esriGeometryPolygon":s$1(o)?"esriGeometryEnvelope":f(o)?"esriGeometryMultipoint":null:null}const G={esriGeometryPoint:b,esriGeometryPolyline:m,esriGeometryPolygon:v$1,esriGeometryEnvelope:M,esriGeometryMultipoint:m$1};function a(o){return o&&G[o]||null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e){return e instanceof p$1}const i={base:p$1,key:"type",typeMap:{extent:M,multipoint:m$1,point:b,polyline:m,polygon:v$1}},n=N(i);

export { i$1 as a, a as b, c, d, e, f, i, l, s$1 as s, t, v, y };
