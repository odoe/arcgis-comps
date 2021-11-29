import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISMap {
  el: HTMLDivElement;
  apiKey: string;
  basemap: string;
  zoom: number;
  center: number[] | string;
  view: __esri.MapView;
  validateApiKey(value: string): void;
  componentWillLoad(): void;
  loaded: EventEmitter<boolean>;
  componentDidRender(): void;
  render(): any;
}
