import{eF as t,e as s,d as i,i as e,p as o,b5 as a,o as n,c as h,hu as r,u as c,d_ as u}from"./p-5420851c.js";import{g as l}from"./p-b3b13eb5.js";const d=Math.PI/180;function p(t){return t*d}const f=c(),M=[0,0],g=new t(0,0,0,0);let m=class extends o{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=a((async(t,s)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,e=u(i.spatialReference),o=this.hidpi?t.pixelRatio:1,a=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];a?(M[0]=i.worldScreenWidth,M[1]=i.size[1]):this.imageRotationSupported?(M[0]=i.size[0],M[1]=i.size[1]):function(t,s){const i=p(s.rotation),e=Math.abs(Math.cos(i)),o=Math.abs(Math.sin(i)),[a,n]=s.size;t[0]=Math.round(n*o+a*e),t[1]=Math.round(n*e+a*o)}(M,i);const n=Math.floor(M[0]*o)>this.imageMaxWidth||Math.floor(M[1]*o)>this.imageMaxHeight,h=!this.imageNormalizationSupported&&e&&(i.extent.xmin<e.valid[0]||i.extent.xmax>e.valid[1]),r=this.imageRotationSupported?i.rotation:0;if(n||h){let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,r,o,s)}else this._imagePromise=this._singleExport(i,M,a?i.paddedViewState.center:i.center,i.resolution,r,o,s);return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const s of this.container.children)t.includes(s)||s.fadeOut().then((()=>{s.remove()}));for(const s of t)this.container.addChild(s),s.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const s of this.container.children){if(!s.visible||!s.stage)return;t(s),s.invalidateTexture(),s.requestRender()}}async _export(t,s,i,e,o,a){const n=await this.fetchSource(t,Math.floor(s*o),Math.floor(i*o),{rotation:e,pixelRatio:o,signal:a}),h=new l(n,"additive");return h.x=t.xmin,h.y=t.ymax,h.resolution=t.width/s,h.rotation=e,h.pixelRatio=o,h}async _singleExport(t,s,i,e,o,a,h){!function(t,s,i,e){const[o,a]=s,[n,h]=e,r=.5*i;t[0]=o-r*n,t[1]=a-r*h,t[2]=o+r*n,t[3]=a+r*h}(f,i,e,s);const r=new n(f[0],f[1],f[2],f[3],t.spatialReference);return[await this._export(r,s[0],s[1],o,a,h)]}_tiledExport(t,s,i,e,o){const a=h.create({size:s,spatialReference:t.spatialReference,scales:[t.scale]}),c=new r(a),u=c.getTileCoverage(t);if(!u)return null;const l=[];return u.forEach(((a,h,r,u)=>{g.set(a,h,r,u),c.getTileBounds(f,g);const d=new n(f[0],f[1],f[2],f[3],t.spatialReference);l.push(this._export(d,s,s,i,e,o))})),Promise.all(l)}};s([i()],m.prototype,"_imagePromise",void 0),s([i()],m.prototype,"bitmaps",void 0),s([i()],m.prototype,"container",void 0),s([i()],m.prototype,"fetchSource",void 0),s([i()],m.prototype,"hidpi",void 0),s([i()],m.prototype,"imageMaxWidth",void 0),s([i()],m.prototype,"imageMaxHeight",void 0),s([i()],m.prototype,"imageRotationSupported",void 0),s([i()],m.prototype,"imageNormalizationSupported",void 0),s([i()],m.prototype,"requestUpdate",void 0),s([i()],m.prototype,"updating",null),m=s([e("esri.views.2d.layers.support.ExportStrategy")],m);const v=m;export{v as S}