import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

// arcgis imports
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';

@Component({
  tag: 'arcgis-basemap-gallery',
  styleUrl: 'arcgis-basemap-gallery.css',
  shadow: false,
})
export class ArcGISBasemapGallery {
  @Element() el: HTMLDivElement;

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

  @Event() loaded: EventEmitter<boolean>;

  componentWillLoad() {
    const widget = new BasemapGallery({
      container: this.el,
    });

    this.widget = widget;

    if (this.view) {
        widget.view = this.view as any;
    }

    this.loaded.emit(true);
  }
}
