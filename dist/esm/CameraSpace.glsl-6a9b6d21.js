import { af as t } from './messageBundle-f75b4090.js';
import { p } from './screenUtils-9bb7e30c.js';
import { a } from './vec2-5672471e.js';
import { c as c$1, r, o as o$1 } from './mathUtils-e16f9389.js';
import { c } from './vectorStacks-9205ea46.js';
import { t as t$1 } from './Texture-1e5e4be2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,n,o){return u(e,e.screenToRender(n,p(c.get())),o)}function u(t$1,c$2,s){const u=p(a(c.get(),c$2));if(u[2]=0,!t$1.unprojectFromRenderScreen(u,s.origin))return null;const m=p(a(c.get(),c$2));m[2]=1;const g=t$1.unprojectFromRenderScreen(m,c.get());return t(g)?null:(c$1(s.direction,g,s.origin),s)}function m(e,n,o){return g(e,e.screenToRender(n,p(c.get())),o)}function g(r$1,n,s){r(s.origin,r$1.eye);const u=o$1(c.get(),n[0],n[1],1),m=r$1.unprojectFromRenderScreen(u,c.get());return t(m)?null:(c$1(s.direction,m,s.origin),s)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.fragment.uniforms.add("projInfo","vec4"),o.fragment.uniforms.add("zScale","vec2"),o.fragment.code.add(t$1`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);}

export { g, m, o, s };
