export declare class ArcGISFeatureTable {
  el: HTMLDivElement;
  layer: any;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateLayer(value: any): void;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  componentWillLoad(): void;
  render(): any;
}
