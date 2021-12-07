import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

// arcgis imports
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';

@Component({
  tag: 'arcgis-basemap-toggle',
  styleUrl: 'arcgis-basemap-toggle.css',
  shadow: false,
})
export class ArcGISBasemapToggle {
  @Element() el: HTMLDivElement;

  @Prop() nextBasemap: string;

  @Prop() position: string = 'bottom-left';

  @Prop() view: __esri.MapView | __esri.SceneView;

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

  @Watch('nextBasemap')
  validateNextBasemap(value: string) {
      if (value && this.widget) {
          this.widget.nextBasemap = value;
      }
  }

  @Event() loaded: EventEmitter<boolean>;

  componentWillLoad() {
    const params: __esri.BasemapToggleProperties = {
        container: this.el
    };

    if (this.nextBasemap) {
        params.nextBasemap = this.nextBasemap;
    }

    if (this.view) {
        params.view = this.view;
    }

    const widget = new BasemapToggle(params);

    this.widget = widget;

    this.loaded.emit(true);
  }
}
