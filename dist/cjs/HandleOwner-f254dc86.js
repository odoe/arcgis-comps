'use strict';

const request = require('./messageBundle-312ceb47.js');
const reactiveUtils = require('./reactiveUtils-9e33ad73.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.l=class extends request.p{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new request.u$2,this.scheduleHandleId=0,this.pendingPromises=new Set;}destroy(){this.removeAll(),this.handles.destroy();}add(e,s,t,d=0){const r=0!=(1&d),i=++this.handleId;r||this.installSyncUpdatingWatch(e,s,i);const a=0!=(2&d)?request.i$1(e,s,t,r):e.watch(s,t,r);return this.handles.add(a,i),{remove:()=>this.handles.remove(i)}}addOnCollectionPropertyChange(e,s,t,d=0){const r=0!=(2&d),i=++this.handleId;return this.handles.add([request.$(e,s,"after-changes",this.createSyncUpdatingCallback()),request.$(e,s,"change",t,r?e=>{t({added:e.items,removed:[],moved:[],target:e});}:void 0)],i),{remove:()=>{this.handles.remove(i);}}}addOnCollectionChange(e,s,t=0){const d=0!=(2&t),r=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",s)],r),d&&s({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(r);}}}addPromise(e){if(request.t(e))return e;const s=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(m)||this._set("updating",!1));}},s),this.pendingPromises.add(e),this._set("updating",!0);const t=()=>this.handles.remove(s);return e.then(t,t),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1);}installSyncUpdatingWatch(e,s,t){const d=this.createSyncUpdatingCallback(),i=reactiveUtils.i((()=>request.u$5(e,s)),d,{sync:!0,equals:()=>!1});return this.handles.add(i,t),i}createSyncUpdatingCallback(){return ()=>{this.handles.remove(m),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(request.v((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(m));})),m);}}};request.e([request.d({readOnly:!0})],exports.l.prototype,"updating",void 0),exports.l=request.e([request.i("esri.views.support.WatchUpdatingTracking")],exports.l);const m=-42;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=s=>{let a=class extends s{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy());}get handles(){return this._get("handles")||new request.u$2}get updatingHandles(){return this._get("updatingHandles")||new exports.l}};return request.e([request.d({readOnly:!0})],a.prototype,"handles",null),request.e([request.d({readOnly:!0})],a.prototype,"updatingHandles",null),a=request.e([request.i("esri.core.HandleOwner")],a),a};exports.d=class extends(a(request.p)){};exports.d=request.e([request.i("esri.core.HandleOwner")],exports.d);

exports.a = a;
