'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={inches:unitUtils.D$1(1,"meters","inches"),feet:unitUtils.D$1(1,"meters","feet"),"us-feet":unitUtils.D$1(1,"meters","us-feet"),yards:unitUtils.D$1(1,"meters","yards"),miles:unitUtils.D$1(1,"meters","miles"),"nautical-miles":unitUtils.D$1(1,"meters","nautical-miles"),millimeters:unitUtils.D$1(1,"meters","millimeters"),centimeters:unitUtils.D$1(1,"meters","centimeters"),decimeters:unitUtils.D$1(1,"meters","decimeters"),meters:unitUtils.D$1(1,"meters","meters"),kilometers:unitUtils.D$1(1,"meters","kilometers"),"decimal-degrees":1/unitUtils.R$2(1,"meters",unitUtils.s.radius)};

exports.m = m;
