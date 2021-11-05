'use strict';

const request = require('./MapView-922b9f1e.js');
const networkService = require('./networkService-61f4bbee.js');
require('./index-57f2cfbb.js');
require('./GPMessage-280dd523.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const s=request.k.fromJSON(r.spatialReference),i=request.h$2.fromJSON(o);return request.r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return request.g$5.fromJSON(r).features.map((r=>r.geometry))}let j=class extends request.a$1{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};request.e([request.d({type:[networkService.c]})],j.prototype,"directions",void 0),request.e([request.d({type:[request.b$3]})],j.prototype,"facilities",void 0),request.e([request.o$3("facilities")],j.prototype,"readFacilities",null),request.e([request.d({type:[request.b$3]})],j.prototype,"incidents",void 0),request.e([request.o$3("incidents")],j.prototype,"readIncidents",null),request.e([request.d({type:[networkService.a]})],j.prototype,"messages",void 0),request.e([request.d({type:[request.b$3]})],j.prototype,"pointBarriers",void 0),request.e([request.o$3("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),request.e([request.d({type:[request.m$5]})],j.prototype,"polylineBarriers",void 0),request.e([request.o$3("polylineBarriers")],j.prototype,"readPolylineBarriers",null),request.e([request.d({type:[request.v$1]})],j.prototype,"polygonBarriers",void 0),request.e([request.o$3("polygonBarriers")],j.prototype,"readPolygonBarriers",null),request.e([request.d({type:[request.h$2]})],j.prototype,"routes",void 0),request.e([request.o$3("routes")],j.prototype,"readRoutes",null),j=request.e([request.i("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=networkService.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(r,c,m){const f=[],p=[],y={},B={},d=request.e$5(r),{path:b}=d;c.incidents&&c.incidents.features&&networkService.u(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&networkService.u(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&networkService.u(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&networkService.u(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&networkService.u(c.polygonBarriers.features,p,"polygonBarriers.features",y);const g$1=await request.v$4(p);for(const e in y){const r=y[e];f.push(e),B[e]=g$1.slice(r[0],r[1]);}if(networkService.d(B,f)){let e=null;try{e=await networkService.c$1(b,c.apiKey,m);}catch{}e&&!e.hasZ&&networkService.p(B,f);}for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));const A={...m,query:{...d.query,...l.toQueryParams(c),f:"json"}},{data:j}=await request.E(`${b}/solveClosestFacility`,A);return g.fromJSON(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends request.l$2{constructor(s){super(s),this.url=null;}solve(s,r){return c$1(this.url,s,r)}};request.e([request.d()],c.prototype,"url",void 0),c=request.e([request.i("esri.tasks.ClosestFacilityTask")],c);const p=c;

exports.default = p;
