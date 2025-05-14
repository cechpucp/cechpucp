
document.addEventListener("DOMContentLoaded", function () {
  const baseURL = "/cechpucp";  // 👈 aquí defines tu base
  const headerHTML = `
<header id="header" class="header d-flex align-items-center sticky-top">
  <div class="container position-relative d-flex align-items-center justify-content-between">

    <a href="\${baseURL}/" class="logo d-flex align-items-center me-auto me-xl-0">
      <h1 class="sitename">Círculo de Estudios Chinos</h1>
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li class="dropdown"><a href="\${baseURL}/nosotros/"><span>Nosotros</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="\${baseURL}/nosotros/">CECH</a></li>
            <li><a href="\${baseURL}/nosotros/derecho/">Sección Derecho</a></li>
            <li><a href="\${baseURL}/nosotros/economia/">Sección Economía</a></li>
            <li><a href="\${baseURL}/nosotros/literatura/">Sección Literatura</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="\${baseURL}/publicaciones/"><span>Publicaciones</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="\${baseURL}/publicaciones/articulos/">Artículos académicos</a></li>
            <li><a href="\${baseURL}/publicaciones/ensayos/">Ensayos</a></li>
            <li><a href="\${baseURL}/publicaciones/reseñas/">Reseñas</a></li>
            <li><a href="\${baseURL}/publicaciones/boletines/">Boletines</a></li>
          </ul>
        </li>
        <li><a href="\${baseURL}/noticias/">#Noticias</a></li>
        <li><a href="\${baseURL}/eventos/">Eventos</a></li>
        <li><a href="\${baseURL}/contacto/">Contacto</a></li>
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <div class="logo-mini d-none d-lg-block">
      <a href="https://confucio.pucp.edu.pe/" target="_blank" rel="noopener">
        <img src="\${baseURL}/assets/img/confucio-logo.png" alt="Logo InstConfucio" style="height: 40px; margin-left: 15px;">
      </a>
    </div>

    <div class="header-social-links">
      <a href="https://www.facebook.com/cechpucp" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/cechpucp/" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="https://www.linkedin.com/company/c%C3%ADrculo-de-estudios-chinos-secci%C3%B3n-derecho/posts/?feedView=all" class="linkedin"><i class="bi bi-linkedin"></i></a>
    </div>

  </div>
</header>
  `.replace(/\$\{baseURL\}/g, baseURL); // 🔁 sustituye todas las ocurrencias

  document.getElementById("header-container").innerHTML = headerHTML;
});
