import{M as t}from"./p-566b0715.js";import{r}from"./p-9ae46e68.js";import{s}from"./p-bae36c84.js";import{u as o,s as e,v as n,y as i,B as m}from"./p-9dbf3f05.js";import{P as c,N as a}from"./p-3cbf7b8d.js";import{x as p,d as f,L as l}from"./p-40c5644b.js";import{f as u}from"./p-cb5759ce.js";import{l as d}from"./p-05ca30ed.js";import"./p-fe01b82b.js";import"./p-84bf99cb.js";import"./p-138c2b2c.js";import"./p-1a607bd0.js";import"./p-e4802f24.js";export default class{convertVectorFieldData(t){const s=o.fromJSON(t.pixelBlock),e=u(s,t.type);return Promise.resolve(r(e)&&e.toJSON())}async decode(t){const r=await c(t.data,t.options);return r&&r.toJSON()}symbolize(s){s.pixelBlock=o.fromJSON(s.pixelBlock),s.extent=s.extent?t.fromJSON(s.extent):null;const e=this.symbolizer.symbolize(s);return Promise.resolve(r(e)&&e.toJSON())}async updateSymbolizer(t){var r;this.symbolizer=a.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=t.histograms)}stretch(t){const s=this.symbolizer.simpleStretch(o.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(r(s)&&s.toJSON())}estimateStatisticsHistograms(t){const r=e(o.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){const r=n(o.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return r&&r.forEach(((t,s)=>{r.set(s,null==t?void 0:t.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(t){const r=t.srcPixelBlocks.map((t=>t?new o(t):null)),s=i(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo});if(!t.coefs)return s&&s.toJSON();const e=m(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation);return e&&e.toJSON()}async getProjectionOffsetGrid(r){const o=t.fromJSON(r.projectedExtent),e=t.fromJSON(r.srcBufferExtent);let n=null;r.datumTransformationStemps&&(n=new s({steps:r.datumTransformationStemps})),p(o.spatialReference,e.spatialReference,n)&&await f();const i=r.rasterTransform?d(r.rasterTransform):null;return l({...r,projectedExtent:o,srcBufferExtent:e,datumTransformation:n,rasterTransform:i})}}