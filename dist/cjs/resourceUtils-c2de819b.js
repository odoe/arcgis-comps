'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function c(e,t={},a){await e.load(a);const o=request.D(e.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:n,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:request.m$4(a,"signal")},p=await e.portal._request(o,l);return {total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function u(e,o,n,c){if(!e.hasPath())throw new request.s(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;await u.load(c);const i=request.D(u.userItemUrl,"add"===o?"addResources":"updateResources"),[l,d]=p(e.path),m=await h(n),f=new FormData;return l&&"."!==l&&f.append("resourcesPrefix",l),f.append("fileName",d),f.append("file",m,d),f.append("f","json"),request.r(c)&&c.access&&f.append("access",c.access),await u.portal._request(i,{method:"post",body:f,signal:request.m$4(c,"signal")}),e}async function i(e,a,o){if(!a.hasPath())throw new request.s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const n=request.D(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:a.path},signal:request.m$4(o,"signal")}),a.portalItem=null;}async function l(e,t){await e.load(t);const a=request.D(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:request.m$4(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return -1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=m(e),[a,o]=p(t);return [a,o,r]}function m(e){const t=request.qt(e);return request.t$1(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function h(t){if(t instanceof Blob)return t;return (await request.E(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(request.D(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(request.D(r,t+a))}

exports.addOrUpdateResource = u;
exports.contentToBlob = h;
exports.fetchResources = c;
exports.getSiblingOfSameType = f;
exports.getSiblingOfSameTypeI = w;
exports.removeAllResources = l;
exports.removeResource = i;
exports.splitPrefixFileNameAndExtension = d;
