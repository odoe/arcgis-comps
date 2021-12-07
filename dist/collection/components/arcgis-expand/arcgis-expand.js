import { Component, Element, Prop, Watch, Event } from '@stencil/core';
// arcgis imports
import Expand from '@arcgis/core/widgets/Expand';
export class ArcGISSearch {
  validateView(value) {
    if (value) {
      this.widget.view = value;
      this.widget.view.ui.add(this.el, this.position);
    }
  }
  componentWillLoad() {
    const expand = new Expand({
      container: this.el
    });
    this.widget = expand;
    this.loaded.emit(true);
  }
  componentDidRender() {
    const elems = Array.from(this.el.children);
    for (let e of elems) {
      if (e.tagName.toLowerCase().includes('arcgis-')) {
        e.view = this.view;
        this.widget.content = e;
        this.widget.expandIconClass = e.widget.iconClass;
      }
    }
  }
  static get is() { return "arcgis-expand"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-expand.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-expand.css"]
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
      "reflect": false
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
