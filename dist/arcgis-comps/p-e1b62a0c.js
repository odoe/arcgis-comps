import{af as r}from"./p-e58503d5.js";function n(r,n){if(r===n)return!0;if(null==r||null==n)return!1;if(r.length!==n.length)return!1;for(let t=0;t<r.length;t++){const u=r[t],e=n[t];if(u.length!==e.length)return!1;for(let r=0;r<u.length;r++)if(u[r]!==e[r])return!1}return!0}function t(r,t){if(r===t)return!0;if(null==r||null==t)return!1;if(r.length!==t.length)return!1;for(let u=0;u<r.length;u++)if(!n(r[u],t[u]))return!1;return!0}function u(r,n){return!!o(r.spatialReference,n.spatialReference)&&r.x===n.x&&r.y===n.y&&r.z===n.z&&r.m===n.m}function e(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!o(r.spatialReference,n.spatialReference)&&t(r.paths,n.paths)}function f(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!o(r.spatialReference,n.spatialReference)&&t(r.rings,n.rings)}function i(r,t){return r.hasZ===t.hasZ&&r.hasM===t.hasM&&!!o(r.spatialReference,t.spatialReference)&&n(r.points,t.points)}function o(r,n){return r===n||r&&n&&r.equals(n)}function c(n,t){return n===t||null!=n&&null!=t&&n.objectId===t.objectId&&!!function(n,t){if(n===t)return!0;if(r(n)||r(t))return!1;if(n.type!==t.type)return!1;switch(n.type){case"point":return u(n,t);case"extent":return function(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!o(r.spatialReference,n.spatialReference)&&r.xmin===n.xmin&&r.ymin===n.ymin&&r.zmin===n.zmin&&r.xmax===n.xmax&&r.ymax===n.ymax&&r.zmax===n.zmax}(n,t);case"polyline":return e(n,t);case"polygon":return f(n,t);case"multipoint":return i(n,t);case"mesh":return!1;default:return}}(n.geometry,t.geometry)&&!!function(r,n){if(r===n)return!0;if(!r||!n)return!1;const t=Object.keys(r),u=Object.keys(n);if(t.length!==u.length)return!1;for(const u of t)if(r[u]!==n[u])return!1;return!0}(n.attributes,t.attributes)}export{c as o,u as r}