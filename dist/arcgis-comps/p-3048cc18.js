import{m as e,r}from"./p-9ae46e68.js";import{a as t}from"./p-c7a0a732.js";import{e as a,s,t as n}from"./p-b2d0e2de.js";import{a2 as c,aJ as o}from"./p-566b0715.js";import{e as i}from"./p-db87794e.js";const l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this.options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new i}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||c(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const r=o(this.options.sourceSpatialReference)/o(e.spatialReference);if(1!==r)for(const t of e.features){if(!a(t))continue;const e=t.geometry.coords;for(let t=2;t<e.length;t+=3)e[t]*=r}}addFeature(e,r){e.features.push(r)}createFeature(){return new s}createSpatialReference(){return{wkid:0}}createGeometry(){return new n}addField(e,r){e.fields.push(r)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,r)=>e+r),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,r){e.coords[this._coordinatePtr++]=r}addCoordinatePoint(e,r){e.coords.push(r)}addLength(e,r){e.lengths.push(r)}addQueryGeometry(e,r){e.queryGeometry=r.queryGeometry,e.queryGeometryType=r.queryGeometryType}createPointGeometry(){return new n}}const f=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],y=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],p=["upperLeft","lowerLeft"];function b(e){return e>=f.length?null:f[e]}function k(e){return e>=y.length?null:y[e]}function d(e){return e>=p.length?null:p[e]}function T(e,r){return r>=e.geometryTypes.length?null:e.geometryTypes[r]}function h(e,r,t){const a=r.createPointGeometry(t);for(;e.next();)switch(e.tag()){case 3:{const t=e.getUInt32(),s=e.pos()+t;let n=0;for(;e.pos()<s;)r.addCoordinatePoint(a,e.getSInt64(),n++);break}default:e.skip()}return a}function m(e,r,t){const a=r.createGeometry(t),s=2+(t.hasZ?1:0)+(t.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const t=e.getUInt32(),s=e.pos()+t;let n=0;for(;e.pos()<s;)r.addLength(a,e.getUInt32(),n++);break}case 3:{const t=e.getUInt32(),n=e.pos()+t;let c=0;for(r.allocateCoordinates(a);e.pos()<n;)r.addCoordinate(a,e.getSInt64(),c),c++,c===s&&(c=0);break}default:e.skip()}return a}function q(e){const r=new n;let t="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const t=e.getUInt32(),a=e.pos()+t;for(;e.pos()<a;)r.lengths.push(e.getUInt32());break}case 3:{const t=e.getUInt32(),a=e.pos()+t;for(;e.pos()<a;)r.coords.push(e.getSInt64());break}case 1:t=l[e.getEnum()];break;default:e.skip()}return{queryGeometry:r,queryGeometryType:t}}function w(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function F(e){const r={type:b(0)};for(;e.next();)switch(e.tag()){case 1:r.name=e.getString();break;case 2:r.type=b(e.getEnum());break;case 3:r.alias=e.getString();break;case 4:r.sqlType=k(e.getEnum());break;default:e.skip();break;case 6:r.defaultValue=e.getString()}return r}function G(e){const r={};for(;e.next();)switch(e.tag()){case 1:r.name=e.getString();break;case 2:r.isSystemMaintained=e.getBool();break;default:e.skip()}return r}function g(e,r,t,a){const s=r.createFeature(t);let n=0;for(;e.next();)switch(e.tag()){case 1:{const r=a[n++].name;s.attributes[r]=e.processMessage(w);break}case 2:s.geometry=e.processMessageWithArgs(m,r,t);break;case 4:s.centroid=e.processMessageWithArgs(h,r,t);break;default:e.skip()}return s}function D(e){const r=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:r[0]=e.getDouble();break;case 2:r[1]=e.getDouble();break;case 4:r[2]=e.getDouble();break;case 3:r[3]=e.getDouble();break;default:e.skip()}return r}function I(e){const r=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:r[0]=e.getDouble();break;case 2:r[1]=e.getDouble();break;case 4:r[2]=e.getDouble();break;case 3:r[3]=e.getDouble();break;default:e.skip()}return r}function P(e){const r={originPosition:d(0)};for(;e.next();)switch(e.tag()){case 1:r.originPosition=d(e.getEnum());break;case 2:r.scale=e.processMessage(D);break;case 3:r.translate=e.processMessage(I);break;default:e.skip()}return r}function L(e){const r={};for(;e.next();)switch(e.tag()){case 1:r.shapeAreaFieldName=e.getString();break;case 2:r.shapeLengthFieldName=e.getString();break;case 3:r.units=e.getString();break;default:e.skip()}return r}function S(e,r){const t=r.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:t.wkid=e.getUInt32();break;case 5:t.wkt=e.getString();break;case 2:t.latestWkid=e.getUInt32();break;case 3:t.vcsWkid=e.getUInt32();break;case 4:t.latestVcsWkid=e.getUInt32();break;default:e.skip()}return t}function V(e,r){const t=r.createFeatureResult();t.geometryType=T(r,0);let a=!1;for(;e.next();)switch(e.tag()){case 1:t.objectIdFieldName=e.getString();break;case 3:t.globalIdFieldName=e.getString();break;case 4:t.geohashFieldName=e.getString();break;case 5:t.geometryProperties=e.processMessage(L);break;case 7:t.geometryType=T(r,e.getEnum());break;case 8:t.spatialReference=e.processMessageWithArgs(S,r);break;case 10:t.hasZ=e.getBool();break;case 11:t.hasM=e.getBool();break;case 12:t.transform=e.processMessage(P);break;case 9:{const r=e.getBool();t.exceededTransferLimit=r;break}case 13:r.addField(t,e.processMessage(F));break;case 15:a||(r.prepareFeatures(t),a=!0),r.addFeature(t,e.processMessageWithArgs(g,r,t,t.fields));break;case 2:t.uniqueIdField=e.processMessage(G);break;default:e.skip()}return r.finishFeatureResult(t),t}function j(e,t){const a={};let s=null;for(;e.next();)switch(e.tag()){case 4:s=e.processMessageWithArgs(q);break;case 1:a.featureResult=e.processMessageWithArgs(V,t);break;default:e.skip()}return r(s)&&a.featureResult&&t.addQueryGeometry(a,s),a}function B(r,a){const s=function(r,a){try{const e=2,s=new t(new Uint8Array(r),new DataView(r)),n={};for(;s.next();)s.tag()===e?n.queryResult=s.processMessageWithArgs(j,a):s.skip();return n}catch(r){throw new e("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:r})}}(r,a),n=s.queryResult.featureResult,c=s.queryResult.queryGeometry,o=s.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const r of n.features)r.attributes&&(r.objectId=r.attributes[e])}return n&&(n.queryGeometry=c,n.queryGeometryType=o),n}export{u as a,b as c,P as q,B as t}