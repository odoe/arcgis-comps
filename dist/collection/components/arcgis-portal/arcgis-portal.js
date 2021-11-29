import { Component, Event, Prop } from '@stencil/core';
// arcgis imports
import Portal from '@arcgis/core/portal/Portal';
export class ArcGISPortal {
  async componentWillLoad() {
    const portal = new Portal({ url: this.url });
    await portal.load();
    this.portal = portal;
    this.loaded.emit(true);
  }
  static get is() { return "arcgis-portal"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-portal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-portal.css"]
  }; }
  static get properties() { return {
    "portal": {
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
      "attribute": "portal",
      "reflect": false
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
}
