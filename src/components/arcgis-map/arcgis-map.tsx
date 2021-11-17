import { Component, Element, Prop, h, Watch } from '@stencil/core';

// arcgis imports
import config from '@arcgis/core/config';
import ArcGISWebMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

// interface View extends MapView {};

@Component({
  tag: 'arcgis-map',
  styleUrl: 'arcgis-map.css',
  shadow: false,
})
export class ArcGISMap {
@Element() el: HTMLDivElement;

  @Prop() apiKey: string;

  @Prop() basemap: string;

  @Prop() zoom: number;

  @Prop() center: number[] | string;

  public view: __esri.MapView;

  @Watch('apiKey')
  validateApiKey(value: string) {
    config.apiKey = value;
  }

  componentWillLoad() {
      if (this.apiKey) {
        config.apiKey = this.apiKey;
      }

      const map = new ArcGISWebMap({
          basemap: this.basemap || 'streets-vector'
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

      view.when(() => console.log('view ready'));
  }

  componentDidRender() {
    const elem = this.el.querySelector('.esri-view-user-storage');
    if (elem) {
      const elems = Array.from(elem.children) as HTMLElement[];
      for (let e of elems) {
        if (e.tagName.toLowerCase().includes('arcgis-')) {
          (e as any).view = this.view;
        }
      }
    }
  }

  render() {
    return (
        <div class="map-view">
        </div>
      );
  }
}
