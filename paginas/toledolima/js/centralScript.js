
  
AOS.init({
  duration: 1500,
  offset: 0,
});

$(document).ready(function () {
  $("#nav").load("src/nav.html");
  $("#contato").load("src/contato.html");
  $("#footer").load("src/footer.html");
});



window.addEventListener("scroll", function () {
  const navSection = document.querySelector(".nav-section");
  const scrollY = window.scrollY;
  const maxScroll = 200; // Máximo de scroll para o efeito completo
  let opacity = 0;
  let blur = 0;

  if (scrollY <= maxScroll) {
    opacity = 0.5 * (scrollY / maxScroll); // A opacidade agora para em 0.5
    blur = 10 * (scrollY / maxScroll); // Desfoque aumenta com o scroll
  } else {
    opacity = 0.5; // Mantém a opacidade em 0.5 após 100 pixels de scroll
    blur = 10; // Desfoque máximo após 100 pixels de scroll
  }

  navSection.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  navSection.style.backdropFilter = `blur(${blur}px)`;
});



window.addEventListener("scroll", function () {
  const parallaxImages = document.querySelectorAll(".parallax-img");

  parallaxImages.forEach((img) => {
    // Lê a velocidade do parallax do atributo data-speed
    const speed = parseFloat(img.getAttribute("data-speed")) ||
      0.1; // Valor padrão se data-speed não estiver definido

    const imgTop = img.offsetTop; // Distância do topo da página até a imagem
    const scrollY = window.scrollY; // Posição atual do scroll
    const windowHeight = window.innerHeight; // Altura da janela do navegador

    // Distância da imagem em relação ao centro da tela
    const imgCenterDistance =
      scrollY + windowHeight / 2 - (imgTop + img.clientHeight / 2);

    // Calcula o deslocamento para o efeito parallax
    const parallaxOffset = imgCenterDistance * speed;

    // Aplica o deslocamento à imagem
    img.style.transform = `translateY(${parallaxOffset}px)`;
  });
});



window.addEventListener("scroll", function () {
  throttleParallax();
});

let lastScroll = 0;
const delay = 0; // Delay para o throttle (em milissegundos)

function updateParallax() {
  const parallaxElements = document.querySelectorAll(
    ".parallax-background"
  );

  parallaxElements.forEach((parallaxElement) => {
    const parallaxSpeed = parallaxElement.dataset.speed || -0.2; // Usa o data-speed ou um valor padrão
    const scrollY = window.scrollY;
    const parallaxOffset = scrollY * parallaxSpeed;

    parallaxElement.style.backgroundPositionY = `${parallaxOffset}px`;
  });
}

function throttleParallax() {
  const currentScroll = window.scrollY;
  if (Math.abs(currentScroll - lastScroll) > delay) {
    updateParallax();
    lastScroll = currentScroll;
  }
}



document.addEventListener("DOMContentLoaded", function () {
  const windowHeight = window.innerHeight; // Obter a altura da janela

  document.querySelectorAll(".bg-parallax").forEach((parallaxElement) => {
    const parallaxSpeed =
      parseFloat(parallaxElement.dataset.speed) || -0.2;
    const dataStart = parallaxElement.dataset.start || "0"; // Pode ser um valor em px ou %

    // Verifica se dataStart inclui '%', caso contrário, assume que é um valor em px e converte para float
    const startPositionY = dataStart.includes("%") ?
      dataStart :
      parseFloat(dataStart);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateParallax();
            window.addEventListener("scroll", updateParallax);
          } else {
            window.removeEventListener("scroll", updateParallax);
          }
        });
      }, {
      threshold: 0.01,
    }
    );

    observer.observe(parallaxElement);

    function updateParallax() {
      const elementRect = parallaxElement.getBoundingClientRect();
      const elementTopToWindowBottom = elementRect.top - windowHeight;
      const parallaxOffset =
        Math.max(0, -elementTopToWindowBottom) * parallaxSpeed;

      // Aplica a posição inicial diretamente se for em %, ou calcula com base no offset se for um valor numérico
      parallaxElement.style.backgroundPositionY =
        typeof startPositionY === "string" ?
          startPositionY :
          `${startPositionY + parallaxOffset}px`;
    }
  });
});
