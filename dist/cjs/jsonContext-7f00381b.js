'use strict';

const request = require('./messageBundle-8be88d04.js');
const Portal = require('./Portal-8d16604d.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return {origin:"portal-item",url:request.U(o.itemUrl),portal:o.portal||Portal.B.getDefault(),portalItem:o,readResourcePaths:[]}}

exports.o = o;
