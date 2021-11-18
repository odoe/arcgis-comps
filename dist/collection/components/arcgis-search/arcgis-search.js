import { Component, Element, Prop, Watch, Event, h } from '@stencil/core';
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
    // proxy events
    search.on('search-blur', (e) => this.searchBlur.emit(e));
    search.on('search-clear', (e) => this.searchClear.emit(e));
    search.on('search-complete', (e) => this.searchComplete.emit(e));
    search.on('search-focus', (e) => this.searchFocus.emit(e));
    search.on('search-start', (e) => this.searchStart.emit(e));
    search.on('select-result', (e) => this.selectResult.emit(e));
    search.on('suggest-complete', (e) => this.suggestComplete.emit(e));
    search.on('suggest-start', (e) => this.suggestStart.emit(e));
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
  static get events() { return [{
      "method": "searchBlur",
      "name": "searchBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSearchBlurEvent",
        "resolved": "SearchSearchBlurEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "searchClear",
      "name": "searchClear",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSearchClearEvent",
        "resolved": "SearchSearchClearEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "searchComplete",
      "name": "searchComplete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSearchCompleteEvent",
        "resolved": "SearchSearchCompleteEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "searchFocus",
      "name": "searchFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSearchFocusEvent",
        "resolved": "SearchSearchFocusEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "searchStart",
      "name": "searchStart",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSearchStartEvent",
        "resolved": "SearchSearchStartEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "selectResult",
      "name": "selectResult",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSelectResultEvent",
        "resolved": "SearchSelectResultEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "suggestComplete",
      "name": "suggestComplete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSuggestCompleteEvent",
        "resolved": "SearchSuggestCompleteEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "suggestStart",
      "name": "suggestStart",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "__esri.SearchSuggestStartEvent",
        "resolved": "SearchSuggestStartEvent",
        "references": {
          "___esri": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "view",
      "methodName": "validateView"
    }]; }
}
