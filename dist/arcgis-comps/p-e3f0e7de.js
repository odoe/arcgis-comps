import{c3 as n}from"./p-566b0715.js";function t(t,f,i){var u;const c=t.byteLength/(4*f),s=new Uint32Array(t,0,c*f);let a=new Uint32Array(c);const w=null!=(u=null==i?void 0:i.minReduction)?u:0,y=(null==i?void 0:i.originalIndices)||null,A=y?y.length:0,U=(null==i?void 0:i.componentOffsets)||null;let d=0;if(U)for(let n=0;n<U.length-1;n++){const t=U[n+1]-U[n];t>d&&(d=t)}else d=c;const v=Math.floor(1.1*d)+1;(null==o||o.length<2*v)&&(o=new Uint32Array(n(2*v)));for(let n=0;n<2*v;n++)o[n]=0;let b=0;const h=!!U&&!!y,p=h?A:c,M=h?new Uint32Array(A):null,m=1.96;let j=0!==w?Math.ceil(4*m*m/(w*w)*w*(1-w)):p,k=1,q=U?U[1]:p;for(let n=0;n<p;n++){if(n===j){const t=1-b/n;if(t+m*Math.sqrt(t*(1-t)/n)<w)return null;j*=2}if(n===q){for(let n=0;n<2*v;n++)o[n]=0;if(y)for(let n=U[k-1];n<U[k];n++)M[n]=a[y[n]];q=U[++k]}const t=h?y[n]:n,l=t*f,i=e(s,l,f);let u=i%v,c=b;for(;0!==o[2*u+1];){if(o[2*u]===i){const n=o[2*u+1]-1;if(r(s,l,n*f,f)){c=a[n];break}}u++,u>=v&&(u-=v)}c===b&&(o[2*u]=i,o[2*u+1]=t+1,b++),a[t]=c}if(0!==w&&1-b/c<w)return null;if(h){for(let n=U[k-1];n<M.length;n++)M[n]=a[y[n]];a=M}const x=new Uint32Array(f*b);b=0;for(let n=0;n<p;n++)a[n]===b&&(l(s,(h?y[n]:n)*f,x,b*f,f),b++);if(y&&!h){const n=new Uint32Array(A);for(let t=0;t<n.length;t++)n[t]=a[y[t]];a=n}return{buffer:x.buffer,indices:a,uniqueCount:b}}function r(n,t,r,l){for(let e=0;e<l;e++)if(n[t+e]!==n[r+e])return!1;return!0}function l(n,t,r,l,e){for(let o=0;o<e;o++)r[l+o]=n[t+o]}function e(n,t,r){let l=0;for(let e=0;e<r;e++)l=n[t+e]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;export{t as n}