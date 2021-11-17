'use strict';

const aaBoundingRect = require('./aaBoundingRect-7e7e678f.js');
const MapView = require('./MapView-dbdeb77b.js');
const Bitmap = require('./Bitmap-178632aa.js');
const TileContainer = require('./TileContainer-146f8112.js');
const WGLContainer = require('./WGLContainer-c7ef30ce.js');
const Utils = require('./Utils-b188baf8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends TileContainer.r{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new Bitmap.g(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:MapView.n(),tileMat3:MapView.n()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends TileContainer.o{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(aaBoundingRect.u(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[WGLContainer.G.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===Utils.I.MAP&&super.doRender(e);}}

exports.n = n;
