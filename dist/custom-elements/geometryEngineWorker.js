import { k } from './geometryEngineJSON.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return (0, k[e.operation])(...e.parameters)}

export { e as executeGEOperation };
