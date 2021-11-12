import './jsxFactory-c96bb45c.js';
import { l as e$1 } from './Graphic-6c72131a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=2048,h=1.5,e=8;function n(i,h){const{format:e,quality:n,rotation:o,disableDecorations:a}=i||{},r=j(i,h.padding),l=y(i,{width:h.width-r.left-r.right,height:h.height-r.top-r.bottom}),{width:g,height:f}=p(i,l),u=D(e),d=v[u];return {format:u,quality:e$1(null!=n?n:d,0,100),area:l,width:g,height:f,rotation:o,disableDecorations:!!a,ignoreBackground:!(!i||!i.ignoreBackground),ignorePadding:!(!i||!i.ignorePadding)}}function o(t,i){const h=n(t,i),e=h.area,o=h.width/e.width,a=j(h,i.padding),r=a.left+a.right,l=a.top+a.bottom,g=i.width-r,f=i.height-l,u=Math.floor(g*o+r),d=Math.floor(f*o+l),c=t&&t.layers?t.layers:[],s=h.ignoreBackground,w=h.ignorePadding;return {framebufferWidth:u,framebufferHeight:d,region:{x:Math.floor(e.x*o)+a.left,y:Math.floor(e.y*o)+a.top,width:h.width,height:h.height},format:h.format,quality:h.quality,rotation:h.rotation,pixelRatio:o,layers:c,disableDecorations:h.disableDecorations,ignoreBackground:s,ignorePadding:w}}function a(t,i,h,e){e.premultipliedAlpha&&I(t),h.width=t.width,h.height=t.height;const n=h.getContext("2d");n.putImageData(t,0,0),e.flipY&&q(n);const o=n.getImageData(0,0,t.width,t.height),a=r(h,i);return h.width=0,h.height=0,{dataUrl:a,data:o}}function r(t,i){const h=C[i.format],e=i.quality/100;return t.toDataURL(h,e)}function l(i,h){const e=D(i),n=v[e];return {format:e,quality:e$1(null!=h?h:n,0,100)}}function g(t,i){return i/Math.max(t[0],t[1])}function f(t,i,h){if(!t||!i)throw new Error("Cannot construct image data without dimensions");if(m)try{return new ImageData(t,i)}catch(e){m=!1;}return s(t,i,h)}function u(t,i,h,e){if(!i||!h)throw new Error("Cannot construct image data without dimensions");if(m)try{return new ImageData(t,i,h)}catch(o){m=!1;}const n=s(i,h,e);return n.data.set(t,0),n}function d(t,i,h,e=0,n=0,o=t.width-e,a=t.height-n,r=!1){const{data:l}=t,{width:g,height:f,data:u}=i,d=o/g,c=a/f,s=Math.ceil(d/2),w=Math.ceil(c/2),m=t.width;for(let M=0;M<f;M++)for(let t=0;t<g;t++){const i=4*(t+(r?f-M-1:M)*g);let o=0,a=0,p=0,y=0,x=0,b=0;const j=(M+.5)*c;for(let r=Math.floor(M*c);r<(M+1)*c;r++){const i=Math.abs(j-(r+.5))/w,g=(t+.5)*d,f=i*i;for(let u=Math.floor(t*d);u<(t+1)*d;u++){const t=Math.abs(g-(u+.5))/s,i=Math.sqrt(f+t*t);if(i>=1)continue;let d=2*i*i*i-3*i*i+1;const c=4*(e+u+(n+r)*m);b+=d*l[c+3],a+=d,!h&&l[c+3]<255&&(d=d*l[c+3]/255),p+=d*l[c],y+=d*l[c+1],x+=d*l[c+2],o+=d;}}u[i]=p/o,u[i+1]=y/o,u[i+2]=x/o,u[i+3]=b/a;}return i}function c(t,n,o){if(!n)return t;const{framebufferWidth:a,framebufferHeight:r,pixelRatio:l,region:g}=t,f=j(t,o),u=f.left+f.right,d=f.top+f.bottom,c=a-u,s=r-d,w=Math.min(e,Math.min((i-u)/c,(i-d)/s));return w<h?t:{...t,framebufferWidth:Math.round(c*w)+u,framebufferHeight:Math.round(s*w)+d,pixelRatio:l*w,resample:{region:{x:Math.round((g.x-f.left)*w)+f.left,y:Math.round((g.y-f.top)*w)+f.top,width:Math.round(g.width*w),height:Math.round(g.height*w)},width:a,height:r}}}function s(t,i,h){return h||(h=M()),h.getContext("2d").createImageData(t,i)}let w=null,m=!0;function M(){return w||(w=document.createElement("canvas"),w.width=1,w.height=1),w}function p(t,i){if(!t)return i;const h=t.width,e=t.height;if(null!=h&&null!=e)return {width:Math.floor(h),height:Math.floor(e)};if(null==h&&null==e)return i;const n=i.width/i.height;return null==e?{width:Math.floor(h),height:Math.floor(h/n)}:{width:Math.floor(e*n),height:Math.floor(e)}}function y(t,i){const h={x:0,y:0,width:i.width,height:i.height};if(t&&t.area){null!=t.area.x&&(h.x=Math.floor(t.area.x)),null!=t.area.y&&(h.y=Math.floor(t.area.y));const e=null!=t.area.width?Math.floor(t.area.width):null,n=null!=t.area.height?Math.floor(t.area.height):null;if(h.width=i.width-h.x,h.height=i.height-h.y,null!=e&&null!=n)h.width=Math.min(h.width,e),h.height=Math.min(h.height,n);else if(null==e&&null!=n){const t=Math.min(h.width,e);h.height=t/h.width*h.height,h.width=t;}else if(null!=e&&null==n){const t=Math.min(h.height,n);h.width=t/h.height*h.width,h.height=t;}}return x(b(h,t),i)}function x(t,i){const h=Math.floor(Math.max(t.x,0)),e=Math.floor(Math.max(t.y,0)),n={x:h,y:e,width:Math.floor(Math.min(t.width,i.width-h)),height:Math.floor(Math.min(t.height,i.height-e))},o=n.width/n.height,a=t.width/t.height;if(a===o)return n;if(a>o){const t=Math.floor(n.width/a),i=n.height-t;return {x:n.x,y:Math.floor(n.y+i/2),width:n.width,height:t}}const r=Math.floor(n.height*a),l=n.width-r;return {x:Math.floor(n.x+l/2),y:n.y,width:r,height:n.height}}function b(t,i){if(!i||null==i.width||null==i.height)return t;const h=i.width/i.height,e=t.width/t.height;if(e===h)return t;if(e<h){const i=Math.floor(t.height*h);return t.x-=(i-t.width)/2,t.width=i,t}const n=Math.floor(t.width/h);return t.y-=(n-t.height)/2,t.height=n,t}function j(t,i){return !i||t&&t.ignorePadding?B:i}function D(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return k}}function q(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore();}function I(t){const i=t.data,h=i.length;for(let e=0;e<h;e+=4){const t=i[e+3];if(t>0){const h=t/255;i[e+0]=i[e+0]/h,i[e+1]=i[e+1]/h,i[e+2]=i[e+2]/h;}}}const C={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},P=98,k="png",v={png:100,jpg:P,jpeg:P},B={top:0,right:0,bottom:0,left:0};

export { a, d, f, g, l, u };