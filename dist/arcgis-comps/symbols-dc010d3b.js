import { l as l$i, aN as c$n, e as e$3, b as d$d, i as i$7, a1 as S$4, r as r$5, a3 as o$7, ac as s$4, k as c$o, at as G, ap as Q, aa as z, p as p$k, g as s$5, aO as X, _ as t$9, aP as P$1, D as D$1, aQ as V, a as s$6, h as h$b, aJ as u$b, S as N } from './cast-e5ea2533.js';
import { r as r$3 } from './enumeration-da141e85.js';
import { o as o$5, r as r$2, B } from './Portal-f1457cb4.js';
import { f as b$4, j as r$4, k as n$f } from './opacityUtils-5755cb64.js';
import { a as a$h } from './Symbol-ac21e497.js';
import { a as a$i } from './JSONSupport-8dda8bae.js';
import { h as h$a } from './Color-ed0bfbe9.js';
import { o as o$6, e as e$4 } from './screenUtils-9ed89fa7.js';
import { r as r$6 } from './common-e2a70efa.js';
import { u as u$a } from './aaBoundingBox-e0a84875.js';
import { c as c$p, i as i$8, m as m$d, p as p$l } from './persistableUrlUtils-a9da326c.js';
import { S as S$5 } from './Collection-ac20f1a1.js';
import { n as n$g, t as t$a } from './collectionUtils-b35b097b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$c;let l$h=m$c=class extends a$h{constructor(r){super(r),this.data=null,this.type="cim";}readData(r,o){return o}writeData(r,o){if(r)for(const t in r)o[t]=r[t];}async collectRequiredFields(r,o){if("CIMSymbolReference"===this.data.type){const t=this.data.primitiveOverrides;if(t){const e=t.map((t=>{const e=t.valueExpressionInfo;return b$4(r,o,e.expression)}));await Promise.all(e);}}}clone(){return new m$c({data:l$i(this.data)})}hash(){return c$n(JSON.stringify(this.data)).toString()}};e$3([d$d({json:{write:!1}})],l$h.prototype,"color",void 0),e$3([d$d({json:{write:!0}})],l$h.prototype,"data",void 0),e$3([o$5("data",["symbol"])],l$h.prototype,"readData",null),e$3([r$2("data",{})],l$h.prototype,"writeData",null),e$3([r$3({CIMSymbolReference:"cim"},{readOnly:!0})],l$h.prototype,"type",void 0),l$h=m$c=e$3([i$7("esri.symbols.CIMSymbol")],l$h);const d$c=l$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$j=class extends a$i{constructor(e){super(e),this.enabled=!0,this.type=null;}writeEnabled(e,r,o){e||(r[o]=e);}};e$3([d$d({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],p$j.prototype,"enabled",void 0),e$3([r$2("enabled")],p$j.prototype,"writeEnabled",null),e$3([d$d({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],p$j.prototype,"type",void 0),p$j=e$3([i$7("esri.symbols.Symbol3DLayer")],p$j);const a$g=p$j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$3(o,t){const n=null!=t.transparency?r$4(t.transparency):1,s=t.color;return s&&Array.isArray(s)?new h$a([s[0]||0,s[1]||0,s[2]||0,n]):null}function c$m(r,o){o.color=r.toJSON().slice(0,3);const t=n$f(r.a);0!==t&&(o.transparency=t);}const p$i={type:h$a,json:{type:[S$4],default:null,read:{source:["color","transparency"],reader:s$3},write:{target:{color:{type:[S$4]},transparency:{type:S$4}},writer:c$m}}},a$f={type:Number,cast:o$6,json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$g=class extends a$i{constructor(o){super(o),this.color=new h$a([0,0,0,1]),this.extensionLength=0,this.size=e$4(1);}clone(){}cloneProperties(){return {color:l$i(this.color),size:this.size,extensionLength:this.extensionLength}}};e$3([d$d({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],l$g.prototype,"type",void 0),e$3([d$d(p$i)],l$g.prototype,"color",void 0),e$3([d$d({...a$f,json:{write:{overridePolicy:o=>({enabled:!!o})}}})],l$g.prototype,"extensionLength",void 0),e$3([d$d(a$f)],l$g.prototype,"size",void 0),l$g=e$3([i$7("esri.symbols.edges.Edges3D")],l$g);const m$b=l$g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$8;let c$l=t$8=class extends m$b{constructor(r){super(r),this.type="sketch";}clone(){return new t$8(this.cloneProperties())}};e$3([r$3({sketch:"sketch"},{readOnly:!0})],c$l.prototype,"type",void 0),c$l=t$8=e$3([i$7("esri.symbols.edges.SketchEdges3D")],c$l);const p$h=c$l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$7;let p$g=t$7=class extends m$b{constructor(o){super(o),this.type="solid";}clone(){return new t$7(this.cloneProperties())}};e$3([r$3({solid:"solid"},{readOnly:!0})],p$g.prototype,"type",void 0),p$g=t$7=e$3([i$7("esri.symbols.support.SolidEdges3D")],p$g);const c$k=p$g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$6={types:{key:"type",base:m$b,typeMap:{solid:c$k,sketch:p$h}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$f;let l$f=p$f=class extends a$i{constructor(o){super(o),this.color=null;}clone(){const o={color:r$5(this.color)?this.color.clone():null};return new p$f(o)}};e$3([d$d(p$i)],l$f.prototype,"color",void 0),l$f=p$f=e$3([i$7("esri.symbols.support.Symbol3DMaterial")],l$f);const a$e=l$f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$e;let c$j=l$e=class extends a$g{constructor(e){super(e),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null;}clone(){return new l$e({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})}};e$3([r$3({Extrude:"extrude"},{readOnly:!0})],c$j.prototype,"type",void 0),e$3([d$d({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],c$j.prototype,"size",void 0),e$3([d$d({type:a$e,json:{write:!0}})],c$j.prototype,"material",void 0),e$3([d$d({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],c$j.prototype,"castShadows",void 0),e$3([d$d(t$6)],c$j.prototype,"edges",void 0),c$j=l$e=e$3([i$7("esri.symbols.ExtrudeSymbol3DLayer")],c$j);const m$a=c$j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$6=class extends a$h{constructor(r){super(r),this.type="simple-line",this.width=.75;}hash(){return `${this.type}.${this.width}`}};e$3([r$3({esriSLS:"simple-line"},{readOnly:!0})],i$6.prototype,"type",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],i$6.prototype,"width",void 0),i$6=e$3([i$7("esri.symbols.LineSymbol")],i$6);const c$i=i$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$d;let n$e=a$d=class extends a$i{constructor(r){super(r),this.placement="begin-end",this.type="line-marker",this.style="arrow";}writeStyle(r,o,e,t){"web-map"===(null==t?void 0:t.origin)?o[e]="arrow":o[e]=r;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}writeColor(r,o,e,t){"web-map"===(null==t?void 0:t.origin)||(o[e]=r);}clone(){return new a$d({color:l$i(this.color),placement:this.placement,style:this.style})}hash(){var r;return `${this.placement}.${null==(r=this.color)?void 0:r.hash()}.${this.style}`}};e$3([d$d({type:["begin","end","begin-end"],json:{write:!0}})],n$e.prototype,"placement",void 0),e$3([r$3({"line-marker":"line-marker"},{readOnly:!0}),d$d({json:{origins:{"web-map":{write:!1}}}})],n$e.prototype,"type",void 0),e$3([d$d({type:["arrow","circle","square","diamond","cross","x"]})],n$e.prototype,"style",void 0),e$3([r$2("style")],n$e.prototype,"writeStyle",null),e$3([d$d({type:h$a,value:null,json:{write:{allowNull:!0}}})],n$e.prototype,"color",null),e$3([o$5("color")],n$e.prototype,"readColor",null),e$3([r$2("color")],n$e.prototype,"writeColor",null),n$e=a$d=e$3([i$7("esri.symbols.LineSymbolMarker")],n$e);const m$9=n$e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$e;const h$9=new o$7({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let d$b=p$e=class extends c$i{constructor(...r){super(...r),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2;}normalizeCtorArgs(r,o,e,s,i,l){if(r&&"string"!=typeof r)return r;const n={};return null!=r&&(n.style=r),null!=o&&(n.color=o),null!=e&&(n.width=o$6(e)),null!=s&&(n.cap=s),null!=i&&(n.join=i),null!=l&&(n.miterLimit=o$6(l)),n}clone(){var r;return new p$e({color:l$i(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(r=this.marker)?void 0:r.clone()})}hash(){var r,o;return `${super.hash()}.${null==(r=this.color)?void 0:r.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(o=this.marker)?void 0:o.hash()}`}};e$3([r$3({esriSLS:"simple-line"},{readOnly:!0})],d$b.prototype,"type",void 0),e$3([d$d({type:h$9.apiValues,json:{read:h$9.read,write:h$9.write}})],d$b.prototype,"style",void 0),e$3([d$d({type:["butt","round","square"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],d$b.prototype,"cap",void 0),e$3([d$d({type:["miter","round","bevel"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],d$b.prototype,"join",void 0),e$3([d$d({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":m$9}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],d$b.prototype,"marker",void 0),e$3([d$d({type:Number,json:{read:!1,write:!1}})],d$b.prototype,"miterLimit",void 0),d$b=p$e=e$3([i$7("esri.symbols.SimpleLineSymbol")],d$b);const m$8=d$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l$d=class extends a$h{constructor(e){super(e),this.outline=null,this.type=null;}hash(){return `${this.type}.${this.outline&&this.outline.hash()}`}};e$3([d$d({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":m$8}},json:{default:null,write:!0}})],l$d.prototype,"outline",void 0),e$3([d$d({type:["simple-fill","picture-fill"],readOnly:!0})],l$d.prototype,"type",void 0),l$d=e$3([i$7("esri.symbols.FillSymbol")],l$d);const p$d=l$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$5=class extends a$i{constructor(r){super(r);}clone(){}};e$3([d$d({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],t$5.prototype,"type",void 0),t$5=e$3([i$7("esri.symbols.patterns.LinePattern3D")],t$5);const p$c=t$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$4=["dash","dash-dot","dot","long-dash","long-dash-dot","long-dash-dot-dot","none","short-dash","short-dash-dot","short-dash-dot-dot","short-dot","solid"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$b;const h$8=s$4()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash","long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash","short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"});let c$h=p$b=class extends p$c{constructor(o){super(o),this.type="style",this.style="solid";}clone(){const o={style:this.style};return new p$b(o)}};e$3([d$d({type:["style"]})],c$h.prototype,"type",void 0),e$3([r$3(h$8),d$d({type:o$4})],c$h.prototype,"style",void 0),c$h=p$b=e$3([i$7("esri.symbols.patterns.LineStylePattern3D")],c$h);const l$c=c$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$4=class extends a$i{constructor(r){super(r);}clone(){}};e$3([d$d({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],t$4.prototype,"type",void 0),t$4=e$3([i$7("esri.symbols.patterns.Pattern3D")],t$4);const p$a=t$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$c=["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$9;let c$g=p$9=class extends p$a{constructor(s){super(s),this.type="style",this.style="solid";}clone(){const s={style:this.style};return new p$9(s)}};e$3([d$d({type:["style"]})],c$g.prototype,"type",void 0),e$3([d$d({type:a$c,json:{read:!0,write:!0}})],c$g.prototype,"style",void 0),c$g=p$9=e$3([i$7("esri.symbols.patterns.StylePattern3D")],c$g);const a$b=c$g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s$2={types:{key:"type",base:p$a,typeMap:{style:a$b}},json:{write:!0}},o$3={types:{key:"type",base:p$c,typeMap:{style:l$c}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$2=new h$a("white"),r$1=new h$a("black"),e$2=new h$a([255,255,255,0]);function t$3(n){return 0===n.r&&0===n.g&&0===n.b}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$f;let l$b=c$f=class extends l$f{constructor(o){super(o),this.colorMixMode=null;}clone(){const o={color:r$5(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode};return new c$f(o)}};e$3([r$3({multiply:"multiply",replace:"replace",tint:"tint"})],l$b.prototype,"colorMixMode",void 0),l$b=c$f=e$3([i$7("esri.symbols.support.Symbol3DFillMaterial")],l$b);const i$5=l$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$2(r,{isPrimitive:t,width:n,depth:o,height:s}){const c=t?10:1;if(null==n&&null==s&&null==o)return [c*r[0],c*r[1],c*r[2]];const u=r$6(n,o,s);let i;for(let e=0;e<3;e++){const t=u[e];if(null!=t){i=t/r[e];break}}for(let e=0;e<3;e++)null==u[e]&&(u[e]=r[e]*i);return u}const n$d=u$a(-.5,-.5,-.5,.5,.5,.5),o$1=u$a(-.5,-.5,0,.5,.5,1),s$1=u$a(-.5,-.5,0,.5,.5,.5);function c$e(e){switch(e){case"sphere":case"cube":case"diamond":return n$d;case"cylinder":case"cone":case"inverted-cone":return o$1;case"tetrahedron":return s$1;default:return}}const u$9=["butt","square","round"],i$4=[...u$9,"none"],a$a=["miter","bevel","round"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$7;let u$8=m$7=class extends a$i{constructor(t){super(t),this.color=new h$a([0,0,0,1]),this.size=e$4(1),this.pattern=null,this.patternCap="butt";}clone(){const t={color:r$5(this.color)?this.color.clone():null,size:this.size,pattern:r$5(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap};return new m$7(t)}};e$3([d$d(p$i)],u$8.prototype,"color",void 0),e$3([d$d(a$f)],u$8.prototype,"size",void 0),e$3([d$d(o$3)],u$8.prototype,"pattern",void 0),e$3([d$d({type:u$9,json:{default:"butt",write:{overridePolicy(){return {enabled:r$5(this.pattern)}}}}})],u$8.prototype,"patternCap",void 0),u$8=m$7=e$3([i$7("esri.symbols.support.Symbol3DOutline")],u$8);const j$6=u$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$a;let h$7=d$a=class extends a$g{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null;}clone(){const t={edges:r$5(this.edges)?this.edges.clone():null,enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,pattern:r$5(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:r$5(this.outline)?this.outline.clone():null};return new d$a(t)}static fromSimpleFillSymbol(t){var o,e,l,r,s,i;const p=t.outline&&t.outline.style&&"inside-frame"!==t.outline.style&&"solid"!==t.outline.style?new l$c({style:t.outline.style}):null,y={size:null!=(o=null==(e=t.outline)?void 0:e.width)?o:0,color:(null!=(l=null==(r=t.outline)?void 0:r.color)?l:o$2).clone(),pattern:p};return p&&null!=(s=t.outline)&&s.cap&&(y.patternCap=t.outline.cap),new d$a({material:new l$b({color:(null!=(i=t.color)?i:e$2).clone()}),pattern:t.style&&"solid"!==t.style?new a$b({style:t.style}):null,outline:y})}};e$3([r$3({Fill:"fill"},{readOnly:!0})],h$7.prototype,"type",void 0),e$3([d$d({type:l$b,json:{write:!0}})],h$7.prototype,"material",void 0),e$3([d$d(s$2)],h$7.prototype,"pattern",void 0),e$3([d$d({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],h$7.prototype,"castShadows",void 0),e$3([d$d({type:j$6,json:{write:!0}})],h$7.prototype,"outline",void 0),e$3([d$d(t$6)],h$7.prototype,"edges",void 0),h$7=d$a=e$3([i$7("esri.symbols.FillSymbol3DLayer")],h$7);const f$4=h$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$9;let l$a=a$9=class extends a$i{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal";}castSize(t){return o$6(t)}clone(){return new a$9({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};e$3([d$d({type:["underline","line-through","none"],json:{default:"none",write:!0}})],l$a.prototype,"decoration",void 0),e$3([d$d({type:String,json:{write:!0}})],l$a.prototype,"family",void 0),e$3([d$d({type:Number,json:{write:{overridePolicy:(t,o,e)=>({enabled:!e||!e.textSymbol3D})}}})],l$a.prototype,"size",void 0),e$3([c$o("size")],l$a.prototype,"castSize",null),e$3([d$d({type:["normal","italic","oblique"],json:{default:"normal",write:!0}})],l$a.prototype,"style",void 0),e$3([d$d({type:["normal","bold","bolder","lighter"],json:{default:"normal",write:!0}})],l$a.prototype,"weight",void 0),l$a=a$9=e$3([i$7("esri.symbols.Font")],l$a);const n$c=l$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$b;const d$9=s$4()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});let h$6=n$b=class extends a$i{constructor(r){super(r);}readHref(r,e,o){return r?c$p(r,o):e.dataURI}writeHref(r,e,o,c){r&&(G(r)?e.dataURI=r:(e.href=i$8(r,c),Q(e.href)&&(e.href=z(e.href))));}clone(){return new n$b({href:this.href,primitive:this.primitive})}};e$3([d$d({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],h$6.prototype,"href",void 0),e$3([o$5("href")],h$6.prototype,"readHref",null),e$3([r$2("href",{href:{type:String},dataURI:{type:String}})],h$6.prototype,"writeHref",null),e$3([r$3(d$9)],h$6.prototype,"primitive",void 0),h$6=n$b=e$3([i$7("esri.symbols.support.IconSymbol3DLayerResource")],h$6);const j$5="circle",y$5=h$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e$1;let p$8=e$1=class extends p$k{constructor(){super(...arguments),this.x=0,this.y=0;}clone(){return new e$1({x:this.x,y:this.y})}};e$3([d$d({type:Number})],p$8.prototype,"x",void 0),e$3([d$d({type:Number})],p$8.prototype,"y",void 0),p$8=e$1=e$3([i$7("esri.symbols.support.Symbol3DAnchorPosition2D")],p$8);const c$d=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$9;let a$8=l$9=class extends a$i{constructor(o){super(o),this.color=new h$a([0,0,0,1]),this.size=e$4(1);}clone(){const o={color:r$5(this.color)?this.color.clone():null,size:this.size};return new l$9(o)}};e$3([d$d(p$i)],a$8.prototype,"color",void 0),e$3([d$d(a$f)],a$8.prototype,"size",void 0),a$8=l$9=e$3([i$7("esri.symbols.support.Symbol3DIconOutline")],a$8);const n$a=a$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$8;const f$3=s$5.getLogger("esri.symbols.IconSymbol3DLayer");let b$3=d$8=class extends a$g{constructor(o){super(o),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=void 0,this.outline=void 0;}clone(){return new d$8({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,outline:r$5(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(o){const t=o.color||o$2,r=j$4(o),e=o.outline&&o.outline.width>0?{size:o.outline.width,color:(o.outline.color||o$2).clone()}:null;return new d$8({size:o.size,resource:{primitive:w(o.style)},material:{color:t},outline:e,anchor:r?"relative":void 0,anchorPosition:r})}static fromPictureMarkerSymbol(o){const t=!o.color||t$3(o.color)?o$2:o.color,r=j$4(o);return new d$8({size:o.width<=o.height?o.height:o.width,resource:{href:o.url},material:{color:t.clone()},anchor:r?"relative":void 0,anchorPosition:r})}static fromCIMSymbol(o){return new d$8({resource:{href:X({mediaType:"application/json",data:JSON.stringify(o.data)})}})}};function j$4(o){const t="width"in o?o.width:o.size,r="height"in o?o.height:o.size,e=v$1(o.xoffset),i=v$1(o.yoffset);return (e||i)&&t&&r?{x:-e/t,y:i/r}:null}function v$1(o){return isFinite(o)?o:0}e$3([d$d({type:a$e,json:{write:!0}})],b$3.prototype,"material",void 0),e$3([d$d({type:y$5,json:{write:!0}})],b$3.prototype,"resource",void 0),e$3([r$3({Icon:"icon"},{readOnly:!0})],b$3.prototype,"type",void 0),e$3([d$d(a$f)],b$3.prototype,"size",void 0),e$3([r$3({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),d$d({json:{default:"center"}})],b$3.prototype,"anchor",void 0),e$3([d$d({type:p$8,json:{type:[Number],read:{reader:o=>new p$8({x:o[0],y:o[1]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],b$3.prototype,"anchorPosition",void 0),e$3([d$d({type:n$a,json:{write:!0}})],b$3.prototype,"outline",void 0),b$3=d$8=e$3([i$7("esri.symbols.IconSymbol3DLayer")],b$3);const g$2={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function w(o){const t=g$2[o];return t||(f$3.warn(`${o} cannot be mapped to Icon symbol. Fallback to "circle"`),"circle")}const S$3=b$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var j$3;let d$7=j$3=class extends a$g{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=e$4(1),this.pattern=null;}clone(){const t={enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,pattern:r$5(this.pattern)?this.pattern.clone():null};return new j$3(t)}static fromSimpleLineSymbol(t){const r={enabled:!0,size:t.width||1,cap:t.cap||"butt",join:t.join||"miter",pattern:t.style&&"inside-frame"!==t.style?new l$c({style:t.style}):null,material:new l$f({color:(t.color||o$2).clone()})};return new j$3(r)}};e$3([d$d({type:l$f,json:{write:!0}})],d$7.prototype,"material",void 0),e$3([r$3({Line:"line"},{readOnly:!0})],d$7.prototype,"type",void 0),e$3([d$d({type:a$a,json:{write:!0,default:"miter"}})],d$7.prototype,"join",void 0),e$3([d$d({type:u$9,json:{write:!0,default:"butt"}})],d$7.prototype,"cap",void 0),e$3([d$d(a$f)],d$7.prototype,"size",void 0),e$3([d$d(o$3)],d$7.prototype,"pattern",void 0),d$7=j$3=e$3([i$7("esri.symbols.LineSymbol3DLayer")],d$7);const f$2=d$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a$7;const n$9=s$4()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});let m$6=a$7=class extends a$i{clone(){return new a$7({href:this.href,primitive:this.primitive})}};e$3([d$d({type:String,json:{read:m$d,write:p$l}})],m$6.prototype,"href",void 0),e$3([r$3(n$9)],m$6.prototype,"primitive",void 0),m$6=a$7=e$3([i$7("esri.symbols.support.ObjectSymbol3DLayerResource")],m$6);const d$6="sphere",u$7=m$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p$7=e=class extends p$k{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0;}clone(){return new e({x:this.x,y:this.y,z:this.z})}};e$3([d$d({type:Number})],p$7.prototype,"x",void 0),e$3([d$d({type:Number})],p$7.prototype,"y",void 0),e$3([d$d({type:Number})],p$7.prototype,"z",void 0),p$7=e=e$3([i$7("esri.symbols.support.Symbol3DAnchorPosition3D")],p$7);const c$c=p$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$8;let c$b=n$8=class extends a$g{constructor(o){super(o),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0;}clone(){return new n$8({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:r$5(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})}get isPrimitive(){return !this.resource||"string"!=typeof this.resource.href}};e$3([d$d({type:a$e,json:{write:!0}})],c$b.prototype,"material",void 0),e$3([d$d({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],c$b.prototype,"castShadows",void 0),e$3([d$d({type:u$7,json:{write:!0}})],c$b.prototype,"resource",void 0),e$3([r$3({Object:"object"},{readOnly:!0})],c$b.prototype,"type",void 0),e$3([d$d({type:Number,json:{write:!0}})],c$b.prototype,"width",void 0),e$3([d$d({type:Number,json:{write:!0}})],c$b.prototype,"height",void 0),e$3([d$d({type:Number,json:{write:!0}})],c$b.prototype,"depth",void 0),e$3([r$3({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),d$d({json:{default:"origin"}})],c$b.prototype,"anchor",void 0),e$3([d$d({type:p$7,json:{type:[Number],read:{reader:o=>new p$7({x:o[0],y:o[1],z:o[2]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y,o.z];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],c$b.prototype,"anchorPosition",void 0),e$3([d$d({type:Number,json:{write:!0}})],c$b.prototype,"heading",void 0),e$3([d$d({type:Number,json:{write:!0}})],c$b.prototype,"tilt",void 0),e$3([d$d({type:Number,json:{write:!0}})],c$b.prototype,"roll",void 0),e$3([d$d({readOnly:!0})],c$b.prototype,"isPrimitive",null),c$b=n$8=e$3([i$7("esri.symbols.ObjectSymbol3DLayer")],c$b);const l$8=c$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$7;let d$5=n$7=class extends a$g{constructor(t){super(t),this.material=null,this.castShadows=!0,this.type="path",this.profile="circle",this.join="miter",this.cap="butt",this.width=void 0,this.height=void 0,this.anchor="center",this.profileRotation="all";}readWidth(t,e){return null!=t?t:null==e.height&&null!=e.size?e.size:void 0}readHeight(t,e){return null!=t?t:null==e.width&&null!=e.size?e.size:void 0}clone(){return new n$7({enabled:this.enabled,material:r$5(this.material)?this.material.clone():null,castShadows:this.castShadows,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})}};e$3([d$d({type:a$e,json:{write:!0}})],d$5.prototype,"material",void 0),e$3([d$d({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],d$5.prototype,"castShadows",void 0),e$3([r$3({Path:"path"},{readOnly:!0})],d$5.prototype,"type",void 0),e$3([d$d({type:["circle","quad"],json:{write:!0,default:"circle"}})],d$5.prototype,"profile",void 0),e$3([d$d({type:a$a,json:{write:!0,default:"miter"}})],d$5.prototype,"join",void 0),e$3([d$d({type:i$4,json:{write:!0,default:"butt"}})],d$5.prototype,"cap",void 0),e$3([d$d({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],d$5.prototype,"width",void 0),e$3([o$5("width",["width","size","height"])],d$5.prototype,"readWidth",null),e$3([d$d({type:Number,json:{write:!0}})],d$5.prototype,"height",void 0),e$3([o$5("height",["height","size","width"])],d$5.prototype,"readHeight",null),e$3([d$d({type:["center","bottom","top"],json:{write:!0,default:"center"}})],d$5.prototype,"anchor",void 0),e$3([d$d({type:["heading","all"],json:{write:!0,default:"all"}})],d$5.prototype,"profileRotation",void 0),d$5=n$7=e$3([i$7("esri.symbols.PathSymbol3DLayer")],d$5);const c$a=d$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$5;let l$7=m$5=class extends a$i{constructor(){super(...arguments),this.color=new h$a([0,0,0,1]),this.size=0;}clone(){return new m$5({color:l$i(this.color),size:this.size})}};e$3([d$d(p$i)],l$7.prototype,"color",void 0),e$3([d$d(a$f)],l$7.prototype,"size",void 0),l$7=m$5=e$3([i$7("esri.symbols.support.Symbol3DHalo")],l$7);const a$6=l$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$6;let h$5=u$6=class extends a$g{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.material=null,this.text=void 0,this.type="text";}get font(){return this._get("font")||null}set font(t){t&&this._userSize&&(t.size=this._userSize),this._set("font",t);}writeFont(t,o,e,r){const s={...r,textSymbol3D:!0};o.font=t.write({},s),delete o.font.size;}get size(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9}set size(t){this._userSize=t,this.font&&(this.font.size=this._userSize),this.notifyChange("size");}clone(){return new u$6({enabled:this.enabled,font:this.font&&l$i(this.font),halo:this.halo&&l$i(this.halo),material:r$5(this.material)?this.material.clone():null,size:this.size,text:this.text})}static fromTextSymbol(t){const o=f$1(t.haloColor,t.haloSize),e=t.font?t.font.clone():new n$c;return new u$6({size:e.size,font:e,halo:o,material:t.color?{color:t.color.clone()}:null,text:t.text})}};function f$1(t,e){return t&&e>0?{color:l$i(t),size:e}:null}e$3([d$d({type:n$c,json:{write:!0}})],h$5.prototype,"font",null),e$3([r$2("font")],h$5.prototype,"writeFont",null),e$3([d$d({type:a$6,json:{write:!0}})],h$5.prototype,"halo",void 0),e$3([d$d({type:a$e,json:{write:!0}})],h$5.prototype,"material",void 0),e$3([d$d(a$f),d$d()],h$5.prototype,"size",null),e$3([d$d({type:String,json:{write:!0}})],h$5.prototype,"text",void 0),e$3([r$3({Text:"text"},{readOnly:!0})],h$5.prototype,"type",void 0),h$5=u$6=e$3([i$7("esri.symbols.TextSymbol3DLayer")],h$5);const y$4=h$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$6;let c$9=l$6=class extends a$g{constructor(e){super(e),this.color=m$4.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate";}clone(){return new l$6({color:l$i(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}};e$3([d$d({type:h$a,nonNullable:!0,json:{type:[S$4],write:(e,o,r)=>o[r]=e.toArray(1),default:()=>m$4.clone(),defaultEquals:e=>e.toCss(!0)===m$4.toCss(!0)}})],c$9.prototype,"color",void 0),e$3([r$3({Water:"water"},{readOnly:!0})],c$9.prototype,"type",void 0),e$3([d$d({type:["small","medium","large"],json:{write:!0,default:"medium"}})],c$9.prototype,"waterbodySize",void 0),e$3([d$d({type:Number,json:{write:!0,default:null}})],c$9.prototype,"waveDirection",void 0),e$3([d$d({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],c$9.prototype,"waveStrength",void 0),c$9=l$6=e$3([i$7("esri.symbols.WaterSymbol3DLayer")],c$9);const m$4=new h$a([0,119,190]),n$6=c$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$6;let a$5=p$6=class extends p$k{constructor(){super(...arguments),this.portal=null;}clone(){return new p$6({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}};e$3([d$d({type:String})],a$5.prototype,"name",void 0),e$3([d$d({type:String})],a$5.prototype,"styleUrl",void 0),e$3([d$d({type:String})],a$5.prototype,"styleName",void 0),e$3([d$d({type:B})],a$5.prototype,"portal",void 0),a$5=p$6=e$3([i$7("esri.symbols.support.StyleOrigin")],a$5);const l$5=a$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let p$5=t$1=class extends p$k{clone(){return new t$1({url:this.url})}};e$3([d$d({type:String})],p$5.prototype,"url",void 0),p$5=t$1=e$3([i$7("esri.symbols.support.Thumbnail")],p$5);const c$8=p$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v={icon:S$3,object:l$8,line:f$2,path:c$a,fill:f$4,extrude:m$a,text:y$4,water:n$6},C$1=S$5.ofType({base:a$g,key:"type",typeMap:v,errorContext:"symbol-layer"}),T=s$5.getLogger("esri.symbols.Symbol3D");let k$1=class extends a$h{constructor(e){super(e),this.styleOrigin=null,this.thumbnail=null,this.type=null;const o=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,t=o&&o.type||S$5;this._set("symbolLayers",new t);}get color(){return null}set color(e){T.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");}set symbolLayers(e){n$g(e,this._get("symbolLayers"));}readStyleOrigin(e,r,o){if(e.styleUrl&&e.name){const r=c$p(e.styleUrl,o);return new l$5({styleUrl:r,name:e.name})}if(e.styleName&&e.name)return new l$5({portal:o&&o.portal||B.getDefault(),styleName:e.styleName,name:e.name});o&&o.messages&&o.messages.push(new t$9("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:o,definition:e}));}writeStyleOrigin(e,r,o,t){if(e.styleUrl&&e.name){let o=i$8(e.styleUrl,t);Q(o)&&(o=z(o)),r.styleOrigin={styleUrl:o,name:e.name};}else e.styleName&&e.name&&(e.portal&&t&&t.portal&&!P$1(e.portal.restUrl,t.portal.restUrl)?t&&t.messages&&t.messages.push(new t$9("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name});}normalizeCtorArgs(e){return e instanceof a$g||e&&v[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e}};e$3([d$d({json:{read:!1,write:!1}})],k$1.prototype,"color",null),e$3([d$d({type:C$1,nonNullable:!0,json:{write:!0}}),c$o(t$a)],k$1.prototype,"symbolLayers",null),e$3([d$d({type:l$5})],k$1.prototype,"styleOrigin",void 0),e$3([o$5("styleOrigin")],k$1.prototype,"readStyleOrigin",null),e$3([r$2("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],k$1.prototype,"writeStyleOrigin",null),e$3([d$d({type:c$8,json:{read:!1}})],k$1.prototype,"thumbnail",void 0),e$3([d$d({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],k$1.prototype,"type",void 0),k$1=e$3([i$7("esri.symbols.Symbol3D")],k$1);const A=k$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends a$i{constructor(r){super(r),this.visible=!0;}clone(){}};e$3([d$d({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"type",void 0),e$3([d$d({readOnly:!0})],t.prototype,"visible",void 0),t=e$3([i$7("esri.symbols.callouts.Callout3D")],t);const p$4=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$4;let a$4=l$4=class extends a$i{constructor(){super(...arguments),this.color=new h$a("white");}clone(){return new l$4({color:l$i(this.color)})}};e$3([d$d(p$i)],a$4.prototype,"color",void 0),a$4=l$4=e$3([i$7("esri.symbols.callouts.LineCallout3DBorder")],a$4);const i$3=a$4,m$3=Object.freeze({__proto__:null,get LineCallout3DBorder(){return a$4},default:i$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u$5;let d$4=u$5=class extends p$4{constructor(o){super(o),this.type="line",this.color=new h$a([0,0,0,1]),this.size=e$4(1),this.border=null;}get visible(){return this.size>0&&r$5(this.color)&&this.color.a>0}clone(){return new u$5({color:l$i(this.color),size:this.size,border:l$i(this.border)})}};e$3([r$3({line:"line"},{readOnly:!0})],d$4.prototype,"type",void 0),e$3([d$d(p$i)],d$4.prototype,"color",void 0),e$3([d$d(a$f)],d$4.prototype,"size",void 0),e$3([d$d({type:i$3,json:{write:!0}})],d$4.prototype,"border",void 0),e$3([d$d({readOnly:!0})],d$4.prototype,"visible",null),d$4=u$5=e$3([i$7("esri.symbols.callouts.LineCallout3D")],d$4);const y$3=d$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t){if(!t)return !1;const e=t.verticalOffset;return !!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function n$5(t){if(!t)return !1;if(!t.supportsCallout||!t.supportsCallout())return !1;const e=t.callout;return !!e&&(!!e.visible&&!!r(t))}function o(t){return "point-3d"===t.type||"label-3d"===t.type}const l$3={types:{key:"type",base:p$4,typeMap:{line:y$3}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$3;let n$4=p$3=class extends a$i{constructor(){super(...arguments),this.screenLength=0,this.minWorldLength=0;}clone(){return new p$3({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}};e$3([d$d(a$f)],n$4.prototype,"screenLength",void 0),e$3([d$d({type:Number,json:{write:!0,default:0}})],n$4.prototype,"minWorldLength",void 0),e$3([d$d({type:Number,json:{write:!0}})],n$4.prototype,"maxWorldLength",void 0),n$4=p$3=e$3([i$7("esri.symbols.support.Symbol3DVerticalOffset")],n$4);const i$2=n$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$3;const u$4=S$5.ofType({base:null,key:"type",typeMap:{text:y$4}});let f=n$3=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new u$4,this.type="label-3d";}supportsCallout(){return !0}hasVisibleCallout(){return n$5(this)}hasVisibleVerticalOffset(){return r(this)}clone(){return new n$3({styleOrigin:l$i(this.styleOrigin),symbolLayers:l$i(this.symbolLayers),thumbnail:l$i(this.thumbnail),callout:l$i(this.callout),verticalOffset:l$i(this.verticalOffset)})}static fromTextSymbol(t){return new n$3({symbolLayers:[y$4.fromTextSymbol(t)]})}};e$3([d$d({type:i$2,json:{write:!0}})],f.prototype,"verticalOffset",void 0),e$3([d$d(l$3)],f.prototype,"callout",void 0),e$3([d$d({json:{read:!1,write:!1}})],f.prototype,"styleOrigin",void 0),e$3([d$d({type:u$4})],f.prototype,"symbolLayers",void 0),e$3([r$3({LabelSymbol3D:"label-3d"},{readOnly:!0})],f.prototype,"type",void 0),f=n$3=e$3([i$7("esri.symbols.LabelSymbol3D")],f);const b$2=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$2;const a$3=S$5.ofType({base:null,key:"type",typeMap:{line:f$2,path:c$a}}),n$2=S$5.ofType({base:null,key:"type",typeMap:{line:f$2,path:c$a}});let c$7=l$2=class extends A{constructor(o){super(o),this.symbolLayers=new a$3,this.type="line-3d";}clone(){return new l$2({styleOrigin:l$i(this.styleOrigin),symbolLayers:l$i(this.symbolLayers),thumbnail:l$i(this.thumbnail)})}static fromSimpleLineSymbol(o){return new l$2({symbolLayers:[f$2.fromSimpleLineSymbol(o)]})}};e$3([d$d({type:a$3,json:{type:n$2}})],c$7.prototype,"symbolLayers",void 0),e$3([r$3({LineSymbol3D:"line-3d"},{readOnly:!0})],c$7.prototype,"type",void 0),c$7=l$2=e$3([i$7("esri.symbols.LineSymbol3D")],c$7);const b$1=c$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p$2=class extends a$h{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9;}hash(){return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};e$3([d$d({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],p$2.prototype,"angle",void 0),e$3([d$d({type:["simple-marker","picture-marker"],readOnly:!0})],p$2.prototype,"type",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],p$2.prototype,"xoffset",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],p$2.prototype,"yoffset",void 0),e$3([d$d({type:Number,cast:t=>"auto"===t?t:o$6(t),json:{write:!0}})],p$2.prototype,"size",void 0),p$2=e$3([i$7("esri.symbols.MarkerSymbol")],p$2);const i$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;const y$2=S$5.ofType({base:null,key:"type",typeMap:{fill:f$4}});let c$6=i=class extends A{constructor(o){super(o),this.symbolLayers=new y$2,this.type="mesh-3d";}clone(){return new i({styleOrigin:l$i(this.styleOrigin),symbolLayers:l$i(this.symbolLayers),thumbnail:l$i(this.thumbnail)})}};e$3([d$d({type:y$2})],c$6.prototype,"symbolLayers",void 0),e$3([r$3({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],c$6.prototype,"type",void 0),c$6=i=e$3([i$7("esri.symbols.MeshSymbol3D")],c$6);const a$2=c$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(a,r,t){return r.imageData?X({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):l$1(r.url,t)}function l$1(e,t){return p$1(t)&&!Q(e)&&t.layer.parsedUrl?D$1(t.layer.parsedUrl.path,"images",e):c$p(e,t)}function u$3(e,a,r,n){if(G(e)){const t=V(e);a.contentType=t.mediaType,a.imageData=t.data,r&&r.imageData===a.imageData&&r.url&&p$l(r.url,a,"url",n);}else p$l(e,a,"url",n);}const m$2={json:{read:{source:["imageData","url"],reader:s},write:{writer(e,a,r,t){u$3(e,a,this.source,t);}}}},c$5={readOnly:!0,json:{read:{source:["imageData","url"],reader(e,a,r){const t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=l$1(a.url,r)),t}}}};function p$1(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$4;let u$2=c$4=class extends p$d{constructor(...t){super(...t),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null;}normalizeCtorArgs(t,s,e,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;const i={};return t&&(i.url=t),s&&(i.outline=s),null!=e&&(i.width=o$6(e)),null!=r&&(i.height=o$6(r)),i}clone(){const t=new c$4({color:l$i(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",l$i(this.source)),t}hash(){var t;return `${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};e$3([r$3({esriPFS:"picture-fill"},{readOnly:!0})],u$2.prototype,"type",void 0),e$3([d$d(m$2)],u$2.prototype,"url",void 0),e$3([d$d({type:Number,json:{write:!0}})],u$2.prototype,"xscale",void 0),e$3([d$d({type:Number,json:{write:!0}})],u$2.prototype,"yscale",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],u$2.prototype,"width",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],u$2.prototype,"height",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],u$2.prototype,"xoffset",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],u$2.prototype,"yoffset",void 0),e$3([d$d(c$5)],u$2.prototype,"source",void 0),u$2=c$4=e$3([i$7("esri.symbols.PictureFillSymbol")],u$2);const a$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let a=l=class extends i$1{constructor(...r){super(...r),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null;}normalizeCtorArgs(r,t,o){if(r&&"string"!=typeof r&&null==r.imageData)return r;const s={};return r&&(s.url=r),null!=t&&(s.width=o$6(t)),null!=o&&(s.height=o$6(o)),s}readHeight(r,t){return t.size||r}readWidth(r,t){return t.size||r}clone(){const r=new l({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return r._set("source",l$i(this.source)),r}hash(){return `${super.hash()}.${this.height}.${this.url}.${this.width}`}};e$3([d$d({json:{write:!1}})],a.prototype,"color",void 0),e$3([r$3({esriPMS:"picture-marker"},{readOnly:!0})],a.prototype,"type",void 0),e$3([d$d(m$2)],a.prototype,"url",void 0),e$3([d$d(c$5)],a.prototype,"source",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],a.prototype,"height",void 0),e$3([o$5("height",["height","size"])],a.prototype,"readHeight",null),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],a.prototype,"width",void 0),e$3([d$d({json:{write:!1}})],a.prototype,"size",void 0),a=l=e$3([i$7("esri.symbols.PictureMarkerSymbol")],a);const n$1=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var S$2;const h$4=S$5.ofType({base:null,key:"type",typeMap:{icon:S$3,object:l$8,text:y$4}}),j$2=S$5.ofType({base:null,key:"type",typeMap:{icon:S$3,object:l$8}});let d$3=S$2=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new h$4,this.type="point-3d";}writeSymbolLayers(t,e,r,s){const l=t.filter((t=>"text"!==t.type));if(s&&s.messages&&l.length<t.length){const e=t.find((t=>"text"===t.type));s.messages.push(new s$6("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:e}));}e[r]=l.map((t=>t.write({},s))).toArray();}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return !1;for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue;default:return !1}return !0}hasVisibleCallout(){return n$5(this)}hasVisibleVerticalOffset(){return r(this)}clone(){return new S$2({verticalOffset:l$i(this.verticalOffset),callout:l$i(this.callout),styleOrigin:l$i(this.styleOrigin),symbolLayers:l$i(this.symbolLayers),thumbnail:l$i(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new S$2({symbolLayers:[S$3.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new S$2({symbolLayers:[S$3.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){var e,o;if("CIMPointSymbol"!==(null==(e=t.data)||null==(o=e.symbol)?void 0:o.type))return null;return t.data.symbol.callout?new S$2({symbolLayers:[S$3.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}):new S$2({symbolLayers:[S$3.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new S$2({symbolLayers:[y$4.fromTextSymbol(t)]})}};e$3([d$d({type:i$2,json:{write:!0}})],d$3.prototype,"verticalOffset",void 0),e$3([d$d(l$3)],d$3.prototype,"callout",void 0),e$3([d$d({type:h$4,json:{type:j$2,origins:{"web-scene":{type:j$2}}}})],d$3.prototype,"symbolLayers",void 0),e$3([r$2("web-scene","symbolLayers")],d$3.prototype,"writeSymbolLayers",null),e$3([r$3({PointSymbol3D:"point-3d"},{readOnly:!0})],d$3.prototype,"type",void 0),d$3=S$2=e$3([i$7("esri.symbols.PointSymbol3D")],d$3);const L=d$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var S$1;const j$1=S$5.ofType({base:null,key:"type",typeMap:{extrude:m$a,fill:f$4,icon:S$3,line:f$2,object:l$8,text:y$4,water:n$6}}),d$2=S$5.ofType({base:null,key:"type",typeMap:{extrude:m$a,fill:f$4,icon:S$3,line:f$2,object:l$8,water:n$6}});let g$1=S$1=class extends A{constructor(e){super(e),this.symbolLayers=new j$1,this.type="polygon-3d";}writeSymbolLayers(e,o,t,s){const y=e.filter((e=>"text"!==e.type));if(s&&s.messages&&y.length<e.length){const o=e.find((e=>"text"===e.type));s.messages.push(new s$6("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:o}));}o[t]=y.map((e=>e.write({},s))).toArray();}clone(){return new S$1({styleOrigin:l$i(this.styleOrigin),symbolLayers:l$i(this.symbolLayers),thumbnail:l$i(this.thumbnail)})}static fromJSON(e){const o=new S$1;if(o.read(e),2===o.symbolLayers.length&&"fill"===o.symbolLayers.getItemAt(0).type&&"line"===o.symbolLayers.getItemAt(1).type){const r=o.symbolLayers.getItemAt(0),t=o.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(r.outline={size:t.size,color:r$5(t.material)?t.material.color:null}),o.symbolLayers.removeAt(1);}return o}static fromSimpleFillSymbol(e){return new S$1({symbolLayers:[f$4.fromSimpleFillSymbol(e)]})}};e$3([d$d({type:j$1,json:{type:d$2}})],g$1.prototype,"symbolLayers",void 0),e$3([r$2("web-scene","symbolLayers")],g$1.prototype,"writeSymbolLayers",null),e$3([r$3({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],g$1.prototype,"type",void 0),g$1=S$1=e$3([i$7("esri.symbols.PolygonSymbol3D")],g$1);const h$3=g$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;const c$3=new o$7({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let m$1=p=class extends p$d{constructor(...o){super(...o),this.color=new h$a([0,0,0,.25]),this.outline=new m$8,this.type="simple-fill",this.style="solid";}normalizeCtorArgs(o,r,s){if(o&&"string"!=typeof o)return o;const e={};return o&&(e.style=o),r&&(e.outline=r),s&&(e.color=s),e}clone(){return new p({color:l$i(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return `${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};e$3([d$d()],m$1.prototype,"color",void 0),e$3([d$d()],m$1.prototype,"outline",void 0),e$3([r$3({esriSFS:"simple-fill"},{readOnly:!0})],m$1.prototype,"type",void 0),e$3([d$d({type:c$3.apiValues,json:{read:c$3.read,write:c$3.write}})],m$1.prototype,"style",void 0),m$1=p=e$3([i$7("esri.symbols.SimpleFillSymbol")],m$1);const S=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var h$2;const m=new o$7({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let u$1=h$2=class extends i$1{constructor(...e){super(...e),this.color=new h$a([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new m$8;}normalizeCtorArgs(e,o,r,t){if(e&&"string"!=typeof e)return e;const i={};return e&&(i.style=e),null!=o&&(i.size=o$6(o)),r&&(i.outline=r),t&&(i.color=t),i}writeColor(e,o){e&&"x"!==this.style&&"cross"!==this.style&&(o.color=e.toJSON()),null===e&&(o.color=null);}set path(e){this.style="path",this._set("path",e);}clone(){return new h$2({angle:this.angle,color:l$i(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var e;return `${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${null==(e=this.outline)?void 0:e.hash()}`}};e$3([d$d()],u$1.prototype,"color",void 0),e$3([r$2("color")],u$1.prototype,"writeColor",null),e$3([r$3({esriSMS:"simple-marker"},{readOnly:!0})],u$1.prototype,"type",void 0),e$3([d$d()],u$1.prototype,"size",void 0),e$3([d$d({type:m.apiValues,json:{read:m.read,write:m.write}})],u$1.prototype,"style",void 0),e$3([d$d({type:String,json:{write:!0}})],u$1.prototype,"path",null),e$3([d$d({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":m$8}},json:{default:null,write:!0}})],u$1.prototype,"outline",void 0),u$1=h$2=e$3([i$7("esri.symbols.SimpleMarkerSymbol")],u$1);const y$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d$1;let y=d$1=class extends a$h{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new n$c,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment=null,this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1;}normalizeCtorArgs(t,o,e){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.text=t),o&&(i.font=o),e&&(i.color=e),i}writeLineWidth(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}castLineWidth(t){return o$6(t)}writeLineHeight(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}clone(){return new d$1({angle:this.angle,backgroundColor:l$i(this.backgroundColor),borderLineColor:l$i(this.borderLineColor),borderLineSize:this.borderLineSize,color:l$i(this.color),font:this.font&&this.font.clone(),haloColor:l$i(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return `${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};e$3([d$d({type:h$a,json:{write:!0}})],y.prototype,"backgroundColor",void 0),e$3([d$d({type:h$a,json:{write:!0}})],y.prototype,"borderLineColor",void 0),e$3([d$d({type:Number,json:{write:!0}})],y.prototype,"borderLineSize",void 0),e$3([d$d({type:n$c,json:{write:!0}})],y.prototype,"font",void 0),e$3([d$d({type:["left","right","center","justify"],json:{write:!0}})],y.prototype,"horizontalAlignment",void 0),e$3([d$d({type:Boolean,json:{write:!0}})],y.prototype,"kerning",void 0),e$3([d$d({type:h$a,json:{write:!0}})],y.prototype,"haloColor",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],y.prototype,"haloSize",void 0),e$3([d$d({type:Boolean,json:{write:!0}})],y.prototype,"rightToLeft",void 0),e$3([d$d({type:Boolean,json:{write:!0}})],y.prototype,"rotated",void 0),e$3([d$d({type:String,json:{write:!0}})],y.prototype,"text",void 0),e$3([r$3({esriTS:"text"},{readOnly:!0})],y.prototype,"type",void 0),e$3([d$d({type:["baseline","top","middle","bottom"],json:{write:!0}})],y.prototype,"verticalAlignment",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],y.prototype,"xoffset",void 0),e$3([d$d({type:Number,cast:o$6,json:{write:!0}})],y.prototype,"yoffset",void 0),e$3([d$d({type:Number,json:{read:t=>t&&-1*t,write:(t,o)=>o.angle=t&&-1*t}})],y.prototype,"angle",void 0),e$3([d$d({type:Number,json:{write:!0}})],y.prototype,"width",void 0),e$3([d$d({type:Number})],y.prototype,"lineWidth",void 0),e$3([r$2("lineWidth")],y.prototype,"writeLineWidth",null),e$3([c$o("lineWidth")],y.prototype,"castLineWidth",null),e$3([d$d({type:Number})],y.prototype,"lineHeight",void 0),e$3([r$2("lineHeight")],y.prototype,"writeLineHeight",null),y=d$1=e$3([i$7("esri.symbols.TextSymbol")],y);const c$2=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$1;const n=s$5.getLogger("esri.symbols.WebStyleSymbol");let u=c$1=class extends a$h{constructor(t){super(t),this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style";}read(t,o){this.portal=o?o.portal:void 0,super.read(t,o);}clone(){return new c$1({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,o){const e=await b();h$b(o);const s=e.resolveWebStyleSymbol(this,{portal:this.portal},t,o);return s.catch((t=>{n.error("#fetchSymbol()","Failed to create symbol from style",t);})),s}};function b(){return import('./webStyleSymbolUtils-2df79b09.js')}e$3([d$d({json:{write:!1}})],u.prototype,"color",void 0),e$3([d$d({type:String,json:{write:!0}})],u.prototype,"styleName",void 0),e$3([d$d({type:B,json:{write:!1}})],u.prototype,"portal",void 0),e$3([d$d({type:String,json:{read:m$d,write:p$l}})],u.prototype,"styleUrl",void 0),e$3([d$d({type:c$8,json:{read:!1}})],u.prototype,"thumbnail",void 0),e$3([d$d({type:String,json:{write:!0}})],u.prototype,"name",void 0),e$3([r$3({styleSymbolReference:"web-style"},{readOnly:!0})],u.prototype,"type",void 0),u=c$1=e$3([i$7("esri.symbols.WebStyleSymbol")],u);const h$1=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(e){return e instanceof a$h}function c(e){if(!e)return !1;switch(e.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return !0;default:return !1}}function x(e){if(!e)return !1;switch(e.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return !0;default:return !1}}const j={base:a$h,key:"type",typeMap:{"simple-fill":S,"picture-fill":a$1,"picture-marker":n$1,"simple-line":m$8,"simple-marker":y$1,text:c$2,"label-3d":b$2,"line-3d":b$1,"mesh-3d":a$2,"point-3d":L,"polygon-3d":h$3,"web-style":h$1,cim:d$c},errorContext:"symbol"},D={base:a$h,key:"type",typeMap:{"picture-marker":n$1,"simple-marker":y$1,text:c$2,"web-style":h$1,cim:d$c},errorContext:"symbol"},k=u$b({types:j}),M={base:a$h,key:"type",typeMap:{"simple-fill":S,"picture-fill":a$1,"picture-marker":n$1,"simple-line":m$8,"simple-marker":y$1,text:c$2,"line-3d":b$1,"mesh-3d":a$2,"point-3d":L,"polygon-3d":h$3,"web-style":h$1,cim:d$c},errorContext:"symbol"},P={base:a$h,key:"type",typeMap:{text:c$2,"label-3d":b$2},errorContext:"symbol"},C={base:a$h,key:"type",typeMap:{"label-3d":b$2,"line-3d":b$1,"mesh-3d":a$2,"point-3d":L,"polygon-3d":h$3,"web-style":h$1},errorContext:"symbol"},h={base:a$h,key:"type",typeMap:{"line-3d":b$1,"mesh-3d":a$2,"point-3d":L,"polygon-3d":h$3,"web-style":h$1,cim:d$c},errorContext:"symbol"},F={base:a$h,key:"type",typeMap:{"label-3d":b$2},errorContext:"symbol"},g=N(j);

export { A, D, F, L, M, P, S, h$3 as a, h$1 as b, c$2 as c, d$c as d, b$1 as e, b$2 as f, g, h, c as i, j, k, a$e as l, m$8 as m, n$1 as n, d$6 as o, j$5 as p, c$8 as q, l$5 as r, c$d as s, t$2 as t, c$e as u, t$6 as v, x, y$1 as y };
