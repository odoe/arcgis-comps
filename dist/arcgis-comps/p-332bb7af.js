import{p as e,j as t}from"./p-db63fa0e.js";class r{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let r=0,i=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(r=t),e[1]%2&&(i=t)),[r,i]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(r){if(!r)return null;if(256===r.size[0]&&256===r.size[1])return r;const i=r.spatialReference.isGeographic,s=[],n=r.lods.length;for(let t=0;t<n;t++){const n=r.lods[t];s.push(new e({level:n.level,scale:n.scale,resolution:i?n.resolution:2*n.resolution}))}return new t({size:[256,256],dpi:r.dpi,format:r.format,compressionQuality:r.compressionQuality,origin:r.origin,spatialReference:r.spatialReference,lods:s})}static create512x512CompatibleTileInfo(r){if(!r)return null;if(256===r.size[0]||256===r.size[1])return null;const i=[],s=r.lods.length;for(let t=0;t<s;t++){const s=r.lods[t];i.push(new e({level:s.level,scale:s.scale,resolution:.5*s.resolution}))}return new t({size:[512,512],dpi:r.dpi,format:r.format,compressionQuality:r.compressionQuality,origin:r.origin,spatialReference:r.spatialReference,lods:i})}}export{r as s}