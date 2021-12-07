import { af as t, bu as p, aE as b, _ as M } from './messageBundle-f75b4090.js';
import { m, v as v$1, b as m$1 } from './geometry-7e07b1ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function f(o){return void 0!==o.points}function l(o){return void 0!==o.x&&void 0!==o.y}function y(o){return void 0!==o.paths}function c(o){return void 0!==o.rings}function d(u){return t(u)?null:u instanceof p?u:l(u)?b.fromJSON(u):y(u)?m.fromJSON(u):c(u)?v$1.fromJSON(u):f(u)?m$1.fromJSON(u):s(u)?M.fromJSON(u):null}function v(o){return o?l(o)?"esriGeometryPoint":y(o)?"esriGeometryPolyline":c(o)?"esriGeometryPolygon":s(o)?"esriGeometryEnvelope":f(o)?"esriGeometryMultipoint":null:null}const G={esriGeometryPoint:b,esriGeometryPolyline:m,esriGeometryPolygon:v$1,esriGeometryEnvelope:M,esriGeometryMultipoint:m$1};function a(o){return o&&G[o]||null}

export { a, c, d, f, l, s, v, y };
