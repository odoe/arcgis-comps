import { r as registerInstance, h, g as getElement } from './index-41925fe8.js';
import { an as t, b8 as j, b9 as G } from './MapView-2c43b6d4.js';

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
