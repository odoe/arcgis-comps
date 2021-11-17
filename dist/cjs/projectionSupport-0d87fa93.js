'use strict';

const request = require('./messageBundle-312ceb47.js');
const projection = require('./projection-e04cb9d0.js');
const json = require('./json-2c41fbe0.js');
const unitUtils = require('./unitUtils-61d611e2.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=[0,0];function c(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return [e.x,e.y]=s(t.x,t.y,u),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return [e.xmin,e.ymin]=s(t.xmin,t.ymin,u),[e.xmax,e.ymax]=s(t.xmax,t.ymax,u),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return "rings"in t?{rings:p(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:p(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function p(s,t){const e=[];for(const n of s)e.push(l(n,t));return e}function l(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3]);}return e}async function f(e,n){if(!n)return;const r=Array.isArray(e)?e.map((t=>request.r(t.geometry)&&t.geometry.spatialReference)):[e];await projection.rn(r.map((s=>({source:s,dest:n}))));}const x=c.bind(null,unitUtils.y$4),y=c.bind(null,unitUtils.d$6);function g(s,t,m){return s?(m||(m=t,t=s.spatialReference),unitUtils.I(t)&&unitUtils.I(m)&&!unitUtils.E(t,m)?unitUtils.g(t,m)?unitUtils.T(m)?x(s):y(s):projection.Q(json.t,[s],t,m,null)[0]:s):s}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this);}async push(s,t,e){if(!s||!s.length||!t||!e||unitUtils.E(t,e))return s;const n={geometries:s,inSpatialReference:t,outSpatialReference:e,resolve:null};return this._jobs.push(n),new Promise((s=>{n.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10));}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:r,outSpatialReference:i,resolve:m}=s;unitUtils.g(r,i)?unitUtils.T(i)?m(t.map(x)):m(t.map(y)):m(projection.Q(json.t,t,r,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10));}}const j=new _;function M(s,t,e){return j.push(s,t,e)}

exports.M = M;
exports.f = f;
exports.g = g;
