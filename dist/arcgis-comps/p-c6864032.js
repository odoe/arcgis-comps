import{e as t,i}from"./p-5420851c.js";import{n as s}from"./p-580a17e2.js";const e=e=>{let h=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return h=t([i("esri.views.2d.layers.BitmapTileLayerView2D")],h),h};export{e as r}