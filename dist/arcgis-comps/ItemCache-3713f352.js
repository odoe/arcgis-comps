import { h } from './MemCache-bf2be364.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._storage=new h,this._storage.maxSize=e,s&&this._storage.registerRemoveFunc("",s);}put(t,e){this._storage.put(t,e,1,1);}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll();}destroy(){this._storage.destroy();}}

export { e };
