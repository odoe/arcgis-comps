import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISDirections {
  el: HTMLDivElement;
  apiKey: string;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateApiKey(value: string): void;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
}
