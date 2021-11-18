import{e,d as l,i as t,H as s,af as r,m as i,a_ as o,O as n,ak as a,bH as u}from"./p-9ae46e68.js";import{M as p,k as c,E as m,o as d,d as w}from"./p-566b0715.js";import{l as v,b as f}from"./p-8e6daf54.js";import{i as h}from"./p-c59d0a4d.js";import{y}from"./p-cf8dc9be.js";import{w as j}from"./p-5c89c68e.js";import{n as g}from"./p-0c91ebaf.js";import{s as b}from"./p-72355290.js";import{j as T,p as S}from"./p-523f37cd.js";import{a as R}from"./p-fe01b82b.js";var x;let L=x=class extends R{constructor(e){super(e)}clone(){return new x({customLayerParameters:s(this.customLayerParameters),customParameters:s(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};e([l({json:{type:Object,write:!0}})],L.prototype,"customLayerParameters",void 0),e([l({json:{type:Object,write:!0}})],L.prototype,"customParameters",void 0),e([l({type:String,json:{write:!0}})],L.prototype,"layerIdentifier",void 0),e([l({type:String,json:{write:!0}})],L.prototype,"tileMatrixSet",void 0),e([l({type:String,json:{write:!0}})],L.prototype,"url",void 0),L=x=e([t("esri.layer.support.WMTSLayerInfo")],L);const P=L;let O=class extends(h(g(b(y(j(v(f))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new p(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,c.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=c.WebMercator,this.subDomains=null,this.tileInfo=new T({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new m({x:-20037508.342787,y:20037508.342787,spatialReference:c.WebMercator}),spatialReference:c.WebMercator,lods:[new S({level:0,scale:591657527.591555,resolution:156543.033928}),new S({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S({level:8,scale:2311162.217155,resolution:611.49622628138}),new S({level:9,scale:1155581.108577,resolution:305.748113140558}),new S({level:10,scale:577790.554289,resolution:152.874056570411}),new S({level:11,scale:288895.277144,resolution:76.4370282850732}),new S({level:12,scale:144447.638572,resolution:38.2185141425366}),new S({level:13,scale:72223.819286,resolution:19.1092570712683}),new S({level:14,scale:36111.909643,resolution:9.55462853563415}),new S({level:15,scale:18055.954822,resolution:4.77731426794937}),new S({level:16,scale:9027.977411,resolution:2.38865713397468}),new S({level:17,scale:4513.988705,resolution:1.19432856685505}),new S({level:18,scale:2256.994353,resolution:.597164283559817}),new S({level:19,scale:1128.497176,resolution:.298582141647617}),new S({level:20,scale:564.248588,resolution:.14929107082380833}),new S({level:21,scale:282.124294,resolution:.07464553541190416}),new S({level:22,scale:141.062147,resolution:.03732276770595208}),new S({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,l){return"string"==typeof e?{urlTemplate:e,...l}:e}load(e){const l=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const l=new r(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===l.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new i("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(l),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const l of this.tileInfo.lods)e[l.level]=l.levelValue||l.level;return e}readSpatialReference(e,l){return e||l.fullExtent&&l.fullExtent.spatialReference&&c.fromJSON(l.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:l,subDomains:t}=this,s=new r(l),i=s.scheme?s.scheme+"://":"//",o=i+s.authority+"/";if(-1===s.authority.indexOf("{subDomain}"))e.push(o);else if(t&&t.length>0&&s.authority.split(".").length>1)for(const l of t)e.push(i+s.authority.replace(/\{subDomain\}/gi,l)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,l=new r(e);return e.substring(((l.scheme?l.scheme+"://":"//")+l.authority+"/").length)}readUrlTemplate(e,l){return e||l.templateUrl}writeUrlTemplate(e,l){e&&u(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=o(e)),l.templateUrl=e}fetchTile(e,l,t,s={}){const{signal:r}=s,i=this.getTileUrl(e,l,t),o={responseType:"image",signal:r,query:{...this.refreshParameters}};return n(i,o).then((e=>e.data))}getTileUrl(e,l,t){const s=this.levelValues[e];return this.tileServers[l%this.tileServers.length]+a(this.urlPath,{level:s,z:s,col:t,x:t,row:l,y:l})}};e([l({type:String,value:"",json:{write:!0}})],O.prototype,"copyright",void 0),e([l({type:p,json:{write:!0},nonNullable:!0})],O.prototype,"fullExtent",void 0),e([l({readOnly:!0,json:{read:!1,write:!1}})],O.prototype,"legendEnabled",void 0),e([l({type:["show","hide"]})],O.prototype,"listMode",void 0),e([l()],O.prototype,"levelValues",null),e([l({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],O.prototype,"isReference",void 0),e([l({type:["WebTiledLayer"],value:"WebTiledLayer"})],O.prototype,"operationalLayerType",void 0),e([l({readOnly:!0,json:{read:!1,write:!1}})],O.prototype,"popupEnabled",void 0),e([l({type:c})],O.prototype,"spatialReference",void 0),e([d("spatialReference",["spatialReference","fullExtent.spatialReference"])],O.prototype,"readSpatialReference",null),e([l({type:[String],json:{write:!0}})],O.prototype,"subDomains",void 0),e([l({type:T,json:{write:!0}})],O.prototype,"tileInfo",void 0),e([l({readOnly:!0})],O.prototype,"tileServers",null),e([l({json:{read:!1}})],O.prototype,"type",void 0),e([l()],O.prototype,"urlPath",null),e([l({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],O.prototype,"urlTemplate",void 0),e([d("urlTemplate",["urlTemplate","templateUrl"])],O.prototype,"readUrlTemplate",null),e([w("urlTemplate",{templateUrl:{type:String}})],O.prototype,"writeUrlTemplate",null),e([l({type:P,json:{write:!0}})],O.prototype,"wmtsInfo",void 0),O=e([t("esri.layers.WebTileLayer")],O);const U=O,W=Object.freeze({__proto__:null,default:U});export{W,P as a,U as x}