import { T, g as t, ax as k, ak as b } from './jsxFactory-b8b7429b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(r,t,e){return T(r.map(((r,o)=>t.apply(e,[r,o]))))}function u(r,t,e){return T(r.map(((r,o)=>t.apply(e,[r,o])))).then((r=>r.map((r=>r.value))))}function a(o){return t(o)?k():o.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}function p(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>(b(r),{ok:!1,error:r})))}function i(r){if(!0===r.ok)return r.value;throw r.error}

export { a, n, p, u };
