import{F as t}from"./p-566b0715.js";function i(t){return Math.sqrt(Math.max(t[0]*t[0]+t[4]*t[4]+t[8]*t[8],t[1]*t[1]+t[5]*t[5]+t[9]*t[9],t[2]*t[2]+t[6]*t[6]+t[10]*t[10]))}class n{constructor(t,i){this.min=t,this.max=i,this.range=i-t}ndiff(t,i=0){return Math.ceil((t-i)/this.range)*this.range+i}_normalize(t,i,n,s=0,r=!1){return(n-=s)<t?n+=this.ndiff(t-n):n>i&&(n-=this.ndiff(n-i)),r&&n===i&&(n=t),n+s}normalize(t,i=0,n=!1){return this._normalize(this.min,this.max,t,i,n)}clamp(i,n=0){return t(i-n,this.min,this.max)+n}monotonic(t,i,n){return t<i?i:i+this.ndiff(t-i,n)}minimalMonotonic(t,i,n){return this._normalize(t,t+this.range,i,n)}center(t,i,n){return i=this.monotonic(t,i,n),this.normalize((t+i)/2,n)}diff(t,i,n){return this.monotonic(t,i,n)-t}shortestSignedDiff(t,i){t=this.normalize(t);const n=(i=this.normalize(i))-t,s=i<t?this.minimalMonotonic(t,i)-t:i-this.minimalMonotonic(i,t);return Math.abs(n)<Math.abs(s)?n:s}contains(t,i,n){return i=this.minimalMonotonic(t,i),(n=this.minimalMonotonic(t,n))>t&&n<i}}function s(t){for(const i in t){const n=t[i];n instanceof Function&&(t[i]=n.bind(t))}return t}s(new n(0,2*Math.PI)),s(new n(-Math.PI,Math.PI));const r=s(new n(0,360));export{r as U,i as d}