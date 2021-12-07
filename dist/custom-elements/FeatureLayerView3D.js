import { e, d, i, ji as t, s, eI as tn } from './index.js';
import { x } from './FeatureLayerViewBase3D.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends x{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=t();}initialize(){this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new s("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),"mesh"!==this.layer.geometryType||tn(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references of the feature layer layer is incompatible with the spatial reference of the view")));}};e([d({constructOnly:!0})],p.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),e([d()],p.prototype,"layer",void 0),p=e([i("esri.views.3d.layers.FeatureLayerView3D")],p);const c=p;

export default c;
