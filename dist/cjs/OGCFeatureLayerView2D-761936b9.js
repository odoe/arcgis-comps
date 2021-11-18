'use strict';

const request = require('./messageBundle-312ceb47.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-7b688077.js');
require('./index-57f2cfbb.js');
require('./unitUtils-61d611e2.js');
require('./JSONSupport-53c01d03.js');
require('./EffectList-66a02fd6.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./labelingInfo-b4dde768.js');
require('./TimeExtent-cdfe048b.js');
require('./Query-35be2e91.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./commonProperties-75b954b3.js');
require('./lengthUtils-3475e67e.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./jsonUtils-1999c7ae.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./FeatureSet-2e9b97a5.js');
require('./definitions-b4888cc6.js');
require('./LayerView-46fb1e7b.js');
require('./Container-cb837708.js');
require('./MapView-dbdeb77b.js');
require('./CollectionFlattener-3dadfe6b.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./workers-1668d5a8.js');
require('./executeQueryJSON-d0e52ec5.js');
require('./utils-f7ec83ae.js');
require('./query-89593027.js');
require('./normalizeUtils-b6002011.js');
require('./pbfQueryUtils-7b4746bb.js');
require('./pbf-758dd66b.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./symbolUtils-65bd4d7e.js');
require('./utils-08a64a75.js');
require('./asyncUtils-9f974032.js');
require('./ItemCache-c32783d3.js');
require('./MemCache-1ae72e1e.js');
require('./utils-fb318f28.js');
require('./widget-41a1462e.js');
require('./QueryTask-f73be2a3.js');
require('./featureConversionUtils-e6cca372.js');
require('./Task-0c2f1790.js');
require('./FeatureLayer-47713b0f.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./diffUtils-467572e8.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./jsonUtils-fa6e9edd.js');
require('./Layer-849337e0.js');
require('./HeightModelInfo-3363f0e0.js');
require('./APIKeyMixin-f99c03a8.js');
require('./ArcGISService-a170c777.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./BlendLayer-7e864068.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./OperationalLayer-f89b9d70.js');
require('./OrderedLayer-1ea23e5d.js');
require('./PortalLayer-19d79370.js');
require('./PortalItem-42e06deb.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./ScaleRangeLayer-52589af6.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./FeatureType-5a860566.js');
require('./fieldProperties-f6acb896.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./popupUtils-180c3a12.js');
require('./TileStore-3be4ace6.js');
require('./TileKey-b425207e.js');
require('./quickselect-d3f68f5a.js');
require('./aaBoundingRect-7e7e678f.js');
require('./GoTo-9e48be05.js');
require('./mathUtils-ff0a3d04.js');
require('./TileInfo-363ea532.js');
require('./Basemap-0c094028.js');
require('./loadAll-57962b35.js');
require('./writeUtils-efed1c82.js');
require('./compilerUtils-54d3d3a9.js');
require('./TablesMixin-bdd488ef.js');
require('./GraphicsCollection-761d7a93.js');
require('./Scheduler-940b6f3b.js');
require('./unitBezier-5ab0945f.js');
require('./mat2df32-f2b5b52d.js');
require('./vec2-65c4309d.js');
require('./vec2f64-c36614be.js');
require('./projection-e04cb9d0.js');
require('./mat3-1bc0ab17.js');
require('./vec2f32-29a5eecf.js');
require('./TileStrategy-d5289194.js');
require('./screenshotUtils-33e2013d.js');
require('./capabilities-ef851f65.js');
require('./schemaUtils-f3e2baa9.js');
require('./Utils-b188baf8.js');
require('./Texture-272da42e.js');
require('./MaterialKey-0f043067.js');
require('./visualVariablesUtils-77c3c121.js');
require('./CIMSymbolHelper-e1208fc4.js');
require('./BidiEngine-e033e7c0.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-3f93bd5c.js');
require('./cimAnalyzer-a91407a6.js');
require('./quantizationUtils-7dfad3c7.js');
require('./devEnvironmentUtils-98ac846b.js');
require('./MD5-e5fc0526.js');
require('./popupUtils-3b660ad3.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-3293c339.js');
require('./drapedUtils-7b2ec8c1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1=a=>{let o=class extends a{initialize(){const{layer:e,view:s}=this;e.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new request.s$1("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return request.e([request.d()],o.prototype,"layer",void 0),request.e([request.d({readOnly:!0})],o.prototype,"availableFields",null),o=request.e([request.i("esri.views.layers.OGCFeatureLayerView")],o),o};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends(a$1(FeatureLayerView2D['default'])){};t=request.e([request.i("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

exports.default = a;
