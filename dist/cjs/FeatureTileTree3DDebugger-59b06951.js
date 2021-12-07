'use strict';

const request = require('./messageBundle-8be88d04.js');
const geometry = require('./geometry-ef17530a.js');
const TileTreeDebugger = require('./TileTreeDebugger-1eb2539f.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');
require('./index-fde8502c.js');
require('./Color-7d915caa.js');
require('./colorUtils-e70dbab5.js');
require('./mathUtils-af6066f0.js');
require('./common-41a349f2.js');
require('./Graphic-0aff6059.js');
require('./PopupTemplate-a0b855f8.js');
require('./opacityUtils-f2e4b347.js');
require('./enumeration-f235fe07.js');
require('./Identifiable-a4f50f85.js');
require('./symbols-29b793e5.js');
require('./Symbol-f0556e23.js');
require('./screenUtils-d911ae62.js');
require('./aaBoundingBox-c372701a.js');
require('./aaBoundingRect-56648c00.js');
require('./persistableUrlUtils-c611d652.js');
require('./Portal-8d16604d.js');
require('./jsonUtils-b6068079.js');
require('./reactiveUtils-ef5dccea.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.FeatureTileTree3DDebugger=class extends TileTreeDebugger.b{constructor(t){super(t),this.watchUpdatingTracking=new HandleOwner.l,this.handles=new request.u;}initialize(){this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(()=>this.update()),2);}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy();}getTiles(){const t=t=>{const[e,r,s]=t.lij;return geometry.v.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e,r,s))};return this.view.featureTiles.tiles.toArray().sort(((t,e)=>t.loadPriority-e.loadPriority)).map((e=>({...e,geometry:t(e)})))}};request.e([request.d({readOnly:!0})],exports.FeatureTileTree3DDebugger.prototype,"watchUpdatingTracking",void 0),request.e([request.d({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],exports.FeatureTileTree3DDebugger.prototype,"updating",void 0),exports.FeatureTileTree3DDebugger=request.e([request.i("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],exports.FeatureTileTree3DDebugger);const p=exports.FeatureTileTree3DDebugger;

exports.default = p;
