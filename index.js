import{a as q,S as v,i as m}from"./assets/vendor-Qob_5Ba8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(o,s=1){return o.map(({webformatURL:t,largeImageURL:l,tags:e,likes:r,views:c,comments:b,downloads:S})=>`
        <li class="item-card">
        <a href="${l}"><img class="item-img" src="${t}" alt="${e}"  width="360" /></a>
        <ul class="list-description">
        <li class="item-description">
        <h3 class="description-title">Likes</h3>
        <p class="description-count">${r}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Views</h3>
        <p class="description-count">${c}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Comments</h3>
        <p class="description-count">${b}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Downloads</h3>
        <p class="description-count">${S}</p>
        </li>
        </ul>
        </li>
        `).join("")}const w="46929640-6caf07f74187fad8fc62b9d85",M="https://pixabay.com/api/";async function g(o="",s=1,t){try{return(await q(`${M}`,{params:{key:w,image_type:"photo",orientation:"horizontal",safesearch:"true",q:o,page:s,per_page:t}})).data}catch(l){alert(l.message)}}const p=document.querySelector(".search-form"),n=document.querySelector(".gallery-list"),H=document.querySelector(".search-input"),h=document.querySelector(".loading"),d=document.querySelector(".load-end"),i=document.querySelector(".js-load-more");let u="",a=1;const y=15;let L=new v(".gallery-list li a",{captions:!0,captionsData:"alt",captionDelay:300});p.addEventListener("submit",$);i.addEventListener("click",E);async function $(o){o.preventDefault();const s=document.querySelector(".search-btn");if(i.classList.replace("load-more","load-more-hidden"),n.innerHTML="",s.disabled=!0,u=H.value.trim(),!u){m.error({maxWidth:500,position:"topRight",title:"Warning",color:"orange",message:"Enter a search word!"}),n.innerHTML="",i.classList.replace("load-more","load-more-hidden");return}h.classList.add("loader");try{const t=await g(u,a=1,y);if(console.log(t),h.classList.remove("loader"),!t.hits.length){m.error({maxWidth:432,position:"topRight",title:"Error",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),p.reset(),n.innerHTML="",i.classList.replace("load-more","load-more-hidden");return}n.insertAdjacentHTML("afterbegin",f(t.hits,a)),L.refresh(),a<Math.ceil(t.totalHits/15)&&i.classList.replace("load-more-hidden","load-more"),p.reset(),console.log(a)}catch(t){alert(t.message)}finally{s.disabled=!1}}async function E(){i.classList.replace("load-more","load-more-hidden"),d.classList.replace("visually-hidden","load-end-open"),d.classList.add("loader"),a++,i.disabled=!0;try{const o=await g(u,a,y);n.insertAdjacentHTML("beforeend",f(o.hits,a)),a>=o.totalHits/15&&i.classList.replace("load-more","load-more-hidden"),L.refresh();const t=document.querySelector(".item-card").getBoundingClientRect().height;window.scrollBy({left:0,top:t*3-76,behavior:"smooth"}),console.log(a)}catch(o){alert(o.message)}finally{i.disabled=!1,i.classList.replace("load-more-hidden","load-more"),d.classList.remove("loader"),d.classList.add("visually-hidden")}}
//# sourceMappingURL=index.js.map
