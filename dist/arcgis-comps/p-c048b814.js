import{af as e,bu as o,aE as n,_ as r}from"./p-e58503d5.js";import{m as i,v as t,b as u}from"./p-b79fcce3.js";function l(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function s(e){return void 0!==e.points}function m(e){return void 0!==e.x&&void 0!==e.y}function y(e){return void 0!==e.paths}function f(e){return void 0!==e.rings}function c(c){return e(c)?null:c instanceof o?c:m(c)?n.fromJSON(c):y(c)?i.fromJSON(c):f(c)?t.fromJSON(c):s(c)?u.fromJSON(c):l(c)?r.fromJSON(c):null}function v(e){return e?m(e)?"esriGeometryPoint":y(e)?"esriGeometryPolyline":f(e)?"esriGeometryPolygon":l(e)?"esriGeometryEnvelope":s(e)?"esriGeometryMultipoint":null:null}const d={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:t,esriGeometryEnvelope:r,esriGeometryMultipoint:u};function G(e){return e&&d[e]||null}export{G as a,f as c,c as d,s as f,m as l,l as s,v,y}