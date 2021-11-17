import { v as s$1 } from './messageBundle-8a146a9b.js';
import { y } from './Field-fbfaf20d.js';
import { d } from './FieldsIndex-041474f9.js';
import { aw as y$1 } from './unitUtils-c707ba3c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s$1.getLogger("esri.layers.support.fieldProperties");function l(){return {fields:{type:[y],value:null},fieldsIndex:{readOnly:!0,get(){return new d(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields");},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return ["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||s.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});}return y$1(this.fieldsIndex,e)}}}}

export { l };