'use strict';

const request = require('./MapView-922b9f1e.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-f94ef7a3.js');
require('./index-57f2cfbb.js');
require('./EffectList-f75e6e29.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-fac949a9.js');
require('./Container-2db43b58.js');
require('./schemaUtils-55d8dba9.js');
require('./Utils-b513a4f3.js');
require('./Texture-1414de91.js');
require('./MaterialKey-c11630fb.js');
require('./visualVariablesUtils-c1cf935c.js');
require('./CIMSymbolHelper-755a0bb9.js');
require('./Rect-8ca00bae.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-dd704063.js');
require('./cimAnalyzer-0ebadbbe.js');
require('./quantizationUtils-f9fa2625.js');
require('./devEnvironmentUtils-1743b65a.js');
require('./MD5-e5fc0526.js');
require('./popupUtils-2d2af1d3.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-e3888316.js');
require('./drapedUtils-de28aa5f.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends FeatureLayerView2D['default']{initialize(){this.handles.add([request.i$3(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=request.r(s)?s:(new request.y$17).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=request.e([request.i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

exports.default = n;
