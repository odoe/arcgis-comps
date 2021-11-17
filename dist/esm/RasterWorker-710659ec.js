import { M } from './unitUtils-c707ba3c.js';
import { r } from './messageBundle-8a146a9b.js';
import { s as s$1 } from './projection-b812ba08.js';
import { u, s, v, y, B } from './pixelUtils-fc1bd760.js';
import { P, N } from './RasterSymbolizer-c68dbd25.js';
import { x, d as d$1, L } from './rasterProjectionHelper-7a108be9.js';
import { f } from './vectorFieldUtils-2827eaeb.js';
import { l } from './utils-05fce094.js';
import './JSONSupport-4e29e63d.js';
import './index-41925fe8.js';
import './mat4-1ee7ce2f.js';
import './LercCodec-853481e5.js';
import './colorUtils-4e913569.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d{convertVectorFieldData(e){const o=u.fromJSON(e.pixelBlock),s=f(o,e.type);return Promise.resolve(r(s)&&s.toJSON())}async decode(r){const e=await P(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=u.fromJSON(e.pixelBlock),e.extent=e.extent?M.fromJSON(e.extent):null;const o=this.symbolizer.symbolize(e);return Promise.resolve(r(o)&&o.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=N.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const o=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r(o)&&o.toJSON())}estimateStatisticsHistograms(r){const e=s(u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=v(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new u(r):null)),o=y(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo});if(!r.coefs)return o&&o.toJSON();const s=B(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}async getProjectionOffsetGrid(r){const t=M.fromJSON(r.projectedExtent),o=M.fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationStemps&&(s=new s$1({steps:r.datumTransformationStemps})),x(t.spatialReference,o.spatialReference,s)&&await d$1();const i=r.rasterTransform?l(r.rasterTransform):null;return L({...r,projectedExtent:t,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}

export default d;
