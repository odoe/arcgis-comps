import './geometry-7e07b1ba.js';
import { A as r, _ as M } from './messageBundle-f75b4090.js';
import { s as s$1 } from './projection-f3d8779d.js';
import { u, s, v, y, B } from './pixelUtils-38f5d4af.js';
import { P, N } from './RasterSymbolizer-c5b4ea43.js';
import { x, d as d$1, L } from './rasterProjectionHelper-0dac9318.js';
import { f } from './vectorFieldUtils-b4f5845a.js';
import { l } from './utils-14ed1f0b.js';
import './index-b157fcf2.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './unitUtils-38774114.js';
import './mat4-f34c6460.js';
import './aaBoundingRect-9468599b.js';
import './geodesicConstants-54cb88d4.js';
import './LercCodec-1e3c120d.js';
import './colorUtils-ed185d63.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './enumeration-d3301938.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d{convertVectorFieldData(e){const o=u.fromJSON(e.pixelBlock),s=f(o,e.type);return Promise.resolve(r(s)&&s.toJSON())}async decode(r){const e=await P(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=u.fromJSON(e.pixelBlock),e.extent=e.extent?M.fromJSON(e.extent):null;const o=this.symbolizer.symbolize(e);return Promise.resolve(r(o)&&o.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=N.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const o=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r(o)&&o.toJSON())}estimateStatisticsHistograms(r){const e=s(u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=v(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new u(r):null)),o=y(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo});if(!r.coefs)return o&&o.toJSON();const s=B(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}async getProjectionOffsetGrid(r){const t=M.fromJSON(r.projectedExtent),o=M.fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationStemps&&(s=new s$1({steps:r.datumTransformationStemps})),x(t.spatialReference,o.spatialReference,s)&&await d$1();const i=r.rasterTransform?l(r.rasterTransform):null;return L({...r,projectedExtent:t,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}

export default d;
