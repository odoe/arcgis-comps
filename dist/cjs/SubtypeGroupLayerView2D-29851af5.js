'use strict';

const request = require('./MapView-1726f571.js');
const FeatureLayerView2D = require('./FeatureLayerView2D-065b7ec9.js');
require('./index-fde8502c.js');
require('./EffectList-c8b0929b.js');
require('./clickToleranceUtils-ad2eeda8.js');
require('./definitions-b4888cc6.js');
require('./LayerView-ab44860f.js');
require('./Container-16ae77e1.js');
require('./schemaUtils-9bd21a56.js');
require('./Utils-e5a61fef.js');
require('./Texture-81e2ece6.js');
require('./MaterialKey-7ad63f3d.js');
require('./visualVariablesUtils-567175e3.js');
require('./CIMSymbolHelper-11b13154.js');
require('./BidiEngine-e033e7c0.js');
require('./number-d65aefed.js');
require('./GeometryUtils-062a82b8.js');
require('./cimSymbolUtils-a5d3a92a.js');
require('./cimAnalyzer-f3efd46b.js');
require('./quantizationUtils-67099620.js');
require('./devEnvironmentUtils-a59d6ef8.js');
require('./MD5-e5fc0526.js');
require('./popupUtils-720b99f0.js');
require('./floorFilterUtils-a9b30733.js');
require('./RefreshableLayerView-bf1c1d9d.js');
require('./drapedUtils-268b2272.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends FeatureLayerView2D['default']{initialize(){this.handles.add([request.i$1(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=request.r(s)?s:(new request.y$17).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=request.e([request.i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

exports.default = n;
