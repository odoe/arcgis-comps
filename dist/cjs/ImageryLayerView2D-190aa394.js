'use strict';

const request = require('./MapView-1195e7f1.js');
const LayerView = require('./LayerView-870ab467.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-5bce9e1c.js');
const vectorFieldUtils = require('./vectorFieldUtils-874f1aff.js');
const Container = require('./Container-7c02556c.js');
const GraphicContainer = require('./GraphicContainer-7b84d423.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-a6a0e9b3.js');
const pixelUtils = require('./pixelUtils-dcef9151.js');
const BitmapContainer = require('./BitmapContainer-0b6021ad.js');
const Bitmap = require('./Bitmap-0ce1bf83.js');
const ExportStrategy = require('./ExportStrategy-7abb1b08.js');
const popupUtils = require('./popupUtils-1e401adb.js');
const RefreshableLayerView = require('./RefreshableLayerView-fe90cf84.js');
require('./index-b630e408.js');
require('./EffectList-c2e3d9b4.js');
require('./Utils-cf62b8df.js');
require('./Texture-51894e1f.js');
require('./CIMSymbolHelper-5119d47d.js');
require('./Rect-8ca00bae.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-64f67848.js');
require('./json-2c41fbe0.js');
require('./VertexArrayObject-02afb047.js');
require('./FeatureContainer-cf8e056d.js');
require('./TileContainer-023b8a90.js');
require('./WGLContainer-d1dbdedc.js');
require('./ShaderCompiler-7b6d74e7.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-a9d25bbc.js');
require('./earcut-d5562923.js');
require('./visualVariablesUtils-4c476b9b.js');
require('./visualVariablesUtils-35b3c097.js');
require('./Matcher-9692f12e.js');
require('./ComputedAttributeStorage-b5e92741.js');
require('./FeatureSetReader-1f650286.js');
require('./centroid-7cf9ad55.js');
require('./tileUtils-d0e4ff63.js');
require('./TileClipper-7ecbeeef.js');
require('./cimAnalyzer-a0ed6247.js');
require('./quantizationUtils-6e32af1f.js');
require('./cimSymbolUtils-34c12ff0.js');
require('./devEnvironmentUtils-2fe58900.js');
require('./schemaUtils-60fb47fc.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=request.s.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let w=class extends request.p{constructor(){super(...arguments),this.attached=!1,this.container=new Container.n,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:""},this.type="Graphics",this._graphics=new request.c$20,this._updateGraphics=request.z$1((async(e,t)=>{if(!e.stationary)return;const r=e.state,i=new request.M({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const p="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,c=await this._projectFullExtentPromise,{extent:h,resolution:l,width:u,height:y}=vectorFieldUtils.m(i,s,o,p,c),g=await this.layer.fetchImage(h,u,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,r=x.sizeVariables[0];!request.r(t)||r.minDataValue&&r.maxDataValue||(r.minDataValue=t.statistics[0].minValue,r.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:h,pixelBlock:t};const i=h.clone().normalize(),s={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:i,tileResolution:l,time:JSON.stringify(this.timeExtent||"")},o=this._canReuseVectorFieldData(s)?this._dataParameters.extents:[],n=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,o);if(o.length){const e=this._graphics.items.filter((e=>request.r(e.geometry)&&o.some((t=>t.intersects(e.geometry)))&&!i.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n);}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=s;}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{request.d$2(e)||_.error(e);}));}hitTest(e,r){const i=this.view.toMap(request.c$6(e,r));return Promise.resolve(new request.h$2({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new BaseGraphicContainer.rt({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(e){try{return await rasterProjectionHelper.j(this.layer.fullExtent,e)}catch(t){try{const t=(await request.E(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?request.M.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,s=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e)))));return t&&r&&i&&s}};request.e([request.d()],w.prototype,"attached",void 0),request.e([request.d()],w.prototype,"container",void 0),request.e([request.d()],w.prototype,"layer",void 0),request.e([request.d()],w.prototype,"timeExtent",void 0),request.e([request.d()],w.prototype,"view",void 0),request.e([request.d()],w.prototype,"updateRequested",void 0),request.e([request.d()],w.prototype,"updating",null),request.e([request.r$5({graphics:"Graphics"})],w.prototype,"type",void 0),w=request.e([request.i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],w);const j=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=request.s.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends request.p{constructor(){super(...arguments),this.attached=!1,this.container=new Container.n,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{request.d$2(e)||y.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,r){const i=this.view.toMap(request.c$6(e,r));return Promise.resolve(new request.h$2({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new BitmapContainer.t,this.strategy=new ExportStrategy.S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=pixelUtils.d(r,t);return request.r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new Bitmap.i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};request.e([request.d()],g.prototype,"attached",void 0),request.e([request.d()],g.prototype,"container",void 0),request.e([request.d()],g.prototype,"layer",void 0),request.e([request.d()],g.prototype,"strategy",void 0),request.e([request.d()],g.prototype,"timeExtent",void 0),request.e([request.d()],g.prototype,"view",void 0),request.e([request.d()],g.prototype,"updateRequested",void 0),request.e([request.d()],g.prototype,"updating",null),request.e([request.r$5({imagery:"Imagery"})],g.prototype,"type",void 0),g=request.e([request.i("esri.views.2d.layers.imagery.ImageryView2D")],g);const x=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new request.s$3("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=popupUtils.d(s,o);if(!i||!request.r(u))throw new request.s$3("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new request.b$13;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new request.b$3(l,l,this.view.spatialReference):new request.b$3(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:request.r(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return request.e([request.d()],m.prototype,"layer",void 0),request.e([request.d()],m.prototype,"suspended",void 0),request.e([request.d(request.g$3)],m.prototype,"timeExtent",void 0),request.e([request.d()],m.prototype,"view",void 0),m=request.e([request.i("esri.views.layers.ImageryLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(u(RefreshableLayerView.i(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add([request.i$3(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),request.i$3(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e);}),!0)]);}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([request.i$3(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),request.f$1(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new x({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect);this.requestUpdate();}};request.e([request.d()],p.prototype,"pixelData",null),request.e([request.d({readOnly:!0})],p.prototype,"updating",null),request.e([request.d()],p.prototype,"subview",void 0),p=request.e([request.i("esri.views.2d.layers.ImageryLayerView2D")],p);const d=p;

exports.default = d;
