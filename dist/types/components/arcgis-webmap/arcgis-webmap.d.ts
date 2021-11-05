export declare class ArcGISWebMap {
  el: HTMLDivElement;
  apiKey: string;
  itemId: string;
  zoom: number;
  center: number[] | string;
  view: __esri.MapView;
  validateApiKey(value: any): void;
  validateItemId(value: any, old: any): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  loadMap(): void;
  render(): any;
}
