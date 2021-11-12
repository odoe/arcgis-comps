import { f as s$1, C as s$2, l as t, M as l$1, e, a as d$1, g as c$2, i as i$1, r as r$1 } from './jsxFactory-c96bb45c.js';
import { a as a$1 } from './JSONSupport-5a9f556a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;const p$1=s$1.getLogger("esri.layers.support.PixelBlock");let c$1=n=class extends a$1{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null;}static createEmptyBand(t,e){return new(n.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array;}return e}castPixelType(t){if(!t)return "f32";let e=t.toLowerCase();return ["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new s$2("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null});}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t);}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let s=0;s<t.length;s++)t[s]&&e++;else e=this.width*this.height;this.validPixelCount=e;}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38];}const[s,i]=e,r=this.pixels,l=this.width*this.height,a=r.length;let o,h,p;const c=[];for(let u=0;u<a;u++){p=n.createEmptyBand(t,l),o=r[u];for(let t=0;t<l;t++)h=o[t],p[t]=h>i?i:h<s?s:h;c.push(p);}this.pixels=c,this.pixelType=t;}extractBands(t$1){if(t(t$1)||0===t$1.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,s=t$1.some((t=>t>=this.pixels.length)),i=e===t$1.length&&!t$1.some(((t,e)=>t!==e));return s||i?this:new n({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t$1.map((t=>this.pixels[t])),statistics:this.statistics&&t$1.map((t=>this.statistics[t]))})}clone(){const t=new n({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const s=n.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const i=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=i?this.pixels[e].slice(0,this.pixels[e].length):new s(this.pixels[e]);}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=l$1(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:s,pixels:i}=this;if(!t||!i||!i.length)return void p$1.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let r,l,a,o;r=l=a=i[0],i.length>=3?(l=i[1],a=i[2]):2===i.length&&(l=i[1]);const h=new Uint32Array(t),n=this.width*this.height;if(r.length===n)if(e&&e.length===n)if(s)for(o=0;o<n;o++)e[o]&&(h[o]=e[o]<<24|a[o]<<16|l[o]<<8|r[o]);else for(o=0;o<n;o++)e[o]&&(h[o]=255<<24|a[o]<<16|l[o]<<8|r[o]);else for(o=0;o<n;o++)h[o]=255<<24|a[o]<<16|l[o]<<8|r[o];else p$1.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");}_fillFromNon8Bit(t){const{pixels:e,mask:s,statistics:i}=this;if(!t||!e||!e.length)return void p$1.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let l=1,a=0,o=1;if(i&&i.length>0)a=i.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=i.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),l=255/o;else {let t=255;"s8"===r?(a=-128,t=127):"u16"===r?t=65535:"s16"===r?(a=-32768,t=32767):"u32"===r?t=4294967295:"s32"===r?(a=-2147483648,t=2147483647):"f32"===r?(a=-34e38,t=34e38):"f64"===r&&(a=-Number.MAX_VALUE,t=Number.MAX_VALUE),l=255/(t-a);}const h=new Uint32Array(t),n=this.width*this.height;let c,u,m,x,f;if(c=u=m=e[0],c.length!==n)return p$1.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(m=e[2]),s&&s.length===n)for(x=0;x<n;x++)s[x]&&(h[x]=255<<24|(m[x]-a)*l<<16|(u[x]-a)*l<<8|(c[x]-a)*l);else for(x=0;x<n;x++)h[x]=255<<24|(m[x]-a)*l<<16|(u[x]-a)*l<<8|(c[x]-a)*l;else if(s&&s.length===n)for(x=0;x<n;x++)f=(c[x]-a)*l,s[x]&&(h[x]=255<<24|f<<16|f<<8|f);else for(x=0;x<n;x++)f=(c[x]-a)*l,h[x]=255<<24|f<<16|f<<8|f;}_fillFrom32Bit(t){const{pixels:e,mask:s}=this;if(!t||!e||!e.length)return p$1.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let i,r,l,a;i=r=l=e[0],e.length>=3?(r=e[1],l=e[2]):2===e.length&&(r=e[1]);const o=this.width*this.height;if(i.length!==o)return p$1.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(s&&s.length===o)for(a=0;a<o;a++)t[h++]=i[a],t[h++]=r[a],t[h++]=l[a],t[h++]=1&s[a];else for(a=0;a<o;a++)t[h++]=i[a],t[h++]=r[a],t[h++]=l[a],t[h++]=1;}_calculateBandStatistics(t,e){let s=1/0,i=-1/0;const r=t.length;let l,a=0;if(e)for(l=0;l<r;l++)e[l]&&(a=t[l],s=a<s?a:s,i=a>i?a:i);else for(l=0;l<r;l++)a=t[l],s=a<s?a:s,i=a>i?a:i;return {minValue:s,maxValue:i}}};e([d$1({json:{write:!0}})],c$1.prototype,"width",void 0),e([d$1({json:{write:!0}})],c$1.prototype,"height",void 0),e([d$1({json:{write:!0}})],c$1.prototype,"pixelType",void 0),e([c$2("pixelType")],c$1.prototype,"castPixelType",null),e([d$1({json:{write:!0}})],c$1.prototype,"validPixelCount",void 0),e([d$1({json:{write:!0}})],c$1.prototype,"mask",void 0),e([d$1({json:{write:!0}})],c$1.prototype,"maskIsAlpha",void 0),e([d$1({json:{write:!0}})],c$1.prototype,"pixels",void 0),e([d$1({json:{write:!0}})],c$1.prototype,"statistics",void 0),c$1=n=e([i$1("esri.layers.support.PixelBlock")],c$1);const u$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e){return r$1(e)&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0}function l(t,e){if(null==e||!e.length||!i(t))return t;const l=t.pixels.length;return e&&e.some((t=>t>=l))||1===l&&1===e.length&&0===e[0]?t:l!==e.length||e.some(((t,e)=>t!==e))?new u$1({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function o(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const n=e.sort(((t,e)=>t[0]-e[0]));let i=0;n[0][0]<0&&(i=n[0][0]);const l=Math.max(256,n[n.length-1][0]-i+1),o=new Uint8Array(4*l),r=[];let s,a=0,f=0;const h=5===n[0].length;if(l>65536)return n.forEach((t=>{r[t[0]-i]=h?t.slice(1):t.slice(1).concat([255]);})),{indexed2DColormap:r,offset:i,alphaSpecified:h};if(t.fillUnspecified)for(s=n[f],a=s[0]-i;a<l;a++)o[4*a]=s[1],o[4*a+1]=s[2],o[4*a+2]=s[3],o[4*a+3]=h?s[4]:255,a===s[0]-i&&(s=f===n.length-1?s:n[++f]);else for(a=0;a<n.length;a++)s=n[a],f=4*(s[0]-i),o[f]=s[1],o[f+1]=s[2],o[f+2]=s[3],o[f+3]=h?s[4]:255;return {indexedColormap:o,offset:i,alphaSpecified:h}}function r(t,e){if(!i(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const n=t.clone(),l=n.pixels;let o=n.mask;const r=n.width*n.height;if(1!==l.length)return t;const{indexedColormap:s,indexed2DColormap:a,offset:f,alphaSpecified:h}=e,u=s.length-1;let c=0;const p=l[0],x=new Uint8Array(p.length),m=new Uint8Array(p.length),d=new Uint8Array(p.length);let g,y=0;if(s)if(o)for(c=0;c<r;c++)o[c]&&(y=4*(p[c]-f),y<f||y>u?o[c]=0:(x[c]=s[y],m[c]=s[y+1],d[c]=s[y+2],o[c]=s[y+3]));else {for(o=new Uint8Array(r),c=0;c<r;c++)y=4*(p[c]-f),y<f||y>u?o[c]=0:(x[c]=s[y],m[c]=s[y+1],d[c]=s[y+2],o[c]=s[y+3]);n.mask=o;}else if(o)for(c=0;c<r;c++)o[c]&&(g=a[p[c]],x[c]=g[0],m[c]=g[1],d[c]=g[2],o[c]=g[3]);else {for(o=new Uint8Array(r),c=0;c<r;c++)g=a[p[c]],x[c]=g[0],m[c]=g[1],d[c]=g[2],o[c]=g[3];n.mask=o;}return n.pixels=[x,m,d],n.statistics=null,n.pixelType="u8",n.maskIsAlpha=h,n}function s(t){if(!i(t))return null;t.statistics||t.updateStatistics();const{pixels:e,mask:n,pixelType:l,statistics:o}=t,r=t.width*t.height,s=e.length;let a,f,h,u,c;const p=[],x=[];let m,d,g,y,w,M,k,A,U,C;const T=256;for(u=0;u<s;u++){if(m=new Uint32Array(T),g=e[u],"u8"===l)if(a=-.5,f=255.5,n)for(c=0;c<r;c++)n[c]&&m[g[c]]++;else for(c=0;c<r;c++)m[g[c]]++;else {if(a=o[u].minValue,f=o[u].maxValue,h=(f-a)/T,d=new Uint32Array(T+1),n)for(c=0;c<r;c++)n[c]&&d[Math.floor((g[c]-a)/h)]++;else for(c=0;c<r;c++)d[Math.floor((g[c]-a)/h)]++;for(c=0;c<255;c++)m[c]=d[c];m[255]=d[255]+d[256];}for(p.push({min:a,max:f,size:T,counts:m}),y=0,w=0,A=0,c=0;c<T;c++)y+=m[c],w+=c*m[c];for(U=w/y,c=0;c<T;c++)A+=m[c]*(c-U)**2;C=Math.sqrt(A/(y-1)),h=(f-a)/T,M=(U+.5)*h+a,k=C*h,x.push({min:a,max:f,avg:M,stddev:k});}return {statistics:x,histograms:p}}function a(t){const e=[];for(let n=0;n<t.length;n++){const{min:i,max:l,size:o,counts:r}=t[n];let s=0,a=0;for(let t=0;t<o;t++)s+=r[t],a+=t*r[t];const f=a/s;let h=0;for(let t=0;t<o;t++)h+=r[t]*(t-f)**2;const u=(l-i)/o,c=(f+.5)*u+i,p=Math.sqrt(h/(s-1))*u;e.push({min:i,max:l,avg:c,stddev:p});}return e}function f(t){const{minCutOff:e,maxCutOff:n,gamma:i,pixelType:l}=t,o=t.outMin||0,r=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(l))return null;const s=e.length;let a,f,u=0;"s8"===l?u=-127:"s16"===l&&(u=-32767);let c=256;["u16","s16"].indexOf(l)>-1&&(c=65536);const p=[],x=[],m=r-o;for(a=0;a<s;a++)x[a]=n[a]-e[a],p[a]=m/(n[a]-e[a]);const d=i&&i.length>=s,g=[];if(d)for(a=0;a<s;a++)i[a]>1?i[a]>2?g[a]=6.5+(i[a]-2)**2.5:g[a]=6.5+100*(2-i[a])**4:g[a]=1;let y;const w=[];let M,k,A;if(d)for(a=0;a<s;a++){for(A=[],f=0;f<c;f++)M=f+u,y=(M-e[a])/x[a],k=1,i[a]>1&&(k-=(1/m)**(y*g[a])),M<n[a]&&M>e[a]?A[f]=Math.floor(k*m*y**(1/i[a]))+o:M>=n[a]?A[f]=r:A[f]=o;w[a]=A;}else for(a=0;a<s;a++){for(A=[],f=0;f<c;f++)M=f+u,M<=e[a]?A[f]=o:M>=n[a]?A[f]=r:A[f]=Math.floor((M-e[a])/x[a]*m)+o;w[a]=A;}if(null!=t.contrastOffset){const e=h(t.contrastOffset,t.brightnessOffset);for(a=0;a<s;a++)for(A=w[a],f=0;f<c;f++)A[f]=e[A[f]];}return {lut:w,offset:u}}function h(t,e){const n=Math.min(Math.max(t,-100),100),i=Math.min(Math.max(e,-100),100),l=255,o=128;let r,s;const a=new Uint8Array(256);for(r=0;r<256;r++)n>0&&n<100?s=(200*r-100*l+2*l*i)/(2*(100-n))+o:n<=0&&n>-100?s=(200*r-100*l+2*l*i)*(100+n)/2e4+o:100===n?(s=200*r-100*l+(l+1)*(100-n)+2*l*i,s=s>0?l:0):-100===n&&(s=o),a[r]=s>l?l:s<0?0:s;return a}function u(t,e=256){e=Math.min(e,256);const{size:n,counts:i}=t,l=new Uint8Array(n),o=i.reduce(((t,n)=>t+n/e),0);let r=0,s=0,a=0,f=o;for(let h=0;h<n;h++)if(a+=i[h],!(h<n-1&&a+i[h+1]<f)){for(;r<e-1&&f<a;)r++,f+=o;for(let t=s;t<=h;t++)l[t]=r;s=h+1;}for(let h=s;h<n;h++)l[h]=e-1;return l}function c(t,e){if(!i(t))return null;const n=t.clone(),{pixels:l,mask:o}=n,{minCutOff:r,maxCutOff:s,gamma:a}=e,f=e.outMin||0,h=e.outMax||255,u=n.width*n.height,c=l.length;let p,x,m,d,g;const y=h-f,w=[],M=[];for(p=0;p<c;p++)M[p]=s[p]-r[p],w[p]=y/(s[p]-r[p]);const k=a&&a.length>=c,A=[];if(k)for(p=0;p<c;p++)a[p]>1?a[p]>2?A[p]=6.5+(a[p]-2)**2.5:A[p]=6.5+100*(2-a[p])**4:A[p]=1;if(k)if(null!=o){for(x=0;x<u;x++)if(o[x])for(p=0;p<c;p++)m=l[p][x],g=(m-r[p])/M[p],d=1,a[p]>1&&(d-=(1/y)**(g*A[p])),m<s[p]&&m>r[p]?l[p][x]=Math.floor(d*y*g**(1/a[p]))+f:m>=s[p]?l[p][x]=h:l[p][x]=f;}else for(x=0;x<u;x++)for(p=0;p<c;p++)m=l[p][x],g=(m-r[p])/M[p],d=1,a[p]>1&&(d-=(1/y)**(g*A[p])),m<s[p]&&m>r[p]?l[p][x]=Math.floor(d*y*g**(1/a[p]))+f:m>=s[p]?l[p][x]=h:l[p][x]=f;else if(null!=o){for(x=0;x<u;x++)if(o[x])for(p=0;p<c;p++)m=l[p][x],m<s[p]&&m>r[p]?l[p][x]=Math.floor((m-r[p])/M[p]*y)+f:m>=s[p]?l[p][x]=h:l[p][x]=f;}else for(x=0;x<u;x++)for(p=0;p<c;p++)m=l[p][x],m<s[p]&&m>r[p]?l[p][x]=Math.floor((m-r[p])/M[p]*y)+f:m>=s[p]?l[p][x]=h:l[p][x]=f;return n.pixelType="u8",n.updateStatistics(),n}function p(t,e){if(!i(t))return null;const{pixels:l,mask:o}=t,r=t.width*t.height,s=l.length;let a=e.lut;const{offset:f}=e;let h,u;a&&1===a[0].length&&(a=l.map((()=>a)));const c=[];let p,x,m;if(f)if(null==o)for(h=0;h<s;h++){for(p=l[h],x=a[h],m=new Uint8Array(r),u=0;u<r;u++)m[u]=x[p[u]-f];c.push(m);}else for(h=0;h<s;h++){for(p=l[h],x=a[h],m=new Uint8Array(r),u=0;u<r;u++)o[u]&&(m[u]=x[p[u]-f]);c.push(m);}else if(null==o)for(h=0;h<s;h++){for(p=l[h],x=a[h],m=new Uint8Array(r),u=0;u<r;u++)m[u]=x[p[u]];c.push(m);}else for(h=0;h<s;h++){for(p=l[h],x=a[h],m=new Uint8Array(r),u=0;u<r;u++)o[u]&&(m[u]=x[p[u]]);c.push(m);}const d=new u$1({width:t.width,height:t.height,pixels:c,mask:o,pixelType:"u8"});return d.updateStatistics(),d}function x(t,e){if(!i(t))return null;const n=t.clone(),{pixels:l}=n,o=n.width*n.height,r=e.length,s=Math.floor(r/2),a=e[Math.floor(s)],f=l[0];let h,u,c,p,x,m,d=!1;const g=new Uint8Array(o),y=new Uint8Array(o),w=new Uint8Array(o);let M=n.mask;const k=4===e[0].mappedColor.length;for(M||(M=new Uint8Array(o),M.fill(k?255:1),n.mask=M),x=0;x<o;x++)if(M[x]){for(h=f[x],d=!1,m=s,u=a,c=0,p=r-1;p-c>1;){if(h===u.value){d=!0;break}h>u.value?c=m:p=m,m=Math.floor((c+p)/2),u=e[Math.floor(m)];}d||(h===e[c].value?(u=e[c],d=!0):h===e[p].value?(u=e[p],d=!0):h<e[c].value?(d=!1,u=null):h>e[c].value&&(h<e[p].value?(u=e[c],d=!0):p===r-1?(d=!1,u=null):(u=e[p],d=!0))),d?(g[x]=u.mappedColor[0],y[x]=u.mappedColor[1],w[x]=u.mappedColor[2],M[x]=u.mappedColor[3]):g[x]=y[x]=w[x]=M[x]=0;}return n.pixels=[g,y,w],n.mask=M,n.pixelType="u8",n.maskIsAlpha=k,n}function m(t,e,n,i,l,o,r,s){return {xmin:l<=n*t?0:l<n*t+t?l-n*t:t,ymin:o<=i*e?0:o<i*e+e?o-i*e:e,xmax:l+r<=n*t?0:l+r<n*t+t?l+r-n*t:t,ymax:o+s<=i*e?0:o+s<i*e+e?o+s-i*e:e}}function d(t$1,n){if(!t$1||0===t$1.length)return null;const i=t$1.filter((t=>t.pixelBlock))[0];if(!i||t(i.pixelBlock))return null;const l=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,o=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,r=.01*Math.min(l,o),s=t$1.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>r?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>r?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,s.map((t=>t.extent.xmin))),f=Math.min.apply(null,s.map((t=>t.extent.ymin))),h=Math.max.apply(null,s.map((t=>t.extent.xmax))),u=Math.max.apply(null,s.map((t=>t.extent.ymax))),c={x:Math.round((n.xmin-a)/l),y:Math.round((u-n.ymax)/o)},p={width:Math.round((h-a)/l),height:Math.round((u-f)/o)},x={width:Math.round((n.xmax-n.xmin)/l),height:Math.round((n.ymax-n.ymin)/o)};if(Math.round(p.width/i.pixelBlock.width)*Math.round(p.height/i.pixelBlock.height)!==s.length||c.x<0||c.y<0||p.width<x.width||p.height<x.height)return null;return {extent:n,pixelBlock:y(s.map((t=>t.pixelBlock)),p,{clipOffset:c,clipSize:x})}}function g(t,e,n,i,l,o){const{width:r,height:s}=n.block,{x:a,y:f}=n.offset,{width:h,height:u}=n.mosaic,c=m(r,s,i,l,a,f,h,u);let p=0,x=0;if(o){const t=o.hasGCSSShiftTransform?360:o.halfWorldWidth,e=r*o.resolutionX,n=o.startX+i*e,l=n+e;n<t&&l>t?x=o.rightPadding:n>=t&&(p=o.leftMargin-o.rightPadding,x=0);}if(c.xmax-=x,"number"!=typeof e)for(let m=c.ymin;m<c.ymax;m++){const n=(l*s+m-f)*h+(i*r-a)+p,o=m*r;for(let i=c.xmin;i<c.xmax;i++)t[n+i]=e[o+i];}else for(let m=c.ymin;m<c.ymax;m++){const n=(l*s+m-f)*h+(i*r-a)+p;for(let i=c.xmin;i<c.xmax;i++)t[n+i]=e;}}function y(l,o,r={}){const{clipOffset:s,clipSize:a,alignmentInfo:f,blockWidths:h}=r;if(h)return w(l,o,{blockWidths:h});const u=l.filter((t=>i(t)))[0];if(t(u))return null;const c=a?a.width:o.width,p=a?a.height:o.height,x=u.width,m=u.height,d=o.width/x,y=o.height/m,M={offset:s||{x:0,y:0},mosaic:a||o,block:{width:x,height:m}},k=u.pixelType,A=u$1.getPixelArrayConstructor(k),U=u.pixels.length,C=[];let T,S;for(let t=0;t<U;t++){S=new A(c*p);for(let e=0;e<y;e++)for(let n=0;n<d;n++){const o=l[e*d+n];i(o)&&(T=o.pixels[t],g(S,T,M,n,e,f));}C.push(S);}let v;if(l.some((t$1=>t(t$1)||t$1.mask&&t$1.mask.length>0))){v=new Uint8Array(c*p);for(let e=0;e<y;e++)for(let n=0;n<d;n++){const i=l[e*d+n],o=r$1(i)?i.mask:null;g(v,o||(i?1:0),M,n,e,f);}}const B=new u$1({width:c,height:p,pixels:C,pixelType:k,mask:v});return B.updateStatistics(),B}function w(e,l,o){const r=e.find((e=>r$1(e)));if(!r$1(r))return null;const s=e.some((e=>!r$1(e)||!!e.mask)),{width:a,height:f}=l,h=s?new Uint8Array(a*f):null,{blockWidths:u}=o,c=[],p=r.getPlaneCount(),x=u$1.getPixelArrayConstructor(r.pixelType);if(s)for(let t=0,n=0;t<e.length;n+=u[t],t++){const l=e[t];if(!i(l))continue;const o=l.mask;for(let e=0;e<f;e++)for(let i=0;i<u[t];i++)h[e*a+i+n]=null==o?255:o[e*l.width+i];}for(let t=0;t<p;t++){const n=new x(a*f);for(let l=0,o=0;l<e.length;o+=u[l],l++){const r=e[l];if(!i(r))continue;const s=r.pixels[t];if(null!=s)for(let t=0;t<f;t++)for(let e=0;e<u[l];e++)n[t*a+e+o]=s[t*r.width+e];}c.push(n);}const m=new u$1({width:a,height:f,mask:h,pixels:c,pixelType:r.pixelType});return m.updateStatistics(),m}function M(t,e,n){if(!i(t))return null;const{width:l,height:o}=t,r=e.x,s=e.y,a=n.width+r,f=n.height+s;if(r<0||s<0||a>l||f>o)return t;if(0===r&&0===s&&a===l&&f===o)return t;t.mask||(t.mask=new Uint8Array(l*o));const h=t.mask;for(let i=0;i<o;i++){const t=i*l;for(let e=0;e<l;e++)h[t+e]=i<s||i>=f||e<r||e>=a?0:1;}return t.updateStatistics(),t}function k(t){if(!i(t))return null;const e=t.clone(),{width:n,height:l,pixels:o,mask:r}=t,s=o[0],a=e.pixels[0];for(let i=2;i<l-1;i++){const t=new Map;for(let l=i-2;l<i+2;l++)for(let e=0;e<4;e++){const i=l*n+e;C(t,s[i],r?r[i]:1);}a[i*n]=A(t),a[i*n+1]=a[i*n+2]=a[i*n];let e=3;for(;e<n-1;e++){let l=(i-2)*n+e+1;C(t,s[l],r?r[l]:1),l=(i-1)*n+e+1,C(t,s[l],r?r[l]:1),l=i*n+e+1,C(t,s[l],r?r[l]:1),l=(i+1)*n+e+1,C(t,s[l],r?r[l]:1),l=(i-2)*n+e-3,U(t,s[l],r?r[l]:1),l=(i-1)*n+e-3,U(t,s[l],r?r[l]:1),l=i*n+e-3,U(t,s[l],r?r[l]:1),l=(i+1)*n+e-3,U(t,s[l],r?r[l]:1),a[i*n+e]=A(t);}a[i*n+e+1]=a[i*n+e];}for(let i=0;i<n;i++)a[i]=a[n+i]=a[2*n+i],a[(l-1)*n+i]=a[(l-2)*n+i];return e.updateStatistics(),e}function A(t){if(0===t.size)return 0;let e=0,n=-1,i=0;const l=t.keys();let o=l.next();for(;!o.done;)i=t.get(o.value),i>e&&(n=o.value,e=i),o=l.next();return n}function U(t,e,n){if(0===n)return;const i=t.get(e);1===i?t.delete(e):t.set(e,i-1);}function C(t,e,n){0!==n&&t.set(e,t.has(e)?t.get(e)+1:1);}function T(t,e,l){let{x:o,y:r}=e;const{width:s,height:a}=l;if(0===o&&0===r&&a===t.height&&s===t.width)return t;const{width:f,height:h}=t,u=Math.max(0,r),c=Math.max(0,o),p=Math.min(o+s,f),x=Math.min(r+a,h);if(p<0||x<0||!i(t))return null;o=Math.max(0,-o),r=Math.max(0,-r);const{pixels:m,mask:d}=t,g=s*a,y=m.length,w=[];for(let i=0;i<y;i++){const e=m[i],l=u$1.createEmptyBand(t.pixelType,g);for(let t=u;t<x;t++){const n=t*f;let i=(t+r-u)*s+o;for(let t=c;t<p;t++)l[i++]=e[n+t];}w.push(l);}const M=new Uint8Array(g);for(let n=u;n<x;n++){const t=n*f;let e=(n+r-u)*s+o;for(let n=c;n<p;n++)M[e++]=d?d[t+n]:1;}const k=new u$1({width:l.width,height:l.height,pixelType:t.pixelType,pixels:w,mask:M});return k.updateStatistics(),k}function S(t,e=!0){if(!i(t))return null;const{pixels:l,width:o,height:r,mask:s,pixelType:a}=t,f=[],h=Math.round(o/2),u=Math.round(r/2),c=r-1,p=o-1;for(let i=0;i<l.length;i++){const t=l[i],s=u$1.createEmptyBand(a,h*u);let x=0;for(let n=0;n<r;n+=2)for(let i=0;i<o;i+=2){const l=t[n*o+i];if(e){const e=i===p?l:t[n*o+i+1],r=n===c?l:t[n*o+i+o],a=i===p?r:n===c?e:t[n*o+i+o+1];s[x++]=(l+e+r+a)/4;}else s[x++]=l;}f.push(s);}let x=null;if(s){x=new Uint8Array(h*u);let t=0;for(let n=0;n<r;n+=2)for(let i=0;i<o;i+=2){const l=s[n*o+i];if(e){const e=i===p?l:s[n*o+i+1],r=n===c?l:s[n*o+i+o],a=i===p?r:n===c?e:s[n*o+i+o+1];x[t++]=l*e*r*a?1:0;}else x[t++]=l;}}return new u$1({width:h,height:u,pixelType:a,pixels:f,mask:x})}function v(t,e,n){if(!i(t))return null;const{width:l,height:o}=e;let{width:r,height:s}=t;const a=new Map,f={x:0,y:0},h=null==n?1:1+n;let u=t;for(let i=0;i<h;i++){const t=Math.ceil(r/l),n=Math.ceil(s/o);for(let r=0;r<n;r++){f.y=r*o;for(let n=0;n<t;n++){f.x=n*l;const t=T(u,f,e);a.set(`${i}/${r}/${n}`,t);}}i<h-1&&(u=S(u)),r=Math.round(r/2),s=Math.round(s/2);}return a}function B(t,e,l,o,r="nearest"){if(!i(t))return null;"majority"===r&&(t=k(t));const{pixels:s,mask:a,pixelType:f}=t,h=t.width,u=t.height,c=u$1.getPixelArrayConstructor(f),p=s.length,{width:x,height:m}=e,d=o.cols,g=o.rows,y=Math.ceil(x/d-.1/d),w=Math.ceil(m/g-.1/g);let M,A,U,C,T,S,v,B=!1;for(let n=0;n<l.length;n+=3)-1===l[n]&&-1===l[n+1]&&-1===l[n+2]&&(B=!0);const b=y*d,O=b*w*g,P=new Float32Array(O),z=new Float32Array(O);let I,W,j=0;const D="majority"===r?0:.5;for(let n=0;n<w;n++)for(let t=0;t<y;t++){M=12*(n*y+t),A=l[M],U=l[M+1],C=l[M+2],T=l[M+3],S=l[M+4],v=l[M+5];for(let e=0;e<g;e++){j=(n*g+e)*b+t*d,W=(e+.5)/g;for(let t=0;t<e;t++)I=(t+.5)/d,P[j+t]=Math.round((A*I+U*W+C)*h-D),z[j+t]=Math.round((T*I+S*W+v)*u-D);}M+=6,A=l[M],U=l[M+1],C=l[M+2],T=l[M+3],S=l[M+4],v=l[M+5];for(let e=0;e<g;e++){j=(n*g+e)*b+t*d,W=(e+.5)/g;for(let t=e;t<d;t++)I=(t+.5)/d,P[j+t]=Math.round((A*I+U*W+C)*h-D),z[j+t]=Math.round((T*I+S*W+v)*u-D);}}const E=(t,e)=>{for(let n=0;n<m;n++){M=n*b;for(let i=0;i<x;i++)P[M]<0||z[M]<0?t[n*x+i]=0:t[n*x+i]=e[P[M]+z[M]*h],M++;}},$=[];let q;for(let n=0;n<p;n++)q=new c(x*m),E(q,s[n]),$.push(q);const F=new u$1({width:x,height:m,pixelType:f,pixels:$});if(a)F.mask=new Uint8Array(x*m),E(F.mask,a);else if(B){F.mask=new Uint8Array(x*m);for(let t=0;t<x*m;t++)F.mask[t]=P[t]<0||z[t]<0?0:1;}return F.updateStatistics(),F}

export { B, M, u as a, a as b, c, d, f, i, l, o, p, r, s, u$1 as u, v, x, y };
