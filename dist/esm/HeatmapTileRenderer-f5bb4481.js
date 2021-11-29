import { e, i as i$1 } from './MapView-ac75aae8.js';
import { a as a$1, n as n$1 } from './heatmapUtils-48b4ec02.js';
import { n } from './BitmapTileContainer-fad3775a.js';
import { o as o$1 } from './BaseTileRenderer-5b8698b5.js';
import './index-b157fcf2.js';
import './Bitmap-e8888c96.js';
import './Container-8507ec1d.js';
import './EffectList-bba3153e.js';
import './Texture-73a4a34c.js';
import './TileContainer-05fc793f.js';
import './Utils-7fb1778c.js';
import './WGLContainer-42105821.js';
import './definitions-6a5ca2d9.js';
import './VertexArrayObject-78033d70.js';
import './ShaderCompiler-93f6243b.js';
import './number-851eb983.js';
import './config-768959de.js';
import './GeometryUtils-491632d8.js';
import './MaterialKey-a9776b0a.js';
import './pixelUtils-9079607d.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){a$1(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends o$1{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:s}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=s,this._gradient=n$1(e.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=s,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:r}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minPixelIntensity=s,o.maxPixelIntensity=r,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e([i$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export default a;
