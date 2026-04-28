import{a as c,S as u,i as d}from"./assets/vendor-D1AWmRWP.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const p=e=>c.get("https://pixabay.com/api/",{timeout:5e3,params:{key:"55620787-7366754b0519359a7474d5ac8",image_type:"photo",orientation:"horizontal",safesearch:!0,q:e}}).then(a=>a.data).catch(()=>{throw new Error("Something went wrong while fetching images")}),l={galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new u(".gallery a",{captionsData:"alt",captionDelay:250}),y=e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.previewURL}" alt="${e.name}" />
      </a>
      <div class="gallery-stats">
        <div class="gallery-stat">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${e.likes}</span>
        </div>
        <div class="gallery-stat">
          <span class="stat-label">Views</span>
          <span class="stat-value">${e.views}</span>
        </div>
        <div class="gallery-stat">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${e.comments}</span>
        </div>
        <div class="gallery-stat">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${e.downloads}</span>
        </div>
      </div>
    </li>
  `,f=e=>{l.galleryContainer.innerHTML=e.map(a=>y(a)).join(""),m.refresh()},g=()=>{l.galleryContainer.innerHTML=""},h=()=>{l.loader.classList.add("is-active")},v=()=>{l.loader.classList.remove("is-active")},w={form:document.querySelector(".form")},i=e=>{d.show({message:e,color:"red",position:"topRight",timeout:3e3})},L=()=>e=>{e.preventDefault();const{target:a}=e,o=a.elements["search-text"].value.trim();if(!o){a.elements["search-text"].value="",i("Please enter a search query");return}g(),h(),p(o).then(r=>{if(r.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}f(r.hits)}).catch(r=>{console.error(r),i("Something went wrong. Please try again later!")}).finally(()=>v())};w.form.addEventListener("submit",L());
//# sourceMappingURL=index.js.map
