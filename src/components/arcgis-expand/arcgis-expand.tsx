import { Component, Element, Prop, Watch, Event, EventEmitter } from '@stencil/core';

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
        this.widget.view.ui.add(this.el, this.position);
    }
  }

  @Event() loaded: EventEmitter<boolean>;

  componentWillLoad() {
      const expand = new Expand({
          container: this.el
      });

      this.widget = expand;
      this.loaded.emit(true);
  }

  componentDidRender() {
    const elems = Array.from(this.el.children);
    for (let e of elems) {
      if (e.tagName.toLowerCase().includes('arcgis-')) {
        (e as any).view = this.view;
        this.widget.content = e;
        this.widget.expandIconClass = (e as any).widget.iconClass;
      }
    }
  }
}
