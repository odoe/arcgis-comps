'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const Field = require('./Field-9f319836.js');
const featureConversionUtils = require('./featureConversionUtils-e6cca372.js');
const zscale = require('./zscale-fda0b32f.js');
const pbfQueryUtils = require('./pbfQueryUtils-7b4746bb.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./fieldType-a54c379b.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./pbf-758dd66b.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class j{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null;}}class N{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t,e){return e}function p(t,e,r,o){switch(r){case 0:return m(t,e+o,0);case 1:return "lowerLeft"===t.originPosition?m(t,e+o,1):y(t,e+o,1)}}function c(t,e,r,o){return 2===r?m(t,e,2):p(t,e,r,o)}function d(t,e,r,o){return 2===r?m(t,e,3):p(t,e,r,o)}function f(t,e,r,o){return 3===r?m(t,e,3):c(t,e,r,o)}function m({translate:t,scale:e},r,o){return t[o]+r*e[o]}function y({translate:t,scale:e},r,o){return t[o]-r*e[o]}class g{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){};}createFeatureResult(){return new N}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const r=zscale.t(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!request.t(r))for(const e of t.features)r(e.geometry);}createSpatialReference(){return new unitUtils.k}addField(t,e){t.fields.push(Field.y.fromJSON(e));const r=t.fields.map((t=>t.name));this.AttributesConstructor=function(){for(const t of r)this[t]=null;};}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const o in e.attributes){const t=e.attributes[o];"string"==typeof t&&t.length>r&&(e.attributes[o]="");}t.features.push(e);}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:o}=e,s=featureConversionUtils.mt(r.clone(),r,!1,!1,this.transform),i=featureConversionUtils.nt(s,o,!1,!1);let h=null;switch(o){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint";}i.type=h,t.queryGeometryType=o,t.queryGeometry=i;}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new j(request.e$4(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0;}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e);}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e;}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r);}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r);}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const o=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(o);}createPolygonGeometry(t){return {type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return {type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return {type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const o=this.transformPathLikeValue(e,r),s=t[t.length-1];0===r&&s.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=o;}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?f:e?c:r?d:p}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{_parseFeatureQuery(t){const s=pbfQueryUtils.t(t.buffer,new g(t.options)),o={...s,spatialReference:s.spatialReference.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function s(){return new t}

exports.default = s;
