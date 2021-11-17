import { X as o, M as l, e as e$1, a as d$3, r as r$2, i as i$2 } from './jsxFactory-ef3e403e.js';
import { a as a$1 } from './JSONSupport-a5eb98e7.js';
import { n as n$1, a as a$2 } from './jsonUtils-7ed7a510.js';
import { Y as i$1, U as o$1, q as M, _ as D } from './unitUtils-8a2b838a.js';
import { y as y$1 } from './TimeExtent-fb7ed3e3.js';
import { b as b$1 } from './Query-fd5e1b7b.js';
import { p as p$5, m as m$2 } from './commonProperties-e22a7011.js';
import { E } from './LabelClass-5f15d30f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$2;const m$1=new o({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new o({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let d$2=c$2=class extends a$1{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null;}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:a,distance:l$1}=this;return new b$1({geometry:l(i),objectIds:l(n),spatialRelationship:r,timeExtent:l(s),where:t,units:a,distance:l$1,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:a}=this;return new c$2({geometry:l(t),objectIds:l(s),spatialRelationship:i,timeExtent:l(r),where:e,units:n,distance:a})}};e$1([d$3({type:String,json:{write:!0}})],d$2.prototype,"where",void 0),e$1([d$3({types:i$1,json:{write:!0}})],d$2.prototype,"geometry",void 0),e$1([d$3({type:m$1.apiValues,json:{name:"spatialRel",read:{reader:m$1.read},write:{allowNull:!1,writer:m$1.write,overridePolicy(){return {enabled:r$2(this.geometry)}}}}})],d$2.prototype,"spatialRelationship",void 0),e$1([d$3({type:Number,json:{write:{overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$2.prototype,"distance",void 0),e$1([d$3({type:[Number],json:{write:!0}})],d$2.prototype,"objectIds",void 0),e$1([d$3({type:u.apiValues,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$2.prototype,"units",void 0),e$1([d$3({type:y$1,json:{write:!0}})],d$2.prototype,"timeExtent",void 0),d$2=c$2=e$1([i$2("esri.layers.support.FeatureFilter")],d$2);const y=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$1;let p$4=d$1=class extends a$1{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1;}clone(){return new d$1({filter:r$2(this.filter)&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e$1([d$3({type:y,json:{write:!0,origins:{"web-map":{write:{allowNull:!0,writer(e,r,t,o){if(!e)return void(r[t]=e);const s=e.write({},o),i=Object.keys(s);1===i.length&&"where"===i[0]?r[t]=s:r[t]=null;}}}}}})],p$4.prototype,"filter",void 0),e$1([d$3({json:{write:!0,origins:{"web-map":{read:{reader:n$1},write:{allowNull:!0,writer:a$2}}}}})],p$4.prototype,"includedEffect",void 0),e$1([d$3({json:{write:!0,origins:{"web-map":{read:{reader:n$1},write:{allowNull:!0,writer:a$2}}}}})],p$4.prototype,"excludedEffect",void 0),e$1([d$3({type:Boolean,json:{write:!0,name:"showExcludedLabels",default:!1}})],p$4.prototype,"excludedLabelsVisible",void 0),p$4=d$1=e$1([i$2("esri.layers.support.FeatureEffect")],p$4);const a=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$3=t=>{let p=class extends t{constructor(){super(...arguments),this.featureEffect=null;}};return e$1([d$3({type:a,json:{origins:{"web-map":{write:{allowNull:!0}}}}})],p.prototype,"featureEffect",void 0),p=e$1([i$2("esri.layers.mixins.FeatureEffectLayer")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends a$1{constructor(){super(...arguments),this.type=null;}};e$1([d$3({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t$2.prototype,"type",void 0),t$2=e$1([i$2("esri.layers.support.FeatureReduction")],t$2);const p$3=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var r$1;let e=r$1=class extends a$1{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new r$1({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};e$1([d$3({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e$1([d$3({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),e$1([d$3({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=r$1=e$1([i$2("esri.layers.support.OutStatistic")],e);const p$2=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let i=p$1=class extends a$1{constructor(){super(...arguments),this.name=null;}clone(){return new p$1({name:this.name,outStatistic:this.outStatistic.clone()})}};e$1([d$3({type:String,json:{write:!0}})],i.prototype,"name",void 0),e$1([d$3({type:p$2,json:{write:!0}})],i.prototype,"outStatistic",void 0),i=p$1=e$1([i$2("esri.layers.support.AggregateField")],i);const c$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let d=m=class extends a$1{constructor(e){super(e),this.type="cluster",this.clusterRadius=o$1("80px"),this.clusterMinSize=o$1("12px"),this.clusterMaxSize=o$1("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new m({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:l(this.labelingInfo),labelsVisible:this.labelsVisible,fields:l(this.fields),popupEnabled:this.popupEnabled,popupTemplate:l(this.popupTemplate)})}};e$1([d$3({type:["cluster"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),e$1([d$3({type:Number,cast:e=>"auto"===e?e:o$1(e),json:{write:!0}})],d.prototype,"clusterRadius",void 0),e$1([d$3({type:Number,cast:o$1,json:{write:!0}})],d.prototype,"clusterMinSize",void 0),e$1([d$3({type:Number,cast:o$1,json:{write:!0}})],d.prototype,"clusterMaxSize",void 0),e$1([d$3(p$5)],d.prototype,"popupEnabled",void 0),e$1([d$3({type:M,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],d.prototype,"popupTemplate",void 0),e$1([d$3({types:D})],d.prototype,"symbol",void 0),e$1([d$3({type:[E],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],d.prototype,"labelingInfo",void 0),e$1([d$3(m$2)],d.prototype,"labelsVisible",void 0),e$1([d$3({type:[c$1],json:{write:!0}})],d.prototype,"fields",void 0),d=m=e$1([i$2("esri.layers.support.FeatureReductionCluster")],d);const b=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let c=t$1=class extends p$3{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};e$1([d$3({type:["selection"]})],c.prototype,"type",void 0),c=t$1=e$1([i$2("esri.layers.support.FeatureReductionSelection")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={types:{key:"type",base:p$3,typeMap:{selection:p,cluster:b}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:{key:"type",base:p$3,typeMap:{selection:b}}},"web-scene":{types:{key:"type",base:p$3,typeMap:{selection:p}}}}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,i,o){return r?r.map((r=>{const s=new E;if(s.read(r,o),s.labelExpression){const e=i.fields||i.layerDefinition&&i.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(n,((n,r)=>`[${t(r,e)}]`));}return s})):null}function t(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}

export { a, p as b, p$3 as p, r, s, t$3 as t, y };
