import { e } from './centroid-a2430753.js';
import { s, t } from './OptimizedFeature-44d5df5b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new s(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e$1,o)=>(e$1.centroid||(e$1.centroid=e(new t,e$1.geometry,o.hasZ,o.hasM)),e$1.centroid)};

export { o };
