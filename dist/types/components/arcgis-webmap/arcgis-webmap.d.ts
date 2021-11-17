export declare class ArcGISWebMap {
  el: HTMLDivElement;
  apiKey: string;
  itemId: string;
  zoom: number;
  center: number[] | string;
  view: __esri.MapView;
  validateApiKey(value: string): void;
  validateItemId(value: string, old: string): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  loadMap(): void;
  render(): any;
}
