'use strict';

const request = require('./messageBundle-312ceb47.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(r){return "portalItem"in r}const i=i=>{let o=class extends i{get apiKey(){var r;return this._isOverridden("apiKey")?this._get("apiKey"):t(this)?null==(r=this.portalItem)?void 0:r.apiKey:null}set apiKey(r){null!=r?this._override("apiKey",r):(this._clearOverride("apiKey"),this.clear("apiKey","user"));}};return request.e([request.d({type:String})],o.prototype,"apiKey",null),o=request.e([request.i("esri.layers.mixins.APIKeyMixin")],o),o};

exports.i = i;