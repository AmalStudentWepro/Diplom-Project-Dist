import{h as y,f,a as b}from"./footer-CviQuUYY.js";import"./helpers-9Lo3EvBV.js";import"./index-DVUMKYbu.js";const v=document.querySelector("#app5");v.prepend(y());document.body.append(f());const h=new URLSearchParams(location.search).get("id");b.get(`/movie/${h}`,{params:{append_to_response:"credits,videos,images"}}).then(a=>{var c,l,d,m,g;const e=a.data;document.title=e.title,document.querySelector(".poster img").src=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"/public/placeholder.jpg",document.querySelector(".info h1").textContent=e.title,document.querySelector(".info h2").textContent=e.original_title,document.querySelector(".desc").textContent=e.overview,document.querySelectorAll(".rating .value").forEach(t=>{var n;return t.textContent=((n=e.vote_average)==null?void 0:n.toFixed(1))||"-"}),document.querySelector(".meta-left").innerHTML=`
    <p><b>Год:</b> <span class="greens">${((c=e.release_date)==null?void 0:c.slice(0,4))||"-"}</span></p>
    <p><b>Страна:</b> <span class="greens">${e.production_countries.map(t=>t.name).join(", ")||"-"}</span></p>
    <p><b>Слоган:</b> <span class="greens">${e.tagline||"-"}</span></p>
    <p><b>Жанр:</b> <span class="greens">${e.genres.map(t=>t.name).join(", ")||"-"}</span></p>
    <p><b>Бюджет:</b> <span class="greens">$${((l=e.budget)==null?void 0:l.toLocaleString())||"—"}</span></p>
    <p><b>Сборы:</b> <span class="greens">$${((d=e.revenue)==null?void 0:d.toLocaleString())||"—"}</span></p>
    <p><b>Время:</b> <span class="greens">${e.runtime?e.runtime+" мин.":"-"}</span></p>
    <p><b>Возраст:</b> <span class="greens">${e.adult?"18+":"16+"}</span></p>
  `,document.querySelector(".meta-right").innerHTML=`
  <p><b>Производители:</b> <span class="greens">${e.production_companies.length?e.production_companies.map(t=>t.name).join(", "):"-"}</span></p>
  <p><b>Премьера (мир):</b> <span class="greens">${e.release_date?new Date(e.release_date).toLocaleDateString("ru-RU"):"-"}</span></p>
  <p><b>Жанр:</b> <span class="greens">${e.genres.length?e.genres.map(t=>t.name).join(", "):"-"}</span></p>
  <p><b>Слоган:</b> <span class="greens">${e.tagline||"-"}</span></p>
  <p><b>Бюджет:</b> <span class="greens">$${((m=e.budget)==null?void 0:m.toLocaleString())||"—"}</span></p>
  <p><b>Сборы:</b> <span class="greens">$${((g=e.revenue)==null?void 0:g.toLocaleString())||"—"}</span></p>
  <p><b>Возраст:</b> <span class="greens">${e.adult?"18+":"16+"}</span></p>
  <p><b>Время:</b> <span class="greens">${e.runtime?e.runtime+" мин.":"-"}</span></p>
`;const $=e.credits.cast.slice(0,10);document.querySelector(".actors").innerHTML=$.map(t=>`
    <div>
      <img src="${t.profile_path?`https://image.tmdb.org/t/p/w300${t.profile_path}`:"/public/placeholder.jpg"}" alt="${t.name}">
      <p>${t.name}</p>
    </div>
  `).join("");const r=e.images.posters.slice(0,6),i=document.querySelector(".frames");r.length?i.innerHTML=r.map(t=>`
      <img src="https://image.tmdb.org/t/p/w500${t.file_path}" alt="">
    `).join(""):i.innerHTML=`
      <div style="width:100%;height:200px;background:#333;display:flex;align-items:center;justify-content:center;color:#aaa">
        Нет постеров
      </div>`;const o=e.videos.results.find(t=>t.type==="Trailer"&&t.site==="YouTube"),p=document.querySelector(".trailer");o?p.innerHTML=`
      <iframe
        width="100%"
        height="640"
        src="https://www.youtube.com/embed/${o.key}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `:p.innerHTML=`
      <div style="width:100%;height:200px;background:#333;display:flex;align-items:center;justify-content:center;color:#aaa">
        Нет трейлера
      </div>
    `,b.get(`/movie/${h}/similar`).then(t=>{const n=t.data.results.slice(0,8),u=document.querySelector(".similar");n.length?u.innerHTML=n.map(s=>`
          <div class="similar-card" onclick="window.location.href='/src/pages/movie/index.html?id=${s.id}'">
            <img src="${s.poster_path?`https://image.tmdb.org/t/p/w300${s.poster_path}`:"/public/placeholder.jpg"}" alt="${s.title}">
            <p>${s.title}</p>
          </div>
        `).join(""):u.innerHTML='<p style="color:#aaa">Нет похожих фильмов.</p>'}).catch(t=>{console.error("Ошибка загрузки похожих фильмов:",t)})}).catch(a=>{console.error("Ошибка загрузки фильма:",a)});
