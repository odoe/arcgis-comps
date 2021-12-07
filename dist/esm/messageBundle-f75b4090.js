import { N as NAMESPACE } from './index-b157fcf2.js';

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
var a$t,d$q;let r$s;var o$E,i$B;null!=(a$t=e$v.dojoConfig)&&a$t.has||null!=(d$q=e$v.esriConfig)&&d$q.has?r$s={...null==(o$E=e$v.dojoConfig)?void 0:o$E.has,...null==(i$B=e$v.esriConfig)?void 0:i$B.has}:r$s={};function s$z(a){return "function"==typeof r$s[a]?r$s[a]=r$s[a](e$v):r$s[a]}s$z.add=(e,a,d,o)=>((o||void 0===r$s[e])&&(r$s[e]=a),d&&s$z(e)),s$z.cache=r$s,s$z.add("esri-deprecation-warnings",!0),(()=>{s$z.add("host-webworker",void 0!==e$v.WorkerGlobalScope&&self instanceof e$v.WorkerGlobalScope);const a="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(s$z.add("host-browser",a),s$z.add("host-node","object"==typeof e$v.process&&e$v.process.versions&&e$v.process.versions.node&&e$v.process.versions.v8),s$z.add("dom",a),s$z("host-browser")){const e=navigator,a=e.userAgent,d=e.appVersion,r=parseFloat(d);if(s$z.add("wp",parseFloat(a.split("Windows Phone")[1])||void 0),s$z.add("msapp",parseFloat(a.split("MSAppHost/")[1])||void 0),s$z.add("khtml",d.includes("Konqueror")?r:void 0),s$z.add("edge",parseFloat(a.split("Edge/")[1])||void 0),s$z.add("opr",parseFloat(a.split("OPR/")[1])||void 0),s$z.add("webkit",!s$z("wp")&&!s$z("edge")&&parseFloat(a.split("WebKit/")[1])||void 0),s$z.add("chrome",!s$z("edge")&&!s$z("opr")&&parseFloat(a.split("Chrome/")[1])||void 0),s$z.add("android",!s$z("wp")&&parseFloat(a.split("Android ")[1])||void 0),s$z.add("safari",!d.includes("Safari")||s$z("wp")||s$z("chrome")||s$z("android")||s$z("edge")||s$z("opr")?void 0:parseFloat(d.split("Version/")[1])),s$z.add("mac",d.includes("Macintosh")),!s$z("wp")&&a.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),d=a.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(d.replace(/_/,".").replace(/_/g,""));s$z.add(e,r),s$z.add("ios",r);}s$z.add("trident",parseFloat(d.split("Trident/")[1])||void 0),s$z("webkit")||(!a.includes("Gecko")||s$z("wp")||s$z("khtml")||s$z("trident")||s$z("edge")||s$z.add("mozilla",r),s$z("mozilla")&&s$z.add("ff",parseFloat(a.split("Firefox/")[1]||a.split("Minefield/")[1])||void 0));}})(),(()=>{if(e$v.navigator){const e=navigator.userAgent,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),d=/iPhone/i.test(e);a&&s$z.add("esri-mobile",a),d&&s$z.add("esri-iPhone",d),s$z.add("esri-geolocation",!!navigator.geolocation);}s$z.add("esri-canvas-svg-support",!s$z("trident")),s$z.add("esri-wasm","WebAssembly"in e$v),s$z.add("esri-shared-array-buffer",(()=>{const a="SharedArrayBuffer"in e$v,d=!1===e$v.crossOriginIsolated;return a&&!d})),s$z.add("esri-atomics","Atomics"in e$v),s$z.add("esri-workers","Worker"in e$v),s$z.add("esri-text-decoder","TextDecoder"in e$v),s$z.add("esri-text-encoder","TextEncoder"in e$v),s$z.add("web-feat:cache","caches"in e$v),s$z.add("esri-workers-arraybuffer-transfer",!s$z("safari")||Number(s$z("safari"))>=12),s$z.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),s$z.add("featurelayer-simplify-payload-size-factors",[1,1,4]),s$z.add("featurelayer-snapshot-enabled",!0),s$z.add("featurelayer-snapshot-point-min-threshold",8e4),s$z.add("featurelayer-snapshot-point-max-threshold",4e5),s$z.add("featurelayer-snapshot-point-coverage",.1),s$z.add("featurelayer-advanced-symbols",!1),s$z.add("featurelayer-pbf",!0),s$z.add("featurelayer-pbf-statistics",!1),s$z.add("feature-layers-workers",!0),s$z.add("mapview-transitions-duration",200),s$z.add("mapserver-pbf-enabled",!1),s$z("host-webworker")||s$z("host-browser")&&(s$z.add("esri-csp-restrictions",(()=>{try{new Function;}catch{return !0}return !1})),s$z.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{s$z.add("esri-image-decode",!0,!0,!0);})).catch((()=>{s$z.add("esri-image-decode",!1,!0,!0);}))}return !1})),s$z.add("esri-url-encodes-apostrophe",(()=>{const a=e$v.document.createElement("a");return a.href="?'",a.href.includes("?%27")})),s$z.add("vectortilelayer-max-buffers",s$z("ff")?160:Number.POSITIVE_INFINITY));})();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$w=null;function r$r(n){return null!=n}function t$w(n){return null==n}function u$v(n){return void 0===n}function o$D(t,u){return r$r(t)?u(t):n$w}function e$u(n){return n}function f$o(n,r){if(t$w(n))throw new Error(r);return n}function c$v(n,t){return r$r(n)?n:"function"==typeof t?t():t}function l$n(n){return r$r(n)&&n.destroy(),null}function i$A(n){return r$r(n)&&n.dispose(),null}function s$y(n){return r$r(n)&&n.remove(),null}function a$s(n){return r$r(n)&&n.abort(),null}function h$l(n){return r$r(n)&&n.release(),null}function p$o(n,t){return r$r(n)&&r$r(t)?n.equals(t):n===t}function w$b(n){return null}function y$j(n,t){const u=new Array;return n.forEach((n=>{const o=t(n);r$r(o)&&u.push(o);})),u}function d$p(n,r){const t=new Array;for(const u of n)t.push(A$c(u,null,r));return t}function v$c(n,r){for(const t of n)A$c(t,null,r);}function A$c(n,t,u){return r$r(n)?u(n):t}function E$7(n,t){return r$r(n)?t(n):null}function g$i(n){return n.filter((n=>r$r(n)))}function m$n(n,...r){let t=n;for(let u=0;u<r.length&&t;++u)t=t[r[u]];return t}function q$5(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$v{constructor(t=1){this._seed=t;}set seed(e){this._seed=null==e?Math.random()*t$v._m:e;}getInt(){return this._seed=(t$v._a*this._seed+t$v._c)%t$v._m,this._seed}getFloat(){return this.getInt()/(t$v._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(e,s){const n=s-e;return e+this.getInt()/t$v._m*n}}t$v._m=2147483647,t$v._a=48271,t$v._c=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$z(n,t){return t?n.filter(((n,r,e)=>e.findIndex(t.bind(null,n))===r)):n.filter(((n,t,r)=>r.indexOf(n)===t))}function l$m(t,r,e){if(t$w(t)&&t$w(r))return !0;if(t$w(t)||t$w(r)||t.length!==r.length)return !1;if(e){for(let n=0;n<t.length;n++)if(!e(t[n],r[n]))return !1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return !1;return !0}function c$u(n,t,r){let e,o;return r?(e=t.filter((t=>!n.some((n=>r(n,t))))),o=n.filter((n=>!t.some((t=>r(t,n)))))):(e=t.filter((t=>!n.includes(t))),o=n.filter((n=>!t.includes(n)))),{added:e,removed:o}}function s$x(n,t,r){return n&&t?r?n.filter((function(n){return t.findIndex((function(t){return r(n,t)}))>-1})):n.filter((function(n){return t.indexOf(n)>-1})):[]}function a$r(n){return n&&"number"==typeof n.length}function h$k(n,t){const r=n.length;if(0===r)return [];const e=[];for(let o=0;o<r;o+=t)e.push(n.slice(o,o+t));return e}const d$o=!!Array.prototype.fill;function g$h(n,t){if(d$o)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function m$m(n,t){void 0===t&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}function p$n(n,t,r){const e=n.length;let o=0,f=e-1;for(;o<f;){const r=o+Math.floor((f-o)/2);t>n[r]?o=r+1:f=r;}const u=n[o];return r?t>=n[e-1]?-1:u===t?o:o-1:u===t?o:-1}function M$7(n){return n.reduce(((n,t)=>n.concat(t||[])),[])}class w$a{constructor(){this.last=0;}}const y$i=new w$a;function b$a(n,t,r,e){e=e||y$i;const o=Math.max(0,e.last-10);for(let u=o;u<r;++u)if(n[u]===t)return e.last=u,u;const f=Math.min(o,r);for(let u=0;u<f;++u)if(n[u]===t)return e.last=u,u;return -1}function v$b(n,t,r,e){const o=null==r?n.length:r,f=b$a(n,t,o,e);if(-1!==f)return n[f]=n[o-1],null==r&&n.pop(),t}const A$b=new Set;function O$3(n,t,r=n.length,e=t.length,o,f){if(0===e||0===r)return r;A$b.clear();for(let i=0;i<e;++i)A$b.add(t[i]);o=o||y$i;const u=Math.max(0,o.last-10);for(let i=u;i<r;++i)if(A$b.has(n[i])&&(f&&f.push(n[i]),A$b.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$b.size||0===r))return A$b.clear(),r;for(let i=0;i<u;++i)if(A$b.has(n[i])&&(f&&f.push(n[i]),A$b.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$b.size||0===r))return A$b.clear(),r;return A$b.clear(),r}function z$7(n){return n?(S$8.seed=n,()=>S$8.getFloat()):Math.random}function I$4(n,t){const r=z$7(t);for(let e=n.length-1;e>0;e--){const t=Math.floor(r()*(e+1)),o=n[e];n[e]=n[t],n[t]=o;}return n}const S$8=new t$v;function C$5(n,t){const r=n.indexOf(t);return -1!==r?(n.splice(r,1),t):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$v(r,n){if(r.forEach)r.forEach(n);else for(let t=0;t<r.length;t++)n(r[t],t,r);}function t$u(r,n,t){if(r.slice)return r.slice(n,t);void 0===n?n=0:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n))),void 0===t?t=r.length:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t)));const o=Math.max(0,t-n),c=new(r.constructor)(o);for(let e=0;e<o;e++)c[e]=r[n+e];return c}function o$C(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name}function c$t(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function e$t(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function a$q(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u$u(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function i$y(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f$n(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function s$w(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function y$h(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function A$a(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}function l$l(r){const n=new Array(r.length);for(let t=0;t<r.length;t++)n[t]=r[t];return n}function m$l(n){return t$w(n)?0:128+n.buffer.byteLength+64}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function y$g(e,t){let n;if(t)for(n in e)e.hasOwnProperty(n)&&(void 0===e[n]?delete e[n]:e[n]instanceof Object&&y$g(e[n],!0));else for(n in e)e.hasOwnProperty(n)&&void 0===e[n]&&delete e[n];return e}function l$k(e){if(!e||"object"!=typeof e||"function"==typeof e)return e;if(c$t(e)||e$t(e)||a$q(e)||u$u(e)||i$y(e)||f$n(e)||s$w(e)||y$h(e)||A$a(e))return t$u(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer){return e.slice(0,e.byteLength)}if(e instanceof Map){const t=new Map;return e.forEach(((e,n)=>{t.set(n,l$k(e));})),t}if(e instanceof Set){const t=new Set;return e.forEach((e=>{t.add(l$k(e));})),t}let t;const y=e;if("function"==typeof y.clone)t=y.clone();else if("function"==typeof y.map&&"function"==typeof y.forEach)t=y.map(l$k);else if("function"==typeof y.notifyChange&&"function"==typeof y.watch)t=y.clone();else {t={};for(const n of Object.getOwnPropertyNames(e))t[n]=l$k(e[n]);}return t}function m$k(e,t){return e===t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t)||"function"==typeof(e||{}).getTime&&"function"==typeof(t||{}).getTime&&e.getTime()===t.getTime()||!1}function g$g(t,n){return t===n||(null==t||"string"==typeof t?t===n:"number"==typeof t?t===n||"number"==typeof n&&isNaN(t)&&isNaN(n):t instanceof Date?n instanceof Date&&t.getTime()===n.getTime():Array.isArray(t)?Array.isArray(n)&&l$m(t,n):t instanceof Set?n instanceof Set&&h$j(t,n):t instanceof Map?n instanceof Map&&j$a(t,n):"object"==typeof t&&("object"==typeof n&&b$9(t,n)))}function b$9(e,t){if(null===e||null===t)return !1;const n=Object.keys(e),o=n.length;if(null===t||Object.keys(t).length!==o)return !1;for(const r of n)if(e[r]!==t[r]||!Object.prototype.hasOwnProperty.call(t,r))return !1;return !0}function h$j(e,t){if(e.size!==t.size)return !1;for(const n of e)if(!t.has(n))return !1;return !0}function j$a(e,t){if(e.size!==t.size)return !1;for(const[n,o]of e){const e=t.get(n);if(e!==o||void 0===e&&!t.has(n))return !1}return !0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$u(r,n,t=!1){return e$s(r,n,t)}function t$t(r,n){if(null!=n)return n[r]||i$x(r.split("."),!1,n)}function o$B(r,n,t){const o=r.split("."),e=o.pop(),u=i$x(o,!0,t);u&&e&&(u[e]=n);}function i$x(r,n,t){let o=t;for(const i of r){if(null==o)return;if(!(i in o)){if(!n)return;o[i]={};}o=o[i];}return o}function e$s(n,t,o){return t?Object.keys(t).reduce((function(n,i){let u=n[i],c=t[i];return u===c?n:void 0===u?(n[i]=l$k(c),n):(Array.isArray(c)||Array.isArray(n)?(u=u?Array.isArray(u)?n[i]=u.concat():n[i]=[u]:n[i]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{-1===u.indexOf(r)&&u.push(r);})):n[i]=c.concat())):c&&"object"==typeof c?n[i]=e$s(u,c,o):n.hasOwnProperty(i)&&!t.hasOwnProperty(i)||(n[i]=c),n)}),n||{}):n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$n="20211104",e$r="f56ab3008fdaea1ce910515531b6ddb258d83e4f";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$s={apiKey:void 0,applicationUrl:e$v.location&&e$v.location.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(e$v.esriConfig&&(n$u(t$s,e$v.esriConfig,!0),delete t$s.has),!t$s.assetsPath){const e="4.22.0";t$s.assetsPath=`https://cdn.jsdelivr.net/npm/@arcgis/core@${e}-next.${d$n}/assets`;}t$s.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(t$s,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath");}}),t$s.request.corsEnabledServers=[],t$s.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$q=/\{([^\}]+)\}/g;function n$t(t){return null==t?"":t}function r$q(r,o){return r.replace(e$q,"object"==typeof o?(e,r)=>n$t(t$t(r,o)):(t,e)=>n$t(o(e)))}function o$A(t,e){return t.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(t=>e&&-1!==e.indexOf(t)?t:`\\${t}`))}function c$s(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}function u$t(t){return (new DOMParser).parseFromString(t||"","text/html").body.innerText||""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$z={info:0,warn:1,error:2,none:3};class s$v{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s$v._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s$v.getLogger(this.module.slice(0,t)));}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e);}warn(...e){this._log("warn","always",...e);}info(...e){this._log("info","always",...e);}errorOnce(...e){this._log("error","once",...e);}warnOnce(...e){this._log("warn","once",...e);}infoOnce(...e){this._log("info","once",...e);}errorOncePerTick(...e){this._log("error","oncePerTick",...e);}warnOncePerTick(...e){this._log("warn","oncePerTick",...e);}infoOncePerTick(...e){this._log("info","oncePerTick",...e);}get test(){const e=this;return {loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return {resetLoggers(e={}){const t=s$v._loggers;return s$v._loggers=e,t},set throttlingDisabled(e){s$v._throttlingDisabled=e;}}}static getLogger(e){let t=s$v._loggers[e];return t||(t=new s$v({module:e})),t}_log(t,r,...o){if(!this._matchLevel(t))return;if("always"!==r&&!s$v._throttlingDisabled){const e=this._argsToKey(o),n=this._loggedMessages[t].get(e);if("once"===r&&null!=n||"oncePerTick"===r&&n&&n>=s$v._tickCounter)return;this._loggedMessages[t].set(e,s$v._tickCounter),s$v._scheduleTickCounterIncrement();}for(const s of t$s.log.interceptors)if(s(t,this.module,...o))return;this._inheritedWriter()(t,this.module,...o);}_parentWithMember(e,r){let o=this;for(;r$r(o);){const r=o[e];if(r$r(r))return r;o=o.parent;}return r}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...r){console[e](`[${t}]`,...r);}_matchLevel(t){const r=t$s.log.level?t$s.log.level:"warn";return o$z[this._parentWithMember("level",r)]<=o$z[t]}_argsToKey(...e){const t=(e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]";return c$s(JSON.stringify(e,t))}static _scheduleTickCounterIncrement(){s$v._tickCounterScheduled||(s$v._tickCounterScheduled=!0,Promise.resolve().then((()=>{s$v._tickCounter++,s$v._tickCounterScheduled=!1;})));}}s$v._loggers={},s$v._tickCounter=0,s$v._tickCounterScheduled=!1,s$v._throttlingDisabled=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$p(e,s){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return "$";const i=t$t(n,s),r=null==i?"":i;if(void 0===r)throw new Error(`could not find key "${n}" in template`);return r.toString()}))}class s$u{constructor(t,n,i){this.name=t,this.details=i,this.message=void 0,this instanceof s$u&&(this.message=n&&e$p(n,i)||"");}toString(){return "["+this.name+"]: "+this.message}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$t extends s$u{constructor(e,t,r){if(super(e,t,r),!(this instanceof s$t))return new s$t(e,t,r)}toJSON(){if(null!=this.details)try{return {name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return l$k(r)}catch(s){return "[object]"}})))}}catch(r){throw s$v.getLogger("esri.core.Error").error(r),r}return {name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s$t(e.name,e.message,e.details)}}s$t.prototype.type="error";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$s=s$v.getLogger("esri.core.urlUtils"),l$j=t$s.request,c$r="esri/config: esriConfig.request.proxyUrl is not set.",f$m=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,a$p=/^\s*http:/i,h$i=/^\s*https:/i,p$m=/^\s*file:/i,d$m=/:\d+$/,g$f=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,m$j=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),y$f=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class $$4{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let e=q$5(this.uri.match(m$j));this.scheme=e[2]||(e[1]?"":null),this.authority=e[4]||(e[3]?"":null),this.path=e[5],this.query=e[7]||(e[6]?"":null),this.fragment=e[9]||(e[8]?"":null),null!=this.authority&&(e=q$5(this.authority.match(y$f)),this.user=e[3]||null,this.password=e[4]||null,this.host=e[6]||e[7],this.port=e[9]||null);}toString(){return this.uri}}const x$8=new $$4(t$s.applicationUrl),O$2={},w$9=(()=>{const t=q$5(x$8.path),e=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return `${`${x$8.scheme}://${x$8.host}${null!=x$8.port?`:${x$8.port}`:""}`}${e}`})();function U$5(t){const e={path:null,query:null},n=new $$4(t),r=t.indexOf("?");return null===n.query?e.path=t:(e.path=t.substring(0,r),e.query=b$8(n.query)),n.fragment&&(e.hash=n.fragment,null===n.query&&(e.path=e.path.substring(0,e.path.length-(n.fragment.length+1)))),e}function b$8(t){const e=t.split("&"),n={};for(const r of e){if(!r)continue;const t=r.indexOf("=");let e,o;t<0?(e=decodeURIComponent(r),o=""):(e=decodeURIComponent(r.slice(0,t)),o=decodeURIComponent(r.slice(t+1)));let i=n[e];"string"==typeof i&&(i=n[e]=[i]),Array.isArray(i)?i.push(o):n[e]=o;}return n}function R$3(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function C$4(t,e){return t?e&&"function"==typeof e?Object.keys(t).map((n=>encodeURIComponent(n)+"="+encodeURIComponent(e(n,t[n])))).join("&"):Object.keys(t).map((n=>{const r=t[n];if(null==r)return "";const o=encodeURIComponent(n)+"=",i=e&&e[n];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>R$3(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):R$3(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function q$4(t=!1){let n,r=l$j.proxyUrl;if("string"==typeof t){n=rt(t);const e=A$9(t);e&&(r=e.proxyUrl);}else n=!!t;if(!r)throw u$s.warn(c$r),new s$t("urlutils:proxy-not-set",c$r);n&&ct()&&(r=ut(r));return U$5(r)}function j$9(t){const e=A$9(t);let n,r;if(e){const t=v$a(e.proxyUrl);n=t.path,r=t.query?b$8(t.query):null;}if(n){const e=U$5(t);t=n+"?"+e.path;const o=C$4({...r,...e.query});o&&(t=`${t}?${o}`);}return t}const L$6={path:"",query:""};function v$a(t){const e=t.indexOf("?");return -1!==e?(L$6.path=t.slice(0,e),L$6.query=t.slice(e+1)):(L$6.path=t,L$6.query=null),L$6}function I$3(t){return t=(t=ft(t=dt(t=v$a(t).path),!0)).toLowerCase()}function S$7(t){const e={proxyUrl:t.proxyUrl,urlPrefix:I$3(t.urlPrefix)},n=l$j.proxyRules,r=e.urlPrefix;let o=n.length;for(let i=0;i<n.length;i++){const t=n[i].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return -1;o=i;break}0===t.indexOf(r)&&(o=i+1);}return n.splice(o,0,e),o}function A$9(t){const e=l$j.proxyRules,n=I$3(t);for(let r=0;r<e.length;r++)if(0===n.indexOf(e[r].urlPrefix))return e[r]}function P$5(t,e){return t=k$9(t),e=k$9(e),ft(t)===ft(e)}function k$9(t){const e=(t=z$6(t)).indexOf("/sharing");return e>0?t.substring(0,e):t.replace(/\/+$/,"")}function B$4(t){const e=e=>null==e||e instanceof RegExp&&e.test(t)||"string"==typeof e&&t.startsWith(e),n=l$j.interceptors;if(n)for(const r of n)if(Array.isArray(r.urls)){if(r.urls.some(e))return r}else if(e(r.urls))return r;return null}function E$6(t,e,n=!1){const r=Ot(t),o=Ot(e);return !(!n&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function J$1(t){if("string"==typeof t){if(!Q$1(t))return !0;t=Ot(t);}if(E$6(t,x$8))return !0;const e=l$j.trustedServers||[];for(let n=0;n<e.length;n++){const r=N$5(e[n]);for(let e=0;e<r.length;e++)if(E$6(t,r[e]))return !0}return !1}function N$5(t){return O$2[t]||(nt(t)||et(t)?O$2[t]=[new $$4(T$5(t))]:O$2[t]=[new $$4(`http://${t}`),new $$4(`https://${t}`)]),O$2[t]}function T$5(t,e=w$9,n){return et(t)?n&&n.preserveProtocolRelative?t:"http"===x$8.scheme&&x$8.authority===M$6(t).slice(2)?`http:${t}`:`https:${t}`:nt(t)?t:q$5(D$6("/"===t[0]?at(e):e,t))}function W$1(t,e=w$9,n){if(!Q$1(t))return t;const r=z$6(t),o=r.toLowerCase(),i=z$6(e).toLowerCase().replace(/\/+$/,""),s=n?z$6(n).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return t;const u=(t,e,n)=>-1===(n=t.indexOf(e,n))?t.length:n;let l=u(o,"/",o.indexOf("//")+2),c=-1;for(;o.slice(0,l+1)===i.slice(0,l)+"/"&&(c=l+1,l!==o.length);)l=u(o,"/",l+1);if(-1===c)return t;if(s&&c<s.length)return t;t=r.slice(c);const f=i.slice(c-1).replace(/[^/]+/g,"").length;if(f>0)for(let a=0;a<f;a++)t=`../${t}`;else t=`./${t}`;return t}function z$6(t){return t=$t(t=yt(t=mt(t=T$5(t=t.trim()))))}function D$6(...t){const e=t.filter(r$r);if(!e||!e.length)return;const n=[];if(Q$1(e[0])){const t=e[0],r=t.indexOf("//");-1!==r&&(n.push(t.slice(0,r+1)),it(e[0])&&(n[0]+="/"),e[0]=t.slice(r+2));}else "/"===e[0][0]&&n.push("");const r=e.reduce(((t,e)=>e?t.concat(e.split("/")):t),[]);for(let o=0;o<r.length;o++){const t=r[o];".."===t&&n.length>0&&".."!==n[n.length-1]?n.pop():(!t&&o===r.length-1||t&&("."!==t||0===n.length))&&n.push(t);}return n.join("/")}function M$6(t,e=!1){if(F$5(t)||G$3(t))return null;let n=t.indexOf("://");if(-1===n&&et(t))n=2;else {if(-1===n)return null;n+=3;}const r=t.indexOf("/",n);return -1!==r&&(t=t.slice(0,r)),e&&(t=ft(t,!0)),t}function Q$1(t){return et(t)||nt(t)}function F$5(t){return null!=t&&"blob:"===t.slice(0,5)}function G$3(t){return "data:"===t.slice(0,5)}function H$1(t){const e=V$2(t);if(!e||!e.isBase64)return null;const n=atob(e.data),r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r.buffer}const K$1=/^data:(.*?)(;base64)?,(.*)$/;function V$2(t){const e=t.match(K$1);if(!e)return null;const[,n,r,o]=e;return {mediaType:n,isBase64:!!r,data:o}}function X$1(t){return t.isBase64?`data:${t.mediaType};base64,${t.data}`:`data:${t.mediaType},${t.data}`}function et(t){return null!=t&&void 0!==t&&"/"===t[0]&&"/"===t[1]}function nt(t){return f$m.test(t)}function rt(t){return h$i.test(t)||"https"===x$8.scheme&&et(t)}function ot(t){return a$p.test(t)||"http"===x$8.scheme&&et(t)}function it(t){return p$m.test(t)}function ut(t){return et(t)?`https:${t}`:t.replace(a$p,"https:")}function lt(){return "http"===x$8.scheme}function ct(){return "https"===x$8.scheme}function ft(t,e=!1){return et(t)?t.slice(2):(t=t.replace(f$m,""),e&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function at(t){const e=t.indexOf("//"),n=t.indexOf("/",e+2);return -1===n?t:t.slice(0,n)}function ht(t){let e=0;if(Q$1(t)){const n=t.indexOf("//");-1!==n&&(e=n+2);}const n=t.lastIndexOf("/");return n<e?t:t.slice(0,n+1)}function pt(t,e){if(!t)return "";const n=U$5(t).path.replace(/\/+$/,""),r=n.substring(n.lastIndexOf("/")+1);if(null==e||!e.length)return r;const o=new RegExp(`.(${e.join("|")})$`,"ig");return r.replace(o,"")}function dt(t){return t&&"/"===t[t.length-1]?t:`${t}/`}function gt(t){return t.replace(/\/+$/,"")}function mt(t){if(/^https?:\/\//i.test(t)){const e=v$a(t);t=(t=e.path.replace(/\/{2,}/g,"/")).replace("/","//"),e.query&&(t+=`?${e.query}`);}return t}function yt(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function $t(t){const e=l$j.httpsDomains;if(!ot(t))return t;const n=t.indexOf("/",7);let r;if(r=-1===n?t:t.slice(0,n),r=r.toLowerCase().slice(7),d$m.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","");}return lt()&&r===x$8.authority&&!g$f.test(t)||(ct()&&r===x$8.authority||e&&e.some((t=>r===t||r.endsWith(`.${t}`)))||ct()&&!A$9(t))&&(t=ut(t)),t}function xt(t,e,n){if(!(e&&n&&t&&Q$1(t)))return t;const r=t.indexOf("//"),o=t.indexOf("/",r+2),i=t.indexOf(":",r+2),s=Math.min(o<0?t.length:o,i<0?t.length:i);if(t.slice(r+2,s).toLowerCase()!==e.toLowerCase())return t;return `${t.slice(0,r+2)}${n}${t.slice(s)}`}function Ot(t){return "string"==typeof t?new $$4(T$5(t)):(t.scheme||(t.scheme=x$8.scheme),t)}function wt(t){return Lt.test(t)}function Ut(t,e){const n=U$5(t),r=Object.keys(n.query||{});return r.length>0&&e&&e.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),n.path}function bt(t,e,n){const r=U$5(t),o=r.query||{};return o[e]=String(n),`${r.path}?${C$4(o)}`}function Rt(t,e){const n=U$5(t),r=n.query||{};for(const i in e)r[i]=e[i];const o=C$4(r);return o?`${n.path}?${o}`:n.path}function qt(t){if(t$w(t))return null;const e=t.match(jt);return e?e[1]:null}const jt=/.*?\.([^\/]*)$/,Lt=/(^data:image\/svg|\.svg$)/i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$o="4.22",s$s={async request(e,r){var a;const{default:s}=await Promise.resolve().then(function () { return request; }),n=e.options,o=n.responseType;n.signal=null==r?void 0:r.signal,n.responseType="native"===o||"native-request-init"===o?"native-request-init":["blob","json","text"].includes(o)&&null!=(a=B$4(e.url))&&a.after?o:"array-buffer";const i=await s(e.url,n),u={data:i.data,ssl:i.ssl};switch(i.requestOptions.responseType){case"native-request-init":return delete u.data.signal,u;case"blob":u.data=await u.data.arrayBuffer();break;case"json":u.data=(new TextEncoder).encode(JSON.stringify(u.data)).buffer;break;case"text":u.data=(new TextEncoder).encode(u.data).buffer;}return {result:u,transferList:[u.data]}}};let n$s;function o$y(e){n$s=e;}function i$w(e){const t=n$s&&n$s.findCredential(e);return t&&t.token?bt(e,"token",t.token):e}s$z("host-webworker")||(s$z("edge")||s$z("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$o(t){return {setTimeout:(e,o)=>{const r=t.setTimeout(e,o);return {remove:()=>t.clearTimeout(r)}}}}const o$x=e$o(e$v);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$n(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r$p(r,t,n){if(!e$n(r))throw new TypeError("target is not a Evented or EventTarget object");if("on"in r)return r.on(t,n);if(Array.isArray(t)){const e=t.slice();for(const t of e)r.addEventListener(t,n);return {remove(){for(const t of e)r.removeEventListener(t,n);}}}return r.addEventListener(t,n),{remove(){r.removeEventListener(t,n);}}}function t$r(t,n,o){if(!e$n(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(n,o);const i=r$p(t,n,(e=>{i.remove(),o.call(t,e);}));return {remove(){i.remove();}}}function n$r(e,t,n){let o=!1;const i=r$p(e,t,(r=>{o||n.call(e,r);}));return {resume(){o=!1;},pause(){o=!0;},remove(){i.remove();}}}const o$w={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function i$v({key:e}){return o$w[e]||e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$r(t){return Promise.all(t)}function f$l(t){return new Promise(((n,e)=>{try{t(n,e);}catch(r){Promise.resolve().then((()=>e(r)));}}))}function m$i(t="Aborted"){return new s$t("AbortError",t)}function h$h(t,n="Aborted"){if(p$l(t))throw m$i(n)}function a$n(t){return r$r(t)?"aborted"in t?t:t.signal:t}function p$l(t){const n=a$n(t);return r$r(n)&&n.aborted}function b$7(t){if(d$l(t))throw t}function w$8(t){if(!d$l(t))throw t}function j$8(t,n){const r=a$n(t);if(!t$w(r)){if(!r.aborted)return t$r(r,"abort",(()=>n()));n();}}function v$9(t,n){const r=a$n(t);if(!t$w(r))return h$h(r),t$r(r,"abort",(()=>n(m$i())))}function P$4(t,n){const e=a$n(n);return t$w(e)?t:new Promise(((e,r)=>{let o=j$8(n,(()=>r(m$i())));const i=()=>o=s$y(o);t.then(i,i),t.then(e,r);}))}function d$l(t){return t&&"AbortError"===t.name}function g$e(t){return t.catch((t=>{if(!d$l(t))throw t}))}function y$e(t,n=s$v.getLogger("esri")){return t.catch((t=>{d$l(t)||n.error(t);}))}function A$8(){let t=null;const n=new Promise(((n,e)=>{t={promise:void 0,resolve:n,reject:e};}));return t.promise=n,t}function T$4(t){if(!t)return;if("function"!=typeof t.forEach){const n=Object.keys(t);return T$4(n.map((n=>t[n]))).then((t=>{const e={};return n.forEach(((n,r)=>e[n]=t[r])),e}))}const n=t;return f$l((t=>{const e=[];let r=n.length;0===r&&t(e),n.forEach((n=>{const o={promise:n||Promise.resolve(n)};e.push(o),o.promise.then((t=>{o.value=t;})).catch((t=>{o.error=t;})).then((()=>{--r,0===r&&t(e);}));}));}))}function E$5(t){return T$4(t).then((t=>t.filter((t=>!!t.value)).map((t=>t.value))))}function C$3(t){return Promise.reject(t)}function k$8(t){return Promise.resolve(t)}function L$5(t,n,e){const r=new AbortController;return j$8(e,(()=>r.abort())),new Promise(((e,o)=>{let i=setTimeout((()=>{i=0,e(n);}),t);j$8(r,(()=>{i&&(clearTimeout(i),o(m$i()));}));}))}function O$1(t){return t&&"function"==typeof t.then}function U$4(t){return q$3(t)?t:Promise.resolve(t)}function q$3(t){return t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then}function z$5(t,n=-1){let e,r,o,i,c=null;const s=(...l)=>{if(e){r=l,i&&i.reject(m$i()),i=A$8();const t=q$5(i.promise);if(c){const t=c;c=null,t.abort();}return t}if(o=i||A$8(),i=null,n>0){const r=new AbortController;e=U$4(t(...l,r.signal));const o=e;L$5(n).then((()=>{e===o&&(i?r.abort():c=r);}));}else e=1,e=U$4(t(...l));const f=()=>{const t=r;r=o=e=c=null,null!=t&&s(...t);},h=e,a=o;return h.then(f,f),h.then(a.resolve,a.reject),q$5(a.promise)};return s}function B$3(){let n,e;const r=new Promise(((t,r)=>{n=t,e=r;})),o=t=>{n(t);};return o.resolve=t=>n(t),o.reject=t=>e(t),o.timeout=(n,e)=>o$x.setTimeout((()=>o.reject(e)),n),o.promise=r,o}function D$5(t,n){return t.then(n,n)}function F$4(t){let n=new AbortController;const e=t(n.signal);let r={promise:e,finished:!1,abort:()=>{n&&(n.abort(),n=null);}};const o=()=>{r&&(r.finished=!0,r=null),n=null;};return e.then(o,o),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$q=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function r$o(c){const r=M$6(c,!0);return r&&r.endsWith(".arcgis.com")&&!t$q.includes(r)&&!c.endsWith("/sharing/rest/generateToken")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$p(t,i,s=!1,c){return new Promise(((d,a)=>{if(p$l(c))return void a(n$q());let m=()=>{v(),a(new Error(`Unable to load ${i}`));},l=()=>{const e=t;v(),d(e);},u=()=>{if(!t)return;const e=t;v(),e.src="",a(n$q());};const v=()=>{s$z("esri-image-decode")||(t.removeEventListener("error",m),t.removeEventListener("load",l)),m=null,l=null,t=null,r$r(c)&&c.removeEventListener("abort",u),u=null,s&&URL.revokeObjectURL(i);};r$r(c)&&c.addEventListener("abort",u),s$z("esri-image-decode")?t.decode().then(l,m):(t.addEventListener("error",m),t.addEventListener("load",l));}))}function n$q(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function E$4(e,t){var r;const s=G$3(e),n=F$5(e);n||s||(e=z$6(e));const l={url:e,requestOptions:{...e$u(t)}};let u=B$4(e);if(u){const e=await W(u,l);if(null!=e)return {data:e,getHeader:F$3,requestOptions:l.requestOptions,url:l.url};u.after||u.error||(u=null);}if(e=l.url,"image"===(t=l.requestOptions).responseType){if(s$z("host-webworker")||s$z("host-node"))throw H("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),l)}else if(s)throw H("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),l);if("head"===t.method){if(t.body)throw H("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),l);if(s||n)throw H("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),l)}if(await A$7(),L$4)return L$4.execute(e,t);const c=new AbortController;j$8(t,(()=>c.abort()));const h={controller:c,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:u,params:l,redoRequest:!1,useIdentity:j$7.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},y=await J(h);return null==(r=u)||null==r.after||r.after(y),y}let L$4;const j$7=t$s.request,U$3="FormData"in e$v,P$3=[499,498,403,401],D$4=["COM_0056","COM_0057","SB_0008"],_$a=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],F$3=()=>null,I$2=Symbol();function M$5(e){const t=M$6(e);t&&!E$4._corsServers.includes(t)&&E$4._corsServers.push(t);}function R$2(e){const t=M$6(e);return !t||t.endsWith(".arcgis.com")||E$4._corsServers.includes(t)||J$1(t)}function H(e,t,s,o){let a="Error";const i={url:s.url,requestOptions:s.requestOptions,getHeader:F$3,ssl:!1};if(t instanceof s$t)return t.details?(t.details=l$k(t.details),t.details.url=s.url,t.details.requestOptions=s.requestOptions):t.details=i,t;if(t){const e=o&&(e=>o.headers.get(e)),r=o&&o.status,s=t.message;s&&(a=s),e&&(i.getHeader=e),i.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,i.subCode=t.subcode,i.messageCode=t.messageCode,"string"==typeof t.details?i.messages=[t.details]:i.messages=t.details,i.raw=I$2 in t?t[I$2]:t;}return d$l(t)?m$i():new s$t(e,a,i)}async function A$7(){s$z("host-webworker")?L$4||(L$4=await import('./request-e1957656.js')):E$4._abortableFetch||(E$4._abortableFetch=e$v.fetch.bind(e$v));}async function B$2(){n$s||await import('./IdentityManager-ea5da5af.js');}async function N$4(r){const o=r.params.url,n=r.params.requestOptions,a=r.controller.signal,i=n.body;let l=null,u=null,d=null;if(U$3&&"HTMLFormElement"in e$v&&(i instanceof FormData?l=i:i instanceof HTMLFormElement&&(u=i,l=new FormData(u))),"string"==typeof i&&(d=i),r.fetchOptions={cache:n.cacheBust&&!E$4._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:n.headers||{},method:"head"===n.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:a},(l||d)&&(r.fetchOptions.body=l||d),"anonymous"===n.authMode&&(r.useIdentity=!1),r.hasToken=!!(/token=/i.test(o)||n.query&&n.query.token||l&&l.get&&l.get("token")||u&&u.elements.token),!r.hasToken&&t$s.apiKey&&r$o(o)&&(n.query||(n.query={}),n.query.token=t$s.apiKey,r.hasToken=!0),r.useIdentity&&!r.hasToken&&!r.credentialToken&&!$$3(o)&&!p$l(a)){let e;"immediate"===n.authMode?(await B$2(),e=await n$s.getCredential(o,{signal:a}),r.credential=e):"no-prompt"===n.authMode?(await B$2(),e=await n$s.getCredential(o,{prompt:!1,signal:a}).catch((()=>{})),r.credential=e):n$s&&(e=n$s.findCredential(o)),e&&(r.credentialToken=e.token,r.useSSL=!!e.ssl);}}function $$3(e){return _$a.some((t=>t.test(e)))}async function K(e){let r=e.params.url;const s=e.params.requestOptions,n=e.fetchOptions,a=F$5(r)||G$3(r),i=s.responseType||"json",l=a?0:null!=s.timeout?s.timeout:j$7.timeout;let c=!1;if(!a){e.useSSL&&(r=ut(r)),s.cacheBust&&"default"===n.cache&&(r=bt(r,"request.preventCache",Date.now()));let a={...s.query};e.credentialToken&&(a.token=e.credentialToken);let i=C$4(a);s$z("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=r.length+1+i.length;let u;c="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||l>j$7.maxUrlLength;const d=s.useProxy||!!A$9(r);if(d){const e=q$4(r);u=e.path,!c&&u.length+1+l>j$7.maxUrlLength&&(c=!0),e.query&&(a={...e.query,...a});}if("HEAD"===n.method&&(c||d)){if(c){if(l>j$7.maxUrlLength)throw H("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw H("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw H("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(c?(n.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?r=Rt(r,a):(n.body=C$4(a),n.headers["Content-Type"]="application/x-www-form-urlencoded")):r=Rt(r,a),d&&(e.useProxy=!0,r=`${u}?${r}`),a.token&&U$3&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",a.token):e.append("token",a.token);}if(s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials;else if(!E$6(r,x$8))if(J$1(r))e.withCredentials=!0;else if(n$s){const s=n$s.findServerInfo(r);s&&s.webTierAuth&&(e.withCredentials=!0);}e.withCredentials&&(n.credentials="include");}let m,f,v=0,C=!1;l>0&&(v=setTimeout((()=>{C=!0,e.controller.abort();}),l));try{if("native-request-init"===s.responseType)f=n,f.url=r;else if("image"!==s.responseType||"default"!==n.cache||"GET"!==n.method||c||G$2(s.headers)||!a&&!e.useProxy&&j$7.proxyUrl&&!R$2(r)){if(m=await E$4._abortableFetch(r,n),e.useProxy||M$5(r),"native"===s.responseType)f=m;else if("HEAD"!==n.method)if(m.ok){switch(i){case"array-buffer":f=await m.arrayBuffer();break;case"blob":case"image":f=await m.blob();break;default:f=await m.text();}if(v&&(clearTimeout(v),v=0),"json"===i||"xml"===i||"document"===i)if(f)switch(i){case"json":f=JSON.parse(f);break;case"xml":f=z$4(f,"application/xml");break;case"document":f=z$4(f,"text/html");}else f=null;if(f){if("array-buffer"===i||"blob"===i){const e=m.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e);}catch{}}"image"===i&&f instanceof Blob&&(f=await Q(URL.createObjectURL(f),e,!0));}}else f=await m.text();}else f=await Q(r,e);}catch(L){if("AbortError"===L.name){if(C)throw new Error("Timeout exceeded");throw m$i("Request canceled")}if(!(!m&&L instanceof TypeError&&j$7.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||R$2(r))throw L;e.redoRequest=!0,S$7({proxyUrl:j$7.proxyUrl,urlPrefix:M$6(r)});}finally{v&&clearTimeout(v);}return [m,f]}async function W(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let o,n;try{n=await e.before(t);}catch(s){o=H("request:interceptor",s,t);}if((n instanceof Error||n instanceof s$t)&&(o=H("request:interceptor",n,t)),o)throw e.error&&e.error(o),o;return n}}function G$2(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return !0;return !1}function z$4(e,t){let r;try{r=(new DOMParser).parseFromString(e,t);}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function J(e){var r,s;let o,n;await N$4(e);try{do{[o,n]=await K(e);}while(!await X(e,o,n))}catch(l){const t=H("request:server",l,e.params,o);throw t.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(t),t}const a=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(a)&&!e.hasToken&&!e.credentialToken&&null!=(r=n)&&null!=(s=r.user)&&s.username&&!J$1(a)){const e=M$6(a,!0);e&&j$7.trustedServers.push(e);}const i=e.credential;if(i&&n$s){const e=n$s.findServerInfo(i.server);let r=e&&e.owningSystemUrl;if(r){r=r.replace(/\/?$/,"/sharing");const e=n$s.findCredential(r,i.userId);e&&-1===n$s._getIdenticalSvcIdx(r,e)&&e.resources.unshift(r);}}return {data:n,getHeader:o?e=>o.headers.get(e):F$3,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function X(e,r,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!r||"native"===o.responseType||"native-request-init"===o.responseType)return !0;let n,a,i,l;if(!r.ok)throw n=new Error(`Unable to load ${r.url} status: ${r.status}`),n[I$2]=s,n;null!=s&&s.error&&(n=s.error),n&&(a=Number(n.code),i=n.hasOwnProperty("subcode")?Number(n.subcode):null,l=n.messageCode,l=l&&l.toUpperCase());const u=o.authMode;if(403===a&&(4===i||n.message&&n.message.toLowerCase().indexOf("ssl")>-1&&-1===n.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==P$3.indexOf(a)&&!$$3(e.params.url)&&(403!==a||-1===D$4.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await B$2();try{const r=await n$s.getCredential(e.params.url,{error:H("request:server",n,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=r,e.credentialToken=r.token,e.useSSL=e.useSSL||r.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;n=c;}}if(n)throw n;return !0}function Q(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,t$p(o,e,r,s)}E$4._abortableFetch=null,E$4._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];

const request = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': E$4
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$u=s$v.getLogger("esri.assets");function n$p(s,o){return E$4(a$m(s),o)}function a$m(t){if(!t$s.assetsPath)throw i$u.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$t("assets:path-not-set","config.assetsPath is not set");return D$6(t$s.assetsPath,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$m=new Set;function i$t(n,i,o=!1){o&&e$m.has(i)||(o&&e$m.add(i),n.warn(`🛑 DEPRECATED - ${i}`));}function t$o(e,i,o={}){if(s$z("esri-deprecation-warnings")){const{moduleName:n}=o;s$q(e,`Function: ${(n?n+"::":"")+i+"()"}`,o);}}function r$n(e,i,o={}){if(s$z("esri-deprecation-warnings")){const{moduleName:n}=o;s$q(e,`Property: ${(n?n+"::":"")+i}`,o);}}function s$q(e,o,t={}){if(s$z("esri-deprecation-warnings")){const{replacement:n,version:r,see:s,warnOnce:a}=t;let c=o;n&&(c+=`\n\t🛠️ Replacement: ${n}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),i$t(e,c,a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$m(r){return n$o((()=>r.forEach((r=>r$r(r)&&r.remove()))))}function n$o(e){return {remove:()=>{e&&(e(),e=void 0);}}}function o$v(r){return n$o((()=>{const n=r();r$r(n)&&n.remove();}))}function t$n(r){return n$o(r$r(r)?()=>r.destroy():void 0)}function u$r(e,r){const o=setTimeout(e,r);return n$o((()=>clearTimeout(o)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$l(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i$s(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function u$q(r,n,t){if(t){return a$l(r,n,{policy:t,path:""})}return a$l(r,n,null)}function a$l(r,e,i){return e?Object.keys(e).reduce((function(r,o){let u=null,l="merge";if(i&&(u=i.path?`${i.path}.${o}`:o,l=i.policy(u)),"replace"===l)return r[o]=e[o],r;if(void 0===r[o])return r[o]=l$k(e[o]),r;let f=r[o],s=e[o];if(f===s)return r;if(Array.isArray(s)||Array.isArray(r))f=f?Array.isArray(f)?r[o]=f.concat():r[o]=[f]:r[o]=[],s&&(Array.isArray(s)||(s=[s]),s.forEach((r=>{-1===f.indexOf(r)&&f.push(r);})));else if(s&&"object"==typeof s)if(i){const n=i.path;i.path=q$5(u),r[o]=a$l(f,s,i),i.path=n;}else r[o]=a$l(f,s,null);else r.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(r[o]=s);return r}),r||{}):r}function f$k(r){return Array.isArray(r)?r:r.split(".")}function s$p(r){return r.indexOf(",")>-1?r.split(",").map((r=>r.trim())):[r.trim()]}function c$q(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...s$p(t));return n}return s$p(r)}function y$d(n,t,e,i){const o=c$q(t);if(1!==o.length){const t=o.map((r=>i(n,r,e)));return r$m(t)}return i(n,o[0],e)}function h$g(r){let n=!1;return ()=>{n||(n=!0,r());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$k(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const u=e$l(e);return i$s(u,i)?u.get(i):e[i]}function i$r(t,n,r){if(null==t)return t;const u=e$k(n[r],t);return !u&&r<n.length-1?void 0:r===n.length-1?u:i$r(u,n,r+1)}function u$p(n,r,u=0){return "string"==typeof r&&-1===r.indexOf(".")?e$k(r,n):i$r(n,f$k(r),u)}function o$u(t,n){return u$p(t,n)}function s$o(t,n){return void 0!==u$p(n,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o$t{constructor(t){this.autoDestroy=!1,this.properties=t;}}function n$n(r){let n=r.constructor.__accessorMetadata__;const c=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(n){if(!c){const e=Object.create(n.properties),c=n.autoDestroy;for(const r in e)e[r]=l$k(e[r]);n=new o$t(e),n.autoDestroy=c,Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});}}else n=new o$t({}),Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});return q$5(r.constructor.__accessorMetadata__)}function c$p(t){return n$n(t).properties}function s$n(t,e){const r=c$p(t);let o=r[e];return o||(o=r[e]={}),o}function i$q(t,e){return u$q(t,e,_$9)}const p$k=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function _$9(t){return p$k.test(t)?"replace":"merge"}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$m(t){return t&&t.release&&"function"==typeof t.release}function i$p(t){return t&&t.acquire&&"function"==typeof t.acquire}class e$j{constructor(t,i,e,o=1,s=0){if(this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this.ctor)for(let n=0;n<s;n++)this._pool[n]=new this.ctor;this.allocationSize=Math.max(o,1);}destroy(){this.prune(0);}acquire(...t){let o;if(e$j.test.disabled)o=new this.ctor;else {if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this.ctor;}o=this._pool.pop();}return this.acquireFunction?this.acquireFunction(o,...t):i$p(o)&&o.acquire(...t),o}release(i){i&&!e$j.test.disabled&&(this.releaseFunction?this.releaseFunction(i):t$m(i)&&i.release(),this._pool.push(i));}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t);}this._pool.length=t;}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose();}}e$j.test={disabled:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o$s,r$l=[];const s$m=s$v.getLogger("esri.core.Accessor");function i$o(t){void 0!==o$s&&o$s.onObservableAccessed(t);}let l$i=!1,f$j=!1;function a$k(t,n,e){if(l$i)return g$d(t,n,e);u$o(t);const o=n.call(e);return p$j(),o}function g$d(t,n,e){const o=l$i;l$i=!0,u$o(t);let r=null;try{r=n.call(e);}catch(c){f$j&&s$m.error(c);}return p$j(),l$i=o,r}function u$o(t){o$s=t,r$l.push(t);}function p$j(){const t=r$l.pop();o$s=r$l.length>0?r$l[r$l.length-1]:void 0,void 0!==t&&t.onTrackingEnd();}function d$k(t,n){if(32&n.flags)return;const e=f$j;f$j=!1,64&n.flags?g$d(n,n.metadata.get,t):h$f(t,n),f$j=e;}const m$h=[];function h$f(t,e){128&e.flags||(e.flags|=128,g$d(e,(()=>{const o=e.metadata.dependsOn||m$h;for(const e of o)if("string"==typeof e&&-1===e.indexOf("."))A$6(t,e,!1);else {const o=f$k(e);for(let n=0,e=t;n<o.length&&null!=e&&"object"==typeof e;++n)e=A$6(e,o[n],n!==o.length-1);}})),e.flags&=-129);}function A$6(t,n,o){const r="?"===n[n.length-1]?n.slice(0,-1):n;if(null!=t.getItemAt||Array.isArray(t)){const n=parseInt(r,10);if(!isNaN(n))return Array.isArray(t)?t[n]:t.getItemAt(n)}const s=e$l(t),c=null==s?void 0:s.properties.get(r);return c&&(i$o(c),d$k(t,c)),o?t[r]:void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$l{constructor(r,s){this._observers=r,this._observer=s;}remove(){C$5(this._observers,this._observer);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$m{constructor(s,t,e){this.properties=s,this.propertyName=t,this.metadata=e,this._observers=null,this._accessed=null,this._handles=null,this.flags=1|(e.nonNullable?8:0)|(e.hasOwnProperty("value")?16:0)|(void 0===e.get?32:0)|(void 0===e.dependsOn?64:0);}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles();}getComputed(){i$o(this);const i=this.properties.store,n=this.propertyName,l=this.flags,r=i.get(n);if(4&l)return r;if(1&~l&&i.has(n))return r;this.flags|=4;const h=this.properties.host;let o;64&l?o=a$k(this,this.metadata.get,h):(h$f(h,this),o=this.metadata.get.call(h)),i.set(n,o,1);const a=i.get(n);return a===r?this.flags&=-2:this.commit(),this.flags&=-5,a}onObservableAccessed(s){s!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(s)||this._accessed.push(s));}onTrackingEnd(){this._clearObservationHandles(),this.flags|=32;const s=this._accessed;if(null===s)return;let t=this._handles;null===t&&(t=this._handles=[]);for(let e=0;e<s.length;++e)t.push(s[e].observe(this));s.length=0;}observe(s){return null===this._observers&&(this._observers=[]),this._observers.includes(s)||this._observers.push(s),new s$l(this._observers,s)}notifyChange(){this.onInvalidated(),this.onCommitted();}invalidate(){this.onInvalidated();}onInvalidated(){2&~this.flags&&(this.flags|=1);const s=this._observers;if(null!==s)for(let t=0;t<s.length;++t)s[t].onInvalidated();}commit(){this.flags&=-2,this.onCommitted();}onCommitted(){if(null===this._observers)return;const s=this._observers.slice();for(let t=0;t<s.length;++t)s[t].onCommitted();}_clearObservationHandles(){const s=this._handles;if(null!==s){for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$k=7;function t$l(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function n$l(r){switch(r){case 0:return "defaults";case 2:return "service";case 3:return "portal-item";case 4:return "web-scene";case 5:return "web-map";case 6:return "user"}return q$5(void 0)}function c$o(e){return n$l(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$k{constructor(){this._values=new Map;}clone(t){const r=new s$k;return this._values.forEach(((s,a)=>{t&&t.has(a)||r.set(a,l$k(s));})),r}get(e){return this._values.get(e)}originOf(){return 6}keys(){return [...this._values.keys()]}set(e,s){this._values.set(e,s);}delete(e){this._values.delete(e);}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p$i(t,e,s){return void 0!==t}function f$i(t,e,s,i){return void 0!==t&&(!(null==s&&8&t.flags)||(!1))}function u$n(t){return t&&"function"==typeof t.destroy}s$v.getLogger("esri.core.accessorSupport.Properties");class g$c{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=0,this.store=new s$k,this._origin=6;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const r in s){const t=new n$m(this,r,s[r]);this.properties.set(r,t);}this.metadatas=s,this._autoDestroy=e.autoDestroy;}initialize(){this.lifecycle=1;}constructed(){this.lifecycle=2;}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const s=this.internalGet(t);s&&u$n(s)&&(s.destroy(),8&~e.flags&&this._internalSet(e,null)),e.destroy();}else for(const[t,e]of this.properties)e.destroy();}get initialized(){return 0!==this.lifecycle}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();i$o(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&16&e.flags)return "defaults"}return n$l(e)}has(t){return !!this.properties.has(t)&&this.store.has(t)}keys(){return [...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(p$i(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);p$i(s)&&this._internalSet(s,e);}getDependsInfo(t,e,s){const r=this.properties.get(e);if(!p$i(r))return "";const o=new Set,n=a$k({onObservableAccessed:t=>o.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=r.metadata.get)?void 0:e.call(t)}));let a=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===o.size)return a;s+="  ";for(const c of o){if(!(c instanceof n$m))continue;const t=c.properties.host,e=c.propertyName,r=e$l(t);a+=r?r.getDependsInfo(t,e,s):`${s}${e}: undefined\n`;}return a}setAtOrigin(t,e,s){const i=this.properties.get(t);if(p$i(i))return this._setAtOrigin(i,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(2&e.flags)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&2&e.flags&&(e.flags&=-3,e.notifyChange());}override(t,e){const s=this.properties.get(t);if(!f$i(s,t,e))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$g.release(t),!s)return;e=r;}s.flags|=2,this._internalSet(s,e);}set(t,e){const s=this.properties.get(t);if(!f$i(s,t,e))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$g.release(t),!s)return;e=r;}const r=s.metadata.set;r?r.call(this.host,e):this._internalSet(s,e);}setDefaultOrigin(t){this._origin=t$l(t);}getDefaultOrigin(){return n$l(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange();}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate();}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit();}_internalSet(t,e){const s=0!==this.lifecycle?this._origin:0;this._setAtOrigin(t,e,s);}_setAtOrigin(e,s,i){const r=this.store,o=e.propertyName;r.has(o,i)&&m$k(s,r.get(o))&&2&~e.flags&&i===r.originOf(o)||(e.invalidate(),r.set(o,s,i),e.commit(),d$k(this.host,e));}_cast(t,e){const s=m$g.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}class d$j{constructor(){this.value=null,this.valid=!0;}acquire(){this.valid=!0;}release(){this.value=null;}}const m$g=new e$j(d$j);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$k(e,r,s){if(e&&r)if("object"==typeof r)for(const o of Object.getOwnPropertyNames(r))t$k(e,o,r[o]);else {if(-1!==r.indexOf(".")){const i=r.split("."),f=i.splice(i.length-1,1)[0];return void t$k(o$u(e,i),f,s)}e[r]=s;}}s$v.getLogger("esri.core.accessorSupport.set");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$j(e){e.length=0;}class t$j{constructor(t=50,o=50){this._pool=new e$j(Array,void 0,r$j,o,t);}acquire(){return this._pool.acquire()}release(e){this._pool.release(e);}prune(){this._pool.prune(0);}static acquire(){return o$r.acquire()}static release(e){return o$r.release(e)}static prune(){o$r.prune();}}const o$r=new t$j(100);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$i extends e$j{constructor(){super(...arguments),this._set=new Set;}destroy(){super.destroy(),this._set=w$b();}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e));}_dispose(e){this._set.delete(e),super._dispose(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$i(){return e$v.queueMicrotask?e$v.queueMicrotask:e=>{e$v.Promise.resolve().then(e);}}const t$h=e$i(),n$k=[];function r$i(o){n$k.push(o),1===n$k.length&&t$h((()=>{const o=n$k.slice();n$k.length=0;for(const e of o)e();}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$g=29;class e$h{constructor(e,s=t$g){this.name=e,this._counter=0,this._items=new Array(s);}record(t){this._items[++this._counter%this._items.length]=t;}get median(){return this._items.slice().sort(((t,e)=>t-e))[Math.floor(this._items.length/2)]}get average(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}get last(){return this._items[this._counter%this._items.length]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$q;!function(o){const t=(o,t,n,e)=>{let i=t,c=t;const l=n>>>1,r=o[i-1];for(;c<=l;){c=i<<1,c<n&&e(o[c-1],o[c])<0&&++c;const t=o[c-1];if(e(t,r)<=0)break;o[i-1]=t,i=c;}o[i-1]=r;},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c);const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c);}}function*i(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c),yield;const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c),yield;}}o.sort=e,o.iterableSort=i;}(o$q||(o$q={}));const t$f=o$q;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$g=1.5,l$h=1.1;class n$j{constructor(h){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new w$a,h&&(h.initialSize&&(this.data=new Array(h.initialSize)),h.allocator&&(this._allocator=h.allocator),void 0!==h.deallocator&&(this._deallocator=h.deallocator),h.shrink&&(this._shrink=()=>r$h(this)));}toArray(){return this.data.slice(0,this.length)}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t;}else {if(this._deallocator)for(let h=t;h<this._length;++h)this.data[h]=this._deallocator(this.data[h]);this._length=t,this._shrink();}}clear(){this.length=0;}prune(){this.clear(),this.data=[];}push(t){this.data[this._length++]=t;}pushArray(t,h=t.length){for(let i=0;i<h;i++)this.data[this._length++]=t[i];}fill(t,h){for(let i=0;i<h;i++)this.data[this._length++]=t;}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return ++this._length,t}unshift(t){this.data.unshift(t),this._length++,r$h(this);}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const i=b$a(this.data,t,this.length,this._hint);if(-1!==i)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){const h=v$b(this.data,t,this.length,this._hint);return void 0!==h&&(this.length=this.length-1),this._shrink(),h}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,h=t.length,i){this.length=O$3(this.data,t,this.length,h,this._hint,i),this._shrink();}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,h){t>=this.length||h>=this.length||t===h||([this.data[t],this.data[h]]=[this.data[h],this.data[t]]);}sort(t){t$f.sort(this.data,0,this.length,t);}iterableSort(t){return t$f.iterableSort(this.data,0,this.length,t)}some(t,h){for(let i=0;i<this.length;++i)if(t.call(h,this.data[i],i,this.data))return !0;return !1}filterInPlace(t,h){let i=0;for(let s=0;s<this._length;++s){const a=this.data[s];t.call(h,a,s,this.data)&&(this.data[s]=this.data[i],this.data[i]=a,i++);}if(this._deallocator)for(let s=i;s<this._length;s++)this.data[s]=this._deallocator(this.data[s]);return this._length=i,this._shrink(),this}forAll(t,h){const i=this.length,s=this.data;for(let a=0;a<i;++a)t.call(h,s[a],a,s);}forEach(t,h){for(let i=0;i<this.length;++i)t.call(h,this.data[i],i,this.data);}map(t,h){const i=new Array(this.length);for(let s=0;s<this.length;++s)i[s]=t.call(h,this.data[s],s,this.data);return i}reduce(t,h){let i=h;for(let s=0;s<this.length;++s)i=t(i,this.data[s],s,this.data);return i}has(t){const h=this.length,i=this.data;for(let s=0;s<h;++s)if(i[s]===t)return !0;return !1}}function r$h(t){t.data.length>e$g*t.length&&(t.data.length=Math.floor(t.length*l$h));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$i(n){return n}function r$g(r){return n$i(1e3*r)}function t$e(n){return n}function u$m(n){return t$e(.001*n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c$n{constructor(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1;}}class m$f{constructor(e){this.callback=e,this.isActive=!0;}remove(){this.isActive=!1;}}let l$g=0,p$h=0;const u$l={time:n$i(0),deltaTime:n$i(0),elapsedFrameTime:n$i(0),frameDuration:n$i(0)},f$h=["prepare","preRender","render","postRender","update"],h$e=[],d$i=new n$j;class w$7{constructor(e){this._task=e;}remove(){this._task.removed=!0;}pause(){this._task.paused=!0;}resume(){this._task.paused=!1;}}const k$7={frameTasks:d$i,willDispatch:!1,clearFrameTasks:j$6,dispatch:b$6,executeFrameTasks:D$3};function v$8(e){const r=new m$f(e);return h$e.push(r),k$7.willDispatch||(k$7.willDispatch=!0,r$i(b$6)),r}function A$5(e){const t=new c$n(e);return d$i.push(t),null==T$3&&(l$g=performance.now(),T$3=requestAnimationFrame(x$7)),new w$7(t)}let T$3=null;function j$6(e=!1){d$i.forAll((e=>{e.removed=!0;})),e&&_$8();}function F$2(e){p$h=Math.max(0,e);}function x$7(){const e=performance.now();T$3=null,T$3=d$i.length>0?requestAnimationFrame(x$7):null,k$7.executeFrameTasks(e);}function D$3(e){const t=n$i(e-l$g);l$g=e;const r=p$h>0?p$h:1e3/60,s=Math.max(0,t-r);for(let o=0;o<f$h.length;o++){const n=performance.now(),a=f$h[o];d$i.forAll((n=>{var c;if(n.paused||n.removed)return;0===o&&n.ticks++;n.phases[a]&&(u$l.time=e,u$l.deltaTime=0===n.ticks?n$i(0):t,u$l.elapsedFrameTime=n$i(performance.now()-e),u$l.frameDuration=n$i(r-s),null==(c=n.phases[a])||c.call(n,u$l));})),M$4[o].record(performance.now()-n);}_$8(),q$2.record(performance.now()-e);}const g$b=new n$j;function _$8(){d$i.forAll((e=>{e.removed&&g$b.push(e);})),d$i.removeUnorderedMany(g$b.data,g$b.length),g$b.clear();}function b$6(){for(;h$e.length;){const t=q$5(h$e.shift());t.isActive&&t.callback();}k$7.willDispatch=!1;}function y$c(e=1,r){const s=B$3(),i=()=>{p$l(r)?s.reject(m$i()):0===e?s():(--e,r$i((()=>i())));};return i(),s.promise}const M$4=f$h.map((e=>new e$h(e))),q$2=new e$h("total");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$h(r,n){for(const o of r.entries())if(n(o[0]))return !0;return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$d=0;const n$g=0;function e$f(){return ++t$d}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s$j{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0;}destroy(){this._accessed.length=0,this.clear();}onInvalidated(){this._invalidCount++;}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0;}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s);}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0;}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r$f=!1;const e$e=[];function o$p(e,o){let u=new s$j(s),l=null,f=!1;function s(){if(!u||f)return;if(r$f)return void i$n(s);const t=l;u.clear(),r$f=!0,f=!0,l=a$k(u,e),f=!1,r$f=!1,o(l,t),c$m();}function m(){u&&(u.destroy(),u=null,l=null);}return f=!0,l=a$k(u,e),f=!1,{remove:m}}function u$k(r,e){let o=new s$j(l),u=null;function l(){e(u,c);}function i(){o&&(o.destroy(),o=null),u=null;}function c(){return o?(o.clear(),u=a$k(o,r),u):null}return c(),{remove:i}}function l$f(e){let o=new s$j(l),u=!1;function l(){o&&!u&&(r$f?i$n(l):(o.clear(),r$f=!0,u=!0,a$k(o,e),u=!1,r$f=!1,c$m()));}function f(){o&&(o.destroy(),o=null);}return u=!0,a$k(o,e),u=!1,{remove:f}}function i$n(n){e$e.includes(n)||e$e.unshift(n);}function c$m(){for(;e$e.length;)e$e.pop()();}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d$h{constructor(){this.uid=e$f(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null;}static acquireUntracked(e,r,o,l,i){return this.pool.acquire(0,e,r,o,l,i,m$k)}static acquireTracked(e,t,r,o){return this.pool.acquire(1,e,t,r,null,null,o)}notify(e,t){0===this.type?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t);}acquire(e,t,r,o,l,n,s){this.uid=e$f(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=o,this.target=l,this.path=n,this.equals=s;}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=e$f(),this.removed=!0;}}d$h.pool=new t$i(d$h);const h$d=new t$j,f$g=new Set;let m$e;function p$g(e){f$g.delete(e),f$g.add(e),m$e||(m$e=v$8(q$1));}function v$7(e){if(e.removed)return;const t=e.oldValue,r=e.getValue();e.equals(t,r)||(e.oldValue=r,e.notify(r,t));}function _$7(e){for(const t of f$g.values())t.target===e&&(t.removed=!0);}function q$1(){let e=10;for(;m$e&&e--;){m$e=null;const e=j$5(),t=h$d.acquire();for(const r of e){const e=r.uid;v$7(r),e===r.uid&&r.removed&&t.push(r);}for(const r of f$g)r.removed&&(t.push(r),f$g.delete(r));for(const r of t)d$h.pool.release(r);h$d.release(t),h$d.release(e),k$6.forEach((e=>e()));}}function j$5(){const e=h$d.acquire();e.length=f$g.size;let t=0;for(const r of f$g)e[t]=r,++t;return f$g.clear(),e}const k$6=new Set;function y$b(e){return k$6.add(e),{remove(){k$6.delete(e);}}}function V$1(e,t,r){let o=y$d(e,t,r,((e,t,r)=>{let l,i,s=u$k((()=>u$p(e,t)),((n,s)=>{e.__accessor__.destroyed||l&&l.uid!==i?o.remove():(l||(l=d$h.acquireUntracked(n,r,s,e,t),i=l.uid),p$g(l));}));return {remove:h$g((()=>{s.remove(),l&&(l.uid!==i||l.removed||(l.removed=!0,p$g(l)),l=null),o=s=null;}))}}));return o}function b$5(e,r,o){const l=y$d(e,r,o,((e,r,o)=>{let i=!1;return o$p((()=>u$p(e,r)),((n,s)=>{e.__accessor__.destroyed?l.remove():i||(i=!0,m$k(s,n)||o.call(e,n,s,r,e),i=!1);}))}));return l}function w$6(e,t,r,o=!1){return !e.__accessor__||e.__accessor__.destroyed?{remove(){}}:o?b$5(e,t,r):V$1(e,t,r)}function U$2(e,t,r){let o,l,i=u$k(e,((e,n)=>{o&&o.uid!==l?i.remove():(o||(o=d$h.acquireTracked(e,t,n,r),l=o.uid),p$g(o));}));return {remove:h$g((()=>{i.remove(),o&&(o.uid!==l||o.removed||(o.removed=!0,p$g(o)),o=null),i=null;}))}}function S$6(e,t,r){let o=!1;return o$p(e,((e,l)=>{o||(o=!0,r(l,e)||t(e,l),o=!1);}))}function A$4(e,r,o=!1,l=m$k){return o?S$6(e,r,l):U$2(e,r,l)}function P$2(e){return n$h(f$g,(t=>t.oldValue===e))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$f(n,t){for(const[r,o]of n)if(t(o,r))return !0;return !1}function t$c(n,t){for(const[r,o]of n)if(t(o,r))return o;return null}function r$e(n,t,r){const o=n.get(t);if(void 0!==o)return o;const f=r();return n.set(t,f),f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$d=s$v.getLogger("esri.core.Accessor");function t$b(e){return null==e?e:new Date(e)}function o$o(e){return null==e?e:!!e}function u$j(e){return null==e?e:e.toString()}function a$j(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function s$i(e){return null==e?e:Math.round(parseFloat(e))}function l$e(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function i$m(e,n){return null!=n&&e&&!(n instanceof e)}function c$l(e){return e&&"isCollection"in e}function f$f(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function p$f(e,n){if(!n||!n.constructor||!c$l(n.constructor))return y$a(e,n)?n:new e(n);const r=f$f(e.prototype.itemType),t=f$f(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(y$a(e,n),n):new e(n):n}function y$a(e,n){return !!l$e(n)&&(r$d.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+g$a(e)+"'"),!0)}function v$6(e,n){return null==n?n:c$l(e)?p$f(e,n):i$m(e,n)?y$a(e,n)?n:new e(n):n}function g$a(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const d$g=new WeakMap;function h$c(e){switch(e){case Number:return a$j;case S$5:return s$i;case Boolean:return o$o;case String:return u$j;case Date:return t$b;default:return r$e(d$g,e,(()=>v$6.bind(null,e)))}}function b$4(e,n){const r=h$c(e);return 1===arguments.length?r:r(n)}function m$d(e,n,r){return 1===arguments.length?m$d.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function w$5(e,n){return 1===arguments.length?m$d(b$4.bind(null,e)):m$d(b$4.bind(null,e),n)}function A$3(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>A$3(e,n-1,r))):e(r)}function $$2(e,n,r){if(2===arguments.length)return $$2.bind(null,e,n);if(!r)return r;let t=n,o=r=A$3(e,n,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function j$4(e,n,r){return 2===arguments.length?$$2(b$4.bind(null,e),n):$$2(b$4.bind(null,e),n,r)}function k$5(e){return !!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return !("string"===r||"number"===r||"function"===r&&e.length>1)}))}function M$3(e,n){if(2===arguments.length)return M$3(e).call(null,n);const t=new Set,o=e.filter((e=>"function"!=typeof e)),u=e.filter((e=>"function"==typeof e));for(const r of e)"string"!=typeof r&&"number"!=typeof r||t.add(r);let a=null,s=null;return (e,n)=>{if(null==e)return e;const l=typeof e,c="string"===l||"number"===l;return c&&(t.has(e)||u.some((e=>"string"===l&&e===String||"number"===l&&e===Number)))||"object"===l&&u.some((n=>!i$m(e,n)))?e:(c&&o.length?(a||(a=o.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),r$d.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&u.length?(s||(s=u.map((e=>g$a(e))).join(", ")),r$d.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):r$d.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function N$3(e,n){if(2===arguments.length)return N$3(e).call(null,n);const t={},o=[],u=[];for(const r in e.typeMap){const n=e.typeMap[r];t[r]=b$4(n),o.push(g$a(n)),u.push(r);}const a=()=>`'${o.join("', '")}'`,s=()=>`'${u.join("', '")}'`,c="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!i$m(e.base,n))return n;if(null==n)return n;const o=c(n)||e.defaultKeyValue,u=t[o];if(!u)return r$d.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${s()})`),null;if(!i$m(e.typeMap[o],n))return n;if("string"==typeof e.key&&!l$e(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return u(r)}return u(n)}}class S$5{}const T$2={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function _$6(e){if(!e||!("type"in e))return !1;switch(e.type){case"native":case"array":case"one-of":return !0}return !1}function B$1(e){switch(e.type){case"native":return b$4(e.value);case"array":return m$d(B$1(e.value));case"one-of":return C$2(e);default:return null}}function C$2(e){let n=null;return (t,o)=>F$1(t,e)?t:(null==n&&(n=D$2(e)),r$d.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),o&&(o.valid=!1),null)}function D$2(e){switch(e.type){case"native":switch(e.value){case Number:return "number";case String:return "string";case Boolean:return "boolean";case S$5:return "integer";case Date:return "date";default:return g$a(e.value)}case"array":return `array of ${D$2(e.value)}`;case"one-of":{const n=e.values.map((e=>D$2(e)));return `one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return "unknown"}function F$1(e,n){if(null==e)return !0;switch(n.type){case"native":switch(n.value){case Number:case S$5:return "number"==typeof e;case Boolean:return "boolean"==typeof e;case String:return "string"==typeof e}return e instanceof n.value;case"array":return !!Array.isArray(e)&&!e.some((e=>!F$1(e,n.value)));case"one-of":return n.values.some((n=>F$1(e,n)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d$f(n={}){return (o,i)=>{if(o===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${o.name}.${i}. Accessor does not support static properties.`);const s=Object.getOwnPropertyDescriptor(o,i),a=s$n(o,i);s&&(s.get||s.set?(a.get=s.get||a.get,a.set=s.set||a.set):"value"in s&&("value"in n&&s$v.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${i}" on "${o.constructor.name}" already defined in the metadata`,n),a.value=n.value=s.value)),null!=n.readOnly&&(a.readOnly=n.readOnly);const c=n.aliasOf;if(c){const t="string"==typeof c?c:c.source,e="string"==typeof c?null:!0===c.overridable;let r;a.dependsOn=[t],a.get=function(){let e=o$u(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=o$u(this,r);n&&(e=e.bind(n));}return e},a.readOnly||(a.set=e?function(t){void 0!==t?this._override(i,t):this._clearOverride(i);}:function(e){t$k(this,t,e);});}const p=n.type,u=n.types;a.cast||(p?a.cast=h$b(p):u&&(Array.isArray(u)?a.cast=m$d(N$3(u[0])):a.cast=N$3(u))),n.range&&(a.cast=v$5(a.cast,n.range)),i$q(a,n);}}function y$9(t,e,r){const n=s$n(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function h$b(t){let e=0,r=t;if(_$6(t))return B$1(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const l=r;if(k$5(l))return 0===e?M$3(l):$$2(M$3(l),e);if(1===e)return w$5(l);if(e>1)return j$4(l,e);const f=t;return f.from?f.from:b$4(f)}function v$5(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$e(n){if(n.json&&n.json.origins){const o=n.json.origins,e={"web-document":["web-scene","web-map"]};for(const n in e)if(o[n]){const s=o[n];e[n].forEach((n=>{o[n]=s;})),delete o[n];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$a extends s$u{constructor(e,s,r){if(super(e,s,r),!(this instanceof t$a))return new t$a(e,s,r)}}t$a.prototype.type="warning";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$d(e){return !!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$l=s$v.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p$e(t,r,n){var o,i;t&&(!n&&!r.read||null!=(o=r.read)&&o.reader||!1===(null==(i=r.read)?void 0:i.enabled)||d$e(t)&&o$B("read.reader",u$i(t),r));}function u$i(t){var e;const r=null!=(e=t.ndimArray)?e:0;if(r>1)return c$k(t);if(1===r)return a$i(t);if("type"in t&&l$d(t.type)){var n,o;const e=null==(n=t.type.prototype)||null==(o=n.itemType)?void 0:o.Type,r=a$i("function"==typeof e?{type:e}:{types:e});return (e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return s$h(t)}function s$h(t){return "type"in t?y$8(t.type):j$3(t.types)}function y$8(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void i$l.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const p=new t;return p.read(e,n),p}:t.fromJSON}function f$e(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>f$e(t,e,r,n-1))):t(e,void 0,r)}function c$k(t){var e;const r=s$h(t),n=f$e.bind(null,r),o=null!=(e=t.ndimArray)?e:0;return (t,e,r)=>{if(null==t)return t;t=n(t,r,o);let i=o,p=t;for(;i>0&&Array.isArray(p);)i--,p=p[0];if(void 0!==p)for(let n=0;n<i;n++)t=[t];return t}}function a$i(t){const e=s$h(t);return (t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t);}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function l$d(t){if(!e$d(t))return !1;const e=t.prototype.itemType;return !(!e||!e.Type)&&("function"==typeof e.Type?v$4(e.Type):m$c(e.Type))}function d$e(t){return "types"in t?m$c(t.types):v$4(t.type)}function v$4(t){return !Array.isArray(t)&&(!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||l$d(t)))}function m$c(t){for(const e in t.typeMap){if(!v$4(t.typeMap[e]))return !1}return !0}function j$3(t){var e;let n=null;const o=null!=(e=t.errorContext)?e:"type";return (e,p,u)=>{if(null==e)return e;const s=typeof e;if("object"!==s)return void i$l.error(`Expected JSON value of type 'object' to deserialize, but got '${s}'`);n||(n=g$9(t));const y=t.key;if("string"!=typeof y)return;const f=e[y],c=f?n[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!c){const t=`Type '${f||"unknown"}' is not supported`;return u&&u.messages&&e&&u.messages.push(new t$a(`${o}:unsupported`,t,{definition:e,context:u})),void i$l.error(t)}const a=new c;return a.read(e,u),a}}function g$9(t){const e={};for(const i in t.typeMap){var r,o;const p=t.typeMap[i],u=n$n(p.prototype);if("function"==typeof t.key)continue;const s=u.properties[t.key];if(!s)continue;null!=(r=s.json)&&r.type&&Array.isArray(s.json.type)&&1===s.json.type.length&&"string"==typeof s.json.type[0]&&(e[s.json.type[0]]=p);const y=null==(o=s.json)?void 0:o.write;if(!y||!y.writer){e[i]=p;continue}const f=y.target,c="string"==typeof f?f:t.key,a={};y.writer(i,a,c),a[c]&&(e[a[c]]=p);}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$c(e){if(e.json||(e.json={}),o$n(e.json),n$d(e.json),r$c(e.json),e.json.origins)for(const t in e.json.origins)o$n(e.json.origins[t]),n$d(e.json.origins[t]),r$c(e.json.origins[t]);return !0}function r$c(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name});}function o$n(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0);}function n$d(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$k=s$v.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer");function o$m(r,t){var e;if(!t.write||t.write.writer||!1===t.write.enabled&&!t.write.overridePolicy)return;const i=null!=(e=null==r?void 0:r.ndimArray)?e:0;r&&(1===i||"type"in r&&e$d(r.type))?t.write.writer=a$h:i>1?t.write.writer=w$4(i):t.types?Array.isArray(t.types)?t.write.writer=s$g(t.types[0]):t.write.writer=u$h(t.types):t.write.writer=l$c;}function u$h(r){return (t,e,n,i)=>t?f$d(t,r,i)?l$c(t,e,n,i):void 0:l$c(t,e,n,i)}function f$d(t,e,n){for(const r in e.typeMap)if(t instanceof e.typeMap[r])return !0;if(null!=n&&n.messages){var o,u;const f=null!=(o=e.errorContext)?o:"type",s=`Values of type '${null!=(u="function"!=typeof e.key?t[e.key]:t.declaredClass)?u:"Unknown"}' cannot be written`;n&&n.messages&&t&&n.messages.push(new s$t(`${f}:unsupported`,s,{definition:t,context:n})),i$k.error(s);}return !1}function s$g(r){return (t,e,n,i)=>{if(!t||!Array.isArray(t))return l$c(t,e,n,i);return l$c(t.filter((t=>f$d(t,r,i))),e,n,i)}}function l$c(r,t,n,i){o$B(n,p$d(r,i),t);}function p$d(r,t){return r&&"function"==typeof r.write?r.write({},t):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?y$7(r):r}function y$7(r){return r===-1/0?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function a$h(r,t,n,i){let o;null===r?o=null:r&&"function"==typeof r.map?(o=r.map((r=>p$d(r,i))),"function"==typeof o.toArray&&(o=o.toArray())):o=[p$d(r,i)],o$B(n,o,t);}function c$j(r,t,e){return 0!==e&&Array.isArray(r)?r.map((r=>c$j(r,t,e-1))):p$d(r,t)}function w$4(r){return function(t,n,i,o){let u;if(null===t)u=null;else {u=c$j(t,o,r);let e=r,n=u;for(;e>0&&Array.isArray(n);)e--,n=n[0];if(void 0!==n)for(let r=0;r<e;r++)u=[u];}o$B(i,u,n);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$l(r,n){return a$g(r,"read",n)}function s$f(r,n){return a$g(r,"write",n)}function a$g(r,n,e){let t=r&&r.json;if(r&&r.json&&r.json.origins&&e){const i=r.json.origins[e.origin];i&&("any"===n||n in i)&&(t=i);}return t}function p$c(r){const n=y$6(r);if(r.json.origins)for(const t in r.json.origins){const o=r.json.origins[t],s=o.types?f$c(o):n;p$e(s,o,!1),o.types&&!o.write&&r.json.write&&r.json.write.enabled&&(o.write={...r.json.write}),o$m(s,o);}p$e(n,r.json,!0),o$m(n,r.json);}function y$6(r){return r.json.types?u$g(r.json):r.type?j$2(r):u$g(r)}function f$c(r){return r.type?j$2(r):u$g(r)}function j$2(n){if(!n.type)return;let e=0,t=n.type;for(;Array.isArray(t)&&!k$5(t);)t=t[0],e++;return {type:t,ndimArray:e}}function u$g(r){if(!r.types)return;let n=0,e=r.types;for(;Array.isArray(e);)e=e[0],n++;return {types:e,ndimArray:n}}function c$i(r){e$c(r)&&(n$e(r),p$c(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$k=new Set,s$e=new Set;function i$j(t){return r=>{r.prototype.declaredClass=t,a$f(r);const i=[],n=[];let c=r.prototype;for(;c;)c.hasOwnProperty("initialize")&&!o$k.has(c.initialize)&&(o$k.add(c.initialize),i.push(c.initialize)),c.hasOwnProperty("destroy")&&!s$e.has(c.destroy)&&(s$e.add(c.destroy),n.push(c.destroy)),c=Object.getPrototypeOf(c);o$k.clear(),s$e.clear();class l extends r{constructor(...e){if(super(...e),this.constructor===l&&"function"==typeof this.postscript){if(i.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=i.length-1;e>=0;e--)i[e].call(this);}}),n.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<n.length;e++)n[e].call(this);}}});}this.postscript(...e);}}}return l.__accessorMetadata__=n$n(r.prototype),l.prototype.declaredClass=t,l}}function n$c(e,r){return null==r.get?function(){const r=this.__accessor__.properties.get(e);if(void 0===r)return;i$o(r);const o=this.__accessor__.store;return o.has(e)?o.get(e):r.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function a$f(t){const o=t.prototype,s=n$n(o).properties,i={};for(const e of Object.getOwnPropertyNames(s)){const t=s[e];c$i(t),i[e]={enumerable:!0,configurable:!0,get:n$c(e,t),set(r){const o=this.__accessor__;if(void 0!==o){if(!Object.isFrozen(this)){if(o.initialized&&t.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${e}' of ${this.declaredClass}`);if(2===o.lifecycle&&t.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${e}' of ${this.declaredClass}`);o.set(e,r);}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});}};}Object.defineProperties(t.prototype,i);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$f(t){if(null==t)return {value:t};if(Array.isArray(t))return {type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return {type:Boolean,value:t};case"string":return {type:String,value:t};case"number":return {type:Number,value:t};case"function":return {type:t,value:null};default:return}}class p$b{constructor(...t){if(this.constructor===p$b)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new g$c(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t));}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:e,constructor:o}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const c=this;class i extends c{constructor(...t){super(...t),this.inherited=null,o&&o.apply(this,t);}}n$n(i.prototype);for(const s in t){const r=t[s];i.prototype[s]="function"==typeof r?function(...t){const e=this.inherited;let o;this.inherited=function(...t){if(c.prototype[s])return c.prototype[s].apply(this,t)};try{o=r.apply(this,t);}catch(i){throw this.inherited=e,i}return this.inherited=e,o}:t[s];}for(const s in r){const t=u$f(r[s]);d$f(t)(i.prototype,s);}return i$j(e)(i)}postscript(t){const r=this.__accessor__,e=r.ctorArgs||t;r.initialize(),e&&(this.set(e),r.ctorArgs=null),r.constructed(),this.initialize();}initialize(){}destroy(){this.destroyed||(_$7(this),this.__accessor__.destroy());}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t);}get(t){return o$u(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(e){return t$o(s$v.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof e}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,r){return t$k(this,t,r),this}watch(t,r,e){return w$6(this,t,r,e)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,r){return this.__accessor__.override(t,r)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t);}_get(t){return this.__accessor__.internalGet(t)}_set(t,r){return this.__accessor__.internalSet(t,r),this}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$i{constructor(){this._emitter=new i$i.EventEmitter(this);}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(n){class o{constructor(t=null){this.target=t,this._listenersMap=null;}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null;}emit(t,e){const s=this._listenersMap&&this._listenersMap.get(t);if(!s)return !1;const r=this.target||this;return [...s].forEach((t=>{t.call(r,e);})),s.length>0}on(t,e){if(Array.isArray(t)){const r=t.map((t=>this.on(t,e)));return r$m(r)}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const r=this._listenersMap.get(t)||[];return r.push(e),this._listenersMap.set(t,r),{remove:()=>{const s=this._listenersMap&&this._listenersMap.get(t)||[],r=s.indexOf(e);r>=0&&s.splice(r,1);}}}once(t,e){const s=this.on(t,(t=>{s.remove(),e.call(null,t);}));return s}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0}}n.EventEmitter=o,n.EventedMixin=e=>{let s=class extends e{constructor(){super(...arguments),this._emitter=new o;}destroy(){this._emitter.clear();}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return s=e$w([i$j("esri.core.Evented")],s),s};let h=class extends p$b{constructor(){super(...arguments),this._emitter=new i$i.EventEmitter(this);}destroy(){this._emitter.clear();}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};h=e$w([i$j("esri.core.Evented")],h),n.EventedAccessor=h;}(i$i||(i$i={}));const n$b=i$i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$a(n){return (r,t)=>{r[t]=n;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$b{constructor(){this._observers=[];}observe(e){return this._observers.includes(e)||this._observers.push(e),new s$l(this._observers,e)}notify(){const s=this._observers.slice();for(let e=0;e<s.length;++e){const r=s[e];r.onInvalidated(),r.onCommitted();}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$e;class g$8{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0;}preventDefault(){this.cancellable&&(this.defaultPrevented=!0);}reset(e){this.defaultPrevented=!1,this.item=e;}}const p$a=new e$j(g$8,void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1;})),d$d=()=>{};function b$3(e){return e?e instanceof L$3?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function v$3(e){if(e&&e.length)return e[0]}function y$5(e,t,s,i){const r=Math.min(e.length-s,t.length-i);let n=0;for(;n<r&&e[s+n]===t[i+n];)n++;return n}function C$1(e,t,s,i){t&&t.forEach(((t,r,n)=>{e.push(t),C$1(e,s.call(i,t,r,n),s,i);}));}const A$2=new Set,x$6=new Set,E$3=new Set,j$1=new Map;let B=0,L$3=u$e=class extends n$b.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new e$b,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:B++});}static isCollection(e){return null!=e&&e instanceof u$e}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof u$e?{items:e}:e:{}}destroy(){this.removeAll();}*[Symbol.iterator](){yield*this.items;}get items(){return i$o(this._observable),this._items}set items(e){this._emitBeforeChanges(1)||(this._splice(0,this.length,...b$3(e)),this._emitAfterChanges(1));}hasEventListener(e){return "change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=d$d,s.removed=!0,e.splice(e.indexOf(s),1);}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return {remove(){s.remove();}}}add(e,t){if(i$o(this._observable),this._emitBeforeChanges(1))return this;const s=this.getNextIndex(null!=t?t:null);return this._splice(s,0,e),this._emitAfterChanges(1),this}addMany(e,t=this._items.length){if(i$o(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(1))return this;const s=this.getNextIndex(t);return this._splice(s,0,...b$3(e)),this._emitAfterChanges(1),this}removeAll(){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return [];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(2),e}clone(){return i$o(this._observable),this._createNewInstance({items:this._items.map(l$k)})}concat(...e){i$o(this._observable);const t=e.map(b$3);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return;const s=q$5(this._splice(0,this.length)),i=s.length;for(let r=0;r<i;r++)e.call(t,s[r],r,s);this._emitAfterChanges(2);}every(e,t){return i$o(this._observable),this._items.every(e,t)}filter(e,t){let s;return i$o(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return i$o(this._observable),this._items.find(e,t)}findIndex(e,t){return i$o(this._observable),this._items.findIndex(e,t)}flatten(e,t){i$o(this._observable);const s=[];return C$1(s,this,e,t),new u$e(s)}forEach(e,t){return i$o(this._observable),this._items.forEach(e,t)}getItemAt(e){return i$o(this._observable),this._items[e]}getNextIndex(e){i$o(this._observable);const t=this.length;return (e=null==e?t:e)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return i$o(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return i$o(this._observable),this._items.indexOf(e,t)}join(e=","){return i$o(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return i$o(this._observable),this._items.lastIndexOf(e,t)}map(e,t){i$o(this._observable);const s=this._items.map(e,t);return new u$e({items:s})}reorder(e,t=this.length-1){i$o(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(4))return e;this._splice(s,1),this._splice(t,0,e),this._emitAfterChanges(4);}return e}}pop(){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=v$3(this._splice(this.length-1,1));return this._emitAfterChanges(2),e}push(...e){return i$o(this._observable),this._emitBeforeChanges(1)||(this._splice(this.length,0,...e),this._emitAfterChanges(1)),this.length}reduce(e,t){i$o(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){i$o(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return i$o(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(i$o(this._observable),e<0||e>=this.length||this._emitBeforeChanges(2))return;const t=v$3(this._splice(e,1));return this._emitAfterChanges(2),t}removeMany(e){if(i$o(this._observable),!e||!e.length||this._emitBeforeChanges(2))return [];const t=e instanceof u$e?e.toArray():e,s=this._items,i=[],r=t.length;for(let n=0;n<r;n++){const e=t[n],r=s.indexOf(e);if(r>-1){const e=1+y$5(t,s,n+1,r+1),h=this._splice(r,e);h&&h.length>0&&i.push.apply(i,h),n+=e-1;}}return this._emitAfterChanges(2),i}reverse(){if(i$o(this._observable),this._emitBeforeChanges(4))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,...e)),this._emitAfterChanges(4),this}shift(){if(i$o(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=v$3(this._splice(0,1));return this._emitAfterChanges(2),e}slice(e=0,t=this.length){return i$o(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return i$o(this._observable),this._items.some(e,t)}sort(e){if(i$o(this._observable),!this.length||this._emitBeforeChanges(4))return this;const t=q$5(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,...t),this._emitAfterChanges(4),this}splice(e,t,...s){i$o(this._observable);const i=(t?2:0)|(s.length?1:0);if(this._emitBeforeChanges(i))return [];const r=this._splice(e,t,...s)||[];return this._emitAfterChanges(i),r}toArray(){return i$o(this._observable),this._items.slice()}toJSON(){return i$o(this._observable),this.toArray()}toLocaleString(){return i$o(this._observable),this._items.toLocaleString()}toString(){return i$o(this._observable),this._items.toString()}unshift(...e){return i$o(this._observable),!e.length||this._emitBeforeChanges(1)||(this._splice(0,0,...e),this._emitAfterChanges(1)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,...s){const i=this._items,r=this.itemType;let n,o;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=v$8((()=>this._dispatchChange()))),t){if(o=i.splice(e,t),this.hasEventListener("before-remove")){const t=p$a.acquire();t.target=this,t.cancellable=!0;for(let s=0,r=o.length;s<r;s++)n=o[s],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(s,1),i.splice(e,0,n),e+=1,s-=1,r-=1);p$a.release(t);}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=p$a.acquire();e.target=this,e.cancellable=!1;const t=o.length;for(let s=0;s<t;s++)e.reset(o[s]),this.emit("after-remove",e);p$a.release(e);}}if(s&&s.length){if(r){const e=[];for(const t of s){const s=r.ensureType(t);null==s&&null!=t||e.push(s);}s=e;}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),h=e===this.length;if(t||n){const r=p$a.acquire();r.target=this,r.cancellable=!0;const o=p$a.acquire();o.target=this,o.cancellable=!1;for(const l of s)t?(r.reset(l),this.emit("before-add",r),r.defaultPrevented||(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),n&&(o.reset(l),this.emit("after-add",o)))):(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),o.reset(l),this.emit("after-add",o));p$a.release(o),p$a.release(r);}else {if(h)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length);}}return (s&&s.length||o&&o.length)&&this._notifyChangeEvent(s,o),o}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=p$a.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,p$a.release(s);}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=p$a.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),p$a.release(t);}this._observable.notify();}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t});}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const s of e){const e=s.changes;A$2.clear(),x$6.clear(),E$3.clear();for(const{added:t,removed:s}of e){if(t)if(0===E$3.size&&0===x$6.size)for(const e of t)A$2.add(e);else for(const e of t)x$6.has(e)?(E$3.add(e),x$6.delete(e)):E$3.has(e)||A$2.add(e);if(s)if(0===E$3.size&&0===A$2.size)for(const e of s)x$6.add(e);else for(const e of s)A$2.has(e)?A$2.delete(e):(E$3.delete(e),x$6.add(e));}const i=t$j.acquire();A$2.forEach((e=>{i.push(e);}));const r=t$j.acquire();x$6.forEach((e=>{r.push(e);}));const n=this._items,h=s.items,o=t$j.acquire();if(E$3.forEach((e=>{h.indexOf(e)!==n.indexOf(e)&&o.push(e);})),s.listeners&&(i.length||r.length||o.length)){const e={target:this,added:i,removed:r,moved:o},t=s.listeners.length;for(let i=0;i<t;i++){const t=s.listeners[i];t.removed||t.callback.call(this,e);}}t$j.release(i),t$j.release(r),t$j.release(o);}A$2.clear(),x$6.clear(),E$3.clear();}};L$3.ofType=t=>{if(!t)return u$e;if(j$1.has(t))return j$1.get(t);let s=null;if("function"==typeof t)s=t.prototype.declaredClass;else if(t.base)s=t.base.prototype.declaredClass;else for(const e in t.typeMap){const i=t.typeMap[e].prototype.declaredClass;s?s+=` | ${i}`:s=i;}let i=class extends u$e{};return e$w([n$a({Type:t,ensureType:"function"==typeof t?b$4(t):N$3(t)})],i.prototype,"itemType",void 0),i=e$w([i$j(`esri.core.Collection<${s}>`)],i),j$1.set(t,i),i},e$w([d$f()],L$3.prototype,"length",void 0),e$w([d$f()],L$3.prototype,"items",null),L$3=u$e=e$w([i$j("esri.core.Collection")],L$3);const S$4=L$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let h$a=class extends p$b{constructor(r){super(r),this._groups=new Map;}destroy(){this.removeAll();}get size(){let r=0;return this._groups.forEach((e=>{r+=e.length;})),r}add(r,e){if(!this._isHandle(r)&&!Array.isArray(r)&&!S$4.isCollection(r))return this;const t=this._getOrCreateGroup(e);return Array.isArray(r)||S$4.isCollection(r)?r.forEach((r=>this._isHandle(r)&&t.push(r))):t.push(r),this.notifyChange("size"),this}forEach(r,e){if("function"==typeof r)this._groups.forEach((e=>e.forEach(r)));else {const s=this._getGroup(r);s&&e&&s.forEach(e);}}has(r){return this._groups.has(this._ensureGroupKey(r))}remove(r){if(Array.isArray(r)||S$4.isCollection(r))return r.forEach(this.remove,this),this;if(!this.has(r))return this;const e=this._getGroup(r);for(let s=0;s<e.length;s++)e[s].remove();return this._deleteGroup(r),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((r=>{for(let e=0;e<r.length;e++)r[e].remove();})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(r){return r&&!!r.remove}_getOrCreateGroup(r){if(this.has(r))return this._getGroup(r);const e=[];return this._groups.set(this._ensureGroupKey(r),e),e}_getGroup(r){return q$5(this._groups.get(this._ensureGroupKey(r)))}_deleteGroup(r){return this._groups.delete(this._ensureGroupKey(r))}_ensureGroupKey(r){return r||"_default_"}};e$w([d$f({readOnly:!0})],h$a.prototype,"size",null),h$a=e$w([i$j("esri.core.Handles")],h$a);const u$d=h$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c$h=/\?(\.|$)/g;function i$h(n,t,r,e){const o=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],u=f$b(n,t,r,e);for(const i of o){const t=i.trim().replace(c$h,"$1"),e=n.get(t);r.call(n,e,e,t,n);}return u}function f$b(n,t,r,e){return n.watch(t,r,e)}function l$b(n,t,r,e){return N$2(n,t,null,r,e)}function s$d(n,t,r,e){return z$3(n,t,U$1,r,e)}function a$e(n,t,r,e){return N$2(n,t,U$1,r,e)}function m$b(n,t,r,e){return z$3(n,t,V,r,e)}function p$9(n,t,r,e){return N$2(n,t,V,r,e)}function v$2(n,t,r,e){return z$3(n,t,k$4,r,e)}function d$c(n,t,r,e){return N$2(n,t,k$4,r,e)}function h$9(n,t,r,e){return z$3(n,t,q,r,e)}function g$7(n,t,r,e){return N$2(n,t,q,r,e)}function O(n,t,r,e){let o=!1;const u=n.watch(t,((t,e,u,c)=>{o||r.call(n,t,e,u,c);}),e);return {remove(){u.remove();},pause(){o=!0;},resume(){o=!1;}}}function $$1(r,e,o,u,c,f,l){const s={};function a(n){const t=s[n];t&&(f&&f(t.target,n,r,o),t.handle.remove(),delete s[n]);}const m=i$h(r,e,((e,i,f)=>{a(f),e$n(e)&&(s[f]={handle:r$p(e,o,u),target:e},c&&c(e,f,r,o));}),l);return {remove(){m.remove();for(const n in s)a(n);}}}function z$3(n,t,r,e,o){const u=n.watch(t,((t,o,u,c)=>{r&&!r(t)||null==e||e.call(n,t,o,u,c);}),o);if(Array.isArray(t))for(const c of t){const o=n.get(c);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}else {const o=n.get(t);r&&r(o)&&(null==e||e.call(n,o,o,t,n));}return u}function N$2(n,t,r,c,i){const f="function"==typeof c?c:null,l="object"==typeof c?c:null;"boolean"==typeof c&&(i=c);let s,a=!1;function m(){s&&(s.remove(),s=null);}const p=A$8();j$8(l,(()=>{m(),p.reject(m$i());}));const v={then:p.promise.then.bind(p.promise),catch:p.promise.catch.bind(p.promise),remove:m};return Object.freeze(v),s=z$3(n,t,r,((t,r,e,o)=>{a=!0,m(),f&&f.call(n,t,r,e,o),p.resolve({value:t,oldValue:r,propertyName:e,target:o});}),i),a&&m(),v}function U$1(n){return !!n}function V(n){return !n}function k$4(n){return !0===n}function q(n){return !1===n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$j(o,t){const e=t?{...t,source:o}:o;return d$f({aliasOf:e})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o$i{constructor(o,s={ignoreUnknown:!1}){this.jsonToAPI=o,this.options=s,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(o),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(o,s,i)=>{const n=this.toJSON(o);void 0!==n&&o$B(i,n,s);},this.write.isJSONMapWriter=!0;}toJSON(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}invertMap(t){const o={};for(const s in t)o[t[s]]=s;return o}getKeysSorted(t){const o=[];for(const s in t)o.push(s);return o.sort(),o}}function s$c(){return function(t){return new o$i(t,{ignoreUnknown:!0})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o$h,l$a,e$a;let t$9,r$b;const u$c=null!=(o$h=null==(l$a=e$v.esriConfig)?void 0:l$a.locale)?o$h:null==(e$a=e$v.dojoConfig)?void 0:e$a.locale;function c$g(){var o,l;return null!=(o=null!=u$c?u$c:null==(l=e$v.navigator)?void 0:l.language)?o:"en"}function i$g(){return void 0===r$b&&(r$b=c$g()),r$b}const d$b=[];function g$6(n){return d$b.push(n),{remove(){d$b.splice(d$b.indexOf(n),1);}}}const h$8=[];function p$8(n){return h$8.push(n),{remove(){d$b.splice(h$8.indexOf(n),1);}}}function m$a(){var n;const o=null!=(n=t$9)?n:c$g();r$b!==o&&(r$b=o,[...h$8].forEach((n=>{n.call(null,o);})),[...d$b].forEach((n=>{n.call(null,o);})));}null==e$v.addEventListener||e$v.addEventListener("languagechange",m$a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r$a={year:"numeric",month:"numeric",day:"numeric"},n$9={year:"numeric",month:"long",day:"numeric"},a$d={year:"numeric",month:"short",day:"numeric"},h$7={year:"numeric",month:"long",weekday:"long",day:"numeric"},m$9={hour:"numeric",minute:"numeric"},i$f={...m$9,second:"numeric"},s$b={"short-date":r$a,"short-date-short-time":{...r$a,...m$9},"short-date-short-time-24":{...r$a,...m$9,hour12:!1},"short-date-long-time":{...r$a,...i$f},"short-date-long-time-24":{...r$a,...i$f,hour12:!1},"short-date-le":r$a,"short-date-le-short-time":{...r$a,...m$9},"short-date-le-short-time-24":{...r$a,...m$9,hour12:!1},"short-date-le-long-time":{...r$a,...i$f},"short-date-le-long-time-24":{...r$a,...i$f,hour12:!1},"long-month-day-year":n$9,"long-month-day-year-short-time":{...n$9,...m$9},"long-month-day-year-short-time-24":{...n$9,...m$9,hour12:!1},"long-month-day-year-long-time":{...n$9,...i$f},"long-month-day-year-long-time-24":{...n$9,...i$f,hour12:!1},"day-short-month-year":a$d,"day-short-month-year-short-time":{...a$d,...m$9},"day-short-month-year-short-time-24":{...a$d,...m$9,hour12:!1},"day-short-month-year-long-time":{...a$d,...i$f},"day-short-month-year-long-time-24":{...a$d,...i$f,hour12:!1},"long-date":h$7,"long-date-short-time":{...h$7,...m$9},"long-date-short-time-24":{...h$7,...m$9,hour12:!1},"long-date-long-time":{...h$7,...i$f},"long-date-long-time-24":{...h$7,...i$f,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":m$9,"long-time":i$f},l$9=s$c()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});l$9.toJSON.bind(l$9);l$9.fromJSON.bind(l$9);const u$b={ar:"ar-u-nu-latn-ca-gregory"};let c$f=new WeakMap,D$1=s$b["short-date-short-time"];function T$1(t){const o=t||D$1;if(!c$f.has(o)){const t=i$g(),r=u$b[i$g()]||t;c$f.set(o,new Intl.DateTimeFormat(r,o));}return c$f.get(o)}function S$3(t){return s$b[t]||null}function L$2(t,o){return T$1(o).format(t)}p$8((()=>{c$f=new WeakMap,D$1=s$b["short-date-short-time"];}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$c={ar:"ar-u-nu-latn"};let e$9=new WeakMap,o$g={};function i$e(n){const i=n||o$g;if(!e$9.has(i)){const t=i$g(),o=a$c[i$g()]||t;e$9.set(i,new Intl.NumberFormat(o,n));}return q$5(e$9.get(i))}function u$a(t={}){const n={};return null!=t.digitSeparator&&(n.useGrouping=t.digitSeparator),null!=t.places&&(n.minimumFractionDigits=n.maximumFractionDigits=t.places),n}function m$8(t,n){return i$e(n).format(t)}p$8((()=>{e$9=new WeakMap,o$g={};}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$d=s$v.getLogger("esri.intl");function s$a(t,r,n={}){const{format:o={}}=n;return r$q(t,(t=>u$9(t,r,o)))}function u$9(t,e,n){let o,i;const s=t.indexOf(":");if(-1===s?o=t.trim():(o=t.slice(0,s).trim(),i=t.slice(s+1).trim()),!o)return "";const u=t$t(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$e(u,m):i?a$b(u,i):f$a(u)}function c$e(t,r){switch(r.type){case"date":return L$2(t,r.intlOptions);case"number":return m$8(t,r.intlOptions);default:return i$d.warn("missing format descriptor for key {key}"),f$a(t)}}function a$b(t,r){switch(r.toLowerCase()){case"dateformat":return L$2(t);case"numberformat":return m$8(t);default:return i$d.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L$2(t):/^numberformat/i.test(r)?m$8(t):f$a(t)}}function f$a(t){switch(typeof t){case"string":return t;case"number":return m$8(t);case"boolean":return ""+t;default:return t instanceof Date?L$2(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s$9=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o$f={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i$c(t){var e;return null!=(e=o$f[t])&&e}const a$a=[],c$d=new Map;function d$a(t){for(const e of c$d.keys())m$7(t.pattern,e)&&c$d.delete(e);}function l$8(t){return a$a.includes(t)||(d$a(t),a$a.unshift(t)),{remove(){const e=a$a.indexOf(t);e>-1&&(a$a.splice(e,1),d$a(t));}}}async function u$8(t){const e=i$g();c$d.has(t)||c$d.set(t,f$9(t,e));const n=c$d.get(t);return await _$5.add(n),n}function h$6(t){if(!s$9.test(t))return null;const[,e,n]=s$9.exec(t),r=e+(n?"-"+n.toUpperCase():"");return i$c(r)?r:i$c(e)?e:null}async function f$9(e,n){const r=[];for(const t of a$a)if(m$7(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(s){r.push(s);}if(r.length)throw new s$t("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new s$t("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function m$7(t,e){return "string"==typeof t?e.startsWith(t):t.test(e)}p$8((()=>{c$d.clear();}));const _$5=new class{constructor(){this._numLoading=0;}async waitForAll(){this._dfd&&await this._dfd.promise;}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=A$8());}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s$8(e,n,r,s){const a=n.exec(r);if(!a)throw new s$t("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],h=h$6(s),u=`${c}${l}.json`,w=h?`${c}${l}_${h}.json`:u;let f;try{f=await i$b(e(w));}catch(d){if(w===u)throw new s$t("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d});try{f=await i$b(e(u));}catch(d){throw new s$t("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d})}}return f}async function i$b(t){if(r$r(l$7.fetchBundleAsset))return l$7.fetchBundleAsset(t);const n=await E$4(t,{responseType:"text"});return JSON.parse(n.data)}class a$9{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let o;o="string"==typeof r?e=>new URL(e,new URL(r,e$v.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=o,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return s$8(this.getAssetUrl,this.matcher,e,t)}}function c$c(e){return new a$9(e)}const l$7={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
l$8(c$c({pattern:"esri/",location:a$m}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$8(e){return "string"==typeof e?document.getElementById(e):e}function t$8(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild);}function o$e(e,t){const n=t.parentNode;n&&n.insertBefore(e,t);}function r$9(e,t){for(;;){const n=e.firstChild;if(!n)break;t.appendChild(n);}}function i$a(e){e.parentNode&&e.parentNode.removeChild(e);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h$5{constructor(s){this.instance=s,this._resolver=A$8(),this._status=0,this._resolvingPromises=[],this._resolver.promise.then((()=>{this._status=1,this._cleanUp();}),(()=>{this._status=2,this._cleanUp();}));}addResolvingPromise(s){this._resolvingPromises.push(s),this._tryResolve();}isResolved(){return 1===this._status}isRejected(){return 2===this._status}isFulfilled(){return 0!==this._status}abort(){this._resolver.reject(m$i());}when(s,e){return this._resolver.promise.then(s,e)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null;}_tryResolve(){if(this.isFulfilled())return;const s=A$8(),e=[...this._resolvingPromises,q$5(s.promise)],t=this._allPromise=Promise.all(e);t.then((()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve(this.instance);}),(s=>{this.isFulfilled()||this._allPromise!==t||d$l(s)||this._resolver.reject(s);})),s.resolve();}}const n$8=e=>{let i=class extends e{constructor(...s){super(...s),this._promiseProps=new h$5(this),this.addResolvingPromise(Promise.resolve());}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,e){return new Promise(((s,e)=>{this._promiseProps.when(s,e);})).then(s,e)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s);}};return i=e$w([i$j("esri.core.Promise")],i),i};let m$6=class extends(n$8(p$b)){};m$6=e$w([i$j("esri.core.Promise")],m$6);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$d(){const t=n$7.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const o=o=>t[o].toString(16);return o(0)+o(1)+"-"+o(2)+"-"+o(3)+"-"+o(4)+"-"+o(5)+o(6)+o(7)}const n$7=e$v.crypto||e$v.msCrypto;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$c=Object.prototype.toString;function r$8(n){const o="__accessorMetadata__"in n?b$4(n):n;return function(...t){if(t.push(o),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return e$7.apply(this,t)}}function e$7(t,o,r,e){s$n(t,o).cast=e;}function i$9(t){return function(o,r){s$n(o,t).cast=o[r];}}function c$b(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o$c.call(t[0])?r$8(t[0]):1===t.length&&"string"==typeof t[0]?i$9(t[0]):void 0}

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
var _$4 = util;

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
  var i = _$4.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _$4.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _$4.trim(html.slice(0, -1));
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
          var isWhiteAttr = _$4.indexOf(whiteAttrList, name) !== -1;
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
var i$8,r$7,o$b=function(t){if("WebkitTransition"in t.style)i$8="webkitTransitionEnd",r$7="webkitAnimationEnd";else {if(!("transition"in t.style))throw new Error("Your browser is not supported!");i$8="transitionend",r$7="animationend";}},s$7=function(t){i$8||o$b(t);},a$8=function(t,e){return void 0===e&&(e=t+"-active"),function(n){s$7(n);var o=!1,a=function(s){o||(o=!0,n.removeEventListener(i$8,a),n.removeEventListener(r$7,a),n.classList.remove(t),n.classList.remove(e));};n.classList.add(t),n.addEventListener(i$8,a),n.addEventListener(r$7,a),requestAnimationFrame((function(){n.classList.add(e);}));}},c$a=function(t,e){return void 0===e&&(e=t+"-active"),function(n,o){s$7(n);var a=!1,c=function(t){a||(a=!0,n.removeEventListener(i$8,c),n.removeEventListener(r$7,c),o());};n.classList.add(t),n.addEventListener(i$8,c),n.addEventListener(r$7,c),requestAnimationFrame((function(){n.classList.add(e);}));}};function l$6(t){const n=t$j.acquire();for(let e=0;e<arguments.length;e++){const t=arguments[e],i=typeof t;if("string"===i)n.push(t);else if(Array.isArray(t))n.push.apply(n,t);else if("object"===i)for(const e in t)t[e]&&n.push(e);}const i=n.join(" ");return t$j.release(n),i}function d$9(t){const e=null==t?void 0:t.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function u$7(t){return d$9(t)?"rtl":"ltr"}function p$7(t){const e="data-node-ref";this[t.getAttribute(e)]=null;}function g$5(t){const e="data-node-ref";this[t.getAttribute(e)]=t;}function f$8(t,e){return ("enter"===t?a$8:c$a)(e)}s$v.getLogger("esri.widgets.support.widgetUtils");const m$5=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],h$4=m$5.reduce(((t,e)=>(t[e]=[],t)),{}),v$1=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],L$1=new Sanitizer({whiteList:h$4,onTagAttr:(t,e,n)=>{const i=`${e}="${n}"`;if(v$1.includes(e))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function w$3(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),r=n.top+n.height,o=i.top+i.height,s=n.top,a=i.top;(r>o||s<a)&&t.scrollIntoView({block:"end"});}function y$4(t){return "Enter"===t||" "===t}function b$2(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function E$2(){return b$2().startsWith("dark")}function k$3(){return "calcite-theme-"+(E$2()?"dark":"light")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$7="http://www.w3.org/",r$6=`${t$7}2000/svg`,o$a=`${t$7}1999/xlink`;let i$7,l$5=[],n$6=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t];})),t&&Object.keys(t).forEach((e=>{r[e]=t[e];})),r},s$6=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),p$6=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},d$8=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(s$6(e[o],t))return o;return -1},a$7=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let l=i.properties;if(!(l?void 0===l.key?l.bind:l.key:void 0))for(let n=0;n<e.length;n++)if(n!==t){let t=e[n];if(s$6(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},f$7=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties);}},c$9=[],u$6=!1,h$3=e=>{(e.children||[]).forEach(h$3),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode]);},m$4=()=>{u$6=!1,c$9.forEach(h$3),c$9.length=0;},v=e=>{c$9.push(e),u$6||(u$6=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m$4,{timeout:16}):setTimeout(m$4,16));},y$3=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),v(e));};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),v(e));},g$4=(t,i,l)=>{if(!i)return;let n=l.eventHandlerInterceptor,s=Object.keys(i),d=s.length;for(let a=0;a<d;a++){let d=s[a],f=i[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)x$5(t,f,!0);else if("classes"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o];f[r]&&t.classList.add(r);}}else if("styles"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=f[r];i&&(p$6(i),l.styleApplyer(t,r,i));}}else if("key"!==d&&null!=f){let s=typeof f;"function"===s?(0===d.lastIndexOf("on",0)&&(n&&(f=n(d,f,t,i)),"oninput"===d&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value;};}()),t[d]=f):l.namespace===r$6?"href"===d?t.setAttributeNS(o$a,d,f):t.setAttribute(d,f):"string"===s&&"value"!==d?"innerHTML"===d?t[d]=L$1.sanitize(f):t.setAttribute(d,f):t[d]=f;}}},b$1=(e,t,r)=>{if(t)for(let o of t)w$2(o,e,void 0,r);},N$1=(e,t,r)=>{b$1(e,t.children,r),t.text&&(e.textContent=t.text),g$4(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children]);},w$2=(e,t,o,i)=>{let l,s=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)l=e.domNode=d.createTextNode(e.text),void 0!==o?t.insertBefore(l,o):t.appendChild(l);else {for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(s-1),c=p.slice(s,a);"."===f?l.classList.add(c):"#"===f?l.id=c:("svg"===c&&(i=n$6(i,{namespace:r$6})),void 0!==i.namespace?l=e.domNode=d.createElementNS(i.namespace,c):(l=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&l.setAttribute("type",e.properties.type)),void 0!==o?t.insertBefore(l,o):l.parentNode!==t&&t.appendChild(l)),s=a+1;}}N$1(l,e,i);}},x$5=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r);}));},k$2=(t,i,l,n)=>{if(!l)return;let s=!1,d=Object.keys(l),a=d.length;for(let f=0;f<a;f++){let a=d[f],c=l[a],u=i[a];if("class"===a)u!==c&&(x$5(t,u,!1),x$5(t,c,!0));else if("classes"===a){let e=t.classList,r=Object.keys(c),o=r.length;for(let t=0;t<o;t++){let o=r[t],i=!!c[o];i!==!!u[o]&&(s=!0,i?e.add(o):e.remove(o));}}else if("styles"===a){let e=Object.keys(c),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=c[r];i!==u[r]&&(s=!0,i?(p$6(i),n.styleApplyer(t,r,i)):n.styleApplyer(t,r,""));}}else if(c||"string"!=typeof u||(c=""),"value"===a){let e=t[a];e!==c&&(t["oninput-value"]?e===t["oninput-value"]:c!==u)&&(t[a]=c,t["oninput-value"]=void 0),c!==u&&(s=!0);}else if(c!==u){let i=typeof c;"function"===i&&n.eventHandlerInterceptor||(n.namespace===r$6?"href"===a?t.setAttributeNS(o$a,a,c):t.setAttribute(a,c):"string"===i?"innerHTML"===a?t[a]=L$1.sanitize(c):"role"===a&&""===c?t.removeAttribute(a):t.setAttribute(a,c):t[a]!==c&&(t[a]=c),s=!0);}}return s},A$1=(e,t,r,o,n)=>{if(r===o)return !1;o=o||l$5;let p,c=(r=r||l$5).length,u=o.length,h=0,m=0,v=!1;for(;m<u;){let l=h<c?r[h]:void 0,u=o[m];if(void 0!==l&&s$6(l,u))v=i$7(l,u,n)||v,h++;else {let l=d$8(r,u,h+1);if(l>=0){for(p=h;p<l;p++)y$3(r[p]),a$7(r,p,e,"removed");v=i$7(r[l],u,n)||v,h=l+1;}else w$2(u,t,h<c?r[h].domNode:void 0,n),f$7(u),a$7(o,m,e,"added");}m++;}if(c>h)for(p=h;p<c;p++)y$3(r[p]),a$7(r,p,e,"removed");return v};i$7=(e,t,o)=>{let i=e.domNode,l=!1;if(e===t)return !1;let s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,l=!0,l}t.domNode=i;}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(o=n$6(o,{namespace:r$6})),e.text!==t.text&&(s=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,s=A$1(t,i,e.children,t.children,o)||s,s=k$2(i,e.properties,t.properties,o)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,o,t.vnodeSelector,t.properties,t.children]);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),l};let S$2=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,i$7(o,r,t);},domNode:e.domNode});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p$5={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o;}};let d$7=r=>n$6(p$5,r),n$5={create:(e,t)=>(t=d$7(t),w$2(e,document.createElement("div"),void 0,t),S$2(e,t)),append:(e,t,p)=>(p=d$7(p),w$2(t,e,void 0,p),S$2(t,p)),insertBefore:(e,t,p)=>(p=d$7(p),w$2(t,e.parentNode,e,p),S$2(t,p)),merge:(e,r,p)=>(p=d$7(p),r.domNode=e,N$1(e,r,p),S$2(r,p)),replace:(e,t,p)=>(p=d$7(p),w$2(t,e.parentNode,e,p),e.parentNode.removeChild(e),S$2(t,p))};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$6,n$4=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};t$6=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let o$9=(e,r)=>{let n=e;return r.forEach((e=>{n=n&&n.children?t$6(n.children,(r=>r.domNode===e)):void 0;})),n},d$6=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),p=n$4(d.currentTarget,i.domNode);p.reverse();let l,a=o$9(i.getLastRender(),p);return e.scheduleRender(),a&&(l=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),l};return (e,r,t,n)=>d},i$6=t=>{let n,o,i=d$7(t),p=i.performanceLogger,l=!0,a=!1,s=[],c=[],u=(e,r,t)=>{let o,l=()=>o;i.eventHandlerInterceptor=d$6(n,l,p),o=e(r,t(),i),s.push(o),c.push(t);},f=()=>{if(o=void 0,l){l=!1,p("renderStart",void 0);for(let e=0;e<s.length;e++){let r=c[e]();p("rendered",void 0),s[e].update(r),p("patched",void 0);}p("renderDone",void 0),l=!0;}};return n={renderNow:f,scheduleRender:()=>{o||a||(o=requestAnimationFrame(f));},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0;},resume:()=>{a=!1,l=!0,n.scheduleRender();},append:(e,t)=>{u(n$5.append,e,t);},insertBefore:(e,t)=>{u(n$5.insertBefore,e,t);},merge:(e,t)=>{u(n$5.merge,e,t);},replace:(e,t)=>{u(n$5.replace,e,t);},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),s.splice(r,1)[0];throw new Error("renderFunction was not found")}},n};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$6={handleInterceptedEvent:(e,p,t,n)=>(e.scheduleRender(),p.properties[`on${n.type}`].apply(p.properties.bind||t,[n]))};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$5={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{e.style[r]=o;}},r$5=r=>({...e$5,...r});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$8=(e,t)=>{const r=[];for(;e&&e!==t;)r.push(e),e=e.parentNode;return r},n$3=(e,t)=>e.find(t),d$5=(e,t,r=!1)=>{let o=e;return t.forEach(((e,d)=>{var s;const i=null!=(s=o)&&s.children?n$3(o.children,(t=>t.domNode===e)):void 0;r&&!i&&d!==t.length-1||(o=i);})),o},s$5=n=>{let s;const i={...e$6,...n},c=r$5(i),a=c.performanceLogger;let l,m=!0,p=!1;const u=[],f=[],v=(e,t,r)=>{let n;c.eventHandlerInterceptor=(e,t,r,c)=>function(e){let t;a("domEvent",e);const r=o$8(e.currentTarget,n.domNode),c=r.some((e=>{var t;return customElements.get(null==e||null==(t=e.tagName)?void 0:t.toLowerCase())}));if(e.eventPhase===Event.CAPTURING_PHASE||!c)r.reverse(),t=d$5(n.getLastRender(),r);else {const r=e.composedPath(),o=r.slice(r.indexOf(e.currentTarget),r.indexOf(n.domNode)).filter((e=>e.getRootNode()===e.ownerDocument)).reverse();t=d$5(n.getLastRender(),o,!0);}let l;return t&&(l=i.handleInterceptedEvent(s,t,this,e)),a("domEventProcessed",e),l},null==i.postProcessProjectionOptions||i.postProcessProjectionOptions(c);const l=r();n=e(t,l,c),u.push(n),f.push(r),i.afterFirstVNodeRendered&&i.afterFirstVNodeRendered(n,l);};let h=()=>{if(l=void 0,m){m=!1,a("renderStart",void 0);for(let e=0;e<u.length;e++){const t=f[e]();a("rendered",void 0),u[e].update(t),a("patched",void 0);}a("renderDone",void 0),m=!0;}};return i.modifyDoRenderImplementation&&(h=i.modifyDoRenderImplementation(h,u,f)),s={renderNow:h,scheduleRender:()=>{l||p||(l=requestAnimationFrame(h));},stop:()=>{l&&(cancelAnimationFrame(l),l=void 0),p=!0;},resume:()=>{p=!1,m=!0,s.scheduleRender();},append:(t,r)=>{v(n$5.append,t,r);},insertBefore:(t,r)=>{v(n$5.insertBefore,t,r);},merge:(t,r)=>{v(n$5.merge,t,r);},replace:(t,r)=>{v(n$5.replace,t,r);},detach:e=>{for(let t=0;t<f.length;t++)if(f[t]===e)return f.splice(t,1),u.splice(t,1)[0];throw new Error("renderFunction was not found")}},s};

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
const h$2 = (nodeName, vnodeData, ...children) => {
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
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h$2(null, null, renderFnResults);
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
        instance = instance.render && instance.render();
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
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
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
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`).then((importedModule) => {
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
let e$4;function r$4(){setAssetPath(T$5(a$m(e$4)));}e$4="components/assets";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$5=Symbol("widget"),r$3=[],n$2={},o$7=new WeakMap;function i$5(e,t){let o=t.children;if(o&&o.length)for(let r=0;r<o.length;++r)o[r]=i$5(e,o[r]);else o=r$3;const s=t.vnodeSelector;if(c$8(s)){const r=t.properties||n$2,i=r.key||s;return {vnodeSelector:"div",properties:{key:i,afterCreate:d$4,afterUpdate:a$6,afterRemoved:l$4,parentWidget:e,widgetConstructor:s,widgetProperties:{...r,key:i,children:o}},children:void 0,text:void 0,domNode:null}}return t}function d$4(t,r,n,{parentWidget:i,widgetConstructor:d,widgetProperties:a}){const c=new d(a);c.container=t,o$7.set(t,c),null==c.afterCreate||c.afterCreate(c,t),i._internalHandles.add(n$o((()=>l$4(t))));}function a$6(e,t,r,{widgetProperties:n}){const i=o$7.get(e);i&&(i.set(n),null==i.afterUpdate||i.afterUpdate(i,e));}function l$4(e){const t=o$7.get(e);t&&(t.destroy(),o$7.delete(e));}function c$8(e){return "function"==typeof e&&e[t$5]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const P$1="esri.widgets.Widget",E$1=s$v.getLogger(P$1);let L=0;const N=new Map,I$1={widgetIcon:"esri-icon-checkbox-unchecked"};function F(e,t){for(const r in t)null!=e[r]&&("object"==typeof e[r]&&"object"==typeof t[r]?F(e[r],t[r]):e[r]=t[r]);return e}const U=s$5({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,s,o,i)=>{const n=t(e,s,o,i),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in o)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>n.call(o,e);o.addEventListener(t,r,a);const s=()=>o.removeEventListener(t,r,a),d=i.afterRemoved;i.afterRemoved=e=>{null==d||d(e),s();};}return n};},handleInterceptedEvent(e,t,r,s){const{eventPhase:o,type:i}=s,n=o===Event.CAPTURING_PHASE;let a=`on${i}${n?"capture":""}`;const d=t.properties;(a in d||(a=`on${i[0].toUpperCase()}${i.slice(1)}${n?"Capture":""}`,a in d))&&(N.clear(),e.scheduleRender(),d[a].call(d.bind||r,s));}});let $=!1,x$4=class extends(n$8(n$b.EventedAccessor)){constructor(e,r){super(e,r),this._attached=!1,this._internalHandles=new u$d,this._projector=U,this._readyForTrueRender=!1,this.domNode=null,this.iconClass=I$1.widgetIcon,this.label=this.declaredClass.split(".").pop(),this.visible=!0,this.key=this,this._loadLocale=z$5((async()=>{if(this._messageBundleProps&&this._messageBundleProps.length){const e=await T$4(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{let r=await u$8(e);this.uiStrings&&Object.keys(this.uiStrings)&&(r=F(l$k(r),this.uiStrings)),this[t]=r;})));for(const t of e)t.error&&E$1.error("widget-intl:locale-error",this.declaredClass,t.error);}await this.loadLocale();})),r$4();const s=["light","dark"],n=b$2()||"light";s.includes(n)||s$q(E$1,"The following themes are deprecated: light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, and dark-red.",{version:"4.19",warnOnce:!0,see:"https://developers.arcgis.com/javascript/latest/styling/"});const a="esri-widget-uid-"+o$d(),d=this.render.bind(this);this._trackingTarget=new s$j((()=>this.scheduleRender()));const c=()=>{var e;if(!this._readyForTrueRender||this.destroyed)return null;if(!this.visible)return {vnodeSelector:"div",properties:{key:a,class:"",styles:{display:"none"}},domNode:void 0,children:void 0,text:void 0};const t=d();let{properties:r}=t;r||(t.properties=r={});let{key:s,styles:o}=r;s||(r.key=a),o||(r.styles=o={}),o.display||(o.display="");let i=0;return null==(e=t.children)||e.forEach((e=>{if(c$8(e.vnodeSelector))return;let{properties:t}=e;t||(e.properties=t={}),t.key||(t.key=`${this.id}--${i++}`);})),i$5(this,t)};this.render=()=>{if($)return c();let e=N.get(this);if(e)return e;this._trackingTarget.clear(),$=!0;try{e=a$k(this._trackingTarget,c);}finally{$=!1;}return N.set(this,e),e},this.addResolvingPromise(this._resourcesFetch=this.beforeFirstRender().then((()=>{this._readyForTrueRender=!0,this._postInitialize();})));}normalizeCtorArgs(e,t){const r={...e};return t&&(r.container=t),r}postInitialize(){}beforeFirstRender(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then((()=>{})).catch(w$8)}async loadDependencies(){}async loadLocale(){}destroy(){this.destroyed||(this._trackingTarget=l$n(this._trackingTarget),this.viewModel=l$n(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,N.delete(this));}set container(e){this._get("container")||this._set("container",e);}castContainer(e){return e$8(e)}get id(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+L++}set id(e){e&&this._set("id",e);}get renderable(){return this._resourcesFetch}get test(){return {projector:this._projector,handles:this._internalHandles}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(N.delete(this),this._projector.scheduleRender());}classes(...e){return l$6.apply(this,e)}own(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._internalHandles.add(e);}renderNow(){N.delete(this),this._projector.renderNow();}_postInitialize(){var e;if(this.destroyed)return;this.scheduleRender(),null!=(e=this._delegatedEventNames)&&e.length&&this._internalHandles.add(i$h(this,"viewModel",((e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&this._internalHandles.add(this._delegatedEventNames.map((t=>e.on(t,(e=>{this.emit(t,e);})))),"delegated-events");}))),this.postInitialize();const t=async()=>{await this._loadLocale().catch(w$8),this.scheduleRender();};this._internalHandles.add([g$6(t),this.watch("uiStrings",t),a$e(this,"container",(async e=>{this.destroyed||this._attach(e);}))]);}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0);}_detach(e){e&&this._attached&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e),this._attached=!1);}};x$4[t$5]=!0,e$w([d$f()],x$4.prototype,"_readyForTrueRender",void 0),e$w([d$f({value:null})],x$4.prototype,"container",null),e$w([c$b("container")],x$4.prototype,"castContainer",null),e$w([d$f({aliasOf:"container"})],x$4.prototype,"domNode",void 0),e$w([d$f()],x$4.prototype,"iconClass",void 0),e$w([d$f()],x$4.prototype,"id",null),e$w([d$f()],x$4.prototype,"label",void 0),e$w([d$f()],x$4.prototype,"renderable",null),e$w([d$f()],x$4.prototype,"uiStrings",void 0),e$w([d$f()],x$4.prototype,"viewModel",void 0),e$w([d$f()],x$4.prototype,"visible",void 0),e$w([d$f()],x$4.prototype,"key",void 0),e$w([d$f()],x$4.prototype,"children",void 0),e$w([d$f()],x$4.prototype,"afterCreate",void 0),e$w([d$f()],x$4.prototype,"afterUpdate",void 0),e$w([d$f()],x$4.prototype,"afterRemoved",void 0),x$4=e$w([i$j(P$1)],x$4);const z$2=x$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$4(e,r,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return !1;const o=e.read.source;if("string"==typeof o){if(o===r)return !0;if(o.indexOf(".")>-1&&0===o.indexOf(r)&&s$o(o,n))return !0}else for(const s of o){if(s===r)return !0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&s$o(s,n))return !0}return !1}function i$4(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function a$5(e,t,r,o,a){let f=o$l(t[r],a);i$4(f)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))f=o$l(t[i],a),s$4(f,r,o)&&(e[i]=!0);}function f$6(e,t,r,n){const s=r.metadatas,i=a$g(s[t],"any",n),a=i&&i.default;if(void 0===a)return;const f="function"==typeof a?a.call(e,t,n):a;void 0!==f&&r.set(t,f);}const c$7={origin:"service"};function u$5(t,o,s=c$7){if(!o||"object"!=typeof o)return;const i=e$l(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(o))a$5(d,u,e,o,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const a=o$l(u[r],s).read,f=a&&a.source;let c;c=f&&"string"==typeof f?u$p(o,f):o[r],a&&a.reader&&(c=a.reader.call(t,c,o,s)),void 0!==c&&i.set(r,c);}if(!s||!s.ignoreDefaults)for(const e of Object.getOwnPropertyNames(u))d[e]||f$6(t,e,i,s);i.setDefaultOrigin("user");}function d$3(e,t,r,n=c$7){var o;const s={...n,messages:[]};r(s),null==(o=s.messages)||o.forEach((t=>{"warning"!==t.type||e.loaded?n&&n.messages&&n.messages.push(t):e.loadWarnings.push(t);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l$3=s$v.getLogger("esri.core.accessorSupport.write");function a$4(r,e,t,i,n){var o,s;const u={};return null==(o=e.write)||null==(s=o.writer)||s.call(r,i,u,t,n),u}function f$5(r,t,i,o,s,u){if(!o||!o.write)return !1;const a=r.get(i);if(!s&&o.write.overridePolicy){const e=o.write.overridePolicy.call(r,a,i,u);void 0!==e&&(s=e);}if(s||(s=o.write),!s||!1===s.enabled)return !1;if((null===a&&!s.allowNull&&!s.writerEnsuresNonNull||void 0===a)&&s.isRequired){const t=new s$t("web-document-write:property-required",`Missing value for required property '${i}' on '${r.declaredClass}'`,{propertyName:i,target:r});return t&&u&&u.messages?u.messages.push(t):t&&!u&&l$3.error(t.name,t.message),!1}if(void 0===a)return !1;if(null===a&&!s.allowNull&&!s.writerEnsuresNonNull)return !1;if(c$6(r,i,u,o,a))return !1;if(void 0!==o.default)return !0;if(!s.ignoreOrigin&&u&&u.origin){if(t.store.originOf(i)<t$l(u.origin))return !1}return !0}function c$6(e,t,i,n,o){const s=n.default;if(void 0===s)return !1;if(null!=n.defaultEquals)return n.defaultEquals(o);if("function"==typeof s){if(Array.isArray(o)){const n=s.call(e,t,i);return l$m(n,o)}return !1}return s===o}function g$3(r,e,t,i){const n=e$l(r),s=n.metadatas,l=s$f(s[e],i);return !!l&&f$5(r,n,e,l,t,i)}function p$4(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return u$q(e,r.toJSON());const n=e$l(r),l=n.metadatas;for(const o in l){const p=s$f(l[o],t);if(!f$5(r,n,o,p,void 0,t))continue;const d=r.get(o),m=a$4(r,p,p.write&&"string"==typeof p.write.target?p.write.target:o,d,t);var c,g;if(Object.keys(m).length>0)e=u$q(e,m),null!=t&&null!=(c=t.resources)&&null!=(g=c.pendingOperations)&&g.length&&Promise.all(t.resources.pendingOperations).then((()=>u$q(e,m))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:o,oldOrigin:c$o(n.store.originOf(o)),newOrigin:t.origin});}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$3=t=>{let i=class extends t{constructor(...r){super(...r);}read(r,t){u$5(this,r,t);}write(r={},t){return p$4(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return c$5.call(this,r,t)}};return i=e$w([i$j("esri.core.JSONSupport")],i),i.prototype.toJSON.isDefaultToJSON=!0,i};function c$5(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}let a$3=class extends(i$3(p$b)){};a$3=e$w([i$j("esri.core.JSONSupport")],a$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$2(r,o,e){let i,n;return void 0===o?(n=r,i=[void 0]):"string"!=typeof o?(n=r,i=[void 0],e=o):(n=o,i=Array.isArray(r)?r:[r]),(r,o)=>{const p=r.constructor.prototype;for(const c of i){const i=y$9(r,c,n);i.write&&"object"==typeof i.write||(i.write={}),e&&(i.write.target=e),i.write.writer=p[o];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o$6;const r$1={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:13,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:14,102069:15,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102962:0,102963:0,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2};for(o$6=2e3;o$6<=2045;o$6++)r$1[o$6]=0;for(o$6=2056;o$6<=2065;o$6++)r$1[o$6]=0;for(o$6=2067;o$6<=2135;o$6++)r$1[o$6]=0;for(o$6=2137;o$6<=2154;o$6++)r$1[o$6]=0;for(o$6=2161;o$6<=2170;o$6++)r$1[o$6]=0;for(o$6=2172;o$6<=2193;o$6++)r$1[o$6]=0;for(o$6=2195;o$6<=2198;o$6++)r$1[o$6]=0;for(o$6=2200;o$6<=2203;o$6++)r$1[o$6]=0;for(o$6=2205;o$6<=2217;o$6++)r$1[o$6]=0;for(o$6=2222;o$6<=2224;o$6++)r$1[o$6]=1;for(o$6=2225;o$6<=2250;o$6++)r$1[o$6]=2;for(o$6=2251;o$6<=2253;o$6++)r$1[o$6]=1;for(o$6=2257;o$6<=2264;o$6++)r$1[o$6]=2;for(o$6=2274;o$6<=2279;o$6++)r$1[o$6]=2;for(o$6=2280;o$6<=2282;o$6++)r$1[o$6]=1;for(o$6=2283;o$6<=2289;o$6++)r$1[o$6]=2;for(o$6=2290;o$6<=2292;o$6++)r$1[o$6]=0;for(o$6=2308;o$6<=2313;o$6++)r$1[o$6]=0;for(o$6=2315;o$6<=2491;o$6++)r$1[o$6]=0;for(o$6=2494;o$6<=2866;o$6++)r$1[o$6]=0;for(o$6=2867;o$6<=2869;o$6++)r$1[o$6]=1;for(o$6=2870;o$6<=2888;o$6++)r$1[o$6]=2;for(o$6=2891;o$6<=2895;o$6++)r$1[o$6]=2;for(o$6=2896;o$6<=2898;o$6++)r$1[o$6]=1;for(o$6=2902;o$6<=2908;o$6++)r$1[o$6]=2;for(o$6=2915;o$6<=2920;o$6++)r$1[o$6]=2;for(o$6=2921;o$6<=2923;o$6++)r$1[o$6]=1;for(o$6=2924;o$6<=2930;o$6++)r$1[o$6]=2;for(o$6=2931;o$6<=2962;o$6++)r$1[o$6]=0;for(o$6=2964;o$6<=2968;o$6++)r$1[o$6]=2;for(o$6=2969;o$6<=2973;o$6++)r$1[o$6]=0;for(o$6=2975;o$6<=2991;o$6++)r$1[o$6]=0;for(o$6=2995;o$6<=3051;o$6++)r$1[o$6]=0;for(o$6=3054;o$6<=3079;o$6++)r$1[o$6]=0;for(o$6=3081;o$6<=3088;o$6++)r$1[o$6]=0;for(o$6=3092;o$6<=3101;o$6++)r$1[o$6]=0;for(o$6=3106;o$6<=3138;o$6++)r$1[o$6]=0;for(o$6=3146;o$6<=3151;o$6++)r$1[o$6]=0;for(o$6=3153;o$6<=3166;o$6++)r$1[o$6]=0;for(o$6=3168;o$6<=3172;o$6++)r$1[o$6]=0;for(o$6=3174;o$6<=3203;o$6++)r$1[o$6]=0;for(o$6=3294;o$6<=3358;o$6++)r$1[o$6]=0;for(o$6=3367;o$6<=3403;o$6++)r$1[o$6]=0;for(o$6=3408;o$6<=3416;o$6++)r$1[o$6]=0;for(o$6=3417;o$6<=3438;o$6++)r$1[o$6]=2;for(o$6=3441;o$6<=3446;o$6++)r$1[o$6]=2;for(o$6=3447;o$6<=3450;o$6++)r$1[o$6]=0;for(o$6=3451;o$6<=3459;o$6++)r$1[o$6]=2;for(o$6=3460;o$6<=3478;o$6++)r$1[o$6]=0;for(o$6=3554;o$6<=3559;o$6++)r$1[o$6]=0;for(o$6=3560;o$6<=3570;o$6++)r$1[o$6]=2;for(o$6=3571;o$6<=3581;o$6++)r$1[o$6]=0;for(o$6=3594;o$6<=3597;o$6++)r$1[o$6]=0;for(o$6=3601;o$6<=3604;o$6++)r$1[o$6]=0;for(o$6=3637;o$6<=3639;o$6++)r$1[o$6]=0;for(o$6=3665;o$6<=3667;o$6++)r$1[o$6]=0;for(o$6=3693;o$6<=3695;o$6++)r$1[o$6]=0;for(o$6=3701;o$6<=3727;o$6++)r$1[o$6]=0;for(o$6=3728;o$6<=3739;o$6++)r$1[o$6]=2;for(o$6=3740;o$6<=3751;o$6++)r$1[o$6]=0;for(o$6=3753;o$6<=3760;o$6++)r$1[o$6]=2;for(o$6=3761;o$6<=3773;o$6++)r$1[o$6]=0;for(o$6=3775;o$6<=3777;o$6++)r$1[o$6]=0;for(o$6=3779;o$6<=3781;o$6++)r$1[o$6]=0;for(o$6=3783;o$6<=3785;o$6++)r$1[o$6]=0;for(o$6=3788;o$6<=3791;o$6++)r$1[o$6]=0;for(o$6=3797;o$6<=3802;o$6++)r$1[o$6]=0;for(o$6=3814;o$6<=3816;o$6++)r$1[o$6]=0;for(o$6=3825;o$6<=3829;o$6++)r$1[o$6]=0;for(o$6=3832;o$6<=3841;o$6++)r$1[o$6]=0;for(o$6=3844;o$6<=3852;o$6++)r$1[o$6]=0;for(o$6=3873;o$6<=3885;o$6++)r$1[o$6]=0;for(o$6=3890;o$6<=3893;o$6++)r$1[o$6]=0;for(o$6=3907;o$6<=3912;o$6++)r$1[o$6]=0;for(o$6=3942;o$6<=3950;o$6++)r$1[o$6]=0;for(o$6=3968;o$6<=3970;o$6++)r$1[o$6]=0;for(o$6=3973;o$6<=3976;o$6++)r$1[o$6]=0;for(o$6=3986;o$6<=3989;o$6++)r$1[o$6]=0;for(o$6=3994;o$6<=3997;o$6++)r$1[o$6]=0;for(o$6=4048;o$6<=4051;o$6++)r$1[o$6]=0;for(o$6=4056;o$6<=4063;o$6++)r$1[o$6]=0;for(o$6=4093;o$6<=4096;o$6++)r$1[o$6]=0;for(o$6=4390;o$6<=4398;o$6++)r$1[o$6]=0;for(o$6=4399;o$6<=4413;o$6++)r$1[o$6]=2;for(o$6=4418;o$6<=4433;o$6++)r$1[o$6]=2;for(o$6=4455;o$6<=4457;o$6++)r$1[o$6]=2;for(o$6=4484;o$6<=4489;o$6++)r$1[o$6]=0;for(o$6=4491;o$6<=4554;o$6++)r$1[o$6]=0;for(o$6=4568;o$6<=4589;o$6++)r$1[o$6]=0;for(o$6=4652;o$6<=4656;o$6++)r$1[o$6]=0;for(o$6=4766;o$6<=4800;o$6++)r$1[o$6]=0;for(o$6=5014;o$6<=5016;o$6++)r$1[o$6]=0;for(o$6=5069;o$6<=5072;o$6++)r$1[o$6]=0;for(o$6=5105;o$6<=5130;o$6++)r$1[o$6]=0;for(o$6=5173;o$6<=5188;o$6++)r$1[o$6]=0;for(o$6=5253;o$6<=5259;o$6++)r$1[o$6]=0;for(o$6=5269;o$6<=5275;o$6++)r$1[o$6]=0;for(o$6=5292;o$6<=5311;o$6++)r$1[o$6]=0;for(o$6=5329;o$6<=5331;o$6++)r$1[o$6]=0;for(o$6=5343;o$6<=5349;o$6++)r$1[o$6]=0;for(o$6=5355;o$6<=5357;o$6++)r$1[o$6]=0;for(o$6=5387;o$6<=5389;o$6++)r$1[o$6]=0;for(o$6=5459;o$6<=5463;o$6++)r$1[o$6]=0;for(o$6=5479;o$6<=5482;o$6++)r$1[o$6]=0;for(o$6=5518;o$6<=5520;o$6++)r$1[o$6]=0;for(o$6=5530;o$6<=5539;o$6++)r$1[o$6]=0;for(o$6=5550;o$6<=5552;o$6++)r$1[o$6]=0;for(o$6=5562;o$6<=5583;o$6++)r$1[o$6]=0;for(o$6=5623;o$6<=5625;o$6++)r$1[o$6]=2;for(o$6=5631;o$6<=5639;o$6++)r$1[o$6]=0;for(o$6=5649;o$6<=5653;o$6++)r$1[o$6]=0;for(o$6=5663;o$6<=5680;o$6++)r$1[o$6]=0;for(o$6=5682;o$6<=5685;o$6++)r$1[o$6]=0;for(o$6=5875;o$6<=5877;o$6++)r$1[o$6]=0;for(o$6=5896;o$6<=5899;o$6++)r$1[o$6]=0;for(o$6=5921;o$6<=5940;o$6++)r$1[o$6]=0;for(o$6=6050;o$6<=6125;o$6++)r$1[o$6]=0;for(o$6=6244;o$6<=6275;o$6++)r$1[o$6]=0;for(o$6=6328;o$6<=6348;o$6++)r$1[o$6]=0;for(o$6=6350;o$6<=6356;o$6++)r$1[o$6]=0;for(o$6=6366;o$6<=6372;o$6++)r$1[o$6]=0;for(o$6=6381;o$6<=6387;o$6++)r$1[o$6]=0;for(o$6=6393;o$6<=6404;o$6++)r$1[o$6]=0;for(o$6=6480;o$6<=6483;o$6++)r$1[o$6]=0;for(o$6=6511;o$6<=6514;o$6++)r$1[o$6]=0;for(o$6=6579;o$6<=6581;o$6++)r$1[o$6]=0;for(o$6=6619;o$6<=6624;o$6++)r$1[o$6]=0;for(o$6=6625;o$6<=6627;o$6++)r$1[o$6]=2;for(o$6=6628;o$6<=6632;o$6++)r$1[o$6]=0;for(o$6=6634;o$6<=6637;o$6++)r$1[o$6]=0;for(o$6=6669;o$6<=6692;o$6++)r$1[o$6]=0;for(o$6=6707;o$6<=6709;o$6++)r$1[o$6]=0;for(o$6=6720;o$6<=6723;o$6++)r$1[o$6]=0;for(o$6=6732;o$6<=6738;o$6++)r$1[o$6]=0;for(o$6=6931;o$6<=6933;o$6++)r$1[o$6]=0;for(o$6=6956;o$6<=6959;o$6++)r$1[o$6]=0;for(o$6=7005;o$6<=7007;o$6++)r$1[o$6]=0;for(o$6=7057;o$6<=7070;o$6++)r$1[o$6]=2;for(o$6=7074;o$6<=7082;o$6++)r$1[o$6]=0;for(o$6=7109;o$6<=7118;o$6++)r$1[o$6]=0;for(o$6=7119;o$6<=7127;o$6++)r$1[o$6]=1;for(o$6=7374;o$6<=7376;o$6++)r$1[o$6]=0;for(o$6=7528;o$6<=7586;o$6++)r$1[o$6]=0;for(o$6=7587;o$6<=7645;o$6++)r$1[o$6]=2;for(o$6=7692;o$6<=7696;o$6++)r$1[o$6]=0;for(o$6=7755;o$6<=7787;o$6++)r$1[o$6]=0;for(o$6=7791;o$6<=7795;o$6++)r$1[o$6]=0;for(o$6=7799;o$6<=7801;o$6++)r$1[o$6]=0;for(o$6=7803;o$6<=7805;o$6++)r$1[o$6]=0;for(o$6=7825;o$6<=7831;o$6++)r$1[o$6]=0;for(o$6=7845;o$6<=7859;o$6++)r$1[o$6]=0;for(o$6=8013;o$6<=8032;o$6++)r$1[o$6]=0;for(o$6=8065;o$6<=8068;o$6++)r$1[o$6]=1;for(o$6=8518;o$6<=8529;o$6++)r$1[o$6]=2;for(o$6=8533;o$6<=8536;o$6++)r$1[o$6]=2;for(o$6=8538;o$6<=8540;o$6++)r$1[o$6]=2;for(o$6=8677;o$6<=8679;o$6++)r$1[o$6]=0;for(o$6=8836;o$6<=8840;o$6++)r$1[o$6]=0;for(o$6=8857;o$6<=8859;o$6++)r$1[o$6]=0;for(o$6=8908;o$6<=8910;o$6++)r$1[o$6]=0;for(o$6=9154;o$6<=9159;o$6++)r$1[o$6]=0;for(o$6=9205;o$6<=9218;o$6++)r$1[o$6]=0;for(o$6=9271;o$6<=9273;o$6++)r$1[o$6]=0;for(o$6=9295;o$6<=9297;o$6++)r$1[o$6]=0;for(o$6=9356;o$6<=9360;o$6++)r$1[o$6]=0;for(o$6=9404;o$6<=9407;o$6++)r$1[o$6]=0;for(o$6=9476;o$6<=9482;o$6++)r$1[o$6]=0;for(o$6=9487;o$6<=9494;o$6++)r$1[o$6]=0;for(o$6=9697;o$6<=9699;o$6++)r$1[o$6]=0;for(o$6=20002;o$6<=20032;o$6++)r$1[o$6]=0;for(o$6=20062;o$6<=20092;o$6++)r$1[o$6]=0;for(o$6=20135;o$6<=20138;o$6++)r$1[o$6]=0;for(o$6=20248;o$6<=20258;o$6++)r$1[o$6]=0;for(o$6=20348;o$6<=20358;o$6++)r$1[o$6]=0;for(o$6=20436;o$6<=20440;o$6++)r$1[o$6]=0;for(o$6=20822;o$6<=20824;o$6++)r$1[o$6]=0;for(o$6=20934;o$6<=20936;o$6++)r$1[o$6]=0;for(o$6=21035;o$6<=21037;o$6++)r$1[o$6]=0;for(o$6=21095;o$6<=21097;o$6++)r$1[o$6]=0;for(o$6=21148;o$6<=21150;o$6++)r$1[o$6]=0;for(o$6=21413;o$6<=21423;o$6++)r$1[o$6]=0;for(o$6=21453;o$6<=21463;o$6++)r$1[o$6]=0;for(o$6=21473;o$6<=21483;o$6++)r$1[o$6]=0;for(o$6=21780;o$6<=21782;o$6++)r$1[o$6]=0;for(o$6=21891;o$6<=21894;o$6++)r$1[o$6]=0;for(o$6=21896;o$6<=21899;o$6++)r$1[o$6]=0;for(o$6=22171;o$6<=22177;o$6++)r$1[o$6]=0;for(o$6=22181;o$6<=22187;o$6++)r$1[o$6]=0;for(o$6=22191;o$6<=22197;o$6++)r$1[o$6]=0;for(o$6=22234;o$6<=22236;o$6++)r$1[o$6]=0;for(o$6=22521;o$6<=22525;o$6++)r$1[o$6]=0;for(o$6=22991;o$6<=22994;o$6++)r$1[o$6]=0;for(o$6=23028;o$6<=23038;o$6++)r$1[o$6]=0;for(o$6=23830;o$6<=23853;o$6++)r$1[o$6]=0;for(o$6=23866;o$6<=23872;o$6++)r$1[o$6]=0;for(o$6=23877;o$6<=23884;o$6++)r$1[o$6]=0;for(o$6=23886;o$6<=23894;o$6++)r$1[o$6]=0;for(o$6=23946;o$6<=23948;o$6++)r$1[o$6]=0;for(o$6=24311;o$6<=24313;o$6++)r$1[o$6]=0;for(o$6=24342;o$6<=24347;o$6++)r$1[o$6]=0;for(o$6=24370;o$6<=24374;o$6++)r$1[o$6]=10;for(o$6=24375;o$6<=24381;o$6++)r$1[o$6]=0;for(o$6=24718;o$6<=24721;o$6++)r$1[o$6]=0;for(o$6=24817;o$6<=24821;o$6++)r$1[o$6]=0;for(o$6=24877;o$6<=24882;o$6++)r$1[o$6]=0;for(o$6=24891;o$6<=24893;o$6++)r$1[o$6]=0;for(o$6=25391;o$6<=25395;o$6++)r$1[o$6]=0;for(o$6=25828;o$6<=25838;o$6++)r$1[o$6]=0;for(o$6=26191;o$6<=26195;o$6++)r$1[o$6]=0;for(o$6=26391;o$6<=26393;o$6++)r$1[o$6]=0;for(o$6=26701;o$6<=26722;o$6++)r$1[o$6]=0;for(o$6=26729;o$6<=26799;o$6++)r$1[o$6]=2;for(o$6=26801;o$6<=26803;o$6++)r$1[o$6]=2;for(o$6=26811;o$6<=26813;o$6++)r$1[o$6]=2;for(o$6=26847;o$6<=26870;o$6++)r$1[o$6]=2;for(o$6=26891;o$6<=26899;o$6++)r$1[o$6]=0;for(o$6=26901;o$6<=26923;o$6++)r$1[o$6]=0;for(o$6=26929;o$6<=26946;o$6++)r$1[o$6]=0;for(o$6=26948;o$6<=26998;o$6++)r$1[o$6]=0;for(o$6=27037;o$6<=27040;o$6++)r$1[o$6]=0;for(o$6=27205;o$6<=27232;o$6++)r$1[o$6]=0;for(o$6=27258;o$6<=27260;o$6++)r$1[o$6]=0;for(o$6=27391;o$6<=27398;o$6++)r$1[o$6]=0;for(o$6=27561;o$6<=27564;o$6++)r$1[o$6]=0;for(o$6=27571;o$6<=27574;o$6++)r$1[o$6]=0;for(o$6=27581;o$6<=27584;o$6++)r$1[o$6]=0;for(o$6=27591;o$6<=27594;o$6++)r$1[o$6]=0;for(o$6=28191;o$6<=28193;o$6++)r$1[o$6]=0;for(o$6=28348;o$6<=28358;o$6++)r$1[o$6]=0;for(o$6=28402;o$6<=28432;o$6++)r$1[o$6]=0;for(o$6=28462;o$6<=28492;o$6++)r$1[o$6]=0;for(o$6=29118;o$6<=29122;o$6++)r$1[o$6]=0;for(o$6=29168;o$6<=29172;o$6++)r$1[o$6]=0;for(o$6=29177;o$6<=29185;o$6++)r$1[o$6]=0;for(o$6=29187;o$6<=29195;o$6++)r$1[o$6]=0;for(o$6=29900;o$6<=29903;o$6++)r$1[o$6]=0;for(o$6=30161;o$6<=30179;o$6++)r$1[o$6]=0;for(o$6=30491;o$6<=30494;o$6++)r$1[o$6]=0;for(o$6=30729;o$6<=30732;o$6++)r$1[o$6]=0;for(o$6=31251;o$6<=31259;o$6++)r$1[o$6]=0;for(o$6=31265;o$6<=31268;o$6++)r$1[o$6]=0;for(o$6=31275;o$6<=31279;o$6++)r$1[o$6]=0;for(o$6=31281;o$6<=31297;o$6++)r$1[o$6]=0;for(o$6=31461;o$6<=31469;o$6++)r$1[o$6]=0;for(o$6=31491;o$6<=31495;o$6++)r$1[o$6]=0;for(o$6=31917;o$6<=31922;o$6++)r$1[o$6]=0;for(o$6=31965;o$6<=32e3;o$6++)r$1[o$6]=0;for(o$6=32001;o$6<=32003;o$6++)r$1[o$6]=2;for(o$6=32005;o$6<=32031;o$6++)r$1[o$6]=2;for(o$6=32033;o$6<=32060;o$6++)r$1[o$6]=2;for(o$6=32064;o$6<=32067;o$6++)r$1[o$6]=2;for(o$6=32074;o$6<=32077;o$6++)r$1[o$6]=2;for(o$6=32081;o$6<=32086;o$6++)r$1[o$6]=0;for(o$6=32107;o$6<=32130;o$6++)r$1[o$6]=0;for(o$6=32133;o$6<=32158;o$6++)r$1[o$6]=0;for(o$6=32164;o$6<=32167;o$6++)r$1[o$6]=2;for(o$6=32180;o$6<=32199;o$6++)r$1[o$6]=0;for(o$6=32201;o$6<=32260;o$6++)r$1[o$6]=0;for(o$6=32301;o$6<=32360;o$6++)r$1[o$6]=0;for(o$6=32601;o$6<=32662;o$6++)r$1[o$6]=0;for(o$6=32664;o$6<=32667;o$6++)r$1[o$6]=2;for(o$6=32701;o$6<=32761;o$6++)r$1[o$6]=0;for(o$6=53001;o$6<=53004;o$6++)r$1[o$6]=0;for(o$6=53008;o$6<=53019;o$6++)r$1[o$6]=0;for(o$6=53021;o$6<=53032;o$6++)r$1[o$6]=0;for(o$6=53034;o$6<=53037;o$6++)r$1[o$6]=0;for(o$6=53042;o$6<=53046;o$6++)r$1[o$6]=0;for(o$6=53074;o$6<=53080;o$6++)r$1[o$6]=0;for(o$6=54001;o$6<=54004;o$6++)r$1[o$6]=0;for(o$6=54008;o$6<=54019;o$6++)r$1[o$6]=0;for(o$6=54021;o$6<=54032;o$6++)r$1[o$6]=0;for(o$6=54034;o$6<=54037;o$6++)r$1[o$6]=0;for(o$6=54042;o$6<=54046;o$6++)r$1[o$6]=0;for(o$6=54048;o$6<=54053;o$6++)r$1[o$6]=0;for(o$6=54074;o$6<=54080;o$6++)r$1[o$6]=0;for(o$6=54098;o$6<=54101;o$6++)r$1[o$6]=0;for(o$6=102001;o$6<=102040;o$6++)r$1[o$6]=0;for(o$6=102042;o$6<=102063;o$6++)r$1[o$6]=0;for(o$6=102065;o$6<=102067;o$6++)r$1[o$6]=0;for(o$6=102070;o$6<=102117;o$6++)r$1[o$6]=0;for(o$6=102122;o$6<=102216;o$6++)r$1[o$6]=0;for(o$6=102221;o$6<=102377;o$6++)r$1[o$6]=0;for(o$6=102382;o$6<=102388;o$6++)r$1[o$6]=0;for(o$6=102389;o$6<=102398;o$6++)r$1[o$6]=2;for(o$6=102399;o$6<=102444;o$6++)r$1[o$6]=0;for(o$6=102445;o$6<=102447;o$6++)r$1[o$6]=2;for(o$6=102448;o$6<=102458;o$6++)r$1[o$6]=0;for(o$6=102459;o$6<=102468;o$6++)r$1[o$6]=2;for(o$6=102469;o$6<=102499;o$6++)r$1[o$6]=0;for(o$6=102500;o$6<=102519;o$6++)r$1[o$6]=1;for(o$6=102520;o$6<=102524;o$6++)r$1[o$6]=0;for(o$6=102525;o$6<=102529;o$6++)r$1[o$6]=2;for(o$6=102530;o$6<=102588;o$6++)r$1[o$6]=0;for(o$6=102590;o$6<=102598;o$6++)r$1[o$6]=0;for(o$6=102601;o$6<=102603;o$6++)r$1[o$6]=0;for(o$6=102605;o$6<=102628;o$6++)r$1[o$6]=0;for(o$6=102629;o$6<=102646;o$6++)r$1[o$6]=2;for(o$6=102648;o$6<=102700;o$6++)r$1[o$6]=2;for(o$6=102701;o$6<=102703;o$6++)r$1[o$6]=0;for(o$6=102707;o$6<=102730;o$6++)r$1[o$6]=2;for(o$6=102733;o$6<=102758;o$6++)r$1[o$6]=2;for(o$6=102767;o$6<=102900;o$6++)r$1[o$6]=0;for(o$6=102965;o$6<=102969;o$6++)r$1[o$6]=0;for(o$6=102971;o$6<=102973;o$6++)r$1[o$6]=0;for(o$6=102975;o$6<=102989;o$6++)r$1[o$6]=0;for(o$6=102990;o$6<=102992;o$6++)r$1[o$6]=1;for(o$6=102997;o$6<=103002;o$6++)r$1[o$6]=0;for(o$6=103003;o$6<=103008;o$6++)r$1[o$6]=2;for(o$6=103009;o$6<=103011;o$6++)r$1[o$6]=0;for(o$6=103012;o$6<=103014;o$6++)r$1[o$6]=2;for(o$6=103019;o$6<=103021;o$6++)r$1[o$6]=0;for(o$6=103022;o$6<=103024;o$6++)r$1[o$6]=2;for(o$6=103029;o$6<=103031;o$6++)r$1[o$6]=0;for(o$6=103032;o$6<=103034;o$6++)r$1[o$6]=2;for(o$6=103065;o$6<=103068;o$6++)r$1[o$6]=0;for(o$6=103074;o$6<=103076;o$6++)r$1[o$6]=0;for(o$6=103077;o$6<=103079;o$6++)r$1[o$6]=1;for(o$6=103080;o$6<=103082;o$6++)r$1[o$6]=0;for(o$6=103083;o$6<=103085;o$6++)r$1[o$6]=2;for(o$6=103090;o$6<=103093;o$6++)r$1[o$6]=0;for(o$6=103097;o$6<=103099;o$6++)r$1[o$6]=0;for(o$6=103100;o$6<=103102;o$6++)r$1[o$6]=2;for(o$6=103107;o$6<=103109;o$6++)r$1[o$6]=0;for(o$6=103110;o$6<=103112;o$6++)r$1[o$6]=2;for(o$6=103113;o$6<=103116;o$6++)r$1[o$6]=0;for(o$6=103117;o$6<=103120;o$6++)r$1[o$6]=2;for(o$6=103153;o$6<=103157;o$6++)r$1[o$6]=0;for(o$6=103158;o$6<=103162;o$6++)r$1[o$6]=2;for(o$6=103163;o$6<=103165;o$6++)r$1[o$6]=0;for(o$6=103166;o$6<=103168;o$6++)r$1[o$6]=1;for(o$6=103169;o$6<=103171;o$6++)r$1[o$6]=2;for(o$6=103186;o$6<=103188;o$6++)r$1[o$6]=0;for(o$6=103189;o$6<=103191;o$6++)r$1[o$6]=2;for(o$6=103192;o$6<=103195;o$6++)r$1[o$6]=0;for(o$6=103196;o$6<=103199;o$6++)r$1[o$6]=2;for(o$6=103200;o$6<=103224;o$6++)r$1[o$6]=0;for(o$6=103225;o$6<=103227;o$6++)r$1[o$6]=1;for(o$6=103232;o$6<=103237;o$6++)r$1[o$6]=0;for(o$6=103238;o$6<=103243;o$6++)r$1[o$6]=2;for(o$6=103244;o$6<=103246;o$6++)r$1[o$6]=0;for(o$6=103247;o$6<=103249;o$6++)r$1[o$6]=2;for(o$6=103254;o$6<=103256;o$6++)r$1[o$6]=0;for(o$6=103257;o$6<=103259;o$6++)r$1[o$6]=2;for(o$6=103264;o$6<=103266;o$6++)r$1[o$6]=0;for(o$6=103267;o$6<=103269;o$6++)r$1[o$6]=2;for(o$6=103300;o$6<=103375;o$6++)r$1[o$6]=0;for(o$6=103381;o$6<=103383;o$6++)r$1[o$6]=0;for(o$6=103384;o$6<=103386;o$6++)r$1[o$6]=1;for(o$6=103387;o$6<=103389;o$6++)r$1[o$6]=0;for(o$6=103390;o$6<=103392;o$6++)r$1[o$6]=2;for(o$6=103397;o$6<=103399;o$6++)r$1[o$6]=0;for(o$6=103400;o$6<=103471;o$6++)r$1[o$6]=2;for(o$6=103476;o$6<=103478;o$6++)r$1[o$6]=0;for(o$6=103479;o$6<=103481;o$6++)r$1[o$6]=2;for(o$6=103486;o$6<=103488;o$6++)r$1[o$6]=0;for(o$6=103489;o$6<=103491;o$6++)r$1[o$6]=2;for(o$6=103492;o$6<=103495;o$6++)r$1[o$6]=0;for(o$6=103496;o$6<=103499;o$6++)r$1[o$6]=2;for(o$6=103528;o$6<=103543;o$6++)r$1[o$6]=0;for(o$6=103544;o$6<=103548;o$6++)r$1[o$6]=2;for(o$6=103549;o$6<=103551;o$6++)r$1[o$6]=0;for(o$6=103552;o$6<=103554;o$6++)r$1[o$6]=1;for(o$6=103555;o$6<=103557;o$6++)r$1[o$6]=2;for(o$6=103558;o$6<=103560;o$6++)r$1[o$6]=0;for(o$6=103571;o$6<=103573;o$6++)r$1[o$6]=0;for(o$6=103574;o$6<=103576;o$6++)r$1[o$6]=2;for(o$6=103577;o$6<=103580;o$6++)r$1[o$6]=0;for(o$6=103581;o$6<=103583;o$6++)r$1[o$6]=2;for(o$6=103595;o$6<=103694;o$6++)r$1[o$6]=0;for(o$6=103696;o$6<=103699;o$6++)r$1[o$6]=0;for(o$6=103700;o$6<=103793;o$6++)r$1[o$6]=2;for(o$6=103794;o$6<=103872;o$6++)r$1[o$6]=0;for(o$6=103900;o$6<=103971;o$6++)r$1[o$6]=2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$2={102113:!0,102100:!0,3857:!0,3785:!0},_={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0},t$4='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',l$2=[-20037508.342788905,20037508.342788905],M$2=[-20037508.342787,20037508.342787],d$2={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:l$2,origin:M$2,dx:1e-5},102100:{wkTemplate:t$4,valid:l$2,origin:M$2,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:l$2,origin:M$2,dx:1e-5},3857:{wkTemplate:t$4,valid:l$2,origin:M$2,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}};function E(e,i){return !t$w(e)&&!t$w(i)&&(e===i||(null!=e.wkid||null!=i.wkid?e.wkid===i.wkid||T(e)&&T(i)||null!=i.latestWkid&&e.wkid===i.latestWkid||null!=e.latestWkid&&i.wkid===e.latestWkid:!(!e.wkt||!i.wkt)&&e.wkt.toUpperCase()===i.wkt.toUpperCase()))}function S$1(e){return I(e)&&e.wkid?d$2[e.wkid]:null}function R$1(e){return !!I(e)&&(e.wkid?null==r$1[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function o$5(e){return !(G$1(e)||C(e))}function A(e){return I(e)&&4326===e.wkid}function u$4(e){return I(e)&&4490===e.wkid}function T(e){return I(e)&&null!=e.wkid&&!0===a$2[e.wkid]}function k$1(e){return I(e)&&32662===e.wkid}function w$1(e){return 104971===e||104905===e}function G$1(e){return I(e)&&null!=e.wkid&&w$1(e.wkid)}function P(e){return 104903===e}function C(e){return I(e)&&null!=e.wkid&&P(e.wkid)}function s$3(e){return I(e)&&null!=e.wkid&&!0===_[e.wkid]}function I(r){return r$r(r)&&(null!=r.wkid&&r.wkid>=2e3||null!=r.wkt)}const c$4={wkid:4326,wkt:r$q(d$2[4326].wkTemplate,{Central_Meridian:"0.0"})},p$3={wkid:102100,latestWkid:3857},D={wkid:32662};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y$2;let S=y$2=class extends a$3{constructor(e){super(e),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null;}static fromJSON(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return y$2.WebMercator;if(4326===e.wkid)return y$2.WGS84}const t=new y$2;return t.read(e),t}normalizeCtorArgs(e){if(e&&"object"==typeof e)return e;return {["string"==typeof e?"wkt":"wkid"]:e}}get isWGS84(){return A(this)}get isWebMercator(){return T(this)}get isGeographic(){return R$1(this)}get isWrappable(){return s$3(this)}writeWkt(e,t){this.wkid||(t.wkt=e);}clone(){if(this===y$2.WGS84)return y$2.WGS84;if(this===y$2.WebMercator)return y$2.WebMercator;const e=new y$2;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=l$k(this.imageCoordinateSystem)),e}equals(e){if(null==e)return !1;if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return !1;const{id:t,referenceServiceName:r}=e.imageCoordinateSystem,{geodataXform:i}=e.imageCoordinateSystem,o=this.imageCoordinateSystem;return null==t||i?JSON.stringify(o)===JSON.stringify(e.imageCoordinateSystem):r?o.id===t&&o.referenceServiceName===r:o.id===t}return E(this,e)}toJSON(e){return this.write(void 0,e)}};S.GCS_NAD_1927=null,S.WGS84=null,S.WebMercator=null,S.PlateCarree=null,e$w([d$f({readOnly:!0})],S.prototype,"isWGS84",null),e$w([d$f({readOnly:!0})],S.prototype,"isWebMercator",null),e$w([d$f({readOnly:!0})],S.prototype,"isGeographic",null),e$w([d$f({readOnly:!0})],S.prototype,"isWrappable",null),e$w([d$f({type:S$5,json:{write:!0}})],S.prototype,"latestWkid",void 0),e$w([d$f({type:S$5,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return {isRequired:null===this.wkt}}}}}}})],S.prototype,"wkid",void 0),e$w([d$f({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return {isRequired:null===this.wkid}}}}}}})],S.prototype,"wkt",void 0),e$w([r$2("wkt"),r$2("web-scene","wkt")],S.prototype,"writeWkt",null),e$w([d$f({type:S$5,json:{write:!0}})],S.prototype,"vcsWkid",void 0),e$w([d$f({type:S$5,json:{write:!0}})],S.prototype,"latestVcsWkid",void 0),e$w([d$f()],S.prototype,"imageCoordinateSystem",void 0),S=y$2=e$w([i$j("esri.geometry.SpatialReference")],S),S.prototype.toJSON.isDefaultToJSON=!0,S.GCS_NAD_1927=new S({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),S.WGS84=new S(c$4),S.WebMercator=new S(p$3),S.PlateCarree=new S(D),Object.freeze&&(Object.freeze(S.GCS_NAD_1927),Object.freeze(S.WGS84),Object.freeze(S.WebMercator));const k=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$4(o,e,t){let a,c;return void 0===e||Array.isArray(e)?(c=o,t=e,a=[void 0]):(c=e,a=Array.isArray(o)?o:[o]),(o,e)=>{const d=o.constructor.prototype;a.forEach((a=>{const s=y$9(o,a,c);s.read&&"object"==typeof s.read||(s.read={}),s.read.reader=d[e],t&&(s.read.source=(s.read.source||[]).concat(t));}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c$3=class extends a$3{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=k.WGS84;}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,r){if(e instanceof k)return e;if(null!=e){const t=new k;return t.read(e,r),t}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache");}getCacheValue(e){return this.cache[e]}setCacheValue(e,r){this.cache[e]=r;}};e$w([d$f()],c$3.prototype,"type",void 0),e$w([d$f({readOnly:!0})],c$3.prototype,"cache",null),e$w([d$f({readOnly:!0})],c$3.prototype,"extent",null),e$w([d$f({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c$3.prototype,"hasM",void 0),e$w([d$f({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c$3.prototype,"hasZ",void 0),e$w([d$f({type:k,json:{write:!0}})],c$3.prototype,"spatialReference",void 0),e$w([o$4("spatialReference")],c$3.prototype,"readSpatialReference",null),c$3=e$w([i$j("esri.geometry.Geometry")],c$3);const p$2=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n,r,u,t){var l;(n.x=n.x+r,n.y=n.y+u,null!=t)&&(n.z=(null!=(l=n.z)?l:0)+t);return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$3(t,n){const s=t.x-n.x,r=t.y-n.y,a=t.hasZ&&n.hasZ?t.z-n.z:0;return Math.sqrt(s*s+r*r+a*a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i$2{constructor(i,s,t,e){this.semiMajorAxis=i,this.flattening=s,this.outerAtmosphereRimWidth=t;const h=1-this.flattening;this.semiMinorAxis=this.semiMajorAxis*h,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=e||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3;}get radius(){return this.semiMajorAxis}}const s$2=new i$2(6378137,1/298.257223563,3e5,.006694379990137799),t$2=new i$2(3396190,1/169.8944472236118,23e4),e$3=new i$2(1737400,0,0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$3=57.29577951308232,u$3=.017453292519943;function l$1(n){return n*o$3}function p$1(n){return n*u$3}function f$4(n){return n/s$2.radius}function c$2(n){return Math.PI/2-2*Math.atan(Math.exp(-n/s$2.radius))}function h$1(n){return null!=n.wkid||null!=n.wkt}const m$3=[0,0];function x$3(n,t,e,i,r){const s=n,a=r;if(a.spatialReference=e,"x"in s&&"x"in a)[a.x,a.y]=t(s.x,s.y,m$3,i);else if("xmin"in s&&"xmin"in a)[a.xmin,a.ymin]=t(s.xmin,s.ymin,m$3,i),[a.xmax,a.ymax]=t(s.xmax,s.ymax,m$3,i);else if("paths"in s&&"paths"in a||"rings"in s&&"rings"in a){const n="paths"in s?s.paths:s.rings,e=[];let r;for(let s=0;s<n.length;s++){const a=n[s];r=[],e.push(r);for(let n=0;n<a.length;n++)r.push(t(a[n][0],a[n][1],[0,0],i)),a[n].length>2&&r[n].push(a[n][2]),a[n].length>3&&r[n].push(a[n][3]);}"paths"in a?a.paths=e:a.rings=e;}else if("points"in s&&"points"in a){const n=s.points,e=[];for(let r=0;r<n.length;r++)e[r]=t(n[r][0],n[r][1],[0,0],i),n[r].length>2&&e[r].push(n[r][2]),n[r].length>3&&e[r].push(n[r][3]);a.points=e;}return r}function g$2(n,t){const e=n&&(h$1(n)?n:n.spatialReference),i=t&&(h$1(t)?t:t.spatialReference);return !(n&&"type"in n&&"mesh"===n.type||t&&"type"in t&&"mesh"===t.type||!e||!i)&&(!!E(i,e)||(T(i)&&A(e)||T(e)&&A(i)))}function M$1(i,o){if(t$w(i))return null;const u=i.spatialReference,l=o&&(h$1(o)?o:o.spatialReference);return g$2(u,l)?E(u,l)?l$k(i):T(l)?x$3(i,y$1,k.WebMercator,!1,l$k(i)):A(l)?x$3(i,d$1,k.WGS84,!1,l$k(i)):null:null}function y$1(n,t,e=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999);const r=p$1(t);return e[0]=p$1(n)*s$2.radius,e[1]=s$2.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),e}function d$1(n,t,e=[0,0],r=!1){const s=l$1(n/s$2.radius);return e[0]=r?s:s-360*Math.floor((s+180)/360),e[1]=l$1(Math.PI/2-2*Math.atan(Math.exp(-t/s$2.radius))),e}function R(t,i=!1,r=l$k(t)){return x$3(t,y$1,k.WebMercator,i,r)}function j(t,i=!1,r=l$k(t)){return x$3(t,d$1,k.WGS84,i,r)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$2;const f$3=[0,0];function g$1(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}const x$2=s$v.getLogger("esri.geometry.Point");let w=m$2=class extends p$2{constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point";}static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"));const r=e._get("spatialReference");t._set("spatialReference",Object.isFrozen(r)?r:r.clone());}normalizeCtorArgs(e,t,r,s,i){let o;if(Array.isArray(e))o=e,i=t,e=o[0],t=o[1],r=o[2],s=o[3];else if(e&&"object"==typeof e){if(o=e,e=null!=o.x?o.x:o.longitude,t=null!=o.y?o.y:o.latitude,r=o.z,s=o.m,(i=o.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new k(i)),null!=o.longitude||null!=o.latitude)if(null==o.longitude)x$2.warn(".longitude=","Latitude was defined without longitude");else if(null==o.latitude)x$2.warn(".latitude=","Longitude was defined without latitude");else if(!o.declaredClass&&i&&i.isWebMercator){const r=y$1(o.longitude,o.latitude,f$3);e=r[0],t=r[1];}}else g$1(r)?(i=r,r=null):g$1(s)&&(i=s,s=null);const a={x:e,y:t};return null==a.x&&null!=a.y?x$2.warn(".y=","Y coordinate was defined without an X coordinate"):null==a.y&&null!=a.x&&x$2.warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(a.spatialReference=i),null!=r&&(a.z=r),null!=s&&(a.m=s),a}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e));}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e));}get latitude(){const{spatialReference:e,x:t,y:r}=this;if(e){if(e.isWebMercator)return d$1(t,r,f$3)[1];if(e.isGeographic)return r}return null}set latitude(e){const{spatialReference:t,x:r}=this;t&&(t.isWebMercator?this._set("y",y$1(r,e,f$3)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e));}get longitude(){const{x:e,y:t,spatialReference:r}=this;if(r){if(r.isWebMercator)return d$1(e,t,f$3)[0];if(r.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:r}=this;r&&(r.isWebMercator?this._set("x",y$1(e,t,f$3)[0]):r.isGeographic&&this._set("x",e),this._set("longitude",e));}writeX(e,t,r){t[r]=isNaN(e)?"NaN":e;}readX(e){return "string"==typeof e?NaN:e}clone(){const e=new m$2;return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return m$2.copy(e,this),this}equals(e){if(!e)return !1;const{x:t,y:r,z:s,m:i,spatialReference:o}=this,{z:a,m:n}=e;let{x:l,y:c,spatialReference:p}=e;if(!o.equals(p))if(o.isWebMercator&&p.isWGS84)[l,c]=y$1(l,c),p=o;else {if(!o.isWGS84||!p.isWebMercator)return !1;[l,c]=d$1(l,c),p=o;}return t===l&&r===c&&s===a&&i===n&&o.wkid===p.wkid}offset(e,t,r){return n$1(this,e,t,r)}normalize(){if(!this.spatialReference)return this;const e=S$1(this.spatialReference);if(!e)return this;let t=this.x;const[r,s]=e.valid,i=2*s;let o;return t>s?(o=Math.ceil(Math.abs(t-s)/i),t-=o*i):t<r&&(o=Math.ceil(Math.abs(t-r)/i),t+=o*i),this._set("x",t),this}distance(e){return t$3(this,e)}toArray(){const e=this.hasZ,t=this.hasM;return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}};e$w([d$f({readOnly:!0})],w.prototype,"cache",null),e$w([d$f({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],w.prototype,"hasM",null),e$w([d$f({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],w.prototype,"hasZ",null),e$w([d$f({type:Number})],w.prototype,"latitude",null),e$w([d$f({type:Number})],w.prototype,"longitude",null),e$w([d$f({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),c$b((e=>isNaN(e)?e:a$j(e)))],w.prototype,"x",void 0),e$w([r$2("x")],w.prototype,"writeX",null),e$w([o$4("x")],w.prototype,"readX",null),e$w([d$f({type:Number,json:{write:!0}})],w.prototype,"y",void 0),e$w([d$f({type:Number,json:{write:{overridePolicy(){return {enabled:this.hasZ}}}}})],w.prototype,"z",void 0),e$w([d$f({type:Number,json:{write:{overridePolicy(){return {enabled:this.hasM}}}}})],w.prototype,"m",void 0),w=m$2=e$w([i$j("esri.geometry.Point")],w),w.prototype.toJSON.isDefaultToJSON=!0;const b=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$1=[0,0];function r(t,r){return !!r$r(r)&&f$2(t,r.x,r.y,r.z)}function i$1(n,t){if(!t.points||t.points.length)return !1;for(const r of t.points)if(!u$2(n,r))return !1;return !0}function o$2(n,t){const{xmin:r,ymin:i,zmin:o,xmax:u,ymax:e,zmax:c}=t;return n.hasZ&&t.hasZ?f$2(n,r,i,o)&&f$2(n,r,e,o)&&f$2(n,u,e,o)&&f$2(n,u,i,o)&&f$2(n,r,i,c)&&f$2(n,r,e,c)&&f$2(n,u,e,c)&&f$2(n,u,i,c):f$2(n,r,i)&&f$2(n,r,e)&&f$2(n,u,e)&&f$2(n,u,i)}function u$2(n,t){return f$2(n,t[0],t[1])}function e$2(n,t){return f$2(n,t[0],t[1],t[2])}function f$2(n,t,r,i){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==i||!n.hasZ||i>=n.zmin&&i<=n.zmax)}function c$1(n,r){return t$1[1]=r.y,t$1[0]=r.x,m$1(n,t$1)}function m$1(n,t){return s$1(n.rings,t)}function s$1(n,t){if(!n)return !1;if(x$1(n))return a$1(!1,n,t);let r=!1;for(let i=0,o=n.length;i<o;i++)r=a$1(r,n[i],t);return r}function x$1(n){return !Array.isArray(n[0][0])}function a$1(n,t,r){const[i,o]=r;let u=n,e=0;for(let f=0,c=t.length;f<c;f++){e++,e===c&&(e=0);const[n,r]=t[f],[m,s]=t[e];(r<o&&s>=o||s<o&&r>=o)&&n+(o-r)/(s-r)*(m-n)<i&&(u=!u);}return u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(t,e){return r(t,e)}function o$1(n,t){const e=n.hasZ&&t.hasZ;let r,i,o;if(n.xmin<=t.xmin){if(r=t.xmin,n.xmax<r)return !1}else if(r=n.xmin,t.xmax<r)return !1;if(n.ymin<=t.ymin){if(i=t.ymin,n.ymax<i)return !1}else if(i=n.ymin,t.ymax<i)return !1;if(e&&t.hasZ)if(n.zmin<=t.zmin){if(o=t.zmin,n.zmax<o)return !1}else if(o=n.zmin,t.zmax<o)return !1;return !0}function f$1(n,t){const{points:i,hasZ:o}=t,f=o?e$2:u$2;for(const e of i)if(f(n,e))return !0;return !1}const s=[0,0],c=[0,0],m=[0,0],u$1=[0,0],l=[s,c,m,u$1],a=[[m,s],[s,c],[c,u$1],[u$1,m]];function x(n,r){s[0]=n.xmin,s[1]=n.ymax,c[0]=n.xmax,c[1]=n.ymax,m[0]=n.xmin,m[1]=n.ymin,u$1[0]=n.xmax,u$1[1]=n.ymin;for(const e of l)if(m$1(r,e))return !0;for(const t of r.rings){if(!t.length)continue;let r=t[0];if(u$2(n,r))return !0;for(let i=1;i<t.length;i++){const o=t[i];if(u$2(n,o)||p(r,o,a))return !0;r=o;}}return !1}function y(n,t){s[0]=n.xmin,s[1]=n.ymax,c[0]=n.xmax,c[1]=n.ymax,m[0]=n.xmin,m[1]=n.ymin,u$1[0]=n.xmax,u$1[1]=n.ymin;const r=t.paths;for(const i of r){if(!r.length)continue;let t=i[0];if(u$2(n,t))return !0;for(let r=1;r<i.length;r++){const o=i[r];if(u$2(n,o)||p(t,o,a))return !0;t=o;}}return !1}const h=[0,0];function g(n){for(let t=0;t<n.length;t++){const e=n[t];for(let i=0;i<e.length-1;i++){const r=e[i],o=e[i+1];for(let e=t+1;e<n.length;e++)for(let t=0;t<n[e].length-1;t++){const i=n[e][t],f=n[e][t+1];if(z$1(r,o,i,f,h)&&!(h[0]===r[0]&&h[1]===r[1]||h[0]===i[0]&&h[1]===i[1]||h[0]===o[0]&&h[1]===o[1]||h[0]===f[0]&&h[1]===f[1]))return !0}}const r=e.length;if(!(r<=4))for(let n=0;n<r-3;n++){let t=r-1;0===n&&(t=r-2);const i=e[n],o=e[n+1];for(let r=n+2;r<t;r++){const n=e[r],t=e[r+1];if(z$1(i,o,n,t,h)&&!(h[0]===i[0]&&h[1]===i[1]||h[0]===n[0]&&h[1]===n[1]||h[0]===o[0]&&h[1]===o[1]||h[0]===t[0]&&h[1]===t[1]))return !0}}}return !1}function p(n,t,e){for(let r=0;r<e.length;r++)if(z$1(n,t,e[r][0],e[r][1]))return !0;return !1}function z$1(n,t,e,r,i){const[o,f]=n,[s,c]=t,[m,u]=e,[l,a]=r,x=l-m,y=o-m,h=s-o,g=a-u,p=f-u,z=c-f,G=g*h-x*z;if(0===G)return !1;const Z=(x*p-g*y)/G,P=(h*p-z*y)/G;return Z>=0&&Z<=1&&P>=0&&P<=1&&(i&&(i[0]=o+Z*(s-o),i[1]=f+Z*(c-f)),!0)}function G(n){switch(n){case"esriGeometryEnvelope":case"extent":return o$1;case"esriGeometryMultipoint":case"multipoint":return f$1;case"esriGeometryPoint":case"point":return i;case"esriGeometryPolygon":case"polygon":return x;case"esriGeometryPolyline":case"polyline":return y}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;function f(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}function d(t,i,e){return null==i?e:null==e?i:t(i,e)}let z=u=class extends p$2{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0;}normalizeCtorArgs(t,i,e,s,n){return f(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof t?(t.spatialReference=null==t.spatialReference?k.WGS84:t.spatialReference,t):{xmin:t,ymin:i,xmax:e,ymax:s,spatialReference:null==n?k.WGS84:n}}static fromBounds(t,i){return new u({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:i})}static fromPoint(t){return new u({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new b({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const i=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-i.x,t.y-i.y,t.z-i.z):this.offset(t.x-i.x,t.y-i.y)}clone(){const t=new u;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return !1;const i=this.spatialReference,e=t.spatialReference;return i&&e&&!i.equals(e)&&g$2(i,e)&&(t=i.isWebMercator?R(t):j(t,!0)),"point"===t.type?r(this,t):"extent"===t.type&&o$2(this,t)}equals(t){if(this===t)return !0;if(t$w(t))return !1;const e=this.spatialReference,s=t.spatialReference;return e&&s&&!e.equals(s)&&g$2(e,s)&&(t=e.isWebMercator?R(t):j(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const i=.5*(1-t),e=this.width*i,s=this.height*i;if(this.xmin+=e,this.ymin+=s,this.xmax-=e,this.ymax-=s,this.hasZ){const t=(this.zmax-this.zmin)*i;this.zmin+=t,this.zmax-=t;}if(this.hasM){const t=(this.mmax-this.mmin)*i;this.mmin+=t,this.mmax-=t;}return this}intersects(t){if(t$w(t))return !1;"mesh"===t.type&&(t=t.extent);const e=this.spatialReference,s=t.spatialReference;e&&s&&!e.equals(s)&&g$2(e,s)&&(t=e.isWebMercator?R(t):j(t,!0));return G(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,i,e){return this.xmin+=t,this.ymin+=i,this.xmax+=t,this.ymax+=i,null!=e&&(this.zmin+=e,this.zmax+=e),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=d(Math.min,this.zmin,t.zmin),this.zmax=d(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=d(Math.min,this.mmin,t.mmin),this.mmax=d(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:t$w(t)||!this.intersects(t)?null:(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=d(Math.max,this.zmin,t.zmin),this.zmax=d(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=d(Math.max,this.mmin,t.mmin),this.mmax=d(Math.min,this.mmax,t.mmax)),this)}toJSON(t){return this.write({},t)}_shiftCM(t=S$1(this.spatialReference)){if(!t||!this.spatialReference)return this;const i=this.spatialReference,s=this._getCM(t);if(s){const n=i.isWebMercator?j(s):s;this.xmin-=s.x,this.xmax-=s.x,i.isWebMercator||(n.x=this._normalizeX(n.x,t).x),this.spatialReference=new k(r$q(i.isWGS84?t.altTemplate:t.wkTemplate,{Central_Meridian:n.x}));}return this}_getCM(t){let i=null;const[e,s]=t.valid,n=this.xmin,m=this.xmax;return n>=e&&n<=s&&(m>=e&&m<=s)||(i=this.center),i}_normalize(t,i,e){const s=this.spatialReference;if(!s)return this;if(!(e=e||S$1(s)))return this;const n=this._getParts(e).map((t=>t.extent));if(n.length<2)return n[0]||this;if(n.length>2)return t?this._shiftCM(e):this.set({xmin:e.valid[0],xmax:e.valid[1]});if(t)return this._shiftCM(e);if(i)return n;let m=!0,r=!0;return n.forEach((t=>{t.hasZ||(m=!1),t.hasM||(r=!1);})),{rings:n.map((t=>{const i=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(m){const e=(t.zmax-t.zmin)/2;for(let t=0;t<i.length;t++)i[t].push(e);}if(r){const e=(t.mmax-t.mmin)/2;for(let t=0;t<i.length;t++)i[t].push(e);}return i})),hasZ:m,hasM:r,spatialReference:s}}_getParts(t){let i=this.cache._parts;if(!i){i=[];const{ymin:e,ymax:s,spatialReference:n}=this,m=this.width,r=this.xmin,a=this.xmax;let h;t=t||S$1(n);const[o,x]=t.valid;h=this._normalizeX(this.xmin,t);const p=h.x,c=h.frameId;h=this._normalizeX(this.xmax,t);const y=h.x,f=h.frameId,d=p===y&&m>0;if(m>2*x){const t=new u(r<a?p:y,e,x,s,n),m=new u(o,e,r<a?y:p,s,n),h=new u(0,e,x,s,n),l=new u(o,e,0,s,n),d=[],z=[];t.contains(h)&&d.push(c),t.contains(l)&&z.push(c),m.contains(h)&&d.push(f),m.contains(l)&&z.push(f);for(let i=c+1;i<f;i++)d.push(i),z.push(i);i.push({extent:t,frameIds:[c]},{extent:m,frameIds:[f]},{extent:h,frameIds:d},{extent:l,frameIds:z});}else p>y||d?i.push({extent:new u(p,e,x,s,n),frameIds:[c]},{extent:new u(o,e,y,s,n),frameIds:[f]}):i.push({extent:new u(p,e,y,s,n),frameIds:[c]});this.cache._parts=i;}const e=this.hasZ,s=this.hasM;if(e||s){const t={};e&&(t.zmin=this.zmin,t.zmax=this.zmax),s&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let e=0;e<i.length;e++)i[e].extent.set(t);}return i}_normalizeX(t,i){const[e,s]=i.valid,n=2*s;let m,r=0;return t>s?(m=Math.ceil(Math.abs(t-s)/n),t-=m*n,r=m):t<e&&(m=Math.ceil(Math.abs(t-e)/n),t+=m*n,r=-m),{x:t,frameId:r}}};e$w([d$f({readOnly:!0})],z.prototype,"cache",null),e$w([d$f({readOnly:!0})],z.prototype,"center",null),e$w([d$f({readOnly:!0})],z.prototype,"extent",null),e$w([d$f({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],z.prototype,"hasM",null),e$w([d$f({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],z.prototype,"hasZ",null),e$w([d$f({readOnly:!0})],z.prototype,"height",null),e$w([d$f({readOnly:!0})],z.prototype,"width",null),e$w([d$f({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],z.prototype,"xmin",void 0),e$w([d$f({type:Number,json:{write:!0}})],z.prototype,"ymin",void 0),e$w([d$f({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasM}}}}})],z.prototype,"mmin",void 0),e$w([d$f({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasZ}}}}})],z.prototype,"zmin",void 0),e$w([d$f({type:Number,json:{write:!0}})],z.prototype,"xmax",void 0),e$w([d$f({type:Number,json:{write:!0}})],z.prototype,"ymax",void 0),e$w([d$f({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasM}}}}})],z.prototype,"mmax",void 0),e$w([d$f({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasZ}}}}})],z.prototype,"zmax",void 0),z=u=e$w([i$j("esri.geometry.Extent")],z),z.prototype.toJSON.isDefaultToJSON=!0;const M=z;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e$1=function(r){return {vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}},o=function(r,t){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?o(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=e$1(d)),t.push(d));}},t=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return {vnodeSelector:r,properties:e||void 0,children:void 0,text:t[0],domNode:null};var i=[];return o(t,i),{vnodeSelector:r,properties:e||void 0,children:i,text:void 0,domNode:null}};function n(e,o,...n){return "function"!=typeof e||c$8(e)?t(e,o,...n):e(o,...n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return function(s,n){s.hasOwnProperty("_messageBundleProps")||(s._messageBundleProps=s._messageBundleProps?s._messageBundleProps.slice():[]);s._messageBundleProps.push({bundlePath:e,propertyName:n});}}

export { $$1 as $, r$r as A, r$p as B, l$m as C, l$k as D, C$5 as E, g$6 as F, u$8 as G, s$a as H, z$5 as I, w$8 as J, s$z as K, L$1 as L, i$v as M, o$i as N, O, g$7 as P, E$4 as Q, Rt as R, S$4 as S, T$4 as T, i$w as U, e$u as V, v$2 as W, l$6 as X, i$6 as Y, U$5 as Z, M as _, i$h as a, z$6 as a$, k as a0, a$3 as a1, o$4 as a2, r$2 as a3, o$B as a4, a$o as a5, d$3 as a6, M$7 as a7, R as a8, j as a9, T$1 as aA, g$5 as aB, y$4 as aC, n$r as aD, b as aE, L$5 as aF, w$3 as aG, o$A as aH, A$5 as aI, g$2 as aJ, r as aK, c$1 as aL, o$x as aM, n$f as aN, m$b as aO, s$d as aP, u$p as aQ, v$8 as aR, s$c as aS, S$5 as aT, O$1 as aU, u$j as aV, c$v as aW, a$j as aX, n$u as aY, c$s as aZ, Q$1 as a_, G$3 as aa, V$2 as ab, bt as ac, t$s as ad, N$3 as ae, t$w as af, n$a as ag, b$4 as ah, l$n as ai, b$7 as aj, D$6 as ak, P$4 as al, u$i as am, t$a as an, v$9 as ao, j$8 as ap, m$6 as aq, M$1 as ar, i$3 as as, r$n as at, t$o as au, r$o as av, p$l as aw, m$i as ax, i$g as ay, n$s as az, d$l as b, x$8 as b$, X$1 as b0, P$5 as b1, r$k as b2, q$5 as b3, u$5 as b4, n$l as b5, e$l as b6, t$l as b7, p$4 as b8, v$b as b9, t$8 as bA, o$e as bB, W$1 as bC, y$g as bD, B$3 as bE, G$1 as bF, C as bG, f$4 as bH, c$2 as bI, y$7 as bJ, e$f as bK, e$r as bL, d$n as bM, r$m as bN, e$v as bO, s$s as bP, r$q as bQ, p$7 as bR, E$2 as bS, s$r as bT, h$9 as bU, f$8 as bV, r$9 as bW, i$a as bX, u$7 as bY, xt as bZ, E$6 as b_, g$3 as ba, F$5 as bb, l$f as bc, g$e as bd, Ut as be, gt as bf, $$4 as bg, T$5 as bh, t$t as bi, s$i as bj, v$6 as bk, t$j as bl, E$5 as bm, A$8 as bn, s$y as bo, o$D as bp, s$x as bq, E as br, s$2 as bs, I as bt, p$2 as bu, m$n as bv, S$1 as bw, n$i as bx, e$8 as by, k$3 as bz, s$v as c, m$l as c$, ht as c0, t$2 as c1, e$3 as c2, w$1 as c3, P as c4, o$5 as c5, r$1 as c6, g as c7, k$8 as c8, E$7 as c9, y$b as cA, l$b as cB, u$m as cC, wt as cD, c$u as cE, n$g as cF, t$u as cG, s$w as cH, p$n as cI, h$g as cJ, F$2 as cK, o$d as cL, y$h as cM, A$a as cN, l$l as cO, n$h as cP, i$z as cQ, n$w as cR, P$2 as cS, o$C as cT, e$t as cU, t$p as cV, qt as cW, r$i as cX, H$1 as cY, r$e as cZ, i$y as c_, A$c as ca, et as cb, s$q as cc, R$1 as cd, e$j as ce, A$4 as cf, n$j as cg, A as ch, T as ci, k$1 as cj, q$3 as ck, e$h as cl, U$4 as cm, j$9 as cn, t$i as co, n$o as cp, a$s as cq, p$9 as cr, h$l as cs, i$A as ct, F$4 as cu, n$p as cv, g$g as cw, t$e as cx, r$g as cy, u$r as cz, d$f as d, t$v as d0, m$m as d1, n$v as d2, u$4 as d3, C$4 as d4, g$h as d5, y$c as d6, g$i as d7, a$r as d8, y as d9, createEvent as dA, t$n as dB, o$v as dC, p$o as dD, y$9 as dE, s$n as dF, t$c as dG, D$5 as dH, h$k as dI, u$u as dJ, f$n as dK, I$4 as dL, y$e as dM, y$j as dN, a$k as dO, s$j as dP, e$2 as dQ, v$5 as dR, T$2 as dS, u$t as dT, N$2 as dU, M$6 as dV, w$9 as dW, f$o as dX, request as dY, y$1 as da, d$1 as db, d$p as dc, v$c as dd, b$8 as de, A$9 as df, o$y as dg, pt as dh, f$l as di, C$3 as dj, z$1 as dk, c$4 as dl, u$v as dm, o$1 as dn, G as dp, i$1 as dq, b$a as dr, w$a as ds, rt as dt, ut as du, attachShadow as dv, h$2 as dw, Host as dx, proxyCustomElement as dy, getAssetPath as dz, e$w as e, c$b as f, f$b as g, h$h as h, i$j as i, e as j, a$e as k, n as l, a$m as m, n$8 as n, o$j as o, p$b as p, d$c as q, n$b as r, s$t as s, L$2 as t, u$d as u, m$8 as v, u$a as w, S$3 as x, d$9 as y, z$2 as z };
