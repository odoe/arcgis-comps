'use strict';

const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const DefaultUI = require('./DefaultUI-75d05512.js');
const Bitmap = require('./Bitmap-668e0fbf.js');
const TiledDisplayObject = require('./TiledDisplayObject-0701494f.js');
const brushes = require('./brushes-09287871.js');
const Utils = require('./Utils-a77299a6.js');
const TileContainer = require('./TileContainer-1c8142b6.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends TiledDisplayObject.r{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new Bitmap.g(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:DefaultUI.n$2(),tileMat3:DefaultUI.n$2()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends TileContainer.o{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(aaBoundingRect.u(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[brushes.G.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===Utils.I.MAP&&super.doRender(e);}}

exports.n = n;
