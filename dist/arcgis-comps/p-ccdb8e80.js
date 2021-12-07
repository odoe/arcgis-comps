import{a as t,n}from"./p-d3105731.js";function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function r(t,n,a,r,o,h,M,u,e,c,i,f,s,l,m,p,d){return t[0]=n,t[1]=a,t[2]=r,t[3]=o,t[4]=h,t[5]=M,t[6]=u,t[7]=e,t[8]=c,t[9]=i,t[10]=f,t[11]=s,t[12]=l,t[13]=m,t[14]=p,t[15]=d,t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function h(t,n){if(t===n){const a=n[1],r=n[2],o=n[3],h=n[6],M=n[7],u=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=h,t[11]=n[14],t[12]=o,t[13]=M,t[14]=u}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function M(t,n){const a=n[0],r=n[1],o=n[2],h=n[3],M=n[4],u=n[5],e=n[6],c=n[7],i=n[8],f=n[9],s=n[10],l=n[11],m=n[12],p=n[13],d=n[14],R=n[15],g=a*u-r*M,S=a*e-o*M,T=a*c-h*M,y=r*e-o*u,b=r*c-h*u,O=o*c-h*e,_=i*p-f*m,j=i*d-s*m,v=i*R-l*m,A=f*d-s*p,q=f*R-l*p,x=s*R-l*d;let F=g*x-S*q+T*A+y*v-b*j+O*_;return F?(F=1/F,t[0]=(u*x-e*q+c*A)*F,t[1]=(o*q-r*x-h*A)*F,t[2]=(p*O-d*b+R*y)*F,t[3]=(s*b-f*O-l*y)*F,t[4]=(e*v-M*x-c*j)*F,t[5]=(a*x-o*v+h*j)*F,t[6]=(d*T-m*O-R*S)*F,t[7]=(i*O-s*T+l*S)*F,t[8]=(M*q-u*v+c*_)*F,t[9]=(r*v-a*q-h*_)*F,t[10]=(m*b-p*T+R*g)*F,t[11]=(f*T-i*b-l*g)*F,t[12]=(u*j-M*A-e*_)*F,t[13]=(a*A-r*j+o*_)*F,t[14]=(p*S-m*y-d*g)*F,t[15]=(i*y-f*S+s*g)*F,t):null}function u(t,n,a){const r=n[0],o=n[1],h=n[2],M=n[3],u=n[4],e=n[5],c=n[6],i=n[7],f=n[8],s=n[9],l=n[10],m=n[11],p=n[12],d=n[13],R=n[14],g=n[15];let S=a[0],T=a[1],y=a[2],b=a[3];return t[0]=S*r+T*u+y*f+b*p,t[1]=S*o+T*e+y*s+b*d,t[2]=S*h+T*c+y*l+b*R,t[3]=S*M+T*i+y*m+b*g,S=a[4],T=a[5],y=a[6],b=a[7],t[4]=S*r+T*u+y*f+b*p,t[5]=S*o+T*e+y*s+b*d,t[6]=S*h+T*c+y*l+b*R,t[7]=S*M+T*i+y*m+b*g,S=a[8],T=a[9],y=a[10],b=a[11],t[8]=S*r+T*u+y*f+b*p,t[9]=S*o+T*e+y*s+b*d,t[10]=S*h+T*c+y*l+b*R,t[11]=S*M+T*i+y*m+b*g,S=a[12],T=a[13],y=a[14],b=a[15],t[12]=S*r+T*u+y*f+b*p,t[13]=S*o+T*e+y*s+b*d,t[14]=S*h+T*c+y*l+b*R,t[15]=S*M+T*i+y*m+b*g,t}function e(t,n,a){const r=a[0],o=a[1],h=a[2];let M,u,e,c,i,f,s,l,m,p,d,R;return n===t?(t[12]=n[0]*r+n[4]*o+n[8]*h+n[12],t[13]=n[1]*r+n[5]*o+n[9]*h+n[13],t[14]=n[2]*r+n[6]*o+n[10]*h+n[14],t[15]=n[3]*r+n[7]*o+n[11]*h+n[15]):(M=n[0],u=n[1],e=n[2],c=n[3],i=n[4],f=n[5],s=n[6],l=n[7],m=n[8],p=n[9],d=n[10],R=n[11],t[0]=M,t[1]=u,t[2]=e,t[3]=c,t[4]=i,t[5]=f,t[6]=s,t[7]=l,t[8]=m,t[9]=p,t[10]=d,t[11]=R,t[12]=M*r+i*o+m*h+n[12],t[13]=u*r+f*o+p*h+n[13],t[14]=e*r+s*o+d*h+n[14],t[15]=c*r+l*o+R*h+n[15]),t}function c(t,n,a){const r=a[0],o=a[1],h=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=n[7]*o,t[8]=n[8]*h,t[9]=n[9]*h,t[10]=n[10]*h,t[11]=n[11]*h,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function i(n,a,r,o){let h,M,u,e,c,i,f,s,l,m,p,d,R,g,S,T,y,b,O,_,j,v,A,q,x=o[0],F=o[1],Q=o[2],X=Math.sqrt(x*x+F*F+Q*Q);return X<t?null:(X=1/X,x*=X,F*=X,Q*=X,h=Math.sin(r),M=Math.cos(r),u=1-M,e=a[0],c=a[1],i=a[2],f=a[3],s=a[4],l=a[5],m=a[6],p=a[7],d=a[8],R=a[9],g=a[10],S=a[11],T=x*x*u+M,y=F*x*u+Q*h,b=Q*x*u-F*h,O=x*F*u-Q*h,_=F*F*u+M,j=Q*F*u+x*h,v=x*Q*u+F*h,A=F*Q*u-x*h,q=Q*Q*u+M,n[0]=e*T+s*y+d*b,n[1]=c*T+l*y+R*b,n[2]=i*T+m*y+g*b,n[3]=f*T+p*y+S*b,n[4]=e*O+s*_+d*j,n[5]=c*O+l*_+R*j,n[6]=i*O+m*_+g*j,n[7]=f*O+p*_+S*j,n[8]=e*v+s*A+d*q,n[9]=c*v+l*A+R*q,n[10]=i*v+m*A+g*q,n[11]=f*v+p*A+S*q,a!==n&&(n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15]),n)}function f(t,n,a){const r=Math.sin(a),o=Math.cos(a),h=n[4],M=n[5],u=n[6],e=n[7],c=n[8],i=n[9],f=n[10],s=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=h*o+c*r,t[5]=M*o+i*r,t[6]=u*o+f*r,t[7]=e*o+s*r,t[8]=c*o-h*r,t[9]=i*o-M*r,t[10]=f*o-u*r,t[11]=s*o-e*r,t}function s(t,n,a){const r=Math.sin(a),o=Math.cos(a),h=n[0],M=n[1],u=n[2],e=n[3],c=n[8],i=n[9],f=n[10],s=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=h*o-c*r,t[1]=M*o-i*r,t[2]=u*o-f*r,t[3]=e*o-s*r,t[8]=h*r+c*o,t[9]=M*r+i*o,t[10]=u*r+f*o,t[11]=e*r+s*o,t}function l(t,n,a){const r=Math.sin(a),o=Math.cos(a),h=n[0],M=n[1],u=n[2],e=n[3],c=n[4],i=n[5],f=n[6],s=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=h*o+c*r,t[1]=M*o+i*r,t[2]=u*o+f*r,t[3]=e*o+s*r,t[4]=c*o-h*r,t[5]=i*o-M*r,t[6]=f*o-u*r,t[7]=s*o-e*r,t}function m(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function p(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function g(t,n,a){const r=n[0],o=n[1],h=n[2],M=n[3],u=r+r,e=o+o,c=h+h,i=r*u,f=r*e,s=r*c,l=o*e,m=o*c,p=h*c,d=M*u,R=M*e,g=M*c;return t[0]=1-(l+p),t[1]=f+g,t[2]=s-R,t[3]=0,t[4]=f-g,t[5]=1-(i+p),t[6]=m+d,t[7]=0,t[8]=s+R,t[9]=m-d,t[10]=1-(i+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}const S=n();function T(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function y(t,n){const a=n[0],r=n[1],o=n[2],h=n[3],M=a+a,u=r+r,e=o+o,c=a*M,i=r*M,f=r*u,s=o*M,l=o*u,m=o*e,p=h*M,d=h*u,R=h*e;return t[0]=1-f-m,t[1]=i+R,t[2]=s-d,t[3]=0,t[4]=i-R,t[5]=1-c-m,t[6]=l+p,t[7]=0,t[8]=s+d,t[9]=l-p,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function b(t,n,a,r,o,h,M){const u=1/(a-n),e=1/(o-r),c=1/(h-M);return t[0]=2*h*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*h*e,t[6]=0,t[7]=0,t[8]=(a+n)*u,t[9]=(o+r)*e,t[10]=(M+h)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=M*h*2*c,t[15]=0,t}function O(t,n,a,r,o,h,M){const u=1/(n-a),e=1/(r-o),c=1/(h-M);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*u,t[13]=(o+r)*e,t[14]=(M+h)*c,t[15]=1,t}function _(n,a,r,h){let M,u,e,c,i,f,s,l,m,p;const d=a[0],R=a[1],g=a[2],S=h[0],T=h[1],y=h[2],b=r[0],O=r[1],_=r[2];return Math.abs(d-b)<t&&Math.abs(R-O)<t&&Math.abs(g-_)<t?o(n):(s=d-b,l=R-O,m=g-_,p=1/Math.sqrt(s*s+l*l+m*m),s*=p,l*=p,m*=p,M=T*m-y*l,u=y*s-S*m,e=S*l-T*s,p=Math.sqrt(M*M+u*u+e*e),p?(p=1/p,M*=p,u*=p,e*=p):(M=0,u=0,e=0),c=l*e-m*u,i=m*M-s*e,f=s*u-l*M,p=Math.sqrt(c*c+i*i+f*f),p?(p=1/p,c*=p,i*=p,f*=p):(c=0,i=0,f=0),n[0]=M,n[1]=c,n[2]=s,n[3]=0,n[4]=u,n[5]=i,n[6]=l,n[7]=0,n[8]=e,n[9]=f,n[10]=m,n[11]=0,n[12]=-(M*d+u*R+e*g),n[13]=-(c*d+i*R+f*g),n[14]=-(s*d+l*R+m*g),n[15]=1,n)}function j(t,n,a,r){const o=n[0],h=n[1],M=n[2],u=r[0],e=r[1],c=r[2];let i=o-a[0],f=h-a[1],s=M-a[2],l=i*i+f*f+s*s;l>0&&(l=1/Math.sqrt(l),i*=l,f*=l,s*=l);let m=e*s-c*f,p=c*i-u*s,d=u*f-e*i;return l=m*m+p*p+d*d,l>0&&(l=1/Math.sqrt(l),m*=l,p*=l,d*=l),t[0]=m,t[1]=p,t[2]=d,t[3]=0,t[4]=f*d-s*p,t[5]=s*m-i*d,t[6]=i*p-f*m,t[7]=0,t[8]=i,t[9]=f,t[10]=s,t[11]=0,t[12]=o,t[13]=h,t[14]=M,t[15]=1,t}function v(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}function A(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function q(n,a){if(n===a)return!0;const r=n[0],o=n[1],h=n[2],M=n[3],u=n[4],e=n[5],c=n[6],i=n[7],f=n[8],s=n[9],l=n[10],m=n[11],p=n[12],d=n[13],R=n[14],g=n[15],S=a[0],T=a[1],y=a[2],b=a[3],O=a[4],_=a[5],j=a[6],v=a[7],A=a[8],q=a[9],x=a[10],F=a[11],Q=a[12],X=a[13],Y=a[14],Z=a[15];return Math.abs(r-S)<=t*Math.max(1,Math.abs(r),Math.abs(S))&&Math.abs(o-T)<=t*Math.max(1,Math.abs(o),Math.abs(T))&&Math.abs(h-y)<=t*Math.max(1,Math.abs(h),Math.abs(y))&&Math.abs(M-b)<=t*Math.max(1,Math.abs(M),Math.abs(b))&&Math.abs(u-O)<=t*Math.max(1,Math.abs(u),Math.abs(O))&&Math.abs(e-_)<=t*Math.max(1,Math.abs(e),Math.abs(_))&&Math.abs(c-j)<=t*Math.max(1,Math.abs(c),Math.abs(j))&&Math.abs(i-v)<=t*Math.max(1,Math.abs(i),Math.abs(v))&&Math.abs(f-A)<=t*Math.max(1,Math.abs(f),Math.abs(A))&&Math.abs(s-q)<=t*Math.max(1,Math.abs(s),Math.abs(q))&&Math.abs(l-x)<=t*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(m-F)<=t*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(p-Q)<=t*Math.max(1,Math.abs(p),Math.abs(Q))&&Math.abs(d-X)<=t*Math.max(1,Math.abs(d),Math.abs(X))&&Math.abs(R-Y)<=t*Math.max(1,Math.abs(R),Math.abs(Y))&&Math.abs(g-Z)<=t*Math.max(1,Math.abs(g),Math.abs(Z))}function x(n){const a=t,r=n[0],o=n[1],h=n[2],M=n[4],u=n[5],e=n[6],c=n[8],i=n[9],f=n[10];return Math.abs(1-(r*r+M*M+c*c))<=a&&Math.abs(1-(o*o+u*u+i*i))<=a&&Math.abs(1-(h*h+e*e+f*f))<=a}Object.freeze({__proto__:null,copy:a,set:r,identity:o,transpose:h,invert:M,adjoint:function(t,n){const a=n[0],r=n[1],o=n[2],h=n[3],M=n[4],u=n[5],e=n[6],c=n[7],i=n[8],f=n[9],s=n[10],l=n[11],m=n[12],p=n[13],d=n[14],R=n[15];return t[0]=u*(s*R-l*d)-f*(e*R-c*d)+p*(e*l-c*s),t[1]=-(r*(s*R-l*d)-f*(o*R-h*d)+p*(o*l-h*s)),t[2]=r*(e*R-c*d)-u*(o*R-h*d)+p*(o*c-h*e),t[3]=-(r*(e*l-c*s)-u*(o*l-h*s)+f*(o*c-h*e)),t[4]=-(M*(s*R-l*d)-i*(e*R-c*d)+m*(e*l-c*s)),t[5]=a*(s*R-l*d)-i*(o*R-h*d)+m*(o*l-h*s),t[6]=-(a*(e*R-c*d)-M*(o*R-h*d)+m*(o*c-h*e)),t[7]=a*(e*l-c*s)-M*(o*l-h*s)+i*(o*c-h*e),t[8]=M*(f*R-l*p)-i*(u*R-c*p)+m*(u*l-c*f),t[9]=-(a*(f*R-l*p)-i*(r*R-h*p)+m*(r*l-h*f)),t[10]=a*(u*R-c*p)-M*(r*R-h*p)+m*(r*c-h*u),t[11]=-(a*(u*l-c*f)-M*(r*l-h*f)+i*(r*c-h*u)),t[12]=-(M*(f*d-s*p)-i*(u*d-e*p)+m*(u*s-e*f)),t[13]=a*(f*d-s*p)-i*(r*d-o*p)+m*(r*s-o*f),t[14]=-(a*(u*d-e*p)-M*(r*d-o*p)+m*(r*e-o*u)),t[15]=a*(u*s-e*f)-M*(r*s-o*f)+i*(r*e-o*u),t},determinant:function(t){const n=t[0],a=t[1],r=t[2],o=t[3],h=t[4],M=t[5],u=t[6],e=t[7],c=t[8],i=t[9],f=t[10],s=t[11],l=t[12],m=t[13],p=t[14],d=t[15];return(n*M-a*h)*(f*d-s*p)-(n*u-r*h)*(i*d-s*m)+(n*e-o*h)*(i*p-f*m)+(a*u-r*M)*(c*d-s*l)-(a*e-o*M)*(c*p-f*l)+(r*e-o*u)*(c*m-i*l)},multiply:u,translate:e,scale:c,rotate:i,rotateX:f,rotateY:s,rotateZ:l,fromTranslation:m,fromScaling:p,fromRotation:function(n,a,r){let o,h,M,u=r[0],e=r[1],c=r[2],i=Math.sqrt(u*u+e*e+c*c);return i<t?null:(i=1/i,u*=i,e*=i,c*=i,o=Math.sin(a),h=Math.cos(a),M=1-h,n[0]=u*u*M+h,n[1]=e*u*M+c*o,n[2]=c*u*M-e*o,n[3]=0,n[4]=u*e*M-c*o,n[5]=e*e*M+h,n[6]=c*e*M+u*o,n[7]=0,n[8]=u*c*M+e*o,n[9]=e*c*M-u*o,n[10]=c*c*M+h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)},fromXRotation:d,fromYRotation:function(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:R,fromRotationTranslation:g,fromQuat2:function(t,n){const a=S,r=-n[0],o=-n[1],h=-n[2],M=n[3],u=n[4],e=n[5],c=n[6],i=n[7],f=r*r+o*o+h*h+M*M;return f>0?(a[0]=2*(u*M+i*r+e*h-c*o)/f,a[1]=2*(e*M+i*o+c*r-u*h)/f,a[2]=2*(c*M+i*h+u*o-e*r)/f):(a[0]=2*(u*M+i*r+e*h-c*o),a[1]=2*(e*M+i*o+c*r-u*h),a[2]=2*(c*M+i*h+u*o-e*r)),g(t,n,a),t},getTranslation:T,getScaling:function(t,n){const a=n[0],r=n[1],o=n[2],h=n[4],M=n[5],u=n[6],e=n[8],c=n[9],i=n[10];return t[0]=Math.sqrt(a*a+r*r+o*o),t[1]=Math.sqrt(h*h+M*M+u*u),t[2]=Math.sqrt(e*e+c*c+i*i),t},getRotation:function(t,n){const a=n[0]+n[5]+n[10];let r=0;return a>0?(r=2*Math.sqrt(a+1),t[3]=.25*r,t[0]=(n[6]-n[9])/r,t[1]=(n[8]-n[2])/r,t[2]=(n[1]-n[4])/r):n[0]>n[5]&&n[0]>n[10]?(r=2*Math.sqrt(1+n[0]-n[5]-n[10]),t[3]=(n[6]-n[9])/r,t[0]=.25*r,t[1]=(n[1]+n[4])/r,t[2]=(n[8]+n[2])/r):n[5]>n[10]?(r=2*Math.sqrt(1+n[5]-n[0]-n[10]),t[3]=(n[8]-n[2])/r,t[0]=(n[1]+n[4])/r,t[1]=.25*r,t[2]=(n[6]+n[9])/r):(r=2*Math.sqrt(1+n[10]-n[0]-n[5]),t[3]=(n[1]-n[4])/r,t[0]=(n[8]+n[2])/r,t[1]=(n[6]+n[9])/r,t[2]=.25*r),t},fromRotationTranslationScale:function(t,n,a,r){const o=n[0],h=n[1],M=n[2],u=n[3],e=o+o,c=h+h,i=M+M,f=o*e,s=o*c,l=o*i,m=h*c,p=h*i,d=M*i,R=u*e,g=u*c,S=u*i,T=r[0],y=r[1],b=r[2];return t[0]=(1-(m+d))*T,t[1]=(s+S)*T,t[2]=(l-g)*T,t[3]=0,t[4]=(s-S)*y,t[5]=(1-(f+d))*y,t[6]=(p+R)*y,t[7]=0,t[8]=(l+g)*b,t[9]=(p-R)*b,t[10]=(1-(f+m))*b,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,n,a,r,o){const h=n[0],M=n[1],u=n[2],e=n[3],c=h+h,i=M+M,f=u+u,s=h*c,l=h*i,m=h*f,p=M*i,d=M*f,R=u*f,g=e*c,S=e*i,T=e*f,y=r[0],b=r[1],O=r[2],_=o[0],j=o[1],v=o[2],A=(1-(p+R))*y,q=(l+T)*y,x=(m-S)*y,F=(l-T)*b,Q=(1-(s+R))*b,X=(d+g)*b,Y=(m+S)*O,Z=(d-g)*O,k=(1-(s+p))*O;return t[0]=A,t[1]=q,t[2]=x,t[3]=0,t[4]=F,t[5]=Q,t[6]=X,t[7]=0,t[8]=Y,t[9]=Z,t[10]=k,t[11]=0,t[12]=a[0]+_-(A*_+F*j+Y*v),t[13]=a[1]+j-(q*_+Q*j+Z*v),t[14]=a[2]+v-(x*_+X*j+k*v),t[15]=1,t},fromQuat:y,frustum:b,perspective:function(t,n,a,r,o){const h=1/Math.tan(n/2);let M;return t[0]=h/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(M=1/(r-o),t[10]=(o+r)*M,t[14]=2*o*r*M):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,n,a,r){const o=Math.tan(n.upDegrees*Math.PI/180),h=Math.tan(n.downDegrees*Math.PI/180),M=Math.tan(n.leftDegrees*Math.PI/180),u=Math.tan(n.rightDegrees*Math.PI/180),e=2/(M+u),c=2/(o+h);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(M-u)*e*.5,t[9]=(o-h)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t},ortho:O,lookAt:_,targetTo:j,str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t},subtract:v,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t},exactEquals:A,equals:q,isOrthoNormal:x,mul:u,sub:v});export{b as A,A as B,q as C,O as E,_ as F,x as G,y as P,j as Q,R,f as b,e as c,u as e,i as f,d as g,M as h,c as i,T as j,s as l,l as m,a as n,h as o,p as q,o as r,r as s,m as x}