class t{constructor(t=0,r=0,n=0,i=0){this.x=t,this.y=r,this.width=n,this.height=i}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}const r=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],n=["آ","أ","إ","ا"],i=["ﻵ","ﻷ","ﻹ","ﻻ"],e=["ﻶ","ﻸ","ﻺ","ﻼ"],o=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],f=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],u=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],s=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],c=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],T=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],L=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],l=["ء","ف"],h=["غ","ي"],R=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],A=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],B=11,_=12,a=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],U=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],d=[[18,18,18,18,18,18,18,18,18,6,5,6,8,5,18,18,18,18,18,18,18,18,18,18,18,18,18,18,5,5,5,6,8,4,4,B,B,B,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,18,18,18,18,18,18,5,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,9,4,B,B,B,B,4,4,4,4,0,4,4,18,4,4,B,B,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1,_,1,_,_,1,_,_,1,_,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,B,B,7,9,7,4,4,_,_,_,_,_,_,_,_,_,_,_,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,3,3,3,3,3,3,B,3,3,7,7,7,_,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,_,_,_,_,_,_,_,3,4,_,_,_,_,_,_,7,7,_,_,4,_,_,_,_,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,_,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,_,_,_,_,_,_,_,_,_,_,_,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,_,_,_,_,_,_,_,_,_,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,18,18,18,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,B,B,B,B,B,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,18,18,18,18,18,4,4,4,4,4,18,18,18,18,18,18,2,0,4,4,2,2,2,2,2,2,10,10,4,4,4,0,2,2,2,2,2,2,2,2,2,2,10,10,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,_,1,1,1,1,1,1,1,1,1,1,10,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,_,_,_,_,_,_,_,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,B,4,4,10,10,4,4,4,4,4,B,B,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,18],[4,4,4,B,B,B,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,B,B,4,4,4,B,B,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];class N{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,r,o){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,r,n){z=[],Z=[];for(let i=0;i<n;i++)t[i]=i,r[i]=i,z[i]=i}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(r,o))return t;o=this.outputFormat;let s=t;const T=$,l=Y((r=this.inputFormat).charAt(1)),h=Y(o.charAt(1)),R=("I"===r.charAt(0)?"L":r.charAt(0))+l,A=("I"===o.charAt(0)?"L":o.charAt(0))+h,B=r.charAt(2)+o.charAt(2);T.defInFormat=R,T.defOutFormat=A,T.defSwap=B;const _=S(t,R,A,B,T);let a=!1;return"R"===o.charAt(1)?a=!0:"C"!==o.charAt(1)&&"D"!==o.charAt(1)||(a="rtl"===this.checkContextual(_)),this.sourceToTarget=z,this.targetToSource=function(t){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[t[n]]=n;return r}(this.sourceToTarget),W=this.targetToSource,s=r.charAt(3)===o.charAt(3)?_:"S"===o.charAt(3)?function(t,r,n){if(0===r.length)return"";void 0===t&&(t=!0),void 0===n&&(n=!0);const o=(r=String(r)).split("");let s=0,T=1,L=o.length;t||(s=o.length-1,T=-1,L=1);const l=function(t,r,n,o,s){let T=0;const L=[];let l=0;for(let h=r;h*n<o;h+=n)if(w(t[h])||x(t[h])){if("ل"===t[h]&&v(t,h+n,n,o)){t[h]=P(t[h+n],0===T?i:e),h+=n,k(t,h,n,o),s&&(L[l]=h,l++),T=0;continue}const r=t[h];t[h]=1===T?p(t,h+n,n,o)?D(t[h]):I(t[h],u):!0===p(t,h+n,n,o)?I(t[h],c):I(t[h],f),x(r)||(T=1),!0===y(r)&&(T=0)}else T=0;return L}(o,s,T,L,n);let h="";for(let r=0;r<o.length;r++)n&&F(l,l.length,r)>-1?(j(W,r,!t,-1),z.splice(r,1)):h+=o[r];return h}(a,_,!0):function(t,r,i){if(0===t.length)return"";void 0===i&&(i=!0),void 0===r&&(r=!0);let e="";const o=(t=String(t)).split("");for(let f=0;f<t.length;f++){let u=!1;if(o[f]>="ﹰ"&&o[f]<"\ufeff"){const s=t.charCodeAt(f);o[f]>="ﻵ"&&o[f]<="ﻼ"?(r?(f>0&&i&&" "===o[f-1]?e=e.substring(0,e.length-1)+"ل":(e+="ل",u=!0),e+=n[(s-65269)/2]):(e+=n[(s-65269)/2],e+="ل",f+1<t.length&&i&&" "===o[f+1]?f++:u=!0),u&&(j(W,f,!0,1),z.splice(f,0,z[f]))):e+=L[s-65136]}else e+=o[f]}return e}(_,a,!0),this.sourceToTarget=z,this.targetToSource=W,this.levels=Z,s}_inputFormatSetter(t){if(!K.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!K.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r}checkContextual(t){let r=V(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase()}catch(t){}"ltr"!==r&&"rtl"!==r&&(r="ltr")}return r}hasBidiChar(t){return Q.test(t)}}function S(t,r,n,i,e){const o=function(t,r,n){if(void 0===r.inFormat&&(r.inFormat=n.defInFormat),void 0===r.outFormat&&(r.outFormat=n.defOutFormat),void 0===r.swap&&(r.swap=n.defSwap),r.inFormat===r.outFormat)return r;const i=r.inFormat.substring(0,1),e=r.outFormat.substring(0,1);let o,f=r.inFormat.substring(1,4),u=r.outFormat.substring(1,4);return"C"===f.charAt(0)&&(o=V(t),f="ltr"===o||"rtl"===o?o.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=i+f),"C"===u.charAt(0)&&(o=V(t),"rtl"===o?u="RTL":"ltr"===o?(o=function(t){const r=t.split("");return r.reverse(),V(r.join(""))}(t),u=o.toUpperCase()):u="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=e+u),r}(t,{inFormat:r,outFormat:n,swap:i},e);if(o.inFormat===o.outFormat)return t;n=o.outFormat,i=o.swap;const f=(r=o.inFormat).substring(0,1),u=r.substring(1,4),s=n.substring(0,1),c=n.substring(1,4);if(e.inFormat=r,e.outFormat=n,e.swap=i,"L"===f&&"VLTR"===n){if("LTR"===u)return e.dir=H,E(t,e);if("RTL"===u)return e.dir=J,E(t,e)}if("V"===f&&"V"===s)return e.dir="RTL"===u?J:H,C(t,e);if("L"===f&&"VRTL"===n)return"LTR"===u?(e.dir=H,t=E(t,e)):(e.dir=J,t=E(t,e)),C(t);if("VLTR"===r&&"LLTR"===n)return e.dir=H,E(t,e);if("V"===f&&"L"===s&&u!==c)return t=C(t),"RTL"===u?S(t,"LLTR","VLTR",i,e):S(t,"LRTL","VRTL",i,e);if("VRTL"===r&&"LRTL"===n)return S(t,"LRTL","VRTL",i,e);if("L"===f&&"L"===s){const r=e.swap;return e.swap=r.substr(0,1)+"N","RTL"===u?(e.dir=J,t=E(t,e),e.swap="N"+r.substr(1,2),e.dir=H,t=E(t,e)):(e.dir=H,t=E(t,e),e.swap="N"+r.substr(1,2),t=S(t,"VLTR","LRTL",e.swap,e)),t}return t}function V(t){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function E(t,r){const n=t.split(""),i=[];return m(n,i,r),function(t,r,n){if(0!==n.hiLevel&&n.swap.substr(0,1)!==n.swap.substr(1,2))for(let n=0;n<t.length;n++)1===r[n]&&(t[n]=O(t[n]))}(n,i,r),b(2,n,i,r),b(1,n,i,r),Z=i,n.join("")}function m(t,r,n){const i=t.length,e=n.dir?A:R;let o=0,f=-1;const u=[],s=[];n.hiLevel=n.dir,n.lastArabic=!1,n.hasUbatAl=!1,n.hasUbatB=!1,n.hasUbatS=!1;for(let r=0;r<i;r++)u[r]=g(t[r]);for(let c=0;c<i;c++){const i=o,T=M(t,u,s,c,n);s[c]=T,o=e[i][T];const L=240&o;o&=15;const l=e[o][q];if(r[c]=l,L>0)if(16===L){for(let t=f;t<c;t++)r[t]=1;f=-1}else f=-1;if(e[o][G])-1===f&&(f=c);else if(f>-1){for(let t=f;t<c;t++)r[t]=l;f=-1}5===u[c]&&(r[c]=0),n.hiLevel|=l}n.hasUbatS&&function(t,r,n,i){for(let e=0;e<n;e++)if(6===t[e]){r[e]=i.dir;for(let n=e-1;n>=0&&8===t[n];n--)r[n]=i.dir}}(u,r,i,n)}function g(t){const r=t.charCodeAt(0),n=U[r>>8];return n<100?n:d[n-100][255&r]}function C(t,r){const n=t.split("");if(r){const t=[];m(n,t,r),Z=t}return n.reverse(),z.reverse(),n.join("")}function F(t,r,n){for(let i=0;i<r;i++)if(t[i]===n)return i;return-1}function w(t){for(let r=0;r<l.length;r++)if(t>=l[r]&&t<=h[r])return!0;return!1}function p(t,r,n,i){for(;r*n<i&&x(t[r]);)r+=n;return!!(r*n<i&&w(t[r]))}function v(t,r,i,e){for(;r*i<e&&x(t[r]);)r+=i;let o=" ";if(!(r*i<e))return!1;o=t[r];for(let t=0;t<n.length;t++)if(n[t]===o)return!0;return!1}function b(t,r,n,i){if(i.hiLevel<t)return;if(1===t&&i.dir===J&&!i.hasUbatB)return r.reverse(),void z.reverse();const e=r.length;let o,f,u,s,c,T=0;for(;T<e;){if(n[T]>=t){for(o=T+1;o<e&&n[o]>=t;)o++;for(f=T,u=o-1;f<u;f++,u--)s=r[f],r[f]=r[u],r[u]=s,c=z[f],z[f]=z[u],z[u]=c;T=o}T++}}function M(t,r,n,i,e){return{UBAT_L:()=>(e.lastArabic=!1,0),UBAT_R:()=>(e.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>e.lastArabic?3:2,UBAT_AL:()=>(e.lastArabic=!0,e.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let t,o;return i<1||i+1>=r.length||2!==(t=n[i-1])&&3!==t||2!==(o=r[i+1])&&3!==o?4:(e.lastArabic&&(o=3),o===t?o:4)},UBAT_ES:()=>2===(i>0?n[i-1]:5)&&i+1<r.length&&2===r[i+1]?2:4,UBAT_ET:()=>{if(i>0&&2===n[i-1])return 2;if(e.lastArabic)return 4;let t=i+1;const o=r.length;for(;t<o&&r[t]===B;)t++;return t<o&&2===r[t]?2:4},UBAT_NSM:()=>{if("VLTR"===e.inFormat){const n=r.length;let e=i+1;for(;e<n&&r[e]===_;)e++;if(e<n){const n=t[i].charCodeAt[0],o=r[e];if((n>=1425&&n<=2303||64286===n)&&(1===o||7===o))return 1}}return i<1||5===r[i-1]?4:n[i-1]},UBAT_B:()=>(e.lastArabic=!0,e.hasUbatB=!0,e.dir),UBAT_S:()=>(e.hasUbatS=!0,4),UBAT_LRE:()=>(e.lastArabic=!1,4),UBAT_RLE:()=>(e.lastArabic=!1,4),UBAT_LRO:()=>(e.lastArabic=!1,4),UBAT_RLO:()=>(e.lastArabic=!1,4),UBAT_PDF:()=>(e.lastArabic=!1,4),UBAT_BN:()=>4}[a[r[i]]]()}function O(t){let n,i=0,e=r.length-1;for(;i<=e;)if(n=Math.floor((i+e)/2),t<r[n][0])e=n-1;else{if(!(t>r[n][0]))return r[n][1];i=n+1}return t}function y(t){for(let r=0;r<T.length;r++)if(T[r]===t)return!0;return!1}function D(t){for(let r=0;r<o.length;r++)if(t===o[r])return s[r];return t}function I(t,r){for(let n=0;n<o.length;n++)if(t===o[n])return r[n];return t}function x(t){return t>="ً"&&t<="ٕ"}function Y(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function k(t,r,n,i){for(;r*n<i&&x(t[r]);)r+=n;return r*n<i&&(t[r]=" ",!0)}function P(t,r){for(let i=0;i<n.length;i++)if(t===n[i])return r[i];return t}function j(t,r,n,i){for(let e=0;e<t.length;e++)(t[e]>r||!n&&t[e]===r)&&(t[e]+=i)}let z=[],W=[],Z=[];const $={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},q=5,G=6,H=0,J=1,K=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,Q=/[\u0591-\u06ff\ufb1d-\ufefc]/;export{N as C,t}