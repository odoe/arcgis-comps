'use strict';

const request = require('./messageBundle-8be88d04.js');
const queryUtils = require('./queryUtils-2959d136.js');
const normalizeUtils = require('./normalizeUtils-a793b472.js');
const utils = require('./utils-8a0a0870.js');
const geometry = require('./geometry-ef17530a.js');
const Graphic = require('./Graphic-0aff6059.js');
const jsonUtils = require('./jsonUtils-b6068079.js');
const Task = require('./Task-95a3fa39.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./FeatureSet-8efc5965.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./GPMessage-d3ae977e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const t=request.k.fromJSON(r.spatialReference),s=Graphic.h.fromJSON(o);return request.e$2(s.geometry).spatialReference=t,s}))}function g(r){return request.g$9(r.features.map((e=>(request.r(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),jsonUtils.d(e.geometry)))))}let P=class extends request.a$2{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return g(r)}readPointBarriers(r,e){return g(e.barriers)}readPolylineBarriers(r){return g(r)}readPolygonBarriers(r){return g(r)}readIncidents(r,e){return d(e.saPolylines)}readServiceAreaPolygons(r,e){return d(e.saPolygons)}};request.e([request.d({type:[request.b$2]})],P.prototype,"facilities",void 0),request.e([request.o$2("facilities")],P.prototype,"readFacilities",null),request.e([request.d({type:[queryUtils.a]})],P.prototype,"messages",void 0),request.e([request.d({type:[request.b$2]})],P.prototype,"pointBarriers",void 0),request.e([request.o$2("pointBarriers",["barriers"])],P.prototype,"readPointBarriers",null),request.e([request.d({type:[geometry.m]})],P.prototype,"polylineBarriers",void 0),request.e([request.o$2("polylineBarriers")],P.prototype,"readPolylineBarriers",null),request.e([request.d({type:[geometry.v]})],P.prototype,"polygonBarriers",void 0),request.e([request.o$2("polygonBarriers")],P.prototype,"readPolygonBarriers",null),request.e([request.d({type:[Graphic.h]})],P.prototype,"serviceAreaPolylines",void 0),request.e([request.o$2("serviceAreaPolylines",["saPolylines"])],P.prototype,"readIncidents",null),request.e([request.d({type:[Graphic.h]})],P.prototype,"serviceAreaPolygons",void 0),request.e([request.o$2("serviceAreaPolygons",["saPolygons"])],P.prototype,"readServiceAreaPolygons",null),P=request.e([request.i("esri.rest.support.ServiceAreaSolveResult")],P);const j=P;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=queryUtils.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function f(e,f,p){const c=[],m=[],y={},B={},g=utils.e(e),{path:S}=g;f.facilities&&f.facilities.features&&queryUtils.u(f.facilities.features,m,"facilities.features",y),f.pointBarriers&&f.pointBarriers.features&&queryUtils.u(f.pointBarriers.features,m,"pointBarriers.features",y),f.polylineBarriers&&f.polylineBarriers.features&&queryUtils.u(f.polylineBarriers.features,m,"polylineBarriers.features",y),f.polygonBarriers&&f.polygonBarriers.features&&queryUtils.u(f.polygonBarriers.features,m,"polygonBarriers.features",y);const j$1=await normalizeUtils.v(m);for(const r in y){const e=y[r];c.push(r),B[r]=j$1.slice(e[0],e[1]);}if(queryUtils.d(B,c)){let r=null;try{r=await queryUtils.c(S,f.apiKey,p);}catch{}r&&!r.hasZ&&queryUtils.p(B,c);}for(const r in B)B[r].forEach(((e,t)=>{f.get(r)[t].geometry=e;}));const b={...p,query:{...g.query,...l.toQueryParams(f),f:"json"}},{data:v}=await request.E(`${S}/solveServiceArea`,b);return j.fromJSON(v)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends Task.l{constructor(r){super(r),this.url=null;}solve(r,s){return f(this.url,r,s)}};request.e([request.d()],c.prototype,"url",void 0),c=request.e([request.i("esri.tasks.ServiceAreaTask")],c);const p=c;

exports.default = p;
