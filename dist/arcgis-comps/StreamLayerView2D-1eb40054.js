import { g as t, A as r, h as s, e as e$1, a as d$1, i } from './jsxFactory-a3b6abde.js';
import g from './FeatureSet-d7537daf.js';
import X from './FeatureLayerView2D-c585ad52.js';
import { e } from './schemaUtils-11bfc59f.js';
import './index-8dec7690.js';
import './Graphic-08cda9ca.js';
import './JSONSupport-4f0a3248.js';
import './Field-416cada2.js';
import './fieldType-7f2a820b.js';
import './EffectList-a40f7f6a.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './labelingInfo-af47848f.js';
import './TimeExtent-a92e5996.js';
import './Query-a20a7572.js';
import './commonProperties-ad8badbd.js';
import './lengthUtils-e1fe9a45.js';
import './LabelClass-a0793742.js';
import './labelUtils-434b8348.js';
import './defaultsJSON-53258912.js';
import './jsonUtils-43243fe0.js';
import './drapedUtils-bb946d18.js';
import './definitions-a1bd4630.js';
import './LayerView-056f08df.js';
import './Container-ce32194d.js';
import './MapView-fd6af8ef.js';
import './CollectionFlattener-6fc74400.js';
import './HandleOwner-a0b41b75.js';
import './reactiveUtils-aa11596b.js';
import './workers-82dadb41.js';
import './executeQueryJSON-21f02626.js';
import './utils-6b47d93a.js';
import './query-0985d8b5.js';
import './normalizeUtils-359d2c6f.js';
import './pbfQueryUtils-8da18556.js';
import './pbf-a77a8e4c.js';
import './OptimizedFeature-3d0408e5.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-407bfc75.js';
import './zscale-6af4ef9a.js';
import './TopFeaturesQuery-4aea53d6.js';
import './Heading-312c4ffe.js';
import './utils-01c563d8.js';
import './asyncUtils-9a49e799.js';
import './ItemCache-f80eba0b.js';
import './MemCache-dfacc658.js';
import './utils-f8425723.js';
import './widget-7d4c291e.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-74d4023b.js';
import './compilerUtils-a5ae094d.js';
import './featureConversionUtils-ef2563e9.js';
import './Task-5476576b.js';
import './FeatureLayer-6179c233.js';
import './UniqueValueRenderer-8dbcac2c.js';
import './VisualVariablesMixin-b52a2c87.js';
import './colorRamps-270af342.js';
import './ColorStop-e7cb8b17.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-21378141.js';
import './diffUtils-a2ab1186.js';
import './styleUtils-91b1203b.js';
import './DictionaryRenderer-80042e03.js';
import './LRUCache-d4f192fd.js';
import './jsonUtils-66ddb072.js';
import './MultiOriginJSONSupport-22dd2d29.js';
import './HeightModelInfo-5a7b6583.js';
import './APIKeyMixin-d87deecc.js';
import './ArcGISService-88c76264.js';
import './arcgisLayerUrl-a1acfaeb.js';
import './BlendLayer-1d9f1c9a.js';
import './CustomParametersMixin-92abdfc3.js';
import './OperationalLayer-26aa2ff7.js';
import './OrderedLayer-2f7497c3.js';
import './PortalLayer-8e73039a.js';
import './PortalItem-4dd070a8.js';
import './RefreshableLayer-5b977e98.js';
import './ScaleRangeLayer-2f975321.js';
import './TemporalLayer-f3b14395.js';
import './TimeInfo-8ecf4da2.js';
import './FeatureType-ba8f07c3.js';
import './fieldProperties-f216bcfb.js';
import './FieldsIndex-87a4d86b.js';
import './LayerFloorInfo-a2a78182.js';
import './styleUtils-22872348.js';
import './popupUtils-9dc503ca.js';
import './TileStore-f74dddba.js';
import './TileKey-6190320d.js';
import './quickselect-ccfd8cff.js';
import './GoTo-5947d15d.js';
import './mathUtils-6ae1ce0d.js';
import './TileInfo-11d4e5af.js';
import './Basemap-726ae687.js';
import './loadAll-b50c1134.js';
import './writeUtils-043189c3.js';
import './TablesMixin-92eb787e.js';
import './GraphicsCollection-bd1f8010.js';
import './Scheduler-1618ba8f.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-c1b9a27f.js';
import './vec2-42a7347f.js';
import './vec2f64-503345b4.js';
import './projection-0b5fc15a.js';
import './mat3-1b3794e5.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-813150bb.js';
import './screenshotUtils-f5f99bb9.js';
import './capabilities-2d1bcd77.js';
import './popupUtils-db03d6f5.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-0a229f4d.js';
import './Utils-44b2954a.js';
import './number-888f4898.js';
import './Texture-87b2db4d.js';
import './MaterialKey-3186eef7.js';
import './visualVariablesUtils-849579bf.js';
import './CIMSymbolHelper-b9d20e65.js';
import './Rect-988189d5.js';
import './GeometryUtils-93aa6536.js';
import './cimSymbolUtils-87ec8db9.js';
import './cimAnalyzer-1d3d2ac3.js';
import './quantizationUtils-f232a47d.js';
import './devEnvironmentUtils-2a0d40be.js';
import './MD5-6027098a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const s={};return r(t$1)&&(s.geometry=t$1.toJSON()),r(e)&&(s.where=e),s}let p=class extends X{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e$1=this.layer,{objectIdField:t}=e$1,r=e$1.fields.map((e=>e.toJSON())),o=e(e$1.geometryType),s=e$1.timeInfo&&e$1.timeInfo.toJSON()||null,i=e$1.spatialReference?e$1.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e$1.customParameters}}};e$1([d$1()],p.prototype,"errorString",void 0),e$1([d$1({readOnly:!0})],p.prototype,"connectionError",null),e$1([d$1()],p.prototype,"connectionStatus",void 0),p=e$1([i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

export default d;