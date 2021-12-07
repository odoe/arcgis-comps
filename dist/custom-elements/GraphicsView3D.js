import { r, e, d, i, ah as p } from './index.js';
import { E } from './Graphics3DGraphicLikeLayerView.js';
import { t } from './GraphicsView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends(t(p)){constructor(r){super(r),this.graphics3d=null,this.slicePlaneEnabled=!1,this.drapeSourceType=1;}initialize(){const r="__sceneView.graphics-"+Date.now().toString(16),i={id:r,uid:r};this._set("graphics3d",new E({owner:this,layer:i})),this.graphics3d.setup();}destroy(){this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));}get updating(){var r;return !(null==(r=this.graphics3d)||!r.updating)}notifyGraphicGeometryChanged(r){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(r);}notifyGraphicVisibilityChanged(r){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(r);}get graphics3DGraphics(){return this.graphics3d.graphicsCore.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID}get symbolUpdateType(){return this.graphics3d.graphicsCore.symbolUpdateType}getGraphicFromGraphicUid(r){return this.graphics3d.getGraphicFromGraphicUid(r)}whenGraphicBounds(r,i){return this.graphics3d.whenGraphicBounds(r,i)}graphicChanged(r){this.graphics3d.graphicsCore.graphicUpdateHandler(r);}get updatePolicy(){return this.graphics3d.graphicsCore.effectiveUpdatePolicy}queryGraphics(){return Promise.resolve(this.loadedGraphics)}async fetchPopupFeatures(r$1,i){return r(i)?i.clientGraphics:null}highlight(r){return this.graphics3d.highlight(r)}maskOccludee(r){return this.graphics3d.maskOccludee(r)}};e([d({readOnly:!0,aliasOf:"view.graphics"})],c.prototype,"graphics",void 0),e([d({aliasOf:"graphics"})],c.prototype,"loadedGraphics",void 0),e([d({readOnly:!0})],c.prototype,"updating",null),e([d({constructOnly:!0})],c.prototype,"view",void 0),e([d()],c.prototype,"graphics3d",void 0),e([d({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0),c=e([i("esri.views.3d.layers.GraphicsView3D")],c);const h=c;

export default h;
