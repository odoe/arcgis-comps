import { oU as e, oV as m, oW as e$1 } from './index.js';
import { s } from './PointSnappingHint.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends e{constructor(n){super({...n,constraint:new m(n.coordinateHelper,n.targetPoint)});}get hints(){return [new s(this.targetPoint)]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,r){switch(o.type){case"edge":return new e$1({coordinateHelper:r,edgeStart:r.pointToVector(o.start),edgeEnd:r.pointToVector(o.end),targetPoint:r.pointToVector(o.target),objectId:o.objectId});case"vertex":return new i({coordinateHelper:r,targetPoint:r.pointToVector(o.target),objectId:o.objectId})}}

export { o };
