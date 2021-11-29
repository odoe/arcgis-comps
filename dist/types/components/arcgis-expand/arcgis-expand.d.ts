import { EventEmitter } from '../../stencil-public-runtime';
import Expand from '@arcgis/core/widgets/Expand';
export declare class ArcGISSearch {
  el: HTMLDivElement;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: Expand;
  validateView(value: __esri.MapView): void;
  loaded: EventEmitter<boolean>;
  componentWillLoad(): void;
  componentDidRender(): void;
}
