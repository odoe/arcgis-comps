'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(request.$(this,"layer","refresh",(r=>{r.dataChanged&&this.doRefresh().catch((r=>{request.d$2(r)||request.s$2.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return request.e([request.d()],c.prototype,"layer",void 0),c=request.e([request.i("esri.layers.mixins.RefreshableLayerView")],c),c};

exports.i = i;
