'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(n,t,o={}){return c(n,t,o,l)}function u(n,t,o={}){return c(n,t,o,s)}function c(n,t,o={},i){let u=null;const c=o.once?(n,o)=>{i(n)&&(request.s$5(u),t(n,o));}:(n,o)=>{i(n)&&t(n,o);};if(u=request.A$3(n,c,o.sync,o.equals),o.initial){const t=n();c(t,t);}return u}function l(n){return !0}function s(n){return !!n}const m={sync:!0};

exports.i = i;
exports.m = m;
exports.u = u;
