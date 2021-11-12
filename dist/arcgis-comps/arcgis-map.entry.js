import { r as registerInstance, h, g as getElement } from './index-921bd636.js';
import { ak as t } from './jsxFactory-c96bb45c.js';
import { j, G } from './MapView-e30b3dee.js';
import './Graphic-6c72131a.js';
import './JSONSupport-5a9f556a.js';
import './CollectionFlattener-567ea124.js';
import './HandleOwner-6fdf8ee8.js';
import './reactiveUtils-4ba1fb4b.js';
import './workers-5ad649f9.js';
import './unitUtils-b25ae8cb.js';
import './executeQueryJSON-165e5051.js';
import './utils-8991f658.js';
import './query-0da4fa5c.js';
import './normalizeUtils-1fd7c0f1.js';
import './pbfQueryUtils-e36554ac.js';
import './pbf-1b9dc626.js';
import './OptimizedFeature-6034ce0f.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-0ff40b9b.js';
import './zscale-cec9b507.js';
import './Query-792b142d.js';
import './TimeExtent-1bc95591.js';
import './Field-2b6029f8.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';
import './FeatureSet-22102ca4.js';
import './AttachmentQuery-42d07544.js';
import './Heading-7763ec3e.js';
import './utils-ce0d30fb.js';
import './asyncUtils-dc4bd819.js';
import './ItemCache-2d2e76a8.js';
import './MemCache-e219bcfb.js';
import './utils-f8425723.js';
import './widget-13824d6e.js';
import './vmEvent-bdc3bebc.js';
import './TopFeaturesQuery-31a64765.js';
import './QueryTask-f5ad3db8.js';
import './compilerUtils-128fda14.js';
import './featureConversionUtils-0aaeda4b.js';
import './Task-87780f0a.js';
import './FeatureLayer-9672bbd9.js';
import './UniqueValueRenderer-f2af8ece.js';
import './VisualVariablesMixin-bafacb39.js';
import './colorRamps-693d6433.js';
import './ColorStop-fb26d745.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './lengthUtils-7a485aa7.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './DictionaryRenderer-78308a28.js';
import './LRUCache-81490262.js';
import './jsonUtils-580ae154.js';
import './MultiOriginJSONSupport-f6506b2f.js';
import './HeightModelInfo-a87824be.js';
import './APIKeyMixin-4866fda4.js';
import './ArcGISService-4cc51fbf.js';
import './arcgisLayerUrl-2aeded02.js';
import './BlendLayer-70766503.js';
import './jsonUtils-352e8eb7.js';
import './mat4-ef633c62.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-89544c0d.js';
import './labelingInfo-683f3119.js';
import './commonProperties-fa43a2ed.js';
import './LabelClass-65776e47.js';
import './labelUtils-45e9126f.js';
import './defaultsJSON-53258912.js';
import './OperationalLayer-b04e38aa.js';
import './OrderedLayer-8b694b55.js';
import './PortalLayer-df690c5a.js';
import './PortalItem-209a51a1.js';
import './RefreshableLayer-702beb88.js';
import './ScaleRangeLayer-99043c54.js';
import './TemporalLayer-b41e8e6e.js';
import './TimeInfo-9a5e9434.js';
import './FeatureType-8cae0f8f.js';
import './fieldProperties-b0c243c7.js';
import './FieldsIndex-56cf15de.js';
import './LayerFloorInfo-2c65601c.js';
import './styleUtils-e2196c57.js';
import './popupUtils-4957d444.js';
import './TileStore-39bbbf67.js';
import './TileKey-c678a190.js';
import './quickselect-ccfd8cff.js';
import './layerViewUtils-9cf85499.js';
import './GoTo-7624d206.js';
import './mathUtils-91a58478.js';
import './TileInfo-1fc37c81.js';
import './Basemap-37cadf63.js';
import './loadAll-85b9593d.js';
import './writeUtils-4d88cd58.js';
import './TablesMixin-93b17242.js';
import './GraphicsCollection-f199ec2b.js';
import './Scheduler-fb8ceb54.js';
import './unitBezier-0f2e6a45.js';
import './mat2d-b05e5a52.js';
import './vec2-f635f36f.js';
import './vec2f64-503345b4.js';
import './projection-32646abc.js';
import './mat3-351ead7a.js';
import './vec2f32-7c7b1123.js';
import './TileStrategy-8fcd9a8c.js';
import './screenshotUtils-6f247196.js';
import './capabilities-eb3cc9c1.js';

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
