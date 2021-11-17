import { l as t$1 } from './jsxFactory-ef3e403e.js';
import { t } from './zscale-5759f488.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,t$2,f){if(!f||!f.features||!f.hasZ)return;const s=t(f.geometryType,t$2,r.outSpatialReference);if(!t$1(s))for(const e of f.features)s(e.geometry);}

export { r };
