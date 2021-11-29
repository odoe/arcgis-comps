'use strict';

const request = require('./MapView-1726f571.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends request.d$17{constructor(e){super(e),this.tiles=new Map;}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null;}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e);}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e);}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady;})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate();}};request.e([request.d()],i.prototype,"layer",void 0),request.e([request.d()],i.prototype,"layerView",void 0),request.e([request.d()],i.prototype,"tileInfoView",void 0),request.e([request.d()],i.prototype,"updating",null),i=request.e([request.i("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;

exports.o = o;
