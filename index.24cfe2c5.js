function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequiref1a0;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequiref1a0=i),i.register("27Lyk",(function(n,t){var o,i;e(n.exports,"register",(()=>o),(e=>o=e)),e(n.exports,"resolve",(()=>i),(e=>i=e));var r={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},i=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("laSvo",(function(e,n){e.exports=import("./"+i("27Lyk").resolve("f7clq")).then((()=>i("f2WZf")))})),i("27Lyk").register(JSON.parse('{"ioUUD":"index.24cfe2c5.js","f7clq":"mapbox-gl.027771d5.js"}'));const r=i("laSvo");var a=function(e,n){r.then((t=>(t.accessToken="pk.eyJ1Ijoid2FuaXMiLCJhIjoiY2wyZGNtZGkwMDkwejNjbnN0MXJ0MjNvNSJ9.Udb0eEdEwQCVadG5PJcoIg",new t.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[e,n],zoom:9}))))};const l=document.getElementById("button"),c=document.getElementById("ipaddress"),d=document.querySelectorAll(".skeleton");async function s(){const e=document.getElementById("ip"),n=document.getElementById("location"),t=document.getElementById("timezone"),o=document.getElementById("isp");document.getElementById("map").innerHTML="",e.innerHTML="",n.innerHTML="",t.innerHTML="",o.innerHTML="",d.forEach((e=>{e.classList.remove("hide")}));const i=await async function(e){const n=`https://geo.ipify.org/api/v2/country,city?apiKey=at_4c3hq1BOKnOI0a6BCm0jaB0YpiNTj&ipAddress=${e}`,t=await fetch(n);return await t.json()}(c.value);if(422!==i.code){const r=i.ip,l=`${i.location.city}, ${i.location.region}, ${i.location.country} `,s=`UTC ${i.location.timezone}`,u=i.isp;c.value="",d.forEach((e=>{e.classList.add("hide")})),e.innerHTML=r,n.innerHTML=l,t.innerHTML=s,o.innerHTML=u,a(i.location.lng,i.location.lat)}else c.value=""}l.addEventListener("click",(e=>{e.preventDefault(),s()}));var u=s;window.addEventListener("load",u);
//# sourceMappingURL=index.24cfe2c5.js.map
