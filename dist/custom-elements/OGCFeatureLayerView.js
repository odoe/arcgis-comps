import { e, d, i, s } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let o=class extends a{initialize(){const{layer:e,view:s$1}=this;e.source.supportsSpatialReference(s$1.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([d()],o.prototype,"layer",void 0),e([d({readOnly:!0})],o.prototype,"availableFields",null),o=e([i("esri.views.layers.OGCFeatureLayerView")],o),o};

export { a };
