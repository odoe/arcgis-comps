'use strict';

const asyncUtils = require('./asyncUtils-9f974032.js');
const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await asyncUtils.a(s.populateFromStyle());if(request.h(n),!1===a.ok){const e=a.error;i&&i.messages&&i.messages.push(new request.t$6("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i.origin);}}}

exports.t = t;
