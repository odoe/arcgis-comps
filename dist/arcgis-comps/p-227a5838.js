const t="arcgis-comps";let e=!1;const n="undefined"!=typeof window?window:{},l=n.document||{head:{}},s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},o=t=>Promise.resolve(t),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),r=new WeakMap,i=t=>"sc-"+t.o,a={},u=t=>"object"==(t=typeof t)||"function"===t,f=(t,e,...n)=>{let l=null,s=!1,o=!1,c=[];const r=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!u(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?$(null,l):l),o=s)};if(r(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}const i=$(t,null);return i.u=e,c.length>0&&(i.$=c),i},$=(t,e)=>({t:0,p:t,i:e,h:null,$:null,u:null}),p={},d=(t,e,n,l)=>{if(n!==l&&(e.toLowerCase(),"class"===e)){const e=t.classList,s=h(n),o=h(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}},y=/\s/,h=t=>t?t.split(y):[],m=(t,e,n,l)=>{const s=11===e.h.nodeType&&e.h.host?e.h.host:e.h,o=t&&t.u||a,c=e.u||a;for(l in o)l in c||d(s,l,o[l],void 0);for(l in c)d(s,l,o[l],c[l])},w=(t,e,n)=>{let s,o,c=e.$[n],r=0;if(s=c.h=l.createElement(c.p),m(null,c),c.$)for(r=0;r<c.$.length;++r)o=w(t,c,r),o&&s.appendChild(o);return s},b=(t,e,n,l,s,o)=>{let c,r=t;for(;s<=o;++s)l[s]&&(c=w(null,n,s),c&&(l[s].h=c,r.insertBefore(c,e)))},g=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.h.remove()},S=(t,e)=>t.p===e.p,j=(t,e)=>{const n=e.h=t.h,l=t.$,s=e.$;m(t,e),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,c=0,r=e.length-1,i=e[0],a=e[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=e[++o]:null==a?a=e[--r]:null==f?f=l[++c]:null==$?$=l[--u]:S(i,f)?(j(i,f),i=e[++o],f=l[++c]):S(a,$)?(j(a,$),a=e[--r],$=l[--u]):S(i,$)?(j(i,$),t.insertBefore(i.h,a.h.nextSibling),i=e[++o],$=l[--u]):S(a,f)?(j(a,f),t.insertBefore(a.h,i.h),a=e[--r],f=l[++c]):(s=w(e&&e[c],n,c),f=l[++c],s&&i.h.parentNode.insertBefore(s,i.h));o>r?b(t,null==l[u+1]?null:l[u+1].h,n,l,c,u):c>u&&g(e,o,r)})(n,l,e,s):null!==s?b(n,null,e,s,0,s.length-1):null!==l&&g(l,0,l.length-1)},M=t=>N(t).m,v=(t,e)=>{e&&!t.g&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.g=e)))},k=(t,e)=>{if(t.t|=16,!(4&t.t))return v(t,t.S),Q((()=>C(t,e)));t.t|=512},C=(t,e)=>{const n=t.j;let l;return e&&(l=L(n,"componentWillLoad")),R(l,(()=>O(t,n,e)))},O=async(t,e,n)=>{const s=t.m,o=s["s-rc"];n&&(t=>{const e=t.M;((t,e)=>{let n=i(e),s=_.get(n);if(t=11===t.nodeType?t:l,s)if("string"==typeof s){let e,o=r.get(t=t.head||t);o||r.set(t,o=new Set),o.has(n)||(e=l.createElement("style"),e.innerHTML=s,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s])})(t.m.getRootNode(),e)})(t);P(t,e),o&&(o.map((t=>t())),s["s-rc"]=void 0);{const e=s["s-p"],n=()=>x(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},P=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2,((t,e)=>{const n=t.m,l=t.v||$(null,null),s=(t=>t&&t.p===p)(e)?e:f(null,null,e);s.p=null,s.t|=4,t.v=s,s.h=l.h=n,j(l,s)})(t,e)}catch(e){D(e,t.m)}return null},x=t=>{const e=t.m,n=t.S;L(t.j,"componentDidRender"),64&t.t||(t.t|=64,T(e),t.k(e),n||E()),t.g&&(t.g(),t.g=void 0),512&t.t&&K((()=>k(t,!1))),t.t&=-517},E=()=>{T(l.documentElement),K((()=>(t=>{const e=s.ce("appload",{detail:{namespace:"arcgis-comps"}});return t.dispatchEvent(e),e})(n)))},L=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){D(t)}},R=(t,e)=>t&&t.then?t.then(e):e(),T=t=>t.classList.add("hydrated"),W=(t,e,n)=>{if(e.C){t.watchers&&(e.O=t.watchers);const l=Object.entries(e.C),o=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>N(this).P.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=N(t),o=s.m,c=s.P.get(e),r=s.t,i=s.j;if(n=((t,e)=>null==t||u(t)?t:2&e?parseFloat(t):1&e?t+"":t)(n,l.C[e][0]),!(8&r&&void 0!==c||n===c)&&(s.P.set(e,n),i)){if(l.O&&128&r){const t=l.O[e];t&&t.map((t=>{try{i[t](n,c,e)}catch(t){D(t,o)}}))}2==(18&r)&&k(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){s.jmp((()=>{const n=e.get(t);this.hasOwnProperty(n)&&(l=this[n],delete this[n]),this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},A=(t,e={})=>{const o=[],r=e.exclude||[],a=n.customElements,u=l.head,f=u.querySelector("meta[charset]"),$=l.createElement("style"),p=[];let d,y=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",l.baseURI).href,t.map((t=>t[1].map((e=>{const n={t:e[0],o:e[1],C:e[2],L:e[3]};n.C=e[2],n.O={};const l=n.o,u=class extends HTMLElement{constructor(t){super(t),q(t=this,n)}connectedCallback(){d&&(clearTimeout(d),d=null),y?p.push(this):s.jmp((()=>(t=>{if(0==(1&s.t)){const e=N(t),n=e.M,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){v(e,e.S=n);break}}n.C&&Object.entries(n.C).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=V(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.O=s.watchers,W(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){D(t)}e.t&=-9,e.t|=128,t()}if(s.style){let t=s.style;const e=i(n);if(!_.has(e)){const l=()=>{};((t,e,n)=>{let l=_.get(t);c&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,_.set(t,l)})(e,t,!!(1&n.t)),l()}}}const o=e.S,r=()=>k(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return N(this).R}};n.T=t[0],r.includes(l)||a.get(l)||(o.push(l),a.define(l,W(u,n,1)))})))),$.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),y=!1,p.length?p.map((t=>t.connectedCallback())):s.jmp((()=>d=setTimeout(E,30)))},F=new WeakMap,N=t=>F.get(t),U=(t,e)=>F.set(e.j=t,e),q=(t,e)=>{const n={t:0,m:t,M:e,P:new Map};return n.R=new Promise((t=>n.k=t)),t["s-p"]=[],t["s-rc"]=[],F.set(t,n)},D=(t,e)=>(0,console.error)(t,e),H=new Map,V=t=>{const e=t.o.replace(/-/g,"_"),n=t.T,l=H.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(H.set(n,t),t[e])),D)},_=new Map,z=[],B=[],G=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&s.t?K(J):s.raf(J))},I=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){D(t)}t.length=0},J=()=>{I(z),I(B),(e=z.length>0)&&s.raf(J)},K=t=>o().then(t),Q=G(B,!0);export{t as N,A as b,M as g,f as h,o as p,U as r}