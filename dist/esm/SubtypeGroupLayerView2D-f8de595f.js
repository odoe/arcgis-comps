import { e, i, U as i$1, W as r, hd as y } from './MapView-2c43b6d4.js';
import X from './FeatureLayerView2D-baceebf7.js';
import './index-41925fe8.js';
import './EffectList-02a3200c.js';
import './clickToleranceUtils-b5cfb431.js';
import './definitions-6a5ca2d9.js';
import './LayerView-a385f1f9.js';
import './Container-1cf746dd.js';
import './schemaUtils-57c391a2.js';
import './Utils-c57a8ada.js';
import './Texture-521e6007.js';
import './MaterialKey-baaa6a67.js';
import './visualVariablesUtils-dedba3c5.js';
import './CIMSymbolHelper-56f84ff0.js';
import './Rect-988189d5.js';
import './number-851eb983.js';
import './GeometryUtils-d5113f23.js';
import './cimSymbolUtils-6202203c.js';
import './cimAnalyzer-452c2270.js';
import './quantizationUtils-3a07a999.js';
import './devEnvironmentUtils-872cccb2.js';
import './MD5-6027098a.js';
import './popupUtils-3d405c09.js';
import './floorFilterUtils-a09da11b.js';
import './RefreshableLayerView-15cc8635.js';
import './drapedUtils-2d6d5a46.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends X{initialize(){this.handles.add([i$1(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=r(s)?s:(new y).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

export default n;
