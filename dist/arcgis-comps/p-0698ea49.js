import{i0 as e,i1 as r,e6 as s,e7 as i,e5 as t,aG as a,bm as n,i2 as l,ie as o,iw as c,ec as u,cY as d,ad as h,aI as p,H as y,e9 as v,a7 as f,aJ as g,W as _,gL as m,jw as b,eH as S,e as w,d as T,aL as j,aO as W,a4 as O,eb as R,i as L}from"./p-7b6f6c18.js";import{s as B}from"./p-6c24009d.js";import{f as I,y as k,K as D}from"./p-75b929fb.js";import"./p-227a5838.js";import"./p-5d4e90fa.js";import"./p-c06f073c.js";import"./p-03d6250d.js";import"./p-2f9d204e.js";const G=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(e(I(r(s(i(B(k(t(a(n(l(o(c(u)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=_(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(d).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&h.fromJSON(e)}writeSublayers(e,r,s,i){if(!this.loaded||!e)return;const t=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),a=[],n={writeSublayerStructure:!1,...i};t.forEach((e=>{const r=e.write({},n);a.push(r)})),a.some((e=>Object.keys(e).length>1))&&(r.layers=a)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>p(e).path)):null}fetchTile(e,r,s,i={}){const{signal:t}=i,a=this.getTileUrl(e,r,s),n={responseType:"image",signal:t,query:{...this.refreshParameters}};return y(a,n).then((e=>e.data))}getTileUrl(e,r,s){const i=v({...this.parsedUrl.query,blankTile:!(!this.tilemapCache&&this.supportsBlankTile)&&null,...this.customParameters,token:this.apiKey}),t=this.tileServers;return`${t&&t.length?t[r%t.length]:this.parsedUrl.path}/tile/${e}/${r}/${s}${i?"?"+i:""}`}_fetchService(e){return new Promise(((r,s)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new f("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new f("tile-layer:undefined-url","layer's url is not defined");const i=g(this.parsedUrl.path);if(_(i)&&"ImageServer"===i.serverType)throw new f("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");y(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,s)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!m(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!b(e))return Promise.reject();const s=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return y(s,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new f("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let s=0,i=G.length;s<i;s++)if(r=G[s],r.toLowerCase().indexOf(e)>-1)return S("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),s=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||s?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};w([T({readOnly:!0})],M.prototype,"attributionDataUrl",null),w([T({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),w([T({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),w([T({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),w([T({type:Boolean})],M.prototype,"resampling",void 0),w([T()],M.prototype,"sourceJSON",void 0),w([T({type:h})],M.prototype,"spatialReference",void 0),w([j("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),w([T({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),w([T({readOnly:!0})],M.prototype,"sublayers",void 0),w([W("sublayers",{layers:{type:[D]}})],M.prototype,"writeSublayers",null),w([T({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),w([T()],M.prototype,"tileServers",null),w([O("tileServers")],M.prototype,"castTileServers",null),w([T({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),w([T(R)],M.prototype,"url",void 0),M=w([L("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const A=M;export default A;