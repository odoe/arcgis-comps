import { Component, Element, Prop, h, Watch, Event, EventEmitter  } from '@stencil/core';

// arcgis imports
import config from '@arcgis/core/config';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

@Component({
  tag: 'arcgis-webmap',
  styleUrl: 'arcgis-webmap.css',
  shadow: false,
})
export class ArcGISWebMap {
  @Element() el: HTMLDivElement;

  @Prop() apiKey: string;

  @Prop() itemId: string;

  @Prop() zoom: number;

  @Prop() center: number[] | string;

  public view: __esri.MapView;

  @Watch('apiKey')
  validateApiKey(value: string) {
    config.apiKey = value;
  }

  @Watch('itemId')
  validateItemId(value: string, old: string) {
    if (value && value !== old) {
        this.loadMap();
    }
  }

  @Event() loaded: EventEmitter<boolean>;

  componentWillLoad() {
      if (this.apiKey) {
        config.apiKey = this.apiKey;
      }

      if (this.itemId) {
          this.loadMap();
      }
  }

  componentDidRender() {
    // Find any arcgis-* components in View DOM
    const elem = this.el.querySelector('.esri-view-user-storage');
    if (elem) {
      const elems = Array.from(elem.children);
      for (let e of elems) {
        if (e.tagName.toLowerCase().includes('arcgis-')) {
          (e as any).view = this.view;
        }
      }
    }
  }

  loadMap() {
    const map = new WebMap({
        portalItem: {
            id: this.itemId
        }
    });

    const params: any = {};

    if (this.zoom) {
        params.zoom = this.zoom;
    }
    if (this.center) {
        if (typeof this.center === 'string') {
          params.center = this.center.split(',').map((x) => Number(x));
        }
        else {
          params.center = this.center;
        }
    }

    const view = new MapView({
        container: this.el,
        map,
        ...params
    });

    this.view = view;

    view.when(() => this.loaded.emit(true));
  }

  render() {
    return (
        <div class="map-view">
        </div>
      );
  }
}
