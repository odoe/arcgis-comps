'use strict';

const LercCodec = require('./LercCodec-1b300c83.js');
require('./unitUtils-61d611e2.js');
require('./messageBundle-312ceb47.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{_decode(r){const s=LercCodec.r(r.buffer,r.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function s(){return new r}

exports.default = s;
