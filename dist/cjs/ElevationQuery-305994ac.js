'use strict';

const request = require('./MapView-1726f571.js');
require('./index-fde8502c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=request.s$2.getLogger("esri.layers.support.ElevationSampler");class m{queryElevation(e){return h(e.clone(),this)}on(){return g$1}projectIfRequired(e,t){return f(e,t)}}class p extends m{constructor(e,t,n){super(),this.tile=e,this.noDataValue=n,this.extent=request.m$14(e.tile.extent,t.spatialReference);const o=request.H(t.spatialReference),r=t.lodAt(e.tile.level).resolution*o;this.demResolution={min:r,max:r};}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return request.r$15(this.extent,t)}elevationAt(e){const n=this.projectIfRequired(e,this.spatialReference);if(request.t(n))return null;if(!this.contains(e)){const t=this.extent,n=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return c.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${n})`),this.noDataValue}return this.tile.sample(n.x,n.y)}}class u extends m{constructor(e,t,n){let s;super(),"number"==typeof t?(this.noDataValue=t,s=null):(s=t,this.noDataValue=n),this.samplers=s?e.map((e=>new p(e,s,this.noDataValue))):e;const r=this.samplers[0];if(r){this.extent=r.extent.clone();const{min:e,max:t}=r.demResolution;this.demResolution={min:e,max:t};for(let n=1;n<this.samplers.length;n++){const e=this.samplers[n];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max);}}else this.extent=request.m$14(request.u(),s.spatialReference),this.demResolution={min:0,max:0};}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const n of this.samplers)if(n.contains(t))return n.elevationAt(t);return c.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),this.noDataValue}}function h(e,t){const n=f(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":x$1(e,n,t);break;case"polyline":R$1(e,n,t);break;case"multipoint":d(e,n,t);}return e}function f(e,n){if(request.t(e))return null;const s=e.spatialReference;if(s.equals(n))return e;const i=request.M$5(e,n);return i||c.error(`Cannot project geometry spatial reference (wkid:${s.wkid}) to elevation sampler spatial reference (wkid:${n.wkid})`),i}function x$1(e,t,s){e.z=request.c$13(s.elevationAt(t),0);}function R$1(e,t,s){y.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.paths.length;o++){const r=e.paths[o],a=t.paths[o];for(let e=0;e<r.length;e++){const t=r[e],o=a[e];y.x=o[0],y.y=o[1],i&&(t[3]=t[2]),t[2]=request.c$13(s.elevationAt(y),0);}}e.hasZ=!0;}function d(e,t,s){y.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.points.length;o++){const r=e.points[o],a=t.points[o];y.x=a[0],y.y=a[1],i&&(r[3]=r[2]),r[2]=request.c$13(s.elevationAt(y),0);}e.hasZ=!0;}const y=new request.b$5,g$1={remove(){}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(a,e=null){if(this.tile=a,request.r(e)){const t=a.extent;this.samplerData={pixelData:e.values,width:e.width,height:e.height,safeWidth:.99999999*(e.width-1),noDataValue:e.noDataValue,dx:(e.width-1)/(t[2]-t[0]),dy:(e.width-1)/(t[3]-t[1]),x0:t[0],y1:t[3]};}}sample(t,e){if(request.t(this.samplerData))return;const{safeWidth:s,width:h,pixelData:l,noDataValue:o,dx:r,dy:n,y1:d,x0:u}=this.samplerData,f=i(n*(d-e),0,s),c=i(r*(t-u),0,s),p=Math.floor(f),x=Math.floor(c),D=p*h+x,m=D+h,w=l[D],y=l[m],V=l[D+1],g=l[m+1];if(w!==o&&y!==o&&V!==o&&g!==o){const t=c-x,a=w+(V-w)*t;return a+(y+(g-y)*t-a)*(f-p)}}}function i(t,a,e){return t<a?a:t>e?e:t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class v{async queryAll(e,i,o){if(!(e=o&&o.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new request.s$1("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=x.fromGeometry(i);let l=!1;o&&o.returnSampleInfo||(l=!0);const n={...R,...o,returnSampleInfo:!0},a=await this.query(e[e.length-1],s,n),r=await this._queryAllContinue(e,a,n);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,i,o){if(!e)throw new request.s$1("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||!(i instanceof x)&&"point"!==i.type&&"multipoint"!==i.type&&"polyline"!==i.type)throw new request.s$1("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...R,...o},l=new w(e,i.spatialReference,s),n=s.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(l,i,n),await this._selectTiles(l,n),await this._populateElevationTiles(l,n),this._sampleGeometryWithElevation(l),this._createQueryResult(l,n)}async createSampler(e,i,o){if(!e)throw new request.s$1("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new request.s$1("elevation-query:invalid-extent","Invalid or undefined extent");const s={...R,...o};return this._createSampler(e,i,s)}async createSamplerAll(e,i,o){if(!(e=o&&o.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new request.s$1("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new request.s$1("elevation-query:invalid-extent","Invalid or undefined extent");const s={...R,...o,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],i,s);return this._createSamplerAllContinue(e,i,l,s)}async _createSampler(e,t,i,o){const s=i.signal;await e.load({signal:s});const l=t.spatialReference,n=e.tileInfo.spatialReference;l.equals(n)||(await request.rn([{source:l,dest:n}],{signal:s}),t=request.O$5(t,n));const a=new _(e,t,i,o);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new u(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,o){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>request.c$1(e.extent))),l=await this._createSampler(e[e.length-1],t,o,s);if(0===l.samplers.length)return i;const n=i.samplers.concat(l.samplers),a=new u(n,o.noDataValue);return this._createSamplerAllContinue(e,t,a,o)}async _queryAllContinue(e,t,i){const o=e.pop(),s=t.geometry.coordinates,l=[],n=[];for(let c=0;c<s.length;c++){const i=t.sampleInfo[c];i.demResolution>=0?i.source||(i.source=o):e.length&&(l.push(s[c]),n.push(c));}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,i);return n.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution;})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null;})),i}async _createGeometryDescriptor(e,i,o){let s;const l=e.layer.tileInfo.spatialReference;if(i instanceof x?s=await i.project(l,o):(await request.rn([{source:i.spatialReference,dest:l}],{signal:o}),s=request.O$5(i,l)),!s)throw new request.s$1("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=x.fromGeometry(s);}async _selectTiles(e,i){const o=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof o)this._selectTilesClosestResolution(e);else if("finest-contiguous"===o)await this._selectTilesFinestContiguous(e,i);else {if("auto"!==o)throw new request.s$1("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${o}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,i);}}_preselectOutsideLayerExtent(e$1){if(request.t(e$1.layer.fullExtent))return;const t=new e(null);t.sample=()=>e$1.options.noDataValue,e$1.outsideExtentTile=t;const o=e$1.layer.fullExtent;e$1.geometry.coordinates.forEach((e=>{const i=e.x,s=e.y;(i<o.xmin||i>o.xmax||s<o.ymin||s>o.ymax)&&(e.elevationTile=t);}));}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i);}_findNearestDemResolutionLODIndex(e,t){const i=t/request.H(e.spatialReference);let o=e.lods[0],s=0;for(let l=1;l<e.lods.length;l++){const t=e.lods[l];Math.abs(t.resolution-i)<Math.abs(o.resolution-i)&&(o=t,s=l);}return s}async _selectTilesFinestContiguous(e,t){const i=E(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t);}async _selectTilesFinestContiguousAt(e,i,o){const n=e.layer;if(e.selectTilesAtLOD(i),i<0)return;const a=n.tilemapCache,r=e.getTilesToFetch();try{if(a)await request.P(Promise.all(r.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:o})))),o);else if(await this._populateElevationTiles(e,o),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new request.s$1("elevation-query:has-unavailable-tiles")}catch(c){request.b$9(c),await this._selectTilesFinestContiguousAt(e,i-1,o);}}async _populateElevationTiles(e$1,t){const i=e$1.getTilesToFetch(),l={},a=e$1.options.cache,r=e$1.options.noDataValue,c=i.map((async i=>{const s=`${e$1.layer.uid}:${i.id}:${r}`,n=request.r(a)?a.get(s):null,c=request.r(n)?n:await e$1.layer.fetchTile(i.level,i.row,i.col,{noDataValue:r,signal:t});request.r(a)&&a.put(s,c),l[i.id]=new e(i,c);}));await request.P(request.T$1(c),t),e$1.populateElevationTiles(l);}async _selectTilesAuto(t,i){this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t);const o=t.layer.tilemapCache;if(!o)return this._selectTilesAutoPrefetchUpsample(t,i);const n=t.getTilesToFetch(),a={},r=n.map((async t=>{const s={id:null,level:0,row:0,col:0,extent:request.u()},n=await request.a$15(o.fetchAvailabilityUpsample(t.level,t.row,t.col,s,{signal:i}));!1===n.ok?request.b$9(n.error):a[t.id]=s;}));await request.P(Promise.all(r),i),t.remapTiles(a);}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const o={},s=e=>{e.id in o?o[e.id]++:(o[e.id]=1,i++);},l=e=>{const t=o[e.id];1===t?(delete o[e.id],i--):o[e.id]=t-1;};e.forEachTileToFetch(s,l);let n=!0;for(;n&&(n=!1,e.forEachTileToFetch((o=>{i<=e.options.maximumAutoTileRequests||(l(o),t.upsampleTile(o)&&(n=!0),s(o));}),l),n););}_selectTilesAutoFinest(e){const t=E(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests);}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let o=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?o=!0:t();})),o&&await this._selectTilesAutoPrefetchUpsample(e,t);}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);request.r(e)?s=e:t.elevationTile=null;}t.z=s;}));}_extractSampleInfo(e){const t=e.layer.tileInfo,i=request.H(t.spatialReference);return e.geometry.coordinates.map((o=>{let s=-1;if(o.elevationTile&&o.elevationTile!==e.outsideExtentTile){s=t.lodAt(o.elevationTile.tile.level).resolution*i;}return {demResolution:s}}))}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await request.rn([{source:this.spatialReference,dest:e}],{signal:t});const i=new request.m$13({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),o=request.O$5(i,e);if(!o)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=o.points[t];return i.x=s[0],i.y=s[1],i})),l=this.clone(s);return l.spatialReference=e,l}_cloneCoordinate(e){return {x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const o=e.clone(t);return o.spatialReference=i,o};else switch(e.type){case"point":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:o?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new request.b$5(t[0].x,t[0].y,t[0].z,t[0].m,i):new request.b$5(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):o?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new request.m$13({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new request.m$13(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,o=[],s=[],{hasZ:l,hasM:n}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,l&&n)for(const t of e)o.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(l)for(const t of e)o.push({x:t[0],y:t[1],z:t[2]});else if(n)for(const t of e)o.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)o.push({x:t[0],y:t[1]});t.coordinates=o,t._exporter=(t,i)=>{const o=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=s.map((e=>o.slice(e[0],e[1])));return new request.m$7({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class g{constructor(e,t){this.layer=e,this.options=t;}}class w extends g{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry";}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else {const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y);}));}}allElevationTilesFetched(){return !this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null);}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id]);}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id];}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const o=i.tile;i.elevationTile||!i.tile||e[o.id]||(e[o.id]=o,t.push(o));}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null));}}class _ extends g{constructor(e,t,i,o){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=o;}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),o=Math.min(i,e);o<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(o);}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const o=this.extent;if(request.t(o))return -1;for(let i=t.lods.length-1;i>=0;i--){const s=t.lods[i],l=s.resolution*t.size[0],n=s.resolution*t.size[1];if(Math.ceil(o.width/l)*Math.ceil(o.height/n)<=e)return i}return -1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear();}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i));}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])));}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let o=!1;e(i,(()=>o=!0)),o?t&&t(i):this.candidateTiles.push(i);})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t);}_uniqueNonOverlappingTiles(e,t){const i={},o=[];for(const l of e)i[l.id]?t&&t(l):(i[l.id]=l,o.push(l));const s=o.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let o=0;o<i;o++)if(request.q(s[o].extent,e.extent))return t&&t(e),!1;return !0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if(request.t(t))return;const o=this.layer.tileInfo,s=o.lods[e],l=o.tileAt(s.level,t.xmin,t.ymin),n=s.resolution*o.size[0],a=s.resolution*o.size[1],r=Math.ceil((t.xmax-l.extent[0])/n),c=Math.ceil((t.ymax-l.extent[1])/a);for(let i=0;i<c;i++)for(let e=0;e<r;e++){const t={id:null,level:l.level,row:l.row-i,col:l.col+e};o.updateTileInfo(t),this._tileIsMasked(t)||this.candidateTiles.push(t);}}_tileIsMasked(e){return !!this.maskExtents&&this.maskExtents.some((t=>request.q(t,e.extent)))}}function E(e,t){let i=e.lods.length-1;if(t>0){const o=e.lods.findIndex((e=>e.resolution<t));0===o?i=0:o>0&&(i=o-1);}return i}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};

exports.ElevationQuery = v;
exports.GeometryDescriptor = x;
exports.default = v;
exports.getFinestLodIndex = E;
