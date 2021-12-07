'use strict';

const mat3 = require('./mat3-1d3e0d51.js');
const DisplayObject = require('./DisplayObject-573912c8.js');
const TileKey = require('./TileKey-d800cfb2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends DisplayObject.a{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new TileKey.e(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;mat3.s(h,a,0,0,0,l,0,o,n,1),mat3.i(this.transforms.dvs,i.displayViewMat3,h);}}

exports.r = r;
