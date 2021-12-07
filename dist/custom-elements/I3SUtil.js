import { gy as vn, gz as e, am as n, gA as p, gB as n$1, gC as E, a as s$1, gD as Fn, r, t, s as s$2, dG as T, E as E$1, gE as M, gF as h$1, dP as b, gG as u, gH as f, k, eI as tn, gI as O, gJ as p$1, gK as p$2, go as f$1, gL as k$1, eV as xn, eA as o, gM as F, ec as r$1, gN as p$3, gO as H, gP as V$1, gQ as v, gR as w, gS as J, gT as P, aq as d, eC as u$1, gU as h$2, aL as u$2, gV as n$2, gW as n$3, gX as e$1, ee as B, eB as gn, gY as I, bq as f$2, a_ as k$2 } from './index.js';
import { C } from './I3SBinaryReader.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(o,n,a,s){const c=h(o,n,a),i=e();return vn(a,c,i,s),i}const s=1,c=5-s;function h(t,r,a){const h=n(),i=t[3],e=2**(Math.ceil(Math.log(i)*Math.LOG2E/c)*c+s);if(a.isGeographic){const o=e/p(a).radius*180/Math.PI,r=Math.round(t[1]/o),s=Math.max(-90,Math.min(90,r*o)),c=o/Math.cos((Math.abs(s)-o/2)/180*Math.PI),i=Math.round(t[0]/c)*c;h[0]=i,h[1]=s;}else {const o=Math.round(t[0]/e),r=Math.round(t[1]/e);h[0]=o*e,h[1]=r*e;}const M=t[2]+r,m=Math.round(M/e);return h[2]=m*e,h}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function V(e){return e&&parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10)}function X(e){if(s$1("disable-feature:i3s-draco")||!e)return !1;for(const r of e)for(const e of r.geometryBuffers){var t;if("draco"===(null==(t=e.compressedAttributes)?void 0:t.encoding))return !0}return !1}function Y(e,t,r,o,n,a){n.traverse(r,(r=>{let n=r.mbs;t!==o&&(n=oe,Fn(r.mbs,o,n,t));const s=ne(e,n);return 0!==s&&(a(r,s),!0)}));}function _(e,t,r){let o=0,n=0;for(let a=0;a<t.length&&o<e.length;a++)e[o]===t[a]&&(r(a)&&(e[n]=e[o],n++),o++);e.length=n;}function ee(e,r,o){let n=0,a=0;for(;n<o.length;){p$1(e,o[n])>=0===r&&(o[a]=o[n],a++),n++;}o.length=a;}const te=u$2();function re(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return te[0]=(e[0]-t.position[0])/t.rotationScale[0],te[1]=(e[1]-t.position[1])/t.rotationScale[4],te[2]=(e[2]-t.position[0])/t.rotationScale[0],te[3]=(e[3]-t.position[1])/t.rotationScale[4],te}const oe=n$2();function ne(e,t){const r=t[0],o=t[1],n=t[3],a=e[0]-r,s=r-e[2],i=e[1]-o,c=o-e[3],l=Math.max(a,s,0),f=Math.max(i,c,0),u=l*l+f*f;if(u>n*n)return 0;if(u>0)return 1;return -Math.max(a,s,i,c)>n?3:2}function se(e,t,r){const o=[],n=r&&r.missingFields,a=r&&r.originalFields;for(const s of e){const e=s.toLowerCase();let r=!1;for(const n of t)if(e===n.name.toLowerCase()){o.push(n.name),r=!0,a&&a.push(s);break}!r&&n&&n.push(s);}return o}async function ie(e,t$1,o,a,c){if(0===t$1.length)return [];const l=e.attributeStorageInfo;if(r(e.associatedLayer))try{return await le(e.associatedLayer,t$1,o,a)}catch(f){if(e.associatedLayer.loaded)throw f}if(l){const s=ce(t$1,o,c);if(t(s))throw new s$2("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const f=e.parsedUrl.path,u=await Promise.all(s.map((e=>ue(f,l,e.node,e.indices,a).then((t=>{for(let r=0;r<e.graphics.length;r++){const o=e.graphics[r],n=t[r];if(o.attributes)for(const e in o.attributes)e in n||(n[e]=o.attributes[e]);o.attributes=n;}return e.graphics})))));return M(u)}throw new s$2("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function ce(e,t,r){const o=new Map,n=[],a=r();for(const s of e){const e=s.attributes[t];for(let t=0;t<a.length;t++){const r=a[t],i=r.featureIds.indexOf(e);if(i>=0){let e=o.get(r.node);e||(e={node:r.node,indices:[],graphics:[]},n.push(e),o.set(r.node,e)),e.indices.push(i),e.graphics.push(s);for(let r=t;r>0;r--)a[r]=a[r-1];a[0]=r;break}}}return n}async function le(e,t,r,o){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const n=t.map((e=>e.attributes[r])),a=[],s=se(o,e.fields,{originalFields:a}),i=await fe(e,n,s);for(let c=0;c<t.length;c++){const e=t[c],r=i[c],o={};if(e.attributes)for(const t in e.attributes)o[t]=e.attributes[t];for(let t=0;t<a.length;t++)o[a[t]]=r[s[t]];e.attributes=o;}return t}function fe(e,t,a){const s=e.capabilities.query.maxRecordCount;if(null!=s&&t.length>s){const n=h$1(t,s);return Promise.all(n.map((t=>fe(e,t,a)))).then(M)}const i=new b({objectIds:t,outFields:a,orderByFields:[e.objectIdField]});return e.queryFeatures(i).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new s$2("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function ue(t,r,o,n,a){const s=[];for(const e of r)if(e&&-1!==a.indexOf(e.name)){const r=`${t}/nodes/${o.resources.attributes}/attributes/${e.key}/0`;s.push({url:r,storageInfo:e});}return T(s.map((t=>E$1(t.url,{responseType:"array-buffer"}).then((e=>C(t.storageInfo,e.data)))))).then((e=>{const t=[];for(const r of n){const o={};for(let t=0;t<e.length;t++)null!=e[t].value&&(o[s[t].storageInfo.name]=he(e[t].value,r));t.push(o);}return t}))}const pe=-32768,me=-(2**31);function he(e,t){if(!e)return null;const r=e[t];if(u(e))return r===pe?null:r;if(f(e))return r===me?null:r;return r!=r?null:r}function de(e){const t=e.store.indexCRS||e.store.geographicCRS,r=void 0===t?e.store.indexWKT:void 0;if(r){if(!e.spatialReference)throw new s$2("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new s$2("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=t?new k(V(t)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function ye(e){const t=e.store.vertexCRS||e.store.projectedCRS,r=void 0===t?e.store.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new s$2("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new s$2("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=t?new k(V(t)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function be(e,t$1){return t(t$1)?"@null":t$1===O(t$1)?"@ECEF":e.equals(t$1)?"":null!=t$1.wkid?"@"+t$1.wkid:null}function ge(e,t,r){if(!tn(e,t))throw new s$2("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!we(e,t))throw new s$2("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function we(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function Se(e,t,r){const o=de(e),n=ye(e);ge(o,t,r),ge(n,t,r);}function ve(e){return (null==e.geometryType||"triangles"===e.geometryType)&&((null==e.topology||"PerAttributeArray"===e.topology)&&(null!=e.vertexAttributes&&null!=e.vertexAttributes.position))}function Me(e){if(null==e.store||null==e.store.defaultGeometrySchema||!ve(e.store.defaultGeometrySchema))throw new s$2("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function xe(e,t){Se(e,t.spatialReference,t.viewingMode);}function je(e){return null!=e.geometryType&&"points"===e.geometryType&&((null==e.topology||"PerAttributeArray"===e.topology)&&((null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&(null!=e.vertexAttributes&&null!=e.vertexAttributes.position)))}function qe(e){if(null==e.store||null==e.store.defaultGeometrySchema||!je(e.store.defaultGeometrySchema))throw new s$2("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Re(e,t){ge(e.spatialReference,t.spatialReference,t.viewingMode);}function ke(e){return "simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function Te(e){return "mesh-3d"===e.type}function We(e){if(null==e||!ke(e))return !0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return !0;const t$1=e.getSymbols();if(0===t$1.length)return !0;for(const r of t$1){if(!Te(r)||0===r.symbolLayers.length)return !0;for(const e of r.symbolLayers.items)if("fill"!==e.type||t(e.material)||t(e.material.color)||"replace"!==e.material.colorMixMode)return !0}return !1}const ze=p$2({color:[0,0,0,0],opacity:0});class Fe{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0;}}function Ae(e){const t=new Fe;let r$1=!1,o=!1;for(const n of e.symbolLayers.items)if("fill"===n.type&&n.enabled){const e=n.material,a=n.edges;if(r(e)&&!r$1){const o=e.color,a=n$3(e.colorMixMode);r(o)?t.material={color:[o.r/255,o.g/255,o.b/255],alpha:o.a,colorMixMode:a}:t.material={color:[1,1,1],alpha:1,colorMixMode:1},t.castShadows=n.castShadows,r$1=!0;}r(a)&&!o&&(t.edgeMaterial=f$1(a,{}),o=!0);}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:1}),t}function Ie(e,t){return (0|e)+(0|t)|0}function Ce(e,t,r,o$1,n=0){o$1===O(o$1)?t.isGeographic?Qe(e,r,t,n):$e(e,r,t,n):t.isWGS84&&(o$1.isWebMercator||k$1(o$1))?Ue(t,e,o$1,r,n):t.isWebMercator&&k$1(o$1)?Oe(t,e,o$1,r,n):e===r?(r.center[2]+=n,xn(r.center,t,0,r.center,o$1,0,1)):(o(r.center,e.center[0],e.center[1],e.center[2]+n),xn(r.center,t,0,r.center,o$1,0,1),F(r.quaternion,e.quaternion),r$1(r.halfSize,e.halfSize));}function Ue(e,t,r,o,n){r$1(Be,t.center),Be[2]+=n;const a=O(r);xn(Be,e,0,Be,a,0,1),Pe(a,t,Be,r,o);}const Ge=new Float64Array(24),Ke={data:Ge,size:3},Le=n(),Be=n(),Ee=e$1();function Oe(e,t,r,o,n){r$1(Be,t.center),Be[2]+=n,Pe(e,t,Be,r,o);}function Pe(e,t,r,o,n){const a=p$3(Ee,t.quaternion);for(let s=0;s<8;++s){for(let e=0;e<3;++e)Le[e]=t.halfSize[e]*(0!=(s&1<<e)?-1:1);for(let e=0;e<3;++e){let t=r[e];for(let r=0;r<3;++r)t+=Le[r]*a[3*r+e];Ge[3*s+e]=t;}}xn(Ge,e,0,Ge,o,0,8),H(Ke,n);}function $e(e,t,r,o$1){V$1(e,Je),o(t.center,e.center[0],e.center[1],e.center[2]+o$1),vn(r,t.center,De,O(r)),o(t.center,De[12],De[13],De[14]);const n=2*Math.sqrt(1+De[0]+De[5]+De[10]);He[0]=(De[6]-De[9])/n,He[1]=(De[8]-De[2])/n,He[2]=(De[1]-De[4])/n,He[3]=.25*n,v(t.quaternion,He,e.quaternion),w(He,t.quaternion);let a=0,s=0,i=0;for(const c of Je)c[2]+=o$1,xn(c,r,0,c,O(r),0,1),J(Ye,c,t.center),P(Ye,Ye,He),a=Math.max(a,Math.abs(Ye[0])),s=Math.max(s,Math.abs(Ye[1])),i=Math.max(i,Math.abs(Ye[2]));o(t.halfSize,a,s,i);}function Qe(e,t,r,o$1){const n=p(r),a=1+Math.max(0,o$1)/(n.radius+e.center[2]);o(t.center,e.center[0],e.center[1],e.center[2]+o$1),xn(t.center,r,0,t.center,O(r),0,1),F(t.quaternion,e.quaternion),w(He,e.quaternion),o(Ye,0,0,1),P(Ye,Ye,He),o(Ye,e.halfSize[0]*Math.abs(Ye[0]),e.halfSize[1]*Math.abs(Ye[1]),e.halfSize[2]*Math.abs(Ye[2])),d(Ye,Ye,n.inverseFlattening),u$1(t.halfSize,e.halfSize,Ye),d(t.halfSize,t.halfSize,a);}function Ze(e,t$1,r$2,o,n,a$1){if(!a$1||0===a$1.length||t(t$1))return null;const c=a(e.mbs,n,r$2,t$1);let l;h$2(et,c);const f=()=>{if(!l)if(l=Je,B(Ve),r(e.serviceObb)){Ce(e.serviceObb,r$2,Xe,t$1,n),V$1(Xe,l);for(const e of l)I(e,e,et),f$2(Ve,e);}else {const o=e.mbs,a=o[3];gn(o,r$2,Ye,t$1),I(Ye,Ye,et),Ye[2]+=n;for(let e=0;e<8;++e){const t=1&e?a:-a,r=2&e?a:-a,o=4&e?a:-a,n=l[e];r$1(n,[Ye[0]+t,Ye[1]+r,Ye[2]+o]),f$2(Ve,n);}}};let u=1/0,p=-1/0;const h=e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r.hasZ)return;B(Ne);const n=r.spatialReference||o,a=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>(gn(r,n,Ye,t$1),I(Ye,Ye,et),f$2(Ne,Ye),Math.min(Ye[2],e))),e)),1/0);f(),k$2(Ve,Ne)&&(u=Math.min(u,a),p=Math.max(p,a));};if(a$1.forEach((e=>h(e))),u===1/0)return null;const d=(e,t,r)=>{I(Ye,r,c),e[t+0]=Ye[0],e[t+1]=Ye[1],e[t+2]=Ye[2],t+=24,r[2]=u,I(Ye,r,c),e[t+0]=Ye[0],e[t+1]=Ye[1],e[t+2]=Ye[2],t+=24,r[2]=p,I(Ye,r,c),e[t+0]=Ye[0],e[t+1]=Ye[1],e[t+2]=Ye[2];};for(let s=0;s<8;++s)d(_e.data,3*s,l[s]);return H(_e)}const De=e(),He=n$1(),Je=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Ne=u$2(),Ve=u$2(),Xe=E(),Ye=[0,0,0],_e={data:new Array(72),size:3},et=e();

export { Ae as A, Ce as C, Ie as I, Me as M, Re as R, Se as S, We as W, X, Y, Ze as Z, _, a, be as b, he as c, de as d, ee as e, ge as g, h, ie as i, ne as n, qe as q, re as r, se as s, xe as x, ye as y, ze as z };
