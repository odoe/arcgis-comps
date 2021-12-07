import { Component, Element, Event, Prop, Watch } from '@stencil/core';
// arcgis imports
import Editor from '@arcgis/core/widgets/Editor';
export class ArcGISEditor {
  constructor() {
    this.position = 'bottom-left';
  }
  validateAllowedWorkflows(value) {
    if (value && this.widget) {
      this.widget.allowedWorkflows = value.split(',');
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
    if (this.allowedWorkflows) {
      params.allowedWorkflows = this.allowedWorkflows.split(',');
    }
    if (this.view) {
      params.view = this.view;
    }
    const widget = new Editor(params);
    this.widget = widget;
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-editor"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-editor.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-editor.css"]
  }; }
  static get properties() { return {
    "allowedWorkflows": {
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
      "attribute": "allowed-workflows",
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
      "propName": "allowedWorkflows",
      "methodName": "validateAllowedWorkflows"
    }, {
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
