import { e, d, i, a7 as s } from './MapView-a31458ed.js';
import X from './FeatureLayerView2D-c83913bc.js';
import './index-3067d8ff.js';
import './EffectList-edbd1525.js';
import './clickToleranceUtils-b5cfb431.js';
import './definitions-6a5ca2d9.js';
import './LayerView-4f2ac95c.js';
import './Container-b142640e.js';
import './schemaUtils-151a2403.js';
import './Utils-f78b5dcf.js';
import './Texture-a7a0b3dd.js';
import './MaterialKey-860012b2.js';
import './visualVariablesUtils-0abb8484.js';
import './CIMSymbolHelper-6a493992.js';
import './Rect-988189d5.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './cimSymbolUtils-3a328c8b.js';
import './cimAnalyzer-f1fe5194.js';
import './quantizationUtils-76be0161.js';
import './devEnvironmentUtils-6390a260.js';
import './MD5-6027098a.js';
import './popupUtils-bd9283a8.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-37b95d4f.js';
import './drapedUtils-3d862ae9.js';

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
