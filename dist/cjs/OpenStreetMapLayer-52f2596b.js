'use strict';

const request = require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');
const WebTileLayer = require('./WebTileLayer-46d5cd85.js');
const TileInfo = require('./TileInfo-363ea532.js');
const PortalItem = require('./PortalItem-42e06deb.js');
require('./index-57f2cfbb.js');
require('./JSONSupport-53c01d03.js');
require('./Layer-849337e0.js');
require('./BlendLayer-7e864068.js');
require('./jsonUtils-4461cf25.js');
require('./mat4-1439266d.js');
require('./OperationalLayer-f89b9d70.js');
require('./commonProperties-75b954b3.js');
require('./TimeExtent-cdfe048b.js');
require('./lengthUtils-3475e67e.js');
require('./PortalLayer-19d79370.js');
require('./asyncUtils-9f974032.js');
require('./RefreshableLayer-22c5fbbd.js');
require('./ScaleRangeLayer-52589af6.js');
require('./aaBoundingRect-7e7e678f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends WebTileLayer.x{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new TileInfo.j({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new unitUtils.b({x:-20037508.342787,y:20037508.342787,spatialReference:unitUtils.k.WebMercator}),spatialReference:unitUtils.k.WebMercator,lods:[new TileInfo.p({level:0,scale:591657527.591555,resolution:156543.033928}),new TileInfo.p({level:1,scale:295828763.795777,resolution:78271.5169639999}),new TileInfo.p({level:2,scale:147914381.897889,resolution:39135.7584820001}),new TileInfo.p({level:3,scale:73957190.948944,resolution:19567.8792409999}),new TileInfo.p({level:4,scale:36978595.474472,resolution:9783.93962049996}),new TileInfo.p({level:5,scale:18489297.737236,resolution:4891.96981024998}),new TileInfo.p({level:6,scale:9244648.868618,resolution:2445.98490512499}),new TileInfo.p({level:7,scale:4622324.434309,resolution:1222.99245256249}),new TileInfo.p({level:8,scale:2311162.217155,resolution:611.49622628138}),new TileInfo.p({level:9,scale:1155581.108577,resolution:305.748113140558}),new TileInfo.p({level:10,scale:577790.554289,resolution:152.874056570411}),new TileInfo.p({level:11,scale:288895.277144,resolution:76.4370282850732}),new TileInfo.p({level:12,scale:144447.638572,resolution:38.2185141425366}),new TileInfo.p({level:13,scale:72223.819286,resolution:19.1092570712683}),new TileInfo.p({level:14,scale:36111.909643,resolution:9.55462853563415}),new TileInfo.p({level:15,scale:18055.954822,resolution:4.77731426794937}),new TileInfo.p({level:16,scale:9027.977411,resolution:2.38865713397468}),new TileInfo.p({level:17,scale:4513.988705,resolution:1.19432856685505}),new TileInfo.p({level:18,scale:2256.994353,resolution:.597164283559817}),new TileInfo.p({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new unitUtils.M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,unitUtils.k.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};request.e([request.d({type:PortalItem['default'],json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),request.e([request.d({type:Boolean,json:{read:!1,write:!1}})],c.prototype,"isReference",void 0),request.e([request.d({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"refreshInterval",null),request.e([request.d({type:TileInfo.j,json:{write:!1}})],c.prototype,"tileInfo",void 0),request.e([request.d({type:["show","hide"]})],c.prototype,"listMode",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"subDomains",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],c.prototype,"fullExtent",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"urlTemplate",void 0),request.e([request.d({type:["OpenStreetMap"]})],c.prototype,"operationalLayerType",void 0),request.e([request.d({json:{read:!1}})],c.prototype,"type",void 0),request.e([request.d({json:{read:!1,write:!1}})],c.prototype,"copyright",void 0),request.e([request.d({json:{read:!1,write:!1}})],c.prototype,"wmtsInfo",void 0),c=request.e([request.i("esri.layers.OpenStreetMapLayer")],c);const u=c;

exports.default = u;
