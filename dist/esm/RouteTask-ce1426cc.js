import { Q as E, e as e$2, i } from './messageBundle-f75b4090.js';
import { f, u, d, c as c$1, p as p$1, o } from './queryUtils-20878173.js';
import { v } from './normalizeUtils-25a1ce55.js';
import { e as e$1 } from './utils-ab350511.js';
import { l as l$1 } from './Task-21abc82a.js';
import './index-b157fcf2.js';
import './enumeration-d3301938.js';
import './Graphic-3961df6c.js';
import './geometry-7e07b1ba.js';
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
import './jsonUtils-13b1f6fd.js';
import './FeatureSet-58481609.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './GPMessage-4cf6ee45.js';

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
