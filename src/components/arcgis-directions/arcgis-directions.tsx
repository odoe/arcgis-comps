import { Component, Element, Prop, Watch, Event, EventEmitter  } from '@stencil/core';

// arcgis imports
import Directions from '@arcgis/core/widgets/Directions';

@Component({
  tag: 'arcgis-directions',
  styleUrl: 'arcgis-directions.css',
  shadow: false,
})
export class ArcGISDirections {
  @Element() el: HTMLDivElement;

  @Prop() apiKey: string;

  @Prop() position: string = 'bottom-left';

  @Prop() view : __esri.MapView | __esri.SceneView;

  @Prop({ mutable: true }) widget: any;

  @Watch('apiKey')
  validateApiKey(value: string) {
      if (value && this.widget) {
          this.widget.apiKey = value;
      }
  }

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
      const params: __esri.DirectionsProperties = {
        container: this.el
      };

      if (this.apiKey) {
          params.apiKey = this.apiKey;
      }

      if (this.view) {
        params.view = this.view;
      }

      const directions = new Directions(params);

      this.widget = directions;
      this.loaded.emit(true);
  }
}
