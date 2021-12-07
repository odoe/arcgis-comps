import { Component, Element, Prop, Watch, Event } from '@stencil/core';
// arcgis imports
import LayerList from '@arcgis/core/widgets/LayerList';
export class ArcGISLayerList {
  constructor() {
    this.position = 'bottom-left';
  }
  validateView(value) {
    if (value) {
      this.widget.view = value;
      if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
        this.widget.view.ui.add(this.widget, this.position);
      }
    }
  }
  componentWillLoad() {
    const params = {
      container: this.el
    };
    if (this.view) {
      params.view = this.view;
    }
    const layerList = new LayerList(params);
    this.widget = layerList;
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-layer-list"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-layer-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-layer-list.css"]
  }; }
  static get properties() { return {
    "position": {
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
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'bottom-left'"
    },
    "view": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "__esri.MapView | __esri.SceneView",
        "resolved": "MapView | SceneView",
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
    },
    "widget": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "widget",
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
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
