import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

// arcgis imports
import Print from '@arcgis/core/widgets/Print';

@Component({
  tag: 'arcgis-print',
  styleUrl: 'arcgis-print.css',
  shadow: false,
})
export class ArcGISPrint {
  @Element() el: HTMLDivElement;

  @Prop() allowedFormats: string;

  @Prop() allowedLayouts: string;

  @Prop() position: string = 'bottom-left';

  @Prop() view: __esri.MapView | __esri.SceneView;

  @Prop({ mutable: true }) widget: any;

  @Watch('allowedFormats')
  validateAllowedFormats(value: string) {
      if (value && this.widget) {
          this.widget.allowedFormats = value.split(',')
      }
  }

  @Watch('allowedLayouts')
  validateAllowedLayouts(value: string) {
      if (value && this.widget) {
          this.widget.allowedLayouts = value.split(',')
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
    const params: __esri.PrintProperties = {
      container: this.el,
    };

    if (this.allowedFormats) {
        params.allowedFormats = this.allowedFormats.split(',');
    }

    if (this.allowedLayouts) {
        params.allowedLayouts = this.allowedLayouts.split(',');
    }

    if (this.view) {
      params.view = this.view;
    }

    const widget = new Print(params);

    this.widget = widget;

    this.loaded.emit(true);
  }
}
