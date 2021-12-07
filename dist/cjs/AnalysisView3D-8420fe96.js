'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=e=>{let p=class extends(request.n(e)){get updating(){return !1}get visible(){return this.analysis.visible&&this.parent.visible&&!this.parent.suspended}};return request.e([request.d({readOnly:!0})],p.prototype,"type",void 0),request.e([request.d({constructOnly:!0})],p.prototype,"analysis",void 0),request.e([request.d({constructOnly:!0})],p.prototype,"parent",void 0),request.e([request.d({constructOnly:!0})],p.prototype,"view",void 0),request.e([request.d({readOnly:!0})],p.prototype,"updating",null),request.e([request.d({readOnly:!0})],p.prototype,"visible",null),p=request.e([request.i("esri.views.3d.analysis.AnalysisView3D")],p),p};

exports.e = e;
