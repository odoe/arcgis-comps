import { a as s } from './index.js';
import { I } from './Utils.js';
import { a } from './WGLContainer.js';
import { a as a$1, m } from './brushes.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends a{constructor(e){super(),this._tileInfoView=e;}get requiresDedicatedFBO(){return !1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e);}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s$1){const i=super.prepareRenderPasses(s$1);return i.push(s$1.registerRenderPass({name:"stencil",brushes:[a$1],drawPhase:I.DEBUG|I.MAP|I.HIGHLIGHT,target:()=>this.getStencilTarget()})),s("esri-tiles-debug")&&i.push(s$1.registerRenderPass({name:"tileInfo",brushes:[m],drawPhase:I.DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s);}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++;}}

export { o };
