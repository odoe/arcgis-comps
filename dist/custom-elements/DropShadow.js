import { T as u } from './index.js';
import { l } from './VertexArrayObject.js';
import { o as o$1 } from './Texture.js';
import { r } from './WGLContainer.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null);}draw(t,r$1,a){const{context:l,state:n,painter:u$1}=t,{materialManager:h}=u$1,p=this._programDesc,d=r$1.width,c=r$1.height,m=[Math.round(d/2),Math.round(c/2)],{blurRadius:_,offsetX:f,offsetY:B,color:g}=a,b=[u(f/2),u(B/2)];this._createOrResizeResources(t,d,c,m);const F=this._horizontalBlurFBO,w=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const x=this._layerFBOTexture;r$1.copyToTexture(0,0,d,c,0,0,x),this._quad||(this._quad=new r(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,m[0],m[1]);const T=this._quad;T.bind(),l.setBlendingEnabled(!1);const O=h.getProgram(t,p.blur,[{name:"radius",value:Math.ceil(_)}]);l.useProgram(O),l.bindFramebuffer(F),l.bindTexture(r$1.colorTexture,4),O.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),O.setUniform2fv("u_offset",b),O.setUniform1i("u_colorTexture",4),O.setUniform2fv("u_texSize",m),O.setUniform2fv("u_direction",s),O.setUniform1f("u_sigma",_),T.draw(),l.bindFramebuffer(w),l.bindTexture(F.colorTexture,5),O.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),O.setUniform2fv("u_offset",[0,0]),O.setUniform1i("u_colorTexture",5),O.setUniform2fv("u_direction",o),T.draw(),l.bindFramebuffer(r$1),l.setViewport(0,0,d,c);const v=h.getProgram(t,p.composite);l.useProgram(v),l.bindTexture(w.colorTexture,2),v.setUniform1i("u_blurTexture",2),l.bindTexture(x,3),v.setUniform1i("u_layerFBOTexture",3),v.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),T.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),T.unbind();}_createOrResizeResources(e,i,s,o){const{context:a}=e;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new l(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new l(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new o$1(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}));}}

export { a as DropShadow };