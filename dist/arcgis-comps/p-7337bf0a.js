import"./p-54e8960f.js";import"./p-7b6f6c18.js";import{o as t}from"./p-1dd7027e.js";import"./p-227a5838.js";class s{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(t,s,i){const{width:e,height:h}=s;this._createOrResizeResources(t,e,h);const{context:o,painter:p}=t,{amount:r}=i,a=o.gl,n=this._layerFBOTexture;o.bindFramebuffer(s),s.copyToTexture(0,0,e,h,0,0,n),o.setBlendingEnabled(!0),o.setStencilTestEnabled(!1),o.setDepthTestEnabled(!1),o.setClearColor(0,0,0,0),o.clear(a.COLOR_BUFFER_BIT),p.blitTexture(o,n,9728,r)}_createOrResizeResources(s,i,e){const{context:h}=s;this._layerFBOTexture&&this._size[0]===i&&this._size[1]===e||(this._size[0]=i,this._size[1]=e,this._layerFBOTexture?this._layerFBOTexture.resize(i,e):this._layerFBOTexture=new t(h,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:i,height:e}))}}export{s as Opacity}