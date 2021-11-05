'use strict';

const LercCodec = require('./LercCodec-91c5af9e.js');
require('./MapView-922b9f1e.js');
require('./index-57f2cfbb.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{_decode(r){const s=LercCodec.r(r.buffer,r.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function s(){return new r}

exports.default = s;
