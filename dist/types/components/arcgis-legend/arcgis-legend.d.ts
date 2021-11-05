export declare class ArcGISLegend {
  el: HTMLDivElement;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  componentWillLoad(): void;
  render(): any;
}
