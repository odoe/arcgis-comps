'use strict';

const request = require('./MapView-922b9f1e.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-f94ef7a3.js');
require('./index-57f2cfbb.js');
require('./EffectList-f75e6e29.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-fac949a9.js');
require('./Container-2db43b58.js');
require('./schemaUtils-55d8dba9.js');
require('./Utils-b513a4f3.js');
require('./Texture-1414de91.js');
require('./MaterialKey-c11630fb.js');
require('./visualVariablesUtils-c1cf935c.js');
require('./CIMSymbolHelper-755a0bb9.js');
require('./Rect-8ca00bae.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-dd704063.js');
require('./cimAnalyzer-0ebadbbe.js');
require('./quantizationUtils-f9fa2625.js');
require('./devEnvironmentUtils-1743b65a.js');
require('./MD5-e5fc0526.js');
require('./popupUtils-2d2af1d3.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-e3888316.js');
require('./drapedUtils-de28aa5f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1=a=>{let o=class extends a{initialize(){const{layer:e,view:s}=this;e.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new request.s$3("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return request.e([request.d()],o.prototype,"layer",void 0),request.e([request.d({readOnly:!0})],o.prototype,"availableFields",null),o=request.e([request.i("esri.views.layers.OGCFeatureLayerView")],o),o};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends(a$1(FeatureLayerView2D['default'])){};t=request.e([request.i("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

exports.default = a;
