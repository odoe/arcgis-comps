import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISFeatureTable {
  el: HTMLDivElement;
  itemId: string;
  layer: any;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateItemId(value: string, old: string): void;
  validateLayer(value: any): void;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  rowSelectionChange: EventEmitter<__esri.FeatureTableSelectionChangeEvent>;
  componentWillLoad(): void;
  render(): any;
}
