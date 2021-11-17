import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

// arcgis imports
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@Component({
  tag: 'arcgis-feature-table',
  styleUrl: 'arcgis-feature-table.css',
  shadow: false,
})
export class ArcGISFeatureTable {
  @Element() el: HTMLDivElement;

  @Prop() itemId: string;

  @Prop({ mutable: true }) layer: any = null;

  @Prop() position: string = 'bottom-left';

  @Prop() url: string;

  @Prop() view: __esri.MapView | __esri.SceneView;

  @Prop({ mutable: true }) widget: any;

  @Watch('itemId')
  validateItemId(value: string, old: string) {
    if (value && value !== old) {
        const layer = new FeatureLayer({
          portalItem: {
            id: value
          }
        })
        this.layer = layer;
    }
  }

  @Watch('layer')
  validateLayer(value: any) {
    if (value) {
      this.widget.layer = value;
    }
  }

  @Watch('url')
  validateUrl(value: string, old: string) {
    if (value && value !== old) {
        const layer = new FeatureLayer({ url: value });
        this.layer = layer;
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
  @Event() rowSelectionChange: EventEmitter<__esri.FeatureTableSelectionChangeEvent>;

  componentWillLoad() {
    const table = new FeatureTable({
      container: this.el
    });

    this.widget = table;

    // proxy events
    table.on('selection-change', (e) => this.rowSelectionChange.emit(e));

    if (this.view) {
      table.view = this.view as any;
    }

    if (this.layer) {
      table.layer = this.layer;
    } else if (this.itemId) {
      const layer = new FeatureLayer({
        portalItem: {
          id: this.itemId
        }
      })
      this.layer = layer;
    } else if (this.url) {
      const layer = new FeatureLayer({ url: this.url });
      this.layer = layer;
    }

    this.loaded.emit(true);
  }

  render() {
    return <div></div>;
  }
}
