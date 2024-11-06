import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o){return o.map(({webformatURL:i,largeImageURL:t,tags:c,likes:e,views:r,comments:s,downloads:d})=>`
        <li class="item-card">
        <a href="${t}"><img class="item-img" src="${i}" alt="${c}"  width="360" /></a>
        <ul class="list-description">
        <li class="item-description">
        <h3 class="description-title">Likes</h3>
        <p class="description-count">${e}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Views</h3>
        <p class="description-count">${r}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Comments</h3>
        <p class="description-count">${s}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Downloads</h3>
        <p class="description-count">${d}</p>
        </li>
        </ul>
        </li>
        `).join("")}const h="46929640-6caf07f74187fad8fc62b9d85",f="https://pixabay.com/api";function g(o=""){const i=new URLSearchParams({key:h,image_type:"photo",orientation:"horizontal",safesearch:"true",q:o});return fetch(`${f}/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const n=document.querySelector(".search-form"),l=document.querySelector(".gallery-list"),y=document.querySelector(".search-input"),u=document.querySelector(".loading");let L=new p(".gallery-list li a",{captions:!0,captionsData:"alt",captionDelay:300});n.addEventListener("submit",S);function S(o){o.preventDefault();let i=y.value.trim();if(!i){a.error({maxWidth:500,position:"topRight",title:"Warning",color:"orange",message:"Enter a search word!"});return}u.classList.add("loader"),g(i).then(t=>{if(console.log(t),u.classList.remove("loader"),!t.hits.length){a.error({maxWidth:432,position:"topRight",title:"Error",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),n.reset(),l.innerHTML="";return}l.innerHTML=m(t.hits),L.refresh(),n.reset()}).catch(t=>{console.log(t)})}
//# sourceMappingURL=index.js.map
