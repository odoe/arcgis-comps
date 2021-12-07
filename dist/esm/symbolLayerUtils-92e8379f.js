import { s, Q as E, A as r } from './messageBundle-f75b4090.js';
import { e } from './ItemCache-5d2cf877.js';
import { F, a as a$1 } from './aaBoundingBox-876621e6.js';
import { w as t, z as c$1 } from './symbols-b414aa72.js';
import './index-b157fcf2.js';
import './MemCache-78a9f000.js';
import './aaBoundingRect-9468599b.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './enumeration-d3301938.js';
import './opacityUtils-5e864561.js';
import './geometry-7e07b1ba.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './screenUtils-9bb7e30c.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=m();function m(){return new e(50)}function a(){c=m();}function y(e,o){if("icon"===e.type)return l(e,o);if("object"===e.type)return b(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,o){if(e.resource.href)return h(e.resource.href).then((e=>[e.width,e.height]));if(e.resource.primitive)return r(o)?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function p(e,r){return l(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function h(r){return E(r,{responseType:"image"}).then((e=>e.data))}function b(e,r){return w(e,r).then((e=>F(e)))}async function d(e,r){const o=await b(e,r);return t(o,e)}async function w(e,o){if(!e.isPrimitive){const r=e.resource.href,o=c.get(r);if(void 0!==o)return Promise.resolve(o);const t=await import('./objectResourceUtils-46d77106.js').then(function (n) { return n.v; }),n=await t.fetch(r,{disableTextures:!0});return c.put(r,n.referenceBoundingBox),n.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=a$1(c$1(e.resource.primitive)),r(o)))for(let r=0;r<n.length;r++)n[r]*=o;return n?Promise.resolve(n):Promise.reject(new s("symbol:invalid-resource","The symbol does not have a valid resource"))}

export { a as clearBoundingBoxCache, l as computeIconLayerResourceSize, y as computeLayerResourceSize, f as computeLayerSize, b as computeObjectLayerResourceSize };
