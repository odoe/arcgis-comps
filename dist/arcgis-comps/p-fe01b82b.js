import{aR as t,bq as r,br as n,bh as o,bs as e,v as i,m as s,bi as u,G as c,bt as f,bu as a,bv as l,e as p,i as d,p as b}from"./p-9ae46e68.js";function v(t,r,n){if(!t||!t.read||!1===t.read.enabled||!t.read.source)return!1;const o=t.read.source;if("string"==typeof o){if(o===r)return!0;if(o.indexOf(".")>-1&&0===o.indexOf(r)&&e(o,n))return!0}else for(const t of o){if(t===r)return!0;if(t.indexOf(".")>-1&&0===t.indexOf(r)&&e(t,n))return!0}return!1}function y(t,n,o,e,i){let s=r(n[o],i);(function(t){return t&&(!t.read||!1!==t.read.enabled&&!t.read.source)})(s)&&(t[o]=!0);for(const u of Object.getOwnPropertyNames(n))s=r(n[u],i),v(s,o,e)&&(t[u]=!0)}function O(t,r,o,e){const i=n(o.metadatas[r],"any",e),s=i&&i.default;if(void 0===s)return;const u="function"==typeof s?s.call(t,r,e):s;void 0!==u&&o.set(r,u)}const g={origin:"service"};function w(n,e,i=g){if(!e||"object"!=typeof e)return;const s=o(n),u=s.metadatas,c={};for(const t of Object.getOwnPropertyNames(e))y(c,u,t,e,i);s.setDefaultOrigin(i.origin);for(const o of Object.getOwnPropertyNames(c)){const c=r(u[o],i).read,f=c&&c.source;let a;a=f&&"string"==typeof f?t(e,f):e[o],c&&c.reader&&(a=c.reader.call(n,a,e,i)),void 0!==a&&s.set(o,a)}if(!i||!i.ignoreDefaults)for(const t of Object.getOwnPropertyNames(u))c[t]||O(n,t,s,i);s.setDefaultOrigin("user")}function m(t,r,n,o=g){var e;const i={...o,messages:[]};n(i),null==(e=i.messages)||e.forEach((r=>{"warning"!==r.type||t.loaded?o&&o.messages&&o.messages.push(r):t.loadWarnings.push(r)}))}const h=i.getLogger("esri.core.accessorSupport.write");function j(t,r,n,o,e){var i,s;const u={};return null==(i=r.write)||null==(s=i.writer)||s.call(t,o,u,n,e),u}function S(t,r,n,o,e,i){if(!o||!o.write)return!1;const f=t.get(n);if(!e&&o.write.overridePolicy){const r=o.write.overridePolicy.call(t,f,n,i);void 0!==r&&(e=r)}if(e||(e=o.write),!e||!1===e.enabled)return!1;if((null===f&&!e.allowNull&&!e.writerEnsuresNonNull||void 0===f)&&e.isRequired){const r=new s("web-document-write:property-required",`Missing value for required property '${n}' on '${t.declaredClass}'`,{propertyName:n,target:t});return r&&i&&i.messages?i.messages.push(r):r&&!i&&h.error(r.name,r.message),!1}return!(void 0===f||null===f&&!e.allowNull&&!e.writerEnsuresNonNull||function(t,r,n,o,e){const i=o.default;if(void 0===i)return!1;if(null!=o.defaultEquals)return o.defaultEquals(e);if("function"==typeof i){if(Array.isArray(e)){const o=i.call(t,r,n);return c(o,e)}return!1}return i===e}(t,n,i,o,f)||void 0===o.default&&!e.ignoreOrigin&&i&&i.origin&&r.store.originOf(n)<u(i.origin))}function N(t,r,n,e){const i=o(t),s=f(i.metadatas[r],e);return!!s&&S(t,i,r,s,n,e)}function J(t,r,n){if(t&&"function"==typeof t.toJSON&&(!t.toJSON.isDefaultToJSON||!t.write))return a(r,t.toJSON());const e=o(t),i=e.metadatas;for(const o in i){const c=f(i[o],n);if(!S(t,e,o,c,void 0,n))continue;const p=t.get(o),d=j(t,c,c.write&&"string"==typeof c.write.target?c.write.target:o,p,n);var s,u;Object.keys(d).length>0&&(r=a(r,d),null!=n&&null!=(s=n.resources)&&null!=(u=s.pendingOperations)&&u.length&&Promise.all(n.resources.pendingOperations).then((()=>a(r,d))),n&&n.writtenProperties&&n.writtenProperties.push({target:t,propName:o,oldOrigin:l(e.store.originOf(o)),newOrigin:n.origin}))}return r}const q=t=>{let r=class extends t{constructor(...t){super(...t)}read(t,r){w(this,t,r)}write(t={},r){return J(this,t,r)}toJSON(t){return this.write({},t)}static fromJSON(t,r){return x.call(this,t,r)}};return r=p([d("esri.core.JSONSupport")],r),r.prototype.toJSON.isDefaultToJSON=!0,r};function x(t,r){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const n=new this;return n.read(t,r),n}let $=class extends(q(b)){};$=p([d("esri.core.JSONSupport")],$);export{$ as a,m as d,N as g,q as i,J as p,w as u}