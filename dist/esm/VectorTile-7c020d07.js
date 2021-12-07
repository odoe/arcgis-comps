import { A as r, V as e, af as t$1 } from './messageBundle-f75b4090.js';
import { r as r$2, M, h as h$2, f as f$2 } from './mat3-6a23d9ad.js';
import { C as n$1 } from './DefaultUI-022795b8.js';
import { h as h$1, f as f$1 } from './FramebufferObject-3d2e79da.js';
import './Texture-f0375c04.js';
import { e as e$1 } from './config-768959de.js';
import { r as r$1 } from './TiledDisplayObject-ec3aafee.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t){this.xTile=0,this.yTile=0,this.hash=0,this.priority=1,this.colliders=[],this.textVertexRanges=[],this.iconVertexRanges=[],this.tile=t;}}class s{constructor(){this.tileSymbols=[],this.parts=[{startTime:0,startOpacity:0,targetOpacity:0,show:!1},{startTime:0,startOpacity:0,targetOpacity:0,show:!1}],this.show=!1;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(t,e,r,s,i,l){const o=r-i;if(o>=0)return (e>>o)+(s-(l<<o))*(t>>o);const n=-o;return e-(l-(s<<n))*(t>>n)<<n}class o$1{constructor(t,e,r){this._rows=Math.ceil(e/r),this._columns=Math.ceil(t/r),this._cellSize=r,this.cells=new Array(this._rows);for(let s=0;s<this._rows;s++){this.cells[s]=new Array(this._columns);for(let t=0;t<this._columns;t++)this.cells[s][t]=[];}}getCell(t,e){const r=Math.min(Math.max(Math.floor(e/this._cellSize),0),this._rows-1),s=Math.min(Math.max(Math.floor(t/this._cellSize),0),this._columns-1);return this.cells[r]&&this.cells[r][s]||null}getCellSpan(t,e,r,s){return [Math.min(Math.max(Math.floor(t/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(e/this._cellSize),0),this.rows-1),Math.min(Math.max(Math.floor(r/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(s/this._cellSize),0),this.rows-1)]}get cellSize(){return this._cellSize}get columns(){return this._columns}get rows(){return this._rows}}function n(t$1,r,s,i,l,o){const n=r[i++];for(let h=0;h<n;h++){const n=new t(o);n.xTile=r[i++],n.yTile=r[i++],n.hash=r[i++],n.priority=r[i++];const h=r[i++];for(let t=0;t<h;t++){const t=r[i++],e=r[i++],l=r[i++],o=r[i++],h=!!r[i++],a=r[i++],c=s[i++],d=s[i++],p=r[i++],u=r[i++];n.colliders.push({xTile:t,yTile:e,dxPixels:l,dyPixels:o,hard:h,partIndex:a,width:p,height:u,minLod:c,maxLod:d});}const a=t$1[i++];for(let e=0;e<a;e++)n.textVertexRanges.push([t$1[i++],t$1[i++]]);const c=t$1[i++];for(let e=0;e<c;e++)n.iconVertexRanges.push([t$1[i++],t$1[i++]]);l.push(n);}return i}function h(t,e,r){for(const[s,i]of t.symbols)a$1(t,e,r,i,s);}function a$1(t,e,r,s,i){const l=t.layerData.get(i);if(3===l.type){for(const e of s){const s=e.unique;let i;if(e.selectedForRendering){const e=s.parts[0],l=e.startOpacity,o=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===o;const n=r?Math.floor(127*l)|o<<7:o?255:0;i=n<<24|n<<16|n<<8|n;}else i=0;for(const[t,r]of e.iconVertexRanges)for(let e=t;e<t+r;e+=4)l.iconOpacity[e/4]=i;if(e.selectedForRendering){const e=s.parts[1],l=e.startOpacity,o=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===o;const n=r?Math.floor(127*l)|o<<7:o?255:0;i=n<<24|n<<16|n<<8|n;}else i=0;for(const[t,r]of e.textVertexRanges)for(let e=t;e<t+r;e+=4)l.textOpacity[e/4]=i;}l.lastOpacityUpdate=e,l.opacityChanged=!0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class f{constructor(e,t){this.layerUIDs=[],this.isDestroyed=!1,this.data=e,this.memoryUsed=e.byteLength;let r=1;const i=new Uint32Array(e);this.layerUIDs=[];const s=i[r++];for(let n=0;n<s;n++)this.layerUIDs[n]=i[r++];this.bufferDataOffset=r,t&&(this.layer=t.getStyleLayerByUID(this.layerUIDs[0]));}get isPreparedForRendering(){return t$1(this.data)}get offset(){return this.bufferDataOffset}destroy(){this.isDestroyed||(this.doDestroy(),this.isDestroyed=!0);}prepareForRendering(t){t$1(this.data)||(this.doPrepareForRendering(t,this.data,this.bufferDataOffset),this.data=null);}}class o extends f{constructor(e,t){super(e,t),this.type=2,this.lineIndexStart=0,this.lineIndexCount=0;const r=new Uint32Array(e);let i=this.bufferDataOffset;this.lineIndexStart=r[i++],this.lineIndexCount=r[i++];const s=r[i++];if(s>0){const e=new Map;for(let t=0;t<s;t++){const t=r[i++],s=r[i++],n=r[i++];e.set(t,[s,n]);}this.patternMap=e;}this.bufferDataOffset=i;}hasData(){return this.lineIndexCount>0}triangleCount(){return this.lineIndexCount/3}doDestroy(){r(this.lineVertexArrayObject)&&this.lineVertexArrayObject.dispose(),r(this.lineVertexBuffer)&&this.lineVertexBuffer.dispose(),r(this.lineIndexBuffer)&&this.lineIndexBuffer.dispose(),this.lineVertexArrayObject=null,this.lineVertexBuffer=null,this.lineIndexBuffer=null,this.memoryUsed=0;}doPrepareForRendering(e,t,r){const n=new Uint32Array(t),f=new Int32Array(n.buffer),o=n[r++];this.lineVertexBuffer=h$1.createVertex(e,35044,new Int32Array(f.buffer,4*r,o)),r+=o;const a=n[r++];this.lineIndexBuffer=h$1.createIndex(e,35044,new Uint32Array(n.buffer,4*r,a)),r+=a;const l=this.layer.lineMaterial;this.lineVertexArrayObject=new f$1(e,l.getAttributeLocations(),l.getLayoutInfo(),{geometry:this.lineVertexBuffer},this.lineIndexBuffer);}}class a extends f{constructor(e,t){super(e,t),this.type=1,this.fillIndexStart=0,this.fillIndexCount=0,this.outlineIndexStart=0,this.outlineIndexCount=0;const r=new Uint32Array(e);let i=this.bufferDataOffset;this.fillIndexStart=r[i++],this.fillIndexCount=r[i++],this.outlineIndexStart=r[i++],this.outlineIndexCount=r[i++];const s=r[i++];if(s>0){const e=new Map;for(let t=0;t<s;t++){const t=r[i++],s=r[i++],n=r[i++];e.set(t,[s,n]);}this.patternMap=e;}this.bufferDataOffset=i;}hasData(){return this.fillIndexCount>0||this.outlineIndexCount>0}triangleCount(){return (this.fillIndexCount+this.outlineIndexCount)/3}doDestroy(){r(this.fillVertexArrayObject)&&this.fillVertexArrayObject.dispose(),r(this.fillVertexBuffer)&&this.fillVertexBuffer.dispose(),r(this.fillIndexBuffer)&&this.fillIndexBuffer.dispose(),this.fillVertexArrayObject=null,this.fillVertexBuffer=null,this.fillIndexBuffer=null,r(this.outlineVertexArrayObject)&&this.outlineVertexArrayObject.dispose(),r(this.outlineVertexBuffer)&&this.outlineVertexBuffer.dispose(),r(this.outlineIndexBuffer)&&this.outlineIndexBuffer.dispose(),this.outlineVertexArrayObject=null,this.outlineVertexBuffer=null,this.outlineIndexBuffer=null,this.memoryUsed=0;}doPrepareForRendering(e,t,r){const n=new Uint32Array(t),f=new Int32Array(n.buffer),o=n[r++];this.fillVertexBuffer=h$1.createVertex(e,35044,new Int32Array(f.buffer,4*r,o)),r+=o;const a=n[r++];this.fillIndexBuffer=h$1.createIndex(e,35044,new Uint32Array(n.buffer,4*r,a)),r+=a;const l=n[r++];this.outlineVertexBuffer=h$1.createVertex(e,35044,new Int32Array(f.buffer,4*r,l)),r+=l;const u=n[r++];this.outlineIndexBuffer=h$1.createIndex(e,35044,new Uint32Array(n.buffer,4*r,u)),r+=u;const c=this.layer,h=c.fillMaterial,x=c.outlineMaterial;this.fillVertexArrayObject=new f$1(e,h.getAttributeLocations(),h.getLayoutInfo(),{geometry:this.fillVertexBuffer},this.fillIndexBuffer),this.outlineVertexArrayObject=new f$1(e,x.getAttributeLocations(),x.getLayoutInfo(),{geometry:this.outlineVertexBuffer},this.outlineIndexBuffer);}}class l extends f{constructor(e,t,r){super(e,t),this.type=3,this.iconPerPageElementsMap=new Map,this.glyphPerPageElementsMap=new Map,this.symbolInstances=[],this.isIconSDF=!1,this.opacityChanged=!1,this.lastOpacityUpdate=0,this.symbols=[];const i=new Uint32Array(e),s=new Int32Array(e),f=new Float32Array(e);let o=this.bufferDataOffset;this.isIconSDF=!!i[o++];const a=i[o++];for(let n=0;n<a;n++){const e=i[o++],t=i[o++],r=i[o++];this.iconPerPageElementsMap.set(e,[t,r]);}const l=i[o++];for(let n=0;n<l;n++){const e=i[o++],t=i[o++],r=i[o++];this.glyphPerPageElementsMap.set(e,[t,r]);}const u=i[o++],c=i[o++];this.iconOpacity=new Int32Array(u),this.textOpacity=new Int32Array(c),o=n(i,s,f,o,this.symbols,r),this.bufferDataOffset=o;}hasData(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0}triangleCount(){let e=0;for(const[t,r]of this.iconPerPageElementsMap)e+=r[1];for(const[t,r]of this.glyphPerPageElementsMap)e+=r[1];return e/3}doDestroy(){r(this.iconVertexArrayObject)&&this.iconVertexArrayObject.dispose(),r(this.iconVertexBuffer)&&this.iconVertexBuffer.dispose(),r(this.iconOpacityBuffer)&&this.iconOpacityBuffer.dispose(),r(this.iconIndexBuffer)&&this.iconIndexBuffer.dispose(),this.iconVertexArrayObject=null,this.iconVertexBuffer=null,this.iconOpacityBuffer=null,this.iconIndexBuffer=null,r(this.textVertexArrayObject)&&this.textVertexArrayObject.dispose(),r(this.textVertexBuffer)&&this.textVertexBuffer.dispose(),r(this.textOpacityBuffer)&&this.textOpacityBuffer.dispose(),r(this.textIndexBuffer)&&this.textIndexBuffer.dispose(),this.textVertexArrayObject=null,this.textVertexBuffer=null,this.textOpacityBuffer=null,this.textIndexBuffer=null,this.memoryUsed=0;}updateOpacityInfo(){if(!this.opacityChanged)return;this.opacityChanged=!1;const e$1=e(this.iconOpacity),t=e(this.iconOpacityBuffer);e$1.length>0&&e$1.byteLength===t.size&&t.setSubData(e$1);const i=e(this.textOpacity),s=e(this.textOpacityBuffer);i.length>0&&i.byteLength===s.size&&s.setSubData(i);}doPrepareForRendering(e$1,t,n){const f=new Uint32Array(t),o=new Int32Array(f.buffer),a=f[n++];this.iconVertexBuffer=h$1.createVertex(e$1,35044,new Int32Array(o.buffer,4*n,a)),n+=a;const l=f[n++];this.iconIndexBuffer=h$1.createIndex(e$1,35044,new Uint32Array(f.buffer,4*n,l)),n+=l;const u=f[n++];this.textVertexBuffer=h$1.createVertex(e$1,35044,new Int32Array(o.buffer,4*n,u)),n+=u;const c=f[n++];this.textIndexBuffer=h$1.createIndex(e$1,35044,new Uint32Array(f.buffer,4*n,c)),n+=c,this.iconOpacityBuffer=h$1.createVertex(e$1,35044,e(this.iconOpacity).buffer),this.textOpacityBuffer=h$1.createVertex(e$1,35044,e(this.textOpacity).buffer);const h=this.layer,x=h.iconMaterial,y=h.textMaterial;this.iconVertexArrayObject=new f$1(e$1,x.getAttributeLocations(),x.getLayoutInfo(),{geometry:this.iconVertexBuffer,opacity:this.iconOpacityBuffer},this.iconIndexBuffer),this.textVertexArrayObject=new f$1(e$1,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:this.textVertexBuffer,opacity:this.textOpacityBuffer},this.textIndexBuffer);}}class u$1 extends f{constructor(e,t){super(e,t),this.type=4,this.circleIndexStart=0,this.circleIndexCount=0;const r=new Uint32Array(e);let i=this.bufferDataOffset;this.circleIndexStart=r[i++],this.circleIndexCount=r[i++],this.bufferDataOffset=i;}hasData(){return this.circleIndexCount>0}triangleCount(){return this.circleIndexCount/3}doDestroy(){r(this.circleVertexArrayObject)&&this.circleVertexArrayObject.dispose(),r(this.circleVertexBuffer)&&this.circleVertexBuffer.dispose(),r(this.circleIndexBuffer)&&this.circleIndexBuffer.dispose(),this.circleVertexArrayObject=null,this.circleVertexBuffer=null,this.circleIndexBuffer=null,this.memoryUsed=0;}doPrepareForRendering(e,t,r){const n=new Uint32Array(t),f=new Int32Array(n.buffer),o=n[r++];this.circleVertexBuffer=h$1.createVertex(e,35044,new Int32Array(f.buffer,4*r,o)),r+=o;const a=n[r++];this.circleIndexBuffer=h$1.createIndex(e,35044,new Uint32Array(n.buffer,4*r,a)),r+=a;const l=this.layer.circleMaterial;this.circleVertexArrayObject=new f$1(e,l.getAttributeLocations(),l.getLayoutInfo(),{geometry:this.circleVertexBuffer},this.circleIndexBuffer);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d extends r$1{constructor(e,t,s,a,r,i,o=null){super(e,t,s,a,r,4096,4096),this._memCache=o,this.type="vector-tile",this._referenced=0,this._hasSymbolBuckets=!1,this._memoryUsedByLayerData=0,this.layerData=new Map,this.layerCount=0,this.status="loading",this.allSymbolsFadingOut=!1,this.lastOpacityUpdate=0,this.symbols=new Map,this.isCoverage=!1,this.neededForCoverage=!1,this.decluttered=!1,this.invalidating=!1,this.parentTile=null,this.childrenTiles=new Set,this._processed=!1,this._referenced=1,this.styleRepository=i,this.id=e.id;}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<e$1}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<e$1)}get wasRequested(){return "errored"===this.status||"loaded"===this.status||"reloading"===this.status}setData(e){this.changeDataImpl(e),this.requestRender(),this.ready(),this.invalidating=!1,this._processed=!0;}deleteLayerData(t){let s=!1;for(const e of t)if(this.layerData.has(e)){const t=this.layerData.get(e);this._memoryUsedByLayerData-=t.memoryUsed,3===t.type&&this.symbols.has(e)&&(this.symbols.delete(e),s=!0),t.destroy(),this.layerData.delete(e),this.layerCount--;}r(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData),s&&this.emit("symbols-changed"),this.requestRender();}processed(){return this._processed}hasData(){return this.layerCount>0}dispose(){"unloaded"!==this.status&&(m.delete(this),d._destroyRenderBuckets(this.layerData),this.layerData=null,this.layerCount=0,this._memoryUsedByLayerData=0,this.destroy(),this.status="unloaded");}release(){return 0==--this._referenced&&(this.dispose(),this.stage=null,!0)}retain(){++this._referenced;}get referenced(){return this._referenced}get memoryUsage(){return (this._memoryUsedByLayerData+256)/(this._referenced||1)}changeDataImpl(t){let s=!1;if(t){const a=this._createRenderBuckets(t);for(const[e,t]of a){if(this.layerData.has(e)){const s=this.layerData.get(e);this._memoryUsedByLayerData-=t.memoryUsed,s.destroy(),this.layerData.delete(e),this.layerCount--;}3===t.type&&(this.symbols.set(e,t.symbols),s=!0),this._memoryUsedByLayerData+=t.memoryUsed,this.layerData.set(e,t),this.layerCount++;}r(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData);}this._hasSymbolBuckets=!1;for(const[e,a]of this.layerData)3===a.type&&(this._hasSymbolBuckets=!0);s&&this.emit("symbols-changed");}attachWithContext(e){this.stage={context:e,trashDisplayObject(e){e.processDetach();},untrashDisplayObject:()=>!1};}setTransform(e,i){super.setTransform(e,i);const o=i/(e.resolution*e.pixelRatio),h=this.width/this.rangeX*o,n=this.height/this.rangeY*o,l=[0,0];e.toScreen(l,[this.x,this.y]);const y=this.transforms.tileUnitsToPixels;r$2(y),M(y,y,l),h$2(y,y,Math.PI*e.rotation/180),f$2(y,y,[h,n,1]);}_createTransforms(){return {dvs:n$1(),tileMat3:n$1(),tileUnitsToPixels:n$1()}}static _destroyRenderBuckets(e){if(!e)return;const t=new Set;e.forEach((e=>{t.has(e)||(e.destroy(),t.add(e));})),e.clear();}_createRenderBuckets(e){const t=new Map,s=new Map;for(const a of e){const e=this._deserializeBucket(a,s);for(const s of e.layerUIDs)t.set(s,e);}return t}_deserializeBucket(e,t){let s=t.get(e);if(s)return s;switch(new Uint32Array(e)[0]){case 1:s=new a(e,this.styleRepository);break;case 2:s=new o(e,this.styleRepository);break;case 3:s=new l(e,this.styleRepository,this);break;case 4:s=new u$1(e,this.styleRepository);}return t.set(e,s),s}}const m=new Map;function u(){m.forEach(((e,t)=>{console.log(`\n${t.key}:`),e[0].forEach((e=>console.log(e))),console.log("========"),e[1].forEach((e=>console.log(e)));}));}

export { d, h, l$1 as l, o$1 as o, s, u };
