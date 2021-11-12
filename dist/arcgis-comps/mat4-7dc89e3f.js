import { v as a, a4 as n$1 } from './Graphic-75d1efd2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function s(t,a,n,s,r,o,h,M,u,e,c,i,f,b,l,m,x){return t[0]=a,t[1]=n,t[2]=s,t[3]=r,t[4]=o,t[5]=h,t[6]=M,t[7]=u,t[8]=e,t[9]=c,t[10]=i,t[11]=f,t[12]=b,t[13]=l,t[14]=m,t[15]=x,t}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function o(t,a){if(t===a){const n=a[1],s=a[2],r=a[3],o=a[6],h=a[7],M=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=s,t[9]=o,t[11]=a[14],t[12]=r,t[13]=h,t[14]=M;}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t}function h(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],h=a[4],M=a[5],u=a[6],e=a[7],c=a[8],i=a[9],f=a[10],b=a[11],l=a[12],m=a[13],x=a[14],q=a[15],p=n*M-s*h,g=n*u-r*h,d=n*e-o*h,R=s*u-r*M,S=s*e-o*M,T=r*e-o*u,y=c*m-i*l,j=c*x-f*l,v=c*q-b*l,D=i*x-f*m,I=i*q-b*m,O=f*q-b*x;let P=p*O-g*I+d*D+R*v-S*j+T*y;return P?(P=1/P,t[0]=(M*O-u*I+e*D)*P,t[1]=(r*I-s*O-o*D)*P,t[2]=(m*T-x*S+q*R)*P,t[3]=(f*S-i*T-b*R)*P,t[4]=(u*v-h*O-e*j)*P,t[5]=(n*O-r*v+o*j)*P,t[6]=(x*d-l*T-q*g)*P,t[7]=(c*T-f*d+b*g)*P,t[8]=(h*I-M*v+e*y)*P,t[9]=(s*v-n*I-o*y)*P,t[10]=(l*S-m*d+q*p)*P,t[11]=(i*d-c*S-b*p)*P,t[12]=(M*j-h*D-u*y)*P,t[13]=(n*D-s*j+r*y)*P,t[14]=(m*g-l*R-x*p)*P,t[15]=(c*R-i*g+f*p)*P,t):null}function M(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],h=a[4],M=a[5],u=a[6],e=a[7],c=a[8],i=a[9],f=a[10],b=a[11],l=a[12],m=a[13],x=a[14],q=a[15];return t[0]=M*(f*q-b*x)-i*(u*q-e*x)+m*(u*b-e*f),t[1]=-(s*(f*q-b*x)-i*(r*q-o*x)+m*(r*b-o*f)),t[2]=s*(u*q-e*x)-M*(r*q-o*x)+m*(r*e-o*u),t[3]=-(s*(u*b-e*f)-M*(r*b-o*f)+i*(r*e-o*u)),t[4]=-(h*(f*q-b*x)-c*(u*q-e*x)+l*(u*b-e*f)),t[5]=n*(f*q-b*x)-c*(r*q-o*x)+l*(r*b-o*f),t[6]=-(n*(u*q-e*x)-h*(r*q-o*x)+l*(r*e-o*u)),t[7]=n*(u*b-e*f)-h*(r*b-o*f)+c*(r*e-o*u),t[8]=h*(i*q-b*m)-c*(M*q-e*m)+l*(M*b-e*i),t[9]=-(n*(i*q-b*m)-c*(s*q-o*m)+l*(s*b-o*i)),t[10]=n*(M*q-e*m)-h*(s*q-o*m)+l*(s*e-o*M),t[11]=-(n*(M*b-e*i)-h*(s*b-o*i)+c*(s*e-o*M)),t[12]=-(h*(i*x-f*m)-c*(M*x-u*m)+l*(M*f-u*i)),t[13]=n*(i*x-f*m)-c*(s*x-r*m)+l*(s*f-r*i),t[14]=-(n*(M*x-u*m)-h*(s*x-r*m)+l*(s*u-r*M)),t[15]=n*(M*f-u*i)-h*(s*f-r*i)+c*(s*u-r*M),t}function u(t){const a=t[0],n=t[1],s=t[2],r=t[3],o=t[4],h=t[5],M=t[6],u=t[7],e=t[8],c=t[9],i=t[10],f=t[11],b=t[12],l=t[13],m=t[14],x=t[15];return (a*h-n*o)*(i*x-f*m)-(a*M-s*o)*(c*x-f*l)+(a*u-r*o)*(c*m-i*l)+(n*M-s*h)*(e*x-f*b)-(n*u-r*h)*(e*m-i*b)+(s*u-r*M)*(e*l-c*b)}function e(t,a,n){const s=a[0],r=a[1],o=a[2],h=a[3],M=a[4],u=a[5],e=a[6],c=a[7],i=a[8],f=a[9],b=a[10],l=a[11],m=a[12],x=a[13],q=a[14],p=a[15];let g=n[0],d=n[1],R=n[2],S=n[3];return t[0]=g*s+d*M+R*i+S*m,t[1]=g*r+d*u+R*f+S*x,t[2]=g*o+d*e+R*b+S*q,t[3]=g*h+d*c+R*l+S*p,g=n[4],d=n[5],R=n[6],S=n[7],t[4]=g*s+d*M+R*i+S*m,t[5]=g*r+d*u+R*f+S*x,t[6]=g*o+d*e+R*b+S*q,t[7]=g*h+d*c+R*l+S*p,g=n[8],d=n[9],R=n[10],S=n[11],t[8]=g*s+d*M+R*i+S*m,t[9]=g*r+d*u+R*f+S*x,t[10]=g*o+d*e+R*b+S*q,t[11]=g*h+d*c+R*l+S*p,g=n[12],d=n[13],R=n[14],S=n[15],t[12]=g*s+d*M+R*i+S*m,t[13]=g*r+d*u+R*f+S*x,t[14]=g*o+d*e+R*b+S*q,t[15]=g*h+d*c+R*l+S*p,t}function c(t,a,n){const s=n[0],r=n[1],o=n[2];let h,M,u,e,c,i,f,b,l,m,x,q;return a===t?(t[12]=a[0]*s+a[4]*r+a[8]*o+a[12],t[13]=a[1]*s+a[5]*r+a[9]*o+a[13],t[14]=a[2]*s+a[6]*r+a[10]*o+a[14],t[15]=a[3]*s+a[7]*r+a[11]*o+a[15]):(h=a[0],M=a[1],u=a[2],e=a[3],c=a[4],i=a[5],f=a[6],b=a[7],l=a[8],m=a[9],x=a[10],q=a[11],t[0]=h,t[1]=M,t[2]=u,t[3]=e,t[4]=c,t[5]=i,t[6]=f,t[7]=b,t[8]=l,t[9]=m,t[10]=x,t[11]=q,t[12]=h*s+c*r+l*o+a[12],t[13]=M*s+i*r+m*o+a[13],t[14]=u*s+f*r+x*o+a[14],t[15]=e*s+b*r+q*o+a[15]),t}function i(t,a,n){const s=n[0],r=n[1],o=n[2];return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=a[3]*s,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*o,t[9]=a[9]*o,t[10]=a[10]*o,t[11]=a[11]*o,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function f(t,n,s,r){let o,h,M,u,e,c,i,f,b,l,m,x,q,p,g,d,R,S,T,y,j,v,D,I,O=r[0],P=r[1],A=r[2],_=Math.sqrt(O*O+P*P+A*A);return _<a?null:(_=1/_,O*=_,P*=_,A*=_,o=Math.sin(s),h=Math.cos(s),M=1-h,u=n[0],e=n[1],c=n[2],i=n[3],f=n[4],b=n[5],l=n[6],m=n[7],x=n[8],q=n[9],p=n[10],g=n[11],d=O*O*M+h,R=P*O*M+A*o,S=A*O*M-P*o,T=O*P*M-A*o,y=P*P*M+h,j=A*P*M+O*o,v=O*A*M+P*o,D=P*A*M-O*o,I=A*A*M+h,t[0]=u*d+f*R+x*S,t[1]=e*d+b*R+q*S,t[2]=c*d+l*R+p*S,t[3]=i*d+m*R+g*S,t[4]=u*T+f*y+x*j,t[5]=e*T+b*y+q*j,t[6]=c*T+l*y+p*j,t[7]=i*T+m*y+g*j,t[8]=u*v+f*D+x*I,t[9]=e*v+b*D+q*I,t[10]=c*v+l*D+p*I,t[11]=i*v+m*D+g*I,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function b(t,a,n){const s=Math.sin(n),r=Math.cos(n),o=a[4],h=a[5],M=a[6],u=a[7],e=a[8],c=a[9],i=a[10],f=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=o*r+e*s,t[5]=h*r+c*s,t[6]=M*r+i*s,t[7]=u*r+f*s,t[8]=e*r-o*s,t[9]=c*r-h*s,t[10]=i*r-M*s,t[11]=f*r-u*s,t}function l(t,a,n){const s=Math.sin(n),r=Math.cos(n),o=a[0],h=a[1],M=a[2],u=a[3],e=a[8],c=a[9],i=a[10],f=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=o*r-e*s,t[1]=h*r-c*s,t[2]=M*r-i*s,t[3]=u*r-f*s,t[8]=o*s+e*r,t[9]=h*s+c*r,t[10]=M*s+i*r,t[11]=u*s+f*r,t}function m(t,a,n){const s=Math.sin(n),r=Math.cos(n),o=a[0],h=a[1],M=a[2],u=a[3],e=a[4],c=a[5],i=a[6],f=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=o*r+e*s,t[1]=h*r+c*s,t[2]=M*r+i*s,t[3]=u*r+f*s,t[4]=e*r-o*s,t[5]=c*r-h*s,t[6]=i*r-M*s,t[7]=f*r-u*s,t}function x(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function q(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(t,n,s){let r,o,h,M=s[0],u=s[1],e=s[2],c=Math.sqrt(M*M+u*u+e*e);return c<a?null:(c=1/c,M*=c,u*=c,e*=c,r=Math.sin(n),o=Math.cos(n),h=1-o,t[0]=M*M*h+o,t[1]=u*M*h+e*r,t[2]=e*M*h-u*r,t[3]=0,t[4]=M*u*h-e*r,t[5]=u*u*h+o,t[6]=e*u*h+M*r,t[7]=0,t[8]=M*e*h+u*r,t[9]=u*e*h-M*r,t[10]=e*e*h+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function g(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function S(t,a,n){const s=a[0],r=a[1],o=a[2],h=a[3],M=s+s,u=r+r,e=o+o,c=s*M,i=s*u,f=s*e,b=r*u,l=r*e,m=o*e,x=h*M,q=h*u,p=h*e;return t[0]=1-(b+m),t[1]=i+p,t[2]=f-q,t[3]=0,t[4]=i-p,t[5]=1-(c+m),t[6]=l+x,t[7]=0,t[8]=f+q,t[9]=l-x,t[10]=1-(c+b),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function T(t,a){const n=y,s=-a[0],r=-a[1],o=-a[2],h=a[3],M=a[4],u=a[5],e=a[6],c=a[7],i=s*s+r*r+o*o+h*h;return i>0?(n[0]=2*(M*h+c*s+u*o-e*r)/i,n[1]=2*(u*h+c*r+e*s-M*o)/i,n[2]=2*(e*h+c*o+M*r-u*s)/i):(n[0]=2*(M*h+c*s+u*o-e*r),n[1]=2*(u*h+c*r+e*s-M*o),n[2]=2*(e*h+c*o+M*r-u*s)),S(t,a,n),t}const y=n$1();function j(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function v(t,a){const n=a[0],s=a[1],r=a[2],o=a[4],h=a[5],M=a[6],u=a[8],e=a[9],c=a[10];return t[0]=Math.sqrt(n*n+s*s+r*r),t[1]=Math.sqrt(o*o+h*h+M*M),t[2]=Math.sqrt(u*u+e*e+c*c),t}function D(t,a){const n=a[0]+a[5]+a[10];let s=0;return n>0?(s=2*Math.sqrt(n+1),t[3]=.25*s,t[0]=(a[6]-a[9])/s,t[1]=(a[8]-a[2])/s,t[2]=(a[1]-a[4])/s):a[0]>a[5]&&a[0]>a[10]?(s=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/s,t[0]=.25*s,t[1]=(a[1]+a[4])/s,t[2]=(a[8]+a[2])/s):a[5]>a[10]?(s=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/s,t[0]=(a[1]+a[4])/s,t[1]=.25*s,t[2]=(a[6]+a[9])/s):(s=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/s,t[0]=(a[8]+a[2])/s,t[1]=(a[6]+a[9])/s,t[2]=.25*s),t}function I(t,a,n,s){const r=a[0],o=a[1],h=a[2],M=a[3],u=r+r,e=o+o,c=h+h,i=r*u,f=r*e,b=r*c,l=o*e,m=o*c,x=h*c,q=M*u,p=M*e,g=M*c,d=s[0],R=s[1],S=s[2];return t[0]=(1-(l+x))*d,t[1]=(f+g)*d,t[2]=(b-p)*d,t[3]=0,t[4]=(f-g)*R,t[5]=(1-(i+x))*R,t[6]=(m+q)*R,t[7]=0,t[8]=(b+p)*S,t[9]=(m-q)*S,t[10]=(1-(i+l))*S,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function O(t,a,n,s,r){const o=a[0],h=a[1],M=a[2],u=a[3],e=o+o,c=h+h,i=M+M,f=o*e,b=o*c,l=o*i,m=h*c,x=h*i,q=M*i,p=u*e,g=u*c,d=u*i,R=s[0],S=s[1],T=s[2],y=r[0],j=r[1],v=r[2],D=(1-(m+q))*R,I=(b+d)*R,O=(l-g)*R,P=(b-d)*S,A=(1-(f+q))*S,_=(x+p)*S,w=(l+g)*T,E=(x-p)*T,F=(1-(f+m))*T;return t[0]=D,t[1]=I,t[2]=O,t[3]=0,t[4]=P,t[5]=A,t[6]=_,t[7]=0,t[8]=w,t[9]=E,t[10]=F,t[11]=0,t[12]=n[0]+y-(D*y+P*j+w*v),t[13]=n[1]+j-(I*y+A*j+E*v),t[14]=n[2]+v-(O*y+_*j+F*v),t[15]=1,t}function P(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],h=n+n,M=s+s,u=r+r,e=n*h,c=s*h,i=s*M,f=r*h,b=r*M,l=r*u,m=o*h,x=o*M,q=o*u;return t[0]=1-i-l,t[1]=c+q,t[2]=f-x,t[3]=0,t[4]=c-q,t[5]=1-e-l,t[6]=b+m,t[7]=0,t[8]=f+x,t[9]=b-m,t[10]=1-e-i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A(t,a,n,s,r,o,h){const M=1/(n-a),u=1/(r-s),e=1/(o-h);return t[0]=2*o*M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*u,t[6]=0,t[7]=0,t[8]=(n+a)*M,t[9]=(r+s)*u,t[10]=(h+o)*e,t[11]=-1,t[12]=0,t[13]=0,t[14]=h*o*2*e,t[15]=0,t}function _(t,a,n,s,r){const o=1/Math.tan(a/2);let h;return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=r&&r!==1/0?(h=1/(s-r),t[10]=(r+s)*h,t[14]=2*r*s*h):(t[10]=-1,t[14]=-2*s),t}function w(t,a,n,s){const r=Math.tan(a.upDegrees*Math.PI/180),o=Math.tan(a.downDegrees*Math.PI/180),h=Math.tan(a.leftDegrees*Math.PI/180),M=Math.tan(a.rightDegrees*Math.PI/180),u=2/(h+M),e=2/(r+o);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=-(h-M)*u*.5,t[9]=(r-o)*e*.5,t[10]=s/(n-s),t[11]=-1,t[12]=0,t[13]=0,t[14]=s*n/(n-s),t[15]=0,t}function E(t,a,n,s,r,o,h){const M=1/(a-n),u=1/(s-r),e=1/(o-h);return t[0]=-2*M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*e,t[11]=0,t[12]=(a+n)*M,t[13]=(r+s)*u,t[14]=(h+o)*e,t[15]=1,t}function F(t,n,s,o){let h,M,u,e,c,i,f,b,l,m;const x=n[0],q=n[1],p=n[2],g=o[0],d=o[1],R=o[2],S=s[0],T=s[1],y=s[2];return Math.abs(x-S)<a&&Math.abs(q-T)<a&&Math.abs(p-y)<a?r(t):(f=x-S,b=q-T,l=p-y,m=1/Math.sqrt(f*f+b*b+l*l),f*=m,b*=m,l*=m,h=d*l-R*b,M=R*f-g*l,u=g*b-d*f,m=Math.sqrt(h*h+M*M+u*u),m?(m=1/m,h*=m,M*=m,u*=m):(h=0,M=0,u=0),e=b*u-l*M,c=l*h-f*u,i=f*M-b*h,m=Math.sqrt(e*e+c*c+i*i),m?(m=1/m,e*=m,c*=m,i*=m):(e=0,c=0,i=0),t[0]=h,t[1]=e,t[2]=f,t[3]=0,t[4]=M,t[5]=c,t[6]=b,t[7]=0,t[8]=u,t[9]=i,t[10]=l,t[11]=0,t[12]=-(h*x+M*q+u*p),t[13]=-(e*x+c*q+i*p),t[14]=-(f*x+b*q+l*p),t[15]=1,t)}function Q(t,a,n,s){const r=a[0],o=a[1],h=a[2],M=s[0],u=s[1],e=s[2];let c=r-n[0],i=o-n[1],f=h-n[2],b=c*c+i*i+f*f;b>0&&(b=1/Math.sqrt(b),c*=b,i*=b,f*=b);let l=u*f-e*i,m=e*c-M*f,x=M*i-u*c;return b=l*l+m*m+x*x,b>0&&(b=1/Math.sqrt(b),l*=b,m*=b,x*=b),t[0]=l,t[1]=m,t[2]=x,t[3]=0,t[4]=i*x-f*m,t[5]=f*l-c*x,t[6]=c*m-i*l,t[7]=0,t[8]=c,t[9]=i,t[10]=f,t[11]=0,t[12]=r,t[13]=o,t[14]=h,t[15]=1,t}function k(t){return "mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function z(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)}function N(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t[9]=a[9]+n[9],t[10]=a[10]+n[10],t[11]=a[11]+n[11],t[12]=a[12]+n[12],t[13]=a[13]+n[13],t[14]=a[14]+n[14],t[15]=a[15]+n[15],t}function X(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t[9]=a[9]-n[9],t[10]=a[10]-n[10],t[11]=a[11]-n[11],t[12]=a[12]-n[12],t[13]=a[13]-n[13],t[14]=a[14]-n[14],t[15]=a[15]-n[15],t}function Y(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12]*n,t[13]=a[13]*n,t[14]=a[14]*n,t[15]=a[15]*n,t}function Z(t,a,n,s){return t[0]=a[0]+n[0]*s,t[1]=a[1]+n[1]*s,t[2]=a[2]+n[2]*s,t[3]=a[3]+n[3]*s,t[4]=a[4]+n[4]*s,t[5]=a[5]+n[5]*s,t[6]=a[6]+n[6]*s,t[7]=a[7]+n[7]*s,t[8]=a[8]+n[8]*s,t[9]=a[9]+n[9]*s,t[10]=a[10]+n[10]*s,t[11]=a[11]+n[11]*s,t[12]=a[12]+n[12]*s,t[13]=a[13]+n[13]*s,t[14]=a[14]+n[14]*s,t[15]=a[15]+n[15]*s,t}function B(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function C(t,n){if(t===n)return !0;const s=t[0],r=t[1],o=t[2],h=t[3],M=t[4],u=t[5],e=t[6],c=t[7],i=t[8],f=t[9],b=t[10],l=t[11],m=t[12],x=t[13],q=t[14],p=t[15],g=n[0],d=n[1],R=n[2],S=n[3],T=n[4],y=n[5],j=n[6],v=n[7],D=n[8],I=n[9],O=n[10],P=n[11],A=n[12],_=n[13],w=n[14],E=n[15];return Math.abs(s-g)<=a*Math.max(1,Math.abs(s),Math.abs(g))&&Math.abs(r-d)<=a*Math.max(1,Math.abs(r),Math.abs(d))&&Math.abs(o-R)<=a*Math.max(1,Math.abs(o),Math.abs(R))&&Math.abs(h-S)<=a*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(M-T)<=a*Math.max(1,Math.abs(M),Math.abs(T))&&Math.abs(u-y)<=a*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(e-j)<=a*Math.max(1,Math.abs(e),Math.abs(j))&&Math.abs(c-v)<=a*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(i-D)<=a*Math.max(1,Math.abs(i),Math.abs(D))&&Math.abs(f-I)<=a*Math.max(1,Math.abs(f),Math.abs(I))&&Math.abs(b-O)<=a*Math.max(1,Math.abs(b),Math.abs(O))&&Math.abs(l-P)<=a*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(m-A)<=a*Math.max(1,Math.abs(m),Math.abs(A))&&Math.abs(x-_)<=a*Math.max(1,Math.abs(x),Math.abs(_))&&Math.abs(q-w)<=a*Math.max(1,Math.abs(q),Math.abs(w))&&Math.abs(p-E)<=a*Math.max(1,Math.abs(p),Math.abs(E))}function G(t){const n=a,s=t[0],r=t[1],o=t[2],h=t[4],M=t[5],u=t[6],e=t[8],c=t[9],i=t[10];return Math.abs(1-(s*s+h*h+e*e))<=n&&Math.abs(1-(r*r+M*M+c*c))<=n&&Math.abs(1-(o*o+u*u+i*i))<=n}const H=e,J=X,K=Object.freeze({__proto__:null,copy:n,set:s,identity:r,transpose:o,invert:h,adjoint:M,determinant:u,multiply:e,translate:c,scale:i,rotate:f,rotateX:b,rotateY:l,rotateZ:m,fromTranslation:x,fromScaling:q,fromRotation:p,fromXRotation:g,fromYRotation:d,fromZRotation:R,fromRotationTranslation:S,fromQuat2:T,getTranslation:j,getScaling:v,getRotation:D,fromRotationTranslationScale:I,fromRotationTranslationScaleOrigin:O,fromQuat:P,frustum:A,perspective:_,perspectiveFromFieldOfView:w,ortho:E,lookAt:F,targetTo:Q,str:k,frob:z,add:N,subtract:X,multiplyScalar:Y,multiplyScalarAndAdd:Z,exactEquals:B,equals:C,isOrthoNormal:G,mul:H,sub:J});

export { B, C, G, c, e, f, g, h, i, n, o, r, s };
