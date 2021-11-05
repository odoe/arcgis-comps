import { Component, Element, Prop, Watch, h } from '@stencil/core';

// arcgis imports
import Legend from '@arcgis/core/widgets/Legend';

@Component({
  tag: 'arcgis-legend',
  styleUrl: 'arcgis-legend.css',
  shadow: false,
})
export class ArcGISLegend {
  @Element() el: HTMLDivElement;

  @Prop() position: string;

  @Prop() view : __esri.MapView | __esri.SceneView;

  @Prop() widget: any;

  @Watch('view')
  validateView(value: __esri.MapView | __esri.SceneView) {
    if (value) {
        this.widget.view = value;
        if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
            this.widget.view.ui.add(this.widget, this.position);
        }
    }
  }

  componentWillLoad() {
      const legend = new Legend({
          container: this.el
      });

      if (this.view) {
        legend.view = this.view;
      }

      this.widget = legend;
  }

  render() {
    return (
        <div class="legend-container">
        </div>
      );
  }
}
