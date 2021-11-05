import { Component, Element, Prop, Watch, h } from '@stencil/core';

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

  componentWillLoad() {
      const search = new Search({
          container: this.el
      });

      this.widget = search;
  }

  render() {
    return (
        <div class="search-container">
        </div>
      );
  }
}
