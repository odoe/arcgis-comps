'use strict';

const request = require('./MapView-922b9f1e.js');
const Bitmap = require('./Bitmap-b7a48c7c.js');
const TileContainer = require('./TileContainer-3b85eaa8.js');
const WGLContainer = require('./WGLContainer-ee8dfeda.js');
const Utils = require('./Utils-b513a4f3.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends TileContainer.r{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new Bitmap.g(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:request.n$12(),tileMat3:request.n$12()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends TileContainer.o{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(request.u$5(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[WGLContainer.G.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===Utils.I.MAP&&super.doRender(e);}}

exports.n = n;
