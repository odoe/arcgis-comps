export declare class ArcGISMap {
  el: HTMLDivElement;
  apiKey: string;
  basemap: string;
  zoom: number;
  center: number[] | string;
  view: __esri.MapView;
  validateApiKey(value: string): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  render(): any;
}
