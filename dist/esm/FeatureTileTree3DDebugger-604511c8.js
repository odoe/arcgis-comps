import { u, e, d, i } from './messageBundle-f75b4090.js';
import { v } from './geometry-7e07b1ba.js';
import { b } from './TileTreeDebugger-f912b010.js';
import { l } from './HandleOwner-88326c19.js';
import './index-b157fcf2.js';
import './Color-d1b9b54f.js';
import './colorUtils-37750ea3.js';
import './mathUtils-e16f9389.js';
import './common-d5b993de.js';
import './Graphic-3961df6c.js';
import './PopupTemplate-6e5ecad2.js';
import './opacityUtils-5e864561.js';
import './enumeration-d3301938.js';
import './Identifiable-da047c47.js';
import './symbols-b414aa72.js';
import './Symbol-cad56b52.js';
import './screenUtils-9bb7e30c.js';
import './aaBoundingBox-876621e6.js';
import './aaBoundingRect-9468599b.js';
import './persistableUrlUtils-40bbec67.js';
import './Portal-c5cfa317.js';
import './jsonUtils-13b1f6fd.js';
import './reactiveUtils-8f9c3a3d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends b{constructor(t){super(t),this.watchUpdatingTracking=new l,this.handles=new u;}initialize(){this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(()=>this.update()),2);}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy();}getTiles(){const t=t=>{const[e,r,s]=t.lij;return v.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e,r,s))};return this.view.featureTiles.tiles.toArray().sort(((t,e)=>t.loadPriority-e.loadPriority)).map((e=>({...e,geometry:t(e)})))}};e([d({readOnly:!0})],n.prototype,"watchUpdatingTracking",void 0),e([d({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],n.prototype,"updating",void 0),n=e([i("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],n);const p=n;

export default p;
export { n as FeatureTileTree3DDebugger };
