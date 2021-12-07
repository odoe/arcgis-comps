import { oK as n$1, oL as i$1, br as e } from './index.js';
import { CIMSymbolRasterizer as I } from './CIMSymbolRasterizer.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=new I(null,!0),n=120;async function o(e$1,o={}){const{size:s,maxSize:c,node:m,opacity:r}=o,y=o.cimOptions||o,{feature:d,fieldMap:u,geometryType:h,style:p}=y,f=n$1(e$1),g=Math.min(null!=s?s:f,null!=c?c:e(n));g!==f&&(e$1=e$1.clone(),i$1(e$1,g,{preserveOutlineWidth:!0}));let M=3;e$1&&e$1.data&&e$1.data.symbol&&"CIMPointSymbol"!==e$1.data.symbol.type&&(M=1);const b=await i.rasterizeCIMSymbolAsync(e$1,d,u,h,{scaleFactor:M,style:p}),w=document.createElement("canvas");w.width=b.imageData.width,w.height=b.imageData.height;w.getContext("2d").putImageData(b.imageData,0,0);let C=w.width/M,D=w.height/M;if(null!=s&&(null==(null==o?void 0:o.scale)||(null==o?void 0:o.scale))){const t=C/D;C=t<=1?Math.ceil(g*t):g,D=t<=1?g:Math.ceil(g/t);}const I=new Image(C,D);return I.src=w.toDataURL(),null!=r&&(I.style.opacity=`${r}`),null!=o.effect&&(I.style.filter=o.effect),m&&m.appendChild(I),I}

export { o as previewCIMSymbol };
