'use strict';

const WGLContainer = require('./WGLContainer-d1dbdedc.js');
const Utils = require('./Utils-cf62b8df.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends WGLContainer.a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[WGLContainer.G.bitmap],target:()=>this.children,drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(s),t]}}

exports.t = t;
