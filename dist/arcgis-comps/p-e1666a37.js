import{iw as e,iy as t,iz as s,cX as i,c as l,k as a,o as r,E as n,b as o,e as u,d,i as h,u as g,a$ as p,cQ as y,bE as c,r as b,t as v}from"./p-5420851c.js";import"./p-53bb6ab4.js";const m={id:"0/0/0",level:0,row:0,col:0,extent:null};let w=class extends(e(t(s(i)))){constructor(){super(...arguments),this.tileInfo=l.create({spatialReference:a.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new r(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.WebMercator),this.spatialReference=a.WebMercator}getTileBounds(e,t,s,i){const l=i||g();return m.level=e,m.row=t,m.col=s,m.extent=l,this.tileInfo.updateTileInfo(m),m.extent=null,l}fetchTile(e,t,s,i={}){const{signal:l}=i,a=this.getTileUrl(e,t,s),r={responseType:"image",signal:l,query:{...this.refreshParameters}};return n(a,r).then((e=>e.data))}getTileUrl(){throw new o("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};u([d({type:l})],w.prototype,"tileInfo",void 0),u([d({type:["show","hide"]})],w.prototype,"listMode",void 0),u([d({readOnly:!0,value:"base-tile"})],w.prototype,"type",void 0),u([d({nonNullable:!0})],w.prototype,"fullExtent",void 0),u([d()],w.prototype,"spatialReference",void 0),w=u([h("esri.layers.BaseTileLayer")],w);const f=w,M=new p({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let j=class extends(e(y(c(f)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new l({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:a.WebMercator},spatialReference:a.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return b(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return M.toJSON(this.style)}get bingLogo(){return b(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then((()=>this._getMetadata())):Promise.reject(new o("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,s){if(!this.loaded||v(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],l=i.imageUrlSubdomains[t%i.imageUrlSubdomains.length],a=this._getQuadKey(e,t,s);return i.imageUrl.replace("{subdomain}",l).replace("{quadkey}",a)}async fetchAttributionData(){return this.load().then((()=>v(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){return n(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new o("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new o("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new o("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new o("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return n(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new o("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new o("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,s){let i="";for(let l=e;l>0;l--){let e=0;const a=1<<l-1;0!=(s&a)&&(e+=1),0!=(t&a)&&(e+=2),i+=e.toString()}return i}};u([d({json:{read:!1,write:!1},value:null})],j.prototype,"bingMetadata",null),u([d({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],j.prototype,"type",void 0),u([d({type:l})],j.prototype,"tileInfo",void 0),u([d({type:String,readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"copyright",null),u([d({type:String,json:{write:!1,read:!1}})],j.prototype,"key",void 0),u([d({type:M.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:M.read}}})],j.prototype,"style",void 0),u([d({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],j.prototype,"operationalLayerType",null),u([d({type:String,json:{write:!1,read:!1}})],j.prototype,"culture",void 0),u([d({type:String,json:{write:!1,read:!1}})],j.prototype,"region",void 0),u([d({type:String,json:{write:!0,read:!0}})],j.prototype,"portalUrl",void 0),u([d({type:Boolean,json:{write:!1,read:!1}})],j.prototype,"hasAttributionData",void 0),u([d({type:String,readOnly:!0})],j.prototype,"bingLogo",null),j=u([h("esri.layers.BingMapsLayer")],j);const T=j;export default T;