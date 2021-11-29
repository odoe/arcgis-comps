import{r as t,o as r,hC as s}from"./p-5420851c.js";import{u as o,s as e,v as n,y as i,B as a}from"./p-8d730a3d.js";import{P as c,N as m}from"./p-dadbe306.js";import{x as p,d as l,L as f}from"./p-163c7216.js";import{f as u}from"./p-e9fbf3df.js";import{l as d}from"./p-1c6b7ac5.js";import"./p-53bb6ab4.js";import"./p-793123ac.js";import"./p-e4802f24.js";export default class{convertVectorFieldData(r){const s=o.fromJSON(r.pixelBlock),e=u(s,r.type);return Promise.resolve(t(e)&&e.toJSON())}async decode(t){const r=await c(t.data,t.options);return r&&r.toJSON()}symbolize(s){s.pixelBlock=o.fromJSON(s.pixelBlock),s.extent=s.extent?r.fromJSON(s.extent):null;const e=this.symbolizer.symbolize(s);return Promise.resolve(t(e)&&e.toJSON())}async updateSymbolizer(t){var r;this.symbolizer=m.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=t.histograms)}stretch(r){const s=this.symbolizer.simpleStretch(o.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(t(s)&&s.toJSON())}estimateStatisticsHistograms(t){const r=e(o.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){const r=n(o.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return r&&r.forEach(((t,s)=>{r.set(s,null==t?void 0:t.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(t){const r=t.srcPixelBlocks.map((t=>t?new o(t):null)),s=i(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo});if(!t.coefs)return s&&s.toJSON();const e=a(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation);return e&&e.toJSON()}async getProjectionOffsetGrid(t){const o=r.fromJSON(t.projectedExtent),e=r.fromJSON(t.srcBufferExtent);let n=null;t.datumTransformationStemps&&(n=new s({steps:t.datumTransformationStemps})),p(o.spatialReference,e.spatialReference,n)&&await l();const i=t.rasterTransform?d(t.rasterTransform):null;return f({...t,projectedExtent:o,srcBufferExtent:e,datumTransformation:n,rasterTransform:i})}}