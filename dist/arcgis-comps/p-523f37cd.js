import{e,d as t,R as s,i,P as r,t as l}from"./p-9ae46e68.js";import{a as n}from"./p-fe01b82b.js";import{E as o,o as a,d as c,k as u,a6 as h,a7 as p,aY as d,a2 as f,a1 as m,a9 as w}from"./p-566b0715.js";import{u as v}from"./p-81e5b36e.js";var y;let g=y=class extends n{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new y({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};e([t({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],g.prototype,"cols",void 0),e([t({type:s,json:{write:!0}})],g.prototype,"level",void 0),e([t({type:String,json:{write:!0}})],g.prototype,"levelValue",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"resolution",void 0),e([t({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],g.prototype,"rows",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"scale",void 0),g=y=e([i("esri.layers.support.LOD")],g);const b=g;var j;const M=new r({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let S=j=class extends n{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:s,size:i=256,spatialReference:r=u.WebMercator,numLODs:l=24}=e;if(!h(r)){const e=[];if(s)for(let t=0;t<s.length;t++){const i=s[t];e.push({level:t,scale:i,resolution:i})}else{let t=5e-4;for(let s=l-1;s>=0;s--)e.unshift({level:s,scale:t,resolution:t}),t*=2}return new j({dpi:96,lods:e,origin:new o(0,0,r),size:[i,i],spatialReference:r})}const n=w(r),a=new o(e.origin?{x:e.origin.x,y:e.origin.y,spatialReference:r}:n?{x:n.origin[0],y:n.origin[1],spatialReference:r}:{x:0,y:0,spatialReference:r}),c=1/(39.37*p(r)*96),f=[];if(s)for(let e=0;e<s.length;e++){const t=s[e];f.push({level:e,scale:t,resolution:t*c})}else{let e=d(r)?512/i*591657527.5917094:256/i*591657527.591555;const s=Math.ceil(l/t);f.push({level:0,scale:e,resolution:e*c});for(let i=1;i<s;i++){const s=e/2**t;f.push({level:i,scale:s,resolution:s*c}),e=s}}return new j({dpi:96,lods:f,origin:a,size:[i,i],spatialReference:r})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=w(e);return e.isWrappable&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return o.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const i=[];this._levelToLOD={},e&&(t=-1/0,s=1/0,e.forEach((e=>{i.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,this._levelToLOD[e.level]=e}))),this._set("scales",i),this._set("minScale",t),this._set("maxScale",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];{const s=Math.floor(e);return t[s]/(t[s]/t[s+1])**(e-s)}}scaleToZoom(e){const t=this.scales,s=t.length-1;let i=0;for(;i<s;i++){const s=t[i],r=t[i+1];if(s<=e)return i;if(r===e)return i+1;if(s>e&&r<e)return i+Math.log(s/e)/Math.log(s/r)}return i}snapScale(e,t=.95){const s=this.scaleToZoom(e);return s%Math.floor(s)>=t?this.zoomToScale(Math.ceil(s)):this.zoomToScale(Math.floor(s))}tileAt(e,t,s,i){const r=this.lodAt(e);if(!r)return null;let n,o;if("number"==typeof t)n=t,o=s;else if(f(t.spatialReference,this.spatialReference))n=t.x,o=t.y,i=s;else{const e=m(t,this.spatialReference);if(l(e))return null;n=e.x,o=e.y,i=s}const a=r.resolution*this.size[0],c=r.resolution*this.size[1];return i||(i={id:null,level:0,row:0,col:0,extent:v()}),i.level=e,i.row=Math.floor((this.origin.y-o)/c+.001),i.col=Math.floor((n-this.origin.x)/a+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=0){let s=this.lodAt(e.level);if(!s&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(s=t)}if(!s)return;const i=e.level-s.level,r=s.resolution*this.size[0]/2**i,l=s.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=v()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:s}=this.lodAt(t.level),i=s*this.size[0],r=s*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*r,e[2]=e[0]+i,e[3]=e[1]+r,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return j.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const i=e[s];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};e([t({type:Number,json:{write:!0}})],S.prototype,"compressionQuality",void 0),e([t({type:Number,json:{write:!0}})],S.prototype,"dpi",void 0),e([t({type:String,json:{read:M.read,write:M.write,origins:{"web-scene":{read:!1,write:!1}}}})],S.prototype,"format",void 0),e([t({readOnly:!0})],S.prototype,"isWrappable",null),e([t({type:o,json:{write:!0}})],S.prototype,"origin",void 0),e([a("origin")],S.prototype,"readOrigin",null),e([t({type:[b],value:null,json:{write:!0}})],S.prototype,"lods",null),e([t({readOnly:!0})],S.prototype,"minScale",void 0),e([t({readOnly:!0})],S.prototype,"maxScale",void 0),e([t({readOnly:!0})],S.prototype,"scales",void 0),e([t({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],S.prototype,"size",void 0),e([a("size",["rows","cols"])],S.prototype,"readSize",null),e([c("size",{cols:{type:s},rows:{type:s}})],S.prototype,"writeSize",null),e([t({type:u,json:{write:!0}})],S.prototype,"spatialReference",void 0),S=j=e([i("esri.layers.support.TileInfo")],S);const z=S;export{z as j,b as p}