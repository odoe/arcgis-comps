'use strict';

const geometryEngineJSON = require('./geometryEngineJSON-0cc755fa.js');
require('./geometryEngineBase-18aba9d5.js');
require('./json-2c41fbe0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return (0, geometryEngineJSON.k[e.operation])(...e.parameters)}

exports.executeGEOperation = e;
