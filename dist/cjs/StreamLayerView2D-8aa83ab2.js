'use strict';

const request = require('./MapView-1726f571.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-065b7ec9.js');
const schemaUtils = require('./schemaUtils-9bd21a56.js');
require('./index-fde8502c.js');
require('./EffectList-c8b0929b.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-ab44860f.js');
require('./Container-16ae77e1.js');
require('./popupUtils-720b99f0.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-bf1c1d9d.js');
require('./drapedUtils-268b2272.js');
require('./Utils-e5a61fef.js');
require('./Texture-81e2ece6.js');
require('./MaterialKey-7ad63f3d.js');
require('./visualVariablesUtils-567175e3.js');
require('./CIMSymbolHelper-11b13154.js');
require('./BidiEngine-e033e7c0.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-a5d3a92a.js');
require('./cimAnalyzer-f3efd46b.js');
require('./quantizationUtils-67099620.js');
require('./devEnvironmentUtils-a59d6ef8.js');
require('./MD5-e5fc0526.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t){if(request.t(e)&&request.t(t))return null;const s={};return request.r(t)&&(s.geometry=t.toJSON()),request.r(e)&&(s.where=e),s}let p=class extends FeatureLayerView2D['default']{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new request.s$1("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new request.s$1("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=request.g$4.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=schemaUtils.e(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};request.e([request.d()],p.prototype,"errorString",void 0),request.e([request.d({readOnly:!0})],p.prototype,"connectionError",null),request.e([request.d()],p.prototype,"connectionStatus",void 0),p=request.e([request.i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

exports.default = d;
