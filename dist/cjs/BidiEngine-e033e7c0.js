'use strict';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1{constructor(t=0,h=0,i=0,s=0){this.x=t,this.y=h,this.width=i,this.height=s;}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const A=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],B=["آ","أ","إ","ا"],T=["ﻵ","ﻷ","ﻹ","ﻻ"],U=["ﻶ","ﻸ","ﻺ","ﻼ"],_=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],L=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],E$1=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],N=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],R=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],S=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],O$1=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],o=["ء","ف"],t=["غ","ي"],c=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],e=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],n=0,p=1,r=2,s=3,x$1=4,C$1=5,D$1=6,F=7,M$1=8,P$1=9,W$1=10,a=11,b=12,d=13,f=14,g=15,h=16,i=17,j$1=18,k$1=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],l=100,m=[l+0,n,n,n,n,l+1,l+2,l+3,p,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l+4,x$1,x$1,x$1,n,x$1,n,x$1,n,x$1,x$1,x$1,n,n,x$1,x$1,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,x$1,x$1,n,n,x$1,x$1,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,l+5,F,F,l+6,l+7],q$1=[[j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,D$1,C$1,D$1,M$1,C$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,C$1,C$1,C$1,D$1,M$1,x$1,x$1,a,a,a,x$1,x$1,x$1,x$1,x$1,W$1,P$1,W$1,P$1,P$1,r,r,r,r,r,r,r,r,r,r,P$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,j$1,j$1,j$1,j$1,j$1,j$1,C$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,j$1,P$1,x$1,a,a,a,a,x$1,x$1,x$1,x$1,n,x$1,x$1,j$1,x$1,x$1,a,a,r,r,x$1,n,x$1,x$1,x$1,r,n,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,n,n,n,n,n,n,n,n],[n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,n,n,n,n,n,n,n,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,p,b,p,b,b,p,b,b,p,b,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,x$1,x$1,x$1,x$1,x$1,p,p,p,p,p,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1],[s,s,s,s,x$1,x$1,x$1,x$1,F,a,a,F,P$1,F,x$1,x$1,b,b,b,b,b,b,b,b,b,b,b,F,x$1,x$1,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,s,s,s,s,s,s,s,s,s,s,a,s,s,F,F,F,b,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,b,b,b,b,b,b,b,s,x$1,b,b,b,b,b,b,F,F,b,b,x$1,b,b,b,b,F,F,r,r,r,r,r,r,r,r,r,r,F,F,F,F,F,F],[F,F,F,F,F,F,F,F,F,F,F,F,F,F,x$1,F,F,b,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,x$1,x$1,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,b,b,b,b,b,b,b,b,b,b,b,F,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,b,b,b,b,b,b,b,b,b,p,p,x$1,x$1,x$1,x$1,p,x$1,x$1,x$1,x$1,x$1],[M$1,M$1,M$1,M$1,M$1,M$1,M$1,M$1,M$1,M$1,M$1,j$1,j$1,j$1,n,p,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,M$1,C$1,d,f,g,h,i,P$1,a,a,a,a,a,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,P$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,M$1,j$1,j$1,j$1,j$1,j$1,x$1,x$1,x$1,x$1,x$1,j$1,j$1,j$1,j$1,j$1,j$1,r,n,x$1,x$1,r,r,r,r,r,r,W$1,W$1,x$1,x$1,x$1,n,r,r,r,r,r,r,r,r,r,r,W$1,W$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1],[n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,p,b,p,p,p,p,p,p,p,p,p,p,W$1,p,p,p,p,p,p,p,p,p,p,p,p,p,x$1,p,p,p,p,p,x$1,p,x$1,p,p,x$1,p,p,x$1,p,p,p,p,p,p,p,p,p,p,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,b,b,b,b,b,b,b,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,P$1,x$1,P$1,x$1,x$1,P$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,a,x$1,x$1,W$1,W$1,x$1,x$1,x$1,x$1,x$1,a,a,x$1,x$1,x$1,x$1,x$1,F,F,F,F,F,x$1,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,x$1,x$1,j$1],[x$1,x$1,x$1,a,a,a,x$1,x$1,x$1,x$1,x$1,W$1,P$1,W$1,P$1,P$1,r,r,r,r,r,r,r,r,r,r,P$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,x$1,x$1,x$1,n,n,n,n,n,n,x$1,x$1,n,n,n,n,n,n,x$1,x$1,n,n,n,n,n,n,x$1,x$1,n,n,n,x$1,x$1,x$1,a,a,x$1,x$1,x$1,a,a,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1,x$1]];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[];}bidiTransform(t,r,e){if(this.sourceToTarget=[],this.targetToSource=[],!t)return "";if(ot(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(r,e))return t;r=this.inputFormat,e=this.outputFormat;let n=t;const o=ct,i=rt(r.charAt(1)),u=rt(e.charAt(1)),s=("I"===r.charAt(0)?"L":r.charAt(0))+i,a=("I"===e.charAt(0)?"L":e.charAt(0))+u,f=r.charAt(2)+e.charAt(2);o.defInFormat=s,o.defOutFormat=a,o.defSwap=f;const c=V(t,s,a,f,o);let l=!1;return "R"===e.charAt(1)?l=!0:"C"!==e.charAt(1)&&"D"!==e.charAt(1)||(l="rtl"===this.checkContextual(c)),this.sourceToTarget=st,this.targetToSource=it(this.sourceToTarget),at=this.targetToSource,n=r.charAt(3)===e.charAt(3)?c:"S"===e.charAt(3)?I(l,c,!0):k(c,l,!0),this.sourceToTarget=st,this.targetToSource=at,this.levels=ft,n}_inputFormatSetter(t){if(!At.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t;}_outputFormatSetter(t){if(!At.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t;}checkParameters(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r}checkContextual(t){let r=x(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase();}catch(e){}"ltr"!==r&&"rtl"!==r&&(r="ltr");}return r}hasBidiChar(t){return gt.test(t)}}function V(t,r,e,n,o){const i=E(t,{inFormat:r,outFormat:e,swap:n},o);if(i.inFormat===i.outFormat)return t;r=i.inFormat,e=i.outFormat,n=i.swap;const u=r.substring(0,1),s=r.substring(1,4),a=e.substring(0,1),f=e.substring(1,4);if(o.inFormat=r,o.outFormat=e,o.swap=n,"L"===u&&"VLTR"===e){if("LTR"===s)return o.dir=Tt,y(t,o);if("RTL"===s)return o.dir=Lt,y(t,o)}if("V"===u&&"V"===a)return o.dir="RTL"===s?Lt:Tt,M(t,o);if("L"===u&&"VRTL"===e)return "LTR"===s?(o.dir=Tt,t=y(t,o)):(o.dir=Lt,t=y(t,o)),M(t);if("VLTR"===r&&"LLTR"===e)return o.dir=Tt,y(t,o);if("V"===u&&"L"===a&&s!==f)return t=M(t),"RTL"===s?V(t,"LLTR","VLTR",n,o):V(t,"LRTL","VRTL",n,o);if("VRTL"===r&&"LRTL"===e)return V(t,"LRTL","VRTL",n,o);if("L"===u&&"L"===a){const r=o.swap;return o.swap=r.substr(0,1)+"N","RTL"===s?(o.dir=Lt,t=y(t,o),o.swap="N"+r.substr(1,2),o.dir=Tt,t=y(t,o)):(o.dir=Tt,t=y(t,o),o.swap="N"+r.substr(1,2),t=V(t,"VLTR","LRTL",o.swap,o)),t}return t}function E(t,r,e){if(void 0===r.inFormat&&(r.inFormat=e.defInFormat),void 0===r.outFormat&&(r.outFormat=e.defOutFormat),void 0===r.swap&&(r.swap=e.defSwap),r.inFormat===r.outFormat)return r;const n=r.inFormat.substring(0,1),o=r.outFormat.substring(0,1);let i,u=r.inFormat.substring(1,4),s=r.outFormat.substring(1,4);return "C"===u.charAt(0)&&(i=x(t),u="ltr"===i||"rtl"===i?i.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=n+u),"C"===s.charAt(0)&&(i=x(t),"rtl"===i?s="RTL":"ltr"===i?(i=O(t),s=i.toUpperCase()):s="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=o+s),r}function I(t,r,e){if(0===r.length)return "";void 0===t&&(t=!0),void 0===e&&(e=!0);const n=(r=String(r)).split("");let o=0,i=1,u=n.length;t||(o=n.length-1,i=-1,u=1);const s=j(n,o,i,u,e);let a="";for(let f=0;f<n.length;f++)e&&W(s,s.length,f)>-1?(ut(at,f,!t,-1),st.splice(f,1)):a+=n[f];return a}function j(t,r,e,n,o){let i=0;const u=[];let s=0;for(let a=r;a*e<n;a+=e)if(Z(t[a])||tt(t[a])){if("ل"===t[a]&&q(t,a+e,e,n)){t[a]=nt(t[a+e],0===i?T:U),a+=e,et(t,a,e,n),o&&(u[s]=a,s++),i=0;continue}const r=t[a];1===i?t[a]=$(t,a+e,e,n)?Q(t[a]):X(t[a],E$1):!0===$(t,a+e,e,n)?t[a]=X(t[a],R):t[a]=X(t[a],L),tt(r)||(i=1),!0===K(r)&&(i=0);}else i=0;return u}function x(t){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function O(t){const r=t.split("");return r.reverse(),x(r.join(""))}function k(e,n,o){if(0===e.length)return "";void 0===o&&(o=!0),void 0===n&&(n=!0);let i="";const u=(e=String(e)).split("");for(let s=0;s<e.length;s++){let a=!1;if(u[s]>="ﹰ"&&u[s]<"\ufeff"){const f=e.charCodeAt(s);u[s]>="ﻵ"&&u[s]<="ﻼ"?(n?(s>0&&o&&" "===u[s-1]?i=i.substring(0,i.length-1)+"ل":(i+="ل",a=!0),i+=B[(f-65269)/2]):(i+=B[(f-65269)/2],i+="ل",s+1<e.length&&o&&" "===u[s+1]?s++:a=!0),a&&(ut(at,s,!0,1),st.splice(s,0,st[s]))):i+=O$1[f-65136];}else i+=u[s];}return i}function y(t,r){const e=t.split(""),n=[];return D(e,n,r),P(e,n,r),G(2,e,n,r),G(1,e,n,r),ft=n,e.join("")}function D(t,r,o){const i=t.length,u=o.dir?e:c;let a=0,f=-1;const c$1=[],l=[];o.hiLevel=o.dir,o.lastArabic=!1,o.hasUbatAl=!1,o.hasUbatB=!1,o.hasUbatS=!1;for(let e=0;e<i;e++)c$1[e]=z(t[e]);for(let e=0;e<i;e++){const n=a,i=H(t,c$1,l,e,o);l[e]=i,a=u[n][i];const h=240&a;a&=15;const T=u[a][lt];if(r[e]=T,h>0)if(16===h){for(let t=f;t<e;t++)r[t]=1;f=-1;}else f=-1;if(u[a][ht])-1===f&&(f=e);else if(f>-1){for(let t=f;t<e;t++)r[t]=T;f=-1;}c$1[e]===C$1&&(r[e]=0),o.hiLevel|=T;}o.hasUbatS&&Y(c$1,r,i,o);}function Y(t,r,e,n){for(let o=0;o<e;o++)if(t[o]===D$1){r[o]=n.dir;for(let e=o-1;e>=0&&t[e]===M$1;e--)r[e]=n.dir;}}function P(t,r,e){if(0!==e.hiLevel&&e.swap.substr(0,1)!==e.swap.substr(1,2))for(let n=0;n<t.length;n++)1===r[n]&&(t[n]=J(t[n]));}function z(t){const r=t.charCodeAt(0),e=m[r>>8];return e<l?e:q$1[e-l][255&r]}function M(t,r){const e=t.split("");if(r){const t=[];D(e,t,r),ft=t;}return e.reverse(),st.reverse(),e.join("")}function W(t,r,e){for(let n=0;n<r;n++)if(t[n]===e)return n;return -1}function Z(t$1){for(let r=0;r<o.length;r++)if(t$1>=o[r]&&t$1<=t[r])return !0;return !1}function $(t,r,e,n){for(;r*e<n&&tt(t[r]);)r+=e;return !!(r*e<n&&Z(t[r]))}function q(r,e,n,o){for(;e*n<o&&tt(r[e]);)e+=n;let i=" ";if(!(e*n<o))return !1;i=r[e];for(let u=0;u<B.length;u++)if(B[u]===i)return !0;return !1}function G(t,r,e,n){if(n.hiLevel<t)return;if(1===t&&n.dir===Lt&&!n.hasUbatB)return r.reverse(),void st.reverse();const o=r.length;let i,u,s,a,f,c=0;for(;c<o;){if(e[c]>=t){for(i=c+1;i<o&&e[i]>=t;)i++;for(u=c,s=i-1;u<s;u++,s--)a=r[u],r[u]=r[s],r[s]=a,f=st[u],st[u]=st[s],st[s]=f;c=i;}c++;}}function H(t,r$1,e,n$1,o){const i=r$1[n$1];return {UBAT_L:()=>(o.lastArabic=!1,n),UBAT_R:()=>(o.lastArabic=!1,p),UBAT_ON:()=>x$1,UBAT_AN:()=>s,UBAT_EN:()=>o.lastArabic?s:r,UBAT_AL:()=>(o.lastArabic=!0,o.hasUbatAl=!0,p),UBAT_WS:()=>x$1,UBAT_CS:()=>{let t,i;return n$1<1||n$1+1>=r$1.length||(t=e[n$1-1])!==r&&t!==s||(i=r$1[n$1+1])!==r&&i!==s?x$1:(o.lastArabic&&(i=s),i===t?i:x$1)},UBAT_ES:()=>(n$1>0?e[n$1-1]:C$1)===r&&n$1+1<r$1.length&&r$1[n$1+1]===r?r:x$1,UBAT_ET:()=>{if(n$1>0&&e[n$1-1]===r)return r;if(o.lastArabic)return x$1;let t=n$1+1;const i=r$1.length;for(;t<i&&r$1[t]===a;)t++;return t<i&&r$1[t]===r?r:x$1},UBAT_NSM:()=>{if("VLTR"===o.inFormat){const e=r$1.length;let o=n$1+1;for(;o<e&&r$1[o]===b;)o++;if(o<e){const e=t[n$1].charCodeAt[0],i=e>=1425&&e<=2303||64286===e,u=r$1[o];if(i&&(u===p||u===F))return p}}return n$1<1||r$1[n$1-1]===C$1?x$1:e[n$1-1]},UBAT_B:()=>(o.lastArabic=!0,o.hasUbatB=!0,o.dir),UBAT_S:()=>(o.hasUbatS=!0,x$1),UBAT_LRE:()=>(o.lastArabic=!1,x$1),UBAT_RLE:()=>(o.lastArabic=!1,x$1),UBAT_LRO:()=>(o.lastArabic=!1,x$1),UBAT_RLO:()=>(o.lastArabic=!1,x$1),UBAT_PDF:()=>(o.lastArabic=!1,x$1),UBAT_BN:()=>x$1}[k$1[i]]()}function J(t){let r,e=0,n=A.length-1;for(;e<=n;)if(r=Math.floor((e+n)/2),t<A[r][0])n=r-1;else {if(!(t>A[r][0]))return A[r][1];e=r+1;}return t}function K(t){for(let r=0;r<S.length;r++)if(S[r]===t)return !0;return !1}function Q(t){for(let r=0;r<_.length;r++)if(t===_[r])return N[r];return t}function X(t,r){for(let e=0;e<_.length;e++)if(t===_[e])return r[e];return t}function tt(t){return t>="ً"&&t<="ٕ"}function rt(t){return "L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function et(t,r,e,n){for(;r*e<n&&tt(t[r]);)r+=e;return r*e<n&&(t[r]=" ",!0)}function nt(r,e){for(let n=0;n<B.length;n++)if(r===B[n])return e[n];return r}function ot(t,r,e){st=[],ft=[];for(let n=0;n<e;n++)t[n]=n,r[n]=n,st[n]=n;}function it(t){const r=new Array(t.length);for(let e=0;e<t.length;e++)r[t[e]]=e;return r}function ut(t,r,e,n){for(let o=0;o<t.length;o++)(t[o]>r||!e&&t[o]===r)&&(t[o]+=n);}let st=[],at=[],ft=[];const ct={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},lt=5,ht=6,Tt=0,Lt=1,At=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,gt=/[\u0591-\u06ff\ufb1d-\ufefc]/;

exports.C = C;
exports.t = t$1;
