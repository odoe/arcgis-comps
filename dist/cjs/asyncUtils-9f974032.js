'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(r,t,e){return request.T$1(r.map(((r,o)=>t.apply(e,[r,o]))))}function u(r,t,e){return request.T$1(r.map(((r,o)=>t.apply(e,[r,o])))).then((r=>r.map((r=>r.value))))}function a(o){return request.t(o)?request.k$1():o.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}function p(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>(request.b$1(r),{ok:!1,error:r})))}

exports.a = a;
exports.n = n;
exports.p = p;
exports.u = u;
