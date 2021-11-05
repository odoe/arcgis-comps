'use strict';

const request = require('./MapView-922b9f1e.js');
const networkService = require('./networkService-61f4bbee.js');
require('./index-57f2cfbb.js');
require('./GPMessage-280dd523.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=networkService.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function l(r,l,m){const c=[],f=[],y={},B={},b=request.e$5(r),{path:g}=b;l.stops&&l.stops.features&&networkService.u(l.stops.features,f,"stops.features",y),l.pointBarriers&&l.pointBarriers.features&&networkService.u(l.pointBarriers.features,f,"pointBarriers.features",y),l.polylineBarriers&&l.polylineBarriers.features&&networkService.u(l.polylineBarriers.features,f,"polylineBarriers.features",y),l.polygonBarriers&&l.polygonBarriers.features&&networkService.u(l.polygonBarriers.features,f,"polygonBarriers.features",y);const A=await request.v$4(f);for(const e in y){const r=y[e];c.push(e),B[e]=A.slice(r[0],r[1]);}if(networkService.d(B,c)){let e=null;try{e=await networkService.c$1(g,l.apiKey,m);}catch{}e&&!e.hasZ&&networkService.p(B,c);}for(const e in B)B[e].forEach(((r,t)=>{l.get(e)[t].geometry=r;}));const d={...m,query:{...b.query,...p.toQueryParams(l),f:"json"}},h=g.endsWith("/solve")?g:`${g}/solve`,j=await request.E(h,d);return networkService.f(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends request.l$2{constructor(s){super(s);}solve(s,r){return l(this.url,s,r)}};e=request.e([request.i("esri.tasks.RouteTask")],e);const c=e;

exports.default = c;
