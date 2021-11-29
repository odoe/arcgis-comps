import { Component, Element, Prop, Watch, Event, EventEmitter } from '@stencil/core';

// arcgis imports
import Search from '@arcgis/core/widgets/Search';
import MapView from '@arcgis/core/views/MapView';

@Component({
  tag: 'arcgis-search',
  styleUrl: 'arcgis-search.css',
  shadow: false,
})
export class ArcGISSearch {
  @Element() el: HTMLDivElement;

  @Prop() position: string;

  @Prop() view : __esri.MapView | __esri.SceneView;

  @Prop() widget: any;

  @Watch('view')
  validateView(newValue: MapView) {
    if (newValue) {
        this.widget.view = newValue;
        if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
            this.widget.view.ui.add(this.widget, this.position);
        }
    }
  }

  // Events
  @Event() searchBlur: EventEmitter<__esri.SearchSearchBlurEvent>;
  @Event() searchClear: EventEmitter<__esri.SearchSearchClearEvent>;
  @Event() searchComplete: EventEmitter<__esri.SearchSearchCompleteEvent>;
  @Event() searchFocus: EventEmitter<__esri.SearchSearchFocusEvent>;
  @Event() searchStart: EventEmitter<__esri.SearchSearchStartEvent>;
  @Event() selectResult: EventEmitter<__esri.SearchSelectResultEvent>;
  @Event() suggestComplete: EventEmitter<__esri.SearchSuggestCompleteEvent>;
  @Event() suggestStart: EventEmitter<__esri.SearchSuggestStartEvent>;

  componentWillLoad() {
      const search = new Search({
          container: this.el
      });

      // proxy events
      search.on('search-blur', (e) => this.searchBlur.emit(e));
      search.on('search-clear', (e) => this.searchClear.emit(e))
      search.on('search-complete', (e) => this.searchComplete.emit(e));
      search.on('search-focus', (e) => this.searchFocus.emit(e));
      search.on('search-start', (e) => this.searchStart.emit(e));
      search.on('select-result', (e) => this.selectResult.emit(e));
      search.on('suggest-complete', (e) => this.suggestComplete.emit(e));
      search.on('suggest-start', (e) => this.suggestStart.emit(e));

      this.widget = search;
  }
}
