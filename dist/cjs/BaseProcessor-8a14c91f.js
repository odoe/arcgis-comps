'use strict';

const request = require('./MapView-1195e7f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends request.d$16{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};request.e([request.d({readOnly:!0})],s.prototype,"supportsTileUpdates",null),request.e([request.d({constructOnly:!0})],s.prototype,"remoteClient",void 0),request.e([request.d({constructOnly:!0})],s.prototype,"service",void 0),request.e([request.d()],s.prototype,"spatialReference",null),request.e([request.d({constructOnly:!0})],s.prototype,"tileInfo",void 0),request.e([request.d({constructOnly:!0})],s.prototype,"tileStore",void 0),s=request.e([request.i("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;

exports.p = p;
