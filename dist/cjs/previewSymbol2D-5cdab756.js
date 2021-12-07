'use strict';

const Color = require('./Color-7d915caa.js');
const request = require('./messageBundle-8be88d04.js');
const screenUtils = require('./screenUtils-d911ae62.js');
const utils = require('./utils-71e85012.js');
const renderUtils = require('./renderUtils-064b53c5.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./index-fde8502c.js');
require('./symbols-29b793e5.js');
require('./enumeration-f235fe07.js');
require('./opacityUtils-f2e4b347.js');
require('./geometry-ef17530a.js');
require('./Symbol-f0556e23.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./asyncUtils-cd78b718.js');
require('./ItemCache-149fdb6e.js');
require('./MemCache-7f5503ec.js');
require('./utils-fb318f28.js');
require('./colorUtils-c4f258fa.js');
require('./mat2df32-85bf8b84.js');
require('./mat2d-2d5fae3e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m="picture-fill",u="picture-marker",p="simple-fill",h="simple-line",d="simple-marker",f="text",v="Aa",y=22,g=120,w=80,M=40,b=document.createElement("canvas");function x(e,t){const a=b.getContext("2d"),l=[];return t&&(t.weight&&l.push(t.weight),t.size&&l.push(t.size+"px"),t.family&&l.push(t.family)),a.font=l.join(" "),a.measureText(e).width}const k=7.2/2.54,L=72/2.54;function z(e){if(0===e.length)return 0;if(e.length>2){const t=screenUtils.e(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*k*t;case"cm":return a*L*t}}return parseFloat(e)}function j(l,b){var k,L;const j=null!=(null==b?void 0:b.size)?screenUtils.u(b.size):null,C=null!=(null==b?void 0:b.maxSize)?screenUtils.u(b.maxSize):null,F=null!=(null==b?void 0:b.opacity)?b.opacity:null,S=null!=(null==b?void 0:b.rotation)?b.rotation:"angle"in l?l.angle:null,E=utils.b(l);let P=utils.j(l);if(E&&!P){const t="type"in E?null:new Color.h(E);"#ffffff"===(t?t.toHex():null)&&(P={color:"#bdc3c7",width:.75});}const U={shape:null,fill:null,stroke:P,offset:[0,0]};null!=(k=P)&&k.width&&(P.width=Math.min(P.width,w));const q=(null==(L=P)?void 0:L.width)||0;let Z=null!=j&&(null==(null==b?void 0:b.scale)||(null==b?void 0:b.scale)),H=0,T=0,A=!1;switch(l.type){case d:{const e=l.style,t=Math.min(null!=j?j:screenUtils.u(l.size),C||g);switch(H=t,T=t,e){case"circle":U.shape={type:"circle",cx:0,cy:0,r:.5*t},Z||(H+=q,T+=q);break;case"cross":U.shape={type:"path",path:[{command:"M",values:[0,.5*T]},{command:"L",values:[H,.5*T]},{command:"M",values:[.5*H,0]},{command:"L",values:[.5*H,T]}]};break;case"diamond":U.shape={type:"path",path:[{command:"M",values:[0,.5*T]},{command:"L",values:[.5*H,0]},{command:"L",values:[H,.5*T]},{command:"L",values:[.5*H,T]},{command:"Z",values:[]}]},Z||(H+=q,T+=q);break;case"square":U.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[H,0]},{command:"L",values:[H,T]},{command:"L",values:[0,T]},{command:"Z",values:[]}]},Z||(H+=q,T+=q),S&&(A=!0);break;case"triangle":U.shape={type:"path",path:[{command:"M",values:[.5*H,0]},{command:"L",values:[H,T]},{command:"L",values:[0,T]},{command:"Z",values:[]}]},Z||(H+=q,T+=q),S&&(A=!0);break;case"x":U.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[H,T]},{command:"M",values:[H,0]},{command:"L",values:[0,T]}]},S&&(A=!0);break;case"path":U.shape={type:"path",path:l.path||""},Z||(H+=q,T+=q),S&&(A=!0),Z=!0;}break}case h:{const e=Math.min(null!=j?j:q,C||w),t=e>y?2*e:M;P.width=e,H=t,T=e,U.shape={type:"path",path:[{command:"M",values:[0,T]},{command:"L",values:[H,T]}]};break}case m:case p:H=Math.min(null!=j?j:y,C||g)+q,T=H,Z=!0,U.shape="object"==typeof(null==b?void 0:b.symbolConfig)&&null!=b&&b.symbolConfig.isSquareFill?renderUtils.t.squareFill[0]:renderUtils.t.fill[0];break;case u:{let e=screenUtils.u(l.width),t=screenUtils.u(l.height);const n=null!=j?j:Math.max(e,t),o=e/t;e=o<=1?Math.ceil(n*o):n,t=o<=1?n:Math.ceil(n/o),H=Math.min(e,C||g),T=Math.min(t,C||g),U.shape={type:"image",x:-Math.round(H/2),y:-Math.round(T/2),width:H,height:T,src:l.url||""},S&&(A=!0);break}case f:{const e=l,t=e.text||v,n=e.font,o=Math.min(null!=j?j:screenUtils.u(n.size),C||g),s=x(t,{weight:n.weight,size:o,family:n.family}),i=/[\uE600-\uE6FF]/.test(t);H=i?o:s,T=o;let r=.25*z((n?o:0).toString());i&&(r+=5),U.shape={type:"text",text:t,x:0,y:r,align:"middle",decoration:n&&n.decoration,rotated:e.rotated,kerning:e.kerning},U.font=n&&{size:o,style:n.style,decoration:n.decoration,weight:n.weight,family:n.family};break}}if(!U.shape)return Promise.reject(new request.s("symbolPreview: renderPreviewHTML2D","symbol not supported."));const D=E,R=l.color;let B=null;return D&&"pattern"===D.type&&R&&l.type!==m?B=utils.w$1(D.src,R.toCss(!0)).then((e=>(D.src=e,U.fill=D,U))):(U.fill=E,B=Promise.resolve(U)),B.then((e=>{const t=[[e]];if("object"==typeof(null==b?void 0:b.symbolConfig)&&null!=b&&b.symbolConfig.applyColorModulation){const a=.6*H;t.unshift([{...e,offset:[-a,0],fill:renderUtils.h$1(E,-.3)}]),t.push([{...e,offset:[a,0],fill:renderUtils.h$1(E,.3)}]),H+=2*a;}return renderUtils.h(t,[H,T],{node:b&&b.node,scale:Z,opacity:F,rotation:S,useRotationSize:A,effect:null==b?void 0:b.effect})}))}

exports.previewSymbol2D = j;
