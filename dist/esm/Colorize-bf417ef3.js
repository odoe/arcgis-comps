import './VertexArrayObject-30b0d262.js';
import './MapView-2c43b6d4.js';
import { o } from './Texture-521e6007.js';
import { r as r$1 } from './WGLContainer-222ab03f.js';
import './index-41925fe8.js';
import './definitions-6a5ca2d9.js';
import './Utils-c57a8ada.js';
import './ShaderCompiler-99aad823.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-baaa6a67.js';
import './pixelUtils-9059d737.js';
import './Container-1cf746dd.js';
import './EffectList-02a3200c.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:o,painter:a}=e,{materialManager:n}=a,l=this._programDesc,c=this._quad,u=r.colorMatrix;c.bind();const h=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const p=n.getProgram(e,l);o.useProgram(p),o.bindTexture(h,2),p.setUniformMatrix4fv("u_coefficients",u),p.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind();}_createOrResizeResources(r,s,i){const{context:o$1}=r;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===i||(this._size[0]=s,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(s,i):this._layerFBOTexture=new o(o$1,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:i}),this._quad||(this._quad=new r$1(o$1,[-1,-1,1,-1,-1,1,1,1])));}}

export { r as Colorize };
