'use strict';

const request = require('./messageBundle-8be88d04.js');
const arcgisLayerUrl = require('./arcgisLayerUrl-5174d661.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=arcgisLayerUrl.d(this.url);if(request.r(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t);}set url(t){this._set("url",arcgisLayerUrl.g(t,request.s$1.getLogger(this.declaredClass)));}};return request.e([request.d()],c.prototype,"title",null),request.e([request.d({type:String})],c.prototype,"url",null),c=request.e([request.i("esri.layers.mixins.ArcGISService")],c),c};

exports.p = p;
