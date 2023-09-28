(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function a(a){t(1,arguments);var n=Object.prototype.toString.call(a);return a instanceof Date||"object"===e(a)&&"[object Date]"===n?new Date(a.getTime()):"number"==typeof a||"[object Number]"===n?new Date(a):("string"!=typeof a&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function n(e){t(1,arguments);var n=a(e),r=n.getMonth();return r}function r(e){return t(1,arguments),a(e).getFullYear()}function o(e){t(1,arguments);var n=a(e),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function c(e){t(1,arguments);var n=a(e),r=n.getDate();return r}let d={};const l=["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dec."],s=new Date(2023,6,1);let u=l[n(s)],i=r(o(s))-2e3,b=c(o(s));const m=document.querySelector("#datesDisplay"),g=document.querySelector("#reset-btn");function f(t){return l.findIndex((e=>e===t))}function p(){m.innerHTML="",function(t,e){const a=document.querySelector("#datesDisplay");for(let r=0;r<t;r++){let t=document.createElement("tr");t.setAttribute("data-date",r+1),t.classList.add("visible");let o=document.createElement("th");o.textContent=`${r+1} ${e} ${i}`,t.appendChild(o);const c=4===(n=new Date(i+2e3,f(e),r+1).getDay())|2===n?["9:00am","9:00am","1:00pm","1:00pm"]:["9:00am","9:00am","2:00pm","2:00pm"];for(let e=0;e<4;e++){let a=document.createElement("td");a.textContent=c[e],a.setAttribute("data-value",String.fromCharCode(97+e)),d[`${r+1}`]&&!0===d[`${r+1}`][`${a.getAttribute("data-value")}`]?a.classList.add("marked"):a.classList.remove("marked"),t.appendChild(a)}a.appendChild(t)}var n}(b,u),document.querySelectorAll("td").forEach((t=>{t.addEventListener("click",(t=>{console.log(t.target.parentElement.getAttribute("data-date")),console.log(t.target.getAttribute("data-value"));let e=d[`${t.target.parentElement.getAttribute("data-date")}`][`${t.target.getAttribute("data-value")}`];d[`${t.target.parentElement.getAttribute("data-date")}`][`${t.target.getAttribute("data-value")}`]=!0!==e,y()}))})),document.querySelectorAll("th").forEach((t=>{t.addEventListener("click",(t=>{const e=d[t.target.parentElement.getAttribute("data-date")];let a=0;Object.keys(e).forEach((t=>{!0===e[t]?a+=1:a+=0})),4===a?Object.keys(e).forEach((t=>e[t]=!1)):Object.keys(e).forEach((t=>e[t]=!0)),y()}))}))}function y(){localStorage.setItem("appointments",JSON.stringify(d)),p()}d=null==localStorage.getItem("appointments")?{1:{a:!1,b:!1,c:!1,d:!1},2:{a:!1,b:!1,c:!1,d:!1},3:{a:!1,b:!1,c:!1,d:!1},4:{a:!1,b:!1,c:!1,d:!1},5:{a:!1,b:!1,c:!1,d:!1},6:{a:!1,b:!1,c:!1,d:!1},7:{a:!1,b:!1,c:!1,d:!1},8:{a:!1,b:!1,c:!1,d:!1},9:{a:!1,b:!1,c:!1,d:!1},10:{a:!1,b:!1,c:!1,d:!1},11:{a:!1,b:!1,c:!1,d:!1},12:{a:!1,b:!1,c:!1,d:!1},13:{a:!1,b:!1,c:!1,d:!1},14:{a:!1,b:!1,c:!1,d:!1},15:{a:!1,b:!1,c:!1,d:!1},16:{a:!1,b:!1,c:!1,d:!1},17:{a:!1,b:!1,c:!1,d:!1},18:{a:!1,b:!1,c:!1,d:!1},19:{a:!1,b:!1,c:!1,d:!1},20:{a:!1,b:!1,c:!1,d:!1},21:{a:!1,b:!1,c:!1,d:!1},22:{a:!1,b:!1,c:!1,d:!1},23:{a:!1,b:!1,c:!1,d:!1},24:{a:!1,b:!1,c:!1,d:!1},25:{a:!1,b:!1,c:!1,d:!1},26:{a:!1,b:!1,c:!1,d:!1},27:{a:!1,b:!1,c:!1,d:!1},28:{a:!1,b:!1,c:!1,d:!1},29:{a:!1,b:!1,c:!1,d:!1},30:{a:!1,b:!1,c:!1,d:!1},31:{a:!1,b:!1,c:!1,d:!1}}:JSON.parse(localStorage.getItem("appointments")),g.addEventListener("click",(function(){Object.keys(d).forEach((t=>{Object.keys(d[t]).forEach((e=>{d[t][e]=!1}))})),y()})),p();const h=document.querySelector("#previous-month"),S=document.querySelector("#next-month");function E(){const t=l[n(s)],e=r(o(s))-2e3,a=c(o(s));u=t,i=e,b=a,p(),function(){const t={month:u,year:i};localStorage.setItem("calendarState",JSON.stringify(t))}()}h.addEventListener("click",(()=>{s.setMonth(s.getMonth()-1),E()})),S.addEventListener("click",(()=>{s.setMonth(s.getMonth()+1),E()})),function(){const t=localStorage.getItem("calendarState");if(t){const e=JSON.parse(t);u=e.month,i=e.year,p()}else{const t=l[n(s)],e=r(o(s))-2e3;u=t,i=e,p()}}()})();