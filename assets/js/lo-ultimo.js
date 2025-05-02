// Define la ruta base del proyecto (ajusta esto si cambia el nombre del repo)
const baseURL = "/cechpucp"; 

const recentPosts = [
    {
    title: "Convocatoria CECH 2025-1",
    date: "2025-03-14",
    img: baseURL + "/eventos/nueva-convocatoria-cech-economia-2025-1/img/BANNER-CONVOCATORIA-2025-1.jpg",
    link: baseURL + "/eventos/nueva-convocatoria-cech-economia-2025-1/"
    },
    {
      title: "Preludio a la Revolución",
      date: "Junio 09, 2023",
      img: baseURL + "/publicaciones/reseñas/Prelude-to-Revolution/img/reseñas-1.png",
      link: baseURL + "/publicaciones/reseñas/Prelude-to-Revolution/"
    },
    {
      title: "Boletín CECH - Edición N°1",
      date: "August 01, 2021",
      img: baseURL + "/publicaciones/boletines/img/boletin-1.png",
      link: baseURL + "/publicaciones/boletines/"
    },
    {
      title: "How China became Capitalist",
      date: "June 09, 2023",
      img: baseURL + "/publicaciones/reseñas/Como-china-se-volvio-capitalista/img/reseña1.png",
      link: baseURL + "/publicaciones/reseñas/Como-china-se-volvio-capitalista/"
    },
    {
      title: "Impacto de X sobre y: Un enfóque econométrico",
      date: "September 17, 20xx",
      img: baseURL + "/publicaciones/articulos/Impacto-de-X-sobre-y/img/articulo-1.png",
      link: baseURL + "/publicaciones/articulos/Impacto-de-X-sobre-y/"
    },
    // Agrega más post aquí
  ];
  
  function formatDatePeriodistico(dateStr) {
    const fecha = new Date(dateStr);
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${mes} ${dia}, ${año}`;
  }
  
  function renderRecentPosts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    recentPosts.forEach(post => {
      const postHTML = `
        <div class="post-item">
          <img src="${post.img}" alt="" class="flex-shrink-0">
          <div>
            <h4><a href="${post.link}">${post.title}</a></h4>
            <time datetime="${post.date}">${formatDatePeriodistico(post.date)}</time>
          </div>
        </div>`;
      container.innerHTML += postHTML;
    });
  }