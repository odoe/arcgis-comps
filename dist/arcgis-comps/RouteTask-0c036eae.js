import { E, e as e$2, i } from './cast-e5ea2533.js';
import { o, u, d, b as c$1, p as p$1, f } from './networkService-fc0d1103.js';
import { v } from './normalizeUtils-eb3efd47.js';
import { e as e$1 } from './utils-0dfe019a.js';
import { l as l$1 } from './Task-59ca08b3.js';
import './JSONSupport-8dda8bae.js';
import './enumeration-da141e85.js';
import './Graphic-79de2095.js';
import './geometry-160ffbb5.js';
import './Portal-f1457cb4.js';
import './Polyline-56152656.js';
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
import './FeatureSet-c6e91f97.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './GPMessage-9f70c706.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function l(r,l,m){const c=[],f$1=[],y={},B={},b=e$1(r),{path:g}=b;l.stops&&l.stops.features&&u(l.stops.features,f$1,"stops.features",y),l.pointBarriers&&l.pointBarriers.features&&u(l.pointBarriers.features,f$1,"pointBarriers.features",y),l.polylineBarriers&&l.polylineBarriers.features&&u(l.polylineBarriers.features,f$1,"polylineBarriers.features",y),l.polygonBarriers&&l.polygonBarriers.features&&u(l.polygonBarriers.features,f$1,"polygonBarriers.features",y);const A=await v(f$1);for(const e in y){const r=y[e];c.push(e),B[e]=A.slice(r[0],r[1]);}if(d(B,c)){let e=null;try{e=await c$1(g,l.apiKey,m);}catch{}e&&!e.hasZ&&p$1(B,c);}for(const e in B)B[e].forEach(((r,t)=>{l.get(e)[t].geometry=r;}));const d$1={...m,query:{...b.query,...p.toQueryParams(l),f:"json"}},h=g.endsWith("/solve")?g:`${g}/solve`,j=await E(h,d$1);return f(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends l$1{constructor(s){super(s);}solve(s,r){return l(this.url,s,r)}};e=e$2([i("esri.tasks.RouteTask")],e);const c=e;

export default c;
