'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const mat4 = require('./mat4-f68486bc.js');
const mat4f64 = require('./mat4f64-fc3339e5.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const projection = require('./projection-b19710fa.js');
const TileTreeDebugger = require('./TileTreeDebugger-1eb2539f.js');
require('./index-fde8502c.js');
require('./unitUtils-083cb8d0.js');
require('./aaBoundingRect-56648c00.js');
require('./geodesicConstants-047d586a.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.I3STreeDebugger=class extends TileTreeDebugger.b{constructor(e){super(e);}getTiles(){const e=this.lv.getVisibleNodes(),r=this.view.renderSpatialReference,s=this.nodeSR;return e.map((e=>h(e,r,s))).sort(((e,r)=>e.lij[0]===r.lij[0]?e.label>r.label?-1:1:e.lij[0]-r.lij[0]))}};function h(e,s,o){const i=e.serviceObb;if(request.t$1(i)||request.t$1(s))return null;mat4.P(f,i.quaternion),mathUtils.r(j,i.center),projection.xn(j,o,0,j,s,0,1),f[12]=j[0],f[13]=j[1],f[14]=j[2];const l=[[],[],[]];mathUtils.r(j,i.halfSize),mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),mathUtils.r(j,i.halfSize),j[0]=-j[0],mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),mathUtils.r(j,i.halfSize),j[0]=-j[0],j[1]=-j[1],mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),mathUtils.r(j,i.halfSize),j[1]=-j[1],mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),l[1].push(l[0][0]),l[1].push(l[0][1]),mathUtils.r(j,i.halfSize),j[0]=-j[0],j[2]=-j[2],mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),mathUtils.r(j,i.halfSize),j[2]=-j[2],mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),l[2].push(l[0][0]),l[2].push(l[0][3]),mathUtils.r(j,i.halfSize),j[1]=-j[1],j[2]=-j[2],mathUtils.I(j,j,f),projection.xn(j,s,0,j,o,0,1),l[2].push([j[0],j[1]]),l[2].push(l[1][3]);const a=new geometry.v({rings:l,spatialReference:o});return {lij:[e.level,e.childCount,0],label:e.id,geometry:a}}request.e([request.d({constructOnly:!0})],exports.I3STreeDebugger.prototype,"lv",void 0),request.e([request.d({constructOnly:!0})],exports.I3STreeDebugger.prototype,"nodeSR",void 0),exports.I3STreeDebugger=request.e([request.i("esri.views.3d.layers.support.I3STreeDebugger")],exports.I3STreeDebugger);const f=mat4f64.e(),j=common.n();
