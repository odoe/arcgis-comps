import { Component, Element, Prop, Watch, Event, EventEmitter  } from '@stencil/core';

// arcgis imports
import Legend from '@arcgis/core/widgets/Legend';

@Component({
  tag: 'arcgis-legend',
  styleUrl: 'arcgis-legend.css',
  shadow: false,
})
export class ArcGISLegend {
  @Element() el: HTMLDivElement;

  @Prop() position: string = 'bottom-left';

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

  @Event() loaded: EventEmitter<boolean>;

  componentWillLoad() {
      const legend = new Legend({
          container: this.el
      });

      if (this.view) {
        legend.view = this.view;
      }

      this.widget = legend;
      this.loaded.emit(true);
  }
}
