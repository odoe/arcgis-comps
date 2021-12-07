import { fA as a$1, e, i as i$1 } from './index.js';
import { V } from './DynamicLayerView3D.js';
import { c } from './MapImageLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends(c(V)){constructor(){super(...arguments),this.type="map-image-3d";}initialize(){this.updatingHandles.add(this,"exportImageVersion",(()=>this.updatingHandles.addPromise(this.refreshDebounced())));}createFetchPopupFeaturesQueryGeometry(e,r){return a$1(e,r,this.view)}getFetchOptions(){return {timeExtent:this.timeExtent}}};i=e([i$1("esri.views.3d.layers.MapImageLayerView3D")],i);const a=i;

export default a;
