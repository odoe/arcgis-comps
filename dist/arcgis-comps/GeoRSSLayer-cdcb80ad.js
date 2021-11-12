import { cc as pt, A as r, ak as b$1, E, ab as t, e, a as d, i as i$1 } from './jsxFactory-a3b6abde.js';
import { Q as a, m, C as n, y, S, b1 as A, g as o, M } from './Graphic-08cda9ca.js';
import { l, b } from './MultiOriginJSONSupport-22dd2d29.js';
import { i } from './BlendLayer-1d9f1c9a.js';
import { y as y$1 } from './OperationalLayer-26aa2ff7.js';
import { w as w$1 } from './PortalLayer-8e73039a.js';
import { n as n$1 } from './RefreshableLayer-5b977e98.js';
import { s } from './ScaleRangeLayer-2f975321.js';
import { j, c, f } from './commonProperties-ad8badbd.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './asyncUtils-9a49e799.js';
import './PortalItem-4dd070a8.js';
import './TimeExtent-a92e5996.js';
import './lengthUtils-e1fe9a45.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:a,key:"type",typeMap:{"simple-line":m},errorContext:"symbol"},k={base:a,key:"type",typeMap:{"picture-marker":n,"simple-marker":y},errorContext:"symbol"},_={base:a,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let w=class extends(i(n$1(y$1(w$1(s(l(b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?pt(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(b$1).then((()=>this._fetchService(r$1))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t$1;const s=this.spatialReference,{data:i}=await E(t.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:A(s)?void 0:null!=(t$1=s.wkid)?t$1:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return (null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};e([d()],w.prototype,"description",void 0),e([d()],w.prototype,"featureCollections",void 0),e([o("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),e([d({type:M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),e([d(j)],w.prototype,"id",void 0),e([d(c)],w.prototype,"legendEnabled",void 0),e([d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),e([d({type:["show","hide"]})],w.prototype,"listMode",void 0),e([d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),e([d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),e([d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),e([d(f)],w.prototype,"url",void 0),e([d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),e([d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=e([i$1("esri.layers.GeoRSSLayer")],w);const F=w;

export default F;