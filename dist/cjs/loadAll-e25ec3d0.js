'use strict';

const asyncUtils = require('./asyncUtils-cd78b718.js');
const request = require('./messageBundle-8be88d04.js');
const Portal = require('./Portal-8d16604d.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(o,a){return await o.load(),i(o,a)}async function i(n,i){const f=[],c=(...o)=>{for(const a of o)request.t$1(a)||(Array.isArray(a)?c(...a):request.S.isCollection(a)?a.forEach((o=>c(o))):Portal.m.isLoadable(a)&&f.push(a));};i(c);let e=null;if(await asyncUtils.u(f,(async o=>{!1!==(await asyncUtils.a(s(o)?o.loadAll():o.load())).ok||e||(e=o);})),e)throw e.loadError;return n}function s(o){return "loadAll"in o&&"function"==typeof o.loadAll}

exports.i = i;
exports.n = n;
