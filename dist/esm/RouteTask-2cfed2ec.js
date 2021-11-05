import { af as e$1, d_ as v, H as E, e as e$2, i, ai as l$1 } from './MapView-a31458ed.js';
import { f, u, d, b as c$1, p as p$1, o } from './networkService-c835ca32.js';
import './index-3067d8ff.js';
import './GPMessage-1e8e7b2d.js';

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
