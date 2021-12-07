import { K as s, r as n$1, c as s$1, s as s$2, A as r, af as t$1 } from './messageBundle-f75b4090.js';
import { O } from './aaBoundingBox-876621e6.js';
import { u, I } from './aaBoundingRect-9468599b.js';
import { g as gt } from './featureConversionUtils-cbd79ea2.js';
import { h } from './PooledRBush-f64ccc4a.js';
import { o } from './optimizedFeatureQueryEngineAdapter-4f73f201.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i,s,d){n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3],i.search(n,d);}class e{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new h(9,s("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n;})),this._indexInvalid=!1,this._index.clear(),this._index.load(i);}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))),this._boundsToLoad.length=0);};}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear();}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s));}forEachInBounds(i,s){this._loadIndex(),t(this._index,i,(i=>s(this._idByBounds.get(i))));}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0);}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s));}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(e$1){this.geometryInfo=e$1,this._boundsStore=new e,this._featuresById=new Map,this._markedIds=new Set,this.events=new n$1,this.featureAdapter=o;}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=u(I);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]));})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{r(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length);})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged();}addMany(e){for(const t of e)this._add(t);this._emitChanged();}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged();}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e);}this._emitChanged();}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(O(r,e));}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)));}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e));}));}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear();}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t));})),this._markedIds.clear(),e&&this._emitChanged();}_emitChanged(){this.events.emit("changed",void 0);}_add(t){if(!t)return;const i=t.objectId;if(null==i)return void s$1.getLogger("esri.layers.graphics.data.FeatureStore").error(new s$2("featurestore:invalid-feature","feature id is missing",{feature:t}));const d=this._featuresById.get(i);let h;if(this._markedIds.add(i),d?(t.displayId=d.displayId,h=this._boundsStore.get(i),this._boundsStore.delete(i)):r(this.onFeatureAdd)&&this.onFeatureAdd(t),t$1(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,t);h=gt(r(h)?h:u(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),r(h)&&this._boundsStore.set(i,h),this._featuresById.set(i,t);}_remove(e){return r(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}

export { e, m };
