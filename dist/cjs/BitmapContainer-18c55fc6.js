'use strict';

const WGLContainer = require('./WGLContainer-c7ef30ce.js');
const Utils = require('./Utils-b188baf8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends WGLContainer.a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[WGLContainer.G.bitmap],target:()=>this.children,drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(s),t]}}

exports.t = t;
