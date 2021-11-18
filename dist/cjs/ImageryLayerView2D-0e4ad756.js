'use strict';

const request = require('./messageBundle-312ceb47.js');
const LayerView = require('./LayerView-46fb1e7b.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-d1487ac7.js');
const vectorFieldUtils = require('./vectorFieldUtils-5c430b89.js');
const GraphicsCollection = require('./GraphicsCollection-761d7a93.js');
const Container = require('./Container-cb837708.js');
const GraphicContainer = require('./GraphicContainer-ed7b0eed.js');
const BaseGraphicContainer = require('./BaseGraphicContainer-89b548d0.js');
const pixelUtils = require('./pixelUtils-57d906f9.js');
const BitmapContainer = require('./BitmapContainer-18c55fc6.js');
const Bitmap = require('./Bitmap-178632aa.js');
const ExportStrategy = require('./ExportStrategy-d2272081.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const Query = require('./Query-35be2e91.js');
const popupUtils = require('./popupUtils-3b660ad3.js');
const RefreshableLayerView = require('./RefreshableLayerView-3293c339.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./HandleOwner-f254dc86.js');
require('./reactiveUtils-9e33ad73.js');
require('./projection-e04cb9d0.js');
require('./mat4-1439266d.js');
require('./MapView-dbdeb77b.js');
require('./CollectionFlattener-3dadfe6b.js');
require('./workers-1668d5a8.js');
require('./executeQueryJSON-d0e52ec5.js');
require('./utils-f7ec83ae.js');
require('./query-89593027.js');
require('./normalizeUtils-b6002011.js');
require('./pbfQueryUtils-7b4746bb.js');
require('./pbf-758dd66b.js');
require('./OptimizedFeature-cf019b37.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-f443a9ba.js');
require('./zscale-fda0b32f.js');
require('./FeatureSet-2e9b97a5.js');
require('./Field-9f319836.js');
require('./fieldType-a54c379b.js');
require('./TopFeaturesQuery-2241be7c.js');
require('./TimeExtent-cdfe048b.js');
require('./symbolUtils-65bd4d7e.js');
require('./utils-08a64a75.js');
require('./asyncUtils-9f974032.js');
require('./ItemCache-c32783d3.js');
require('./MemCache-1ae72e1e.js');
require('./utils-fb318f28.js');
require('./widget-41a1462e.js');
require('./QueryTask-f73be2a3.js');
require('./featureConversionUtils-e6cca372.js');
require('./Task-0c2f1790.js');
require('./FeatureLayer-47713b0f.js');
require('./UniqueValueRenderer-cac6e88d.js');
require('./VisualVariablesMixin-fd7d8973.js');
require('./colorRamps-c066f1f7.js');
require('./ColorStop-c5f3f911.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-4df768a8.js');
require('./lengthUtils-3475e67e.js');
require('./diffUtils-467572e8.js');
require('./jsonUtils-1999c7ae.js');
require('./styleUtils-10128dd7.js');
require('./DictionaryRenderer-7157833a.js');
require('./LRUCache-b38a7907.js');
require('./jsonUtils-fa6e9edd.js');
require('./Layer-849337e0.js');
require('./HeightModelInfo-3363f0e0.js');
require('./APIKeyMixin-f99c03a8.js');
require('./ArcGISService-a170c777.js');
require('./arcgisLayerUrl-b24ae301.js');
require('./BlendLayer-7e864068.js');
require('./jsonUtils-4461cf25.js');
require('./CustomParametersMixin-8fc5bf2f.js');
require('./labelingInfo-b4dde768.js');
require('./LabelClass-21df7ce2.js');
require('./labelUtils-7677c2d3.js');
require('./defaultsJSON-01ae5a1a.js');
require('./OperationalLayer-f89b9d70.js');
require('./OrderedLayer-1ea23e5d.js');
require('./PortalLayer-19d79370.js');
require('./PortalItem-42e06deb.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./ScaleRangeLayer-52589af6.js');
require('./TemporalLayer-0201042a.js');
require('./TimeInfo-e2561319.js');
require('./FeatureType-5a860566.js');
require('./fieldProperties-f6acb896.js');
require('./FieldsIndex-8c8f3ac6.js');
require('./LayerFloorInfo-154885ea.js');
require('./styleUtils-2856ad11.js');
require('./popupUtils-180c3a12.js');
require('./TileStore-3be4ace6.js');
require('./TileKey-b425207e.js');
require('./quickselect-d3f68f5a.js');
require('./aaBoundingRect-7e7e678f.js');
require('./GoTo-9e48be05.js');
require('./mathUtils-ff0a3d04.js');
require('./TileInfo-363ea532.js');
require('./Basemap-0c094028.js');
require('./loadAll-57962b35.js');
require('./writeUtils-efed1c82.js');
require('./compilerUtils-54d3d3a9.js');
require('./TablesMixin-bdd488ef.js');
require('./Scheduler-940b6f3b.js');
require('./unitBezier-5ab0945f.js');
require('./mat2df32-f2b5b52d.js');
require('./vec2-65c4309d.js');
require('./vec2f64-c36614be.js');
require('./mat3-1bc0ab17.js');
require('./vec2f32-29a5eecf.js');
require('./TileStrategy-d5289194.js');
require('./screenshotUtils-33e2013d.js');
require('./capabilities-ef851f65.js');
require('./EffectList-66a02fd6.js');
require('./Utils-b188baf8.js');
require('./Texture-272da42e.js');
require('./CIMSymbolHelper-e1208fc4.js');
require('./BidiEngine-e033e7c0.js');
require('./definitions-b4888cc6.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./projectionSupport-0d87fa93.js');
require('./json-2c41fbe0.js');
require('./VertexArrayObject-543b2920.js');
require('./FeatureContainer-ac143752.js');
require('./TileContainer-146f8112.js');
require('./WGLContainer-c7ef30ce.js');
require('./ShaderCompiler-c137d774.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-0f043067.js');
require('./earcut-d5562923.js');
require('./visualVariablesUtils-3b9ebc9d.js');
require('./visualVariablesUtils-77c3c121.js');
require('./Matcher-88f6470a.js');
require('./ComputedAttributeStorage-cc01d874.js');
require('./FeatureSetReader-56da5c2b.js');
require('./centroid-fbe1334b.js');
require('./tileUtils-01a55805.js');
require('./TileClipper-b1e23799.js');
require('./cimAnalyzer-a91407a6.js');
require('./quantizationUtils-7dfad3c7.js');
require('./cimSymbolUtils-3f93bd5c.js');
require('./devEnvironmentUtils-98ac846b.js');
require('./schemaUtils-f3e2baa9.js');
require('./MD5-e5fc0526.js');
require('./vec3f32-7c156128.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=request.s$2.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let w=class extends request.p{constructor(){super(...arguments),this.attached=!1,this.container=new Container.n,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:""},this.type="Graphics",this._graphics=new GraphicsCollection.c,this._updateGraphics=request.z$2((async(e,t)=>{if(!e.stationary)return;const r=e.state,i=new unitUtils.M({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const p="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,c=await this._projectFullExtentPromise,{extent:h,resolution:l,width:u,height:y}=vectorFieldUtils.m(i,s,o,p,c),g=await this.layer.fetchImage(h,u,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,r=x.sizeVariables[0];!request.r(t)||r.minDataValue&&r.maxDataValue||(r.minDataValue=t.statistics[0].minValue,r.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:h,pixelBlock:t};const i=h.clone().normalize(),s={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:i,tileResolution:l,time:JSON.stringify(this.timeExtent||"")},o=this._canReuseVectorFieldData(s)?this._dataParameters.extents:[],n=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,o);if(o.length){const e=this._graphics.items.filter((e=>request.r(e.geometry)&&o.some((t=>t.intersects(e.geometry)))&&!i.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n);}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=s;}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{request.d$2(e)||_.error(e);}));}hitTest(e,r){const i=this.view.toMap(unitUtils.c$5(e,r));return Promise.resolve(new unitUtils.h({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new BaseGraphicContainer.rt({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer.i(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(e){try{return await rasterProjectionHelper.j(this.layer.fullExtent,e)}catch(t){try{const t=(await request.E(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?unitUtils.M.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,s=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e)))));return t&&r&&i&&s}};request.e([request.d()],w.prototype,"attached",void 0),request.e([request.d()],w.prototype,"container",void 0),request.e([request.d()],w.prototype,"layer",void 0),request.e([request.d()],w.prototype,"timeExtent",void 0),request.e([request.d()],w.prototype,"view",void 0),request.e([request.d()],w.prototype,"updateRequested",void 0),request.e([request.d()],w.prototype,"updating",null),request.e([unitUtils.r$2({graphics:"Graphics"})],w.prototype,"type",void 0),w=request.e([request.i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],w);const j=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=request.s$2.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends request.p{constructor(){super(...arguments),this.attached=!1,this.container=new Container.n,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{request.d$2(e)||y.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,r){const i=this.view.toMap(unitUtils.c$5(e,r));return Promise.resolve(new unitUtils.h({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new BitmapContainer.t,this.strategy=new ExportStrategy.S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=pixelUtils.d(r,t);return request.r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new Bitmap.i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};request.e([request.d()],g.prototype,"attached",void 0),request.e([request.d()],g.prototype,"container",void 0),request.e([request.d()],g.prototype,"layer",void 0),request.e([request.d()],g.prototype,"strategy",void 0),request.e([request.d()],g.prototype,"timeExtent",void 0),request.e([request.d()],g.prototype,"view",void 0),request.e([request.d()],g.prototype,"updateRequested",void 0),request.e([request.d()],g.prototype,"updating",null),request.e([unitUtils.r$2({imagery:"Imagery"})],g.prototype,"type",void 0),g=request.e([request.i("esri.views.2d.layers.imagery.ImageryView2D")],g);const x=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new request.s$1("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=popupUtils.d(s,o);if(!i||!request.r(u))throw new request.s$1("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new Query.b;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new unitUtils.b(l,l,this.view.spatialReference):new unitUtils.b(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:request.r(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return request.e([request.d()],m.prototype,"layer",void 0),request.e([request.d()],m.prototype,"suspended",void 0),request.e([request.d(commonProperties.g)],m.prototype,"timeExtent",void 0),request.e([request.d()],m.prototype,"view",void 0),m=request.e([request.i("esri.views.layers.ImageryLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(u(RefreshableLayerView.i(LayerView.l(LayerView.u)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add([request.i$1(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),request.i$1(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e);}),!0)]);}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([request.i$1(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),request.f(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new x({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect);this.requestUpdate();}};request.e([request.d()],p.prototype,"pixelData",null),request.e([request.d({readOnly:!0})],p.prototype,"updating",null),request.e([request.d()],p.prototype,"subview",void 0),p=request.e([request.i("esri.views.2d.layers.ImageryLayerView2D")],p);const d=p;

exports.default = d;
