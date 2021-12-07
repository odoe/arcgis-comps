import { a as a$1 } from './asyncUtils-fe35d349.js';
import { cL as o, T, h, s } from './messageBundle-f75b4090.js';
import { getSiblingOfSameTypeI as w } from './resourceUtils-ff309ca6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function a(r,a,u){if(!a||!a.resources)return;const h$1=a.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f=new Set,m=[];i.forEach((e=>{h$1.delete(e),r.paths.push(e);}));for(const e of a.resources.toUpdate)if(h$1.delete(e.resource.path),i.has(e.resource.path)||f.has(e.resource.path)){const{resource:o$1,content:t,finish:a,error:p}=e,h=w(o$1,o());r.paths.push(h.path),m.push(n({resource:h,content:t,finish:a,error:p},u));}else r.paths.push(e.resource.path),m.push(p(e,u)),f.add(e.resource.path);for(const e of a.resources.toAdd)m.push(n(e,u)),r.paths.push(e.resource.path);if(h$1.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})));})),0===m.length)return;const l=await T(m);h(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new s("save:resources","Failed to save one or more resources",{errors:d})}async function n(e,o){const t=await a$1(e.resource.portalItem.addResource(e.resource,e.content,o));if(!0!==t.ok)throw e.error&&e.error(t.error),t.error;e.finish&&e.finish(e.resource);}async function p(e,o){const t=await a$1(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error(t.error),t.error;e.finish(e.resource);}

export { a };
