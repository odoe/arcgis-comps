import { n as n$1, e as e$3 } from './mat4-f34c6460.js';
import { e as e$2, n, a } from './mat4f64-677a419d.js';
import { I as I$1, y, r as r$3, o as o$1, q, d as d$2, s, u as u$1, f as y$1, a as j$1 } from './mathUtils-e16f9389.js';
import { r as r$4, n as n$2, b as t$1 } from './common-d5b993de.js';
import { n as n$3 } from './vec4f64-2ec4ac08.js';
import { c as cs } from './boundedPlane-030abe8d.js';
import { P, C, d as d$1, l } from './sphere-c3d60863.js';
import { ce as e, bK as e$1, A as r$1, aW as c, af as t } from './messageBundle-f75b4090.js';
import { d } from './mathUtils-8e5ad7fe.js';
import { r as r$2, f as f$1, u } from './utils-c65673fb.js';
import { i } from './Util-68fde664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(){this._disposed=!1;}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(t,r,i,o,e,a){this.id=e$1(),this.geometry=t,this.material=r,this.transformation=i,this.instanceParameters=o,this.origin=e,this._shaderTransformation=a,this._disposed=!1;}release(){this._disposed=!1;}dispose(){this._disposed=!0;}getStaticTransformation(){return this.transformation}getShaderTransformation(){return r$1(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return !!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(I$1(t,t,this.getStaticTransformation()),!0)}}o.pool=new e(o);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(r){this.channel=r,this.id=e$1();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class T extends r$2{constructor(t={}){super(),this.type=1,this._geometryRecords=new Array,this._geometries=new Array,this._objectTransformation=e$2(),this._bvObjectSpace=new L,this._bvWorldSpace=new L,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.castShadow=null==t.castShadow||t.castShadow,this.metadata=t.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new x),this.transformation=e$2();const{geometries:e,materials:s,transformations:i$1,origins:r}=t;if(Array.isArray(e)){i(s.length===e.length,"Object3D: materials don't match geometries"),i(i$1.length===e.length,"Object3D: transformations don't match geometries"),this._geometryRecords.length=e.length,this._geometries.length=e.length;for(let t=0;t<e.length;t++)this._geometries[t]=e[t],this._geometryRecords[t]=o.pool.acquire(e[t],s[t],n(i$1[t]),{highlights:null,occludees:null,visible:this._visible},r&&r[t]);}}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get transformation(){return this._objectTransformation}set transformation(t){n$1(this._objectTransformation,t),this._invalidateBoundingVolume(),this._emit("objectTransformation",this);}dispose(){this._geometryRecords.length=0,this._geometries.length=0;}get parentLayer(){return this._parentLayer}set parentLayer(t){i(null==this._parentLayer||null==t,"Object3D can only be added to a single Layer"),this._parentLayer=t;}addGeometry(e,s,i,r,o$1){i=i||a,this._geometries.push(e);const a$1=o.pool.acquire(e,s,i,{highlights:null,occludees:null,visible:this._visible},r,o$1);return this._geometryRecords.push(a$1),this._hasVolatileTransformation=this._hasVolatileTransformation||r$1(a$1.shaderTransformation),this._emit("objectGeometryAdded",{object:this,record:a$1}),this._invalidateBoundingVolume(),a$1}removeGeometry(e){const s=this._geometryRecords.splice(e,1)[0];return this._hasVolatileTransformation=r$1(s.shaderTransformation)?this._geometryRecords.some((e=>r$1(e.shaderTransformation))):this._hasVolatileTransformation,s.dispose(),this._geometries.splice(e,1),this._emit("objectGeometryRemoved",{object:this,record:s}),this._invalidateBoundingVolume(),s}removeAllGeometries(){for(;this.geometryRecords.length>0;)this.removeGeometry(0);}geometryVertexAttrsUpdated(t){this._emit("vertexAttrsUpdated",{object:this,record:t}),this._invalidateBoundingVolume();}get isVisible(){return this._visible}setVisible(t){if(this._visible!==t){this._visible=t;for(const t of this._geometryRecords)t.instanceParameters.visible=this._visible;this._emit("visibilityChanged",this);}}maskOccludee(){const t=new r(1);for(const e of this._geometryRecords)e.instanceParameters.occludees=f$1(e.instanceParameters.occludees,t);return this._emit("occlusionChanged",this),t}removeOcclude(t){for(const e of this._geometryRecords)e.instanceParameters.occludees=u(e.instanceParameters.occludees,t);this._emit("occlusionChanged",this);}highlight(){const t=new r(0);for(const e of this._geometryRecords)e.instanceParameters.highlights=f$1(e.instanceParameters.highlights,t);return this._emit("highlightChanged",this),t}removeHighlight(t){for(const e of this._geometryRecords)e.instanceParameters.highlights=u(e.instanceParameters.highlights,t);this._emit("highlightChanged",this);}getCombinedStaticTransformation(t,s){return e$3(c(s,e$2()),this.transformation,t.getStaticTransformation())}getCombinedShaderTransformation(t,e){return e=e||e$2(),e$3(e,this.transformation,t.getShaderTransformation()),e}hasVolativeTransformation(){return this._hasVolatileTransformation}get boundingVolumeWorldSpace(){return this._validateBoundingVolume(),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._validateBoundingVolume(),this._bvObjectSpace}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let s=0;s<this._geometryRecords.length;++s){const e=this._geometries[s],i=this._geometryRecords[s],r=e.boundingInfo;r$1(r)&&(this._calculateTransformedBoundingVolume(r,this._bvObjectSpace,i.getShaderTransformation()),this._calculateTransformedBoundingVolume(r,this._bvWorldSpace,this.getCombinedShaderTransformation(i)));}y(this._bvObjectSpace.bounds,this._bvObjectSpace.min,this._bvObjectSpace.max,.5),y(this._bvWorldSpace.bounds,this._bvWorldSpace.min,this._bvWorldSpace.max,.5);const e=n$2(),i=n$2(),r=d(this.transformation);for(let t$1=0;t$1<this._geometryRecords.length;++t$1){const o=this._geometries[t$1].boundingInfo;if(t(o))continue;const a=this._geometryRecords[t$1].getShaderTransformation(),n=d(a);I$1(e,o.getCenter(),a);const h=q(e,this._bvObjectSpace.bounds),l=o.getBSRadius()*n;this._bvObjectSpace.bounds[3]=Math.max(this._bvObjectSpace.bounds[3],h+l),I$1(i,e,this.transformation);const d$1=q(i,this._bvWorldSpace.bounds),g=l*r;this._bvWorldSpace.bounds[3]=Math.max(this._bvWorldSpace.bounds[3],d$1+g);}this._bvDirty=!1;}_calculateTransformedBoundingVolume(t,e,s){const i=t.getBBMin(),r=t.getBBMax(),o=t$1(i),a=t$1(r);I$1(o,o,s),I$1(a,a,s);for(let n=0;n<3;++n)e.min[n]=Math.min(e.min[n],o[n],a[n]),e.max[n]=Math.max(e.max[n],o[n],a[n]);for(let n=0;n<3;++n){r$3(o,i),r$3(a,r),o[n]=r[n],a[n]=i[n],I$1(o,o,s),I$1(a,a,s);for(let t=0;t<3;++t)e.min[t]=Math.min(e.min[t],o[t],a[t]),e.max[t]=Math.max(e.max[t],o[t],a[t]);}}_invalidateBoundingVolume(){this._bvDirty=!0,r$1(this._parentLayer)&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace.bounds);}_emit(e,s){r$1(this._parentLayer)&&this._parentLayer.events.emit(e,s);}get test(){const t=this;return {hasGeometry:e=>t._geometries.indexOf(e)>-1,getGeometryIndex:e=>t._geometries.indexOf(e)}}}class x{constructor(){this.min=r$4(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=r$4(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class L extends x{constructor(){super(...arguments),this.bounds=P();}init(){o$1(this.min,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),o$1(this.max,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),C(this.bounds);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t){return (r,s,e)=>(y(v,r,s,e),!cs(t,v))}class f{constructor(){this.min=new j,this.max=new j,this.hud=new j,this.ground=new j;}init(t){this.min.init(t),this.max.init(t),this.hud.init(t),this.ground.init(t),this.all=[];}}class j{constructor(t){this.normal=n$2(),this.transformation=e$2(),this._ray=d$1(),this.init(t);}get ray(){return this._ray}get hasIntersectionPoint(){return null!=this.dist}get distanceInRenderSpace(){if(null!=this.dist)return d$2(O,this.ray.direction,this.dist),s(O)}getIntersectionPoint(t){return !!this.hasIntersectionPoint&&(d$2(O,this.ray.direction,this.dist),u$1(t,this.ray.origin,O),!0)}getTransformedNormal(t){return r$3(I,this.normal),I[3]=0,y$1(I,I,this.transformation),r$3(t,I),j$1(t,t),t}init(t){this.dist=void 0,this.target=void 0,this.name=void 0,this.drapedLayerOrder=void 0,this.drapedLayerGraphicOrder=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="Stage",t?l(t,this._ray):this._ray=d$1();}set(r,i,s,e,a,o,h,c,m,l){r instanceof T&&(r={type:"stage",obj:r}),this.dist=s,r$3(this.normal,e),n$1(this.transformation,a),this.target=r,this.name=i,this.drapedLayerOrder=o,this.center=h?t$1(h):null,this.geometryId=c,this.triangleNr=m,this.drapedLayerGraphicOrder=l;}copyFrom(r){l(r.ray,this._ray),this.dist=r.dist,this.target=r.target,this.name=r.name,this.drapedLayerOrder=r.drapedLayerOrder,this.center=r.center?t$1(r.center):null,this.geometryId=r.geometryId,this.triangleNr=r.triangleNr,this.intersector=r.intersector,this.drapedLayerGraphicOrder=r.drapedLayerGraphicOrder,r$3(this.normal,r.normal),n$1(this.transformation,r.transformation);}}const v=n$2(),O=n$2(),I=n$3();

export { T, f, g, j, o, r };
