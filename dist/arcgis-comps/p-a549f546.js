import{gY as t,gZ as n,a8 as e,ew as o,g as r,a9 as i,W as a,ac as l,g_ as s,a7 as c,g$ as u}from"./p-7b6f6c18.js";const f=5e-4;function h(t,n,e){return!s(t,n,e)}function M(n,e,o){const r=h(n,e,o);if(r&&!t())throw new c("rasterprojectionhelper-project","projection engine is not loaded");return r}const m=function(t,n,e){const o=(t[0]+t[4]+t[4*n.cols]+t[4*n.cols+4])/4,r=(t[1]+t[5]+t[4*n.rows+1]+t[4*n.rows+5])/4,i=(t[4*n.cols]-t[0]+t[4*n.cols+4]-t[4])/e[0]*.5,a=(t[4*n.cols+1]-t[1]+t[4*n.cols+5]-t[5])/e[1]*.5;return[0===i||isNaN(i)?0:Math.abs(o-t[2*n.rows+2])/Math.abs(i),0===a||isNaN(a)?0:Math.abs(r-t[2*n.rows+3])/Math.abs(a)]},x={3395:20037508.342789244,3410:17334193.943686873,3832:3339584.723798206,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,8858:7396237.374497803,8859:2465412.4581659334,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53025:7276828.3848298555,53031:10384677.558821043,53034:20015086.79602057,53036:7389443.187332862,53037:2463147.729110953,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54025:7311399.09166516,54031:10396310.810074743,54034:20037508.342789244,54053:1920897.3915568967,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244,102038:4297258.582585486,102299:5013965.117483125};async function d(){if(t())return null;await n()}function p(t,n,e){return M(t.spatialReference,n)?e?u(n,t.spatialReference,t):u(t.spatialReference,n,t):null}function y(t,n,i,a=null){if(t.spatialReference.equals(n))return t;M(t.spatialReference,n,a);const l=i.center,s=new e({xmin:l.x-t.x/2,xmax:l.x+t.x/2,ymin:l.y-t.y/2,ymax:l.y+t.y/2,spatialReference:t.spatialReference}),c=o(s,n,a);return r(c)?null:{x:c.xmax-c.xmin,y:c.ymax-c.ymin}}function w(t,n=.01){return i(t)?n/i(t):0}function g(t,n,e=null,r=!0){const i=t.spatialReference;if(i.equals(n))return t;M(i,n,e);const a=o(t,n,e);if(r&&n.isGeographic){const[n,e]=C(i,!0),o=w(i);o&&null!=n&&null!=e&&(Math.abs(t.x-n)<o&&Math.abs(180-a.x)<f?a.x-=360:Math.abs(t.x-e)<o&&Math.abs(180+a.x)<f&&(a.x+=360))}return a}function R(t){const n=S(t[0].spatialReference);if(t.length<2||!a(n))return t[0];let{xmin:o,xmax:r,ymin:i,ymax:l}=t[0];for(let e=1;e<t.length;e++){const o=t[e];r=o.xmax+n*e,i=Math.min(i,o.ymin),l=Math.max(l,o.ymax)}return new e({xmin:o,xmax:r,ymin:i,ymax:l,spatialReference:t[0].spatialReference})}function N(t,n,e=null,o=!0){if(t.spatialReference.equals(n))return t;const r=z(t),i=S(t.spatialReference,!0);return a(i)&&0!==r?R(t.clone().normalize().map((t=>v(t,n,e,o)))):v(t,n,e,o)}function v(t,n,e=null,r=!0){const i=t.spatialReference;if(i.equals(n))return t;M(i,n,e);const a=o(t,n,e);let[s,c]=C(i,!0);if(a&&r&&i.isWebMercator&&n.isGeographic&&null!=s&&null!=c){const o=.001,r=1e3;if(Math.abs(t.xmin-s)<o&&Math.abs(c-t.xmax)>r&&Math.abs(180-a.xmax)<f){a.xmin=-180;const o=[];o.push(new l(t.xmax,t.ymin,i)),o.push(new l(t.xmax,(t.ymin+t.ymax)/2,i)),o.push(new l(t.xmax,t.ymax,i));const r=o.map((t=>g(t,n,e))).filter((t=>!isNaN(null==t?void 0:t.x))).map((t=>t.x));a.xmax=Math.max.apply(null,r)}if(Math.abs(t.xmax-c)<o&&Math.abs(s-t.xmin)>r&&Math.abs(180+a.xmin)<f){a.xmax=180;const o=[];o.push(new l(t.xmin,t.ymin,i)),o.push(new l(t.xmin,(t.ymin+t.ymax)/2,i)),o.push(new l(t.xmin,t.ymax,i));const r=o.map((t=>g(t,n,e))).filter((t=>!isNaN(null==t?void 0:t.x))).map((t=>t.x));a.xmin=Math.min.apply(null,r)}}[s,c]=C(n,!0);const u=w(n);return u&&null!=s&&null!=c&&a&&(Math.abs(a.xmin-s)<u&&(a.xmin=s),Math.abs(a.xmax-c)<u&&(a.xmax=c)),a}function S(t,n=!1){return t.isWebMercator?2*(n?20037508.342787:20037508.342788905):t.wkid&&t.isGeographic?360:2*x[t.wkid]||null}function C(t,n=!1){const e=[],o=S(t,n);return a(o)&&(e.push(-o/2),e.push(o/2)),e}function j(t,n,e,o){let r=(t-n)/e;return r-Math.floor(r)!=0?r=Math.floor(r):o&&(r-=1),r}function z(t,n=!1){const e=S(t.spatialReference);if(!a(e))return 0;const o=n?0:-e/2;return j(t.xmax,o,e,!0)-j(t.xmin,o,e,!1)}function W(t){const n=t.storageInfo.origin.x,e=S(t.spatialReference,!0);if(!a(e))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const o=e/2,{nativePixelSize:r,storageInfo:i,extent:l}=t,{maximumPyramidLevel:s,blockWidth:c,pyramidScalingFactor:u}=i;let f=r.x;const h=[],M=a(t.transform)&&"gcs-shift"===t.transform.type,m=n+o,x=M?e-n:o-n;for(let t=0;t<=s;t++){const t=(l.xmax-n)/f/c,o=t-Math.floor(t)==0?t:Math.ceil(t),r=(e/2-n)/f/c,i=r-Math.floor(r)==0?r:Math.ceil(r),a=Math.floor(m/f/c),s=Math.round(m/f)%c,M=(c-Math.round(x/f)%c)%c;h.push({resolutionX:f,blockWidth:c,datsetColumnCount:o,worldColumnCountFromOrigin:i,leftMargin:s,rightPadding:M,originColumnOffset:a}),f*=u}return{originX:n,halfWorldWidth:o,pyramidsInfo:h,hasGCSSShiftTransform:M}}function P(t){const n=t.isAdaptive&&null==t.spacing,e=t.spacing||[32,32];let o=F(t),r={cols:o.size[0]+1,rows:o.size[1]+1},i=m(o.offsets,r,e);const a=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;return n&&(a||(i[0]+i[1])/2>4)&&(o=F({...t,spacing:[4,4]}),r={cols:o.size[0]+1,rows:o.size[1]+1},i=m(o.offsets,r,e)),o.error=i,o.coefficients=function(t,n,e){const{cols:o,rows:r}=n,i=new Float32Array((o-1)*(r-1)*2*6),a=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),l=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let n=0;n<o-1;n++){for(let e=0;e<r-1;e++){let s=n*r*2+2*e;const c=t[s],u=t[s+1],f=t[s+2],h=t[s+3];s+=2*r;const M=t[s],m=t[s+1],x=t[s+2],d=t[s+3];let p=0,y=12*(e*(o-1)+n);for(let t=0;t<3;t++)i[y++]=a[p++]*c+a[p++]*f+a[p++]*x;p=0;for(let t=0;t<3;t++)i[y++]=a[p++]*u+a[p++]*h+a[p++]*d;p=0;for(let t=0;t<3;t++)i[y++]=l[p++]*c+l[p++]*M+l[p++]*x;p=0;for(let t=0;t<3;t++)i[y++]=l[p++]*u+l[p++]*m+l[p++]*d}if(e)for(let t=0;t<i.length;t++)isNaN(i[t])&&(i[t]=-1)}return i}(o.offsets,r,a),o}function F(t){const{projectedExtent:n,srcBufferExtent:e,pixelSize:r,datumTransformation:i,rasterTransform:s}=t,c=n.spatialReference,u=e.spatialReference;M(c,u);const{xmin:f,ymin:h,xmax:m,ymax:x}=n,d=S(u),p=t.hasWrapAround||"gcs-shift"===(null==s?void 0:s.type),y=t.spacing||[32,32],w={x:y[0]*r.x,y:y[1]*r.y},g=Math.ceil((m-f)/w.x-.1/y[0])+1,R=Math.ceil((x-h)/w.y-.1/y[1])+1,N=w.x,v=w.y,C=[];let j,z=0;const W=[];for(let t=0;t<g;t++)for(let n=0;n<R;n++)W.push(new l({x:f+N*t,y:x-v*n,spatialReference:c}));const P=function(t,n,e=null){const r=t[0].spatialReference;return r.equals(n)?t:(M(r,n,e),o(t,n,e))}(W,u,i);for(let t=0;t<g;t++){const n=[];for(let o=0;o<R;o++){let r=P[t*R+o];s&&(r=s.inverseTransform(r)),n.push(r),t>0&&p&&r&&j[o]&&a(d)&&r.x<j[o].x&&(r.x+=d),r?(C.push((r.x-e.xmin)/(e.xmax-e.xmin)),C.push((e.ymax-r.y)/(e.ymax-e.ymin))):(C.push(NaN),C.push(NaN),z++)}j=n}return{offsets:C,error:null,coefficients:null,outofBoundPointCount:z,spacing:y,size:[g-1,R-1]}}function T(t){const n=t.clone().normalize();return 1===n.length?n[0]:R(n)}function b(t,n,e){const{storageInfo:o,pixelSize:r}=n;let i,s=!1;const{pyramidResolutions:c}=o;if(a(c)&&c.length){const o=(t.x+t.y)/2,a=c[c.length-1],u=(a.x+a.y)/2,f=(r.x+r.y)/2;if(o<=f)i=0;else if(o>=u)i=c.length,s=o/u>8;else{let t,n=f;for(let r=1;r<=c.length;r++){if(t=(c[r-1].x+c[r-1].y)/2,o<=t){o===t?i=r:"down"===e?(i=r-1,s=o/n>8):i="up"===e||o-n>t-o||o/n>2?r:r-1;break}n=t}}const h=0===i?r:c[i-1];return{pyramidLevel:i,pyramidResolution:new l({x:h.x,y:h.y,spatialReference:n.spatialReference}),excessiveReading:s}}const u=Math.log(t.x/r.x)/Math.LN2,f=Math.log(t.y/r.y)/Math.LN2,h=n.storageInfo.maximumPyramidLevel||0;i="down"===e?Math.floor(Math.min(u,f)):"up"===e?Math.ceil(Math.max(u,f)):Math.round((u+f)/2),i<0?i=0:i>h&&(s=i>h+3,i=h);const M=2**i;return{pyramidLevel:i,pyramidResolution:new l({x:M*n.nativePixelSize.x,y:M*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:s}}function k(t,n,e=512,o=!0){const{extent:r,spatialReference:a,pixelSize:s}=t,c=y(new l({x:s.x,y:s.y,spatialReference:a}),n,r);if(null==c)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(c.x+c.y)/2,f=i(n),h=u*f*96*39.37,M=n.isGeographic?256/e*295828763.7958547:256/e*591657527.591555;let m="vector-magdir"===t.dataType||"vector-uv"===t.dataType;const x=N(r,n);m||o&&(n.isGeographic||n.isWebMercator)&&(m=x.xmin*x.xmax<0);let d,p=h;const w=1.001;if(m){p=M;const t=n.isGeographic?1341104507446289e-21:.29858214164761665,e=t*(96*f*39.37);d=y(new l({x:t,y:t,spatialReference:{wkid:n.isGeographic?4326:3857}}),a,x),d.x*=p/e,d.y*=p/e}else{d={x:s.x,y:s.y};const n=Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2);let e=0;for(;p<M*(w/2)&&e<n;)e++,p*=2,d.x*=2,d.y*=2;Math.max(p,M)/Math.min(p,M)<=w&&(p=M)}const g=[p],R=[{x:d.x,y:d.y}],v=Math.min(70.5310735,h)/w;for(;p>=v;)p/=2,d.x/=2,d.y/=2,g.push(p),R.push({x:d.x,y:d.y});return{projectedPixelSize:c,scales:g,srcResolutions:R,isCustomTilingScheme:!m}}export{b as A,k as F,z as G,P as L,S as P,y as R,W as T,d,N as j,T as q,g as v,p as w,h as x}