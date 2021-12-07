import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

// arcgis imports
import Editor from '@arcgis/core/widgets/Editor';

@Component({
  tag: 'arcgis-editor',
  styleUrl: 'arcgis-editor.css',
  shadow: false,
})
export class ArcGISEditor {
  @Element() el: HTMLDivElement;

  @Prop() allowedWorkflows: string;

  @Prop() position: string = 'bottom-left';

  @Prop() view: __esri.MapView | __esri.SceneView;

  @Prop({ mutable: true }) widget: any;

  @Watch('allowedWorkflows')
  validateAllowedWorkflows(value: string) {
      if (value && this.widget) {
          this.widget.allowedWorkflows = value.split(',')
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
    const params: __esri.EditorProperties = {
      container: this.el,
    };

    if (this.allowedWorkflows) {
        params.allowedWorkflows = this.allowedWorkflows.split(',');
    }

    if (this.view) {
      params.view = this.view;
    }

    const widget = new Editor(params);

    this.widget = widget;

    this.loaded.emit(true);
  }
}
