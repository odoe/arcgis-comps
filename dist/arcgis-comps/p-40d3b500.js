import{F as e,P as t}from"./p-566b0715.js";import{n,bM as a,r as o,t as s,_ as i}from"./p-9ae46e68.js";import{v as r,M as c,q as l}from"./p-c8f716a9.js";function u(t,o){const s=`h${e(Math.ceil(t.level),1,6)}`;return delete t.level,n(s,{...t,class:a("esri-widget__heading",t.class)},o)}let p=null;function f(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function d(e,t,n){const{backgroundColor:a,outline:o,dotSize:s}=e,i=n&&n.swatchSize||22,r=Math.round(i*i/s**2*.8),c=window.devicePixelRatio,l=document.createElement("canvas"),u=i*c;l.width=u,l.height=u,l.style.width=l.width/c+"px",l.style.height=l.height/c+"px";const d=l.getContext("2d");if(a&&(d.fillStyle=a.toCss(!0),d.fillRect(0,0,u,u),d.fill()),d.fillStyle=t.toCss(!0),p&&p.length/2===r)for(let e=0;e<2*r;e+=2)d.fillRect(p[e],p[e+1],s*c,s*c),d.fill();else{p=[];for(let e=0;e<2*r;e+=2){const e=f(0,u),t=f(0,u);p.push(e,t),d.fillRect(e,t,s*c,s*c),d.fill()}}o&&(o.color&&(d.strokeStyle=o.color.toCss(!0)),d.lineWidth=o.width,d.strokeRect(0,0,u,u));const m=new Image(i,i);return m.src=l.toDataURL(),m.style.filter=n.effect,m}function m(e,t={}){const n="horizontal"===t.align,a=n?75:24,o=n?24:75,{width:s=a,height:i=o,gradient:r=!0}=t,c=window.devicePixelRatio,l=s*c,u=i*c,p=document.createElement("canvas");p.width=l,p.height=u,p.style.width=`${s}px`,p.style.height=`${i}px`;const f=p.getContext("2d");if(r){const t=f.createLinearGradient(0,0,n?l:0,n?0:u),a=e.length,o=1===a?0:1/(a-1);e.forEach(((e,n)=>t.addColorStop(n*o,e.toString()))),f.fillStyle=t,f.fillRect(0,0,l,u)}else{const t=n?l/e.length:l,a=n?u:u/e.length;let o=0,s=0;for(const i of e)f.fillStyle=i.toString(),f.fillRect(o,s,t,a),o=n?o+t:0,s=n?0:s+a}const d=document.createElement("div");return d.style.width=`${s}px`,d.style.height=`${i}px`,d.style.filter=null==t?void 0:t.effect,d.appendChild(p),d}async function w(e,t){switch(e.type){case"web-style":{const{previewWebStyleSymbol:n}=await import("./p-3a5d6273.js");return n(e,w,t)}case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":{const{previewSymbol3D:n}=await import("./p-47298c5d.js");return n(e,t)}case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":{const{previewSymbol2D:n}=await import("./p-c2ffaa8d.js");return n(e,t)}case"cim":{const{previewCIMSymbol:n}=await import("./p-23688693.js");return n(e,t)}default:return}}function b(e){return e&&"opacity"in e?e.opacity*b(e.parent):1}async function y(e,n){var a,u;if(!e)return;const p=e.sourceLayer,f=null!=(a=o(n)&&null!=(u=n.useSourceLayer)&&u?p:e.layer)?a:p,d=b(f);if(o(e.symbol)&&(!o(n)||!0!==n.ignoreGraphicSymbol)){const t="web-style"===e.symbol.type?await e.symbol.fetchSymbol(o(n)?n.abortOptions:null):e.symbol.clone();return r(t,null,d),t}const m=o(n)&&n.renderer||f&&"renderer"in f&&f.renderer;let w=m&&"getSymbolAsync"in m?await m.getSymbolAsync(e,n):null;if(!w)return;if(w="web-style"===w.type?await w.fetchSymbol(o(n)?n.abortOptions:null):w.clone(),!("visualVariables"in m)||!m.visualVariables||!m.visualVariables.length)return r(w,null,d),w;if("arcadeRequiredForVisualVariables"in m&&m.arcadeRequiredForVisualVariables&&(s(n)||s(n.arcade))){const e={...i(n)};e.arcade=await t(),n=e}const y=await import("./p-77e6a663.js"),h=[],v=[],g=[],j=[];for(const e of m.visualVariables)switch(e.type){case"color":h.push(e);break;case"opacity":v.push(e);break;case"rotation":j.push(e);break;case"size":e.target||g.push(e)}const x=!!h.length&&h[h.length-1],S=x?y.getColor(x,e,n):null,k=!!v.length&&v[v.length-1];let M=k?y.getOpacity(k,e,n):null;if(null!=d&&(M=null!=M?M*d:d),r(w,S,M),g.length){const t=y.getAllSizes(g,e,n);await c(w,t)}for(const t of j)l(w,y.getRotationAngle(t,e,n),t.axis);return w}export{y as f,w as h,m as p,u as s,d as y}