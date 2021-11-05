'use strict';

const request = require('./MapView-922b9f1e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new request.M){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=request.r(o)&&!o.equals(a.spatialReference)?request.H(o)/request.H(a.spatialReference):n*i;}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new request.M;

exports.a = a;
