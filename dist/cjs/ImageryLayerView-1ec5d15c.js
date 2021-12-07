'use strict';

const request = require('./messageBundle-8be88d04.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const Query = require('./Query-354911d3.js');
const popupUtils = require('./popupUtils-454e6531.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new request.s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=popupUtils.d(s,o);if(!i||!request.r(u))throw new request.s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new Query.b;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new request.b$2(l,l,this.view.spatialReference):new request.b$2(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:request.r(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return request.e([request.d()],m.prototype,"layer",void 0),request.e([request.d()],m.prototype,"suspended",void 0),request.e([request.d(OperationalLayer.g)],m.prototype,"timeExtent",void 0),request.e([request.d()],m.prototype,"view",void 0),m=request.e([request.i("esri.views.layers.ImageryLayerView")],m),m};

exports.u = u;
