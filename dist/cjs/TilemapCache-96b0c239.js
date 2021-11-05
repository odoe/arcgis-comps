'use strict';

const request = require('./MapView-1195e7f1.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={type:request.j$7,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n$1}}}}};function n$1(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?request.j$7.fromJSON(r):request.j$7.fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return request.j$7.fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return request.j$7.fromJSON(r)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40;}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let s=0;s<t.length;s++){const i=s%8;t[s]?(l=!1,n[r]|=1<<i):a=!1,7===i&&++r;}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length);}static fromDefinition(a,o){const r=a.service.request||request.E,{row:s,col:h,width:c,height:m}=a,d={query:{f:"json"}};return o=o?{...d,...o}:d,r(n(a),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return {location:{top:s,left:h,width:c,height:m},valid:!0,data:request.g$6(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new request.s$3("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s,left:h,width:c,height:m}});return l.fromJSON(t)}))}static fromJSON(t){l.validateJSON(t);const i=new l;return i.location=Object.freeze(request.l$1(t.location)),i._updateFromData(t.data),Object.freeze(i)}static validateJSON(t){if(!t||!t.location)throw new request.s$3("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new request.s$3("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new request.s$3("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new request.s$3("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new request.s$3("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function o(t){return `${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else {const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;}const e=t.service.query;return e&&(i=`${i}?${e}`),i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var g;const w=request.s.getLogger("esri.layers.support.TilemapCache");exports.T=g=class extends(request.a$6(request.p)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=request.E,this._prefetchingEnabled=!0;}initialize(){this._tilemapCache=new request.e$21(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),request.i$3(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition();}castLevels(e){return e<=2?(w.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l$1){if(!this._availableLevels[e])return Promise.reject(new request.s$3("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,s);if(a)return Promise.resolve(a);const o$1=l$1&&l$1.signal;return l$1={...l$1,signal:null},new Promise(((e,t)=>{request.j$5(o$1,(()=>t(request.m$7())));const i=o(s);let r=this._pendingTilemapRequests[i];if(!r){r=l.fromDefinition(s,l$1).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=r,r.then(e,e);}r.then(e,t);}))}getAvailability(e,t,i){if(!this._availableLevels[e])return "unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,r){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;for(l.updateTileInfo(r);;){const e=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==e)return e;if(!l.upsampleTile(r))return "unavailable"}}fetchAvailability(e,t,i,l$1){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l$1).catch((e=>e)).then((l$1=>{if(l$1 instanceof l){const s=l$1.getAvailability(t,i);return "unavailable"===s?Promise.reject(new request.s$3("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):s}if(request.d$2(l$1))throw l$1;return "unknown"})):Promise.reject(new request.s$3("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const a=this.fetchAvailability(e,t,i,l).catch((e=>{if(request.d$2(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,s){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this.handles.has(a))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let n=!1;const c={remove(){n||(n=!0,o.abort());}};if(this.handles.add(c,a),await request.y$10(10,o.signal).catch((()=>{})),n||(n=!0,this.handles.remove(a)),request.p$3(o))return;const p={id:e,level:t,row:i,col:r},u={...l,signal:o.signal},f=this.layer.tileInfo;for(let h=0;g._prefetches.length<g._maxPrefetch&&f.upsampleTile(p);++h){const e=this.fetchAvailability(p.level,p.row,p.col,u);g._prefetches.push(e);const t=()=>{g._prefetches.removeUnordered(e);};e.then(t,t);}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:request.C$1({...e.query,...i,apiKey:t}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0};}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=o(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0));}get test(){const e=this;return {get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t;},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};exports.T._maxPrefetch=4,exports.T._prefetches=new request.n$17({initialSize:g._maxPrefetch}),request.e([request.d({constructOnly:!0,type:Number})],exports.T.prototype,"levels",void 0),request.e([request.c("levels")],exports.T.prototype,"castLevels",null),request.e([request.d({readOnly:!0,type:Number})],exports.T.prototype,"size",null),request.e([request.d({constructOnly:!0,type:Number})],exports.T.prototype,"cacheByteSize",void 0),request.e([request.d({constructOnly:!0})],exports.T.prototype,"layer",void 0),request.e([request.d({constructOnly:!0})],exports.T.prototype,"request",void 0),exports.T=g=request.e([request.i("esri.layers.support.TilemapCache")],exports.T);

exports.n = n$1;
exports.r = r;
