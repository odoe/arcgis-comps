import { EventEmitter } from '../../stencil-public-runtime';
import MapView from '@arcgis/core/views/MapView';
export declare class ArcGISSearch {
  el: HTMLDivElement;
  position: string;
  view: __esri.MapView | __esri.SceneView;
  widget: any;
  validateView(newValue: MapView): void;
  searchBlur: EventEmitter<__esri.SearchSearchBlurEvent>;
  searchClear: EventEmitter<__esri.SearchSearchClearEvent>;
  searchComplete: EventEmitter<__esri.SearchSearchCompleteEvent>;
  searchFocus: EventEmitter<__esri.SearchSearchFocusEvent>;
  searchStart: EventEmitter<__esri.SearchSearchStartEvent>;
  selectResult: EventEmitter<__esri.SearchSelectResultEvent>;
  suggestComplete: EventEmitter<__esri.SearchSuggestCompleteEvent>;
  suggestStart: EventEmitter<__esri.SearchSuggestStartEvent>;
  componentWillLoad(): void;
  render(): any;
}
