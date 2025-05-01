const recentPosts = [
    {
      title: "Preludio a la Revolución",
      date: "Junio 09, 2023",
      img: "../../../publicaciones/ensayos/Prelude-to-Revolution/img/ensayo-1.png",
      link: "../../../publicaciones/ensayos/Prelude-to-Revolution/"
    },
    {
      title: "Convocatoria CECH 2025-1",
      date: "Marzo 14, 2025",
      img: "../../../eventos/nueva-convocatoria-cech-economia/img/BANNER-CONVOCATORIA-2025-1.jpg",
      link: "../../../eventos/nueva-convocatoria-cech-economia/"
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
  