import{bL as t,r as i}from"./p-9ae46e68.js";class s{constructor(t,i,s){this._namespace=t,this._storage=i,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(t,i,s,h=0){this._storage.put(this._namespace+t,i,s,h)}get(t){const i=this._storage.get(this._namespace+t);return void 0===i?++this._miss:++this._hit,i}pop(t){const i=this._storage.pop(this._namespace+t);return void 0===i?++this._miss:++this._hit,i}updateSize(t,i,s){this._storage.updateSize(this._namespace+t,i,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class h{constructor(i=10485760){this._maxSize=i,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new t,this._users=new t}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,i){this._removeFuncs.push([t,i])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((i=>i[0]!==t))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,i,s,h){const e=this._db.get(t);if(e&&(this._size-=e.size,this._db.delete(t),e.entry!==i&&this._notifyRemove(t,e.entry,0)),s>this._maxSize)return void this._notifyRemove(t,i,0);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const r=1+Math.max(h,-3)- -3;this._db.set(t,{entry:i,size:s,lifetime:r,lives:r}),this._size+=s,this._checkSizeLimit()}updateSize(t,s,h){const e=this._db.get(t);if(e&&e.entry===s){for(this._size-=e.size;h>this._maxSize;){const e=this._notifyRemove(t,s,1);if(!(i(e)&&e>0))return void this._db.delete(t);h=e}e.size=h,this._size+=h,this._checkSizeLimit()}}pop(t){const i=this._db.get(t);if(i)return this._size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(t){const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},s=new Array;this._db.forEach(((t,h)=>{const e=t.lifetime;s[e]=(s[e]||0)+t.size,this._users.forAll((s=>{const e=s.namespace;h.startsWith(e)&&(i[e]=(i[e]||0)+t.size)}))}));const h={};this._users.forAll((t=>{const s=t.namespace;!isNaN(t.hitRate)&&t.hitRate>0?(i[s]=i[s]||0,h[s]=Math.round(100*t.hitRate)+"%"):h[s]="0%"}));const e=Object.keys(i);e.sort(((t,s)=>i[s]-i[t])),e.forEach((s=>t[s]=Math.round(i[s]/2**20)+"MB / "+h[s]));for(let i=s.length-1;i>=0;--i){const h=s[i];h&&(t["Priority "+(i+-3-1)]=Math.round(h/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){this._db.forEach(((i,s)=>{s.startsWith(t)&&(this._size-=i.size,this._db.delete(s),this._notifyRemove(s,i.entry,0))}))}clearAll(){this._db.forEach(((t,i)=>this._notifyRemove(i,t.entry,0))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,i,s){let h;return this._removeFuncs.some((e=>{if(t.startsWith(e[0])){const t=e[1](i,s);return"number"==typeof t&&(h=t),!0}return!1})),h}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[t,s]of this._db){if(this._db.delete(t),s.lives<=1){this._size-=s.size;const h=this._notifyRemove(t,s.entry,1);i(h)&&h>0&&(this._size+=h,s.lives=s.lifetime,s.size=h,this._db.set(t,s))}else--s.lives,this._db.set(t,s);if(this._size<=.9*this.maxSize)return}}}export{h,s as i}