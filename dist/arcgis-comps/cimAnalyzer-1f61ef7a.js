import { bE as s$2, bF as i$2, u as u$2, h as h$1, bG as o$1 } from './Graphic-75d1efd2.js';
import { f as s$3, h as s$4, X as c$2 } from './jsxFactory-b8b7429b.js';
import { t, o, E as E$1, j as j$1 } from './CIMSymbolHelper-e9c59cd4.js';
import { l as l$1, a as a$1, e as e$1 } from './utils-f8425723.js';
import { q, C as C$1, B, v as v$1 } from './quantizationUtils-5cc7bb8b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":{const n=t.symbolLayers;return n&&1===n.length?r(n[0]):null}case"CIMVectorMarker":{const n=t.markerGraphics;if(!n||1!==n.length)return null;const o=n[0];if(!o)return null;const r=o.geometry;if(!r)return null;const l=o.symbol;return !l||"CIMPolygonSymbol"!==l.type&&"CIMLineSymbol"!==l.type?null:{geom:r,asFill:"CIMPolygonSymbol"===l.type}}case"sdf":return {geom:t.geom,asFill:t.asFill}}return null}function l(t){const n=t.markerGraphics;if(!n||1!==n.length)return null;const o=n[0];if(!o)return null;const r=o.symbol;return !r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type?null:r}function e(t){return t?t.rings?t.rings:t.paths?t.paths:void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function i$1(t$1){let n=1/0,r=-1/0,l=1/0,e=-1/0;for(const o of t$1)for(const t of o)t[0]<n&&(n=t[0]),t[0]>r&&(r=t[0]),t[1]<l&&(l=t[1]),t[1]>e&&(e=t[1]);return new t(n,l,r-n,e-l)}function s$1(t){let n=1/0,o=-1/0,r=1/0,l=-1/0;for(const e of t)for(const t of e)t[0]<n&&(n=t[0]),t[0]>o&&(o=t[0]),t[1]<r&&(r=t[1]),t[1]>l&&(l=t[1]);return [n,r,o,l]}function f(t){return t?t.rings?s$1(t.rings):t.paths?s$1(t.paths):s$2(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function a(t,n,o,r,l){const[e,i,s,f]=t;if(s<e||f<i)return [0,0,0];const a=s-e,m=f-i,u=128,c=1,y=Math.floor(.5*(.5*u-c)),h=(u-2*(y+c))/Math.max(a,m),x=Math.round(a*h)+2*y,M=Math.round(m*h)+2*y;let g=1;if(n){g=M/h/(n.ymax-n.ymin);}let p=0,d=0;if(r)if(l){if(n&&o&&n.ymax-n.ymin>0){const t=(n.xmax-n.xmin)/(n.ymax-n.ymin);p=r.x/(o*t),d=r.y/o;}}else p=r.x,d=r.y;p=.5*(n.xmax+n.xmin)+p*(n.xmax-n.xmin),d=.5*(n.ymax+n.ymin)+d*(n.ymax-n.ymin),p-=e,d-=i,p*=h,d*=h,p+=y,d+=y;return [g,p/x-.5,-(d/M-.5)]}function m(t){const n=e(t.geom),o=i$1(n),r=128,l=1,s=Math.floor(.5*(.5*r-l)),f=(r-2*(s+l))/Math.max(o.width,o.height),a=Math.round(o.width*f)+2*s,m=Math.round(o.height*f)+2*s,h=[];for(const e of n)if(e&&e.length>1){const n=[];for(const r of e){let[l,e]=r;l-=o.x,e-=o.y,l*=f,e*=f,l+=s-.5,e+=s-.5,t.asFill?n.push([l,e]):n.push([Math.round(l),Math.round(e)]);}if(t.asFill){const t=n.length-1;n[0][0]===n[t][0]&&n[0][1]===n[t][1]||n.push(n[0]);}h.push(n);}const x=u$1(h,a,m,s);return t.asFill&&c$1(h,a,m,s,x),[y$1(x,s),a,m]}function u$1(t,n,o,r){const l=n*o,e=new Array(l),i=r*r+1;for(let s=0;s<l;++s)e[s]=i;for(const s of t){const t=s.length;for(let l=1;l<t;++l){const t=s[l-1],i=s[l];let f,a,m,u;t[0]<i[0]?(f=t[0],a=i[0]):(f=i[0],a=t[0]),t[1]<i[1]?(m=t[1],u=i[1]):(m=i[1],u=t[1]);let c=Math.floor(f)-r,y=Math.floor(a)+r,h=Math.floor(m)-r,x=Math.floor(u)+r;c<0&&(c=0),y>n&&(y=n),h<0&&(h=0),x>o&&(x=o);const M=i[0]-t[0],g=i[1]-t[1],p=M*M+g*g;for(let r=c;r<y;r++)for(let l=h;l<x;l++){let s,f,a=(r-t[0])*M+(l-t[1])*g;a<0?(s=t[0],f=t[1]):a>p?(s=i[0],f=i[1]):(a/=p,s=t[0]+a*M,f=t[1]+a*g);const m=(r-s)*(r-s)+(l-f)*(l-f),u=(o-l-1)*n+r;m<e[u]&&(e[u]=m);}}}for(let s=0;s<l;++s)e[s]=Math.sqrt(e[s]);return e}function c$1(t,n,o,r,l){for(const e of t){const t=e.length;for(let i=1;i<t;++i){const t=e[i-1],s=e[i];let f,a,m,u;t[0]<s[0]?(f=t[0],a=s[0]):(f=s[0],a=t[0]),t[1]<s[1]?(m=t[1],u=s[1]):(m=s[1],u=t[1]);let c=Math.floor(f),y=Math.floor(a)+1,h=Math.floor(m),x=Math.floor(u)+1;c<r&&(c=r),y>n-r&&(y=n-r),h<r&&(h=r),x>o-r&&(x=o-r);for(let e=h;e<x;++e){if(t[1]>e==s[1]>e)continue;const i=(o-e-1)*n;for(let n=c;n<y;++n)n<(s[0]-t[0])*(e-t[1])/(s[1]-t[1])+t[0]&&(l[i+n]=-l[i+n]);for(let t=r;t<c;++t)l[i+t]=-l[i+t];}}}}function y$1(n,o$1){const r=2*o$1,l=n.length,e=new Uint8Array(4*l);for(let i=0;i<l;++i){const o$1=.5-n[i]/r;o(o$1,e,4*i);}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,t,o,n,a){const s=e.referencesGeometry()&&a?u(t,n,a):t,i=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:i})}catch(c){return s$3.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function u(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;i.has(r)||i.set(r,c(r));const s=i.get(r)(e.geometry,o,n,a);return {...e,geometry:s}}function c(s){const i={};switch(s){case"esriGeometryPoint":return (e,r,t,o)=>v$1(r,i,e,t,o);case"esriGeometryPolygon":return (e,r,t,o)=>B(r,i,e,t,o);case"esriGeometryPolyline":return (e,r,t,n)=>C$1(r,i,e,t,n);case"esriGeometryMultipoint":return (e,r,o,n)=>q(r,i,e,o,n);default:return s$3.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s$4("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=s$3.getLogger("esri.symbols.cim.cimAnalyzer");function h(e){switch(e){case"Butt":return 0;case"Square":return 2;default:return 1}}function g(e){switch(e){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function S(e){switch(e){default:return "left";case"Right":return "right";case"Center":return "center";case"Justify":return "justify"}}function d(e){switch(e){default:return "top";case"Center":return "middle";case"Baseline":return "baseline";case"Bottom":return "bottom"}}function v(e){let t="normal",i="normal";if(e){const o=e.toLowerCase();-1!==o.indexOf("italic")?t="italic":-1!==o.indexOf("oblique")&&(t="oblique"),-1!==o.indexOf("bold")?i="bold":-1!==o.indexOf("light")&&(i="lighter");}return {style:t,weight:i}}function N(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function k(e,t,i,o){let r;e[t]?r=e[t]:(r={},e[t]=r),r[i]=o;}function b(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function C(e,t,i,o,n){const a=null!=o?o:[];if(!e)return a;let l,s;const c={};if("CIMSymbolReference"!==e.type)return y.error("Expect cim type to be 'CIMSymbolReference'"),a;if(l=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const i of s){const o=i.valueExpressionInfo;if(o&&t){const n=o.expression,a=i$2(n,t.spatialReference,t.fields).then((e=>{e&&k(c,i.primitiveName,i.propertyName,e);}));e.push(a);}else null!=i.value&&k(c,i.primitiveName,i.propertyName,i.value);}e.length>0&&await Promise.all(e);}const f=[];switch(U(l,i,f),f.length>0&&await Promise.all(f),l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":O(l,s,c,t,a,i,n);}return a}function O(e,t,i,o,r,n,s){if(!e)return;const c=e.symbolLayers;if(!c)return;const f=e.effects;let m;const p=E$1.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(m=1);let u=c.length;for(;u--;){const a=c[u];if(!a||!1===a.enable)continue;let h;f&&f.length&&(h=[...f]);const g=a.effects;g&&g.length&&(f?h.push(...g):h=[...g]);const S=[];switch(j$1.findApplicableOverrides(a,t,S),a.type){case"CIMSolidFill":P(a,h,i,S,o,r);break;case"CIMPictureFill":M(a,h,i,S,o,r);break;case"CIMHatchFill":L(a,h,i,S,o,r);break;case"CIMGradientFill":I(a,h,i,S,o,r);break;case"CIMSolidStroke":w(a,h,i,S,o,r,"CIMPolygonSymbol"===e.type,p);break;case"CIMPictureStroke":X(a,h,i,S,o,r,"CIMPolygonSymbol"===e.type,p);break;case"CIMGradientStroke":z(a,h,i,S,o,r,"CIMPolygonSymbol"===e.type,p);break;case"CIMCharacterMarker":if(x(a,h,i,S,o,r))break;break;case"CIMPictureMarker":if(x(a,h,i,S,o,r))break;"CIMLineSymbol"===e.type&&(m=b(a)),J(a,h,i,S,o,r,m,p);break;case"CIMVectorMarker":if(x(a,h,i,S,o,r))break;"CIMLineSymbol"===e.type&&(m=b(a)),H(a,h,i,S,o,r,n,m,p,s);break;default:y.error("Cannot analyze CIM layer",a.type);}}}function P(e,t,i,r,n,a){const l=e.primitiveName,s=l$1(e.color),[c,m]=E(r,l),p=c$2(JSON.stringify(e)+m).toString();a.push({type:"fill",templateHash:p,materialHash:c?()=>p:p,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:T(l,i,"Color",n,s,j),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t});}function M(e,t,i,r,n,a){const l=e.primitiveName,s=e.tintColor?l$1(e.tintColor):{r:255,g:255,b:255,a:1},[c,m]=E(r,l),p=c$2(JSON.stringify(e)+m).toString(),u=c$2(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();a.push({type:"fill",templateHash:p,materialHash:c?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:T(l,i,"TintColor",n,s,j),height:T(l,i,"Height",n,e.height),scaleX:T(l,i,"ScaleX",n,e.scaleX),angle:T(l,i,"Rotation",n,e.rotation),offsetX:T(l,i,"OffsetX",n,e.offsetX),offsetY:T(l,i,"OffsetY",n,e.offsetY),url:e.url});}function L(e,t,i,r,n,a){const l=["Rotation","OffsetX","OffsetY"],s=r.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),c=e.primitiveName,[f,m]=E(r,c),p=c$2(JSON.stringify(e)+m).toString(),u=c$2(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();a.push({type:"fill",templateHash:p,materialHash:f?D(u,i,s,n):u,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:T(c,i,"Separation",n,e.separation),scaleX:1,angle:T(c,i,"Rotation",n,e.rotation),offsetX:T(c,i,"OffsetX",n,e.offsetX),offsetY:T(c,i,"OffsetY",n,e.offsetY)});}function I(e,t,i,r,n,a){const l=e.primitiveName,[s,c]=E(r,l),f=c$2(JSON.stringify(e)+c).toString();a.push({type:"fill",templateHash:f,materialHash:s?D(f,i,r,n):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1});}function w(e,t,i,r,n,a,l,s){const c=e.primitiveName,m=l$1(e.color),p=void 0!==e.width?e.width:4,u=h(e.capStyle),y=g(e.joinStyle),S=e.miterLimit,[d,v]=E(r,c),N=c$2(JSON.stringify(e)+v).toString();let k,b;if(t&&t.length>0){const i=t[t.length-1];if("CIMGeometricEffectDashes"===i.type&&"NoConstraint"===i.lineDashEnding){const i=(t=[...e.effects]).pop();k=i.dashTemplate,b=i.scaleDash;}}a.push({type:"line",templateHash:N,materialHash:d?()=>N:N,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:T(c,i,"Color",n,m,j),width:T(c,i,"Width",n,p),cap:T(c,i,"CapStyle",n,u),join:T(c,i,"JoinStyle",n,y),miterLimit:T(c,i,"MiterLimit",n,S),referenceWidth:s,zOrder:W(e.name),dashTemplate:k,scaleDash:b});}function X(e,t,i,r,n,a,l,s){const c=c$2(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),m=e.primitiveName,p=l$1(e.tintColor),u=void 0!==e.width?e.width:4,y=h(e.capStyle),S=g(e.joinStyle),d=e.miterLimit,[v,N]=E(r,m),k=c$2(JSON.stringify(e)+N).toString();a.push({type:"line",templateHash:k,materialHash:v?()=>c:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:T(m,i,"TintColor",n,p,j),width:T(m,i,"Width",n,u),cap:T(m,i,"CapStyle",n,y),join:T(m,i,"JoinStyle",n,S),miterLimit:T(m,i,"MiterLimit",n,d),referenceWidth:s,zOrder:W(e.name),dashTemplate:null,scaleDash:!1,url:e.url});}function z(e,t,i,r,n,a,l,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=h(e.capStyle),p=g(e.joinStyle),u=e.miterLimit,[y,S]=E(r,c),d=c$2(JSON.stringify(e)+S).toString();a.push({type:"line",templateHash:d,materialHash:y?D(d,i,r,n):d,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:T(c,i,"Width",n,f),cap:T(c,i,"CapStyle",n,m),join:T(c,i,"JoinStyle",n,p),miterLimit:T(c,i,"MiterLimit",n,u),referenceWidth:s,zOrder:W(e.name),dashTemplate:null,scaleDash:!1});}function x(e,t,i,r,n,a){const l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return !1;const s=l,c=["Rotation","OffsetX","OffsetY"],f=r.filter((t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName))),m="url"in e?e.url:null,[p,u]=E(r,s.primitiveName),y=c$2(JSON.stringify(e)+u).toString();let h=s.stepY,g=null,S=1;return l.shiftOddRows&&(h*=2,g=function(e){return e?2*e:0},S=.5),a.push({type:"fill",templateHash:y,materialHash:p?D(y,i,f,n):y,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:T(s.primitiveName,i,"StepY",n,h,g),scaleX:S,angle:T(s.primitiveName,i,"GridAngle",n,s.gridAngle),offsetX:T(s.primitiveName,i,"OffsetX",n,s.offsetX),offsetY:T(s.primitiveName,i,"OffsetY",n,s.offsetY),url:m}),!0}function J(e,t,i,r,n,a,l,s){var c;const m=e.primitiveName,p=e.size,u=e.scaleX,y=e.rotation,h=e.offsetX,g=e.offsetY,S=e.tintColor?l$1(e.tintColor):{r:255,g:255,b:255,a:1},d=c$2(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[v,N]=E(r,m),k=c$2(JSON.stringify(e)+N).toString(),b=null!=(c=e.anchorPoint)?c:{x:0,y:0};a.push({type:"marker",templateHash:k,materialHash:v?()=>d:d,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:l,size:T(m,i,"Size",n,p),scaleX:T(m,i,"ScaleX",n,u),rotation:T(m,i,"Rotation",n,y),offsetX:T(m,i,"OffsetX",n,h),offsetY:T(m,i,"OffsetY",n,g),color:T(m,i,"TintColor",n,S,j),anchorPoint:{x:b.x,y:-b.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:s,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url});}function H(e,t,i,o,r,n,a,l,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin);}for(const p of f)if(p){const f=p.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":R(e,t,p,o,i,r,n,a,l,s,m,c);break;case"CIMTextSymbol":Y(e,t,p,i,o,r,n,l,s,m);}}}function Y(e,t,i,r,n,s,c,u,y,h){const g=[];j$1.findApplicableOverrides(i,n,g);const k=i.geometry;if(!("x"in k)||!("y"in k))return;const b=i.symbol,C=N(b),O=v(b.fontStyleName);b.font={family:b.fontFamilyName,decoration:C,...O};const P=e.frame,M=k.x-.5*(P.xmin+P.xmax),L=k.y-.5*(P.ymin+P.ymax),I=e.size/h,w=e.primitiveName,X=(b.height||0)*I,z=b.angle||0,x=((b.offsetX||0)+M)*I,J=((b.offsetY||0)+L)*I,H=l$1(E$1.getFillColor(b));let Y=l$1(E$1.getStrokeColor(b)),R=E$1.getStrokeWidth(b);R||(Y=l$1(E$1.getFillColor(b.haloSymbol)),R=b.haloSize*I);const[A,F]=E(n,w),$=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),W=c$2(JSON.stringify(i)+$+F).toString(),j=c$2(JSON.stringify(b.font)).toString(),D=T(i.primitiveName,r,"TextString",s,i.textString,a$1,b.textCase),{fontFamilyName:G,fontStyleName:U}=b,B=G.toLowerCase()+(U&&U.length>0?"-"+U.toLowerCase():"-regular");c.push({type:"text",templateHash:W,materialHash:A||"function"==typeof D||D.match(/\[([\w]+)\]/)?(e,t,i)=>j+"-"+e$1(D,e,t,i):j+"-"+c$2(D),cim:b,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:u,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:B,decoration:C,weight:T(w,r,"Weight",s,O.weight),style:T(w,r,"Size",s,O.style),size:T(w,r,"Size",s,X),angle:T(w,r,"Rotation",s,z),offsetX:T(w,r,"OffsetX",s,x),offsetY:T(w,r,"OffsetY",s,J),horizontalAlignment:S(b.horizontalAlignment),verticalAlignment:d(b.verticalAlignment),text:D,color:H,outlineColor:Y,outlineSize:R,referenceSize:y,sizeRatio:1,markerPlacement:e.markerPlacement});}function R(e,t,i,r,n,l,m,p,u,y,h,g){const S=i.symbol,d=i.geometry;if(!d)return;const v=S.symbolLayers;if(!v)return;if(g)return void F(e,t,i,n,r,l,m,p,u,y,h);let N=v.length;if(2!==N||!v[0].enable||!v[1].enable||"CIMSolidStroke"!==v[0].type||"CIMSolidFill"!==v[1].type||v[0].effects||v[1].effects)for(;N--;){const g=v[N];if(g&&!1!==g.enable)switch(g.type){case"CIMSolidFill":case"CIMSolidStroke":{var k,b,C,O;const p=f(d);if(!p)continue;const[S,v,N]=a(p,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),P="CIMSolidFill"===g.type,M={type:"sdf",geom:d,asFill:P},L=e.primitiveName,I=null!=(k=e.size)?k:10,w=null!=(b=e.rotation)?b:0,X=null!=(C=e.offsetX)?C:0,z=null!=(O=e.offsetY)?O:0,x=g.path,J=g.primitiveName,H=l$1(P?E$1.getFillColor(g):E$1.getStrokeColor(g)),Y=P?{r:0,g:0,b:0,a:0}:l$1(E$1.getStrokeColor(g)),R=E$1.getStrokeWidth(g);if(!P&&!R)break;let A=!1,F="";for(const e of r)e.primitiveName!==J&&e.primitiveName!==L||(void 0!==e.value?F+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(A=!0));const $=JSON.stringify({...e,markerGraphics:null}),W=c$2(JSON.stringify(M)+x).toString(),D={type:"marker",templateHash:c$2(JSON.stringify(i)+JSON.stringify(g)+$+F).toString(),materialHash:A?()=>W:W,cim:M,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:v,y:N},isAbsoluteAnchorPoint:!1,size:T(e.primitiveName,n,"Size",l,I),rotation:T(e.primitiveName,n,"Rotation",l,w),offsetX:T(e.primitiveName,n,"OffsetX",l,X),offsetY:T(e.primitiveName,n,"OffsetY",l,z),scaleX:1,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:S,color:T(J,n,"Color",l,H,j),outlineColor:T(J,n,"Color",l,Y,j),outlineWidth:T(J,n,"Width",l,R),markerPlacement:e.markerPlacement,path:x};m.push(D);break}default:F(e,t,i,n,r,l,m,p,u,y,h);}}else A(e,i,v,r,n,l,m,u,y,h);}function A(e,t,i,r,n,l,m,p,u,y){const h=t.geometry,g=i[0],S=i[1],d=f(h);if(!d)return;const[v,N,k]=a(d,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),b={type:"sdf",geom:h,asFill:!0},C=e.primitiveName,O=e.size,P=e.rotation||0,M=e.offsetX,L=e.offsetY,I=S.path,w=S.primitiveName,X=g.primitiveName,z=l$1(E$1.getFillColor(S)),x=l$1(E$1.getStrokeColor(g)),J=E$1.getStrokeWidth(g);let H=!1,Y="";for(const o of r)o.primitiveName!==w&&o.primitiveName!==X&&o.primitiveName!==C||(void 0!==o.value?Y+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`:o.valueExpressionInfo&&(H=!0));const R=JSON.stringify({...e,markerGraphics:null}),A=c$2(JSON.stringify(b)+I).toString(),F={type:"marker",templateHash:c$2(JSON.stringify(t)+JSON.stringify(S)+JSON.stringify(g)+R+Y).toString(),materialHash:H?()=>A:A,cim:b,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:N,y:k},isAbsoluteAnchorPoint:!1,size:T(e.primitiveName,n,"Size",l,O),rotation:T(e.primitiveName,n,"Rotation",l,P),offsetX:T(e.primitiveName,n,"OffsetX",l,M),offsetY:T(e.primitiveName,n,"OffsetY",l,L),scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:v,color:T(w,n,"Color",l,z,j),outlineColor:T(X,n,"Color",l,x,j),outlineWidth:T(X,n,"Width",l,J),markerPlacement:e.markerPlacement,path:I};m.push(F);}function F(e,t,r,n,l,s,c,f,m,p,u){const y=$(e,r);let h=[];const g=["Rotation","OffsetX","OffsetY"];h=l.filter((t=>t.primitiveName!==e.primitiveName||-1===g.indexOf(t.propertyName)));let S="";for(const i of l)void 0!==i.value&&(S+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`);const[d,v,N]=E$1.getTextureAnchor(y,f),k=e.primitiveName,b=e.rotation||0,C=e.offsetX||0,O=e.offsetY||0,P=c$2(JSON.stringify(y)+S).toString(),M={type:"marker",templateHash:P,materialHash:0===h.length?P:D(P,n,h,s),cim:y,materialOverrides:h,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:m,anchorPoint:{x:d,y:v},isAbsoluteAnchorPoint:!1,size:e.size,rotation:T(k,n,"Rotation",s,b),offsetX:T(k,n,"OffsetX",s,C),offsetY:T(k,n,"OffsetY",s,O),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:u,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:N/u$2(e.size),markerPlacement:e.markerPlacement};c.push(M);}function $(e,t){return {type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}function W(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function j(t){if(!t||0===t.length)return null;const i=new h$1(t).toRgba();return {r:i[0],g:i[1],b:i[2],a:i[3]}}function T(e,t,i,o,r,a,l){const s$1=t[e];if(s$1){const e=s$1[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return a?a.call(null,e,l):e;if(null!=e&&e instanceof o$1)return (t,i,n)=>{let s$1=s(e,t,{$view:n},o.geometryType,i);return null!==s$1&&a&&(s$1=a.call(null,s$1,l)),null!==s$1?s$1:r}}return r}function D(e,t,i,r){for(const o of i){if(o.valueExpressionInfo){const e=t[o.primitiveName]&&t[o.primitiveName][o.propertyName];e instanceof o$1&&(o.fn=(t,i,o)=>s(e,t,{$view:o},r.geometryType,i));}}return (t,r,n)=>{for(const e of i)e.fn&&(e.value=e.fn(t,r,n));return c$2(e+j$1.buildOverrideKey(i)).toString()}}function G(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return j$1.applyOverrides(i,t),i}function E(e,t){let i=!1,o="";for(const r of e)r.primitiveName===t&&(void 0!==r.value?o+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(i=!0));return [i,o]}function U(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=e.symbolLayers;if(!o)return;for(const e of o)switch(e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)continue;for(const e of o)if(e){const o=e.symbol;o&&U(o,t,i);}}}}}}

export { C, G, m, r, s };
