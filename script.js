document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado por entrar em contato! Responderemos em breve.');
});

// Animação do Menu
const menuBurger = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

// Abrir/fechar o menu quando o hambúrguer for clicado
menuBurger.addEventListener('click', (e) => {
  e.stopPropagation(); // Impede que o evento se propague para o documento
  menuBurger.classList.toggle('open');
  menuList.classList.toggle('show');
});

// Fechar o menu se o usuário clicar fora do menu
document.addEventListener('click', (e) => {
  // Verifica se o clique foi fora do menu e do hambúrguer
  if (!menuBurger.contains(e.target) && !menuList.contains(e.target)) {
      menuBurger.classList.remove('open');
      menuList.classList.remove('show');
  }
});


