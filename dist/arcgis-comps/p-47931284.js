import{O as e,m as t,e as i,d as s,i as r,P as l,r as a,t as o}from"./p-9ae46e68.js";import{b as n,l as p}from"./p-8e6daf54.js";import{k as u,M as d}from"./p-566b0715.js";import{u as h}from"./p-81e5b36e.js";import{i as g}from"./p-c59d0a4d.js";import{n as c}from"./p-0c91ebaf.js";import{s as y}from"./p-72355290.js";import{j as m}from"./p-523f37cd.js";import{y as b}from"./p-cf8dc9be.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-f271906a.js";import"./p-79553c8d.js";import"./p-c5b7f7c3.js";const v={id:"0/0/0",level:0,row:0,col:0,extent:null};let f=class extends(g(y(c(n)))){constructor(){super(...arguments),this.tileInfo=m.create({spatialReference:u.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new d(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,u.WebMercator),this.spatialReference=u.WebMercator}getTileBounds(e,t,i,s){const r=s||h();return v.level=e,v.row=t,v.col=i,v.extent=r,this.tileInfo.updateTileInfo(v),v.extent=null,r}fetchTile(t,i,s,r={}){const{signal:l}=r,a=this.getTileUrl(t,i,s),o={responseType:"image",signal:l,query:{...this.refreshParameters}};return e(a,o).then((e=>e.data))}getTileUrl(){throw new t("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};i([s({type:m})],f.prototype,"tileInfo",void 0),i([s({type:["show","hide"]})],f.prototype,"listMode",void 0),i([s({readOnly:!0,value:"base-tile"})],f.prototype,"type",void 0),i([s({nonNullable:!0})],f.prototype,"fullExtent",void 0),i([s()],f.prototype,"spatialReference",void 0),f=i([r("esri.layers.BaseTileLayer")],f);const j=f,w=new l({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let M=class extends(g(b(p(j)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new m({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:u.WebMercator},spatialReference:u.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return a(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return w.toJSON(this.style)}get bingLogo(){return a(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then((()=>this._getMetadata())):Promise.reject(new t("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,i){if(!this.loaded||o(this.bingMetadata))return null;const s=this.bingMetadata.resourceSets[0].resources[0],r=s.imageUrlSubdomains[t%s.imageUrlSubdomains.length],l=this._getQuadKey(e,t,i);return s.imageUrl.replace("{subdomain}",r).replace("{quadkey}",l)}async fetchAttributionData(){return this.load().then((()=>o(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){return e(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const i=e.data;if(200!==i.statusCode)throw new t("bingmapslayer:getmetadata",i.statusDescription);if(this.bingMetadata=i,0===this.bingMetadata.resourceSets.length)throw new t("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new t("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new t("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return e(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new t("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new t("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,i){let s="";for(let r=e;r>0;r--){let e=0;const l=1<<r-1;0!=(i&l)&&(e+=1),0!=(t&l)&&(e+=2),s+=e.toString()}return s}};i([s({json:{read:!1,write:!1},value:null})],M.prototype,"bingMetadata",null),i([s({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],M.prototype,"type",void 0),i([s({type:m})],M.prototype,"tileInfo",void 0),i([s({type:String,readOnly:!0,json:{read:!1,write:!1}})],M.prototype,"copyright",null),i([s({type:String,json:{write:!1,read:!1}})],M.prototype,"key",void 0),i([s({type:w.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:w.read}}})],M.prototype,"style",void 0),i([s({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],M.prototype,"operationalLayerType",null),i([s({type:String,json:{write:!1,read:!1}})],M.prototype,"culture",void 0),i([s({type:String,json:{write:!1,read:!1}})],M.prototype,"region",void 0),i([s({type:String,json:{write:!0,read:!0}})],M.prototype,"portalUrl",void 0),i([s({type:Boolean,json:{write:!1,read:!1}})],M.prototype,"hasAttributionData",void 0),i([s({type:String,readOnly:!0})],M.prototype,"bingLogo",null),M=i([r("esri.layers.BingMapsLayer")],M);const T=M;export default T;