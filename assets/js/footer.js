// Define la ruta base del proyecto (ajusta esto si cambia el nombre del repo)
document.addEventListener("DOMContentLoaded", function () {
  const baseURL = "/cechpucp";
  const footerHTML = `
<footer id="footer" class="footer dark-background">

  <div class="container footer-top">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-6 footer-about">
        <a href="\${baseURL}/" class="logo d-flex align-items-center">
          <span class="sitename">Círculo de Estudios Chinos</span>
        </a>
        <div class="footer-contact pt-3">
          <p>Av. Universitaria Nº 890, San Miguel</p>
          <p>Lima, Perú</p>
          <p class="mt-3"><strong>Phone:</strong> <span>+51 5589 55488 55</span></p>
          <p><strong>Email:</strong><br>
          <span>cech-derecho@pucp.edu.pe</span><br>
          <span>cech-economia@pucp.edu.pe</span>
        </p>
        </div>
        <div class="social-links d-flex mt-4">
          <!--<a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a></a>-->
          <a href="https://www.facebook.com/cechpucp" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/cechpucp/" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/company/c%C3%ADrculo-de-estudios-chinos-secci%C3%B3n-derecho/posts/?feedView=all" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div class="col-lg-2 col-md-3 footer-links">
        <h4>Enlaces</h4>
        <ul>
          <li><a href="\${baseURL}/">Inicio</a></li>
          <li><a href="\${baseURL}/nosotros/">Nosotros</a></li>
          <li><a href="\${baseURL}/publicaciones/">Publicaciones</a></li>
          <li><a href="\${baseURL}/noticias/">#Noticias</a></li>
          <li><a href="\${baseURL}/eventos/">Eventos</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-3 footer-links">
        <h4>Nobis illum</h4>
        <ul>
          <li><a href="#">Ipsam</a></li>
          <li><a href="#">Laudantium dolorum</a></li>
          <li><a href="#">Dinera</a></li>
          <li><a href="#">Trodelas</a></li>
          <li><a href="#">Flexo</a></li>
        </ul>
      </div>

    </div>
  </div>

  <div class="container copyright text-center mt-4">
    <p>© <span>Copyright</span> <strong class="px-1 sitename">ZenBlog</strong> <span>All Rights Reserved</span></p>
    <div class="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>

</footer>
  `.replace(/\$\{baseURL\}/g, baseURL);

  document.getElementById("footer-container").innerHTML = footerHTML;
});
