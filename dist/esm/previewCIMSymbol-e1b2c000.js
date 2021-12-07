import { e } from './screenUtils-9bb7e30c.js';
import { CIMSymbolRasterizer as I } from './CIMSymbolRasterizer-8b0d2ca7.js';
import { n as n$1, i as i$1 } from './utils-c84cc443.js';
import './messageBundle-f75b4090.js';
import './index-b157fcf2.js';
import './jsonUtils-13b1f6fd.js';
import './geometry-7e07b1ba.js';
import './cimAnalyzer-d76cb5c0.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './opacityUtils-5e864561.js';
import './CIMSymbolHelper-4df91506.js';
import './BidiEngine-8e81e59c.js';
import './floatRGBA-7e1629d8.js';
import './aaBoundingRect-9468599b.js';
import './definitions-6a5ca2d9.js';
import './mat2d-13076132.js';
import './mat2df32-93736424.js';
import './vec2-5672471e.js';
import './vec2f32-29d55de5.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './utils-f8425723.js';
import './callExpressionWithFeature-e06d2f0b.js';
import './quantizationUtils-e08f723c.js';
import './Rasterizer-94b959a3.js';
import './symbols-b414aa72.js';
import './enumeration-d3301938.js';
import './Symbol-cad56b52.js';
import './aaBoundingBox-876621e6.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './asyncUtils-fe35d349.js';
import './ItemCache-5d2cf877.js';
import './MemCache-78a9f000.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=new I(null,!0),n=120;async function o(e$1,o={}){const{size:s,maxSize:c,node:m,opacity:r}=o,y=o.cimOptions||o,{feature:d,fieldMap:u,geometryType:h,style:p}=y,f=n$1(e$1),g=Math.min(null!=s?s:f,null!=c?c:e(n));g!==f&&(e$1=e$1.clone(),i$1(e$1,g,{preserveOutlineWidth:!0}));let M=3;e$1&&e$1.data&&e$1.data.symbol&&"CIMPointSymbol"!==e$1.data.symbol.type&&(M=1);const b=await i.rasterizeCIMSymbolAsync(e$1,d,u,h,{scaleFactor:M,style:p}),w=document.createElement("canvas");w.width=b.imageData.width,w.height=b.imageData.height;w.getContext("2d").putImageData(b.imageData,0,0);let C=w.width/M,D=w.height/M;if(null!=s&&(null==(null==o?void 0:o.scale)||(null==o?void 0:o.scale))){const t=C/D;C=t<=1?Math.ceil(g*t):g,D=t<=1?g:Math.ceil(g/t);}const I=new Image(C,D);return I.src=w.toDataURL(),null!=r&&(I.style.opacity=`${r}`),null!=o.effect&&(I.style.filter=o.effect),m&&m.appendChild(I),I}

export { o as previewCIMSymbol };
