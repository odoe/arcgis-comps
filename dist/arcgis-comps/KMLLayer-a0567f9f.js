import { r, R as b, e, b as d$2, k as c, bU as u, i as i$1, bv as pt, a9 as b$2 } from './cast-e5ea2533.js';
import './geometry-160ffbb5.js';
import { n, S as S$1 } from './Collection-ac20f1a1.js';
import { p } from './CollectionFlattener-4b03d02c.js';
import { l, b as b$1 } from './Layer-663fafaf.js';
import { m, M, o, k as k$1, r as r$1 } from './Portal-f1457cb4.js';
import { i as i$2 } from './BlendLayer-34bd1b5b.js';
import { y } from './OperationalLayer-0f16c161.js';
import { w as w$1 } from './PortalLayer-0ef8a2d2.js';
import { n as n$1 } from './RefreshableLayer-0c4b9daf.js';
import { s } from './ScaleRangeLayer-f5a96945.js';
import { f } from './commonProperties-4c10a963.js';
import { i } from './JSONSupport-8dda8bae.js';
import { a, d } from './watchUtils-08cf9d08.js';
import { j as j$1, S as S$2, g, d as d$1 } from './kmlUtils-fa90f634.js';
import './Polyline-56152656.js';
import './HandleOwner-0793ecee.js';
import './Handles-24a27aa9.js';
import './reactiveUtils-ab0efcb1.js';
import './Identifiable-0fb3fc58.js';
import './jsonUtils-687db5e9.js';
import './colorUtils-37750ea3.js';
import './screenUtils-9ed89fa7.js';
import './mat4-0196b8fc.js';
import './common-e2a70efa.js';
import './_commonjsHelpers-020ca939.js';
import './asyncUtils-847ae6e6.js';
import './PortalItem-85b3bb14.js';
import './assets-1ab0ccbe.js';
import './TimeExtent-ecf7e6f2.js';
import './persistableUrlUtils-a9da326c.js';
import './opacityUtils-5755cb64.js';
import './lengthUtils-2084b777.js';
import './unitUtils-5dcccb3c.js';
import './PopupTemplate-87ca9924.js';
import './enumeration-da141e85.js';
import './number-2da43364.js';
import './aaBoundingBox-e0a84875.js';
import './aaBoundingRect-2a187de3.js';
import './mathUtils-cc1689ad.js';
import './jsonUtils-efd42703.js';
import './UniqueValueRenderer-b8a9ac2d.js';
import './symbols-dc010d3b.js';
import './Symbol-ac21e497.js';
import './Color-ed0bfbe9.js';
import './collectionUtils-b35b097b.js';
import './VisualVariablesMixin-a8b13e1b.js';
import './colorRamps-fcb1175a.js';
import './ColorStop-0035d362.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-ed2b64ac.js';
import './Graphic-79de2095.js';
import './compilerUtils-2d7ddb00.js';
import './diffUtils-4072cef0.js';
import './jsonUtils-528e9eda.js';
import './styleUtils-5c87d3a9.js';
import './DictionaryRenderer-09505309.js';
import './LRUCache-65fcdebd.js';
import './MemCache-d4727626.js';
import './aliasOf-e543e228.js';
import './FeatureSet-c6e91f97.js';
import './Field-67832b5b.js';
import './fieldType-7f6b02ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var j;let S=j=class extends(n.EventedMixin(i(m))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){a(this,"networkLink").then((()=>d(this,"visible"))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=r(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=j$1(e.sublayers);this.fullExtent=M.fromJSON(t),this.sourceJSON=e;const s=b(S$1.ofType(j),S$2(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return b(S$1.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return g(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>d$1(e.data)))}};e([d$2()],S.prototype,"description",void 0),e([d$2()],S.prototype,"id",void 0),e([d$2({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),e([d$2({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),e([d$2({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),e([c("sublayers")],S.prototype,"castSublayers",null),e([d$2({value:null,json:{read:{source:"name",reader:e=>u(e)}}})],S.prototype,"title",void 0),e([d$2({value:!0})],S.prototype,"visible",null),e([o("visible",["visibility"])],S.prototype,"readVisible",null),e([d$2()],S.prototype,"sourceJSON",void 0),e([d$2({value:null})],S.prototype,"layer",null),e([d$2({type:M})],S.prototype,"fullExtent",void 0),S=j=e([i$1("esri.layers.support.KMLSublayer")],S);const k=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=["kml","xml"];let E=class extends(i$2(n$1(s(y(w$1(l(b$1))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=k$1.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")));}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return S$2(k,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?pt(this.url,w)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(b$2).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g(this.url,this.outSpatialReference,this.refreshInterval,e))),t=d$1(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;r(this.extent)&&(e=this.extent.clone());const r$1=t=>{if(t.sublayers)for(const s of t.sublayers.items)r$1(s),s.visible&&s.fullExtent&&(r(e)?e.union(s.fullExtent):e=s.fullExtent.clone());};return r$1(this),e}};e([d$2({readOnly:!0})],E.prototype,"allSublayers",void 0),e([d$2({type:k$1})],E.prototype,"outSpatialReference",void 0),e([d$2({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),e([d$2({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"legendEnabled",void 0),e([d$2({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),e([d$2({type:["KML"]})],E.prototype,"operationalLayerType",void 0),e([d$2({})],E.prototype,"resourceInfo",void 0),e([d$2({type:S$1.ofType(k),json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),e([o(["web-map","portal-item"],"sublayers",["visibleFolders"])],E.prototype,"readSublayersFromItemOrWebMap",null),e([o("service","sublayers",["sublayers"])],E.prototype,"readSublayers",null),e([r$1("sublayers")],E.prototype,"writeSublayers",null),e([d$2({readOnly:!0,json:{read:!1}})],E.prototype,"type",void 0),e([d$2({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],E.prototype,"title",null),e([d$2(f)],E.prototype,"url",void 0),e([d$2({readOnly:!0})],E.prototype,"visibleSublayers",null),e([d$2({type:M})],E.prototype,"extent",void 0),e([d$2()],E.prototype,"fullExtent",null),E=e([i$1("esri.layers.KMLLayer")],E);const F=E;

export default F;
