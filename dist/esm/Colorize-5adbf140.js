import './VertexArrayObject-78033d70.js';
import './MapView-ac75aae8.js';
import { o } from './Texture-73a4a34c.js';
import { r as r$1 } from './WGLContainer-42105821.js';
import './index-b157fcf2.js';
import './definitions-6a5ca2d9.js';
import './Utils-7fb1778c.js';
import './ShaderCompiler-93f6243b.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-a9776b0a.js';
import './pixelUtils-9079607d.js';
import './Container-8507ec1d.js';
import './EffectList-bba3153e.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:o,painter:a}=e,{materialManager:n}=a,l=this._programDesc,c=this._quad,u=r.colorMatrix;c.bind();const h=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const p=n.getProgram(e,l);o.useProgram(p),o.bindTexture(h,2),p.setUniformMatrix4fv("u_coefficients",u),p.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind();}_createOrResizeResources(r,s,i){const{context:o$1}=r;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===i||(this._size[0]=s,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(s,i):this._layerFBOTexture=new o(o$1,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:i}),this._quad||(this._quad=new r$1(o$1,[-1,-1,1,-1,-1,1,1,1])));}}

export { r as Colorize };
