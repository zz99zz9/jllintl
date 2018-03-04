!function(e){if("undefined"!=typeof module&&module.exports)module.exports=e(this);else if("function"==typeof define&&define.amd){var t=this;define("i18n",function(){return e(t)})}else this.I18n=e(this)}(function(e){"use strict";var t=e&&e.I18n||{},r=Array.prototype.slice,i=function(e){return("0"+e.toString()).substr(-2)},a=function(e,t){return l("round",e,-t).toFixed(t)},n=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},s=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},l=function(e,t,r){return void 0===r||0==+r?Math[e](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!=0?NaN:(t=t.toString().split("e"),t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-r:-r))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+r:r))))},o={day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridian:["AM","PM"]},u={precision:3,separator:".",delimiter:",",strip_insignificant_zeros:!1},c={unit:"$",precision:2,format:"%u%n",sign_first:!0,delimiter:",",separator:"."},p={unit:"%",precision:3,format:"%n%u",separator:".",delimiter:""},h=[null,"kb","mb","gb","tb"],f={defaultLocale:"en",locale:"en",defaultSeparator:".",placeholder:/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,fallbacks:!1,translations:{},missingBehaviour:"message",missingTranslationPrefix:""};return t.reset=function(){this.defaultLocale=f.defaultLocale,this.locale=f.locale,this.defaultSeparator=f.defaultSeparator,this.placeholder=f.placeholder,this.fallbacks=f.fallbacks,this.translations=f.translations,this.missingBehaviour=f.missingBehaviour,this.missingTranslationPrefix=f.missingTranslationPrefix},t.initializeOptions=function(){void 0===this.defaultLocale&&null!==this.defaultLocale&&(this.defaultLocale=f.defaultLocale),void 0===this.locale&&null!==this.locale&&(this.locale=f.locale),void 0===this.defaultSeparator&&null!==this.defaultSeparator&&(this.defaultSeparator=f.defaultSeparator),void 0===this.placeholder&&null!==this.placeholder&&(this.placeholder=f.placeholder),void 0===this.fallbacks&&null!==this.fallbacks&&(this.fallbacks=f.fallbacks),void 0===this.translations&&null!==this.translations&&(this.translations=f.translations)},t.initializeOptions(),t.locales={},t.locales.get=function(e){var r=this[e]||this[t.locale]||this.default;return"function"==typeof r&&(r=r(e)),!1===s(r)&&(r=[r]),r},t.locales.default=function(e){var r,i=[],a=[];return e&&i.push(e),!e&&t.locale&&i.push(t.locale),t.fallbacks&&t.defaultLocale&&i.push(t.defaultLocale),i.forEach(function(e){r=e.split("-")[0],~a.indexOf(e)||a.push(e),t.fallbacks&&r&&r!==e&&!~a.indexOf(r)&&a.push(r)}),i.length||i.push("en"),a},t.pluralization={},t.pluralization.get=function(e){return this[e]||this[t.locale]||this.default},t.pluralization.default=function(e){switch(e){case 0:return["zero","other"];case 1:return["one"];default:return["other"]}},t.currentLocale=function(){return this.locale||this.defaultLocale},t.isSet=function(e){return void 0!==e&&null!==e},t.lookup=function(e,t){t=this.prepareOptions(t);var r,i,a,n=this.locales.get(t.locale).slice();n[0];for(e=this.getFullScope(e,t);n.length;)if(r=n.shift(),i=e.split(this.defaultSeparator),a=this.translations[r]){for(;i.length&&void 0!==(a=a[i.shift()])&&null!==a;);if(void 0!==a&&null!==a)return a}if(this.isSet(t.defaultValue))return t.defaultValue},t.meridian=function(){var e=this.lookup("time"),t=this.lookup("date");return e&&e.am&&e.pm?[e.am,e.pm]:t&&t.meridian?t.meridian:o.meridian},t.prepareOptions=function(){for(var e,t=r.call(arguments),i={};t.length;)if("object"==typeof(e=t.shift()))for(var a in e)e.hasOwnProperty(a)&&(this.isSet(i[a])||(i[a]=e[a]));return i},t.createTranslationOptions=function(e,t){var r=[{scope:e}];return this.isSet(t.defaults)&&(r=r.concat(t.defaults)),this.isSet(t.defaultValue)&&(r.push({message:t.defaultValue}),delete t.defaultValue),r},t.translate=function(e,t){t=this.prepareOptions(t);var r,i=this.createTranslationOptions(e,t);return i.some(function(e){if(this.isSet(e.scope)?r=this.lookup(e.scope,t):this.isSet(e.message)&&(r=e.message),void 0!==r&&null!==r)return!0},this)?("string"==typeof r?r=this.interpolate(r,t):n(r)&&this.isSet(t.count)&&(r=this.pluralize(t.count,r,t)),r):this.missingTranslation(e,t)},t.interpolate=function(e,t){t=this.prepareOptions(t);var r,i,a,n,s=e.match(this.placeholder);if(!s)return e;for(var i;s.length;)r=s.shift(),a=r.replace(this.placeholder,"$1"),i=this.isSet(t[a])?t[a].toString().replace(/\$/gm,"_#$#_"):a in t?this.nullPlaceholder(r,e,t):this.missingPlaceholder(r,e,t),n=new RegExp(r.replace(/\{/gm,"\\{").replace(/\}/gm,"\\}")),e=e.replace(n,i);return e.replace(/_#\$#_/g,"$")},t.pluralize=function(e,t,r){r=this.prepareOptions(r);var i,a,s,l,o;if(!(i=n(t)?t:this.lookup(t,r)))return this.missingTranslation(t,r);for(a=this.pluralization.get(r.locale),s=a(e);s.length;)if(l=s.shift(),this.isSet(i[l])){o=i[l];break}return r.count=String(e),this.interpolate(o,r)},t.missingTranslation=function(e,t){if("guess"==this.missingBehaviour){var r=e.split(".").slice(-1)[0];return(this.missingTranslationPrefix.length>0?this.missingTranslationPrefix:"")+r.replace("_"," ").replace(/([a-z])([A-Z])/g,function(e,t,r){return t+" "+r.toLowerCase()})}var i=this.getFullScope(e,t);return'[missing "'+[this.currentLocale(),i].join(this.defaultSeparator)+'" translation]'},t.missingPlaceholder=function(e,t,r){return"[missing "+e+" value]"},t.nullPlaceholder=function(){return t.missingPlaceholder.apply(t,arguments)},t.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),u);var r,i,n=e<0,s=a(Math.abs(e),t.precision).toString(),l=s.split("."),o=[],c=t.format||"%n",p=n?"-":"";for(e=l[0],r=l[1];e.length>0;)o.unshift(e.substr(Math.max(0,e.length-3),3)),e=e.substr(0,e.length-3);return i=o.join(t.delimiter),t.strip_insignificant_zeros&&r&&(r=r.replace(/0+$/,"")),t.precision>0&&r&&(i+=t.separator+r),c=t.sign_first?"%s"+c:c.replace("%n","%s%n"),i=c.replace("%u",t.unit).replace("%n",i).replace("%s",p)},t.toCurrency=function(e,t){return t=this.prepareOptions(t,this.lookup("number.currency.format"),this.lookup("number.format"),c),this.toNumber(e,t)},t.localize=function(e,t,r){switch(r||(r={}),e){case"currency":return this.toCurrency(t);case"number":return e=this.lookup("number.format"),this.toNumber(t,e);case"percentage":return this.toPercentage(t);default:var i;return i=e.match(/^(date|time)/)?this.toTime(e,t):t.toString(),this.interpolate(i,r)}},t.parseDate=function(e){var t,r,i;if("object"==typeof e)return e;if(t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)){for(var a=1;a<=6;a++)t[a]=parseInt(t[a],10)||0;t[2]-=1,i=t[7]?1e3*("0"+t[7]):null,r=t[8]?new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6],i)):new Date(t[1],t[2],t[3],t[4],t[5],t[6],i)}else"number"==typeof e?(r=new Date,r.setTime(e)):e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)?(r=new Date,r.setTime(Date.parse([RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$6,RegExp.$4,RegExp.$5].join(" ")))):(e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/),r=new Date,r.setTime(Date.parse(e)));return r},t.strftime=function(e,r){var a=this.lookup("date"),n=t.meridian();a||(a={}),a=this.prepareOptions(a,o);var s=e.getDay(),l=e.getDate(),u=e.getFullYear(),c=e.getMonth()+1,p=e.getHours(),h=p,f=p>11?1:0,d=e.getSeconds(),m=e.getMinutes(),g=e.getTimezoneOffset(),b=Math.floor(Math.abs(g/60)),y=Math.abs(g)-60*b,S=(g>0?"-":"+")+(b.toString().length<2?"0"+b:b)+(y.toString().length<2?"0"+y:y);return h>12?h-=12:0===h&&(h=12),r=r.replace("%a",a.abbr_day_names[s]),r=r.replace("%A",a.day_names[s]),r=r.replace("%b",a.abbr_month_names[c]),r=r.replace("%B",a.month_names[c]),r=r.replace("%d",i(l)),r=r.replace("%e",l),r=r.replace("%-d",l),r=r.replace("%H",i(p)),r=r.replace("%-H",p),r=r.replace("%I",i(h)),r=r.replace("%-I",h),r=r.replace("%m",i(c)),r=r.replace("%-m",c),r=r.replace("%M",i(m)),r=r.replace("%-M",m),r=r.replace("%p",n[f]),r=r.replace("%S",i(d)),r=r.replace("%-S",d),r=r.replace("%w",s),r=r.replace("%y",i(u)),r=r.replace("%-y",i(u).replace(/^0+/,"")),r=r.replace("%Y",u),r=r.replace("%z",S)},t.toTime=function(e,t){var r=this.parseDate(t),i=this.lookup(e);return r.toString().match(/invalid/i)?r.toString():i?this.strftime(r,i):r.toString()},t.toPercentage=function(e,t){return t=this.prepareOptions(t,this.lookup("number.percentage.format"),this.lookup("number.format"),p),this.toNumber(e,t)},t.toHumanSize=function(e,t){for(var r,i,a=e,n=0;a>=1024&&n<4;)a/=1024,n+=1;return 0===n?(r=this.t("number.human.storage_units.units.byte",{count:a}),i=0):(r=this.t("number.human.storage_units.units."+h[n]),i=a-Math.floor(a)==0?0:1),t=this.prepareOptions(t,{unit:r,precision:i,format:"%n%u",delimiter:""}),this.toNumber(a,t)},t.getFullScope=function(e,t){return t=this.prepareOptions(t),e.constructor===Array&&(e=e.join(this.defaultSeparator)),t.scope&&(e=[t.scope,e].join(this.defaultSeparator)),e},t.extend=function(e,t){var r,i={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r]);for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r]);return i},t.t=t.translate,t.l=t.localize,t.p=t.pluralize,t});
