'use strict';

const request = require('./messageBundle-312ceb47.js');
const HandleOwner = require('./HandleOwner-f254dc86.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends(HandleOwner.a(request.S$1)){constructor(t){super(t),this.getCollections=null;}initialize(){this.handles.add(request.l$3((()=>this.refresh())));}destroy(){this.getCollections=null;}refresh(){const t=request.r(this.getCollections)?this.getCollections():null;if(request.t(t))return void this.removeAll();let o=0;for(const s of t)request.r(s)&&(o=this._processCollection(o,s));this.splice(o,this.length);}_createNewInstance(t){return new request.S$1(t)}_processCollection(t,o){if(!o)return t;const s=this.itemFilterFunction?this.itemFilterFunction:t=>!!t;for(const e of o)if(e){if(s(e)){const o=this.indexOf(e,t);o>=0?o!==t&&this.reorder(e,t):this.add(e,t),++t;}if(this.getChildrenFunction){const o=this.getChildrenFunction(e);if(Array.isArray(o))for(const s of o)t=this._processCollection(t,s);else t=this._processCollection(t,o);}}return t}};request.e([request.d()],l.prototype,"getCollections",void 0),request.e([request.d()],l.prototype,"getChildrenFunction",void 0),request.e([request.d()],l.prototype,"itemFilterFunction",void 0),l=request.e([request.i("esri.core.CollectionFlattener")],l);const p=l;

exports.p = p;
