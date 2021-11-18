'use strict';

const request = require('./messageBundle-312ceb47.js');
const JSONSupport = require('./JSONSupport-53c01d03.js');
const jsonUtils = require('./jsonUtils-4461cf25.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const TimeExtent = require('./TimeExtent-cdfe048b.js');
const Query = require('./Query-35be2e91.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const LabelClass = require('./LabelClass-21df7ce2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$2;const m$1=new request.o$1({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new request.o$1({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let d$2=c$2=class extends JSONSupport.a{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null;}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:a,distance:l}=this;return new Query.b({geometry:request.l$1(i),objectIds:request.l$1(n),spatialRelationship:r,timeExtent:request.l$1(s),where:t,units:a,distance:l,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:a}=this;return new c$2({geometry:request.l$1(t),objectIds:request.l$1(s),spatialRelationship:i,timeExtent:request.l$1(r),where:e,units:n,distance:a})}};request.e([request.d({type:String,json:{write:!0}})],d$2.prototype,"where",void 0),request.e([request.d({types:unitUtils.i,json:{write:!0}})],d$2.prototype,"geometry",void 0),request.e([request.d({type:m$1.apiValues,json:{name:"spatialRel",read:{reader:m$1.read},write:{allowNull:!1,writer:m$1.write,overridePolicy(){return {enabled:request.r(this.geometry)}}}}})],d$2.prototype,"spatialRelationship",void 0),request.e([request.d({type:Number,json:{write:{overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$2.prototype,"distance",void 0),request.e([request.d({type:[Number],json:{write:!0}})],d$2.prototype,"objectIds",void 0),request.e([request.d({type:u.apiValues,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$2.prototype,"units",void 0),request.e([request.d({type:TimeExtent.y,json:{write:!0}})],d$2.prototype,"timeExtent",void 0),d$2=c$2=request.e([request.i("esri.layers.support.FeatureFilter")],d$2);const y=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$1;let p$4=d$1=class extends JSONSupport.a{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1;}clone(){return new d$1({filter:request.r(this.filter)&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};request.e([request.d({type:y,json:{write:!0,origins:{"web-map":{write:{allowNull:!0,writer(e,r,t,o){if(!e)return void(r[t]=e);const s=e.write({},o),i=Object.keys(s);1===i.length&&"where"===i[0]?r[t]=s:r[t]=null;}}}}}})],p$4.prototype,"filter",void 0),request.e([request.d({json:{write:!0,origins:{"web-map":{read:{reader:jsonUtils.n},write:{allowNull:!0,writer:jsonUtils.a}}}}})],p$4.prototype,"includedEffect",void 0),request.e([request.d({json:{write:!0,origins:{"web-map":{read:{reader:jsonUtils.n},write:{allowNull:!0,writer:jsonUtils.a}}}}})],p$4.prototype,"excludedEffect",void 0),request.e([request.d({type:Boolean,json:{write:!0,name:"showExcludedLabels",default:!1}})],p$4.prototype,"excludedLabelsVisible",void 0),p$4=d$1=request.e([request.i("esri.layers.support.FeatureEffect")],p$4);const a=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$3=t=>{let p=class extends t{constructor(){super(...arguments),this.featureEffect=null;}};return request.e([request.d({type:a,json:{origins:{"web-map":{write:{allowNull:!0}}}}})],p.prototype,"featureEffect",void 0),p=request.e([request.i("esri.layers.mixins.FeatureEffectLayer")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends JSONSupport.a{constructor(){super(...arguments),this.type=null;}};request.e([request.d({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t$2.prototype,"type",void 0),t$2=request.e([request.i("esri.layers.support.FeatureReduction")],t$2);const p$3=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var r$1;let e=r$1=class extends JSONSupport.a{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new r$1({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};request.e([request.d({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),request.e([request.d({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),request.e([request.d({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=r$1=request.e([request.i("esri.layers.support.OutStatistic")],e);const p$2=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let i=p$1=class extends JSONSupport.a{constructor(){super(...arguments),this.name=null;}clone(){return new p$1({name:this.name,outStatistic:this.outStatistic.clone()})}};request.e([request.d({type:String,json:{write:!0}})],i.prototype,"name",void 0),request.e([request.d({type:p$2,json:{write:!0}})],i.prototype,"outStatistic",void 0),i=p$1=request.e([request.i("esri.layers.support.AggregateField")],i);const c$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let d=m=class extends JSONSupport.a{constructor(e){super(e),this.type="cluster",this.clusterRadius=unitUtils.o$3("80px"),this.clusterMinSize=unitUtils.o$3("12px"),this.clusterMaxSize=unitUtils.o$3("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new m({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:request.l$1(this.labelingInfo),labelsVisible:this.labelsVisible,fields:request.l$1(this.fields),popupEnabled:this.popupEnabled,popupTemplate:request.l$1(this.popupTemplate)})}};request.e([request.d({type:["cluster"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),request.e([request.d({type:Number,cast:e=>"auto"===e?e:unitUtils.o$3(e),json:{write:!0}})],d.prototype,"clusterRadius",void 0),request.e([request.d({type:Number,cast:unitUtils.o$3,json:{write:!0}})],d.prototype,"clusterMinSize",void 0),request.e([request.d({type:Number,cast:unitUtils.o$3,json:{write:!0}})],d.prototype,"clusterMaxSize",void 0),request.e([request.d(commonProperties.p)],d.prototype,"popupEnabled",void 0),request.e([request.d({type:unitUtils.M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],d.prototype,"popupTemplate",void 0),request.e([request.d({types:unitUtils.D})],d.prototype,"symbol",void 0),request.e([request.d({type:[LabelClass.E],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],d.prototype,"labelingInfo",void 0),request.e([request.d(commonProperties.m)],d.prototype,"labelsVisible",void 0),request.e([request.d({type:[c$1],json:{write:!0}})],d.prototype,"fields",void 0),d=m=request.e([request.i("esri.layers.support.FeatureReductionCluster")],d);const b=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let c=t$1=class extends p$3{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};request.e([request.d({type:["selection"]})],c.prototype,"type",void 0),c=t$1=request.e([request.i("esri.layers.support.FeatureReductionSelection")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={types:{key:"type",base:p$3,typeMap:{selection:p,cluster:b}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:{key:"type",base:p$3,typeMap:{selection:b}}},"web-scene":{types:{key:"type",base:p$3,typeMap:{selection:p}}}}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,i,o){return r?r.map((r=>{const s=new LabelClass.E;if(s.read(r,o),s.labelExpression){const e=i.fields||i.layerDefinition&&i.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(n,((n,r)=>`[${t(r,e)}]`));}return s})):null}function t(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}

exports.a = a;
exports.p = p$3;
exports.p$1 = p;
exports.r = r;
exports.s = s;
exports.t = t$3;
exports.y = y;
