function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var i=l("7Y9D8");function r(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}delayEl=document.forms[0].delay,stepEl=document.forms[0].step,amountEl=document.forms[0].amount,submitEl=document.querySelector("button[type=submit]"),submitEl.addEventListener("click",(function(t){t.preventDefault();const o=[];let n=delayEl.value;const l=stepEl.value,u=amountEl.value;for(let t=0;t<u;t+=1){let u=t+1;n=Number(n)+t*l,o.push(r(u,n).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})))}}));
//# sourceMappingURL=03-promises.173e1f7d.js.map
