import { Component, Element, Prop, Watch, h } from '@stencil/core';
// arcgis imports
import Search from '@arcgis/core/widgets/Search';
export class ArcGISSearch {
  validateView(newValue) {
    if (newValue) {
      this.widget.view = newValue;
      if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
        this.widget.view.ui.add(this.widget, this.position);
      }
    }
  }
  componentWillLoad() {
    const search = new Search({
      container: this.el
    });
    this.widget = search;
  }
  render() {
    return (h("div", { class: "search-container" }));
  }
  static get is() { return "arcgis-search"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-search.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-search.css"]
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
      "mutable": false,
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
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
