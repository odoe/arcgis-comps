'use strict';

const unitUtils = require('./unitUtils-61d611e2.js');
const request = require('./messageBundle-312ceb47.js');
const projection = require('./projection-e04cb9d0.js');
const pixelUtils = require('./pixelUtils-57d906f9.js');
const RasterSymbolizer = require('./RasterSymbolizer-2441a329.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-d1487ac7.js');
const vectorFieldUtils = require('./vectorFieldUtils-5c430b89.js');
const utils = require('./utils-930cb6eb.js');
require('./JSONSupport-53c01d03.js');
require('./index-57f2cfbb.js');
require('./mat4-1439266d.js');
require('./LercCodec-1b300c83.js');
require('./colorUtils-3935dda2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d{convertVectorFieldData(e){const o=pixelUtils.u.fromJSON(e.pixelBlock),s=vectorFieldUtils.f(o,e.type);return Promise.resolve(request.r(s)&&s.toJSON())}async decode(r){const e=await RasterSymbolizer.P(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=pixelUtils.u.fromJSON(e.pixelBlock),e.extent=e.extent?unitUtils.M.fromJSON(e.extent):null;const o=this.symbolizer.symbolize(e);return Promise.resolve(request.r(o)&&o.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=RasterSymbolizer.N.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const o=this.symbolizer.simpleStretch(pixelUtils.u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(request.r(o)&&o.toJSON())}estimateStatisticsHistograms(r){const e=pixelUtils.s(pixelUtils.u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=pixelUtils.v(pixelUtils.u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new pixelUtils.u(r):null)),o=pixelUtils.y(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo});if(!r.coefs)return o&&o.toJSON();const s=pixelUtils.B(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}async getProjectionOffsetGrid(r){const t=unitUtils.M.fromJSON(r.projectedExtent),o=unitUtils.M.fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationStemps&&(s=new projection.s({steps:r.datumTransformationStemps})),rasterProjectionHelper.x(t.spatialReference,o.spatialReference,s)&&await rasterProjectionHelper.d();const i=r.rasterTransform?utils.l(r.rasterTransform):null;return rasterProjectionHelper.L({...r,projectedExtent:t,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}

exports.default = d;