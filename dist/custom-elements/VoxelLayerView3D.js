import { fy as p$1, fz as u, s, bD as E, a4 as i, e, d as d$1, i as i$1 } from './index.js';
import { t } from './VoxelWasmManager.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends(p$1(u)){constructor(){super(...arguments),this.type="voxel-3d",this._wasmLayerId=-1;}initialize(){if("local"!==this.view.viewingMode)throw new s("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if("webgl2"!==this.view._stage.renderView.renderingContext.webglVersion)throw new s("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});const e=this.layer.spatialReference;if(!E(e,this.view.spatialReference))throw new s("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t$1=t.getInstance(),i$1=t$1.addLayer(this.view,this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=i(this,"suspended",(e=>{t.getInstance().setLayerEnabled(this.view,this,!e);}));})).catch((e=>{if(t$1.removeLayer(this.view,this),this._wasmLayerId=-1,-1===e)throw new s("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new s("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(i$1);}destroy(){t.getInstance().removeLayer(this.view,this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null);}isUpdating(){return !(this._wasmLayerId<0)&&t.getInstance().isUpdating(this.view,this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating");}};e([d$1()],d.prototype,"layer",void 0),e([d$1({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],d.prototype,"baseUrl",void 0),d=e([i$1("esri.views.3d.layers.VoxelLayerView3D")],d);const p=d;

export default p;
