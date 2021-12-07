'use strict';

const request = require('./messageBundle-8be88d04.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const vec2 = require('./vec2-d000a8cb.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const vectorStacks = require('./vectorStacks-f48a010a.js');
const Texture = require('./Texture-16b1a373.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,n,o){return u(e,e.screenToRender(n,screenUtils.p(vectorStacks.c.get())),o)}function u(t,c,s){const u=screenUtils.p(vec2.a(vectorStacks.c.get(),c));if(u[2]=0,!t.unprojectFromRenderScreen(u,s.origin))return null;const m=screenUtils.p(vec2.a(vectorStacks.c.get(),c));m[2]=1;const g=t.unprojectFromRenderScreen(m,vectorStacks.c.get());return request.t$1(g)?null:(mathUtils.c(s.direction,g,s.origin),s)}function m(e,n,o){return g(e,e.screenToRender(n,screenUtils.p(vectorStacks.c.get())),o)}function g(r,n,s){mathUtils.r(s.origin,r.eye);const u=mathUtils.o(vectorStacks.c.get(),n[0],n[1],1),m=r.unprojectFromRenderScreen(u,vectorStacks.c.get());return request.t$1(m)?null:(mathUtils.c(s.direction,m,s.origin),s)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.fragment.uniforms.add("projInfo","vec4"),o.fragment.uniforms.add("zScale","vec2"),o.fragment.code.add(Texture.t`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);}

exports.g = g;
exports.m = m;
exports.o = o;
exports.s = s;
