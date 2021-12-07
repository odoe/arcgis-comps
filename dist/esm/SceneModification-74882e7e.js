import { e, d, a3 as r, i, a1 as a, an as t, D as l } from './messageBundle-f75b4090.js';
import { v } from './geometry-7e07b1ba.js';
import { g } from './persistable-f1fade31.js';
import { t as tn, h as hn } from './projection-f3d8779d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let y=m=class extends a{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!tn(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new v;hn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m({geometry:l(this.geometry),type:this.type})}};e([d({type:v}),g()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([d({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=m=e([i("esri.layers.support.SceneModification")],y);const f=y;

export { f };
