import{e,d as t,i as s,a1 as i,D as r,S as o,cL as p,c as n,n as l,Q as a,A as d,s as u,ak as c,aj as m,a2 as y,a0 as f}from"./p-e58503d5.js";import{p as h}from"./p-e94b450b.js";import{n as j}from"./p-9b7a2176.js";import{l as b}from"./p-d208934e.js";import{b as v}from"./p-3e39c093.js";import{U as g}from"./p-f9fa1010.js";import{d as w}from"./p-b3b07e48.js";import{i as S}from"./p-22c9f19c.js";import{p as x}from"./p-c096b5df.js";import{y as B,v as F,a as I,d as O}from"./p-1ab449fc.js";import{w as k}from"./p-e44bd0a6.js";import{s as A}from"./p-c6970847.js";import{N as T}from"./p-f8d815f0.js";import{r as L}from"./p-a9a30646.js";import{H as M}from"./p-8bc9b36a.js";import{m as R}from"./p-efbca0ca.js";import{l as q}from"./p-27cfeff3.js";import"./p-53bb6ab4.js";import"./p-7731c620.js";import"./p-5d962998.js";import"./p-e654504b.js";import"./p-b79fcce3.js";import"./p-8747982c.js";import"./p-93765525.js";import"./p-765e6c28.js";import"./p-0e784e4d.js";import"./p-dbdf15fc.js";import"./p-e0d9ff4c.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-08e5f531.js";import"./p-fb38a9d0.js";import"./p-dfc6337f.js";import"./p-9f1c2d50.js";import"./p-54330161.js";import"./p-c048b814.js";import"./p-6b2eb7a7.js";import"./p-01e5a461.js";import"./p-7a658388.js";import"./p-f94762ac.js";import"./p-ea916a39.js";import"./p-8a919d07.js";import"./p-889f7a78.js";import"./p-1f81b35d.js";import"./p-81b9df84.js";import"./p-5ce39624.js";import"./p-e9bae5e9.js";import"./p-b0565d49.js";import"./p-51a17e75.js";import"./p-dae095dd.js";import"./p-a131049b.js";import"./p-a2324023.js";import"./p-afac6fb2.js";import"./p-480e5606.js";import"./p-2db4840f.js";import"./p-bba8b671.js";import"./p-dc852195.js";import"./p-a24f7752.js";import"./p-ccdb8e80.js";import"./p-4a6dc5e4.js";import"./p-6a92ecb9.js";import"./p-7a5bfd29.js";import"./p-5e833dfc.js";import"./p-0edb3309.js";import"./p-e8160b60.js";import"./p-2e8ad983.js";import"./p-e3270d48.js";import"./p-fe68aab5.js";import"./p-de86b3c9.js";import"./p-37d3434c.js";import"./p-da33e926.js";import"./p-120b7410.js";import"./p-b1eff69d.js";import"./p-612de336.js";import"./p-91fe06d4.js";import"./p-ab0e9273.js";import"./p-ff2962f5.js";import"./p-15a9486c.js";import"./p-dfff2877.js";import"./p-cbc915be.js";import"./p-21349208.js";import"./p-a6c8fb32.js";import"./p-0eb619a6.js";import"./p-389c5380.js";import"./p-5f8e8f6c.js";import"./p-21bd46cc.js";import"./p-4f86c37f.js";let N=class extends i{constructor(){super(...arguments),this.type=null}};e([t({type:String,readOnly:!0,json:{write:!0}})],N.prototype,"type",void 0),N=e([s("esri.layers.support.BuildingFilterAuthoringInfo")],N);const E=N;var C;let P=C=class extends i{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new C({filterType:this.filterType,filterValues:r(this.filterValues)})}};var _;e([t({type:String,json:{write:!0}})],P.prototype,"filterType",void 0),e([t({type:[String],json:{write:!0}})],P.prototype,"filterValues",void 0),P=C=e([s("esri.layers.support.BuildingFilterAuthoringInfoType")],P);const K=o.ofType(P);let V=_=class extends i{clone(){return new _({filterTypes:r(this.filterTypes)})}};var H;e([t({type:K,json:{write:!0}})],V.prototype,"filterTypes",void 0),V=_=e([s("esri.layers.support.BuildingFilterAuthoringInfoBlock")],V);const z=o.ofType(V);let D=H=class extends E{constructor(){super(...arguments),this.type="checkbox"}clone(){return new H({filterBlocks:r(this.filterBlocks)})}};e([t({type:["checkbox"]})],D.prototype,"type",void 0),e([t({type:z,json:{write:!0}})],D.prototype,"filterBlocks",void 0),D=H=e([s("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],D);const Q=D;let U=class extends i{};e([t({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),U=e([s("esri.layers.support.BuildingFilterMode")],U);const W=U;var X;let G=X=class extends W{constructor(){super(...arguments),this.type="solid"}clone(){return new X}};e([t({type:["solid"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),G=X=e([s("esri.layers.support.BuildingFilterModeSolid")],G);const J=G;var Y;let Z=Y=class extends W{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Y({edges:r(this.edges)})}};e([L({wireFrame:"wire-frame"})],Z.prototype,"type",void 0),e([t(M)],Z.prototype,"edges",void 0),Z=Y=e([s("esri.layers.support.BuildingFilterModeWireFrame")],Z);const $=Z;var ee;let te=ee=class extends W{constructor(){super(...arguments),this.type="x-ray"}clone(){return new ee}};e([t({type:["x-ray"],readOnly:!0,json:{write:!0}})],te.prototype,"type",void 0),te=ee=e([s("esri.layers.support.BuildingFilterModeXRay")],te);const se=te;var ie;const re={nonNullable:!0,types:{key:"type",base:W,typeMap:{solid:J,"wire-frame":$,"x-ray":se}},json:{read:e=>{switch(e&&e.type){case"solid":return J.fromJSON(e);case"wireFrame":return $.fromJSON(e);case"x-ray":return se.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let oe=ie=class extends i{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new J,this.title=""}clone(){return new ie({filterExpression:this.filterExpression,filterMode:r(this.filterMode),title:this.title})}};var pe;e([t({type:String,json:{write:{enabled:!0,isRequired:!0}}})],oe.prototype,"filterExpression",void 0),e([t(re)],oe.prototype,"filterMode",void 0),e([t({type:String,json:{write:{enabled:!0,isRequired:!0}}})],oe.prototype,"title",void 0),oe=ie=e([s("esri.layers.support.BuildingFilterBlock")],oe);const ne=o.ofType(oe);let le=pe=class extends i{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=p(),this.name=null}clone(){return new pe({description:this.description,filterBlocks:r(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:r(this.filterAuthoringInfo)})}};e([t({type:String,json:{write:!0}})],le.prototype,"description",void 0),e([t({type:ne,json:{write:{enabled:!0,isRequired:!0}}})],le.prototype,"filterBlocks",void 0),e([t({types:{key:"type",base:E,typeMap:{checkbox:Q}},json:{read:e=>"checkbox"===(e&&e.type)?Q.fromJSON(e):null,write:!0}})],le.prototype,"filterAuthoringInfo",void 0),e([t({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],le.prototype,"id",void 0),e([t({type:String,json:{write:{enabled:!0,isRequired:!0}}})],le.prototype,"name",void 0),le=pe=e([s("esri.layers.support.BuildingFilter")],le);const ae=le,de=n.getLogger("esri.layers.support.BuildingSummaryStatistics");let ue=class extends i{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};e([t({type:String})],ue.prototype,"fieldName",void 0),e([t({type:String})],ue.prototype,"modelName",void 0),e([t({type:String})],ue.prototype,"label",void 0),e([t({type:Number})],ue.prototype,"min",void 0),e([t({type:Number})],ue.prototype,"max",void 0),e([t({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],ue.prototype,"mostFrequentValues",void 0),e([t({type:[Number]})],ue.prototype,"subLayerIds",void 0),ue=e([s("esri.layers.support.BuildingFieldStatistics")],ue);let ce=class extends(R.LoadableMixin(l(i))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(de.error("building summary statistics are not loaded"),null)}load(e){const t=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await a(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};e([t({constructOnly:!0,type:String})],ce.prototype,"url",void 0),e([t({readOnly:!0,type:[ue],json:{read:{source:"summary"}}})],ce.prototype,"fields",null),ce=e([s("esri.layers.support.BuildingSummaryStatistics")],ce);const me=ce,ye=n.getLogger("esri.layers.BuildingSceneLayer"),fe=o.ofType(ae),he=r(w.sublayersProperty);he.json.origins["web-scene"]={type:[g],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},he.json.origins["portal-item"]={type:[g],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let je=class extends(T(x(B(k(A(b(S(v)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new h({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new fe,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,s){const i=w.readSublayers(e,t,s);return w.forEachSublayer(i,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:s}){w.forEachSublayer(e,(e=>e.read(t.get(e.id),s)))}readSublayerOverrides(e,t){const s=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?s.set(i.id,i):t.messages.push(new u("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:s,context:t}}writeSublayerOverrides(e,t,s){const i=[];w.forEachSublayer(this.sublayers,(e=>{const t=e.write({},s);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(r(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this.sublayerOverrides=s}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=c(this.parsedUrl.path,t.statisticsHRef);return new me({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=d(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(m).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return j(this,(e=>{w.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){return this._debouncedSaveOperations(0,{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"})}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new u("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&ye.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ye.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new q(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){ye.warn("Associated feature service item could not be loaded",e)}}};e([t({type:["BuildingSceneLayer"]})],je.prototype,"operationalLayerType",void 0),e([t({readOnly:!0})],je.prototype,"allSublayers",void 0),e([t(he)],je.prototype,"sublayers",void 0),e([y("service","sublayers")],je.prototype,"readSublayers",null),e([t({type:fe,nonNullable:!0,json:{write:!0}})],je.prototype,"filters",void 0),e([t({type:String,json:{write:!0}})],je.prototype,"activeFilterId",void 0),e([t({readOnly:!0,type:me})],je.prototype,"summaryStatistics",void 0),e([y("summaryStatistics",["statisticsHRef"])],je.prototype,"readSummaryStatistics",null),e([t({type:[String],json:{read:!1}})],je.prototype,"outFields",void 0),e([t(F)],je.prototype,"fullExtent",void 0),e([t({type:["show","hide","hide-children"]})],je.prototype,"listMode",void 0),e([t(I(f))],je.prototype,"spatialReference",void 0),e([t(O)],je.prototype,"elevationInfo",null),e([t({json:{read:!1},readOnly:!0})],je.prototype,"type",void 0),e([t()],je.prototype,"associatedFeatureServiceItem",void 0),je=e([s("esri.layers.BuildingSceneLayer")],je);const be=je;export default be;