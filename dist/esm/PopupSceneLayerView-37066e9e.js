import { e, i, s, A as r } from './messageBundle-f75b4090.js';
import { I, w as me } from './opacityUtils-5e864561.js';
import { d, t } from './popupUtils-a43f7eb9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=c=>{let u=class extends c{_validateFetchPopupFeatures(e){const{layer:s$1}=this,{popupEnabled:t}=s$1;if(!t)return new s("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s$1});return d(s$1,e)?void 0:new s("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s$1})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,r$1){const t$1=this._validateFetchPopupFeatures(r$1);if(t$1)return Promise.reject(t$1);const c=r(r$1)?r$1.clientGraphics:null;if(!c||0===c.length)return Promise.resolve([]);const u="scene"===this.layer.type&&r(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,n=I(this.layer.fieldsIndex,await t(u,d(this.layer,r$1)));await this.prepareFetchPopupFeatures(n);const l=new Set,h=[],y=[];for(const s of c)me(n,s,l)?y.push(s):h.push(s);return 0===y.length?Promise.resolve(h):this.whenGraphicAttributes(y,[...l]).catch((()=>y)).then((e=>h.concat(e)))}};return u=e([i("esri.views.3d.layers.support.PopupSceneLayerView")],u),u};

export { c };
