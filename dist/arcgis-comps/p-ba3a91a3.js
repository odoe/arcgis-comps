import{v as e,e as t,d as i,bp as r,i as s,ae as n,a6 as o,bb as l,bq as a}from"./p-7b6f6c18.js";const d=new e({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});let u=class extends o{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};t([i({type:String,json:{write:!0}})],u.prototype,"deviationUnit",void 0),t([i({json:{read:{reader:e=>e?e.map((e=>r(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],u.prototype,"geometries",void 0),t([i({type:Number,json:{write:!0}})],u.prototype,"maxDeviation",void 0),u=t([s("esri.rest.support.GeneralizeParameters")],u),u.from=n(u);const c=u,m=new e({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function p(e){const{geometries:t,deviationUnit:i,maxDeviation:r}=e.toJSON(),s={maxDeviation:r};return t&&t.length&&(s.geometries=JSON.stringify({geometryType:l(t[0]),geometries:t}),s.sr=JSON.stringify(t[0].spatialReference)),m.write(i,s,"deviationUnit"),s}let y=class extends o{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};t([i({type:String,json:{write:!0}})],y.prototype,"calculationType",void 0),t([i({type:Boolean,json:{write:!0}})],y.prototype,"geodesic",void 0),t([i({json:{write:!0}})],y.prototype,"lengthUnit",void 0),t([i({type:[a],json:{read:{reader:e=>e?e.map((e=>r(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],y.prototype,"polylines",void 0),y=t([s("esri.rest.support.LengthsParameters")],y),y.from=n(y);const f=y,w=new e({preserveShape:"preserve-shape"});function v(e){const{polylines:t,lengthUnit:i,geodesic:r,calculationType:s}=e.toJSON(),n={};n.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return n.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),i&&(n.lengthUnit=i),r&&(n.geodesic=r),s&&(n.calculationType=w.toJSON(s)),n}let g=class extends o{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};t([i({type:Number,json:{write:!0}})],g.prototype,"bevelRatio",void 0),t([i({json:{read:{reader:e=>e?e.map((e=>r(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],g.prototype,"geometries",void 0),t([i({type:Number,json:{write:!0}})],g.prototype,"offsetDistance",void 0),t([i({type:String,json:{write:!0}})],g.prototype,"offsetHow",void 0),t([i({type:String,json:{write:!0}})],g.prototype,"offsetUnit",void 0),g=t([s("esri.rest.support.OffsetParameters")],g),g.from=n(g);const h=g,S=new e({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),j=new e({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function R(e){const{geometries:t,bevelRatio:i,offsetDistance:r,offsetHow:s,offsetUnit:n}=e.toJSON(),o={bevelRatio:i,offsetDistance:r};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:l(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),s&&(o.offsetHow=S.toJSON(s)),n&&(o.offsetUnit=j.toJSON(n)),o}let G=class extends o{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};t([i({json:{read:{reader:e=>e?e.map((e=>r(e))):null},write:{writer:(e,t)=>{t.geometries1=e.map((e=>e.toJSON()))}}}})],G.prototype,"geometries1",void 0),t([i({json:{read:{reader:e=>e?e.map((e=>r(e))):null},write:{writer:(e,t)=>{t.geometries2=e.map((e=>e.toJSON()))}}}})],G.prototype,"geometries2",void 0),t([i({type:String,json:{write:!0}})],G.prototype,"relation",void 0),t([i({type:String,json:{write:!0}})],G.prototype,"relationParameter",void 0),G=t([s("esri.rest.support.RelationParameters")],G),G.from=n(G);const x=G,O=new e({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function N(e){const{geometries1:t,geometries2:i,relation:r,relationParameter:s}=e.toJSON(),n={};if(t&&t.length){n.geometries1=JSON.stringify({geometryType:l(t[0]),geometries:t});const e=t[0].spatialReference;n.sr=e.wkid?e.wkid:JSON.stringify(e)}return i&&i.length>0&&(n.geometries2=JSON.stringify({geometryType:l(i[0]),geometries:i})),r&&(n.relation=O.toJSON(r)),s&&(n.relationParam=s),n}let b=class extends o{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};t([i({type:String,json:{write:!0}})],b.prototype,"extendHow",void 0),t([i({type:[a],json:{read:{reader:e=>e?e.map((e=>r(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],b.prototype,"polylines",void 0),t([i({json:{read:{reader:e=>e?r(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],b.prototype,"trimExtendTo",void 0),b=t([s("esri.rest.support.TrimExtendParameters")],b),b.from=n(b);const T=b,D=new e({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function J(e){const{extendHow:t,polylines:i,trimExtendTo:r}=e.toJSON(),s={};return s.extendHow=D.toJSON(t),i&&i.length&&(s.polylines=JSON.stringify(i),s.sr=JSON.stringify(i[0].spatialReference)),r&&(s.trimExtendTo=JSON.stringify(r)),s}export{d as _,c as a,R as b,x as c,N as d,T as e,J as f,h as m,f as n,v as o,p as r}