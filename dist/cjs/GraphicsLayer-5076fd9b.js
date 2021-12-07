'use strict';

const request = require('./messageBundle-8be88d04.js');
const GraphicsCollection = require('./GraphicsCollection-d70ae8cb.js');
const Layer = require('./Layer-31cde361.js');
const BlendLayer = require('./BlendLayer-6a2ab430.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const ElevationInfo = require('./ElevationInfo-d3e3d64f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends(BlendLayer.i(ScaleRangeLayer.s(Layer.b))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new GraphicsCollection.c,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1;}destroy(){this.removeAll(),this.graphics.destroy();}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r);}removeMany(r){this.graphics.removeMany(r);}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r);}};request.e([request.d({type:ElevationInfo.x})],n.prototype,"elevationInfo",void 0),request.e([request.d(GraphicsCollection.a(GraphicsCollection.c,"graphics"))],n.prototype,"graphics",void 0),request.e([request.d({type:["show","hide"]})],n.prototype,"listMode",void 0),request.e([request.d()],n.prototype,"screenSizePerspectiveEnabled",void 0),request.e([request.d({readOnly:!0})],n.prototype,"type",void 0),request.e([request.d({constructOnly:!0})],n.prototype,"internal",void 0),n=request.e([request.i("esri.layers.GraphicsLayer")],n);const h=n;

exports.h = h;
