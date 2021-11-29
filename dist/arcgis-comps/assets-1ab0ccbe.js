import { g as s, E, D, o as t, a as s$1 } from './cast-e5ea2533.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=s.getLogger("esri.assets");function n(s,o){return E(a(s),o)}function a(t$1){if(!t.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$1("assets:path-not-set","config.assetsPath is not set");return D(t.assetsPath,t$1)}

export { a };
