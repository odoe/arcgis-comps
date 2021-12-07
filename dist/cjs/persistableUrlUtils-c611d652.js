'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(r,o){const s=o&&o.url&&o.url.path;if(r&&s&&(r=request.T$2(r,s,{preserveProtocolRelative:!0}),o.portalItem&&o.readResourcePaths)){const e=request.W(r,o.portalItem.itemUrl);h.test(e)&&o.readResourcePaths.push(o.portalItem.resourceFromPath(e).path);}return I(r,o&&o.portal)}function i(r,a,u=0){if(!r)return r;!request.Q(r)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(r);let n=request.T$2(r);if(a){const e=a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;if(e){const o=I(e,a.portal);n=request.W(I(n,a.portal),o,o),n!==r&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(n);}}return n=v(n,a&&a.portal),request.Q(n)&&(n=request.z$2(n)),null!=a&&a.resources&&null!=a&&a.portalItem&&!request.Q(n)&&!request.G(n)&&0===u&&a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(n)}),n}function m(r,e,t){return c(r,t)}function p(r,e,t,o){const s=i(r,o);void 0!==s&&(e[t]=s);}const f=/\/items\/([^\/]+)\/resources\//,h=/^\.\/resources\//;function U(e){const t=request.r(e)?e.match(f):null;return request.r(t)?t[1]:null}function v(r,e){return e&&!e.isPortal&&e.urlKey&&e.customBaseUrl?request.xt(r,`${e.urlKey}.${e.customBaseUrl}`,e.portalHostname):r}function I(r,e){if(!e||e.isPortal||!e.urlKey||!e.customBaseUrl)return r;const t=`${e.urlKey}.${e.customBaseUrl}`;return request.E$4(request.x,`${request.x.scheme}://${t}`)?request.xt(r,e.portalHostname,t):request.xt(r,t,e.portalHostname)}const R=Object.freeze({__proto__:null,fromJSON:c,toJSON:i,read:m,write:p,itemIdFromResourceUrl:U});

exports.R = R;
exports.U = U;
exports.c = c;
exports.i = i;
exports.m = m;
exports.p = p;
