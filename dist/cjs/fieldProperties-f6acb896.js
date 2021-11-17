'use strict';

const request = require('./messageBundle-312ceb47.js');
const Field = require('./Field-9f319836.js');
const FieldsIndex = require('./FieldsIndex-8c8f3ac6.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=request.s$2.getLogger("esri.layers.support.fieldProperties");function l(){return {fields:{type:[Field.y],value:null},fieldsIndex:{readOnly:!0,get(){return new FieldsIndex.d(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields");},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return ["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||s.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});}return unitUtils.y(this.fieldsIndex,e)}}}}

exports.l = l;
