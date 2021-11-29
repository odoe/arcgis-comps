import{l as t}from"./p-def8d692.js";import"./p-5420851c.js";import"./p-4d140ee3.js";import{r as s}from"./p-81f41410.js";import"./p-53bb6ab4.js";import"./p-47e1bd73.js";import"./p-54db165f.js";import"./p-4b2b4a33.js";import"./p-b392deaf.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-13d3a443.js";import"./p-8d730a3d.js";import"./p-e2fe661c.js";import"./p-4c6040da.js";import"./p-97ec6ae5.js";const i=[1,0],e=[0,1];class r{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,i,e){const{context:r}=t,{type:a,radius:p}=e;if(0===p)return;this._createOrResizeResources(t),this._quad||(this._quad=new s(r,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,i,p):this._radialBlur(t,i),o.unbind()}_gaussianBlur(t,s,r){const{context:a,state:p,painter:o,pixelRatio:h}=t,{size:n}=p,{materialManager:u}=o,c=this._programDesc,l=this._quad,d=[Math.round(h*n[0]),Math.round(h*n[1])],m=this._blurFBO,g=u.getProgram(t,c.gaussianBlur,[{name:"radius",value:Math.ceil(r)}]);a.useProgram(g),a.setBlendingEnabled(!1),a.bindFramebuffer(m),a.bindTexture(s.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",d),g.setUniform2fv("u_direction",i),g.setUniform1f("u_sigma",r),l.draw(),a.bindFramebuffer(s),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(m.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",e),l.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0)}_radialBlur(t,s){const{context:i,painter:e}=t,{materialManager:r}=e,a=this._programDesc,p=this._quad,o=this._blurFBO;i.bindFramebuffer(o);const h=r.getProgram(t,a.radialBlur);i.useProgram(h),i.setBlendingEnabled(!1),i.bindTexture(s.colorTexture,4),h.setUniform1i("u_colorTexture",4),p.draw(),i.bindFramebuffer(s),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const n=r.getProgram(t,a.blit);i.useProgram(n),i.bindTexture(o.colorTexture,5),n.setUniform1i("u_texture",5),i.setBlendFunction(1,771),p.draw()}_createOrResizeResources(s){const{context:i,state:e,pixelRatio:r}=s,{size:a}=e,p=Math.round(r*a[0]),o=Math.round(r*a[1]);this._blurFBO&&this._size[0]===p&&this._size[1]===o||(this._size[0]=p,this._size[1]=o,this._blurFBO?this._blurFBO.resize(p,o):this._blurFBO=new t(i,{colorTarget:0,depthStencilTarget:0,width:p,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:p,height:o}))}}export{r as Blur}