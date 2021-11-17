import { B as BUILD, N as NAMESPACE } from './index-5b4f4de1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$w(e,t,r,o){var c,f=arguments.length,n=f<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(n=(f<3?c(n):f>3?c(t,r,n):c(t,r))||n);return f>3&&n&&Object.defineProperty(t,r,n),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$q,d$n;let r$q;var o$D,i$y;null!=(a$q=e$v.dojoConfig)&&a$q.has||null!=(d$n=e$v.esriConfig)&&d$n.has?r$q={...null==(o$D=e$v.dojoConfig)?void 0:o$D.has,...null==(i$y=e$v.esriConfig)?void 0:i$y.has}:r$q={};function s$w(a){return "function"==typeof r$q[a]?r$q[a]=r$q[a](e$v):r$q[a]}s$w.add=(e,a,d,o)=>((o||void 0===r$q[e])&&(r$q[e]=a),d&&s$w(e)),s$w.cache=r$q,s$w.add("esri-deprecation-warnings",!0),(()=>{s$w.add("host-webworker",void 0!==e$v.WorkerGlobalScope&&self instanceof e$v.WorkerGlobalScope);const a="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(s$w.add("host-browser",a),s$w.add("host-node","object"==typeof e$v.process&&e$v.process.versions&&e$v.process.versions.node&&e$v.process.versions.v8),s$w.add("dom",a),s$w("host-browser")){const e=navigator,a=e.userAgent,d=e.appVersion,r=parseFloat(d);if(s$w.add("wp",parseFloat(a.split("Windows Phone")[1])||void 0),s$w.add("msapp",parseFloat(a.split("MSAppHost/")[1])||void 0),s$w.add("khtml",d.includes("Konqueror")?r:void 0),s$w.add("edge",parseFloat(a.split("Edge/")[1])||void 0),s$w.add("opr",parseFloat(a.split("OPR/")[1])||void 0),s$w.add("webkit",!s$w("wp")&&!s$w("edge")&&parseFloat(a.split("WebKit/")[1])||void 0),s$w.add("chrome",!s$w("edge")&&!s$w("opr")&&parseFloat(a.split("Chrome/")[1])||void 0),s$w.add("android",!s$w("wp")&&parseFloat(a.split("Android ")[1])||void 0),s$w.add("safari",!d.includes("Safari")||s$w("wp")||s$w("chrome")||s$w("android")||s$w("edge")||s$w("opr")?void 0:parseFloat(d.split("Version/")[1])),s$w.add("mac",d.includes("Macintosh")),!s$w("wp")&&a.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),d=a.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(d.replace(/_/,".").replace(/_/g,""));s$w.add(e,r),s$w.add("ios",r);}s$w.add("trident",parseFloat(d.split("Trident/")[1])||void 0),s$w("webkit")||(!a.includes("Gecko")||s$w("wp")||s$w("khtml")||s$w("trident")||s$w("edge")||s$w.add("mozilla",r),s$w("mozilla")&&s$w.add("ff",parseFloat(a.split("Firefox/")[1]||a.split("Minefield/")[1])||void 0));}})(),(()=>{if(e$v.navigator){const e=navigator.userAgent,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),d=/iPhone/i.test(e);a&&s$w.add("esri-mobile",a),d&&s$w.add("esri-iPhone",d),s$w.add("esri-geolocation",!!navigator.geolocation);}s$w.add("esri-canvas-svg-support",!s$w("trident")),s$w.add("esri-wasm","WebAssembly"in e$v),s$w.add("esri-shared-array-buffer",(()=>{const a="SharedArrayBuffer"in e$v,d=!1===e$v.crossOriginIsolated;return a&&!d})),s$w.add("esri-atomics","Atomics"in e$v),s$w.add("esri-workers","Worker"in e$v),s$w.add("esri-text-decoder","TextDecoder"in e$v),s$w.add("esri-text-encoder","TextEncoder"in e$v),s$w.add("web-feat:cache","caches"in e$v),s$w.add("esri-workers-arraybuffer-transfer",!s$w("safari")||Number(s$w("safari"))>=12),s$w.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),s$w.add("featurelayer-simplify-payload-size-factors",[1,1,4]),s$w.add("featurelayer-snapshot-enabled",!0),s$w.add("featurelayer-snapshot-point-min-threshold",8e4),s$w.add("featurelayer-snapshot-point-max-threshold",4e5),s$w.add("featurelayer-snapshot-point-coverage",.1),s$w.add("featurelayer-advanced-symbols",!1),s$w.add("featurelayer-pbf",!0),s$w.add("featurelayer-pbf-statistics",!1),s$w.add("feature-layers-workers",!0),s$w.add("mapview-transitions-duration",200),s$w.add("mapserver-pbf-enabled",!1),s$w("host-webworker")||s$w("host-browser")&&(s$w.add("esri-csp-restrictions",(()=>{try{new Function;}catch{return !0}return !1})),s$w.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{s$w.add("esri-image-decode",!0,!0,!0);})).catch((()=>{s$w.add("esri-image-decode",!1,!0,!0);}))}return !1})),s$w.add("esri-url-encodes-apostrophe",(()=>{const a=e$v.document.createElement("a");return a.href="?'",a.href.includes("?%27")})),s$w.add("vectortilelayer-max-buffers",s$w("ff")?160:Number.POSITIVE_INFINITY));})();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$w=null;function r$p(n){return null!=n}function t$t(n){return null==n}function u$s(n){return void 0===n}function o$C(t,u){return r$p(t)?u(t):n$w}function e$u(n){return n}function f$k(n,r){if(t$t(n))throw new Error(r);return n}function c$p(n,t){return r$p(n)?n:"function"==typeof t?t():t}function l$n(n){return r$p(n)&&n.destroy(),null}function i$x(n){return r$p(n)&&n.dispose(),null}function s$v(n){return r$p(n)&&n.remove(),null}function a$p(n){return r$p(n)&&n.abort(),null}function h$j(n){return r$p(n)&&n.release(),null}function p$l(n,t){return r$p(n)&&r$p(t)?n.equals(t):n===t}function w$a(n){return null}function y$i(n,t){const u=new Array;return n.forEach((n=>{const o=t(n);r$p(o)&&u.push(o);})),u}function d$m(n,r){const t=new Array;for(const u of n)t.push(A$c(u,null,r));return t}function v$d(n,r){for(const t of n)A$c(t,null,r);}function A$c(n,t,u){return r$p(n)?u(n):t}function E$6(n,t){return r$p(n)?t(n):null}function b$b(n,t){for(const u of n){const n=t(u);if(r$p(n))return n}return null}function g$g(n){return n.filter((n=>r$p(n)))}function m$j(n,...r){let t=n;for(let u=0;u<r.length&&t;++u)t=t[r[u]];return t}function q$5(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$s{constructor(t=1){this._seed=t;}set seed(e){this._seed=null==e?Math.random()*t$s._m:e;}getInt(){return this._seed=(t$s._a*this._seed+t$s._c)%t$s._m,this._seed}getFloat(){return this.getInt()/(t$s._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(e,s){const n=s-e;return e+this.getInt()/t$s._m*n}}t$s._m=2147483647,t$s._a=48271,t$s._c=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$o(n){if(!n)return;return n.length>0?n[0]:void 0}function e$t(n){if(!n)return;const t=n.length;return t>0?n[t-1]:void 0}function o$B(n){return n}function f$j(n,t=o$B){if(!n||0===n.length)return;let r=n[0],e=t(r);for(let o=1;o<n.length;++o){const f=n[o],u=Number(t(f));u>e&&(e=u,r=f);}return r}function u$r(n,t=o$B){return f$j(n,(n=>-t(n)))}function i$w(n,t){return t?n.filter(((n,r,e)=>e.findIndex(t.bind(null,n))===r)):n.filter(((n,t,r)=>r.indexOf(n)===t))}function l$m(t,r,e){if(t$t(t)&&t$t(r))return !0;if(t$t(t)||t$t(r)||t.length!==r.length)return !1;if(e){for(let n=0;n<t.length;n++)if(!e(t[n],r[n]))return !1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return !1;return !0}function c$o(n,t,r){let e,o;return r?(e=t.filter((t=>!n.some((n=>r(n,t))))),o=n.filter((n=>!t.some((t=>r(t,n)))))):(e=t.filter((t=>!n.includes(t))),o=n.filter((n=>!t.includes(n)))),{added:e,removed:o}}function s$u(n,t,r){return n&&t?r?n.filter((function(n){return t.findIndex((function(t){return r(n,t)}))>-1})):n.filter((function(n){return t.indexOf(n)>-1})):[]}function a$o(n){return n&&"number"==typeof n.length}function h$i(n,t){const r=n.length;if(0===r)return [];const e=[];for(let o=0;o<r;o+=t)e.push(n.slice(o,o+t));return e}const d$l=!!Array.prototype.fill;function g$f(n,t){if(d$l)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function m$i(n,t){void 0===t&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}function p$k(n,t,r){const e=n.length;let o=0,f=e-1;for(;o<f;){const r=o+Math.floor((f-o)/2);t>n[r]?o=r+1:f=r;}const u=n[o];return r?t>=n[e-1]?-1:u===t?o:o-1:u===t?o:-1}function x$7(n,t,r){if(!n||0===n.length)return;const e=n.length-1,o=n[0];if(t<=r(o))return o;const f=n[e];if(t>=r(f))return f;let u=0,i=0,l=e;for(;u<l;){i=u+Math.floor((l-u)/2);const o=n[i],f=r(o);if(f===t)return o;if(t<f){if(i>0){const e=n[i-1],u=r(e);if(t>u)return t-u>=f-t?o:e}l=i;}else {if(i<e){const e=n[i+1],u=r(e);if(t<u)return t-f>=u-t?e:o}u=i+1;}}return n[i]}function M$4(n){return n.reduce(((n,t)=>n.concat(t||[])),[])}class w$9{constructor(){this.last=0;}}const y$h=new w$9;function b$a(n,t,r,e){e=e||y$h;const o=Math.max(0,e.last-10);for(let u=o;u<r;++u)if(n[u]===t)return e.last=u,u;const f=Math.min(o,r);for(let u=0;u<f;++u)if(n[u]===t)return e.last=u,u;return -1}function v$c(n,t,r,e){const o=null==r?n.length:r,f=b$a(n,t,o,e);if(-1!==f)return n[f]=n[o-1],null==r&&n.pop(),t}const A$b=new Set;function O$4(n,t,r=n.length,e=t.length,o,f){if(0===e||0===r)return r;A$b.clear();for(let i=0;i<e;++i)A$b.add(t[i]);o=o||y$h;const u=Math.max(0,o.last-10);for(let i=u;i<r;++i)if(A$b.has(n[i])&&(f&&f.push(n[i]),A$b.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$b.size||0===r))return A$b.clear(),r;for(let i=0;i<u;++i)if(A$b.has(n[i])&&(f&&f.push(n[i]),A$b.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$b.size||0===r))return A$b.clear(),r;return A$b.clear(),r}function j$b(n,t,r){const e=n.length;if(t>=e)return n.slice(0);const o=z$5(r),f=new Set,u=[];for(;u.length<t;){const t=Math.floor(o()*e);f.has(t)||(f.add(t),u.push(n[t]));}return u}function z$5(n){return n?(S$6.seed=n,()=>S$6.getFloat()):Math.random}function I$3(n,t){const r=z$5(t);for(let e=n.length-1;e>0;e--){const t=Math.floor(r()*(e+1)),o=n[e];n[e]=n[t],n[t]=o;}return n}const S$6=new t$s;function C$5(n,t){const r=n.indexOf(t);return -1!==r?(n.splice(r,1),t):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$v(r,n){if(r.forEach)r.forEach(n);else for(let t=0;t<r.length;t++)n(r[t],t,r);}function t$r(r,n,t){if(r.slice)return r.slice(n,t);void 0===n?n=0:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n))),void 0===t?t=r.length:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t)));const o=Math.max(0,t-n),c=new(0,r.constructor)(o);for(let e=0;e<o;e++)c[e]=r[n+e];return c}function o$A(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name}function c$n(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function e$s(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function a$n(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u$q(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function i$v(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f$i(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function s$t(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function y$g(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function A$a(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}function l$l(r){const n=new Array(r.length);for(let t=0;t<r.length;t++)n[t]=r[t];return n}function m$h(n){return t$t(n)?0:128+n.buffer.byteLength+64}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function y$f(e,t){let n;if(t)for(n in e)e.hasOwnProperty(n)&&(void 0===e[n]?delete e[n]:e[n]instanceof Object&&y$f(e[n],!0));else for(n in e)e.hasOwnProperty(n)&&void 0===e[n]&&delete e[n];return e}function l$k(e){if(!e||"object"!=typeof e||"function"==typeof e)return e;if(c$n(e)||e$s(e)||a$n(e)||u$q(e)||i$v(e)||f$i(e)||s$t(e)||y$g(e)||A$a(e))return t$r(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer){return e.slice(0,e.byteLength)}if(e instanceof Map){const t=new Map;return e.forEach(((e,n)=>{t.set(n,l$k(e));})),t}if(e instanceof Set){const t=new Set;return e.forEach((e=>{t.add(l$k(e));})),t}let t;const y=e;if("function"==typeof y.clone)t=y.clone();else if("function"==typeof y.map&&"function"==typeof y.forEach)t=y.map(l$k);else if("function"==typeof y.notifyChange&&"function"==typeof y.watch)t=y.clone();else {t={};for(const n of Object.getOwnPropertyNames(e))t[n]=l$k(e[n]);}return t}function m$g(e,t){return e===t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t)||"function"==typeof(e||{}).getTime&&"function"==typeof(t||{}).getTime&&e.getTime()===t.getTime()||!1}function g$e(t,n){return t===n||(null==t||"string"==typeof t?t===n:"number"==typeof t?t===n||"number"==typeof n&&isNaN(t)&&isNaN(n):t instanceof Date?n instanceof Date&&t.getTime()===n.getTime():Array.isArray(t)?Array.isArray(n)&&l$m(t,n):t instanceof Set?n instanceof Set&&h$h(t,n):t instanceof Map?n instanceof Map&&j$a(t,n):"object"==typeof t&&("object"==typeof n&&b$9(t,n)))}function b$9(e,t){if(null===e||null===t)return !1;const n=Object.keys(e),o=n.length;if(null===t||Object.keys(t).length!==o)return !1;for(const r of n)if(e[r]!==t[r]||!Object.prototype.hasOwnProperty.call(t,r))return !1;return !0}function h$h(e,t){if(e.size!==t.size)return !1;for(const n of e)if(!t.has(n))return !1;return !0}function j$a(e,t){if(e.size!==t.size)return !1;for(const[n,o]of e){const e=t.get(n);if(e!==o||void 0===e&&!t.has(n))return !1}return !0}const O$3=function(e={},...n){return s$w("esri-deprecation-warnings")&&console.warn("[esri.core.lang] 🛑 DEPRECATED - Function: mixin()\n\t🛠️ Replacement: Use Object.assign() directly\n\t⚙️ Version: 4.19"),Object.assign(e,...n)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$u(r,n,t=!1){return e$r(r,n,t)}function t$q(r,n){if(null!=n)return n[r]||i$u(r.split("."),!1,n)}function o$z(r,n,t){const o=r.split("."),e=o.pop(),u=i$u(o,!0,t);u&&e&&(u[e]=n);}function i$u(r,n,t){let o=t;for(const i of r){if(null==o)return;if(!(i in o)){if(!n)return;o[i]={};}o=o[i];}return o}function e$r(n,t,o){return t?Object.keys(t).reduce((function(n,i){let u=n[i],c=t[i];return u===c?n:void 0===u?(n[i]=l$k(c),n):(Array.isArray(c)||Array.isArray(n)?(u=u?Array.isArray(u)?n[i]=u.concat():n[i]=[u]:n[i]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{-1===u.indexOf(r)&&u.push(r);})):n[i]=c.concat())):c&&"object"==typeof c?n[i]=e$r(u,c,o):n.hasOwnProperty(i)&&!t.hasOwnProperty(i)||(n[i]=c),n)}),n||{}):n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$k="20211104",e$q="f56ab3008fdaea1ce910515531b6ddb258d83e4f";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$p={apiKey:void 0,applicationUrl:e$v.location&&e$v.location.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(e$v.esriConfig&&(n$u(t$p,e$v.esriConfig,!0),delete t$p.has),!t$p.assetsPath){const e="4.22.0";t$p.assetsPath=`https://cdn.jsdelivr.net/npm/@arcgis/core@${e}-next.${d$k}/assets`;}t$p.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(t$p,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath");}}),t$p.request.corsEnabledServers=[],t$p.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$p=/\{([^\}]+)\}/g;function n$t(t){return null==t?"":t}function r$n(r,o){return r.replace(e$p,"object"==typeof o?(e,r)=>n$t(t$q(r,o)):(t,e)=>n$t(o(e)))}function o$y(t,e){return t.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(t=>e&&-1!==e.indexOf(t)?t:`\\${t}`))}function c$m(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}function u$p(t){return (new DOMParser).parseFromString(t||"","text/html").body.innerText||""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$x={info:0,warn:1,error:2,none:3};class s$s{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s$s._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s$s.getLogger(this.module.slice(0,t)));}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e);}warn(...e){this._log("warn","always",...e);}info(...e){this._log("info","always",...e);}errorOnce(...e){this._log("error","once",...e);}warnOnce(...e){this._log("warn","once",...e);}infoOnce(...e){this._log("info","once",...e);}errorOncePerTick(...e){this._log("error","oncePerTick",...e);}warnOncePerTick(...e){this._log("warn","oncePerTick",...e);}infoOncePerTick(...e){this._log("info","oncePerTick",...e);}get test(){const e=this;return {loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return {resetLoggers(e={}){const t=s$s._loggers;return s$s._loggers=e,t},set throttlingDisabled(e){s$s._throttlingDisabled=e;}}}static getLogger(e){let t=s$s._loggers[e];return t||(t=new s$s({module:e})),t}_log(t,r,...o){if(!this._matchLevel(t))return;if("always"!==r&&!s$s._throttlingDisabled){const e=this._argsToKey(o),n=this._loggedMessages[t].get(e);if("once"===r&&null!=n||"oncePerTick"===r&&n&&n>=s$s._tickCounter)return;this._loggedMessages[t].set(e,s$s._tickCounter),s$s._scheduleTickCounterIncrement();}for(const s of t$p.log.interceptors)if(s(t,this.module,...o))return;this._inheritedWriter()(t,this.module,...o);}_parentWithMember(e,r){let o=this;for(;r$p(o);){const r=o[e];if(r$p(r))return r;o=o.parent;}return r}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...r){console[e](`[${t}]`,...r);}_matchLevel(t){const r=t$p.log.level?t$p.log.level:"warn";return o$x[this._parentWithMember("level",r)]<=o$x[t]}_argsToKey(...e){const t=(e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]";return c$m(JSON.stringify(e,t))}static _scheduleTickCounterIncrement(){s$s._tickCounterScheduled||(s$s._tickCounterScheduled=!0,Promise.resolve().then((()=>{s$s._tickCounter++,s$s._tickCounterScheduled=!1;})));}}s$s._loggers={},s$s._tickCounter=0,s$s._tickCounterScheduled=!1,s$s._throttlingDisabled=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$s(n,t){for(const[r,o]of n)if(t(o,r))return !0;return !1}function t$o(n,t){for(const[r,o]of n)if(t(o,r))return o;return null}function r$m(n,t,r){const o=n.get(t);if(void 0!==o)return o;const f=r();return n.set(t,f),f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$l=s$s.getLogger("esri.core.Accessor");function t$n(e){return null==e?e:new Date(e)}function o$w(e){return null==e?e:!!e}function u$o(e){return null==e?e:e.toString()}function a$m(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function s$r(e){return null==e?e:Math.round(parseFloat(e))}function l$j(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function i$t(e,n){return null!=n&&e&&!(n instanceof e)}function c$l(e){return e&&"isCollection"in e}function f$h(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function p$j(e,n){if(!n||!n.constructor||!c$l(n.constructor))return y$e(e,n)?n:new e(n);const r=f$h(e.prototype.itemType),t=f$h(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(y$e(e,n),n):new e(n):n}function y$e(e,n){return !!l$j(n)&&(r$l.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+g$d(e)+"'"),!0)}function v$b(e,n){return null==n?n:c$l(e)?p$j(e,n):i$t(e,n)?y$e(e,n)?n:new e(n):n}function g$d(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const d$j=new WeakMap;function h$g(e){switch(e){case Number:return a$m;case S$5:return s$r;case Boolean:return o$w;case String:return u$o;case Date:return t$n;default:return r$m(d$j,e,(()=>v$b.bind(null,e)))}}function b$8(e,n){const r=h$g(e);return 1===arguments.length?r:r(n)}function m$f(e,n,r){return 1===arguments.length?m$f.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function w$8(e,n){return 1===arguments.length?m$f(b$8.bind(null,e)):m$f(b$8.bind(null,e),n)}function A$9(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>A$9(e,n-1,r))):e(r)}function $$4(e,n,r){if(2===arguments.length)return $$4.bind(null,e,n);if(!r)return r;let t=n,o=r=A$9(e,n,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function j$9(e,n,r){return 2===arguments.length?$$4(b$8.bind(null,e),n):$$4(b$8.bind(null,e),n,r)}function k$7(e){return !!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return !("string"===r||"number"===r||"function"===r&&e.length>1)}))}function M$3(e,n){if(2===arguments.length)return M$3(e).call(null,n);const t=new Set,o=e.filter((e=>"function"!=typeof e)),u=e.filter((e=>"function"==typeof e));for(const r of e)"string"!=typeof r&&"number"!=typeof r||t.add(r);let a=null,s=null;return (e,n)=>{if(null==e)return e;const l=typeof e,c="string"===l||"number"===l;return c&&(t.has(e)||u.some((e=>"string"===l&&e===String||"number"===l&&e===Number)))||"object"===l&&u.some((n=>!i$t(e,n)))?e:(c&&o.length?(a||(a=o.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),r$l.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&u.length?(s||(s=u.map((e=>g$d(e))).join(", ")),r$l.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):r$l.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function N$5(e,n){if(2===arguments.length)return N$5(e).call(null,n);const t={},o=[],u=[];for(const r in e.typeMap){const n=e.typeMap[r];t[r]=b$8(n),o.push(g$d(n)),u.push(r);}const a=()=>`'${o.join("', '")}'`,s=()=>`'${u.join("', '")}'`,c="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!i$t(e.base,n))return n;if(null==n)return n;const o=c(n)||e.defaultKeyValue,u=t[o];if(!u)return r$l.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${s()})`),null;if(!i$t(e.typeMap[o],n))return n;if("string"==typeof e.key&&!l$j(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return u(r)}return u(n)}}class S$5{}const T$4={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function _$a(e){if(!e||!("type"in e))return !1;switch(e.type){case"native":case"array":case"one-of":return !0}return !1}function B$5(e){switch(e.type){case"native":return b$8(e.value);case"array":return m$f(B$5(e.value));case"one-of":return C$4(e);default:return null}}function C$4(e){let n=null;return (t,o)=>F$5(t,e)?t:(null==n&&(n=D$5(e)),r$l.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),o&&(o.valid=!1),null)}function D$5(e){switch(e.type){case"native":switch(e.value){case Number:return "number";case String:return "string";case Boolean:return "boolean";case S$5:return "integer";case Date:return "date";default:return g$d(e.value)}case"array":return `array of ${D$5(e.value)}`;case"one-of":{const n=e.values.map((e=>D$5(e)));return `one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return "unknown"}function F$5(e,n){if(null==e)return !0;switch(n.type){case"native":switch(n.value){case Number:case S$5:return "number"==typeof e;case Boolean:return "boolean"==typeof e;case String:return "string"==typeof e}return e instanceof n.value;case"array":return !!Array.isArray(e)&&!e.some((e=>!F$5(e,n.value)));case"one-of":return n.values.some((n=>F$5(e,n)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$k(r){return n$r((()=>r.forEach((r=>r$p(r)&&r.remove()))))}function n$r(e){return {remove:()=>{e&&(e(),e=void 0);}}}function o$v(r){return n$r((()=>{const n=r();r$p(n)&&n.remove();}))}function t$m(r){return n$r(r$p(r)?()=>r.destroy():void 0)}function u$n(e,r){const o=setTimeout(e,r);return n$r((()=>clearTimeout(o)))}function i$s(r,o){let t=!1,u=null;return r.then((e=>{t?e.remove():u=e;})),n$r((()=>{t=!0,r$p(u)?u.remove():r$p(o)&&(o.abort(),o=null);}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$o(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i$r(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function o$u(r,n){const t=e$o(r);return t?t.getDependsInfo(r,n,""):""}function u$m(r,n,t){if(t){return a$l(r,n,{policy:t,path:""})}return a$l(r,n,null)}function a$l(r,e,i){return e?Object.keys(e).reduce((function(r,o){let u=null,l="merge";if(i&&(u=i.path?`${i.path}.${o}`:o,l=i.policy(u)),"replace"===l)return r[o]=e[o],r;if(void 0===r[o])return r[o]=l$k(e[o]),r;let f=r[o],s=e[o];if(f===s)return r;if(Array.isArray(s)||Array.isArray(r))f=f?Array.isArray(f)?r[o]=f.concat():r[o]=[f]:r[o]=[],s&&(Array.isArray(s)||(s=[s]),s.forEach((r=>{-1===f.indexOf(r)&&f.push(r);})));else if(s&&"object"==typeof s)if(i){const n=i.path;i.path=q$5(u),r[o]=a$l(f,s,i),i.path=n;}else r[o]=a$l(f,s,null);else r.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(r[o]=s);return r}),r||{}):r}function l$i(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:f$g(r):r}function f$g(r){return Array.isArray(r)?r:r.split(".")}function s$q(r){return r.indexOf(",")>-1?r.split(",").map((r=>r.trim())):[r.trim()]}function c$k(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...s$q(t));return n}return s$q(r)}function p$i(r){if(-1===r.indexOf("?"))return null;const n=f$g(r),t=new Array(n.length);for(let e=0;e<n.length;e++){const r=n[e];t[e]="?"===r[r.length-1],t[e]&&(n[e]=r.slice(0,-1));}return {fullPath:n.join("."),conditional:t}}function y$d(n,t,e,i){const o=c$k(t);if(1!==o.length){const t=o.map((r=>i(n,r,e)));return r$k(t)}return i(n,o[0],e)}function h$f(r){let n=!1;return ()=>{n||(n=!0,r());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$n(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const u=e$o(e);return i$r(u,i)?u.get(i):e[i]}function i$q(t,n,r){if(null==t)return t;const u=e$n(n[r],t);return !u&&r<n.length-1?void 0:r===n.length-1?u:i$q(u,n,r+1)}function u$l(n,r,u=0){return "string"==typeof r&&-1===r.indexOf(".")?e$n(r,n):i$q(n,f$g(r),u)}function o$t(t,n){return u$l(t,n)}function s$p(t,n){return void 0!==u$l(n,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o$s{constructor(t){this.autoDestroy=!1,this.properties=t;}}function n$q(r){let n=r.constructor.__accessorMetadata__;const c=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(n){if(!c){const e=Object.create(n.properties),c=n.autoDestroy;for(const r in e)e[r]=l$k(e[r]);n=new o$s(e),n.autoDestroy=c,Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});}}else n=new o$s({}),Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});return q$5(r.constructor.__accessorMetadata__)}function c$j(t){return n$q(t).properties}function s$o(t,e){const r=c$j(t);let o=r[e];return o||(o=r[e]={}),o}function a$k(t,e,r){c$j(t)[e]=r;}function u$k(t,e){return u$m(t,e,f$f)}function i$p(t,e){return u$m(t,e,_$9)}const p$h=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function _$9(t){return p$h.test(t)?"replace":"merge"}const l$h=/^properties\./;function f$f(t){return l$h.test(t)?_$9(t.slice(11)):"merge"}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$l(e,r,s){if(e&&r)if("object"==typeof r)for(const o of Object.getOwnPropertyNames(r))t$l(e,o,r[o]);else {if(-1!==r.indexOf(".")){const i=r.split("."),f=i.splice(i.length-1,1)[0];return void t$l(o$t(e,i),f,s)}e[r]=s;}}s$s.getLogger("esri.core.accessorSupport.set");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d$i(n={}){return (o,i)=>{if(o===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${o.name}.${i}. Accessor does not support static properties.`);const s=Object.getOwnPropertyDescriptor(o,i),a=s$o(o,i);s&&(s.get||s.set?(a.get=s.get||a.get,a.set=s.set||a.set):"value"in s&&("value"in n&&s$s.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${i}" on "${o.constructor.name}" already defined in the metadata`,n),a.value=n.value=s.value)),null!=n.readOnly&&(a.readOnly=n.readOnly);const c=n.aliasOf;if(c){const t="string"==typeof c?c:c.source,e="string"==typeof c?null:!0===c.overridable;let r;a.dependsOn=[t],a.get=function(){let e=o$t(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=o$t(this,r);n&&(e=e.bind(n));}return e},a.readOnly||(a.set=e?function(t){void 0!==t?this._override(i,t):this._clearOverride(i);}:function(e){t$l(this,t,e);});}const p=n.type,u=n.types;a.cast||(p?a.cast=h$e(p):u&&(Array.isArray(u)?a.cast=m$f(N$5(u[0])):a.cast=N$5(u))),n.range&&(a.cast=v$a(a.cast,n.range)),i$p(a,n);}}function y$c(t,e,r){const n=s$o(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function h$e(t){let e=0,r=t;if(_$a(t))return B$5(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const l=r;if(k$7(l))return 0===e?M$3(l):$$4(M$3(l),e);if(1===e)return w$8(l);if(e>1)return j$9(l,e);const f=t;return f.from?f.from:b$8(f)}function v$a(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$r(o,t){const e=t?{...t,source:o}:o;return d$i({aliasOf:e})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o$q,r$j=[];const s$n=s$s.getLogger("esri.core.Accessor");function c$i(){r$j=[];}function i$o(t){void 0!==o$q&&o$q.onObservableAccessed(t);}let l$g=!1,f$e=!1;function a$j(t,n,e){if(l$g)return g$c(t,n,e);u$j(t);const o=n.call(e);return p$g(),o}function g$c(t,n,e){const o=l$g;l$g=!0,u$j(t);let r=null;try{r=n.call(e);}catch(c){f$e&&s$n.error(c);}return p$g(),l$g=o,r}function u$j(t){o$q=t,r$j.push(t);}function p$g(){const t=r$j.pop();o$q=r$j.length>0?r$j[r$j.length-1]:void 0,void 0!==t&&t.onTrackingEnd();}function d$h(t,n){if(32&n.flags)return;const e=f$e;f$e=!1,64&n.flags?g$c(n,n.metadata.get,t):h$d(t,n),f$e=e;}const m$e=[];function h$d(t,e){128&e.flags||(e.flags|=128,g$c(e,(()=>{const o=e.metadata.dependsOn||m$e;for(const e of o)if("string"==typeof e&&-1===e.indexOf("."))A$8(t,e,!1);else {const o=f$g(e);for(let n=0,e=t;n<o.length&&null!=e&&"object"==typeof e;++n)e=A$8(e,o[n],n!==o.length-1);}})),e.flags&=-129);}function A$8(t,n,o){const r="?"===n[n.length-1]?n.slice(0,-1):n;if(null!=t.getItemAt||Array.isArray(t)){const n=parseInt(r,10);if(!isNaN(n))return Array.isArray(t)?t[n]:t.getItemAt(n)}const s=e$o(t),c=null==s?void 0:s.properties.get(r);return c&&(i$o(c),d$h(t,c)),o?t[r]:void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$p(n){if(n.json&&n.json.origins){const o=n.json.origins,e={"web-document":["web-scene","web-map"]};for(const n in e)if(o[n]){const s=o[n];e[n].forEach((n=>{o[n]=s;})),delete o[n];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$m(e,s){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return "$";const i=t$q(n,s),r=null==i?"":i;if(void 0===r)throw new Error(`could not find key "${n}" in template`);return r.toString()}))}class s$m{constructor(t,n,i){this.name=t,this.details=i,this.message=void 0,this instanceof s$m&&(this.message=n&&e$m(n,i)||"");}toString(){return "["+this.name+"]: "+this.message}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$k extends s$m{constructor(e,s,r){if(super(e,s,r),!(this instanceof t$k))return new t$k(e,s,r)}}t$k.prototype.type="warning";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$l(e){return !!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$n=s$s.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p$f(t,r,n){var o,i;t&&(!n&&!r.read||null!=(o=r.read)&&o.reader||!1===(null==(i=r.read)?void 0:i.enabled)||d$g(t)&&o$z("read.reader",u$i(t),r));}function u$i(t){var e;const r=null!=(e=t.ndimArray)?e:0;if(r>1)return c$h(t);if(1===r)return a$i(t);if("type"in t&&l$f(t.type)){var n,o;const e=null==(n=t.type.prototype)||null==(o=n.itemType)?void 0:o.Type,r=a$i("function"==typeof e?{type:e}:{types:e});return (e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return s$l(t)}function s$l(t){return "type"in t?y$b(t.type):j$8(t.types)}function y$b(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void i$n.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const p=new t;return p.read(e,n),p}:t.fromJSON}function f$d(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>f$d(t,e,r,n-1))):t(e,void 0,r)}function c$h(t){var e;const r=s$l(t),n=f$d.bind(null,r),o=null!=(e=t.ndimArray)?e:0;return (t,e,r)=>{if(null==t)return t;t=n(t,r,o);let i=o,p=t;for(;i>0&&Array.isArray(p);)i--,p=p[0];if(void 0!==p)for(let n=0;n<i;n++)t=[t];return t}}function a$i(t){const e=s$l(t);return (t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t);}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function l$f(t){if(!e$l(t))return !1;const e=t.prototype.itemType;return !(!e||!e.Type)&&("function"==typeof e.Type?v$9(e.Type):m$d(e.Type))}function d$g(t){return "types"in t?m$d(t.types):v$9(t.type)}function v$9(t){return !Array.isArray(t)&&(!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||l$f(t)))}function m$d(t){for(const e in t.typeMap){if(!v$9(t.typeMap[e]))return !1}return !0}function j$8(t){var e;let n=null;const o=null!=(e=t.errorContext)?e:"type";return (e,p,u)=>{if(null==e)return e;const s=typeof e;if("object"!==s)return void i$n.error(`Expected JSON value of type 'object' to deserialize, but got '${s}'`);n||(n=g$b(t));const y=t.key;if("string"!=typeof y)return;const f=e[y],c=f?n[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!c){const t=`Type '${f||"unknown"}' is not supported`;return u&&u.messages&&e&&u.messages.push(new t$k(`${o}:unsupported`,t,{definition:e,context:u})),void i$n.error(t)}const a=new c;return a.read(e,u),a}}function g$b(t){const e={};for(const i in t.typeMap){var r,o;const p=t.typeMap[i],u=n$q(p.prototype);if("function"==typeof t.key)continue;const s=u.properties[t.key];if(!s)continue;null!=(r=s.json)&&r.type&&Array.isArray(s.json.type)&&1===s.json.type.length&&"string"==typeof s.json.type[0]&&(e[s.json.type[0]]=p);const y=null==(o=s.json)?void 0:o.write;if(!y||!y.writer){e[i]=p;continue}const f=y.target,c="string"==typeof f?f:t.key,a={};y.writer(i,a,c),a[c]&&(e[a[c]]=p);}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$k(e){if(e.json||(e.json={}),o$p(e.json),n$o(e.json),r$i(e.json),e.json.origins)for(const t in e.json.origins)o$p(e.json.origins[t]),n$o(e.json.origins[t]),r$i(e.json.origins[t]);return !0}function r$i(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name});}function o$p(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0);}function n$o(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$k extends s$m{constructor(e,t,r){if(super(e,t,r),!(this instanceof s$k))return new s$k(e,t,r)}toJSON(){if(null!=this.details)try{return {name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return l$k(r)}catch(s){return "[object]"}})))}}catch(r){throw s$s.getLogger("esri.core.Error").error(r),r}return {name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s$k(e.name,e.message,e.details)}}s$k.prototype.type="error";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$m=s$s.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer");function o$o(r,t){var e;if(!t.write||t.write.writer||!1===t.write.enabled&&!t.write.overridePolicy)return;const i=null!=(e=null==r?void 0:r.ndimArray)?e:0;r&&(1===i||"type"in r&&e$l(r.type))?t.write.writer=a$h:i>1?t.write.writer=w$7(i):t.types?Array.isArray(t.types)?t.write.writer=s$j(t.types[0]):t.write.writer=u$h(t.types):t.write.writer=l$e;}function u$h(r){return (t,e,n,i)=>t?f$c(t,r,i)?l$e(t,e,n,i):void 0:l$e(t,e,n,i)}function f$c(t,e,n){for(const r in e.typeMap)if(t instanceof e.typeMap[r])return !0;if(null!=n&&n.messages){var o,u;const f=null!=(o=e.errorContext)?o:"type",s=`Values of type '${null!=(u="function"!=typeof e.key?t[e.key]:t.declaredClass)?u:"Unknown"}' cannot be written`;n&&n.messages&&t&&n.messages.push(new s$k(`${f}:unsupported`,s,{definition:t,context:n})),i$m.error(s);}return !1}function s$j(r){return (t,e,n,i)=>{if(!t||!Array.isArray(t))return l$e(t,e,n,i);return l$e(t.filter((t=>f$c(t,r,i))),e,n,i)}}function l$e(r,t,n,i){o$z(n,p$e(r,i),t);}function p$e(r,t){return r&&"function"==typeof r.write?r.write({},t):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?y$a(r):r}function y$a(r){return r===-1/0?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function a$h(r,t,n,i){let o;null===r?o=null:r&&"function"==typeof r.map?(o=r.map((r=>p$e(r,i))),"function"==typeof o.toArray&&(o=o.toArray())):o=[p$e(r,i)],o$z(n,o,t);}function c$g(r,t,e){return 0!==e&&Array.isArray(r)?r.map((r=>c$g(r,t,e-1))):p$e(r,t)}function w$7(r){return function(t,n,i,o){let u;if(null===t)u=null;else {u=c$g(t,o,r);let e=r,n=u;for(;e>0&&Array.isArray(n);)e--,n=n[0];if(void 0!==n)for(let r=0;r<e;r++)u=[u];}o$z(i,u,n);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$n(r,n){return a$g(r,"read",n)}function s$i(r,n){return a$g(r,"write",n)}function a$g(r,n,e){let t=r&&r.json;if(r&&r.json&&r.json.origins&&e){const i=r.json.origins[e.origin];i&&("any"===n||n in i)&&(t=i);}return t}function p$d(r){const n=y$9(r);if(r.json.origins)for(const t in r.json.origins){const o=r.json.origins[t],s=o.types?f$b(o):n;p$f(s,o,!1),o.types&&!o.write&&r.json.write&&r.json.write.enabled&&(o.write={...r.json.write}),o$o(s,o);}p$f(n,r.json,!0),o$o(n,r.json);}function y$9(r){return r.json.types?u$g(r.json):r.type?j$7(r):u$g(r)}function f$b(r){return r.type?j$7(r):u$g(r)}function j$7(n){if(!n.type)return;let e=0,t=n.type;for(;Array.isArray(t)&&!k$7(t);)t=t[0],e++;return {type:t,ndimArray:e}}function u$g(r){if(!r.types)return;let n=0,e=r.types;for(;Array.isArray(e);)e=e[0],n++;return {types:e,ndimArray:n}}function c$f(r){e$k(r)&&(n$p(r),p$d(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$m=new Set,s$h=new Set;function i$l(t){return r=>{r.prototype.declaredClass=t,a$f(r);const i=[],n=[];let c=r.prototype;for(;c;)c.hasOwnProperty("initialize")&&!o$m.has(c.initialize)&&(o$m.add(c.initialize),i.push(c.initialize)),c.hasOwnProperty("destroy")&&!s$h.has(c.destroy)&&(s$h.add(c.destroy),n.push(c.destroy)),c=Object.getPrototypeOf(c);o$m.clear(),s$h.clear();class l extends r{constructor(...e){if(super(...e),this.constructor===l&&"function"==typeof this.postscript){if(i.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=i.length-1;e>=0;e--)i[e].call(this);}}),n.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<n.length;e++)n[e].call(this);}}});}this.postscript(...e);}}}return l.__accessorMetadata__=n$q(r.prototype),l.prototype.declaredClass=t,l}}function n$n(e,r){return null==r.get?function(){const r=this.__accessor__.properties.get(e);if(void 0===r)return;i$o(r);const o=this.__accessor__.store;return o.has(e)?o.get(e):r.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function a$f(t){const o=t.prototype,s=n$q(o).properties,i={};for(const e of Object.getOwnPropertyNames(s)){const t=s[e];c$f(t),i[e]={enumerable:!0,configurable:!0,get:n$n(e,t),set(r){const o=this.__accessor__;if(void 0!==o){if(!Object.isFrozen(this)){if(o.initialized&&t.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${e}' of ${this.declaredClass}`);if(2===o.lifecycle&&t.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${e}' of ${this.declaredClass}`);o.set(e,r);}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});}};}Object.defineProperties(t.prototype,i);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o$l{constructor(o,s={ignoreUnknown:!1}){this.jsonToAPI=o,this.options=s,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(o),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(o,s,i)=>{const n=this.toJSON(o);void 0!==n&&o$z(i,n,s);},this.write.isJSONMapWriter=!0;}toJSON(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}invertMap(t){const o={};for(const s in t)o[t[s]]=s;return o}getKeysSorted(t){const o=[];for(const s in t)o.push(s);return o.sort(),o}}function s$g(){return function(t){return new o$l(t,{ignoreUnknown:!0})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$k,l$d,e$j;let t$j,r$h;const u$f=null!=(o$k=null==(l$d=e$v.esriConfig)?void 0:l$d.locale)?o$k:null==(e$j=e$v.dojoConfig)?void 0:e$j.locale;function c$e(){var o,l;return null!=(o=null!=u$f?u$f:null==(l=e$v.navigator)?void 0:l.language)?o:"en"}function i$k(){return void 0===r$h&&(r$h=c$e()),r$h}function a$e(n){t$j=n||void 0,m$c();}function s$f(n=i$k()){const o=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n);return null==o?void 0:o[1].toLowerCase()}const f$a={he:!0,ar:!0};function v$8(n=i$k()){const o=s$f(n);return void 0!==o&&(f$a[o]||!1)}const d$f=[];function g$a(n){return d$f.push(n),{remove(){d$f.splice(d$f.indexOf(n),1);}}}const h$c=[];function p$c(n){return h$c.push(n),{remove(){d$f.splice(h$c.indexOf(n),1);}}}function m$c(){var n;const o=null!=(n=t$j)?n:c$e();r$h!==o&&(r$h=o,[...h$c].forEach((n=>{n.call(null,o);})),[...d$f].forEach((n=>{n.call(null,o);})));}null==e$v.addEventListener||e$v.addEventListener("languagechange",m$c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$g={year:"numeric",month:"numeric",day:"numeric"},n$m={year:"numeric",month:"long",day:"numeric"},a$d={year:"numeric",month:"short",day:"numeric"},h$b={year:"numeric",month:"long",weekday:"long",day:"numeric"},m$b={hour:"numeric",minute:"numeric"},i$j={...m$b,second:"numeric"},s$e={"short-date":r$g,"short-date-short-time":{...r$g,...m$b},"short-date-short-time-24":{...r$g,...m$b,hour12:!1},"short-date-long-time":{...r$g,...i$j},"short-date-long-time-24":{...r$g,...i$j,hour12:!1},"short-date-le":r$g,"short-date-le-short-time":{...r$g,...m$b},"short-date-le-short-time-24":{...r$g,...m$b,hour12:!1},"short-date-le-long-time":{...r$g,...i$j},"short-date-le-long-time-24":{...r$g,...i$j,hour12:!1},"long-month-day-year":n$m,"long-month-day-year-short-time":{...n$m,...m$b},"long-month-day-year-short-time-24":{...n$m,...m$b,hour12:!1},"long-month-day-year-long-time":{...n$m,...i$j},"long-month-day-year-long-time-24":{...n$m,...i$j,hour12:!1},"day-short-month-year":a$d,"day-short-month-year-short-time":{...a$d,...m$b},"day-short-month-year-short-time-24":{...a$d,...m$b,hour12:!1},"day-short-month-year-long-time":{...a$d,...i$j},"day-short-month-year-long-time-24":{...a$d,...i$j,hour12:!1},"long-date":h$b,"long-date-short-time":{...h$b,...m$b},"long-date-short-time-24":{...h$b,...m$b,hour12:!1},"long-date-long-time":{...h$b,...i$j},"long-date-long-time-24":{...h$b,...i$j,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":m$b,"long-time":i$j},l$c=s$g()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),g$9=l$c.apiValues,y$8=l$c.toJSON.bind(l$c),d$e=l$c.fromJSON.bind(l$c),u$e={ar:"ar-u-nu-latn-ca-gregory"};let c$d=new WeakMap,D$4=s$e["short-date-short-time"];function T$3(t){const o=t||D$4;if(!c$d.has(o)){const t=i$k(),r=u$e[i$k()]||t;c$d.set(o,new Intl.DateTimeFormat(r,o));}return c$d.get(o)}function S$4(t){return s$e[t]||null}function L$6(t,o){return T$3(o).format(t)}p$c((()=>{c$d=new WeakMap,D$4=s$e["short-date-short-time"];}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$c={ar:"ar-u-nu-latn"};let e$i=new WeakMap,o$j={};function i$i(n){const i=n||o$j;if(!e$i.has(i)){const t=i$k(),o=a$c[i$k()]||t;e$i.set(i,new Intl.NumberFormat(o,n));}return q$5(e$i.get(i))}function u$d(t={}){const n={};return null!=t.digitSeparator&&(n.useGrouping=t.digitSeparator),null!=t.places&&(n.minimumFractionDigits=n.maximumFractionDigits=t.places),n}function m$a(t,n){return i$i(n).format(t)}p$c((()=>{e$i=new WeakMap,o$j={};}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$h=s$s.getLogger("esri.intl");function s$d(t,r,n={}){const{format:o={}}=n;return r$n(t,(t=>u$c(t,r,o)))}function u$c(t,e,n){let o,i;const s=t.indexOf(":");if(-1===s?o=t.trim():(o=t.slice(0,s).trim(),i=t.slice(s+1).trim()),!o)return "";const u=t$q(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$c(u,m):i?a$b(u,i):f$9(u)}function c$c(t,r){switch(r.type){case"date":return L$6(t,r.intlOptions);case"number":return m$a(t,r.intlOptions);default:return i$h.warn("missing format descriptor for key {key}"),f$9(t)}}function a$b(t,r){switch(r.toLowerCase()){case"dateformat":return L$6(t);case"numberformat":return m$a(t);default:return i$h.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L$6(t):/^numberformat/i.test(r)?m$a(t):f$9(t)}}function f$9(t){switch(typeof t){case"string":return t;case"number":return m$a(t);case"boolean":return ""+t;default:return t instanceof Date?L$6(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$h(t){return {setTimeout:(e,o)=>{const r=t.setTimeout(e,o);return {remove:()=>t.clearTimeout(r)}}}}const o$i=e$h(e$v);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$g(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r$f(r,t,n){if(!e$g(r))throw new TypeError("target is not a Evented or EventTarget object");if("on"in r)return r.on(t,n);if(Array.isArray(t)){const e=t.slice();for(const t of e)r.addEventListener(t,n);return {remove(){for(const t of e)r.removeEventListener(t,n);}}}return r.addEventListener(t,n),{remove(){r.removeEventListener(t,n);}}}function t$i(t,n,o){if(!e$g(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(n,o);const i=r$f(t,n,(e=>{i.remove(),o.call(t,e);}));return {remove(){i.remove();}}}function n$l(e,t,n){let o=!1;const i=r$f(e,t,(r=>{o||n.call(e,r);}));return {resume(){o=!1;},pause(){o=!0;},remove(){i.remove();}}}const o$h={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function i$g({key:e}){return o$h[e]||e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$c(t){return Promise.all(t)}function l$b(t,n){const e=t.slice();return Promise.all(t.map(((t,e)=>n(t,e)))).then((t=>e.filter(((n,e)=>t[e]))))}function f$8(t){return new Promise(((n,e)=>{try{t(n,e);}catch(r){Promise.resolve().then((()=>e(r)));}}))}function m$9(t="Aborted"){return new s$k("AbortError",t)}function h$a(t,n="Aborted"){if(p$b(t))throw m$9(n)}function a$a(t){return r$p(t)?"aborted"in t?t:t.signal:t}function p$b(t){const n=a$a(t);return r$p(n)&&n.aborted}function b$7(t){if(d$d(t))throw t}function w$6(t){if(!d$d(t))throw t}function j$6(t,n){const r=a$a(t);if(!t$t(r)){if(!r.aborted)return t$i(r,"abort",(()=>n()));n();}}function v$7(t,n){const r=a$a(t);if(!t$t(r))return h$a(r),t$i(r,"abort",(()=>n(m$9())))}function P$4(t,n){const e=a$a(n);return t$t(e)?t:new Promise(((e,r)=>{let o=j$6(n,(()=>r(m$9())));const i=()=>o=s$v(o);t.then(i,i),t.then(e,r);}))}function d$d(t){return t&&"AbortError"===t.name}function g$8(t){return t.catch((t=>{if(!d$d(t))throw t}))}function y$7(t,n=s$s.getLogger("esri")){return t.catch((t=>{d$d(t)||n.error(t);}))}function A$7(){let t=null;const n=new Promise(((n,e)=>{t={promise:void 0,resolve:n,reject:e};}));return t.promise=n,t}function T$2(t){if(!t)return;if("function"!=typeof t.forEach){const n=Object.keys(t);return T$2(n.map((n=>t[n]))).then((t=>{const e={};return n.forEach(((n,r)=>e[n]=t[r])),e}))}const n=t;return f$8((t=>{const e=[];let r=n.length;0===r&&t(e),n.forEach((n=>{const o={promise:n||Promise.resolve(n)};e.push(o),o.promise.then((t=>{o.value=t;})).catch((t=>{o.error=t;})).then((()=>{--r,0===r&&t(e);}));}));}))}function E$5(t){return T$2(t).then((t=>t.filter((t=>!!t.value)).map((t=>t.value))))}function C$3(t){return Promise.reject(t)}function k$6(t){return Promise.resolve(t)}function L$5(t,n,e){const r=new AbortController;return j$6(e,(()=>r.abort())),new Promise(((e,o)=>{let i=setTimeout((()=>{i=0,e(n);}),t);j$6(r,(()=>{i&&(clearTimeout(i),o(m$9()));}));}))}function x$6(t,e,r,o){const i=r&&"abort"in r?r:null;null!=o||i||(o=r);let u=setTimeout((()=>{u=0,i&&i.abort();}),e);const c=()=>{throw o||new s$k("promiseUtils:timeout","The wrapped promise did not resolve within "+e+" ms")};return t.then((t=>{if(0===u)throw c();return clearTimeout(u),t}),(t=>{throw clearTimeout(u),0===u?c():t}))}function O$2(t){return t&&"function"==typeof t.then}function U$5(t){return q$4(t)?t:Promise.resolve(t)}function q$4(t){return t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then}function z$4(t,n=-1){let e,r,o,i,c=null;const s=(...l)=>{if(e){r=l,i&&i.reject(m$9()),i=A$7();const t=q$5(i.promise);if(c){const t=c;c=null,t.abort();}return t}if(o=i||A$7(),i=null,n>0){const r=new AbortController;e=U$5(t(...l,r.signal));const o=e;L$5(n).then((()=>{e===o&&(i?r.abort():c=r);}));}else e=1,e=U$5(t(...l));const f=()=>{const t=r;r=o=e=c=null,null!=t&&s(...t);},h=e,a=o;return h.then(f,f),h.then(a.resolve,a.reject),q$5(a.promise)};return s}function B$4(){let n,e;const r=new Promise(((t,r)=>{n=t,e=r;})),o=t=>{n(t);};return o.resolve=t=>n(t),o.reject=t=>e(t),o.timeout=(n,e)=>o$i.setTimeout((()=>o.reject(e)),n),o.promise=r,o}function D$3(t,n){return t.then(n,n)}function F$4(t){let n=new AbortController;const e=t(n.signal);let r={promise:e,finished:!1,abort:()=>{n&&(n.abort(),n=null);}};const o=()=>{r&&(r.finished=!0,r=null),n=null;};return e.then(o,o),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s$b=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o$g={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i$f(t){var e;return null!=(e=o$g[t])&&e}const a$9=[],c$b=new Map;function d$c(t){for(const e of c$b.keys())m$8(t.pattern,e)&&c$b.delete(e);}function l$a(t){return a$9.includes(t)||(d$c(t),a$9.unshift(t)),{remove(){const e=a$9.indexOf(t);e>-1&&(a$9.splice(e,1),d$c(t));}}}async function u$b(t){const e=i$k();c$b.has(t)||c$b.set(t,f$7(t,e));const n=c$b.get(t);return await _$8.add(n),n}function h$9(t){if(!s$b.test(t))return null;const[,e,n]=s$b.exec(t),r=e+(n?"-"+n.toUpperCase():"");return i$f(r)?r:i$f(e)?e:null}async function f$7(e,n){const r=[];for(const t of a$9)if(m$8(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(s){r.push(s);}if(r.length)throw new s$k("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new s$k("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function m$8(t,e){return "string"==typeof t?e.startsWith(t):t.test(e)}p$c((()=>{c$b.clear();}));const _$8=new class{constructor(){this._numLoading=0;}async waitForAll(){this._dfd&&await this._dfd.promise;}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=A$7());}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null);}},p$a={cache:c$b,loaders:a$9};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$a=s$s.getLogger("esri.core.urlUtils"),l$9=t$p.request,c$a="esri/config: esriConfig.request.proxyUrl is not set.",f$6=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,a$8=/^\s*http:/i,h$8=/^\s*https:/i,p$9=/^\s*file:/i,d$b=/:\d+$/,g$7=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,m$7=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),y$6=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class $$3{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let e=q$5(this.uri.match(m$7));this.scheme=e[2]||(e[1]?"":null),this.authority=e[4]||(e[3]?"":null),this.path=e[5],this.query=e[7]||(e[6]?"":null),this.fragment=e[9]||(e[8]?"":null),null!=this.authority&&(e=q$5(this.authority.match(y$6)),this.user=e[3]||null,this.password=e[4]||null,this.host=e[6]||e[7],this.port=e[9]||null);}toString(){return this.uri}}const x$5=new $$3(t$p.applicationUrl),O$1={},w$5=(()=>{const t=q$5(x$5.path),e=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return `${`${x$5.scheme}://${x$5.host}${null!=x$5.port?`:${x$5.port}`:""}`}${e}`})();function U$4(t){const e={path:null,query:null},n=new $$3(t),r=t.indexOf("?");return null===n.query?e.path=t:(e.path=t.substring(0,r),e.query=b$6(n.query)),n.fragment&&(e.hash=n.fragment,null===n.query&&(e.path=e.path.substring(0,e.path.length-(n.fragment.length+1)))),e}function b$6(t){const e=t.split("&"),n={};for(const r of e){if(!r)continue;const t=r.indexOf("=");let e,o;t<0?(e=decodeURIComponent(r),o=""):(e=decodeURIComponent(r.slice(0,t)),o=decodeURIComponent(r.slice(t+1)));let i=n[e];"string"==typeof i&&(i=n[e]=[i]),Array.isArray(i)?i.push(o):n[e]=o;}return n}function R$1(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function C$2(t,e){return t?e&&"function"==typeof e?Object.keys(t).map((n=>encodeURIComponent(n)+"="+encodeURIComponent(e(n,t[n])))).join("&"):Object.keys(t).map((n=>{const r=t[n];if(null==r)return "";const o=encodeURIComponent(n)+"=",i=e&&e[n];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>R$1(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):R$1(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function q$3(t=!1){let n,r=l$9.proxyUrl;if("string"==typeof t){n=rt(t);const e=A$6(t);e&&(r=e.proxyUrl);}else n=!!t;if(!r)throw u$a.warn(c$a),new s$k("urlutils:proxy-not-set",c$a);n&&ct()&&(r=ut(r));return U$4(r)}function j$5(t){const e=A$6(t);let n,r;if(e){const t=v$6(e.proxyUrl);n=t.path,r=t.query?b$6(t.query):null;}if(n){const e=U$4(t);t=n+"?"+e.path;const o=C$2({...r,...e.query});o&&(t=`${t}?${o}`);}return t}const L$4={path:"",query:""};function v$6(t){const e=t.indexOf("?");return -1!==e?(L$4.path=t.slice(0,e),L$4.query=t.slice(e+1)):(L$4.path=t,L$4.query=null),L$4}function I$2(t){return t=(t=ft(t=dt(t=v$6(t).path),!0)).toLowerCase()}function S$3(t){const e={proxyUrl:t.proxyUrl,urlPrefix:I$2(t.urlPrefix)},n=l$9.proxyRules,r=e.urlPrefix;let o=n.length;for(let i=0;i<n.length;i++){const t=n[i].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return -1;o=i;break}0===t.indexOf(r)&&(o=i+1);}return n.splice(o,0,e),o}function A$6(t){const e=l$9.proxyRules,n=I$2(t);for(let r=0;r<e.length;r++)if(0===n.indexOf(e[r].urlPrefix))return e[r]}function P$3(t,e){return t=k$5(t),e=k$5(e),ft(t)===ft(e)}function k$5(t){const e=(t=z$3(t)).indexOf("/sharing");return e>0?t.substring(0,e):t.replace(/\/+$/,"")}function B$3(t){const e=e=>null==e||e instanceof RegExp&&e.test(t)||"string"==typeof e&&t.startsWith(e),n=l$9.interceptors;if(n)for(const r of n)if(Array.isArray(r.urls)){if(r.urls.some(e))return r}else if(e(r.urls))return r;return null}function E$4(t,e,n=!1){const r=Ot(t),o=Ot(e);return !(!n&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function J$1(t){if("string"==typeof t){if(!Q$1(t))return !0;t=Ot(t);}if(E$4(t,x$5))return !0;const e=l$9.trustedServers||[];for(let n=0;n<e.length;n++){const r=N$4(e[n]);for(let e=0;e<r.length;e++)if(E$4(t,r[e]))return !0}return !1}function N$4(t){return O$1[t]||(nt(t)||et(t)?O$1[t]=[new $$3(T$1(t))]:O$1[t]=[new $$3(`http://${t}`),new $$3(`https://${t}`)]),O$1[t]}function T$1(t,e=w$5,n){return et(t)?n&&n.preserveProtocolRelative?t:"http"===x$5.scheme&&x$5.authority===M$2(t).slice(2)?`http:${t}`:`https:${t}`:nt(t)?t:q$5(D$2("/"===t[0]?at(e):e,t))}function W$1(t,e=w$5,n){if(!Q$1(t))return t;const r=z$3(t),o=r.toLowerCase(),i=z$3(e).toLowerCase().replace(/\/+$/,""),s=n?z$3(n).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return t;const u=(t,e,n)=>-1===(n=t.indexOf(e,n))?t.length:n;let l=u(o,"/",o.indexOf("//")+2),c=-1;for(;o.slice(0,l+1)===i.slice(0,l)+"/"&&(c=l+1,l!==o.length);)l=u(o,"/",l+1);if(-1===c)return t;if(s&&c<s.length)return t;t=r.slice(c);const f=i.slice(c-1).replace(/[^/]+/g,"").length;if(f>0)for(let a=0;a<f;a++)t=`../${t}`;else t=`./${t}`;return t}function z$3(t){return t=$t(t=yt(t=mt(t=T$1(t=t.trim()))))}function D$2(...t){const e=t.filter(r$p);if(!e||!e.length)return;const n=[];if(Q$1(e[0])){const t=e[0],r=t.indexOf("//");-1!==r&&(n.push(t.slice(0,r+1)),it(e[0])&&(n[0]+="/"),e[0]=t.slice(r+2));}else "/"===e[0][0]&&n.push("");const r=e.reduce(((t,e)=>e?t.concat(e.split("/")):t),[]);for(let o=0;o<r.length;o++){const t=r[o];".."===t&&n.length>0&&".."!==n[n.length-1]?n.pop():(!t&&o===r.length-1||t&&("."!==t||0===n.length))&&n.push(t);}return n.join("/")}function M$2(t,e=!1){if(F$3(t)||G$1(t))return null;let n=t.indexOf("://");if(-1===n&&et(t))n=2;else {if(-1===n)return null;n+=3;}const r=t.indexOf("/",n);return -1!==r&&(t=t.slice(0,r)),e&&(t=ft(t,!0)),t}function Q$1(t){return et(t)||nt(t)}function F$3(t){return null!=t&&"blob:"===t.slice(0,5)}function G$1(t){return "data:"===t.slice(0,5)}function H$2(t){const e=V$2(t);if(!e||!e.isBase64)return null;const n=atob(e.data),r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r.buffer}const K$1=/^data:(.*?)(;base64)?,(.*)$/;function V$2(t){const e=t.match(K$1);if(!e)return null;const[,n,r,o]=e;return {mediaType:n,isBase64:!!r,data:o}}function X$1(t){return t.isBase64?`data:${t.mediaType};base64,${t.data}`:`data:${t.mediaType},${t.data}`}function Y(t){const e=H$2(t);if(!e)return null;const n=V$2(t);return new Blob([e],{type:n.mediaType})}function Z(t,e){_$7(t,e)||tt(t,e);}function _$7(t,e){const r=document.createElement("a");if(!("download"in r))return !1;let o=null;if(e$v.URL&&e$v.URL.createObjectURL){const e=Y(t);if(!e)return !1;o=e$v.URL.createObjectURL(e);}r.download=e,r.href=o||t,r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),o&&e$v.URL.revokeObjectURL(o);}function tt(t,e){return !!window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(Y(t),e)}function et(t){return null!=t&&void 0!==t&&"/"===t[0]&&"/"===t[1]}function nt(t){return f$6.test(t)}function rt(t){return h$8.test(t)||"https"===x$5.scheme&&et(t)}function ot(t){return a$8.test(t)||"http"===x$5.scheme&&et(t)}function it(t){return p$9.test(t)}function st(t){return et(t)?`http:${t}`:t.replace(h$8,"http:")}function ut(t){return et(t)?`https:${t}`:t.replace(a$8,"https:")}function lt(){return "http"===x$5.scheme}function ct(){return "https"===x$5.scheme}function ft(t,e=!1){return et(t)?t.slice(2):(t=t.replace(f$6,""),e&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function at(t){const e=t.indexOf("//"),n=t.indexOf("/",e+2);return -1===n?t:t.slice(0,n)}function ht(t){let e=0;if(Q$1(t)){const n=t.indexOf("//");-1!==n&&(e=n+2);}const n=t.lastIndexOf("/");return n<e?t:t.slice(0,n+1)}function pt(t,e){if(!t)return "";const n=U$4(t).path.replace(/\/+$/,""),r=n.substring(n.lastIndexOf("/")+1);if(null==e||!e.length)return r;const o=new RegExp(`.(${e.join("|")})$`,"ig");return r.replace(o,"")}function dt(t){return t&&"/"===t[t.length-1]?t:`${t}/`}function gt(t){return t.replace(/\/+$/,"")}function mt(t){if(/^https?:\/\//i.test(t)){const e=v$6(t);t=(t=e.path.replace(/\/{2,}/g,"/")).replace("/","//"),e.query&&(t+=`?${e.query}`);}return t}function yt(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function $t(t){const e=l$9.httpsDomains;if(!ot(t))return t;const n=t.indexOf("/",7);let r;if(r=-1===n?t:t.slice(0,n),r=r.toLowerCase().slice(7),d$b.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","");}return lt()&&r===x$5.authority&&!g$7.test(t)||(ct()&&r===x$5.authority||e&&e.some((t=>r===t||r.endsWith(`.${t}`)))||ct()&&!A$6(t))&&(t=ut(t)),t}function xt(t,e,n){if(!(e&&n&&t&&Q$1(t)))return t;const r=t.indexOf("//"),o=t.indexOf("/",r+2),i=t.indexOf(":",r+2),s=Math.min(o<0?t.length:o,i<0?t.length:i);if(t.slice(r+2,s).toLowerCase()!==e.toLowerCase())return t;return `${t.slice(0,r+2)}${n}${t.slice(s)}`}function Ot(t){return "string"==typeof t?new $$3(T$1(t)):(t.scheme||(t.scheme=x$5.scheme),t)}function wt(t){return Lt.test(t)}function Ut(t,e){const n=U$4(t),r=Object.keys(n.query||{});return r.length>0&&e&&e.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),n.path}function bt(t,e,n){const r=U$4(t),o=r.query||{};return o[e]=String(n),`${r.path}?${C$2(o)}`}function Rt(t,e){const n=U$4(t),r=n.query||{};for(const i in e)r[i]=e[i];const o=C$2(r);return o?`${n.path}?${o}`:n.path}function Ct(t,e){const{path:n,query:r}=U$4(t);if(!r)return t;delete r[e];const o=C$2(r);return o?`${n}?${o}`:n}function qt(t){if(t$t(t))return null;const e=t.match(jt);return e?e[1]:null}const jt=/.*?\.([^\/]*)$/,Lt=/(^data:image\/svg|\.svg$)/i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$7="4.22",s$a={async request(e,r){var a;const{default:s}=await Promise.resolve().then(function () { return request; }),n=e.options,o=n.responseType;n.signal=null==r?void 0:r.signal,n.responseType="native"===o||"native-request-init"===o?"native-request-init":["blob","json","text"].includes(o)&&null!=(a=B$3(e.url))&&a.after?o:"array-buffer";const i=await s(e.url,n),u={data:i.data,ssl:i.ssl};switch(i.requestOptions.responseType){case"native-request-init":return delete u.data.signal,u;case"blob":u.data=await u.data.arrayBuffer();break;case"json":u.data=(new TextEncoder).encode(JSON.stringify(u.data)).buffer;break;case"text":u.data=(new TextEncoder).encode(u.data).buffer;}return {result:u,transferList:[u.data]}}};let n$k;function o$f(e){n$k=e;}function i$e(e){const t=n$k&&n$k.findCredential(e);return t&&t.token?bt(e,"token",t.token):e}s$w("host-webworker")||(s$w("edge")||s$w("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$h=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function c$9(s){return s&&s.length>4&&s.startsWith("AAPK")}function r$e(c){const r=M$2(c,!0);return r&&r.endsWith(".arcgis.com")&&!t$h.includes(r)&&!c.endsWith("/sharing/rest/generateToken")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$g(t,i,s=!1,c){return new Promise(((d,a)=>{if(p$b(c))return void a(n$j());let m=()=>{v(),a(new Error(`Unable to load ${i}`));},l=()=>{const e=t;v(),d(e);},u=()=>{if(!t)return;const e=t;v(),e.src="",a(n$j());};const v=()=>{s$w("esri-image-decode")||(t.removeEventListener("error",m),t.removeEventListener("load",l)),m=null,l=null,t=null,r$p(c)&&c.removeEventListener("abort",u),u=null,s&&URL.revokeObjectURL(i);};r$p(c)&&c.addEventListener("abort",u),s$w("esri-image-decode")?t.decode().then(l,m):(t.addEventListener("error",m),t.addEventListener("load",l));}))}function n$j(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function E$3(e,t){var r;const s=G$1(e),n=F$3(e);n||s||(e=z$3(e));const l={url:e,requestOptions:{...e$u(t)}};let u=B$3(e);if(u){const e=await W(u,l);if(null!=e)return {data:e,getHeader:F$2,requestOptions:l.requestOptions,url:l.url};u.after||u.error||(u=null);}if(e=l.url,"image"===(t=l.requestOptions).responseType){if(s$w("host-webworker")||s$w("host-node"))throw H$1("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),l)}else if(s)throw H$1("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),l);if("head"===t.method){if(t.body)throw H$1("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),l);if(s||n)throw H$1("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),l)}if(await A$5(),L$3)return L$3.execute(e,t);const c=new AbortController;j$6(t,(()=>c.abort()));const h={controller:c,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:u,params:l,redoRequest:!1,useIdentity:j$4.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},y=await J(h);return null==(r=u)||null==r.after||r.after(y),y}let L$3;const j$4=t$p.request,U$3="FormData"in e$v,P$2=[499,498,403,401],D$1=["COM_0056","COM_0057","SB_0008"],_$6=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],F$2=()=>null,I$1=Symbol();function M$1(e){const t=M$2(e);t&&!E$3._corsServers.includes(t)&&E$3._corsServers.push(t);}function R(e){const t=M$2(e);return !t||t.endsWith(".arcgis.com")||E$3._corsServers.includes(t)||J$1(t)}function H$1(e,t,s,o){let a="Error";const i={url:s.url,requestOptions:s.requestOptions,getHeader:F$2,ssl:!1};if(t instanceof s$k)return t.details?(t.details=l$k(t.details),t.details.url=s.url,t.details.requestOptions=s.requestOptions):t.details=i,t;if(t){const e=o&&(e=>o.headers.get(e)),r=o&&o.status,s=t.message;s&&(a=s),e&&(i.getHeader=e),i.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,i.subCode=t.subcode,i.messageCode=t.messageCode,"string"==typeof t.details?i.messages=[t.details]:i.messages=t.details,i.raw=I$1 in t?t[I$1]:t;}return d$d(t)?m$9():new s$k(e,a,i)}async function A$5(){s$w("host-webworker")?L$3||(L$3=await import('./request-30c78a45.js')):E$3._abortableFetch||(E$3._abortableFetch=e$v.fetch.bind(e$v));}async function B$2(){n$k||await import('./IdentityManager-7d43cb10.js');}async function N$3(r){const o=r.params.url,n=r.params.requestOptions,a=r.controller.signal,i=n.body;let l=null,u=null,d=null;if(U$3&&"HTMLFormElement"in e$v&&(i instanceof FormData?l=i:i instanceof HTMLFormElement&&(u=i,l=new FormData(u))),"string"==typeof i&&(d=i),r.fetchOptions={cache:n.cacheBust&&!E$3._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:a},(l||d)&&(r.fetchOptions.body=l||d),"anonymous"===n.authMode&&(r.useIdentity=!1),r.hasToken=!!(/token=/i.test(o)||n.query&&n.query.token||l&&l.get&&l.get("token")||u&&u.elements.token),!r.hasToken&&t$p.apiKey&&r$e(o)&&(n.query||(n.query={}),n.query.token=t$p.apiKey,r.hasToken=!0),r.useIdentity&&!r.hasToken&&!r.credentialToken&&!$$2(o)&&!p$b(a)){let e;"immediate"===n.authMode?(await B$2(),e=await n$k.getCredential(o,{signal:a}),r.credential=e):"no-prompt"===n.authMode?(await B$2(),e=await n$k.getCredential(o,{prompt:!1,signal:a}).catch((()=>{})),r.credential=e):n$k&&(e=n$k.findCredential(o)),e&&(r.credentialToken=e.token,r.useSSL=!!e.ssl);}}function $$2(e){return _$6.some((t=>t.test(e)))}async function K(e){let r=e.params.url;const s=e.params.requestOptions,n=e.fetchOptions,a=F$3(r)||G$1(r),i=s.responseType||"json",l=a?0:null!=s.timeout?s.timeout:j$4.timeout;let c=!1;if(!a){e.useSSL&&(r=ut(r)),s.cacheBust&&"default"===n.cache&&(r=bt(r,"request.preventCache",Date.now()));let a={...s.query};e.credentialToken&&(a.token=e.credentialToken);let i=C$2(a);s$w("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=r.length+1+i.length;let u;c="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||l>j$4.maxUrlLength;const d=s.useProxy||!!A$6(r);if(d){const e=q$3(r);u=e.path,!c&&u.length+1+l>j$4.maxUrlLength&&(c=!0),e.query&&(a={...e.query,...a});}if("HEAD"===n.method&&(c||d)){if(c){if(l>j$4.maxUrlLength)throw H$1("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw H$1("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw H$1("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(c?(n.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?r=Rt(r,a):(n.body=C$2(a),n.headers["Content-Type"]="application/x-www-form-urlencoded")):r=Rt(r,a),d&&(e.useProxy=!0,r=`${u}?${r}`),a.token&&U$3&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",a.token):e.append("token",a.token);}if(s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials;else if(!E$4(r,x$5))if(J$1(r))e.withCredentials=!0;else if(n$k){const s=n$k.findServerInfo(r);s&&s.webTierAuth&&(e.withCredentials=!0);}e.withCredentials&&(n.credentials="include");}let m,f,v=0,C=!1;l>0&&(v=setTimeout((()=>{C=!0,e.controller.abort();}),l));try{if("native-request-init"===s.responseType)f=n,f.url=r;else if("image"!==s.responseType||"default"!==n.cache||"GET"!==n.method||c||G(s.headers)||!a&&!e.useProxy&&j$4.proxyUrl&&!R(r)){if(m=await E$3._abortableFetch(r,n),e.useProxy||M$1(r),"native"===s.responseType)f=m;else if("HEAD"!==n.method)if(m.ok){switch(i){case"array-buffer":f=await m.arrayBuffer();break;case"blob":case"image":f=await m.blob();break;default:f=await m.text();}if(v&&(clearTimeout(v),v=0),"json"===i||"xml"===i||"document"===i)if(f)switch(i){case"json":f=JSON.parse(f);break;case"xml":f=z$2(f,"application/xml");break;case"document":f=z$2(f,"text/html");}else f=null;if(f){if("array-buffer"===i||"blob"===i){const e=m.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e);}catch{}}"image"===i&&f instanceof Blob&&(f=await Q(URL.createObjectURL(f),e,!0));}}else f=await m.text();}else f=await Q(r,e);}catch(L){if("AbortError"===L.name){if(C)throw new Error("Timeout exceeded");throw m$9("Request canceled")}if(!(!m&&L instanceof TypeError&&j$4.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||R(r))throw L;e.redoRequest=!0,S$3({proxyUrl:j$4.proxyUrl,urlPrefix:M$2(r)});}finally{v&&clearTimeout(v);}return [m,f]}async function W(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let o,n;try{n=await e.before(t);}catch(s){o=H$1("request:interceptor",s,t);}if((n instanceof Error||n instanceof s$k)&&(o=H$1("request:interceptor",n,t)),o)throw e.error&&e.error(o),o;return n}}function G(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return !0;return !1}function z$2(e,t){let r;try{r=(new DOMParser).parseFromString(e,t);}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function J(e){var r,s;let o,n;await N$3(e);try{do{[o,n]=await K(e);}while(!await X(e,o,n))}catch(l){const t=H$1("request:server",l,e.params,o);throw t.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(t),t}const a=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(a)&&!e.hasToken&&!e.credentialToken&&null!=(r=n)&&null!=(s=r.user)&&s.username&&!J$1(a)){const e=M$2(a,!0);e&&j$4.trustedServers.push(e);}const i=e.credential;if(i&&n$k){const e=n$k.findServerInfo(i.server);let r=e&&e.owningSystemUrl;if(r){r=r.replace(/\/?$/,"/sharing");const e=n$k.findCredential(r,i.userId);e&&-1===n$k._getIdenticalSvcIdx(r,e)&&e.resources.unshift(r);}}return {data:n,getHeader:o?e=>o.headers.get(e):F$2,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function X(e,r,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!r||"native"===o.responseType||"native-request-init"===o.responseType)return !0;let n,a,i,l;if(!r.ok)throw n=new Error(`Unable to load ${r.url} status: ${r.status}`),n[I$1]=s,n;null!=s&&s.error&&(n=s.error),n&&(a=Number(n.code),i=n.hasOwnProperty("subcode")?Number(n.subcode):null,l=n.messageCode,l=l&&l.toUpperCase());const u=o.authMode;if(403===a&&(4===i||n.message&&n.message.toLowerCase().indexOf("ssl")>-1&&-1===n.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==P$2.indexOf(a)&&!$$2(e.params.url)&&(403!==a||-1===D$1.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await B$2();try{const r=await n$k.getCredential(e.params.url,{error:H$1("request:server",n,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=r,e.credentialToken=r.token,e.useSSL=e.useSSL||r.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;n=c;}}if(n)throw n;return !0}function Q(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,t$g(o,e,r,s)}E$3._abortableFetch=null,E$3._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];

const request = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': E$3
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$9(e,n,r,s){const a=n.exec(r);if(!a)throw new s$k("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],h=h$9(s),u=`${c}${l}.json`,w=h?`${c}${l}_${h}.json`:u;let f;try{f=await i$d(e(w));}catch(d){if(w===u)throw new s$k("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d});try{f=await i$d(e(u));}catch(d){throw new s$k("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d})}}return f}async function i$d(t){if(r$p(l$8.fetchBundleAsset))return l$8.fetchBundleAsset(t);const n=await E$3(t,{responseType:"text"});return JSON.parse(n.data)}class a$6{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let o;o="string"==typeof r?e=>new URL(e,new URL(r,e$v.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=o,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return s$9(this.getAssetUrl,this.matcher,e,t)}}function c$8(e){return new a$6(e)}const l$8={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$c=s$s.getLogger("esri.assets");function n$i(s,o){return E$3(a$5(s),o)}function a$5(t){if(!t$p.assetsPath)throw i$c.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$k("assets:path-not-set","config.assetsPath is not set");return D$2(t$p.assetsPath,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
l$a(c$8({pattern:"esri/",location:a$5}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$f=new Set;function i$b(n,i,o=!1){o&&e$f.has(i)||(o&&e$f.add(i),n.warn(`🛑 DEPRECATED - ${i}`));}function o$e(e,i,o={}){s$w("esri-deprecation-warnings")&&s$8(e,`Module: ${i}`,o);}function t$f(e,i,o={}){if(s$w("esri-deprecation-warnings")){const{moduleName:n}=o;s$8(e,`Function: ${(n?n+"::":"")+i+"()"}`,o);}}function r$d(e,i,o={}){if(s$w("esri-deprecation-warnings")){const{moduleName:n}=o;s$8(e,`Property: ${(n?n+"::":"")+i}`,o);}}function s$8(e,o,t={}){if(s$w("esri-deprecation-warnings")){const{replacement:n,version:r,see:s,warnOnce:a}=t;let c=o;n&&(c+=`\n\t🛠️ Replacement: ${n}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),i$b(e,c,a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$e(e){return "string"==typeof e?document.getElementById(e):e}function t$e(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild);}function n$h(e,t){const n=t.parentNode;n&&(n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling));}function o$d(e,t){const n=t.parentNode;n&&n.insertBefore(e,t);}function r$c(e,t){for(;;){const n=e.firstChild;if(!n)break;t.appendChild(n);}}function i$a(e){e.parentNode&&e.parentNode.removeChild(e);}const l$7=(()=>{if("function"==typeof Element.prototype.closest)return (e,t)=>e.closest(t);const e=Element.prototype.matches||Element.prototype.msMatchesSelector;return (t,n)=>{let o=t;do{if(e.call(o,n))return o;o=o.parentElement;}while(null!==o&&1===o.nodeType);return null}})();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$d(t){return t&&t.release&&"function"==typeof t.release}function i$9(t){return t&&t.acquire&&"function"==typeof t.acquire}class e$d{constructor(t,i,e,o=1,s=0){if(this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this.ctor)for(let n=0;n<s;n++)this._pool[n]=new this.ctor;this.allocationSize=Math.max(o,1);}destroy(){this.prune(0);}acquire(...t){let o;if(e$d.test.disabled)o=new this.ctor;else {if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this.ctor;}o=this._pool.pop();}return this.acquireFunction?this.acquireFunction(o,...t):i$9(o)&&o.acquire(...t),o}release(i){i&&!e$d.test.disabled&&(this.releaseFunction?this.releaseFunction(i):t$d(i)&&i.release(),this._pool.push(i));}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t);}this._pool.length=t;}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose();}}e$d.test={disabled:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$7{constructor(r,s){this._observers=r,this._observer=s;}remove(){C$5(this._observers,this._observer);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$g{constructor(s,t,e){this.properties=s,this.propertyName=t,this.metadata=e,this._observers=null,this._accessed=null,this._handles=null,this.flags=1|(e.nonNullable?8:0)|(e.hasOwnProperty("value")?16:0)|(void 0===e.get?32:0)|(void 0===e.dependsOn?64:0);}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles();}getComputed(){i$o(this);const i=this.properties.store,n=this.propertyName,l=this.flags,r=i.get(n);if(4&l)return r;if(1&~l&&i.has(n))return r;this.flags|=4;const h=this.properties.host;let o;64&l?o=a$j(this,this.metadata.get,h):(h$d(h,this),o=this.metadata.get.call(h)),i.set(n,o,1);const a=i.get(n);return a===r?this.flags&=-2:this.commit(),this.flags&=-5,a}onObservableAccessed(s){s!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(s)||this._accessed.push(s));}onTrackingEnd(){this._clearObservationHandles(),this.flags|=32;const s=this._accessed;if(null===s)return;let t=this._handles;null===t&&(t=this._handles=[]);for(let e=0;e<s.length;++e)t.push(s[e].observe(this));s.length=0;}observe(s){return null===this._observers&&(this._observers=[]),this._observers.includes(s)||this._observers.push(s),new s$7(this._observers,s)}notifyChange(){this.onInvalidated(),this.onCommitted();}invalidate(){this.onInvalidated();}onInvalidated(){2&~this.flags&&(this.flags|=1);const s=this._observers;if(null!==s)for(let t=0;t<s.length;++t)s[t].onInvalidated();}commit(){this.flags&=-2,this.onCommitted();}onCommitted(){if(null===this._observers)return;const s=this._observers.slice();for(let t=0;t<s.length;++t)s[t].onCommitted();}_clearObservationHandles(){const s=this._handles;if(null!==s){for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$b=7;function t$c(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function n$f(r){switch(r){case 0:return "defaults";case 2:return "service";case 3:return "portal-item";case 4:return "web-scene";case 5:return "web-map";case 6:return "user"}return q$5(void 0)}function u$9(e){return t$c(e)}function c$7(e){return n$f(e)}function s$6(e){return t$c(e)}function a$4(e){return n$f(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$5{constructor(){this._values=new Map;}clone(t){const r=new s$5;return this._values.forEach(((s,a)=>{t&&t.has(a)||r.set(a,l$k(s));})),r}get(e){return this._values.get(e)}originOf(){return 6}keys(){return [...this._values.keys()]}set(e,s){this._values.set(e,s);}delete(e){this._values.delete(e);}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p$8(t,e,s){return void 0!==t}function f$5(t,e,s,i){return void 0!==t&&(!(null==s&&8&t.flags)||(i.lifecycle,!1))}function u$8(t){return t&&"function"==typeof t.destroy}s$s.getLogger("esri.core.accessorSupport.Properties");class g$6{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=0,this.store=new s$5,this._origin=6;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const r in s){const t=new n$g(this,r,s[r]);this.properties.set(r,t);}this.metadatas=s,this._autoDestroy=e.autoDestroy;}initialize(){this.lifecycle=1;}constructed(){this.lifecycle=2;}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const s=this.internalGet(t);s&&u$8(s)&&(s.destroy(),8&~e.flags&&this._internalSet(e,null)),e.destroy();}else for(const[t,e]of this.properties)e.destroy();}get initialized(){return 0!==this.lifecycle}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();i$o(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&16&e.flags)return "defaults"}return n$f(e)}has(t){return !!this.properties.has(t)&&this.store.has(t)}keys(){return [...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(p$8(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);p$8(s)&&this._internalSet(s,e);}getDependsInfo(t,e,s){const r=this.properties.get(e);if(!p$8(r))return "";const o=new Set,n=a$j({onObservableAccessed:t=>o.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=r.metadata.get)?void 0:e.call(t)}));let a=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===o.size)return a;s+="  ";for(const c of o){if(!(c instanceof n$g))continue;const t=c.properties.host,e=c.propertyName,r=e$o(t);a+=r?r.getDependsInfo(t,e,s):`${s}${e}: undefined\n`;}return a}setAtOrigin(t,e,s){const i=this.properties.get(t);if(p$8(i))return this._setAtOrigin(i,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(2&e.flags)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&2&e.flags&&(e.flags&=-3,e.notifyChange());}override(t,e){const s=this.properties.get(t);if(!f$5(s,t,e,this))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$6.release(t),!s)return;e=r;}s.flags|=2,this._internalSet(s,e);}set(t,e){const s=this.properties.get(t);if(!f$5(s,t,e,this))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$6.release(t),!s)return;e=r;}const r=s.metadata.set;r?r.call(this.host,e):this._internalSet(s,e);}setDefaultOrigin(t){this._origin=t$c(t);}getDefaultOrigin(){return n$f(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange();}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate();}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit();}_internalSet(t,e){const s=0!==this.lifecycle?this._origin:0;this._setAtOrigin(t,e,s);}_setAtOrigin(e,s,i){const r=this.store,o=e.propertyName;r.has(o,i)&&m$g(s,r.get(o))&&2&~e.flags&&i===r.originOf(o)||(e.invalidate(),r.set(o,s,i),e.commit(),d$h(this.host,e));}_cast(t,e){const s=m$6.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}class d$a{constructor(){this.value=null,this.valid=!0;}acquire(){this.valid=!0;}release(){this.value=null;}}const m$6=new e$d(d$a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$a(e){e.length=0;}class t$b{constructor(t=50,o=50){this._pool=new e$d(Array,void 0,r$a,o,t);}acquire(){return this._pool.acquire()}release(e){this._pool.release(e);}prune(){this._pool.prune(0);}static acquire(){return o$c.acquire()}static release(e){return o$c.release(e)}static prune(){o$c.prune();}}const o$c=new t$b(100);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$a extends e$d{constructor(){super(...arguments),this._set=new Set;}destroy(){super.destroy(),this._set=w$a(this._set);}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e));}_dispose(e){this._set.delete(e),super._dispose(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$c(){return e$v.queueMicrotask?e$v.queueMicrotask:e=>{e$v.Promise.resolve().then(e);}}const t$9=e$c(),n$e=[];function r$9(o){n$e.push(o),1===n$e.length&&t$9((()=>{const o=n$e.slice();n$e.length=0;for(const e of o)e();}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$8=29;class e$b{constructor(e,s=t$8){this.name=e,this._counter=0,this._items=new Array(s);}record(t){this._items[++this._counter%this._items.length]=t;}get median(){return this._items.slice().sort(((t,e)=>t-e))[Math.floor(this._items.length/2)]}get average(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}get last(){return this._items[this._counter%this._items.length]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$b;!function(o){const t=(o,t,n,e)=>{let i=t,c=t;const l=n>>>1,r=o[i-1];for(;c<=l;){c=i<<1,c<n&&e(o[c-1],o[c])<0&&++c;const t=o[c-1];if(e(t,r)<=0)break;o[i-1]=t,i=c;}o[i-1]=r;},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c);const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c);}}function*i(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c),yield;const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c),yield;}}o.sort=e,o.iterableSort=i;}(o$b||(o$b={}));const t$7=o$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$a=1.5,l$6=1.1;class n$d{constructor(h){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new w$9,h&&(h.initialSize&&(this.data=new Array(h.initialSize)),h.allocator&&(this._allocator=h.allocator),void 0!==h.deallocator&&(this._deallocator=h.deallocator),h.shrink&&(this._shrink=()=>r$8(this)));}toArray(){return this.data.slice(0,this.length)}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t;}else {if(this._deallocator)for(let h=t;h<this._length;++h)this.data[h]=this._deallocator(this.data[h]);this._length=t,this._shrink();}}clear(){this.length=0;}prune(){this.clear(),this.data=[];}push(t){this.data[this._length++]=t;}pushArray(t,h=t.length){for(let i=0;i<h;i++)this.data[this._length++]=t[i];}fill(t,h){for(let i=0;i<h;i++)this.data[this._length++]=t;}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return ++this._length,t}unshift(t){this.data.unshift(t),this._length++,r$8(this);}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const i=b$a(this.data,t,this.length,this._hint);if(-1!==i)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){const h=v$c(this.data,t,this.length,this._hint);return void 0!==h&&(this.length=this.length-1),this._shrink(),h}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,h=t.length,i){this.length=O$4(this.data,t,this.length,h,this._hint,i),this._shrink();}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,h){t>=this.length||h>=this.length||t===h||([this.data[t],this.data[h]]=[this.data[h],this.data[t]]);}sort(t){t$7.sort(this.data,0,this.length,t);}iterableSort(t){return t$7.iterableSort(this.data,0,this.length,t)}some(t,h){for(let i=0;i<this.length;++i)if(t.call(h,this.data[i],i,this.data))return !0;return !1}filterInPlace(t,h){let i=0;for(let s=0;s<this._length;++s){const a=this.data[s];t.call(h,a,s,this.data)&&(this.data[s]=this.data[i],this.data[i]=a,i++);}if(this._deallocator)for(let s=i;s<this._length;s++)this.data[s]=this._deallocator(this.data[s]);return this._length=i,this._shrink(),this}forAll(t,h){const i=this.length,s=this.data;for(let a=0;a<i;++a)t.call(h,s[a],a,s);}forEach(t,h){for(let i=0;i<this.length;++i)t.call(h,this.data[i],i,this.data);}map(t,h){const i=new Array(this.length);for(let s=0;s<this.length;++s)i[s]=t.call(h,this.data[s],s,this.data);return i}reduce(t,h){let i=h;for(let s=0;s<this.length;++s)i=t(i,this.data[s],s,this.data);return i}has(t){const h=this.length,i=this.data;for(let s=0;s<h;++s)if(i[s]===t)return !0;return !1}}function r$8(t){t.data.length>e$a*t.length&&(t.data.length=Math.floor(t.length*l$6));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$c(n){return n}function r$7(r){return n$c(1e3*r)}function t$6(n){return n}function u$7(n){return t$6(.001*n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c$6{constructor(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1;}}class m$5{constructor(e){this.callback=e,this.isActive=!0;}remove(){this.isActive=!1;}}let l$5=0,p$7=0;const u$6={time:n$c(0),deltaTime:n$c(0),elapsedFrameTime:n$c(0),frameDuration:n$c(0)},f$4=["prepare","preRender","render","postRender","update"],h$7=[],d$9=new n$d;class w$4{constructor(e){this._task=e;}remove(){this._task.removed=!0;}pause(){this._task.paused=!0;}resume(){this._task.paused=!1;}}const k$4={frameTasks:d$9,willDispatch:!1,clearFrameTasks:j$3,dispatch:b$5,executeFrameTasks:D};function v$5(e){const r=new m$5(e);return h$7.push(r),k$4.willDispatch||(k$4.willDispatch=!0,r$9(b$5)),r}function A$4(e){const t=new c$6(e);return d$9.push(t),null==T&&(l$5=performance.now(),T=requestAnimationFrame(x$4)),new w$4(t)}let T=null;function j$3(e=!1){d$9.forAll((e=>{e.removed=!0;})),e&&_$5();}function F$1(e){p$7=Math.max(0,e);}function x$4(){const e=performance.now();T=null,T=d$9.length>0?requestAnimationFrame(x$4):null,k$4.executeFrameTasks(e);}function D(e){const t=n$c(e-l$5);l$5=e;const r=p$7>0?p$7:1e3/60,s=Math.max(0,t-r);for(let o=0;o<f$4.length;o++){const n=performance.now(),a=f$4[o];d$9.forAll((n=>{var c;if(n.paused||n.removed)return;0===o&&n.ticks++;n.phases[a]&&(u$6.time=e,u$6.deltaTime=0===n.ticks?n$c(0):t,u$6.elapsedFrameTime=n$c(performance.now()-e),u$6.frameDuration=n$c(r-s),null==(c=n.phases[a])||c.call(n,u$6));})),M[o].record(performance.now()-n);}_$5(),q$2.record(performance.now()-e);}const g$5=new n$d;function _$5(){d$9.forAll((e=>{e.removed&&g$5.push(e);})),d$9.removeUnorderedMany(g$5.data,g$5.length),g$5.clear();}function b$5(){for(;h$7.length;){const t=q$5(h$7.shift());t.isActive&&t.callback();}k$4.willDispatch=!1;}function y$5(e=1,r){const s=B$4(),i=()=>{p$b(r)?s.reject(m$9()):0===e?s():(--e,r$9((()=>i())));};return i(),s.promise}const M=f$4.map((e=>new e$b(e))),q$2=new e$b("total");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$b(r,n){for(const o of r.entries())if(n(o[0]))return !0;return !1}function o$a(n,o){const t=new Set;return r$p(n)&&n.forEach((r=>t.add(r))),r$p(o)&&o.forEach((r=>t.add(r))),t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$5=0;const n$a=0;function e$9(){return ++t$5}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$4{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0;}destroy(){this._accessed.length=0,this.clear();}onInvalidated(){this._invalidCount++;}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0;}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s);}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0;}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r$6=!1;const e$8=[];function o$9(e,o){let u=new s$4(s),l=null,f=!1;function s(){if(!u||f)return;if(r$6)return void i$8(s);const t=l;u.clear(),r$6=!0,f=!0,l=a$j(u,e),f=!1,r$6=!1,o(l,t),c$5();}function m(){u&&(u.destroy(),u=null,l=null);}return f=!0,l=a$j(u,e),f=!1,{remove:m}}function u$5(r,e){let o=new s$4(l),u=null;function l(){e(u,c);}function i(){o&&(o.destroy(),o=null),u=null;}function c(){return o?(o.clear(),u=a$j(o,r),u):null}return c(),{remove:i}}function l$4(e){let o=new s$4(l),u=!1;function l(){o&&!u&&(r$6?i$8(l):(o.clear(),r$6=!0,u=!0,a$j(o,e),u=!1,r$6=!1,c$5()));}function f(){o&&(o.destroy(),o=null);}return u=!0,a$j(o,e),u=!1,{remove:f}}function i$8(n){e$8.includes(n)||e$8.unshift(n);}function c$5(){for(;e$8.length;)e$8.pop()();}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d$8{constructor(){this.uid=e$9(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null;}static acquireUntracked(e,r,o,l,i){return this.pool.acquire(0,e,r,o,l,i,m$g)}static acquireTracked(e,t,r,o){return this.pool.acquire(1,e,t,r,null,null,o)}notify(e,t){0===this.type?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t);}acquire(e,t,r,o,l,n,s){this.uid=e$9(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=o,this.target=l,this.path=n,this.equals=s;}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=e$9(),this.removed=!0;}}d$8.pool=new t$a(d$8);const h$6=new t$b,f$3=new Set;let m$4;function p$6(e){f$3.delete(e),f$3.add(e),m$4||(m$4=v$5(q$1));}function v$4(e){if(e.removed)return;const t=e.oldValue,r=e.getValue();e.equals(t,r)||(e.oldValue=r,e.notify(r,t));}function g$4(e){const t=Array.from(f$3);for(let r=0;r<t.length;r++){const o=t[r];o.target===e&&(v$4(o),f$3.delete(o));}}function _$4(e){for(const t of f$3.values())t.target===e&&(t.removed=!0);}function q$1(){let e=10;for(;m$4&&e--;){m$4=null;const e=j$2(),t=h$6.acquire();for(const r of e){const e=r.uid;v$4(r),e===r.uid&&r.removed&&t.push(r);}for(const r of f$3)r.removed&&(t.push(r),f$3.delete(r));for(const r of t)d$8.pool.release(r);h$6.release(t),h$6.release(e),k$3.forEach((e=>e()));}}function j$2(){const e=h$6.acquire();e.length=f$3.size;let t=0;for(const r of f$3)e[t]=r,++t;return f$3.clear(),e}const k$3=new Set;function y$4(e){return k$3.add(e),{remove(){k$3.delete(e);}}}function V$1(e,t,r){let o=y$d(e,t,r,((e,t,r)=>{let l,i,s=u$5((()=>u$l(e,t)),((n,s)=>{e.__accessor__.destroyed||l&&l.uid!==i?o.remove():(l||(l=d$8.acquireUntracked(n,r,s,e,t),i=l.uid),p$6(l));}));return {remove:h$f((()=>{s.remove(),l&&(l.uid!==i||l.removed||(l.removed=!0,p$6(l)),l=null),o=s=null;}))}}));return o}function b$4(e,r,o){const l=y$d(e,r,o,((e,r,o)=>{let i=!1;return o$9((()=>u$l(e,r)),((n,s)=>{e.__accessor__.destroyed?l.remove():i||(i=!0,m$g(s,n)||o.call(e,n,s,r,e),i=!1);}))}));return l}function w$3(e,t,r,o=!1){return !e.__accessor__||e.__accessor__.destroyed?{remove(){}}:o?b$4(e,t,r):V$1(e,t,r)}function U$2(e,t,r){let o,l,i=u$5(e,((e,n)=>{o&&o.uid!==l?i.remove():(o||(o=d$8.acquireTracked(e,t,n,r),l=o.uid),p$6(o));}));return {remove:h$f((()=>{i.remove(),o&&(o.uid!==l||o.removed||(o.removed=!0,p$6(o)),o=null),i=null;}))}}function S$2(e,t,r){let o=!1;return o$9(e,((e,l)=>{o||(o=!0,r(l,e)||t(e,l),o=!1);}))}function A$3(e,r,o=!1,l=m$g){return o?S$2(e,r,l):U$2(e,r,l)}function P$1(e){return n$b(f$3,(t=>t.oldValue===e))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$4(t){if(null==t)return {value:t};if(Array.isArray(t))return {type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return {type:Boolean,value:t};case"string":return {type:String,value:t};case"number":return {type:Number,value:t};case"function":return {type:t,value:null};default:return}}class p$5{constructor(...t){if(this.constructor===p$5)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new g$6(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t));}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:e,constructor:o}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const c=this;class i extends c{constructor(...t){super(...t),this.inherited=null,o&&o.apply(this,t);}}n$q(i.prototype);for(const s in t){const r=t[s];i.prototype[s]="function"==typeof r?function(...t){const e=this.inherited;let o;this.inherited=function(...t){if(c.prototype[s])return c.prototype[s].apply(this,t)};try{o=r.apply(this,t);}catch(i){throw this.inherited=e,i}return this.inherited=e,o}:t[s];}for(const s in r){const t=u$4(r[s]);d$i(t)(i.prototype,s);}return i$l(e)(i)}postscript(t){const r=this.__accessor__,e=r.ctorArgs||t;r.initialize(),e&&(this.set(e),r.ctorArgs=null),r.constructed(),this.initialize();}initialize(){}destroy(){this.destroyed||(_$4(this),this.__accessor__.destroy());}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t);}get(t){return o$t(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(e){return t$f(s$s.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof e}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,r){return t$l(this,t,r),this}watch(t,r,e){return w$3(this,t,r,e)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,r){return this.__accessor__.override(t,r)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t);}_get(t){return this.__accessor__.internalGet(t)}_set(t,r){return this.__accessor__.internalSet(t,r),this}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$7{constructor(){this._emitter=new i$7.EventEmitter(this);}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(n){class o{constructor(t=null){this.target=t,this._listenersMap=null;}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null;}emit(t,e){const s=this._listenersMap&&this._listenersMap.get(t);if(!s)return !1;const r=this.target||this;return [...s].forEach((t=>{t.call(r,e);})),s.length>0}on(t,e){if(Array.isArray(t)){const r=t.map((t=>this.on(t,e)));return r$k(r)}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const r=this._listenersMap.get(t)||[];return r.push(e),this._listenersMap.set(t,r),{remove:()=>{const s=this._listenersMap&&this._listenersMap.get(t)||[],r=s.indexOf(e);r>=0&&s.splice(r,1);}}}once(t,e){const s=this.on(t,(t=>{s.remove(),e.call(null,t);}));return s}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0}}n.EventEmitter=o,n.EventedMixin=e=>{let s=class extends e{constructor(){super(...arguments),this._emitter=new o;}destroy(){this._emitter.clear();}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return s=e$w([i$l("esri.core.Evented")],s),s};let h=class extends p$5{constructor(){super(...arguments),this._emitter=new i$7.EventEmitter(this);}destroy(){this._emitter.clear();}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};h=e$w([i$l("esri.core.Evented")],h),n.EventedAccessor=h;}(i$7||(i$7={}));const n$9=i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$8(n){return (r,t)=>{r[t]=n;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$7{constructor(){this._observers=[];}observe(e){return this._observers.includes(e)||this._observers.push(e),new s$7(this._observers,e)}notify(){const s=this._observers.slice();for(let e=0;e<s.length;++e){const r=s[e];r.onInvalidated(),r.onCommitted();}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$3;class g$3{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0;}preventDefault(){this.cancellable&&(this.defaultPrevented=!0);}reset(e){this.defaultPrevented=!1,this.item=e;}}const p$4=new e$d(g$3,void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1;})),d$7=()=>{};function b$3(e){return e?e instanceof L$2?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function v$3(e){if(e&&e.length)return e[0]}function y$3(e,t,s,i){const r=Math.min(e.length-s,t.length-i);let n=0;for(;n<r&&e[s+n]===t[i+n];)n++;return n}function C$1(e,t,s,i){t&&t.forEach(((t,r,n)=>{e.push(t),C$1(e,s.call(i,t,r,n),s,i);}));}const A$2=new Set,x$3=new Set,E$2=new Set,j$1=new Map;let B$1=0,L$2=u$3=class extends n$9.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new e$7,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:B$1++});}static isCollection(e){return null!=e&&e instanceof u$3}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof u$3?{items:e}:e:{}}destroy(){this.removeAll();}*[Symbol.iterator](){yield*this.items;}get items(){return i$o(this._observable),this._items}set items(e){this._emitBeforeChanges(1)||(this._splice(0,this.length,...b$3(e)),this._emitAfterChanges(1));}hasEventListener(e){return "change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=d$7,s.removed=!0,e.splice(e.indexOf(s),1);}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return {remove(){s.remove();}}}add(e,t){if(i$o(this._observable),this._emitBeforeChanges(1))return this;const s=this.getNextIndex(null!=t?t:null);return this._splice(s,0,e),this._emitAfterChanges(1),this}addMany(e,t=this._items.length){if(i$o(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(1))return this;const s=this.getNextIndex(t);return this._splice(s,0,...b$3(e)),this._emitAfterChanges(1),this}removeAll(){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return [];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(2),e}clone(){return i$o(this._observable),this._createNewInstance({items:this._items.map(l$k)})}concat(...e){i$o(this._observable);const t=e.map(b$3);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return;const s=q$5(this._splice(0,this.length)),i=s.length;for(let r=0;r<i;r++)e.call(t,s[r],r,s);this._emitAfterChanges(2);}every(e,t){return i$o(this._observable),this._items.every(e,t)}filter(e,t){let s;return i$o(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return i$o(this._observable),this._items.find(e,t)}findIndex(e,t){return i$o(this._observable),this._items.findIndex(e,t)}flatten(e,t){i$o(this._observable);const s=[];return C$1(s,this,e,t),new u$3(s)}forEach(e,t){return i$o(this._observable),this._items.forEach(e,t)}getItemAt(e){return i$o(this._observable),this._items[e]}getNextIndex(e){i$o(this._observable);const t=this.length;return (e=null==e?t:e)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return i$o(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return i$o(this._observable),this._items.indexOf(e,t)}join(e=","){return i$o(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return i$o(this._observable),this._items.lastIndexOf(e,t)}map(e,t){i$o(this._observable);const s=this._items.map(e,t);return new u$3({items:s})}reorder(e,t=this.length-1){i$o(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(4))return e;this._splice(s,1),this._splice(t,0,e),this._emitAfterChanges(4);}return e}}pop(){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=v$3(this._splice(this.length-1,1));return this._emitAfterChanges(2),e}push(...e){return i$o(this._observable),this._emitBeforeChanges(1)||(this._splice(this.length,0,...e),this._emitAfterChanges(1)),this.length}reduce(e,t){i$o(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){i$o(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return i$o(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(i$o(this._observable),e<0||e>=this.length||this._emitBeforeChanges(2))return;const t=v$3(this._splice(e,1));return this._emitAfterChanges(2),t}removeMany(e){if(i$o(this._observable),!e||!e.length||this._emitBeforeChanges(2))return [];const t=e instanceof u$3?e.toArray():e,s=this._items,i=[],r=t.length;for(let n=0;n<r;n++){const e=t[n],r=s.indexOf(e);if(r>-1){const e=1+y$3(t,s,n+1,r+1),h=this._splice(r,e);h&&h.length>0&&i.push.apply(i,h),n+=e-1;}}return this._emitAfterChanges(2),i}reverse(){if(i$o(this._observable),this._emitBeforeChanges(4))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,...e)),this._emitAfterChanges(4),this}shift(){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=v$3(this._splice(0,1));return this._emitAfterChanges(2),e}slice(e=0,t=this.length){return i$o(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return i$o(this._observable),this._items.some(e,t)}sort(e){if(i$o(this._observable),!this.length||this._emitBeforeChanges(4))return this;const t=q$5(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,...t),this._emitAfterChanges(4),this}splice(e,t,...s){i$o(this._observable);const i=(t?2:0)|(s.length?1:0);if(this._emitBeforeChanges(i))return [];const r=this._splice(e,t,...s)||[];return this._emitAfterChanges(i),r}toArray(){return i$o(this._observable),this._items.slice()}toJSON(){return i$o(this._observable),this.toArray()}toLocaleString(){return i$o(this._observable),this._items.toLocaleString()}toString(){return i$o(this._observable),this._items.toString()}unshift(...e){return i$o(this._observable),!e.length||this._emitBeforeChanges(1)||(this._splice(0,0,...e),this._emitAfterChanges(1)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,...s){const i=this._items,r=this.itemType;let n,o;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=v$5((()=>this._dispatchChange()))),t){if(o=i.splice(e,t),this.hasEventListener("before-remove")){const t=p$4.acquire();t.target=this,t.cancellable=!0;for(let s=0,r=o.length;s<r;s++)n=o[s],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(s,1),i.splice(e,0,n),e+=1,s-=1,r-=1);p$4.release(t);}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=p$4.acquire();e.target=this,e.cancellable=!1;const t=o.length;for(let s=0;s<t;s++)e.reset(o[s]),this.emit("after-remove",e);p$4.release(e);}}if(s&&s.length){if(r){const e=[];for(const t of s){const s=r.ensureType(t);null==s&&null!=t||e.push(s);}s=e;}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),h=e===this.length;if(t||n){const r=p$4.acquire();r.target=this,r.cancellable=!0;const o=p$4.acquire();o.target=this,o.cancellable=!1;for(const l of s)t?(r.reset(l),this.emit("before-add",r),r.defaultPrevented||(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),n&&(o.reset(l),this.emit("after-add",o)))):(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),o.reset(l),this.emit("after-add",o));p$4.release(o),p$4.release(r);}else {if(h)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length);}}return (s&&s.length||o&&o.length)&&this._notifyChangeEvent(s,o),o}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=p$4.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,p$4.release(s);}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=p$4.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),p$4.release(t);}this._observable.notify();}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t});}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const s of e){const e=s.changes;A$2.clear(),x$3.clear(),E$2.clear();for(const{added:t,removed:s}of e){if(t)if(0===E$2.size&&0===x$3.size)for(const e of t)A$2.add(e);else for(const e of t)x$3.has(e)?(E$2.add(e),x$3.delete(e)):E$2.has(e)||A$2.add(e);if(s)if(0===E$2.size&&0===A$2.size)for(const e of s)x$3.add(e);else for(const e of s)A$2.has(e)?A$2.delete(e):(E$2.delete(e),x$3.add(e));}const i=t$b.acquire();A$2.forEach((e=>{i.push(e);}));const r=t$b.acquire();x$3.forEach((e=>{r.push(e);}));const n=this._items,h=s.items,o=t$b.acquire();if(E$2.forEach((e=>{h.indexOf(e)!==n.indexOf(e)&&o.push(e);})),s.listeners&&(i.length||r.length||o.length)){const e={target:this,added:i,removed:r,moved:o},t=s.listeners.length;for(let i=0;i<t;i++){const t=s.listeners[i];t.removed||t.callback.call(this,e);}}t$b.release(i),t$b.release(r),t$b.release(o);}A$2.clear(),x$3.clear(),E$2.clear();}};L$2.ofType=t=>{if(!t)return u$3;if(j$1.has(t))return j$1.get(t);let s=null;if("function"==typeof t)s=t.prototype.declaredClass;else if(t.base)s=t.base.prototype.declaredClass;else for(const e in t.typeMap){const i=t.typeMap[e].prototype.declaredClass;s?s+=` | ${i}`:s=i;}let i=class extends u$3{};return e$w([n$8({Type:t,ensureType:"function"==typeof t?b$8(t):N$5(t)})],i.prototype,"itemType",void 0),i=e$w([i$l(`esri.core.Collection<${s}>`)],i),j$1.set(t,i),i},e$w([d$i()],L$2.prototype,"length",void 0),e$w([d$i()],L$2.prototype,"items",null),L$2=u$3=e$w([i$l("esri.core.Collection")],L$2);const S$1=L$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let h$5=class extends p$5{constructor(r){super(r),this._groups=new Map;}destroy(){this.removeAll();}get size(){let r=0;return this._groups.forEach((e=>{r+=e.length;})),r}add(r,e){if(!this._isHandle(r)&&!Array.isArray(r)&&!S$1.isCollection(r))return this;const t=this._getOrCreateGroup(e);return Array.isArray(r)||S$1.isCollection(r)?r.forEach((r=>this._isHandle(r)&&t.push(r))):t.push(r),this.notifyChange("size"),this}forEach(r,e){if("function"==typeof r)this._groups.forEach((e=>e.forEach(r)));else {const s=this._getGroup(r);s&&e&&s.forEach(e);}}has(r){return this._groups.has(this._ensureGroupKey(r))}remove(r){if(Array.isArray(r)||S$1.isCollection(r))return r.forEach(this.remove,this),this;if(!this.has(r))return this;const e=this._getGroup(r);for(let s=0;s<e.length;s++)e[s].remove();return this._deleteGroup(r),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((r=>{for(let e=0;e<r.length;e++)r[e].remove();})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(r){return r&&!!r.remove}_getOrCreateGroup(r){if(this.has(r))return this._getGroup(r);const e=[];return this._groups.set(this._ensureGroupKey(r),e),e}_getGroup(r){return q$5(this._groups.get(this._ensureGroupKey(r)))}_deleteGroup(r){return this._groups.delete(this._ensureGroupKey(r))}_ensureGroupKey(r){return r||"_default_"}};e$w([d$i({readOnly:!0})],h$5.prototype,"size",null),h$5=e$w([i$l("esri.core.Handles")],h$5);const u$2=h$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h$4{constructor(s){this.instance=s,this._resolver=A$7(),this._status=0,this._resolvingPromises=[],this._resolver.promise.then((()=>{this._status=1,this._cleanUp();}),(()=>{this._status=2,this._cleanUp();}));}addResolvingPromise(s){this._resolvingPromises.push(s),this._tryResolve();}isResolved(){return 1===this._status}isRejected(){return 2===this._status}isFulfilled(){return 0!==this._status}abort(){this._resolver.reject(m$9());}when(s,e){return this._resolver.promise.then(s,e)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null;}_tryResolve(){if(this.isFulfilled())return;const s=A$7(),e=[...this._resolvingPromises,q$5(s.promise)],t=this._allPromise=Promise.all(e);t.then((()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve(this.instance);}),(s=>{this.isFulfilled()||this._allPromise!==t||d$d(s)||this._resolver.reject(s);})),s.resolve();}}const n$7=e=>{let i=class extends e{constructor(...s){super(...s),this._promiseProps=new h$4(this),this.addResolvingPromise(Promise.resolve());}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,e){return new Promise(((s,e)=>{this._promiseProps.when(s,e);})).then(s,e)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s);}};return i=e$w([i$l("esri.core.Promise")],i),i};let m$3=class extends(n$7(p$5)){};m$3=e$w([i$l("esri.core.Promise")],m$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$8(){const t=n$6.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const o=o=>t[o].toString(16);return o(0)+o(1)+"-"+o(2)+"-"+o(3)+"-"+o(4)+"-"+o(5)+o(6)+o(7)}const n$6=e$v.crypto||e$v.msCrypto;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$4=/\?(\.|$)/g;function i$6(n,t,r,e){const o=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],u=f$2(n,t,r,e);for(const i of o){const t=i.trim().replace(c$4,"$1"),e=n.get(t);r.call(n,e,e,t,n);}return u}function f$2(n,t,r,e){return n.watch(t,r,e)}function l$3(n,t,r,e){return N$2(n,t,null,r,e)}function s$3(n,t,r,e){return z$1(n,t,U$1,r,e)}function a$3(n,t,r,e){return N$2(n,t,U$1,r,e)}function m$2(n,t,r,e){return z$1(n,t,V,r,e)}function p$3(n,t,r,e){return N$2(n,t,V,r,e)}function v$2(n,t,r,e){return z$1(n,t,k$2,r,e)}function d$6(n,t,r,e){return N$2(n,t,k$2,r,e)}function h$3(n,t,r,e){return z$1(n,t,q,r,e)}function g$2(n,t,r,e){return N$2(n,t,q,r,e)}function y$2(n,t,r,e){return z$1(n,t,B,r,e)}function j(n,t,r,e){return N$2(n,t,B,r,e)}function b$2(n,t,r,e){return z$1(n,t,C,r,e)}function A$1(n,t,r,e){return N$2(n,t,C,r,e)}function w$2(n,t,e,o,u){return z$1(n,t,(n=>m$g(e,n)),o,u)}function x$2(n,t,e,o,u){return N$2(n,t,(n=>m$g(e,n)),o,u)}function O(n,t,r,e){let o=!1;const u=n.watch(t,((t,e,u,c)=>{o||r.call(n,t,e,u,c);}),e);return {remove(){u.remove();},pause(){o=!0;},resume(){o=!1;}}}function $$1(r,e,o,u,c,f,l){const s={};function a(n){const t=s[n];t&&(f&&f(t.target,n,r,o),t.handle.remove(),delete s[n]);}const m=i$6(r,e,((e,i,f)=>{a(f),e$g(e)&&(s[f]={handle:r$f(e,o,u),target:e},c&&c(e,f,r,o));}),l);return {remove(){m.remove();for(const n in s)a(n);}}}function z$1(n,t,r,e,o){const u=n.watch(t,((t,o,u,c)=>{r&&!r(t)||null==e||e.call(n,t,o,u,c);}),o);if(Array.isArray(t))for(const c of t){const o=n.get(c);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}else {const o=n.get(t);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}return u}function N$2(n,t,r,c,i){const f="function"==typeof c?c:null,l="object"==typeof c?c:null;"boolean"==typeof c&&(i=c);let s,a=!1;function m(){s&&(s.remove(),s=null);}const p=A$7();j$6(l,(()=>{m(),p.reject(m$9());}));const v={then:p.promise.then.bind(p.promise),catch:p.promise.catch.bind(p.promise),remove:m};return Object.freeze(v),s=z$1(n,t,r,((t,r,e,o)=>{a=!0,m(),f&&f.call(n,t,r,e,o),p.resolve({value:t,oldValue:r,propertyName:e,target:o});}),i),a&&m(),v}function U$1(n){return !!n}function V(n){return !n}function k$2(n){return !0===n}function q(n){return !1===n}function B(n){return void 0!==n}function C(n){return void 0===n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$7=Object.prototype.toString;function r$5(n){const o="__accessorMetadata__"in n?b$8(n):n;return function(...t){if(t.push(o),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return e$6.apply(this,t)}}function e$6(t,o,r,e){s$o(t,o).cast=e;}function i$5(t){return function(o,r){s$o(o,t).cast=o[r];}}function c$3(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o$7.call(t[0])?r$5(t[0]):1===t.length&&"string"==typeof t[0]?i$5(t[0]):void 0}

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
var i$4,r$4,o$6=function(t){if("WebkitTransition"in t.style)i$4="webkitTransitionEnd",r$4="webkitAnimationEnd";else {if(!("transition"in t.style))throw new Error("Your browser is not supported!");i$4="transitionend",r$4="animationend";}},s$2=function(t){i$4||o$6(t);},a$2=function(t,e){return void 0===e&&(e=t+"-active"),function(n){s$2(n);var o=!1,a=function(s){o||(o=!0,n.removeEventListener(i$4,a),n.removeEventListener(r$4,a),n.classList.remove(t),n.classList.remove(e));};n.classList.add(t),n.addEventListener(i$4,a),n.addEventListener(r$4,a),requestAnimationFrame((function(){n.classList.add(e);}));}},c$2=function(t,e){return void 0===e&&(e=t+"-active"),function(n,o){s$2(n);var a=!1,c=function(t){a||(a=!0,n.removeEventListener(i$4,c),n.removeEventListener(r$4,c),o());};n.classList.add(t),n.addEventListener(i$4,c),n.addEventListener(r$4,c),requestAnimationFrame((function(){n.classList.add(e);}));}};function l$2(t){const n=t$b.acquire();for(let e=0;e<arguments.length;e++){const t=arguments[e],i=typeof t;if("string"===i)n.push(t);else if(Array.isArray(t))n.push.apply(n,t);else if("object"===i)for(const e in t)t[e]&&n.push(e);}const i=n.join(" ");return t$b.release(n),i}function d$5(t){const e=null==t?void 0:t.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function u$1(t){return d$5(t)?"rtl":"ltr"}function p$2(t){const e="data-node-ref";this[t.getAttribute(e)]=null;}function g$1(t){const e="data-node-ref";this[t.getAttribute(e)]=t;}function f$1(t,e){return ("enter"===t?a$2:c$2)(e)}s$s.getLogger("esri.widgets.support.widgetUtils");const m$1=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],h$2=m$1.reduce(((t,e)=>(t[e]=[],t)),{}),v$1=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],L$1=new Sanitizer({whiteList:h$2,onTagAttr:(t,e,n)=>{const i=`${e}="${n}"`;if(v$1.includes(e))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function w$1(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),r=n.top+n.height,o=i.top+i.height,s=n.top,a=i.top;(r>o||s<a)&&t.scrollIntoView({block:"end"});}function y$1(t){return "Enter"===t||" "===t}function b$1(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function E$1(){return b$1().startsWith("dark")}function k$1(){return "calcite-theme-"+(E$1()?"dark":"light")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$4="http://www.w3.org/",r$3=`${t$4}2000/svg`,o$5=`${t$4}1999/xlink`;let i$3,l$1=[],n$5=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t];})),t&&Object.keys(t).forEach((e=>{r[e]=t[e];})),r},s$1=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),p$1=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},d$4=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(s$1(e[o],t))return o;return -1},a$1=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let l=i.properties;if(!(l?void 0===l.key?l.bind:l.key:void 0))for(let n=0;n<e.length;n++)if(n!==t){let t=e[n];if(s$1(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},f=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties);}},c$1=[],u=!1,h$1=e=>{(e.children||[]).forEach(h$1),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode]);},m=()=>{u=!1,c$1.forEach(h$1),c$1.length=0;},v=e=>{c$1.push(e),u||(u=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m,{timeout:16}):setTimeout(m,16));},y=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),v(e));};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),v(e));},g=(t,i,l)=>{if(!i)return;let n=l.eventHandlerInterceptor,s=Object.keys(i),d=s.length;for(let a=0;a<d;a++){let d=s[a],f=i[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)x$1(t,f,!0);else if("classes"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o];f[r]&&t.classList.add(r);}}else if("styles"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=f[r];i&&(p$1(i),l.styleApplyer(t,r,i));}}else if("key"!==d&&null!=f){let s=typeof f;"function"===s?(0===d.lastIndexOf("on",0)&&(n&&(f=n(d,f,t,i)),"oninput"===d&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value;};}()),t[d]=f):l.namespace===r$3?"href"===d?t.setAttributeNS(o$5,d,f):t.setAttribute(d,f):"string"===s&&"value"!==d?"innerHTML"===d?t[d]=L$1.sanitize(f):t.setAttribute(d,f):t[d]=f;}}},b=(e,t,r)=>{if(t)for(let o of t)w(o,e,void 0,r);},N$1=(e,t,r)=>{b(e,t.children,r),t.text&&(e.textContent=t.text),g(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children]);},w=(e,t,o,i)=>{let l,s=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)l=e.domNode=d.createTextNode(e.text),void 0!==o?t.insertBefore(l,o):t.appendChild(l);else {for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(s-1),c=p.slice(s,a);"."===f?l.classList.add(c):"#"===f?l.id=c:("svg"===c&&(i=n$5(i,{namespace:r$3})),void 0!==i.namespace?l=e.domNode=d.createElementNS(i.namespace,c):(l=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&l.setAttribute("type",e.properties.type)),void 0!==o?t.insertBefore(l,o):l.parentNode!==t&&t.appendChild(l)),s=a+1;}}N$1(l,e,i);}},x$1=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r);}));},k=(t,i,l,n)=>{if(!l)return;let s=!1,d=Object.keys(l),a=d.length;for(let f=0;f<a;f++){let a=d[f],c=l[a],u=i[a];if("class"===a)u!==c&&(x$1(t,u,!1),x$1(t,c,!0));else if("classes"===a){let e=t.classList,r=Object.keys(c),o=r.length;for(let t=0;t<o;t++){let o=r[t],i=!!c[o];i!==!!u[o]&&(s=!0,i?e.add(o):e.remove(o));}}else if("styles"===a){let e=Object.keys(c),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=c[r];i!==u[r]&&(s=!0,i?(p$1(i),n.styleApplyer(t,r,i)):n.styleApplyer(t,r,""));}}else if(c||"string"!=typeof u||(c=""),"value"===a){let e=t[a];e!==c&&(t["oninput-value"]?e===t["oninput-value"]:c!==u)&&(t[a]=c,t["oninput-value"]=void 0),c!==u&&(s=!0);}else if(c!==u){let i=typeof c;"function"===i&&n.eventHandlerInterceptor||(n.namespace===r$3?"href"===a?t.setAttributeNS(o$5,a,c):t.setAttribute(a,c):"string"===i?"innerHTML"===a?t[a]=L$1.sanitize(c):"role"===a&&""===c?t.removeAttribute(a):t.setAttribute(a,c):t[a]!==c&&(t[a]=c),s=!0);}}return s},A=(e,t,r,o,n)=>{if(r===o)return !1;o=o||l$1;let p,c=(r=r||l$1).length,u=o.length,h=0,m=0,v=!1;for(;m<u;){let l=h<c?r[h]:void 0,u=o[m];if(void 0!==l&&s$1(l,u))v=i$3(l,u,n)||v,h++;else {let l=d$4(r,u,h+1);if(l>=0){for(p=h;p<l;p++)y(r[p]),a$1(r,p,e,"removed");v=i$3(r[l],u,n)||v,h=l+1;}else w(u,t,h<c?r[h].domNode:void 0,n),f(u),a$1(o,m,e,"added");}m++;}if(c>h)for(p=h;p<c;p++)y(r[p]),a$1(r,p,e,"removed");return v};i$3=(e,t,o)=>{let i=e.domNode,l=!1;if(e===t)return !1;let s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,l=!0,l}t.domNode=i;}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(o=n$5(o,{namespace:r$3})),e.text!==t.text&&(s=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,s=A(t,i,e.children,t.children,o)||s,s=k(i,e.properties,t.properties,o)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,o,t.vnodeSelector,t.properties,t.children]);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),l};let S=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,i$3(o,r,t);},domNode:e.domNode});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o;}};let d$3=r=>n$5(p,r),n$4={create:(e,t)=>(t=d$3(t),w(e,document.createElement("div"),void 0,t),S(e,t)),append:(e,t,p)=>(p=d$3(p),w(t,e,void 0,p),S(t,p)),insertBefore:(e,t,p)=>(p=d$3(p),w(t,e.parentNode,e,p),S(t,p)),merge:(e,r,p)=>(p=d$3(p),r.domNode=e,N$1(e,r,p),S(r,p)),replace:(e,t,p)=>(p=d$3(p),w(t,e.parentNode,e,p),e.parentNode.removeChild(e),S(t,p))};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$3,n$3=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};t$3=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let o$4=(e,r)=>{let n=e;return r.forEach((e=>{n=n&&n.children?t$3(n.children,(r=>r.domNode===e)):void 0;})),n},d$2=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),p=n$3(d.currentTarget,i.domNode);p.reverse();let l,a=o$4(i.getLastRender(),p);return e.scheduleRender(),a&&(l=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),l};return (e,r,t,n)=>d},i$2=t=>{let n,o,i=d$3(t),p=i.performanceLogger,l=!0,a=!1,s=[],c=[],u=(e,r,t)=>{let o,l=()=>o;i.eventHandlerInterceptor=d$2(n,l,p),o=e(r,t(),i),s.push(o),c.push(t);},f=()=>{if(o=void 0,l){l=!1,p("renderStart",void 0);for(let e=0;e<s.length;e++){let r=c[e]();p("rendered",void 0),s[e].update(r),p("patched",void 0);}p("renderDone",void 0),l=!0;}};return n={renderNow:f,scheduleRender:()=>{o||a||(o=requestAnimationFrame(f));},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0;},resume:()=>{a=!1,l=!0,n.scheduleRender();},append:(e,t)=>{u(n$4.append,e,t);},insertBefore:(e,t)=>{u(n$4.insertBefore,e,t);},merge:(e,t)=>{u(n$4.merge,e,t);},replace:(e,t)=>{u(n$4.replace,e,t);},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),s.splice(r,1)[0];throw new Error("renderFunction was not found")}},n};

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

let scopeId;
let contentRef;
let hostTagName;
let customError;
let i$1 = 0;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queueCongestion = 0;
let queuePending = false;
const win = typeof window !== 'undefined' ? window : {};
const CSS = BUILD.cssVarShim ? win.CSS : null;
const doc = win.document || { head: {} };
const H = (win.HTMLElement || class {
});
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const setPlatformHelpers = (helpers) => {
    Object.assign(plt, helpers);
};
const supportsShadow = BUILD.shadowDomShim && BUILD.shadowDom
    ? /*@__PURE__*/ (() => (doc.head.attachShadow + '').indexOf('[native') > -1)()
    : true;
const supportsListenerOptions = /*@__PURE__*/ (() => {
    let supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get() {
                supportsListenerOptions = true;
            },
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructibleStylesheets = BUILD.constructableCSS
    ? /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replace === 'function';
        }
        catch (e) { }
        return false;
    })()
    : false;
const Context = {};
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (BUILD.hostListener && listeners) {
        // this is called immediately within the element's constructor
        // initialize our event listeners on the host element
        // we do this now so that we can listen to events that may
        // have fired even before the instance is ready
        if (BUILD.hostListenerTargetParent) {
            // this component may have event listeners that should be attached to the parent
            if (attachParentListeners) {
                // this is being ran from within the connectedCallback
                // which is important so that we know the host element actually has a parent element
                // filter out the listeners to only have the ones that ARE being attached to the parent
                listeners = listeners.filter(([flags]) => flags & 32 /* TargetParent */);
            }
            else {
                // this is being ran from within the component constructor
                // everything BUT the parent element listeners should be attached at this time
                // filter out the listeners that are NOT being attached to the parent
                listeners = listeners.filter(([flags]) => !(flags & 32 /* TargetParent */));
            }
        }
        listeners.map(([flags, name, method]) => {
            const target = BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        if (BUILD.lazyLoad) {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
        else {
            hostRef.$hostElement$[methodName](ev);
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (BUILD.hostListenerTargetDocument && flags & 4 /* TargetDocument */)
        return doc;
    if (BUILD.hostListenerTargetWindow && flags & 8 /* TargetWindow */)
        return win;
    if (BUILD.hostListenerTargetBody && flags & 16 /* TargetBody */)
        return doc.body;
    if (BUILD.hostListenerTargetParent && flags & 32 /* TargetParent */)
        return elm.parentElement;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => supportsListenerOptions
    ? ({
        passive: (flags & 1 /* Passive */) !== 0,
        capture: (flags & 2 /* Capture */) !== 0,
    })
    : (flags & 2 /* Capture */) !== 0;
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATE_ID = 's-id';
const HYDRATED_STYLE_ID = 'sty-id';
const HYDRATE_CHILD_ID = 'c-id';
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
const createTime = (fnName, tagName = '') => {
    if (BUILD.profile && performance.mark) {
        const key = `st:${fnName}:${tagName}:${i$1++}`;
        // Start
        performance.mark(key);
        // End
        return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
    }
    else {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    if (BUILD.profile && performance.mark) {
        if (performance.getEntriesByName(key).length === 0) {
            performance.mark(key);
        }
        return () => {
            if (performance.getEntriesByName(measureText).length === 0) {
                performance.measure(measureText, key);
            }
        };
    }
    else {
        return () => {
            return;
        };
    }
};
const inspect = (ref) => {
    const hostRef = getHostRef(ref);
    if (!hostRef) {
        return undefined;
    }
    const flags = hostRef.$flags$;
    const hostElement = hostRef.$hostElement$;
    return {
        renderCount: hostRef.$renderCount$,
        flags: {
            hasRendered: !!(flags & 2 /* hasRendered */),
            hasConnected: !!(flags & 1 /* hasConnected */),
            isWaitingForChildren: !!(flags & 4 /* isWaitingForChildren */),
            isConstructingInstance: !!(flags & 8 /* isConstructingInstance */),
            isQueuedForUpdate: !!(flags & 16 /* isQueuedForUpdate */),
            hasInitializedComponent: !!(flags & 32 /* hasInitializedComponent */),
            hasLoadedComponent: !!(flags & 64 /* hasLoadedComponent */),
            isWatchReady: !!(flags & 128 /* isWatchReady */),
            isListenReady: !!(flags & 256 /* isListenReady */),
            needsRerender: !!(flags & 512 /* needsRerender */),
        },
        instanceValues: hostRef.$instanceValues$,
        ancestorComponent: hostRef.$ancestorComponent$,
        hostElement,
        lazyInstance: hostRef.$lazyInstance$,
        vnode: hostRef.$vnode$,
        modeName: hostRef.$modeName$,
        onReadyPromise: hostRef.$onReadyPromise$,
        onReadyResolve: hostRef.$onReadyResolve$,
        onInstancePromise: hostRef.$onInstancePromise$,
        onInstanceResolve: hostRef.$onInstanceResolve$,
        onRenderResolve: hostRef.$onRenderResolve$,
        queuedListeners: hostRef.$queuedListeners$,
        rmListeners: hostRef.$rmListeners$,
        ['s-id']: hostElement['s-id'],
        ['s-cr']: hostElement['s-cr'],
        ['s-lr']: hostElement['s-lr'],
        ['s-p']: hostElement['s-p'],
        ['s-rc']: hostElement['s-rc'],
        ['s-sc']: hostElement['s-sc'],
    };
};
const installDevTools = () => {
    if (BUILD.devTools) {
        const stencil = (win.stencil = win.stencil || {});
        const originalInspect = stencil.inspect;
        stencil.inspect = (ref) => {
            let result = inspect(ref);
            if (!result && typeof originalInspect === 'function') {
                result = originalInspect(ref);
            }
            return result;
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
    let scopeId = getScopeId(cmpMeta, mode);
    let style = styles.get(scopeId);
    if (!BUILD.attachStyles) {
        return scopeId;
    }
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
                if (BUILD.hydrateClientSide &&
                    styleContainerNode.host &&
                    (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId}"]`))) {
                    // This is only happening on native shadow-dom, do not needs CSS var shim
                    styleElm.innerHTML = style;
                }
                else {
                    if (BUILD.cssVarShim && plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    if (BUILD.hydrateServerSide || BUILD.hotModuleReplacement) {
                        styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);
    if ((BUILD.shadowDom || BUILD.scoped) && BUILD.cssAnnotations && flags & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if (BUILD.scoped && flags & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (BUILD.mode && mode && cmp.$flags$ & 32 /* hasMode */ ? cmp.$tagName$ + '-' + mode : cmp.$tagName$);
const convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
// Private
const computeMode = (elm) => modeResolutionChain.map((h) => h(elm)).find((m) => !!m);
// Public
const setMode = (handler) => modeResolutionChain.push(handler);
const getMode = (ref) => getHostRef(ref).$modeName$;
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
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
    let key = null;
    let slotName = null;
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
                else if (BUILD.isDev && typeof nodeName !== 'function' && child.$flags$ === undefined) {
                    consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
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
        if (BUILD.isDev && nodeName === 'input') {
            validateInputProperties(vnodeData);
        }
        // normalize class / classname attributes
        if (BUILD.vdomKey && vnodeData.key) {
            key = vnodeData.key;
        }
        if (BUILD.slotRelocation && vnodeData.name) {
            slotName = vnodeData.name;
        }
        if (BUILD.vdomClass) {
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
    if (BUILD.isDev && vNodeChildren.some(isHost)) {
        consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
    }
    if (BUILD.vdomFunctional && typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    if (BUILD.vdomKey) {
        vnode.$key$ = key;
    }
    if (BUILD.slotRelocation) {
        vnode.$name$ = slotName;
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
    if (BUILD.vdomAttribute) {
        vnode.$attrs$ = null;
    }
    if (BUILD.vdomKey) {
        vnode.$key$ = null;
    }
    if (BUILD.slotRelocation) {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
const validateInputProperties = (vnodeData) => {
    const props = Object.keys(vnodeData);
    const typeIndex = props.indexOf('type');
    const minIndex = props.indexOf('min');
    const maxIndex = props.indexOf('max');
    const stepIndex = props.indexOf('min');
    const value = props.indexOf('value');
    if (value === -1) {
        return;
    }
    if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
        consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
    }
};
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
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (BUILD.vdomClass && memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (BUILD.vdomStyle && memberName === 'style') {
            // update style attribute, css properties and values
            if (BUILD.updatable) {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (!BUILD.hydrateServerSide && prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (!BUILD.hydrateServerSide && prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (BUILD.vdomKey && memberName === 'key')
            ;
        else if (BUILD.vdomRef && memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if (BUILD.vdomListener &&
            (BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else if (BUILD.vdomPropOrAttr) {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        let n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                            // tslint:disable-next-line: triple-equals
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            if (BUILD.vdomXlink) {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (BUILD.vdomXlink && xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (BUILD.vdomXlink && xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
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
    if (BUILD.updatable) {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (BUILD.slotRelocation && !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* isSlotFallback */
                : // slot element does not have fallback content
                    1 /* isSlotReference */;
        }
    }
    if (BUILD.isDev && newVNode.$elm$) {
        consoleDevError(`The JSX ${newVNode.$text$ !== null ? `"${newVNode.$text$}" text` : `"${newVNode.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`);
    }
    if (BUILD.vdomText && newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (BUILD.slotRelocation && newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            BUILD.isDebug || BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode) : doc.createTextNode('');
    }
    else {
        if (BUILD.svg && !isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (BUILD.svg
            ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, BUILD.slotRelocation && newVNode.$flags$ & 2 /* isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$)
            : doc.createElement(BUILD.slotRelocation && newVNode.$flags$ & 2 /* isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$));
        if (BUILD.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        if (BUILD.vdomAttribute) {
            updateElement(null, newVNode, isSvgMode);
        }
        if ((BUILD.shadowDom || BUILD.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (BUILD.svg) {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    if (BUILD.slotRelocation) {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((BUILD.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, BUILD.slotRelocation ? referenceNode(before) : before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            if (BUILD.slotRelocation) {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
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
            // Vnode moved right
            if (BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if (BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            if (BUILD.vdomKey) {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (BUILD.vdomKey && idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                if (BUILD.slotRelocation) {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
                else {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (BUILD.updatable && newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (BUILD.slotRelocation && vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        if (BUILD.vdomKey) {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (!BUILD.vdomText || text === null) {
        if (BUILD.svg) {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        // element node
        if (BUILD.vdomAttribute || BUILD.reflect) {
            if (BUILD.slot && tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (BUILD.updatable && oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (BUILD.updatable && BUILD.vdomText && oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (BUILD.updatable && oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (BUILD.svg && isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if (BUILD.vdomText && BUILD.slotRelocation && (defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (BUILD.vdomText && oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* ElementNode */ ||
                            (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    let childNodes = elm.childNodes;
    let ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    if (BUILD.vdomRef) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    // <Host> runtime check
    if (BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
        throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
    }
    if (BUILD.reflect && cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm);
    if (BUILD.scoped || BUILD.shadowDom) {
        scopeId = hostElm['s-sc'];
    }
    if (BUILD.slotRelocation) {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    if (BUILD.slotRelocation) {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =
                        BUILD.isDebug || BUILD.hydrateServerSide
                            ? originalLocationDebugNode(nodeToRelocate)
                            : doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
// slot comment debug nodes only created with the `--debug` flag
// otherwise these nodes are text nodes w/out content
const slotReferenceDebugNode = (slotVNode) => doc.createComment(`<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ''}> (host=${hostTagName.toLowerCase()})`);
const originalLocationDebugNode = (nodeToRelocate) => doc.createComment(`org-location for ` +
    (nodeToRelocate.localName
        ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate['s-hn']})`
        : `[${nodeToRelocate.textContent}]`));
const getElement = (ref) => (BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref);
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            if (BUILD.isDev && !elm.isConnected) {
                consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
            }
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
    if (BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    if (BUILD.taskQueue && BUILD.updatable) {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if (BUILD.asyncLoading && hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const elm = hostRef.$hostElement$;
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    let promise;
    if (isInitialLoad) {
        if (BUILD.lazyLoad && BUILD.hostListener) {
            hostRef.$flags$ |= 256 /* isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        emitLifecycleEvent(elm, 'componentWillLoad');
        if (BUILD.cmpWillLoad) {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        emitLifecycleEvent(elm, 'componentWillUpdate');
        if (BUILD.cmpWillUpdate) {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    emitLifecycleEvent(elm, 'componentWillRender');
    if (BUILD.cmpWillRender) {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (BUILD.style && isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    if (BUILD.isDev) {
        hostRef.$flags$ |= 1024 /* devOnRender */;
    }
    if (BUILD.hydrateServerSide) {
        await callRender(hostRef, instance, elm);
    }
    else {
        callRender(hostRef, instance, elm);
    }
    if (BUILD.cssVarShim && plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    if (BUILD.isDev) {
        hostRef.$renderCount$++;
        hostRef.$flags$ &= ~1024 /* devOnRender */;
    }
    if (BUILD.hydrateServerSide) {
        try {
            // manually connected child components during server-side hydrate
            serverSideConnected(elm);
            if (isInitialLoad) {
                // using only during server-side hydrate
                if (hostRef.$cmpMeta$.$flags$ & 1 /* shadowDomEncapsulation */) {
                    elm['s-en'] = '';
                }
                else if (hostRef.$cmpMeta$.$flags$ & 2 /* scopedCssEncapsulation */) {
                    elm['s-en'] = 'c';
                }
            }
        }
        catch (e) {
            consoleError(e, elm);
        }
    }
    if (BUILD.asyncLoading && rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    if (BUILD.asyncLoading) {
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
    else {
        postUpdateComponent(hostRef);
    }
};
const callRender = (hostRef, instance, elm) => {
    // in order for bundlers to correctly treeshake the BUILD object
    // we need to ensure BUILD is not deoptimized within a try/catch
    // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
    const allRenderFn = BUILD.allRenderFn ? true : false;
    const lazyLoad = BUILD.lazyLoad ? true : false;
    const taskQueue = BUILD.taskQueue ? true : false;
    const updatable = BUILD.updatable ? true : false;
    try {
        renderingRef = instance;
        instance = allRenderFn ? instance.render() : instance.render && instance.render();
        if (updatable && taskQueue) {
            hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        if (updatable || lazyLoad) {
            hostRef.$flags$ |= 2 /* hasRendered */;
        }
        if (BUILD.hasRenderFn || BUILD.reflect) {
            if (BUILD.vdomRender || BUILD.reflect) {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                if (BUILD.hydrateServerSide) {
                    return Promise.resolve(instance).then((value) => renderVdom(hostRef, value));
                }
                else {
                    renderVdom(hostRef, instance);
                }
            }
            else {
                elm.textContent = instance;
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (BUILD.cmpDidRender) {
        if (BUILD.isDev) {
            hostRef.$flags$ |= 1024 /* devOnRender */;
        }
        safeCall(instance, 'componentDidRender');
        if (BUILD.isDev) {
            hostRef.$flags$ &= ~1024 /* devOnRender */;
        }
    }
    emitLifecycleEvent(elm, 'componentDidRender');
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        if (BUILD.asyncLoading && BUILD.cssAnnotations) {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        if (BUILD.cmpDidLoad) {
            if (BUILD.isDev) {
                hostRef.$flags$ |= 2048 /* devOnDidLoad */;
            }
            safeCall(instance, 'componentDidLoad');
            if (BUILD.isDev) {
                hostRef.$flags$ &= ~2048 /* devOnDidLoad */;
            }
        }
        emitLifecycleEvent(elm, 'componentDidLoad');
        endPostUpdate();
        if (BUILD.asyncLoading) {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad(tagName);
            }
        }
    }
    else {
        if (BUILD.cmpDidUpdate) {
            // we've already loaded this component
            // fire off the user's componentDidUpdate method (if one was provided)
            // componentDidUpdate runs AFTER render() has been called
            // and all child components have finished updating
            if (BUILD.isDev) {
                hostRef.$flags$ |= 1024 /* devOnRender */;
            }
            safeCall(instance, 'componentDidUpdate');
            if (BUILD.isDev) {
                hostRef.$flags$ &= ~1024 /* devOnRender */;
            }
        }
        emitLifecycleEvent(elm, 'componentDidUpdate');
        endPostUpdate();
    }
    if (BUILD.hotModuleReplacement) {
        elm['s-hmr-load'] && elm['s-hmr-load']();
    }
    if (BUILD.method && BUILD.lazyLoad) {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    if (BUILD.asyncLoading) {
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
const forceUpdate = (ref) => {
    if (BUILD.updatable) {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
    return false;
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    if (BUILD.cssAnnotations) {
        addHydratedFlag(doc.documentElement);
    }
    if (BUILD.asyncQueue) {
        plt.$flags$ |= 2 /* appLoaded */;
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
    if (BUILD.profile && performance.measure) {
        performance.measure(`[Stencil] ${NAMESPACE} initial load (by ${who})`, 'st:app:start');
    }
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
const emitLifecycleEvent = (elm, lifecycleName) => {
    if (BUILD.lifecycleDOMEvents) {
        emitEvent(elm, 'stencil_' + lifecycleName, {
            bubbles: true,
            composed: true,
            detail: {
                namespace: NAMESPACE,
            },
        });
    }
};
const addHydratedFlag = (elm) => BUILD.hydratedClass
    ? elm.classList.add('hydrated')
    : BUILD.hydratedAttribute
        ? elm.setAttribute('hydrated', '')
        : undefined;
const serverSideConnected = (elm) => {
    const children = elm.children;
    if (children != null) {
        for (let i = 0, ii = children.length; i < ii; i++) {
            const childElm = children[i];
            if (typeof childElm.connectedCallback === 'function') {
                childElm.connectedCallback();
            }
            serverSideConnected(childElm);
        }
    }
};
const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
    const endHydrate = createTime('hydrateClient', tagName);
    const shadowRoot = hostElm.shadowRoot;
    const childRenderNodes = [];
    const slotNodes = [];
    const shadowRootNodes = BUILD.shadowDom && shadowRoot ? [] : null;
    const vnode = (hostRef.$vnode$ = newVNode(tagName, null));
    if (!plt.$orgLocNodes$) {
        initializeDocumentHydrate(doc.body, (plt.$orgLocNodes$ = new Map()));
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
    childRenderNodes.map((c) => {
        const orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
        const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        const node = c.$elm$;
        if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
            orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
        }
        if (!shadowRoot) {
            node['s-hn'] = tagName;
            if (orgLocationNode) {
                node['s-ol'] = orgLocationNode;
                node['s-ol']['s-nr'] = node;
            }
        }
        plt.$orgLocNodes$.delete(orgLocationId);
    });
    if (BUILD.shadowDom && shadowRoot) {
        shadowRootNodes.map((shadowRootNode) => {
            if (shadowRootNode) {
                shadowRoot.appendChild(shadowRootNode);
            }
        });
    }
    endHydrate();
};
const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
    let childNodeType;
    let childIdSplt;
    let childVNode;
    let i;
    if (node.nodeType === 1 /* ElementNode */) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            // got the node data from the element's attribute
            // `${hostId}.${nodeId}.${depth}.${index}`
            childIdSplt = childNodeType.split('.');
            if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                childVNode = {
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: node.tagName.toLowerCase(),
                    $elm$: node,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $text$: null,
                };
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                // this is a new child vnode
                // so ensure its parent vnode has the vchildren array
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                // add our child vnode to a specific index of the vnode's children
                parentVNode.$children$[childVNode.$index$] = childVNode;
                // this is now the new parent vnode for all the next child checks
                parentVNode = childVNode;
                if (shadowRootNodes && childVNode.$depth$ === '0') {
                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                }
            }
        }
        // recursively drill down, end to start so we can remove nodes
        for (i = node.childNodes.length - 1; i >= 0; i--) {
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
        }
        if (node.shadowRoot) {
            // keep drilling down through the shadow root nodes
            for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
            // comment node for either the host id or a 0 host id
            childNodeType = childIdSplt[0];
            childVNode = {
                $flags$: 0,
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4],
                $elm$: node,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $tag$: null,
                $text$: null,
            };
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = node.nextSibling;
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    // remove the text comment since it's no longer needed
                    node.remove();
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                    if (shadowRootNodes && childVNode.$depth$ === '0') {
                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                    }
                }
            }
            else if (childVNode.$hostId$ === hostId) {
                // this comment node is specifcally for this host id
                if (childNodeType === SLOT_NODE_ID) {
                    // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                    childVNode.$tag$ = 'slot';
                    if (childIdSplt[5]) {
                        node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                    }
                    else {
                        node['s-sn'] = '';
                    }
                    node['s-sr'] = true;
                    if (BUILD.shadowDom && shadowRootNodes) {
                        // browser support shadowRoot and this is a shadow dom component
                        // create an actual slot element
                        childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                        if (childVNode.$name$) {
                            // add the slot name attribute
                            childVNode.$elm$.setAttribute('name', childVNode.$name$);
                        }
                        // insert the new slot element before the slot comment
                        node.parentNode.insertBefore(childVNode.$elm$, node);
                        // remove the slot comment since it's not needed for shadow
                        node.remove();
                        if (childVNode.$depth$ === '0') {
                            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                        }
                    }
                    slotNodes.push(childVNode);
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                else if (childNodeType === CONTENT_REF_ID) {
                    // `${CONTENT_REF_ID}.${hostId}`;
                    if (BUILD.shadowDom && shadowRootNodes) {
                        // remove the content ref comment since it's not needed for shadow
                        node.remove();
                    }
                    else if (BUILD.slotRelocation) {
                        hostElm['s-cr'] = node;
                        node['s-cn'] = true;
                    }
                }
            }
        }
    }
    else if (parentVNode && parentVNode.$tag$ === 'style') {
        const vnode = newVNode(null, node.textContent);
        vnode.$elm$ = node;
        vnode.$index$ = '0';
        parentVNode.$children$ = [vnode];
    }
};
const initializeDocumentHydrate = (node, orgLocNodes) => {
    if (node.nodeType === 1 /* ElementNode */) {
        let i = 0;
        for (; i < node.childNodes.length; i++) {
            initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
        }
        if (node.shadowRoot) {
            for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
                initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        const childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
            node.nodeValue = '';
            // useful to know if the original location is
            // the root light-dom of a shadow dom component
            node['s-en'] = childIdSplt[3];
        }
    }
};
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (BUILD.propBoolean && propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (BUILD.propNumber && propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (BUILD.propString && propType & 1 /* String */) {
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
    const elm = BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if ((!BUILD.lazyLoad || !(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (BUILD.isDev) {
            if (hostRef.$flags$ & 1024 /* devOnRender */) {
                consoleDevWarn(`The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
            }
            else if (hostRef.$flags$ & 2048 /* devOnDidLoad */) {
                consoleDevWarn(`The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
            }
        }
        if (!BUILD.lazyLoad || instance) {
            // get an array of method names of watch functions to call
            if (BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
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
            if (BUILD.updatable &&
                (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                if (BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
                    if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                        return;
                    }
                }
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
    if (BUILD.member && cmpMeta.$members$) {
        if (BUILD.watchCallback && Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((BUILD.prop || BUILD.state) &&
                (memberFlags & 31 /* Prop */ ||
                    ((!BUILD.lazyLoad || flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // only during dev time
                        if (BUILD.isDev) {
                            const ref = getHostRef(this);
                            if (
                            // we are proxying the instance (not element)
                            (flags & 1 /* isElementConstructor */) === 0 &&
                                // the element is not constructing
                                (ref.$flags$ & 8 /* isConstructingInstance */) === 0 &&
                                // the member is a prop
                                (memberFlags & 31 /* Prop */) !== 0 &&
                                // the member is not mutable
                                (memberFlags & 1024 /* Mutable */) === 0) {
                                consoleDevWarn(`@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`);
                            }
                        }
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (BUILD.lazyLoad &&
                BUILD.method &&
                flags & 1 /* isElementConstructor */ &&
                memberFlags & 64 /* Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if (BUILD.observeAttribute && (!BUILD.lazyLoad || flags & 1 /* isElementConstructor */)) {
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
                if (BUILD.reflect && m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((BUILD.lazyLoad || BUILD.hydrateServerSide || BUILD.style) &&
        (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        if (BUILD.lazyLoad || BUILD.hydrateClientSide) {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime(`st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`, `[Stencil] Load module for <${cmpMeta.$tagName$}>`);
                Cstr = await Cstr;
                endLoad();
            }
            if ((BUILD.isDev || BUILD.isDebug) && !Cstr) {
                throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
            }
            if (BUILD.member && !Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                if (BUILD.watchCallback) {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            if (BUILD.member) {
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
            if (BUILD.member) {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            if (BUILD.watchCallback) {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        else {
            // sync constructor component
            Cstr = elm.constructor;
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // wait for the CustomElementRegistry to mark the component as ready before setting `isWatchReady`. Otherwise,
            // watchers may fire prematurely if `customElements.get()`/`customElements.whenDefined()` resolves _before_
            // Stencil has completed instantiating the component.
            customElements.whenDefined(cmpMeta.$tagName$).then(() => (hostRef.$flags$ |= 128 /* isWatchReady */));
        }
        if (BUILD.style && Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            if (BUILD.mode && typeof style !== 'string') {
                style = style[(hostRef.$modeName$ = computeMode(elm))];
                if (BUILD.hydrateServerSide && hostRef.$modeName$) {
                    elm.setAttribute('s-mode', hostRef.$modeName$);
                }
            }
            const scopeId = getScopeId(cmpMeta, hostRef.$modeName$);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                if (!BUILD.hydrateServerSide &&
                    BUILD.shadowDom &&
                    BUILD.shadowDomShim &&
                    cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
                    style = await import('./shadow-css-c1fdfa9f.js').then((m) => m.scopeCss(style, scopeId, false));
                }
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (BUILD.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
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
const fireConnectedCallback = (instance) => {
    if (BUILD.lazyLoad && BUILD.connectedCallback) {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (BUILD.hostListenerTargetParent) {
            // only run if we have listeners being attached to a parent
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            let hostId;
            if (BUILD.hydrateClientSide) {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    if (BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        const scopeId = BUILD.mode
                            ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode'))
                            : addStyle(elm.shadowRoot, cmpMeta);
                        elm.classList.remove(scopeId + '-h', scopeId + '-s');
                    }
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
                }
            }
            if (BUILD.slotRelocation && !hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (BUILD.hydrateServerSide ||
                    ((BUILD.slot || BUILD.shadowDom) &&
                        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            if (BUILD.asyncLoading) {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((BUILD.hydrateClientSide &&
                        ancestorComponent.nodeType === 1 /* ElementNode */ &&
                        ancestorComponent.hasAttribute('s-id') &&
                        ancestorComponent['s-p']) ||
                        ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (BUILD.prop && !BUILD.hydrateServerSide && cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            if (BUILD.initializeNextTick) {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
            else {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(BUILD.isDebug ? `content-ref (host=${elm.localName})` : ''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
        if (BUILD.hostListener) {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (BUILD.cssVarShim && plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
        if (BUILD.lazyLoad && BUILD.disconnectedCallback) {
            safeCall(instance, 'disconnectedCallback');
        }
        if (BUILD.cmpDidUnload) {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
const defineCustomElement = (Cstr, compactMeta) => {
    customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
};
const proxyCustomElement = (Cstr, compactMeta) => {
    const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
    };
    if (BUILD.member) {
        cmpMeta.$members$ = compactMeta[2];
    }
    if (BUILD.hostListener) {
        cmpMeta.$listeners$ = compactMeta[3];
    }
    if (BUILD.watchCallback) {
        cmpMeta.$watchers$ = Cstr.$watchers$;
    }
    if (BUILD.reflect) {
        cmpMeta.$attrsToReflect$ = [];
    }
    if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
        cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
    }
    const originalConnectedCallback = Cstr.prototype.connectedCallback;
    const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
    Object.assign(Cstr.prototype, {
        __registerHost() {
            registerHost(this, cmpMeta);
        },
        connectedCallback() {
            connectedCallback(this);
            if (BUILD.connectedCallback && originalConnectedCallback) {
                originalConnectedCallback.call(this);
            }
        },
        disconnectedCallback() {
            disconnectedCallback(this);
            if (BUILD.disconnectedCallback && originalDisconnectedCallback) {
                originalDisconnectedCallback.call(this);
            }
        },
    });
    Cstr.is = cmpMeta.$tagName$;
    return proxyComponent(Cstr, cmpMeta, 1 /* isElementConstructor */ | 2 /* proxyState */);
};
const forceModeUpdate = (elm) => {
    if (BUILD.style && BUILD.mode && !BUILD.lazyLoad) {
        const mode = computeMode(elm);
        const hostRef = getHostRef(elm);
        if (hostRef.$modeName$ !== mode) {
            const cmpMeta = hostRef.$cmpMeta$;
            const oldScopeId = elm['s-sc'];
            const scopeId = getScopeId(cmpMeta, mode);
            const style = elm.constructor.style[mode];
            const flags = cmpMeta.$flags$;
            if (style) {
                if (!styles.has(scopeId)) {
                    registerStyle(scopeId, style, !!(flags & 1 /* shadowDomEncapsulation */));
                }
                hostRef.$modeName$ = mode;
                elm.classList.remove(oldScopeId + '-h', oldScopeId + '-s');
                attachStyles(hostRef);
                forceUpdate(elm);
            }
        }
    }
};
const attachShadow = (el) => {
    if (supportsShadow) {
        el.attachShadow({ mode: 'open' });
    }
    else {
        el.shadowRoot = el;
    }
};
const hmrStart = (elm, cmpMeta, hmrVersionId) => {
    // ¯\_(ツ)_/¯
    const hostRef = getHostRef(elm);
    // reset state flags to only have been connected
    hostRef.$flags$ = 1 /* hasConnected */;
    // TODO
    // detatch any event listeners that may have been added
    // because we're not passing an exact event name it'll
    // remove all of this element's event, which is good
    // create a callback for when this component finishes hmr
    elm['s-hmr-load'] = () => {
        // finished hmr for this element
        delete elm['s-hmr-load'];
    };
    // re-initialize the component
    initializeComponent(elm, hostRef, cmpMeta, hmrVersionId);
};
const patchCloneNode = (HostElementPrototype) => {
    const orgCloneNode = HostElementPrototype.cloneNode;
    HostElementPrototype.cloneNode = function (deep) {
        const srcNode = this;
        const isShadowDom = BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
        const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
        if (BUILD.slot && !isShadowDom && deep) {
            let i = 0;
            let slotted, nonStencilNode;
            let stencilPrivates = [
                's-id',
                's-cr',
                's-lr',
                's-rc',
                's-sc',
                's-p',
                's-cn',
                's-sr',
                's-sn',
                's-hn',
                's-ol',
                's-nr',
                's-si',
            ];
            for (; i < srcNode.childNodes.length; i++) {
                slotted = srcNode.childNodes[i]['s-nr'];
                nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i][privateField]);
                if (slotted) {
                    if (BUILD.appendChildSlotFix && clonedNode.__appendChild) {
                        clonedNode.__appendChild(slotted.cloneNode(true));
                    }
                    else {
                        clonedNode.appendChild(slotted.cloneNode(true));
                    }
                }
                if (nonStencilNode) {
                    clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};
const patchSlotAppendChild = (HostElementPrototype) => {
    HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
    HostElementPrototype.appendChild = function (newChild) {
        const slotName = (newChild['s-sn'] = getSlotName(newChild));
        const slotNode = getHostSlotNode(this.childNodes, slotName);
        if (slotNode) {
            const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
            const appendAfter = slotChildNodes[slotChildNodes.length - 1];
            return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
        }
        return this.__appendChild(newChild);
    };
};
/**
 * Patches the text content of an unnamed slotted node inside a scoped component
 * @param hostElementPrototype the `Element` to be patched
 * @param cmpMeta component runtime metadata used to determine if the component should be patched or not
 */
const patchTextContent = (hostElementPrototype, cmpMeta) => {
    if (BUILD.scoped && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
        const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
        Object.defineProperty(hostElementPrototype, '__textContent', descriptor);
        Object.defineProperty(hostElementPrototype, 'textContent', {
            get() {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ be found in the next sibling (text) node, depending on how
                // nodes were reordered during the vdom render. first try to get the text content from the sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* TEXT_NODE */) {
                    return slotNode.nextSibling.textContent;
                }
                else if (slotNode) {
                    return slotNode.textContent;
                }
                else {
                    // fallback to the original implementation
                    return this.__textContent;
                }
            },
            set(value) {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ need to be placed in the next sibling (text) node,
                // depending on how nodes were reordered during the vdom render. first try to set the text content on the
                // sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* TEXT_NODE */) {
                    slotNode.nextSibling.textContent = value;
                }
                else if (slotNode) {
                    slotNode.textContent = value;
                }
                else {
                    // we couldn't find a slot, but that doesn't mean that there isn't one. if this check ran before the DOM
                    // loaded, we could have missed it. check for a content reference element on the scoped component and insert
                    // it there
                    this.__textContent = value;
                    const contentRefElm = this['s-cr'];
                    if (contentRefElm) {
                        this.insertBefore(contentRefElm, this.firstChild);
                    }
                }
            },
        });
    }
};
const patchChildSlotNodes = (elm, cmpMeta) => {
    class FakeNodeList extends Array {
        item(n) {
            return this[n];
        }
    }
    if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
        const childNodesFn = elm.__lookupGetter__('childNodes');
        Object.defineProperty(elm, 'children', {
            get() {
                return this.childNodes.map((n) => n.nodeType === 1);
            },
        });
        Object.defineProperty(elm, 'childElementCount', {
            get() {
                return elm.children.length;
            },
        });
        Object.defineProperty(elm, 'childNodes', {
            get() {
                const childNodes = childNodesFn.call(this);
                if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0 &&
                    getHostRef(this).$flags$ & 2 /* hasRendered */) {
                    const result = new FakeNodeList();
                    for (let i = 0; i < childNodes.length; i++) {
                        const slot = childNodes[i]['s-nr'];
                        if (slot) {
                            result.push(slot);
                        }
                    }
                    return result;
                }
                return FakeNodeList.from(childNodes);
            },
        });
    }
};
const getSlotName = (node) => node['s-sn'] || (node.nodeType === 1 && node.getAttribute('slot')) || '';
/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */
const getHostSlotNode = (childNodes, slotName) => {
    let i = 0;
    let childNode;
    for (; i < childNodes.length; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
            return childNode;
        }
        childNode = getHostSlotNode(childNode.childNodes, slotName);
        if (childNode) {
            return childNode;
        }
    }
    return null;
};
const getHostSlotChildNodes = (n, slotName) => {
    const childNodes = [n];
    while ((n = n.nextSibling) && n['s-sn'] === slotName) {
        childNodes.push(n);
    }
    return childNodes;
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    if (BUILD.profile && performance.mark) {
        performance.mark('st:app:start');
    }
    installDevTools();
    const endBootstrap = createTime('bootstrapLazy');
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    const styles = /*@__PURE__*/ doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
    let appLoadFallback;
    let isBootstrapping = true;
    let i = 0;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (BUILD.asyncQueue) {
        if (options.syncQueue) {
            plt.$flags$ |= 4 /* queueSync */;
        }
    }
    if (BUILD.hydrateClientSide) {
        // If the app is already hydrated there is not point to disable the
        // async queue. This will improve the first input delay
        plt.$flags$ |= 2 /* appLoaded */;
    }
    if (BUILD.hydrateClientSide && BUILD.shadowDom) {
        for (; i < styles.length; i++) {
            registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
        }
    }
    lazyBundles.map((lazyBundle) => lazyBundle[1].map((compactMeta) => {
        const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        if (BUILD.member) {
            cmpMeta.$members$ = compactMeta[2];
        }
        if (BUILD.hostListener) {
            cmpMeta.$listeners$ = compactMeta[3];
        }
        if (BUILD.reflect) {
            cmpMeta.$attrsToReflect$ = [];
        }
        if (BUILD.watchCallback) {
            cmpMeta.$watchers$ = {};
        }
        if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        const tagName = BUILD.transformTagName && options.transformTagName
            ? options.transformTagName(cmpMeta.$tagName$)
            : cmpMeta.$tagName$;
        const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
                // @ts-ignore
                super(self);
                self = this;
                registerHost(self, cmpMeta);
                if (BUILD.shadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    // adding the shadow root build conditionals to minimize runtime
                    if (supportsShadow) {
                        if (BUILD.shadowDelegatesFocus) {
                            self.attachShadow({
                                mode: 'open',
                                delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */),
                            });
                        }
                        else {
                            self.attachShadow({ mode: 'open' });
                        }
                    }
                    else if (!BUILD.hydrateServerSide && !('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                if (BUILD.slotChildNodesFix) {
                    patchChildSlotNodes(self, cmpMeta);
                }
            }
            connectedCallback() {
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                if (isBootstrapping) {
                    // connectedCallback will be processed once all components have been registered
                    deferredConnectedCallbacks.push(this);
                }
                else {
                    plt.jmp(() => connectedCallback(this));
                }
            }
            disconnectedCallback() {
                plt.jmp(() => disconnectedCallback(this));
            }
            componentOnReady() {
                return getHostRef(this).$onReadyPromise$;
            }
        };
        if (BUILD.cloneNodeFix) {
            patchCloneNode(HostElement.prototype);
        }
        if (BUILD.appendChildSlotFix) {
            patchSlotAppendChild(HostElement.prototype);
        }
        if (BUILD.hotModuleReplacement) {
            HostElement.prototype['s-hmr'] = function (hmrVersionId) {
                hmrStart(this, cmpMeta, hmrVersionId);
            };
        }
        if (BUILD.scopedSlotTextContentFix) {
            patchTextContent(HostElement.prototype, cmpMeta);
        }
        cmpMeta.$lazyBundleId$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }));
    if (BUILD.invisiblePrehydration && (BUILD.hydratedClass || BUILD.hydratedAttribute)) {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        if (BUILD.profile) {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30, 'timeout')));
        }
        else {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const setAssetPath = (path) => (plt.$resourcesUrl$ = path);
const getConnect = (_ref, tagName) => {
    const componentOnReady = () => {
        let elm = doc.querySelector(tagName);
        if (!elm) {
            elm = doc.createElement(tagName);
            doc.body.appendChild(elm);
        }
        return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
    };
    const create = (...args) => {
        return componentOnReady().then((el) => el.create(...args));
    };
    return {
        create,
        componentOnReady,
    };
};
const getContext = (_elm, context) => {
    if (context in Context) {
        return Context[context];
    }
    else if (context === 'window') {
        return win;
    }
    else if (context === 'document') {
        return doc;
    }
    else if (context === 'isServer' || context === 'isPrerender') {
        return BUILD.hydrateServerSide ? true : false;
    }
    else if (context === 'isClient') {
        return BUILD.hydrateServerSide ? false : true;
    }
    else if (context === 'resourcesUrl' || context === 'publicPath') {
        return getAssetPath('.');
    }
    else if (context === 'queue') {
        return {
            write: writeTask,
            read: readTask,
            tick: {
                then(cb) {
                    return nextTick(cb);
                },
            },
        };
    }
    return undefined;
};
const insertVdomAnnotations = (doc, staticComponents) => {
    if (doc != null) {
        const docData = {
            hostIds: 0,
            rootLevelIds: 0,
            staticComponents: new Set(staticComponents),
        };
        const orgLocationNodes = [];
        parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
        orgLocationNodes.forEach((orgLocationNode) => {
            if (orgLocationNode != null) {
                const nodeRef = orgLocationNode['s-nr'];
                let hostId = nodeRef['s-host-id'];
                let nodeId = nodeRef['s-node-id'];
                let childId = `${hostId}.${nodeId}`;
                if (hostId == null) {
                    hostId = 0;
                    docData.rootLevelIds++;
                    nodeId = docData.rootLevelIds;
                    childId = `${hostId}.${nodeId}`;
                    if (nodeRef.nodeType === 1 /* ElementNode */) {
                        nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                    }
                    else if (nodeRef.nodeType === 3 /* TextNode */) {
                        if (hostId === 0) {
                            const textContent = nodeRef.nodeValue.trim();
                            if (textContent === '') {
                                // useless whitespace node at the document root
                                orgLocationNode.remove();
                                return;
                            }
                        }
                        const commentBeforeTextNode = doc.createComment(childId);
                        commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
                        nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                    }
                }
                let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
                const orgLocationParentNode = orgLocationNode.parentElement;
                if (orgLocationParentNode) {
                    if (orgLocationParentNode['s-en'] === '') {
                        // ending with a "." means that the parent element
                        // of this node's original location is a SHADOW dom element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.`;
                    }
                    else if (orgLocationParentNode['s-en'] === 'c') {
                        // ending with a ".c" means that the parent element
                        // of this node's original location is a SCOPED element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.c`;
                    }
                }
                orgLocationNode.nodeValue = orgLocationNodeId;
            }
        });
    }
};
const parseVNodeAnnotations = (doc, node, docData, orgLocationNodes) => {
    if (node == null) {
        return;
    }
    if (node['s-nr'] != null) {
        orgLocationNodes.push(node);
    }
    if (node.nodeType === 1 /* ElementNode */) {
        node.childNodes.forEach((childNode) => {
            const hostRef = getHostRef(childNode);
            if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
                const cmpData = {
                    nodeIds: 0,
                };
                insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
            }
            parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
        });
    }
};
const insertVNodeAnnotations = (doc, hostElm, vnode, docData, cmpData) => {
    if (vnode != null) {
        const hostId = ++docData.hostIds;
        hostElm.setAttribute(HYDRATE_ID, hostId);
        if (hostElm['s-cr'] != null) {
            hostElm['s-cr'].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
        }
        if (vnode.$children$ != null) {
            const depth = 0;
            vnode.$children$.forEach((vnodeChild, index) => {
                insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
            });
        }
        if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute('c-id')) {
            const parent = hostElm.parentElement;
            if (parent && parent.childNodes) {
                const parentChildNodes = Array.from(parent.childNodes);
                const comment = parentChildNodes.find((node) => node.nodeType === 8 /* CommentNode */ && node['s-sr']);
                if (comment) {
                    const index = parentChildNodes.indexOf(hostElm) - 1;
                    vnode.$elm$.setAttribute(HYDRATE_CHILD_ID, `${comment['s-host-id']}.${comment['s-node-id']}.0.${index}`);
                }
            }
        }
    }
};
const insertChildVNodeAnnotations = (doc, vnodeChild, cmpData, hostId, depth, index) => {
    const childElm = vnodeChild.$elm$;
    if (childElm == null) {
        return;
    }
    const nodeId = cmpData.nodeIds++;
    const childId = `${hostId}.${nodeId}.${depth}.${index}`;
    childElm['s-host-id'] = hostId;
    childElm['s-node-id'] = nodeId;
    if (childElm.nodeType === 1 /* ElementNode */) {
        childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    }
    else if (childElm.nodeType === 3 /* TextNode */) {
        const parentNode = childElm.parentNode;
        const nodeName = parentNode.nodeName;
        if (nodeName !== 'STYLE' && nodeName !== 'SCRIPT') {
            const textNodeId = `${TEXT_NODE_ID}.${childId}`;
            const commentBeforeTextNode = doc.createComment(textNodeId);
            parentNode.insertBefore(commentBeforeTextNode, childElm);
        }
    }
    else if (childElm.nodeType === 8 /* CommentNode */) {
        if (childElm['s-sr']) {
            const slotName = childElm['s-sn'] || '';
            const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
            childElm.nodeValue = slotNodeId;
        }
    }
    if (vnodeChild.$children$ != null) {
        const childDepth = depth + 1;
        vnodeChild.$children$.forEach((vnode, index) => {
            insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
        });
    }
};
const setPlatformOptions = (opts) => Object.assign(plt, opts);
const Fragment = (_, children) => children;
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    if (BUILD.isDev) {
        hostRef.$renderCount$ = 0;
    }
    if (BUILD.method && BUILD.lazyLoad) {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    if (BUILD.asyncLoading) {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (customError || console.error)(e, el);
const STENCIL_DEV_MODE = BUILD.isTesting
    ? ['STENCIL:'] // E2E testing
    : [
        '%cstencil',
        'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
    ];
const consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);
const consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);
const consoleDevInfo = (...m) => console.info(...STENCIL_DEV_MODE, ...m);
const setErrorHandler = (handler) => (customError = handler);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    if (BUILD.isDev && typeof bundleId !== 'string') {
        consoleDevError(`Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`);
        return undefined;
    }
    const module = !BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
    if (module) {
        return module[exportName];
    }
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${BUILD.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : ''}`).then((importedModule) => {
        if (!BUILD.hotModuleReplacement) {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const modeResolutionChain = [];
const queueDomReads = [];
const queueDomWrites = [];
const queueDomWritesLow = [];
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
const consumeTimeout = (queue, timeout) => {
    let i = 0;
    let ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
const flush = () => {
    if (BUILD.asyncQueue) {
        queueCongestion++;
    }
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    if (BUILD.asyncQueue) {
        const timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
            ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0))
            : Infinity;
        consumeTimeout(queueDomWrites, timeout);
        consumeTimeout(queueDomWritesLow, timeout);
        if (queueDomWrites.length > 0) {
            queueDomWritesLow.push(...queueDomWrites);
            queueDomWrites.length = 0;
        }
        if ((queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
        else {
            queueCongestion = 0;
        }
    }
    else {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
const Build = {
    isDev: BUILD.isDev ? true : false,
    isBrowser: true,
    isServer: false,
    isTesting: BUILD.isTesting ? true : false,
};

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$3;function r$1(){setAssetPath(T$1(a$5(e$3)));}e$3="components/assets";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$2=Symbol("widget"),r=[],n$1={},o$2=new WeakMap;function i(e,t){let o=t.children;if(o&&o.length)for(let r=0;r<o.length;++r)o[r]=i(e,o[r]);else o=r;const s=t.vnodeSelector;if(c(s)){const r=t.properties||n$1,i=r.key||s;return {vnodeSelector:"div",properties:{key:i,afterCreate:d,afterUpdate:a,afterRemoved:l,parentWidget:e,widgetConstructor:s,widgetProperties:{...r,key:i,children:o}},children:void 0,text:void 0,domNode:null}}return t}function d(t,r,n,{parentWidget:i,widgetConstructor:d,widgetProperties:a}){const c=new d(a);c.container=t,o$2.set(t,c),null==c.afterCreate||c.afterCreate(c,t),i._internalHandles.add(n$r((()=>l(t))));}function a(e,t,r,{widgetProperties:n}){const i=o$2.get(e);i&&(i.set(n),null==i.afterUpdate||i.afterUpdate(i,e));}function l(e){const t=o$2.get(e);t&&(t.destroy(),o$2.delete(e));}function c(e){return "function"==typeof e&&e[t$2]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const P="esri.widgets.Widget",E=s$s.getLogger(P);let L=0;const N=new Map,I={widgetIcon:"esri-icon-checkbox-unchecked"};function F(e,t){for(const r in t)null!=e[r]&&("object"==typeof e[r]&&"object"==typeof t[r]?F(e[r],t[r]):e[r]=t[r]);return e}const U=s({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,s,o,i)=>{const n=t(e,s,o,i),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in o)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>n.call(o,e);o.addEventListener(t,r,a);const s=()=>o.removeEventListener(t,r,a),d=i.afterRemoved;i.afterRemoved=e=>{null==d||d(e),s();};}return n};},handleInterceptedEvent(e,t,r,s){const{eventPhase:o,type:i}=s,n=o===Event.CAPTURING_PHASE;let a=`on${i}${n?"capture":""}`;const d=t.properties;(a in d||(a=`on${i[0].toUpperCase()}${i.slice(1)}${n?"Capture":""}`,a in d))&&(N.clear(),e.scheduleRender(),d[a].call(d.bind||r,s));}});let $=!1,x=class extends(n$7(n$9.EventedAccessor)){constructor(e,r){super(e,r),this._attached=!1,this._internalHandles=new u$2,this._projector=U,this._readyForTrueRender=!1,this.domNode=null,this.iconClass=I.widgetIcon,this.label=this.declaredClass.split(".").pop(),this.visible=!0,this.key=this,this._loadLocale=z$4((async()=>{if(this._messageBundleProps&&this._messageBundleProps.length){const e=await T$2(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{let r=await u$b(e);this.uiStrings&&Object.keys(this.uiStrings)&&(r=F(l$k(r),this.uiStrings)),this[t]=r;})));for(const t of e)t.error&&E.error("widget-intl:locale-error",this.declaredClass,t.error);}await this.loadLocale();})),r$1();const s=["light","dark"],n=b$1()||"light";s.includes(n)||s$8(E,"The following themes are deprecated: light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, and dark-red.",{version:"4.19",warnOnce:!0,see:"https://developers.arcgis.com/javascript/latest/styling/"});const a="esri-widget-uid-"+o$8(),d=this.render.bind(this);this._trackingTarget=new s$4((()=>this.scheduleRender()));const c$1=()=>{var e;if(!this._readyForTrueRender||this.destroyed)return null;if(!this.visible)return {vnodeSelector:"div",properties:{key:a,class:"",styles:{display:"none"}},domNode:void 0,children:void 0,text:void 0};const t=d();let{properties:r}=t;r||(t.properties=r={});let{key:s,styles:o}=r;s||(r.key=a),o||(r.styles=o={}),o.display||(o.display="");let i$1=0;return null==(e=t.children)||e.forEach((e=>{if(c(e.vnodeSelector))return;let{properties:t}=e;t||(e.properties=t={}),t.key||(t.key=`${this.id}--${i$1++}`);})),i(this,t)};this.render=()=>{if($)return c$1();let e=N.get(this);if(e)return e;this._trackingTarget.clear(),$=!0;try{e=a$j(this._trackingTarget,c$1);}finally{$=!1;}return N.set(this,e),e},this.addResolvingPromise(this._resourcesFetch=this.beforeFirstRender().then((()=>{this._readyForTrueRender=!0,this._postInitialize();})));}normalizeCtorArgs(e,t){const r={...e};return t&&(r.container=t),r}postInitialize(){}beforeFirstRender(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then((()=>{})).catch(w$6)}async loadDependencies(){}async loadLocale(){}destroy(){this.destroyed||(this._trackingTarget=l$n(this._trackingTarget),this.viewModel=l$n(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,N.delete(this));}set container(e){this._get("container")||this._set("container",e);}castContainer(e){return e$e(e)}get id(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+L++}set id(e){e&&this._set("id",e);}get renderable(){return this._resourcesFetch}get test(){return {projector:this._projector,handles:this._internalHandles}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(N.delete(this),this._projector.scheduleRender());}classes(...e){return l$2.apply(this,e)}own(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._internalHandles.add(e);}renderNow(){N.delete(this),this._projector.renderNow();}_postInitialize(){var e;if(this.destroyed)return;this.scheduleRender(),null!=(e=this._delegatedEventNames)&&e.length&&this._internalHandles.add(i$6(this,"viewModel",((e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&this._internalHandles.add(this._delegatedEventNames.map((t=>e.on(t,(e=>{this.emit(t,e);})))),"delegated-events");}))),this.postInitialize();const t=async()=>{await this._loadLocale().catch(w$6),this.scheduleRender();};this._internalHandles.add([g$a(t),this.watch("uiStrings",t),a$3(this,"container",(async e=>{this.destroyed||this._attach(e);}))]);}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0);}_detach(e){e&&this._attached&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e),this._attached=!1);}};x[t$2]=!0,e$w([d$i()],x.prototype,"_readyForTrueRender",void 0),e$w([d$i({value:null})],x.prototype,"container",null),e$w([c$3("container")],x.prototype,"castContainer",null),e$w([d$i({aliasOf:"container"})],x.prototype,"domNode",void 0),e$w([d$i()],x.prototype,"iconClass",void 0),e$w([d$i()],x.prototype,"id",null),e$w([d$i()],x.prototype,"label",void 0),e$w([d$i()],x.prototype,"renderable",null),e$w([d$i()],x.prototype,"uiStrings",void 0),e$w([d$i()],x.prototype,"viewModel",void 0),e$w([d$i()],x.prototype,"visible",void 0),e$w([d$i()],x.prototype,"key",void 0),e$w([d$i()],x.prototype,"children",void 0),e$w([d$i()],x.prototype,"afterCreate",void 0),e$w([d$i()],x.prototype,"afterUpdate",void 0),e$w([d$i()],x.prototype,"afterRemoved",void 0),x=e$w([i$l(P)],x);const z=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(){return function(n,t){if(!n[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`);return {value:o$1(n[t])}}}function e$2(n){const{type:t}=n;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function o$1(t){return function(o,...r){e$2(o)?y$1(o.key)&&(o.preventDefault(),o.stopPropagation(),o.target.click()):t.call(this,o,...r);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(e){return function(s,n){s.hasOwnProperty("_messageBundleProps")||(s._messageBundleProps=s._messageBundleProps?s._messageBundleProps.slice():[]);s._messageBundleProps.push({bundlePath:e,propertyName:n});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e=function(r){return {vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}},o=function(r,t){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?o(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=e(d)),t.push(d));}},t=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return {vnodeSelector:r,properties:e||void 0,children:void 0,text:t[0],domNode:null};var i=[];return o(t,i),{vnodeSelector:r,properties:e||void 0,children:i,text:void 0,domNode:null}};function n(e,o,...n){return "function"!=typeof e||c(e)?t(e,o,...n):e(o,...n)}

export { $$1 as $, s$d as A, i$k as B, s$k as C, L$6 as D, g$1 as E, n$l as F, u$d as G, m$a as H, S$1 as I, r$f as J, l$m as K, L$1 as L, l$k as M, C$5 as N, O, u$b as P, g$a as Q, N$5 as R, S$4 as S, T$3 as T, n$7 as U, n$8 as V, b$8 as W, o$l as X, l$n as Y, b$7 as Z, o$z as _, d$i as a, s$i as a$, U$4 as a0, D$2 as a1, P$4 as a2, E$3 as a3, u$i as a4, u$l as a5, v$5 as a6, y$c as a7, r$n as a8, S$5 as a9, m$9 as aA, P$3 as aB, V$2 as aC, e$9 as aD, u$o as aE, c$p as aF, e$u as aG, n$u as aH, d$d as aI, r$b as aJ, q$5 as aK, e$o as aL, t$c as aM, n$f as aN, v$c as aO, F$3 as aP, l$4 as aQ, z$4 as aR, g$8 as aS, gt as aT, Ut as aU, $$3 as aV, T$2 as aW, v$b as aX, s$p as aY, o$n as aZ, a$g as a_, a$m as aa, s$g as ab, t$q as ac, O$2 as ad, s$r as ae, c$m as af, T$1 as ag, W$1 as ah, Q$1 as ai, xt as aj, z$3 as ak, G$1 as al, E$4 as am, x$5 as an, X$1 as ao, v$7 as ap, j$6 as aq, t$k as ar, m$3 as as, t$p as at, r$d as au, h$a as av, n$k as aw, t$f as ax, r$e as ay, p$b as az, e$1 as b, o$f as b$, u$m as b0, c$7 as b1, ht as b2, e$q as b3, a$7 as b4, d$k as b5, r$k as b6, e$v as b7, a$5 as b8, s$a as b9, E$5 as bA, M$4 as bB, A$7 as bC, n$s as bD, o$C as bE, s$3 as bF, s$u as bG, a$3 as bH, o$i as bI, n$c as bJ, m$2 as bK, k$1 as bL, o$d as bM, et as bN, y$a as bO, e$d as bP, q$4 as bQ, e$b as bR, U$5 as bS, j$5 as bT, w$1 as bU, o$y as bV, bt as bW, B$4 as bX, b$6 as bY, A$6 as bZ, C$2 as b_, k$6 as ba, m$j as bb, y$f as bc, E$6 as bd, A$c as be, s$v as bf, A$3 as bg, e$g as bh, n$r as bi, n$d as bj, g$2 as bk, Rt as bl, i$e as bm, v$2 as bn, l$2 as bo, i$2 as bp, t$b as bq, p$2 as br, E$1 as bs, s$c as bt, L$5 as bu, h$3 as bv, f$1 as bw, t$e as bx, r$c as by, A$4 as bz, s$8 as c, pt as c0, f$8 as c1, C$3 as c2, h$j as c3, g$f as c4, y$5 as c5, g$g as c6, qt as c7, F$4 as c8, u$s as c9, o$8 as cA, v$a as cB, T$4 as cC, s$o as cD, u$p as cE, N$2 as cF, M$2 as cG, w$5 as cH, r$9 as cI, f$k as cJ, e$s as cK, t$g as cL, H$2 as cM, r$m as cN, request as cO, b$a as ca, w$9 as cb, t$s as cc, m$i as cd, n$v as ce, p$3 as cf, m$h as cg, w$6 as ch, d$m as ci, v$d as cj, o$A as ck, t$r as cl, rt as cm, ut as cn, i$v as co, s$t as cp, i$x as cq, a$o as cr, wt as cs, Build as ct, getAssetPath as cu, attachShadow as cv, h as cw, Host as cx, proxyCustomElement as cy, createEvent as cz, d$6 as d, e$w as e, s$s as f, c$3 as g, i$6 as h, i$l as i, i$a as j, u$1 as k, t$t as l, e$e as m, n, o$r as o, p$5 as p, d$5 as q, r$p as r, s$w as s, t$1 as t, u$2 as u, f$2 as v, i$g as w, n$9 as x, y$1 as y, z };
