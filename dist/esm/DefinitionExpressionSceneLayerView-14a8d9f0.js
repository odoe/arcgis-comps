import { c as s, e, d, i } from './messageBundle-f75b4090.js';
import { WhereClause as m } from './WhereClause-a0e7b548.js';
import { s as se } from './I3SUtil-069e8e0c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=s.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),p=e$1=>{let p=class extends e$1{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=r=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.error("Error while evaluating definitionExpression: "+r),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.error("Further errors are ignored");};}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const r=m.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!r.isStandardized)return t.error("definitionExpression is using non standard function"),null;const e=[],i=r.fieldNames;return se(i,this.i3slayer.fields,{missingFields:e}),e.length>0?(t.error(`definitionExpression references unknown fields: ${e.join(", ")}`),null):(this._definitionExpressionErrors=0,r)}catch(r){return t.error("Failed to parse definitionExpression: "+r),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(r,e){try{return r.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(r){if(!this.parsedDefinitionExpression)return r;const e=this.i3slayer.definitionExpression,i=r.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return e([d()],p.prototype,"i3slayer",void 0),e([d({readOnly:!0})],p.prototype,"parsedDefinitionExpression",null),e([d({readOnly:!0})],p.prototype,"definitionExpressionFields",null),p=e([i("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],p),p};

export { p };
