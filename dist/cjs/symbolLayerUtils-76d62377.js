'use strict';

const request = require('./messageBundle-8be88d04.js');
const ItemCache = require('./ItemCache-149fdb6e.js');
const aaBoundingBox = require('./aaBoundingBox-c372701a.js');
const SimpleLineSymbol = require('./symbols-29b793e5.js');
require('./index-fde8502c.js');
require('./MemCache-7f5503ec.js');
require('./aaBoundingRect-56648c00.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=m();function m(){return new ItemCache.e(50)}function a(){c=m();}function y(e,o){if("icon"===e.type)return l(e,o);if("object"===e.type)return b(e,o);throw new request.s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new request.s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,o){if(e.resource.href)return h(e.resource.href).then((e=>[e.width,e.height]));if(e.resource.primitive)return request.r(o)?[o,o]:[256,256];throw new request.s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function p(e,r){return l(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function h(r){return request.E(r,{responseType:"image"}).then((e=>e.data))}function b(e,r){return w(e,r).then((e=>aaBoundingBox.F(e)))}async function d(e,r){const o=await b(e,r);return SimpleLineSymbol.t(o,e)}async function w(e,o){if(!e.isPrimitive){const r=e.resource.href,o=c.get(r);if(void 0!==o)return Promise.resolve(o);const t=await Promise.resolve().then(function () { return require('./objectResourceUtils-58283911.js'); }).then(function (n) { return n.objectResourceUtils; }),n=await t.fetch(r,{disableTextures:!0});return c.put(r,n.referenceBoundingBox),n.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=aaBoundingBox.a(SimpleLineSymbol.c$3(e.resource.primitive)),request.r(o)))for(let r=0;r<n.length;r++)n[r]*=o;return n?Promise.resolve(n):Promise.reject(new request.s("symbol:invalid-resource","The symbol does not have a valid resource"))}

exports.clearBoundingBoxCache = a;
exports.computeIconLayerResourceSize = l;
exports.computeLayerResourceSize = y;
exports.computeLayerSize = f;
exports.computeObjectLayerResourceSize = b;
