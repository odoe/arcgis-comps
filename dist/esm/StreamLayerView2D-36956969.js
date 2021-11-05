import { e, d as d$1, i, a7 as s, dZ as g, g as t, W as r } from './MapView-2c43b6d4.js';
import X from './FeatureLayerView2D-baceebf7.js';
import { e as e$1 } from './schemaUtils-57c391a2.js';
import './index-41925fe8.js';
import './EffectList-02a3200c.js';
import './clickToleranceUtils-b5cfb431.js';
import './definitions-6a5ca2d9.js';
import './LayerView-a385f1f9.js';
import './Container-1cf746dd.js';
import './popupUtils-3d405c09.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-15cc8635.js';
import './drapedUtils-2d6d5a46.js';
import './Utils-c57a8ada.js';
import './Texture-521e6007.js';
import './MaterialKey-baaa6a67.js';
import './visualVariablesUtils-dedba3c5.js';
import './CIMSymbolHelper-56f84ff0.js';
import './Rect-988189d5.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './cimSymbolUtils-6202203c.js';
import './cimAnalyzer-452c2270.js';
import './quantizationUtils-3a07a999.js';
import './devEnvironmentUtils-872cccb2.js';
import './MD5-6027098a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const s={};return r(t$1)&&(s.geometry=t$1.toJSON()),r(e)&&(s.where=e),s}let p=class extends X{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=e$1(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],p.prototype,"errorString",void 0),e([d$1({readOnly:!0})],p.prototype,"connectionError",null),e([d$1()],p.prototype,"connectionStatus",void 0),p=e([i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

export default d;
