'use strict';

const request = require('./messageBundle-8be88d04.js');
const queryUtils = require('./queryUtils-2959d136.js');
const normalizeUtils = require('./normalizeUtils-a793b472.js');
const utils = require('./utils-8a0a0870.js');
const geometry = require('./geometry-ef17530a.js');
const Graphic = require('./Graphic-0aff6059.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const Task = require('./Task-95a3fa39.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./GPMessage-d3ae977e.js');
require('./jsonUtils-b6068079.js');
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
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const s=request.k.fromJSON(r.spatialReference),i=Graphic.h.fromJSON(o);return request.r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return FeatureSet['default'].fromJSON(r).features.map((r=>r.geometry))}let j=class extends request.a$2{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};request.e([request.d({type:[queryUtils.c$1]})],j.prototype,"directions",void 0),request.e([request.d({type:[request.b$2]})],j.prototype,"facilities",void 0),request.e([request.o$2("facilities")],j.prototype,"readFacilities",null),request.e([request.d({type:[request.b$2]})],j.prototype,"incidents",void 0),request.e([request.o$2("incidents")],j.prototype,"readIncidents",null),request.e([request.d({type:[queryUtils.a]})],j.prototype,"messages",void 0),request.e([request.d({type:[request.b$2]})],j.prototype,"pointBarriers",void 0),request.e([request.o$2("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),request.e([request.d({type:[geometry.m]})],j.prototype,"polylineBarriers",void 0),request.e([request.o$2("polylineBarriers")],j.prototype,"readPolylineBarriers",null),request.e([request.d({type:[geometry.v]})],j.prototype,"polygonBarriers",void 0),request.e([request.o$2("polygonBarriers")],j.prototype,"readPolygonBarriers",null),request.e([request.d({type:[Graphic.h]})],j.prototype,"routes",void 0),request.e([request.o$2("routes")],j.prototype,"readRoutes",null),j=request.e([request.i("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=queryUtils.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(r,c,m){const f=[],p=[],y={},B={},d=utils.e(r),{path:b}=d;c.incidents&&c.incidents.features&&queryUtils.u(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&queryUtils.u(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&queryUtils.u(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&queryUtils.u(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&queryUtils.u(c.polygonBarriers.features,p,"polygonBarriers.features",y);const g$1=await normalizeUtils.v(p);for(const e in y){const r=y[e];f.push(e),B[e]=g$1.slice(r[0],r[1]);}if(queryUtils.d(B,f)){let e=null;try{e=await queryUtils.c(b,c.apiKey,m);}catch{}e&&!e.hasZ&&queryUtils.p(B,f);}for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));const A={...m,query:{...d.query,...l.toQueryParams(c),f:"json"}},{data:j}=await request.E(`${b}/solveClosestFacility`,A);return g.fromJSON(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends Task.l{constructor(s){super(s),this.url=null;}solve(s,r){return c$1(this.url,s,r)}};request.e([request.d()],c.prototype,"url",void 0),c=request.e([request.i("esri.tasks.ClosestFacilityTask")],c);const p=c;

exports.default = p;
