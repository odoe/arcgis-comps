'use strict';

require('./geometry-ef17530a.js');
const request = require('./messageBundle-8be88d04.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-1f385b64.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e);}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r=null){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++;}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this.trim(),this.updateTimer();}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r);}updateMaxSize(t){this._size=t,this.trim();}empty(){this._cachedBlocks.clear(),this.clearTimer();}getCurrentSize(){return this._cachedBlocks.size}updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this.clearTimer();}),this._interval);}trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0]);}clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new Map,a=new t;function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function s(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(c.has(e)){const t=c.get(e);return t.push(n),t.length-1}return c.set(e,[n]),0}function u(e,t){if(c.has(e)){const n=c.get(e);n[t]=null,n.some((e=>null!=e))||c.delete(e);}}function h(e,t,n){if(!c.has(e))return null==t?a.decreaseRefCount(e,n):0;const o=c.get(e);if(null==o[t])return a.decreaseRefCount(e,n);const r=o[t].cache;if(r.has(n)){const e=r.get(n);if(e.refCount--,0===e.refCount){r.delete(n);for(let e=0;e<o.length;e++)o[e]&&o[e].cache.has(n)&&o[e].cache.delete(n);e.controller&&e.controller.abort();}return e.refCount}return 0}function m(e,t,n){if(!c.has(e))return null==t?a.getBlock(e,n):null;const o=c.get(e);if(null==o[t]){for(let e=0;e<o.length;e++)if(o[e]&&o[e].cache.has(n)){const t=o[e].cache.get(n);return t.refCount++,t.block}return a.getBlock(e,n)}const r=o[t].cache;if(r.has(n)){const e=r.get(n);return e.refCount++,e.block}for(let l=0;l<o.length;l++)if(l!==t&&o[l]&&o[l]&&o[l].cache.has(n)){const e=o[l].cache.get(n);return e.refCount++,r.set(n,e),e.block}return null}function x(e,t,n,o,r=null){if(!c.has(e))return void(null==t&&a.putBlock(e,n,o,r));const l=c.get(e);if(null==l[t])return void a.putBlock(e,n,o,r);const i={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:r};o.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),l[t].cache.set(n,i);}function d(e,t,n){if(!c.has(e))return void(null==t&&a.deleteBlock(e,n));const o=c.get(e);null!=o[t]?o[t].cache.delete(n):a.deleteBlock(e,n);}function y(e,t){if(!c.has(e))return null;const n=c.get(e);return null==n[t]?null:n[t]}function g(t,c,a,i,s,u,f=null){const h=y(t,c),m=h.extent,{cache:x,rasterInfo:d}=h;if(m&&m.xmin===a.xmin&&m.xmax===a.xmax&&m.ymin===a.ymin&&m.ymax===a.ymax)return;const g=a.clone().normalize(),{spatialReference:p,transform:k}=d,M=new Set;for(let y=0;y<g.length;y++){const t=g[y];if(t.xmax-t.xmin<=i||t.ymax-t.ymin<=i)continue;let c=rasterProjectionHelper.j(t,p,f);request.r(k)&&(c=k.inverseTransform(c));const a=new request.b$2({x:i,y:i,spatialReference:t.spatialReference});if(null==s&&!(s=rasterProjectionHelper.R(a,p,t,f)))return;const{pyramidLevel:h,pyramidResolution:m,excessiveReading:x}=rasterProjectionHelper.A(s,d,u||"closest");if(x)return;const{storageInfo:R}=d,{origin:C}=R,j={x:Math.max(0,Math.floor((c.xmin-C.x)/m.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/m.y))},v=Math.ceil((c.xmax-c.xmin)/m.x-.1),B=Math.ceil((c.ymax-c.ymin)/m.y-.1),b=h>0?R.pyramidBlockWidth:R.blockWidth,w=h>0?R.pyramidBlockHeight:R.blockHeight,$=1,I=Math.max(0,Math.floor(j.x/b)-$),H=Math.max(0,Math.floor(j.y/w)-$),E=Math.floor((j.x+v-1)/b)+$,P=Math.floor((j.y+B-1)/w)+$;for(let e=H;e<=P;e++)for(let t=I;t<=E;t++)M.add(`${h}/${e}/${t}`);}x.forEach(((e,t)=>{if(!M.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t);}})),h.extent={xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax};}

exports.d = d;
exports.g = g;
exports.h = h;
exports.i = i;
exports.m = m;
exports.s = s;
exports.u = u;
exports.x = x;
