import { e, d, i, b as s } from './MapView-ac75aae8.js';
import X from './FeatureLayerView2D-06604e33.js';
import './index-b157fcf2.js';
import './EffectList-bba3153e.js';
import './clickToleranceUtils-b5cfb431.js';
import './definitions-6a5ca2d9.js';
import './LayerView-bca25100.js';
import './Container-8507ec1d.js';
import './schemaUtils-a2e668a4.js';
import './Utils-7fb1778c.js';
import './Texture-73a4a34c.js';
import './MaterialKey-a9776b0a.js';
import './visualVariablesUtils-34651638.js';
import './CIMSymbolHelper-da978676.js';
import './BidiEngine-8e81e59c.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './cimSymbolUtils-1a22d801.js';
import './cimAnalyzer-bee7a9ff.js';
import './quantizationUtils-9743f28d.js';
import './devEnvironmentUtils-8a6821b7.js';
import './MD5-6027098a.js';
import './popupUtils-a92c8aa2.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-5bf49ef7.js';
import './drapedUtils-320044d3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1=a=>{let o=class extends a{initialize(){const{layer:e,view:s$1}=this;e.source.supportsSpatialReference(s$1.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([d()],o.prototype,"layer",void 0),e([d({readOnly:!0})],o.prototype,"availableFields",null),o=e([i("esri.views.layers.OGCFeatureLayerView")],o),o};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends(a$1(X)){};t=e([i("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export default a;
