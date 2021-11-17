'use strict';

const mat3 = require('./mat3-1bc0ab17.js');
const Container = require('./Container-cb837708.js');
const TileKey = require('./TileKey-b425207e.js');
const request = require('./messageBundle-312ceb47.js');
const Utils = require('./Utils-b188baf8.js');
const WGLContainer = require('./WGLContainer-c7ef30ce.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends Container.a{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new TileKey.e(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;mat3.s(h,a,0,0,0,l,0,o,n,1),mat3.i(this.transforms.dvs,i.displayViewMat3,h);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends WGLContainer.a{constructor(e){super(),this._tileInfoView=e;}get requiresDedicatedFBO(){return !1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e);}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[WGLContainer.a$1],drawPhase:Utils.I.DEBUG|Utils.I.MAP|Utils.I.HIGHLIGHT,target:()=>this.getStencilTarget()})),request.s$3("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[WGLContainer.m],drawPhase:Utils.I.DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s);}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++;}}

exports.o = o;
exports.r = r;
