import{M as e,a7 as t}from"./p-566b0715.js";import{r as a}from"./p-9ae46e68.js";function n(n,o,r,s=new e){let f;if("2d"===r.type)f=o*r.resolution;else if("3d"===r.type){const e=r.overlayPixelSizeInMapUnits(n),s=r.basemapSpatialReference;f=a(s)&&!s.equals(r.spatialReference)?t(s)/t(r.spatialReference):o*e}const i=n.x-f,p=n.y-f,c=n.x+f,h=n.y+f,{spatialReference:m}=r;return s.xmin=Math.min(i,c),s.ymin=Math.min(p,h),s.xmax=Math.max(i,c),s.ymax=Math.max(p,h),s.spatialReference=m,s}new e;export{n as a}