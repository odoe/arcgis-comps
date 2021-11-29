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
const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null);}draw(e,r,s){const{context:i}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new r$1(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,r,n):this._radialBlur(e,r),o.unbind();}_gaussianBlur(e,t,i){const{context:a,state:n,painter:o,pixelRatio:u}=e,{size:l}=n,{materialManager:d}=o,b=this._programDesc,p=this._quad,c=[Math.round(u*l[0]),Math.round(u*l[1])],h=this._blurFBO,g=d.getProgram(e,b.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.useProgram(g),a.setBlendingEnabled(!1),a.bindFramebuffer(h),a.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",r),g.setUniform1f("u_sigma",i),p.draw(),a.bindFramebuffer(t),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(h.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",s),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0);}_radialBlur(e,t){const{context:r,painter:s}=e,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const u=i.getProgram(e,a.radialBlur);r.useProgram(u),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const l=i.getProgram(e,a.blit);r.useProgram(l),r.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw();}_createOrResizeResources(t){const{context:r,state:s,pixelRatio:i}=t,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new l(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}));}}

export { i as Blur };
