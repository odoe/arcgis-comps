import{e,d as r,i as t,p as s,Z as n}from"./p-e58503d5.js";let l=class extends s{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,r){return"string"!=typeof e?e:{url:e,...r}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?n(e):null}_encode(e,r,t){const s={};for(const n in e){if("declaredClass"===n)continue;const l=e[n];if(null!=l&&"function"!=typeof l)if(Array.isArray(l)){s[n]=[];for(let e=0;e<l.length;e++)s[n][e]=this._encode(l[e])}else if("object"==typeof l)if(l.toJSON){const e=l.toJSON(t&&t[n]);s[n]=r?e:JSON.stringify(e)}else s[n]=r?l:JSON.stringify(l);else s[n]=l}return s}};e([r({readOnly:!0})],l.prototype,"parsedUrl",null),e([r()],l.prototype,"requestOptions",void 0),e([r({type:String})],l.prototype,"url",void 0),l=e([t("esri.tasks.Task")],l);const o=l;export{o as l}