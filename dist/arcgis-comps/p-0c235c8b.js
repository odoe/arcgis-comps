import{u as p}from"./p-fb38a9d0.js";import{l as t}from"./p-19bc1e3d.js";import"./p-e58503d5.js";import{o as s}from"./p-0bb84768.js";import{r as i}from"./p-1676d4c7.js";import"./p-53bb6ab4.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-47e1bd73.js";import"./p-09dd2137.js";import"./p-e3500fdc.js";import"./p-ad14ca1b.js";import"./p-6484267b.js";import"./p-400ca3dc.js";import"./p-efbca0ca.js";import"./p-9b7a2176.js";import"./p-e654504b.js";import"./p-0eb619a6.js";import"./p-4d17d2cd.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-b5b00e38.js";import"./p-a9a30646.js";import"./p-765e6c28.js";import"./p-b79fcce3.js";import"./p-e94b450b.js";import"./p-7731c620.js";import"./p-5d962998.js";import"./p-1189fa83.js";import"./p-37058f88.js";import"./p-3e39c093.js";import"./p-8747982c.js";import"./p-7a5bfd29.js";import"./p-7d081d01.js";import"./p-54330161.js";import"./p-93765525.js";import"./p-8bc9b36a.js";import"./p-7a658388.js";import"./p-f94762ac.js";import"./p-ea916a39.js";import"./p-8a919d07.js";import"./p-c048b814.js";import"./p-afac6fb2.js";import"./p-01e5a461.js";import"./p-ca295674.js";import"./p-41f2b2dd.js";import"./p-612a2c14.js";import"./p-d443df87.js";import"./p-7ca40eac.js";import"./p-9087b4d3.js";import"./p-c1cd5521.js";import"./p-ca4492df.js";import"./p-9d34911e.js";import"./p-182bb5be.js";import"./p-db87794e.js";import"./p-2db4840f.js";import"./p-bba8b671.js";import"./p-5e833dfc.js";import"./p-a131049b.js";import"./p-a2324023.js";import"./p-dc852195.js";import"./p-ff2962f5.js";import"./p-da9e7ba9.js";import"./p-a8f0aa27.js";import"./p-4a96de15.js";import"./p-5032dfbd.js";import"./p-a87cccba.js";import"./p-dae095dd.js";import"./p-0e784e4d.js";import"./p-dbdf15fc.js";import"./p-e0d9ff4c.js";import"./p-08e5f531.js";import"./p-dfc6337f.js";import"./p-9f1c2d50.js";import"./p-6b2eb7a7.js";import"./p-889f7a78.js";import"./p-1f81b35d.js";import"./p-81b9df84.js";import"./p-5ce39624.js";import"./p-e9bae5e9.js";import"./p-b0565d49.js";import"./p-51a17e75.js";import"./p-d208934e.js";import"./p-480e5606.js";import"./p-22c9f19c.js";import"./p-c096b5df.js";import"./p-da33e926.js";import"./p-a24f7752.js";import"./p-ccdb8e80.js";import"./p-4a6dc5e4.js";import"./p-6a92ecb9.js";import"./p-1ab449fc.js";import"./p-a6c8fb32.js";import"./p-0edb3309.js";import"./p-e8160b60.js";import"./p-2e8ad983.js";import"./p-e3270d48.js";import"./p-e44bd0a6.js";import"./p-fe68aab5.js";import"./p-c6970847.js";import"./p-de86b3c9.js";import"./p-37d3434c.js";import"./p-120b7410.js";import"./p-b1eff69d.js";import"./p-612de336.js";import"./p-91fe06d4.js";import"./p-ab0e9273.js";import"./p-15a9486c.js";import"./p-2ae44317.js";import"./p-9f58a277.js";import"./p-9e860e7b.js";import"./p-f3659a34.js";import"./p-ca657fcf.js";import"./p-b312c1fd.js";import"./p-b8beb0d3.js";import"./p-2a99994a.js";import"./p-76f37e40.js";import"./p-eee9ef50.js";import"./p-6ded4c02.js";import"./p-1e473dab.js";import"./p-d1d9dbe4.js";import"./p-d57f9971.js";import"./p-b9aa4901.js";import"./p-e6fe5d89.js";import"./p-56ed1c7a.js";import"./p-746a9d8f.js";import"./p-db4d63dc.js";import"./p-b392deaf.js";import"./p-4414d64f.js";import"./p-a617738c.js";import"./p-b9c93bb2.js";import"./p-f971b161.js";import"./p-1c2ff3a7.js";import"./p-6fe4db61.js";const o=[1,0],r=[0,1];class e{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(t,s,e){const{context:m,state:a,painter:j}=t,{materialManager:d}=j,c=this._programDesc,b=s.width,f=s.height,h=[Math.round(b/2),Math.round(f/2)],{blurRadius:n,offsetX:l,offsetY:u,color:g}=e,w=[p(l/2),p(u/2)];this._createOrResizeResources(t,b,f,h);const _=this._horizontalBlurFBO,M=this._verticalBlurFBO;m.setStencilWriteMask(0),m.setStencilTestEnabled(!1),m.setDepthWriteEnabled(!1),m.setDepthTestEnabled(!1);const x=this._layerFBOTexture;s.copyToTexture(0,0,b,f,0,0,x),this._quad||(this._quad=new i(m,[-1,-1,1,-1,-1,1,1,1])),m.setViewport(0,0,h[0],h[1]);const T=this._quad;T.bind(),m.setBlendingEnabled(!1);const F=d.getProgram(t,c.blur,[{name:"radius",value:Math.ceil(n)}]);m.useProgram(F),m.bindFramebuffer(_),m.bindTexture(s.colorTexture,4),F.setUniformMatrix3fv("u_displayViewMat3",a.displayMat3),F.setUniform2fv("u_offset",w),F.setUniform1i("u_colorTexture",4),F.setUniform2fv("u_texSize",h),F.setUniform2fv("u_direction",o),F.setUniform1f("u_sigma",n),T.draw(),m.bindFramebuffer(M),m.bindTexture(_.colorTexture,5),F.setUniformMatrix3fv("u_displayViewMat3",a.displayMat3),F.setUniform2fv("u_offset",[0,0]),F.setUniform1i("u_colorTexture",5),F.setUniform2fv("u_direction",r),T.draw(),m.bindFramebuffer(s),m.setViewport(0,0,b,f);const y=d.getProgram(t,c.composite);m.useProgram(y),m.bindTexture(M.colorTexture,2),y.setUniform1i("u_blurTexture",2),m.bindTexture(x,3),y.setUniform1i("u_layerFBOTexture",3),y.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),T.draw(),m.setBlendingEnabled(!0),m.setStencilTestEnabled(!0),m.setBlendFunction(1,771),T.unbind()}_createOrResizeResources(p,i,o,r){const{context:e}=p;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===o||(this._size[0]=i,this._size[1]=o,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(r[0],r[1]):this._horizontalBlurFBO=new t(e,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(r[0],r[1]):this._verticalBlurFBO=new t(e,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,o):this._layerFBOTexture=new s(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:o}))}}export{e as DropShadow}