'use strict';

const request = require('./MapView-1195e7f1.js');
require('./index-b630e408.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?request.E(s,{responseType:"image"}).then((t=>{const e=n(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):e.fetchSymbol().then((t=>i(t,h)))}function n(t,i){const n=!/\\.svg$/i.test(t.src)&&i&&i.disableUpsampling,h=Math.max(t.width,t.height);let s=i&&null!=i.maxSize?request.u$1(i.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,i&&null!=i.size?request.u$1(i.size):h);if(o!==h){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=o,t.height=o/e):(t.width=o*e,t.height=o);}return t}

exports.previewWebStyleSymbol = i;
