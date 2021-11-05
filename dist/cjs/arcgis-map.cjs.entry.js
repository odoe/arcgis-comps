'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-57f2cfbb.js');
const request = require('./MapView-922b9f1e.js');

const arcgisMapCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.map-view{padding:0;margin:0}";

let ArcGISMap = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  validateApiKey(value) {
    request.t$4.apiKey = value;
  }
  componentWillLoad() {
    if (this.apiKey) {
      request.t$4.apiKey = this.apiKey;
    }
    const map = new request.j$2({
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
    const view = new request.G$1(Object.assign({ container: this.el, map }, params));
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
    return (index.h("div", { class: "map-view" }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "apiKey": ["validateApiKey"]
  }; }
};
ArcGISMap.style = arcgisMapCss;

exports.arcgis_map = ArcGISMap;
