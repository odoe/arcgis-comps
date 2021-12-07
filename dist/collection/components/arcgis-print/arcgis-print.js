import { Component, Element, Event, Prop, Watch } from '@stencil/core';
// arcgis imports
import Print from '@arcgis/core/widgets/Print';
export class ArcGISPrint {
  constructor() {
    this.position = 'bottom-left';
  }
  validateAllowedFormats(value) {
    if (value && this.widget) {
      this.widget.allowedFormats = value.split(',');
    }
  }
  validateAllowedLayouts(value) {
    if (value && this.widget) {
      this.widget.allowedLayouts = value.split(',');
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
      container: this.el,
    };
    if (this.allowedFormats) {
      params.allowedFormats = this.allowedFormats.split(',');
    }
    if (this.allowedLayouts) {
      params.allowedLayouts = this.allowedLayouts.split(',');
    }
    if (this.view) {
      params.view = this.view;
    }
    const widget = new Print(params);
    this.widget = widget;
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-print"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-print.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-print.css"]
  }; }
  static get properties() { return {
    "allowedFormats": {
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
      "attribute": "allowed-formats",
      "reflect": false
    },
    "allowedLayouts": {
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
      "attribute": "allowed-layouts",
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
      "propName": "allowedFormats",
      "methodName": "validateAllowedFormats"
    }, {
      "propName": "allowedLayouts",
      "methodName": "validateAllowedLayouts"
    }, {
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
