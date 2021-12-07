import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISEditor {
  el: HTMLDivElement;
  allowedWorkflows: string;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateAllowedWorkflows(value: string): void;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
}
