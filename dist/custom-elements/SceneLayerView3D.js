import { L as s, fy as p$1, r, t, j6 as o$1, dN as l, dP as b, er as f, h, e, d as d$2, gv as t$1, gt as y, i as i$1 } from './index.js';
import { WhereClause as m } from './WhereClause.js';
import { $ as $e, u } from './I3SMeshView3D.js';
import { o, c as c$1, s as s$1, i, a as i$2 } from './SceneLayerView.js';
import { O as O$1, d, a as d$1, n } from './I3SQueryFeatureStore.js';
import { d as de } from './I3SUtil.js';
import { p } from './DefinitionExpressionSceneLayerView.js';
import { c } from './PopupSceneLayerView.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Q=s.getLogger("esri.views.3d.layers.SceneLayerView3D"),q=i$2();let D=class extends($e(p(c(p$1(o))))){constructor(){super(...arguments),this.type="scene-layer-3d",this.lodFactor=1,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null;}get filter(){return r(this.viewFilter)?this.viewFilter.filter:null}set filter(e){!t(e)&&O$1.checkSupport(e)?r(this.viewFilter)?this.viewFilter.filter=e:this.viewFilter=new O$1({filter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):this.viewFilter=null;}get requiredFields(){var e,t;return null!=(e=null==(t=this.fieldsHelper)?void 0:t.requiredFields)?e:[]}get floorFilterClause(){const e=o$1(this);return r(e)?m.create(e,this.layer.fieldsIndex):null}get lodCrossfadeinDuration(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)?e:0}get lodCrossfadeoutDuration(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)?e:0}get lodCrossfadeUncoveredDuration(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)?e:0}initialize(){this.fieldsHelper=new c$1({layerView:this}),this.updatingHandles.add(this.layer,"rangeInfos",(e=>this._rangeInfosChanged(e)),2),this.updatingHandles.add(this.layer,"renderer",(e=>this.updatingHandles.addPromise(this._rendererChange(e))),2);for(const e of ["parsedDefinitionExpression","filter","viewFilter.parsedWhereClause","viewFilter.parsedGeometry","viewFilter.sortedObjectIds","floorFilterClause"])this.updatingHandles.add(this,e,(()=>this._filterChange()));for(const e of ["filter","viewFilter.parsedGeometry"])this.updatingHandles.add(this,e,(()=>this._geometryFilterChange()));this.handles.add(this.layer.on("apply-edits",(e=>this.updatingHandles.addPromise(e.result)))),this.handles.add(this.layer.on("edits",(e=>this._handleEdits(e))));}destroy(){this.fieldsHelper=l(this.fieldsHelper);}_rangeInfosChanged(e){null!=e&&e.length>0&&Q.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.");}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return r(this.filter)?this.filter.createQuery(e):new b(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null==t?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null==t?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null==t?void 0:t.signal).then((e=>{if(null==e||!e.features)return e;const t=this.layer;for(const r of e.features)r.layer=t,r.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null==t?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=u(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new d({layerView:this,priority:f.FEATURE_QUERY_ENGINE,spatialIndex:new d$1({featureAdapter:new n({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,2),getFeatureExtent:e,sourceSpatialReference:de(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof b){const{set:r,handle:i}=t.acquireSet();return this.queryObjectIds(e).then((e=>t.setFeatureIds(r,e))),i}return super.highlight(e)}createInteractiveEditSession(e){return s$1(this.attributeEditingContext,e)}_createLayerGraphic(e){const r=new h(null,null,e);return r.layer=this.layer,r.sourceLayer=this.layer,r}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}getFilters(){const e=super.getFilters();return this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),r(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}_ensureQuery(e){return this._addDefinitionExpressionToQuery(t(e)?this.createQuery():b.from(e))}get attributeEditingContext(){return {sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes((t=>r(t)?e(t.node,t.featureIds):null)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){i(this.attributeEditingContext,e);}get hasGeometryFilter(){const e=this.viewFilter;return r(e)&&r(e.parsedGeometry)}computeNodeFiltering(e){const t$1=this.viewFilter;return t(t$1)||t$1.isMBSGeoemtryVisible(e,this.view.spatialReference,this._controller.crsIndex)?0:1}};e([d$2({aliasOf:"layer"})],D.prototype,"i3slayer",void 0),e([d$2()],D.prototype,"suspended",void 0),e([d$2(t$1)],D.prototype,"updatingProgress",void 0),e([d$2({type:y})],D.prototype,"filter",null),e([d$2()],D.prototype,"viewFilter",void 0),e([d$2(q.requiredFields)],D.prototype,"requiredFields",null),e([d$2(q.availableFields)],D.prototype,"availableFields",void 0),e([d$2()],D.prototype,"fieldsHelper",void 0),e([d$2()],D.prototype,"floorFilterClause",null),e([d$2({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],D.prototype,"lodFactor",void 0),e([d$2({readOnly:!0,aliasOf:"_controller.updatingProgress"})],D.prototype,"updatingProgressValue",void 0),D=e([i$1("esri.views.3d.layers.SceneLayerView3D")],D);const O=D;

export default O;
