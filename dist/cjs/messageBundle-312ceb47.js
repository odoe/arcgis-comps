'use strict';

const index = require('./index-57f2cfbb.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$v(e,t,r,o){var c,f=arguments.length,n=f<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(n=(f<3?c(n):f>3?c(t,r,n):c(t,r))||n);return f>3&&n&&Object.defineProperty(t,r,n),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$r=null;function r$o(n){return null!=n}function t$q(n){return null==n}function u$n(n){return void 0===n}function o$y(t,u){return r$o(t)?u(t):n$r}function e$u(n){return n}function f$h(n,r){if(t$q(n))throw new Error(r);return n}function c$m(n,t){return r$o(n)?n:"function"==typeof t?t():t}function l$h(n){return r$o(n)&&n.destroy(),null}function i$v(n){return r$o(n)&&n.dispose(),null}function s$u(n){return r$o(n)&&n.remove(),null}function h$h(n){return r$o(n)&&n.release(),null}function w$9(n){return null}function d$m(n,r){const t=new Array;for(const u of n)t.push(A$b(u,null,r));return t}function v$c(n,r){for(const t of n)A$b(t,null,r);}function A$b(n,t,u){return r$o(n)?u(n):t}function E$6(n,t){return r$o(n)?t(n):null}function g$d(n){return n.filter((n=>r$o(n)))}function m$h(n,...r){let t=n;for(let u=0;u<r.length&&t;++u)t=t[r[u]];return t}function q$5(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$p{constructor(t=1){this._seed=t;}set seed(e){this._seed=null==e?Math.random()*t$p._m:e;}getInt(){return this._seed=(t$p._a*this._seed+t$p._c)%t$p._m,this._seed}getFloat(){return this.getInt()/(t$p._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(e,s){const n=s-e;return e+this.getInt()/t$p._m*n}}t$p._m=2147483647,t$p._a=48271,t$p._c=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$g(t,r,e){if(t$q(t)&&t$q(r))return !0;if(t$q(t)||t$q(r)||t.length!==r.length)return !1;if(e){for(let n=0;n<t.length;n++)if(!e(t[n],r[n]))return !1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return !1;return !0}function s$t(n,t,r){return n&&t?r?n.filter((function(n){return t.findIndex((function(t){return r(n,t)}))>-1})):n.filter((function(n){return t.indexOf(n)>-1})):[]}function a$m(n){return n&&"number"==typeof n.length}const d$l=!!Array.prototype.fill;function g$c(n,t){if(d$l)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function m$g(n,t){void 0===t&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}function M$4(n){return n.reduce(((n,t)=>n.concat(t||[])),[])}class w$8{constructor(){this.last=0;}}const y$d=new w$8;function b$8(n,t,r,e){e=e||y$d;const o=Math.max(0,e.last-10);for(let u=o;u<r;++u)if(n[u]===t)return e.last=u,u;const f=Math.min(o,r);for(let u=0;u<f;++u)if(n[u]===t)return e.last=u,u;return -1}function v$b(n,t,r,e){const o=null==r?n.length:r,f=b$8(n,t,o,e);if(-1!==f)return n[f]=n[o-1],null==r&&n.pop(),t}const A$a=new Set;function O$3(n,t,r=n.length,e=t.length,o,f){if(0===e||0===r)return r;A$a.clear();for(let i=0;i<e;++i)A$a.add(t[i]);o=o||y$d;const u=Math.max(0,o.last-10);for(let i=u;i<r;++i)if(A$a.has(n[i])&&(f&&f.push(n[i]),A$a.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$a.size||0===r))return A$a.clear(),r;for(let i=0;i<u;++i)if(A$a.has(n[i])&&(f&&f.push(n[i]),A$a.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$a.size||0===r))return A$a.clear(),r;return A$a.clear(),r}function C$4(n,t){const r=n.indexOf(t);return -1!==r?(n.splice(r,1),t):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$l,d$k;let r$n;var o$x,i$u;null!=(a$l=e$t.dojoConfig)&&a$l.has||null!=(d$k=e$t.esriConfig)&&d$k.has?r$n={...null==(o$x=e$t.dojoConfig)?void 0:o$x.has,...null==(i$u=e$t.esriConfig)?void 0:i$u.has}:r$n={};function s$s(a){return "function"==typeof r$n[a]?r$n[a]=r$n[a](e$t):r$n[a]}s$s.add=(e,a,d,o)=>((o||void 0===r$n[e])&&(r$n[e]=a),d&&s$s(e)),s$s.cache=r$n,s$s.add("esri-deprecation-warnings",!0),(()=>{s$s.add("host-webworker",void 0!==e$t.WorkerGlobalScope&&self instanceof e$t.WorkerGlobalScope);const a="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(s$s.add("host-browser",a),s$s.add("host-node","object"==typeof e$t.process&&e$t.process.versions&&e$t.process.versions.node&&e$t.process.versions.v8),s$s.add("dom",a),s$s("host-browser")){const e=navigator,a=e.userAgent,d=e.appVersion,r=parseFloat(d);if(s$s.add("wp",parseFloat(a.split("Windows Phone")[1])||void 0),s$s.add("msapp",parseFloat(a.split("MSAppHost/")[1])||void 0),s$s.add("khtml",d.includes("Konqueror")?r:void 0),s$s.add("edge",parseFloat(a.split("Edge/")[1])||void 0),s$s.add("opr",parseFloat(a.split("OPR/")[1])||void 0),s$s.add("webkit",!s$s("wp")&&!s$s("edge")&&parseFloat(a.split("WebKit/")[1])||void 0),s$s.add("chrome",!s$s("edge")&&!s$s("opr")&&parseFloat(a.split("Chrome/")[1])||void 0),s$s.add("android",!s$s("wp")&&parseFloat(a.split("Android ")[1])||void 0),s$s.add("safari",!d.includes("Safari")||s$s("wp")||s$s("chrome")||s$s("android")||s$s("edge")||s$s("opr")?void 0:parseFloat(d.split("Version/")[1])),s$s.add("mac",d.includes("Macintosh")),!s$s("wp")&&a.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),d=a.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(d.replace(/_/,".").replace(/_/g,""));s$s.add(e,r),s$s.add("ios",r);}s$s.add("trident",parseFloat(d.split("Trident/")[1])||void 0),s$s("webkit")||(!a.includes("Gecko")||s$s("wp")||s$s("khtml")||s$s("trident")||s$s("edge")||s$s.add("mozilla",r),s$s("mozilla")&&s$s.add("ff",parseFloat(a.split("Firefox/")[1]||a.split("Minefield/")[1])||void 0));}})(),(()=>{if(e$t.navigator){const e=navigator.userAgent,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),d=/iPhone/i.test(e);a&&s$s.add("esri-mobile",a),d&&s$s.add("esri-iPhone",d),s$s.add("esri-geolocation",!!navigator.geolocation);}s$s.add("esri-canvas-svg-support",!s$s("trident")),s$s.add("esri-wasm","WebAssembly"in e$t),s$s.add("esri-shared-array-buffer",(()=>{const a="SharedArrayBuffer"in e$t,d=!1===e$t.crossOriginIsolated;return a&&!d})),s$s.add("esri-atomics","Atomics"in e$t),s$s.add("esri-workers","Worker"in e$t),s$s.add("esri-text-decoder","TextDecoder"in e$t),s$s.add("esri-text-encoder","TextEncoder"in e$t),s$s.add("web-feat:cache","caches"in e$t),s$s.add("esri-workers-arraybuffer-transfer",!s$s("safari")||Number(s$s("safari"))>=12),s$s.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),s$s.add("featurelayer-simplify-payload-size-factors",[1,1,4]),s$s.add("featurelayer-snapshot-enabled",!0),s$s.add("featurelayer-snapshot-point-min-threshold",8e4),s$s.add("featurelayer-snapshot-point-max-threshold",4e5),s$s.add("featurelayer-snapshot-point-coverage",.1),s$s.add("featurelayer-advanced-symbols",!1),s$s.add("featurelayer-pbf",!0),s$s.add("featurelayer-pbf-statistics",!1),s$s.add("feature-layers-workers",!0),s$s.add("mapview-transitions-duration",200),s$s.add("mapserver-pbf-enabled",!1),s$s("host-webworker")||s$s("host-browser")&&(s$s.add("esri-csp-restrictions",(()=>{try{new Function;}catch{return !0}return !1})),s$s.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{s$s.add("esri-image-decode",!0,!0,!0);})).catch((()=>{s$s.add("esri-image-decode",!1,!0,!0);}))}return !1})),s$s.add("esri-url-encodes-apostrophe",(()=>{const a=e$t.document.createElement("a");return a.href="?'",a.href.includes("?%27")})),s$s.add("vectortilelayer-max-buffers",s$s("ff")?160:Number.POSITIVE_INFINITY));})();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$q(r,n){if(r.forEach)r.forEach(n);else for(let t=0;t<r.length;t++)n(r[t],t,r);}function t$o(r,n,t){if(r.slice)return r.slice(n,t);void 0===n?n=0:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n))),void 0===t?t=r.length:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t)));const o=Math.max(0,t-n),c=new(r.constructor)(o);for(let e=0;e<o;e++)c[e]=r[n+e];return c}function o$w(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name}function c$l(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function e$s(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function a$k(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u$m(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function i$t(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f$g(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function s$r(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function y$c(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function A$9(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function y$b(e,t){let n;if(t)for(n in e)e.hasOwnProperty(n)&&(void 0===e[n]?delete e[n]:e[n]instanceof Object&&y$b(e[n],!0));else for(n in e)e.hasOwnProperty(n)&&void 0===e[n]&&delete e[n];return e}function l$f(e){if(!e||"object"!=typeof e||"function"==typeof e)return e;if(c$l(e)||e$s(e)||a$k(e)||u$m(e)||i$t(e)||f$g(e)||s$r(e)||y$c(e)||A$9(e))return t$o(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer){return e.slice(0,e.byteLength)}if(e instanceof Map){const t=new Map;return e.forEach(((e,n)=>{t.set(n,l$f(e));})),t}if(e instanceof Set){const t=new Set;return e.forEach((e=>{t.add(l$f(e));})),t}let t;const y=e;if("function"==typeof y.clone)t=y.clone();else if("function"==typeof y.map&&"function"==typeof y.forEach)t=y.map(l$f);else if("function"==typeof y.notifyChange&&"function"==typeof y.watch)t=y.clone();else {t={};for(const n of Object.getOwnPropertyNames(e))t[n]=l$f(e[n]);}return t}function m$f(e,t){return e===t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t)||"function"==typeof(e||{}).getTime&&"function"==typeof(t||{}).getTime&&e.getTime()===t.getTime()||!1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$p(r,n,t=!1){return e$r(r,n,t)}function t$n(r,n){if(null!=n)return n[r]||i$s(r.split("."),!1,n)}function o$v(r,n,t){const o=r.split("."),e=o.pop(),u=i$s(o,!0,t);u&&e&&(u[e]=n);}function i$s(r,n,t){let o=t;for(const i of r){if(null==o)return;if(!(i in o)){if(!n)return;o[i]={};}o=o[i];}return o}function e$r(n,t,o){return t?Object.keys(t).reduce((function(n,i){let u=n[i],c=t[i];return u===c?n:void 0===u?(n[i]=l$f(c),n):(Array.isArray(c)||Array.isArray(n)?(u=u?Array.isArray(u)?n[i]=u.concat():n[i]=[u]:n[i]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{-1===u.indexOf(r)&&u.push(r);})):n[i]=c.concat())):c&&"object"==typeof c?n[i]=e$r(u,c,o):n.hasOwnProperty(i)&&!t.hasOwnProperty(i)||(n[i]=c),n)}),n||{}):n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o$u{constructor(o,s={ignoreUnknown:!1}){this.jsonToAPI=o,this.options=s,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(o),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(o,s,i)=>{const n=this.toJSON(o);void 0!==n&&o$v(i,n,s);},this.write.isJSONMapWriter=!0;}toJSON(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}invertMap(t){const o={};for(const s in t)o[t[s]]=s;return o}getKeysSorted(t){const o=[];for(const s in t)o.push(s);return o.sort(),o}}function s$q(){return function(t){return new o$u(t,{ignoreUnknown:!0})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$t,l$e,e$q;let t$m,r$m;const u$l=null!=(o$t=null==(l$e=e$t.esriConfig)?void 0:l$e.locale)?o$t:null==(e$q=e$t.dojoConfig)?void 0:e$q.locale;function c$k(){var o,l;return null!=(o=null!=u$l?u$l:null==(l=e$t.navigator)?void 0:l.language)?o:"en"}function i$r(){return void 0===r$m&&(r$m=c$k()),r$m}const d$j=[];function g$b(n){return d$j.push(n),{remove(){d$j.splice(d$j.indexOf(n),1);}}}const h$g=[];function p$g(n){return h$g.push(n),{remove(){d$j.splice(h$g.indexOf(n),1);}}}function m$e(){var n;const o=null!=(n=t$m)?n:c$k();r$m!==o&&(r$m=o,[...h$g].forEach((n=>{n.call(null,o);})),[...d$j].forEach((n=>{n.call(null,o);})));}null==e$t.addEventListener||e$t.addEventListener("languagechange",m$e);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$l={year:"numeric",month:"numeric",day:"numeric"},n$o={year:"numeric",month:"long",day:"numeric"},a$j={year:"numeric",month:"short",day:"numeric"},h$f={year:"numeric",month:"long",weekday:"long",day:"numeric"},m$d={hour:"numeric",minute:"numeric"},i$q={...m$d,second:"numeric"},s$p={"short-date":r$l,"short-date-short-time":{...r$l,...m$d},"short-date-short-time-24":{...r$l,...m$d,hour12:!1},"short-date-long-time":{...r$l,...i$q},"short-date-long-time-24":{...r$l,...i$q,hour12:!1},"short-date-le":r$l,"short-date-le-short-time":{...r$l,...m$d},"short-date-le-short-time-24":{...r$l,...m$d,hour12:!1},"short-date-le-long-time":{...r$l,...i$q},"short-date-le-long-time-24":{...r$l,...i$q,hour12:!1},"long-month-day-year":n$o,"long-month-day-year-short-time":{...n$o,...m$d},"long-month-day-year-short-time-24":{...n$o,...m$d,hour12:!1},"long-month-day-year-long-time":{...n$o,...i$q},"long-month-day-year-long-time-24":{...n$o,...i$q,hour12:!1},"day-short-month-year":a$j,"day-short-month-year-short-time":{...a$j,...m$d},"day-short-month-year-short-time-24":{...a$j,...m$d,hour12:!1},"day-short-month-year-long-time":{...a$j,...i$q},"day-short-month-year-long-time-24":{...a$j,...i$q,hour12:!1},"long-date":h$f,"long-date-short-time":{...h$f,...m$d},"long-date-short-time-24":{...h$f,...m$d,hour12:!1},"long-date-long-time":{...h$f,...i$q},"long-date-long-time-24":{...h$f,...i$q,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":m$d,"long-time":i$q},l$d=s$q()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});l$d.toJSON.bind(l$d);l$d.fromJSON.bind(l$d);const u$k={ar:"ar-u-nu-latn-ca-gregory"};let c$j=new WeakMap,D$4=s$p["short-date-short-time"];function T$4(t){const o=t||D$4;if(!c$j.has(o)){const t=i$r(),r=u$k[i$r()]||t;c$j.set(o,new Intl.DateTimeFormat(r,o));}return c$j.get(o)}function S$5(t){return s$p[t]||null}function L$6(t,o){return T$4(o).format(t)}p$g((()=>{c$j=new WeakMap,D$4=s$p["short-date-short-time"];}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$i={ar:"ar-u-nu-latn"};let e$p=new WeakMap,o$s={};function i$p(n){const i=n||o$s;if(!e$p.has(i)){const t=i$r(),o=a$i[i$r()]||t;e$p.set(i,new Intl.NumberFormat(o,n));}return q$5(e$p.get(i))}function u$j(t={}){const n={};return null!=t.digitSeparator&&(n.useGrouping=t.digitSeparator),null!=t.places&&(n.minimumFractionDigits=n.maximumFractionDigits=t.places),n}function m$c(t,n){return i$p(n).format(t)}p$g((()=>{e$p=new WeakMap,o$s={};}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$i="20211104",e$o="f56ab3008fdaea1ce910515531b6ddb258d83e4f";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$l={apiKey:void 0,applicationUrl:e$t.location&&e$t.location.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(e$t.esriConfig&&(n$p(t$l,e$t.esriConfig,!0),delete t$l.has),!t$l.assetsPath){const e="4.22.0";t$l.assetsPath=`https://cdn.jsdelivr.net/npm/@arcgis/core@${e}-next.${d$i}/assets`;}t$l.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(t$l,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath");}}),t$l.request.corsEnabledServers=[],t$l.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$n=/\{([^\}]+)\}/g;function n$n(t){return null==t?"":t}function r$k(r,o){return r.replace(e$n,"object"==typeof o?(e,r)=>n$n(t$n(r,o)):(t,e)=>n$n(o(e)))}function o$r(t,e){return t.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(t=>e&&-1!==e.indexOf(t)?t:`\\${t}`))}function c$i(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}function u$i(t){return (new DOMParser).parseFromString(t||"","text/html").body.innerText||""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$q={info:0,warn:1,error:2,none:3};class s$o{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s$o._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s$o.getLogger(this.module.slice(0,t)));}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e);}warn(...e){this._log("warn","always",...e);}info(...e){this._log("info","always",...e);}errorOnce(...e){this._log("error","once",...e);}warnOnce(...e){this._log("warn","once",...e);}infoOnce(...e){this._log("info","once",...e);}errorOncePerTick(...e){this._log("error","oncePerTick",...e);}warnOncePerTick(...e){this._log("warn","oncePerTick",...e);}infoOncePerTick(...e){this._log("info","oncePerTick",...e);}get test(){const e=this;return {loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return {resetLoggers(e={}){const t=s$o._loggers;return s$o._loggers=e,t},set throttlingDisabled(e){s$o._throttlingDisabled=e;}}}static getLogger(e){let t=s$o._loggers[e];return t||(t=new s$o({module:e})),t}_log(t,r,...o){if(!this._matchLevel(t))return;if("always"!==r&&!s$o._throttlingDisabled){const e=this._argsToKey(o),n=this._loggedMessages[t].get(e);if("once"===r&&null!=n||"oncePerTick"===r&&n&&n>=s$o._tickCounter)return;this._loggedMessages[t].set(e,s$o._tickCounter),s$o._scheduleTickCounterIncrement();}for(const s of t$l.log.interceptors)if(s(t,this.module,...o))return;this._inheritedWriter()(t,this.module,...o);}_parentWithMember(e,r){let o=this;for(;r$o(o);){const r=o[e];if(r$o(r))return r;o=o.parent;}return r}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...r){console[e](`[${t}]`,...r);}_matchLevel(t){const r=t$l.log.level?t$l.log.level:"warn";return o$q[this._parentWithMember("level",r)]<=o$q[t]}_argsToKey(...e){const t=(e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]";return c$i(JSON.stringify(e,t))}static _scheduleTickCounterIncrement(){s$o._tickCounterScheduled||(s$o._tickCounterScheduled=!0,Promise.resolve().then((()=>{s$o._tickCounter++,s$o._tickCounterScheduled=!1;})));}}s$o._loggers={},s$o._tickCounter=0,s$o._tickCounterScheduled=!1,s$o._throttlingDisabled=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$o=s$o.getLogger("esri.intl");function s$n(t,r,n={}){const{format:o={}}=n;return r$k(t,(t=>u$h(t,r,o)))}function u$h(t,e,n){let o,i;const s=t.indexOf(":");if(-1===s?o=t.trim():(o=t.slice(0,s).trim(),i=t.slice(s+1).trim()),!o)return "";const u=t$n(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$h(u,m):i?a$h(u,i):f$f(u)}function c$h(t,r){switch(r.type){case"date":return L$6(t,r.intlOptions);case"number":return m$c(t,r.intlOptions);default:return i$o.warn("missing format descriptor for key {key}"),f$f(t)}}function a$h(t,r){switch(r.toLowerCase()){case"dateformat":return L$6(t);case"numberformat":return m$c(t);default:return i$o.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L$6(t):/^numberformat/i.test(r)?m$c(t):f$f(t)}}function f$f(t){switch(typeof t){case"string":return t;case"number":return m$c(t);case"boolean":return ""+t;default:return t instanceof Date?L$6(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$m(e,s){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return "$";const i=t$n(n,s),r=null==i?"":i;if(void 0===r)throw new Error(`could not find key "${n}" in template`);return r.toString()}))}class s$m{constructor(t,n,i){this.name=t,this.details=i,this.message=void 0,this instanceof s$m&&(this.message=n&&e$m(n,i)||"");}toString(){return "["+this.name+"]: "+this.message}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$l extends s$m{constructor(e,t,r){if(super(e,t,r),!(this instanceof s$l))return new s$l(e,t,r)}toJSON(){if(null!=this.details)try{return {name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return l$f(r)}catch(s){return "[object]"}})))}}catch(r){throw s$o.getLogger("esri.core.Error").error(r),r}return {name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s$l(e.name,e.message,e.details)}}s$l.prototype.type="error";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$l(t){return {setTimeout:(e,o)=>{const r=t.setTimeout(e,o);return {remove:()=>t.clearTimeout(r)}}}}const o$p=e$l(e$t);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$k(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r$j(r,t,n){if(!e$k(r))throw new TypeError("target is not a Evented or EventTarget object");if("on"in r)return r.on(t,n);if(Array.isArray(t)){const e=t.slice();for(const t of e)r.addEventListener(t,n);return {remove(){for(const t of e)r.removeEventListener(t,n);}}}return r.addEventListener(t,n),{remove(){r.removeEventListener(t,n);}}}function t$k(t,n,o){if(!e$k(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(n,o);const i=r$j(t,n,(e=>{i.remove(),o.call(t,e);}));return {remove(){i.remove();}}}function n$m(e,t,n){let o=!1;const i=r$j(e,t,(r=>{o||n.call(e,r);}));return {resume(){o=!1;},pause(){o=!0;},remove(){i.remove();}}}const o$o={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function i$n({key:e}){return o$o[e]||e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$k(t){return Promise.all(t)}function f$e(t){return new Promise(((n,e)=>{try{t(n,e);}catch(r){Promise.resolve().then((()=>e(r)));}}))}function m$b(t="Aborted"){return new s$l("AbortError",t)}function h$e(t,n="Aborted"){if(p$f(t))throw m$b(n)}function a$g(t){return r$o(t)?"aborted"in t?t:t.signal:t}function p$f(t){const n=a$g(t);return r$o(n)&&n.aborted}function b$7(t){if(d$h(t))throw t}function w$7(t){if(!d$h(t))throw t}function j$8(t,n){const r=a$g(t);if(!t$q(r)){if(!r.aborted)return t$k(r,"abort",(()=>n()));n();}}function v$a(t,n){const r=a$g(t);if(!t$q(r))return h$e(r),t$k(r,"abort",(()=>n(m$b())))}function P$3(t,n){const e=a$g(n);return t$q(e)?t:new Promise(((e,r)=>{let o=j$8(n,(()=>r(m$b())));const i=()=>o=s$u(o);t.then(i,i),t.then(e,r);}))}function d$h(t){return t&&"AbortError"===t.name}function g$a(t){return t.catch((t=>{if(!d$h(t))throw t}))}function A$8(){let t=null;const n=new Promise(((n,e)=>{t={promise:void 0,resolve:n,reject:e};}));return t.promise=n,t}function T$3(t){if(!t)return;if("function"!=typeof t.forEach){const n=Object.keys(t);return T$3(n.map((n=>t[n]))).then((t=>{const e={};return n.forEach(((n,r)=>e[n]=t[r])),e}))}const n=t;return f$e((t=>{const e=[];let r=n.length;0===r&&t(e),n.forEach((n=>{const o={promise:n||Promise.resolve(n)};e.push(o),o.promise.then((t=>{o.value=t;})).catch((t=>{o.error=t;})).then((()=>{--r,0===r&&t(e);}));}));}))}function E$5(t){return T$3(t).then((t=>t.filter((t=>!!t.value)).map((t=>t.value))))}function C$3(t){return Promise.reject(t)}function k$7(t){return Promise.resolve(t)}function L$5(t,n,e){const r=new AbortController;return j$8(e,(()=>r.abort())),new Promise(((e,o)=>{let i=setTimeout((()=>{i=0,e(n);}),t);j$8(r,(()=>{i&&(clearTimeout(i),o(m$b()));}));}))}function O$2(t){return t&&"function"==typeof t.then}function U$5(t){return q$4(t)?t:Promise.resolve(t)}function q$4(t){return t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then}function z$4(t,n=-1){let e,r,o,i,c=null;const s=(...l)=>{if(e){r=l,i&&i.reject(m$b()),i=A$8();const t=q$5(i.promise);if(c){const t=c;c=null,t.abort();}return t}if(o=i||A$8(),i=null,n>0){const r=new AbortController;e=U$5(t(...l,r.signal));const o=e;L$5(n).then((()=>{e===o&&(i?r.abort():c=r);}));}else e=1,e=U$5(t(...l));const f=()=>{const t=r;r=o=e=c=null,null!=t&&s(...t);},h=e,a=o;return h.then(f,f),h.then(a.resolve,a.reject),q$5(a.promise)};return s}function B$4(){let n,e;const r=new Promise(((t,r)=>{n=t,e=r;})),o=t=>{n(t);};return o.resolve=t=>n(t),o.reject=t=>e(t),o.timeout=(n,e)=>o$p.setTimeout((()=>o.reject(e)),n),o.promise=r,o}function F$4(t){let n=new AbortController;const e=t(n.signal);let r={promise:e,finished:!1,abort:()=>{n&&(n.abort(),n=null);}};const o=()=>{r&&(r.finished=!0,r=null),n=null;};return e.then(o,o),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s$j=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o$n={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i$m(t){var e;return null!=(e=o$n[t])&&e}const a$f=[],c$g=new Map;function d$g(t){for(const e of c$g.keys())m$a(t.pattern,e)&&c$g.delete(e);}function l$c(t){return a$f.includes(t)||(d$g(t),a$f.unshift(t)),{remove(){const e=a$f.indexOf(t);e>-1&&(a$f.splice(e,1),d$g(t));}}}async function u$g(t){const e=i$r();c$g.has(t)||c$g.set(t,f$d(t,e));const n=c$g.get(t);return await _$9.add(n),n}function h$d(t){if(!s$j.test(t))return null;const[,e,n]=s$j.exec(t),r=e+(n?"-"+n.toUpperCase():"");return i$m(r)?r:i$m(e)?e:null}async function f$d(e,n){const r=[];for(const t of a$f)if(m$a(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(s){r.push(s);}if(r.length)throw new s$l("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new s$l("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function m$a(t,e){return "string"==typeof t?e.startsWith(t):t.test(e)}p$g((()=>{c$g.clear();}));const _$9=new class{constructor(){this._numLoading=0;}async waitForAll(){this._dfd&&await this._dfd.promise;}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=A$8());}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$f=s$o.getLogger("esri.core.urlUtils"),l$b=t$l.request,c$f="esri/config: esriConfig.request.proxyUrl is not set.",f$c=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,a$e=/^\s*http:/i,h$c=/^\s*https:/i,p$e=/^\s*file:/i,d$f=/:\d+$/,g$9=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,m$9=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),y$a=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class $$4{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let e=q$5(this.uri.match(m$9));this.scheme=e[2]||(e[1]?"":null),this.authority=e[4]||(e[3]?"":null),this.path=e[5],this.query=e[7]||(e[6]?"":null),this.fragment=e[9]||(e[8]?"":null),null!=this.authority&&(e=q$5(this.authority.match(y$a)),this.user=e[3]||null,this.password=e[4]||null,this.host=e[6]||e[7],this.port=e[9]||null);}toString(){return this.uri}}const x$4=new $$4(t$l.applicationUrl),O$1={},w$6=(()=>{const t=q$5(x$4.path),e=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return `${`${x$4.scheme}://${x$4.host}${null!=x$4.port?`:${x$4.port}`:""}`}${e}`})();function U$4(t){const e={path:null,query:null},n=new $$4(t),r=t.indexOf("?");return null===n.query?e.path=t:(e.path=t.substring(0,r),e.query=b$6(n.query)),n.fragment&&(e.hash=n.fragment,null===n.query&&(e.path=e.path.substring(0,e.path.length-(n.fragment.length+1)))),e}function b$6(t){const e=t.split("&"),n={};for(const r of e){if(!r)continue;const t=r.indexOf("=");let e,o;t<0?(e=decodeURIComponent(r),o=""):(e=decodeURIComponent(r.slice(0,t)),o=decodeURIComponent(r.slice(t+1)));let i=n[e];"string"==typeof i&&(i=n[e]=[i]),Array.isArray(i)?i.push(o):n[e]=o;}return n}function R$1(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function C$2(t,e){return t?e&&"function"==typeof e?Object.keys(t).map((n=>encodeURIComponent(n)+"="+encodeURIComponent(e(n,t[n])))).join("&"):Object.keys(t).map((n=>{const r=t[n];if(null==r)return "";const o=encodeURIComponent(n)+"=",i=e&&e[n];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>R$1(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):R$1(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function q$3(t=!1){let n,r=l$b.proxyUrl;if("string"==typeof t){n=rt(t);const e=A$7(t);e&&(r=e.proxyUrl);}else n=!!t;if(!r)throw u$f.warn(c$f),new s$l("urlutils:proxy-not-set",c$f);n&&ct()&&(r=ut(r));return U$4(r)}function j$7(t){const e=A$7(t);let n,r;if(e){const t=v$9(e.proxyUrl);n=t.path,r=t.query?b$6(t.query):null;}if(n){const e=U$4(t);t=n+"?"+e.path;const o=C$2({...r,...e.query});o&&(t=`${t}?${o}`);}return t}const L$4={path:"",query:""};function v$9(t){const e=t.indexOf("?");return -1!==e?(L$4.path=t.slice(0,e),L$4.query=t.slice(e+1)):(L$4.path=t,L$4.query=null),L$4}function I$2(t){return t=(t=ft(t=dt(t=v$9(t).path),!0)).toLowerCase()}function S$4(t){const e={proxyUrl:t.proxyUrl,urlPrefix:I$2(t.urlPrefix)},n=l$b.proxyRules,r=e.urlPrefix;let o=n.length;for(let i=0;i<n.length;i++){const t=n[i].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return -1;o=i;break}0===t.indexOf(r)&&(o=i+1);}return n.splice(o,0,e),o}function A$7(t){const e=l$b.proxyRules,n=I$2(t);for(let r=0;r<e.length;r++)if(0===n.indexOf(e[r].urlPrefix))return e[r]}function P$2(t,e){return t=k$6(t),e=k$6(e),ft(t)===ft(e)}function k$6(t){const e=(t=z$3(t)).indexOf("/sharing");return e>0?t.substring(0,e):t.replace(/\/+$/,"")}function B$3(t){const e=e=>null==e||e instanceof RegExp&&e.test(t)||"string"==typeof e&&t.startsWith(e),n=l$b.interceptors;if(n)for(const r of n)if(Array.isArray(r.urls)){if(r.urls.some(e))return r}else if(e(r.urls))return r;return null}function E$4(t,e,n=!1){const r=Ot(t),o=Ot(e);return !(!n&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function J$1(t){if("string"==typeof t){if(!Q$1(t))return !0;t=Ot(t);}if(E$4(t,x$4))return !0;const e=l$b.trustedServers||[];for(let n=0;n<e.length;n++){const r=N$5(e[n]);for(let e=0;e<r.length;e++)if(E$4(t,r[e]))return !0}return !1}function N$5(t){return O$1[t]||(nt(t)||et(t)?O$1[t]=[new $$4(T$2(t))]:O$1[t]=[new $$4(`http://${t}`),new $$4(`https://${t}`)]),O$1[t]}function T$2(t,e=w$6,n){return et(t)?n&&n.preserveProtocolRelative?t:"http"===x$4.scheme&&x$4.authority===M$3(t).slice(2)?`http:${t}`:`https:${t}`:nt(t)?t:q$5(D$3("/"===t[0]?at(e):e,t))}function W$1(t,e=w$6,n){if(!Q$1(t))return t;const r=z$3(t),o=r.toLowerCase(),i=z$3(e).toLowerCase().replace(/\/+$/,""),s=n?z$3(n).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return t;const u=(t,e,n)=>-1===(n=t.indexOf(e,n))?t.length:n;let l=u(o,"/",o.indexOf("//")+2),c=-1;for(;o.slice(0,l+1)===i.slice(0,l)+"/"&&(c=l+1,l!==o.length);)l=u(o,"/",l+1);if(-1===c)return t;if(s&&c<s.length)return t;t=r.slice(c);const f=i.slice(c-1).replace(/[^/]+/g,"").length;if(f>0)for(let a=0;a<f;a++)t=`../${t}`;else t=`./${t}`;return t}function z$3(t){return t=$t(t=yt(t=mt(t=T$2(t=t.trim()))))}function D$3(...t){const e=t.filter(r$o);if(!e||!e.length)return;const n=[];if(Q$1(e[0])){const t=e[0],r=t.indexOf("//");-1!==r&&(n.push(t.slice(0,r+1)),it(e[0])&&(n[0]+="/"),e[0]=t.slice(r+2));}else "/"===e[0][0]&&n.push("");const r=e.reduce(((t,e)=>e?t.concat(e.split("/")):t),[]);for(let o=0;o<r.length;o++){const t=r[o];".."===t&&n.length>0&&".."!==n[n.length-1]?n.pop():(!t&&o===r.length-1||t&&("."!==t||0===n.length))&&n.push(t);}return n.join("/")}function M$3(t,e=!1){if(F$3(t)||G$1(t))return null;let n=t.indexOf("://");if(-1===n&&et(t))n=2;else {if(-1===n)return null;n+=3;}const r=t.indexOf("/",n);return -1!==r&&(t=t.slice(0,r)),e&&(t=ft(t,!0)),t}function Q$1(t){return et(t)||nt(t)}function F$3(t){return null!=t&&"blob:"===t.slice(0,5)}function G$1(t){return "data:"===t.slice(0,5)}function H$1(t){const e=V$2(t);if(!e||!e.isBase64)return null;const n=atob(e.data),r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r.buffer}const K$1=/^data:(.*?)(;base64)?,(.*)$/;function V$2(t){const e=t.match(K$1);if(!e)return null;const[,n,r,o]=e;return {mediaType:n,isBase64:!!r,data:o}}function X$1(t){return t.isBase64?`data:${t.mediaType};base64,${t.data}`:`data:${t.mediaType},${t.data}`}function et(t){return null!=t&&void 0!==t&&"/"===t[0]&&"/"===t[1]}function nt(t){return f$c.test(t)}function rt(t){return h$c.test(t)||"https"===x$4.scheme&&et(t)}function ot(t){return a$e.test(t)||"http"===x$4.scheme&&et(t)}function it(t){return p$e.test(t)}function ut(t){return et(t)?`https:${t}`:t.replace(a$e,"https:")}function lt(){return "http"===x$4.scheme}function ct(){return "https"===x$4.scheme}function ft(t,e=!1){return et(t)?t.slice(2):(t=t.replace(f$c,""),e&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function at(t){const e=t.indexOf("//"),n=t.indexOf("/",e+2);return -1===n?t:t.slice(0,n)}function ht(t){let e=0;if(Q$1(t)){const n=t.indexOf("//");-1!==n&&(e=n+2);}const n=t.lastIndexOf("/");return n<e?t:t.slice(0,n+1)}function pt(t,e){if(!t)return "";const n=U$4(t).path.replace(/\/+$/,""),r=n.substring(n.lastIndexOf("/")+1);if(null==e||!e.length)return r;const o=new RegExp(`.(${e.join("|")})$`,"ig");return r.replace(o,"")}function dt(t){return t&&"/"===t[t.length-1]?t:`${t}/`}function gt(t){return t.replace(/\/+$/,"")}function mt(t){if(/^https?:\/\//i.test(t)){const e=v$9(t);t=(t=e.path.replace(/\/{2,}/g,"/")).replace("/","//"),e.query&&(t+=`?${e.query}`);}return t}function yt(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function $t(t){const e=l$b.httpsDomains;if(!ot(t))return t;const n=t.indexOf("/",7);let r;if(r=-1===n?t:t.slice(0,n),r=r.toLowerCase().slice(7),d$f.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","");}return lt()&&r===x$4.authority&&!g$9.test(t)||(ct()&&r===x$4.authority||e&&e.some((t=>r===t||r.endsWith(`.${t}`)))||ct()&&!A$7(t))&&(t=ut(t)),t}function xt(t,e,n){if(!(e&&n&&t&&Q$1(t)))return t;const r=t.indexOf("//"),o=t.indexOf("/",r+2),i=t.indexOf(":",r+2),s=Math.min(o<0?t.length:o,i<0?t.length:i);if(t.slice(r+2,s).toLowerCase()!==e.toLowerCase())return t;return `${t.slice(0,r+2)}${n}${t.slice(s)}`}function Ot(t){return "string"==typeof t?new $$4(T$2(t)):(t.scheme||(t.scheme=x$4.scheme),t)}function wt(t){return Lt.test(t)}function Ut(t,e){const n=U$4(t),r=Object.keys(n.query||{});return r.length>0&&e&&e.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),n.path}function bt(t,e,n){const r=U$4(t),o=r.query||{};return o[e]=String(n),`${r.path}?${C$2(o)}`}function Rt(t,e){const n=U$4(t),r=n.query||{};for(const i in e)r[i]=e[i];const o=C$2(r);return o?`${n.path}?${o}`:n.path}function qt(t){if(t$q(t))return null;const e=t.match(jt);return e?e[1]:null}const jt=/.*?\.([^\/]*)$/,Lt=/(^data:image\/svg|\.svg$)/i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$d="4.22",s$i={async request(e,r){var a;const{default:s}=await Promise.resolve().then(function () { return request; }),n=e.options,o=n.responseType;n.signal=null==r?void 0:r.signal,n.responseType="native"===o||"native-request-init"===o?"native-request-init":["blob","json","text"].includes(o)&&null!=(a=B$3(e.url))&&a.after?o:"array-buffer";const i=await s(e.url,n),u={data:i.data,ssl:i.ssl};switch(i.requestOptions.responseType){case"native-request-init":return delete u.data.signal,u;case"blob":u.data=await u.data.arrayBuffer();break;case"json":u.data=(new TextEncoder).encode(JSON.stringify(u.data)).buffer;break;case"text":u.data=(new TextEncoder).encode(u.data).buffer;}return {result:u,transferList:[u.data]}}};exports.n$7 = void 0;function o$m(e){exports.n$7=e;}function i$l(e){const t=exports.n$7&&exports.n$7.findCredential(e);return t&&t.token?bt(e,"token",t.token):e}s$s("host-webworker")||(s$s("edge")||s$s("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$j=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function r$i(c){const r=M$3(c,!0);return r&&r.endsWith(".arcgis.com")&&!t$j.includes(r)&&!c.endsWith("/sharing/rest/generateToken")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$i(t,i,s=!1,c){return new Promise(((d,a)=>{if(p$f(c))return void a(n$l());let m=()=>{v(),a(new Error(`Unable to load ${i}`));},l=()=>{const e=t;v(),d(e);},u=()=>{if(!t)return;const e=t;v(),e.src="",a(n$l());};const v=()=>{s$s("esri-image-decode")||(t.removeEventListener("error",m),t.removeEventListener("load",l)),m=null,l=null,t=null,r$o(c)&&c.removeEventListener("abort",u),u=null,s&&URL.revokeObjectURL(i);};r$o(c)&&c.addEventListener("abort",u),s$s("esri-image-decode")?t.decode().then(l,m):(t.addEventListener("error",m),t.addEventListener("load",l));}))}function n$l(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function E$3(e,t){var r;const s=G$1(e),n=F$3(e);n||s||(e=z$3(e));const l={url:e,requestOptions:{...e$u(t)}};let u=B$3(e);if(u){const e=await W(u,l);if(null!=e)return {data:e,getHeader:F$2,requestOptions:l.requestOptions,url:l.url};u.after||u.error||(u=null);}if(e=l.url,"image"===(t=l.requestOptions).responseType){if(s$s("host-webworker")||s$s("host-node"))throw H("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),l)}else if(s)throw H("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),l);if("head"===t.method){if(t.body)throw H("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),l);if(s||n)throw H("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),l)}if(await A$6(),L$3)return L$3.execute(e,t);const c=new AbortController;j$8(t,(()=>c.abort()));const h={controller:c,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:u,params:l,redoRequest:!1,useIdentity:j$6.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},y=await J(h);return null==(r=u)||null==r.after||r.after(y),y}let L$3;const j$6=t$l.request,U$3="FormData"in e$t,P$1=[499,498,403,401],D$2=["COM_0056","COM_0057","SB_0008"],_$8=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],F$2=()=>null,I$1=Symbol();function M$2(e){const t=M$3(e);t&&!E$3._corsServers.includes(t)&&E$3._corsServers.push(t);}function R(e){const t=M$3(e);return !t||t.endsWith(".arcgis.com")||E$3._corsServers.includes(t)||J$1(t)}function H(e,t,s,o){let a="Error";const i={url:s.url,requestOptions:s.requestOptions,getHeader:F$2,ssl:!1};if(t instanceof s$l)return t.details?(t.details=l$f(t.details),t.details.url=s.url,t.details.requestOptions=s.requestOptions):t.details=i,t;if(t){const e=o&&(e=>o.headers.get(e)),r=o&&o.status,s=t.message;s&&(a=s),e&&(i.getHeader=e),i.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,i.subCode=t.subcode,i.messageCode=t.messageCode,"string"==typeof t.details?i.messages=[t.details]:i.messages=t.details,i.raw=I$1 in t?t[I$1]:t;}return d$h(t)?m$b():new s$l(e,a,i)}async function A$6(){s$s("host-webworker")?L$3||(L$3=await Promise.resolve().then(function () { return require('./request-de258b6b.js'); })):E$3._abortableFetch||(E$3._abortableFetch=e$t.fetch.bind(e$t));}async function B$2(){exports.n$7||await Promise.resolve().then(function () { return require('./IdentityManager-d40c9589.js'); });}async function N$4(r){const o=r.params.url,n=r.params.requestOptions,a=r.controller.signal,i=n.body;let l=null,u=null,d=null;if(U$3&&"HTMLFormElement"in e$t&&(i instanceof FormData?l=i:i instanceof HTMLFormElement&&(u=i,l=new FormData(u))),"string"==typeof i&&(d=i),r.fetchOptions={cache:n.cacheBust&&!E$3._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:a},(l||d)&&(r.fetchOptions.body=l||d),"anonymous"===n.authMode&&(r.useIdentity=!1),r.hasToken=!!(/token=/i.test(o)||n.query&&n.query.token||l&&l.get&&l.get("token")||u&&u.elements.token),!r.hasToken&&t$l.apiKey&&r$i(o)&&(n.query||(n.query={}),n.query.token=t$l.apiKey,r.hasToken=!0),r.useIdentity&&!r.hasToken&&!r.credentialToken&&!$$3(o)&&!p$f(a)){let e;"immediate"===n.authMode?(await B$2(),e=await exports.n$7.getCredential(o,{signal:a}),r.credential=e):"no-prompt"===n.authMode?(await B$2(),e=await exports.n$7.getCredential(o,{prompt:!1,signal:a}).catch((()=>{})),r.credential=e):exports.n$7&&(e=exports.n$7.findCredential(o)),e&&(r.credentialToken=e.token,r.useSSL=!!e.ssl);}}function $$3(e){return _$8.some((t=>t.test(e)))}async function K(e){let r=e.params.url;const s=e.params.requestOptions,n=e.fetchOptions,a=F$3(r)||G$1(r),i=s.responseType||"json",l=a?0:null!=s.timeout?s.timeout:j$6.timeout;let c=!1;if(!a){e.useSSL&&(r=ut(r)),s.cacheBust&&"default"===n.cache&&(r=bt(r,"request.preventCache",Date.now()));let a={...s.query};e.credentialToken&&(a.token=e.credentialToken);let i=C$2(a);s$s("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=r.length+1+i.length;let u;c="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||l>j$6.maxUrlLength;const d=s.useProxy||!!A$7(r);if(d){const e=q$3(r);u=e.path,!c&&u.length+1+l>j$6.maxUrlLength&&(c=!0),e.query&&(a={...e.query,...a});}if("HEAD"===n.method&&(c||d)){if(c){if(l>j$6.maxUrlLength)throw H("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw H("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw H("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(c?(n.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?r=Rt(r,a):(n.body=C$2(a),n.headers["Content-Type"]="application/x-www-form-urlencoded")):r=Rt(r,a),d&&(e.useProxy=!0,r=`${u}?${r}`),a.token&&U$3&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",a.token):e.append("token",a.token);}if(s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials;else if(!E$4(r,x$4))if(J$1(r))e.withCredentials=!0;else if(exports.n$7){const s=exports.n$7.findServerInfo(r);s&&s.webTierAuth&&(e.withCredentials=!0);}e.withCredentials&&(n.credentials="include");}let m,f,v=0,C=!1;l>0&&(v=setTimeout((()=>{C=!0,e.controller.abort();}),l));try{if("native-request-init"===s.responseType)f=n,f.url=r;else if("image"!==s.responseType||"default"!==n.cache||"GET"!==n.method||c||G(s.headers)||!a&&!e.useProxy&&j$6.proxyUrl&&!R(r)){if(m=await E$3._abortableFetch(r,n),e.useProxy||M$2(r),"native"===s.responseType)f=m;else if("HEAD"!==n.method)if(m.ok){switch(i){case"array-buffer":f=await m.arrayBuffer();break;case"blob":case"image":f=await m.blob();break;default:f=await m.text();}if(v&&(clearTimeout(v),v=0),"json"===i||"xml"===i||"document"===i)if(f)switch(i){case"json":f=JSON.parse(f);break;case"xml":f=z$2(f,"application/xml");break;case"document":f=z$2(f,"text/html");}else f=null;if(f){if("array-buffer"===i||"blob"===i){const e=m.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e);}catch{}}"image"===i&&f instanceof Blob&&(f=await Q(URL.createObjectURL(f),e,!0));}}else f=await m.text();}else f=await Q(r,e);}catch(L){if("AbortError"===L.name){if(C)throw new Error("Timeout exceeded");throw m$b("Request canceled")}if(!(!m&&L instanceof TypeError&&j$6.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||R(r))throw L;e.redoRequest=!0,S$4({proxyUrl:j$6.proxyUrl,urlPrefix:M$3(r)});}finally{v&&clearTimeout(v);}return [m,f]}async function W(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let o,n;try{n=await e.before(t);}catch(s){o=H("request:interceptor",s,t);}if((n instanceof Error||n instanceof s$l)&&(o=H("request:interceptor",n,t)),o)throw e.error&&e.error(o),o;return n}}function G(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return !0;return !1}function z$2(e,t){let r;try{r=(new DOMParser).parseFromString(e,t);}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function J(e){var r,s;let o,n;await N$4(e);try{do{[o,n]=await K(e);}while(!await X(e,o,n))}catch(l){const t=H("request:server",l,e.params,o);throw t.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(t),t}const a=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(a)&&!e.hasToken&&!e.credentialToken&&null!=(r=n)&&null!=(s=r.user)&&s.username&&!J$1(a)){const e=M$3(a,!0);e&&j$6.trustedServers.push(e);}const i=e.credential;if(i&&exports.n$7){const e=exports.n$7.findServerInfo(i.server);let r=e&&e.owningSystemUrl;if(r){r=r.replace(/\/?$/,"/sharing");const e=exports.n$7.findCredential(r,i.userId);e&&-1===exports.n$7._getIdenticalSvcIdx(r,e)&&e.resources.unshift(r);}}return {data:n,getHeader:o?e=>o.headers.get(e):F$2,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function X(e,r,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!r||"native"===o.responseType||"native-request-init"===o.responseType)return !0;let n,a,i,l;if(!r.ok)throw n=new Error(`Unable to load ${r.url} status: ${r.status}`),n[I$1]=s,n;null!=s&&s.error&&(n=s.error),n&&(a=Number(n.code),i=n.hasOwnProperty("subcode")?Number(n.subcode):null,l=n.messageCode,l=l&&l.toUpperCase());const u=o.authMode;if(403===a&&(4===i||n.message&&n.message.toLowerCase().indexOf("ssl")>-1&&-1===n.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==P$1.indexOf(a)&&!$$3(e.params.url)&&(403!==a||-1===D$2.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await B$2();try{const r=await exports.n$7.getCredential(e.params.url,{error:H("request:server",n,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=r,e.credentialToken=r.token,e.useSSL=e.useSSL||r.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;n=c;}}if(n)throw n;return !0}function Q(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,t$i(o,e,r,s)}E$3._abortableFetch=null,E$3._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];

const request = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': E$3
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$h(e,n,r,s){const a=n.exec(r);if(!a)throw new s$l("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],h=h$d(s),u=`${c}${l}.json`,w=h?`${c}${l}_${h}.json`:u;let f;try{f=await i$k(e(w));}catch(d){if(w===u)throw new s$l("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d});try{f=await i$k(e(u));}catch(d){throw new s$l("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d})}}return f}async function i$k(t){if(r$o(l$a.fetchBundleAsset))return l$a.fetchBundleAsset(t);const n=await E$3(t,{responseType:"text"});return JSON.parse(n.data)}class a$c{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let o;o="string"==typeof r?e=>new URL(e,new URL(r,e$t.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=o,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return s$h(this.getAssetUrl,this.matcher,e,t)}}function c$e(e){return new a$c(e)}const l$a={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$j=s$o.getLogger("esri.assets");function a$b(t){if(!t$l.assetsPath)throw i$j.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$l("assets:path-not-set","config.assetsPath is not set");return D$3(t$l.assetsPath,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
l$c(c$e({pattern:"esri/",location:a$b}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$h(t){return t&&t.release&&"function"==typeof t.release}function i$i(t){return t&&t.acquire&&"function"==typeof t.acquire}class e$j{constructor(t,i,e,o=1,s=0){if(this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this.ctor)for(let n=0;n<s;n++)this._pool[n]=new this.ctor;this.allocationSize=Math.max(o,1);}destroy(){this.prune(0);}acquire(...t){let o;if(e$j.test.disabled)o=new this.ctor;else {if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this.ctor;}o=this._pool.pop();}return this.acquireFunction?this.acquireFunction(o,...t):i$i(o)&&o.acquire(...t),o}release(i){i&&!e$j.test.disabled&&(this.releaseFunction?this.releaseFunction(i):t$h(i)&&i.release(),this._pool.push(i));}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t);}this._pool.length=t;}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose();}}e$j.test={disabled:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$h(e){e.length=0;}class t$g{constructor(t=50,o=50){this._pool=new e$j(Array,void 0,r$h,o,t);}acquire(){return this._pool.acquire()}release(e){this._pool.release(e);}prune(){this._pool.prune(0);}static acquire(){return o$l.acquire()}static release(e){return o$l.release(e)}static prune(){o$l.prune();}}const o$l=new t$g(100);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$i=new Set;function i$h(n,i,o=!1){o&&e$i.has(i)||(o&&e$i.add(i),n.warn(`🛑 DEPRECATED - ${i}`));}function t$f(e,i,o={}){if(s$s("esri-deprecation-warnings")){const{moduleName:n}=o;s$g(e,`Function: ${(n?n+"::":"")+i+"()"}`,o);}}function r$g(e,i,o={}){if(s$s("esri-deprecation-warnings")){const{moduleName:n}=o;s$g(e,`Property: ${(n?n+"::":"")+i}`,o);}}function s$g(e,o,t={}){if(s$s("esri-deprecation-warnings")){const{replacement:n,version:r,see:s,warnOnce:a}=t;let c=o;n&&(c+=`\n\t🛠️ Replacement: ${n}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),i$h(e,c,a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$f(r){return n$k((()=>r.forEach((r=>r$o(r)&&r.remove()))))}function n$k(e){return {remove:()=>{e&&(e(),e=void 0);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$h(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i$g(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function u$e(r,n,t){if(t){return a$a(r,n,{policy:t,path:""})}return a$a(r,n,null)}function a$a(r,e,i){return e?Object.keys(e).reduce((function(r,o){let u=null,l="merge";if(i&&(u=i.path?`${i.path}.${o}`:o,l=i.policy(u)),"replace"===l)return r[o]=e[o],r;if(void 0===r[o])return r[o]=l$f(e[o]),r;let f=r[o],s=e[o];if(f===s)return r;if(Array.isArray(s)||Array.isArray(r))f=f?Array.isArray(f)?r[o]=f.concat():r[o]=[f]:r[o]=[],s&&(Array.isArray(s)||(s=[s]),s.forEach((r=>{-1===f.indexOf(r)&&f.push(r);})));else if(s&&"object"==typeof s)if(i){const n=i.path;i.path=q$5(u),r[o]=a$a(f,s,i),i.path=n;}else r[o]=a$a(f,s,null);else r.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(r[o]=s);return r}),r||{}):r}function f$b(r){return Array.isArray(r)?r:r.split(".")}function s$f(r){return r.indexOf(",")>-1?r.split(",").map((r=>r.trim())):[r.trim()]}function c$d(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...s$f(t));return n}return s$f(r)}function y$9(n,t,e,i){const o=c$d(t);if(1!==o.length){const t=o.map((r=>i(n,r,e)));return r$f(t)}return i(n,o[0],e)}function h$b(r){let n=!1;return ()=>{n||(n=!0,r());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$g(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const u=e$h(e);return i$g(u,i)?u.get(i):e[i]}function i$f(t,n,r){if(null==t)return t;const u=e$g(n[r],t);return !u&&r<n.length-1?void 0:r===n.length-1?u:i$f(u,n,r+1)}function u$d(n,r,u=0){return "string"==typeof r&&-1===r.indexOf(".")?e$g(r,n):i$f(n,f$b(r),u)}function o$k(t,n){return u$d(t,n)}function s$e(t,n){return void 0!==u$d(n,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o$j{constructor(t){this.autoDestroy=!1,this.properties=t;}}function n$j(r){let n=r.constructor.__accessorMetadata__;const c=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(n){if(!c){const e=Object.create(n.properties),c=n.autoDestroy;for(const r in e)e[r]=l$f(e[r]);n=new o$j(e),n.autoDestroy=c,Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});}}else n=new o$j({}),Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});return q$5(r.constructor.__accessorMetadata__)}function c$c(t){return n$j(t).properties}function s$d(t,e){const r=c$c(t);let o=r[e];return o||(o=r[e]={}),o}function i$e(t,e){return u$e(t,e,_$7)}const p$d=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function _$7(t){return p$d.test(t)?"replace":"merge"}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o$i,r$e=[];const s$c=s$o.getLogger("esri.core.Accessor");function i$d(t){void 0!==o$i&&o$i.onObservableAccessed(t);}let l$9=!1,f$a=!1;function a$9(t,n,e){if(l$9)return g$8(t,n,e);u$c(t);const o=n.call(e);return p$c(),o}function g$8(t,n,e){const o=l$9;l$9=!0,u$c(t);let r=null;try{r=n.call(e);}catch(c){f$a&&s$c.error(c);}return p$c(),l$9=o,r}function u$c(t){o$i=t,r$e.push(t);}function p$c(){const t=r$e.pop();o$i=r$e.length>0?r$e[r$e.length-1]:void 0,void 0!==t&&t.onTrackingEnd();}function d$e(t,n){if(32&n.flags)return;const e=f$a;f$a=!1,64&n.flags?g$8(n,n.metadata.get,t):h$a(t,n),f$a=e;}const m$8=[];function h$a(t,e){128&e.flags||(e.flags|=128,g$8(e,(()=>{const o=e.metadata.dependsOn||m$8;for(const e of o)if("string"==typeof e&&-1===e.indexOf("."))A$5(t,e,!1);else {const o=f$b(e);for(let n=0,e=t;n<o.length&&null!=e&&"object"==typeof e;++n)e=A$5(e,o[n],n!==o.length-1);}})),e.flags&=-129);}function A$5(t,n,o){const r="?"===n[n.length-1]?n.slice(0,-1):n;if(null!=t.getItemAt||Array.isArray(t)){const n=parseInt(r,10);if(!isNaN(n))return Array.isArray(t)?t[n]:t.getItemAt(n)}const s=e$h(t),c=null==s?void 0:s.properties.get(r);return c&&(i$d(c),d$e(t,c)),o?t[r]:void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$b{constructor(r,s){this._observers=r,this._observer=s;}remove(){C$4(this._observers,this._observer);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$i{constructor(s,t,e){this.properties=s,this.propertyName=t,this.metadata=e,this._observers=null,this._accessed=null,this._handles=null,this.flags=1|(e.nonNullable?8:0)|(e.hasOwnProperty("value")?16:0)|(void 0===e.get?32:0)|(void 0===e.dependsOn?64:0);}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles();}getComputed(){i$d(this);const i=this.properties.store,n=this.propertyName,l=this.flags,r=i.get(n);if(4&l)return r;if(1&~l&&i.has(n))return r;this.flags|=4;const h=this.properties.host;let o;64&l?o=a$9(this,this.metadata.get,h):(h$a(h,this),o=this.metadata.get.call(h)),i.set(n,o,1);const a=i.get(n);return a===r?this.flags&=-2:this.commit(),this.flags&=-5,a}onObservableAccessed(s){s!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(s)||this._accessed.push(s));}onTrackingEnd(){this._clearObservationHandles(),this.flags|=32;const s=this._accessed;if(null===s)return;let t=this._handles;null===t&&(t=this._handles=[]);for(let e=0;e<s.length;++e)t.push(s[e].observe(this));s.length=0;}observe(s){return null===this._observers&&(this._observers=[]),this._observers.includes(s)||this._observers.push(s),new s$b(this._observers,s)}notifyChange(){this.onInvalidated(),this.onCommitted();}invalidate(){this.onInvalidated();}onInvalidated(){2&~this.flags&&(this.flags|=1);const s=this._observers;if(null!==s)for(let t=0;t<s.length;++t)s[t].onInvalidated();}commit(){this.flags&=-2,this.onCommitted();}onCommitted(){if(null===this._observers)return;const s=this._observers.slice();for(let t=0;t<s.length;++t)s[t].onCommitted();}_clearObservationHandles(){const s=this._handles;if(null!==s){for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$d=7;function t$e(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function n$h(r){switch(r){case 0:return "defaults";case 2:return "service";case 3:return "portal-item";case 4:return "web-scene";case 5:return "web-map";case 6:return "user"}return q$5(void 0)}function c$b(e){return n$h(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$a{constructor(){this._values=new Map;}clone(t){const r=new s$a;return this._values.forEach(((s,a)=>{t&&t.has(a)||r.set(a,l$f(s));})),r}get(e){return this._values.get(e)}originOf(){return 6}keys(){return [...this._values.keys()]}set(e,s){this._values.set(e,s);}delete(e){this._values.delete(e);}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p$b(t,e,s){return void 0!==t}function f$9(t,e,s,i){return void 0!==t&&(!(null==s&&8&t.flags)||(!1))}function u$b(t){return t&&"function"==typeof t.destroy}s$o.getLogger("esri.core.accessorSupport.Properties");class g$7{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=0,this.store=new s$a,this._origin=6;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const r in s){const t=new n$i(this,r,s[r]);this.properties.set(r,t);}this.metadatas=s,this._autoDestroy=e.autoDestroy;}initialize(){this.lifecycle=1;}constructed(){this.lifecycle=2;}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const s=this.internalGet(t);s&&u$b(s)&&(s.destroy(),8&~e.flags&&this._internalSet(e,null)),e.destroy();}else for(const[t,e]of this.properties)e.destroy();}get initialized(){return 0!==this.lifecycle}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();i$d(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&16&e.flags)return "defaults"}return n$h(e)}has(t){return !!this.properties.has(t)&&this.store.has(t)}keys(){return [...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(p$b(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);p$b(s)&&this._internalSet(s,e);}getDependsInfo(t,e,s){const r=this.properties.get(e);if(!p$b(r))return "";const o=new Set,n=a$9({onObservableAccessed:t=>o.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=r.metadata.get)?void 0:e.call(t)}));let a=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===o.size)return a;s+="  ";for(const c of o){if(!(c instanceof n$i))continue;const t=c.properties.host,e=c.propertyName,r=e$h(t);a+=r?r.getDependsInfo(t,e,s):`${s}${e}: undefined\n`;}return a}setAtOrigin(t,e,s){const i=this.properties.get(t);if(p$b(i))return this._setAtOrigin(i,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(2&e.flags)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&2&e.flags&&(e.flags&=-3,e.notifyChange());}override(t,e){const s=this.properties.get(t);if(!f$9(s,t,e))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$7.release(t),!s)return;e=r;}s.flags|=2,this._internalSet(s,e);}set(t,e){const s=this.properties.get(t);if(!f$9(s,t,e))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$7.release(t),!s)return;e=r;}const r=s.metadata.set;r?r.call(this.host,e):this._internalSet(s,e);}setDefaultOrigin(t){this._origin=t$e(t);}getDefaultOrigin(){return n$h(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange();}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate();}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit();}_internalSet(t,e){const s=0!==this.lifecycle?this._origin:0;this._setAtOrigin(t,e,s);}_setAtOrigin(e,s,i){const r=this.store,o=e.propertyName;r.has(o,i)&&m$f(s,r.get(o))&&2&~e.flags&&i===r.originOf(o)||(e.invalidate(),r.set(o,s,i),e.commit(),d$e(this.host,e));}_cast(t,e){const s=m$7.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}class d$d{constructor(){this.value=null,this.valid=!0;}acquire(){this.valid=!0;}release(){this.value=null;}}const m$7=new e$j(d$d);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$d(e,r,s){if(e&&r)if("object"==typeof r)for(const o of Object.getOwnPropertyNames(r))t$d(e,o,r[o]);else {if(-1!==r.indexOf(".")){const i=r.split("."),f=i.splice(i.length-1,1)[0];return void t$d(o$k(e,i),f,s)}e[r]=s;}}s$o.getLogger("esri.core.accessorSupport.set");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$c extends e$j{constructor(){super(...arguments),this._set=new Set;}destroy(){super.destroy(),this._set=w$9();}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e));}_dispose(e){this._set.delete(e),super._dispose(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$f(){return e$t.queueMicrotask?e$t.queueMicrotask:e=>{e$t.Promise.resolve().then(e);}}const t$b=e$f(),n$g=[];function r$c(o){n$g.push(o),1===n$g.length&&t$b((()=>{const o=n$g.slice();n$g.length=0;for(const e of o)e();}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$a=29;class e$e{constructor(e,s=t$a){this.name=e,this._counter=0,this._items=new Array(s);}record(t){this._items[++this._counter%this._items.length]=t;}get median(){return this._items.slice().sort(((t,e)=>t-e))[Math.floor(this._items.length/2)]}get average(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}get last(){return this._items[this._counter%this._items.length]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$h;!function(o){const t=(o,t,n,e)=>{let i=t,c=t;const l=n>>>1,r=o[i-1];for(;c<=l;){c=i<<1,c<n&&e(o[c-1],o[c])<0&&++c;const t=o[c-1];if(e(t,r)<=0)break;o[i-1]=t,i=c;}o[i-1]=r;},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c);const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c);}}function*i(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c),yield;const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c),yield;}}o.sort=e,o.iterableSort=i;}(o$h||(o$h={}));const t$9=o$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$d=1.5,l$8=1.1;class n$f{constructor(h){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new w$8,h&&(h.initialSize&&(this.data=new Array(h.initialSize)),h.allocator&&(this._allocator=h.allocator),void 0!==h.deallocator&&(this._deallocator=h.deallocator),h.shrink&&(this._shrink=()=>r$b(this)));}toArray(){return this.data.slice(0,this.length)}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t;}else {if(this._deallocator)for(let h=t;h<this._length;++h)this.data[h]=this._deallocator(this.data[h]);this._length=t,this._shrink();}}clear(){this.length=0;}prune(){this.clear(),this.data=[];}push(t){this.data[this._length++]=t;}pushArray(t,h=t.length){for(let i=0;i<h;i++)this.data[this._length++]=t[i];}fill(t,h){for(let i=0;i<h;i++)this.data[this._length++]=t;}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return ++this._length,t}unshift(t){this.data.unshift(t),this._length++,r$b(this);}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const i=b$8(this.data,t,this.length,this._hint);if(-1!==i)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){const h=v$b(this.data,t,this.length,this._hint);return void 0!==h&&(this.length=this.length-1),this._shrink(),h}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,h=t.length,i){this.length=O$3(this.data,t,this.length,h,this._hint,i),this._shrink();}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,h){t>=this.length||h>=this.length||t===h||([this.data[t],this.data[h]]=[this.data[h],this.data[t]]);}sort(t){t$9.sort(this.data,0,this.length,t);}iterableSort(t){return t$9.iterableSort(this.data,0,this.length,t)}some(t,h){for(let i=0;i<this.length;++i)if(t.call(h,this.data[i],i,this.data))return !0;return !1}filterInPlace(t,h){let i=0;for(let s=0;s<this._length;++s){const a=this.data[s];t.call(h,a,s,this.data)&&(this.data[s]=this.data[i],this.data[i]=a,i++);}if(this._deallocator)for(let s=i;s<this._length;s++)this.data[s]=this._deallocator(this.data[s]);return this._length=i,this._shrink(),this}forAll(t,h){const i=this.length,s=this.data;for(let a=0;a<i;++a)t.call(h,s[a],a,s);}forEach(t,h){for(let i=0;i<this.length;++i)t.call(h,this.data[i],i,this.data);}map(t,h){const i=new Array(this.length);for(let s=0;s<this.length;++s)i[s]=t.call(h,this.data[s],s,this.data);return i}reduce(t,h){let i=h;for(let s=0;s<this.length;++s)i=t(i,this.data[s],s,this.data);return i}has(t){const h=this.length,i=this.data;for(let s=0;s<h;++s)if(i[s]===t)return !0;return !1}}function r$b(t){t.data.length>e$d*t.length&&(t.data.length=Math.floor(t.length*l$8));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$e(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c$a{constructor(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1;}}class m$6{constructor(e){this.callback=e,this.isActive=!0;}remove(){this.isActive=!1;}}let l$7=0;const u$a={time:n$e(0),deltaTime:n$e(0),elapsedFrameTime:n$e(0),frameDuration:n$e(0)},f$8=["prepare","preRender","render","postRender","update"],h$9=[],d$c=new n$f;class w$5{constructor(e){this._task=e;}remove(){this._task.removed=!0;}pause(){this._task.paused=!0;}resume(){this._task.paused=!1;}}const k$5={frameTasks:d$c,willDispatch:!1,clearFrameTasks:j$5,dispatch:b$5,executeFrameTasks:D$1};function v$8(e){const r=new m$6(e);return h$9.push(r),k$5.willDispatch||(k$5.willDispatch=!0,r$c(b$5)),r}function A$4(e){const t=new c$a(e);return d$c.push(t),null==T$1&&(l$7=performance.now(),T$1=requestAnimationFrame(x$3)),new w$5(t)}let T$1=null;function j$5(e=!1){d$c.forAll((e=>{e.removed=!0;})),e&&_$6();}function x$3(){const e=performance.now();T$1=null,T$1=d$c.length>0?requestAnimationFrame(x$3):null,k$5.executeFrameTasks(e);}function D$1(e){const t=n$e(e-l$7);l$7=e;const r=1e3/60,s=Math.max(0,t-r);for(let o=0;o<f$8.length;o++){const n=performance.now(),a=f$8[o];d$c.forAll((n=>{var c;if(n.paused||n.removed)return;0===o&&n.ticks++;n.phases[a]&&(u$a.time=e,u$a.deltaTime=0===n.ticks?n$e(0):t,u$a.elapsedFrameTime=n$e(performance.now()-e),u$a.frameDuration=n$e(r-s),null==(c=n.phases[a])||c.call(n,u$a));})),M$1[o].record(performance.now()-n);}_$6(),q$2.record(performance.now()-e);}const g$6=new n$f;function _$6(){d$c.forAll((e=>{e.removed&&g$6.push(e);})),d$c.removeUnorderedMany(g$6.data,g$6.length),g$6.clear();}function b$5(){for(;h$9.length;){const t=q$5(h$9.shift());t.isActive&&t.callback();}k$5.willDispatch=!1;}function y$8(e=1,r){const s=B$4(),i=()=>{p$f(r)?s.reject(m$b()):0===e?s():(--e,r$c((()=>i())));};return i(),s.promise}const M$1=f$8.map((e=>new e$e(e))),q$2=new e$e("total");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$8=0;function e$c(){return ++t$8}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$9{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0;}destroy(){this._accessed.length=0,this.clear();}onInvalidated(){this._invalidCount++;}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0;}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s);}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0;}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r$a=!1;const e$b=[];function o$g(e,o){let u=new s$9(s),l=null,f=!1;function s(){if(!u||f)return;if(r$a)return void i$c(s);const t=l;u.clear(),r$a=!0,f=!0,l=a$9(u,e),f=!1,r$a=!1,o(l,t),c$9();}function m(){u&&(u.destroy(),u=null,l=null);}return f=!0,l=a$9(u,e),f=!1,{remove:m}}function u$9(r,e){let o=new s$9(l),u=null;function l(){e(u,c);}function i(){o&&(o.destroy(),o=null),u=null;}function c(){return o?(o.clear(),u=a$9(o,r),u):null}return c(),{remove:i}}function l$6(e){let o=new s$9(l),u=!1;function l(){o&&!u&&(r$a?i$c(l):(o.clear(),r$a=!0,u=!0,a$9(o,e),u=!1,r$a=!1,c$9()));}function f(){o&&(o.destroy(),o=null);}return u=!0,a$9(o,e),u=!1,{remove:f}}function i$c(n){e$b.includes(n)||e$b.unshift(n);}function c$9(){for(;e$b.length;)e$b.pop()();}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d$b{constructor(){this.uid=e$c(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null;}static acquireUntracked(e,r,o,l,i){return this.pool.acquire(0,e,r,o,l,i,m$f)}static acquireTracked(e,t,r,o){return this.pool.acquire(1,e,t,r,null,null,o)}notify(e,t){0===this.type?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t);}acquire(e,t,r,o,l,n,s){this.uid=e$c(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=o,this.target=l,this.path=n,this.equals=s;}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=e$c(),this.removed=!0;}}d$b.pool=new t$c(d$b);const h$8=new t$g,f$7=new Set;let m$5;function p$a(e){f$7.delete(e),f$7.add(e),m$5||(m$5=v$8(q$1));}function v$7(e){if(e.removed)return;const t=e.oldValue,r=e.getValue();e.equals(t,r)||(e.oldValue=r,e.notify(r,t));}function _$5(e){for(const t of f$7.values())t.target===e&&(t.removed=!0);}function q$1(){let e=10;for(;m$5&&e--;){m$5=null;const e=j$4(),t=h$8.acquire();for(const r of e){const e=r.uid;v$7(r),e===r.uid&&r.removed&&t.push(r);}for(const r of f$7)r.removed&&(t.push(r),f$7.delete(r));for(const r of t)d$b.pool.release(r);h$8.release(t),h$8.release(e),k$4.forEach((e=>e()));}}function j$4(){const e=h$8.acquire();e.length=f$7.size;let t=0;for(const r of f$7)e[t]=r,++t;return f$7.clear(),e}const k$4=new Set;function V$1(e,t,r){let o=y$9(e,t,r,((e,t,r)=>{let l,i,s=u$9((()=>u$d(e,t)),((n,s)=>{e.__accessor__.destroyed||l&&l.uid!==i?o.remove():(l||(l=d$b.acquireUntracked(n,r,s,e,t),i=l.uid),p$a(l));}));return {remove:h$b((()=>{s.remove(),l&&(l.uid!==i||l.removed||(l.removed=!0,p$a(l)),l=null),o=s=null;}))}}));return o}function b$4(e,r,o){const l=y$9(e,r,o,((e,r,o)=>{let i=!1;return o$g((()=>u$d(e,r)),((n,s)=>{e.__accessor__.destroyed?l.remove():i||(i=!0,m$f(s,n)||o.call(e,n,s,r,e),i=!1);}))}));return l}function w$4(e,t,r,o=!1){return !e.__accessor__||e.__accessor__.destroyed?{remove(){}}:o?b$4(e,t,r):V$1(e,t,r)}function U$2(e,t,r){let o,l,i=u$9(e,((e,n)=>{o&&o.uid!==l?i.remove():(o||(o=d$b.acquireTracked(e,t,n,r),l=o.uid),p$a(o));}));return {remove:h$b((()=>{i.remove(),o&&(o.uid!==l||o.removed||(o.removed=!0,p$a(o)),o=null),i=null;}))}}function S$3(e,t,r){let o=!1;return o$g(e,((e,l)=>{o||(o=!0,r(l,e)||t(e,l),o=!1);}))}function A$3(e,r,o=!1,l=m$f){return o?S$3(e,r,l):U$2(e,r,l)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$d(n,t){for(const[r,o]of n)if(t(o,r))return !0;return !1}function r$9(n,t,r){const o=n.get(t);if(void 0!==o)return o;const f=r();return n.set(t,f),f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$8=s$o.getLogger("esri.core.Accessor");function t$7(e){return null==e?e:new Date(e)}function o$f(e){return null==e?e:!!e}function u$8(e){return null==e?e:e.toString()}function a$8(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function s$8(e){return null==e?e:Math.round(parseFloat(e))}function l$5(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function i$b(e,n){return null!=n&&e&&!(n instanceof e)}function c$8(e){return e&&"isCollection"in e}function f$6(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function p$9(e,n){if(!n||!n.constructor||!c$8(n.constructor))return y$7(e,n)?n:new e(n);const r=f$6(e.prototype.itemType),t=f$6(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(y$7(e,n),n):new e(n):n}function y$7(e,n){return !!l$5(n)&&(r$8.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+g$5(e)+"'"),!0)}function v$6(e,n){return null==n?n:c$8(e)?p$9(e,n):i$b(e,n)?y$7(e,n)?n:new e(n):n}function g$5(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const d$a=new WeakMap;function h$7(e){switch(e){case Number:return a$8;case S$2:return s$8;case Boolean:return o$f;case String:return u$8;case Date:return t$7;default:return r$9(d$a,e,(()=>v$6.bind(null,e)))}}function b$3(e,n){const r=h$7(e);return 1===arguments.length?r:r(n)}function m$4(e,n,r){return 1===arguments.length?m$4.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function w$3(e,n){return 1===arguments.length?m$4(b$3.bind(null,e)):m$4(b$3.bind(null,e),n)}function A$2(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>A$2(e,n-1,r))):e(r)}function $$2(e,n,r){if(2===arguments.length)return $$2.bind(null,e,n);if(!r)return r;let t=n,o=r=A$2(e,n,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function j$3(e,n,r){return 2===arguments.length?$$2(b$3.bind(null,e),n):$$2(b$3.bind(null,e),n,r)}function k$3(e){return !!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return !("string"===r||"number"===r||"function"===r&&e.length>1)}))}function M(e,n){if(2===arguments.length)return M(e).call(null,n);const t=new Set,o=e.filter((e=>"function"!=typeof e)),u=e.filter((e=>"function"==typeof e));for(const r of e)"string"!=typeof r&&"number"!=typeof r||t.add(r);let a=null,s=null;return (e,n)=>{if(null==e)return e;const l=typeof e,c="string"===l||"number"===l;return c&&(t.has(e)||u.some((e=>"string"===l&&e===String||"number"===l&&e===Number)))||"object"===l&&u.some((n=>!i$b(e,n)))?e:(c&&o.length?(a||(a=o.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),r$8.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&u.length?(s||(s=u.map((e=>g$5(e))).join(", ")),r$8.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):r$8.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function N$3(e,n){if(2===arguments.length)return N$3(e).call(null,n);const t={},o=[],u=[];for(const r in e.typeMap){const n=e.typeMap[r];t[r]=b$3(n),o.push(g$5(n)),u.push(r);}const a=()=>`'${o.join("', '")}'`,s=()=>`'${u.join("', '")}'`,c="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!i$b(e.base,n))return n;if(null==n)return n;const o=c(n)||e.defaultKeyValue,u=t[o];if(!u)return r$8.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${s()})`),null;if(!i$b(e.typeMap[o],n))return n;if("string"==typeof e.key&&!l$5(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return u(r)}return u(n)}}class S$2{}const T={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function _$4(e){if(!e||!("type"in e))return !1;switch(e.type){case"native":case"array":case"one-of":return !0}return !1}function B$1(e){switch(e.type){case"native":return b$3(e.value);case"array":return m$4(B$1(e.value));case"one-of":return C$1(e);default:return null}}function C$1(e){let n=null;return (t,o)=>F$1(t,e)?t:(null==n&&(n=D(e)),r$8.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),o&&(o.valid=!1),null)}function D(e){switch(e.type){case"native":switch(e.value){case Number:return "number";case String:return "string";case Boolean:return "boolean";case S$2:return "integer";case Date:return "date";default:return g$5(e.value)}case"array":return `array of ${D(e.value)}`;case"one-of":{const n=e.values.map((e=>D(e)));return `one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return "unknown"}function F$1(e,n){if(null==e)return !0;switch(n.type){case"native":switch(n.value){case Number:case S$2:return "number"==typeof e;case Boolean:return "boolean"==typeof e;case String:return "string"==typeof e}return e instanceof n.value;case"array":return !!Array.isArray(e)&&!e.some((e=>!F$1(e,n.value)));case"one-of":return n.values.some((n=>F$1(e,n)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d$9(n={}){return (o,i)=>{if(o===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${o.name}.${i}. Accessor does not support static properties.`);const s=Object.getOwnPropertyDescriptor(o,i),a=s$d(o,i);s&&(s.get||s.set?(a.get=s.get||a.get,a.set=s.set||a.set):"value"in s&&("value"in n&&s$o.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${i}" on "${o.constructor.name}" already defined in the metadata`,n),a.value=n.value=s.value)),null!=n.readOnly&&(a.readOnly=n.readOnly);const c=n.aliasOf;if(c){const t="string"==typeof c?c:c.source,e="string"==typeof c?null:!0===c.overridable;let r;a.dependsOn=[t],a.get=function(){let e=o$k(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=o$k(this,r);n&&(e=e.bind(n));}return e},a.readOnly||(a.set=e?function(t){void 0!==t?this._override(i,t):this._clearOverride(i);}:function(e){t$d(this,t,e);});}const p=n.type,u=n.types;a.cast||(p?a.cast=h$6(p):u&&(Array.isArray(u)?a.cast=m$4(N$3(u[0])):a.cast=N$3(u))),n.range&&(a.cast=v$5(a.cast,n.range)),i$e(a,n);}}function y$6(t,e,r){const n=s$d(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function h$6(t){let e=0,r=t;if(_$4(t))return B$1(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const l=r;if(k$3(l))return 0===e?M(l):$$2(M(l),e);if(1===e)return w$3(l);if(e>1)return j$3(l,e);const f=t;return f.from?f.from:b$3(f)}function v$5(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$c(n){if(n.json&&n.json.origins){const o=n.json.origins,e={"web-document":["web-scene","web-map"]};for(const n in e)if(o[n]){const s=o[n];e[n].forEach((n=>{o[n]=s;})),delete o[n];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$6 extends s$m{constructor(e,s,r){if(super(e,s,r),!(this instanceof t$6))return new t$6(e,s,r)}}t$6.prototype.type="warning";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$a(e){return !!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$a=s$o.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p$8(t,r,n){var o,i;t&&(!n&&!r.read||null!=(o=r.read)&&o.reader||!1===(null==(i=r.read)?void 0:i.enabled)||d$8(t)&&o$v("read.reader",u$7(t),r));}function u$7(t){var e;const r=null!=(e=t.ndimArray)?e:0;if(r>1)return c$7(t);if(1===r)return a$7(t);if("type"in t&&l$4(t.type)){var n,o;const e=null==(n=t.type.prototype)||null==(o=n.itemType)?void 0:o.Type,r=a$7("function"==typeof e?{type:e}:{types:e});return (e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return s$7(t)}function s$7(t){return "type"in t?y$5(t.type):j$2(t.types)}function y$5(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void i$a.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const p=new t;return p.read(e,n),p}:t.fromJSON}function f$5(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>f$5(t,e,r,n-1))):t(e,void 0,r)}function c$7(t){var e;const r=s$7(t),n=f$5.bind(null,r),o=null!=(e=t.ndimArray)?e:0;return (t,e,r)=>{if(null==t)return t;t=n(t,r,o);let i=o,p=t;for(;i>0&&Array.isArray(p);)i--,p=p[0];if(void 0!==p)for(let n=0;n<i;n++)t=[t];return t}}function a$7(t){const e=s$7(t);return (t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t);}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function l$4(t){if(!e$a(t))return !1;const e=t.prototype.itemType;return !(!e||!e.Type)&&("function"==typeof e.Type?v$4(e.Type):m$3(e.Type))}function d$8(t){return "types"in t?m$3(t.types):v$4(t.type)}function v$4(t){return !Array.isArray(t)&&(!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||l$4(t)))}function m$3(t){for(const e in t.typeMap){if(!v$4(t.typeMap[e]))return !1}return !0}function j$2(t){var e;let n=null;const o=null!=(e=t.errorContext)?e:"type";return (e,p,u)=>{if(null==e)return e;const s=typeof e;if("object"!==s)return void i$a.error(`Expected JSON value of type 'object' to deserialize, but got '${s}'`);n||(n=g$4(t));const y=t.key;if("string"!=typeof y)return;const f=e[y],c=f?n[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!c){const t=`Type '${f||"unknown"}' is not supported`;return u&&u.messages&&e&&u.messages.push(new t$6(`${o}:unsupported`,t,{definition:e,context:u})),void i$a.error(t)}const a=new c;return a.read(e,u),a}}function g$4(t){const e={};for(const i in t.typeMap){var r,o;const p=t.typeMap[i],u=n$j(p.prototype);if("function"==typeof t.key)continue;const s=u.properties[t.key];if(!s)continue;null!=(r=s.json)&&r.type&&Array.isArray(s.json.type)&&1===s.json.type.length&&"string"==typeof s.json.type[0]&&(e[s.json.type[0]]=p);const y=null==(o=s.json)?void 0:o.write;if(!y||!y.writer){e[i]=p;continue}const f=y.target,c="string"==typeof f?f:t.key,a={};y.writer(i,a,c),a[c]&&(e[a[c]]=p);}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$9(e){if(e.json||(e.json={}),o$e(e.json),n$b(e.json),r$7(e.json),e.json.origins)for(const t in e.json.origins)o$e(e.json.origins[t]),n$b(e.json.origins[t]),r$7(e.json.origins[t]);return !0}function r$7(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name});}function o$e(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0);}function n$b(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$9=s$o.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer");function o$d(r,t){var e;if(!t.write||t.write.writer||!1===t.write.enabled&&!t.write.overridePolicy)return;const i=null!=(e=null==r?void 0:r.ndimArray)?e:0;r&&(1===i||"type"in r&&e$a(r.type))?t.write.writer=a$6:i>1?t.write.writer=w$2(i):t.types?Array.isArray(t.types)?t.write.writer=s$6(t.types[0]):t.write.writer=u$6(t.types):t.write.writer=l$3;}function u$6(r){return (t,e,n,i)=>t?f$4(t,r,i)?l$3(t,e,n,i):void 0:l$3(t,e,n,i)}function f$4(t,e,n){for(const r in e.typeMap)if(t instanceof e.typeMap[r])return !0;if(null!=n&&n.messages){var o,u;const f=null!=(o=e.errorContext)?o:"type",s=`Values of type '${null!=(u="function"!=typeof e.key?t[e.key]:t.declaredClass)?u:"Unknown"}' cannot be written`;n&&n.messages&&t&&n.messages.push(new s$l(`${f}:unsupported`,s,{definition:t,context:n})),i$9.error(s);}return !1}function s$6(r){return (t,e,n,i)=>{if(!t||!Array.isArray(t))return l$3(t,e,n,i);return l$3(t.filter((t=>f$4(t,r,i))),e,n,i)}}function l$3(r,t,n,i){o$v(n,p$7(r,i),t);}function p$7(r,t){return r&&"function"==typeof r.write?r.write({},t):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?y$4(r):r}function y$4(r){return r===-1/0?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function a$6(r,t,n,i){let o;null===r?o=null:r&&"function"==typeof r.map?(o=r.map((r=>p$7(r,i))),"function"==typeof o.toArray&&(o=o.toArray())):o=[p$7(r,i)],o$v(n,o,t);}function c$6(r,t,e){return 0!==e&&Array.isArray(r)?r.map((r=>c$6(r,t,e-1))):p$7(r,t)}function w$2(r){return function(t,n,i,o){let u;if(null===t)u=null;else {u=c$6(t,o,r);let e=r,n=u;for(;e>0&&Array.isArray(n);)e--,n=n[0];if(void 0!==n)for(let r=0;r<e;r++)u=[u];}o$v(i,u,n);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$c(r,n){return a$5(r,"read",n)}function s$5(r,n){return a$5(r,"write",n)}function a$5(r,n,e){let t=r&&r.json;if(r&&r.json&&r.json.origins&&e){const i=r.json.origins[e.origin];i&&("any"===n||n in i)&&(t=i);}return t}function p$6(r){const n=y$3(r);if(r.json.origins)for(const t in r.json.origins){const o=r.json.origins[t],s=o.types?f$3(o):n;p$8(s,o,!1),o.types&&!o.write&&r.json.write&&r.json.write.enabled&&(o.write={...r.json.write}),o$d(s,o);}p$8(n,r.json,!0),o$d(n,r.json);}function y$3(r){return r.json.types?u$5(r.json):r.type?j$1(r):u$5(r)}function f$3(r){return r.type?j$1(r):u$5(r)}function j$1(n){if(!n.type)return;let e=0,t=n.type;for(;Array.isArray(t)&&!k$3(t);)t=t[0],e++;return {type:t,ndimArray:e}}function u$5(r){if(!r.types)return;let n=0,e=r.types;for(;Array.isArray(e);)e=e[0],n++;return {types:e,ndimArray:n}}function c$5(r){e$9(r)&&(n$c(r),p$6(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$b=new Set,s$4=new Set;function i$8(t){return r=>{r.prototype.declaredClass=t,a$4(r);const i=[],n=[];let c=r.prototype;for(;c;)c.hasOwnProperty("initialize")&&!o$b.has(c.initialize)&&(o$b.add(c.initialize),i.push(c.initialize)),c.hasOwnProperty("destroy")&&!s$4.has(c.destroy)&&(s$4.add(c.destroy),n.push(c.destroy)),c=Object.getPrototypeOf(c);o$b.clear(),s$4.clear();class l extends r{constructor(...e){if(super(...e),this.constructor===l&&"function"==typeof this.postscript){if(i.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=i.length-1;e>=0;e--)i[e].call(this);}}),n.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<n.length;e++)n[e].call(this);}}});}this.postscript(...e);}}}return l.__accessorMetadata__=n$j(r.prototype),l.prototype.declaredClass=t,l}}function n$a(e,r){return null==r.get?function(){const r=this.__accessor__.properties.get(e);if(void 0===r)return;i$d(r);const o=this.__accessor__.store;return o.has(e)?o.get(e):r.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function a$4(t){const o=t.prototype,s=n$j(o).properties,i={};for(const e of Object.getOwnPropertyNames(s)){const t=s[e];c$5(t),i[e]={enumerable:!0,configurable:!0,get:n$a(e,t),set(r){const o=this.__accessor__;if(void 0!==o){if(!Object.isFrozen(this)){if(o.initialized&&t.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${e}' of ${this.declaredClass}`);if(2===o.lifecycle&&t.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${e}' of ${this.declaredClass}`);o.set(e,r);}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});}};}Object.defineProperties(t.prototype,i);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$4(t){if(null==t)return {value:t};if(Array.isArray(t))return {type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return {type:Boolean,value:t};case"string":return {type:String,value:t};case"number":return {type:Number,value:t};case"function":return {type:t,value:null};default:return}}class p$5{constructor(...t){if(this.constructor===p$5)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new g$7(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t));}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:e,constructor:o}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const c=this;class i extends c{constructor(...t){super(...t),this.inherited=null,o&&o.apply(this,t);}}n$j(i.prototype);for(const s in t){const r=t[s];i.prototype[s]="function"==typeof r?function(...t){const e=this.inherited;let o;this.inherited=function(...t){if(c.prototype[s])return c.prototype[s].apply(this,t)};try{o=r.apply(this,t);}catch(i){throw this.inherited=e,i}return this.inherited=e,o}:t[s];}for(const s in r){const t=u$4(r[s]);d$9(t)(i.prototype,s);}return i$8(e)(i)}postscript(t){const r=this.__accessor__,e=r.ctorArgs||t;r.initialize(),e&&(this.set(e),r.ctorArgs=null),r.constructed(),this.initialize();}initialize(){}destroy(){this.destroyed||(_$5(this),this.__accessor__.destroy());}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t);}get(t){return o$k(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(e){return t$f(s$o.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof e}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,r){return t$d(this,t,r),this}watch(t,r,e){return w$4(this,t,r,e)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,r){return this.__accessor__.override(t,r)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t);}_get(t){return this.__accessor__.internalGet(t)}_set(t,r){return this.__accessor__.internalSet(t,r),this}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$7{constructor(){this._emitter=new i$7.EventEmitter(this);}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(n){class o{constructor(t=null){this.target=t,this._listenersMap=null;}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null;}emit(t,e){const s=this._listenersMap&&this._listenersMap.get(t);if(!s)return !1;const r=this.target||this;return [...s].forEach((t=>{t.call(r,e);})),s.length>0}on(t,e){if(Array.isArray(t)){const r=t.map((t=>this.on(t,e)));return r$f(r)}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const r=this._listenersMap.get(t)||[];return r.push(e),this._listenersMap.set(t,r),{remove:()=>{const s=this._listenersMap&&this._listenersMap.get(t)||[],r=s.indexOf(e);r>=0&&s.splice(r,1);}}}once(t,e){const s=this.on(t,(t=>{s.remove(),e.call(null,t);}));return s}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0}}n.EventEmitter=o,n.EventedMixin=e=>{let s=class extends e{constructor(){super(...arguments),this._emitter=new o;}destroy(){this._emitter.clear();}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return s=e$v([i$8("esri.core.Evented")],s),s};let h=class extends p$5{constructor(){super(...arguments),this._emitter=new i$7.EventEmitter(this);}destroy(){this._emitter.clear();}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};h=e$v([i$8("esri.core.Evented")],h),n.EventedAccessor=h;}(i$7||(i$7={}));const n$9=i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$8(n){return (r,t)=>{r[t]=n;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$8{constructor(){this._observers=[];}observe(e){return this._observers.includes(e)||this._observers.push(e),new s$b(this._observers,e)}notify(){const s=this._observers.slice();for(let e=0;e<s.length;++e){const r=s[e];r.onInvalidated(),r.onCommitted();}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$3;class g$3{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0;}preventDefault(){this.cancellable&&(this.defaultPrevented=!0);}reset(e){this.defaultPrevented=!1,this.item=e;}}const p$4=new e$j(g$3,void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1;})),d$7=()=>{};function b$2(e){return e?e instanceof L$2?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function v$3(e){if(e&&e.length)return e[0]}function y$2(e,t,s,i){const r=Math.min(e.length-s,t.length-i);let n=0;for(;n<r&&e[s+n]===t[i+n];)n++;return n}function C(e,t,s,i){t&&t.forEach(((t,r,n)=>{e.push(t),C(e,s.call(i,t,r,n),s,i);}));}const A$1=new Set,x$2=new Set,E$2=new Set,j=new Map;let B=0,L$2=u$3=class extends n$9.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new e$8,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:B++});}static isCollection(e){return null!=e&&e instanceof u$3}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof u$3?{items:e}:e:{}}destroy(){this.removeAll();}*[Symbol.iterator](){yield*this.items;}get items(){return i$d(this._observable),this._items}set items(e){this._emitBeforeChanges(1)||(this._splice(0,this.length,...b$2(e)),this._emitAfterChanges(1));}hasEventListener(e){return "change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=d$7,s.removed=!0,e.splice(e.indexOf(s),1);}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return {remove(){s.remove();}}}add(e,t){if(i$d(this._observable),this._emitBeforeChanges(1))return this;const s=this.getNextIndex(null!=t?t:null);return this._splice(s,0,e),this._emitAfterChanges(1),this}addMany(e,t=this._items.length){if(i$d(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(1))return this;const s=this.getNextIndex(t);return this._splice(s,0,...b$2(e)),this._emitAfterChanges(1),this}removeAll(){if(i$d(this._observable),!this.length||this._emitBeforeChanges(2))return [];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(2),e}clone(){return i$d(this._observable),this._createNewInstance({items:this._items.map(l$f)})}concat(...e){i$d(this._observable);const t=e.map(b$2);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(i$d(this._observable),!this.length||this._emitBeforeChanges(2))return;const s=q$5(this._splice(0,this.length)),i=s.length;for(let r=0;r<i;r++)e.call(t,s[r],r,s);this._emitAfterChanges(2);}every(e,t){return i$d(this._observable),this._items.every(e,t)}filter(e,t){let s;return i$d(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return i$d(this._observable),this._items.find(e,t)}findIndex(e,t){return i$d(this._observable),this._items.findIndex(e,t)}flatten(e,t){i$d(this._observable);const s=[];return C(s,this,e,t),new u$3(s)}forEach(e,t){return i$d(this._observable),this._items.forEach(e,t)}getItemAt(e){return i$d(this._observable),this._items[e]}getNextIndex(e){i$d(this._observable);const t=this.length;return (e=null==e?t:e)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return i$d(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return i$d(this._observable),this._items.indexOf(e,t)}join(e=","){return i$d(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return i$d(this._observable),this._items.lastIndexOf(e,t)}map(e,t){i$d(this._observable);const s=this._items.map(e,t);return new u$3({items:s})}reorder(e,t=this.length-1){i$d(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(4))return e;this._splice(s,1),this._splice(t,0,e),this._emitAfterChanges(4);}return e}}pop(){if(i$d(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=v$3(this._splice(this.length-1,1));return this._emitAfterChanges(2),e}push(...e){return i$d(this._observable),this._emitBeforeChanges(1)||(this._splice(this.length,0,...e),this._emitAfterChanges(1)),this.length}reduce(e,t){i$d(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){i$d(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return i$d(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(i$d(this._observable),e<0||e>=this.length||this._emitBeforeChanges(2))return;const t=v$3(this._splice(e,1));return this._emitAfterChanges(2),t}removeMany(e){if(i$d(this._observable),!e||!e.length||this._emitBeforeChanges(2))return [];const t=e instanceof u$3?e.toArray():e,s=this._items,i=[],r=t.length;for(let n=0;n<r;n++){const e=t[n],r=s.indexOf(e);if(r>-1){const e=1+y$2(t,s,n+1,r+1),h=this._splice(r,e);h&&h.length>0&&i.push.apply(i,h),n+=e-1;}}return this._emitAfterChanges(2),i}reverse(){if(i$d(this._observable),this._emitBeforeChanges(4))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,...e)),this._emitAfterChanges(4),this}shift(){if(i$d(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=v$3(this._splice(0,1));return this._emitAfterChanges(2),e}slice(e=0,t=this.length){return i$d(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return i$d(this._observable),this._items.some(e,t)}sort(e){if(i$d(this._observable),!this.length||this._emitBeforeChanges(4))return this;const t=q$5(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,...t),this._emitAfterChanges(4),this}splice(e,t,...s){i$d(this._observable);const i=(t?2:0)|(s.length?1:0);if(this._emitBeforeChanges(i))return [];const r=this._splice(e,t,...s)||[];return this._emitAfterChanges(i),r}toArray(){return i$d(this._observable),this._items.slice()}toJSON(){return i$d(this._observable),this.toArray()}toLocaleString(){return i$d(this._observable),this._items.toLocaleString()}toString(){return i$d(this._observable),this._items.toString()}unshift(...e){return i$d(this._observable),!e.length||this._emitBeforeChanges(1)||(this._splice(0,0,...e),this._emitAfterChanges(1)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,...s){const i=this._items,r=this.itemType;let n,o;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=v$8((()=>this._dispatchChange()))),t){if(o=i.splice(e,t),this.hasEventListener("before-remove")){const t=p$4.acquire();t.target=this,t.cancellable=!0;for(let s=0,r=o.length;s<r;s++)n=o[s],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(s,1),i.splice(e,0,n),e+=1,s-=1,r-=1);p$4.release(t);}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=p$4.acquire();e.target=this,e.cancellable=!1;const t=o.length;for(let s=0;s<t;s++)e.reset(o[s]),this.emit("after-remove",e);p$4.release(e);}}if(s&&s.length){if(r){const e=[];for(const t of s){const s=r.ensureType(t);null==s&&null!=t||e.push(s);}s=e;}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),h=e===this.length;if(t||n){const r=p$4.acquire();r.target=this,r.cancellable=!0;const o=p$4.acquire();o.target=this,o.cancellable=!1;for(const l of s)t?(r.reset(l),this.emit("before-add",r),r.defaultPrevented||(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),n&&(o.reset(l),this.emit("after-add",o)))):(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),o.reset(l),this.emit("after-add",o));p$4.release(o),p$4.release(r);}else {if(h)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length);}}return (s&&s.length||o&&o.length)&&this._notifyChangeEvent(s,o),o}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=p$4.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,p$4.release(s);}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=p$4.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),p$4.release(t);}this._observable.notify();}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t});}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const s of e){const e=s.changes;A$1.clear(),x$2.clear(),E$2.clear();for(const{added:t,removed:s}of e){if(t)if(0===E$2.size&&0===x$2.size)for(const e of t)A$1.add(e);else for(const e of t)x$2.has(e)?(E$2.add(e),x$2.delete(e)):E$2.has(e)||A$1.add(e);if(s)if(0===E$2.size&&0===A$1.size)for(const e of s)x$2.add(e);else for(const e of s)A$1.has(e)?A$1.delete(e):(E$2.delete(e),x$2.add(e));}const i=t$g.acquire();A$1.forEach((e=>{i.push(e);}));const r=t$g.acquire();x$2.forEach((e=>{r.push(e);}));const n=this._items,h=s.items,o=t$g.acquire();if(E$2.forEach((e=>{h.indexOf(e)!==n.indexOf(e)&&o.push(e);})),s.listeners&&(i.length||r.length||o.length)){const e={target:this,added:i,removed:r,moved:o},t=s.listeners.length;for(let i=0;i<t;i++){const t=s.listeners[i];t.removed||t.callback.call(this,e);}}t$g.release(i),t$g.release(r),t$g.release(o);}A$1.clear(),x$2.clear(),E$2.clear();}};L$2.ofType=t=>{if(!t)return u$3;if(j.has(t))return j.get(t);let s=null;if("function"==typeof t)s=t.prototype.declaredClass;else if(t.base)s=t.base.prototype.declaredClass;else for(const e in t.typeMap){const i=t.typeMap[e].prototype.declaredClass;s?s+=` | ${i}`:s=i;}let i=class extends u$3{};return e$v([n$8({Type:t,ensureType:"function"==typeof t?b$3(t):N$3(t)})],i.prototype,"itemType",void 0),i=e$v([i$8(`esri.core.Collection<${s}>`)],i),j.set(t,i),i},e$v([d$9()],L$2.prototype,"length",void 0),e$v([d$9()],L$2.prototype,"items",null),L$2=u$3=e$v([i$8("esri.core.Collection")],L$2);const S$1=L$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let h$5=class extends p$5{constructor(r){super(r),this._groups=new Map;}destroy(){this.removeAll();}get size(){let r=0;return this._groups.forEach((e=>{r+=e.length;})),r}add(r,e){if(!this._isHandle(r)&&!Array.isArray(r)&&!S$1.isCollection(r))return this;const t=this._getOrCreateGroup(e);return Array.isArray(r)||S$1.isCollection(r)?r.forEach((r=>this._isHandle(r)&&t.push(r))):t.push(r),this.notifyChange("size"),this}forEach(r,e){if("function"==typeof r)this._groups.forEach((e=>e.forEach(r)));else {const s=this._getGroup(r);s&&e&&s.forEach(e);}}has(r){return this._groups.has(this._ensureGroupKey(r))}remove(r){if(Array.isArray(r)||S$1.isCollection(r))return r.forEach(this.remove,this),this;if(!this.has(r))return this;const e=this._getGroup(r);for(let s=0;s<e.length;s++)e[s].remove();return this._deleteGroup(r),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((r=>{for(let e=0;e<r.length;e++)r[e].remove();})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(r){return r&&!!r.remove}_getOrCreateGroup(r){if(this.has(r))return this._getGroup(r);const e=[];return this._groups.set(this._ensureGroupKey(r),e),e}_getGroup(r){return q$5(this._groups.get(this._ensureGroupKey(r)))}_deleteGroup(r){return this._groups.delete(this._ensureGroupKey(r))}_ensureGroupKey(r){return r||"_default_"}};e$v([d$9({readOnly:!0})],h$5.prototype,"size",null),h$5=e$v([i$8("esri.core.Handles")],h$5);const u$2=h$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$4=/\?(\.|$)/g;function i$6(n,t,r,e){const o=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],u=f$2(n,t,r,e);for(const i of o){const t=i.trim().replace(c$4,"$1"),e=n.get(t);r.call(n,e,e,t,n);}return u}function f$2(n,t,r,e){return n.watch(t,r,e)}function s$3(n,t,r,e){return z$1(n,t,U$1,r,e)}function a$3(n,t,r,e){return N$2(n,t,U$1,r,e)}function m$2(n,t,r,e){return z$1(n,t,V,r,e)}function p$3(n,t,r,e){return N$2(n,t,V,r,e)}function v$2(n,t,r,e){return z$1(n,t,k$2,r,e)}function d$6(n,t,r,e){return N$2(n,t,k$2,r,e)}function h$4(n,t,r,e){return z$1(n,t,q,r,e)}function g$2(n,t,r,e){return N$2(n,t,q,r,e)}function O(n,t,r,e){let o=!1;const u=n.watch(t,((t,e,u,c)=>{o||r.call(n,t,e,u,c);}),e);return {remove(){u.remove();},pause(){o=!0;},resume(){o=!1;}}}function $$1(r,e,o,u,c,f,l){const s={};function a(n){const t=s[n];t&&(f&&f(t.target,n,r,o),t.handle.remove(),delete s[n]);}const m=i$6(r,e,((e,i,f)=>{a(f),e$k(e)&&(s[f]={handle:r$j(e,o,u),target:e},c&&c(e,f,r,o));}),l);return {remove(){m.remove();for(const n in s)a(n);}}}function z$1(n,t,r,e,o){const u=n.watch(t,((t,o,u,c)=>{r&&!r(t)||null==e||e.call(n,t,o,u,c);}),o);if(Array.isArray(t))for(const c of t){const o=n.get(c);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}else {const o=n.get(t);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}return u}function N$2(n,t,r,c,i){const f="function"==typeof c?c:null,l="object"==typeof c?c:null;"boolean"==typeof c&&(i=c);let s,a=!1;function m(){s&&(s.remove(),s=null);}const p=A$8();j$8(l,(()=>{m(),p.reject(m$b());}));const v={then:p.promise.then.bind(p.promise),catch:p.promise.catch.bind(p.promise),remove:m};return Object.freeze(v),s=z$1(n,t,r,((t,r,e,o)=>{a=!0,m(),f&&f.call(n,t,r,e,o),p.resolve({value:t,oldValue:r,propertyName:e,target:o});}),i),a&&m(),v}function U$1(n){return !!n}function V(n){return !n}function k$2(n){return !0===n}function q(n){return !1===n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$a(o,t){const e=t?{...t,source:o}:o;return d$9({aliasOf:e})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$9=Object.prototype.toString;function r$6(n){const o="__accessorMetadata__"in n?b$3(n):n;return function(...t){if(t.push(o),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return e$7.apply(this,t)}}function e$7(t,o,r,e){s$d(t,o).cast=e;}function i$5(t){return function(o,r){s$d(o,t).cast=o[r];}}function c$3(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o$9.call(t[0])?r$6(t[0]):1===t.length&&"string"==typeof t[0]?i$5(t[0]):void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$6(e){return "string"==typeof e?document.getElementById(e):e}function t$5(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild);}function o$8(e,t){const n=t.parentNode;n&&n.insertBefore(e,t);}function r$5(e,t){for(;;){const n=e.firstChild;if(!n)break;t.appendChild(n);}}function i$4(e){e.parentNode&&e.parentNode.removeChild(e);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h$3{constructor(s){this.instance=s,this._resolver=A$8(),this._status=0,this._resolvingPromises=[],this._resolver.promise.then((()=>{this._status=1,this._cleanUp();}),(()=>{this._status=2,this._cleanUp();}));}addResolvingPromise(s){this._resolvingPromises.push(s),this._tryResolve();}isResolved(){return 1===this._status}isRejected(){return 2===this._status}isFulfilled(){return 0!==this._status}abort(){this._resolver.reject(m$b());}when(s,e){return this._resolver.promise.then(s,e)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null;}_tryResolve(){if(this.isFulfilled())return;const s=A$8(),e=[...this._resolvingPromises,q$5(s.promise)],t=this._allPromise=Promise.all(e);t.then((()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve(this.instance);}),(s=>{this.isFulfilled()||this._allPromise!==t||d$h(s)||this._resolver.reject(s);})),s.resolve();}}const n$7=e=>{let i=class extends e{constructor(...s){super(...s),this._promiseProps=new h$3(this),this.addResolvingPromise(Promise.resolve());}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,e){return new Promise(((s,e)=>{this._promiseProps.when(s,e);})).then(s,e)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s);}};return i=e$v([i$8("esri.core.Promise")],i),i};exports.m$1=class extends(n$7(p$5)){};exports.m$1=e$v([i$8("esri.core.Promise")],exports.m$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$7(){const t=n$6.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const o=o=>t[o].toString(16);return o(0)+o(1)+"-"+o(2)+"-"+o(3)+"-"+o(4)+"-"+o(5)+o(6)+o(7)}const n$6=e$t.crypto||e$t.msCrypto;

/*!
 * @esri/arcgis-html-sanitizer - v2.9.0-next.1 - Tue Oct 19 2021 10:19:42 GMT-0400 (Eastern Daylight Time)
 * Copyright (c) 2021 - Environmental Systems Research Institute, Inc.
 * Apache-2.0
 * 
 * js-xss
 * Copyright (c) 2012-2017 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 * 
 * Lodash/isPlainObject
 * Copyright (c) JS Foundation and other contributors <https://js.foundation/>
 * MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
 */
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

var lodash_isplainobject = isPlainObject;

var lib$1 = {exports: {}};

var _default$1 = {};

var lib = {exports: {}};

var _default = {};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList$1 () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue$1(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


_default.whiteList = getDefaultWhiteList$1();
_default.getDefaultWhiteList = getDefaultWhiteList$1;
_default.onAttr = onAttr;
_default.onIgnoreAttr = onIgnoreAttr;
_default.safeAttrValue = safeAttrValue$1;

var util$1 = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _$3 = util$1;


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle$1 (css, onAttr) {
  css = _$3.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _$3.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _$3.trim(source.slice(0, j));
        var value = _$3.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) ; else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _$3.trim(retCSS);
}

var parser$2 = parseStyle$1;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT$1 = _default;
var parseStyle = parser$2;


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull$1 (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject$1 (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS$2 (options) {
  options = shallowCopyObject$1(options || {});
  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
  this.options = options;
}

FilterCSS$2.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull$1(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull$1(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


var css = FilterCSS$2;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

(function (module, exports) {
var DEFAULT = _default;
var FilterCSS = css;


/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];
}(lib, lib.exports));

var util = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  },
};

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS$1 = lib.exports.FilterCSS;
var getDefaultCSSWhiteList = lib.exports.getDefaultWhiteList;
var _$2 = util;

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width",
    ],
  };
}

var defaultCSSFilter = new FilterCSS$1();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _$2.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
  /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
  /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _$2.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _$2.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end,
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;
      _$2.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    },
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i = html.indexOf("<!--", lastPos);
    if (i === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i);
    var j = html.indexOf("-->", i);
    if (j === -1) {
      break;
    }
    lastPos = j + 3;
  }
  return retHtml;
}

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

_default$1.whiteList = getDefaultWhiteList();
_default$1.getDefaultWhiteList = getDefaultWhiteList;
_default$1.onTag = onTag;
_default$1.onIgnoreTag = onIgnoreTag;
_default$1.onTagAttr = onTagAttr;
_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
_default$1.safeAttrValue = safeAttrValue;
_default$1.escapeHtml = escapeHtml;
_default$1.escapeQuote = escapeQuote;
_default$1.unescapeQuote = unescapeQuote;
_default$1.escapeHtmlEntities = escapeHtmlEntities;
_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
_default$1.friendlyAttrValue = friendlyAttrValue;
_default$1.escapeAttrValue = escapeAttrValue;
_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
_default$1.StripTagBody = StripTagBody;
_default$1.stripCommentTag = stripCommentTag;
_default$1.stripBlankChar = stripBlankChar;
_default$1.cssFilter = defaultCSSFilter;
_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

var parser$1 = {};

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _$1 = util;

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _$1.spaceIndex(html);
  if (i === -1) {
    var tagName = html.slice(1, -1);
  } else {
    var tagName = html.slice(1, i + 1);
  }
  tagName = _$1.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag$1(html, onTag, escapeHtml) {

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c === '"' || c === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr$1(html, onAttr) {

  var lastPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _$1.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastPos &&
        (c === '"' || c === "'") &&
        html.charAt(i - 1) === "="
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _$1.trim(html.slice(lastPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
    }
  }

  return _$1.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

parser$1.parseTag = parseTag$1;
parser$1.parseAttr = parseAttr$1;

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = lib.exports.FilterCSS;
var DEFAULT = _default$1;
var parser = parser$1;
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = util;

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing,
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList, onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }

  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag),
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        var html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        var ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

var xss = FilterXSS;

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

(function (module, exports) {
var DEFAULT = _default$1;
var parser = parser$1;
var FilterXSS = xss;

/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */
function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];
for (var i in parser) exports[i] = parser[i];

// using `xss` on the WebWorker, output `filterXSS` to the globals
function isWorkerEnv() {
  return (
    typeof self !== "undefined" &&
    typeof DedicatedWorkerGlobalScope !== "undefined" &&
    self instanceof DedicatedWorkerGlobalScope
  );
}
if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}
}(lib$1, lib$1.exports));

/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 *
 * js-xss
 * Copyright (c) 2012-2018 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * The MIT License, see
 * https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 *
 * Lodash/isPlainObject
 * Copyright (c) JS Foundation and other contributors <https://js.foundation/>
 * MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
 * */
/**
 * The Sanitizer Class
 *
 * @export
 * @class Sanitizer
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer(filterOptions, extendDefaults) {
        var _this = this;
        // Supported HTML Spec: https://doc.arcgis.com/en/arcgis-online/reference/supported-html.htm
        this.arcgisWhiteList = {
            a: ["href", "style", "target"],
            abbr: ["title"],
            audio: ["autoplay", "controls", "loop", "muted", "preload"],
            b: [],
            br: [],
            dd: ["style"],
            div: ["align", "style"],
            dl: ["style"],
            dt: ["style"],
            em: [],
            figcaption: ["style"],
            figure: ["style"],
            font: ["color", "face", "size", "style"],
            h1: ["style"],
            h2: ["style"],
            h3: ["style"],
            h4: ["style"],
            h5: ["style"],
            h6: ["style"],
            hr: [],
            i: [],
            img: ["alt", "border", "height", "src", "style", "width"],
            li: [],
            ol: [],
            p: ["style"],
            source: ["media", "src", "type"],
            span: ["style"],
            strong: [],
            sub: ["style"],
            sup: ["style"],
            table: ["border", "cellpadding", "cellspacing", "height", "style", "width"],
            tbody: [],
            tr: ["align", "height", "style", "valign"],
            td: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width"
            ],
            th: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width"
            ],
            u: [],
            ul: [],
            video: [
                "autoplay",
                "controls",
                "height",
                "loop",
                "muted",
                "poster",
                "preload",
                "width"
            ]
        };
        this.allowedProtocols = [
            "http",
            "https",
            "mailto",
            "iform",
            "tel",
            "flow",
            "lfmobile",
            "arcgis-navigator",
            "arcgis-appstudio-player",
            "arcgis-survey123",
            "arcgis-collector",
            "arcgis-workforce",
            "arcgis-explorer",
            "arcgis-trek2there",
            "arcgis-quickcapture",
            "mspbi",
            "comgooglemaps",
            "pdfefile",
            "pdfehttp",
            "pdfehttps",
            "boxapp",
            "boxemm",
            "awb",
            "awbs",
            "gropen",
            "radarscope"
        ];
        this.arcgisFilterOptions = {
            allowCommentTag: true,
            safeAttrValue: function (tag, name, value, cssFilter) {
                // Take over safe attribute filtering for `a` `href`, `img` `src`,
                // and `source` `src` attributes, otherwise pass onto the
                // default `XSS.safeAttrValue` method.
                if ((tag === "a" && name === "href") ||
                    ((tag === "img" || tag === "source") && name === "src")) {
                    return _this.sanitizeUrl(value);
                }
                return lib$1.exports.safeAttrValue(tag, name, value, cssFilter);
            }
        };
        var xssFilterOptions;
        if (filterOptions && !extendDefaults) {
            // Override the defaults
            xssFilterOptions = filterOptions;
        }
        else if (filterOptions && extendDefaults) {
            // Extend the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            Object.keys(filterOptions).forEach(function (key) {
                if (key === "whiteList") {
                    // Extend the whitelist by concatenating arrays
                    xssFilterOptions.whiteList = _this._extendObjectOfArrays([
                        _this.arcgisWhiteList,
                        filterOptions.whiteList || {}
                    ]);
                }
                else {
                    xssFilterOptions[key] = filterOptions[key];
                }
            });
        }
        else {
            // Only use the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.whiteList = this.arcgisWhiteList;
        }
        this.xssFilterOptions = xssFilterOptions;
        // Make this readable to tests
        this._xssFilter = new lib$1.exports.FilterXSS(xssFilterOptions);
    }
    /**
     * Sanitizes value to remove invalid HTML tags.
     *
     * Note: If the value passed does not contain a valid JSON data type (String,
     * Number, JSON Object, Array, Boolean, or null), the value will be nullified.
     *
     * @param {any} value The value to sanitize.
     * @returns {any} The sanitized value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitize = function (value, options) {
        if (options === void 0) { options = {}; }
        switch (typeof value) {
            case "number":
                if (isNaN(value) || !isFinite(value)) {
                    return null;
                }
                return value;
            case "boolean":
                return value;
            case "string":
                return this._xssFilter.process(value);
            case "object":
                return this._iterateOverObject(value, options);
            default:
                if (options.allowUndefined && typeof value === "undefined") {
                    return;
                }
                return null;
        }
    };
    /**
     * Sanitizes a URL string following the allowed protocols and sanitization rules.
     *
     * @param {string} value The URL to sanitize.
     * @returns {string} The sanitized URL.
     */
    Sanitizer.prototype.sanitizeUrl = function (value) {
        var protocol = this._trim(value.substring(0, value.indexOf(":")));
        if (!(value === "/" ||
            value === "#" ||
            value[0] === "#" ||
            this.allowedProtocols.indexOf(protocol.toLowerCase()) > -1)) {
            return "";
        }
        else {
            return lib$1.exports.escapeAttrValue(value);
        }
    };
    /**
     * Sanitizes an HTML attribute value.
     *
     * @param {string} tag The tagname of the HTML element.
     * @param {string} attribute The attribute name of the HTML element.
     * @param {string} value The raw value to be used for the HTML attribute value.
     * @param {XSS.ICSSFilter} [cssFilter] The CSS filter to be used.
     * @returns {string} The sanitized attribute value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitizeHTMLAttribute = function (tag, attribute, value, cssFilter) {
        // use the custom safeAttrValue function if provided
        if (typeof this.xssFilterOptions.safeAttrValue === 'function') {
            // @ts-ignore safeAttrValue does handle undefined cssFilter
            return this.xssFilterOptions.safeAttrValue(tag, attribute, value, cssFilter);
        }
        // otherwise use the default
        // @ts-ignore safeAttrValue does handle undefined cssFilter
        return lib$1.exports.safeAttrValue(tag, attribute, value, cssFilter);
    };
    /**
     * Checks if a value only contains valid HTML.
     *
     * @param {any} value The value to validate.
     * @returns {boolean}
     * @memberof Sanitizer
     */
    Sanitizer.prototype.validate = function (value, options) {
        if (options === void 0) { options = {}; }
        var sanitized = this.sanitize(value, options);
        return {
            isValid: value === sanitized,
            sanitized: sanitized
        };
    };
    /**
     * Extends an object of arrays by by concatenating arrays of the same object
     * keys. If the if the previous key's value is not an array, the next key's
     * value will replace the previous key. This method is used for extending the
     * whiteList in the XSS filter options.
     *
     * @private
     * @param {Array<{}>} objects An array of objects.
     * @returns {{}} The extended object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._extendObjectOfArrays = function (objects) {
        var finalObj = {};
        objects.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (Array.isArray(obj[key]) && Array.isArray(finalObj[key])) {
                    finalObj[key] = finalObj[key].concat(obj[key]);
                }
                else {
                    finalObj[key] = obj[key];
                }
            });
        });
        return finalObj;
    };
    /**
     * Iterate over a plain object or array to deeply sanitize each value.
     *
     * @private
     * @param {object} obj The object to iterate over.
     * @returns {(object | null)} The sanitized object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._iterateOverObject = function (obj, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        try {
            var hasChanged_1 = false;
            var changedObj = void 0;
            if (Array.isArray(obj)) {
                changedObj = obj.reduce(function (prev, value) {
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        return prev.concat([value]);
                    }
                    else {
                        hasChanged_1 = true;
                        return prev.concat([validation.sanitized]);
                    }
                }, []);
            }
            else if (!lodash_isplainobject(obj)) {
                if (options.allowUndefined && typeof obj === "undefined") {
                    return;
                }
                return null;
            }
            else {
                var keys = Object.keys(obj);
                changedObj = keys.reduce(function (prev, key) {
                    var value = obj[key];
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        prev[key] = value;
                    }
                    else {
                        hasChanged_1 = true;
                        prev[key] = validation.sanitized;
                    }
                    return prev;
                }, {});
            }
            if (hasChanged_1) {
                return changedObj;
            }
            return obj;
        }
        catch (err) {
            return null;
        }
    };
    /**
     * Trim whitespace from the start and ends of a string.
     * @param {string} val The string to trim.
     * @returns {string} The trimmed string.
     */
    Sanitizer.prototype._trim = function (val) {
        // @ts-ignore This is used by Jest,
        // but TypeScript errors since it assumes `trim` is always available.
        return String.prototype.trim
            ? val.trim()
            : val.replace(/(^\s*)|(\s*$)/g, "");
    };
    return Sanitizer;
}());

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i$3,r$4,o$6=function(t){if("WebkitTransition"in t.style)i$3="webkitTransitionEnd",r$4="webkitAnimationEnd";else {if(!("transition"in t.style))throw new Error("Your browser is not supported!");i$3="transitionend",r$4="animationend";}},s$2=function(t){i$3||o$6(t);},a$2=function(t,e){return void 0===e&&(e=t+"-active"),function(n){s$2(n);var o=!1,a=function(s){o||(o=!0,n.removeEventListener(i$3,a),n.removeEventListener(r$4,a),n.classList.remove(t),n.classList.remove(e));};n.classList.add(t),n.addEventListener(i$3,a),n.addEventListener(r$4,a),requestAnimationFrame((function(){n.classList.add(e);}));}},c$2=function(t,e){return void 0===e&&(e=t+"-active"),function(n,o){s$2(n);var a=!1,c=function(t){a||(a=!0,n.removeEventListener(i$3,c),n.removeEventListener(r$4,c),o());};n.classList.add(t),n.addEventListener(i$3,c),n.addEventListener(r$4,c),requestAnimationFrame((function(){n.classList.add(e);}));}};function l$2(t){const n=t$g.acquire();for(let e=0;e<arguments.length;e++){const t=arguments[e],i=typeof t;if("string"===i)n.push(t);else if(Array.isArray(t))n.push.apply(n,t);else if("object"===i)for(const e in t)t[e]&&n.push(e);}const i=n.join(" ");return t$g.release(n),i}function d$5(t){const e=null==t?void 0:t.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function u$1(t){return d$5(t)?"rtl":"ltr"}function p$2(t){const e="data-node-ref";this[t.getAttribute(e)]=null;}function g$1(t){const e="data-node-ref";this[t.getAttribute(e)]=t;}function f$1(t,e){return ("enter"===t?a$2:c$2)(e)}s$o.getLogger("esri.widgets.support.widgetUtils");const m$1=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],h$2=m$1.reduce(((t,e)=>(t[e]=[],t)),{}),v$1=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],L$1=new Sanitizer({whiteList:h$2,onTagAttr:(t,e,n)=>{const i=`${e}="${n}"`;if(v$1.includes(e))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function w$1(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),r=n.top+n.height,o=i.top+i.height,s=n.top,a=i.top;(r>o||s<a)&&t.scrollIntoView({block:"end"});}function y$1(t){return "Enter"===t||" "===t}function b$1(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function E$1(){return b$1().startsWith("dark")}function k$1(){return "calcite-theme-"+(E$1()?"dark":"light")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$4="http://www.w3.org/",r$3=`${t$4}2000/svg`,o$5=`${t$4}1999/xlink`;let i$2,l$1=[],n$5=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t];})),t&&Object.keys(t).forEach((e=>{r[e]=t[e];})),r},s$1=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),p$1=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},d$4=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(s$1(e[o],t))return o;return -1},a$1=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let l=i.properties;if(!(l?void 0===l.key?l.bind:l.key:void 0))for(let n=0;n<e.length;n++)if(n!==t){let t=e[n];if(s$1(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},f=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties);}},c$1=[],u=!1,h$1=e=>{(e.children||[]).forEach(h$1),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode]);},m=()=>{u=!1,c$1.forEach(h$1),c$1.length=0;},v=e=>{c$1.push(e),u||(u=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m,{timeout:16}):setTimeout(m,16));},y=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),v(e));};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),v(e));},g=(t,i,l)=>{if(!i)return;let n=l.eventHandlerInterceptor,s=Object.keys(i),d=s.length;for(let a=0;a<d;a++){let d=s[a],f=i[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)x$1(t,f,!0);else if("classes"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o];f[r]&&t.classList.add(r);}}else if("styles"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=f[r];i&&(p$1(i),l.styleApplyer(t,r,i));}}else if("key"!==d&&null!=f){let s=typeof f;"function"===s?(0===d.lastIndexOf("on",0)&&(n&&(f=n(d,f,t,i)),"oninput"===d&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value;};}()),t[d]=f):l.namespace===r$3?"href"===d?t.setAttributeNS(o$5,d,f):t.setAttribute(d,f):"string"===s&&"value"!==d?"innerHTML"===d?t[d]=L$1.sanitize(f):t.setAttribute(d,f):t[d]=f;}}},b=(e,t,r)=>{if(t)for(let o of t)w(o,e,void 0,r);},N$1=(e,t,r)=>{b(e,t.children,r),t.text&&(e.textContent=t.text),g(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children]);},w=(e,t,o,i)=>{let l,s=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)l=e.domNode=d.createTextNode(e.text),void 0!==o?t.insertBefore(l,o):t.appendChild(l);else {for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(s-1),c=p.slice(s,a);"."===f?l.classList.add(c):"#"===f?l.id=c:("svg"===c&&(i=n$5(i,{namespace:r$3})),void 0!==i.namespace?l=e.domNode=d.createElementNS(i.namespace,c):(l=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&l.setAttribute("type",e.properties.type)),void 0!==o?t.insertBefore(l,o):l.parentNode!==t&&t.appendChild(l)),s=a+1;}}N$1(l,e,i);}},x$1=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r);}));},k=(t,i,l,n)=>{if(!l)return;let s=!1,d=Object.keys(l),a=d.length;for(let f=0;f<a;f++){let a=d[f],c=l[a],u=i[a];if("class"===a)u!==c&&(x$1(t,u,!1),x$1(t,c,!0));else if("classes"===a){let e=t.classList,r=Object.keys(c),o=r.length;for(let t=0;t<o;t++){let o=r[t],i=!!c[o];i!==!!u[o]&&(s=!0,i?e.add(o):e.remove(o));}}else if("styles"===a){let e=Object.keys(c),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=c[r];i!==u[r]&&(s=!0,i?(p$1(i),n.styleApplyer(t,r,i)):n.styleApplyer(t,r,""));}}else if(c||"string"!=typeof u||(c=""),"value"===a){let e=t[a];e!==c&&(t["oninput-value"]?e===t["oninput-value"]:c!==u)&&(t[a]=c,t["oninput-value"]=void 0),c!==u&&(s=!0);}else if(c!==u){let i=typeof c;"function"===i&&n.eventHandlerInterceptor||(n.namespace===r$3?"href"===a?t.setAttributeNS(o$5,a,c):t.setAttribute(a,c):"string"===i?"innerHTML"===a?t[a]=L$1.sanitize(c):"role"===a&&""===c?t.removeAttribute(a):t.setAttribute(a,c):t[a]!==c&&(t[a]=c),s=!0);}}return s},A=(e,t,r,o,n)=>{if(r===o)return !1;o=o||l$1;let p,c=(r=r||l$1).length,u=o.length,h=0,m=0,v=!1;for(;m<u;){let l=h<c?r[h]:void 0,u=o[m];if(void 0!==l&&s$1(l,u))v=i$2(l,u,n)||v,h++;else {let l=d$4(r,u,h+1);if(l>=0){for(p=h;p<l;p++)y(r[p]),a$1(r,p,e,"removed");v=i$2(r[l],u,n)||v,h=l+1;}else w(u,t,h<c?r[h].domNode:void 0,n),f(u),a$1(o,m,e,"added");}m++;}if(c>h)for(p=h;p<c;p++)y(r[p]),a$1(r,p,e,"removed");return v};i$2=(e,t,o)=>{let i=e.domNode,l=!1;if(e===t)return !1;let s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,l=!0,l}t.domNode=i;}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(o=n$5(o,{namespace:r$3})),e.text!==t.text&&(s=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,s=A(t,i,e.children,t.children,o)||s,s=k(i,e.properties,t.properties,o)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,o,t.vnodeSelector,t.properties,t.children]);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),l};let S=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,i$2(o,r,t);},domNode:e.domNode});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o;}};let d$3=r=>n$5(p,r),n$4={create:(e,t)=>(t=d$3(t),w(e,document.createElement("div"),void 0,t),S(e,t)),append:(e,t,p)=>(p=d$3(p),w(t,e,void 0,p),S(t,p)),insertBefore:(e,t,p)=>(p=d$3(p),w(t,e.parentNode,e,p),S(t,p)),merge:(e,r,p)=>(p=d$3(p),r.domNode=e,N$1(e,r,p),S(r,p)),replace:(e,t,p)=>(p=d$3(p),w(t,e.parentNode,e,p),e.parentNode.removeChild(e),S(t,p))};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$3,n$3=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};t$3=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let o$4=(e,r)=>{let n=e;return r.forEach((e=>{n=n&&n.children?t$3(n.children,(r=>r.domNode===e)):void 0;})),n},d$2=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),p=n$3(d.currentTarget,i.domNode);p.reverse();let l,a=o$4(i.getLastRender(),p);return e.scheduleRender(),a&&(l=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),l};return (e,r,t,n)=>d},i$1=t=>{let n,o,i=d$3(t),p=i.performanceLogger,l=!0,a=!1,s=[],c=[],u=(e,r,t)=>{let o,l=()=>o;i.eventHandlerInterceptor=d$2(n,l,p),o=e(r,t(),i),s.push(o),c.push(t);},f=()=>{if(o=void 0,l){l=!1,p("renderStart",void 0);for(let e=0;e<s.length;e++){let r=c[e]();p("rendered",void 0),s[e].update(r),p("patched",void 0);}p("renderDone",void 0),l=!0;}};return n={renderNow:f,scheduleRender:()=>{o||a||(o=requestAnimationFrame(f));},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0;},resume:()=>{a=!1,l=!0,n.scheduleRender();},append:(e,t)=>{u(n$4.append,e,t);},insertBefore:(e,t)=>{u(n$4.insertBefore,e,t);},merge:(e,t)=>{u(n$4.merge,e,t);},replace:(e,t)=>{u(n$4.replace,e,t);},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),s.splice(r,1)[0];throw new Error("renderFunction was not found")}},n};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$5={handleInterceptedEvent:(e,p,t,n)=>(e.scheduleRender(),p.properties[`on${n.type}`].apply(p.properties.bind||t,[n]))};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$4={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{e.style[r]=o;}},r$2=r=>({...e$4,...r});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$3=(e,t)=>{const r=[];for(;e&&e!==t;)r.push(e),e=e.parentNode;return r},n$2=(e,t)=>e.find(t),d$1=(e,t,r=!1)=>{let o=e;return t.forEach(((e,d)=>{var s;const i=null!=(s=o)&&s.children?n$2(o.children,(t=>t.domNode===e)):void 0;r&&!i&&d!==t.length-1||(o=i);})),o},s=n=>{let s;const i={...e$5,...n},c=r$2(i),a=c.performanceLogger;let l,m=!0,p=!1;const u=[],f=[],v=(e,t,r)=>{let n;c.eventHandlerInterceptor=(e,t,r,c)=>function(e){let t;a("domEvent",e);const r=o$3(e.currentTarget,n.domNode),c=r.some((e=>{var t;return customElements.get(null==e||null==(t=e.tagName)?void 0:t.toLowerCase())}));if(e.eventPhase===Event.CAPTURING_PHASE||!c)r.reverse(),t=d$1(n.getLastRender(),r);else {const r=e.composedPath(),o=r.slice(r.indexOf(e.currentTarget),r.indexOf(n.domNode)).filter((e=>e.getRootNode()===e.ownerDocument)).reverse();t=d$1(n.getLastRender(),o,!0);}let l;return t&&(l=i.handleInterceptedEvent(s,t,this,e)),a("domEventProcessed",e),l},null==i.postProcessProjectionOptions||i.postProcessProjectionOptions(c);const l=r();n=e(t,l,c),u.push(n),f.push(r),i.afterFirstVNodeRendered&&i.afterFirstVNodeRendered(n,l);};let h=()=>{if(l=void 0,m){m=!1,a("renderStart",void 0);for(let e=0;e<u.length;e++){const t=f[e]();a("rendered",void 0),u[e].update(t),a("patched",void 0);}a("renderDone",void 0),m=!0;}};return i.modifyDoRenderImplementation&&(h=i.modifyDoRenderImplementation(h,u,f)),s={renderNow:h,scheduleRender:()=>{l||p||(l=requestAnimationFrame(h));},stop:()=>{l&&(cancelAnimationFrame(l),l=void 0),p=!0;},resume:()=>{p=!1,m=!0,s.scheduleRender();},append:(t,r)=>{v(n$4.append,t,r);},insertBefore:(t,r)=>{v(n$4.insertBefore,t,r);},merge:(t,r)=>{v(n$4.merge,t,r);},replace:(t,r)=>{v(n$4.replace,t,r);},detach:e=>{for(let t=0;t<f.length;t++)if(f[t]===e)return f.splice(t,1),u.splice(t,1)[0];throw new Error("renderFunction was not found")}},s};

let queuePending = false;
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructibleStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replace === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    addStyle(elm.getRootNode(), cmpMeta);
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName]);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode);
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (parentElm);
    let childNode;
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        return true;
    }
    return false;
};
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm);
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        instance = instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: index.NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if ((!(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* Prop */ ||
                    ((flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a webcomponent lifecyle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then programatically
                    //  changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      cutsomElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the intial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
            endNewInstance();
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        endConnected();
    }
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        getHostRef(elm);
    }
};
const proxyCustomElement = (Cstr, compactMeta) => {
    const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
    };
    {
        cmpMeta.$members$ = compactMeta[2];
    }
    {
        cmpMeta.$watchers$ = Cstr.$watchers$;
    }
    Object.assign(Cstr.prototype, {
        __registerHost() {
            registerHost(this, cmpMeta);
        },
        connectedCallback() {
            connectedCallback(this);
        },
        disconnectedCallback() {
            disconnectedCallback(this);
        },
    });
    Cstr.is = cmpMeta.$tagName$;
    return proxyComponent(Cstr, cmpMeta, 1 /* isElementConstructor */ | 2 /* proxyState */);
};
const attachShadow = (el) => {
    {
        el.attachShadow({ mode: 'open' });
    }
};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const setAssetPath = (path) => (plt.$resourcesUrl$ = path);
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`)); }).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$3;function r$1(){setAssetPath(T$2(a$b(e$3)));}e$3="components/assets";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$2=Symbol("widget"),r=[],n$1={},o$2=new WeakMap;function i(e,t){let o=t.children;if(o&&o.length)for(let r=0;r<o.length;++r)o[r]=i(e,o[r]);else o=r;const s=t.vnodeSelector;if(c(s)){const r=t.properties||n$1,i=r.key||s;return {vnodeSelector:"div",properties:{key:i,afterCreate:d,afterUpdate:a,afterRemoved:l,parentWidget:e,widgetConstructor:s,widgetProperties:{...r,key:i,children:o}},children:void 0,text:void 0,domNode:null}}return t}function d(t,r,n,{parentWidget:i,widgetConstructor:d,widgetProperties:a}){const c=new d(a);c.container=t,o$2.set(t,c),null==c.afterCreate||c.afterCreate(c,t),i._internalHandles.add(n$k((()=>l(t))));}function a(e,t,r,{widgetProperties:n}){const i=o$2.get(e);i&&(i.set(n),null==i.afterUpdate||i.afterUpdate(i,e));}function l(e){const t=o$2.get(e);t&&(t.destroy(),o$2.delete(e));}function c(e){return "function"==typeof e&&e[t$2]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const P="esri.widgets.Widget",E=s$o.getLogger(P);let L=0;const N=new Map,I={widgetIcon:"esri-icon-checkbox-unchecked"};function F(e,t){for(const r in t)null!=e[r]&&("object"==typeof e[r]&&"object"==typeof t[r]?F(e[r],t[r]):e[r]=t[r]);return e}const U=s({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,s,o,i)=>{const n=t(e,s,o,i),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in o)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>n.call(o,e);o.addEventListener(t,r,a);const s=()=>o.removeEventListener(t,r,a),d=i.afterRemoved;i.afterRemoved=e=>{null==d||d(e),s();};}return n};},handleInterceptedEvent(e,t,r,s){const{eventPhase:o,type:i}=s,n=o===Event.CAPTURING_PHASE;let a=`on${i}${n?"capture":""}`;const d=t.properties;(a in d||(a=`on${i[0].toUpperCase()}${i.slice(1)}${n?"Capture":""}`,a in d))&&(N.clear(),e.scheduleRender(),d[a].call(d.bind||r,s));}});let $=!1,x=class extends(n$7(n$9.EventedAccessor)){constructor(e,r){super(e,r),this._attached=!1,this._internalHandles=new u$2,this._projector=U,this._readyForTrueRender=!1,this.domNode=null,this.iconClass=I.widgetIcon,this.label=this.declaredClass.split(".").pop(),this.visible=!0,this.key=this,this._loadLocale=z$4((async()=>{if(this._messageBundleProps&&this._messageBundleProps.length){const e=await T$3(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{let r=await u$g(e);this.uiStrings&&Object.keys(this.uiStrings)&&(r=F(l$f(r),this.uiStrings)),this[t]=r;})));for(const t of e)t.error&&E.error("widget-intl:locale-error",this.declaredClass,t.error);}await this.loadLocale();})),r$1();const s=["light","dark"],n=b$1()||"light";s.includes(n)||s$g(E,"The following themes are deprecated: light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, and dark-red.",{version:"4.19",warnOnce:!0,see:"https://developers.arcgis.com/javascript/latest/styling/"});const a="esri-widget-uid-"+o$7(),d=this.render.bind(this);this._trackingTarget=new s$9((()=>this.scheduleRender()));const c$1=()=>{var e;if(!this._readyForTrueRender||this.destroyed)return null;if(!this.visible)return {vnodeSelector:"div",properties:{key:a,class:"",styles:{display:"none"}},domNode:void 0,children:void 0,text:void 0};const t=d();let{properties:r}=t;r||(t.properties=r={});let{key:s,styles:o}=r;s||(r.key=a),o||(r.styles=o={}),o.display||(o.display="");let i$1=0;return null==(e=t.children)||e.forEach((e=>{if(c(e.vnodeSelector))return;let{properties:t}=e;t||(e.properties=t={}),t.key||(t.key=`${this.id}--${i$1++}`);})),i(this,t)};this.render=()=>{if($)return c$1();let e=N.get(this);if(e)return e;this._trackingTarget.clear(),$=!0;try{e=a$9(this._trackingTarget,c$1);}finally{$=!1;}return N.set(this,e),e},this.addResolvingPromise(this._resourcesFetch=this.beforeFirstRender().then((()=>{this._readyForTrueRender=!0,this._postInitialize();})));}normalizeCtorArgs(e,t){const r={...e};return t&&(r.container=t),r}postInitialize(){}beforeFirstRender(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then((()=>{})).catch(w$7)}async loadDependencies(){}async loadLocale(){}destroy(){this.destroyed||(this._trackingTarget=l$h(this._trackingTarget),this.viewModel=l$h(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,N.delete(this));}set container(e){this._get("container")||this._set("container",e);}castContainer(e){return e$6(e)}get id(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+L++}set id(e){e&&this._set("id",e);}get renderable(){return this._resourcesFetch}get test(){return {projector:this._projector,handles:this._internalHandles}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(N.delete(this),this._projector.scheduleRender());}classes(...e){return l$2.apply(this,e)}own(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._internalHandles.add(e);}renderNow(){N.delete(this),this._projector.renderNow();}_postInitialize(){var e;if(this.destroyed)return;this.scheduleRender(),null!=(e=this._delegatedEventNames)&&e.length&&this._internalHandles.add(i$6(this,"viewModel",((e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&this._internalHandles.add(this._delegatedEventNames.map((t=>e.on(t,(e=>{this.emit(t,e);})))),"delegated-events");}))),this.postInitialize();const t=async()=>{await this._loadLocale().catch(w$7),this.scheduleRender();};this._internalHandles.add([g$b(t),this.watch("uiStrings",t),a$3(this,"container",(async e=>{this.destroyed||this._attach(e);}))]);}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0);}_detach(e){e&&this._attached&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e),this._attached=!1);}};x[t$2]=!0,e$v([d$9()],x.prototype,"_readyForTrueRender",void 0),e$v([d$9({value:null})],x.prototype,"container",null),e$v([c$3("container")],x.prototype,"castContainer",null),e$v([d$9({aliasOf:"container"})],x.prototype,"domNode",void 0),e$v([d$9()],x.prototype,"iconClass",void 0),e$v([d$9()],x.prototype,"id",null),e$v([d$9()],x.prototype,"label",void 0),e$v([d$9()],x.prototype,"renderable",null),e$v([d$9()],x.prototype,"uiStrings",void 0),e$v([d$9()],x.prototype,"viewModel",void 0),e$v([d$9()],x.prototype,"visible",void 0),e$v([d$9()],x.prototype,"key",void 0),e$v([d$9()],x.prototype,"children",void 0),e$v([d$9()],x.prototype,"afterCreate",void 0),e$v([d$9()],x.prototype,"afterUpdate",void 0),e$v([d$9()],x.prototype,"afterRemoved",void 0),x=e$v([i$8(P)],x);const z=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e$2=function(r){return {vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}},o$1=function(r,t){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?o$1(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=e$2(d)),t.push(d));}},t$1=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return {vnodeSelector:r,properties:e||void 0,children:void 0,text:t[0],domNode:null};var i=[];return o$1(t,i),{vnodeSelector:r,properties:e||void 0,children:i,text:void 0,domNode:null}};function n(e,o,...n){return "function"!=typeof e||c(e)?t$1(e,o,...n):e(o,...n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(){return function(n,t){if(!n[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`);return {value:o(n[t])}}}function e$1(n){const{type:t}=n;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function o(t){return function(o,...r){e$1(o)?y$1(o.key)&&(o.preventDefault(),o.stopPropagation(),o.target.click()):t.call(this,o,...r);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return function(s,n){s.hasOwnProperty("_messageBundleProps")||(s._messageBundleProps=s._messageBundleProps?s._messageBundleProps.slice():[]);s._messageBundleProps.push({bundlePath:e,propertyName:n});}}

exports.$ = $$1;
exports.$$1 = $$4;
exports.A = A$4;
exports.A$1 = A$8;
exports.A$2 = A$b;
exports.A$3 = A$3;
exports.A$4 = A$7;
exports.B = B$4;
exports.C = C$4;
exports.C$1 = C$2;
exports.C$2 = C$3;
exports.D = D$3;
exports.E = E$3;
exports.E$1 = E$1;
exports.E$2 = E$5;
exports.E$3 = E$4;
exports.E$4 = E$6;
exports.F = F$3;
exports.F$1 = F$4;
exports.G = G$1;
exports.H = H$1;
exports.Host = Host;
exports.L = L$1;
exports.L$1 = L$6;
exports.L$2 = L$5;
exports.M = M$4;
exports.M$1 = M$3;
exports.N = N$3;
exports.N$1 = N$2;
exports.O = O;
exports.O$1 = O$2;
exports.P = P$3;
exports.P$1 = P$2;
exports.Q = Q$1;
exports.Rt = Rt;
exports.S = S$5;
exports.S$1 = S$1;
exports.S$2 = S$2;
exports.T = T$4;
exports.T$1 = T$3;
exports.T$2 = T$2;
exports.T$3 = T;
exports.U = U$4;
exports.U$1 = U$5;
exports.Ut = Ut;
exports.V = V$2;
exports.W = W$1;
exports.X = X$1;
exports.a = a$d;
exports.a$1 = a$8;
exports.a$2 = a$b;
exports.a$3 = a$3;
exports.a$4 = a$5;
exports.a$5 = a$m;
exports.attachShadow = attachShadow;
exports.b = b$3;
exports.b$1 = b$7;
exports.b$2 = b$6;
exports.b$3 = b$8;
exports.bt = bt;
exports.c = c$3;
exports.c$1 = c$i;
exports.c$2 = c$m;
exports.c$3 = c$b;
exports.createEvent = createEvent;
exports.d = d$9;
exports.d$1 = d$5;
exports.d$2 = d$h;
exports.d$3 = d$6;
exports.d$4 = d$i;
exports.d$5 = d$m;
exports.e = e$v;
exports.e$1 = e$6;
exports.e$10 = e$s;
exports.e$2 = e;
exports.e$3 = e$u;
exports.e$4 = e$c;
exports.e$5 = e$h;
exports.e$6 = e$o;
exports.e$7 = e$t;
exports.e$8 = e$j;
exports.e$9 = e$e;
exports.et = et;
exports.f = f$2;
exports.f$1 = f$1;
exports.f$2 = f$e;
exports.f$3 = f$h;
exports.g = g$1;
exports.g$1 = g$b;
exports.g$2 = g$2;
exports.g$3 = g$a;
exports.g$4 = g$c;
exports.g$5 = g$d;
exports.getAssetPath = getAssetPath;
exports.gt = gt;
exports.h = h$e;
exports.h$1 = h$4;
exports.h$2 = h$h;
exports.h$3 = h;
exports.ht = ht;
exports.i = i$8;
exports.i$1 = i$6;
exports.i$2 = i$4;
exports.i$3 = i$n;
exports.i$4 = i$r;
exports.i$5 = i$1;
exports.i$6 = i$l;
exports.i$7 = i$t;
exports.i$8 = i$v;
exports.j = j$8;
exports.j$1 = j$7;
exports.k = k$1;
exports.k$1 = k$7;
exports.l = l$g;
exports.l$1 = l$f;
exports.l$2 = l$h;
exports.l$3 = l$6;
exports.l$4 = l$2;
exports.m = m$c;
exports.m$2 = m$h;
exports.m$3 = m$2;
exports.m$4 = m$b;
exports.m$5 = m$g;
exports.n = n;
exports.n$1 = n$9;
exports.n$10 = n$f;
exports.n$11 = n$k;
exports.n$12 = n$q;
exports.n$2 = n$m;
exports.n$3 = n$7;
exports.n$4 = n$8;
exports.n$5 = n$d;
exports.n$6 = n$e;
exports.n$8 = n$p;
exports.n$9 = n$h;
exports.o = o$a;
exports.o$1 = o$u;
exports.o$10 = o$7;
exports.o$2 = o$v;
exports.o$3 = o$y;
exports.o$4 = o$p;
exports.o$5 = o$8;
exports.o$6 = o$c;
exports.o$7 = o$r;
exports.o$8 = o$m;
exports.o$9 = o$w;
exports.p = p$5;
exports.p$1 = p$2;
exports.p$2 = p$f;
exports.p$3 = p$3;
exports.proxyCustomElement = proxyCustomElement;
exports.pt = pt;
exports.q = q$5;
exports.q$1 = q$4;
exports.qt = qt;
exports.r = r$o;
exports.r$1 = r$j;
exports.r$2 = r$g;
exports.r$3 = r$k;
exports.r$4 = r$5;
exports.r$5 = r$i;
exports.r$6 = r$d;
exports.r$7 = r$f;
exports.r$8 = r$c;
exports.r$9 = r$9;
exports.request = request;
exports.rt = rt;
exports.s = s$n;
exports.s$1 = s$l;
exports.s$10 = s$e;
exports.s$11 = s$5;
exports.s$12 = s$i;
exports.s$13 = s$g;
exports.s$14 = s$r;
exports.s$15 = s$d;
exports.s$2 = s$o;
exports.s$3 = s$s;
exports.s$4 = s$k;
exports.s$5 = s$u;
exports.s$6 = s$3;
exports.s$7 = s$t;
exports.s$8 = s$q;
exports.s$9 = s$8;
exports.t = t$q;
exports.t$1 = t;
exports.t$10 = t$o;
exports.t$11 = t$i;
exports.t$2 = t$l;
exports.t$3 = t$g;
exports.t$4 = t$5;
exports.t$5 = t$n;
exports.t$6 = t$6;
exports.t$7 = t$f;
exports.t$8 = t$e;
exports.t$9 = t$p;
exports.u = u$1;
exports.u$1 = u$j;
exports.u$2 = u$2;
exports.u$3 = u$g;
exports.u$4 = u$7;
exports.u$5 = u$d;
exports.u$6 = u$8;
exports.u$7 = u$e;
exports.u$8 = u$n;
exports.u$9 = u$i;
exports.ut = ut;
exports.v = v$8;
exports.v$1 = v$2;
exports.v$2 = v$a;
exports.v$3 = v$b;
exports.v$4 = v$6;
exports.v$5 = v$c;
exports.v$6 = v$5;
exports.w = w$1;
exports.w$1 = w$7;
exports.w$2 = w$8;
exports.w$3 = w$6;
exports.wt = wt;
exports.x = x$4;
exports.xt = xt;
exports.y = y$1;
exports.y$1 = y$6;
exports.y$2 = y$b;
exports.y$3 = y$4;
exports.y$4 = y$8;
exports.z = z;
exports.z$1 = z$3;
exports.z$2 = z$4;
