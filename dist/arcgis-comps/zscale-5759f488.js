import { l as t$1 } from './jsxFactory-ef3e403e.js';
import { ag as E, ah as Y } from './unitUtils-8a2b838a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,c,l){if(t$1(c)||t$1(l)||l.vcsWkid||E(c,l))return null;const u=Y(c)/Y(l);if(1===u)return null;switch(t){case"point":case"esriGeometryPoint":return n=>i(n,u);case"polyline":case"esriGeometryPolyline":return n=>s(n,u);case"polygon":case"esriGeometryPolygon":return n=>r(n,u);case"multipoint":case"esriGeometryMultipoint":return n=>f(n,u);default:return null}}function i(n,o){n&&null!=n.z&&(n.z*=o);}function r(n,o){if(n)for(const e of n.rings)for(const n of e)n.length>2&&(n[2]*=o);}function s(n,o){if(n)for(const e of n.paths)for(const n of e)n.length>2&&(n[2]*=o);}function f(n,o){if(n)for(const e of n.points)e.length>2&&(e[2]*=o);}function c(n,o,e){if(null==n.hasM||n.hasZ)for(const t of o)for(const n of t)n.length>2&&(n[2]*=e);}function l(n,e,t){if(!n&&!e||!t)return;const i=Y(t);u(n,t,i),u(e,t,i);}function u(n,o,e){if(n)for(const t of n)a(t.geometry,o,e);}function a(t,i,r){if(t$1(t)||!t.spatialReference||E(t.spatialReference,i))return;const s=Y(t.spatialReference)/r;if(1!==s)if("x"in t)null!=t.z&&(t.z*=s);else if("rings"in t)c(t,t.rings,s);else if("paths"in t)c(t,t.paths,s);else if("points"in t&&(null==t.hasM||t.hasZ))for(const n of t.points)n.length>2&&(n[2]*=s);}

export { l, t };
