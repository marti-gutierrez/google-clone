(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const d=`<main class="flex flex-col justify-center items-center w-full h-full gap-8">
  <figure class="min-w-[160px] w-2/5 max-w-[272px] mt-12 md:mt-52">
    <img src="/GoogleLogo.png" alt="logo de Google" class="w-full" id="logo" />
  </figure>
  <div
    class="grid grid-cols-[40px_1fr_40px] place-items-center w-11/12 max-w-[582px] h-[46px]"
  >
    <span
      class="z-10 bg-loupe col-start-1 col-end-2 row-start-1 ml-3"
    ></span>
    <input
      type="text"
      class="col-span-full row-span-full border dark:border-dark-50 w-full h-full rounded-3xl px-12 bg-transparent focus:outline-none hover:shadow hover:shadow-dark-50 hover:border-none"
    />
    <span
      class="bg-microphone col-start-3 col-end-[-1] row-start-1 mr-3"
    ></span>
  </div>

  <div class="grid-rows-[36px] grid-cols-2 gap-4 hidden md:grid">
    <button>
      Busco con Google
    </button>
    <button>
      Voy a tener suerte
    </button>
  </div>
</main>

<footer class="absolute bottom-0 right-0 w-full bg-footer dark:bg-dark-300">
  <p class="p-4 border-b-2 dark:border-dark-200">M\xE9xico</p>
  <div class="w-full h-12 border-b-2 dark:border-dark-200"></div>
  <ol class="flex flex-wrap justify-between w-10/12 mx-auto h-full py-4">
    <ul class="flex gap-4 flex-wrap">
      <li class="text-[13px] col-span-2 justify-self-center">
        <button id="dark">Tema oscuro: Desactivado</button>
      </li>
      <li class="justify-self-start">
        <a href="#/">preferencias</a>
      </li>
      <li class="justify-self-end">
        <a href="#/">privacidad</a>
      </li>
      <li class="justify-self-start col-span-2">
        <a href="#/">Condiciones</a>
      </li>
    </ul>
    <ul class="flex gap-4 flex-wrap">
      <li><a href="#/">Sobre Google</a></li>
      <li><a href="#/">Publicidad</a></li>
      <li><a href="#/">Negocios</a></li>
      <li><a href="#/">C\xF3mo funciona la B\xFAsqueda</a></li>
    </ul>
  </ol>
</footer>
`,u=()=>{const t=()=>{document.documentElement.className?(document.documentElement.classList.remove("dark"),r.src="./GoogleLogo.png"):(document.documentElement.classList.add("dark"),r.src="./logo_light.png")},o=document.createElement("div");o.innerHTML=d;const r=o.querySelector("img#logo");return o.querySelector("#dark").addEventListener("click",t),o},f={home:u},i=document.getElementById("root"),c=t=>{switch(i.innerHTML="",t){case"#/":return i.append(f.home());case"#/images":return console.log("images");case"#/creating":return console.log("Lo siento aun no se crea la pagina");default:return console.log("Error 404!...")}},l=document.querySelector("#link");let g=window.matchMedia("(min-width: 540px");function m(t){t.matches?(l.innerText="gmail",l.href="#/gmail"):(l.innerText="todos",l.href="#/")}g.addEventListener("change",m);window.addEventListener("hashchange",()=>c(window.location.hash));c("#/");
