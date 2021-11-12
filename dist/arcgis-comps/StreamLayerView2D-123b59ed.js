import { g as t, A as r, h as s, e as e$1, a as d$1, i } from './jsxFactory-b8b7429b.js';
import g from './FeatureSet-ac01aefd.js';
import X from './FeatureLayerView2D-8cd8e212.js';
import { e } from './schemaUtils-6fd3558d.js';
import './index-921bd636.js';
import './Graphic-75d1efd2.js';
import './JSONSupport-15eefdaf.js';
import './Field-3662c57d.js';
import './fieldType-1c6ed2e9.js';
import './EffectList-ad3aebe3.js';
import './jsonUtils-9b8c4071.js';
import './mat4-7dc89e3f.js';
import './_commonjsHelpers-020ca939.js';
import './labelingInfo-7446840d.js';
import './TimeExtent-11f1925b.js';
import './Query-d6a1dd36.js';
import './commonProperties-c39cb6e7.js';
import './lengthUtils-c1fc84e6.js';
import './LabelClass-37380caa.js';
import './labelUtils-27593fd8.js';
import './defaultsJSON-53258912.js';
import './jsonUtils-904bd6e1.js';
import './drapedUtils-f643abcb.js';
import './definitions-a1bd4630.js';
import './LayerView-4c0164d7.js';
import './Container-86ac9c83.js';
import './MapView-99a05548.js';
import './CollectionFlattener-011440e6.js';
import './HandleOwner-89177892.js';
import './reactiveUtils-37eae8e4.js';
import './workers-abd4af5a.js';
import './executeQueryJSON-c8bf8101.js';
import './utils-5cb95ff2.js';
import './query-99f5f334.js';
import './normalizeUtils-097054a0.js';
import './pbfQueryUtils-fe0206b7.js';
import './pbf-ac00f72c.js';
import './OptimizedFeature-ac6d77d3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-ca210e89.js';
import './zscale-aa683312.js';
import './TopFeaturesQuery-cb0fdf83.js';
import './Heading-d3c07d3f.js';
import './utils-64bd22f7.js';
import './asyncUtils-4aacff64.js';
import './ItemCache-4c9e4246.js';
import './MemCache-ba22e87a.js';
import './utils-f8425723.js';
import './widget-fd14b780.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-56cd56c4.js';
import './compilerUtils-fd4d1928.js';
import './featureConversionUtils-3b0788c3.js';
import './Task-04425ab7.js';
import './FeatureLayer-f6c171eb.js';
import './UniqueValueRenderer-c001e8b8.js';
import './VisualVariablesMixin-a733e60f.js';
import './colorRamps-564a1b52.js';
import './ColorStop-6bbf8625.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-d30b1042.js';
import './diffUtils-7afe88f2.js';
import './styleUtils-2aef643e.js';
import './DictionaryRenderer-5a73e1dd.js';
import './LRUCache-4697cf73.js';
import './jsonUtils-5413cd65.js';
import './MultiOriginJSONSupport-409caa57.js';
import './HeightModelInfo-6673666d.js';
import './APIKeyMixin-e6f88474.js';
import './ArcGISService-78aba528.js';
import './arcgisLayerUrl-f16875e5.js';
import './BlendLayer-8a19cb4c.js';
import './CustomParametersMixin-65dc0d22.js';
import './OperationalLayer-7b6946f0.js';
import './OrderedLayer-d05dde4e.js';
import './PortalLayer-c699b91c.js';
import './PortalItem-86be48d7.js';
import './RefreshableLayer-eff019c1.js';
import './ScaleRangeLayer-fd3df739.js';
import './TemporalLayer-1525e917.js';
import './TimeInfo-1e2583f2.js';
import './FeatureType-f5fde895.js';
import './fieldProperties-666e1160.js';
import './FieldsIndex-b4d96270.js';
import './LayerFloorInfo-35df5ab8.js';
import './styleUtils-ccdf1dd0.js';
import './popupUtils-62f80c9e.js';
import './TileStore-0849dbc4.js';
import './TileKey-ca920992.js';
import './quickselect-ccfd8cff.js';
import './GoTo-3a7bfc1d.js';
import './mathUtils-ed056359.js';
import './TileInfo-a600dd32.js';
import './Basemap-c5f20d06.js';
import './loadAll-78f2a3b0.js';
import './writeUtils-840b5f7a.js';
import './TablesMixin-4e7e4fb2.js';
import './GraphicsCollection-94ceaf9a.js';
import './Scheduler-f38cd3ae.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-c0cd43b0.js';
import './vec2-81a18cb4.js';
import './vec2f64-503345b4.js';
import './projection-6b3ce748.js';
import './mat3-9ad554b9.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-34d0ce47.js';
import './screenshotUtils-61ccf49a.js';
import './capabilities-828d86c4.js';
import './popupUtils-a8978068.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-be36d863.js';
import './Utils-0cbcb18a.js';
import './number-888f4898.js';
import './Texture-95288d63.js';
import './MaterialKey-35547bf1.js';
import './visualVariablesUtils-f8563608.js';
import './CIMSymbolHelper-e9c59cd4.js';
import './Rect-988189d5.js';
import './GeometryUtils-93aa6536.js';
import './cimSymbolUtils-a42f9fe7.js';
import './cimAnalyzer-1f61ef7a.js';
import './quantizationUtils-5cc7bb8b.js';
import './devEnvironmentUtils-3628b10d.js';
import './MD5-6027098a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const s={};return r(t$1)&&(s.geometry=t$1.toJSON()),r(e)&&(s.where=e),s}let p=class extends X{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e$1=this.layer,{objectIdField:t}=e$1,r=e$1.fields.map((e=>e.toJSON())),o=e(e$1.geometryType),s=e$1.timeInfo&&e$1.timeInfo.toJSON()||null,i=e$1.spatialReference?e$1.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e$1.customParameters}}};e$1([d$1()],p.prototype,"errorString",void 0),e$1([d$1({readOnly:!0})],p.prototype,"connectionError",null),e$1([d$1()],p.prototype,"connectionStatus",void 0),p=e$1([i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

export default d;
