import { Component, Element, Prop, Watch, h } from '@stencil/core';

// arcgis imports
import FeatureTable from '@arcgis/core/widgets/FeatureTable';

@Component({
  tag: 'arcgis-feature-table',
  styleUrl: 'arcgis-feature-table.css',
  shadow: false,
})
export class ArcGISFeatureTable {
	@Element() el: HTMLDivElement;

	@Prop() layer: any;

  @Prop() position: string = 'bottom-left';

  @Prop() view : __esri.MapView | __esri.SceneView;

	@Prop() widget: any;

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

  componentWillLoad() {
	  const table = new FeatureTable();

	  if (this.view) {
		table.view = this.view as any;
	  }

	  if (this.layer) {
		table.layer = this.layer;
	  }

	  this.widget = table;
  }

  render() {
    return (
        <div class="legend-container">
        </div>
      );
  }
}
