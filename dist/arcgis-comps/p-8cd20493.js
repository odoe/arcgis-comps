import{aa as e,m as t,O as s,N as i,e as r,d as o,R as a,i as p,r as m,bi as n}from"./p-9ae46e68.js";import{y as l}from"./p-79553c8d.js";import{a as d}from"./p-6ebb24ba.js";import{n as c}from"./p-15515b8a.js";import{l as h,b as f}from"./p-8e6daf54.js";import{M as j,o as u,d as b}from"./p-566b0715.js";import{r as y}from"./p-3a79c3a6.js";import{i as g}from"./p-93d9099f.js";import{f as v,y as w,K as x}from"./p-c93dc681.js";import{p as S}from"./p-d3898fd7.js";import{i as I}from"./p-c59d0a4d.js";import{o as E}from"./p-ae0b06e3.js";import{y as M}from"./p-cf8dc9be.js";import{w as O}from"./p-5c89c68e.js";import{n as T}from"./p-0c91ebaf.js";import{s as q}from"./p-72355290.js";import{a as F}from"./p-d68829c1.js";import{f as L}from"./p-f271906a.js";import{c as P}from"./p-85ab5595.js";import{e as R}from"./p-2f9d204e.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-4fd6e394.js";import"./p-57ae469d.js";import"./p-b1a3d539.js";import"./p-b2a0fae5.js";import"./p-94f8dc11.js";import"./p-bb07d873.js";import"./p-8ac97b63.js";import"./p-a0a931f0.js";import"./p-dfc6337f.js";import"./p-77e6a663.js";import"./p-c5b7f7c3.js";import"./p-30ddb3a0.js";import"./p-74fc1b7f.js";import"./p-b3024dec.js";import"./p-4fcbc3c5.js";import"./p-4b3ae2cf.js";import"./p-3a2e88bf.js";import"./p-6443bfb4.js";import"./p-2f7c985e.js";import"./p-8e03c038.js";import"./p-32462343.js";import"./p-5a0fe1d0.js";import"./p-cf2267f9.js";import"./p-d2e19070.js";import"./p-e5429b9e.js";import"./p-7818def0.js";import"./p-f42060e0.js";import"./p-15bb2887.js";import"./p-03d6250d.js";import"./p-844dad6c.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-725fd184.js";import"./p-81102839.js";let k=class extends(I(F(q(v(w(S(M(O(h(T(g(E(d(f)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(t){const s=m(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},t).catch(e).then((()=>this._fetchService(s)))),Promise.resolve(this)}readImageFormat(e,t){const s=t.supportedImageFormatTypes;return s&&s.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,s,i){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=n(i.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;o=R(r,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");o=R(r,e.sublayers,n(e.origin))}}const a=[],p={writeSublayerStructure:o,...i};let m=o;r.forEach((e=>{const t=e.write({},p);a.push(t),m=m||"user"===e.originOf("visible")})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a),m&&(t.visibleLayers=r.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,s,i){const r=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const o=new P({layer:this,floors:null==i?void 0:i.floors,scale:y({extent:e,width:t})*r}),a=o.toJSON();o.destroy();const p=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},m=e&&e.spatialReference,n=m.wkid||JSON.stringify(m.toJSON());a.dpi*=r;const l={};if(null!=i&&i.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();l.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:n,imageSR:n,size:t+","+s,...a,...p,...l}}async fetchImage(e,r,o,a){var p;const m={responseType:"image",signal:null!=(p=null==a?void 0:a.signal)?p:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,r,o,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";return null==m.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?s(n,m).then((e=>e.data)).catch((e=>{if(i(e))throw e;throw new t("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})})):Promise.reject(new t("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:m.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await s(this.url,t),{extent:r,fullExtent:o,timeExtent:a}=i,p=r||o;return{fullExtent:p&&j.fromJSON(p),timeExtent:a&&l.fromJSON({start:a[0],end:a[1]})}}loadAll(){return c(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:i}=await s(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});i&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};r([o({type:Boolean})],k.prototype,"datesInUnknownTimezone",void 0),r([o()],k.prototype,"dpi",void 0),r([o()],k.prototype,"gdbVersion",void 0),r([o()],k.prototype,"imageFormat",void 0),r([u("imageFormat",["supportedImageFormatTypes"])],k.prototype,"readImageFormat",null),r([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],k.prototype,"imageMaxHeight",void 0),r([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],k.prototype,"imageMaxWidth",void 0),r([o()],k.prototype,"imageTransparency",void 0),r([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],k.prototype,"isReference",void 0),r([o({json:{read:!1,write:!1}})],k.prototype,"labelsVisible",void 0),r([o({type:["ArcGISMapServiceLayer"]})],k.prototype,"operationalLayerType",void 0),r([o({json:{read:!1,write:!1}})],k.prototype,"popupEnabled",void 0),r([o()],k.prototype,"sourceJSON",void 0),r([o({json:{write:{ignoreOrigin:!0}}})],k.prototype,"sublayers",void 0),r([b("sublayers",{layers:{type:[x]},visibleLayers:{type:[a]}})],k.prototype,"writeSublayers",null),r([o({type:["show","hide","hide-children"]})],k.prototype,"listMode",void 0),r([o({json:{read:!1},readOnly:!0,value:"map-image"})],k.prototype,"type",void 0),r([o(L)],k.prototype,"url",void 0),k=r([p("esri.layers.MapImageLayer")],k);const A=k;export default A;