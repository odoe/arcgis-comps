import{e as t,d as s,i as r,W as e,O as o}from"./p-9ae46e68.js";import{aG as i,aH as n}from"./p-566b0715.js";import{e as a,r as u}from"./p-41655335.js";import{a as c}from"./p-fe01b82b.js";function m(t){return{geometryType:n(t[0]),geometries:t.map((t=>t.toJSON()))}}function p(t,s,r){const e=i(s);return t.map((t=>{const s=e.fromJSON(t);return s.spatialReference=r,s}))}let f=class extends c{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),s=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:n(s),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};t([s()],f.prototype,"geometries",void 0),t([s({json:{read:{source:"outSR"}}})],f.prototype,"outSpatialReference",void 0),t([s()],f.prototype,"transformation",void 0),t([s()],f.prototype,"transformForward",void 0),f=t([r("esri.rest.support.ProjectParameters")],f);const h=f,l=e(h);async function d(t,s,r){s=l(s);const e=a(t),i={...e.query,f:"json",...s.toJSON()},c=s.outSpatialReference,m=n(s.geometries[0]),f=u(i,r);return o(e.path+"/project",f).then((({data:{geometries:t}})=>p(t,m,c)))}export{h as a,d as n,p as o,m as r}