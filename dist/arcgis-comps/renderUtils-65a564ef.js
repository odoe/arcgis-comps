import { h as h$3 } from './Graphic-08cda9ca.js';
import { s as s$2, n as n$1, F as i$1, E as E$1, h as s$3, ae as n$4 } from './jsxFactory-a3b6abde.js';
import { y as y$1, p as p$2 } from './colorUtils-a7d03078.js';
import { i, n as n$2, e as e$1, c as c$2, a as n$3, o as o$1 } from './mat2d-c1b9a27f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function e(a,t,e){const m=22;let c=m,p=m;a<1?c*=.75:a>1&&(p*=1.25);const L=0,n=0;let o=m,s=m;t&&e&&(c=p=o=s=0);return [{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[e?o:.875*o,L]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[o,t?L:.125*s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c-.5*o,p-.5*s]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[e?c-.5*o:n,t?p-.5*s:s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"Z",values:[]}]}]}function m$2(a){const t=22,e=.5*a,m=0,c=0;return [{type:"path",path:[{command:"M",values:[c,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[c,.7*t+e-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[t,e]},{command:"L",values:[t,m]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,m]},{command:"L",values:[t,m]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[c,.7*t*.5]},{command:"Z",values:[]}]}]}function c$1(){return [{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p$1(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=0,p=0,L=t?.35*e:.5*e;return [{type:"path",path:[{command:"M",values:[.5*e,c]},{command:"L",values:[e,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[p,.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[p,a-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[e,a-.5*L]},{command:"L",values:[e,.5*L]},{command:"Z",values:[]}]}]}function L$1(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.5*e,p=.15*e,L=0,n=a-p;return [{type:"ellipse",cx:.5*e,cy:n,rx:c,ry:p},{type:"path",path:[{command:"M",values:[L,p]},{command:"L",values:[L,n]},{command:"L",values:[e,n]},{command:"L",values:[e,p]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:p,rx:c,ry:p}]}function n(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.15*e,p=a-c;return [{type:"ellipse",cx:.5*e,cy:p,rx:.5*e,ry:c},{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]}]}function o(a){let t=a;const e=6;t-=t<22?.5*e:e;const m=.15*t,c=0;return [{type:"path",path:[{command:"M",values:[0,c]},{command:"L",values:[t,c]},{command:"L",values:[.5*t,a-m]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:c,rx:.5*t,ry:m}]}function s$1(a){let t=a;const e=a,m=4;t-=t<22?.5*m:m;const c=0,p=0,L=t,n=e,o=Math.floor(a/10)-1||1;return [{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[p,.5*n-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[p,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[.45*L,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,e]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]}]}function l$1(a){const t=2;let e=a;e-=e<22?.5*t:t;const m=0,c=0;return [{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[a,e]},{command:"L",values:[.45*a,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[c,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,e]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[a,e]},{command:"Z",values:[]}]}]}function u$2(a,t){const e=.75;return Math.round(Math.min(Math.max(a+255*t*e,0),255))}function h$2(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const m=new h$3(t);return new h$3([u$2(m.r,e),u$2(m.g,e),u$2(m.b,e),m.a])}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h$1="http://www.w3.org/2000/svg";let c=0,f=0;const d$1=s$2("android"),y=s$2("chrome")||d$1&&d$1>=4?"auto":"optimizeLegibility",u$1={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},p=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let g$1={},x={};const m$1={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},w=Math.PI;function k(t,e){const i=t*(w/180);return Math.abs(e*Math.sin(i))+Math.abs(e*Math.cos(i))}function j(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function b(t,e,i,o){if(t){if("circle"===t.type)return n$1("circle",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return n$1("ellipse",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return n$1("rect",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return n$1("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const o="string"!=typeof t.path?j(t.path):t.path;return n$1("path",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",d:o})}if("text"===t.type)return n$1("text",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4","text-anchor":o.align,"text-decoration":o.decoration,kerning:o.kerning,rotate:o.rotate,"text-rendering":y,"font-style":o.font.style,"font-variant":o.font.variant,"font-weight":o.font.weight,"font-size":o.font.size,"font-family":o.font.family,x:t.x,y:t.y},t.text)}return null}function v(e){const i={fill:"none",pattern:null,linearGradient:null};if(e)if("type"in e&&"pattern"===e.type){const t="patternId-"+ ++c;i.fill=`url(#${t})`,i.pattern={id:t,x:e.x,y:e.y,width:e.width,height:e.height,image:{x:0,y:0,width:e.width,height:e.height,href:e.src}};}else if("type"in e&&"linear"===e.type){const o="linearGradientId-"+ ++f;i.fill=`url(#${o})`,i.linearGradient={id:o,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stops:e.colors.map((e=>({offset:e.offset,color:e.color&&new h$3(e.color).toString()})))};}else if(e){const o=new h$3(e);i.fill=o.toString();}return i}function A(e){const i={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(e&&(null!=e.width&&(i.width=e.width),e.cap&&(i.cap=e.cap),e.join&&(i.join=e.join.toString()),e.color&&(i.color=new h$3(e.color).toString()),e.style)){let t=null;if(e.style in m$1&&(t=m$1[e.style]),Array.isArray(t)){t=t.slice(0);for(let i=0;i<t.length;++i)t[i]*=e.width;if("butt"!==e.cap){for(let i=0;i<t.length;i+=2)t[i]-=e.width,t[i]<1&&(t[i]=1);for(let i=1;i<t.length;i+=2)t[i]+=e.width;}t=t.join(",");}i.dashArray=t;}return i}function M(t,e){const i={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(i.align=t.align,i.decoration=t.decoration,i.kerning=t.kerning?"auto":"0",i.rotate=t.rotated?"90":"0",i.font.style=e.style||"normal",i.font.variant=e.variant||"normal",i.font.weight=e.weight||"normal",i.font.size=e.size&&e.size.toString()||"10pt",i.font.family=e.family||"serif"),i}function I(t){const{pattern:e,linearGradient:i}=t;if(e)return n$1("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},n$1("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(i){const t=i.stops.map(((t,e)=>n$1("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return n$1("linearGradient",{id:i.id,gradientUnits:"userSpaceOnUse",x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2},t)}return null}function N(t,e,i$1){return i(t,n$2(t),[e,i$1])}function z(t,e,i,o,r){return e$1(t,n$2(t),[e,i]),t[4]=t[4]*e-o*e+o,t[5]=t[5]*i-r*i+r,t}function $(t,e,i,o){const r=e%360*Math.PI/180;c$2(t,n$2(t),r);const s=Math.cos(r),l=Math.sin(r),h=t[4],c=t[5];return t[4]=h*s-c*l+o*l-i*s+i,t[5]=c*s+h*l-i*l-o*s+o,t}function S(t,e){g$1&&"left"in g$1?(g$1.left>t&&(g$1.left=t),g$1.right<t&&(g$1.right=t),g$1.top>e&&(g$1.top=e),g$1.bottom<e&&(g$1.bottom=e)):g$1={left:t,bottom:e,right:t,top:e};}function G(t){const e=t.args,i=e.length;let o;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(o=0;o<i;o+=2)S(e[o],e[o+1]);x.x=e[i-2],x.y=e[i-1];break;case"H":for(o=0;o<i;++o)S(e[o],x.y);x.x=e[i-1];break;case"V":for(o=0;o<i;++o)S(x.x,e[o]);x.y=e[i-1];break;case"m":{let t=0;"x"in x||(S(x.x=e[0],x.y=e[1]),t=2);for(o=t;o<i;o+=2)S(x.x+=e[o],x.y+=e[o+1]);break}case"l":case"t":for(o=0;o<i;o+=2)S(x.x+=e[o],x.y+=e[o+1]);break;case"h":for(o=0;o<i;++o)S(x.x+=e[o],x.y);break;case"v":for(o=0;o<i;++o)S(x.x,x.y+=e[o]);break;case"c":for(o=0;o<i;o+=6)S(x.x+e[o],x.y+e[o+1]),S(x.x+e[o+2],x.y+e[o+3]),S(x.x+=e[o+4],x.y+=e[o+5]);break;case"s":case"q":for(o=0;o<i;o+=4)S(x.x+e[o],x.y+e[o+1]),S(x.x+=e[o+2],x.y+=e[o+3]);break;case"A":for(o=0;o<i;o+=7)S(e[o+5],e[o+6]);x.x=e[i-2],x.y=e[i-1];break;case"a":for(o=0;o<i;o+=7)S(x.x+=e[o+5],x.y+=e[o+6]);}}function E(t,e,i){const o=u$1[t.toLowerCase()];let r;"number"==typeof o&&(o?e.length>=o&&(r={action:t,args:e.slice(0,e.length-e.length%o)},i.push(r),G(r)):(r={action:t,args:[]},i.push(r),G(r)));}function F(t){const e=("string"!=typeof t.path?j(t.path):t.path).match(p),i=[];if(g$1={},x={},!e)return null;let o="",r=[];const n=e.length;for(let a=0;a<n;++a){const t=e[a],n=parseFloat(t);isNaN(n)?(o&&E(o,r,i),r=[],o=t):r.push(n);}E(o,r,i);const s={x:0,y:0,width:0,height:0};return g$1&&"left"in g$1&&(s.x=g$1.left,s.y=g$1.top,s.width=g$1.right-g$1.left,s.height=g$1.bottom-g$1.top),s}function T(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const i=F(t);e.x=i.x,e.y=i.y,e.width=i.width,e.height=i.height;}return e}function U(t){const e={x:0,y:0,width:0,height:0};let i=null,o=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const n of t)i?(i.x=Math.min(i.x,n.x),i.y=Math.min(i.y,n.y),o=Math.max(o,n.x+n.width),r=Math.max(r,n.y+n.height)):(i=e,i.x=n.x,i.y=n.y,o=n.x+n.width,r=n.y+n.height);return i&&(i.width=o-i.x,i.height=r-i.y),i}function L(t,e,r,n,s,a,l,h){const c=(l&&a?k(a,e):e)/2,f=(l&&a?k(a,r):r)/2,d=t.width+n,y=t.height+n,u=n$3(),p=n$3();let g=!1;if(s&&0!==d&&0!==y){const t=d/y,i=e>r?e:r;let n=1,s=1;isNaN(i)||(t>1?(n=i/d,s=i/t/y):(s=i/y,n=i*t/d)),o$1(p,p,z(u,n,s,c,f)),g=!0;}const x=t.x+(d-n)/2,m=t.y+(y-n)/2;if(o$1(p,p,N(u,c-x,f-m)),!g&&(d>e||y>r)){const t=d/e>y/r,i=(t?e:r)/(t?d:y);o$1(p,p,z(u,i,i,x,m));}return a&&o$1(p,p,$(u,a,x,m)),h&&o$1(p,p,N(u,h[0],h[1])),`matrix(${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},${p[5]})`}function C(t,e,i,o){const r=[],n=[];for(const s of t){const t=[],a=[];let h=0,c=0,f=0;for(const e of s){const{shape:i,fill:o,stroke:n,font:s,offset:l}=e;h+=n&&n.width||0;const d=v(o),y=A(n),u="text"===i.type?M(i,s):null;r.push(I(d)),t.push(b(i,d.fill,y,u)),a.push(T(i)),l&&(c+=l[0],f+=l[1]);}const d=L(U(a),e,i,h,null==o?void 0:o.scale,null==o?void 0:o.rotation,null==o?void 0:o.useRotationSize,[c,f]);n.push(n$1("g",{transform:d},t));}return null!=o&&o.useRotationSize&&null!=o&&o.rotation&&(e=k(null==o?void 0:o.rotation,e),i=k(null==o?void 0:o.rotation,i)),n$1("svg",{xmlns:h$1,width:e,height:i},n$1("defs",null,r),n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=i$1();function h(t,e,i){const n=Math.ceil(e[0]),r=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const o=i&&i.node||document.createElement("div");return null!=i.opacity&&(o.style.opacity=i.opacity.toString()),null!=i.effect&&(o.style.filter=i.effect),s.append(o,C.bind(null,t,n,r,i)),o}function l(t,e){t=Math.ceil(t),e=Math.ceil(e);const i=document.createElement("canvas");i.width=t,i.height=e,i.style.width=t+"px",i.style.height=e+"px";const n=i.getContext("2d");return n.clearRect(0,0,t,e),n}function m(t,i,n){return t?E$1(t,{responseType:"image"}).then((t=>{const e=t.data,r=e.width,o=e.height,a=r/o;let c=i;if(n){const t=Math.max(r,o);c=Math.min(c,t);}return {image:e,width:a<=1?Math.ceil(c*a):c,height:a<=1?c:Math.ceil(c/a)}})):Promise.reject(new s$3("renderUtils: imageDataSize","href not provided."))}function g(t,e){return !(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function u(t,e,r,o,a){switch(a){case"multiply":t[e+0]*=r[0],t[e+1]*=r[1],t[e+2]*=r[2],t[e+3]*=r[3];break;default:{const a=y$1({r:t[e+0],g:t[e+1],b:t[e+2]});a.h=o.h,a.s=o.s,a.v=a.v/100*o.v;const c=p$2(a);t[e+0]=c.r,t[e+1]=c.g,t[e+2]=c.b,t[e+3]*=r[3];break}}}function d(e,n,r,a,c){return m(e,n,c).then((c=>{const s=c.width?c.width:n,h=c.height?c.height:n;if(c.image&&g(r,a)){let t=c.image.width,n=c.image.height;s$2("edge")&&/\.svg$/i.test(e)&&(t-=1,n-=1);const m=l(s,h);m.drawImage(c.image,0,0,t,n,0,0,s,h);const g=m.getImageData(0,0,s,h),d=[r.r/255,r.g/255,r.b/255,r.a],f=y$1(r);for(let e=0;e<g.data.length;e+=4)u(g.data,e,d,f,a);m.putImageData(g,0,0),e=m.canvas.toDataURL("image/png");}else {const i=n$4&&n$4.findCredential(e);if(i&&i.token){const t=-1===e.indexOf("?")?"?":"&";e=`${e}${t}token=${i.token}`;}}return {url:e,width:s,height:h}})).catch((function(){return {url:e,width:n,height:n}}))}

export { A, C, I, L, T, U, L$1 as a, b, c$1 as c, d, e, h$2 as f, h, l$1 as l, m$2 as m, n, o, p$1 as p, s$1 as s, t, u$2 as u, v };
