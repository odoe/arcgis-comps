import{J as n,M as t,gm as r,e as o,d as a,i as e,bj as s,I as i,dr as u,gn as l,go as c,gp as f,gq as g,gr as p,gs as h,gt as m,gu as y,gv as F,bl as v,r as A,gw as w,gx as b,gy as d,gz as j,gA as x,T as P,gB as C,gC as M,G as N,C as z,gD as I,gE as q,gF as B,n as G,gd as J,t as L,gG as O,gH as T,gI as D,gJ as E,gK as H}from"./p-5420851c.js";import{e as K,a as R}from"./p-2794293b.js";import{e as U,a as k}from"./p-01158f1c.js";import{I as Q,v as S,P as V}from"./p-aa3586ef.js";import{T as W,i as X}from"./p-d4dbfa93.js";import{e as Y,a as Z,f as $,o as _}from"./p-b0deb17a.js";function nn(n=en){return[n[0],n[1],n[2],n[3]]}function tn(t,r,o=nn()){return n(o,t),o[3]=r,o}function rn(n,t,o=nn()){return Q(sn,n,an(n)),Q(un,t,an(t)),S(sn,un,sn),function(n,t){return n[3]=t,n}(o,r(V(o,sn)))}function on(n){return n}function an(n){return t(n[3])}const en=[0,0,1,0],sn=K(),un=K();var ln;let cn=ln=class extends s{constructor(n){super(n),this.origin=i(),this.translation=i(),this.rotation=nn(),this.scale=u(1,1,1),this.geographic=!0}get localMatrix(){const n=U();return l(n,n,this.scale),c(n,n,an(this.rotation),this.rotation),f(n,n,this.translation),n}get localMatrixInverse(){return g(U(),this.localMatrix)}applyLocal(n,t){return p(t,n,this.localMatrix)}applyLocalInverse(n,t){return p(t,n,this.localMatrixInverse)}project(n,t){const r=new Float64Array(n.length),o=W.fromTypedArray(r),a=W.fromTypedArray(n);if(this.geographic){const n=d(x(t)),e=U();return h(t,this.origin,e,n),m(e,e,this.localMatrix),Y(o,a,e),y(r,n,0,r,t,0,r.length/3),r}const{localMatrix:e,origin:s}=this;F(e,k)?Z(o,a):Y(o,a,e);for(let n=0;n<r.length;n+=3)r[n+0]+=s[0],r[n+1]+=s[1],r[n+2]+=s[2];return r}getOriginPoint(n){const[t,r,o]=this.origin;return new v({x:t,y:r,z:o,spatialReference:n})}equals(n){return A(n)&&this.geographic===n.geographic&&w(this.origin,n.origin)&&b(this.localMatrix,n.localMatrix)}clone(){const n={origin:j(this.origin),translation:j(this.translation),rotation:nn(this.rotation),scale:j(this.scale),geographic:this.geographic};return new ln(n)}};o([a({type:[Number],nonNullable:!0,json:{write:!0}})],cn.prototype,"origin",void 0),o([a({type:[Number],nonNullable:!0,json:{write:!0}})],cn.prototype,"translation",void 0),o([a({type:[Number],nonNullable:!0,json:{write:!0}})],cn.prototype,"rotation",void 0),o([a({type:[Number],nonNullable:!0,json:{write:!0}})],cn.prototype,"scale",void 0),o([a({type:Boolean,nonNullable:!0,json:{write:!0}})],cn.prototype,"geographic",void 0),o([a()],cn.prototype,"localMatrix",null),o([a()],cn.prototype,"localMatrixInverse",null),cn=ln=o([e("esri.geometry.support.MeshTransform")],cn);const fn=cn;function gn(n,t){var r;return n.isGeographic||n.isWebMercator&&(null==(r=null==t?void 0:t.geographic)||r)}const pn=P.getLogger("esri.geometry.support.meshUtils.normalProjection");function hn(n,t,r,o,a){return xn(o)?(jn(0,X.fromTypedArray(n),W.fromTypedArray(t),W.fromTypedArray(r),o,X.fromTypedArray(a)),a):(pn.error("Cannot convert spatial reference to PCPF"),a)}function mn(n,t,r,o,a){return xn(o)?(jn(1,X.fromTypedArray(n),W.fromTypedArray(t),W.fromTypedArray(r),o,X.fromTypedArray(a)),a):(pn.error("Cannot convert to spatial reference from PCPF"),a)}function yn(n,t,r){return y(n,t,0,r,C(t),0,n.length/3),r}function Fn(n,t,r){return y(n,C(r),0,t,r,0,n.length/3),t}function vn(n,t,r){if(L(n))return t;const o=W.fromTypedArray(n),a=W.fromTypedArray(t);return Y(a,o,r),t}function An(n,t,r){if(L(n))return t;O(zn,r);const o=X.fromTypedArray(n),a=X.fromTypedArray(t);return $(a,o,zn),T(zn)||_(a,a),t}function wn(n,t,r){if(L(n))return t;O(zn,r);const o=X.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),a=X.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if($(a,o,zn),T(zn)||_(a,a),n!==t)for(let r=3;r<n.length;r+=4)t[r]=n[r];return t}function bn(n,t,r,o,a){if(!xn(o))return pn.error("Cannot convert spatial reference to PCPF"),a;jn(0,X.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),W.fromTypedArray(t),W.fromTypedArray(r),o,X.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<n.length;t+=4)a[t]=n[t];return a}function dn(n,t,r,o,a){if(!xn(o))return pn.error("Cannot convert to spatial reference from PCPF"),a;jn(1,X.fromTypedArray(n,16),W.fromTypedArray(t),W.fromTypedArray(r),o,X.fromTypedArray(a,16));for(let t=3;t<n.length;t+=4)a[t]=n[t];return a}function jn(n,t,r,o,a,e){if(!t)return;const s=r.count,i=C(a);if(Pn(a))for(let r=0;r<s;r++)o.getVec(r,Cn),t.getVec(r,Mn),h(i,Cn,Nn,i),I(zn,Nn),1===n&&q(zn,zn),B(Mn,Mn,zn),e.setVec(r,Mn);else for(let a=0;a<s;a++){o.getVec(a,Cn),t.getVec(a,Mn),h(i,Cn,Nn,i),I(zn,Nn);const s=G(r.get(a,1));let u=Math.cos(s);0===n&&(u=1/u),zn[0]*=u,zn[1]*=u,zn[2]*=u,zn[3]*=u,zn[4]*=u,zn[5]*=u,1===n&&q(zn,zn),B(Mn,Mn,zn),J(Mn,Mn),e.setVec(a,Mn)}return e}function xn(n){return Pn(n)||function(n){return n.isWebMercator}(n)}function Pn(n){return n.isWGS84||M(n)||N(n)||z(n)}const Cn=i(),Mn=i(),Nn=U(),zn=R();function In(n,t,r){return gn(t.spatialReference,r)?function(n,t,r){const o=t.spatialReference,a=En(t,r,Un),e=new Float64Array(n.position.length),s=function(n,t,r,o){Y(W.fromTypedArray(o),W.fromTypedArray(n),t);return Fn(o,new Float64Array(n.length),r)}(n.position,a,o,e),i=O(Qn,a);return{position:s,normal:Ln(s,e,n.normal,i,o),tangent:On(s,e,n.tangent,i,o)}}(n,t,r):function(n,t,r){const o=new Float64Array(n.position.length),a=n.position,e=t.x,s=t.y,i=t.z||0,{horizontal:u,vertical:l}=Rn(r?r.unit:null,t.spatialReference);for(let n=0;n<a.length;n+=3)o[n+0]=a[n+0]*u+e,o[n+1]=a[n+1]*u+s,o[n+2]=a[n+2]*l+i;return{position:o,normal:n.normal,tangent:n.tangent}}(n,t,r)}function qn(n,t,r){const{position:o,normal:a,tangent:e}=n;if(L(t))return{position:o,normal:a,tangent:e};const s=t.localMatrix;return In({position:vn(o,new Float64Array(o.length),s),normal:A(a)?An(a,new Float32Array(a.length),s):null,tangent:A(e)?wn(e,new Float32Array(e.length),s):null},t.getOriginPoint(r),{geographic:t.geographic})}function Bn(n,t,r){if(null!=r&&r.useTransform){var o;const{position:a,normal:e,tangent:s}=n;return{vertexAttributes:{position:a,normal:e,tangent:s},transform:new fn({origin:[t.x,t.y,null!=(o=t.z)?o:0],geographic:gn(t.spatialReference,r)})}}return{vertexAttributes:In(n,t,r),transform:null}}function Gn(n,t,r){return gn(t.spatialReference,r)?Dn(n,t,r):Tn(n,t,r)}function Jn(n,t,r,o){if(L(t))return Gn(n,r,o);const a=qn(n,t,r.spatialReference);return r.equals(t.getOriginPoint(r.spatialReference))?Tn(a,r,o):gn(r.spatialReference,o)?Dn(a,r,o):Tn(a,r,o)}function Ln(n,t,r,o,a){if(L(r))return null;const e=new Float32Array(r.length);return $(X.fromTypedArray(e),X.fromTypedArray(r),o),mn(e,n,t,a,e),e}function On(n,t,r,o,a){if(L(r))return null;const e=new Float32Array(r.length);$(X.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),X.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o);for(let n=3;n<e.length;n+=4)e[n]=r[n];return dn(e,n,t,a,e),e}function Tn(n,t,r){const o=new Float64Array(n.position.length),a=n.position,e=t.x,s=t.y,i=t.z||0,{horizontal:u,vertical:l}=Rn(r?r.unit:null,t.spatialReference);for(let n=0;n<a.length;n+=3)o[n+0]=(a[n+0]-e)/u,o[n+1]=(a[n+1]-s)/u,o[n+2]=(a[n+2]-i)/l;return{position:o,normal:n.normal,tangent:n.tangent}}function Dn(n,t,r){const o=t.spatialReference;En(t,r,Un);const a=g(kn,Un),e=new Float64Array(n.position.length),s=function(n,t,r,o){const a=yn(n,t,o),e=W.fromTypedArray(a),s=new Float64Array(a.length),i=W.fromTypedArray(s);return Y(i,e,r),s}(n.position,o,a,e),i=O(Qn,a);return{position:s,normal:Hn(n.normal,n.position,e,o,i),tangent:Kn(n.tangent,n.position,e,o,i)}}function En(n,t,r){h(n.spatialReference,[n.x,n.y,n.z||0],r,C(n.spatialReference));const{horizontal:o,vertical:a}=Rn(t?t.unit:null,n.spatialReference);return l(r,r,[o,o,a]),r}function Hn(n,t,r,o,a){if(L(n))return null;const e=hn(n,t,r,o,new Float32Array(n.length)),s=X.fromTypedArray(e);return $(s,s,a),e}function Kn(n,t,r,o,a){if(L(n))return null;const e=bn(n,t,r,o,new Float32Array(n.length)),s=X.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);return $(s,s,a),e}function Rn(n,t){if(L(n))return Sn;const r=t.isGeographic?1:D(t),o=t.isGeographic?1:E(t),a=H(1,n,"meters");return{horizontal:a*r,vertical:a*o}}const Un=U(),kn=U(),Qn=R(),Sn={horizontal:1,vertical:1};export{bn as B,hn as F,Fn as M,fn as O,dn as R,qn as _,mn as a,Bn as b,nn as c,an as d,tn as e,Jn as f,Gn as k,on as l,rn as q,gn as r,yn as v,In as x}