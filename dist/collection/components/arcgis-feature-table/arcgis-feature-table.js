import { Component, Element, Event, Prop, Watch } from '@stencil/core';
// arcgis imports
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
export class ArcGISFeatureTable {
  constructor() {
    this.layer = null;
    this.position = 'bottom-left';
  }
  fieldConfigsWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._fieldConfigs = JSON.parse(newValue);
    }
    else {
      this._fieldConfigs = newValue;
    }
    if (this.widget) {
      this.widget.fieldConfigs = this._fieldConfigs;
    }
  }
  validateItemId(value, old) {
    if (value && value !== old) {
      const layer = new FeatureLayer({
        portalItem: {
          id: value
        }
      });
      this.layer = layer;
    }
  }
  validateLayer(value) {
    if (value && this.widget) {
      this.widget.layer = value;
    }
  }
  validateUrl(value, old) {
    if (value && value !== old) {
      const layer = new FeatureLayer({ url: value });
      this.layer = layer;
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
    if (this.fieldConfigs) {
      this.fieldConfigsWatcher(this.fieldConfigs);
    }
    const table = new FeatureTable({
      container: this.el,
    });
    this.widget = table;
    // proxy events
    table.on('selection-change', (e) => this.rowSelectionChange.emit(e));
    if (this.view) {
      table.view = this.view;
    }
    if (this.layer) {
      table.layer = this.layer;
    }
    else if (this.itemId) {
      const layer = new FeatureLayer({
        portalItem: {
          id: this.itemId
        }
      });
      this.layer = layer;
    }
    else if (this.url) {
      const layer = new FeatureLayer({ url: this.url });
      this.layer = layer;
    }
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-feature-table"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-feature-table.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-feature-table.css"]
  }; }
  static get properties() { return {
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
    "layer": {
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
      "attribute": "layer",
      "reflect": false,
      "defaultValue": "null"
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
    "url": {
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
      "attribute": "url",
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
    },
    "fieldConfigs": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any | string",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "field-configs",
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
    }, {
      "method": "rowSelectionChange",
      "name": "rowSelectionChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.FeatureTableSelectionChangeEvent",
        "resolved": "FeatureTableSelectionChangeEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "fieldConfigs",
      "methodName": "fieldConfigsWatcher"
    }, {
      "propName": "itemId",
      "methodName": "validateItemId"
    }, {
      "propName": "layer",
      "methodName": "validateLayer"
    }, {
      "propName": "url",
      "methodName": "validateUrl"
    }, {
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
