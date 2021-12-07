import { fx as p, fy as p$1, fz as u, j1 as d, t, fA as a, b2 as o, e, d as d$1, i as i$1, bL as e$1, k4 as d$2 } from './index.js';
import { m } from './ImageryTileLayerView.js';
import { i } from './RefreshableLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends(m(i(p(p$1(u))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0;}initialize(){this.layer.increaseRasterJobHandlerUsage();const e=this.updateFullExtent();this.addResolvingPromise(e);const r=d(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=this.view.basemapTerrain.tilingScheme,{tileInfo:r}=this.layer,t=["png","png24","png32","jpg","mixed"].indexOf(r.format)>-1&&e.compatibleWith(r);this.isAlignedMapTile=t;const i=t?r:e.toTileInfo();this._set("tileInfo",i),this.updatingHandles.add(this,"layer.renderer",(()=>this.refresh())),this.updatingHandles.add(this,"layer.interpolation",(()=>this.refresh())),this.updatingHandles.add(this,"layer.bandIds",(()=>this.refresh())),this.updatingHandles.add(this,"layer.multidimensionalDefinition",(()=>this.refresh()));}));this.addResolvingPromise(r);}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null;}get _blankTile(){const e=document.createElement("canvas"),r=e.getContext("2d"),[t,i]=this.tileInfo.size;return e.width=t,e.height=i,r.clearRect(0,0,t,i),r.getImageData(0,0,t,i)}get imageFormatIsOpaque(){return "jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return "mixed"===this.layer.tileInfo.format}get dataLevelRange(){const e=this.tileInfo.lods,r=this.layer.tileInfo.lods,t=e[0].scale,i=r[r.length-1].scale;return this.levelRangeFromScaleRange(t,i)}async fetchTile(e,i,s,a){const l=this.tileInfo,o=this._canSymbolizeInWebGL(),m={tileInfo:l,requestRawData:o,signal:e$1(a.signal),requestAsImageElement:this.isAlignedMapTile},d=await this.layer.fetchTile(e,i,s,m);if(d instanceof HTMLImageElement)return d;let h=d&&d.pixelBlock;if(t(h))return this._blankTile;if(!o&&(h=await this.layer.applyRenderer(d),t(h)))return this._blankTile;const p=new d$2([e,i,s],h,l.size[0],l.size[1]);return o?(p.symbolizerRenderer=this.layer.symbolizer.rendererJSON,p.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),p.transformGrid=d.transformGrid):p.isRendereredSource=!0,p.interpolation=this.layer.interpolation,p.bandIds=this.layer.bandIds,p}_getSymbolizerOptions(e){const r=this.tileInfo.lodAt(e).resolution;return {pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:r,y:r},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])));}createFetchPopupFeaturesQueryGeometry(e,r){return a(e,r,this.view)}refresh(){this.emit("data-changed");}async doRefresh(e){this.suspended||this.emit("data-changed");}_canSymbolizeInWebGL(){return o().supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};e([d$1({readOnly:!0})],c.prototype,"_blankTile",null),e([d$1({readOnly:!0})],c.prototype,"imageFormatIsOpaque",null),e([d$1({readOnly:!0})],c.prototype,"hasMixedImageFormats",null),e([d$1({readOnly:!0})],c.prototype,"dataLevelRange",null),c=e([i$1("esri.views.3d.layers.ImageryTileLayerView3D")],c);const g=c;

export default g;
