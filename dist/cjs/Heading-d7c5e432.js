'use strict';

const mathUtils = require('./mathUtils-af6066f0.js');
const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={heading:"esri-widget__heading"};function s(s,i){const c=`h${mathUtils.e(Math.ceil(s.level),1,6)}`;return delete s.level,request.n$1(c,{...s,class:request.l$2(r.heading,s.class)},i)}

exports.s = s;
