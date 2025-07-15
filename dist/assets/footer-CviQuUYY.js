import{r as O}from"./helpers-9Lo3EvBV.js";import{a as J,g as S}from"./index-DVUMKYbu.js";const W="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjQ4YzUyYzFiMTkwMzgwZWRjMzg5Mzc4YjM3MjUzOSIsIm5iZiI6MTc1MDg0NTY5Ny4yODQ5OTk4LCJzdWIiOiI2ODViYzkwMWMyOTgxOGFjNmY4MTQ3ZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xqiTlgiTWIYgPFQQ8hEOgt4ODX8sayApXw2JpSf6uN4",Q=J.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:`Bearer ${W}`},params:{language:"ru-RU"}});function j(){const o=document.createElement("header");o.className="header";const c=document.createElement("div");c.className="container header-container";const s=document.createElement("div");s.className="logo-block",s.onclick=()=>O("/");const u=document.createElement("div");u.className="logo";const i=document.createElement("img");i.src="/public/logo.png",i.alt="Лого";const d=document.createElement("span");d.className="blue",d.textContent="Kino";const r=document.createElement("span");r.className="white",r.textContent="area",u.append(i,d,r);const f=document.createElement("div");f.className="social-icons";const v=document.createElement("img");v.src="/public/group.png",v.alt="Соцсети",f.appendChild(v),s.append(u,f);const E=document.createElement("nav");E.className="main-nav",["Афиша","Медиа","Фильмы","Актёры","Новости","Подборки","Категории"].forEach(e=>{const t=document.createElement("a");t.href="#",t.textContent=e,E.appendChild(t)});const h=document.createElement("div");h.className="right-side";const m=document.createElement("button");m.className="search-btn";const b=document.createElement("img");b.src="/public/search.png",b.alt="Поиск",m.appendChild(b);const C=S("userName");if(C){const e=document.createElement("a");e.className="user-link",e.textContent=C,e.href="/src/pages/profile/index.html",h.append(m,e)}else{const e=document.createElement("button");e.className="login-btn",e.textContent="Войти",e.onclick=()=>O("/signin"),h.append(m,e)}c.append(s,E,h),o.appendChild(c);const p=document.createElement("div");p.className="search-modal";const y=document.createElement("div");y.className="search-modal-content";const g=document.createElement("button");g.className="close-modal",g.textContent="×";const n=document.createElement("input");n.type="text",n.placeholder="Поиск...";const l=document.createElement("div");l.className="search-tabs",l.innerHTML=`
    <button data-type="movie" class="active">Фильмы</button>
    <button data-type="tv">Сериалы</button>
    <button data-type="person">Персоны</button>
    <div class="tab-underline"></div>
  `;const a=document.createElement("div");a.className="search-results",y.append(g,n,l,a),p.append(y),o.appendChild(p);const k=document.createElement("style");k.textContent=`
    .search-tabs {
      display: flex;
      position: relative;
      gap: 10px;
      margin-top: 10px;
    }
    .search-tabs button {
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      padding: 6px 12px;
      cursor: pointer;
    }
    .search-tabs button.active {
      color: #e7ff1e;
    }
    .tab-underline {
      position: absolute;
      bottom: 0;
      height: 2px;
      background: #e7ff1e;
      transition: all 0.3s ease;
    }
    .search-results {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 15px;
      max-height: 400px;
      overflow-y: auto;
      width: 100%;
    }
  `,document.head.appendChild(k);let T="movie";const w=l.querySelectorAll("button"),L=l.querySelector(".tab-underline");function x(){const e=l.querySelector(".active");L.style.width=e.offsetWidth+"px",L.style.left=e.offsetLeft+"px"}x(),window.addEventListener("resize",x),w.forEach(e=>{e.onclick=()=>{w.forEach(t=>t.classList.remove("active")),e.classList.add("active"),T=e.dataset.type,x(),n.value.trim()&&N(n.value.trim())}}),m.onclick=()=>{p.classList.add("active"),n.value="",a.innerHTML="",n.focus()},g.onclick=()=>p.classList.remove("active"),n.onkeyup=e=>{const t=n.value.trim();if(!t){a.innerHTML="";return}if(e.key==="Enter"){N(t);return}a.innerHTML="<p style='color:white'>Загрузка...</p>",clearTimeout(n._timer),n._timer=setTimeout(()=>N(t),400)};async function N(e){a.innerHTML="<p style='color:white'>Загрузка...</p>";try{const t=await Q.get(`/search/${T}`,{params:{query:e}});Y(t.data.results)}catch(t){console.error(t),a.innerHTML="<p style='color:white'>Ошибка при поиске.</p>"}}function Y(e){if(a.innerHTML="",!e.length){a.innerHTML="<p style='color:white'>Ничего не найдено.</p>";return}e.forEach(t=>{const M=document.createElement("div");M.className="result-item";const I=document.createElement("img");I.src=`https://image.tmdb.org/t/p/w92${t.poster_path||t.profile_path}`;const z=document.createElement("div"),H=t.title||t.name,B=t.release_date||t.first_air_date||"";z.innerHTML=`<strong>${H}</strong><p style="font-size:12px;color:gray">${B}</p>`,M.append(I,z),a.append(M)})}return o}function q(){const o=document.createElement("footer");o.className="footer";const c=document.createElement("div");c.className="container";const s=document.createElement("nav");s.className="footer-nav",["Главная","Новости","Трейлеры","Контакты","Политика конфиденциальности"].forEach(d=>{const r=document.createElement("a");r.href="#",r.textContent=d,s.appendChild(r)});const i=document.createElement("p");return i.textContent="Все права защищены © KinoArea",c.appendChild(s),c.appendChild(i),o.appendChild(c),o}export{Q as a,q as f,j as h};
