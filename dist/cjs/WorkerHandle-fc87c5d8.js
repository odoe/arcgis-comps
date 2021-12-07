'use strict';

const request = require('./messageBundle-8be88d04.js');
const workers = require('./workers-bde9fe32.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=request.s$1.getLogger("esri.core.workers.WorkerHandle");class n{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=workers.u(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e);}else e.close();})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)));}on(r,i){const o={removed:!1,eventName:r,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),request.n$11((()=>{o.removed=!0,request.C(this._listeners,o),this._thread&&request.r(o.threadHandle)&&o.threadHandle.remove();}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null;}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(request.h(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t);}));}}

exports.n = n;
