'use strict';

const request = require('./messageBundle-8be88d04.js');
const BitmapTileContainer = require('./BitmapTileContainer-2514ead3.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new BitmapTileContainer.n(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren();}};return s=request.e([request.i("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

exports.r = r;
