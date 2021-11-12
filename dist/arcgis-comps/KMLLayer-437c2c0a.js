import { x as n, bp as a, d, r, aj as b, I as S$1, e, a as d$2, g as c, cJ as u, i as i$1, ch as pt, as as b$2 } from './jsxFactory-c96bb45c.js';
import { am as m, M, v as o, J as k$1, f as r$1 } from './Graphic-6c72131a.js';
import { p } from './CollectionFlattener-567ea124.js';
import { l, b as b$1 } from './MultiOriginJSONSupport-f6506b2f.js';
import { i as i$2 } from './BlendLayer-70766503.js';
import { y } from './OperationalLayer-b04e38aa.js';
import { w as w$1 } from './PortalLayer-df690c5a.js';
import { n as n$1 } from './RefreshableLayer-702beb88.js';
import { s } from './ScaleRangeLayer-99043c54.js';
import { f } from './commonProperties-fa43a2ed.js';
import { i } from './JSONSupport-5a9f556a.js';
import { j as j$1, S as S$2, g, d as d$1 } from './kmlUtils-156a182f.js';
import './index-921bd636.js';
import './HandleOwner-6fdf8ee8.js';
import './reactiveUtils-4ba1fb4b.js';
import './jsonUtils-352e8eb7.js';
import './mat4-ef633c62.js';
import './_commonjsHelpers-020ca939.js';
import './asyncUtils-dc4bd819.js';
import './PortalItem-209a51a1.js';
import './TimeExtent-1bc95591.js';
import './lengthUtils-7a485aa7.js';
import './unitUtils-b25ae8cb.js';
import './jsonUtils-580ae154.js';
import './UniqueValueRenderer-f2af8ece.js';
import './VisualVariablesMixin-bafacb39.js';
import './colorRamps-693d6433.js';
import './ColorStop-fb26d745.js';
import './sizeVariableUtils-4d3662df.js';
import './visualVariableUtils-506efb2b.js';
import './compilerUtils-128fda14.js';
import './diffUtils-491d81df.js';
import './jsonUtils-a31b4632.js';
import './styleUtils-8fedca21.js';
import './DictionaryRenderer-78308a28.js';
import './LRUCache-81490262.js';
import './MemCache-e219bcfb.js';
import './FeatureSet-22102ca4.js';
import './Field-2b6029f8.js';
import './RangeDomain-de3132b0.js';
import './fieldType-b9f9365f.js';

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
