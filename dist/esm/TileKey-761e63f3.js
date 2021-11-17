import { bJ as e$1 } from './messageBundle-8a146a9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(t,e,l,s){this.set(t,e,l,s);}static getId(t,e,l,s){return "object"==typeof t?`${t.level}/${t.row}/${t.col}/${t.world}`:`${t}/${e}/${l}/${s}`}get key(){return this}get id(){return this.toString()}set id(t){this.set(t);}get hash(){const t=4095&this.row,e=4095&this.col,l=63&this.level;return (3&this.world)<<30|e<<22|t<<8|l}acquire(t,e,l,s){this.set(t,e,l,s);}contains(t){const e=t.level-this.level;return this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world}equals(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world}clone(){return new e(this)}release(){this.level=0,this.row=0,this.col=0,this.world=0;}set(t,e,l,s){if(null==t)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof t)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"==typeof t){const[e,l,s,o]=t.split("/");this.level=parseFloat(e),this.row=parseFloat(l),this.col=parseFloat(s),this.world=parseFloat(o);}else this.level=+t,this.row=+e,this.col=+l,this.world=+s||0;return this}toString(){return `${this.level}/${this.row}/${this.col}/${this.world}`}getParentKey(){return this.level<=0?null:new e(this.level-1,this.row>>1,this.col>>1,this.world)}getChildKeys(){const t=this.level+1,l=this.row<<1,s=this.col<<1,o=this.world;return [new e(t,l,s,o),new e(t,l,s+1,o),new e(t,l+1,s,o),new e(t,l+1,s+1,o)]}compareRowMajor(t){return this.row<t.row?-1:this.row>t.row?1:this.col<t.col?-1:this.col>t.col?1:0}}e.pool=new e$1(e,null,null,25,50);

export { e };
