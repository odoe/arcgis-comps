import { e, d, i, A as r, c as s } from './messageBundle-f75b4090.js';
import { d as d$1, g } from './arcgisLayerUrl-49ef2818.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=d$1(this.url);if(r(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t);}set url(t){this._set("url",g(t,s.getLogger(this.declaredClass)));}};return e([d()],c.prototype,"title",null),e([d({type:String})],c.prototype,"url",null),c=e([i("esri.layers.mixins.ArcGISService")],c),c};

export { p };
