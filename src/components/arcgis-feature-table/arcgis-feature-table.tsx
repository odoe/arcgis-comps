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

  @Prop() layer: any = null;

  @Prop() position: string = 'bottom-left';

  @Prop() view: __esri.MapView | __esri.SceneView;

  @Prop() widget: any;

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

  @Watch('view')
  validateView(value: __esri.MapView | __esri.SceneView) {
    if (value) {
      this.widget.view = value;
      if (this.el.parentElement.tagName.toLowerCase() !== 'arcgis-expand') {
        this.widget.view.ui.add(this.widget, this.position);
      }
    }
  }

  @Event() rowSelectionChange: EventEmitter<__esri.FeatureTableSelectionChangeEvent>;

  componentWillLoad() {
    const table = new FeatureTable({
      container: this.el
    });


    // proxy events
    table.on('selection-change', (e) => this.rowSelectionChange.emit(e));

    this.widget = table;

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
    }
  }

  render() {
    return <div></div>;
  }
}
