import{a as w,S as q,i as m}from"./assets/vendor-Qob_5Ba8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(s,o=1){return s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:l,comments:b,downloads:S})=>`
        <li class="item-card">
        <a href="${a}"><img class="item-img" src="${r}" alt="${e}"  width="360" /></a>
        <ul class="list-description">
        <li class="item-description">
        <h3 class="description-title">Likes</h3>
        <p class="description-count">${t}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Views</h3>
        <p class="description-count">${l}</p>
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
        `).join("")}const v="46929640-6caf07f74187fad8fc62b9d85",M="https://pixabay.com/api/";async function g(s="",o=1,r){try{return(await w(`${M}`,{params:{key:v,image_type:"photo",orientation:"horizontal",safesearch:"true",q:s,page:o,per_page:r}})).data}catch(a){alert(a.message)}}const h=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),H=document.querySelector(".search-input"),f=document.querySelector(".loading"),d=document.querySelector(".load-end"),i=document.querySelector(".js-load-more");let u="",n=1;const p=15;let L=new q(".gallery-list li a",{captions:!0,captionsData:"alt",captionDelay:300});h.addEventListener("submit",$);i.addEventListener("click",E);async function $(s){s.preventDefault();const o=document.querySelector(".search-btn");if(i.style.display="none",c.innerHTML="",o.disabled=!0,u=H.value.trim(),!u){m.error({maxWidth:500,position:"topRight",title:"Warning",color:"orange",message:"Enter a search word!"}),c.innerHTML="",i.style.display="none";return}f.classList.add("loader");try{const r=await g(u,n=1,p);if(f.classList.remove("loader"),!r.hits.length){m.error({maxWidth:432,position:"topRight",title:"Error",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),h.reset(),c.innerHTML="",i.style.display="none";return}i.classList.add("load-more"),c.insertAdjacentHTML("afterbegin",y(r.hits,n)),L.refresh(),n<Math.ceil(r.totalHits/15)&&(i.style.display="inline-block"),h.reset()}catch(r){alert(r.message)}finally{o.disabled=!1}}async function E(){i.style.display="none",d.classList.replace("visually-hidden","load-end-open"),d.classList.add("loader"),n++,i.disabled=!0;try{const s=await g(u,n,p);let o=p-s.hits.length;n*p<=s.totalHits+o?i.style.display="inline-block":(i.classList.add("load-more-hidden"),i.style.display="none",m.show({position:"topRight",messageColor:"blue",message:"The end of search results."})),c.insertAdjacentHTML("beforeend",y(s.hits,n)),L.refresh();const a=document.querySelector(".item-card").getBoundingClientRect().height;window.scrollBy({left:0,top:a*3-76,behavior:"smooth"})}catch(s){alert(s.message)}finally{i.disabled=!1,d.classList.remove("loader"),d.classList.add("visually-hidden")}}
//# sourceMappingURL=index.js.map
