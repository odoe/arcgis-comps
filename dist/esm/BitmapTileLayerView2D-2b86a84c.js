import { e, i } from './MapView-ac75aae8.js';
import { n } from './BitmapTileContainer-fad3775a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren();}};return s=e([i("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

export { r };
