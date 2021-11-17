'use strict';

const asyncUtils = require('./asyncUtils-9f974032.js');
const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(o,a){return await o.load(),i(o,a)}async function i(n,i){const f=[],c=(...o)=>{for(const a of o)request.t(a)||(Array.isArray(a)?c(...a):request.S$1.isCollection(a)?a.forEach((o=>c(o))):unitUtils.m.isLoadable(a)&&f.push(a));};i(c);let e=null;if(await asyncUtils.u(f,(async o=>{!1!==(await asyncUtils.a(s(o)?o.loadAll():o.load())).ok||e||(e=o);})),e)throw e.loadError;return n}function s(o){return "loadAll"in o&&"function"==typeof o.loadAll}

exports.i = i;
exports.n = n;
