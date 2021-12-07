import { m as a, c as s, Q as E, b as d, A as r, bo as s$1 } from './messageBundle-f75b4090.js';
import { J, a as j, o, d as d$1, z, u, e, q } from './mathUtils-e16f9389.js';
import { i as i$1 } from './reactiveUtils-8f9c3a3d.js';
import { n } from './common-d5b993de.js';
import { j as j$1 } from './intersectorUtils-8d04b3d1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(e){return new Promise((t=>import('./vxlLayer-d6466e71.js').then((e=>e.v)).then((({default:n})=>{const r=n({locateFile:i,preinitializedWebGLContext:e,onRuntimeInitialized:()=>t(r)});})))).catch((e=>Promise.reject(e)))}function i(t){return a(`esri/libs/vxl/${t}`)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=s.getLogger("esri.layers.VoxelWasmPerScene");class p{constructor(e){this._halfIntTexturesAvailable=!1,this._useDepthPass=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=0,this._renderSlot=3,this._rctx=null,this._renderTargetToRestore=null,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._dbgFlags.add(4),this._view=e,this.initialize();}get canRender(){return !!this._vxl&&"local"===this._view.viewingMode}dbg(e,t){this._dbgFlags.has(e)&&(4===e?m.error(t):m.warn(t));}removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this.dbg(1,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1;}initialize(){this.dbg(1,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=i$1((()=>this._view.ready),(e=>{e&&"local"===this._view.viewingMode?(this.dbg(1,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this.dbg(1,"view ready status changed, not ready or not a local view!"),this.removeRenderPlugin());}),{initial:!0}),this._qualityWatchHandle=i$1((()=>{var e;return null==(e=this._view)?void 0:e.qualityProfile}),(e=>{this.dbg(3,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this.toWasmQuality(e));}),{initial:!0}),this._timeExtentWatchHandle=i$1((()=>{var e;return null==(e=this._view)?void 0:e.timeExtent}),(()=>{if(this._vxl){var e;const t=this._getTimeArgs(null==(e=this._view)?void 0:e.timeExtent);this.dbg(3,"sceneView timeExtent changed to useTime="+t.useTime+" st="+t.startTime+" et="+t.endTime),this._vxl.set_scene_time_extent(t.startTime,t.endTime,t.useTime),this._renderPluginContext.requestRender();}}),{initial:!0});}initializeRenderContext(e){this.dbg(1,"--initializeRenderContext--");const t=e.renderContext.rctx;"webgl2"===t.webglVersion?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this.initializeWasm(t.gl)):this.dbg(4,"WebGL 1 context only!");}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this.dbg(1,"--uninitializeRenderContext--");}restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!!!this._rctx)return void this.dbg(4,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const t=this._renderTargetToRestore.viewport;this._rctx.setViewport(t.x,t.y,t.width,t.height);}bindPreviousDepthToSlot(e,t){const s=!!this._rctx,i=!!this._renderTargetToRestore;if(!s||!i)return 0;const r=this._renderTargetToRestore.fbo.depthStencilTexture;return r?(0===t?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(r,e,!0),1):(this.dbg(4,"no depth/stencil texture exists!"),0)}setBlendState(e,t,s,i){this._rctx?(this._rctx.setBlendingEnabled(1===e),this._rctx.setBlendFunction(t,s),this._rctx.setBlendEquation(i)):this.dbg(4,"setBlendState callback has no rendering context!");}setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this.dbg(4,"setFrontFace callback has no rendering context!");}setDepthStencilStateFunction(e,t,s){this._rctx?(this._rctx.setDepthFunction(s),this._rctx.setDepthTestEnabled(1===e),this._rctx.setDepthWriteEnabled(1===t),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(519,0,255),this._rctx.setStencilOpSeparate(1028,7680,7682,7680),this._rctx.setStencilOpSeparate(1029,7680,7683,7680)):this.dbg(4,"setDepthStencilStateFunction callback has no rendering context!");}setRasterizerState(e){if(this._rctx)switch(e){case 1:this._rctx.setFaceCullingEnabled(!1);break;case 3:this._rctx.setCullFace(1029),this._rctx.setFaceCullingEnabled(!0);break;case 2:this._rctx.setCullFace(1028),this._rctx.setFaceCullingEnabled(!0);}else this.dbg(4,"setRasterizerState callback has no rendering context!");}setViewport(e,t,s,i){this._rctx?this._rctx.setViewport(e,t,s,i):this.dbg(4,"setViewport callback has no rendering context!");}_syncRequestsResponses(){this._layers.forEach(((t,s)=>{const i=[];t.responses.forEach(((e,t)=>{i.push(t),this.dbg(2,"responding for requestID:"+t+" size:"+e.size),this._vxl.respond(s,t,e);}));const r=t.responses;for(const e of i)r.delete(e);const a=this._vxl.get_new_requests(s),l=t.abortController.signal;for(const o in a){t.outstandingRequestCount+=1,1===t.outstandingRequestCount&&t.layerView.updatingFlagChanged();const s=a[o],i={responseType:"array-buffer",signal:l};this.dbg(2,"making requestID:"+o+" url:"+s.url),E(s.url,i).then((e=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),this.dbg(2,"have response for requestID:"+o);let i=0;if(e.data.byteLength>0){i=this._vxl._malloc(e.data.byteLength);const t=new Uint8Array(this._vxl.HEAPU8.buffer,i,e.data.byteLength),s=new Uint8Array(e.data);for(let i=0;i<e.data.byteLength;++i)t[i]=s[i];}r.set(+o,{type:s.type,ptr:i,size:e.data.byteLength,success:!0});})).catch((e=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),d(e)||(this.dbg(4,`requestID:${o} failed, error=${e.toString()}`),r.set(+o,{type:s.type,ptr:0,size:0,success:!1}));}));}}));}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far);}isUpdating(e){return !(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0}setEnabled(e,t){this._layers.forEach(((s,i)=>{s.layerView===e&&(this._vxl.set_enabled(i,t),this._renderPluginContext.requestRender());}));}setSlices(e,t){const s={mask:2,slices:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,s,!0)}setDynamicSections(e,t){const s={mask:4,dynamicSections:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,s,!0)}setStaticSections(e,t){const s={mask:1,staticSections:t};return this._doMaskedUIUpdate(e,s,!0)}setCurrentVariable(e,t){const s={mask:1024,currentVariable:t};return this._doMaskedUIUpdate(e,s,!0)}setRenderMode(e,t){const s={mask:8192,renderMode:t};return this._doMaskedUIUpdate(e,s,!0)}_doMaskedUIUpdate(e,t,s){if(!this._vxl)return !1;let i=!1;return this._layers.forEach(((s,r)=>{if(s.layerView===e){const e={str:JSON.stringify(t),byteCount:0,ptr:0,isReusable:!1};this._AllocateBlock(e)&&(i=1===this._vxl.handle_masked_ui_update(r,e.ptr,e.byteCount),e.isReusable||this._vxl._free(e.ptr));}})),i&&s&&this._renderPluginContext.requestRender(),i}addVoxelLayer(e){if(!this._vxl){const t={layerView:e,resolveCallback:null,rejectCallback:null},s=new Promise(((e,s)=>{t.resolveCallback=e,t.rejectCallback=s;}));return this._newLayers.push(t),s}const t=this._addVoxelLayer(e);return t<0?Promise.reject(-1):Promise.resolve(t)}removeVoxelLayer(e){if(!this._vxl){const t=this._newLayers.findIndex((t=>e===t.layerView));t>=0&&(this._newLayers[t].resolveCallback(-1),this._newLayers.splice(t,1));const s=this._newLayers.length;return 0===s&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),s}let t=-1;this._layers.forEach(((s,i)=>{s.layerView===e&&(t=i,s.abortController.abort(),this._vxl.remove_layer(t));})),t>=0&&this._layers.delete(t);const s=this._layers.size;return 0===s&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),s}_getBlockSize(e){for(const t of this._wasmMemBlockSizes)if(e<t)return t;return -1}_AllocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const t=this._getBlockSize(e.byteCount);return t<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(t),0===e.ptr&&(e.ptr=this._vxl._malloc(t),this._wasmMemBlocks.set(t,e.ptr))),0!==e.ptr&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let t=-Number.MAX_VALUE,s=Number.MAX_VALUE,r$1=!1;return r(e)&&(e.isAllTime?r$1=!0:(r(e.start)&&(r$1=!0,t=e.start.getTime()/1e3),r(e.end)&&(r$1=!0,s=e.end.getTime()/1e3))),{startTime:t,endTime:s,useTime:r$1}}_addVoxelLayer(e){var t;const s=e.layer;let i=-1;const r=s.getConfiguration();if(r.length<1)return -1;const n={str:r,byteCount:0,ptr:0,isReusable:!1};if(!this._AllocateBlock(n))return -1;const a=this._getTimeArgs(null==(t=this._view)?void 0:t.timeExtent),l=this._view.spatialReference.isWGS84&&s.spatialReference.isWGS84?111319.49079327357:1;if(i=this._vxl.add_layer(s.serviceRoot,n.ptr,n.byteCount,l,l,a.startTime,a.endTime,a.useTime),n.isReusable||this._vxl._free(n.ptr),i>=0){const t=new AbortController;if(this._layers.set(i,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:t}),!this._halfIntTexturesAvailable){const t=[];let s="";for(const i of e.layer.variables)"Int16"!==i.renderingFormat.type&&"UInt16"!==i.renderingFormat.type||(t.push(i.name),i.id===e.layer.style.currentVariableId&&(s=i.name));""!==s&&m.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${s}' in the this browser`),t.length>0&&m.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${t.toString()}' in the this browser`);}return i}return -1}prepareRender(e){if(!this._vxl)return;const t=e.viewForward,s=e.eye;this._vxl.update_camera_pos_and_direction(s[0],s[1],s[2],t[0],t[1],t[2]);const i=this._vxl.cull();this.dbg(2,"missingResourceCount="+i),this._moreToLoad=i>0,this._havePreparedWithAllLayers=0===this._newLayers.length;}render(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return !1;for(const s of this._newLayers){const e=this._addVoxelLayer(s.layerView);-1===e?s.rejectCallback(-1):s.resolveCallback(e);}if(this._newLayers=[],0===this._layers.size)return this.dbg(4,"No voxel layers but RenderPlugin instance is being asked to render!"),!1;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._vxl.begin_frame();const t=this._renderTargetToRestore.viewport;return t.width===this._viewportWidth&&t.height===this._viewportHeight||(this._viewportWidth=t.width,this._viewportHeight=t.height,this._vxl.set_viewport(t.width,t.height)),0===t.x&&0===t.y||this.dbg(4,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender(),!0}queryDepthRange(e){this.dbg(1,"--queryDepthRange--");const t=e.viewForward,s=e.eye;this._vxl.update_camera_pos_and_direction(s[0],s[1],s[2],t[0],t[1],t[2]),this._vxl.cull();const i={near:5,far:1e4};return i.near=this._vxl.get_near(),i.far=this._vxl.get_far(),i}destroy(){this.dbg(1,"--destroy--"),this.removeRenderPlugin(),this._readyWatchHandle=s$1(this._readyWatchHandle),this._qualityWatchHandle=s$1(this._qualityWatchHandle),this._timeExtentWatchHandle=s$1(this._timeExtentWatchHandle),this._vxl&&(this._layers.forEach((e=>{e.abortController.abort();})),this._wasmMemBlocks.forEach((e=>{0!==e&&this._vxl._free(e);})),this._vxl.uninitialize_voxel_wasm(),this._vxl=null);}initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=t$1(e).then((e=>{var t;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this.dbg(1," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const s=this._getTimeArgs(null==(t=this._view)?void 0:t.timeExtent),i=this._vxl.addFunction(this.restoreFramebuffer.bind(this),"v"),r=this._vxl.addFunction(this.setBlendState.bind(this),"viiii"),n=this._vxl.addFunction(this.setFrontFace.bind(this),"vi"),a=this._vxl.addFunction(this.setRasterizerState.bind(this),"vi"),l=this._vxl.addFunction(this.setDepthStencilStateFunction.bind(this),"viii"),o=this._vxl.addFunction(this.setViewport.bind(this),"viiii"),h=this._vxl.addFunction(this.bindPreviousDepthToSlot.bind(this),"iii");this._vxl.initialize_voxel_wasm(i,r,n,a,l,o,h,s.startTime,s.endTime,s.useTime),this._vxl.set_quality(this.toWasmQuality(this._view.qualityProfile)),this._renderPluginContext&&this._renderPluginContext.requestRender();})).catch((()=>{for(const e of this._newLayers)e.rejectCallback(-2);this.dbg(4," WASM failed to download, removing RenderPlugin and destroying"),this.destroy();}))),this._vxlPromise)}get type(){return "external"}get isGround(){return !1}get slicePlane(){return !1}get intersectionHandlerId(){return "unj"}intersect(e,t,s,i,r){if(!this._vxl)return;if(!this._rctx)return;if(0===this._layers.size)return;if(r[0]<0||r[0]>e.camera.viewport[2]||r[1]<0||r[1]>e.camera.viewport[3])return;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const n=e.camera.viewForward,a=e.camera.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],n[0],n[1],n[2]),this.updateWasmCamera(e.camera),this._vxl.begin_frame(),this._useDepthPass?this.intersectDepth(e,t,s,i,r):this.intersectObject(e,t,s,i,r),this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate();}intersectObject(e$1,t,i,r,n$1){const a=this._vxl.pick_object(n$1[0],n$1[1]);if(a.success){const n$1=n();J(n$1,r,i),j(n$1,n$1);const g=q(i,r),m=n();o(m,a.worldX,a.worldY,a.worldZ);const p=n();J(p,m,i);const b=n();d$1(b,n$1,z(p,n$1));const y=n();u(y,i,b);const f=q(i,y),w=e(f/g,0,1),T=e=>{e.intersector="Voxel",e.dist=w,e.target={type:"external",metadata:{layerUid:this.intersectionHandlerId}};},R=e$1.results.min;(null==R.dist||w<R.dist)&&(null==t||t(i,r,w))&&T(R);const C=e$1.results.max;if(0!==e$1.options.store&&(null==C.dist||w>C.dist)&&(null==t||t(i,r,w))&&T(C),2===e$1.options.store){const t=new j$1(e$1.ray);T(t),e$1.results.all.push(t);}}}intersectDepth(e$1,t,i,r,n$1){const a=this._vxl.pick_depth(n$1[0],n$1[1]);if(a.success){const n$1=n();J(n$1,r,i),j(n$1,n$1);const g=q(i,r),m=n();o(m,a.worldX,a.worldY,a.worldZ);const p=n();J(p,m,i);const b=n();d$1(b,n$1,z(p,n$1));const y=n();u(y,i,b);const f=q(i,y),w=e(f/g,0,1),T=e=>{e.intersector="Voxel",e.dist=w,e.target={type:"external",metadata:{layerUid:this.intersectionHandlerId}};},R=e$1.results.min;(null==R.dist||w<R.dist)&&(null==t||t(i,r,w))&&T(R);const C=e$1.results.max;if(0!==e$1.options.store&&(null==C.dist||w>C.dist)&&(null==t||t(i,r,w))&&T(C),2===e$1.options.store){const t=new j$1(e$1.ray);T(t),e$1.results.all.push(t);}}}toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this.view2WASM=new Map;}static getInstance(){return t.instance||(t.instance=new t),t.instance}isUpdating(e,t){return !!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(t)}addLayer(t,r){return this.view2WASM.has(t)||this.view2WASM.set(t,new p(t)),this.view2WASM.get(t).addVoxelLayer(r)}removeLayer(e,t){if(this.view2WASM.has(e)){this.view2WASM.get(e).removeVoxelLayer(t)<1&&this.view2WASM.delete(e);}}setLayerEnabled(e,t,r){if(this.view2WASM.has(e)){this.view2WASM.get(e).setEnabled(t,r);}}setLayerSlices(e,t){let r=!1;return this.view2WASM.forEach(((i,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(r=i.setSlices(a,t));}));})),r}setLayerDynamicSections(e,t){let r=!1;return this.view2WASM.forEach(((i,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(r=i.setDynamicSections(a,t));}));})),r}setLayerCurrentVariable(e,t){let r=!1;return this.view2WASM.forEach(((i,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(r=i.setCurrentVariable(a,t));}));})),r}setLayerRenderMode(e,t){let r=!1;return this.view2WASM.forEach(((i,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(r=i.setRenderMode(a,t));}));})),r}setLayerStaticSections(e,t){let r=!1;return this.view2WASM.forEach(((i,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(r=i.setStaticSections(a,t));}));})),r}}

export { t };
