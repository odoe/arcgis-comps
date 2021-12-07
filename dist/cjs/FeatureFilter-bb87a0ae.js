'use strict';

const request = require('./messageBundle-8be88d04.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const geometry = require('./geometry-ef17530a.js');
const spatialQuerySupport = require('./spatialQuerySupport-16372b87.js');
const Query = require('./Query-354911d3.js');
const FeatureStore2D = require('./FeatureStore2D-80a14d1f.js');
require('./index-fde8502c.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./jsonUtils-b6068079.js');
require('./featureConversionUtils-df21e951.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./projectionSupport-7159f0ef.js');
require('./projection-b19710fa.js');
require('./unitUtils-083cb8d0.js');
require('./mat4-f68486bc.js');
require('./geodesicConstants-047d586a.js');
require('./json-2c41fbe0.js');
require('./normalizeUtils-a793b472.js');
require('./TimeExtent-8b558884.js');
require('./enumeration-f235fe07.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./CircularArray-cacb6ae0.js');
require('./TileStore-1f212ad3.js');
require('./Queue-1713f2e9.js');
require('./TileKey-d800cfb2.js');
require('./quickselect-d3f68f5a.js');
require('./aaBoundingBox-c372701a.js');
require('./diffUtils-df69757f.js');
require('./opacityUtils-f2e4b347.js');
require('./FeatureSetReader-ed625ea0.js');
require('./centroid-d874c2ee.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=request.s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await Promise.resolve().then(function () { return require('./WhereClause-f1cc2353.js'); });try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new request.s("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=request.s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,p=2;class y{constructor(t){this._geometryBounds=aaBoundingRect.u(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|p:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return Query.b.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await spatialQuerySupport.Z(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await spatialQuerySupport.v(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);geometry.c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=spatialQuerySupport.n(this._serviceInfo.timeInfo,e.timeExtent,FeatureStore2D.u);else {const i=new request.s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(i);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return !request.r(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i));})),t}}

exports.default = y;
