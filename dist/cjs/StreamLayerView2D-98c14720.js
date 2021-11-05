'use strict';

const request = require('./MapView-1195e7f1.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-527cbab1.js');
const schemaUtils = require('./schemaUtils-60fb47fc.js');
require('./index-b630e408.js');
require('./EffectList-c2e3d9b4.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-870ab467.js');
require('./Container-7c02556c.js');
require('./popupUtils-1e401adb.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-fe90cf84.js');
require('./drapedUtils-bc0642dd.js');
require('./Utils-cf62b8df.js');
require('./Texture-51894e1f.js');
require('./MaterialKey-a9d25bbc.js');
require('./visualVariablesUtils-35b3c097.js');
require('./CIMSymbolHelper-5119d47d.js');
require('./Rect-8ca00bae.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-34c12ff0.js');
require('./cimAnalyzer-a0ed6247.js');
require('./quantizationUtils-6e32af1f.js');
require('./devEnvironmentUtils-2fe58900.js');
require('./MD5-e5fc0526.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t){if(request.t$2(e)&&request.t$2(t))return null;const s={};return request.r(t)&&(s.geometry=t.toJSON()),request.r(e)&&(s.where=e),s}let p=class extends FeatureLayerView2D['default']{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new request.s$3("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new request.s$3("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=request.g$5.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=schemaUtils.e(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};request.e([request.d()],p.prototype,"errorString",void 0),request.e([request.d({readOnly:!0})],p.prototype,"connectionError",null),request.e([request.d()],p.prototype,"connectionStatus",void 0),p=request.e([request.i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

exports.default = d;
