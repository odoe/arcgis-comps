'use strict';

const request = require('./MapView-1726f571.js');
const project = require('./project-e9005048.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(o=null,n){var i,l;if(request.t$4.geometryServiceUrl)return request.t$4.geometryServiceUrl;if(!o)throw new request.s$1("internal:geometry-service-url-not-configured");let a;a="portal"in o?o.portal||request.B$1.getDefault():o,await a.load({signal:n});const c=null==(i=a.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new request.s$1("internal:geometry-service-url-not-configured");return c}async function l(r,t,l=null,a){const c=await i(l,a),s=new project.a;s.geometries=[r],s.outSpatialReference=t;const m=await project.n(c,s,{signal:a});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new request.s$1("internal:geometry-service-projection-failed")}

exports.getGeometryServiceURL = i;
exports.projectGeometry = l;
