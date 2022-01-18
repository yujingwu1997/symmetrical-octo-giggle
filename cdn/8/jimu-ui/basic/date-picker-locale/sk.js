System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function a(e,t,a){var n=function(e,t){return 1===t?e.one:t>=2&&t<=4?e.twoFour:e.other}(e,t);return(n[a]||n).replace("{{count}}",t)}function n(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="približne"),t.length>0?t+" ":""}function r(e){var t="";return"lessThan"===e&&(t="menej než"),"over"===e&&(t="viac než"),t.length>0?t+" ":""}e.r(t),e.d(t,{default:()=>w});var o={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sekúnd",past:"{{count}} sekundami",future:"{{count}} sekúnd"}},halfAMinute:{other:{regular:"pol minúty",past:"pol minútou",future:"pol minúty"}},xMinutes:{one:{regular:"minúta",past:"minútou",future:"minútu"},twoFour:{regular:"{{count}} minúty",past:"{{count}} minútami",future:"{{count}} minúty"},other:{regular:"{{count}} minút",past:"{{count}} minútami",future:"{{count}} minút"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodín",past:"{{count}} hodinami",future:"{{count}} hodín"}},xDays:{one:{regular:"deň",past:"dňom",future:"deň"},twoFour:{regular:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{regular:"{{count}} dní",past:"{{count}} dňami",future:"{{count}} dní"}},xWeeks:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};function i(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var u={date:i({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},defaultWidth:"full"}),time:i({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};function s(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function d(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(e,t){l(1,arguments);var a=t||{},n=a.locale,r=n&&n.options&&n.options.weekStartsOn,o=null==r?0:s(r),i=null==a.weekStartsOn?o:s(a.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=d(e),c=u.getUTCDay(),m=(c<i?7:0)+c-i;return u.setUTCDate(u.getUTCDate()-m),u.setUTCHours(0,0,0,0),u}function m(e,t,a){l(2,arguments);var n=c(e,a),r=c(t,a);return n.getTime()===r.getTime()}var p=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function f(e){return 4===e?"'vo' eeee 'o' p":"'v "+p[e]+" o' p"}var v,h={lastWeek:function(e,t,a){var n=e.getUTCDay();return m(e,t,a)?f(n):function(e){var t=p[e];switch(e){case 0:case 3:case 6:return"'minulú "+t+" o' p";default:return"'minulý' eeee 'o' p"}}(n)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return m(e,t,a)?f(n):function(e){var t=p[e];switch(e){case 0:case 4:case 6:return"'budúcu' "+t+" 'o' p";default:return"'budúci' eeee 'o' p"}}(n)},other:"P"};function g(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function b(e){return function(t,a){var n=String(t),r=a||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=n.match(i);if(!u)return null;var s,l=u[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(l))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(l))return a}(d),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(l.length)}}}const w={code:"sk",formatDistance:function(e,t,i){i=i||{};var u,s=function(e){return["lessThan","about","over","almost"].filter((function(t){return!!e.match(new RegExp("^"+t))}))[0]}(e)||"",l=(u=e.substring(s.length)).charAt(0).toLowerCase()+u.slice(1),d=o[l];return i.addSuffix?i.comparison>0?n(s)+"o "+r(s)+a(d,t,"future"):n(s)+"pred "+r(s)+a(d,t,"past"):n(s)+r(s)+a(d,t,"regular")},formatLong:u,formatRelative:function(e,t,a,n){var r=h[e];return"function"==typeof r?r(t,a,n):r},localize:{ordinalNumber:function(e,t){return Number(e)+"."},era:g({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]}}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:g({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:g({values:{narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(v={matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),n=t||{},r=a.match(v.matchPattern);if(!r)return null;var o=r[0],i=a.match(v.parsePattern);if(!i)return null;var u=v.valueCallback?v.valueCallback(i[0]):i[0];return{value:u=n.valueCallback?n.valueCallback(u):u,rest:a.slice(o.length)}}),era:b({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [šs]tvr[ťt]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[áa]j/i,/^j[úu]n/i,/^j[úu]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[npusšp]/i,short:/^(ne|po|ut|st|št|pi|so)/i,abbreviated:/^(ne|po|ut|st|št|pi|so)/i,wide:/^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^š/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(št|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[áa]no/i,afternoon:/^pop/i,evening:/^ve[čc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));