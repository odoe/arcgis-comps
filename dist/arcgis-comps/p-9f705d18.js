import{cx as e,s as t,a7 as o,dy as n,dU as r,dV as i,ds as l,a1 as a,dW as s,dX as c,j as f}from"./p-7b6f6c18.js";import{t as u,o as m,E as h,l as d}from"./p-cede17c2.js";import{q as y,C as S,B as M,v as p}from"./p-ec834938.js";function C(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?C(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const o=t[0];if(!o)return null;const n=o.geometry;if(!n)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type?null:{geom:n,asFill:"CIMPolygonSymbol"===r.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function O(e){let t=1/0,o=-1/0,n=1/0,r=-1/0;for(const i of e)for(const e of i)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<n&&(n=e[1]),e[1]>r&&(r=e[1]);return new u(t,n,o-t,r-n)}function b(e){let t=1/0,o=-1/0,n=1/0,r=-1/0;for(const i of e)for(const e of i)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<n&&(n=e[1]),e[1]>r&&(r=e[1]);return[t,n,o,r]}function g(t){return t?t.rings?b(t.rings):t.paths?b(t.paths):e(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function k(e,t,o,n,r){const[i,l,a,s]=e;if(a<i||s<l)return[0,0,0];const c=a-i,f=s-l,u=Math.floor(31.5),m=(128-2*(u+1))/Math.max(c,f),h=Math.round(c*m)+2*u,d=Math.round(f*m)+2*u;let y=1;t&&(y=d/m/(t.ymax-t.ymin));let S=0,M=0;return n&&(r?t&&o&&t.ymax-t.ymin>0&&(S=n.x/(o*((t.xmax-t.xmin)/(t.ymax-t.ymin))),M=n.y/o):(S=n.x,M=n.y)),S=.5*(t.xmax+t.xmin)+S*(t.xmax-t.xmin),M=.5*(t.ymax+t.ymin)+M*(t.ymax-t.ymin),S-=i,M-=l,S*=m,M*=m,S+=u,M+=u,[y,S/h-.5,-(M/d-.5)]}function I(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),o=O(t),n=Math.floor(31.5),r=(128-2*(n+1))/Math.max(o.width,o.height),i=Math.round(o.width*r)+2*n,l=Math.round(o.height*r)+2*n,a=[];for(const i of t)if(i&&i.length>1){const t=[];for(const l of i){let[i,a]=l;i-=o.x,a-=o.y,i*=r,a*=r,i+=n-.5,a+=n-.5,t.push(e.asFill?[i,a]:[Math.round(i),Math.round(a)])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}a.push(t)}const s=function(e,t,o,n){const r=t*o,i=new Array(r),l=n*n+1;for(let e=0;e<r;++e)i[e]=l;for(const r of e){const e=r.length;for(let l=1;l<e;++l){const e=r[l-1],a=r[l];let s,c,f,u;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],u=a[1]):(f=a[1],u=e[1]);let m=Math.floor(s)-n,h=Math.floor(c)+n,d=Math.floor(f)-n,y=Math.floor(u)+n;m<0&&(m=0),h>t&&(h=t),d<0&&(d=0),y>o&&(y=o);const S=a[0]-e[0],M=a[1]-e[1],p=S*S+M*M;for(let n=m;n<h;n++)for(let r=d;r<y;r++){let l,s,c=(n-e[0])*S+(r-e[1])*M;c<0?(l=e[0],s=e[1]):c>p?(l=a[0],s=a[1]):(c/=p,l=e[0]+c*S,s=e[1]+c*M);const f=(n-l)*(n-l)+(r-s)*(r-s),u=(o-r-1)*t+n;f<i[u]&&(i[u]=f)}}}for(let e=0;e<r;++e)i[e]=Math.sqrt(i[e]);return i}(a,i,l,n);return e.asFill&&function(e,t,o,n,r){for(const i of e){const e=i.length;for(let l=1;l<e;++l){const e=i[l-1],a=i[l];let s,c,f,u;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],u=a[1]):(f=a[1],u=e[1]);let m=Math.floor(s),h=Math.floor(c)+1,d=Math.floor(f),y=Math.floor(u)+1;m<n&&(m=n),h>t-n&&(h=t-n),d<n&&(d=n),y>o-n&&(y=o-n);for(let i=d;i<y;++i){if(e[1]>i==a[1]>i)continue;const l=(o-i-1)*t;for(let t=m;t<h;++t)t<(a[0]-e[0])*(i-e[1])/(a[1]-e[1])+e[0]&&(r[l+t]=-r[l+t]);for(let e=n;e<m;++e)r[l+e]=-r[l+e]}}}}(a,i,l,n,s),[P(s,n),i,l]}function P(e,t){const o=2*t,n=e.length,r=new Uint8Array(4*n);for(let t=0;t<n;++t)m(.5-e[t]/o,r,4*t);return r}function v(e,o,n,r,i){const l=e.referencesGeometry()&&i?J(o,r,i):o,a=e.repurposeFeature(l);try{return e.evaluate({...n,$feature:a})}catch(e){return t.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const N=new Map;function J(e,n,r){const{transform:i,hasZ:l,hasM:a}=r;N.has(n)||N.set(n,function(e){const n={};switch(e){case"esriGeometryPoint":return(e,t,o,r)=>p(t,n,e,o,r);case"esriGeometryPolygon":return(e,t,o,r)=>M(t,n,e,o,r);case"esriGeometryPolyline":return(e,t,o,r)=>S(t,n,e,o,r);case"esriGeometryMultipoint":return(e,t,o,r)=>y(t,n,e,o,r);default:return t.getLogger("esri.views.2d.support.arcadeOnDemand").error(new o("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(n));const s=N.get(n)(e.geometry,i,l,a);return{...e,geometry:s}}const w=t.getLogger("esri.symbols.cim.cimAnalyzer");function X(e){switch(e){case"Butt":return 0;case"Square":return 2;default:return 1}}function H(e){switch(e){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function z(e){switch(e){default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function L(e){switch(e){default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function $(e,t,o,n){let r;e[t]?r=e[t]:(r={},e[t]=r),r[o]=n}function Y(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function R(e,t,o,r,i){const l=null!=r?r:[];if(!e)return l;let a,s;const c={};if("CIMSymbolReference"!==e.type)return w.error("Expect cim type to be 'CIMSymbolReference'"),l;if(a=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const o of s){const r=o.valueExpressionInfo;if(r&&t){const i=n(r.expression,t.spatialReference,t.fields).then((e=>{e&&$(c,o.primitiveName,o.propertyName,e)}));e.push(i)}else null!=o.value&&$(c,o.primitiveName,o.propertyName,o.value)}e.length>0&&await Promise.all(e)}const f=[];switch(oe(a,o,f),f.length>0&&await Promise.all(f),a.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,o,n,r,i,l){if(!e)return;const a=e.symbolLayers;if(!a)return;const s=e.effects;let c;const f=h.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=1);let u=a.length;for(;u--;){const m=a[u];if(!m||!1===m.enable)continue;let h;s&&s.length&&(h=[...s]);const y=m.effects;y&&y.length&&(s?h.push(...y):h=[...y]);const S=[];switch(d.findApplicableOverrides(m,t,S),m.type){case"CIMSolidFill":A(m,h,o,S,n,r);break;case"CIMPictureFill":F(m,h,o,S,n,r);break;case"CIMHatchFill":x(m,h,o,S,n,r);break;case"CIMGradientFill":W(m,h,o,S,n,r);break;case"CIMSolidStroke":G(m,h,o,S,n,r,"CIMPolygonSymbol"===e.type,f);break;case"CIMPictureStroke":T(m,h,o,S,n,r,"CIMPolygonSymbol"===e.type,f);break;case"CIMGradientStroke":j(m,h,o,S,n,r,"CIMPolygonSymbol"===e.type,f);break;case"CIMCharacterMarker":if(D(m,h,o,S,n,r))break;break;case"CIMPictureMarker":if(D(m,h,o,S,n,r))break;"CIMLineSymbol"===e.type&&(c=Y(m)),B(m,h,o,S,n,r,c,f);break;case"CIMVectorMarker":if(D(m,h,o,S,n,r))break;"CIMLineSymbol"===e.type&&(c=Y(m)),U(m,h,o,S,n,r,i,c,f,l);break;default:w.error("Cannot analyze CIM layer",m.type)}}}(a,s,c,t,l,o,i)}return l}function A(e,t,o,n,l,a){const s=e.primitiveName,c=i(e.color),[f,u]=te(n,s),m=r(JSON.stringify(e)+u).toString();a.push({type:"fill",templateHash:m,materialHash:f?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:K(s,o,"Color",l,c,_),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function F(e,t,o,n,l,a){const s=e.primitiveName,c=e.tintColor?i(e.tintColor):{r:255,g:255,b:255,a:1},[f,u]=te(n,s),m=r(JSON.stringify(e)+u).toString(),h=r(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();a.push({type:"fill",templateHash:m,materialHash:f?()=>h:h,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:K(s,o,"TintColor",l,c,_),height:K(s,o,"Height",l,e.height),scaleX:K(s,o,"ScaleX",l,e.scaleX),angle:K(s,o,"Rotation",l,e.rotation),offsetX:K(s,o,"OffsetX",l,e.offsetX),offsetY:K(s,o,"OffsetY",l,e.offsetY),url:e.url})}function x(e,t,o,n,i,l){const a=["Rotation","OffsetX","OffsetY"],s=n.filter((t=>t.primitiveName!==e.primitiveName&&-1===a.indexOf(t.propertyName))),c=e.primitiveName,[f,u]=te(n,c),m=r(JSON.stringify(e)+u).toString(),h=r(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();l.push({type:"fill",templateHash:m,materialHash:f?Q(h,o,s,i):h,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:K(c,o,"Separation",i,e.separation),scaleX:1,angle:K(c,o,"Rotation",i,e.rotation),offsetX:K(c,o,"OffsetX",i,e.offsetX),offsetY:K(c,o,"OffsetY",i,e.offsetY)})}function W(e,t,o,n,i,l){const a=e.primitiveName,[s,c]=te(n,a),f=r(JSON.stringify(e)+c).toString();l.push({type:"fill",templateHash:f,materialHash:s?Q(f,o,n,i):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function G(e,t,o,n,l,a,s,c){const f=e.primitiveName,u=i(e.color),m=void 0!==e.width?e.width:4,h=X(e.capStyle),d=H(e.joinStyle),y=e.miterLimit,[S,M]=te(n,f),p=r(JSON.stringify(e)+M).toString();let C,O;if(t&&t.length>0){const o=t[t.length-1];if("CIMGeometricEffectDashes"===o.type&&"NoConstraint"===o.lineDashEnding){const o=(t=[...e.effects]).pop();C=o.dashTemplate,O=o.scaleDash}}a.push({type:"line",templateHash:p,materialHash:S?()=>p:p,cim:e,materialOverrides:null,isOutline:s,colorLocked:e.colorLocked,effects:t,color:K(f,o,"Color",l,u,_),width:K(f,o,"Width",l,m),cap:K(f,o,"CapStyle",l,h),join:K(f,o,"JoinStyle",l,d),miterLimit:K(f,o,"MiterLimit",l,y),referenceWidth:c,zOrder:Z(e.name),dashTemplate:C,scaleDash:O})}function T(e,t,o,n,l,a,s,c){const f=r(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),u=e.primitiveName,m=i(e.tintColor),h=void 0!==e.width?e.width:4,d=X(e.capStyle),y=H(e.joinStyle),S=e.miterLimit,[M,p]=te(n,u),C=r(JSON.stringify(e)+p).toString();a.push({type:"line",templateHash:C,materialHash:M?()=>f:f,cim:e,materialOverrides:null,isOutline:s,colorLocked:e.colorLocked,effects:t,color:K(u,o,"TintColor",l,m,_),width:K(u,o,"Width",l,h),cap:K(u,o,"CapStyle",l,d),join:K(u,o,"JoinStyle",l,y),miterLimit:K(u,o,"MiterLimit",l,S),referenceWidth:c,zOrder:Z(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function j(e,t,o,n,i,l,a,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,u=X(e.capStyle),m=H(e.joinStyle),h=e.miterLimit,[d,y]=te(n,c),S=r(JSON.stringify(e)+y).toString();l.push({type:"line",templateHash:S,materialHash:d?Q(S,o,n,i):S,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:K(c,o,"Width",i,f),cap:K(c,o,"CapStyle",i,u),join:K(c,o,"JoinStyle",i,m),miterLimit:K(c,o,"MiterLimit",i,h),referenceWidth:s,zOrder:Z(e.name),dashTemplate:null,scaleDash:!1})}function D(e,t,o,n,i,l){const a=e.markerPlacement;if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1;const s=a,c=["Rotation","OffsetX","OffsetY"],f=n.filter((t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName))),u="url"in e?e.url:null,[m,h]=te(n,s.primitiveName),d=r(JSON.stringify(e)+h).toString();let y=s.stepY,S=null,M=1;return a.shiftOddRows&&(y*=2,S=function(e){return e?2*e:0},M=.5),l.push({type:"fill",templateHash:d,materialHash:m?Q(d,o,f,i):d,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:K(s.primitiveName,o,"StepY",i,y,S),scaleX:M,angle:K(s.primitiveName,o,"GridAngle",i,s.gridAngle),offsetX:K(s.primitiveName,o,"OffsetX",i,s.offsetX),offsetY:K(s.primitiveName,o,"OffsetY",i,s.offsetY),url:u}),!0}function B(e,t,o,n,l,a,s,c){var f;const u=e.primitiveName,m=e.size,h=e.scaleX,d=e.rotation,y=e.offsetX,S=e.offsetY,M=e.tintColor?i(e.tintColor):{r:255,g:255,b:255,a:1},p=r(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[C,O]=te(n,u),b=r(JSON.stringify(e)+O).toString(),g=null!=(f=e.anchorPoint)?f:{x:0,y:0};a.push({type:"marker",templateHash:b,materialHash:C?()=>p:p,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:s,size:K(u,o,"Size",l,m),scaleX:K(u,o,"ScaleX",l,h),rotation:K(u,o,"Rotation",l,d),offsetX:K(u,o,"OffsetX",l,y),offsetY:K(u,o,"OffsetY",l,S),color:K(u,o,"TintColor",l,M,_),anchorPoint:{x:g.x,y:-g.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function U(e,t,o,n,r,i,l,a,s,c){const f=e.markerGraphics;if(!f)return;let u=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(u=t.ymax-t.ymin)}for(const m of f)if(m){const f=m.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":q(e,t,m,n,o,r,i,l,a,s,u,c);break;case"CIMTextSymbol":V(e,t,m,o,n,r,i,a,s,u)}}}function V(e,t,o,n,a,s,f,u,m,y){d.findApplicableOverrides(o,a,[]);const S=o.geometry;if(!("x"in S)||!("y"in S))return;const M=o.symbol,p=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(M),C=function(e){let t="normal",o="normal";if(e){const n=e.toLowerCase();-1!==n.indexOf("italic")?t="italic":-1!==n.indexOf("oblique")&&(t="oblique"),-1!==n.indexOf("bold")?o="bold":-1!==n.indexOf("light")&&(o="lighter")}return{style:t,weight:o}}(M.fontStyleName);M.font={family:M.fontFamilyName,decoration:p,...C};const O=e.frame,b=e.size/y,g=e.primitiveName,k=(M.height||0)*b,I=M.angle||0,P=((M.offsetX||0)+(S.x-.5*(O.xmin+O.xmax)))*b,v=((M.offsetY||0)+(S.y-.5*(O.ymin+O.ymax)))*b,N=i(h.getFillColor(M));let J=i(h.getStrokeColor(M)),w=h.getStrokeWidth(M);w||(J=i(h.getFillColor(M.haloSymbol)),w=M.haloSize*b);const[X,H]=te(a,g),$=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),Y=r(JSON.stringify(o)+$+H).toString(),R=r(JSON.stringify(M.font)).toString(),A=K(o.primitiveName,n,"TextString",s,o.textString,c,M.textCase),{fontFamilyName:F,fontStyleName:x}=M,W=F.toLowerCase()+(x&&x.length>0?"-"+x.toLowerCase():"-regular");f.push({type:"text",templateHash:Y,materialHash:X||"function"==typeof A||A.match(/\[([\w]+)\]/)?(e,t,o)=>R+"-"+l(A,e,t,o):R+"-"+r(A),cim:M,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:u,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:W,decoration:p,weight:K(g,n,"Weight",s,C.weight),style:K(g,n,"Size",s,C.style),size:K(g,n,"Size",s,k),angle:K(g,n,"Rotation",s,I),offsetX:K(g,n,"OffsetX",s,P),offsetY:K(g,n,"OffsetY",s,v),horizontalAlignment:z(M.horizontalAlignment),verticalAlignment:L(M.verticalAlignment),text:A,color:N,outlineColor:J,outlineSize:w,referenceSize:m,sizeRatio:1,markerPlacement:e.markerPlacement})}function q(e,t,o,n,l,a,s,c,f,u,m,d){const y=o.geometry;if(!y)return;const S=o.symbol.symbolLayers;if(!S)return;if(d)return void E(e,t,o,l,n,a,s,c,f,u,m);let M=S.length;if(2!==M||!S[0].enable||!S[1].enable||"CIMSolidStroke"!==S[0].type||"CIMSolidFill"!==S[1].type||S[0].effects||S[1].effects)for(;M--;){const d=S[M];if(d&&!1!==d.enable)switch(d.type){case"CIMSolidFill":case"CIMSolidStroke":{var p,C,O,b;const c=g(y);if(!c)continue;const[S,M,I]=k(c,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),P="CIMSolidFill"===d.type,v={type:"sdf",geom:y,asFill:P},N=e.primitiveName,J=null!=(p=e.size)?p:10,w=null!=(C=e.rotation)?C:0,X=null!=(O=e.offsetX)?O:0,H=null!=(b=e.offsetY)?b:0,z=d.path,L=d.primitiveName,$=i(P?h.getFillColor(d):h.getStrokeColor(d)),Y=P?{r:0,g:0,b:0,a:0}:i(h.getStrokeColor(d)),R=h.getStrokeWidth(d);if(!P&&!R)break;let A=!1,F="";for(const e of n)e.primitiveName!==L&&e.primitiveName!==N||(void 0!==e.value?F+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(A=!0));const x=JSON.stringify({...e,markerGraphics:null}),W=r(JSON.stringify(v)+z).toString(),G={type:"marker",templateHash:r(JSON.stringify(o)+JSON.stringify(d)+x+F).toString(),materialHash:A?()=>W:W,cim:v,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:f,anchorPoint:{x:M,y:I},isAbsoluteAnchorPoint:!1,size:K(e.primitiveName,l,"Size",a,J),rotation:K(e.primitiveName,l,"Rotation",a,w),offsetX:K(e.primitiveName,l,"OffsetX",a,X),offsetY:K(e.primitiveName,l,"OffsetY",a,H),scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:S,color:K(L,l,"Color",a,$,_),outlineColor:K(L,l,"Color",a,Y,_),outlineWidth:K(L,l,"Width",a,R),markerPlacement:e.markerPlacement,path:z};s.push(G);break}default:E(e,t,o,l,n,a,s,c,f,u,m)}}else!function(e,t,o,n,l,a,s,c,f,u){const m=t.geometry,d=o[0],y=o[1],S=g(m);if(!S)return;const[M,p,C]=k(S,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),O={type:"sdf",geom:m,asFill:!0},b=e.primitiveName,I=e.size,P=e.rotation||0,v=e.offsetX,N=e.offsetY,J=y.path,w=y.primitiveName,X=d.primitiveName,H=i(h.getFillColor(y)),z=i(h.getStrokeColor(d)),L=h.getStrokeWidth(d);let $=!1,Y="";for(const e of n)e.primitiveName!==w&&e.primitiveName!==X&&e.primitiveName!==b||(void 0!==e.value?Y+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&($=!0));const R=JSON.stringify({...e,markerGraphics:null}),A=r(JSON.stringify(O)+J).toString(),F={type:"marker",templateHash:r(JSON.stringify(t)+JSON.stringify(y)+JSON.stringify(d)+R+Y).toString(),materialHash:$?()=>A:A,cim:O,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:p,y:C},isAbsoluteAnchorPoint:!1,size:K(e.primitiveName,l,"Size",a,I),rotation:K(e.primitiveName,l,"Rotation",a,P),offsetX:K(e.primitiveName,l,"OffsetX",a,v),offsetY:K(e.primitiveName,l,"OffsetY",a,N),scaleX:1,frameHeight:u,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:M,color:K(w,l,"Color",a,H,_),outlineColor:K(X,l,"Color",a,z,_),outlineWidth:K(X,l,"Width",a,L),markerPlacement:e.markerPlacement,path:J};s.push(F)}(e,o,S,n,l,a,s,f,u,m)}function E(e,t,o,n,i,l,s,c,f,u,m){const d=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}(e,o);let y=[];const S=["Rotation","OffsetX","OffsetY"];y=i.filter((t=>t.primitiveName!==e.primitiveName||-1===S.indexOf(t.propertyName)));let M="";for(const e of i)void 0!==e.value&&(M+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[p,C,O]=h.getTextureAnchor(d,c),b=e.primitiveName,g=e.rotation||0,k=e.offsetX||0,I=e.offsetY||0,P=r(JSON.stringify(d)+M).toString(),v={type:"marker",templateHash:P,materialHash:0===y.length?P:Q(P,n,y,l),cim:d,materialOverrides:y,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:f,anchorPoint:{x:p,y:C},isAbsoluteAnchorPoint:!1,size:e.size,rotation:K(b,n,"Rotation",l,g),offsetX:K(b,n,"OffsetX",l,k),offsetY:K(b,n,"OffsetY",l,I),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:O/a(e.size),markerPlacement:e.markerPlacement};s.push(v)}function Z(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function _(e){if(!e||0===e.length)return null;const t=new f(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function K(e,t,o,n,r,i,l){const a=t[e];if(a){const e=a[o];if("string"==typeof e||"number"==typeof e||e instanceof Array)return i?i.call(null,e,l):e;if(null!=e&&e instanceof s)return(t,o,a)=>{let s=v(e,t,{$view:a},n.geometryType,o);return null!==s&&i&&(s=i.call(null,s,l)),null!==s?s:r}}return r}function Q(e,t,o,n){for(const e of o)if(e.valueExpressionInfo){const o=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];o instanceof s&&(e.fn=(e,t,r)=>v(o,e,{$view:r},n.geometryType,t))}return(t,n,i)=>{for(const e of o)e.fn&&(e.value=e.fn(t,n,i));return r(e+d.buildOverrideKey(o)).toString()}}function ee(e,t){if(!t||0===t.length)return e;const o=JSON.parse(JSON.stringify(e));return d.applyOverrides(o,t),o}function te(e,t){let o=!1,n="";for(const r of e)r.primitiveName===t&&(void 0!==r.value?n+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(o=!0));return[o,n]}function oe(e,t,o){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const n=e.symbolLayers;if(!n)return;for(const e of n)switch(e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&o.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const n=e.markerGraphics;if(!n)continue;for(const e of n)if(e){const n=e.symbol;n&&oe(n,t,o)}}}}}}export{R as C,ee as G,I as m,C as r,v as s}