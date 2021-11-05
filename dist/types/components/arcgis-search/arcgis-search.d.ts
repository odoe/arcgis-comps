import MapView from '@arcgis/core/views/MapView';
export declare class ArcGISSearch {
  el: HTMLDivElement;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateView(newValue: MapView): void;
  componentWillLoad(): void;
  render(): any;
}
