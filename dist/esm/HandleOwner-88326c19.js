import { e, d as d$1, i, p, u, a as i$1, $, af as t, aQ as u$1, aR as v } from './messageBundle-f75b4090.js';
import { i as i$2 } from './reactiveUtils-8f9c3a3d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends p{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new u,this.scheduleHandleId=0,this.pendingPromises=new Set;}destroy(){this.removeAll(),this.handles.destroy();}add(e,s,t,d=0){const r=0!=(1&d),i=++this.handleId;r||this.installSyncUpdatingWatch(e,s,i);const a=0!=(2&d)?i$1(e,s,t,r):e.watch(s,t,r);return this.handles.add(a,i),{remove:()=>this.handles.remove(i)}}addOnCollectionPropertyChange(e,s,t,d=0){const r=0!=(2&d),i=++this.handleId;return this.handles.add([$(e,s,"after-changes",this.createSyncUpdatingCallback()),$(e,s,"change",t,r?e=>{t({added:e.items,removed:[],moved:[],target:e});}:void 0)],i),{remove:()=>{this.handles.remove(i);}}}addOnCollectionChange(e,s,t=0){const d=0!=(2&t),r=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",s)],r),d&&s({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(r);}}}addPromise(e){if(t(e))return e;const s=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(m)||this._set("updating",!1));}},s),this.pendingPromises.add(e),this._set("updating",!0);const t$1=()=>this.handles.remove(s);return e.then(t$1,t$1),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1);}installSyncUpdatingWatch(e,s,t){const d=this.createSyncUpdatingCallback(),i=i$2((()=>u$1(e,s)),d,{sync:!0,equals:()=>!1});return this.handles.add(i,t),i}createSyncUpdatingCallback(){return ()=>{this.handles.remove(m),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(v((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(m));})),m);}}};e([d$1({readOnly:!0})],l.prototype,"updating",void 0),l=e([i("esri.views.support.WatchUpdatingTracking")],l);const m=-42;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=s=>{let a=class extends s{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy());}get handles(){return this._get("handles")||new u}get updatingHandles(){return this._get("updatingHandles")||new l}};return e([d$1({readOnly:!0})],a.prototype,"handles",null),e([d$1({readOnly:!0})],a.prototype,"updatingHandles",null),a=e([i("esri.core.HandleOwner")],a),a};let d=class extends(a(p)){};d=e([i("esri.core.HandleOwner")],d);

export { a, d, l };
