'use strict';

const request = require('./messageBundle-312ceb47.js');
const networkService = require('./networkService-b57c9225.js');
const normalizeUtils = require('./normalizeUtils-b6002011.js');
const utils = require('./utils-f7ec83ae.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const Task = require('./Task-0c2f1790.js');
require('./index-57f2cfbb.js');
require('./FeatureSet-2e9b97a5.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./GPMessage-cc5397b9.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const t=unitUtils.k.fromJSON(r.spatialReference),s=unitUtils.h.fromJSON(o);return request.e$3(s.geometry).spatialReference=t,s}))}function g(r){return request.g$5(r.features.map((e=>(request.r(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),unitUtils.d$1(e.geometry)))))}let P=class extends JSONSupport.a{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return g(r)}readPointBarriers(r,e){return g(e.barriers)}readPolylineBarriers(r){return g(r)}readPolygonBarriers(r){return g(r)}readIncidents(r,e){return d(e.saPolylines)}readServiceAreaPolygons(r,e){return d(e.saPolygons)}};request.e([request.d({type:[unitUtils.b]})],P.prototype,"facilities",void 0),request.e([unitUtils.o("facilities")],P.prototype,"readFacilities",null),request.e([request.d({type:[networkService.a]})],P.prototype,"messages",void 0),request.e([request.d({type:[unitUtils.b]})],P.prototype,"pointBarriers",void 0),request.e([unitUtils.o("pointBarriers",["barriers"])],P.prototype,"readPointBarriers",null),request.e([request.d({type:[unitUtils.m$4]})],P.prototype,"polylineBarriers",void 0),request.e([unitUtils.o("polylineBarriers")],P.prototype,"readPolylineBarriers",null),request.e([request.d({type:[unitUtils.v]})],P.prototype,"polygonBarriers",void 0),request.e([unitUtils.o("polygonBarriers")],P.prototype,"readPolygonBarriers",null),request.e([request.d({type:[unitUtils.h]})],P.prototype,"serviceAreaPolylines",void 0),request.e([unitUtils.o("serviceAreaPolylines",["saPolylines"])],P.prototype,"readIncidents",null),request.e([request.d({type:[unitUtils.h]})],P.prototype,"serviceAreaPolygons",void 0),request.e([unitUtils.o("serviceAreaPolygons",["saPolygons"])],P.prototype,"readServiceAreaPolygons",null),P=request.e([request.i("esri.rest.support.ServiceAreaSolveResult")],P);const j=P;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=networkService.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function f(e,f,p){const c=[],m=[],y={},B={},g=utils.e(e),{path:S}=g;f.facilities&&f.facilities.features&&networkService.u(f.facilities.features,m,"facilities.features",y),f.pointBarriers&&f.pointBarriers.features&&networkService.u(f.pointBarriers.features,m,"pointBarriers.features",y),f.polylineBarriers&&f.polylineBarriers.features&&networkService.u(f.polylineBarriers.features,m,"polylineBarriers.features",y),f.polygonBarriers&&f.polygonBarriers.features&&networkService.u(f.polygonBarriers.features,m,"polygonBarriers.features",y);const j$1=await normalizeUtils.v(m);for(const r in y){const e=y[r];c.push(r),B[r]=j$1.slice(e[0],e[1]);}if(networkService.d(B,c)){let r=null;try{r=await networkService.c$1(S,f.apiKey,p);}catch{}r&&!r.hasZ&&networkService.p(B,c);}for(const r in B)B[r].forEach(((e,t)=>{f.get(r)[t].geometry=e;}));const b={...p,query:{...g.query,...l.toQueryParams(f),f:"json"}},{data:v}=await request.E(`${S}/solveServiceArea`,b);return j.fromJSON(v)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends Task.l{constructor(r){super(r),this.url=null;}solve(r,s){return f(this.url,r,s)}};request.e([request.d()],c.prototype,"url",void 0),c=request.e([request.i("esri.tasks.ServiceAreaTask")],c);const p=c;

exports.default = p;
