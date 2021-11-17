'use strict';

require('./messageBundle-312ceb47.js');
require('./unitUtils-61d611e2.js');
require('./Query-35be2e91.js');
require('./TileKey-b425207e.js');

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}

exports.l = l;
