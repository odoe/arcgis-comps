import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISWebMap {
  el: HTMLDivElement;
  apiKey: string;
  itemId: string;
  zoom: number;
  center: number[] | string;
  view: __esri.MapView;
  validateApiKey(value: string): void;
  validateItemId(value: string, old: string): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
  componentDidRender(): void;
  loadMap(): void;
  render(): any;
}
