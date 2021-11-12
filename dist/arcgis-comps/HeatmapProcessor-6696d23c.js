import { A as r, aG as E, e, i } from './jsxFactory-a3b6abde.js';
import { m } from './diffUtils-a2ab1186.js';
import { o as o$1 } from './heatmapUtils-d2e167a8.js';
import { o } from './definitions-a1bd4630.js';
import { p as p$1 } from './BaseProcessor-11491717.js';
import { l as l$1 } from './tileUtils-e692eb0d.js';
import './index-8dec7690.js';
import './Graphic-08cda9ca.js';
import './JSONSupport-4f0a3248.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './TileStore-f74dddba.js';
import './TileKey-6190320d.js';
import './quickselect-ccfd8cff.js';
import './Query-a20a7572.js';
import './TimeExtent-a92e5996.js';
import './Field-416cada2.js';
import './fieldType-7f2a820b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=o,o$1=e.tileInfoView.tileInfo.isWrappable;return s.set(l$1(t,-1,-1,o$1).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(l$1(t,0,-1,o$1).id,new p([0,-i],[0,i-r,i,i])),s.set(l$1(t,1,-1,o$1).id,new p([i,-i],[0,i-r,r,i])),s.set(l$1(t,-1,0,o$1).id,new p([-i,0],[i-r,0,i,i])),s.set(l$1(t,1,0,o$1).id,new p([i,0],[0,0,r,i])),s.set(l$1(t,-1,1,o$1).id,new p([-i,i],[i-r,0,i,r])),s.set(l$1(t,0,1,o$1).id,new p([0,i],[0,0,i,r])),s.set(l$1(t,1,1,o$1).id,new p([i,i],[0,0,r,r])),s}let l=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r$1,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(r(r$1.addOrUpdate)&&r$1.addOrUpdate.hasFeatures&&a.set(r$1.addOrUpdate.instance,r$1),r$1.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>E(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>E(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const a=o$1(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=e([i("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;

export default h;
