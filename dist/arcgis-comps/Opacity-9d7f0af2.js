import './VertexArrayObject-2da47f5b.js';
import './jsxFactory-b8b7429b.js';
import { o } from './Texture-95288d63.js';
import './index-921bd636.js';
import './Graphic-75d1efd2.js';
import './JSONSupport-15eefdaf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this._size=[0,0];}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:l,painter:o}=e,{amount:a}=r,h=l.gl,n=this._layerFBOTexture;l.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,n),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),l.setClearColor(0,0,0,0),l.clear(h.COLOR_BUFFER_BIT),o.blitTexture(l,n,9728,a);}_createOrResizeResources(t,r,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new o(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}));}}

export { t as Opacity };
