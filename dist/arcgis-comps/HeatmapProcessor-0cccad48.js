import { r, bd as E, e, i } from './jsxFactory-ef3e403e.js';
import { m } from './diffUtils-1f52a3dd.js';
import { o as o$1 } from './heatmapUtils-3e0206de.js';
import { o } from './definitions-a1bd4630.js';
import { p as p$1 } from './BaseProcessor-5bc5d8cd.js';
import { l as l$1 } from './tileUtils-d76656f2.js';
import './index-5b4f4de1.js';
import './unitUtils-8a2b838a.js';
import './JSONSupport-a5eb98e7.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './TileStore-a3382c75.js';
import './TileKey-56deb206.js';
import './quickselect-ccfd8cff.js';
import './Query-fd5e1b7b.js';
import './TimeExtent-fb7ed3e3.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=o,o$1=e.tileInfoView.tileInfo.isWrappable;return s.set(l$1(t,-1,-1,o$1).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(l$1(t,0,-1,o$1).id,new p([0,-i],[0,i-r,i,i])),s.set(l$1(t,1,-1,o$1).id,new p([i,-i],[0,i-r,r,i])),s.set(l$1(t,-1,0,o$1).id,new p([-i,0],[i-r,0,i,i])),s.set(l$1(t,1,0,o$1).id,new p([i,0],[0,0,r,i])),s.set(l$1(t,-1,1,o$1).id,new p([-i,i],[i-r,0,i,r])),s.set(l$1(t,0,1,o$1).id,new p([0,i],[0,0,i,r])),s.set(l$1(t,1,1,o$1).id,new p([i,i],[0,0,r,r])),s}let l=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r$1,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(r(r$1.addOrUpdate)&&r$1.addOrUpdate.hasFeatures&&a.set(r$1.addOrUpdate.instance,r$1),r$1.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>E(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>E(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const a=o$1(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=e([i("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;

export default h;
