import { af as t, ar as M, A as r } from './messageBundle-f75b4090.js';
import { projectGeometry as l$1 } from './geometryServiceUtils-ba2d6c3e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l){const s=l.view.spatialReference,i=l.layer.fullExtent,n=r(i)&&i.spatialReference;if(t(i)||!n)return Promise.resolve(null);if(n.equals(s))return Promise.resolve(i.clone());const a=M(i,s);return r(a)?Promise.resolve(a):l.view.state.isLocal?l$1(i,s,l.layer.portalItem).then((e=>!l.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null)}

export { l };
