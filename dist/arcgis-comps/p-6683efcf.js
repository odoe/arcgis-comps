import{t}from"./p-ad14ca1b.js";class s{constructor(t){this._programCacheByTemplate=new Map,this._rctx=t}dispose(){this._programCacheByTemplate.forEach((t=>t.programs.forEach((t=>t.dispose())))),this._programCacheByTemplate=null}getProgram(s,r){return this._programCacheByTemplate.has(s)||this.addProgramTemplate(s,(r=>t(this._rctx,s,r))),this.getProgramTemplateInstance(s,r)}addProgramTemplate(t,s){this._programCacheByTemplate.set(t,{constructor:s,programs:new Map})}getProgramTemplateInstance(t,s){const r=this._programCacheByTemplate.get(t);if(r){const t=s?JSON.stringify(s):"default";if(!r.programs.has(t)){const a=r.constructor(s);r.programs.set(t,a)}return r.programs.get(t)}return null}}export{s as t}