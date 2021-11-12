import { j as e, u as u$1, g as h$1 } from './Graphic-6c72131a.js';
import { C as s } from './jsxFactory-c96bb45c.js';
import { b as b$1, j as j$1, e as w$1 } from './utils-ce0d30fb.js';
import { t, f as h$2, h as h$3 } from './renderUtils-c40d92e3.js';
import './JSONSupport-5a9f556a.js';
import './index-921bd636.js';
import './asyncUtils-dc4bd819.js';
import './ItemCache-2d2e76a8.js';
import './MemCache-e219bcfb.js';
import './utils-f8425723.js';
import './colorUtils-a7d03078.js';
import './mat2d-b05e5a52.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m="picture-fill",u="picture-marker",p="simple-fill",h="simple-line",d="simple-marker",f="text",v="Aa",y=22,g=120,w=80,M=40,b=document.createElement("canvas");function x(e,t){const a=b.getContext("2d"),l=[];return t&&(t.weight&&l.push(t.weight),t.size&&l.push(t.size+"px"),t.family&&l.push(t.family)),a.font=l.join(" "),a.measureText(e).width}const k=7.2/2.54,L=72/2.54;function z(e$1){if(0===e$1.length)return 0;if(e$1.length>2){const t=e(1),a=parseFloat(e$1);switch(e$1.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*k*t;case"cm":return a*L*t}}return parseFloat(e$1)}function j(l,b){var k,L;const j=null!=(null==b?void 0:b.size)?u$1(b.size):null,C=null!=(null==b?void 0:b.maxSize)?u$1(b.maxSize):null,F=null!=(null==b?void 0:b.opacity)?b.opacity:null,S=null!=(null==b?void 0:b.rotation)?b.rotation:"angle"in l?l.angle:null,E=b$1(l);let P=j$1(l);if(E&&!P){const t="type"in E?null:new h$1(E);"#ffffff"===(t?t.toHex():null)&&(P={color:"#bdc3c7",width:.75});}const U={shape:null,fill:null,stroke:P,offset:[0,0]};null!=(k=P)&&k.width&&(P.width=Math.min(P.width,w));const q=(null==(L=P)?void 0:L.width)||0;let Z=null!=j&&(null==(null==b?void 0:b.scale)||(null==b?void 0:b.scale)),H=0,T=0,A=!1;switch(l.type){case d:{const e=l.style,t=Math.min(null!=j?j:u$1(l.size),C||g);switch(H=t,T=t,e){case"circle":U.shape={type:"circle",cx:0,cy:0,r:.5*t},Z||(H+=q,T+=q);break;case"cross":U.shape={type:"path",path:[{command:"M",values:[0,.5*T]},{command:"L",values:[H,.5*T]},{command:"M",values:[.5*H,0]},{command:"L",values:[.5*H,T]}]};break;case"diamond":U.shape={type:"path",path:[{command:"M",values:[0,.5*T]},{command:"L",values:[.5*H,0]},{command:"L",values:[H,.5*T]},{command:"L",values:[.5*H,T]},{command:"Z",values:[]}]},Z||(H+=q,T+=q);break;case"square":U.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[H,0]},{command:"L",values:[H,T]},{command:"L",values:[0,T]},{command:"Z",values:[]}]},Z||(H+=q,T+=q),S&&(A=!0);break;case"triangle":U.shape={type:"path",path:[{command:"M",values:[.5*H,0]},{command:"L",values:[H,T]},{command:"L",values:[0,T]},{command:"Z",values:[]}]},Z||(H+=q,T+=q),S&&(A=!0);break;case"x":U.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[H,T]},{command:"M",values:[H,0]},{command:"L",values:[0,T]}]},S&&(A=!0);break;case"path":U.shape={type:"path",path:l.path||""},Z||(H+=q,T+=q),S&&(A=!0),Z=!0;}break}case h:{const e=Math.min(null!=j?j:q,C||w),t=e>y?2*e:M;P.width=e,H=t,T=e,U.shape={type:"path",path:[{command:"M",values:[0,T]},{command:"L",values:[H,T]}]};break}case m:case p:H=Math.min(null!=j?j:y,C||g)+q,T=H,Z=!0,U.shape="object"==typeof(null==b?void 0:b.symbolConfig)&&null!=b&&b.symbolConfig.isSquareFill?t.squareFill[0]:t.fill[0];break;case u:{let e=u$1(l.width),t=u$1(l.height);const n=null!=j?j:Math.max(e,t),o=e/t;e=o<=1?Math.ceil(n*o):n,t=o<=1?n:Math.ceil(n/o),H=Math.min(e,C||g),T=Math.min(t,C||g),U.shape={type:"image",x:-Math.round(H/2),y:-Math.round(T/2),width:H,height:T,src:l.url||""},S&&(A=!0);break}case f:{const e=l,t=e.text||v,n=e.font,o=Math.min(null!=j?j:u$1(n.size),C||g),s=x(t,{weight:n.weight,size:o,family:n.family}),i=/[\uE600-\uE6FF]/.test(t);H=i?o:s,T=o;let r=.25*z((n?o:0).toString());i&&(r+=5),U.shape={type:"text",text:t,x:0,y:r,align:"middle",decoration:n&&n.decoration,rotated:e.rotated,kerning:e.kerning},U.font=n&&{size:o,style:n.style,decoration:n.decoration,weight:n.weight,family:n.family};break}}if(!U.shape)return Promise.reject(new s("symbolPreview: renderPreviewHTML2D","symbol not supported."));const D=E,R=l.color;let B=null;return D&&"pattern"===D.type&&R&&l.type!==m?B=w$1(D.src,R.toCss(!0)).then((e=>(D.src=e,U.fill=D,U))):(U.fill=E,B=Promise.resolve(U)),B.then((e=>{const t=[[e]];if("object"==typeof(null==b?void 0:b.symbolConfig)&&null!=b&&b.symbolConfig.applyColorModulation){const a=.6*H;t.unshift([{...e,offset:[-a,0],fill:h$2(E,-.3)}]),t.push([{...e,offset:[a,0],fill:h$2(E,.3)}]),H+=2*a;}return h$3(t,[H,T],{node:b&&b.node,scale:Z,opacity:F,rotation:S,useRotationSize:A,effect:null==b?void 0:b.effect})}))}

export { j as previewSymbol2D };
