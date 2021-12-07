import { e as e$1, d, i, n } from './messageBundle-f75b4090.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=e=>{let p=class extends(n(e)){get updating(){return !1}get visible(){return this.analysis.visible&&this.parent.visible&&!this.parent.suspended}};return e$1([d({readOnly:!0})],p.prototype,"type",void 0),e$1([d({constructOnly:!0})],p.prototype,"analysis",void 0),e$1([d({constructOnly:!0})],p.prototype,"parent",void 0),e$1([d({constructOnly:!0})],p.prototype,"view",void 0),e$1([d({readOnly:!0})],p.prototype,"updating",null),e$1([d({readOnly:!0})],p.prototype,"visible",null),p=e$1([i("esri.views.3d.analysis.AnalysisView3D")],p),p};

export { e };
