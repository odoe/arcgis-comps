'use strict';

const multiOriginJSONSupportUtils = require('./multiOriginJSONSupportUtils-13e8b6cf.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){r&&r.writtenProperties&&r.writtenProperties.forEach((r=>{const t=r.target;r.newOrigin&&r.oldOrigin!==r.newOrigin&&multiOriginJSONSupportUtils.i(t)&&t.updateOrigin(r.propName,r.newOrigin);}));}

exports.r = r;
