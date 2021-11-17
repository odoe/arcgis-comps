'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,r,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return !1;const o=e.read.source;if("string"==typeof o){if(o===r)return !0;if(o.indexOf(".")>-1&&0===o.indexOf(r)&&request.s$10(o,n))return !0}else for(const s of o){if(s===r)return !0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&request.s$10(s,n))return !0}return !1}function i$1(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function a$1(e,t,r,o,a){let f=request.o$6(t[r],a);i$1(f)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))f=request.o$6(t[i],a),s(f,r,o)&&(e[i]=!0);}function f$1(e,t,r,n){const s=r.metadatas,i=request.a$4(s[t],"any",n),a=i&&i.default;if(void 0===a)return;const f="function"==typeof a?a.call(e,t,n):a;void 0!==f&&r.set(t,f);}const c$2={origin:"service"};function u(t,o,s=c$2){if(!o||"object"!=typeof o)return;const i=request.e$5(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(o))a$1(d,u,e,o,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const a=request.o$6(u[r],s).read,f=a&&a.source;let c;c=f&&"string"==typeof f?request.u$5(o,f):o[r],a&&a.reader&&(c=a.reader.call(t,c,o,s)),void 0!==c&&i.set(r,c);}if(!s||!s.ignoreDefaults)for(const e of Object.getOwnPropertyNames(u))d[e]||f$1(t,e,i,s);i.setDefaultOrigin("user");}function d(e,t,r,n=c$2){var o;const s={...n,messages:[]};r(s),null==(o=s.messages)||o.forEach((t=>{"warning"!==t.type||e.loaded?n&&n.messages&&n.messages.push(t):e.loadWarnings.push(t);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=request.s$2.getLogger("esri.core.accessorSupport.write");function a(r,e,t,i,n){var o,s;const u={};return null==(o=e.write)||null==(s=o.writer)||s.call(r,i,u,t,n),u}function f(r,t,i,o,s,u){if(!o||!o.write)return !1;const a=r.get(i);if(!s&&o.write.overridePolicy){const e=o.write.overridePolicy.call(r,a,i,u);void 0!==e&&(s=e);}if(s||(s=o.write),!s||!1===s.enabled)return !1;if((null===a&&!s.allowNull&&!s.writerEnsuresNonNull||void 0===a)&&s.isRequired){const t=new request.s$1("web-document-write:property-required",`Missing value for required property '${i}' on '${r.declaredClass}'`,{propertyName:i,target:r});return t&&u&&u.messages?u.messages.push(t):t&&!u&&l.error(t.name,t.message),!1}if(void 0===a)return !1;if(null===a&&!s.allowNull&&!s.writerEnsuresNonNull)return !1;if(c$1(r,i,u,o,a))return !1;if(void 0!==o.default)return !0;if(!s.ignoreOrigin&&u&&u.origin){if(t.store.originOf(i)<request.t$8(u.origin))return !1}return !0}function c$1(e,t,i,n,o){const s=n.default;if(void 0===s)return !1;if(null!=n.defaultEquals)return n.defaultEquals(o);if("function"==typeof s){if(Array.isArray(o)){const n=s.call(e,t,i);return request.l(n,o)}return !1}return s===o}function g(r,e,t,i){const n=request.e$5(r),s=n.metadatas,l=request.s$11(s[e],i);return !!l&&f(r,n,e,l,t,i)}function p(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return request.u$7(e,r.toJSON());const n=request.e$5(r),l=n.metadatas;for(const o in l){const p=request.s$11(l[o],t);if(!f(r,n,o,p,void 0,t))continue;const d=r.get(o),m=a(r,p,p.write&&"string"==typeof p.write.target?p.write.target:o,d,t);var c,g;if(Object.keys(m).length>0)e=request.u$7(e,m),null!=t&&null!=(c=t.resources)&&null!=(g=c.pendingOperations)&&g.length&&Promise.all(t.resources.pendingOperations).then((()=>request.u$7(e,m))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:o,oldOrigin:request.c$3(n.store.originOf(o)),newOrigin:t.origin});}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=t=>{let i=class extends t{constructor(...r){super(...r);}read(r,t){u(this,r,t);}write(r={},t){return p(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return c.call(this,r,t)}};return i=request.e([request.i("esri.core.JSONSupport")],i),i.prototype.toJSON.isDefaultToJSON=!0,i};function c(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}exports.a=class extends(i(request.p)){};exports.a=request.e([request.i("esri.core.JSONSupport")],exports.a);

exports.d = d;
exports.g = g;
exports.i = i;
exports.p = p;
exports.u = u;
