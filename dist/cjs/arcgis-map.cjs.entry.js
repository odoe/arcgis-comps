'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fde8502c.js');
const request = require('./MapView-1726f571.js');

const arcgisMapCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');.map-view{padding:0;margin:0}";

let ArcGISMap = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loaded = index.createEvent(this, "loaded", 7);
  }
  validateApiKey(value) {
    request.t$4.apiKey = value;
  }
  componentWillLoad() {
    if (this.apiKey) {
      request.t$4.apiKey = this.apiKey;
    }
    const map = new request.j$5({
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
    const view = new request.G$2(Object.assign({ container: this.el, map }, params));
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
    return (index.h("div", { class: "map-view" }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "apiKey": ["validateApiKey"]
  }; }
};
ArcGISMap.style = arcgisMapCss;

exports.arcgis_map = ArcGISMap;
