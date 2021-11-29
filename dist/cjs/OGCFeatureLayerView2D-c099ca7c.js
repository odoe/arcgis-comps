'use strict';

const request = require('./MapView-1726f571.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-065b7ec9.js');
require('./index-fde8502c.js');
require('./EffectList-c8b0929b.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-ab44860f.js');
require('./Container-16ae77e1.js');
require('./schemaUtils-9bd21a56.js');
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
require('./popupUtils-720b99f0.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-bf1c1d9d.js');
require('./drapedUtils-268b2272.js');

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
