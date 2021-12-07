'use strict';

const request = require('./messageBundle-8be88d04.js');
const Graphic = require('./Graphic-0aff6059.js');
const Portal = require('./Portal-8d16604d.js');
const HandleOwner = require('./HandleOwner-9c4c158c.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
request.s$1.getLogger("esri.core.support.OwningCollection");let m=class extends(HandleOwner.a(request.S)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{request.t$1(e.item)&&e.preventDefault();})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))]);}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll());}_ownAll(){for(const e of this.items)this._own(e);}_releaseAll(){for(const e of this.items)this._release(e);}_createNewInstance(e){return this.itemType?new(request.S.ofType(this.itemType.Type))(e):new request.S(e)}};function a(e,t){return {type:e,cast:Portal.t,set(s){const r=Portal.n(s,this._get(t),e);r.owner=this,this._set(t,r);}}}request.e([request.d()],m.prototype,"owner",null),m=request.e([request.i("esri.core.support.OwningCollection")],m);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
exports.c=class extends m{_own(r){r.layer&&"remove"in r.layer&&r.layer!==this.owner&&r.layer.remove(r),r.layer=this.owner;}_release(r){r.layer===this.owner&&(r.layer=null);}};request.e([request.n$3({Type:Graphic.h,ensureType:request.b(Graphic.h)})],exports.c.prototype,"itemType",void 0),exports.c=request.e([request.i("esri.support.GraphicsCollection")],exports.c);

exports.a = a;
