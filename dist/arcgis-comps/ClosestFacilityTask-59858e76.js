import { r, e, b as d$1, i, E } from './cast-e5ea2533.js';
import { c as c$2, a as a$1, o as o$1, u, d as d$2, b as c$3, p as p$1 } from './networkService-fc0d1103.js';
import { v as v$1 } from './normalizeUtils-eb3efd47.js';
import { e as e$1 } from './utils-0dfe019a.js';
import './geometry-160ffbb5.js';
import { h } from './Graphic-79de2095.js';
import { a } from './JSONSupport-8dda8bae.js';
import { k, d as b, o } from './Portal-f1457cb4.js';
import g$1 from './FeatureSet-c6e91f97.js';
import { m, v } from './Polyline-56152656.js';
import { l as l$1 } from './Task-59ca08b3.js';
import './enumeration-da141e85.js';
import './GPMessage-9f70c706.js';
import './PopupTemplate-87ca9924.js';
import './Collection-ac20f1a1.js';
import './opacityUtils-5755cb64.js';
import './number-2da43364.js';
import './Identifiable-0fb3fc58.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r$1){return r$1.features.map((o=>{const s=k.fromJSON(r$1.spatialReference),i=h.fromJSON(o);return r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return g$1.fromJSON(r).features.map((r=>r.geometry))}let j=class extends a{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};e([d$1({type:[c$2]})],j.prototype,"directions",void 0),e([d$1({type:[b]})],j.prototype,"facilities",void 0),e([o("facilities")],j.prototype,"readFacilities",null),e([d$1({type:[b]})],j.prototype,"incidents",void 0),e([o("incidents")],j.prototype,"readIncidents",null),e([d$1({type:[a$1]})],j.prototype,"messages",void 0),e([d$1({type:[b]})],j.prototype,"pointBarriers",void 0),e([o("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),e([d$1({type:[m]})],j.prototype,"polylineBarriers",void 0),e([o("polylineBarriers")],j.prototype,"readPolylineBarriers",null),e([d$1({type:[v]})],j.prototype,"polygonBarriers",void 0),e([o("polygonBarriers")],j.prototype,"readPolygonBarriers",null),e([d$1({type:[h]})],j.prototype,"routes",void 0),e([o("routes")],j.prototype,"readRoutes",null),j=e([i("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=o$1({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(r,c,m){const f=[],p=[],y={},B={},d=e$1(r),{path:b}=d;c.incidents&&c.incidents.features&&u(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&u(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&u(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&u(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&u(c.polygonBarriers.features,p,"polygonBarriers.features",y);const g$1=await v$1(p);for(const e in y){const r=y[e];f.push(e),B[e]=g$1.slice(r[0],r[1]);}if(d$2(B,f)){let e=null;try{e=await c$3(b,c.apiKey,m);}catch{}e&&!e.hasZ&&p$1(B,f);}for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));const A={...m,query:{...d.query,...l.toQueryParams(c),f:"json"}},{data:j}=await E(`${b}/solveClosestFacility`,A);return g.fromJSON(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends l$1{constructor(s){super(s),this.url=null;}solve(s,r){return c$1(this.url,s,r)}};e([d$1()],c.prototype,"url",void 0),c=e([i("esri.tasks.ClosestFacilityTask")],c);const p=c;

export default p;
