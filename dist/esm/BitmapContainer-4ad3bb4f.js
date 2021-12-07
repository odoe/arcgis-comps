import { G } from './brushes-40f92a01.js';
import { I } from './Utils-e4b23428.js';
import { a } from './WGLContainer-4d1cbe95.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[G.bitmap],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

export { t };
