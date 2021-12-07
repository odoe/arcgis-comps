'use strict';

const request = require('./messageBundle-8be88d04.js');
const WorkerHandle = require('./WorkerHandle-fc87c5d8.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends WorkerHandle.n{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0;}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return [e.buffer]}release(){--this.ref<=0&&(o.forEach(((e,r)=>{e===this&&o.delete(r);})),this.destroy());}}const o=new Map;function n(t=null){let n=o.get(request.e$2(t));return n||(request.r(t)?(n=new s((e=>t.schedule(e))),o.set(t,n)):(n=new s,o.set(null,n))),++n.ref,n}

exports.n = n;
