import"./p-b79fcce3.js";import{A as t,_ as r}from"./p-e58503d5.js";import{s}from"./p-c93d2280.js";import{u as o,s as e,v as i,y as p,B as n}from"./p-f971b161.js";import{P as m,N as a}from"./p-2d1bf19f.js";import{x as c,d as f,L as d}from"./p-d1a9be2d.js";import{f as j}from"./p-1eb62563.js";import{l}from"./p-61f046ff.js";import"./p-53bb6ab4.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-01e5a461.js";import"./p-ccdb8e80.js";import"./p-ea916a39.js";import"./p-fea9512d.js";import"./p-43d5f9f6.js";import"./p-81049b2d.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-a9a30646.js";export default class{convertVectorFieldData(r){const s=o.fromJSON(r.pixelBlock),e=j(s,r.type);return Promise.resolve(t(e)&&e.toJSON())}async decode(t){const r=await m(t.data,t.options);return r&&r.toJSON()}symbolize(s){s.pixelBlock=o.fromJSON(s.pixelBlock),s.extent=s.extent?r.fromJSON(s.extent):null;const e=this.symbolizer.symbolize(s);return Promise.resolve(t(e)&&e.toJSON())}async updateSymbolizer(t){var r;this.symbolizer=a.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=t.histograms)}stretch(r){const s=this.symbolizer.simpleStretch(o.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(t(s)&&s.toJSON())}estimateStatisticsHistograms(t){const r=e(o.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){const r=i(o.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return r&&r.forEach(((t,s)=>{r.set(s,null==t?void 0:t.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(t){const r=t.srcPixelBlocks.map((t=>t?new o(t):null)),s=p(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo});if(!t.coefs)return s&&s.toJSON();const e=n(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation);return e&&e.toJSON()}async getProjectionOffsetGrid(t){const o=r.fromJSON(t.projectedExtent),e=r.fromJSON(t.srcBufferExtent);let i=null;t.datumTransformationStemps&&(i=new s({steps:t.datumTransformationStemps})),c(o.spatialReference,e.spatialReference,i)&&await f();const p=t.rasterTransform?l(t.rasterTransform):null;return d({...t,projectedExtent:o,srcBufferExtent:e,datumTransformation:i,rasterTransform:p})}}