// Menu responsivo
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede que o clique no hamburger feche o menu
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      });
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      }
  });
});

// Voltar ao topo
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
      backToTop.classList.add("show");
  } else {
      backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Carrossel Fotos//
const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })


  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
},2000)