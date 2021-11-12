import { p as p$2, e, a as d$1, i as i$1 } from './jsxFactory-c96bb45c.js';
import { d, q } from './vec2-f635f36f.js';
import { a as l$2, b as l$3 } from './TileStore-39bbbf67.js';
import { aS as u$2, aT as q$1 } from './Graphic-6c72131a.js';
import { e as e$1 } from './TileKey-c678a190.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const u$1=new Set,a$2=[],c$2=new Map,h$2=[0,0];let l$1=class extends p$2{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null;}initialize(){const{concurrency:e,process:t}=this;this._queue=new l$2({concurrency:e,process:(e,s)=>{const r=this._keyToItem.get(e);return t(r,{signal:s})},peeker:e=>e.values().next().value});}destroy(){this.clear(),this._queue.destroy(),this._queue=null;}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t);}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating");}has(e){return "string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause();}push(e,t){const s=e.key.id+"-"+t;if(this.has(s))return this.get(s);const r=this._queue.push(s),o=()=>{this._keyToItem.delete(s),this.notifyChange("updating");};return this._keyToItem.set(s,e),r.then(o,o),this.notifyChange("updating"),r}reset(){this._queue.reset(),this.notifyChange("updating");}resume(){this._queue.resume();}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),o=this.tileInfoView.getTileScale(t.key);c$2.has(o)||(c$2.set(o,[]),s=Math.max(o,s),r=Math.min(o,r)),c$2.get(o).push(t.key),u$1.add(o);}));let o=this.state.scale;c$2.has(o)||(n$1(a$2,u$1),a$2.sort(((e,t)=>e-t)),o=a$2.reduce(((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e),a$2[0])),o=Math.min(o,s),o=Math.max(o,r);const i=c$2.get(o),h=t.getClosestInfoForScale(o),l=h.getColumnForX(this.state.center[0]),p=h.getRowForY(this.state.center[1]);return i.sort(((e,t)=>{const s=h.denormalizeCol(e.col,e.world),r=h.denormalizeCol(t.col,t.world);return Math.sqrt((l-s)*(l-s)+(p-e.row)*(p-e.row))-Math.sqrt((l-r)*(l-r)+(p-t.row)*(p-t.row))})),u$1.clear(),c$2.clear(),i[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let r=Number.POSITIVE_INFINITY,i=null;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(h$2,n.key);const u=d(h$2,s);u<r&&(r=u,i=n.key);})),i.id}};e([d$1({constructOnly:!0})],l$1.prototype,"concurrency",void 0),e([d$1({constructOnly:!0})],l$1.prototype,"process",void 0),e([d$1()],l$1.prototype,"state",void 0),e([d$1({constructOnly:!0})],l$1.prototype,"strategy",void 0),e([d$1({constructOnly:!0})],l$1.prototype,"tileInfoView",void 0),e([d$1({readOnly:!0})],l$1.prototype,"updating",null),l$1=e([i$1("esri.views.2d.tiling.PagedTileQueue")],l$1);const p$1=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const u=new Set,c$1=[],a$1=new Map,h$1=[0,0];let l=class extends p$2{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null;}initialize(){const{concurrency:e,process:t,strategy:s}=this;this._queue=new l$2({concurrency:e,process:(e,s)=>{const r=this._keyToItem.get(e);return t(r,{signal:s})},peeker:"scale-first"===s?e=>this._peekByScaleFirst(e):e=>this._peekByCenterFirst(e)});}destroy(){this.clear(),this._queue.destroy(),this._queue=null;}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t);}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating");}has(e){return "string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause();}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const s=this._queue.push(t),r=()=>{this._keyToItem.delete(t),this.notifyChange("updating");};return this._keyToItem.set(t,e),s.then(r,r),this.notifyChange("updating"),s}reset(){this._queue.reset();}resume(){this._queue.resume();}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),o=this.tileInfoView.getTileScale(t.key);a$1.has(o)||(a$1.set(o,[]),s=Math.max(o,s),r=Math.min(o,r)),a$1.get(o).push(t.key),u.add(o);}));let o=this.state.scale;a$1.has(o)||(n(c$1,u),c$1.sort(((e,t)=>e-t)),o=c$1.reduce(((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e),c$1[0])),o=Math.min(o,s),o=Math.max(o,r);const i=a$1.get(o),h=t.getClosestInfoForScale(o),l=h.getColumnForX(this.state.center[0]),p=h.getRowForY(this.state.center[1]);return i.sort(((e,t)=>{const s=h.denormalizeCol(e.col,e.world),r=h.denormalizeCol(t.col,t.world);return Math.sqrt((l-s)*(l-s)+(p-e.row)*(p-e.row))-Math.sqrt((l-r)*(l-r)+(p-t.row)*(p-t.row))})),u.clear(),a$1.clear(),i[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let r=Number.POSITIVE_INFINITY,i=null;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(h$1,n.key);const u=d(h$1,s);u<r&&(r=u,i=n.key);})),i.id}};e([d$1({constructOnly:!0})],l.prototype,"concurrency",void 0),e([d$1({constructOnly:!0})],l.prototype,"process",void 0),e([d$1()],l.prototype,"state",void 0),e([d$1({constructOnly:!0})],l.prototype,"strategy",void 0),e([d$1({constructOnly:!0})],l.prototype,"tileInfoView",void 0),e([d$1({readOnly:!0})],l.prototype,"updating",null),l=e([i$1("esri.views.2d.tiling.TileQueue")],l);const p=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e,t,i){this.maxSize=e,this.tileInfoView=t,this.removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[];}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const t=this._tilePerId.get(e);if(!t)return null;const s=t.key.level,r=this._tileKeysPerLevel[s];i(this._tilePerId,e);for(let i=0;i<r.length;i++)if(r[i].id===e){r.splice(i,1);break}return t.visible=!0,t}add(e){e.visible=!1;const t=e.key,i=t.id;if(this._tilePerId.has(i))return;this._tilePerId.set(i,e);const s=t.level;this._tileKeysPerLevel[s]||(this._tileKeysPerLevel[s]=[]),this._tileKeysPerLevel[s].push(t);}prune(e,t,i){let s=this._tilePerId.size;if(s<=this.maxSize)return;let r=this._tileKeysPerLevel.length-1;for(;s>this.maxSize&&r>=0;)r!==e&&(s=this._pruneAroundCenterTile(s,t,i,r)),r--;s>this.maxSize&&(s=this._pruneAroundCenterTile(s,t,i,e));}_pruneAroundCenterTile(t,i,s,r){const l=this._tileKeysPerLevel[r];if(!l||0===l.length)return t;const{size:n,origin:h}=this.tileInfoView.tileInfo,o=s*n[0],u=s*n[1],d=[0,0],_=[0,0];for(l.sort(((t,s)=>(d[0]=h.x+o*(t.col+.5),d[1]=h.y-u*(t.row+.5),_[0]=h.x+o*(s.col+.5),_[1]=h.y-u*(s.row+.5),q(d,i)-q(_,i))));l.length>0;){const e=l.pop();if(this._removeTile(e.id),--t===this.maxSize)break}return t}_removeTile(e){const t=this._tilePerId.get(e);this.removedFunc&&this.removedFunc(t),i(this._tilePerId,e);}}function i(e,t){e.delete(t);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=new e$1(0,0,0,0),h=new Map,o=[],c=[];class r{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new t(e.cacheSize,this.tileInfoView,(e=>{this.releaseTile(e);})));}destroy(){this.tileIndex.clear();}update(e){const{resampling:i,tileIndex:t}=this,l=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(c.length=0,o.length=0,h.clear(),!l)return;const{minScale:r,maxScale:n}=this.tileInfoView.tileInfo,{spans:f,lodInfo:d}=l,{level:u}=d,{scale:p,center:g,resolution:y}=e.state,I=!e.stationary&&p>this._previousScale;if(this._previousScale=p,this.tiles.length=0,!i&&(p>r||p<n))return this.tiles.length=0,h.clear(),t.forEach((e=>{this.releaseTile(e);})),t.clear(),c.length=0,o.length=0,h.clear(),l$3.pool.release(l),!0;t.forEach((e=>e.visible=!0));let T=0,_=0;if(f.length>0)for(const{row:s,colFrom:o,colTo:c}of f)for(let e=o;e<=c;e++){T++;const i=a.set(u,s,d.normalizeCol(e),d.getWorldForColumn(e)).id;if(t.has(i)){const e=t.get(i);e.isReady?(h.set(i,e),_++):I||this._addParentTile(i,h);}else {let e;if(this._tileCache&&this._tileCache.has(i)){if(e=this._tileCache.pop(i),this.tileIndex.set(i,e),e.isReady){h.set(i,e),_++;continue}}else e=this.acquireTile(a),this.tileIndex.set(i,e);I||this._addParentTile(i,h);}}const m=_===T;t.forEach(((e,i)=>{if(a.set(i),h.has(i))return;const t=this.tileInfoView.intersects(l,a),s="purge"===this.cachePolicy?a.level!==u:a.level>u;!t||!I&&m?!s&&t||o.push(i):e.isReady?s&&"purge"===this.cachePolicy&&this._hasReadyAncestor(a,u)?o.push(i):c.push(i):s&&o.push(i);}));for(const s of c){const e=t.get(s);e&&e.isReady&&h.set(s,e);}for(const s of o){const e=t.get(s);this._tileCache?this._tileCache.add(e):this.releaseTile(e),t.delete(s);}return h.forEach((e=>this.tiles.push(e))),t.forEach((e=>{h.has(e.key.id)||(e.visible=!1);})),this._tileCache&&this._tileCache.prune(u,g,y),l$3.pool.release(l),h.clear(),m}clear(e=!0){const{tileIndex:i}=this;e&&i.forEach((e=>{this.releaseTile(e);})),i.clear();}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e);}_addParentTile(e,i){let t=e,s=null;for(;t=this.tileInfoView.getTileParentId(t),t;)if(this.tileIndex.has(t)){if(s=this.tileIndex.get(t),s&&s.isReady){i.has(s.key.id)||i.set(s.key.id,s);break}}else if(this._tileCache&&this._tileCache.has(t)&&(s=this._tileCache.pop(t),this.tileIndex.set(t,s),s&&s.isReady)){i.has(s.key.id)||i.set(s.key.id,s);break}}_hasReadyAncestor(t,s){const l=u$2();this.tileInfoView.getTileBounds(l,t,!0);for(const a of this.tileIndex.values())if(a.isReady&&a.key.level>=s&&a.key.level<t.level){const t=u$2();if(this.tileInfoView.getTileBounds(t,a.key,!0),q$1(t,l))return !0}return !1}}

export { p, r };
