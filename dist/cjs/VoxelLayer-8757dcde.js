'use strict';

const request = require('./messageBundle-8be88d04.js');
const MultiOriginJSONSupport = require('./MultiOriginJSONSupport-77ac451b.js');
const reactiveUtils = require('./reactiveUtils-ef5dccea.js');
const mathUtils = require('./mathUtils-af6066f0.js');
const common = require('./common-41a349f2.js');
const Layer = require('./Layer-31cde361.js');
const VoxelWasmManager = require('./VoxelWasmManager-4c582cad.js');
const APIKeyMixin = require('./APIKeyMixin-77c99036.js');
const ArcGISService = require('./ArcGISService-56d7a630.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const PortalLayer = require('./PortalLayer-7556e594.js');
const ScaleRangeLayer = require('./ScaleRangeLayer-5320a5ba.js');
const SceneService = require('./SceneService-0beb7b88.js');
const Portal = require('./Portal-8d16604d.js');
const Color = require('./Color-7d915caa.js');
require('./index-fde8502c.js');
require('./geometry-ef17530a.js');
require('./Identifiable-a4f50f85.js');
require('./intersectorUtils-0e8a6b4b.js');
require('./mat4-f68486bc.js');
require('./mat4f64-fc3339e5.js');
require('./vec4f64-d3fa6cd2.js');
require('./boundedPlane-f1094694.js');
require('./vectorStacks-f48a010a.js');
require('./quatf64-e7a7f39e.js');
require('./vec2f64-60b3c97e.js');
require('./lineSegment-a86bf7bd.js');
require('./plane-0816c6c9.js');
require('./sphere-ef7f801f.js');
require('./mathUtils-87b1f941.js');
require('./utils-2d48ea24.js');
require('./Util-5c6af8a4.js');
require('./vec2-d000a8cb.js');
require('./doublePrecisionUtils-26ddcbaf.js');
require('./arcgisLayerUrl-5174d661.js');
require('./persistableUrlUtils-c611d652.js');
require('./TimeExtent-8b558884.js');
require('./ElevationInfo-d3e3d64f.js');
require('./opacityUtils-f2e4b347.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./asyncUtils-cd78b718.js');
require('./PortalItem-8bcd02f8.js');
require('./originUtils-fc18d7d8.js');
require('./multiOriginJSONSupportUtils-13e8b6cf.js');
require('./HeightModelInfo-06fd3d80.js');
require('./I3SIndexInfo-7e127a6f.js');
require('./saveUtils-a37d456e.js');
require('./resourceUtils-c2de819b.js');
require('./colorUtils-e70dbab5.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$3=class extends request.a$2{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null;}};request.e([request.d({type:Boolean,json:{default:!0,write:!0}})],s$3.prototype,"enabled",void 0),request.e([request.d({type:String,json:{write:!0}})],s$3.prototype,"label",void 0),request.e([request.d({type:[Number],json:{write:!0}})],s$3.prototype,"normal",void 0),request.e([request.d({type:[Number],json:{write:!0}})],s$3.prototype,"point",void 0),s$3=request.e([request.i("esri.layers.support.VoxelDynamicSection")],s$3);const p$c=s$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$2=class extends request.a$2{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null;}};request.e([request.d({type:Boolean,json:{write:!0}})],s$2.prototype,"enabled",void 0),request.e([request.d({type:String,json:{write:!0}})],s$2.prototype,"label",void 0),request.e([request.d({type:[Number],json:{write:!0}})],s$2.prototype,"normal",void 0),request.e([request.d({type:[Number],json:{write:!0}})],s$2.prototype,"point",void 0),s$2=request.e([request.i("esri.layers.support.VoxelSlice")],s$2);const p$b=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$a=class extends request.a$2{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null;}};request.e([request.d({type:Boolean,json:{default:!0,write:!0}})],p$a.prototype,"enabled",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"href",void 0),request.e([request.d({type:request.S$2,json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"id",void 0),request.e([request.d({type:String,json:{write:!0}})],p$a.prototype,"label",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"normal",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"point",void 0),request.e([request.d({type:[request.S$2],json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"sizeInPixel",void 0),request.e([request.d({type:[p$b],json:{write:!0}})],p$a.prototype,"slices",void 0),request.e([request.d({type:request.S$2,json:{default:0,write:!0}})],p$a.prototype,"timeId",void 0),request.e([request.d({type:request.S$2,json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"variableId",void 0),p$a=request.e([request.i("esri.layers.support.VoxelSection")],p$a);const l$2=p$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$6=class extends request.a$2{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5;}};request.e([request.d({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$6.prototype,"diffuseFactor",void 0),request.e([request.d({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$6.prototype,"specularFactor",void 0),t$6=request.e([request.i("esri.layers.support.VoxelSimpleShading")],t$6);const p$9=t$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$1=class extends request.a$2{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null;}};request.e([request.d({type:Color.h,json:{type:[request.S$2],write:{enabled:!0,isRequired:!0}}})],l$1.prototype,"color",void 0),request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l$1.prototype,"value",void 0),request.e([request.d({type:Boolean,json:{default:!0,write:!0}})],l$1.prototype,"enabled",void 0),request.e([request.d({type:String,json:{write:!0}})],l$1.prototype,"label",void 0),l$1=request.e([request.i("esri.layers.support.VoxelIsosurface")],l$1);const i$3=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$5=class extends request.a$2{constructor(){super(...arguments),this.alpha=0,this.position=0;}};request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$5.prototype,"alpha",void 0),request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$5.prototype,"position",void 0),t$5=request.e([request.i("esri.layers.support.VoxelAlphaStop")],t$5);const p$8=t$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$2=class extends request.a$2{constructor(){super(...arguments),this.color=null,this.position=0;}};request.e([request.d({type:Color.h,json:{type:[request.S$2],write:{enabled:!0,isRequired:!0}}})],i$2.prototype,"color",void 0),request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i$2.prototype,"position",void 0),i$2=request.e([request.i("esri.layers.support.VoxelColorStop")],i$2);const c$3=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$4=class extends request.a$2{constructor(){super(...arguments),this.enabled=!1,this.range=null;}};request.e([request.d({type:Boolean,json:{default:!1,write:!0}})],t$4.prototype,"enabled",void 0),request.e([request.d({type:[Number],json:{write:!0}})],t$4.prototype,"range",void 0),t$4=request.e([request.i("esri.layers.support.VoxelRangeFilter")],t$4);const p$7=t$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n$3=class extends request.a$2{constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new request.S,this.alphaStops=new request.S;}set colorStops(o){this._set("colorStops",Portal.n(o,this._get("colorStops"),request.S.ofType(c$3)));}set alphaStops(o){this._set("alphaStops",Portal.n(o,this._get("alphaStops"),request.S.ofType(p$8)));}};request.e([request.d({type:["linear","nearest"],json:{write:!0}})],n$3.prototype,"interpolation",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"stretchRange",void 0),request.e([request.d({type:request.S.ofType(c$3),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],n$3.prototype,"colorStops",null),request.e([request.d({type:request.S.ofType(p$8),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],n$3.prototype,"alphaStops",null),request.e([request.d({type:p$7,json:{write:!0}})],n$3.prototype,"rangeFilter",void 0),n$3=request.e([request.i("esri.layers.support.VoxelTransferFunctionStyle")],n$3);const c$2=n$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$1=class extends request.a$2{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null;}};request.e([request.d({type:Color.h,json:{type:[request.S$2],write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"color",void 0),request.e([request.d({type:request.S$2,json:{write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"value",void 0),request.e([request.d({type:Boolean,json:{default:!0,write:!0}})],i$1.prototype,"enabled",void 0),request.e([request.d({type:String,json:{write:!0}})],i$1.prototype,"label",void 0),i$1=request.e([request.i("esri.layers.support.VoxelUniqueValue")],i$1);const l=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$6=class extends request.a$2{constructor(e){super(e),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new request.S,this.isosurfaces=new request.S;}set uniqueValues(e){this._set("uniqueValues",Portal.n(e,this._get("uniqueValues"),request.S.ofType(l)));}set isosurfaces(e){this._set("isosurfaces",Portal.n(e,this._get("isosurfaces"),request.S.ofType(i$3)));}};request.e([request.d({type:request.S$2,json:{write:{enabled:!0,isRequired:!0}}})],p$6.prototype,"variableId",void 0),request.e([request.d({type:String,json:{write:!0}})],p$6.prototype,"label",void 0),request.e([request.d({type:c$2,json:{write:{enabled:!0,overridePolicy(){return {enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],p$6.prototype,"transferFunction",void 0),request.e([request.d({type:request.S.ofType(l),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],p$6.prototype,"uniqueValues",null),request.e([request.d({type:request.S.ofType(i$3),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return {enabled:e&&s}}}}})],p$6.prototype,"isosurfaces",null),p$6=request.e([request.i("esri.layers.support.VoxelVariableStyle")],p$6);const c$1=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n$2=class extends request.a$2{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new request.S,this.dynamicSections=new request.S;}set slices(e){this._set("slices",Portal.n(e,this._get("slices"),request.S.ofType(p$b)));}set dynamicSections(e){this._set("dynamicSections",Portal.n(e,this._get("dynamicSections"),request.S.ofType(p$c)));}};request.e([request.d({type:request.S$2,json:{write:{enabled:!0,isRequired:!0}}})],n$2.prototype,"volumeId",void 0),request.e([request.d({type:Number,json:{default:1,write:!0}})],n$2.prototype,"verticalExaggeration",void 0),request.e([request.d({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],n$2.prototype,"exaggerationMode",void 0),request.e([request.d({type:Number,json:{default:0,write:!0}})],n$2.prototype,"verticalOffset",void 0),request.e([request.d({type:request.S.ofType(p$b),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.slices&&this.slices.length>0}}}}})],n$2.prototype,"slices",null),request.e([request.d({type:request.S.ofType(p$c),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],n$2.prototype,"dynamicSections",null),n$2=request.e([request.i("esri.layers.support.VoxelVolumeStyle")],n$2);const a=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y=class extends request.a$2{constructor(e){super(e),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new p$9,this.volumeStyles=new request.S,this.variableStyles=new request.S;}set volumeStyles(e){this._set("volumeStyles",Portal.n(e,this._get("volumeStyles"),request.S.ofType(a)));}set variableStyles(e){this._set("variableStyles",Portal.n(e,this._get("variableStyles"),request.S.ofType(c$1)));}};request.e([request.d({type:request.S.ofType(a),json:{write:!0}})],y.prototype,"volumeStyles",null),request.e([request.d({type:request.S$2,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"currentVariableId",void 0),request.e([request.d({type:["volume","surfaces"],json:{write:!0}})],y.prototype,"renderMode",void 0),request.e([request.d({type:request.S.ofType(c$1),json:{write:!0}})],y.prototype,"variableStyles",null),request.e([request.d({type:Boolean,json:{write:!0}})],y.prototype,"enableSlices",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],y.prototype,"enableSections",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],y.prototype,"enableDynamicSections",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],y.prototype,"enableIsosurfaces",void 0),request.e([request.d({type:p$9,json:{write:!0}})],y.prototype,"shading",void 0),y=request.e([request.i("esri.layers.support.VoxelStyle")],y);const c=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$1=class extends request.a$2{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null;}};request.e([request.d({type:["discrete","continuous"],json:{write:!0}})],s$1.prototype,"continuity",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],s$1.prototype,"hasNoData",void 0),request.e([request.d({type:Number,json:{write:!0}})],s$1.prototype,"noData",void 0),request.e([request.d({type:Number,json:{write:!0}})],s$1.prototype,"offset",void 0),request.e([request.d({type:Number,json:{write:!0}})],s$1.prototype,"scale",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"type",void 0),s$1=request.e([request.i("esri.layers.support.VoxelFormat")],s$1);const p$5=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends request.a$2{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null;}};request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"id",void 0),request.e([request.d({type:String,json:{write:!0}})],i.prototype,"description",void 0),request.e([request.d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"name",void 0),request.e([request.d({type:p$5,json:{write:!0}})],i.prototype,"originalFormat",void 0),request.e([request.d({type:p$5,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"renderingFormat",void 0),request.e([request.d({type:String,json:{write:!0}})],i.prototype,"unit",void 0),request.e([request.d({type:Number,json:{write:!0}})],i.prototype,"volumeId",void 0),request.e([request.d({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],i.prototype,"type",void 0),i=request.e([request.i("esri.layers.support.VoxelVariable")],i);const p$4=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$3=class extends request.a$2{constructor(){super(...arguments),this.values=null;}};request.e([request.d({type:[Number],json:{write:!0}})],t$3.prototype,"values",void 0),t$3=request.e([request.i("esri.layers.support.VoxelIrregularSpacing")],t$3);const p$3=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends request.a$2{constructor(){super(...arguments),this.scale=1,this.offset=0;}};request.e([request.d({type:Number,json:{write:!0}})],t$2.prototype,"scale",void 0),request.e([request.d({type:Number,json:{write:!0}})],t$2.prototype,"offset",void 0),t$2=request.e([request.i("esri.layers.support.VoxelRegularSpacing")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$1=class extends request.a$2{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null;}};request.e([request.d({type:p$3,json:{write:!0}})],p$1.prototype,"irregularSpacing",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],p$1.prototype,"isPositiveUp",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],p$1.prototype,"isWrappedDateLine",void 0),request.e([request.d({type:String,json:{write:!0}})],p$1.prototype,"label",void 0),request.e([request.d({type:String,json:{write:!0}})],p$1.prototype,"name",void 0),request.e([request.d({type:String,json:{write:!0}})],p$1.prototype,"quantity",void 0),request.e([request.d({type:p$2,json:{write:!0}})],p$1.prototype,"regularSpacing",void 0),request.e([request.d({type:Number,json:{write:!0}})],p$1.prototype,"size",void 0),request.e([request.d({type:String,json:{write:!0}})],p$1.prototype,"unit",void 0),p$1=request.e([request.i("esri.layers.support.VoxelDimension")],p$1);const n$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$1=class extends request.a$2{constructor(){super(...arguments),this.id=0,this.dimensions=null;}getZDimension(){if(!this.dimensions)return -1;if(!Array.isArray(this.dimensions))return -1;if(4!==this.dimensions.length)return -1;for(let s=2;s<4;++s)if(this.dimensions[s].size>0)return s;return -1}isVolumeValid(){return !!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&-1!==this.getZDimension())))}};request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$1.prototype,"id",void 0),request.e([request.d({type:[n$1],json:{write:{enabled:!0,isRequired:!0}}})],t$1.prototype,"dimensions",void 0),t$1=request.e([request.i("esri.layers.support.VoxelVolume")],t$1);const n=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let s=t=class extends request.a$2{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4];}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),request.e([request.d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),request.e([request.d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=request.e([request.i("esri.layers.support.VoxelVolumeIndex")],s);const p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const M=request.s$1.getLogger(" esri.layers.VoxelLayer");let D=class extends(SceneService.N(ArcGISService.p(OperationalLayer.y(PortalLayer.w(ScaleRangeLayer.s(MultiOriginJSONSupport.l(APIKeyMixin.i(Layer.b)))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.url=null,this.sections=new request.S,this.style=null,this.opacity=1,this.variables=new request.S,this.volumes=new request.S,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new request.u,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this._dbgFlags.add(3);}destroy(){this._handles=request.l$3(this._handles);}dbg(e,t){this._dbgFlags.has(e)&&(3===e?M.error(t):M.warn(t));}load(e){const t=request.r(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(request.b$1).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}getConfiguration(){this._handles.add([reactiveUtils.i((()=>this._getRenderMode()),(e=>this._pushRenderModeToWasm(e))),reactiveUtils.i((()=>this._getCurrentVariableId()),(e=>this._pushCurrentVariableIdToWasm(e))),reactiveUtils.i((()=>this._getDynamicSections()),(e=>this._pushDynamicSectionsToWasm(e))),reactiveUtils.i((()=>this._getSlices()),(e=>this._pushSlicesToWasm(e))),reactiveUtils.i((()=>this._getSections()),(e=>this._pushSectionsToWasm(e)))]);const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return e.index&&this.index.isValid()?JSON.stringify(e):""}readVersion(e,t){return super.parseVersionString(e)}_getSections(){const e=[];for(const t of this.sections)e.push(new l$2({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}_pushSectionsToWasm(e){this.dbg(2,"VoxelLayer._pushSectionsToWasm() called");VoxelWasmManager.t.getInstance().setLayerStaticSections(this,e)||this.dbg(3,"VoxelLayer._pushSectionsToWasm() failed!");}_isPlaneValid(e,t,i){if(!e.point)return !1;if(!Array.isArray(e.point)||3!==e.point.length)return !1;if(!e.normal)return !1;if(!Array.isArray(e.normal)||3!==e.normal.length)return !1;for(let o=0;o<3;++o){const r=e.point[o];if(r<0||r>=i[t[o]].size)return !1}const r=common.r(e.normal[0],e.normal[1],e.normal[2]);mathUtils.j$1(r,r);const s=1e-6;return !(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<s)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}getVariableStyle(e){let t=-1;t=request.r(e)?e:this._getCurrentVariableId();if(!(null==this?void 0:this.style.variableStyles)||-1===t)return null;const i=this.style.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.style.variableStyles.getItemAt(i)}getVariable(e){let t=-1;if(t=request.r(e)?e:this._getCurrentVariableId(),!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.getItemAt(i)}_getVolume(e){const t=this.getVariable(e);return request.r(t)?this.volumes.find((({id:e})=>e===t.volumeId)):null}_getVolumeStyle(e){const t=this.getVariable(e);return request.r(t)?this.style.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}_getSlices(){const e=[],t=this._getVolume(null);if(!request.r(t)||!t.isVolumeValid())return e;const i=this._getVolumeStyle(null);if(!request.r(i))return e;for(const r of i.slices)this._isPlaneValid(r,[0,1,t.getZDimension()],t.dimensions)?e.push(new p$b({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):e.push(new p$b({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return e}_pushSlicesToWasm(e){this.dbg(2,"VoxelLayer._pushSlicesToWasm() called!");VoxelWasmManager.t.getInstance().setLayerSlices(this,e)||this.dbg(3,"VoxelLayer._pushSlicesToWasm() failed!");}_getDynamicSections(){const e=[],t=this._getVolume(null);if(!request.r(t)||!t.isVolumeValid())return e;const i=this._getVolumeStyle(null);if(!request.r(i))return e;for(const r of i.dynamicSections)this._isPlaneValid(r,[0,1,t.getZDimension()],t.dimensions)?e.push(new p$c({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):e.push(new p$c({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return e}_pushDynamicSectionsToWasm(e){this.dbg(2,"VoxelLayer._pushDynamicSectionsToWasm() called!");VoxelWasmManager.t.getInstance().setLayerDynamicSections(this,e)||this.dbg(3,"VoxelLayer._updateDynamicSections() failed!");}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(e){this.dbg(2,"VoxelLayer._pushCurrentVariableIdToWasm() called!");VoxelWasmManager.t.getInstance().setLayerCurrentVariable(this,e)||this.dbg(3,"VoxelLayer._pushCurrentVariableIdToWasm() failed!");}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(e){this.dbg(2,"VoxelLayer._pushRenderModeToWasm() called!");VoxelWasmManager.t.getInstance().setLayerRenderMode(this,e)||this.dbg(3,"VoxelLayer.setLayerRenderMode() failed!");}};request.e([request.d(OperationalLayer.p)],D.prototype,"popupEnabled",void 0),request.e([request.d({type:["Voxel"]})],D.prototype,"operationalLayerType",void 0),request.e([request.d(OperationalLayer.c)],D.prototype,"legendEnabled",void 0),request.e([request.d({json:{write:!0}})],D.prototype,"title",void 0),request.e([request.d({type:String,json:{write:!0}})],D.prototype,"url",void 0),request.e([request.d({type:request.S.ofType(l$2),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],D.prototype,"sections",void 0),request.e([request.d({type:c,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],D.prototype,"style",void 0),request.e([request.d({type:["show","hide"]})],D.prototype,"listMode",void 0),request.e([request.d({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),request.e([request.d({type:request.S.ofType(p$4)})],D.prototype,"variables",void 0),request.e([request.d({type:request.S.ofType(n)})],D.prototype,"volumes",void 0),request.e([request.d({type:p})],D.prototype,"index",void 0),request.e([request.d({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],D.prototype,"minScale",void 0),request.e([request.d({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],D.prototype,"maxScale",void 0),request.e([request.d({json:{read:!1},readOnly:!0})],D.prototype,"type",void 0),request.e([request.d({readOnly:!0,json:{name:"serviceVersion"}})],D.prototype,"version",void 0),request.e([request.o$2("service","version")],D.prototype,"readVersion",null),D=request.e([request.i("esri.layers.VoxelLayer")],D);const R=D;

exports.default = R;
