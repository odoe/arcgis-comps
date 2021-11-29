import { T, ar as W, ap as Q, a_ as xt, aa as z, at as G, r, a$ as E, b0 as x } from './cast-e5ea2533.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(r,o){const s=o&&o.url&&o.url.path;if(r&&s&&(r=T(r,s,{preserveProtocolRelative:!0}),o.portalItem&&o.readResourcePaths)){const e=W(r,o.portalItem.itemUrl);h.test(e)&&o.readResourcePaths.push(o.portalItem.resourceFromPath(e).path);}return I(r,o&&o.portal)}function i(r,a,u=0){if(!r)return r;!Q(r)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(r);let n=T(r);if(a){const e=a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;if(e){const o=I(e,a.portal);n=W(I(n,a.portal),o,o),n!==r&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(n);}}return n=v(n,a&&a.portal),Q(n)&&(n=z(n)),null!=a&&a.resources&&null!=a&&a.portalItem&&!Q(n)&&!G(n)&&0===u&&a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(n)}),n}function m(r,e,t){return c(r,t)}function p(r,e,t,o){const s=i(r,o);void 0!==s&&(e[t]=s);}const f=/\/items\/([^\/]+)\/resources\//,h=/^\.\/resources\//;function U(e){const t=r(e)?e.match(f):null;return r(t)?t[1]:null}function v(r,e){return e&&!e.isPortal&&e.urlKey&&e.customBaseUrl?xt(r,`${e.urlKey}.${e.customBaseUrl}`,e.portalHostname):r}function I(r,e){if(!e||e.isPortal||!e.urlKey||!e.customBaseUrl)return r;const t=`${e.urlKey}.${e.customBaseUrl}`;return E(x,`${x.scheme}://${t}`)?xt(r,e.portalHostname,t):xt(r,t,e.portalHostname)}const R=Object.freeze({__proto__:null,fromJSON:c,toJSON:i,read:m,write:p,itemIdFromResourceUrl:U});

export { R, U, c, i, m, p };
