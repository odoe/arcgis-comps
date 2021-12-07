import{c as t,s as e,A as s,af as r}from"./p-e58503d5.js";import{C as i}from"./p-6484267b.js";import{G as n}from"./p-1676d4c7.js";import{n as o}from"./p-56ca6f1f.js";import{a as h}from"./p-1c2ff3a7.js";import{x as a}from"./p-97ec6ae5.js";import{r as c}from"./p-e6fe5d89.js";import{n as f}from"./p-746a9d8f.js";import{H as p,D as m}from"./p-5032dfbd.js";import{t as u}from"./p-182bb5be.js";import{m as y}from"./p-b392deaf.js";import{h as d,f as l}from"./p-19bc1e3d.js";import{I as w}from"./p-e3500fdc.js";const g=t.getLogger("esri.views.2d.engine.webgl.Mesh2D"),x=(t,e,s,r)=>{let i=0;for(let r=1;r<s;r++)i+=(t[2*(e+r)]-t[2*(e+r-1)])*(t[2*(e+r)+1]+t[2*(e+r-1)+1]);return r?i>0:i<0},b=({coords:t,lengths:e},s)=>{const r=[];for(let i=0,n=0;i<e.length;n+=e[i],i+=1){const o=n,h=[];for(;i<e.length-1&&x(t,n+e[i],e[i+1],s);i+=1,n+=e[i])h.push(n+e[i]-o);const c=t.slice(2*o,2*(n+e[i])),f=a(c,h,2);for(const t of f)r.push(t+o)}return r};class j{constructor(t,e,s,r=!1){this._cache={},this.vertices=t,this.indices=e,this.primitiveType=s,this.isMapSpace=r}static fromRect({x:t,y:e,width:s,height:r}){return j.fromScreenExtent({xmin:t,ymin:e,xmax:t+s,ymax:e+r})}static fromPath(t){const e=p(new u,t.path,!1,!1),s=e.coords,r=new Uint32Array(b(e,!0)),i=new Uint32Array(s.length/2);for(let t=0;t<i.length;t++)i[t]=y(Math.floor(s[2*t]),Math.floor(s[2*t+1]));return new j({geometry:i},r,4)}static fromGeometry(t,s){const r=s.geometry.type;switch(r){case"polygon":return j.fromPolygon(t,s.geometry);case"extent":return j.fromMapExtent(t,s.geometry);default:return g.error(new e("mapview-bad-type",`Unable to create a mesh from type ${r}`,s)),j.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(t,e){const s=m(new u,e,!1,!1),r=s.coords,i=new Uint32Array(b(s,!1)),n=new Uint32Array(r.length/2),o=f(),h=f();for(let e=0;e<n.length;e++)c(o,r[2*e],r[2*e+1]),t.toScreen(h,o),n[e]=y(Math.floor(h[0]),Math.floor(h[1]));return new j({geometry:n},i,4,!0)}static fromScreenExtent({xmin:t,xmax:e,ymin:s,ymax:r}){const i={geometry:new Uint32Array([y(t,s),y(e,s),y(t,r),y(t,r),y(e,s),y(e,r)])},n=new Uint32Array([0,1,2,3,4,5]);return new j(i,n,4)}static fromMapExtent(t,e){const[s,r]=t.toScreen([0,0],[e.xmin,e.ymin]),[i,n]=t.toScreen([0,0],[e.xmax,e.ymax]),o={geometry:new Uint32Array([y(s,r),y(i,r),y(s,n),y(s,n),y(i,r),y(i,n)])},h=new Uint32Array([0,1,2,3,4,5]);return new j(o,h,4)}destroy(){s(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const t in this._cache.vertexBuffers)s(this._cache.vertexBuffers[t])&&this._cache.vertexBuffers[t].dispose()}get elementType(){return(()=>{switch(this.indices.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new e("Cannot get DataType of array")}})()}getIndexBuffer(t,e=35044){return this._cache.indexBuffer||(this._cache.indexBuffer=d.createIndex(t,e,this.indices)),this._cache.indexBuffer}getVertexBuffers(t,e=35044){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(((s,r)=>({...s,[r]:d.createVertex(t,e,this.vertices[r])})),{})),this._cache.vertexBuffers}}const A=t.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),U=t=>parseFloat(t)/100;class M extends h{constructor(t,e){super(),this._clip=e,this._cache={},this.stage=t,this._handle=e.watch("version",(()=>this._invalidate())),this.ready()}static fromClipArea(t,e){return new M(t,e)}_destroyGL(){s(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),s(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(t,e,s,i){const[n,o]=e.size;if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===o||(this._lastWidth=n,this._lastHeight=o,this._destroyGL()),r(this._cache.vao)){const r=this._createMesh(e,this._clip),n=r.getIndexBuffer(t),o=r.getVertexBuffers(t);this._cache.mesh=r,this._cache.vao=new l(t,s,i,o,n)}return this._cache.vao}_createTransforms(){return{dvs:i()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(t,e){const[s,r]=t.size,i="string"==typeof e.left?U(e.left)*s:e.left,n="string"==typeof e.right?U(e.right)*s:e.right,o="string"==typeof e.top?U(e.top)*r:e.top,h="string"==typeof e.bottom?U(e.bottom)*r:e.bottom,a=o;return{x:i,y:a,width:Math.max(s-n-i,0),height:Math.max(r-h-a,0)}}_createMesh(t,s){switch(s.type){case"rect":return j.fromRect(this._createScreenRect(t,s));case"path":return j.fromPath(s);case"geometry":return j.fromGeometry(t,s);default:return A.error(new e("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),j.fromRect({x:0,y:0,width:1,height:1})}}}class v extends o{constructor(){super(...arguments),this.name=this.constructor.name}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t)),this._updateClippingInfo()}_createTransforms(){return{dvs:i()}}doRender(t){const e=this.createRenderParams(t),{painter:s,globalOpacity:r,profiler:i,drawPhase:n}=e,o=n===w.LABEL?1:r*this.computedOpacity;i.recordContainerStart(this.name),s.beforeRenderLayer(e,this._clippingInfos?255:0,o),this.updateTransforms(t.state),this.renderChildren(e),s.compositeLayer(e,o),i.recordContainerEnd()}renderChildren(t){r(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(t.painter));for(const e of this.children)e.beforeRender(t);for(const e of this._renderPasses)try{e.render(t)}catch(t){}for(const e of this.children)e.afterRender(t)}createRenderParams(t){return t.requireFBO=this.requiresDedicatedFBO,t}prepareRenderPasses(t){return[t.registerRenderPass({name:"clip",brushes:[n.clip],target:()=>this._clippingInfos,drawPhase:w.MAP|w.LABEL|w.LABEL_ALPHA|w.DEBUG|w.HIGHLIGHT})]}updateTransforms(t){for(const e of this.children)e.setTransform(t)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(s(this._clippingInfos)&&(this._clippingInfos.forEach((t=>t.destroy())),this._clippingInfos=null),!this.stage)return;const t=this._clips;s(t)&&t.length&&(this._clippingInfos=t.items.map((t=>M.fromClipArea(this.stage,t)))),this.requestRender()}}export{v as a}