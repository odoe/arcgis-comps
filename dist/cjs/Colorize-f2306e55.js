'use strict';

require('./VertexArrayObject-79d493bc.js');
require('./MapView-1726f571.js');
const Texture = require('./Texture-81e2ece6.js');
const WGLContainer = require('./WGLContainer-5f61b6fe.js');
require('./index-fde8502c.js');
require('./definitions-b4888cc6.js');
require('./Utils-e5a61fef.js');
require('./ShaderCompiler-c2546df1.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-7ad63f3d.js');
require('./pixelUtils-d4b82358.js');
require('./Container-16ae77e1.js');
require('./EffectList-c8b0929b.js');
require('./earcut-d5562923.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:o,painter:a}=e,{materialManager:n}=a,l=this._programDesc,c=this._quad,u=r.colorMatrix;c.bind();const h=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const p=n.getProgram(e,l);o.useProgram(p),o.bindTexture(h,2),p.setUniformMatrix4fv("u_coefficients",u),p.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind();}_createOrResizeResources(r,s,i){const{context:o}=r;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===i||(this._size[0]=s,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(s,i):this._layerFBOTexture=new Texture.o(o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:i}),this._quad||(this._quad=new WGLContainer.r(o,[-1,-1,1,-1,-1,1,1,1])));}}

exports.Colorize = r;
