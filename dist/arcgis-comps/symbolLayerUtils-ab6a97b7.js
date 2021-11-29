import { a as s, E, r } from './cast-e5ea2533.js';
import { e } from './ItemCache-58898df0.js';
import { F, a as a$1 } from './aaBoundingBox-e0a84875.js';
import { t, u as c$1 } from './symbols-dc010d3b.js';
import './MemCache-d4727626.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './aaBoundingRect-2a187de3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './enumeration-da141e85.js';
import './opacityUtils-5755cb64.js';
import './geometry-160ffbb5.js';
import './Polyline-56152656.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './screenUtils-9ed89fa7.js';
import './persistableUrlUtils-a9da326c.js';
import './Collection-ac20f1a1.js';
import './collectionUtils-b35b097b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=m();function m(){return new e(50)}function a(){c=m();}function y(e,o){if("icon"===e.type)return l(e,o);if("object"===e.type)return b(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,o){if(e.resource.href)return h(e.resource.href).then((e=>[e.width,e.height]));if(e.resource.primitive)return r(o)?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function p(e,r){return l(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function h(r){return E(r,{responseType:"image"}).then((e=>e.data))}function b(e,r){return w(e,r).then((e=>F(e)))}async function d(e,r){const o=await b(e,r);return t(o,e)}async function w(e,o){if(!e.isPrimitive){const r=e.resource.href,o=c.get(r);if(void 0!==o)return Promise.resolve(o);const t=await import('./objectResourceUtils-8e82e318.js').then(function (n) { return n.o; }),n=await t.fetch(r,{disableTextures:!0});return c.put(r,n.referenceBoundingBox),n.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=a$1(c$1(e.resource.primitive)),r(o)))for(let r=0;r<n.length;r++)n[r]*=o;return n?Promise.resolve(n):Promise.reject(new s("symbol:invalid-resource","The symbol does not have a valid resource"))}

export { a as clearBoundingBoxCache, l as computeIconLayerResourceSize, y as computeLayerResourceSize, f as computeLayerSize, b as computeObjectLayerResourceSize };
