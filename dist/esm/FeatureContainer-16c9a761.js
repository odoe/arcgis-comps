import { n, i as i$2, o as o$2 } from './mat2d-13076132.js';
import { s, i as i$1 } from './mat3-6a23d9ad.js';
import { C as n$1 } from './DefaultUI-022795b8.js';
import { D as D$1 } from './vec2-5672471e.js';
import { n as n$2 } from './vec2f32-29d55de5.js';
import { o as o$1, Z, K, A, B as B$1, C, D as D$2, r as r$3 } from './definitions-6a5ca2d9.js';
import { r as r$1 } from './TiledDisplayObject-ec3aafee.js';
import { A as r$2, af as t, c as s$1, dc as d, c9 as E, K as s$2, V as e, s as s$3, bE as B, dd as v, ca as A$1, aW as c$2 } from './messageBundle-f75b4090.js';
import { e as e$1 } from './Queue-a7e7a3e5.js';
import { l as l$1 } from './FramebufferObject-3d2e79da.js';
import { o as o$3 } from './Texture-f0375c04.js';
import { Q, J, $, N } from './Utils-e4b23428.js';
import { n as n$3, l } from './visualVariablesUtils-7de7bc4d.js';
import { o as o$5 } from './TileContainer-627eb1a4.js';
import { h as h$1 } from './Color-d1b9b54f.js';
import { u } from './screenUtils-9bb7e30c.js';
import { H } from './unitUtils-38774114.js';
import { m } from './lengthUtils-f033d4fe.js';
import { o as o$4 } from './capabilities-ffdc19e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c$1{acquire(s){return {refCount:1,version:-1,labelMat2d:n$1(),tileMat3:n$1(),dvs:n$1()}}release(s){}}class f extends r$1{constructor(s,r,t){super(s,r,t,o$1,o$1);}destroy(){super.destroy(),this._transforms&&f.TransformCache.release(this.key.hash);}setTransform(i,h){if(i.version===this.transforms.version)return;this.transforms.version=i.version;const m=h/(i.resolution*i.pixelRatio),c=this.transforms.tileMat3,[f,l]=i.toScreenNoRotation([0,0],[this.x,this.y]),u=this.width/this.rangeX*m,d=this.height/this.rangeY*m;s(c,u,0,0,0,d,0,f,l,1),i$1(this.transforms.dvs,i.displayViewMat3,c);const p=this.transforms.labelMat2d,v=i.getScreenTransform(p,h),j=n$2();D$1(j,[this.x,this.y],v),n(p),i$2(p,p,j),o$2(p,i.viewMat2d,p);}_createTransforms(){return f.TransformCache.acquire(this.key.hash)}}f.TransformCache=new c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=2147483647;class i{constructor(t){this._head=t,this._cursor=t;}static from(t,e=0,s=t.byteLength/_.BYTES_PER_RECORD-e){const r=new _(new Int32Array(t,e*_.BYTES_PER_RECORD,s*_.ELEMENTS_PER_RECORD));return new i(r)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t;}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t;}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t;}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t;}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t;}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t;}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t;}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link;}return !1}forEach(t){const e=this.getCursor();for(;e.next();)t(e);}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size();}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}copy(){var t;const e=new i(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let s=e._head,r=e._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return e}next(){return !!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}delete(e){let s=this._head,r=null;for(;s;){if(s.delete(e))return s.isEmpty()&&(r$2(r)&&(r._link=s._link),s===this._head&&(this._head=s._link),s===this._cursor&&(this._cursor=s._link)),!0;r=s,s=s._link;}return !1}}i.ELEMENTS_PER_RECORD=Z,i.BYTES_PER_RECORD=i.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class _{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t;}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new _(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=r,++this._deletedCount;this.next()&&this.id===t;)this.id=r,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t;}lookup(t$1){if(t(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id);}if(!this._offsets.instance.has(t$1))return !1;const s=this._index;return this._index=this._offsets.instance.get(t$1),this.id!==r||(this._index=s,!1)}get id(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]=t;}get materialKey(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]=t;}get insertAfter(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]=t;}get indexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]=t;}get vertexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]=t;}get vertexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]=t;}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*_.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*_.ELEMENTS_PER_RECORD+7]=t;}get index(){return this._index}size(){return this._packedRecords.length/_.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===r;);return this._index<this.size()}peekId(){const t=(this._index+1)*_.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new _(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}_.ELEMENTS_PER_RECORD=Z,_.BYTES_PER_RECORD=_.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const z=s$1.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),U=n$3(l,z),D=2147483647,S=t=>t&D;class j{constructor(t,e$1,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,h=Q(r);this.shared=i,this.pixelType=r,this.size=e$1,this.textureOnly=a,a||(this.data=new h(e(s))),this._resetRange();}destroy(){E(this._texture,(t=>t.dispose()));for(const t in this._fbos)E(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose();})),this._fbos[t]=null;this._texture=null;}get _textureDesc(){return {target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e$1,i){const s=S(t),r=e(this.data),a=s*this.texelSize+e$1;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s));}getData(t$1,e){if(t(this.data))return null;const i=S(t$1)*this.texelSize+e;return !this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return c$2(this._texture,(()=>this._initTexture(t)))}getFBO(t$1,e=0){if(t(this._fbos[e])){const i={colorTarget:0,depthStencilTarget:0},s=0===e?this.getTexture(t$1):this._textureDesc;this._fbos[e]=new l$1(t$1,i,s);}return this._fbos[e]}get locked(){return !(5121!==this.pixelType||!this.shared||this.textureOnly||!s$2("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(e$1,i){if(!this.locked){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=e(this.data).buffer,a=this.getTexture(e$1),h=4,o=(i-i%this.size)/this.size,d=(s-s%this.size)/this.size,u=o,l=this.size,p=d,c=o*this.size*h,x=(l+p*this.size)*h-c,g=Q(this.pixelType),_=new g(r,c*g.BYTES_PER_ELEMENT,x),f=this.size,b=p-u+1;if(b>this.size)return void z.error(new s$3("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,u,f,b,_);}catch(s){}i();}}update(t){const{data:e,start:i,end:s}=t;if(r$2(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i]);}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s);}resize(t,e$1){const i=this.size;if(this.size=e$1,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=Q(this.pixelType);this.destroy(),this.data=new s(e(t.buffer));}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}_initTexture(t){const e=new o$3(t,this._textureDesc,c$2(this.data,void 0));if(r$2(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,h=this.getFBO(t),n=J(r),o=new(Q(r))(new ArrayBuffer(i*s*n*this.texelSize)),d=t.getBoundFramebufferObject(),{x:u,y:l,width:p,height:c}=t.getViewport();t.bindFramebuffer(h),h.readPixels(0,0,i,s,a,r,o),e.updateData(0,0,0,2*i,s/2,o),t.setViewport(u,l,p,c),t.bindFramebuffer(d);}return this.destroy(),this._texture=e,this._texture}}class k{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1;}initialize(t$1){const{blocks:e,shared:i,size:h}=t$1;if(this.shared=i,this.size=h,U("Initializing AttributeStoreView",t$1),t(this._data))this._data=d(e,(t=>new j(t,h,i)));else for(let r=0;r<this._data.length;r++){const t$1=this._data[r],n=e[r];r$2(n)&&(t(t$1)?this._data[r]=new j(n,h,i):t$1.resize(n,h));}this._initialized=!0;}destroy(){E(this._data,(t=>d(t,(t=>t.destroy())))),E(this._defaultTexture,(t=>t.dispose()));}isUpdating(){const t$1=this._data;if(t(t$1))return !0;const i=r$2(this._pendingAttributeUpdate),r=i;return s$2("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${r}\n  -> hasPendingUpdate ${i}`),r}getBlock(t$1){if(t(this._data))return null;return this._data[t$1]}setLabelMinZoom(t,e){this.setData(t,0,1,e);}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,K,0,0)}getData(t$1,e$1,i,r){if(!this._data)return 0;const h=e(this._data)[e$1];if(t(h))return 0;const o=h.getData(t$1,i);return r$2(o)?o:r}setData(t,e$1,i,s){const r=e(this._data)[e$1];e(r).setData(t,i,s);}lockTextureUpload(){this._locked=!0;}unlockTextureUpload(){this._locked=!1;}forceTextureUpload(){this._forceNextUpload=!0;}async requestUpdate(e){if(this._pendingAttributeUpdate)return void z.error(new s$3("mapview-webgl","Tried to update attribute data with a pending update"));const i=B();return U("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:i},i.promise}update(){if(this._initialized&&r$2(this._pendingAttributeUpdate)){const{data:t,resolver:e$1}=this._pendingAttributeUpdate,i=e(this._data);for(let s=0;s<t.blocks.length;s++){const e=t.blocks[s],r=i[s];E(r,(t=>E(e,(e=>{U(`Updating block ${s}`,e),t.update(e);}))));}this._pendingAttributeUpdate=null,e$1(),this._onUpdate();}}bindTextures(t,e$1=!0){this.update();const i=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(i,A),void(e$1&&(t.bindTexture(i,B$1),t.bindTexture(i,C),t.bindTexture(i,D$2)));const s=e(this._data);this._locked&&!this._forceNextUpload||(v(s,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(A$1(s[0],i,(e=>e.getTexture(t))),A),e$1&&(t.bindTexture(A$1(s[1],i,(e=>e.getTexture(t))),B$1),t.bindTexture(A$1(s[2],i,(e=>e.getTexture(t))),C),t.bindTexture(A$1(s[3],i,(e=>e.getTexture(t))),D$2));}_getDefaultTexture(t$1){if(t(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new o$3(t$1,e,new Uint8Array(4));}return this._defaultTexture}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}function p(e,t$1,i=0){if(t(t$1))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);const{r:s,g:o,b:l,a:r}=t$1;e[i+0]=s*r/255,e[i+1]=o*r/255,e[i+2]=l*r/255,e[i+3]=r;}class h{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1};}getSizeVVFieldStops(e$1){const s=this._vvSizeFieldStops;switch(s.type){case"static":return s;case"level-dependent":return c$2(s.levels[e$1],(()=>{let t=1/0,a=0;for(const i in s.levels){const s=parseFloat(i),o=Math.abs(e$1-s);o<t&&(t=o,a=s);}if(t===1/0)return {sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const o=2**((e$1-a)/2),l=e(s.levels[a]),r=new Float32Array(l.values);return r[2]*=o,r[3]*=o,{sizes:e(l.sizes),values:r}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){r$2(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e);}setInfo(e,t,i){if(this._updateEffects(i),this._vvInfo=t,"dot-density"===e.type)this._updateDotDensityInfo(e);}getVariation(){return {ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:o$4().supportsTextureFloat}}getVariationHash(){return (this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){r$2(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1;}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,a;if($(e.minSize)&&$(e.maxSize))if(N(e.minSize)&&N(e.maxSize))i=u(e.minSize),a=u(e.maxSize);else {const s=t.scale;i=u(c(s,e.minSize.stops)),a=u(c(s,e.maxSize.stops));}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,a]);}if(s.scaleStops&&(this.vvSizeScaleStopsValue=u(c(t.scale,s.scaleStops.stops))),s.unitValue){const e=H(t.spatialReference)/m[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution;}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops);}const a=e.color;a&&(i.vvColorEnabled=!0,this.vvColorValues.set(a.values),this.vvColors.set(a.colors));const n=e.opacity;n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const u$1=e.rotation;u$1&&(i.vvRotationEnabled=!0,i.vvRotationType=u$1.type);}_updateDotDensityInfo(t){const i=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let s=0;s<r$3;s++){const t=s>=i.length?new h$1([0,0,0,0]):i[s].color;p(this.ddColors,t,4*s);}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;p(this.ddBackgroundColor,t.backgroundColor);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends o$5{constructor(e){super(e),this._rendererInfo=new h,this._materialItemsRequestQueue=new e$1,this.attributeView=new k((()=>this.onAttributeStoreUpdate()));}destroy(){this.removeAllChildren(),this.children.forEach((e=>e.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear();}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender();}async getMaterialItems(t,r){if(!t||0===t.length)return null;const s=B();return this._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop();}super.doRender(e);}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e);}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:r,resolver:s}){const{painter:i,pixelRatio:o}=e,n=t.map((e=>i.textureManager.rasterizeItem(e.symbol,o,e.glyphIds,r)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const r=e.map(((e,r)=>({id:t[r].id,mosaicItem:e})));s.resolve(r);}),s.reject);}}

export { f, i, o };
