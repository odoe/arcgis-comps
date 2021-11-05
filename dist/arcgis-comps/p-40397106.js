import{i0 as e,i1 as t,i2 as s,ec as i,ed as a,ad as l,a8 as r,H as n,a7 as o,e as u,d,i as g,cH as h,v as p,e6 as y,aG as c,W as v,g as b}from"./p-7b6f6c18.js";import"./p-227a5838.js";const m={id:"0/0/0",level:0,row:0,col:0,extent:null};let w=class extends(e(t(s(i)))){constructor(){super(...arguments),this.tileInfo=a.create({spatialReference:l.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new r(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,l.WebMercator),this.spatialReference=l.WebMercator}getTileBounds(e,t,s,i){const a=i||h();return m.level=e,m.row=t,m.col=s,m.extent=a,this.tileInfo.updateTileInfo(m),m.extent=null,a}fetchTile(e,t,s,i={}){const{signal:a}=i,l=this.getTileUrl(e,t,s),r={responseType:"image",signal:a,query:{...this.refreshParameters}};return n(l,r).then((e=>e.data))}getTileUrl(){throw new o("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};u([d({type:a})],w.prototype,"tileInfo",void 0),u([d({type:["show","hide"]})],w.prototype,"listMode",void 0),u([d({readOnly:!0,value:"base-tile"})],w.prototype,"type",void 0),u([d({nonNullable:!0})],w.prototype,"fullExtent",void 0),u([d()],w.prototype,"spatialReference",void 0),w=u([g("esri.layers.BaseTileLayer")],w);const f=w,M=new p({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let j=class extends(e(y(c(f)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new a({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:l.WebMercator},spatialReference:l.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return v(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return M.toJSON(this.style)}get bingLogo(){return v(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then((()=>this._getMetadata())):Promise.reject(new o("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,s){if(!this.loaded||b(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],a=i.imageUrlSubdomains[t%i.imageUrlSubdomains.length],l=this._getQuadKey(e,t,s);return i.imageUrl.replace("{subdomain}",a).replace("{quadkey}",l)}async fetchAttributionData(){return this.load().then((()=>b(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){return n(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new o("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new o("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new o("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new o("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return n(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new o("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new o("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,s){let i="";for(let a=e;a>0;a--){let e=0;const l=1<<a-1;0!=(s&l)&&(e+=1),0!=(t&l)&&(e+=2),i+=e.toString()}return i}};u([d({json:{read:!1,write:!1},value:null})],j.prototype,"bingMetadata",null),u([d({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],j.prototype,"type",void 0),u([d({type:a})],j.prototype,"tileInfo",void 0),u([d({type:String,readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"copyright",null),u([d({type:String,json:{write:!1,read:!1}})],j.prototype,"key",void 0),u([d({type:M.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:M.read}}})],j.prototype,"style",void 0),u([d({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],j.prototype,"operationalLayerType",null),u([d({type:String,json:{write:!1,read:!1}})],j.prototype,"culture",void 0),u([d({type:String,json:{write:!1,read:!1}})],j.prototype,"region",void 0),u([d({type:String,json:{write:!0,read:!0}})],j.prototype,"portalUrl",void 0),u([d({type:Boolean,json:{write:!1,read:!1}})],j.prototype,"hasAttributionData",void 0),u([d({type:String,readOnly:!0})],j.prototype,"bingLogo",null),j=u([g("esri.layers.BingMapsLayer")],j);const T=j;export default T;