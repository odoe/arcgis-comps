import { c as e, bt as g$1, r, e as e$1, b as d$2, i, E } from './cast-e5ea2533.js';
import { a as a$1, o as o$1, u, d as d$3, b as c$1, p as p$1 } from './networkService-fc0d1103.js';
import { v as v$1 } from './normalizeUtils-eb3efd47.js';
import { e as e$2 } from './utils-0dfe019a.js';
import { d as d$1 } from './geometry-160ffbb5.js';
import { h } from './Graphic-79de2095.js';
import { a } from './JSONSupport-8dda8bae.js';
import { k, d as b, o } from './Portal-f1457cb4.js';
import { m, v } from './Polyline-56152656.js';
import { l as l$1 } from './Task-59ca08b3.js';
import './enumeration-da141e85.js';
import './FeatureSet-c6e91f97.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
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
import './GPMessage-9f70c706.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const t=k.fromJSON(r.spatialReference),s=h.fromJSON(o);return e(s.geometry).spatialReference=t,s}))}function g(r$1){return g$1(r$1.features.map((e=>(r(e.geometry)&&(e.geometry.spatialReference=r$1.spatialReference),d$1(e.geometry)))))}let P=class extends a{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return g(r)}readPointBarriers(r,e){return g(e.barriers)}readPolylineBarriers(r){return g(r)}readPolygonBarriers(r){return g(r)}readIncidents(r,e){return d(e.saPolylines)}readServiceAreaPolygons(r,e){return d(e.saPolygons)}};e$1([d$2({type:[b]})],P.prototype,"facilities",void 0),e$1([o("facilities")],P.prototype,"readFacilities",null),e$1([d$2({type:[a$1]})],P.prototype,"messages",void 0),e$1([d$2({type:[b]})],P.prototype,"pointBarriers",void 0),e$1([o("pointBarriers",["barriers"])],P.prototype,"readPointBarriers",null),e$1([d$2({type:[m]})],P.prototype,"polylineBarriers",void 0),e$1([o("polylineBarriers")],P.prototype,"readPolylineBarriers",null),e$1([d$2({type:[v]})],P.prototype,"polygonBarriers",void 0),e$1([o("polygonBarriers")],P.prototype,"readPolygonBarriers",null),e$1([d$2({type:[h]})],P.prototype,"serviceAreaPolylines",void 0),e$1([o("serviceAreaPolylines",["saPolylines"])],P.prototype,"readIncidents",null),e$1([d$2({type:[h]})],P.prototype,"serviceAreaPolygons",void 0),e$1([o("serviceAreaPolygons",["saPolygons"])],P.prototype,"readServiceAreaPolygons",null),P=e$1([i("esri.rest.support.ServiceAreaSolveResult")],P);const j=P;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=o$1({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function f(e,f,p){const c=[],m=[],y={},B={},g=e$2(e),{path:S}=g;f.facilities&&f.facilities.features&&u(f.facilities.features,m,"facilities.features",y),f.pointBarriers&&f.pointBarriers.features&&u(f.pointBarriers.features,m,"pointBarriers.features",y),f.polylineBarriers&&f.polylineBarriers.features&&u(f.polylineBarriers.features,m,"polylineBarriers.features",y),f.polygonBarriers&&f.polygonBarriers.features&&u(f.polygonBarriers.features,m,"polygonBarriers.features",y);const j$1=await v$1(m);for(const r in y){const e=y[r];c.push(r),B[r]=j$1.slice(e[0],e[1]);}if(d$3(B,c)){let r=null;try{r=await c$1(S,f.apiKey,p);}catch{}r&&!r.hasZ&&p$1(B,c);}for(const r in B)B[r].forEach(((e,t)=>{f.get(r)[t].geometry=e;}));const b={...p,query:{...g.query,...l.toQueryParams(f),f:"json"}},{data:v}=await E(`${S}/solveServiceArea`,b);return j.fromJSON(v)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends l$1{constructor(r){super(r),this.url=null;}solve(r,s){return f(this.url,r,s)}};e$1([d$2()],c.prototype,"url",void 0),c=e$1([i("esri.tasks.ServiceAreaTask")],c);const p=c;

export default p;
