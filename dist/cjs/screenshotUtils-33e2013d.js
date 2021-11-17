'use strict';

require('./messageBundle-312ceb47.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,i,h,e){e.premultipliedAlpha&&I(t),h.width=t.width,h.height=t.height;const n=h.getContext("2d");n.putImageData(t,0,0),e.flipY&&q(n);const o=n.getImageData(0,0,t.width,t.height),a=r(h,i);return h.width=0,h.height=0,{dataUrl:a,data:o}}function r(t,i){const h=C[i.format],e=i.quality/100;return t.toDataURL(h,e)}function l(i,h){const e=D(i),n=v[e];return {format:e,quality:unitUtils.e$1(null!=h?h:n,0,100)}}function g(t,i){return i/Math.max(t[0],t[1])}function f(t,i,h){if(!t||!i)throw new Error("Cannot construct image data without dimensions");if(m)try{return new ImageData(t,i)}catch(e){m=!1;}return s(t,i,h)}function u(t,i,h,e){if(!i||!h)throw new Error("Cannot construct image data without dimensions");if(m)try{return new ImageData(t,i,h)}catch(o){m=!1;}const n=s(i,h,e);return n.data.set(t,0),n}function d(t,i,h,e=0,n=0,o=t.width-e,a=t.height-n,r=!1){const{data:l}=t,{width:g,height:f,data:u}=i,d=o/g,c=a/f,s=Math.ceil(d/2),w=Math.ceil(c/2),m=t.width;for(let M=0;M<f;M++)for(let t=0;t<g;t++){const i=4*(t+(r?f-M-1:M)*g);let o=0,a=0,p=0,y=0,x=0,b=0;const j=(M+.5)*c;for(let r=Math.floor(M*c);r<(M+1)*c;r++){const i=Math.abs(j-(r+.5))/w,g=(t+.5)*d,f=i*i;for(let u=Math.floor(t*d);u<(t+1)*d;u++){const t=Math.abs(g-(u+.5))/s,i=Math.sqrt(f+t*t);if(i>=1)continue;let d=2*i*i*i-3*i*i+1;const c=4*(e+u+(n+r)*m);b+=d*l[c+3],a+=d,!h&&l[c+3]<255&&(d=d*l[c+3]/255),p+=d*l[c],y+=d*l[c+1],x+=d*l[c+2],o+=d;}}u[i]=p/o,u[i+1]=y/o,u[i+2]=x/o,u[i+3]=b/a;}return i}function s(t,i,h){return h||(h=M()),h.getContext("2d").createImageData(t,i)}let w=null,m=!0;function M(){return w||(w=document.createElement("canvas"),w.width=1,w.height=1),w}function D(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return k}}function q(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore();}function I(t){const i=t.data,h=i.length;for(let e=0;e<h;e+=4){const t=i[e+3];if(t>0){const h=t/255;i[e+0]=i[e+0]/h,i[e+1]=i[e+1]/h,i[e+2]=i[e+2]/h;}}}const C={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},P=98,k="png",v={png:100,jpg:P,jpeg:P};

exports.a = a;
exports.d = d;
exports.f = f;
exports.g = g;
exports.l = l;
exports.u = u;
