import { e, d as d$1, aE as b, a2 as o, i, a1 as a$1, a0 as k, A as r, Q as E } from './messageBundle-f75b4090.js';
import { a as c$2, b as a, u, d as d$2, c as c$3, p as p$1, o as o$1 } from './queryUtils-20878173.js';
import { v as v$1 } from './normalizeUtils-25a1ce55.js';
import { e as e$1 } from './utils-ab350511.js';
import { m, v } from './geometry-7e07b1ba.js';
import { h } from './Graphic-3961df6c.js';
import g$1 from './FeatureSet-58481609.js';
import { l as l$1 } from './Task-21abc82a.js';
import './index-b157fcf2.js';
import './enumeration-d3301938.js';
import './GPMessage-4cf6ee45.js';
import './jsonUtils-13b1f6fd.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r$1){return r$1.features.map((o=>{const s=k.fromJSON(r$1.spatialReference),i=h.fromJSON(o);return r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return g$1.fromJSON(r).features.map((r=>r.geometry))}let j=class extends a$1{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};e([d$1({type:[c$2]})],j.prototype,"directions",void 0),e([d$1({type:[b]})],j.prototype,"facilities",void 0),e([o("facilities")],j.prototype,"readFacilities",null),e([d$1({type:[b]})],j.prototype,"incidents",void 0),e([o("incidents")],j.prototype,"readIncidents",null),e([d$1({type:[a]})],j.prototype,"messages",void 0),e([d$1({type:[b]})],j.prototype,"pointBarriers",void 0),e([o("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),e([d$1({type:[m]})],j.prototype,"polylineBarriers",void 0),e([o("polylineBarriers")],j.prototype,"readPolylineBarriers",null),e([d$1({type:[v]})],j.prototype,"polygonBarriers",void 0),e([o("polygonBarriers")],j.prototype,"readPolygonBarriers",null),e([d$1({type:[h]})],j.prototype,"routes",void 0),e([o("routes")],j.prototype,"readRoutes",null),j=e([i("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;

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
