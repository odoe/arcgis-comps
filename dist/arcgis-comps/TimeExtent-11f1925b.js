import { A as r$1, aG as E, aH as A, e as e$1, a as d$1, i as i$1 } from './jsxFactory-b8b7429b.js';
import { a as a$1 } from './JSONSupport-15eefdaf.js';
import { g as o$1, k as r$2 } from './Graphic-75d1efd2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},t={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(e,s,r){const n=new Date(e.getTime());if(s&&r){const e=t[r],{getter:l,setter:u,multiplier:i}=e;n[u](n[l]()+s*i);}return n}function r(e,t,s="milliseconds"){const r=e.getTime(),n=o(t,s,"milliseconds");return new Date(r+n)}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function l(e,t,s="milliseconds"){const r=new Date(o(t,s,"milliseconds"));return r.setUTCFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),r}function u$1(e,t="milliseconds"){const s=o(e.getUTCHours(),"hours","milliseconds"),r=o(e.getUTCMinutes(),"minutes","milliseconds"),n=o(e.getUTCSeconds(),"seconds","milliseconds");return o(s+r+n+e.getUTCMilliseconds(),"milliseconds",t)}function i(e,t){const s=new Date(e.getTime());return s.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),s}function a(e){const t=new Date(0);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t}function o(t,s,r){if(0===t)return 0;return t*e[s]/e[r]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;let d=u=class extends a$1{constructor(t){super(t),this.end=null,this.start=null;}static get allTime(){return c}static get empty(){return h}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?t.getTime():null;}get isAllTime(){return this.equals(u.allTime)}get isEmpty(){return this.equals(u.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?t.getTime():null;}clone(){return new u({end:this.end,start:this.start})}equals(t){if(!t)return !1;const e=r$1(this.start)?this.start.getTime():this.start,s=r$1(this.end)?this.end.getTime():this.end,i=r$1(t.start)?t.start.getTime():t.start,n=r$1(t.end)?t.end.getTime():t.end;return e===i&&s===n}expandTo(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=E(this.start,(e=>n(e,t))),r=E(this.end,(e=>s(n(e,t),1,t)));return new u({start:e,end:r})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return u.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=A(this.start,-1/0,(t=>t.getTime())),r=A(this.end,1/0,(t=>t.getTime())),s=A(t.start,-1/0,(t=>t.getTime())),n=A(t.end,1/0,(t=>t.getTime()));let o,l;if(s>=e&&s<=r?o=s:e>=s&&e<=n&&(o=e),r>=s&&r<=n?l=r:n>=e&&n<=r&&(l=n),!isNaN(o)&&!isNaN(l)){const t=new u;return t.start=o===-1/0?null:new Date(o),t.end=l===1/0?null:new Date(l),t}return u.empty}offset(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const s$1=new u,{start:i,end:n}=this;return r$1(i)&&(s$1.start=s(i,t,e)),r$1(n)&&(s$1.end=s(n,t,e)),s$1}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return c.clone();const e=r$1(this.start)&&r$1(t.start)?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,s=r$1(this.end)&&r$1(t.end)?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new u({start:e,end:s})}};e$1([d$1({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),e$1([o$1("end")],d.prototype,"readEnd",null),e$1([r$2("end")],d.prototype,"writeEnd",null),e$1([d$1({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),e$1([d$1({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),e$1([d$1({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),e$1([o$1("start")],d.prototype,"readStart",null),e$1([r$2("start")],d.prototype,"writeStart",null),d=u=e$1([i$1("esri.TimeExtent")],d);const c=new d,h=new d({start:void 0,end:void 0}),y=d;

export { o, s, y };
