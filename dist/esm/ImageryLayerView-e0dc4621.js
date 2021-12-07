import { e, d, i, s, A as r, aE as b$1 } from './messageBundle-f75b4090.js';
import { g } from './OperationalLayer-d609e521.js';
import { b } from './Query-d6335b3a.js';
import { d as d$1 } from './popupUtils-a43f7eb9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s$1}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$1});const{popupEnabled:i}=s$1,u=d$1(s$1,o);if(!i||!r(u))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new b;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new b$1(l,l,this.view.spatialReference):new b$1(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:r(o)?o.signal:null};return s$1.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([d()],m.prototype,"layer",void 0),e([d()],m.prototype,"suspended",void 0),e([d(g)],m.prototype,"timeExtent",void 0),e([d()],m.prototype,"view",void 0),m=e([i("esri.views.layers.ImageryLayerView")],m),m};

export { u };
