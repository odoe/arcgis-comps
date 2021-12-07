import { kc as p, dd as j } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i;}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let s=0,t=0;return (256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(s=i),e[1]%2&&(t=i)),[s,t]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]&&256===s.size[1])return s;const t=256,l=s.spatialReference.isGeographic,r=[],o=s.lods.length;for(let i=0;i<o;i++){const t=s.lods[i],o=l?t.resolution:2*t.resolution;r.push(new p({level:t.level,scale:t.scale,resolution:o}));}return new j({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:r})}static create512x512CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]||256===s.size[1])return null;const t=512,l=[],r=s.lods.length;for(let i=0;i<r;i++){const t=s.lods[i],r=.5*t.resolution;l.push(new p({level:t.level,scale:t.scale,resolution:r}));}return new j({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:l})}}

export { s };
