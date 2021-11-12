import { D, R } from './unitUtils-b25ae8cb.js';
import { ac as s } from './Graphic-6c72131a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={inches:D(1,"meters","inches"),feet:D(1,"meters","feet"),"us-feet":D(1,"meters","us-feet"),yards:D(1,"meters","yards"),miles:D(1,"meters","miles"),"nautical-miles":D(1,"meters","nautical-miles"),millimeters:D(1,"meters","millimeters"),centimeters:D(1,"meters","centimeters"),decimeters:D(1,"meters","decimeters"),meters:D(1,"meters","meters"),kilometers:D(1,"meters","kilometers"),"decimal-degrees":1/R(1,"meters",s.radius)};

export { m };
