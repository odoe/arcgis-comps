import{d0 as t,g9 as s,ga as i,gb as n,gc as h}from"./p-5420851c.js";class r{constructor(t=9,s){this.compareMinX=a,this.compareMinY=u,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),s&&("function"==typeof s?this.toBBox=s:this._initFormat(s)),this.clear()}destroy(){this.clear(),x.prune(),m.prune(),b.prune(),v.prune()}all(t){this._all(this.data,t)}search(t,s){let i=this.data;const n=this.toBBox;if(p(t,i))for(x.clear();i;){for(let h=0,r=i.children.length;h<r;h++){const r=i.children[h],e=i.leaf?n(r):r;p(t,e)&&(i.leaf?s(r):w(t,e)?this._all(r,s):x.push(r))}i=x.pop()}}collides(t){let s=this.data;const i=this.toBBox;if(!p(t,s))return!1;for(x.clear();s;){for(let n=0,h=s.children.length;n<h;n++){const h=s.children[n],r=s.leaf?i(h):h;if(p(t,r)){if(s.leaf||w(t,r))return!0;x.push(h)}}s=x.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let s=0,i=t.length;s<i;s++)this.insert(t[s]);return this}let s=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===s.height)this._splitRoot(this.data,s);else{if(this.data.height<s.height){const t=this.data;this.data=s,s=t}this._insert(s,this.data.height-s.height-1,!0)}else this.data=s;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new S([]),this}remove(t){if(!t)return this;let n,h=this.data,r=null,e=0,o=!1;const c=this.toBBox(t);for(b.clear(),v.clear();h||b.length>0;){var a;if(h||(h=s(b.pop()),r=b.data[b.length-1],e=null!=(a=v.pop())?a:0,o=!0),h.leaf&&(n=i(h.children,t,h.children.length,h.indexHint),-1!==n))return h.children.splice(n,1),b.push(h),this._condense(b),this;o||h.leaf||!w(h,c)?r?(e++,h=r.children[e],o=!1):h=null:(b.push(h),v.push(e),e=0,r=h,h=h.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,s){let i=t;for(m.clear();i;){var n;if(!0===i.leaf)for(const t of i.children)s(t);else m.pushArray(i.children);i=null!=(n=m.pop())?n:null}}_build(t,s,i,n){const h=i-s+1;let r=this._maxEntries;if(h<=r){const n=new S(t.slice(s,i+1));return e(n,this.toBBox),n}n||(n=Math.ceil(Math.log(h)/Math.log(r)),r=Math.ceil(h/r**(n-1)));const o=new F([]);o.height=n;const c=Math.ceil(h/r),a=c*Math.ceil(Math.sqrt(r));_(t,s,i,a,this.compareMinX);for(let h=s;h<=i;h+=a){const s=Math.min(h+a-1,i);_(t,h,s,c,this.compareMinY);for(let i=h;i<=s;i+=c){const h=Math.min(i+c-1,s);o.children.push(this._build(t,i,h,n-1))}}return e(o,this.toBBox),o}_chooseSubtree(t,s,i,n){for(;n.push(s),!0!==s.leaf&&n.length-1!==i;){let i,n=1/0,h=1/0;for(let r=0,e=s.children.length;r<e;r++){const e=s.children[r],o=l(e),c=M(t,e)-o;c<h?(h=c,n=o<n?o:n,i=e):c===h&&o<n&&(n=o,i=e)}s=i||s.children[0]}return s}_insert(t,s,i){const n=i?t:(0,this.toBBox)(t);b.clear();const h=this._chooseSubtree(n,this.data,s,b);for(h.children.push(t),c(h,n);s>=0&&b.data[s].children.length>this._maxEntries;)this._split(b,s),s--;this._adjustParentBBoxes(n,b,s)}_split(t,s){const i=t.data[s],n=i.children.length,h=this._minEntries;this._chooseSplitAxis(i,h,n);const r=this._chooseSplitIndex(i,h,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=i.children.splice(r,i.children.length-r),c=i.leaf?new S(o):new F(o);c.height=i.height,e(i,this.toBBox),e(c,this.toBBox),s?t.data[s-1].children.push(c):this._splitRoot(i,c)}_splitRoot(t,s){this.data=new F([t,s]),this.data.height=t.height+1,e(this.data,this.toBBox)}_chooseSplitIndex(t,s,i){let n,h,r;n=h=1/0;for(let e=s;e<=i-s;e++){const s=o(t,0,e,this.toBBox),c=o(t,e,i,this.toBBox),a=d(s,c),u=l(s)+l(c);a<n?(n=a,r=e,h=u<h?u:h):a===n&&u<h&&(h=u,r=e)}return r}_chooseSplitAxis(t,s,i){const n=t.leaf?this.compareMinX:a,h=t.leaf?this.compareMinY:u;this._allDistMargin(t,s,i,n)<this._allDistMargin(t,s,i,h)&&t.children.sort(n)}_allDistMargin(t,s,i,n){t.children.sort(n);const h=this.toBBox,r=o(t,0,s,h),e=o(t,i-s,i,h);let a=f(r)+f(e);for(let n=s;n<i-s;n++){const s=t.children[n];c(r,t.leaf?h(s):s),a+=f(r)}for(let n=i-s-1;n>=s;n--){const s=t.children[n];c(e,t.leaf?h(s):s),a+=f(e)}return a}_adjustParentBBoxes(t,s,i){for(let n=i;n>=0;n--)c(s.data[n],t)}_condense(t){for(let s=t.length-1;s>=0;s--){const n=t.data[s];if(0===n.children.length)if(s>0){const h=t.data[s-1],r=h.children;r.splice(i(r,n,r.length,h.indexHint),1)}else this.clear();else e(n,this.toBBox)}}_initFormat(t){const s=["return a"," - b",";"];this.compareMinX=new Function("a","b",s.join(t[0])),this.compareMinY=new Function("a","b",s.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function e(t,s){o(t,0,t.children.length,s,t)}function o(t,s,i,n,h){h||(h=new S([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let r,e=s;e<i;e++)r=t.children[e],c(h,t.leaf?n(r):r);return h}function c(t,s){t.minX=Math.min(t.minX,s.minX),t.minY=Math.min(t.minY,s.minY),t.maxX=Math.max(t.maxX,s.maxX),t.maxY=Math.max(t.maxY,s.maxY)}function a(t,s){return t.minX-s.minX}function u(t,s){return t.minY-s.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function M(t,s){return(Math.max(s.maxX,t.maxX)-Math.min(s.minX,t.minX))*(Math.max(s.maxY,t.maxY)-Math.min(s.minY,t.minY))}function d(t,s){const i=Math.max(t.minX,s.minX),n=Math.max(t.minY,s.minY),h=Math.min(t.maxX,s.maxX),r=Math.min(t.maxY,s.maxY);return Math.max(0,h-i)*Math.max(0,r-n)}function w(t,s){return t.minX<=s.minX&&t.minY<=s.minY&&s.maxX<=t.maxX&&s.maxY<=t.maxY}function p(t,s){return s.minX<=t.maxX&&s.minY<=t.maxY&&s.maxX>=t.minX&&s.maxY>=t.minY}function _(t,i,h,r,e){const o=[i,h];for(;o.length;){const i=s(o.pop()),h=s(o.pop());if(i-h<=r)continue;const c=h+Math.ceil((i-h)/r/2)*r;n(t,c,h,i,e),o.push(h,c,c,i)}}const x=new t,m=new t,b=new t,v=new t({deallocator:void 0});class g extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new h}}class S extends g{constructor(t){super(),this.children=t,this.leaf=!0}}class F extends g{constructor(t){super(),this.children=t,this.leaf=!1}}export{r as h}