'use strict';

const request = require('./messageBundle-8be88d04.js');
const queryUtils = require('./queryUtils-2959d136.js');
const normalizeUtils = require('./normalizeUtils-a793b472.js');
const utils = require('./utils-8a0a0870.js');
const Task = require('./Task-95a3fa39.js');
require('./index-fde8502c.js');
require('./enumeration-f235fe07.js');
require('./Graphic-0aff6059.js');
require('./geometry-ef17530a.js');
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
require('./jsonUtils-b6068079.js');
require('./FeatureSet-8efc5965.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./GPMessage-d3ae977e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=queryUtils.o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function l(r,l,m){const c=[],f=[],y={},B={},b=utils.e(r),{path:g}=b;l.stops&&l.stops.features&&queryUtils.u(l.stops.features,f,"stops.features",y),l.pointBarriers&&l.pointBarriers.features&&queryUtils.u(l.pointBarriers.features,f,"pointBarriers.features",y),l.polylineBarriers&&l.polylineBarriers.features&&queryUtils.u(l.polylineBarriers.features,f,"polylineBarriers.features",y),l.polygonBarriers&&l.polygonBarriers.features&&queryUtils.u(l.polygonBarriers.features,f,"polygonBarriers.features",y);const A=await normalizeUtils.v(f);for(const e in y){const r=y[e];c.push(e),B[e]=A.slice(r[0],r[1]);}if(queryUtils.d(B,c)){let e=null;try{e=await queryUtils.c(g,l.apiKey,m);}catch{}e&&!e.hasZ&&queryUtils.p(B,c);}for(const e in B)B[e].forEach(((r,t)=>{l.get(e)[t].geometry=r;}));const d={...m,query:{...b.query,...p.toQueryParams(l),f:"json"}},h=g.endsWith("/solve")?g:`${g}/solve`,j=await request.E(h,d);return queryUtils.f(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends Task.l{constructor(s){super(s);}solve(s,r){return l(this.url,s,r)}};e=request.e([request.i("esri.tasks.RouteTask")],e);const c=e;

exports.default = c;
