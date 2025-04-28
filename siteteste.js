const courses = [
    {
      id: 1,
      title: "Desenvolvimento Web para Iniciantes",
      description: "Aprenda HTML, CSS e JavaScript do zero.",
      price: "R$ 99,00",
      image: "desenvolvimento-web-capa.jpg.webp"
    },
    {
      id: 2,
      title: "React.js Completo",
      description: "Domine React e construa aplicações incríveis!",
      price: "R$ 149,00",
      image: "download.png"
    },
    {
      id: 3,
      title: "Design de Interface (UI/UX)",
      description: "Crie interfaces bonitas e funcionais.",
      price: "R$ 89,00",
      image: "fundo-gradiente-ui-ux_23-2149052117.avif"
    }
  ];
  
  // Carregar cursos na página
  function loadCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
  
    courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <img src="${course.image}" alt="Imagem do curso">
        <div class="content">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <p><strong>${course.price}</strong></p>
          <button onclick="buyCourse('${course.title}')">Comprar</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Simular compra
  function buyCourse(courseName) {
    alert(`Você comprou o curso: ${courseName}!`);
  }
  
  // Simular login/logout
  document.getElementById('loginBtn').addEventListener('click', () => {
    alert('Login feito com sucesso!');
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'inline-block';
  });
  
  document.getElementById('logoutBtn').addEventListener('click', () => {
    alert('Logout realizado!');
    document.getElementById('loginBtn').style.display = 'inline-block';
    document.getElementById('logoutBtn').style.display = 'none';
  });
  
  loadCourses();
  