import{bm as s,e,d as r,bn as i,i as t,p as l,W as a}from"./p-7b6f6c18.js";import{n}from"./p-2f9d204e.js";import{n as y,l as h}from"./p-03d6250d.js";const o={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let u=class extends(s(l)){constructor(s){super(s),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const s=this.visibleSublayers.map((s=>{const e=y(this.floors,s);return s.toExportImageJSON(e)}));return s.length?JSON.stringify(s):null}get hasDynamicLayers(){return this.layer&&n(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(s){this._get("layer")!==s&&(this._set("layer",s),this.handles.remove("layer"),s&&this.handles.add([s.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),s.on("sublayer-update",(s=>this.notifyChange(o[s.propertyName])))],"layer"))}get layers(){const s=this.visibleSublayers;return s?s.length?"show:"+s.map((s=>s.id)).join(","):"show:-1":null}get layerDefs(){var s;const e=!(null==(s=this.floors)||!s.length),r=this.visibleSublayers.filter((s=>null!=s.definitionExpression||e&&null!=s.floorInfo));return r.length?JSON.stringify(r.reduce(((s,e)=>{const r=y(this.floors,e),i=a(r)?h(r,e):e.definitionExpression;return s[e.id]=i,s}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const s=this.layer;return s&&(s.commitProperty("dpi"),s.commitProperty("imageFormat"),s.commitProperty("imageTransparency"),s.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const s=[];if(!this.layer)return s;const e=this.layer.sublayers,r=e=>{const i=this.scale;e.visible&&(0===i||(0===e.minScale||i<=e.minScale)&&(0===e.maxScale||i>=e.maxScale))&&(e.sublayers?e.sublayers.forEach(r):s.unshift(e))};e&&e.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==s.length||i.some(((e,r)=>s[r]!==e))?s:i}toJSON(){const s=this.layer;let e={dpi:s.dpi,format:s.imageFormat,transparent:s.imageTransparency,gdbVersion:s.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?e.dynamicLayers=this.dynamicLayers:e={...e,layers:this.layers,layerDefs:this.layerDefs},e}};e([r({readOnly:!0})],u.prototype,"dynamicLayers",null),e([r()],u.prototype,"floors",void 0),e([r({readOnly:!0})],u.prototype,"hasDynamicLayers",null),e([r()],u.prototype,"layer",null),e([r({readOnly:!0})],u.prototype,"layers",null),e([r({readOnly:!0})],u.prototype,"layerDefs",null),e([r({type:Number})],u.prototype,"scale",void 0),e([r(i)],u.prototype,"timeExtent",void 0),e([r({readOnly:!0})],u.prototype,"version",null),e([r({readOnly:!0})],u.prototype,"visibleSublayers",null),u=e([t("esri.layers.mixins.ExportImageParameters")],u);export{u as c}