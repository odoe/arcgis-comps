import{t}from"./p-9ae46e68.js";class s{constructor(t=[],s=[],i=!1){this.lengths=null!=t?t:[],this.coords=null!=s?s:[],this.hasIndeterminateRingOrder=i}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,s)=>t+s))}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let i=0;i<this.lengths.length;i++){const h=this.lengths[i];for(let i=0;i<h;i++)t(this.coords[2*(i+s)],this.coords[2*(i+s)+1]);s+=h}}clone(t){return t?(t.set(this.coords),new s(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new s(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}class i{constructor(t=null,s={},i,h){this.geometry=t,this.attributes=s,this.centroid=i,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new i(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function h(s){return!(t(s.geometry)||!s.geometry.coords||!s.geometry.coords.length)}class e extends i{}export{h as e,e as o,i as s,s as t}