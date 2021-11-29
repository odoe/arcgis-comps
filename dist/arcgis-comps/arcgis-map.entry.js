import { r as registerInstance, e as createEvent, h, g as getElement } from './index-6f774db5.js';
import { o as t } from './cast-e5ea2533.js';
import { j, G } from './MapView-e0f86fab.js';
import './Graphic-79de2095.js';
import './geometry-160ffbb5.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './Polyline-56152656.js';
import './PopupTemplate-87ca9924.js';
import './Collection-ac20f1a1.js';
import './opacityUtils-5755cb64.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './Identifiable-0fb3fc58.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './colorUtils-37750ea3.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './screenUtils-9ed89fa7.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './persistableUrlUtils-a9da326c.js';
import './collectionUtils-b35b097b.js';
import './CollectionFlattener-4b03d02c.js';
import './HandleOwner-0793ecee.js';
import './Handles-24a27aa9.js';
import './reactiveUtils-ab0efcb1.js';
import './watchUtils-08cf9d08.js';
import './workers-a7d3d5f6.js';
import './assets-1ab0ccbe.js';
import './intl-0d87e9f4.js';
import './messages-1d31e380.js';
import './messageBundle-335e3604.js';
import './uuid-d0cd90dd.js';
import './aliasOf-e543e228.js';
import './unitUtils-5dcccb3c.js';
import './executeQueryJSON-f21d077f.js';
import './utils-0dfe019a.js';
import './query-cd57088e.js';
import './normalizeUtils-eb3efd47.js';
import './pbfQueryUtils-85362230.js';
import './pbf-859f50c2.js';
import './OptimizedFeature-53745eb6.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-f05f6be9.js';
import './zscale-8c9c7156.js';
import './Query-b8b0a5e8.js';
import './TimeExtent-ecf7e6f2.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './FeatureSet-c6e91f97.js';
import './TopFeaturesQuery-25265c27.js';
import './Heading-818ed1a8.js';
import './widget-7c3356d9.js';
import './vmEvent-bdc3bebc.js';
import './QueryTask-c610f955.js';
import './compilerUtils-2d7ddb00.js';
import './featureConversionUtils-dd47b9b4.js';
import './Task-59ca08b3.js';
import './FeatureLayer-1e313d3a.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './VisualVariablesMixin-a8b13e1b.js';
import './colorRamps-fcb1175a.js';
import './ColorStop-0035d362.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './lengthUtils-2084b777.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './DictionaryRenderer-09505309.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './jsonUtils-efd42703.js';
import './Layer-663fafaf.js';
import './HeightModelInfo-5cd6d5f2.js';
import './APIKeyMixin-5ecbc947.js';
import './ArcGISService-00a30f8e.js';
import './arcgisLayerUrl-4273e4b3.js';
import './BlendLayer-34bd1b5b.js';
import './jsonUtils-687db5e9.js';
import './mat4-0196b8fc.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-171b3366.js';
import './labelingInfo-4e582940.js';
import './commonProperties-4c10a963.js';
import './LabelClass-a646d1d3.js';
import './labelUtils-a20584ac.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-0f16c161.js';
import './OrderedLayer-5c55613e.js';
import './PortalLayer-0ef8a2d2.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './RefreshableLayer-0c4b9daf.js';
import './ScaleRangeLayer-f5a96945.js';
import './TemporalLayer-b9cacecc.js';
import './TimeInfo-5f646e9b.js';
import './FeatureType-1c489c5b.js';
import './fieldProperties-dc649a5f.js';
import './FieldsIndex-e09edd96.js';
import './LayerFloorInfo-8df7be66.js';
import './styleUtils-545def82.js';
import './popupUtils-71e7198e.js';
import './symbolUtils-b6ed6ad9.js';
import './utils-1b009b83.js';
import './ItemCache-58898df0.js';
import './utils-f8425723.js';
import './TileStore-d0a26b94.js';
import './TileKey-5424dd8b.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-7bf4230b.js';
import './GoTo-f5d82b71.js';
import './mathUtils-1cfd5a36.js';
import './TileInfo-a7d4b50d.js';
import './Basemap-bec40c12.js';
import './loadAll-a2448ab4.js';
import './writeUtils-f98d31f7.js';
import './basemapUtils-6ed30a8c.js';
import './TablesMixin-f9d42d97.js';
import './GraphicsCollection-931de045.js';
import './Scheduler-a964a3e2.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-78a365d9.js';
import './vec2-a8a62c12.js';
import './vec2f64-503345b4.js';
import './projection-cca7ffa7.js';
import './mat3-a17f4d79.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-8cb879ff.js';
import './screenshotUtils-35d11065.js';
import './capabilities-9d2de206.js';

const arcgisMapCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.map-view{padding:0;margin:0}";

let ArcGISMap = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = createEvent(this, "loaded", 7);
  }
  validateApiKey(value) {
    t.apiKey = value;
  }
  componentWillLoad() {
    if (this.apiKey) {
      t.apiKey = this.apiKey;
    }
    const map = new j({
      basemap: this.basemap || 'streets-vector'
    });
    const params = {};
    if (this.zoom) {
      params.zoom = this.zoom;
    }
    if (this.center) {
      if (typeof this.center === 'string') {
        params.center = this.center.split(',').map((x) => Number(x));
      }
      else {
        params.center = this.center;
      }
    }
    const view = new G(Object.assign({ container: this.el, map }, params));
    this.view = view;
    view.when(() => this.loaded.emit(true));
  }
  componentDidRender() {
    const elem = this.el.querySelector('.esri-view-user-storage');
    if (elem) {
      const elems = Array.from(elem.children);
      for (let e of elems) {
        if (e.tagName.toLowerCase().includes('arcgis-')) {
          e.view = this.view;
        }
      }
    }
  }
  render() {
    return (h("div", { class: "map-view" }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "apiKey": ["validateApiKey"]
  }; }
};
ArcGISMap.style = arcgisMapCss;

export { ArcGISMap as arcgis_map };
