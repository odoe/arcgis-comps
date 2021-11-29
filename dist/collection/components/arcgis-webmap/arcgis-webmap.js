import { Component, Element, Prop, h, Watch, Event } from '@stencil/core';
// arcgis imports
import config from '@arcgis/core/config';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
export class ArcGISWebMap {
  validateApiKey(value) {
    config.apiKey = value;
  }
  validateItemId(value, old) {
    if (value && value !== old) {
      this.loadMap();
    }
  }
  componentWillLoad() {
    if (this.apiKey) {
      config.apiKey = this.apiKey;
    }
    if (this.itemId) {
      this.loadMap();
    }
  }
  componentDidRender() {
    // Find any arcgis-* components in View DOM
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
  loadMap() {
    const map = new WebMap({
      portalItem: {
        id: this.itemId
      }
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
    const view = new MapView(Object.assign({ container: this.el, map }, params));
    this.view = view;
    view.when(() => this.loaded.emit(true));
  }
  render() {
    return (h("div", { class: "map-view" }));
  }
  static get is() { return "arcgis-webmap"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-webmap.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-webmap.css"]
  }; }
  static get properties() { return {
    "apiKey": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "api-key",
      "reflect": false
    },
    "itemId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "item-id",
      "reflect": false
    },
    "zoom": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "zoom",
      "reflect": false
    },
    "center": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "number[] | string",
        "resolved": "number[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "center",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "loaded",
      "name": "loaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "apiKey",
      "methodName": "validateApiKey"
    }, {
      "propName": "itemId",
      "methodName": "validateItemId"
    }]; }
}
