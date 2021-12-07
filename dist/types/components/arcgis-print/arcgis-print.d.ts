import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISPrint {
  el: HTMLDivElement;
  allowedFormats: string;
  allowedLayouts: string;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateAllowedFormats(value: string): void;
  validateAllowedLayouts(value: string): void;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
}
