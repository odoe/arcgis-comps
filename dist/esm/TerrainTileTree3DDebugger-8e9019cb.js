import { a as i, e, i as i$1 } from './messageBundle-f75b4090.js';
import { v } from './geometry-7e07b1ba.js';
import { m } from './aaBoundingRect-9468599b.js';
import { b } from './TileTreeDebugger-f912b010.js';
import './index-b157fcf2.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './jsonUtils-13b1f6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){i(this,"enabled",(e=>this.view.basemapTerrain.renderPatchBorders=e));}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:v.fromExtent(m(e.extent,this.view.basemapTerrain.spatialReference))})))}};p=e([i$1("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],p);

export { p as TerrainTileTree3DDebugger };
