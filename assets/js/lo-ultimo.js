// Define la ruta base del proyecto (ajusta esto si cambia el nombre del repo)
const baseURL = "/cechpucp"; 

const recentPosts = [
    {
      title: "Boletín CECH - Edición N°1",
      date: "August 01, 2021",
      img: baseURL + "/publicaciones/boletines/img/boletin-1.png",
      link: baseURL + "/publicaciones/boletines/"
    },
    {
      title: "Preludio a la Revolución",
      date: "Junio 09, 2023",
      img: baseURL + "/publicaciones/ensayos/Prelude-to-Revolution/img/ensayo-1.png",
      link: baseURL + "/publicaciones/ensayos/Prelude-to-Revolution/"
    },
    {
      title: "Convocatoria CECH 2025-1",
      date: "Marzo 14, 2025",
      img: baseURL + "/eventos/nueva-convocatoria-cech-economia-2025-1/img/BANNER-CONVOCATORIA-2025-1.jpg",
      link: baseURL + "/eventos/nueva-convocatoria-cech-economia-2025-1/"
    },
    // Agrega más post aquí
  ];
  
  function renderRecentPosts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    recentPosts.forEach(post => {
      const postHTML = `
        <div class="post-item">
          <img src="${post.img}" alt="" class="flex-shrink-0">
          <div>
            <h4><a href="${post.link}">${post.title}</a></h4>
            <time datetime="${post.date}">${new Date(post.date).toDateString()}</time>
          </div>
        </div>`;
      container.innerHTML += postHTML;
    });
  }
  
  