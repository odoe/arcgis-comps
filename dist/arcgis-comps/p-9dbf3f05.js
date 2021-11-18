import{v as t,e,d as i,c as n,i as s,m as r,t as l,H as o,r as a}from"./p-9ae46e68.js";import{a as f}from"./p-fe01b82b.js";var h;const c=t.getLogger("esri.layers.support.PixelBlock");let u=h=class extends f{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(h.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new r("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,n]=e,s=this.pixels,r=this.width*this.height,l=s.length;let o,a,f;const c=[];for(let e=0;e<l;e++){f=h.createEmptyBand(t,r),o=s[e];for(let t=0;t<r;t++)a=o[t],f[t]=a>n?n:a<i?i:a;c.push(f)}this.pixels=c,this.pixelType=t}extractBands(t){if(l(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),n=e===t.length&&!t.some(((t,e)=>t!==e));return i||n?this:new h({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new h({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(t.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));const i=h.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const n=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=n?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=o(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:n}=this;if(!t||!n||!n.length)return void c.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let s,r,l,o;s=r=l=n[0],n.length>=3?(r=n[1],l=n[2]):2===n.length&&(r=n[1]);const a=new Uint32Array(t),f=this.width*this.height;if(s.length===f)if(e&&e.length===f)if(i)for(o=0;o<f;o++)e[o]&&(a[o]=e[o]<<24|l[o]<<16|r[o]<<8|s[o]);else for(o=0;o<f;o++)e[o]&&(a[o]=255<<24|l[o]<<16|r[o]<<8|s[o]);else for(o=0;o<f;o++)a[o]=255<<24|l[o]<<16|r[o]<<8|s[o];else c.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:n}=this;if(!t||!e||!e.length)return void c.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const s=this.pixelType;let r=1,l=0,o=1;if(n&&n.length>0)l=n.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=n.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),r=255/o;else{let t=255;"s8"===s?(l=-128,t=127):"u16"===s?t=65535:"s16"===s?(l=-32768,t=32767):"u32"===s?t=4294967295:"s32"===s?(l=-2147483648,t=2147483647):"f32"===s?(l=-34e38,t=34e38):"f64"===s&&(l=-Number.MAX_VALUE,t=Number.MAX_VALUE),r=255/(t-l)}const a=new Uint32Array(t),f=this.width*this.height;let h,u,p,w,x;if(h=u=p=e[0],h.length!==f)return c.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(p=e[2]),i&&i.length===f)for(w=0;w<f;w++)i[w]&&(a[w]=255<<24|(p[w]-l)*r<<16|(u[w]-l)*r<<8|(h[w]-l)*r);else for(w=0;w<f;w++)a[w]=255<<24|(p[w]-l)*r<<16|(u[w]-l)*r<<8|(h[w]-l)*r;else if(i&&i.length===f)for(w=0;w<f;w++)x=(h[w]-l)*r,i[w]&&(a[w]=255<<24|x<<16|x<<8|x);else for(w=0;w<f;w++)x=(h[w]-l)*r,a[w]=255<<24|x<<16|x<<8|x}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return c.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let n,s,r,l;n=s=r=e[0],e.length>=3?(s=e[1],r=e[2]):2===e.length&&(s=e[1]);const o=this.width*this.height;if(n.length!==o)return c.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let a=0;if(i&&i.length===o)for(l=0;l<o;l++)t[a++]=n[l],t[a++]=s[l],t[a++]=r[l],t[a++]=1&i[l];else for(l=0;l<o;l++)t[a++]=n[l],t[a++]=s[l],t[a++]=r[l],t[a++]=1}_calculateBandStatistics(t,e){let i=1/0,n=-1/0;const s=t.length;let r,l=0;if(e)for(r=0;r<s;r++)e[r]&&(l=t[r],i=l<i?l:i,n=l>n?l:n);else for(r=0;r<s;r++)l=t[r],i=l<i?l:i,n=l>n?l:n;return{minValue:i,maxValue:n}}};e([i({json:{write:!0}})],u.prototype,"width",void 0),e([i({json:{write:!0}})],u.prototype,"height",void 0),e([i({json:{write:!0}})],u.prototype,"pixelType",void 0),e([n("pixelType")],u.prototype,"castPixelType",null),e([i({json:{write:!0}})],u.prototype,"validPixelCount",void 0),e([i({json:{write:!0}})],u.prototype,"mask",void 0),e([i({json:{write:!0}})],u.prototype,"maskIsAlpha",void 0),e([i({json:{write:!0}})],u.prototype,"pixels",void 0),e([i({json:{write:!0}})],u.prototype,"statistics",void 0),u=h=e([s("esri.layers.support.PixelBlock")],u);const p=u;function w(t){return a(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function x(t,e){if(null==e||!e.length||!w(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new p({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function y(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let n=0;i[0][0]<0&&(n=i[0][0]);const s=Math.max(256,i[i.length-1][0]-n+1),r=new Uint8Array(4*s),l=[];let o,a=0,f=0;const h=5===i[0].length;if(s>65536)return i.forEach((t=>{l[t[0]-n]=h?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:l,offset:n,alphaSpecified:h};if(t.fillUnspecified)for(o=i[f],a=o[0]-n;a<s;a++)r[4*a]=o[1],r[4*a+1]=o[2],r[4*a+2]=o[3],r[4*a+3]=h?o[4]:255,a===o[0]-n&&(o=f===i.length-1?o:i[++f]);else for(a=0;a<i.length;a++)o=i[a],f=4*(o[0]-n),r[f]=o[1],r[f+1]=o[2],r[f+2]=o[3],r[f+3]=h?o[4]:255;return{indexedColormap:r,offset:n,alphaSpecified:h}}function d(t,e){if(!w(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),n=i.pixels;let s=i.mask;const r=i.width*i.height;if(1!==n.length)return t;const{indexedColormap:l,indexed2DColormap:o,offset:a,alphaSpecified:f}=e,h=l.length-1;let c=0;const u=n[0],p=new Uint8Array(u.length),x=new Uint8Array(u.length),y=new Uint8Array(u.length);let d,m=0;if(l)if(s)for(c=0;c<r;c++)s[c]&&(m=4*(u[c]-a),m<a||m>h?s[c]=0:(p[c]=l[m],x[c]=l[m+1],y[c]=l[m+2],s[c]=l[m+3]));else{for(s=new Uint8Array(r),c=0;c<r;c++)m=4*(u[c]-a),m<a||m>h?s[c]=0:(p[c]=l[m],x[c]=l[m+1],y[c]=l[m+2],s[c]=l[m+3]);i.mask=s}else if(s)for(c=0;c<r;c++)s[c]&&(d=o[u[c]],p[c]=d[0],x[c]=d[1],y[c]=d[2],s[c]=d[3]);else{for(s=new Uint8Array(r),c=0;c<r;c++)d=o[u[c]],p[c]=d[0],x[c]=d[1],y[c]=d[2],s[c]=d[3];i.mask=s}return i.pixels=[p,x,y],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function m(t){if(!w(t))return null;t.statistics||t.updateStatistics();const{pixels:e,mask:i,pixelType:n,statistics:s}=t,r=t.width*t.height,l=e.length;let o,a,f,h,c;const u=[],p=[];let x,y,d,m,A,M,k,g,b,U;const v=256;for(h=0;h<l;h++){if(x=new Uint32Array(v),d=e[h],"u8"===n)if(o=-.5,a=255.5,i)for(c=0;c<r;c++)i[c]&&x[d[c]]++;else for(c=0;c<r;c++)x[d[c]]++;else{if(o=s[h].minValue,a=s[h].maxValue,f=(a-o)/v,y=new Uint32Array(257),i)for(c=0;c<r;c++)i[c]&&y[Math.floor((d[c]-o)/f)]++;else for(c=0;c<r;c++)y[Math.floor((d[c]-o)/f)]++;for(c=0;c<255;c++)x[c]=y[c];x[255]=y[255]+y[256]}for(u.push({min:o,max:a,size:v,counts:x}),m=0,A=0,g=0,c=0;c<v;c++)m+=x[c],A+=c*x[c];for(b=A/m,c=0;c<v;c++)g+=x[c]*(c-b)**2;U=Math.sqrt(g/(m-1)),f=(a-o)/v,M=(b+.5)*f+o,k=U*f,p.push({min:o,max:a,avg:M,stddev:k})}return{statistics:p,histograms:u}}function A(t){const e=[];for(let i=0;i<t.length;i++){const{min:n,max:s,size:r,counts:l}=t[i];let o=0,a=0;for(let t=0;t<r;t++)o+=l[t],a+=t*l[t];const f=a/o;let h=0;for(let t=0;t<r;t++)h+=l[t]*(t-f)**2;const c=(s-n)/r,u=(f+.5)*c+n,p=Math.sqrt(h/(o-1))*c;e.push({min:n,max:s,avg:u,stddev:p})}return e}function M(t){const{minCutOff:e,maxCutOff:i,gamma:n,pixelType:s}=t,r=t.outMin||0,l=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(s))return null;const o=e.length;let a,f,h=0;"s8"===s?h=-127:"s16"===s&&(h=-32767);let c=256;["u16","s16"].indexOf(s)>-1&&(c=65536);const u=[],p=[],w=l-r;for(a=0;a<o;a++)p[a]=i[a]-e[a],u[a]=w/(i[a]-e[a]);const x=n&&n.length>=o,y=[];if(x)for(a=0;a<o;a++)y[a]=n[a]>1?n[a]>2?6.5+(n[a]-2)**2.5:6.5+100*(2-n[a])**4:1;let d;const m=[];let A,M,k;if(x)for(a=0;a<o;a++){for(k=[],f=0;f<c;f++)A=f+h,d=(A-e[a])/p[a],M=1,n[a]>1&&(M-=(1/w)**(d*y[a])),k[f]=A<i[a]&&A>e[a]?Math.floor(M*w*d**(1/n[a]))+r:A>=i[a]?l:r;m[a]=k}else for(a=0;a<o;a++){for(k=[],f=0;f<c;f++)A=f+h,k[f]=A<=e[a]?r:A>=i[a]?l:Math.floor((A-e[a])/p[a]*w)+r;m[a]=k}if(null!=t.contrastOffset){const e=function(t,e){const i=Math.min(Math.max(t,-100),100),n=Math.min(Math.max(e,-100),100),s=255;let r,l;const o=new Uint8Array(256);for(r=0;r<256;r++)i>0&&i<100?l=(200*r-25500+510*n)/(2*(100-i))+128:i<=0&&i>-100?l=(200*r-25500+510*n)*(100+i)/2e4+128:100===i?(l=200*r-25500+256*(100-i)+510*n,l=l>0?s:0):-100===i&&(l=128),o[r]=l>s?s:l<0?0:l;return o}(t.contrastOffset,t.brightnessOffset);for(a=0;a<o;a++)for(k=m[a],f=0;f<c;f++)k[f]=e[k[f]]}return{lut:m,offset:h}}function k(t,e=256){e=Math.min(e,256);const{size:i,counts:n}=t,s=new Uint8Array(i),r=n.reduce(((t,i)=>t+i/e),0);let l=0,o=0,a=0,f=r;for(let t=0;t<i;t++)if(a+=n[t],!(t<i-1&&a+n[t+1]<f)){for(;l<e-1&&f<a;)l++,f+=r;for(let e=o;e<=t;e++)s[e]=l;o=t+1}for(let t=o;t<i;t++)s[t]=e-1;return s}function g(t,e){if(!w(t))return null;const i=t.clone(),{pixels:n,mask:s}=i,{minCutOff:r,maxCutOff:l,gamma:o}=e,a=e.outMin||0,f=e.outMax||255,h=i.width*i.height,c=n.length;let u,p,x,y,d;const m=f-a,A=[],M=[];for(u=0;u<c;u++)M[u]=l[u]-r[u],A[u]=m/(l[u]-r[u]);const k=o&&o.length>=c,g=[];if(k)for(u=0;u<c;u++)g[u]=o[u]>1?o[u]>2?6.5+(o[u]-2)**2.5:6.5+100*(2-o[u])**4:1;if(k)if(null!=s){for(p=0;p<h;p++)if(s[p])for(u=0;u<c;u++)x=n[u][p],d=(x-r[u])/M[u],y=1,o[u]>1&&(y-=(1/m)**(d*g[u])),n[u][p]=x<l[u]&&x>r[u]?Math.floor(y*m*d**(1/o[u]))+a:x>=l[u]?f:a}else for(p=0;p<h;p++)for(u=0;u<c;u++)x=n[u][p],d=(x-r[u])/M[u],y=1,o[u]>1&&(y-=(1/m)**(d*g[u])),n[u][p]=x<l[u]&&x>r[u]?Math.floor(y*m*d**(1/o[u]))+a:x>=l[u]?f:a;else if(null!=s){for(p=0;p<h;p++)if(s[p])for(u=0;u<c;u++)x=n[u][p],n[u][p]=x<l[u]&&x>r[u]?Math.floor((x-r[u])/M[u]*m)+a:x>=l[u]?f:a}else for(p=0;p<h;p++)for(u=0;u<c;u++)x=n[u][p],n[u][p]=x<l[u]&&x>r[u]?Math.floor((x-r[u])/M[u]*m)+a:x>=l[u]?f:a;return i.pixelType="u8",i.updateStatistics(),i}function b(t,e){if(!w(t))return null;const{pixels:i,mask:n}=t,s=t.width*t.height,r=i.length;let l=e.lut;const{offset:o}=e;let a,f;l&&1===l[0].length&&(l=i.map((()=>l)));const h=[];let c,u,x;if(o)if(null==n)for(a=0;a<r;a++){for(c=i[a],u=l[a],x=new Uint8Array(s),f=0;f<s;f++)x[f]=u[c[f]-o];h.push(x)}else for(a=0;a<r;a++){for(c=i[a],u=l[a],x=new Uint8Array(s),f=0;f<s;f++)n[f]&&(x[f]=u[c[f]-o]);h.push(x)}else if(null==n)for(a=0;a<r;a++){for(c=i[a],u=l[a],x=new Uint8Array(s),f=0;f<s;f++)x[f]=u[c[f]];h.push(x)}else for(a=0;a<r;a++){for(c=i[a],u=l[a],x=new Uint8Array(s),f=0;f<s;f++)n[f]&&(x[f]=u[c[f]]);h.push(x)}const y=new p({width:t.width,height:t.height,pixels:h,mask:n,pixelType:"u8"});return y.updateStatistics(),y}function U(t,e){if(!w(t))return null;const i=t.clone(),{pixels:n}=i,s=i.width*i.height,r=e.length,l=Math.floor(r/2),o=e[Math.floor(l)],a=n[0];let f,h,c,u,p,x,y=!1;const d=new Uint8Array(s),m=new Uint8Array(s),A=new Uint8Array(s);let M=i.mask;const k=4===e[0].mappedColor.length;for(M||(M=new Uint8Array(s),M.fill(k?255:1),i.mask=M),p=0;p<s;p++)if(M[p]){for(f=a[p],y=!1,x=l,h=o,c=0,u=r-1;u-c>1;){if(f===h.value){y=!0;break}f>h.value?c=x:u=x,x=Math.floor((c+u)/2),h=e[Math.floor(x)]}y||(f===e[c].value?(h=e[c],y=!0):f===e[u].value?(h=e[u],y=!0):f<e[c].value?(y=!1,h=null):f>e[c].value&&(f<e[u].value?(h=e[c],y=!0):u===r-1?(y=!1,h=null):(h=e[u],y=!0))),y?(d[p]=h.mappedColor[0],m[p]=h.mappedColor[1],A[p]=h.mappedColor[2],M[p]=h.mappedColor[3]):d[p]=m[p]=A[p]=M[p]=0}return i.pixels=[d,m,A],i.mask=M,i.pixelType="u8",i.maskIsAlpha=k,i}function v(t,e){if(!t||0===t.length)return null;const i=t.filter((t=>t.pixelBlock))[0];if(!i||l(i.pixelBlock))return null;const n=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,s=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,r=.01*Math.min(n,s),o=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>r?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>r?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,o.map((t=>t.extent.xmin))),f=Math.min.apply(null,o.map((t=>t.extent.ymin))),h=Math.max.apply(null,o.map((t=>t.extent.xmax))),c=Math.max.apply(null,o.map((t=>t.extent.ymax))),u={x:Math.round((e.xmin-a)/n),y:Math.round((c-e.ymax)/s)},p={width:Math.round((h-a)/n),height:Math.round((c-f)/s)},w={width:Math.round((e.xmax-e.xmin)/n),height:Math.round((e.ymax-e.ymin)/s)};return Math.round(p.width/i.pixelBlock.width)*Math.round(p.height/i.pixelBlock.height)!==o.length||u.x<0||u.y<0||p.width<w.width||p.height<w.height?null:{extent:e,pixelBlock:T(o.map((t=>t.pixelBlock)),p,{clipOffset:u,clipSize:w})}}function B(t,e,i,n,s,r){const{width:l,height:o}=i.block,{x:a,y:f}=i.offset,{width:h,height:c}=i.mosaic,u=function(t,e,i,n,s,r,l,o){return{xmin:s<=i*t?0:s<i*t+t?s-i*t:t,ymin:r<=n*e?0:r<n*e+e?r-n*e:e,xmax:s+l<=i*t?0:s+l<i*t+t?s+l-i*t:t,ymax:r+o<=n*e?0:r+o<n*e+e?r+o-n*e:e}}(l,o,n,s,a,f,h,c);let p=0,w=0;if(r){const t=r.hasGCSSShiftTransform?360:r.halfWorldWidth,e=l*r.resolutionX,i=r.startX+n*e,s=i+e;i<t&&s>t?w=r.rightPadding:i>=t&&(p=r.leftMargin-r.rightPadding,w=0)}if(u.xmax-=w,"number"!=typeof e)for(let i=u.ymin;i<u.ymax;i++){const r=(s*o+i-f)*h+(n*l-a)+p,c=i*l;for(let i=u.xmin;i<u.xmax;i++)t[r+i]=e[c+i]}else for(let i=u.ymin;i<u.ymax;i++){const r=(s*o+i-f)*h+(n*l-a)+p;for(let i=u.xmin;i<u.xmax;i++)t[r+i]=e}}function T(t,e,i={}){const{clipOffset:n,clipSize:s,alignmentInfo:r,blockWidths:o}=i;if(o)return function(t,e,i){const n=t.find((t=>a(t)));if(!a(n))return null;const s=t.some((t=>!a(t)||!!t.mask)),{width:r,height:l}=e,o=s?new Uint8Array(r*l):null,{blockWidths:f}=i,h=[],c=n.getPlaneCount(),u=p.getPixelArrayConstructor(n.pixelType);if(s)for(let e=0,i=0;e<t.length;i+=f[e],e++){const n=t[e];if(!w(n))continue;const s=n.mask;for(let t=0;t<l;t++)for(let l=0;l<f[e];l++)o[t*r+l+i]=null==s?255:s[t*n.width+l]}for(let e=0;e<c;e++){const i=new u(r*l);for(let n=0,s=0;n<t.length;s+=f[n],n++){const o=t[n];if(!w(o))continue;const a=o.pixels[e];if(null!=a)for(let t=0;t<l;t++)for(let e=0;e<f[n];e++)i[t*r+e+s]=a[t*o.width+e]}h.push(i)}const x=new p({width:r,height:l,mask:o,pixels:h,pixelType:n.pixelType});return x.updateStatistics(),x}(t,e,{blockWidths:o});const f=t.filter((t=>w(t)))[0];if(l(f))return null;const h=s?s.width:e.width,c=s?s.height:e.height,u=f.width,x=f.height,y=e.width/u,d=e.height/x,m={offset:n||{x:0,y:0},mosaic:s||e,block:{width:u,height:x}},A=f.pixelType,M=p.getPixelArrayConstructor(A),k=f.pixels.length,g=[];let b,U,v;for(let e=0;e<k;e++){U=new M(h*c);for(let i=0;i<d;i++)for(let n=0;n<y;n++){const s=t[i*y+n];w(s)&&(b=s.pixels[e],B(U,b,m,n,i,r))}g.push(U)}if(t.some((t=>l(t)||t.mask&&t.mask.length>0))){v=new Uint8Array(h*c);for(let e=0;e<d;e++)for(let i=0;i<y;i++){const n=t[e*y+i];B(v,(a(n)?n.mask:null)||(n?1:0),m,i,e,r)}}const T=new p({width:h,height:c,pixels:g,pixelType:A,mask:v});return T.updateStatistics(),T}function C(t,e,i){if(!w(t))return null;const{width:n,height:s}=t,r=e.x,l=e.y,o=i.width+r,a=i.height+l;if(r<0||l<0||o>n||a>s)return t;if(0===r&&0===l&&o===n&&a===s)return t;t.mask||(t.mask=new Uint8Array(n*s));const f=t.mask;for(let t=0;t<s;t++){const e=t*n;for(let i=0;i<n;i++)f[e+i]=t<l||t>=a||i<r||i>=o?0:1}return t.updateStatistics(),t}function G(t){if(!w(t))return null;const e=t.clone(),{width:i,height:n,pixels:s,mask:r}=t,l=s[0],o=e.pixels[0];for(let t=2;t<n-1;t++){const e=new Map;for(let n=t-2;n<t+2;n++)for(let t=0;t<4;t++){const s=n*i+t;F(e,l[s],r?r[s]:1)}o[t*i]=R(e),o[t*i+1]=o[t*i+2]=o[t*i];let n=3;for(;n<i-1;n++){let s=(t-2)*i+n+1;F(e,l[s],r?r[s]:1),s=(t-1)*i+n+1,F(e,l[s],r?r[s]:1),s=t*i+n+1,F(e,l[s],r?r[s]:1),s=(t+1)*i+n+1,F(e,l[s],r?r[s]:1),s=(t-2)*i+n-3,j(e,l[s],r?r[s]:1),s=(t-1)*i+n-3,j(e,l[s],r?r[s]:1),s=t*i+n-3,j(e,l[s],r?r[s]:1),s=(t+1)*i+n-3,j(e,l[s],r?r[s]:1),o[t*i+n]=R(e)}o[t*i+n+1]=o[t*i+n]}for(let t=0;t<i;t++)o[t]=o[i+t]=o[2*i+t],o[(n-1)*i+t]=o[(n-2)*i+t];return e.updateStatistics(),e}function R(t){if(0===t.size)return 0;let e=0,i=-1,n=0;const s=t.keys();let r=s.next();for(;!r.done;)n=t.get(r.value),n>e&&(i=r.value,e=n),r=s.next();return i}function j(t,e,i){if(0===i)return;const n=t.get(e);1===n?t.delete(e):t.set(e,n-1)}function F(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function P(t,e,i){let{x:n,y:s}=e;const{width:r,height:l}=i;if(0===n&&0===s&&l===t.height&&r===t.width)return t;const{width:o,height:a}=t,f=Math.max(0,s),h=Math.max(0,n),c=Math.min(n+r,o),u=Math.min(s+l,a);if(c<0||u<0||!w(t))return null;n=Math.max(0,-n),s=Math.max(0,-s);const{pixels:x,mask:y}=t,d=r*l,m=x.length,A=[];for(let e=0;e<m;e++){const i=x[e],l=p.createEmptyBand(t.pixelType,d);for(let t=f;t<u;t++){const e=t*o;let a=(t+s-f)*r+n;for(let t=h;t<c;t++)l[a++]=i[e+t]}A.push(l)}const M=new Uint8Array(d);for(let t=f;t<u;t++){const e=t*o;let i=(t+s-f)*r+n;for(let t=h;t<c;t++)M[i++]=y?y[e+t]:1}const k=new p({width:i.width,height:i.height,pixelType:t.pixelType,pixels:A,mask:M});return k.updateStatistics(),k}function I(t,e=!0){if(!w(t))return null;const{pixels:i,width:n,height:s,mask:r,pixelType:l}=t,o=[],a=Math.round(n/2),f=Math.round(s/2),h=s-1,c=n-1;for(let t=0;t<i.length;t++){const r=i[t],u=p.createEmptyBand(l,a*f);let w=0;for(let t=0;t<s;t+=2)for(let i=0;i<n;i+=2){const s=r[t*n+i];if(e){const e=i===c?s:r[t*n+i+1],l=t===h?s:r[t*n+i+n];u[w++]=(s+e+l+(i===c?l:t===h?e:r[t*n+i+n+1]))/4}else u[w++]=s}o.push(u)}let u=null;if(r){u=new Uint8Array(a*f);let t=0;for(let i=0;i<s;i+=2)for(let s=0;s<n;s+=2){const l=r[i*n+s];if(e){const e=s===c?l:r[i*n+s+1],o=i===h?l:r[i*n+s+n];u[t++]=l*e*o*(s===c?o:i===h?e:r[i*n+s+n+1])?1:0}else u[t++]=l}}return new p({width:a,height:f,pixelType:l,pixels:o,mask:u})}function S(t,e,i){if(!w(t))return null;const{width:n,height:s}=e;let{width:r,height:l}=t;const o=new Map,a={x:0,y:0},f=null==i?1:1+i;let h=t;for(let t=0;t<f;t++){const i=Math.ceil(r/n),c=Math.ceil(l/s);for(let r=0;r<c;r++){a.y=r*s;for(let s=0;s<i;s++){a.x=s*n;const i=P(h,a,e);o.set(`${t}/${r}/${s}`,i)}}t<f-1&&(h=I(h)),r=Math.round(r/2),l=Math.round(l/2)}return o}function O(t,e,i,n,s="nearest"){if(!w(t))return null;"majority"===s&&(t=G(t));const{pixels:r,mask:l,pixelType:o}=t,a=t.width,f=t.height,h=p.getPixelArrayConstructor(o),c=r.length,{width:u,height:x}=e,y=n.cols,d=n.rows,m=Math.ceil(u/y-.1/y),A=Math.ceil(x/d-.1/d);let M,k,g,b,U,v,B,T=!1;for(let t=0;t<i.length;t+=3)-1===i[t]&&-1===i[t+1]&&-1===i[t+2]&&(T=!0);const C=m*y,R=C*A*d,j=new Float32Array(R),F=new Float32Array(R);let P,I,S=0;const O="majority"===s?0:.5;for(let t=0;t<A;t++)for(let e=0;e<m;e++){M=12*(t*m+e),k=i[M],g=i[M+1],b=i[M+2],U=i[M+3],v=i[M+4],B=i[M+5];for(let i=0;i<d;i++){S=(t*d+i)*C+e*y,I=(i+.5)/d;for(let t=0;t<i;t++)P=(t+.5)/y,j[S+t]=Math.round((k*P+g*I+b)*a-O),F[S+t]=Math.round((U*P+v*I+B)*f-O)}M+=6,k=i[M],g=i[M+1],b=i[M+2],U=i[M+3],v=i[M+4],B=i[M+5];for(let i=0;i<d;i++){S=(t*d+i)*C+e*y,I=(i+.5)/d;for(let t=i;t<y;t++)P=(t+.5)/y,j[S+t]=Math.round((k*P+g*I+b)*a-O),F[S+t]=Math.round((U*P+v*I+B)*f-O)}}const z=(t,e)=>{for(let i=0;i<x;i++){M=i*C;for(let n=0;n<u;n++)t[i*u+n]=j[M]<0||F[M]<0?0:e[j[M]+F[M]*a],M++}},V=[];let _;for(let t=0;t<c;t++)_=new h(u*x),z(_,r[t]),V.push(_);const D=new p({width:u,height:x,pixelType:o,pixels:V});if(l)D.mask=new Uint8Array(u*x),z(D.mask,l);else if(T){D.mask=new Uint8Array(u*x);for(let t=0;t<u*x;t++)D.mask[t]=j[t]<0||F[t]<0?0:1}return D.updateStatistics(),D}export{O as B,C as M,k as a,A as b,g as c,v as d,M as f,w as i,x as l,y as o,b as p,d as r,m as s,p as u,S as v,U as x,T as y}