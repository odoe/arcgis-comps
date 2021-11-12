import { e, a as d, i } from './jsxFactory-a3b6abde.js';
import { ao as b, z as k, M } from './Graphic-08cda9ca.js';
import { x } from './WebTileLayer-a2c17409.js';
import { j, p } from './TileInfo-11d4e5af.js';
import b$1 from './PortalItem-4dd070a8.js';
import './index-8dec7690.js';
import './JSONSupport-4f0a3248.js';
import './MultiOriginJSONSupport-22dd2d29.js';
import './BlendLayer-1d9f1c9a.js';
import './jsonUtils-efaaa503.js';
import './mat4-3acd3594.js';
import './_commonjsHelpers-020ca939.js';
import './OperationalLayer-26aa2ff7.js';
import './commonProperties-ad8badbd.js';
import './TimeExtent-a92e5996.js';
import './lengthUtils-e1fe9a45.js';
import './PortalLayer-8e73039a.js';
import './asyncUtils-9a49e799.js';
import './RefreshableLayer-5b977e98.js';
import './ScaleRangeLayer-2f975321.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends x{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new j({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new b({x:-20037508.342787,y:20037508.342787,spatialReference:k.WebMercator}),spatialReference:k.WebMercator,lods:[new p({level:0,scale:591657527.591555,resolution:156543.033928}),new p({level:1,scale:295828763.795777,resolution:78271.5169639999}),new p({level:2,scale:147914381.897889,resolution:39135.7584820001}),new p({level:3,scale:73957190.948944,resolution:19567.8792409999}),new p({level:4,scale:36978595.474472,resolution:9783.93962049996}),new p({level:5,scale:18489297.737236,resolution:4891.96981024998}),new p({level:6,scale:9244648.868618,resolution:2445.98490512499}),new p({level:7,scale:4622324.434309,resolution:1222.99245256249}),new p({level:8,scale:2311162.217155,resolution:611.49622628138}),new p({level:9,scale:1155581.108577,resolution:305.748113140558}),new p({level:10,scale:577790.554289,resolution:152.874056570411}),new p({level:11,scale:288895.277144,resolution:76.4370282850732}),new p({level:12,scale:144447.638572,resolution:38.2185141425366}),new p({level:13,scale:72223.819286,resolution:19.1092570712683}),new p({level:14,scale:36111.909643,resolution:9.55462853563415}),new p({level:15,scale:18055.954822,resolution:4.77731426794937}),new p({level:16,scale:9027.977411,resolution:2.38865713397468}),new p({level:17,scale:4513.988705,resolution:1.19432856685505}),new p({level:18,scale:2256.994353,resolution:.597164283559817}),new p({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};e([d({type:b$1,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),e([d({type:Boolean,json:{read:!1,write:!1}})],c.prototype,"isReference",void 0),e([d({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"refreshInterval",null),e([d({type:j,json:{write:!1}})],c.prototype,"tileInfo",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"subDomains",void 0),e([d({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],c.prototype,"fullExtent",void 0),e([d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"urlTemplate",void 0),e([d({type:["OpenStreetMap"]})],c.prototype,"operationalLayerType",void 0),e([d({json:{read:!1}})],c.prototype,"type",void 0),e([d({json:{read:!1,write:!1}})],c.prototype,"copyright",void 0),e([d({json:{read:!1,write:!1}})],c.prototype,"wmtsInfo",void 0),c=e([i("esri.layers.OpenStreetMapLayer")],c);const u=c;

export default u;
