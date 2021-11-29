import { r as registerInstance, e as createEvent } from './index-6f774db5.js';
import { B } from './Portal-f1457cb4.js';
import './cast-e5ea2533.js';
import './JSONSupport-8dda8bae.js';

const arcgisPortalCss = "@import url('https://js.arcgis.com/next/esri/themes/light/main.css');";

let ArcGISPortal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = createEvent(this, "loaded", 7);
  }
  async componentWillLoad() {
    const portal = new B({ url: this.url });
    await portal.load();
    this.portal = portal;
    this.loaded.emit(true);
  }
};
ArcGISPortal.style = arcgisPortalCss;

export { ArcGISPortal as arcgis_portal };
