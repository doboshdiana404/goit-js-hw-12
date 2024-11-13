import{a as v,S as w,i as d}from"./assets/vendor-Qob_5Ba8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(i,o=1){return i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:b,downloads:S})=>`
        <li class="item-card">
        <a href="${a}"><img class="item-img" src="${s}" alt="${e}"  width="360" /></a>
        <ul class="list-description">
        <li class="item-description">
        <h3 class="description-title">Likes</h3>
        <p class="description-count">${t}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Views</h3>
        <p class="description-count">${n}</p>
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
        `).join("")}const q="46929640-6caf07f74187fad8fc62b9d85",M="https://pixabay.com/api/";async function g(i="",o=1,s){try{return(await v(`${M}`,{params:{key:q,image_type:"photo",orientation:"horizontal",safesearch:"true",q:i,page:o,per_page:s}})).data}catch(a){alert(a.message)}}const m=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),E=document.querySelector(".search-input"),y=document.querySelector(".loading"),u=document.querySelector(".load-end"),r=document.querySelector(".js-load-more");let p="",l=1;const h=15;let L=new w(".gallery-list li a",{captions:!0,captionsData:"alt",captionDelay:300});m.addEventListener("submit",H);r.addEventListener("click",O);async function H(i){i.preventDefault();const o=document.querySelector(".search-btn");if(r.style.display="none",c.innerHTML="",o.disabled=!0,p=E.value.trim(),!p){d.error({maxWidth:500,position:"topRight",title:"Warning",color:"orange",message:"Enter a search word!"}),c.innerHTML="",r.style.display="none";return}y.classList.add("loader");try{const s=await g(p,l=1,h);if(y.classList.remove("loader"),!s.hits.length){d.error({maxWidth:432,position:"topRight",title:"Error",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),m.reset(),c.innerHTML="",r.style.display="none";return}r.classList.add("load-more"),c.insertAdjacentHTML("afterbegin",f(s.hits,l)),L.refresh(),l<Math.ceil(s.totalHits/15)&&(r.style.display="inline-block"),m.reset()}catch{d.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:3e3,closeOnClick:!0})}finally{o.disabled=!1}}async function O(){r.style.display="none",u.classList.replace("visually-hidden","load-end-open"),u.classList.add("loader"),l++,r.disabled=!0;try{const i=await g(p,l,h);i.totalHits>h*l?r.style.display="inline-block":(r.classList.add("load-more-hidden"),r.style.display="none",d.show({position:"topRight",messageColor:"blue",message:"We're sorry, but you've reached the end of search results."})),c.insertAdjacentHTML("beforeend",f(i.hits,l)),L.refresh();const s=document.querySelector(".item-card").getBoundingClientRect().height;window.scrollBy({left:0,top:s*3-76,behavior:"smooth"})}catch{d.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:3e3,closeOnClick:!0})}finally{r.disabled=!1,u.classList.remove("loader"),u.classList.add("visually-hidden")}}
//# sourceMappingURL=index.js.map
