import { e, d, i as i$4, cS as a$1, g_ as S, bt as h, S as S$1, jl as n$4, L as s$4, d3 as p$d, d4 as y$1, d5 as w, o_ as s$5, d6 as l$3, p0 as i$5, dc as b, aE as u, dN as l$4, b5 as b$1, jX as i$6, jY as j, r, h4 as p$e, qc as c$4, cU as o, as as r$1 } from './index.js';
import { t as t$7 } from './VoxelWasmManager.js';
import { N } from './SceneService.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$3=class extends a$1{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null;}};e([d({type:Boolean,json:{default:!0,write:!0}})],s$3.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],s$3.prototype,"label",void 0),e([d({type:[Number],json:{write:!0}})],s$3.prototype,"normal",void 0),e([d({type:[Number],json:{write:!0}})],s$3.prototype,"point",void 0),s$3=e([i$4("esri.layers.support.VoxelDynamicSection")],s$3);const p$c=s$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$2=class extends a$1{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null;}};e([d({type:Boolean,json:{write:!0}})],s$2.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],s$2.prototype,"label",void 0),e([d({type:[Number],json:{write:!0}})],s$2.prototype,"normal",void 0),e([d({type:[Number],json:{write:!0}})],s$2.prototype,"point",void 0),s$2=e([i$4("esri.layers.support.VoxelSlice")],s$2);const p$b=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$a=class extends a$1{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null;}};e([d({type:Boolean,json:{default:!0,write:!0}})],p$a.prototype,"enabled",void 0),e([d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"href",void 0),e([d({type:S,json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"id",void 0),e([d({type:String,json:{write:!0}})],p$a.prototype,"label",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"normal",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"point",void 0),e([d({type:[S],json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"sizeInPixel",void 0),e([d({type:[p$b],json:{write:!0}})],p$a.prototype,"slices",void 0),e([d({type:S,json:{default:0,write:!0}})],p$a.prototype,"timeId",void 0),e([d({type:S,json:{write:{enabled:!0,isRequired:!0}}})],p$a.prototype,"variableId",void 0),p$a=e([i$4("esri.layers.support.VoxelSection")],p$a);const l$2=p$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$6=class extends a$1{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5;}};e([d({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$6.prototype,"diffuseFactor",void 0),e([d({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$6.prototype,"specularFactor",void 0),t$6=e([i$4("esri.layers.support.VoxelSimpleShading")],t$6);const p$9=t$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$1=class extends a$1{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null;}};e([d({type:h,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],l$1.prototype,"color",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l$1.prototype,"value",void 0),e([d({type:Boolean,json:{default:!0,write:!0}})],l$1.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],l$1.prototype,"label",void 0),l$1=e([i$4("esri.layers.support.VoxelIsosurface")],l$1);const i$3=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$5=class extends a$1{constructor(){super(...arguments),this.alpha=0,this.position=0;}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$5.prototype,"alpha",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$5.prototype,"position",void 0),t$5=e([i$4("esri.layers.support.VoxelAlphaStop")],t$5);const p$8=t$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$2=class extends a$1{constructor(){super(...arguments),this.color=null,this.position=0;}};e([d({type:h,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],i$2.prototype,"color",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i$2.prototype,"position",void 0),i$2=e([i$4("esri.layers.support.VoxelColorStop")],i$2);const c$3=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$4=class extends a$1{constructor(){super(...arguments),this.enabled=!1,this.range=null;}};e([d({type:Boolean,json:{default:!1,write:!0}})],t$4.prototype,"enabled",void 0),e([d({type:[Number],json:{write:!0}})],t$4.prototype,"range",void 0),t$4=e([i$4("esri.layers.support.VoxelRangeFilter")],t$4);const p$7=t$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n$3=class extends a$1{constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new S$1,this.alphaStops=new S$1;}set colorStops(o){this._set("colorStops",n$4(o,this._get("colorStops"),S$1.ofType(c$3)));}set alphaStops(o){this._set("alphaStops",n$4(o,this._get("alphaStops"),S$1.ofType(p$8)));}};e([d({type:["linear","nearest"],json:{write:!0}})],n$3.prototype,"interpolation",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"stretchRange",void 0),e([d({type:S$1.ofType(c$3),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],n$3.prototype,"colorStops",null),e([d({type:S$1.ofType(p$8),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],n$3.prototype,"alphaStops",null),e([d({type:p$7,json:{write:!0}})],n$3.prototype,"rangeFilter",void 0),n$3=e([i$4("esri.layers.support.VoxelTransferFunctionStyle")],n$3);const c$2=n$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$1=class extends a$1{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null;}};e([d({type:h,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"color",void 0),e([d({type:S,json:{write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"value",void 0),e([d({type:Boolean,json:{default:!0,write:!0}})],i$1.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],i$1.prototype,"label",void 0),i$1=e([i$4("esri.layers.support.VoxelUniqueValue")],i$1);const l=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$6=class extends a$1{constructor(e){super(e),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new S$1,this.isosurfaces=new S$1;}set uniqueValues(e){this._set("uniqueValues",n$4(e,this._get("uniqueValues"),S$1.ofType(l)));}set isosurfaces(e){this._set("isosurfaces",n$4(e,this._get("isosurfaces"),S$1.ofType(i$3)));}};e([d({type:S,json:{write:{enabled:!0,isRequired:!0}}})],p$6.prototype,"variableId",void 0),e([d({type:String,json:{write:!0}})],p$6.prototype,"label",void 0),e([d({type:c$2,json:{write:{enabled:!0,overridePolicy(){return {enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],p$6.prototype,"transferFunction",void 0),e([d({type:S$1.ofType(l),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],p$6.prototype,"uniqueValues",null),e([d({type:S$1.ofType(i$3),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return {enabled:e&&s}}}}})],p$6.prototype,"isosurfaces",null),p$6=e([i$4("esri.layers.support.VoxelVariableStyle")],p$6);const c$1=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n$2=class extends a$1{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new S$1,this.dynamicSections=new S$1;}set slices(e){this._set("slices",n$4(e,this._get("slices"),S$1.ofType(p$b)));}set dynamicSections(e){this._set("dynamicSections",n$4(e,this._get("dynamicSections"),S$1.ofType(p$c)));}};e([d({type:S,json:{write:{enabled:!0,isRequired:!0}}})],n$2.prototype,"volumeId",void 0),e([d({type:Number,json:{default:1,write:!0}})],n$2.prototype,"verticalExaggeration",void 0),e([d({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],n$2.prototype,"exaggerationMode",void 0),e([d({type:Number,json:{default:0,write:!0}})],n$2.prototype,"verticalOffset",void 0),e([d({type:S$1.ofType(p$b),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.slices&&this.slices.length>0}}}}})],n$2.prototype,"slices",null),e([d({type:S$1.ofType(p$c),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],n$2.prototype,"dynamicSections",null),n$2=e([i$4("esri.layers.support.VoxelVolumeStyle")],n$2);const a=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y=class extends a$1{constructor(e){super(e),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new p$9,this.volumeStyles=new S$1,this.variableStyles=new S$1;}set volumeStyles(e){this._set("volumeStyles",n$4(e,this._get("volumeStyles"),S$1.ofType(a)));}set variableStyles(e){this._set("variableStyles",n$4(e,this._get("variableStyles"),S$1.ofType(c$1)));}};e([d({type:S$1.ofType(a),json:{write:!0}})],y.prototype,"volumeStyles",null),e([d({type:S,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"currentVariableId",void 0),e([d({type:["volume","surfaces"],json:{write:!0}})],y.prototype,"renderMode",void 0),e([d({type:S$1.ofType(c$1),json:{write:!0}})],y.prototype,"variableStyles",null),e([d({type:Boolean,json:{write:!0}})],y.prototype,"enableSlices",void 0),e([d({type:Boolean,json:{write:!0}})],y.prototype,"enableSections",void 0),e([d({type:Boolean,json:{write:!0}})],y.prototype,"enableDynamicSections",void 0),e([d({type:Boolean,json:{write:!0}})],y.prototype,"enableIsosurfaces",void 0),e([d({type:p$9,json:{write:!0}})],y.prototype,"shading",void 0),y=e([i$4("esri.layers.support.VoxelStyle")],y);const c=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$1=class extends a$1{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null;}};e([d({type:["discrete","continuous"],json:{write:!0}})],s$1.prototype,"continuity",void 0),e([d({type:Boolean,json:{write:!0}})],s$1.prototype,"hasNoData",void 0),e([d({type:Number,json:{write:!0}})],s$1.prototype,"noData",void 0),e([d({type:Number,json:{write:!0}})],s$1.prototype,"offset",void 0),e([d({type:Number,json:{write:!0}})],s$1.prototype,"scale",void 0),e([d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"type",void 0),s$1=e([i$4("esri.layers.support.VoxelFormat")],s$1);const p$5=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends a$1{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null;}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"id",void 0),e([d({type:String,json:{write:!0}})],i.prototype,"description",void 0),e([d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"name",void 0),e([d({type:p$5,json:{write:!0}})],i.prototype,"originalFormat",void 0),e([d({type:p$5,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"renderingFormat",void 0),e([d({type:String,json:{write:!0}})],i.prototype,"unit",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"volumeId",void 0),e([d({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],i.prototype,"type",void 0),i=e([i$4("esri.layers.support.VoxelVariable")],i);const p$4=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$3=class extends a$1{constructor(){super(...arguments),this.values=null;}};e([d({type:[Number],json:{write:!0}})],t$3.prototype,"values",void 0),t$3=e([i$4("esri.layers.support.VoxelIrregularSpacing")],t$3);const p$3=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends a$1{constructor(){super(...arguments),this.scale=1,this.offset=0;}};e([d({type:Number,json:{write:!0}})],t$2.prototype,"scale",void 0),e([d({type:Number,json:{write:!0}})],t$2.prototype,"offset",void 0),t$2=e([i$4("esri.layers.support.VoxelRegularSpacing")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$1=class extends a$1{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null;}};e([d({type:p$3,json:{write:!0}})],p$1.prototype,"irregularSpacing",void 0),e([d({type:Boolean,json:{write:!0}})],p$1.prototype,"isPositiveUp",void 0),e([d({type:Boolean,json:{write:!0}})],p$1.prototype,"isWrappedDateLine",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"label",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"name",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"quantity",void 0),e([d({type:p$2,json:{write:!0}})],p$1.prototype,"regularSpacing",void 0),e([d({type:Number,json:{write:!0}})],p$1.prototype,"size",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"unit",void 0),p$1=e([i$4("esri.layers.support.VoxelDimension")],p$1);const n$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$1=class extends a$1{constructor(){super(...arguments),this.id=0,this.dimensions=null;}getZDimension(){if(!this.dimensions)return -1;if(!Array.isArray(this.dimensions))return -1;if(4!==this.dimensions.length)return -1;for(let s=2;s<4;++s)if(this.dimensions[s].size>0)return s;return -1}isVolumeValid(){return !!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&-1!==this.getZDimension())))}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$1.prototype,"id",void 0),e([d({type:[n$1],json:{write:{enabled:!0,isRequired:!0}}})],t$1.prototype,"dimensions",void 0),t$1=e([i$4("esri.layers.support.VoxelVolume")],t$1);const n=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let s=t=class extends a$1{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4];}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=e([i$4("esri.layers.support.VoxelVolumeIndex")],s);const p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const M=s$4.getLogger(" esri.layers.VoxelLayer");let D=class extends(N(p$d(y$1(w(s$5(l$3(i$5(b)))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.url=null,this.sections=new S$1,this.style=null,this.opacity=1,this.variables=new S$1,this.volumes=new S$1,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new u,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this._dbgFlags.add(3);}destroy(){this._handles=l$4(this._handles);}dbg(e,t){this._dbgFlags.has(e)&&(3===e?M.error(t):M.warn(t));}load(e){const t=r(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(b$1).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}getConfiguration(){this._handles.add([i$6((()=>this._getRenderMode()),(e=>this._pushRenderModeToWasm(e))),i$6((()=>this._getCurrentVariableId()),(e=>this._pushCurrentVariableIdToWasm(e))),i$6((()=>this._getDynamicSections()),(e=>this._pushDynamicSectionsToWasm(e))),i$6((()=>this._getSlices()),(e=>this._pushSlicesToWasm(e))),i$6((()=>this._getSections()),(e=>this._pushSectionsToWasm(e)))]);const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return e.index&&this.index.isValid()?JSON.stringify(e):""}readVersion(e,t){return super.parseVersionString(e)}_getSections(){const e=[];for(const t of this.sections)e.push(new l$2({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}_pushSectionsToWasm(e){this.dbg(2,"VoxelLayer._pushSectionsToWasm() called");t$7.getInstance().setLayerStaticSections(this,e)||this.dbg(3,"VoxelLayer._pushSectionsToWasm() failed!");}_isPlaneValid(e,t,i){if(!e.point)return !1;if(!Array.isArray(e.point)||3!==e.point.length)return !1;if(!e.normal)return !1;if(!Array.isArray(e.normal)||3!==e.normal.length)return !1;for(let o=0;o<3;++o){const r=e.point[o];if(r<0||r>=i[t[o]].size)return !1}const r=r$1(e.normal[0],e.normal[1],e.normal[2]);j(r,r);const s=1e-6;return !(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<s)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}getVariableStyle(e){let t=-1;t=r(e)?e:this._getCurrentVariableId();if(!(null==this?void 0:this.style.variableStyles)||-1===t)return null;const i=this.style.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.style.variableStyles.getItemAt(i)}getVariable(e){let t=-1;if(t=r(e)?e:this._getCurrentVariableId(),!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.getItemAt(i)}_getVolume(e){const t=this.getVariable(e);return r(t)?this.volumes.find((({id:e})=>e===t.volumeId)):null}_getVolumeStyle(e){const t=this.getVariable(e);return r(t)?this.style.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}_getSlices(){const e=[],t=this._getVolume(null);if(!r(t)||!t.isVolumeValid())return e;const i=this._getVolumeStyle(null);if(!r(i))return e;for(const r of i.slices)this._isPlaneValid(r,[0,1,t.getZDimension()],t.dimensions)?e.push(new p$b({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):e.push(new p$b({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return e}_pushSlicesToWasm(e){this.dbg(2,"VoxelLayer._pushSlicesToWasm() called!");t$7.getInstance().setLayerSlices(this,e)||this.dbg(3,"VoxelLayer._pushSlicesToWasm() failed!");}_getDynamicSections(){const e=[],t=this._getVolume(null);if(!r(t)||!t.isVolumeValid())return e;const i=this._getVolumeStyle(null);if(!r(i))return e;for(const r of i.dynamicSections)this._isPlaneValid(r,[0,1,t.getZDimension()],t.dimensions)?e.push(new p$c({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):e.push(new p$c({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return e}_pushDynamicSectionsToWasm(e){this.dbg(2,"VoxelLayer._pushDynamicSectionsToWasm() called!");t$7.getInstance().setLayerDynamicSections(this,e)||this.dbg(3,"VoxelLayer._updateDynamicSections() failed!");}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(e){this.dbg(2,"VoxelLayer._pushCurrentVariableIdToWasm() called!");t$7.getInstance().setLayerCurrentVariable(this,e)||this.dbg(3,"VoxelLayer._pushCurrentVariableIdToWasm() failed!");}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(e){this.dbg(2,"VoxelLayer._pushRenderModeToWasm() called!");t$7.getInstance().setLayerRenderMode(this,e)||this.dbg(3,"VoxelLayer.setLayerRenderMode() failed!");}};e([d(p$e)],D.prototype,"popupEnabled",void 0),e([d({type:["Voxel"]})],D.prototype,"operationalLayerType",void 0),e([d(c$4)],D.prototype,"legendEnabled",void 0),e([d({json:{write:!0}})],D.prototype,"title",void 0),e([d({type:String,json:{write:!0}})],D.prototype,"url",void 0),e([d({type:S$1.ofType(l$2),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],D.prototype,"sections",void 0),e([d({type:c,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],D.prototype,"style",void 0),e([d({type:["show","hide"]})],D.prototype,"listMode",void 0),e([d({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),e([d({type:S$1.ofType(p$4)})],D.prototype,"variables",void 0),e([d({type:S$1.ofType(n)})],D.prototype,"volumes",void 0),e([d({type:p})],D.prototype,"index",void 0),e([d({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],D.prototype,"minScale",void 0),e([d({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],D.prototype,"maxScale",void 0),e([d({json:{read:!1},readOnly:!0})],D.prototype,"type",void 0),e([d({readOnly:!0,json:{name:"serviceVersion"}})],D.prototype,"version",void 0),e([o("service","version")],D.prototype,"readVersion",null),D=e([i$4("esri.layers.VoxelLayer")],D);const R=D;

export default R;
