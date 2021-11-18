import { aR as u$1, bq as o, br as a$3, bh as e, bs as s$1, v as s$2, m as s$3, bi as t, G as l$1, bt as s$4, bu as u$2, bv as c$3, e as e$1, i as i$2, p as p$1 } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,r,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return !1;const o=e.read.source;if("string"==typeof o){if(o===r)return !0;if(o.indexOf(".")>-1&&0===o.indexOf(r)&&s$1(o,n))return !0}else for(const s of o){if(s===r)return !0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&s$1(s,n))return !0}return !1}function i$1(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function a$2(e,t,r,o$1,a){let f=o(t[r],a);i$1(f)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))f=o(t[i],a),s(f,r,o$1)&&(e[i]=!0);}function f$1(e,t,r,n){const s=r.metadatas,i=a$3(s[t],"any",n),a=i&&i.default;if(void 0===a)return;const f="function"==typeof a?a.call(e,t,n):a;void 0!==f&&r.set(t,f);}const c$2={origin:"service"};function u(t,o$1,s=c$2){if(!o$1||"object"!=typeof o$1)return;const i=e(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(o$1))a$2(d,u,e,o$1,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const a=o(u[r],s).read,f=a&&a.source;let c;c=f&&"string"==typeof f?u$1(o$1,f):o$1[r],a&&a.reader&&(c=a.reader.call(t,c,o$1,s)),void 0!==c&&i.set(r,c);}if(!s||!s.ignoreDefaults)for(const e of Object.getOwnPropertyNames(u))d[e]||f$1(t,e,i,s);i.setDefaultOrigin("user");}function d(e,t,r,n=c$2){var o;const s={...n,messages:[]};r(s),null==(o=s.messages)||o.forEach((t=>{"warning"!==t.type||e.loaded?n&&n.messages&&n.messages.push(t):e.loadWarnings.push(t);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=s$2.getLogger("esri.core.accessorSupport.write");function a$1(r,e,t,i,n){var o,s;const u={};return null==(o=e.write)||null==(s=o.writer)||s.call(r,i,u,t,n),u}function f(r,t$1,i,o,s,u){if(!o||!o.write)return !1;const a=r.get(i);if(!s&&o.write.overridePolicy){const e=o.write.overridePolicy.call(r,a,i,u);void 0!==e&&(s=e);}if(s||(s=o.write),!s||!1===s.enabled)return !1;if((null===a&&!s.allowNull&&!s.writerEnsuresNonNull||void 0===a)&&s.isRequired){const t=new s$3("web-document-write:property-required",`Missing value for required property '${i}' on '${r.declaredClass}'`,{propertyName:i,target:r});return t&&u&&u.messages?u.messages.push(t):t&&!u&&l.error(t.name,t.message),!1}if(void 0===a)return !1;if(null===a&&!s.allowNull&&!s.writerEnsuresNonNull)return !1;if(c$1(r,i,u,o,a))return !1;if(void 0!==o.default)return !0;if(!s.ignoreOrigin&&u&&u.origin){if(t$1.store.originOf(i)<t(u.origin))return !1}return !0}function c$1(e,t,i,n,o){const s=n.default;if(void 0===s)return !1;if(null!=n.defaultEquals)return n.defaultEquals(o);if("function"==typeof s){if(Array.isArray(o)){const n=s.call(e,t,i);return l$1(n,o)}return !1}return s===o}function g(r,e$1,t,i){const n=e(r),s=n.metadatas,l=s$4(s[e$1],i);return !!l&&f(r,n,e$1,l,t,i)}function p(r,e$1,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return u$2(e$1,r.toJSON());const n=e(r),l=n.metadatas;for(const o in l){const p=s$4(l[o],t);if(!f(r,n,o,p,void 0,t))continue;const d=r.get(o),m=a$1(r,p,p.write&&"string"==typeof p.write.target?p.write.target:o,d,t);var c,g;if(Object.keys(m).length>0)e$1=u$2(e$1,m),null!=t&&null!=(c=t.resources)&&null!=(g=c.pendingOperations)&&g.length&&Promise.all(t.resources.pendingOperations).then((()=>u$2(e$1,m))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:o,oldOrigin:c$3(n.store.originOf(o)),newOrigin:t.origin});}return e$1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=t=>{let i=class extends t{constructor(...r){super(...r);}read(r,t){u(this,r,t);}write(r={},t){return p(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return c.call(this,r,t)}};return i=e$1([i$2("esri.core.JSONSupport")],i),i.prototype.toJSON.isDefaultToJSON=!0,i};function c(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}let a=class extends(i(p$1)){};a=e$1([i$2("esri.core.JSONSupport")],a);

export { a, d, g, i, p, u };