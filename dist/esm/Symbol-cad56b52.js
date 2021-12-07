import { N as o, e, d, a2 as o$1, i, a1 as a$1 } from './messageBundle-f75b4090.js';
import { h } from './Color-d1b9b54f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new o({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let c=0,m=class extends a$1{constructor(r){super(r),this.id="sym"+c++,this.type=null;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}async collectRequiredFields(r,o){}hash(){return JSON.stringify(this.toJSON())}clone(){}};e([d({type:p.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p.write}}})],m.prototype,"type",void 0),e([d({type:h,value:new h([0,0,0,1]),json:{write:{allowNull:!0}}})],m.prototype,"color",null),e([o$1("color")],m.prototype,"readColor",null),m=e([i("esri.symbols.Symbol")],m);const a=m;

export { a };
