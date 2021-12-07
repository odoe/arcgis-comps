import { e as e$1, d as d$1, i as i$1, a1 as a, aS as s, N as o$1, a2 as o$2, a3 as r$1, A as r$2 } from './messageBundle-f75b4090.js';
import { b } from './opacityUtils-5e864561.js';
import { m as m$1 } from './lengthUtils-f033d4fe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let i=p=class extends a{async collectRequiredFields(r,s){return b(r,s,this.expression)}clone(){return new p({expression:this.expression,title:this.title})}};e$1([d$1({type:String,json:{write:!0}})],i.prototype,"expression",void 0),e$1([d$1({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=p=e$1([i$1("esri.layers.support.FeatureExpressionInfo")],i);const c$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return null!=m$1[n]}function r(n){return 1/(m$1[n]||1)}function e(){const n=Object.keys(m$1);return n.sort(),n}const o=e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;const m=s()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new o$1({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let c=l=class extends a{constructor(){super(...arguments),this.offset=null;}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0});}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):r$2(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e);}set unit(e){this._set("unit",e);}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};e$1([d$1({type:c$1,json:{write:!0}})],c.prototype,"featureExpressionInfo",void 0),e$1([o$2("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],c.prototype,"readFeatureExpressionInfo",null),e$1([r$1("featureExpressionInfo",{featureExpressionInfo:{type:c$1},"featureExpression.value":{type:[0]}})],c.prototype,"writeFeatureExpressionInfo",null),e$1([d$1({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],c.prototype,"mode",null),e$1([d$1({type:Number,json:{write:!0}})],c.prototype,"offset",void 0),e$1([d$1({type:o,json:{type:String,read:d.read,write:d.write}})],c.prototype,"unit",null),c=l=e$1([i$1("esri.layers.support.ElevationInfo")],c);const x=c;

export { n, r, x };
