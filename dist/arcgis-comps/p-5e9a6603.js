import{fM as n,b as e,am as t,e9 as o}from"./p-5420851c.js";const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function i(n){return r[n]}function*u(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const e of n.features)e&&(yield e)}}function*c(n){if(!n)return null;switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const e of n.coordinates)yield*e;break;case"MultiPolygon":for(const e of n.coordinates)for(const n of e)yield*n}}function*s(e,t={}){const{geometryType:r,objectIdField:u}=t;for(const s of e){var c;const{geometry:e,properties:l,id:f}=s;if(e&&i(e.type)!==r)continue;const a=l||{};let p=null!=(c=a[u])?c:null;u&&null!=f&&!a[u]&&(a[u]=p=f);const g=new n(e?y(new o,e,t):null,a,null,p);yield g}}function l(n){for(const e of n)if(e.length>2)return!0;return!1}function f(n){let e=0;for(let t=0;t<n.length;t++){const o=n[t],r=n[(t+1)%n.length];e+=o[0]*r[1]-r[0]*o[1]}return e<=0}function a(n){const e=n[0],t=n[n.length-1];return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]||n.push(e),n}function y(n,e,t){switch(e.type){case"LineString":return function(n,e,t){return d(n,e.coordinates,t),n}(n,e,t);case"MultiLineString":return function(n,e,t){for(const o of e.coordinates)d(n,o,t);return n}(n,e,t);case"MultiPoint":return function(n,e,t){return d(n,e.coordinates,t),n}(n,e,t);case"MultiPolygon":return function(n,e,t){for(const o of e.coordinates){p(n,o[0],t);for(let e=1;e<o.length;e++)g(n,o[e],t)}return n}(n,e,t);case"Point":return function(n,e,t){return w(n,e.coordinates,t),n}(n,e,t);case"Polygon":return function(n,e,t){const o=e.coordinates;p(n,o[0],t);for(let e=1;e<o.length;e++)g(n,o[e],t);return n}(n,e,t)}}function p(n,e,t){const o=a(e);!function(n){return!f(n)}(o)?d(n,o,t):m(n,o,t)}function g(n,e,t){const o=a(e);!function(n){return f(n)}(o)?d(n,o,t):m(n,o,t)}function d(n,e,t){for(const o of e)w(n,o,t);n.lengths.push(e.length)}function m(n,e,t){for(let o=e.length-1;o>=0;o--)w(n,e[o],t);n.lengths.push(e.length)}function w(n,e,t){const[o,r,i]=e;n.coords.push(o,r),t.hasZ&&n.coords.push(i||0)}function P(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function b(n){if(!n)throw new e("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==n.type&&"FeatureCollection"!==n.type)throw new e("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:t}=n;if(!t)return;const o="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new e("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function S(n,e={}){const o=[],r=new Set,s=new Set;let f,a=!1,y=null,p=!1,{geometryType:g=null}=e,d=!1;for(const e of u(n)){const{geometry:n,properties:t,id:u}=e;if((!n||(g||(g=i(n.type)),i(n.type)===g))&&(a||(a=l(c(n))),p||(p=null!=u,p&&(f=typeof u,y=Object.keys(t).filter((n=>t[n]===u)))),p&&null!=u&&(y.length>1?y=y.filter((n=>t[n]===u)):1===y.length&&(y=t[y[0]]===u?y:[])),!d&&t)){let n=!0;for(const e in t){if(r.has(e))continue;const i=t[e];if(null==i){n=!1,s.add(e);continue}const u=P(i);"unknown"!==u?(s.delete(e),r.add(e),o.push({name:e,alias:e,type:u})):s.add(e)}d=n}}const m=y&&1===y.length&&y[0]||null;if(m)for(const n of o)if(n.name===m&&t(n)){n.type="esriFieldTypeOID";break}return{fields:o,geometryType:g,hasZ:a,objectIdFieldName:m,objectIdFieldType:f,unknownFields:Array.from(s)}}function j(n,e){return Array.from(s(u(n),e))}export{j as L,b as O,S as T,i}