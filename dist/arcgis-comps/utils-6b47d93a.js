import { aL as U } from './jsxFactory-a3b6abde.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,r){return r?{...r,query:{...t,...r.query}}:{query:t}}function e(r){return "string"==typeof r?U(r):r}function n(t,r,e){const o={};for(const i in t){if("declaredClass"===i)continue;const f=t[i];if(null!=f&&"function"!=typeof f)if(Array.isArray(f)){o[i]=[];for(let t=0;t<f.length;t++)o[i][t]=n(f[t]);}else if("object"==typeof f)if(f.toJSON){const t=f.toJSON(e&&e[i]);o[i]=r?t:JSON.stringify(t);}else o[i]=r?f:JSON.stringify(f);else o[i]=f;}return o}

export { e, n, r };
