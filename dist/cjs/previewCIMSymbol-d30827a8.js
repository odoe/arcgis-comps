'use strict';

const screenUtils = require('./screenUtils-d911ae62.js');
const CIMSymbolRasterizer = require('./CIMSymbolRasterizer-780e9d7d.js');
const utils = require('./utils-71e85012.js');
require('./messageBundle-8be88d04.js');
require('./index-fde8502c.js');
require('./jsonUtils-b6068079.js');
require('./geometry-ef17530a.js');
require('./cimAnalyzer-eb6fa5b4.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./opacityUtils-f2e4b347.js');
require('./CIMSymbolHelper-79a17067.js');
require('./BidiEngine-e033e7c0.js');
require('./floatRGBA-aa45f7cb.js');
require('./aaBoundingRect-56648c00.js');
require('./definitions-b4888cc6.js');
require('./mat2d-2d5fae3e.js');
require('./mat2df32-85bf8b84.js');
require('./vec2-d000a8cb.js');
require('./vec2f32-29a5eecf.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./utils-fb318f28.js');
require('./callExpressionWithFeature-7cea2968.js');
require('./quantizationUtils-d1d9c03e.js');
require('./Rasterizer-56940f67.js');
require('./symbols-29b793e5.js');
require('./enumeration-f235fe07.js');
require('./Symbol-f0556e23.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./asyncUtils-cd78b718.js');
require('./ItemCache-149fdb6e.js');
require('./MemCache-7f5503ec.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=new CIMSymbolRasterizer.CIMSymbolRasterizer(null,!0),n=120;async function o(e,o={}){const{size:s,maxSize:c,node:m,opacity:r}=o,y=o.cimOptions||o,{feature:d,fieldMap:u,geometryType:h,style:p}=y,f=utils.n(e),g=Math.min(null!=s?s:f,null!=c?c:screenUtils.e(n));g!==f&&(e=e.clone(),utils.i(e,g,{preserveOutlineWidth:!0}));let M=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(M=1);const b=await i.rasterizeCIMSymbolAsync(e,d,u,h,{scaleFactor:M,style:p}),w=document.createElement("canvas");w.width=b.imageData.width,w.height=b.imageData.height;w.getContext("2d").putImageData(b.imageData,0,0);let C=w.width/M,D=w.height/M;if(null!=s&&(null==(null==o?void 0:o.scale)||(null==o?void 0:o.scale))){const t=C/D;C=t<=1?Math.ceil(g*t):g,D=t<=1?g:Math.ceil(g/t);}const I=new Image(C,D);return I.src=w.toDataURL(),null!=r&&(I.style.opacity=`${r}`),null!=o.effect&&(I.style.filter=o.effect),m&&m.appendChild(I),I}

exports.previewCIMSymbol = o;
