!function(){var e={738:function(){window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll("input"),t=document.querySelector(".reg_form"),n=document.querySelector(".overlay"),r=document.querySelector(".auth-link"),o=document.createElement("a");o.style.color="blue",o.textContent="exit",o.classList.add("auth-link"),r.addEventListener("click",(()=>{n.style="display: flex"})),t.addEventListener("submit",(t=>{t.preventDefault();const a={name:e[1].value,lastname:e[2].value,email:e[3].value,password:e[4].value},l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};try{(async(e,t)=>await fetch("http://localhost:3000/users",t))(0,l).then((e=>{e.ok?(alert("You have successfully registered"),n.style="display: none",r.replaceWith(o),document.querySelector(".auth").append(o),o.addEventListener("click",(e=>{e.preventDefault(),o.replaceWith(r)}))):alert("SOMETHING WRONG!")}))}catch{alert("SOMETHING WRONG!")}finally{e.forEach((e=>{e.value=""}))}})),document.querySelector(".close").addEventListener("click",(()=>{n.style="display: none"}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(738)}()}();