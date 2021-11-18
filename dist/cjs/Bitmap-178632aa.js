'use strict';

const request = require('./messageBundle-312ceb47.js');
const mat3 = require('./mat3-1bc0ab17.js');
const MapView = require('./MapView-dbdeb77b.js');
const vec2f32 = require('./vec2f32-29a5eecf.js');
const Container = require('./Container-cb837708.js');
const Texture = require('./Texture-272da42e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i;}get width(){return request.r(this.pixelBlock)?this.pixelBlock.width:0}get height(){return request.r(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if(request.t(i))return;const l=this.filter({pixelBlock:i});if(request.t(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0);}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return request.t(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return t&&"render"in t}function l(t){return t&&!("render"in t)}function x(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function _(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new Texture.o(t,s)}class g extends Container.a{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this);}destroy(){this._texture&&(this._texture.dispose(),this._texture=null);}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t;}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture();}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t;}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context);}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender());}_createTransforms(){return {dvs:MapView.n()}}setTransform(t){const n=mat3.r(this.transforms.dvs),[o,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;mat3.M(n,n,vec2f32.t(o,a)),mat3.M(n,n,vec2f32.t(c/2,l/2)),mat3.h(n,n,-x),mat3.M(n,n,vec2f32.t(-c/2,-l/2)),mat3.b(n,n,vec2f32.t(c,l)),mat3.i(this.transforms.dvs,t.displayViewMat3,n);}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode));}bind(t,e){this._texture&&t.bindTexture(this._texture,e);}updateTexture(e){var i$1;if(!this.stage)return null==(i$1=this._texture)||i$1.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=_(e,this.sourceWidth,this.sourceHeight):this._texture=_(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),c(s))if(s instanceof i){const e=s.getRenderedRasterPixels();this._texture.setData(request.r(e)?e.renderedRasterPixels:null);}else this._texture.setData(x(s));else l(s)&&this._texture.setData(s);this.ready();}else this._texture.setData(null);}onAttach(){this.invalidateTexture();}onDetach(){this.invalidateTexture();}}

exports.g = g;
exports.i = i;
