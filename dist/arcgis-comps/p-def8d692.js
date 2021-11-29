import{T as t,dd as e,de as i,t as s,r,df as o}from"./p-5420851c.js";import{r as n,s as a,o as h,f as l,c}from"./p-4d140ee3.js";const u=t.getLogger("esri.views.webgl.BufferObject");class f{constructor(t,e,i,s,r){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(n.Buffer,this),this._glName=this._context.gl.createBuffer(),a(this._context.gl),s&&this.setData(s,r)}static createIndex(t,e,i,s){return new f(t,34963,e,i,s)}static createVertex(t,e,i){return new f(t,34962,e,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){var t;null!=(t=this._context)&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(n.Buffer,this),this._context=null):this._glName&&u.warn("Leaked WebGL buffer object")}setData(t,s){if(!t)return;if("number"==typeof t){if(t<0&&u.error("Buffer size cannot be negative!"),this._size=t,34963===this.bufferType&&s)switch(this._indexType=s,this._size=t,s){case 5123:t*=2;break;case 5125:t*=4}}else{let s=t.byteLength;e(t)&&(s/=2,this._indexType=5123),i(t)&&(s/=4,this._indexType=5125),this._size=s}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const o=this._context.gl;o.bufferData(this.bufferType,t,this.usage),a(o),this._context.bindVAO(r)}setSubData(t,s=0,r=0,o=t.byteLength){if(!t)return;(s<0||s>=this._size)&&u.error("offset is out of range!");let n=s,h=r,l=o,c=t.byteLength;e(t)?(c/=2,n*=2,h*=2,l*=2):i(t)&&(c/=4,n*=4,h*=4,l*=4),void 0===o&&(o=c-1),r>=o&&u.error("end must be bigger than start!"),s+r-o>this._size&&u.error("An attempt to write beyond the end of the buffer!");const f=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const d=this._context.gl,p=ArrayBuffer.isView(t)?t.buffer:t,g=0===h&&l===t.byteLength?p:p.slice(h,l);d.bufferSubData(this.bufferType,n,g),a(d),this._context.bindVAO(f)}}class d{constructor(t,e){this._context=t,this._desc=e,this._context.instanceCounter.increment(n.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,e.internalFormat,e.width,e.height)}get descriptor(){return this._desc}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const s=this._context.gl;this._context.bindRenderbuffer(this),s.renderbufferStorage(s.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(n.Renderbuffer,this),this._context=null)}}function p(t,e){return t.vertexBuffers[e].size/function(t){return t[0].stride}(t.layout[e])}function g(t,e,i,s,r){const o=t.gl,n=t.capabilities.instancing;t.bindBuffer(i);for(const t of s){const i=e.get(t.name);void 0===i&&console.error(`There is no location for vertex attribute '${t.name}' defined.`),t.baseInstance&&!t.divisor&&console.error(`Vertex attribute '${t.name}' uses baseInstanceOffset without divisor.`);const s=(r||(0+t.baseInstance?t.baseInstance:0))*t.stride;if(t.count<=4)o.vertexAttribPointer(i,t.count,t.type,t.normalized,t.stride,t.offset+s),o.enableVertexAttribArray(i),t.divisor>0&&n&&n.vertexAttribDivisor(i,t.divisor);else if(9===t.count)for(let e=0;e<3;e++)o.vertexAttribPointer(i+e,3,t.type,t.normalized,t.stride,t.offset+12*e+s),o.enableVertexAttribArray(i+e),t.divisor>0&&n&&n.vertexAttribDivisor(i+e,t.divisor);else if(16===t.count)for(let e=0;e<4;e++)o.vertexAttribPointer(i+e,4,t.type,t.normalized,t.stride,t.offset+16*e+s),o.enableVertexAttribArray(i+e),t.divisor>0&&n&&n.vertexAttribDivisor(i+e,t.divisor);else console.error("Unsupported vertex attribute element count: "+t.count)}}function m(t,e,i,s){const r=t.gl,o=t.capabilities.instancing;t.bindBuffer(i);for(const t of s){const i=e.get(t.name);if(t.count<=4)r.disableVertexAttribArray(i),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i,0);else if(9===t.count)for(let e=0;e<3;e++)r.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i+e,0);else if(16===t.count)for(let e=0;e<4;e++)r.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i+e,0);else console.error("Unsupported vertex attribute element count: "+t.count)}t.unbindBuffer(34962)}function x(t){switch(t){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34837:return 12;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5}return 0}function _(t){if(s(t))return 0;if("descriptor"in t)return t.glName?_(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const i="hasMipmap"in t&&t.hasMipmap?1.3:1,r=t.width*t.height;return x(e)*r*i}const v=t.getLogger("esri.views.webgl.FrameBufferObject");class y{constructor(t,e,i=null,s=null){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...e},t.instanceCounter.increment(n.Framebuffer,this),r(i)){Array.isArray(i)||(i=[i]);for(let e=0;e<i.length;++e){var o,a;const s=i[e];let r;b(s)?(r=s.descriptor,this._colorAttachments.set(36064+e,s)):(r=s,this._colorAttachments.set(36064+e,new h(t,s))),0!==(null==(o=this._desc)?void 0:o.colorTarget)&&2!==(null==(a=this._desc)?void 0:a.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateColorAttachmentPoint(36064+e),this._validateTextureDimensions(r,this._desc)}}if(s instanceof d){var l;const t=null!=(l=this._desc.depthStencilTarget)?l:3;2===t?this._stencilAttachment=s:1===t||3===t?this._depthAttachment=s:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),w(s.descriptor,this._desc)}else if(r(s)){let t;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),b(s)?(this._depthStencilTexture=s,t=s.descriptor):this._depthStencilTexture=new h(this._context,s),this._validateTextureDimensions(t,this._desc)}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(n.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&b(t)?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return _(this.colorAttachment)+_(this.depthStencilAttachment)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&b(e)?e:null}framebufferTexture2D(t,e,i=36064,s=3553,r=0){e.framebufferTexture2D(e.FRAMEBUFFER,i,s,t,r)}attachColorTexture(t,e=36064){t&&(this._validateColorAttachmentPoint(e),this._validateTextureDimensions(t.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(t.glName,this._context.gl,e)),this._colorAttachments.set(e,t))}detachColorTexture(t=36064){const e=this._colorAttachments.get(t);if(b(e)){const i=e;return this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,t)),this._colorAttachments.delete(t),i}}attachDepthStencilTexture(t){if(s(t))return;const e=t.descriptor;34041!==e.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==e.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(e,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(t.glName,this._context.gl,l)),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,l)),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(s(t))return;const e=t.descriptor;if(34041!==e.internalFormat&&33189!==e.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),w(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===e.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferRenderbuffer(e.FRAMEBUFFER,1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;return e&&this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._depthAttachment=null,e}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,e,i,s,r,o,n){(t<0||e<0||r<0||o<0)&&console.error("Offsets cannot be negative!"),(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!");const a=this._desc,l=n.descriptor;3553!==n.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>a.width||e+s>a.height||r+i>l.width||o+s>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,u=c.bindTexture(n,h.TEXTURE_UNIT_FOR_UPDATES);c.bindFramebuffer(this),c.gl.copyTexSubImage2D(3553,0,r,o,t,e,i,s),c.bindTexture(u,h.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,s,r,o,n){(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,s,r,o,n)}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=3553){var e,i,s,r;const o=this._context.gl;if(this._initialized)return void o.bindFramebuffer(o.FRAMEBUFFER,this.glName);this._glName&&o.deleteFramebuffer(this._glName);const n=this._context,a=o.createFramebuffer(),l=this._desc,u=null!=(e=l.colorTarget)?e:1,f=null!=(i=l.width)?i:1,p=null!=(s=l.height)?s:1;if(o.bindFramebuffer(o.FRAMEBUFFER,a),0===this._colorAttachments.size)if(0===u)this._colorAttachments.set(36064,function(t,e,i){return new h(t,{target:i,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e.width,height:e.height})}(n,l,2===this.descriptor.colorTarget?34067:3553));else{const t=new d(n,{internalFormat:32854,width:f,height:p});this._colorAttachments.set(36064,t)}this._colorAttachments.forEach(((e,i)=>{e&&(b(e)?this.framebufferTexture2D(e.glName,o,i,t):o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,e.glName))}));const g=null!=(r=l.depthStencilTarget)?r:0;switch(g){case 1:case 3:this._depthAttachment||(this._depthAttachment=new d(n,{internalFormat:1===l.depthStencilTarget?33189:34041,width:f,height:p})),o.framebufferRenderbuffer(o.FRAMEBUFFER,1===g?o.DEPTH_ATTACHMENT:o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,this._depthAttachment.glName);break;case 2:this._stencilAttachment||(this._stencilAttachment=new d(n,{internalFormat:36168,width:f,height:p})),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.STENCIL_ATTACHMENT,o.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:this._depthStencilTexture||(n.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),this._depthStencilTexture=new h(n,{target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:f,height:p})),this.framebufferTexture2D(this._depthStencilTexture.glName,o,o.DEPTH_STENCIL_ATTACHMENT,t)}c()&&o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=a,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach(((t,e)=>{if(b(t))this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,e)),t.dispose();else if(t instanceof WebGLRenderbuffer){const i=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(i.FRAMEBUFFER,e,i.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t)}})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;this._depthAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._depthAttachment.dispose(),this._depthAttachment=null),this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,t,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateTextureDimensions(t,e){3553!==t.target&&34067!==t.target&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}_validateColorAttachmentPoint(t){if(-1===y._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;y._MAX_COLOR_ATTACHMENTS=t?this._context.gl.getParameter(t.MAX_COLOR_ATTACHMENTS):1}const e=t-36064;e+1>y._MAX_COLOR_ATTACHMENTS&&v.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${y._MAX_COLOR_ATTACHMENTS} color attachments`)}}function b(t){return"type"in t&&"texture"===t.type}function w(t,e){void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}y._MAX_COLOR_ATTACHMENTS=-1;const D=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var T,M={exports:{}};void 0!==(T=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(M.exports=T);const E=M.exports;var C,P={exports:{}};C=P,function(){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==t&&(C.exports=t)}();const A=P.exports;var S={exports:{}};!function(t){!function(){var e=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"];void 0!==e&&(t.exports=e)}()}(S);const F=S.exports;var k=999,L=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function U(){var t,e,i,s=0,r=0,o=k,n=[],a=[],h=1,l=0,c=0,u=!1,f=!1,d="";return function(x){return a=[],null!==x?function(x){var v;for(s=0,i=(d+=x).length;t=d[s],s<i;){switch(v=s,o){case 0:s="/"===t&&"*"===e?(n.push(t),p(n.join("")),o=k,s+1):(n.push(t),e=t,s+1);break;case 1:case 2:s=g();break;case 3:s=m();break;case 4:s="."===t||/[eE]/.test(t)?(n.push(t),o=5,e=t,s+1):"x"===t&&1===n.length&&"0"===n[0]?(o=11,n.push(t),e=t,s+1):/[^\d]/.test(t)?(p(n.join("")),o=k,s):(n.push(t),e=t,s+1);break;case 11:s=/[^a-fA-F0-9]/.test(t)?(p(n.join("")),o=k,s):(n.push(t),e=t,s+1);break;case 5:"f"===t&&(n.push(t),e=t,s+=1),s=/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(n.push(t),e=t,s+1):/[^\d]/.test(t)?(p(n.join("")),o=k,s):(n.push(t),e=t,s+1);break;case 9999:s=_();break;case 9:s=/[^\s]/g.test(t)?(p(n.join("")),o=k,s):(n.push(t),e=t,s+1);break;case k:n=n.length?[]:n,s="/"===e&&"*"===t?(c=r+s-1,o=0,e=t,s+1):"/"===e&&"/"===t?(c=r+s-1,o=1,e=t,s+1):"#"===t?(o=2,c=r+s,s):/\s/.test(t)?(o=9,c=r+s,s):(u=/\d/.test(t),f=/[^\w_]/.test(t),c=r+s,o=u?4:f?3:9999,s)}v!==s&&("\n"===d[v]?(l=0,++h):++l)}return r+=s,d=d.slice(s),a}(x.replace?x.replace(/\r\n/g,"\n"):x):(n.length&&p(n.join("")),o=10,p("(eof)"),a)};function p(t){t.length&&a.push({type:L[o],data:t,position:c,line:h,column:l})}function g(){return"\r"!==t&&"\n"!==t||"\\"===e?(n.push(t),e=t,s+1):(p(n.join("")),o=k,s)}function m(){if("."===e&&/\d/.test(t))return o=5,s;if("/"===e&&"*"===t)return o=0,s;if("/"===e&&"/"===t)return o=1,s;if("."===t&&n.length){for(;x(n););return o=5,s}if(";"===t||")"===t||"("===t){if(n.length)for(;x(n););return p(t),o=k,s+1}var i=2===n.length&&"="!==t;if(/[\w_\d\s]/.test(t)||i){for(;x(n););return o=k,s}return n.push(t),e=t,s+1}function x(t){for(var e,i,s=0;;){if(e=A.indexOf(t.slice(0,t.length+s).join("")),i=A[e],-1===e){if(s--+t.length>0)continue;i=t.slice(0,1).join("")}return p(i),c+=i.length,(n=n.slice(i.length)).length}}function _(){if(/[^\d\w_]/.test(t)){var i=n.join("");return o=E.indexOf(i)>-1?8:F.indexOf(i)>-1?7:6,p(n.join("")),o=k,s}return n.push(t),e=t,s+1}}const B=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function j(t,e){for(let i=e-1;i>=0;i--){const e=t[i];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function V(t,e,i,s){s=s||i;for(const r of t)if("ident"===r.type&&r.data===i)return s in e?e[s]++:e[s]=0,V(t,e,s+"_"+e[s],s);return i}function R(t,e,i="afterVersion"){function s(t,e){for(let i=e;i<t.length;i++){const e=t[i];if("operator"===e.type&&";"===e.data)return i}return null}const r={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let n=function(t){let e=-1,r=0,o=-1;for(let n=0;n<t.length;n++){const a=t[n];if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++r:a.data.match(/\#endif\s*.*/)&&--r),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===a.type&&/^#version/.test(a.data)&&(o=Math.max(o,n)),"afterPrecision"===i&&"keyword"===a.type&&"precision"===a.data){const e=s(t,n);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===r&&(e=n)}return e+1}(t);o(n-1)&&t.splice(n++,0,r);for(const i of e)t.splice(n++,0,i);o(n-1)&&o(n)&&t.splice(n,0,r)}function I(t,e,i,s="lowp"){R(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:s},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function O(t,e,i,s,r="lowp"){R(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:s.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function z(t,e){let i,s,r=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(i=o),"]"===e.data)){s=o;break}"integer"===e.type&&(r=parseInt(e.data,10))}return i&&s&&t.splice(i,s-i+1),r}function G(t,e){const i=function(t){return function(t){var e=U(),i=[];return(i=i.concat(e(t))).concat(e(null))}(t)}(t);if("300 es"===function(t,e="100",i="300 es"){const s=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const r of t)if("preprocessor"===r.type){const t=s.exec(r.data);if(t){const s=t[1].replace(/\s\s+/g," ");if(s===i)return s;if(s===e)return r.data="#version "+i,e;throw new Error("unknown glsl version: "+s)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))throw new Error("shader is already glsl 300 es");let s=null,r=null;const o={},n={};for(let t=0;t<i.length;++t){const a=i[t];switch(a.type){case"keyword":35633===e&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data=35633===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replace(/(2D|Cube|EXT)/g,"")),35632===e&&"gl_FragColor"===a.data&&(s||(s=V(i,o,"fragColor"),I(i,s,"vec4")),a.data=s),35632===e&&"gl_FragData"===a.data){const e=z(i,t+1),s=V(i,o,"fragData");O(i,s,"vec4",e,"mediump"),a.data=s}else 35632===e&&"gl_FragDepthEXT"===a.data&&(r||(r=V(i,o,"gl_FragDepth")),a.data=r);break;case"ident":if(D.indexOf(a.data)>=0){if(35633===e&&j(i,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in n||(n[a.data]=V(i,o,a.data)),a.data=n[a.data]}}}for(let t=i.length-1;t>=0;--t){const e=i[t];if("preprocessor"===e.type){const s=e.data.match(/\#extension\s+(.*)\:/);if(s&&s[1]&&B.indexOf(s[1].trim())>=0){const e=i[t+1];i.splice(t,e&&"whitespace"===e.type?2:1)}const r=e.data.match(/\#ifdef\s+(.*)/);r&&r[1]&&B.indexOf(r[1].trim())>=0&&(e.data="#if 1");const o=e.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&B.indexOf(o[1].trim())>=0&&(e.data="#if 0")}}return function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(i)}class N{constructor(t,e,i,s){this._context=t,this._locations=s,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),this._vShader=W(this._context,35633,e),this._fShader=W(this._context,35632,i),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(n.VertexShader,this),this._context.instanceCounter.increment(n.FragmentShader,this)}get glName(){if(r(this._glName))return this._glName;if(s(this._vShader))return null;const t=this._context.gl,e=t.createProgram();return t.attachShader(e,this._vShader),t.attachShader(e,this._fShader),this._locations.forEach(((i,s)=>t.bindAttribLocation(e,i,s))),t.linkProgram(e),c()&&!t.getProgramParameter(e,t.LINK_STATUS)&&console.error("Could not initialize shader\nVALIDATE_STATUS: "+t.getProgramParameter(e,t.VALIDATE_STATUS)+", gl error ["+t.getError()+"]infoLog: "+t.getProgramInfoLog(e)),this._glName=e,this._context.instanceCounter.increment(n.Program,this),e}dispose(){const t=this._context.gl;this._vShader&&(t.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(n.VertexShader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null,this._context.instanceCounter.decrement(n.FragmentShader,this)),this._glName&&(t.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(n.Program,this))}_getUniformLocation(t){return void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this.glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this._getUniformLocation(t)}setUniform1i(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.useProgram(this),this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1iv(t,e){const i=this._nameToUniform1v[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform1iv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=Array.from(e):q(e,i))}setUniform2iv(t,e){const i=this._nameToUniform2[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform2iv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=Array.from(e):q(e,i))}setUniform3iv(t,e){const i=this._nameToUniform3[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform3iv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=Array.from(e):q(e,i))}setUniform4iv(t,e){const i=this._nameToUniform4[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform4iv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=Array.from(e):q(e,i))}setUniform1f(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.useProgram(this),this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1fv(t,e){const i=this._nameToUniform1v[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform1fv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=Array.from(e):q(e,i))}setUniform2f(t,e,i){const s=this._nameToUniform2[t];void 0!==s&&e===s[0]&&i===s[1]||(this._context.useProgram(this),this._context.gl.uniform2f(this._getUniformLocation(t),e,i),void 0===s?this._nameToUniform2[t]=[e,i]:(s[0]=e,s[1]=i))}setUniform2fv(t,e){const i=this._nameToUniform2[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform2fv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=Array.from(e):q(e,i))}setUniform3f(t,e,i,s){const r=this._nameToUniform3[t];void 0!==r&&e===r[0]&&i===r[1]&&s===r[2]||(this._context.useProgram(this),this._context.gl.uniform3f(this._getUniformLocation(t),e,i,s),void 0===r?this._nameToUniform3[t]=[e,i,s]:(r[0]=e,r[1]=i,r[2]=s))}setUniform3fv(t,e){const i=this._nameToUniform3[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform3fv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=Array.from(e):q(e,i))}setUniform4f(t,e,i,s,r){const o=this._nameToUniform4[t];void 0!==o&&e===o[0]&&i===o[1]&&s===o[2]&&r===o[3]||(this._context.useProgram(this),this._context.gl.uniform4f(this._getUniformLocation(t),e,i,s,r),void 0===o?this._nameToUniform4[t]=[e,i,s,r]:(o[0]=e,o[1]=i,o[2]=s,o[3]=r))}setUniform4fv(t,e){const i=this._nameToUniform4[t];X(i,e)&&(this._context.useProgram(this),this._context.gl.uniform4fv(this._getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=Array.from(e):q(e,i))}setUniformMatrix3fv(t,e,i=!1,r=!1){const o=this._nameToUniformMatrix3[t];(r?o!==e:function(t,e){return!!s(t)||(9!==t.length?X(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])}(o,e))&&(this._context.useProgram(this),this._context.gl.uniformMatrix3fv(this._getUniformLocation(t),i,e),void 0===o?this._nameToUniformMatrix3[t]=Array.from(e):q(e,o))}setUniformMatrix4fv(t,e,i=!1){const r=this._nameToUniformMatrix4[t];(function(t,e){return!!s(t)||(16!==t.length?X(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(r,e)&&(this._context.useProgram(this),this._context.gl.uniformMatrix4fv(this._getUniformLocation(t),i,e),void 0===r?this._nameToUniformMatrix4[t]=Array.from(e):q(e,r))}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){}}function X(t,e){if(s(t)||t.length!==e.length)return!0;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!0;return!1}function W(t,e,i){const s="webgl2"===t.webglVersion?G(i,e):i,r=t.gl,o=r.createShader(e);return r.shaderSource(o,s),r.compileShader(o),r.getShaderParameter(o,r.COMPILE_STATUS)||(console.error("Compile error in ".concat(35633===e?"vertex":"fragment"," shader")),console.error(r.getShaderInfoLog(o)),console.error(function(t){let e=2;return t.replace(/\n/g,(()=>"\n"+function(t){return t>=1e3?t.toString():("  "+t).slice(-3)}(e++)+":"))}(s)),"webgl2"===t.webglVersion&&(console.log("Shader source before transpilation:"),console.log(i))),o}function q(t,e){for(let i=0;i<t.length;++i)e[i]=t[i]}const $=t.getLogger("esri.views.webgl.VertexArrayObject");class H{constructor(t,e,i,s,r=null){this._context=t,this._locations=e,this._layout=i,this._buffers=s,this._indexBuffer=r,this._glName=null,this._initialized=!1,t.instanceCounter.increment(n.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].size),r(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(this._context){if(this._glName){var e,i;const t=null==(e=this._context)||null==(i=e.capabilities)?void 0:i.vao;t?(t.deleteVertexArray(this._glName),this._glName=null):$.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer=o(this._indexBuffer)}this._context.instanceCounter.decrement(n.VAO,this),this._context=null}else(this._glName||t&&Object.getOwnPropertyNames(this._buffers).length>0)&&$.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||$.error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const i in t){const s=t[i];s||$.error("Vertex buffer is uninitialized!");const r=e[i];r||$.error("Vertex element descriptor is empty!"),g(this._context,this._locations,s,r)}r(i)&&(this._context.capabilities.vao?s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||$.error("Vertex buffer dictionary is empty!");for(const i in t){const s=t[i];s||$.error("Vertex buffer is uninitialized!"),m(this._context,this._locations,s,e[i])}r(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}export{d as a,N as e,H as f,f as h,y as l,x as o,p as r}