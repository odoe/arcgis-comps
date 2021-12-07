'use strict';

const request = require('./messageBundle-8be88d04.js');
require('./geometry-ef17530a.js');
const TilemapCache = require('./TilemapCache-cec6e7d3.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null;}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new TilemapCache.T({layer:this}):null}};return request.e([request.d({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),request.e([request.d()],l.prototype,"minScale",void 0),request.e([request.o$2("service","minScale")],l.prototype,"readMinScale",null),request.e([request.d()],l.prototype,"maxScale",void 0),request.e([request.o$2("service","maxScale")],l.prototype,"readMaxScale",null),request.e([request.d({type:request.k})],l.prototype,"spatialReference",void 0),request.e([request.d({readOnly:!0})],l.prototype,"supportsBlankTile",null),request.e([request.d(TilemapCache.r)],l.prototype,"tileInfo",void 0),request.e([request.d()],l.prototype,"tilemapCache",void 0),request.e([request.o$2("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),request.e([request.d()],l.prototype,"version",void 0),l=request.e([request.i("esri.layers.mixins.ArcGISCachedService")],l),l};

exports.s = s;
