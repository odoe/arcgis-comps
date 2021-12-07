import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISCoordinateConversion {
  el: HTMLDivElement;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
}
