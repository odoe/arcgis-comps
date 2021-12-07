'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let o=class extends a{initialize(){const{layer:e,view:s}=this;e.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new request.s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return request.e([request.d()],o.prototype,"layer",void 0),request.e([request.d({readOnly:!0})],o.prototype,"availableFields",null),o=request.e([request.i("esri.views.layers.OGCFeatureLayerView")],o),o};

exports.a = a;
