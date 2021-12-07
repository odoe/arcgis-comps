import { s, i } from './mat3-6a23d9ad.js';
import { a } from './DisplayObject-d9d14391.js';
import { e } from './TileKey-284eee69.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends a{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i$1,e){const r=e/(i$1.resolution*i$1.pixelRatio),h=this.transforms.tileMat3,[o,n]=i$1.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;s(h,a,0,0,0,l,0,o,n,1),i(this.transforms.dvs,i$1.displayViewMat3,h);}}

export { r };
