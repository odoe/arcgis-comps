import { A as r, f as s, e, a as d$1, i } from './jsxFactory-b8b7429b.js';
import { d, g } from './arcgisLayerUrl-f16875e5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=d(this.url);if(r(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t);}set url(t){this._set("url",g(t,s.getLogger(this.declaredClass)));}};return e([d$1()],c.prototype,"title",null),e([d$1({type:String})],c.prototype,"url",null),c=e([i("esri.layers.mixins.ArcGISService")],c),c};

export { p };