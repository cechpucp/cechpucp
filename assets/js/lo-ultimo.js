const recentPosts = [
    {
      title: "Preludio a la Revolución",
      date: "Junio 09, 2023",
      img: "../../../publicaciones/ensayos/img/ensayo-1.png",
      link: "../../../publicaciones/ensayos/Prelude-to-Revolution/"
    },
    {
      title: "La Ruta de la Seda 2.0: ¿espejismo o oportunidad?",
      date: "2025-04-15",
      img: "assets/img/blog/seda.jpg",
      link: "posts/ruta-seda.html"
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
  