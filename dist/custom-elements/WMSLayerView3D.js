import { s, M, e, d, i } from './index.js';
import { V } from './DynamicLayerView3D.js';
import { a } from './WMSLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(a(V)){constructor(){super(...arguments),this.type="wms-3d";}initialize(){this.layer.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add(this.exportImageParameters,"version",(()=>{this.updatingHandles.addPromise(this.refreshDebounced());}));}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),r=t.extent,s=new M(r[0],r[1],r[2],r[3],this._spatialReference),o=t.imageSize,a=o.width,p=o.height,n=s.width/a;return {extent:s,width:a,height:p,x:Math.round((e.x-s.xmin)/n),y:Math.round((s.ymax-e.y)/n)}}getFetchOptions(){return {timeExtent:this.timeExtent}}};e([d()],p.prototype,"suspended",void 0),p=e([i("esri.views.3d.layers.WMSLayerView3D")],p);const n=p;

export default n;
