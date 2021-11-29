import{bs as t,a7 as s}from"./p-5420851c.js";import{S as i,o as h}from"./p-47e1bd73.js";import{g as e}from"./p-a617738c.js";class n{constructor(t,s){this.x=t,this.y=s}clone(){return new n(this.x,this.y)}equals(t,s){return t===this.x&&s===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,s){this.x=t,this.y=s}normalize(){const t=this.x,s=this.y,i=Math.sqrt(t*t+s*s);this.x/=i,this.y/=i}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,s){this.x+=t,this.y+=s}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,s){this.x=t.x+s.x,this.y=t.y+s.y}assignSub(t,s){this.x=t.x-s.x,this.y=t.y-s.y}rotate(t,s){const i=this.x,h=this.y;this.x=i*t-h*s,this.y=i*s+h*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,s=this.y;return Math.sqrt(t*t+s*s)}static distance(t,s){const i=s.x-t.x,h=s.y-t.y;return Math.sqrt(i*i+h*h)}static add(t,s){return new n(t.x+s.x,t.y+s.y)}static sub(t,s){return new n(t.x-s.x,t.y-s.y)}}let o=null,c=null;async function r(){return o||(o=async function(){const i=t("esri-csp-restrictions")?await import("./p-9031a540.js").then((t=>t.l)):await import("./p-739a2df8.js").then((t=>t.l));c=await i.load({locateFile:()=>s("esri/core/libs/libtess/libtess.wasm")})}()),o}function l(t,s){const i=Math.max(t.length,128e3);return c.triangulate(t,s,i)}function a(t,s){return t.x===s.x&&t.y===s.y}function u(t,s){return t.x=s.y,t.y=-s.x,t}function f(t,s){return t.x=-s.y,t.y=s.x,t}function d(t,s){return t.x=s.x,t.y=s.y,t}function v(t,s){return t.x=-s.x,t.y=-s.y,t}function w(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function b(t,s){return t.x*s.y-t.y*s.x}function x(t,s){return t.x*s.x+t.y*s.y}function y(t,s,i,h){return t.x=s.x*i+s.y*h,t.y=s.x*h-s.y*i,t}class M{constructor(t,s,i){this.writeVertex=t,this.writeTriangle=s,this.canUseThinTessellation=i,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(t,s){(function(t){if(!t)return;const s=t.length;if(s<=1)return;let i=0;for(let h=1;h<s;h++)a(t[h],t[i])||++i===h||(t[i]=t[h]);t.length=i+1})(t),this.canUseThinTessellation&&s.halfWidth<i&&!s.offset?this.tessellateThin_(t,s):this.tessellate_(t,s)}tessellateThin_(t,s){if(t.length<2)return;const i=s.wrapDistance||65535;let h=s.initialDistance||0,e=!1,n=t[0].x,o=t[0].y;const c=t.length;for(let s=1;s<c;++s){e&&(e=!1,h=0);let c=t[s].x,r=t[s].y,l=c-n,a=r-o,u=Math.sqrt(l*l+a*a);if(l/=u,a/=u,h+u>i){e=!0;const t=(i-h)/u;u=i-h,c=(1-t)*n+t*c,r=(1-t)*o+t*r,--s}const f=this.writeVertex(n,o,0,0,l,a,a,-l,0,-1,h),d=this.writeVertex(n,o,0,0,l,a,-a,l,0,1,h);h+=u;const v=this.writeVertex(c,r,0,0,l,a,a,-l,0,-1,h),w=this.writeVertex(c,r,0,0,l,a,-a,l,0,1,h);this.writeTriangle(f,d,v),this.writeTriangle(d,v,w),n=c,o=r}}tessellate_(t,s){const i=t[t.length-1],h=a(t[0],i);if(t.length<(h?3:2))return;const e=s.pixelCoordRatio,n=null!=s.capType?s.capType:0,o=null!=s.joinType?s.joinType:2,c=null!=s.miterLimit?Math.min(s.miterLimit,4):2,r=null!=s.roundLimit?Math.min(s.roundLimit,1.05):1.05,l=null!=s.halfWidth?s.halfWidth:2,M=!!s.textured;let m,p,k=null,T=null;const g=this.prevNormal,_=this.nextNormal;let j=-1,E=-1;const D=this.joinNormal;let P,q;const N=this.textureNormalLeft,S=this.textureNormalRight,z=this.textureNormal;let A=-1,C=-1;const F=s.wrapDistance||65535;let I=s.initialDistance||0;const L=this.writeVertex,O=this.writeTriangle,W=function(t,s,i,h,e,n){const o=L(m,p,P,q,i,h,t,s,e,n,I);return A>=0&&C>=0&&o>=0&&O(A,C,o),A=C,C=o,o};h&&(k=t[t.length-2],_.x=i.x-k.x,_.y=i.y-k.y,E=w(_),_.x/=E,_.y/=E);let B=!1;for(let s=0;s<t.length;++s){if(B&&(B=!1,I=0),k&&(g.x=-_.x,g.y=-_.y,j=E,I+j>F&&(B=!0)),B){const i=(F-I)/j;j=F-I,k={x:(1-i)*k.x+i*t[s].x,y:(1-i)*k.y+i*t[s].y},--s}else k=t[s];m=k.x,p=k.y;const i=s<=0&&!B,a=s===t.length-1;if(i||(I+=j),T=a?h?t[1]:null:t[s+1],T?(_.x=T.x-m,_.y=T.y-p,E=w(_),_.x/=E,_.y/=E):(_.x=void 0,_.y=void 0),!h){if(i){f(D,_),P=D.x,q=D.y,2===n&&(W(-_.y-_.x,_.x-_.y,_.x,_.y,0,-1),W(_.y-_.x,-_.x-_.y,_.x,_.y,0,1)),1===n&&(W(-_.y-_.x,_.x-_.y,_.x,_.y,-1,-1),W(_.y-_.x,-_.x-_.y,_.x,_.y,-1,1)),1!==n&&0!==n||(W(-_.y,_.x,_.x,_.y,0,-1),W(_.y,-_.x,_.x,_.y,0,1));continue}if(a){u(D,g),P=D.x,q=D.y,1!==n&&0!==n||(W(g.y,-g.x,-g.x,-g.y,0,-1),W(-g.y,g.x,-g.x,-g.y,0,1)),2===n&&(W(g.y-g.x,-g.x-g.y,-g.x,-g.y,0,-1),W(-g.y-g.x,g.x-g.y,-g.x,-g.y,0,1)),1===n&&(W(g.y-g.x,-g.x-g.y,-g.x,-g.y,1,-1),W(-g.y-g.x,g.x-g.y,-g.x,-g.y,1,1));continue}}let L,O,G=-b(g,_);if(Math.abs(G)<.01)x(g,_)>0?(D.x=g.x,D.y=g.y,G=1,L=Number.MAX_VALUE,O=!0):(f(D,_),G=1,L=1,O=!1);else{D.x=(g.x+_.x)/G,D.y=(g.y+_.y)/G,L=w(D);const t=(L-1)*l*e;O=L>4||t>j&&t>E}P=D.x,q=D.y;let H=o;switch(o){case 0:L<1.05&&(H=2);break;case 1:L<r&&(H=2);break;case 2:L>c&&(H=0)}switch(H){case 2:if(W(D.x,D.y,-g.x,-g.y,0,-1),W(-D.x,-D.y,-g.x,-g.y,0,1),a)break;if(M){const t=B?0:I;A=this.writeVertex(m,p,P,q,_.x,_.y,D.x,D.y,0,-1,t),C=this.writeVertex(m,p,P,q,_.x,_.y,-D.x,-D.y,0,1,t)}break;case 0:{const t=G<0;let s,i,h,e;if(t){const t=A;A=C,C=t,s=N,i=S}else s=S,i=N;if(O)h=t?f(this.innerPrev,g):u(this.innerPrev,g),e=t?u(this.innerNext,_):f(this.innerNext,_);else{const s=t?v(this.inner,D):d(this.inner,D);h=s,e=s}const n=t?u(this.bevelStart,g):f(this.bevelStart,g);W(h.x,h.y,-g.x,-g.y,s.x,s.y);const o=W(n.x,n.y,-g.x,-g.y,i.x,i.y);if(a)break;const c=t?f(this.bevelEnd,_):u(this.bevelEnd,_);if(O){const t=this.writeVertex(m,p,P,q,-g.x,-g.y,0,0,0,0,I);A=this.writeVertex(m,p,P,q,_.x,_.y,e.x,e.y,s.x,s.y,I),C=this.writeVertex(m,p,P,q,_.x,_.y,c.x,c.y,i.x,i.y,I),this.writeTriangle(o,t,C)}else{if(M){const t=this.bevelMiddle;t.x=(n.x+c.x)/2,t.y=(n.y+c.y)/2,y(z,t,-g.x,-g.y),W(t.x,t.y,-g.x,-g.y,z.x,z.y),y(z,t,_.x,_.y),A=this.writeVertex(m,p,P,q,_.x,_.y,t.x,t.y,z.x,z.y,I),C=this.writeVertex(m,p,P,q,_.x,_.y,e.x,e.y,s.x,s.y,I)}else{const t=A;A=C,C=t}W(c.x,c.y,_.x,_.y,i.x,i.y)}if(t){const t=A;A=C,C=t}break}case 1:{const t=G<0;let s,i;if(t){const t=A;A=C,C=t,s=N,i=S}else s=S,i=N;const h=t?v(this.inner,D):d(this.inner,D);let e,n;O?(e=t?f(this.innerPrev,g):u(this.innerPrev,g),n=t?u(this.innerNext,_):f(this.innerNext,_)):(e=h,n=h);const o=t?u(this.roundStart,g):f(this.roundStart,g),c=t?f(this.roundEnd,_):u(this.roundEnd,_),r=W(e.x,e.y,-g.x,-g.y,s.x,s.y),l=W(o.x,o.y,-g.x,-g.y,i.x,i.y);if(a)break;const w=this.writeVertex(m,p,P,q,-g.x,-g.y,0,0,0,0,I);O||this.writeTriangle(A,C,w);const b=v(this.outer,h),k=this.writeVertex(m,p,P,q,_.x,_.y,c.x,c.y,i.x,i.y,I);let T,j;const E=L>2;if(E){let s;L!==Number.MAX_VALUE?(b.x/=L,b.y/=L,s=x(g,b),s=(L*(s*s-1)+1)/s):s=-1,T=t?u(this.startBreak,g):f(this.startBreak,g),T.x+=g.x*s,T.y+=g.y*s,j=t?f(this.endBreak,_):u(this.endBreak,_),j.x+=_.x*s,j.y+=_.y*s}y(z,b,-g.x,-g.y);const F=this.writeVertex(m,p,P,q,-g.x,-g.y,b.x,b.y,z.x,z.y,I);y(z,b,_.x,_.y);const B=M?this.writeVertex(m,p,P,q,_.x,_.y,b.x,b.y,z.x,z.y,I):F,H=w,J=M?this.writeVertex(m,p,P,q,_.x,_.y,0,0,0,0,I):w;let K=-1,Q=-1;if(E&&(y(z,T,-g.x,-g.y),K=this.writeVertex(m,p,P,q,-g.x,-g.y,T.x,T.y,z.x,z.y,I),y(z,j,_.x,_.y),Q=this.writeVertex(m,p,P,q,_.x,_.y,j.x,j.y,z.x,z.y,I)),M?E?(this.writeTriangle(H,l,K),this.writeTriangle(H,K,F),this.writeTriangle(J,B,Q),this.writeTriangle(J,Q,k)):(this.writeTriangle(H,l,F),this.writeTriangle(J,B,k)):E?(this.writeTriangle(w,l,K),this.writeTriangle(w,K,Q),this.writeTriangle(w,Q,k)):(this.writeTriangle(w,l,F),this.writeTriangle(w,B,k)),O?(A=this.writeVertex(m,p,P,q,_.x,_.y,n.x,n.y,s.x,s.y,I),C=k):(A=M?this.writeVertex(m,p,P,q,_.x,_.y,n.x,n.y,s.x,s.y,I):r,this.writeTriangle(A,J,k),C=k),t){const t=A;A=C,C=t}break}}}}}class m{constructor(t,s,i){this.ratio=t,this.x=s,this.y=i}}class p{constructor(t,s,i,e=8,n=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=e,this.pixelMargin=n,this.tileSize=h*e,this.dz=t,this.yPos=s,this.xPos=i}setPixelMargin(t){t!==this.pixelMargin&&(this.pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this.finalRatio=this.tileSize/t*(1<<this.dz);let s=this.pixelRatio*this.pixelMargin;s/=this.finalRatio;const i=t>>this.dz;s>i&&(s=i),this.margin=s,this.xmin=i*this.xPos-s,this.ymin=i*this.yPos-s,this.xmax=this.xmin+i+2*s,this.ymax=this.ymin+i+2*s}reset(t){this.type=t,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(t,s){this._pushLine(),this._prevIsIn=this._isIn(t,s),this._moveTo(t,s,this._prevIsIn),this._prevPt=new n(t,s),this._firstPt=new n(t,s),this._dist=0}lineTo(t,s){const i=this._isIn(t,s),h=new n(t,s),e=n.distance(this._prevPt,h);let o,c,r,l,a,u,f,d;if(i)this._prevIsIn?this._lineTo(t,s,!0):(o=this._prevPt,c=h,r=this._intersect(c,o),this.start=this._dist+e*(1-this._r),this._lineTo(r.x,r.y,!0),this._lineTo(c.x,c.y,!0));else if(this._prevIsIn)c=this._prevPt,o=h,r=this._intersect(c,o),this._lineTo(r.x,r.y,!0),this._lineTo(o.x,o.y,!1);else{const t=this._prevPt,s=h;if(t.x<=this.xmin&&s.x<=this.xmin||t.x>=this.xmax&&s.x>=this.xmax||t.y<=this.ymin&&s.y<=this.ymin||t.y>=this.ymax&&s.y>=this.ymax)this._lineTo(s.x,s.y,!1);else{const i=[];if((t.x<this.xmin&&s.x>this.xmin||t.x>this.xmin&&s.x<this.xmin)&&(l=(this.xmin-t.x)/(s.x-t.x),d=t.y+l*(s.y-t.y),d<=this.ymin?u=!1:d>=this.ymax?u=!0:i.push(new m(l,this.xmin,d))),(t.x<this.xmax&&s.x>this.xmax||t.x>this.xmax&&s.x<this.xmax)&&(l=(this.xmax-t.x)/(s.x-t.x),d=t.y+l*(s.y-t.y),d<=this.ymin?u=!1:d>=this.ymax?u=!0:i.push(new m(l,this.xmax,d))),(t.y<this.ymin&&s.y>this.ymin||t.y>this.ymin&&s.y<this.ymin)&&(l=(this.ymin-t.y)/(s.y-t.y),f=t.x+l*(s.x-t.x),f<=this.xmin?a=!1:f>=this.xmax?a=!0:i.push(new m(l,f,this.ymin))),(t.y<this.ymax&&s.y>this.ymax||t.y>this.ymax&&s.y<this.ymax)&&(l=(this.ymax-t.y)/(s.y-t.y),f=t.x+l*(s.x-t.x),f<=this.xmin?a=!1:f>=this.xmax?a=!0:i.push(new m(l,f,this.ymax))),0===i.length)this._lineTo(a?this.xmax:this.xmin,u?this.ymax:this.ymin,!0);else if(i.length>1&&i[0].ratio>i[1].ratio)this.start=this._dist+e*i[1].ratio,this._lineTo(i[1].x,i[1].y,!0),this._lineTo(i[0].x,i[0].y,!0);else{this.start=this._dist+e*i[0].ratio;for(let t=0;t<i.length;t++)this._lineTo(i[t].x,i[t].y,!0)}this._lineTo(s.x,s.y,!1)}}this._dist+=e,this._prevIsIn=i,this._prevPt=h}close(){if(this.line.length>2){const t=this._firstPt,s=this._prevPt;t.x===s.x&&t.y===s.y||this.lineTo(t.x,t.y);const i=this.line;let h=i.length;for(;h>=4&&(i[0].x===i[1].x&&i[0].x===i[h-2].x||i[0].y===i[1].y&&i[0].y===i[h-2].y);)i.pop(),i[0].x=i[h-2].x,i[0].y=i[h-2].y,--h}}result(t=!0){return this._pushLine(),0===this.lines.length?null:(3===this.type&&t&&T.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(2!==this.type)throw new Error("Only valid for lines");this._pushLine();const t=this.lines,s=t.length;if(0===s)return null;const i=[];for(let h=0;h<s;h++)i.push({line:t[h],start:this.starts[h]||0});return i}_isIn(t,s){return t>=this.xmin&&t<=this.xmax&&s>=this.ymin&&s<=this.ymax}_intersect(t,s){let i,h,e;if(s.x>=this.xmin&&s.x<=this.xmax)h=s.y<=this.ymin?this.ymin:this.ymax,e=(h-t.y)/(s.y-t.y),i=t.x+e*(s.x-t.x);else if(s.y>=this.ymin&&s.y<=this.ymax)i=s.x<=this.xmin?this.xmin:this.xmax,e=(i-t.x)/(s.x-t.x),h=t.y+e*(s.y-t.y);else{h=s.y<=this.ymin?this.ymin:this.ymax,i=s.x<=this.xmin?this.xmin:this.xmax;const n=(i-t.x)/(s.x-t.x),o=(h-t.y)/(s.y-t.y);n<o?(e=n,h=t.y+n*(s.y-t.y)):(e=o,i=t.x+o*(s.x-t.x))}return this._r=e,new n(i,h)}_pushLine(){this.line&&(1===this.type?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):2===this.type?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(t,s,i){3!==this.type?i&&(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line.push(new n(t,s))):(i||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),s<this.ymin&&(s=this.ymin),s>this.ymax&&(s=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line.push(new n(t,s)),this._is_h=!1,this._is_v=!1)}_lineTo(t,s,i){let h,e;if(3!==this.type)if(i){if(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(h=this.line[this.line.length-1],h.equals(t,s)))return;this.line.push(new n(t,s))}else this.line&&this.line.length>0&&this._pushLine();else if(i||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),s<this.ymin&&(s=this.ymin),s>this.ymax&&(s=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){h=this.line[this.line.length-1];const i=h.x===t,o=h.y===s;if(i&&o)return;this._is_h&&i||this._is_v&&o?(h.x=t,h.y=s,e=this.line[this.line.length-2],e.x===t&&e.y===s?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(e=this.line[this.line.length-2],this._is_h=e.x===t,this._is_v=e.y===s)):(this._is_h=e.x===t,this._is_v=e.y===s)):(this.line.push(new n(t,s)),this._is_h=i,this._is_v=o)}else this.line.push(new n(t,s))}}class k{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this.lines=[],this.line=null}moveTo(t,s){this.line&&this.lines.push(this.line),this.line=[];const i=this._ratio;this.line.push(new n(t*i,s*i))}lineTo(t,s){const i=this._ratio;this.line.push(new n(t*i,s*i))}close(){const t=this.line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}class T{static simplify(t,s,i){if(!i)return;const h=-s,e=t+s,n=-s,o=t+s,c=[],r=[],l=i.length;for(let t=0;t<l;++t){const s=i[t];if(!s||s.length<2)continue;let l,a=s[0];const u=s.length;for(let i=1;i<u;++i)l=s[i],a.x===l.x&&(a.x<=h&&(a.y>l.y?(c.push(t),c.push(i),c.push(0),c.push(-1)):(r.push(t),r.push(i),r.push(0),r.push(-1))),a.x>=e&&(a.y<l.y?(c.push(t),c.push(i),c.push(1),c.push(-1)):(r.push(t),r.push(i),r.push(1),r.push(-1)))),a.y===l.y&&(a.y<=n&&(a.x<l.x?(c.push(t),c.push(i),c.push(2),c.push(-1)):(r.push(t),r.push(i),r.push(2),r.push(-1))),a.y>=o&&(a.x>l.x?(c.push(t),c.push(i),c.push(3),c.push(-1)):(r.push(t),r.push(i),r.push(3),r.push(-1)))),a=l}if(0===c.length||0===r.length)return;T.fillParent(i,r,c),T.fillParent(i,c,r);const a=[];T.calcDeltas(a,r,c),T.calcDeltas(a,c,r),T.addDeltas(a,i)}static fillParent(t,s,i){const h=i.length,n=s.length;for(let o=0;o<n;o+=4){const n=s[o],c=s[o+1],r=s[o+2],l=t[n][c-1],a=t[n][c];let u=8092,f=-1;for(let s=0;s<h;s+=4){if(i[s+2]!==r)continue;const h=i[s],n=i[s+1],o=t[h][n-1],c=t[h][n];switch(r){case 0:case 1:if(e(l.y,o.y,c.y)&&e(a.y,o.y,c.y)){const t=Math.abs(c.y-o.y);t<u&&(u=t,f=s)}break;case 2:case 3:if(e(l.x,o.x,c.x)&&e(a.x,o.x,c.x)){const t=Math.abs(c.x-o.x);t<u&&(u=t,f=s)}}}s[o+3]=f}}static calcDeltas(t,s,i){const h=s.length;for(let e=0;e<h;e+=4){const h=T.calcDelta(e,s,i,[]);t.push(s[e]),t.push(s[e+1]),t.push(s[e+2]),t.push(h)}}static calcDelta(t,s,i,h){const e=s[t+3];if(-1===e)return 0;const n=h.length;return n>1&&h[n-2]===e?0:(h.push(e),T.calcDelta(e,i,s,h)+1)}static addDeltas(t,s){const i=t.length;let h=0;for(let s=0;s<i;s+=4){const i=t[s+3];i>h&&(h=i)}for(let e=0;e<i;e+=4){const i=s[t[e]],n=t[e+1],o=h-t[e+3];switch(t[e+2]){case 0:i[n-1].x-=o,i[n].x-=o,1===n&&(i[i.length-1].x-=o),n===i.length-1&&(i[0].x-=o);break;case 1:i[n-1].x+=o,i[n].x+=o,1===n&&(i[i.length-1].x+=o),n===i.length-1&&(i[0].x+=o);break;case 2:i[n-1].y-=o,i[n].y-=o,1===n&&(i[i.length-1].y-=o),n===i.length-1&&(i[0].y-=o);break;case 3:i[n-1].y+=o,i[n].y+=o,1===n&&(i[i.length-1].y+=o),n===i.length-1&&(i[0].y+=o)}}}}export{M as a,r as b,k as e,p as n,l as r,n as t}