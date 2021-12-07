import { a4 as i, bX as v, iV as m, e, i as i$1 } from './index.js';
import { b } from './TileTreeDebugger.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){i(this,"enabled",(e=>this.view.basemapTerrain.renderPatchBorders=e));}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:v.fromExtent(m(e.extent,this.view.basemapTerrain.spatialReference))})))}};p=e([i$1("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],p);

export { p as TerrainTileTree3DDebugger };
