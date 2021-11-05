'use strict';

const request = require('./MapView-922b9f1e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!request.r(d))return [];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return ["*"];const f=n?await request.O$6(t):[],r=request.y$18(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p);})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:request.r(l)&&l.defaultPopupTemplateEnabled&&request.r(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}

exports.d = d;
exports.t = t;
