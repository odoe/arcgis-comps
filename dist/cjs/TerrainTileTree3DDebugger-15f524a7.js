'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const aaBoundingRect = require('./aaBoundingRect-56648c00.js');
const TileTreeDebugger = require('./TileTreeDebugger-1eb2539f.js');
require('./index-fde8502c.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.TerrainTileTree3DDebugger=class extends TileTreeDebugger.b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){request.i$1(this,"enabled",(e=>this.view.basemapTerrain.renderPatchBorders=e));}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:geometry.v.fromExtent(aaBoundingRect.m(e.extent,this.view.basemapTerrain.spatialReference))})))}};exports.TerrainTileTree3DDebugger=request.e([request.i("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],exports.TerrainTileTree3DDebugger);
