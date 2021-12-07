'use strict';

const brushes = require('./brushes-09287871.js');
const Utils = require('./Utils-a77299a6.js');
const WGLContainer = require('./WGLContainer-1a8439fd.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends WGLContainer.a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[brushes.G.bitmap],target:()=>this.children,drawPhase:Utils.I.MAP});return [...super.prepareRenderPasses(s),t]}}

exports.t = t;
