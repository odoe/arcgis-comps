import { Component, Element, Prop, Watch, h } from '@stencil/core';

// arcgis imports
import Expand from '@arcgis/core/widgets/Expand';

@Component({
  tag: 'arcgis-expand',
  styleUrl: 'arcgis-expand.css',
  shadow: false,
})
export class ArcGISSearch {
  @Element() el: HTMLDivElement;

  @Prop() position: string;

  @Prop() view : __esri.MapView | __esri.SceneView;

  public widget: Expand;

  @Watch('view')
  validateView(value: __esri.MapView) {
    if (value) {
        this.widget.view = value;
        this.widget.view.ui.add(this.widget, this.position);
    }
  }

  componentWillLoad() {
      const expand = new Expand({
          container: this.el
      });

      this.widget = expand;
  }

  componentDidRender() {
    const elems = Array.from(this.el.children) as HTMLElement[];
    for (let e of elems) {
      if (e.tagName.toLowerCase().includes('arcgis-')) {
        (e as any).view = this.view;
        this.widget.content = e;
        this.widget.expandIconClass = (e as any).widget.iconClass;
      }
    }
  }

  render() {
    return (
        <div class="expand-container">
        </div>
      );
  }
}
