import { Component, Element, Prop, h, Watch, Event } from '@stencil/core';
// arcgis imports
import config from '@arcgis/core/config';
import WebScene from '@arcgis/core/WebScene';
import SceneView from '@arcgis/core/views/SceneView';
export class ArcGISWebScene {
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
    const mapParams = {};
    if (this.itemId) {
      mapParams.portalItem = {
        id: this.itemId
      };
    }
    const map = new WebScene(mapParams);
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
    const view = new SceneView(Object.assign({ container: this.el, map }, params));
    this.view = view;
    view.when(() => this.loaded.emit(true));
  }
  render() {
    return (h("div", { class: "scene-view" }));
  }
  static get is() { return "arcgis-webscene"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-webscene.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-webscene.css"]
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
    },
    "view": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "__esri.SceneView",
        "resolved": "SceneView",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
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
