'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},a=Object.values(l),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),f=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),v=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function p(e){return !!c.test(e)}function d(e){const t=request.U(e),n=t.path.match(c)||t.path.match(f);if(!n)return null;const[,s,i,o,u]=n,a=i.indexOf("/");return {title:w(-1!==a?i.slice(a+1):i),serverType:l[o.toLowerCase()],sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:s}}}function m(e){const t=request.U(e).path.match(v);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function w(e){return (e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function h(r,t){const n=[];if(r){const t=d(r);request.r(t)&&t.title&&n.push(t.title);}if(t){const e=w(t);n.push(e);}if(2===n.length){if(-1!==n[0].toLowerCase().indexOf(n[1].toLowerCase()))return n[0];if(-1!==n[1].toLowerCase().indexOf(n[0].toLowerCase()))return n[1]}return n.join(" - ")}function y(e){if(!e)return !1;const r=".arcgis.com/",t="//services",n="//tiles",s="//features",i=-1!==(e=e.toLowerCase()).indexOf(r),o=-1!==e.indexOf(t)||-1!==e.indexOf(n)||-1!==e.indexOf(s);return i&&o}function g(e,r){return e?request.gt(request.Ut(e,r)):e}function O(s){let{url:i}=s;if(!i)return {url:i};i=request.Ut(i,s.logger);const o=request.U(i),u=d(o.path);let l;if(request.r(u))null!=u.sublayer&&null==s.layer.layerId&&(l=u.sublayer),i=u.url.path;else if(s.nonStandardUrlAllowed){const r=m(o.path);request.r(r)&&(i=r.serviceUrl,l=r.sublayerId);}return {url:request.gt(i),layerId:l}}function C(e,r,t,n,i){unitUtils.p$2(r,n,"url",i),n.url&&null!=e.layerId&&(n.url=request.D(n.url,t,e.layerId.toString()));}function S(e){if(!e)return !1;const r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),n=-1!==r.indexOf("/mapserver/wmsserver"),s=-1!==r.indexOf("/imageserver/wmsserver"),i=-1!==r.indexOf("/wmsserver");return t&&(n||s||i)}function L(e){if(!e)return !1;const r=new request.$$1(request.T$2(e)).authority.toLowerCase();return "server.arcgisonline.com"===r||"services.arcgisonline.com"===r}

exports.C = C;
exports.L = L;
exports.O = O;
exports.S = S;
exports.d = d;
exports.g = g;
exports.h = h;
exports.m = m;
exports.p = p;
exports.w = w;
exports.y = y;
