'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const Graphic = require('./Graphic-0aff6059.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');
const RawBlockCache = require('./RawBlockCache-4566eaf6.js');
const pixelUtils = require('./pixelUtils-d620590d.js');
const rasterProjectionHelper = require('./rasterProjectionHelper-1f385b64.js');
const LayerView2D = require('./LayerView2D-6de7adcc.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const DefaultUI = require('./DefaultUI-75d05512.js');
const brushes = require('./brushes-09287871.js');
const TiledDisplayObject = require('./TiledDisplayObject-0701494f.js');
const Utils = require('./Utils-a77299a6.js');
const TileContainer = require('./TileContainer-1c8142b6.js');
const vectorFieldUtils = require('./vectorFieldUtils-0944d243.js');
const mat3 = require('./mat3-1d3e0d51.js');
const FramebufferObject = require('./FramebufferObject-435e1736.js');
require('./Texture-95d9d662.js');
const DisplayObject = require('./DisplayObject-573912c8.js');
const TileStore = require('./TileStore-1f212ad3.js');
const TileStrategy = require('./TileStrategy-58dbe4b8.js');
const ImageryTileLayerView = require('./ImageryTileLayerView-4b7e03e4.js');
const LayerView = require('./LayerView-2bc30c9f.js');
const RefreshableLayerView = require('./RefreshableLayerView-a72efa88.js');
const drapedUtils = require('./drapedUtils-2fa2770f.js');
const capabilities = require('./capabilities-76889198.js');
require('./index-fde8502c.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./unitUtils-083cb8d0.js');
require('./projection-b19710fa.js');
require('./mat4-f68486bc.js');
require('./geodesicConstants-047d586a.js');
require('./Container-afc09537.js');
require('./EffectList-9ac19b5e.js');
require('./BlendLayer-6a2ab430.js');
require('./Basemap-81280554.js');
require('./loadAll-e25ec3d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./writeUtils-7bdc195a.js');
require('./compilerUtils-56e51ed2.js');
require('./CollectionFlattener-bc4cde45.js');
require('./HandleOwner-9c4c158c.js');
require('./reactiveUtils-ef5dccea.js');
require('./basemapUtils-dc86a6ad.js');
require('./TablesMixin-d3e0d4c7.js');
require('./Layer-31cde361.js');
require('./TimeExtent-8b558884.js');
require('./GraphicsCollection-d70ae8cb.js');
require('./HeightModelInfo-06fd3d80.js');
require('./Scheduler-72cbcf2a.js');
require('./debugFlags-5e6b0151.js');
require('./screenUtils-e9e44bb6.js');
require('./executeQueryJSON-3f84e897.js');
require('./utils-8a0a0870.js');
require('./query-0e394548.js');
require('./normalizeUtils-a793b472.js');
require('./pbfQueryUtils-49e071a8.js');
require('./pbf-dc87045b.js');
require('./OptimizedFeature-cd4fe3c6.js');
require('./OptimizedFeatureSet-b5737d2b.js');
require('./queryZScale-d48be112.js');
require('./zscale-25ef55f0.js');
require('./Query-354911d3.js');
require('./Field-b92c6f4a.js');
require('./fieldType-32f95259.js');
require('./FeatureSet-8efc5965.js');
require('./TopFeaturesQuery-92caa731.js');
require('./Heading-d7c5e432.js');
require('./widget-b8f4aeaf.js');
require('./QueryTask-3b24eec5.js');
require('./featureConversionUtils-df21e951.js');
require('./Task-95a3fa39.js');
require('./FeatureLayer-68e51b64.js');
require('./UniqueValueRenderer-1c485e9f.js');
require('./VisualVariablesMixin-a105fcfa.js');
require('./colorRamps-d0c2cb9d.js');
require('./ColorStop-ce63948c.js');
require('./sizeVariableUtils-9012516e.js');
require('./visualVariableUtils-1740874b.js');
require('./lengthUtils-179eaf12.js');
require('./diffUtils-df69757f.js');
require('./jsonUtils-62d28b73.js');
require('./styleUtils-2b475600.js');
require('./DictionaryRenderer-a0dce499.js');
require('./LRUCache-38fdf18d.js');
require('./MemCache-7f5503ec.js');
require('./jsonUtils-fc4080da.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./workers-bde9fe32.js');
require('./APIKeyMixin-77c99036.js');
require('./ArcGISService-56d7a630.js');
require('./arcgisLayerUrl-5174d661.js');
require('./CustomParametersMixin-996a5732.js');
require('./labelingInfo-594911d5.js');
require('./OperationalLayer-853649aa.js');
require('./ElevationInfo-d3e3d64f.js');
require('./LabelClass-4b91d60e.js');
require('./labelUtils-73814dda.js');
require('./defaultsJSON-0cdf7a99.js');
require('./OrderedLayer-8690aaf5.js');
require('./PortalLayer-7556e594.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./TemporalLayer-06f08bdd.js');
require('./TimeInfo-050c5617.js');
require('./FeatureType-d8b81062.js');
require('./fieldProperties-c9dd6469.js');
require('./FieldsIndex-664af19b.js');
require('./LayerFloorInfo-c56fa764.js');
require('./styleUtils-536b017f.js');
require('./popupUtils-7a76fb7d.js');
require('./utils-71e85012.js');
require('./ItemCache-149fdb6e.js');
require('./utils-fb318f28.js');
require('./Queue-1713f2e9.js');
require('./layerViewUtils-96bae70b.js');
require('./GoTo-be01affb.js');
require('./accessibleHandler-652e5d90.js');
require('./vmEvent-9b257013.js');
require('./heightModelInfoUtils-9cedab45.js');
require('./Viewpoint-bbe11330.js');
require('./mathUtils-87b1f941.js');
require('./mat2d-2d5fae3e.js');
require('./mat2df32-85bf8b84.js');
require('./mat2df64-e9760778.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./vec2f64-60b3c97e.js');
require('./definitions-b4888cc6.js');
require('./vec4f32-284fd490.js');
require('./ShaderCompiler-3202ad3f.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-b68d4c0b.js');
require('./rasterUtils-a4c646c4.js');
require('./TileKey-d800cfb2.js');
require('./WGLContainer-1a8439fd.js');
require('./earcut-d5562923.js');
require('./quickselect-d3f68f5a.js');
require('./popupUtils-454e6531.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends TiledDisplayObject.r{constructor(t,e,i,r,a,n=null){super(t,e,i,r,a),this.bitmap=new brushes.x(n,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null;}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs;}_createTransforms(){return {dvs:DefaultUI.n$2(),tileMat3:DefaultUI.n$2()}}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends TileContainer.o{constructor(){super(...arguments),this.isCustomTilingScheme=!1;}createTile(e){const s=this._getTileBounds(e),[r,t]=this._tileInfoView.tileInfo.size;return new i(e,s[0],s[3],r,t)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (tile)",brushes:[brushes.G.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===Utils.I.MAP&&super.doRender(e);}_getTileBounds(r){const i=this._tileInfoView.getTileBounds(aaBoundingRect.u(),r);if(this.isCustomTilingScheme&&r.world){const{tileInfo:e}=this._tileInfoView,t=DefaultUI.pt(e.spatialReference);if(t){const{resolution:s}=e.lodAt(r.level),o=t/s%e.size[0],n=o?(e.size[0]-o)*s:0;i[0]-=n*r.world,i[2]-=n*r.world;}}return i}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$1=class extends request.p{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this.container=null,this.layer=null,this.tileSize=null,this.useWebGLForProcessing=!0;}fetchTile(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)}createEmptyTilePixelBlock(e=null){const r=null==e||e.join(",")===this.tileSize.join(",");if(r&&request.r(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this.tileSize;const[t,i]=e,l=new pixelUtils.u({width:t,height:i,pixels:[new Uint8Array(t*i)],mask:new Uint8Array(t*i),pixelType:"u8"});return r&&(this._emptyTilePixelBlock=l),l}};request.e([request.d()],l$1.prototype,"container",void 0),request.e([request.d()],l$1.prototype,"layer",void 0),request.e([request.d()],l$1.prototype,"tileSize",void 0),request.e([request.d()],l$1.prototype,"type",void 0),request.e([request.d()],l$1.prototype,"useWebGLForProcessing",void 0),l$1=request.e([request.i("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],l$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends l$1{constructor(){super(...arguments),this.container=null,this.layer=null,this.tileSize=null,this.type="raster",this.useWebGLForProcessing=!0;}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}fetchTile(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)}async updateTileSource(e,t){const{bandIds:s}=this.layer,i=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:l,symbolizerParams:a,globalSymbolizerParams:n,suspended:c,coords:p,resolution:u}=t,{bitmap:d}=e;if([d.x,d.y]=p,d.resolution=u,l&&request.r(l)&&request.r(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};if(d.rawPixelData=e,o)d.source=l.pixelBlock,d.isRendereredSource=!1;else {const r=await this.layer.applyRenderer(e,"stretch"===(null==n?void 0:n.type)?n:null);d.source=r,d.isRendereredSource=!0;}d.symbolizerParameters=o?a:null,o?d.transformGrid||(d.transformGrid=l.transformGrid):d.transformGrid=null;}else {const e=this.createEmptyTilePixelBlock();d.source=e,d.symbolizerParameters=o?a:null,d.transformGrid=null;}d.bandIds=o?s:null,d.width=this.tileSize[0],d.height=this.tileSize[1],d.interpolation=i,d.suspended=c,d.invalidateTexture();}async updateTileSymbolizerParameters(e,t){const{local:s,global:i}=t,{bandIds:o}=this.layer,l=this._getLayerInterpolation(),a=this.canUseWebGLForProcessing(),{bitmap:n}=e,{rawPixelData:c}=n;!a&&request.r(c)?(n.source=await this.layer.applyRenderer(c,"stretch"===(null==i?void 0:i.type)?i:null),n.isRendereredSource=!0):(n.isRendereredSource&&request.r(c)&&(n.source=c.pixelBlock),n.isRendereredSource=!1),n.symbolizerParameters=a?i||s:null,n.bandIds=a?o:null,n.interpolation=l,n.suspended=!1;}install(e,r){this.container=new n(r.tileInfoView),this.container.isCustomTilingScheme=r.isCustomTilingScheme,e.addChild(this.container);}uninstall(){this.container.removeAllChildren(),this.container.remove();}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:r,colormap:t,pixelType:s}=this.layer.rasterInfo;return 1===e&&(null!=r||null!=t||"u8"===s||"s8"===s)}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return "nearest";const{interpolation:r}=this.layer,{renderer:t}=this.layer;return "raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===r||"cubic"===r?"bilinear":"nearest":r}};request.e([request.d()],l.prototype,"container",void 0),request.e([request.d()],l.prototype,"layer",void 0),request.e([request.d()],l.prototype,"tileSize",void 0),request.e([request.d()],l.prototype,"type",void 0),request.e([request.d()],l.prototype,"useWebGLForProcessing",void 0),l=request.e([request.i("esri.views.2d.layers.imagery.ImageryTileView2D")],l);const a$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c$1 extends DisplayObject.a{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.rawPixelData=null,this.width=null,this.source=e;}destroy(){var t,a;request.r(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null);}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO());}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO();}invalidateVAO(){var t,a;!this._vaoInvalidated&&request.r(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender());}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,request.r(this.source)&&!request.r(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=vectorFieldUtils.U(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:s};}break;case"simple_scalar":{const e=vectorFieldUtils._(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a};}break;case"wind_speed":{const e=vectorFieldUtils.U(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,e),i=vectorFieldUtils._(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:r,scalar:o};}}}this.ready(),this.requestRender();}}_createTransforms(){return {dvs:DefaultUI.n$2()}}onAttach(){this.invalidateVAO();}onDetach(){this.invalidateVAO();}_createVectorFieldVAO(e,t){const{vertexData:a,indexData:s}=t,o=FramebufferObject.h.createVertex(e,35044,new Float32Array(a)),c=FramebufferObject.h.createIndex(e,35044,new Uint32Array(s)),n=Utils.te("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:5126,normalized:!1},{location:1,name:"a_offset",count:2,type:5126,normalized:!1},{location:2,name:"a_vv",count:2,type:5126,normalized:!1}]});return {vao:new FramebufferObject.f(e,n.attributes,n.bufferLayouts,{geometry:o},c),elementCount:s.length}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends TiledDisplayObject.r{constructor(t,s,e,i,r,o=null){super(t,s,e,i,r),this.tileData=new c$1(o),this.tileData.coordScale=[i,r],this.tileData.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null;}set stencilRef(t){this.tileData.stencilRef=t;}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return {dvs:DefaultUI.n$2(),tileMat3:DefaultUI.n$2()}}setTransform(e,a){super.setTransform(e,a);const i=a/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[o,l]=this.tileData.offset,h=[this.x+o*a,this.y-l*a],[n,f]=e.toScreenNoRotation([0,0],h),{symbolTileSize:m}=this.tileData.symbolizerParameters,c=Math.round((this.width-this.tileData.offset[0])/m)*m,D=Math.round((this.height-this.tileData.offset[1])/m)*m,d=c/this.rangeX*i,u=D/this.rangeY*i;mat3.s(r,d,0,0,0,u,0,n,f,1),mat3.i(this.transforms.dvs,e.displayViewMat3,r),this.tileData.transforms.dvs=this.transforms.dvs;}onAttach(){this.tileData.stage=this.stage;}onDetach(){this.tileData.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends TileContainer.o{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"];}createTile(r$1){const t=this._tileInfoView.getTileBounds(aaBoundingRect.u(),r$1),[i,o]=this._tileInfoView.tileInfo.size;return new r(r$1,t[0],t[3],i,o)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (vf tile)",brushes:[brushes.s$1],target:()=>this.children.map((e=>e.tileData)),drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===Utils.I.MAP&&this.symbolTypes.forEach((s=>{e.renderPass=s,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends l$1{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.tileSize=null,this.type="rasterVF",this.useWebGLForProcessing=!0;}canUseWebGLForProcessing(){return !1}async fetchTile(e,t){const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return "vector-magdir"===this.layer.rasterInfo.dataType&&null!=i&&i.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,i){const r=i.symbolizerParams,{tileData:s}=e;s.key=e.key,s.width=this.tileSize[0],s.height=this.tileSize[1];const{symbolTileSize:o}=r,{source:l}=i;if(s.offset=this._getTileSymbolOffset(s.key,o),request.r(l)&&request.r(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};s.rawPixelData=e,s.source=this._sampleVectorFieldData(l.pixelBlock,r,s.offset),s.symbolizerParameters=r;}else {const e=[Math.round((this.tileSize[0]-s.offset[0])/o),Math.round((this.tileSize[1]-s.offset[1])/o)],t=this.createEmptyTilePixelBlock(e);s.source=t,s.symbolizerParameters=r;}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,i){var r;const s=i.local,{symbolTileSize:o}=s,{tileData:l}=e;l.offset=this._getTileSymbolOffset(l.key,o);const a=l.symbolizerParameters.symbolTileSize;return l.symbolizerParameters=s,request.r(null==(r=l.rawPixelData)?void 0:r.pixelBlock)&&a!==o&&(l.source=this._sampleVectorFieldData(l.rawPixelData.pixelBlock,l.symbolizerParameters,l.offset)),Promise.resolve(null)}install(e,t){this.container=new o(t.tileInfoView),this.container.isCustomTilingScheme=t.isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=this.layer.watch("renderer",(e=>this._updateSymbolType(e))),e.addChild(this.container);}uninstall(){this.container.removeAllChildren(),this._handle.remove(),this._handle=null,this.container.remove();}_getTileSymbolOffset(e,t){const i=e.col*this.tileSize[0]%t,r=e.row*this.tileSize[1]%t;return [i>t/2?t-i:-i,r>t/2?t-r:-r]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:r}=t;return vectorFieldUtils.S(e,"vector-uv",r,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"]);}};request.e([request.d()],a.prototype,"container",void 0),request.e([request.d()],a.prototype,"layer",void 0),request.e([request.d()],a.prototype,"tileSize",void 0),request.e([request.d()],a.prototype,"type",void 0),request.e([request.d()],a.prototype,"useWebGLForProcessing",void 0),a=request.e([request.i("esri.views.2d.layers.imagery.VectorFieldTileView2D")],a);const c=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const F=request.s$1.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),L=[0,0];let V=class extends(ImageryTileLayerView.m(RefreshableLayerView.i(LayerView2D.l(LayerView.u)))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this._isCustomTilingScheme=!1,this.subview=null,this._redrawOrRefetch=request.z$1(((e,t)=>this._previousLOD?e?this.doRefresh():this._redrawImage(t):Promise.resolve()));}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e);}get useWebGLForProcessing(){var e;return null==(e=this._get("useWebGLForProcessing"))||e}set useWebGLForProcessing(e){this.subview&&(this.subview.useWebGLForProcessing=e),this._set("useWebGLForProcessing",e);}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){var t;this._tileStrategy.destroy(),null==(t=this.subview)||t.container.removeAllChildren();const i=this._getCacheSize(e);this._tileStrategy=new TileStrategy.r({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:i,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate();}}hitTest(e,i){if(this.suspended)return Promise.resolve(null);const s=this.view.toMap(screenUtils.c(e,i));return Promise.resolve(new Graphic.h({attributes:{},geometry:s}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var o;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:request.M.fromJSON(t);RawBlockCache.g(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling);}this._needBlockCacheUpdate=!1,(null==(o=this._previousLOD)?void 0:o.level)!==r.level&&(this._previousLOD=r,null==this._symbolizerParams||this.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0));}this.notifyChange("updating");}attach(){this.layer.increaseRasterJobHandlerUsage(),capabilities.o().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new TileStore.h(this.tileInfo,this.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new TileStrategy.p({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this.fetchTile(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new TileStrategy.r({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updatesubview(),this.handles.add([request.f(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],((e,t,i)=>{const s="multidimensionalDefinition"===i,r="interpolation"===i&&("majority"===e||"majority"===t)&&this._canUseMajorityInterpolationOnDataSource(),o="renderer"===i&&"vector-field"===t.type!=("vector-field"===e.type);o&&this._updatesubview();const l=s||r||o;this._redrawOrRefetch(l).catch((e=>{request.d$1(e)||F.error(e);}));})),request.i$1(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),request.i$1(this,["layer.effect"],(e=>{this.subview&&(this.subview.container.effect=e);}),!0),request.i$1(this,"timeExtent",(()=>{this._redrawOrRefetch(!0).catch((e=>{request.d$1(e)||F.error(e);}));}))],"attach"),this._updateBlockCacheRegistry();}detach(){var e;this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),null==(e=this.subview)||e.uninstall(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,RawBlockCache.u(this._blockCacheRegistryUrl,this._blockCacheRegistryId);}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.requestUpdate();})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return drapedUtils.a(e,t,this.view)}async doRefresh(){if(this.suspended)return;await this.layer.updateRenderer(),this.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset();const e=[];this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await request.T(e),this.notifyChange("updating");}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this.subview.container.createTile(e);return this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){var t;this._fetchQueue.abort(e.key.id),null==(t=this.subview)||t.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.requestUpdate();})),this.requestUpdate();}fetchTile(e,t){const i=!request.t$1(t)&&t.signal,o=this.subview.canUseWebGLForProcessing(),a={allowPartialFill:!0,datumTransformation:this.datumTransformation,interpolation:o?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:o,signal:request.e$2(i),srcResolution:this._srcResolutions[e.level],timeExtent:this.timeExtent,tileInfo:this.tileInfo};return this.subview.fetchTile(e,a)}_updatesubview(){const e=this._isVectorField()?"rasterVF":"raster";if(this.subview){if(this.subview.type===e)return;this.subview.uninstall();}const{layer:t}=this;this._tileStrategy.clear();const i=new("rasterVF"===e?c:a$1)({layer:t,tileSize:this.tileInfo.size,useWebGLForProcessing:this.useWebGLForProcessing});i.install(this.container,{tileInfoView:this._tileInfoView,isCustomTilingScheme:this._isCustomTilingScheme}),i.container.blendMode=t.blendMode,i.container.effect=t.effect,this.subview=i;}_isVectorField(){return "vector-field"===this.layer.renderer.type}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.view.spatialReference,t=new request.b$2({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=rasterProjectionHelper.F(this.layer.rasterInfo,e),o=TileInfo.j.create({spatialReference:e,size:512,scales:i});(0===o.origin.x||o.origin.x>t.x)&&(o.origin=t),this._isCustomTilingScheme=r,this._set("tileInfo",o),this._srcResolutions=null!=s?s:[];}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return (t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:s}=this.layer;let r=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal);}catch(i){request.d$1(i)&&F.error(i);}this._globalUpdateRequested=!1;}!this.subview.canUseWebGLForProcessing()&&!this._isVectorField()||this.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const o=this._tileInfoView.getTileCoords(L,e.key),l=this._tileInfoView.getTileResolution(e.key);await this.subview.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:r,bandIds:s,coords:o,resolution:l}),e.once("attach",(()=>this.requestUpdate())),this.subview.container.addChild(e);}catch(i){request.d$1(i)||F.error(i);}this.requestUpdate();}}async _redrawImage(e){if(0===this.subview.container.children.length)return;await this.layer.updateRenderer(),this.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.subview.container.children.map((async e=>this.subview.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await request.T(t),this.container.requestRender();}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this._previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:pixelUtils.l(i.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});!this.subview.canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s;}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.timeExtent}),o=null!=i&&i.multidimensionalInfo?s.getSliceIndex(r):null,a=RawBlockCache.i(t,o);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&RawBlockCache.u(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=RawBlockCache.s(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.view.scale),t=this._srcResolutions[e.level];RawBlockCache.g(a,this._blockCacheRegistryId,this.view.extent,this.view.resolution,t,this.layer.raster.ioConfig.sampling);}this._blockCacheRegistryUrl=a;}}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:i,pixelType:s}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=i||"u8"===s||"s8"===s)}};request.e([request.d()],V.prototype,"subview",void 0),request.e([request.d()],V.prototype,"useWebGLForProcessing",null),request.e([request.d()],V.prototype,"useProgressiveUpdate",null),V=request.e([request.i("esri.views.2d.layers.ImageryTileLayerView2D")],V);const q=V;

exports.default = q;
