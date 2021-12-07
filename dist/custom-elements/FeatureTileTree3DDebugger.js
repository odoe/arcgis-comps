import { dH as l, aE as u, bX as v, e, d, i } from './index.js';
import { b } from './TileTreeDebugger.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends b{constructor(t){super(t),this.watchUpdatingTracking=new l,this.handles=new u;}initialize(){this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(()=>this.update()),2);}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy();}getTiles(){const t=t=>{const[e,r,s]=t.lij;return v.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e,r,s))};return this.view.featureTiles.tiles.toArray().sort(((t,e)=>t.loadPriority-e.loadPriority)).map((e=>({...e,geometry:t(e)})))}};e([d({readOnly:!0})],n.prototype,"watchUpdatingTracking",void 0),e([d({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],n.prototype,"updating",void 0),n=e([i("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],n);const p=n;

export default p;
export { n as FeatureTileTree3DDebugger };
