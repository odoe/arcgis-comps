import{e as r,d as e,aE as s,a2 as t,i as a,a1 as i,d7 as o,A as n,a0 as l,V as p,Q as c}from"./p-e58503d5.js";import{b as u,u as m,d,c as f,p as y,o as j}from"./p-b2597a08.js";import{v}from"./p-c1cd5521.js";import{e as b}from"./p-7ca40eac.js";import{m as B,v as P}from"./p-b79fcce3.js";import{h as A}from"./p-54330161.js";import{d as g}from"./p-c048b814.js";import{l as h}from"./p-a87cccba.js";import"./p-53bb6ab4.js";import"./p-a9a30646.js";import"./p-dc852195.js";import"./p-a131049b.js";import"./p-a2324023.js";import"./p-93765525.js";import"./p-765e6c28.js";import"./p-8747982c.js";import"./p-8bc9b36a.js";import"./p-7a658388.js";import"./p-e273719b.js";import"./p-74de0937.js";import"./p-2f398ed1.js";import"./p-d3105731.js";import"./p-fb38a9d0.js";import"./p-f94762ac.js";import"./p-ea916a39.js";import"./p-8a919d07.js";import"./p-efbca0ca.js";import"./p-e258f3af.js";function S(r){return r.features.map((e=>{const s=l.fromJSON(r.spatialReference),t=A.fromJSON(e);return p(t.geometry).spatialReference=s,t}))}function k(r){return o(r.features.map((e=>(n(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),g(e.geometry)))))}let w=class extends i{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(r){return k(r)}readPointBarriers(r,e){return k(e.barriers)}readPolylineBarriers(r){return k(r)}readPolygonBarriers(r){return k(r)}readIncidents(r,e){return S(e.saPolylines)}readServiceAreaPolygons(r,e){return S(e.saPolygons)}};r([e({type:[s]})],w.prototype,"facilities",void 0),r([t("facilities")],w.prototype,"readFacilities",null),r([e({type:[u]})],w.prototype,"messages",void 0),r([e({type:[s]})],w.prototype,"pointBarriers",void 0),r([t("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),r([e({type:[B]})],w.prototype,"polylineBarriers",void 0),r([t("polylineBarriers")],w.prototype,"readPolylineBarriers",null),r([e({type:[P]})],w.prototype,"polygonBarriers",void 0),r([t("polygonBarriers")],w.prototype,"readPolygonBarriers",null),r([e({type:[A]})],w.prototype,"serviceAreaPolylines",void 0),r([t("serviceAreaPolylines",["saPolylines"])],w.prototype,"readIncidents",null),r([e({type:[A]})],w.prototype,"serviceAreaPolygons",void 0),r([t("serviceAreaPolygons",["saPolygons"])],w.prototype,"readServiceAreaPolygons",null),w=r([a("esri.rest.support.ServiceAreaSolveResult")],w);const x=w,R=j({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let F=class extends h{constructor(r){super(r),this.url=null}solve(r,e){return async function(r,e,s){const t=[],a=[],i={},o={},n=b(r),{path:l}=n;e.facilities&&e.facilities.features&&m(e.facilities.features,a,"facilities.features",i),e.pointBarriers&&e.pointBarriers.features&&m(e.pointBarriers.features,a,"pointBarriers.features",i),e.polylineBarriers&&e.polylineBarriers.features&&m(e.polylineBarriers.features,a,"polylineBarriers.features",i),e.polygonBarriers&&e.polygonBarriers.features&&m(e.polygonBarriers.features,a,"polygonBarriers.features",i);const p=await v(a);for(const r in i){const e=i[r];t.push(r),o[r]=p.slice(e[0],e[1])}if(d(o,t)){let r=null;try{r=await f(l,e.apiKey,s)}catch{}r&&!r.hasZ&&y(o,t)}for(const r in o)o[r].forEach(((s,t)=>{e.get(r)[t].geometry=s}));const u={...s,query:{...n.query,...R.toQueryParams(e),f:"json"}},{data:j}=await c(`${l}/solveServiceArea`,u);return x.fromJSON(j)}(this.url,r,e)}};r([e()],F.prototype,"url",void 0),F=r([a("esri.tasks.ServiceAreaTask")],F);const I=F;export default I;