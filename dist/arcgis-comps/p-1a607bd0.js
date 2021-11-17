import{cs as r}from"./p-566b0715.js";var e={};e.defaultNoDataValue=r(-1/0),e.decode=function(f,l){var o=(l=l||{}).encodedMaskData||null===l.encodedMaskData,s=i(f,l.inputOffset||0,o),u=null!=l.noDataValue?r(l.noDataValue):e.defaultNoDataValue,w=a(s,l.pixelType||Float32Array,l.encodedMaskData,u,l.returnMask),v={width:s.width,height:s.height,pixelData:w.resultPixels,minValue:s.pixels.minValue,maxValue:s.pixels.maxValue,noDataValue:u};return w.resultMask&&(v.maskData=w.resultMask),l.returnEncodedMask&&s.mask&&(v.encodedMaskData=s.mask.bitset?s.mask.bitset:null),l.returnFileInfo&&(v.fileInfo=n(s,u),l.computeUsedBitDepths&&(v.fileInfo.bitDepths=t(s))),v};var a=function(r,e,a,n,t){var i,l,o=0,s=r.pixels.numBlocksX,u=r.pixels.numBlocksY,w=Math.floor(r.width/s),v=Math.floor(r.height/u),h=2*r.maxZError;a=a||(r.mask?r.mask.bitset:null),i=new e(r.width*r.height),t&&a&&(l=new Uint8Array(r.width*r.height));for(var c,m,y=new Float32Array(w*v),d=0;d<=u;d++){var A=d!==u?v:r.height%u;if(0!==A)for(var M=0;M<=s;M++){var V=M!==s?w:r.width%s;if(0!==V){var k,p,x,U,g=d*r.width*v+M*w,B=r.width-V,D=r.pixels.blocks[o];if(D.encoding<2?(0===D.encoding?k=D.rawData:(f(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,h,y,r.pixels.maxValue),k=y),p=0):x=2===D.encoding?0:D.offset,a)for(m=0;m<A;m++){for(7&g&&(U=a[g>>3],U<<=7&g),c=0;c<V;c++)7&g||(U=a[g>>3]),128&U?(l&&(l[g]=1),i[g++]=D.encoding<2?k[p++]:x):(l&&(l[g]=0),i[g++]=n),U<<=1;g+=B}else if(D.encoding<2)for(m=0;m<A;m++){for(c=0;c<V;c++)i[g++]=k[p++];g+=B}else for(m=0;m<A;m++)if(i.fill)i.fill(x,g,g+V),g+=V+B;else{for(c=0;c<V;c++)i[g++]=x;g+=B}if(1===D.encoding&&p!==D.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:i,resultMask:l}},n=function(r,e){return{fileIdentifierString:r.fileIdentifierString,fileVersion:r.fileVersion,imageType:r.imageType,height:r.height,width:r.width,maxZError:r.maxZError,eofOffset:r.eofOffset,mask:r.mask?{numBlocksX:r.mask.numBlocksX,numBlocksY:r.mask.numBlocksY,numBytes:r.mask.numBytes,maxValue:r.mask.maxValue}:null,pixels:{numBlocksX:r.pixels.numBlocksX,numBlocksY:r.pixels.numBlocksY,numBytes:r.pixels.numBytes,maxValue:r.pixels.maxValue,minValue:r.pixels.minValue,noDataValue:e}}},t=function(r){for(var e=r.pixels.numBlocksX*r.pixels.numBlocksY,a={},n=0;n<e;n++){var t=r.pixels.blocks[n];0===t.encoding?a.float32=!0:1===t.encoding?a[t.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},i=function(r,e,a){var n={},t=new Uint8Array(r,e,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,t),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;e+=10;var i=new DataView(r,e,24);if(n.fileVersion=i.getInt32(0,!0),n.imageType=i.getInt32(4,!0),n.height=i.getUint32(8,!0),n.width=i.getUint32(12,!0),n.maxZError=i.getFloat64(16,!0),e+=24,!a)if(i=new DataView(r,e,16),n.mask={},n.mask.numBlocksY=i.getUint32(0,!0),n.mask.numBlocksX=i.getUint32(4,!0),n.mask.numBytes=i.getUint32(8,!0),n.mask.maxValue=i.getFloat32(12,!0),e+=16,n.mask.numBytes>0){var f=new Uint8Array(Math.ceil(n.width*n.height/8)),l=(i=new DataView(r,e,n.mask.numBytes)).getInt16(0,!0),o=2,s=0;do{if(l>0)for(;l--;)f[s++]=i.getUint8(o++);else{var u=i.getUint8(o++);for(l=-l;l--;)f[s++]=u}l=i.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==l||s<f.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=f,e+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(f=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=f);i=new DataView(r,e,16),n.pixels={},n.pixels.numBlocksY=i.getUint32(0,!0),n.pixels.numBlocksX=i.getUint32(4,!0),n.pixels.numBytes=i.getUint32(8,!0),n.pixels.maxValue=i.getFloat32(12,!0),e+=16;var w=n.pixels.numBlocksX,v=n.pixels.numBlocksY,h=w+(n.width%w>0?1:0),c=v+(n.height%v>0?1:0);n.pixels.blocks=new Array(h*c);for(var m=1e9,y=0,d=0;d<c;d++)for(var A=0;A<h;A++){var M=0;i=new DataView(r,e,Math.min(10,r.byteLength-e));var V={};n.pixels.blocks[y++]=V;var k=i.getUint8(0);if(M++,V.encoding=63&k,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==k&&2!==k){if(V.offsetType=k>>=6,2===k)V.offset=i.getInt8(1),M++;else if(1===k)V.offset=i.getInt16(1,!0),M+=2;else{if(0!==k)throw"Invalid block offset type";V.offset=i.getFloat32(1,!0),M+=4}if(m=Math.min(V.offset,m),1===V.encoding)if(k=i.getUint8(M),M++,V.bitsPerPixel=63&k,V.numValidPixelsType=k>>=6,2===k)V.numValidPixels=i.getUint8(M),M++;else if(1===k)V.numValidPixels=i.getUint16(M,!0),M+=2;else{if(0!==k)throw"Invalid valid pixel count type";V.numValidPixels=i.getUint32(M,!0),M+=4}}var p;if(e+=M,3!=V.encoding)if(0===V.encoding){var x=(n.pixels.numBytes-1)/4;if(x!==Math.floor(x))throw"uncompressed block has invalid length";p=new ArrayBuffer(4*x),new Uint8Array(p).set(new Uint8Array(r,e,4*x));for(var U=new Float32Array(p),g=0;g<U.length;g++)m=Math.min(m,U[g]);V.rawData=U,e+=4*x}else if(1===V.encoding){var B=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),D=Math.ceil(B/4);p=new ArrayBuffer(4*D),new Uint8Array(p).set(new Uint8Array(r,e,B)),V.stuffedData=new Uint32Array(p),e+=B}}else e++,m=Math.min(m,0)}return n.pixels.minValue=m,n.eofOffset=e,n},f=function(r,e,a,n,t,i,f){var l,o,s,u=(1<<e)-1,w=0,v=0,h=Math.ceil((f-n)/t),c=4*r.length-Math.ceil(e*a/8);for(r[r.length-1]<<=8*c,l=0;l<a;l++){if(0===v&&(s=r[w++],v=32),v>=e)o=s>>>v-e&u,v-=e;else{var m=e-v;o=(s&u)<<m&u,o+=(s=r[w++])>>>(v=32-m)}i[l]=o<h?n+o*t:f}return i};const l=e.decode;export{l as r}