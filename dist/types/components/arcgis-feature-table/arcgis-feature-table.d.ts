import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISFeatureTable {
  el: HTMLDivElement;
  itemId: string;
  layer: any;
  position: string;
  url: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  private _fieldConfigs;
  fieldConfigs: any | string;
  fieldConfigsWatcher(newValue: any | string): void;
  validateItemId(value: string, old: string): void;
  validateLayer(value: any): void;
  validateUrl(value: string, old: string): void;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  loaded: EventEmitter<boolean>;
  rowSelectionChange: EventEmitter<__esri.FeatureTableSelectionChangeEvent>;
  componentWillLoad(): void;
}
