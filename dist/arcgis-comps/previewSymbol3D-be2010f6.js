import { f as s, A as r, g as t, at as a, T as T$1, h as s$2 } from './jsxFactory-b8b7429b.js';
import { y, p } from './colorUtils-a7d03078.js';
import { u, J as d$1, N as j } from './Graphic-75d1efd2.js';
import { x, d, c as k, e as w, w as w$1 } from './utils-64bd22f7.js';
import { u as u$1, l, s as s$1, a as L, p as p$1, o, n, d as d$2, h, e, t as t$1, c, m } from './renderUtils-dc4bceb3.js';
import { resolveWebStyleSymbol as g } from './webStyleSymbolUtils-53b772f2.js';
import './index-921bd636.js';
import './JSONSupport-15eefdaf.js';
import './asyncUtils-4aacff64.js';
import './ItemCache-4c9e4246.js';
import './MemCache-ba22e87a.js';
import './utils-f8425723.js';
import './mat2d-c0cd43b0.js';
import './devEnvironmentUtils-3628b10d.js';
import './jsonUtils-904bd6e1.js';
import './styleUtils-2aef643e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D=22,O=120,C=80,I=40,R=20,E=s.getLogger("esri.symbols.support.previewSymbol3D");function Z(e){const t$1=e.outline,s=r(e.material)?e.material.color:null,r$1=r(s)?s.toHex():null;if(t(t$1)||"pattern"in t$1&&r(t$1.pattern)&&"style"===t$1.pattern.type&&"none"===t$1.pattern.style)return "fill"===e.type&&"#ffffff"===r$1?{color:"#bdc3c7",width:.75}:null;const o=u(t$1.size)||0;return {color:"rgba("+(r(t$1.color)?t$1.color.toRgba():"255,255,255,1")+")",width:Math.min(o,C),style:"pattern"in t$1&&r(t$1.pattern)&&"style"===t$1.pattern.type?x(t$1.pattern.style):null,join:"butt",cap:"patternCap"in t$1?t$1.patternCap:"butt"}}function q(t,s){const r=s&&s.resource,o=r&&r.href;if(t.thumbnail&&t.thumbnail.url)return Promise.resolve(t.thumbnail.url);if(o&&"object"!==s.type)return Promise.resolve(d(t,s));const a$1=a("esri/images/Legend/legend3dsymboldefault.png");return t.styleOrigin&&(t.styleOrigin.styleName||t.styleOrigin.styleUrl)?g(t.styleOrigin,{portal:t.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return (null==e||null==(t=e.thumbnail)?void 0:t.url)||a$1})):Promise.resolve(a$1)}function A(e,r=1){const o=e.a,a=y(e),n=a.h,l=a.s/r,i=100-(100-a.v)/r,{r:c,g:p$1,b:u}=p({h:n,s:l,v:i});return [c,p$1,u,o]}function H(e){return "water"===e.type?t(e.color)?null:e.color:t(e.material)||t(e.material.color)?null:e.material.color}function N(e,t=0){const s=H(e);if(!s){if("fill"===e.type)return null;const s=k.r,r=u$1(s,t);return [r,r,r,100]}const r=s.toRgba();for(let o=0;o<3;o++)r[o]=u$1(r[o],t);return r}async function T(t,s){const r=t.style;if("none"===r)return null;return {type:"pattern",x:0,y:0,src:await w(a(`esri/symbols/patterns/${r}.png`),s.toCss(!0)),width:5,height:5}}function $(e){return e.outline?Z(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function B(e,t){const s=H(e);if(!s)return null;let r="rgba(";return r+=u$1(s.r,t)+",",r+=u$1(s.g,t)+",",r+=u$1(s.b,t)+",",r+s.a+");"}function F(e,t){const s=B(e,t);if(!s)return {};if("pattern"in e&&r(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style)return null;return {color:s,width:Math.min(e.size?u(e.size):.75,C),style:"pattern"in e&&r(e.pattern)&&"style"===e.pattern.type?x(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?u(2):e.join:null}}function G(e,t,s){const r=.75*s;return {type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function J(e){const t=e.depth,s=e.height,r=e.width;return r&&t&&s&&r===t&&r<s}function K(e,t,s){const r=[];if(!e)return r;switch(e.type){case"icon":{const s=0,o=0,a=t,n=t;switch(e.resource&&e.resource.primitive||j){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:N(e,0),stroke:Z(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[s,o]},{command:"L",values:[a,o]},{command:"L",values:[a,n]},{command:"Z",values:[]}]},fill:N(e,0),stroke:Z(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,n]},{command:"Z",values:[]}]},fill:N(e,0),stroke:Z(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*a,o]},{command:"L",values:[.5*a,n]},{command:"M",values:[s,.5*n]},{command:"L",values:[a,.5*n]}]},stroke:$(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[s,o]},{command:"L",values:[a,n]},{command:"M",values:[a,o]},{command:"L",values:[s,n]}]},stroke:$(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[s,.5*n]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,.5*n]},{command:"L",values:[.5*a,n]},{command:"Z",values:[]}]},fill:N(e,0),stroke:Z(e)});}break}case"object":switch(e.resource&&e.resource.primitive||d$1){case"cone":{const o=G(N(e,0),N(e,-.6),s?R:t),a=n(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o});break}case"inverted-cone":{const s=N(e,0),o$1=G(s,N(e,-.6),t),a=o(t);r.push({shape:a[0],fill:o$1}),r.push({shape:a[1],fill:s});break}case"cube":{const o=p$1(t,s);r.push({shape:o[0],fill:N(e,0)}),r.push({shape:o[1],fill:N(e,-.3)}),r.push({shape:o[2],fill:N(e,-.5)});break}case"cylinder":{const o=G(N(e,0),N(e,-.6),s?R:t),a=L(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o}),r.push({shape:a[2],fill:N(e,0)});break}case"diamond":{const s=s$1(t);r.push({shape:s[0],fill:N(e,-.3)}),r.push({shape:s[1],fill:N(e,0)}),r.push({shape:s[2],fill:N(e,-.3)}),r.push({shape:s[3],fill:N(e,-.7)});break}case"sphere":{const s=G(N(e,0),N(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=l(t);r.push({shape:s[0],fill:N(e,-.3)}),r.push({shape:s[1],fill:N(e,0)}),r.push({shape:s[2],fill:N(e,-.6)});break}}break}return r}function Q(e){return "icon"===e.type?"multiply":"tint"}function V(e,t){const s=t&&t.size?u(t.size):null,r=t&&t.maxSize?u(t.maxSize):null,o=t&&t.disableUpsampling,a=e.symbolLayers,n=[];let c=0,p=0;const u$1=a.getItemAt(a.length-1);let h$1;return u$1&&"icon"===u$1.type&&(h$1=u$1.size&&u(u$1.size)),a.forEach((a=>{if("icon"!==a.type&&"object"!==a.type)return;const l="icon"===a.type?a.size&&u(a.size):0,u$1=s||l?Math.ceil(Math.min(s||l,r||O)):D;if(a&&a.resource&&a.resource.href){const t=q(e,a).then((function(e){const t=a.get("material.color"),s=Q(a);return d$2(e,u$1,t,s,o)})).then((function(e){const t=e.width,s=e.height;return c=Math.max(c,t),p=Math.max(p,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));n.push(t);}else {var m;let e=u$1;"icon"===a.type&&h$1&&s&&(e=u$1*(l/h$1));const r="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(m=t.symbolConfig)?void 0:m.isTall)||"object"===a.type&&J(a);c=Math.max(c,r?R:e),p=Math.max(p,e),n.push(Promise.resolve(K(a,e,r)));}})),T$1(n).then((function(e){const s=[];return e.forEach((function(e){e.value?s.push(e.value):e.error&&E.warn("error while building swatchInfo!",e.error);})),h(s,[c,p],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function W(e$1,t$2){const s=e$1.symbolLayers,r=[],o=w$1(e$1),n=t$2&&t$2.size?u(t$2.size):null,l=(t$2&&t$2.maxSize?u(t$2.maxSize):null)||C;let c,p=0,u$1=0;return s.forEach(((e$1,t$2)=>{if(!e$1)return;if("line"!==e$1.type&&"path"!==e$1.type)return;const s=[];switch(e$1.type){case"line":{const r=F(e$1,0);if(t(r))break;const o=r&&r.width||0;0===t$2&&(c=o);const i=Math.min(n||o,l),h=0===t$2?i:n?i*(o/c):i,m=h>I/2?2*h:I;u$1=Math.max(u$1,h),p=Math.max(p,m),r.width=h,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u$1]},{command:"L",values:[p,.5*u$1]}]},stroke:r});break}case"path":{const t=Math.min(n||D,l),r=N(e$1,0),o=N(e$1,-.2),a=B(e$1,-.4),i=a?{color:a,width:1}:{};if("quad"===e$1.profile){const t=e$1.width,a=e$1.height,n=e(t&&a?t/a:1,0===a,0===t),l={...i,join:"bevel"};s.push({shape:n[0],fill:o,stroke:l}),s.push({shape:n[1],fill:o,stroke:l}),s.push({shape:n[2],fill:r,stroke:l});}else s.push({shape:t$1.pathSymbol3DLayer[0],fill:o,stroke:i}),s.push({shape:t$1.pathSymbol3DLayer[1],fill:r,stroke:i});u$1=Math.max(u$1,t),p=u$1;}}r.push(s);})),Promise.resolve(h(r,[p,u$1],{node:t$2&&t$2.node,scale:o,opacity:t$2&&t$2.opacity}))}async function X(e,t$2){const s="mesh-3d"===e.type,r$1=e.symbolLayers,o=t$2&&t$2.size?u(t$2.size):null,l=t$2&&t$2.maxSize?u(t$2.maxSize):null,c$1=o||D,p=[];let u$1=0,h$1=0,m$1=!1;for(let i=0;i<r$1.length;i++){const e=r$1.getItemAt(i),t$2=[];if(s&&"fill"!==e.type)continue;const o=t$1.fill[0];switch(e.type){case"fill":{const r$1=Z(e),a=Math.min(c$1,l||O);u$1=Math.max(u$1,a),h$1=Math.max(h$1,a),m$1=!0;let i=N(e,0);const p="pattern"in e&&e.pattern,f=H(e);!s&&r(p)&&"style"===p.type&&"solid"!==p.style&&f&&(i=await T(p,f)),t$2.push({shape:o,fill:i,stroke:r$1});break}case"line":{const s=F(e,0);if(t(s))break;const r={stroke:s,shape:o};u$1=Math.max(u$1,D),h$1=Math.max(h$1,D),t$2.push(r);break}case"extrude":{const s={join:"round",width:1,...F(e,-.4)},r=N(e,0),o=N(e,-.2),a=Math.min(c$1,l||O),n=m(a);s.width=1,t$2.push({shape:n[0],fill:o,stroke:s}),t$2.push({shape:n[1],fill:o,stroke:s}),t$2.push({shape:n[2],fill:r,stroke:s});const i=D,p=.7*D+.5*a;u$1=Math.max(u$1,i),h$1=Math.max(h$1,p);break}case"water":{const s=H(e),r=A(s),o=A(s,2),a=A(s,3),n=c();m$1=!0,t$2.push({shape:n[0],fill:r}),t$2.push({shape:n[1],fill:o}),t$2.push({shape:n[2],fill:a});const i=Math.min(c$1,l||O);u$1=Math.max(u$1,i),h$1=Math.max(h$1,i);break}}p.push(t$2);}return Promise.resolve(h(p,[u$1,h$1],{node:t$2&&t$2.node,scale:m$1,opacity:t$2&&t$2.opacity}))}function Y(e,t){if(0===e.symbolLayers.length)return Promise.reject(new s$2("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return V(e,t);case"line-3d":return W(e,t);case"polygon-3d":case"mesh-3d":return X(e,t)}return Promise.reject(new s$2("symbolPreview: swatchInfo3D","symbol not supported."))}

export { T as getPatternDescriptor, N as getSymbolLayerFill, Y as previewSymbol3D };
