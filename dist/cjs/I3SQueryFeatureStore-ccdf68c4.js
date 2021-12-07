'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const unitUtils = require('./unitUtils-083cb8d0.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const WhereClause = require('./WhereClause-f1cc2353.js');
const projection = require('./projection-b19710fa.js');
const aaBoundingBox = require('./aaBoundingBox-c372701a.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const labelingInfo = require('./labelingInfo-594911d5.js');
const I3SUtil = require('./I3SUtil-25befd00.js');
const QueryEngine = require('./QueryEngine-d6177b5a.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const Query = require('./Query-354911d3.js');
const centroid = require('./centroid-d874c2ee.js');
const OptimizedFeature = require('./OptimizedFeature-cd4fe3c6.js');
const vec4f64 = require('./vec4f64-d3fa6cd2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=request.s$1.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let v;exports.O=class extends request.p{constructor(e){super(e),this._projectionEngineLoaded=!1;}initialize(){request.a(this,"filter.geometry").then((()=>this.loadAsyncModule(G().then((e=>{this.destroyed||(this._geometryEngine=e,this.applyFilters());})))));}get sortedObjectIds(){if(request.t$1(this.filter.objectIds))return null;const e=new Float64Array(this.filter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=request.r(this.filter)?this.filter.where:null;if(request.t$1(e)||!e)return null;try{return WhereClause.WhereClause.create(e,this.layerFieldsIndex)}catch(t){_.error(`Failed to parse filter where clause: ${t}`);}return null}addFilters(e,t,r,s){const n=this.sortedObjectIds;request.r(n)&&e.push((e=>I3SUtil.ee(n,!0,e))),this.addSqlFilter(e,this.parsedWhereClause);const i=this.parsedGeometry;if(request.r(i)){const n=this.spatialRelationship;e.push(((e,o)=>A(e,o,s,t,r,i,n)));}}isMBSGeoemtryVisible(e,t,r){const s=this.parsedGeometry;if(request.r(s)){const n=this.spatialRelationship,i=s[0].spatialReference||t;if(!projection.Fn(e,r,T,i))return _.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0;return C(T,s,i,n)}return !0}get parsedGeometry(){if(request.t$1(this.filter))return null;if(!this._geometryEngine)return null;const{geometry:e}=this.filter;if(request.t$1(e))return null;const{distance:t,units:r}=this.filter,s=this.spatialRelationship,n="mesh"===e.type?e.extent:e;if(request.t$1(t)||0===t)return L(n,s);const c=r||unitUtils.z(n.spatialReference);if(n.spatialReference.isWGS84){return L(this._geometryEngine.geodesicBuffer(n,t,c),s)}const l=request.M$2(n,request.k.WGS84);if(request.r(l)){return L(request.M$2(this._geometryEngine.geodesicBuffer(l,t,c),n.spatialReference),s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(projection.J().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let p=null;try{p=projection.O(n,request.k.WGS84);}catch(u){}if(p)try{p=projection.O(this._geometryEngine.geodesicBuffer(p,t,c),n.spatialReference);}catch(u){p=null;}return p||_.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),L(p,s)}get spatialRelationship(){return request.r(this.filter)?this.filter.spatialRelationship:"intersects"}static checkSupport(e){return e.timeExtent?(_.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!B(e.spatialRelationship)||(_.warn(`Filters with spatialRelationship other than ${W.join(", ")} are not supported for mesh scene layers`),!1)}};function k(){return !!v}async function G(){return k()||(v=await Promise.resolve().then(function () { return require('./geometryEngine-f0bb4840.js'); })),v}request.e([request.d({type:labelingInfo.y})],exports.O.prototype,"filter",void 0),request.e([request.d()],exports.O.prototype,"layerFieldsIndex",void 0),request.e([request.d()],exports.O.prototype,"loadAsyncModule",void 0),request.e([request.d()],exports.O.prototype,"applyFilters",void 0),request.e([request.d()],exports.O.prototype,"addSqlFilter",void 0),request.e([request.d({readOnly:!0})],exports.O.prototype,"sortedObjectIds",null),request.e([request.d({readOnly:!0})],exports.O.prototype,"parsedWhereClause",null),request.e([request.d({readOnly:!0})],exports.O.prototype,"parsedGeometry",null),request.e([request.d({readOnly:!0})],exports.O.prototype,"spatialRelationship",null),request.e([request.d()],exports.O.prototype,"_projectionEngineLoaded",void 0),request.e([request.d()],exports.O.prototype,"_geometryEngine",void 0),exports.O=request.e([request.i("esri.views.3d.layers.i3s.I3SMeshViewFilter")],exports.O);const W=(e=>e)(["contains","intersects","disjoint"]);function B(e){return null!=e&&W.indexOf(e)>=0}function L(e,t){if(request.t$1(e))return null;if("disjoint"===t&&"polygon"===e.type){const t=new Array(e.rings.length);for(let r=0;r<e.rings.length;++r){const s=aaBoundingRect.o(1/0,1/0,-1/0,-1/0);aaBoundingRect.x(s,e.rings[r]),t[r]={type:"polygon",rings:[e.rings[r]],spatialReference:e.spatialReference,aabr:s};}t.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const n=new Set,i=new request.w$3;for(let e=0;e<t.length;++e){const r=t[e];for(let s=e+1;s<t.length;++s){const e=t[s];if(e.aabr[0]>=r.aabr[2])break;n.add(e);}n.forEach((e=>{if(r!==e)if(e.aabr[2]<=r.aabr[0])n.delete(e);else if(v.intersects(r,e)){r.rings=r.rings.concat(e.rings),aaBoundingRect.h(r.aabr,e.aabr,r.aabr),delete r._geVersion,n.delete(e);const o=request.b$4(t,e,t.length,i);t.splice(o,1);}})),n.add(r);}for(const e of t)delete e.aabr;return t}return [e]}function C(e,t,r,s){const n=U(e,r);return t.every((e=>1!==q(e,n,s)))}function A(e,t,r,s,n,i,o){const a=i[0].spatialReference||s.spatialReference;if(!projection.Fn(t.node.mbs,n,T,a))return void _.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const c=U(T,a),l=V(o,s,a,r,t.objectHandle);for(const p of i){if(0===e.length)return;switch(q(p,c,o)){case 1:return void(e.length=0);case 0:continue}I3SUtil._(e,t.featureIds,(e=>H(p,e,l)));}}const T=[0,0,0,0];function V(e,t,r,s,n){const i=t.renderSpatialReference,o=new Map,a={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};a.rings[0][3]=a.rings[0][0];const c={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let l,p;switch(e){case"intersects":l=(e,t)=>v.intersects(e,t)?0:2,p=Z;break;case"contains":l=(e,t)=>v.contains(e,t)?2:1,p=Z;break;default:l=(e,t)=>v.disjoint(e,t)?2:1,p=$;}return {collection:s,object:n,type:e,maskSR:r,renderSR:i,aabbCache:o,triangle:a,positions:c,triangleTest:l,geometryTest:p}}function U(e,t){const r={x:e[0],y:e[1],hasZ:!1,hasM:!1,type:"point",spatialReference:t},s=!t.isWGS84&&!t.isWebMercator?v.buffer(r,e[3],1):v.geodesicBuffer(r,e[3],1);return s.type="polygon",s}function q(e,t,r){switch(r){case"intersects":case"contains":return Z(e,t);case"disjoint":return $(e,t)}}function Z(e,t){return v.intersects(e,t)?v.contains(e,t)?0:2:1}function $(e,t){return v.intersects(e,t)?v.contains(e,t)?1:2:0}const z=2**-32;function H(e,t,r){const{collection:s,object:n,renderSR:i,maskSR:o,geometryTest:a,aabbCache:c}=r;let l=c.get(t);if(!l){const e=s.getObjectTransform(n);s.getComponentAabb(n,t,P);const r=[[P[0],P[1],0],[P[0],P[4],0],[P[3],P[4],0],[P[3],P[1],0]];for(let t=0;t<4;++t)mathUtils.L(r[t],r[t],e.rotationScale),mathUtils.u(r[t],r[t],e.position),projection.gn(r[t],i,r[t],o);l={rings:[r],hasZ:!1,hasM:!1,type:"polygon",spatialReference:o},l.rings[0][4]=l.rings[0][0],c.set(t,l);}switch(a(e,l)){case 1:return !1;case 0:return !0}const{triangle:p,triangleTest:g,positions:h}=r,y=p.rings[0][0],m=p.rings[0][1],b=p.rings[0][2],S=s.getObjectTransform(n);s.getComponentPositions(n,t,h);const{indices:R,data:w,stride:F,startIndex:E,endIndex:I}=h;for(let x=E;x<I;x+=3){const t=F*R[x+0],r=F*R[x+1],s=F*R[x+2];mathUtils.o(y,w[t+0],w[t+1],w[t+2]),mathUtils.o(m,w[r+0],w[r+1],w[r+2]),mathUtils.o(b,w[s+0],w[s+1],w[s+2]),mathUtils.L(y,y,S.rotationScale),mathUtils.L(m,m,S.rotationScale),mathUtils.L(b,b,S.rotationScale),mathUtils.u(y,y,S.position),mathUtils.u(m,m,S.position),mathUtils.u(b,b,S.position),projection.gn(y,i,y,o),projection.gn(m,i,m,o),projection.gn(b,i,b,o);const n=m[0]-y[0],a=m[1]-y[1],c=b[0]-y[0],l=b[1]-y[1];if(!(Math.abs(n*l-a*c)<z))switch(delete p._geVersion,g(e,p)){case 1:return !1;case 0:return !0}}return "intersects"!==r.type}const P=aaBoundingBox.a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l$1=QueryEngine.V;let p=class extends request.p{constructor(e){super(e),this._dataQueryEngineInstance=null,this._handles=new request.u;}get defaultQueryJSON(){return new Query.b({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this.ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",(()=>this.spatialIndex.events.emit("changed"))));}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null);}async executeQueryForCount(e,r){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:t,extent:s}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return {count:t,extent:request.M.fromJSON(s)}}async executeQueryForIds(e,r){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new request.s("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(s.returnCentroid)throw new request.s("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this.dataQueryEngine.executeQuery(s,r),o=FeatureSet['default'].fromJSON(n);return o.features.forEach((e=>{e.geometry=null;})),o}_ensureQueryJSON(e){if(request.t$1(e))return this.defaultQueryJSON;const r=e.toJSON();return r.outSpatialReference||(e.outSpatialReference=this.spatialReference),r}ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||"OBJECTID",r="esriGeometryPolygon",t=this.layer.fields.map((e=>e.toJSON())),s=this.layerView.view.resourceController.scheduler,n=this.spatialReference.toJSON(),o=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new l$1({hasZ:!0,hasM:!1,geometryType:r,fields:t,timeInfo:null,spatialReference:n,objectIdField:e,featureStore:a,scheduler:s,priority:o}),this._dataQueryEngineInstance}};request.e([request.d({constructOnly:!0})],p.prototype,"layerView",void 0),request.e([request.d({constructOnly:!0})],p.prototype,"priority",void 0),request.e([request.d({constructOnly:!0})],p.prototype,"spatialIndex",void 0),request.e([request.d({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],p.prototype,"spatialReference",void 0),request.e([request.d({readOnly:!0,aliasOf:"layerView.i3slayer"})],p.prototype,"layer",void 0),request.e([request.d({readOnly:!0})],p.prototype,"defaultQueryJSON",null),p=request.e([request.i("esri.views.3d.layers.i3s.I3SQueryEngine")],p);const d$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(t){this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent;}getObjectId(t){return t.id}getAttributes(e){const{meta:r,index:o}=e,n={};this.objectIdField&&(n[this.objectIdField]=e.id);const s=request.r(r.attributeInfo)&&r.attributeInfo.attributeData;if(request.r(s))for(const t of Object.keys(s))n[t]=I3SUtil.he(s[t],o);return n}getAttribute(e,r){if(r===this.objectIdField)return e.id;const{meta:o,index:n}=e,s=request.r(o.attributeInfo)&&o.attributeInfo.attributeData;return request.r(s)?I3SUtil.he(s[r],n):null}getGeometry(t){if(t.geometry)return t.geometry;const[e,r,i,n,a]=this.getFeatureExtent(t,s);return new OptimizedFeature.t([5],[e,r,i,n,r,i,n,a,i,e,a,i,e,r,i])}getCentroid(t,e){if(t.geometry)return centroid.e(new OptimizedFeature.t,t.geometry,e.hasZ,e.hasM);const[i,n,a,m,u,d]=this.getFeatureExtent(t,s);return new OptimizedFeature.t([0],[(i+m)/2,(n+u)/2,(a+d)/2])}cloneWithGeometry(t,e){const{id:r,index:o,meta:i}=t;return {id:r,index:o,meta:i,geometry:e}}}const s=aaBoundingBox.a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends request.p{constructor(t){super(t),this.events=new request.n$2;}forEach(t){this.forAllFeatures((e=>(t(e),1)));}forEachBounds(t,e,r){const o=this.getFeatureExtent;for(const s of t)e(o(s,r));}forEachInBounds(t,e){this.forAllFeatures((r=>{const o=this.getFeatureExtent(r,l);return aaBoundingRect.k(t,aaBoundingBox.G(o,y))&&e(r),1}),(e=>{if(projection.Fn(e.node.mbs,this.sourceSpatialReference,f,this.viewSpatialReference),f[0]>=t[0]&&f[2]<=t[2]&&f[1]>=t[1]&&f[3]<=t[3])return 1;const r=Math.max(t[0],Math.min(f[0],t[2])),o=Math.max(t[1],Math.min(f[1],t[3])),s=f[0]-r,c=f[1]-o;return s*s+c*c<=f[3]*f[3]?1:2}));}};request.e([request.d({constructOnly:!0})],m.prototype,"featureAdapter",void 0),request.e([request.d({constructOnly:!0})],m.prototype,"forAllFeatures",void 0),request.e([request.d({constructOnly:!0})],m.prototype,"getFeatureExtent",void 0),request.e([request.d({constructOnly:!0})],m.prototype,"sourceSpatialReference",void 0),request.e([request.d({constructOnly:!0})],m.prototype,"viewSpatialReference",void 0),m=request.e([request.i("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],m);const f=vec4f64.n(),l=aaBoundingBox.a(),y=aaBoundingRect.u(),d=m;

exports.d = d$1;
exports.d$1 = d;
exports.n = n;
