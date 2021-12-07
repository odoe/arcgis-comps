import { EventEmitter } from '../../stencil-public-runtime';
export declare class ArcGISSearch {
  el: HTMLDivElement;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateView(value: __esri.MapView): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
  componentDidRender(): void;
}
