import { ab as t, h as s } from './jsxFactory-b8b7429b.js';
import { U as B } from './Graphic-75d1efd2.js';
import { a, n } from './project-82d55cb7.js';
import './index-921bd636.js';
import './JSONSupport-15eefdaf.js';
import './utils-5cb95ff2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(o=null,n){var i,l;if(t.geometryServiceUrl)return t.geometryServiceUrl;if(!o)throw new s("internal:geometry-service-url-not-configured");let a;a="portal"in o?o.portal||B.getDefault():o,await a.load({signal:n});const c=null==(i=a.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new s("internal:geometry-service-url-not-configured");return c}async function l(r,t,l=null,a$1){const c=await i(l,a$1),s$1=new a;s$1.geometries=[r],s$1.outSpatialReference=t;const m=await n(c,s$1,{signal:a$1});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s("internal:geometry-service-projection-failed")}

export { i as getGeometryServiceURL, l as projectGeometry };
