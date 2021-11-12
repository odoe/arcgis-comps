import { u, a } from './asyncUtils-9a49e799.js';
import { g as t, k as S } from './jsxFactory-a3b6abde.js';
import { a5 as m } from './Graphic-08cda9ca.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(o,a){return await o.load(),i(o,a)}async function i(n,i){const f=[],c=(...o)=>{for(const a of o)t(a)||(Array.isArray(a)?c(...a):S.isCollection(a)?a.forEach((o=>c(o))):m.isLoadable(a)&&f.push(a));};i(c);let e=null;if(await u(f,(async o=>{!1!==(await a(s(o)?o.loadAll():o.load())).ok||e||(e=o);})),e)throw e.loadError;return n}function s(o){return "loadAll"in o&&"function"==typeof o.loadAll}

export { i, n };
