'use strict';

const request = require('./MapView-1195e7f1.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-527cbab1.js');
require('./index-b630e408.js');
require('./EffectList-c2e3d9b4.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-870ab467.js');
require('./Container-7c02556c.js');
require('./schemaUtils-60fb47fc.js');
require('./Utils-cf62b8df.js');
require('./Texture-51894e1f.js');
require('./MaterialKey-a9d25bbc.js');
require('./visualVariablesUtils-35b3c097.js');
require('./CIMSymbolHelper-5119d47d.js');
require('./Rect-8ca00bae.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-34c12ff0.js');
require('./cimAnalyzer-a0ed6247.js');
require('./quantizationUtils-6e32af1f.js');
require('./devEnvironmentUtils-2fe58900.js');
require('./MD5-e5fc0526.js');
require('./popupUtils-1e401adb.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-fe90cf84.js');
require('./drapedUtils-bc0642dd.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends FeatureLayerView2D['default']{initialize(){this.handles.add([request.i$3(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=request.r(s)?s:(new request.y$17).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=request.e([request.i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

exports.default = n;
