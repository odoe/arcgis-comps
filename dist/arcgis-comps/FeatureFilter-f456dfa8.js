import { g as s$1, a as s$2, r } from './cast-e5ea2533.js';
import { u } from './aaBoundingRect-2a187de3.js';
import { c } from './Polyline-56152656.js';
import { Z, v, n } from './spatialQuerySupport-8d141d72.js';
import { b } from './Query-b8b0a5e8.js';
import { u as u$1 } from './FeatureStore2D-f3d6f01a.js';
import './mathUtils-cc1689ad.js';
import './common-e2a70efa.js';
import './Portal-f1457cb4.js';
import './JSONSupport-8dda8bae.js';
import './geometry-160ffbb5.js';
import './featureConversionUtils-dd47b9b4.js';
import './OptimizedFeature-53745eb6.js';
import './OptimizedFeatureSet-27736f1f.js';
import './projectionSupport-7faa25d0.js';
import './projection-cca7ffa7.js';
import './unitUtils-5dcccb3c.js';
import './mat4-0196b8fc.js';
import './assets-1ab0ccbe.js';
import './json-cfa039ad.js';
import './normalizeUtils-eb3efd47.js';
import './centroid-5b845b7c.js';
import './TimeExtent-ecf7e6f2.js';
import './enumeration-da141e85.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';
import './CircularArray-c8055f99.js';
import './Collection-ac20f1a1.js';
import './TileStore-d0a26b94.js';
import './TileKey-5424dd8b.js';
import './quickselect-ccfd8cff.js';
import './aaBoundingBox-e0a84875.js';
import './diffUtils-4072cef0.js';
import './opacityUtils-5755cb64.js';
import './FeatureSetReader-732e84ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await import('./WhereClause-e7087be7.js');try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new s$2("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,p=2;class y{constructor(t){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|p:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return b.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await Z(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await v(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=n(this._serviceInfo.timeInfo,e.timeExtent,u$1);else {const i=new s$2("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(i);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return !r(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i));})),t}}

export default y;
