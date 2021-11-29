import { Component, Event, EventEmitter, Prop } from '@stencil/core';

// arcgis imports
import Portal from '@arcgis/core/portal/Portal';

@Component({
  tag: 'arcgis-portal',
  styleUrl: 'arcgis-portal.css',
  shadow: false,
})
export class ArcGISPortal {

  @Prop({ mutable: true }) portal: any;

  @Prop() url: string;

  @Event() loaded: EventEmitter<boolean>;

  async componentWillLoad() {
      const portal = new Portal({ url: this.url });
      await portal.load();
      this.portal = portal;
      this.loaded.emit(true);
  }
}
