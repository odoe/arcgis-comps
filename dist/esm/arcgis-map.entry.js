import { r as registerInstance, h, g as getElement } from './index-41925fe8.js';
import { a5 as t } from './messageBundle-8a146a9b.js';
import { j, G } from './MapView-6cbca3ba.js';
import './unitUtils-c707ba3c.js';
import './JSONSupport-4e29e63d.js';
import './CollectionFlattener-2797ca68.js';
import './HandleOwner-6cdc634d.js';
import './reactiveUtils-a5f838c7.js';
import './workers-c79250a3.js';
import './executeQueryJSON-4dc0a2fa.js';
import './utils-3a45351e.js';
import './query-70db7072.js';
import './normalizeUtils-c91b4ce9.js';
import './pbfQueryUtils-861d8d5b.js';
import './pbf-bb65af95.js';
import './OptimizedFeature-d5cd2d1c.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-f92acabb.js';
import './zscale-5703857d.js';
import './Query-71270a43.js';
import './TimeExtent-16986fe0.js';
import './Field-fbfaf20d.js';
import './fieldType-f80f0b3d.js';
import './FeatureSet-e481fbb3.js';
import './TopFeaturesQuery-5a679b50.js';
import './symbolUtils-d248a142.js';
import './utils-94a817af.js';
import './asyncUtils-c98101f9.js';
import './ItemCache-fb7de9d2.js';
import './MemCache-73bb45e2.js';
import './utils-f8425723.js';
import './widget-6ffe6c9e.js';
import './QueryTask-dd4aeb97.js';
import './featureConversionUtils-e2de20bf.js';
import './Task-3d644895.js';
import './FeatureLayer-52da5e2e.js';
import './UniqueValueRenderer-75e84d49.js';
import './VisualVariablesMixin-66f084f4.js';
import './colorRamps-b0e37c54.js';
import './ColorStop-ff4a3943.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-3ac464e8.js';
import './lengthUtils-a6878787.js';
import './diffUtils-14ca3884.js';
import './jsonUtils-7105a0de.js';
import './styleUtils-5fe9231e.js';
import './DictionaryRenderer-4a77ed62.js';
import './LRUCache-b68d19e5.js';
import './jsonUtils-f2130780.js';
import './Layer-455faab4.js';
import './HeightModelInfo-899d5d07.js';
import './APIKeyMixin-f2be3dfc.js';
import './ArcGISService-adf08a63.js';
import './arcgisLayerUrl-30839db3.js';
import './BlendLayer-286c847c.js';
import './jsonUtils-433a912a.js';
import './mat4-1ee7ce2f.js';
import './CustomParametersMixin-05dda462.js';
import './labelingInfo-136b2123.js';
import './commonProperties-0e370622.js';
import './LabelClass-080f9590.js';
import './labelUtils-17428bb2.js';
import './defaultsJSON-f90363d8.js';
import './OperationalLayer-52601c7c.js';
import './OrderedLayer-1aa033f7.js';
import './PortalLayer-faa3179f.js';
import './PortalItem-3f93baa8.js';
import './RefreshableLayer-f326088d.js';
import './ScaleRangeLayer-aeac5429.js';
import './TemporalLayer-f8f255e9.js';
import './TimeInfo-3ee9ad62.js';
import './FeatureType-30442694.js';
import './fieldProperties-530951df.js';
import './FieldsIndex-041474f9.js';
import './LayerFloorInfo-e1a08643.js';
import './styleUtils-32c9f97f.js';
import './popupUtils-b5ee0759.js';
import './TileStore-21b1bb99.js';
import './TileKey-761e63f3.js';
import './quickselect-ccfd8cff.js';
import './aaBoundingRect-6f84e6b7.js';
import './GoTo-759476d4.js';
import './mathUtils-056ec719.js';
import './TileInfo-9ceca7da.js';
import './Basemap-4d7f7799.js';
import './loadAll-446fc3cf.js';
import './writeUtils-a3943f03.js';
import './compilerUtils-844f852c.js';
import './TablesMixin-8c331347.js';
import './GraphicsCollection-d1498daf.js';
import './Scheduler-9fe99f02.js';
import './unitBezier-0f2e6a45.js';
import './mat2df32-1cb93af7.js';
import './vec2-3a86c352.js';
import './vec2f64-7f47d8e4.js';
import './projection-b812ba08.js';
import './mat3-315ee4cf.js';
import './vec2f32-29d55de5.js';
import './TileStrategy-d2661b3c.js';
import './screenshotUtils-d9738486.js';
import './capabilities-d8a3b872.js';

const arcgisMapCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.map-view{padding:0;margin:0}";

let ArcGISMap = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    view.when(() => console.log('view ready'));
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
