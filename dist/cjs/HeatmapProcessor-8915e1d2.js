'use strict';

const request = require('./messageBundle-8be88d04.js');
const diffUtils = require('./diffUtils-df69757f.js');
const heatmapUtils = require('./heatmapUtils-1c7f1c9d.js');
const definitions = require('./definitions-b4888cc6.js');
const BaseProcessor = require('./BaseProcessor-ed26cb47.js');
const tileUtils = require('./tileUtils-18ed62be.js');
require('./index-fde8502c.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./Query-354911d3.js');
require('./geometry-ef17530a.js');
require('./TimeExtent-8b558884.js');
require('./enumeration-f235fe07.js');
require('./jsonUtils-b6068079.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./TileKey-d800cfb2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=definitions.o,o=e.tileInfoView.tileInfo.isWrappable;return s.set(tileUtils.l(t,-1,-1,o).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(tileUtils.l(t,0,-1,o).id,new p([0,-i],[0,i-r,i,i])),s.set(tileUtils.l(t,1,-1,o).id,new p([i,-i],[0,i-r,r,i])),s.set(tileUtils.l(t,-1,0,o).id,new p([-i,0],[i-r,0,i,i])),s.set(tileUtils.l(t,1,0,o).id,new p([i,0],[0,0,r,i])),s.set(tileUtils.l(t,-1,1,o).id,new p([-i,i],[i-r,0,i,r])),s.set(tileUtils.l(t,0,1,o).id,new p([0,i],[0,0,i,r])),s.set(tileUtils.l(t,1,1,o).id,new p([i,i],[0,0,r,r])),s}let l=class extends BaseProcessor.p{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;diffUtils.m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(request.r(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&a.set(r.addOrUpdate.instance,r),r.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>request.E$5(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>request.E$5(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const a=heatmapUtils.o(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=request.e([request.i("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;

exports.default = h;
