import { C as s, e, a as d, i } from './jsxFactory-ef3e403e.js';
import X from './FeatureLayerView2D-8df40430.js';
import './index-5b4f4de1.js';
import './unitUtils-8a2b838a.js';
import './JSONSupport-a5eb98e7.js';
import './EffectList-1cdcf1eb.js';
import './jsonUtils-7ed7a510.js';
import './mat4-fe6f4784.js';
import './_commonjsHelpers-020ca939.js';
import './labelingInfo-1b49455f.js';
import './TimeExtent-fb7ed3e3.js';
import './Query-fd5e1b7b.js';
import './Field-c395cfbd.js';
import './fieldType-d6b0953a.js';
import './commonProperties-e22a7011.js';
import './lengthUtils-26f6142e.js';
import './LabelClass-5f15d30f.js';
import './labelUtils-ad1dc3a0.js';
import './defaultsJSON-53258912.js';
import './jsonUtils-9c0d7442.js';
import './drapedUtils-45feb4f4.js';
import './FeatureSet-2b04e61f.js';
import './definitions-a1bd4630.js';
import './LayerView-f5bf178a.js';
import './Container-b4c3ae6f.js';
import './MapView-324b0776.js';
import './CollectionFlattener-70fb34fc.js';
import './HandleOwner-ebad91ab.js';
import './reactiveUtils-2b52b231.js';
import './workers-f3905e14.js';
import './executeQueryJSON-26bfb9ee.js';
import './utils-33abd62d.js';
import './query-c4cbba7e.js';
import './normalizeUtils-9f7b714c.js';
import './pbfQueryUtils-8cea6afc.js';
import './pbf-4154bf24.js';
import './OptimizedFeature-20e2f9bb.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-69ba1f2b.js';
import './zscale-5759f488.js';
import './TopFeaturesQuery-10871c16.js';
import './Heading-88f80afd.js';
import './utils-51d0d46b.js';
import './asyncUtils-968a02e9.js';
import './ItemCache-3713f352.js';
import './MemCache-bf2be364.js';
import './utils-f8425723.js';
import './widget-e93f25c6.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-f49291d6.js';
import './compilerUtils-be3a2322.js';
import './featureConversionUtils-a454d4b2.js';
import './Task-b0dd0710.js';
import './FeatureLayer-0ee96f86.js';
import './UniqueValueRenderer-1e1c8bf1.js';
import './VisualVariablesMixin-0776df0b.js';
import './colorRamps-a6280e46.js';
import './ColorStop-d3744592.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-5b3d6d65.js';
import './diffUtils-1f52a3dd.js';
import './styleUtils-f18fb225.js';
import './DictionaryRenderer-b0e19146.js';
import './LRUCache-59f5b25d.js';
import './jsonUtils-595f52d3.js';
import './Layer-5a380094.js';
import './HeightModelInfo-2bd39a29.js';
import './APIKeyMixin-a3a0d40c.js';
import './ArcGISService-30368d07.js';
import './arcgisLayerUrl-06668ce7.js';
import './BlendLayer-81c24642.js';
import './CustomParametersMixin-ca53bbdf.js';
import './OperationalLayer-63ec0fa5.js';
import './OrderedLayer-d40ec16a.js';
import './PortalLayer-2d4eca15.js';
import './PortalItem-496c46b9.js';
import './RefreshableLayer-079cea19.js';
import './ScaleRangeLayer-cb457ce8.js';
import './TemporalLayer-64ff2afe.js';
import './TimeInfo-e0d5d311.js';
import './FeatureType-6da2d9f8.js';
import './fieldProperties-cc8fc820.js';
import './FieldsIndex-d76382ca.js';
import './LayerFloorInfo-c765d601.js';
import './styleUtils-305b69b7.js';
import './popupUtils-5accf1e0.js';
import './TileStore-a3382c75.js';
import './TileKey-56deb206.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-881ca26c.js';
import './GoTo-c7503168.js';
import './mathUtils-16c0d833.js';
import './TileInfo-8df7de31.js';
import './Basemap-5d7d3914.js';
import './loadAll-5f59a7da.js';
import './writeUtils-86a1a968.js';
import './TablesMixin-f3bfd686.js';
import './GraphicsCollection-93be4d65.js';
import './Scheduler-bf4dcdbd.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-9870c32e.js';
import './vec2-c76b9984.js';
import './vec2f64-503345b4.js';
import './projection-0d4d5278.js';
import './mat3-37a7c443.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-2047ff7a.js';
import './screenshotUtils-779cdb1c.js';
import './capabilities-07025a00.js';
import './schemaUtils-3ca87e19.js';
import './Utils-8509bfb9.js';
import './number-888f4898.js';
import './Texture-02338d74.js';
import './MaterialKey-7a78d364.js';
import './visualVariablesUtils-a1d2ce42.js';
import './CIMSymbolHelper-dd6f9392.js';
import './BidiEngine-8e81e59c.js';
import './GeometryUtils-93aa6536.js';
import './cimSymbolUtils-5cbc87eb.js';
import './cimAnalyzer-39e96fe6.js';
import './quantizationUtils-f8b2b60e.js';
import './devEnvironmentUtils-930ae782.js';
import './MD5-6027098a.js';
import './popupUtils-65d61aa2.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-c316d72e.js';

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
