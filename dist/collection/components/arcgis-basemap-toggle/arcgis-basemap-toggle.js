import { Component, Element, Event, Prop, Watch } from '@stencil/core';
// arcgis imports
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
export class ArcGISBasemapToggle {
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
  validateNextBasemap(value) {
    if (value && this.widget) {
      this.widget.nextBasemap = value;
    }
  }
  componentWillLoad() {
    const params = {
      container: this.el
    };
    if (this.nextBasemap) {
      params.nextBasemap = this.nextBasemap;
    }
    if (this.view) {
      params.view = this.view;
    }
    const widget = new BasemapToggle(params);
    this.widget = widget;
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-basemap-toggle"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-basemap-toggle.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-basemap-toggle.css"]
  }; }
  static get properties() { return {
    "nextBasemap": {
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
      "attribute": "next-basemap",
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
      "propName": "view",
      "methodName": "validateView"
    }, {
      "propName": "nextBasemap",
      "methodName": "validateNextBasemap"
    }]; }
}
