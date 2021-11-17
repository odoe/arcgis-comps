import{v as t,U as e,c7 as r,O as s,m as i,ae as o,N as n,H as l,aY as a,bS as u,ab as c,bo as p,cD as h,bH as f,a_ as y,bD as A,cE as d,a5 as m,bB as g,aa as b,b6 as v,aA as w,e as S,d as j,i as x}from"./p-9ae46e68.js";import{l as U,b as T}from"./p-8e6daf54.js";import{M as O,k as _,d as R,o as B}from"./p-566b0715.js";import{i as I}from"./p-93d9099f.js";import{s as P}from"./p-821d62e2.js";import{p as M}from"./p-d3898fd7.js";import{i as Q}from"./p-c59d0a4d.js";import{o as D}from"./p-ae0b06e3.js";import{y as E}from"./p-cf8dc9be.js";import{w as L}from"./p-5c89c68e.js";import{s as V}from"./p-72355290.js";import{p as $,j as C}from"./p-523f37cd.js";import{n as N,T as W}from"./p-abcf0bfd.js";import{e as G}from"./p-2b250922.js";import{o as k}from"./p-347860a7.js";import{a as J}from"./p-b4a5d2e9.js";import{o as z}from"./p-f614dce4.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-844dad6c.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-f271906a.js";import"./p-79553c8d.js";import"./p-c5b7f7c3.js";import"./p-57ae469d.js";import"./p-725fd184.js";import"./p-81e5b36e.js";import"./p-6ebb24ba.js";import"./p-4fd6e394.js";import"./p-4b3ae2cf.js";import"./p-3a2e88bf.js";import"./p-e4802f24.js";import"./p-9658240e.js";import"./p-9790d1b4.js";import"./p-47e1bd73.js";const F=t.getLogger("esri.layers.support.SpriteSource");class K{constructor(t,e,r,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=r,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(t){this._isRetina=this.devicePixelRatio>1.15;const o=e(this.baseURL),n=o.query?"?"+r(o.query):"",l=this._isRetina?"@2x":"",a=`${o.path}${l}.${this._spriteImageFormat}${n}`;return Promise.all([s(`${o.path}${l}.json${n}`,t),s(a,{responseType:"image",...t})]).then((([t,e])=>{const r=Object.keys(t.data);if(!r||0===r.length||1===r.length&&"_ssl"===r[0]||!e||!e.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=t.data;const s=e.data,n=Math.max(this.maxTextureSize,4096);if(s.width>n||s.height>n){const t=`Sprite resource for style ${o.path} is bigger than the maximum allowed of ${n} pixels}`;throw F.error(t),new i("SpriteSource",t)}this.width=s.width,this.height=s.height;const l=document.createElement("canvas"),a=l.getContext("2d");l.width=s.width,l.height=s.height,a.drawImage(s,0,0,s.width,s.height);const u=a.getImageData(0,0,s.width,s.height),c=new Uint8Array(u.data);let p;for(let t=0;t<c.length;t+=4)p=c[t+3]/255,c[t]=c[t]*p,c[t+1]=c[t+1]*p,c[t+2]=c[t+2]*p;this.image=c}))}}class Y{constructor(t){this.url=t}async dataKey(t,e){this._tilemap||(this._tilemap=s(this.url,{query:{...null==e?void 0:e.query}}).then((t=>t.data.index)));const r=await this._tilemap;return o(e),this._getIndexedDataKey(r,t)}_getIndexedDataKey(t,e){const r=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return null;let s=e;for(;0!==s.level;)s=new G(s.level-1,s.row>>1,s.col>>1,s.world),r.push(s);let i,o,n=t,l=r.pop();if(1===n)return l;for(;r.length;)if(i=r.pop(),o=(1&i.col)+((1&i.row)<<1),n){if(0===n[o]){l=null;break}if(1===n[o]){l=i;break}l=i,n=n[o]}return l}}class q{constructor(t){this._tilemap=t}dataKey(t,e){const{level:r,row:s,col:i}=t,o=new G(t);return this._tilemap.fetchAvailabilityUpsample(r,s,i,o,e).then((()=>(o.world=t.world,o))).catch((t=>{if(n(t))throw t;return null}))}}class X{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=e(this.sourceUrl),o=i.path,n=l(s),p=n.tiles;r&&p.forEach(((t,e)=>{a(t)||(p[e]=u(c(o,t),i.query))})),this.tileServers=p;const h=s.capabilities&&s.capabilities.split(",").map((t=>t.toLowerCase().trim())),f=!0===(null==s?void 0:s.exportTilesAllowed),y=!0===(null==h?void 0:h.includes("tilemap")),A=f&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;if(this.capabilities={operations:{supportsExportTiles:f,supportsTileMap:y},exportTiles:f?{maxExportTilesCount:+A}:null},this.tileInfo=N(n.tileInfo,n,null,{ignoreMinMaxLOD:!0}),y)this.type="vector-tile",this.tilemap=new q(new W({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}));else if(s.tileMap){const t=c(r,s.tileMap);this.tilemap=new Y(t)}this.fullExtent=O.fromJSON(s.fullExtent)}async getRefKey(t,e){return this.tilemap.dataKey(t,e)}getSourceTileUrl(t,e,r){let s=this.tileServers[e%this.tileServers.length];return s=s.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,e.toString()).replace(/\{x\}/gi,r.toString()),s}isCompatibleWith(t){const e=this.tileInfo,r=t.tileInfo;if(!e.spatialReference.equals(r.spatialReference))return!1;if(!e.origin.equals(r.origin))return!1;if(Math.round(e.dpi)!==Math.round(r.dpi))return!1;const s=e.lods,i=r.lods,o=Math.min(s.length,i.length);for(let t=0;t<o;t++){const e=s[t],r=i[t];if(e.level!==r.level||Math.round(e.scale)!==Math.round(r.scale))return!1}return!0}}const H=m.defaults&&m.defaults.io.corsEnabledServers;function Z(t){if(!t)return;const e=h(t);H&&-1===H.indexOf(e)&&H.push(e)}function tt(...t){let e;for(let r=0;r<t.length;++r)if(f(t[r])){if(e){const s=e.split("://")[0];e=s+":"+t[r].trim()}}else e=a(t[r])?t[r]:c(e,t[r]);return p(e)}async function et(t,r,i,n,l){let a,u,c;if(o(l),"string"==typeof i){const t=y(i);Z(t);const r=e(t);c=await s(r.path,{query:{f:"json"},responseType:"json",...l}),a=t,u=t}else c={data:i},a=i.jsonUrl||null,u=n;const p=c.data;return c.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),u&&(u=u.replace(/^http:/i,"https:"))),rt(p)?(t.styleUrl=a||null,async function(t,e,r,s){const i=r?A(r):d;t.styleBase=i,t.style=e,t.styleUrl&&Z(t.styleUrl),e["sprite-format"]&&"webp"===e["sprite-format"].toLowerCase()&&(t.spriteFormat="webp");const o=[];if(e.sources&&e.sources.esri){const r=e.sources.esri;r.url?await et(t,"esri",tt(i,r.url),void 0,s):o.push(et(t,"esri",r,i,s))}for(const r of Object.keys(e.sources))"esri"!==r&&"vector"===e.sources[r].type&&(e.sources[r].url?o.push(et(t,r,tt(i,e.sources[r].url),void 0,s)):e.sources[r].tiles&&o.push(et(t,r,e.sources[r],i,s)));await Promise.all(o)}(t,p,u,l)):function(t){return!rt(t)}(p)?t.sourceUrl?st(t,p,u,!1,r,l):(t.sourceUrl=a||null,st(t,p,u,!0,r,l)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function rt(t){return!!t.sources}async function st(t,e,r,s,i,o){const n=r?p(r)+"/":d,l=function(t,e){if(t.hasOwnProperty("tileInfo"))return t;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let s=78271.51696400007,i=295828763.7957775;const o=[],n=t.hasOwnProperty("minzoom")?+t.minzoom:0,l=t.hasOwnProperty("maxzoom")?+t.maxzoom:22;for(let t=0;t<=l;t++)t>=n&&o.push({level:t,scale:i,resolution:s}),s/=2,i/=2;for(const r of t.tiles)Z(tt(e,r));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:t.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:o,spatialReference:{wkid:102100}}}}(e,n),a=new X(i,n,l);if(!s&&t.primarySourceName in t.sourceNameToSource){const e=t.sourceNameToSource[t.primarySourceName];if(!e.isCompatibleWith(a))return Promise.resolve();null!=a.fullExtent&&(null!=e.fullExtent?e.fullExtent.union(a.fullExtent):e.fullExtent=a.fullExtent.clone()),e.tileInfo.lods.length<a.tileInfo.lods.length&&(e.tileInfo=a.tileInfo)}if(s?(t.sourceBase=n,t.source=e,t.validatedSource=l,t.primarySourceName=i,t.sourceUrl&&Z(t.sourceUrl)):Z(n),t.sourceNameToSource[i]=a,!t.style)return null==e.defaultStyles?Promise.reject():"string"==typeof e.defaultStyles?et(t,"",tt(n,e.defaultStyles,"root.json"),void 0,o):et(t,"",e.defaultStyles,tt(n,"root.json"),o)}class it{constructor(t,e){this.lockedSchemaPixelSize=t,this.isGCS=e}getLevelRowColumn(t){return this.isGCS?[t[0],t[1]>>1,t[2]>>1]:256===this.lockedSchemaPixelSize&&t[0]>0?[t[0]-1,t[1]>>1,t[2]>>1]:t}adjustLevel(t){return this.isGCS?t:256===this.lockedSchemaPixelSize?t>0?t-1:0:t}getShift(t,e){let r=0,s=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(t[2]%2&&(r=e),t[1]%2&&(s=e)),[r,s]}getScale(t){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===t)return 1;return 2}static create256x256CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]&&256===t.size[1])return t;const e=t.spatialReference.isGeographic,r=[],s=t.lods.length;for(let i=0;i<s;i++){const s=t.lods[i];r.push(new $({level:s.level,scale:s.scale,resolution:e?s.resolution:2*s.resolution}))}return new C({size:[256,256],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:r})}static create512x512CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]||256===t.size[1])return null;const e=[],r=t.lods.length;for(let s=0;s<r;s++){const r=t.lods[s];e.push(new $({level:r.level,scale:r.scale,resolution:.5*r.resolution}))}return new C({size:[512,512],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:e})}}const ot=1e-6;function nt(t,e){if(t===e)return!0;if(!t&&null!=e)return!1;if(null!=t&&!e)return!1;if(!t.spatialReference.equals(e.spatialReference)||t.dpi!==e.dpi)return!1;const r=t.origin,s=e.origin;if(Math.abs(r.x-s.x)>=ot||Math.abs(r.y-s.y)>=ot)return!1;let i,o;t.lods[0].scale>e.lods[0].scale?(i=t,o=e):(o=t,i=e);for(let t=i.lods[0].scale;t>=o.lods[o.lods.length-1].scale-ot;t/=2)if(Math.abs(t-o.lods[0].scale)<ot)return!0;return!1}function lt(t,e){if(t===e)return t;if(!t&&null!=e)return e;if(null!=t&&!e)return t;const r=t.size[0],s=t.format,i=t.dpi,o={x:t.origin.x,y:t.origin.y},n=t.spatialReference.toJSON(),l=t.lods[0].scale>e.lods[0].scale?t.lods[0]:e.lods[0],a=(t.lods[t.lods.length-1].scale<=e.lods[e.lods.length-1].scale?t.lods[t.lods.length-1]:e.lods[e.lods.length-1]).scale,u=[];let c=l.scale,p=l.resolution,h=0;for(;c>a;)u.push({level:h,resolution:p,scale:c}),h++,c/=2,p/=2;return new C({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:u,spatialReference:n})}let at=class extends(Q(V(P(M(E(L(D(I(U(T)))))))))){constructor(...t){super(...t),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}destroy(){this._spriteSourceMap.clear()}async prefetchResources(t){await this.loadSpriteSource(g.devicePixelRatio||1,t)}load(t){const e=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},t).catch(b).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const e=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await s(e,{...t,query:{f:"json"}})).data&&this.read({url:e},k(this.portalItem))})).catch(b).then((()=>this._loadStyle(t)));return this.addResolvingPromise(e),Promise.resolve(this)}get attributionDataUrl(){const t=this.currentStyleInfo,r=t&&t.serviceUrl&&e(t.serviceUrl);return r?this._getDefaultAttribution(r.path):null}get capabilities(){const t=this._getPrimarySource();return t?t.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const t=this._getPrimarySource();return t?t.fullExtent:null}get parsedUrl(){return this.serviceUrl?e(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(t,e){t&&f(t)&&(t=`https:${t}`),e.styleUrl=t}get tileInfo(){var t;const e=[];for(const t in this.sourceNameToSource)e.push(this.sourceNameToSource[t]);let r=(null==(t=this._getPrimarySource())?void 0:t.tileInfo)||new C;if(e.length>1)for(let t=0;t<e.length;t++)nt(r,e[t].tileInfo)&&(r=lt(r,e[t].tileInfo));return r}readVersion(t,e){return e.version?parseFloat(e.version):parseFloat(e.currentVersion)}get compatibleTileInfo256(){return it.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return it.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(t=1,e){if(!this._spriteSourceMap.has(t)){const r=z(),s=new K(this.styleRepository.sprite,t,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await s.load(e),this._spriteSourceMap.set(t,s)}return Promise.resolve(this._spriteSourceMap.get(t))}async loadStyle(t,e){const r=t||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!v(this._abortController))return this._loadingPromise;const s=this._abortController;s&&s.abort();const i=new AbortController;return this._loadingPromise=new Promise(((t,s)=>{const o={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,o).then(t,s),w(e,(()=>{i.abort()}))})),this._abortController=i,this._loadingPromise}getStyleLayerId(t){return this.styleRepository.getStyleLayerId(t)}getStyleLayerIndex(t){return this.styleRepository.getStyleLayerIndex(t)}getPaintProperties(t){return l(this.styleRepository.getPaintProperties(t))}setPaintProperties(t,e){const r=this.styleRepository.isPainterDataDriven(t);this.styleRepository.setPaintProperties(t,e);const s=this.styleRepository.isPainterDataDriven(t);this.emit("paint-change",{layer:t,paint:e,isDataDriven:r||s})}getStyleLayer(t){return l(this.styleRepository.getStyleLayer(t))}setStyleLayer(t,e){this.styleRepository.setStyleLayer(t,e),this.emit("style-layer-change",{layer:t,index:e})}deleteStyleLayer(t){this.styleRepository.deleteStyleLayer(t),this.emit("delete-style-layer",{layer:t})}getLayoutProperties(t){return l(this.styleRepository.getLayoutProperties(t))}setLayoutProperties(t,e){this.styleRepository.setLayoutProperties(t,e),this.emit("layout-change",{layer:t,layout:e})}setStyleLayerVisibility(t,e){this.styleRepository.setStyleLayerVisibility(t,e),this.emit("style-layer-visibility-change",{layer:t,visibility:e})}getStyleLayerVisibility(t){return this.styleRepository.getStyleLayerVisibility(t)}write(t,e){return e&&e.origin&&!this.styleUrl?(e.messages&&e.messages.push(new i("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(t,e)}getTileUrl(t,e,r){return null}async _getSourceAndStyle(t,r){if(!t)throw new Error("invalid style!");const s=await async function(t,r){const s={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,o]="string"==typeof t?[t,null]:[null,t.jsonUrl],n=i?e(i):null;await et(s,"esri",t,o,r);const l={layerDefinition:s.validatedSource,url:i,parsedUrl:n,serviceUrl:s.sourceUrl,style:s.style,styleUrl:s.styleUrl,spriteUrl:s.style.sprite&&tt(s.styleBase,s.style.sprite),spriteFormat:s.spriteFormat,glyphsUrl:s.style.glyphs&&tt(s.styleBase,s.style.glyphs),sourceNameToSource:s.sourceNameToSource,primarySourceName:s.primarySourceName};return Z(l.spriteUrl),Z(l.glyphsUrl),l}(t,r);"webp"===s.spriteFormat&&(await function(){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((e=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,e(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,e(!1)},r.src="data:image/webp;base64,"+t.lossy}))}()||(s.spriteFormat="png")),this._set("currentStyleInfo",{...s}),"string"==typeof t?(this.url=t,this.style=null):(this.url=null,this.style=t),this._set("sourceNameToSource",s.sourceNameToSource),this._set("primarySourceName",s.primarySourceName),this._set("styleRepository",new J(s.style,s)),this.read(s.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(t){const e=t.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!e)return;const s=e[2]&&e[2].toLowerCase();if(!s)return;const i=e[1]||"";for(const t of r)if(t.toLowerCase().indexOf(s)>-1)return y(`//static.arcgis.com/attribution/Vector${i}/${t}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(t){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,t)}};S([j({readOnly:!0})],at.prototype,"attributionDataUrl",null),S([j({type:["show","hide"]})],at.prototype,"listMode",void 0),S([j({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],at.prototype,"capabilities",null),S([j({readOnly:!0})],at.prototype,"currentStyleInfo",void 0),S([j({json:{read:!1},readOnly:!0,type:O})],at.prototype,"fullExtent",null),S([j()],at.prototype,"style",void 0),S([j({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],at.prototype,"isReference",void 0),S([j({type:["VectorTileLayer"]})],at.prototype,"operationalLayerType",void 0),S([j({readOnly:!0})],at.prototype,"parsedUrl",null),S([j({readOnly:!0})],at.prototype,"serviceUrl",null),S([j({type:_,readOnly:!0})],at.prototype,"spatialReference",null),S([j({readOnly:!0})],at.prototype,"styleRepository",void 0),S([j({readOnly:!0})],at.prototype,"sourceNameToSource",void 0),S([j({readOnly:!0})],at.prototype,"primarySourceName",void 0),S([j({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],at.prototype,"styleUrl",null),S([R(["portal-item","web-document"],"styleUrl")],at.prototype,"writeStyleUrl",null),S([j({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:C})],at.prototype,"tileInfo",null),S([j({json:{read:!1},readOnly:!0,value:"vector-tile"})],at.prototype,"type",void 0),S([j({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],at.prototype,"url",void 0),S([j({readOnly:!0})],at.prototype,"version",void 0),S([B("version",["version","currentVersion"])],at.prototype,"readVersion",null),S([j({readOnly:!0})],at.prototype,"compatibleTileInfo256",null),S([j({readOnly:!0})],at.prototype,"compatibleTileInfo512",null),S([j({type:Boolean})],at.prototype,"symbolCollisionBoxesVisible",void 0),at=S([x("esri.layers.VectorTileLayer")],at);const ut=at;export default ut;