'use strict';

const request = require('./messageBundle-8be88d04.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-7bf75e1e.js');
require('./index-fde8502c.js');
require('./BlendLayer-6a2ab430.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./mat4-f68486bc.js');
require('./common-41a349f2.js');
require('./geometry-ef17530a.js');
require('./TimeExtent-8b558884.js');
require('./Query-354911d3.js');
require('./enumeration-f235fe07.js');
require('./jsonUtils-b6068079.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./mathUtils-af6066f0.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./jsonUtils-62d28b73.js');
require('./Graphic-0aff6059.js');
require('./EffectList-9ac19b5e.js');
require('./drapedUtils-2fa2770f.js');
require('./FeatureSet-8efc5965.js');
require('./definitions-b4888cc6.js');
require('./LayerView2D-6de7adcc.js');
require('./Container-afc09537.js');
require('./DefaultUI-75d05512.js');
require('./Basemap-81280554.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./CollectionFlattener-bc4cde45.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./HeightModelInfo-06fd3d80.js');
require('./Scheduler-72cbcf2a.js');
require('./debugFlags-5e6b0151.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./TopFeaturesQuery-92caa731.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./diffUtils-df69757f.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./CustomParametersMixin-996a5732.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./heightModelInfoUtils-9cedab45.js');
require('./Viewpoint-bbe11330.js');
require('./mathUtils-87b1f941.js');
require('./mat2d-2d5fae3e.js');
require('./mat2df32-85bf8b84.js');
require('./mat2df64-e9760778.js');
require('./mat3-1d3e0d51.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./vec2f64-60b3c97e.js');
require('./capabilities-76889198.js');
require('./DisplayObject-573912c8.js');
require('./schemaUtils-f703d6cd.js');
require('./Utils-a77299a6.js');
require('./Texture-95d9d662.js');
require('./MaterialKey-b68d4c0b.js');
require('./visualVariablesUtils-2a522774.js');
require('./CIMSymbolHelper-79a17067.js');
require('./BidiEngine-e033e7c0.js');
require('./floatRGBA-aa45f7cb.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-7a21888c.js');
require('./cimAnalyzer-eb6fa5b4.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./quantizationUtils-d1d9c03e.js');
require('./devEnvironmentUtils-aafb5541.js');
require('./MD5-e5fc0526.js');
require('./TileStore-1f212ad3.js');
require('./TileKey-d800cfb2.js');
require('./quickselect-d3f68f5a.js');
require('./FeatureLayerView-c740997b.js');
require('./popupUtils-454e6531.js');
require('./floorFilterUtils-a9b30733.js');
require('./LayerView-2bc30c9f.js');
require('./RefreshableLayerView-a72efa88.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends FeatureLayerView2D['default']{initialize(){this.handles.add([request.i$1(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=request.r(s)?s:(new labelingInfo.y).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=request.e([request.i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

exports.default = n;
