import { cW as qt, dE as y, A as r, b7 as t$1, a_ as Q, af as t$2, bb as F, dF as s, cL as o$1, ak as D, bv as m$1 } from './messageBundle-f75b4090.js';
import { i as i$1 } from './multiOriginJSONSupportUtils-984fb5af.js';
import { m, i, U as U$1, R as R$1 } from './persistableUrlUtils-40bbec67.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=qt(p);return g$1[n]||a}const o={},a="text/plain",e=o[a],g$1={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g$1)o[g$1[l]]=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(r$1){const e=r(r$1)&&r$1.origins?r$1.origins:[void 0];return (t,o)=>{const i=w(r$1,t,o);for(const r of e){const e=y(t,r,o);for(const t in i)e[t]=i[t];}}}function w(r$1,e,o){if(r(r$1)&&"resource"===r$1.type)return v(r$1,e,o);switch(r(r$1)&&r$1.type?r$1.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=R$1;return {read:t,write:r}}}}function v(e,s$1,u){const p=s(s$1,u);return {type:String,read:(t,r,e)=>{const o=m(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return "string"==typeof s?void(a[l]=i(s,f)):void(a[l]=s.write({},f));const m=P(s),d=m?i(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=p.type!==String&&(!i$1(this)||f&&f.origin&&this.originIdOf(u)>t$1(f.origin));f&&f.portalItem&&r(d)&&!Q(d)?g?j(this,u,s,d,a,l,f,e):I(d,a,l,f):f&&f.portalItem&&(t$2(d)||r(U$1(d))||F(d)||g)?U(this,u,s,d,a,l,f,e):a[l]=d;}}}}function U(t,r,o,i,u,a,c,l){const m=o$1(),y=S(o,i,c),h=D(m$1(l,"prefix"),m),d=`${h}.${p(y)}`,g=c.portalItem.resourceFromPath(d);F(i)&&c.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${p(t)}`,u[a]=g.itemRelativeUrl;})).catch((()=>{}))),O(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl;}function j(t,r,e,o,i,n,s,p$1){const a=s.portalItem.resourceFromPath(o),c=S(e,o,s);p(c)===qt(a.path)?(O(t,r,a,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,p$1);}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}function O(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e);}});}function S(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await import('./messageBundle-f75b4090.js').then(function (n) { return n.dY; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return t$2(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

export { g };
