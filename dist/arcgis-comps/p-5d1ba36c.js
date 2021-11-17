import{k as s,aF as t,a1 as i,W as e,E as r,e as l,d as a,c as o,cB as n,i as u,r as p,c9 as h,aa as d}from"./p-9ae46e68.js";import{m as b,M as m,o as c,k as y,d as f}from"./p-566b0715.js";import{p as j}from"./p-b2a0fae5.js";import{l as v,b as w}from"./p-8e6daf54.js";import{i as S}from"./p-c59d0a4d.js";import{y as g}from"./p-cf8dc9be.js";import{w as L}from"./p-5c89c68e.js";import{n as k}from"./p-0c91ebaf.js";import{s as x}from"./p-72355290.js";import{f as O}from"./p-f271906a.js";import{i as M}from"./p-fe01b82b.js";import{j as E,S as F,g as K,d as z}from"./p-da56ac3e.js";import"./p-84bf99cb.js";import"./p-6ebb24ba.js";import"./p-4fd6e394.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-57ae469d.js";import"./p-725fd184.js";import"./p-79553c8d.js";import"./p-c5b7f7c3.js";import"./p-6443bfb4.js";import"./p-94f8dc11.js";import"./p-bb07d873.js";import"./p-8ac97b63.js";import"./p-a0a931f0.js";import"./p-dfc6337f.js";import"./p-77e6a663.js";import"./p-30ddb3a0.js";import"./p-74fc1b7f.js";import"./p-b3024dec.js";import"./p-4fcbc3c5.js";import"./p-4b3ae2cf.js";import"./p-3a2e88bf.js";import"./p-98a14d68.js";import"./p-8e03c038.js";import"./p-32462343.js";var C;let I=C=class extends(s.EventedMixin(M(b))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){t(this,"networkLink").then((()=>i(this,"visible"))).then((()=>this.load()))}load(s){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=p(s)?s.signal:null,i=this._fetchService(this._get("networkLink").href,t).then((s=>{const t=E(s.sublayers);this.fullExtent=m.fromJSON(t),this.sourceJSON=s;const i=e(r.ofType(C),F(C,s));this.sublayers?this.sublayers.addMany(i):this.sublayers=i,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(i),Promise.resolve(this)}set sublayers(s){const t=this._get("sublayers");t&&(t.forEach((s=>{s.parent=null,s.layer=null})),this._sublayersHandles.forEach((s=>s.remove())),this._sublayersHandles=null),s&&(s.forEach((s=>{s.parent=this,s.layer=this.layer})),this._sublayersHandles=[s.on("after-add",(({item:s})=>{s.parent=this,s.layer=this.layer})),s.on("after-remove",(({item:s})=>{s.parent=null,s.layer=null}))]),this._set("sublayers",s)}castSublayers(s){return e(r.ofType(C),s)}get visible(){return this._get("visible")}set visible(s){this._get("visible")!==s&&(this._set("visible",s),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(s,t){return!!t.visibility}set layer(s){this._set("layer",s),this.sublayers&&this.sublayers.forEach((t=>t.layer=s))}_fetchService(s,t){return K(s,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((s=>z(s.data)))}};l([a()],I.prototype,"description",void 0),l([a()],I.prototype,"id",void 0),l([a({readOnly:!0,value:null})],I.prototype,"networkLink",void 0),l([a({json:{write:{allowNull:!0}}})],I.prototype,"parent",void 0),l([a({value:null,json:{write:{allowNull:!0}}})],I.prototype,"sublayers",null),l([o("sublayers")],I.prototype,"castSublayers",null),l([a({value:null,json:{read:{source:"name",reader:s=>n(s)}}})],I.prototype,"title",void 0),l([a({value:!0})],I.prototype,"visible",null),l([c("visible",["visibility"])],I.prototype,"readVisible",null),l([a()],I.prototype,"sourceJSON",void 0),l([a({value:null})],I.prototype,"layer",null),l([a({type:m})],I.prototype,"fullExtent",void 0),I=C=l([u("esri.layers.support.KMLSublayer")],I);const N=I,P=["kml","xml"];let W=class extends(S(k(x(g(L(v(w))))))){constructor(...s){super(...s),this._visibleFolders=[],this.allSublayers=new j({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.outSpatialReference=y.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",((s,t)=>{t&&t.forEach((s=>{s.parent=null,s.layer=null})),s&&s.forEach((s=>{s.parent=this,s.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(s,t){return"string"==typeof s?{url:s,...t}:s}readSublayersFromItemOrWebMap(s,t){this._visibleFolders=t.visibleFolders}readSublayers(s,t,i){return F(N,t,i,this._visibleFolders)}writeSublayers(s,t){const i=[],e=s.toArray();for(;e.length;){const s=e[0];s.networkLink||(s.visible&&i.push(s.id),s.sublayers&&e.push(...s.sublayers.toArray())),e.shift()}t.visibleFolders=i}get title(){const s=this._get("title");return s&&"defaults"!==this.originOf("title")?s:this.url?h(this.url,P)||"KML":s||""}set title(s){this._set("title",s)}get visibleSublayers(){const s=this.sublayers,t=[],i=s=>{s.visible&&(t.push(s),s.sublayers&&s.sublayers.forEach(i))};return s&&s.forEach(i),t}get fullExtent(){return this._recomputeFullExtent()}load(s){const t=p(s)?s.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},s).catch(d).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(s){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:K(this.url,this.outSpatialReference,this.refreshInterval,s))),i=z(t.data);i&&this.read(i,{origin:"service"})}_recomputeFullExtent(){let s=null;p(this.extent)&&(s=this.extent.clone());const t=i=>{if(i.sublayers)for(const e of i.sublayers.items)t(e),e.visible&&e.fullExtent&&(p(s)?s.union(e.fullExtent):s=e.fullExtent.clone())};return t(this),s}};l([a({readOnly:!0})],W.prototype,"allSublayers",void 0),l([a({type:y})],W.prototype,"outSpatialReference",void 0),l([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],W.prototype,"path",void 0),l([a({readOnly:!0,json:{read:!1,write:!1}})],W.prototype,"legendEnabled",void 0),l([a({type:["show","hide","hide-children"]})],W.prototype,"listMode",void 0),l([a({type:["KML"]})],W.prototype,"operationalLayerType",void 0),l([a({})],W.prototype,"resourceInfo",void 0),l([a({type:r.ofType(N),json:{write:{ignoreOrigin:!0}}})],W.prototype,"sublayers",void 0),l([c(["web-map","portal-item"],"sublayers",["visibleFolders"])],W.prototype,"readSublayersFromItemOrWebMap",null),l([c("service","sublayers",["sublayers"])],W.prototype,"readSublayers",null),l([f("sublayers")],W.prototype,"writeSublayers",null),l([a({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),l([a({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],W.prototype,"title",null),l([a(O)],W.prototype,"url",void 0),l([a({readOnly:!0})],W.prototype,"visibleSublayers",null),l([a({type:m})],W.prototype,"extent",void 0),l([a()],W.prototype,"fullExtent",null),W=l([u("esri.layers.KMLLayer")],W);const _=W;export default _;