import{c as e,a,b as i}from"./p-a184d75f.js";import{a as _}from"./p-608e235f.js";var m=e((function(){!function(e){
//! moment.js locale configuration
function a(e,a,i){var _=" ";return(e%100>=20||e>=100&&e%100==0)&&(_=" de "),e+_+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",ww:"săptămâni",MM:"luni",yy:"ani"}[i]}e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:a,m:"un minut",mm:a,h:"o oră",hh:a,d:"o zi",dd:a,w:"o săptămână",ww:a,M:"o lună",MM:a,y:"un an",yy:a},week:{dow:1,doy:7}})}("function"==typeof a?_:i.moment)}));const n=Object.freeze(Object.assign(Object.create(null),m,{default:m}));export{n as r}