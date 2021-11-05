'use strict';

const request = require('./MapView-1195e7f1.js');
const heatmapUtils = require('./heatmapUtils-92c43432.js');
const BitmapTileContainer = require('./BitmapTileContainer-69e7e715.js');
const BaseTileRenderer = require('./BaseTileRenderer-14d20692.js');
require('./index-b630e408.js');
require('./Bitmap-0ce1bf83.js');
require('./Container-7c02556c.js');
require('./EffectList-c2e3d9b4.js');
require('./Texture-51894e1f.js');
require('./TileContainer-023b8a90.js');
require('./Utils-cf62b8df.js');
require('./WGLContainer-d1dbdedc.js');
require('./definitions-b4888cc6.js');
require('./VertexArrayObject-02afb047.js');
require('./ShaderCompiler-7b6d74e7.js');
require('./number-d65aefed.js');
require('./config-1b750faa.js');
require('./GeometryUtils-e13b3219.js');
require('./MaterialKey-a9d25bbc.js');
require('./pixelUtils-dcef9151.js');
require('./earcut-d5562923.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){heatmapUtils.a(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends BaseTileRenderer.o{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new BitmapTileContainer.n(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:s}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=s,this._gradient=heatmapUtils.n(e.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=s,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:r}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minPixelIntensity=s,o.maxPixelIntensity=r,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=request.e([request.i("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

exports.default = a;
