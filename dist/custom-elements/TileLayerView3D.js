import { fx as p, fy as p$1, fz as u, t, eI as tn, s, fA as a, e, d, i as i$2 } from './index.js';
import { i } from './RefreshableLayerView.js';
import { i as i$1 } from './TileLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends(i(p(i$1(p$1(u))))){constructor(){super(...arguments),this.type="tile-3d";}get imageFormatIsOpaque(){return "jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return "mixed"===this.layer.tileInfo.format}get dataLevelRange(){if(this.tileInfo){const e=this.tileInfo.lods,r=e[0].scale,t=e[e.length-1].scale;return this.levelRangeFromScaleRange(r,t)}return {minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const e=this.layer.get("fullExtent.spatialReference"),i=this.layer.get("tileInfo.spatialReference");if(t(e)||t(i)||!tn(e,i)){const e="defaults"===this.layer.originOf("fullExtent")||t(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new s("layerview:incompatible-fullextent",e)));}}this._addTilingSchemeMatchPromise();}createFetchPopupFeaturesQueryGeometry(e,r){return a(e,r,this.view)}async doRefresh(e){this.suspended||this.emit("data-changed");}};e([d({readOnly:!0})],c.prototype,"imageFormatIsOpaque",null),e([d({readOnly:!0})],c.prototype,"hasMixedImageFormats",null),e([d({aliasOf:"layer.fullExtent"})],c.prototype,"fullExtent",void 0),e([d()],c.prototype,"layer",void 0),e([d({aliasOf:"layer.tileInfo"})],c.prototype,"tileInfo",void 0),e([d({readOnly:!0})],c.prototype,"dataLevelRange",null),c=e([i$2("esri.views.3d.layers.TileLayerView3D")],c);const y=c;

export default y;
