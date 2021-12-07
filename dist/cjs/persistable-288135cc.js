'use strict';

const request = require('./messageBundle-8be88d04.js');
const multiOriginJSONSupportUtils = require('./multiOriginJSONSupportUtils-13e8b6cf.js');
const persistableUrlUtils = require('./persistableUrlUtils-c611d652.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=request.qt(p);return g$1[n]||a}const o={},a="text/plain",e=o[a],g$1={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g$1)o[g$1[l]]=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(r){const e=request.r(r)&&r.origins?r.origins:[void 0];return (t,o)=>{const i=w(r,t,o);for(const r of e){const e=request.y$8(t,r,o);for(const t in i)e[t]=i[t];}}}function w(r,e,o){if(request.r(r)&&"resource"===r.type)return v(r,e,o);switch(request.r(r)&&r.type?r.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=persistableUrlUtils.R;return {read:t,write:r}}}}function v(e,s,u){const p=request.s$14(s,u);return {type:String,read:(t,r,e)=>{const o=persistableUrlUtils.m(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return "string"==typeof s?void(a[l]=persistableUrlUtils.i(s,f)):void(a[l]=s.write({},f));const m=P(s),d=m?persistableUrlUtils.i(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=p.type!==String&&(!multiOriginJSONSupportUtils.i(this)||f&&f.origin&&this.originIdOf(u)>request.t$4(f.origin));f&&f.portalItem&&request.r(d)&&!request.Q(d)?g?j(this,u,s,d,a,l,f,e):I(d,a,l,f):f&&f.portalItem&&(request.t$1(d)||request.r(persistableUrlUtils.U(d))||request.F(d)||g)?U(this,u,s,d,a,l,f,e):a[l]=d;}}}}function U(t,r,o,i,u,a,c,l){const m=request.o$9(),y=S(o,i,c),h=request.D(request.m$4(l,"prefix"),m),d=`${h}.${p(y)}`,g=c.portalItem.resourceFromPath(d);request.F(i)&&c.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${p(t)}`,u[a]=g.itemRelativeUrl;})).catch((()=>{}))),O(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl;}function j(t,r,e,o,i,n,s,p$1){const a=s.portalItem.resourceFromPath(o),c=S(e,o,s);p(c)===request.qt(a.path)?(O(t,r,a,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,p$1);}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}function O(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e);}});}function S(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await Promise.resolve().then(function () { return require('./messageBundle-8be88d04.js'); }).then(function (n) { return n.request; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return request.t$1(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

exports.g = g;
