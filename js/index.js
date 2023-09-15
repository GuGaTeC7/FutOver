 // MODAL TIMES
 const escudo = document.getElementById('escudo');
 const divTimes = document.querySelector('.timesCompleto');

 escudo.addEventListener('mouseenter', function() {
     divTimes.style.display = 'block';
 });

 escudo.addEventListener('mouseleave', function() {
     divTimes.style.display = 'none';
 });