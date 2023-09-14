 // Capturando elementos HTML
 const escudo = document.getElementById('escudo');
 const divTimes = document.querySelector('.timesCompleto');

 // Adicionando um ouvinte de evento para quando o mouse entrar na imagem
 escudo.addEventListener('mouseenter', function() {
     divTimes.style.display = 'block';
 });

 // Adicionando um ouvinte de evento para quando o mouse sair da imagem
 escudo.addEventListener('mouseleave', function() {
     divTimes.style.display = 'none';
 });