'use strict';

const request = require('./messageBundle-8be88d04.js');
const quantizationUtils = require('./quantizationUtils-d1d9c03e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,t,o,n,a){const s=e.referencesGeometry()&&a?u(t,n,a):t,i=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:i})}catch(c){return request.s$1.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function u(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;i.has(r)||i.set(r,c(r));const s=i.get(r)(e.geometry,o,n,a);return {...e,geometry:s}}function c(s){const i={};switch(s){case"esriGeometryPoint":return (e,r,t,o)=>quantizationUtils.v(r,i,e,t,o);case"esriGeometryPolygon":return (e,r,t,o)=>quantizationUtils.B(r,i,e,t,o);case"esriGeometryPolyline":return (e,r,t,n)=>quantizationUtils.C(r,i,e,t,n);case"esriGeometryMultipoint":return (e,r,o,n)=>quantizationUtils.q(r,i,e,o,n);default:return request.s$1.getLogger("esri.views.2d.support.arcadeOnDemand").error(new request.s("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}

exports.s = s;
