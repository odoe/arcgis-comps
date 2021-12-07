'use strict';

const LercCodec = require('./LercCodec-483eae65.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{_decode(r){const s=LercCodec.r(r.buffer,r.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function s(){return new r}

exports.default = s;
