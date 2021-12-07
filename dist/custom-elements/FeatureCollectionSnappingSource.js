import { ah as p, r, e, d, i as i$1 } from './index.js';
import { o } from './queryEngineUtils.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends p{constructor(r){super(r);}get availability(){return 1}refresh(){}async fetchCandidates(r$1,e){const t=this.layerSource.layer.source;return t.querySnapping?(await t.querySnapping({distance:r$1.distance,point:r$1.coordinateHelper.vectorToPoint(r$1.point).toJSON(),types:r$1.types,query:r(r$1.filter)?r$1.filter.createQuery().toJSON():{where:"1=1"}},{signal:e})).candidates.map((e=>o(e,r$1.coordinateHelper))):[]}};e([d({constructOnly:!0})],i.prototype,"layerSource",void 0),e([d({readOnly:!0})],i.prototype,"availability",null),i=e([i$1("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],i);

export { i as FeatureCollectionSnappingSource };
