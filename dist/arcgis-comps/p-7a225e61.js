import{s as t}from"./p-7ec84656.js";import{c as e,af as s,K as r,r as i,A as n,V as h}from"./p-e58503d5.js";import{i as o}from"./p-75cd09f2.js";import{O as u}from"./p-f94762ac.js";import{m as a,a as c}from"./p-889f7a78.js";import{p as d}from"./p-765e6c28.js";import{A as p}from"./p-c0f84cd3.js";function l(t,s,r){t.referencesGeometry();const i=s.readArcadeFeature();try{return t.evaluate({...r,$feature:i})}catch(t){return e.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",t),null}}const m=import("./p-1a2ab148.js");class f{constructor(t,e){this._canCacheExpressionValue=!1,this._sourceInfo=t,this._bitsets={computed:e.getBitset(e.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(t,e){const i=a(this._schema,e);if(this._schema=e,!e||s(i)||!c(i,"attributes"))return;r("esri-2d-update-debug")&&console.debug("Applying Update - Store:",i),this._bitsets.computed.clear(),t.targets[e.name]=!0;const n=e.attributes,h=[],o=[];for(const t in n){const e=n[t];switch(e.type){case"field":break;case"expression":h.push(this._createArcadeComputedField(e));break;case"label-expression":h.push(this._createLabelArcadeComputedField(e));break;case"statistic":o.push(e)}}this._computedFields=await Promise.all(h),this._canCacheExpressionValue=!this._computedFields.some((t=>"expression"===t.type&&t.expression.referencesScale())),this._statisticFields=o}setComputedAttributes(t,e,s,r){const i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(s)){i.set(s);for(const i of this._computedFields){const n=this._evaluateField(e,i,r);switch(i.resultType){case"numeric":t.setComputedNumericAtIndex(s,i.fieldIndex,n);break;case"string":t.setComputedStringAtIndex(s,i.fieldIndex,n)}}}}async _createArcadeComputedField(t){const e=this._sourceInfo.spatialReference,s=this._sourceInfo.fieldsIndex;return{...t,expression:await d(t.valueExpression,e,s)}}async _createLabelArcadeComputedField(t){const e=this._sourceInfo.spatialReference,s=this._sourceInfo.fieldsIndex,{createLabelFunction:r}=await m,i=await r(t.label,s,e);return{...t,builder:i}}_evaluateField(t,e,s){switch(e.type){case"label-expression":{const s=t.readArcadeFeature();return e.builder.evaluate(s)||""}case"expression":{const{expression:r}=e;return l(r,t,{$view:{scale:s}})}}}}class g extends p{constructor(t,e){super(p.createInstance()),this._currentIndex=-1,this._reader=t,this._indices=e}static from(t,e){return new g(t.copy(),e)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const t=new g(this._reader.copy(),this._indices);return t._currentIndex=this._currentIndex,t}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(t){this._reader.setArcadeSpatialReference(t)}attachStorage(t){this._reader.attachStorage(t)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(t){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this._reader.setComputedNumericAtIndex(e,0)}getComputedString(t){return this._reader.getComputedStringAtIndex(0)}setComputedString(t,e){return this._reader.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._reader.getComputedNumericAtIndex(t)}setComputedNumericAtIndex(t,e){this._reader.setComputedNumericAtIndex(t,e)}getComputedStringAtIndex(t){return this._reader.getComputedStringAtIndex(t)}setComputedStringAtIndex(t,e){return this._reader.setComputedStringAtIndex(t,e)}transform(t,e,s,r){const i=this.copy();return i._reader=this._reader.transform(t,e,s,r),i}readAttribute(t,e=!1){return this._reader.readAttribute(t,e)}readAttributes(){return this._reader.readAttributes()}joinAttributes(t){return this._reader.joinAttributes(t)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(t){return this.readAttribute(t,!0)}hasField(t){return this._reader.hasField(t)}setField(t,e){return this._reader.setField(t,e)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(t){return this._reader.setDisplayId(t)}getGroupId(){return this._reader.getGroupId()}setGroupId(t){return this._reader.setGroupId(t)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(t){return this._reader.setIndex(t)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(t,e){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}function y(t,e){return t<<16|e}function b(t){return(4294901760&t)>>>16}function x(t){return 65535&t}const w={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:t=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:t=>t.readCentroid()};class I extends f{constructor(e,s,r){super(e,s),this.featureAdapter=w,this.events=new i,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new t(50),this._index=o(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this._storage=s,this.mode=r}get storage(){return this._storage}get storeStatistics(){let t=0,e=0,s=0;return this.forEach((r=>{const i=r.readGeometry();i&&(e+=i.isPoint?1:i.lengths.reduce(((t,e)=>t+e),0),s+=i.isPoint?1:i.lengths.length,t+=1)})),{featureCount:t,vertexCount:e,ringCount:s}}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(t,e){if(s(e.addOrUpdate))return e;if(e.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const s=e.addOrUpdate.getCursor();for(;s.next();){const e=s.getDisplayId();this.setComputedAttributes(this._storage,s,e,t.scale)}return e}this._featureSetsByInstance.set(e.addOrUpdate.instance,e.addOrUpdate);const r=e.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,t.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),e}search(t){this._rebuildIndex();const e=t.id,s=this._indexSearchCache.find((t=>t.tileId===e));if(n(s))return s.readers;const r=new Map,i=this._searchIndex(t.bounds),h=[];for(const t of i){const e=this._storage.getInstanceId(t),s=b(e),i=x(e);r.has(s)||r.set(s,[]),r.get(s).push(i)}return r.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);h.push(g.from(s,t))})),this._indexSearchCache.enqueue({tileId:e,readers:h}),h}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){var r;const t=y(e.instance,e.getIndex()),i=e.getObjectId(),n=null!=(r=this._objectIdToDisplayId.get(i))?r:this._storage.createDisplayId();e.setDisplayId(n),s.setInstanceId(n,t),this._objectIdToDisplayId.set(i,n)}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),r=x(s),i=b(s),n=this._featureSetsByInstance.get(i);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),n.removeAtIndex(r),n.isEmpty&&this._featureSetsByInstance.delete(i),this._spatialIndexInvalid=!0}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),r=this._lookupFeature(s);t(r)}))}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),r=b(s),i=x(s),n=this._getFeatureSet(r);n.setIndex(i),t(n)}))}forEachInBounds(t,e){const s=this._searchIndex(t);for(const t of s){const s=this.lookupFeatureByDisplayId(t,this._storage);e(h(s))}}forEachBounds(t,e,s){this._rebuildIndex();const r=[0,0,0,0];for(const i of t){if(!i.readGeometry())continue;const t=i.getDisplayId();r[0]=this._storage.getXMin(t),r[1]=this._storage.getYMin(t),r[2]=this._storage.getXMax(t),r[3]=this._storage.getYMax(t),e(u(s,r))}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((r,i)=>{t.has(r)||(e.releaseDisplayId(r),s&&s.unsetAttributeData(r),this._objectIdToDisplayId.delete(i))})),this.events.emit("changed")}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s)}))}lookupObjectId(t,e){const r=this.lookupFeatureByDisplayId(t,e);return s(r)?null:r.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=b(e),r=x(e),i=this._getFeatureSet(s);return i?(i.setIndex(r),i):null}_insertFeature(t,e){const s=this._storage,r=t.getObjectId(),i=y(t.instance,t.getIndex());s.getInstanceId(t.getDisplayId());let n=this._objectIdToDisplayId.get(r);n||(n=s.createDisplayId(),this._objectIdToDisplayId.set(r,n),this._spatialIndexInvalid=!0),t.setDisplayId(n),s.setInstanceId(n,i),this.setComputedAttributes(s,t,n,e)}_searchIndex(t){return this._rebuildIndex(),this._index.search({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]})}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e)}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(t){const e=b(t),s=x(t),r=this._getFeatureSet(e);if(!r)return null;const i=r.getCursor();return i.setIndex(s),i}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}export{I as l,f as o,g as r,w as u}