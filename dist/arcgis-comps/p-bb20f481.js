import{eq as e,a7 as s,W as t,er as a,g as r,es as n,H as o}from"./p-7b6f6c18.js";import"./p-227a5838.js";async function i(s,t={},r){await s.load(r);const n=e(s.itemUrl,"resources"),{start:o=1,num:i=10,sortOrder:c="asc",sortField:u="created"}=t,l={query:{start:o,num:i,sortOrder:c,sortField:u,token:s.apiKey},signal:a(r,"signal")},d=await s.portal._request(n,l);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map((({created:e,size:t,resource:a})=>({created:new Date(e),size:t,resource:s.resourceFromPath(a)})))}}async function c(r,n,o,i){if(!r.hasPath())throw new s(`portal-item-resource-${n}:invalid-path`,"Resource does not have a valid path");const c=r.portalItem;await c.load(i);const u=e(c.userItemUrl,"add"===n?"addResources":"updateResources"),[l,f]=d(r.path),p=await m(o),w=new FormData;return l&&"."!==l&&w.append("resourcesPrefix",l),w.append("fileName",f),w.append("file",p,f),w.append("f","json"),t(i)&&i.access&&w.append("access",i.access),await c.portal._request(u,{method:"post",body:w,signal:a(i,"signal")}),r}async function u(t,r,n){if(!r.hasPath())throw new s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await t.load(n);const o=e(t.userItemUrl,"removeResources");await t.portal._request(o,{method:"post",query:{resource:r.path},signal:a(n,"signal")}),r.portalItem=null}async function l(s,t){await s.load(t);const r=e(s.userItemUrl,"removeResources");return s.portal._request(r,{method:"post",query:{deleteAll:!0},signal:a(t,"signal")})}function d(e){const s=e.lastIndexOf("/");return-1===s?[".",e]:[e.slice(0,s),e.slice(s+1)]}function f(e){const[s,t]=p(e),[a,r]=d(s);return[a,r,t]}function p(e){const s=n(e);return r(s)?[e,""]:[e.slice(0,e.length-s.length-1),`.${s}`]}async function m(e){return e instanceof Blob?e:(await o(e.url,{responseType:"blob"})).data}function w(s,t){if(!s.hasPath())return null;const[a,,r]=f(s.path);return s.portalItem.resourceFromPath(e(a,t+r))}function g(s,t){if(!s.hasPath())return null;const[a,,r]=f(s.path);return s.portalItem.resourceFromPath(e(a,t+r))}export{c as addOrUpdateResource,m as contentToBlob,i as fetchResources,w as getSiblingOfSameType,g as getSiblingOfSameTypeI,l as removeAllResources,u as removeResource,f as splitPrefixFileNameAndExtension}