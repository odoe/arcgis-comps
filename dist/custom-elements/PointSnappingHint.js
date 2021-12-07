import { ll as s$1, lm as i } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends s$1{constructor(t){super(),this.point=t;}equals(n){return n instanceof s&&i(this.point,n.point)}}

export { s };
