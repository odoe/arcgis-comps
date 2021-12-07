'use strict';

const request = require('./messageBundle-8be88d04.js');
const drapedUtils = require('./drapedUtils-2fa2770f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new request.s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));if("tile"!==a.type)return Promise.reject(new request.s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}));const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return request.T(c.map((async r=>{const o=r.createQuery(),a=request.r(s)?s.event:null,i=drapedUtils.s({renderer:r.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r.popupTemplate.getRequiredFields();return (await r.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return request.e([request.d()],c.prototype,"layer",void 0),c=request.e([request.i("esri.layers.mixins.TileLayerView")],c),c};

exports.i = i;
