import{e,d as t,i as r,b as s,cJ as i,t as o,r as p}from"./p-5420851c.js";import n from"./p-121d0deb.js";import{e as a}from"./p-baad017f.js";import"./p-53bb6ab4.js";import"./p-4c6040da.js";import"./p-bdb8e9d6.js";import"./p-47e1bd73.js";import"./p-e4db8bd2.js";import"./p-e2fe661c.js";import"./p-cc74fdc8.js";import"./p-03d6250d.js";import"./p-8dd46af5.js";import"./p-4dafedac.js";import"./p-54db165f.js";import"./p-4d140ee3.js";import"./p-13d3a443.js";import"./p-6189adb6.js";import"./p-ba8c567b.js";import"./p-2d0c34e5.js";import"./p-b392deaf.js";import"./p-9790d1b4.js";import"./p-7e5e535f.js";import"./p-9047f753.js";import"./p-8bf8e457.js";import"./p-4d0ba4c4.js";import"./p-e991a11e.js";function d(e,t){if(o(e)&&o(t))return null;const r={};return p(t)&&(r.geometry=t.toJSON()),p(e)&&(r.where=e),r}let c=class extends n{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return{remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=i.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=a(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:d(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([t()],c.prototype,"errorString",void 0),e([t({readOnly:!0})],c.prototype,"connectionError",null),e([t()],c.prototype,"connectionStatus",void 0),c=e([r("esri.views.2d.layers.StreamLayerView2D")],c);const m=c;export default m;