import{e,d as o,i as l}from"./p-9ae46e68.js";import{E as t,k as r,M as s}from"./p-566b0715.js";import{x as i}from"./p-87a26876.js";import{j as n,p as a}from"./p-523f37cd.js";import p from"./p-725fd184.js";import"./p-84bf99cb.js";import"./p-fe01b82b.js";import"./p-8e6daf54.js";import"./p-c59d0a4d.js";import"./p-3a5fe179.js";import"./p-138c2b2c.js";import"./p-cf8dc9be.js";import"./p-f271906a.js";import"./p-79553c8d.js";import"./p-c5b7f7c3.js";import"./p-5c89c68e.js";import"./p-57ae469d.js";import"./p-0c91ebaf.js";import"./p-72355290.js";import"./p-81e5b36e.js";let c=class extends i{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new n({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new t({x:-20037508.342787,y:20037508.342787,spatialReference:r.WebMercator}),spatialReference:r.WebMercator,lods:[new a({level:0,scale:591657527.591555,resolution:156543.033928}),new a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new a({level:8,scale:2311162.217155,resolution:611.49622628138}),new a({level:9,scale:1155581.108577,resolution:305.748113140558}),new a({level:10,scale:577790.554289,resolution:152.874056570411}),new a({level:11,scale:288895.277144,resolution:76.4370282850732}),new a({level:12,scale:144447.638572,resolution:38.2185141425366}),new a({level:13,scale:72223.819286,resolution:19.1092570712683}),new a({level:14,scale:36111.909643,resolution:9.55462853563415}),new a({level:15,scale:18055.954822,resolution:4.77731426794937}),new a({level:16,scale:9027.977411,resolution:2.38865713397468}),new a({level:17,scale:4513.988705,resolution:1.19432856685505}),new a({level:18,scale:2256.994353,resolution:.597164283559817}),new a({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new s(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,r.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};e([o({type:p,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),e([o({type:Boolean,json:{read:!1,write:!1}})],c.prototype,"isReference",void 0),e([o({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"refreshInterval",null),e([o({type:n,json:{write:!1}})],c.prototype,"tileInfo",void 0),e([o({type:["show","hide"]})],c.prototype,"listMode",void 0),e([o({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"subDomains",void 0),e([o({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],c.prototype,"fullExtent",void 0),e([o({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"urlTemplate",void 0),e([o({type:["OpenStreetMap"]})],c.prototype,"operationalLayerType",void 0),e([o({json:{read:!1}})],c.prototype,"type",void 0),e([o({json:{read:!1,write:!1}})],c.prototype,"copyright",void 0),e([o({json:{read:!1,write:!1}})],c.prototype,"wmtsInfo",void 0),c=e([l("esri.layers.OpenStreetMapLayer")],c);const d=c;export default d;