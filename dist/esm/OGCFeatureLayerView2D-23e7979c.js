import { e, d, i, a7 as s } from './MapView-2c43b6d4.js';
import X from './FeatureLayerView2D-baceebf7.js';
import './index-41925fe8.js';
import './EffectList-02a3200c.js';
import './clickToleranceUtils-b5cfb431.js';
import './definitions-6a5ca2d9.js';
import './LayerView-a385f1f9.js';
import './Container-1cf746dd.js';
import './schemaUtils-57c391a2.js';
import './Utils-c57a8ada.js';
import './Texture-521e6007.js';
import './MaterialKey-baaa6a67.js';
import './visualVariablesUtils-dedba3c5.js';
import './CIMSymbolHelper-56f84ff0.js';
import './Rect-988189d5.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './cimSymbolUtils-6202203c.js';
import './cimAnalyzer-452c2270.js';
import './quantizationUtils-3a07a999.js';
import './devEnvironmentUtils-872cccb2.js';
import './MD5-6027098a.js';
import './popupUtils-3d405c09.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-15cc8635.js';
import './drapedUtils-2d6d5a46.js';

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
