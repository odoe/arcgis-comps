'use strict';

const request = require('./messageBundle-8be88d04.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const popupUtils = require('./popupUtils-454e6531.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=c=>{let u=class extends c{_validateFetchPopupFeatures(e){const{layer:s}=this,{popupEnabled:t}=s;if(!t)return new request.s("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s});return popupUtils.d(s,e)?void 0:new request.s("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,r){const t=this._validateFetchPopupFeatures(r);if(t)return Promise.reject(t);const c=request.r(r)?r.clientGraphics:null;if(!c||0===c.length)return Promise.resolve([]);const u="scene"===this.layer.type&&request.r(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,n=opacityUtils.I(this.layer.fieldsIndex,await popupUtils.t(u,popupUtils.d(this.layer,r)));await this.prepareFetchPopupFeatures(n);const l=new Set,h=[],y=[];for(const s of c)opacityUtils.me(n,s,l)?y.push(s):h.push(s);return 0===y.length?Promise.resolve(h):this.whenGraphicAttributes(y,[...l]).catch((()=>y)).then((e=>h.concat(e)))}};return u=request.e([request.i("esri.views.3d.layers.support.PopupSceneLayerView")],u),u};

exports.c = c;
