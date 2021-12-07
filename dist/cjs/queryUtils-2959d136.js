'use strict';

const request = require('./messageBundle-8be88d04.js');
const utils = require('./utils-8a0a0870.js');
const enumeration = require('./enumeration-f235fe07.js');
const Graphic = require('./Graphic-0aff6059.js');
const FeatureSet = require('./FeatureSet-8efc5965.js');
const GPMessage = require('./GPMessage-d3ae977e.js');
const geometry = require('./geometry-ef17530a.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$2=request.s$5()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),s=request.s$5()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),r=request.s$5()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),t$1=request.s$5()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"});request.s$5()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"});const n$1=request.s$5()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});request.s$5()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"});request.s$5()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"});const m$2=request.s$5()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$3;let c$4=u$3=class extends request.a$2{constructor(t){super(t),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null;}clone(){return new u$3(request.l$1({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};request.e([request.d({type:[Object],json:{write:!0}})],c$4.prototype,"attributeParameterValues",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"description",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"distanceAttributeName",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"id",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"impedanceAttributeName",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"name",void 0),request.e([request.d({type:[String],json:{write:!0}})],c$4.prototype,"restrictionAttributeNames",void 0),request.e([request.d({type:Number,json:{write:!0}})],c$4.prototype,"simplificationTolerance",void 0),request.e([enumeration.r(i$2)],c$4.prototype,"simplificationToleranceUnits",void 0),request.e([request.d({type:String,json:{write:!0}})],c$4.prototype,"timeAttributeName",void 0),request.e([enumeration.r(m$2)],c$4.prototype,"type",void 0),request.e([request.d({type:Boolean,json:{write:!0}})],c$4.prototype,"useHierarchy",void 0),request.e([enumeration.r(n$1)],c$4.prototype,"uturnAtJunctions",void 0),c$4=u$3=request.e([request.i("esri.rest.support.TravelMode")],c$4);const m$1=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$3=class extends request.a$2{constructor(o){super(o),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null;}};request.e([request.d()],p$3.prototype,"currentVersion",void 0),request.e([request.d()],p$3.prototype,"defaultTravelMode",void 0),request.e([request.d()],p$3.prototype,"directionsLanguage",void 0),request.e([request.d()],p$3.prototype,"directionsSupportedLanguages",void 0),request.e([request.d()],p$3.prototype,"directionsTimeAttribute",void 0),request.e([request.d()],p$3.prototype,"hasZ",void 0),request.e([request.d()],p$3.prototype,"impedance",void 0),request.e([request.d()],p$3.prototype,"networkDataset",void 0),request.e([request.d({type:[m$1]})],p$3.prototype,"supportedTravelModes",void 0),p$3=request.e([request.i("esri.rest.support.NetworkServiceDescription")],p$3);const i$1=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p$2=new request.o$1({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c$3=class extends GPMessage.a{constructor(r){super(r),this.type=null;}};request.e([request.d({type:String,json:{read:p$2.read,write:p$2.write}})],c$3.prototype,"type",void 0),c$3=request.e([request.i("esri.rest.support.NAMessage")],c$3);const a=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e$1=class extends Graphic.h{};request.e([request.d()],e$1.prototype,"events",void 0),request.e([request.d()],e$1.prototype,"strings",void 0),e$1=request.e([request.i("esri.rest.support.DirectionsFeature")],e$1);const p$1=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let u$2=class extends FeatureSet['default']{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null;}readFeatures(e,t){var r;if(!e)return [];const o=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,s=o&&request.k.fromJSON(o);return e.map((e=>{var t,r;const o=this._decompressGeometry(e.compressedGeometry),n=new geometry.m({...o,spatialReference:s}),p=null!=(t=null==(r=e.events)?void 0:r.map((e=>{const{arriveTimeUTC:t,ETA:r,point:{x:o,y:n,z:p},strings:i}=e;return new p$1({geometry:new request.b$2({x:o,y:n,z:p,hasZ:void 0!==p,spatialReference:s}),attributes:{ETA:r,arriveTimeUTC:t},strings:i})})))?t:[];return new p$1({attributes:e.attributes,events:p,geometry:n,strings:e.strings})}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>request.e$2(e))),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}get strings(){return this.features.map((({strings:e})=>e))}_decompressGeometry(e){let t=0,r=0,o=0,s=0;const a=[];let n,p,i,m,l,u,c,y,h=0,f=0,d=0;if(l=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),l||(l=[]),0===parseInt(l[h],32)){h=2;const e=parseInt(l[h],32);h++,u=parseInt(l[h],32),h++,1&e&&(f=l.indexOf("|")+1,c=parseInt(l[f],32),f++),2&e&&(d=l.indexOf("|",f)+1,y=parseInt(l[d],32),d++);}else u=parseInt(l[h],32),h++;for(;h<l.length&&"|"!==l[h];){n=parseInt(l[h],32)+t,h++,t=n,p=parseInt(l[h],32)+r,h++,r=p;const e=[n/u,p/u];f&&(m=parseInt(l[f],32)+o,f++,o=m,e.push(m/c)),d&&(i=parseInt(l[d],32)+s,d++,s=i,e.push(i/y)),a.push(e);}return {paths:[a],hasZ:f>0,hasM:d>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new geometry.m({spatialReference:t});const r=[];for(const n of e)for(const e of n.paths)r.push(...e);const o=[];r.forEach(((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||o.push(e);}));const{hasM:s,hasZ:a}=e[0];return new geometry.m({hasM:s,hasZ:a,paths:[o],spatialReference:t})}};request.e([request.d({type:request.M,json:{read:{source:"summary.envelope"}}})],u$2.prototype,"extent",void 0),request.e([request.d()],u$2.prototype,"features",void 0),request.e([request.o$2("features")],u$2.prototype,"readFeatures",null),request.e([request.d()],u$2.prototype,"geometryType",void 0),request.e([request.d({readOnly:!0})],u$2.prototype,"mergedGeometry",null),request.e([request.d()],u$2.prototype,"routeId",void 0),request.e([request.d()],u$2.prototype,"routeName",void 0),request.e([request.d({value:null,readOnly:!0})],u$2.prototype,"strings",null),request.e([request.d({json:{read:{source:"summary.totalDriveTime"}}})],u$2.prototype,"totalDriveTime",void 0),request.e([request.d({json:{read:{source:"summary.totalLength"}}})],u$2.prototype,"totalLength",void 0),request.e([request.d({json:{read:{source:"summary.totalTime"}}})],u$2.prototype,"totalTime",void 0),u$2=request.e([request.i("esri.rest.support.DirectionsFeatureSet")],u$2);const c$2=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends request.a$2{constructor(o){super(o),this.directions=null,this.route=null,this.routeName=null,this.stops=null;}};request.e([request.d({type:c$2,json:{write:!0}})],i.prototype,"directions",void 0),request.e([request.d({type:Graphic.h,json:{write:!0}})],i.prototype,"route",void 0),request.e([request.d({type:String,json:{write:!0}})],i.prototype,"routeName",void 0),request.e([request.d({type:[Graphic.h],json:{write:!0}})],i.prototype,"stops",void 0),i=request.e([request.i("esri.rest.support.RouteResult")],i);const c$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(r){return r&&FeatureSet['default'].fromJSON(r).features.map((r=>r))}let u$1=class extends request.a$2{constructor(r){super(r),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null;}readPointBarriers(r,o){return n(o.barriers||o.pointBarriers)}readPolylineBarriers(r){return n(r)}readPolygonBarriers(r){return n(r)}};request.e([request.d({aliasOf:"pointBarriers"})],u$1.prototype,"barriers",void 0),request.e([request.d({type:[a]})],u$1.prototype,"messages",void 0),request.e([request.d({type:[Graphic.h]})],u$1.prototype,"pointBarriers",void 0),request.e([request.o$2("pointBarriers",["barriers","pointBarriers"])],u$1.prototype,"readPointBarriers",null),request.e([request.d({type:[Graphic.h]})],u$1.prototype,"polylineBarriers",void 0),request.e([request.o$2("polylineBarriers")],u$1.prototype,"readPolylineBarriers",null),request.e([request.d({type:[Graphic.h]})],u$1.prototype,"polygonBarriers",void 0),request.e([request.o$2("polygonBarriers")],u$1.prototype,"readPolygonBarriers",null),request.e([request.d({type:[c$1]})],u$1.prototype,"routeResults",void 0),u$1=request.e([request.i("esri.rest.support.RouteResultsContainer")],u$1);const y=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry);}));}function p(e,r){for(let t=0;t<r.length;t++){const o=e[r[t]];if(o&&o.length)for(const e of o)e.z=void 0;}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");}function f(e){const r=[],o=[],{directions:s=[],routes:{features:a=[],spatialReference:l=null}={},stops:{features:n=[],spatialReference:u=null}={},barriers:p,polygonBarriers:f,polylineBarriers:d,messages:c}=e.data,v="esri.tasks.RouteTask.NULL_ROUTE_NAME";let m,h,T=!0;const g=a&&l||n&&u||p&&p.spatialReference||f&&f.spatialReference||d&&d.spatialReference;s.forEach((e=>{r.push(m=e.routeName),o[m]={directions:e};})),a.forEach((e=>{-1===r.indexOf(m=e.attributes.Name)&&(r.push(m),o[m]={}),request.r(e.geometry)&&(e.geometry.spatialReference=g),o[m].route=e;})),n.forEach((e=>{h=e.attributes,-1===r.indexOf(m=h.RouteName||v)&&(r.push(m),o[m]={}),m!==v&&(T=!1),request.r(e.geometry)&&(e.geometry.spatialReference=g),null==o[m].stops&&(o[m].stops=[]),o[m].stops.push(e);})),n.length>0&&!0===T&&(o[r[0]].stops=o[v].stops,delete o[v],r.splice(r.indexOf(v),1));const M=r.map((e=>(o[e].routeName=e===v?null:e,o[e])));return y.fromJSON({routeResults:M,pointBarriers:p,polygonBarriers:f,polylineBarriers:d,messages:c})}function d(e,r){for(let o=0;o<r.length;o++){const s=e[r[o]];if(s&&s.length)for(const e of s)if(request.r(e)&&e.hasZ)return !0}return !1}async function c(t,o,s){if(!t)throw new request.s("network-service:missing-url","Url to Network service is missing");const l=utils.r({f:"json",token:o},s),{data:i}=await request.E(t,l);i.supportedTravelModes||(i.supportedTravelModes=[]);for(let e=0;e<i.supportedTravelModes.length;e++)i.supportedTravelModes[e].id||(i.supportedTravelModes[e].id=i.supportedTravelModes[e].itemId);const u=i.currentVersion>=10.4?m(t,o,s):v(t,s),{defaultTravelMode:p,supportedTravelModes:f}=await u;return i.defaultTravelMode=p,i.supportedTravelModes=f,i$1.fromJSON(i)}async function v(r,t){var n,i;const u=utils.r({f:"json"},t),{data:p}=await request.E(r.replace(/\/rest\/.*$/i,"/info"),u);if(!p||!p.owningSystemUrl)return {supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:f}=p,d=request.gt(f)+"/sharing/rest/portals/self",{data:c}=await request.E(d,u),v=request.t$5("helperServices.routingUtilities.url",c);if(!v)return {supportedTravelModes:[],defaultTravelMode:null};const m=utils.e(f),h=/\/solve$/i.test(m.path)?"Route":/\/solveclosestfacility$/i.test(m.path)?"ClosestFacility":"ServiceAreas",T=utils.r({f:"json",serviceName:h},t),g=request.gt(v)+"/GetTravelModes/execute",M=await request.E(g,T),w=[];let y=null;if(null!=M&&null!=(n=M.data)&&null!=(i=n.results)&&i.length){const e=M.data.results;for(const r of e){var N;if("supportedTravelModes"===r.paramName){if(null!=(N=r.value)&&N.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);w.push(r);}}else "defaultTravelMode"===r.paramName&&(y=r.value);}}return {supportedTravelModes:w,defaultTravelMode:y}}async function m(t,o,l){try{const r=utils.r({f:"json",token:o},l),n=request.gt(t)+"/retrieveTravelModes",{data:{supportedTravelModes:i,defaultTravelMode:u}}=await request.E(n,r);return {supportedTravelModes:i,defaultTravelMode:u}}catch(n){throw new request.s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=t=>{if(!Array.isArray(t))return !1;const[e]=t;return "number"==typeof e||"string"==typeof e};class e{constructor(t={}){this._options=t;}toQueryParams(e){if(!e)return null;const o=e.toJSON(),n={};return Object.keys(o).forEach((e=>{const r=this._options[e];if(r){const s="boolean"!=typeof r&&r.name?r.name:e,i="boolean"!=typeof r&&r.getter?r.getter(o):o[e];null!=i&&(n[s]=t(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i);}else n[e]=o[e];}),this),n}}function o(t){return new e(t)}

exports.a = a;
exports.c = c;
exports.c$1 = c$2;
exports.d = d;
exports.f = f;
exports.i = i$2;
exports.m = m$1;
exports.n = n$1;
exports.o = o;
exports.p = p;
exports.r = r;
exports.s = s;
exports.t = t$1;
exports.u = u;
