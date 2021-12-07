'use strict';

const request = require('./messageBundle-8be88d04.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let t=class extends s{constructor(){super(...arguments),this.minScale=0,this.maxScale=0;}get scaleRangeId(){return `${this.minScale},${this.maxScale}`}};return request.e([request.d({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),request.e([request.d({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),request.e([request.d({readOnly:!0})],t.prototype,"scaleRangeId",null),t=request.e([request.i("esri.layers.mixins.ScaleRangeLayer")],t),t};

exports.s = s;
