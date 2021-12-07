import { Component, Element, Prop, Watch, Event } from '@stencil/core';
// arcgis imports
import Directions from '@arcgis/core/widgets/Directions';
export class ArcGISDirections {
  constructor() {
    this.position = 'bottom-left';
  }
  validateApiKey(value) {
    if (value && this.widget) {
      this.widget.apiKey = value;
    }
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
    if (this.apiKey) {
      params.apiKey = this.apiKey;
    }
    if (this.view) {
      params.view = this.view;
    }
    const directions = new Directions(params);
    this.widget = directions;
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-directions"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-directions.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-directions.css"]
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
      "propName": "apiKey",
      "methodName": "validateApiKey"
    }, {
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
