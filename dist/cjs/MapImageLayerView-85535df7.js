'use strict';

const request = require('./messageBundle-8be88d04.js');
const OperationalLayer = require('./OperationalLayer-853649aa.js');
const ExportImageParameters = require('./ExportImageParameters-c9c5796e.js');
const drapedUtils = require('./drapedUtils-2fa2770f.js');
const opacityUtils = require('./opacityUtils-f2e4b347.js');
const popupUtils = require('./popupUtils-454e6531.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new ExportImageParameters.c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new request.s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const p=this.get("view.scale"),i=[],l=async e=>{const r=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r=popupUtils.d(e,{...s,defaultPopupTemplateEnabled:!1});request.r(r)&&i.unshift({sublayer:e,popupTemplate:r});}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const y=i.map((async({sublayer:r,popupTemplate:o})=>{await r.load().catch((()=>{}));const a=r.createQuery(),p=request.r(s)?s.event:null,i=drapedUtils.s({renderer:r.renderer,event:p}),l=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=l,a.outFields=await popupUtils.t(r,o);const u=await this._loadArcadeModules(o);u&&u.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=l.width/i);return (await r.queryFeatures(a)).features}));return (await request.T(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return opacityUtils.a()}};return request.e([request.d()],y.prototype,"exportImageParameters",void 0),request.e([request.d({readOnly:!0})],y.prototype,"exportImageVersion",null),request.e([request.d()],y.prototype,"layer",void 0),request.e([request.d()],y.prototype,"suspended",void 0),request.e([request.d(OperationalLayer.g)],y.prototype,"timeExtent",void 0),y=request.e([request.i("esri.views.layers.MapImageLayerView")],y),y};

exports.c = c;
