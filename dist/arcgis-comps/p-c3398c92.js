import{T as e,cl as t,a7 as n,b as s,t as a,b4 as l,cm as o,r,bh as c,cn as i,co as u,cp as p,aX as h,cq as f}from"./p-5420851c.js";import{y as m,p as d}from"./p-e4802f24.js";import{u as b,h as y,d as k,t as v,l as M,s as w,a as g,p as L,e as j,o as P,n as x,c as D,m as S}from"./p-f44446be.js";import{resolveWebStyleSymbol as q}from"./p-94382dd8.js";import"./p-53bb6ab4.js";import"./p-4d0ba4c4.js";const Z=22,I=120,T=e.getLogger("esri.symbols.support.previewSymbol3D");function C(e){const t=e.outline,n=r(e.material)?e.material.color:null,s=r(n)?n.toHex():null;if(a(t)||"pattern"in t&&r(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===s?{color:"#bdc3c7",width:.75}:null;const l=c(t.size)||0;return{color:"rgba("+(r(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(l,80),style:"pattern"in t&&r(t.pattern)&&"style"===t.pattern.type?i(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function F(e,t){const s=t&&t.resource,a=s&&s.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(a&&"object"!==t.type)return Promise.resolve(o(e,t));const l=n("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?q(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||l})):Promise.resolve(l)}function H(e,t=1){const n=e.a,s=m(e),a=s.h,l=s.s/t,o=100-(100-s.v)/t,{r,g:c,b:i}=d({h:a,s:l,v:o});return[r,c,i,n]}function N(e){return"water"===e.type?a(e.color)?null:e.color:a(e.material)||a(e.material.color)?null:e.material.color}function R(e,t=0){const n=N(e);if(!n){if("fill"===e.type)return null;const n=b(f.r,t);return[n,n,n,100]}const s=n.toRgba();for(let e=0;e<3;e++)s[e]=b(s[e],t);return s}async function W(e,s){const a=e.style;return"none"===a?null:{type:"pattern",x:0,y:0,src:await t(n(`esri/symbols/patterns/${a}.png`),s.toCss(!0)),width:5,height:5}}function X(e){return e.outline?C(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function $(e,t){const n=N(e);if(!n)return null;let s="rgba(";return s+=b(n.r,t)+",",s+=b(n.g,t)+",",s+=b(n.b,t)+",",s+n.a+");"}function z(e,t){const n=$(e,t);return n?"pattern"in e&&r(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:n,width:Math.min(e.size?c(e.size):.75,80),style:"pattern"in e&&r(e.pattern)&&"style"===e.pattern.type?i(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?c(2):e.join:null}:{}}function A(e,t,n){const s=.75*n;return{type:"linear",x1:s?.25*s:0,y1:s?.5*s:0,x2:s||4,y2:s?.5*s:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function B(e,t,n){const s=[];if(!e)return s;switch(e.type){case"icon":{const n=0,a=0,l=t,o=t;switch(e.resource&&e.resource.primitive||p){case"circle":s.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:R(e,0),stroke:C(e)});break;case"square":s.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[n,a]},{command:"L",values:[l,a]},{command:"L",values:[l,o]},{command:"Z",values:[]}]},fill:R(e,0),stroke:C(e)});break;case"triangle":s.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[.5*l,a]},{command:"L",values:[l,o]},{command:"Z",values:[]}]},fill:R(e,0),stroke:C(e)});break;case"cross":s.push({shape:{type:"path",path:[{command:"M",values:[.5*l,a]},{command:"L",values:[.5*l,o]},{command:"M",values:[n,.5*o]},{command:"L",values:[l,.5*o]}]},stroke:X(e)});break;case"x":s.push({shape:{type:"path",path:[{command:"M",values:[n,a]},{command:"L",values:[l,o]},{command:"M",values:[l,a]},{command:"L",values:[n,o]}]},stroke:X(e)});break;case"kite":s.push({shape:{type:"path",path:[{command:"M",values:[n,.5*o]},{command:"L",values:[.5*l,a]},{command:"L",values:[l,.5*o]},{command:"L",values:[.5*l,o]},{command:"Z",values:[]}]},fill:R(e,0),stroke:C(e)})}break}case"object":switch(e.resource&&e.resource.primitive||u){case"cone":{const a=A(R(e,0),R(e,-.6),n?20:t),l=x(t,n);s.push({shape:l[0],fill:a}),s.push({shape:l[1],fill:a});break}case"inverted-cone":{const n=R(e,0),a=A(n,R(e,-.6),t),l=P(t);s.push({shape:l[0],fill:a}),s.push({shape:l[1],fill:n});break}case"cube":{const a=L(t,n);s.push({shape:a[0],fill:R(e,0)}),s.push({shape:a[1],fill:R(e,-.3)}),s.push({shape:a[2],fill:R(e,-.5)});break}case"cylinder":{const a=A(R(e,0),R(e,-.6),n?20:t),l=g(t,n);s.push({shape:l[0],fill:a}),s.push({shape:l[1],fill:a}),s.push({shape:l[2],fill:R(e,0)});break}case"diamond":{const n=w(t);s.push({shape:n[0],fill:R(e,-.3)}),s.push({shape:n[1],fill:R(e,0)}),s.push({shape:n[2],fill:R(e,-.3)}),s.push({shape:n[3],fill:R(e,-.7)});break}case"sphere":{const n=A(R(e,0),R(e,-.6));n.x1=0,n.y1=0,n.x2=.25*t,n.y2=.25*t,s.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:n});break}case"tetrahedron":{const n=M(t);s.push({shape:n[0],fill:R(e,-.3)}),s.push({shape:n[1],fill:R(e,0)}),s.push({shape:n[2],fill:R(e,-.6)});break}}}return s}function E(e,t){const n=e.symbolLayers,s=[],l=h(e),o=t&&t.size?c(t.size):null,r=(t&&t.maxSize?c(t.maxSize):null)||80;let i,u=0,p=0;return n.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const n=[];switch(e.type){case"line":{const s=z(e,0);if(a(s))break;const l=s&&s.width||0;0===t&&(i=l);const c=Math.min(o||l,r),h=0===t?c:o?c*(l/i):c,f=h>20?2*h:40;p=Math.max(p,h),u=Math.max(u,f),s.width=h,n.push({shape:{type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[u,.5*p]}]},stroke:s});break}case"path":{const t=Math.min(o||Z,r),s=R(e,0),a=R(e,-.2),l=$(e,-.4),c=l?{color:l,width:1}:{};if("quad"===e.profile){const t=e.width,l=e.height,o=j(t&&l?t/l:1,0===l,0===t),r={...c,join:"bevel"};n.push({shape:o[0],fill:a,stroke:r}),n.push({shape:o[1],fill:a,stroke:r}),n.push({shape:o[2],fill:s,stroke:r})}else n.push({shape:v.pathSymbol3DLayer[0],fill:a,stroke:c}),n.push({shape:v.pathSymbol3DLayer[1],fill:s,stroke:c});p=Math.max(p,t),u=p}}s.push(n)})),Promise.resolve(y(s,[u,p],{node:t&&t.node,scale:l,opacity:t&&t.opacity}))}async function G(e,t){const n="mesh-3d"===e.type,s=e.symbolLayers,l=t&&t.size?c(t.size):null,o=t&&t.maxSize?c(t.maxSize):null,i=l||Z,u=[];let p=0,h=0,f=!1;for(let e=0;e<s.length;e++){const t=s.getItemAt(e),l=[];if(n&&"fill"!==t.type)continue;const c=v.fill[0];switch(t.type){case"fill":{const e=C(t),s=Math.min(i,o||I);p=Math.max(p,s),h=Math.max(h,s),f=!0;let a=R(t,0);const u="pattern"in t&&t.pattern,m=N(t);!n&&r(u)&&"style"===u.type&&"solid"!==u.style&&m&&(a=await W(u,m)),l.push({shape:c,fill:a,stroke:e});break}case"line":{const e=z(t,0);if(a(e))break;const n={stroke:e,shape:c};p=Math.max(p,Z),h=Math.max(h,Z),l.push(n);break}case"extrude":{const e={join:"round",width:1,...z(t,-.4)},n=R(t,0),s=R(t,-.2),a=Math.min(i,o||I),r=S(a);e.width=1,l.push({shape:r[0],fill:s,stroke:e}),l.push({shape:r[1],fill:s,stroke:e}),l.push({shape:r[2],fill:n,stroke:e});const c=.7*Z+.5*a;p=Math.max(p,Z),h=Math.max(h,c);break}case"water":{const e=N(t),n=H(e),s=H(e,2),a=H(e,3),r=D();f=!0,l.push({shape:r[0],fill:n}),l.push({shape:r[1],fill:s}),l.push({shape:r[2],fill:a});const c=Math.min(i,o||I);p=Math.max(p,c),h=Math.max(h,c);break}}u.push(l)}return Promise.resolve(y(u,[p,h],{node:t&&t.node,scale:f,opacity:t&&t.opacity}))}function J(e,t){if(0===e.symbolLayers.length)return Promise.reject(new s("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return function(e,t){const n=t&&t.size?c(t.size):null,s=t&&t.maxSize?c(t.maxSize):null,a=t&&t.disableUpsampling,o=e.symbolLayers,r=[];let i=0,u=0;const p=o.getItemAt(o.length-1);let h;return p&&"icon"===p.type&&(h=p.size&&c(p.size)),o.forEach((l=>{if("icon"!==l.type&&"object"!==l.type)return;const o="icon"===l.type?l.size&&c(l.size):0,p=n||o?Math.ceil(Math.min(n||o,s||I)):Z;if(l&&l.resource&&l.resource.href){const t=F(e,l).then((function(e){const t=l.get("material.color"),n=function(e){return"icon"===e.type?"multiply":"tint"}(l);return k(e,p,t,n,a)})).then((function(e){const t=e.width,n=e.height;return i=Math.max(i,t),u=Math.max(u,n),[{shape:{type:"image",x:0,y:0,width:t,height:n,src:e.url},fill:null,stroke:null}]}));r.push(t)}else{var f;let e=p;"icon"===l.type&&h&&n&&(e=p*(o/h));const s="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(f=t.symbolConfig)?void 0:f.isTall)||"object"===l.type&&function(e){const t=e.depth,n=e.height,s=e.width;return s&&t&&n&&s===t&&s<n}(l);i=Math.max(i,s?20:e),u=Math.max(u,e),r.push(Promise.resolve(B(l,e,s)))}})),l(r).then((function(e){const n=[];return e.forEach((function(e){e.value?n.push(e.value):e.error&&T.warn("error while building swatchInfo!",e.error)})),y(n,[i,u],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}(e,t);case"line-3d":return E(e,t);case"polygon-3d":case"mesh-3d":return G(e,t)}return Promise.reject(new s("symbolPreview: swatchInfo3D","symbol not supported."))}export{W as getPatternDescriptor,R as getSymbolLayerFill,J as previewSymbol3D}