'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function f(o){return void 0!==o.points}function l(o){return void 0!==o.x&&void 0!==o.y}function y(o){return void 0!==o.paths}function c(o){return void 0!==o.rings}function d(u){return request.t$1(u)?null:u instanceof request.p$3?u:l(u)?request.b$2.fromJSON(u):y(u)?geometry.m.fromJSON(u):c(u)?geometry.v.fromJSON(u):f(u)?geometry.m$1.fromJSON(u):s(u)?request.M.fromJSON(u):null}function v(o){return o?l(o)?"esriGeometryPoint":y(o)?"esriGeometryPolyline":c(o)?"esriGeometryPolygon":s(o)?"esriGeometryEnvelope":f(o)?"esriGeometryMultipoint":null:null}const G={esriGeometryPoint:request.b$2,esriGeometryPolyline:geometry.m,esriGeometryPolygon:geometry.v,esriGeometryEnvelope:request.M,esriGeometryMultipoint:geometry.m$1};function a(o){return o&&G[o]||null}

exports.a = a;
exports.c = c;
exports.d = d;
exports.f = f;
exports.l = l;
exports.s = s;
exports.v = v;
exports.y = y;
