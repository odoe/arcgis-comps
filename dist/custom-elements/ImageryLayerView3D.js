import { z, ez as a, t, e, i } from './index.js';
import { V } from './DynamicLayerView3D.js';
import { u } from './ImageryLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(u(V)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=z((async e=>{this.redraw(((e,t)=>this._redrawImage(e,t)),e);}),2e3);}initialize(){this.handles.add([a(this.view.basemapTerrain,"ready",(()=>this.initializeMaximumDataResolution())),this.layer.on("redraw",(()=>this.redrawDebounced()))]),this.updatingHandles.add(this.layer,"exportImageServiceParameters.version",(()=>{this.updatingHandles.addPromise(this.refreshDebounced());})),this.updatingHandles.add(this,"timeExtent",(()=>this.updatingHandles.addPromise(this.refreshDebounced())));}initializeMaximumDataResolution(){const e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY});}getFetchOptions(){return {timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageElement?e.image=t.imageElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a));}async _redrawImage(e,a){if(!(e.image instanceof HTMLCanvasElement)||t(e.pixelData))return Promise.reject();const i=e.image,r=i.getContext("2d"),s=await this.layer.applyRenderer(e.pixelData,{signal:a}),o=this.layer.applyFilter(s).pixelBlock;if(t(o))return Promise.reject();i.width=o.width,i.height=o.height;const m=r.createImageData(o.width,o.height);m.data.set(o.getAsRGBA()),r.putImageData(m,0,0);}};m=e([i("esri.views.3d.layers.ImageryLayerView3D")],m);const n=m;

export default n;
