import{a8 as t,W as a,a9 as e}from"./p-7b6f6c18.js";function n(n,s,f,o=new t){let r;if("2d"===f.type)r=s*f.resolution;else if("3d"===f.type){const t=f.overlayPixelSizeInMapUnits(n),o=f.basemapSpatialReference;r=a(o)&&!o.equals(f.spatialReference)?e(o)/e(f.spatialReference):s*t}const c=n.x-r,i=n.y-r,h=n.x+r,p=n.y+r,{spatialReference:M}=f;return o.xmin=Math.min(c,h),o.ymin=Math.min(i,p),o.xmax=Math.max(c,h),o.ymax=Math.max(i,p),o.spatialReference=M,o}new t;export{n as a}