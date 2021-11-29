'use strict';

const request = require('./MapView-1726f571.js');
const pixelUtils = require('./pixelUtils-d4b82358.js');
const RasterSymbolizer = require('./RasterSymbolizer-417d3111.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-7596efb7.js');
const vectorFieldUtils = require('./vectorFieldUtils-42b062cc.js');
const utils = require('./utils-24ed9c20.js');
require('./index-fde8502c.js');
require('./LercCodec-4863ed51.js');
require('./colorUtils-3935dda2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d{convertVectorFieldData(e){const o=pixelUtils.u.fromJSON(e.pixelBlock),s=vectorFieldUtils.f(o,e.type);return Promise.resolve(request.r(s)&&s.toJSON())}async decode(r){const e=await RasterSymbolizer.P(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=pixelUtils.u.fromJSON(e.pixelBlock),e.extent=e.extent?request.M$1.fromJSON(e.extent):null;const o=this.symbolizer.symbolize(e);return Promise.resolve(request.r(o)&&o.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=RasterSymbolizer.N.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const o=this.symbolizer.simpleStretch(pixelUtils.u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(request.r(o)&&o.toJSON())}estimateStatisticsHistograms(r){const e=pixelUtils.s(pixelUtils.u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=pixelUtils.v(pixelUtils.u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new pixelUtils.u(r):null)),o=pixelUtils.y(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo});if(!r.coefs)return o&&o.toJSON();const s=pixelUtils.B(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}async getProjectionOffsetGrid(r){const t=request.M$1.fromJSON(r.projectedExtent),o=request.M$1.fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationStemps&&(s=new request.s$20({steps:r.datumTransformationStemps})),rasterProjectionHelper.x(t.spatialReference,o.spatialReference,s)&&await rasterProjectionHelper.d();const i=r.rasterTransform?utils.l(r.rasterTransform):null;return rasterProjectionHelper.L({...r,projectedExtent:t,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}

exports.default = d;
