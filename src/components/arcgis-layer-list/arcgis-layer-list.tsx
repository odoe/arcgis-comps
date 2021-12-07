import { Component, Element, Prop, Watch, Event, EventEmitter  } from '@stencil/core';

// arcgis imports
import LayerList from '@arcgis/core/widgets/LayerList';

@Component({
  tag: 'arcgis-layer-list',
  styleUrl: 'arcgis-layer-list.css',
  shadow: false,
})
export class ArcGISLayerList {
  @Element() el: HTMLDivElement;

  @Prop() position: string = 'bottom-left';

  @Prop() view : __esri.MapView | __esri.SceneView;

  @Prop({ mutable: true }) widget: any;

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
      const params: __esri.LayerListProperties = {
        container: this.el
      };

      if (this.view) {
        params.view = this.view;
      }

      const layerList = new LayerList(params);

      this.widget = layerList;
      this.loaded.emit(true);
  }
}
