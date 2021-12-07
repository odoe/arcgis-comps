import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISBasemapToggle {
  el: HTMLDivElement;
  nextBasemap: string;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateView(value: __esri.MapView | __esri.SceneView): void;
  validateNextBasemap(value: string): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
}
