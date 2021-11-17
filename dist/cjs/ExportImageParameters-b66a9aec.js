'use strict';

const request = require('./messageBundle-312ceb47.js');
const HandleOwner = require('./HandleOwner-f254dc86.js');
const commonProperties = require('./commonProperties-75b954b3.js');
const sublayerUtils = require('./sublayerUtils-a9071b30.js');
const floorFilterUtils = require('./floorFilterUtils-a9b30733.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};exports.c=class extends(HandleOwner.a(request.p)){constructor(e){super(e),this.floors=null,this.scale=0;}destroy(){this.layer=null;}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=floorFilterUtils.n(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&sublayerUtils.n(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"));}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=floorFilterUtils.n(this.floors,r),i=request.r(s)?floorFilterUtils.l(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r));};r&&r.forEach(s);const t=this._get("visibleSublayers");return !t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};request.e([request.d({readOnly:!0})],exports.c.prototype,"dynamicLayers",null),request.e([request.d()],exports.c.prototype,"floors",void 0),request.e([request.d({readOnly:!0})],exports.c.prototype,"hasDynamicLayers",null),request.e([request.d()],exports.c.prototype,"layer",null),request.e([request.d({readOnly:!0})],exports.c.prototype,"layers",null),request.e([request.d({readOnly:!0})],exports.c.prototype,"layerDefs",null),request.e([request.d({type:Number})],exports.c.prototype,"scale",void 0),request.e([request.d(commonProperties.g)],exports.c.prototype,"timeExtent",void 0),request.e([request.d({readOnly:!0})],exports.c.prototype,"version",null),request.e([request.d({readOnly:!0})],exports.c.prototype,"visibleSublayers",null),exports.c=request.e([request.i("esri.layers.mixins.ExportImageParameters")],exports.c);
