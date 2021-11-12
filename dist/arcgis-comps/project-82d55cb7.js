import { e, a as d, i as i$2, aa as b, E } from './jsxFactory-b8b7429b.js';
import { bl as v, bx as a$1 } from './Graphic-75d1efd2.js';
import { e as e$1, r as r$1 } from './utils-5cb95ff2.js';
import { a as a$2 } from './JSONSupport-15eefdaf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t){return {geometryType:v(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=a$1(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$1=class extends a$2{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:v(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([d()],i$1.prototype,"geometries",void 0),e([d({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),e([d()],i$1.prototype,"transformation",void 0),e([d()],i$1.prototype,"transformForward",void 0),i$1=e([i$2("esri.rest.support.ProjectParameters")],i$1);const a=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=b(a);async function n(o$1,m,n){m=i(m);const u=e$1(o$1),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=v(m.geometries[0]),f=r$1(c,n);return E(u.path+"/project",f).then((({data:{geometries:r}})=>o(r,a,j)))}

export { a, n, o, r };
