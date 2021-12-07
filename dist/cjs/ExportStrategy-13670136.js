'use strict';

const request = require('./messageBundle-8be88d04.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');
const Bitmap = require('./Bitmap-668e0fbf.js');
const TileStore = require('./TileStore-1f212ad3.js');
const TileKey = require('./TileKey-d800cfb2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function r(t,o){const r=n(o.rotation),u=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),[s,c]=o.size;return t[0]=Math.round(c*a+s*u),t[1]=Math.round(c*u+s*a),t}function u$1(t,n,o,r){const[u,a]=n,[s,c]=r,i=.5*o;return t[0]=u-i*s,t[1]=a-i*c,t[2]=u+i*s,t[3]=a+i*c,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=aaBoundingRect.u(),g=[0,0],f=new TileKey.e(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let y=class extends request.p{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=request.z$1((async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,o=request.S$3(i.spatialReference),r$1=this.hidpi?t.pixelRatio:1,s=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];s?(g[0]=i.worldScreenWidth,g[1]=i.size[1]):this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):r(g,i);const a=Math.floor(g[0]*r$1)>this.imageMaxWidth||Math.floor(g[1]*r$1)>this.imageMaxHeight,n=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),l=!this.imageNormalizationSupported&&n,d=!a&&!l,h=this.imageRotationSupported?i.rotation:0;if(d){const t=s?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,g,t,i.resolution,h,r$1,e);}else {let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);l&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,h,r$1,e);}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove();}));for(const e of t)this.container.addChild(e),e.fadeIn();}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3);}destroy(){this.bitmaps=[];}get updating(){return !this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender();}}async _export(t,e,i,o,r,s){const a=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:o,pixelRatio:r,signal:s}),p=new Bitmap.g(a,"additive");return p.x=t.xmin,p.y=t.ymax,p.resolution=t.width/e,p.rotation=o,p.pixelRatio=r,p}async _singleExport(t,e,i,o,r,a,p){u$1(u,i,o,e);const n=new request.M(u[0],u[1],u[2],u[3],t.spatialReference);return [await this._export(n,e[0],e[1],r,a,p)]}_tiledExport(t,e,i,o,r){const a=TileInfo.j.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),p=new TileStore.h(a),m=p.getTileCoverage(t);if(!m)return null;const l=[];return m.forEach(((a,n,m,d)=>{f.set(a,n,m,d),p.getTileBounds(u,f);const h=new request.M(u[0],u[1],u[2],u[3],t.spatialReference);l.push(this._export(h,e,e,i,o,r));})),Promise.all(l)}};request.e([request.d()],y.prototype,"_imagePromise",void 0),request.e([request.d()],y.prototype,"bitmaps",void 0),request.e([request.d()],y.prototype,"container",void 0),request.e([request.d()],y.prototype,"fetchSource",void 0),request.e([request.d()],y.prototype,"hidpi",void 0),request.e([request.d()],y.prototype,"imageMaxWidth",void 0),request.e([request.d()],y.prototype,"imageMaxHeight",void 0),request.e([request.d()],y.prototype,"imageRotationSupported",void 0),request.e([request.d()],y.prototype,"imageNormalizationSupported",void 0),request.e([request.d()],y.prototype,"requestUpdate",void 0),request.e([request.d()],y.prototype,"updating",null),y=request.e([request.i("esri.views.2d.layers.support.ExportStrategy")],y);const S=y;

exports.S = S;
