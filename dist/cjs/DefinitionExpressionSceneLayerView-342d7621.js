'use strict';

const request = require('./messageBundle-8be88d04.js');
const WhereClause = require('./WhereClause-f1cc2353.js');
const I3SUtil = require('./I3SUtil-25befd00.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=request.s$1.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),p=e=>{let p=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=r=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.error("Error while evaluating definitionExpression: "+r),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.error("Further errors are ignored");};}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const r=WhereClause.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!r.isStandardized)return t.error("definitionExpression is using non standard function"),null;const e=[],i=r.fieldNames;return I3SUtil.se(i,this.i3slayer.fields,{missingFields:e}),e.length>0?(t.error(`definitionExpression references unknown fields: ${e.join(", ")}`),null):(this._definitionExpressionErrors=0,r)}catch(r){return t.error("Failed to parse definitionExpression: "+r),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(r,e){try{return r.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(r){if(!this.parsedDefinitionExpression)return r;const e=this.i3slayer.definitionExpression,i=r.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return request.e([request.d()],p.prototype,"i3slayer",void 0),request.e([request.d({readOnly:!0})],p.prototype,"parsedDefinitionExpression",null),request.e([request.d({readOnly:!0})],p.prototype,"definitionExpressionFields",null),p=request.e([request.i("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],p),p};

exports.p = p;
