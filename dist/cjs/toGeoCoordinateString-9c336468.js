'use strict';

const request = require('./messageBundle-8be88d04.js');
const utils = require('./utils-8a0a0870.js');
const units = require('./units-77498be1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t$1(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=units._.toJSON(f),c.conversionMode=i.conversionMode;const m=utils.e(t),p={...m.query,f:"json",...c},u=utils.r(p,e);return request.E(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=units._.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=utils.e(t),u={...a.query,f:"json",...c},f=utils.r(u,e);return request.E(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}

exports.t = t$1;
exports.t$1 = t;
