'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const WebTileLayer = require('./WebTileLayer-f0d732cb.js');
const TileInfo = require('./TileInfo-83a1d8a2.js');
const PortalItem = require('./PortalItem-8bcd02f8.js');
require('./index-fde8502c.js');
require('./MultiOriginJSONSupport-77ac451b.js');
require('./Layer-31cde361.js');
require('./Identifiable-a4f50f85.js');
require('./Portal-8d16604d.js');
require('./BlendLayer-6a2ab430.js');
require('./colorUtils-e70dbab5.js');
require('./screenUtils-d911ae62.js');
require('./mat4-f68486bc.js');
require('./common-41a349f2.js');
require('./OperationalLayer-853649aa.js');
require('./TimeExtent-8b558884.js');
require('./persistableUrlUtils-c611d652.js');
require('./ElevationInfo-d3e3d64f.js');
require('./opacityUtils-f2e4b347.js');
require('./lengthUtils-179eaf12.js');
require('./unitUtils-083cb8d0.js');
require('./PortalLayer-7556e594.js');
require('./asyncUtils-cd78b718.js');
require('./RefreshableLayer-487bd7b3.js');
require('./ScaleRangeLayer-5320a5ba.js');
require('./aaBoundingRect-56648c00.js');
require('./mathUtils-af6066f0.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends WebTileLayer.x{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new TileInfo.j({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new request.b$2({x:-20037508.342787,y:20037508.342787,spatialReference:request.k.WebMercator}),spatialReference:request.k.WebMercator,lods:[new TileInfo.p({level:0,scale:591657527.591555,resolution:156543.033928}),new TileInfo.p({level:1,scale:295828763.795777,resolution:78271.5169639999}),new TileInfo.p({level:2,scale:147914381.897889,resolution:39135.7584820001}),new TileInfo.p({level:3,scale:73957190.948944,resolution:19567.8792409999}),new TileInfo.p({level:4,scale:36978595.474472,resolution:9783.93962049996}),new TileInfo.p({level:5,scale:18489297.737236,resolution:4891.96981024998}),new TileInfo.p({level:6,scale:9244648.868618,resolution:2445.98490512499}),new TileInfo.p({level:7,scale:4622324.434309,resolution:1222.99245256249}),new TileInfo.p({level:8,scale:2311162.217155,resolution:611.49622628138}),new TileInfo.p({level:9,scale:1155581.108577,resolution:305.748113140558}),new TileInfo.p({level:10,scale:577790.554289,resolution:152.874056570411}),new TileInfo.p({level:11,scale:288895.277144,resolution:76.4370282850732}),new TileInfo.p({level:12,scale:144447.638572,resolution:38.2185141425366}),new TileInfo.p({level:13,scale:72223.819286,resolution:19.1092570712683}),new TileInfo.p({level:14,scale:36111.909643,resolution:9.55462853563415}),new TileInfo.p({level:15,scale:18055.954822,resolution:4.77731426794937}),new TileInfo.p({level:16,scale:9027.977411,resolution:2.38865713397468}),new TileInfo.p({level:17,scale:4513.988705,resolution:1.19432856685505}),new TileInfo.p({level:18,scale:2256.994353,resolution:.597164283559817}),new TileInfo.p({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new request.M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,request.k.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};request.e([request.d({type:PortalItem['default'],json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),request.e([request.d({type:Boolean,json:{read:!1,write:!1}})],c.prototype,"isReference",void 0),request.e([request.d({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"refreshInterval",null),request.e([request.d({type:TileInfo.j,json:{write:!1}})],c.prototype,"tileInfo",void 0),request.e([request.d({type:["show","hide"]})],c.prototype,"listMode",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"subDomains",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],c.prototype,"fullExtent",void 0),request.e([request.d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"urlTemplate",void 0),request.e([request.d({type:["OpenStreetMap"]})],c.prototype,"operationalLayerType",void 0),request.e([request.d({json:{read:!1}})],c.prototype,"type",void 0),request.e([request.d({json:{read:!1,write:!1}})],c.prototype,"copyright",void 0),request.e([request.d({json:{read:!1,write:!1}})],c.prototype,"wmtsInfo",void 0),c=request.e([request.i("esri.layers.OpenStreetMapLayer")],c);const u=c;

exports.default = u;
