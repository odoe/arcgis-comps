'use strict';

const request = require('./MapView-1195e7f1.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-527cbab1.js');
require('./index-b630e408.js');
require('./EffectList-c2e3d9b4.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-870ab467.js');
require('./Container-7c02556c.js');
require('./schemaUtils-60fb47fc.js');
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
require('./popupUtils-1e401adb.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-fe90cf84.js');
require('./drapedUtils-bc0642dd.js');

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
