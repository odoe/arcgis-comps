import { r as registerInstance, c as createEvent, h, g as getElement } from './index-b157fcf2.js';
import { ad as t } from './messageBundle-f75b4090.js';
import { j } from './DefaultUI-022795b8.js';
import { G } from './MapView-bf3a3a52.js';
import './Basemap-409fdf8e.js';
import './Portal-c5cfa317.js';
import './loadAll-9b2a160e.js';
import './asyncUtils-fe35d349.js';
import './PortalItem-155284f3.js';
import './writeUtils-04a97640.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './compilerUtils-848c8917.js';
import './enumeration-d3301938.js';
import './opacityUtils-5e864561.js';
import './geometry-7e07b1ba.js';
import './CollectionFlattener-2d3512bc.js';
import './HandleOwner-88326c19.js';
import './reactiveUtils-8f9c3a3d.js';
import './basemapUtils-d3dee4db.js';
import './TablesMixin-95a0923b.js';
import './Layer-b50ea610.js';
import './Identifiable-da047c47.js';
import './TimeExtent-a024c0d8.js';
import './GraphicsCollection-58a35288.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './jsonUtils-13b1f6fd.js';
import './HeightModelInfo-1a6d7a08.js';
import './unitUtils-38774114.js';
import './Scheduler-3464f717.js';
import './debugFlags-e9d86cce.js';
import './screenUtils-49015526.js';
import './executeQueryJSON-97747696.js';
import './utils-ab350511.js';
import './query-87b92407.js';
import './normalizeUtils-25a1ce55.js';
import './pbfQueryUtils-18f884ce.js';
import './pbf-6bd45926.js';
import './OptimizedFeature-44d5df5b.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-f42386f8.js';
import './zscale-faf9ffc2.js';
import './Query-d6335b3a.js';
import './Field-bfaa8af9.js';
import './fieldType-66a19d8a.js';
import './FeatureSet-58481609.js';
import './TopFeaturesQuery-cc717439.js';
import './Heading-960a88b2.js';
import './widget-c014d189.js';
import './QueryTask-23c14fd1.js';
import './featureConversionUtils-cbd79ea2.js';
import './Task-21abc82a.js';
import './FeatureLayer-91daf6b1.js';
import './UniqueValueRenderer-3c55992d.js';
import './VisualVariablesMixin-0befdf7b.js';
import './colorRamps-22c88e98.js';
import './ColorStop-d4fc22fe.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-26c41ea6.js';
import './lengthUtils-f033d4fe.js';
import './diffUtils-849b3672.js';
import './jsonUtils-ade233cd.js';
import './styleUtils-cb28c5ef.js';
import './DictionaryRenderer-bea76550.js';
import './LRUCache-d5842b88.js';
import './MemCache-78a9f000.js';
import './jsonUtils-aa645e92.js';
import './MultiOriginJSONSupport-cb4804f4.js';
import './workers-c4ad1958.js';
import './APIKeyMixin-d7a9a0ad.js';
import './ArcGISService-49a9bda6.js';
import './arcgisLayerUrl-49ef2818.js';
import './BlendLayer-38b8abf7.js';
import './mat4-f34c6460.js';
import './CustomParametersMixin-758e21ed.js';
import './labelingInfo-1bb19962.js';
import './OperationalLayer-d609e521.js';
import './ElevationInfo-be94499b.js';
import './LabelClass-47fb4a25.js';
import './labelUtils-8999bd11.js';
import './defaultsJSON-0b68054b.js';
import './OrderedLayer-7fa2fd9d.js';
import './PortalLayer-290979fa.js';
import './RefreshableLayer-f4d1c27c.js';
import './ScaleRangeLayer-584ce37b.js';
import './TemporalLayer-5a7f466a.js';
import './TimeInfo-44dec2e0.js';
import './FeatureType-aa59abbf.js';
import './fieldProperties-d7b323c6.js';
import './FieldsIndex-2a111e7e.js';
import './LayerFloorInfo-c2959bac.js';
import './styleUtils-61c488eb.js';
import './popupUtils-c3247ec1.js';
import './utils-c84cc443.js';
import './ItemCache-5d2cf877.js';
import './utils-f8425723.js';
import './Queue-a7e7a3e5.js';
import './layerViewUtils-4127a8cf.js';
import './GoTo-148cc420.js';
import './accessibleHandler-feb312a0.js';
import './vmEvent-6b909beb.js';
import './heightModelInfoUtils-b573abf5.js';
import './Viewpoint-f60966b5.js';
import './mathUtils-8e5ad7fe.js';
import './mat2d-13076132.js';
import './mat2df32-93736424.js';
import './mat2df64-30d0a354.js';
import './mat3-6a23d9ad.js';
import './vec2-5672471e.js';
import './vec2f32-29d55de5.js';
import './vec2f64-35868783.js';
import './capabilities-ffdc19e3.js';
import './TileInfo-052b02b9.js';
import './unitBezier-0f2e6a45.js';
import './projection-f3d8779d.js';
import './geodesicConstants-54cb88d4.js';
import './TileStrategy-e8f4a676.js';
import './TileStore-53d2d3f6.js';
import './TileKey-284eee69.js';
import './quickselect-ccfd8cff.js';
import './screenshotUtils-f9728729.js';

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
