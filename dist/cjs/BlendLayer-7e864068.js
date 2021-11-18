'use strict';

const request = require('./messageBundle-312ceb47.js');
const jsonUtils = require('./jsonUtils-4461cf25.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let n=class extends i{constructor(){super(...arguments),this.blendMode="normal",this.effect=null;}};return request.e([request.d({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0}}}})],n.prototype,"blendMode",void 0),request.e([request.d({json:{read:!1,write:!1,origins:{"web-map":{read:{reader:jsonUtils.n},write:{allowNull:!0,writer:jsonUtils.a}}}}})],n.prototype,"effect",void 0),n=request.e([request.i("esri.layers.mixins.BlendLayer")],n),n};

exports.i = i;
