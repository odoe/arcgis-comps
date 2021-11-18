'use strict';

const request = require('./messageBundle-312ceb47.js');
const networkService = require('./networkService-b57c9225.js');
const normalizeUtils = require('./normalizeUtils-b6002011.js');
const utils = require('./utils-f7ec83ae.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const FeatureSet = require('./FeatureSet-2e9b97a5.js');
const Task = require('./Task-0c2f1790.js');
require('./index-57f2cfbb.js');
require('./GPMessage-cc5397b9.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const s=unitUtils.k.fromJSON(r.spatialReference),i=unitUtils.h.fromJSON(o);return request.r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return FeatureSet['default'].fromJSON(r).features.map((r=>r.geometry))}let j=class extends JSONSupport.a{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};request.e([request.d({type:[networkService.c]})],j.prototype,"directions",void 0),request.e([request.d({type:[unitUtils.b]})],j.prototype,"facilities",void 0),request.e([unitUtils.o("facilities")],j.prototype,"readFacilities",null),request.e([request.d({type:[unitUtils.b]})],j.prototype,"incidents",void 0),request.e([unitUtils.o("incidents")],j.prototype,"readIncidents",null),request.e([request.d({type:[networkService.a]})],j.prototype,"messages",void 0),request.e([request.d({type:[unitUtils.b]})],j.prototype,"pointBarriers",void 0),request.e([unitUtils.o("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),request.e([request.d({type:[unitUtils.m$4]})],j.prototype,"polylineBarriers",void 0),request.e([unitUtils.o("polylineBarriers")],j.prototype,"readPolylineBarriers",null),request.e([request.d({type:[unitUtils.v]})],j.prototype,"polygonBarriers",void 0),request.e([unitUtils.o("polygonBarriers")],j.prototype,"readPolygonBarriers",null),request.e([request.d({type:[unitUtils.h]})],j.prototype,"routes",void 0),request.e([unitUtils.o("routes")],j.prototype,"readRoutes",null),j=request.e([request.i("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=networkService.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(r,c,m){const f=[],p=[],y={},B={},d=utils.e(r),{path:b}=d;c.incidents&&c.incidents.features&&networkService.u(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&networkService.u(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&networkService.u(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&networkService.u(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&networkService.u(c.polygonBarriers.features,p,"polygonBarriers.features",y);const g$1=await normalizeUtils.v(p);for(const e in y){const r=y[e];f.push(e),B[e]=g$1.slice(r[0],r[1]);}if(networkService.d(B,f)){let e=null;try{e=await networkService.c$1(b,c.apiKey,m);}catch{}e&&!e.hasZ&&networkService.p(B,f);}for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));const A={...m,query:{...d.query,...l.toQueryParams(c),f:"json"}},{data:j}=await request.E(`${b}/solveClosestFacility`,A);return g.fromJSON(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends Task.l{constructor(s){super(s),this.url=null;}solve(s,r){return c$1(this.url,s,r)}};request.e([request.d()],c.prototype,"url",void 0),c=request.e([request.i("esri.tasks.ClosestFacilityTask")],c);const p=c;

exports.default = p;
