import { l } from './VertexArrayObject-78033d70.js';
import './MapView-ac75aae8.js';
import './Texture-73a4a34c.js';
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
const i=5,s=[1,0],r=[0,1],o=[1,.8,.6,.4,.2],n=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class a{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(i),this._nMips=i,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null;}}draw(t,a,l){const{width:h,height:u}=a,{context:p,painter:m}=t,{materialManager:c}=m,d=p.gl,_=this._programDesc,{strength:g,radius:f,threshold:b}=l;this._quad||(this._quad=new r$1(p,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,h,u),p.setStencilTestEnabled(!1),p.setBlendingEnabled(!0),p.setBlendFunction(1,771),p.setStencilWriteMask(0);const F=this._quad;F.bind(),p.bindFramebuffer(this._intensityFBO);const B=c.getProgram(t,_.luminosityHighPass);p.useProgram(B),p.bindTexture(a.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",b),B.setUniform1f("u_smoothWidth",.01);const O=[Math.round(h/2),Math.round(u/2)];p.setViewport(0,0,O[0],O[1]),p.setClearColor(0,0,0,0),p.clear(d.COLOR_BUFFER_BIT),F.draw(),p.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let e=0;e<this._nMips;e++){const i=c.getProgram(t,_.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[e]}]);p.useProgram(i),p.bindTexture(T,e+1),i.setUniform1i("u_colorTexture",e+1),i.setUniform2fv("u_texSize",O),i.setUniform2fv("u_direction",s),p.setViewport(0,0,O[0],O[1]);const o=this._mipsFBOs[e];p.bindFramebuffer(o.horizontal),F.draw(),T=o.horizontal.colorTexture,p.bindFramebuffer(o.vertical),p.bindTexture(T,e+1),i.setUniform2fv("u_direction",r),F.draw(),T=o.vertical.colorTexture,O[0]=Math.round(O[0]/2),O[1]=Math.round(O[1]/2);}p.setViewport(0,0,h,u);const x=c.getProgram(t,_.composite,[{name:"nummips",value:i}]);p.bindFramebuffer(this._compositeFBO),p.useProgram(x),x.setUniform1f("u_bloomStrength",g),x.setUniform1f("u_bloomRadius",f),x.setUniform1fv("u_bloomFactors",o),x.setUniform3fv("u_bloomTintColors",n),p.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),p.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),p.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),p.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),p.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),F.draw(),p.bindFramebuffer(a),p.setBlendingEnabled(!0);const w=c.getProgram(t,_.blit);p.useProgram(w),p.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),p.setBlendFunction(1,1),F.draw(),F.unbind(),p.setBlendFunction(1,771),p.setStencilTestEnabled(!0);}_createOrResizeResources(e,i,s){const{context:r}=e;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===s)return;this._size[0]=i,this._size[1]=s;const o=[Math.round(i/2),Math.round(s/2)];this._compositeFBO?this._compositeFBO.resize(i,s):this._compositeFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:i,height:s}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new l(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2);}}

export { a as Bloom };