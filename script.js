// Cuando el usuario hace scroll en la página, se ejecuta la función
window.onscroll = function() {myFunction()};

function myFunction() {
  // Obtiene cuánto se ha scrolleado la página
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  // Calcula la altura total scrolleable
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // Calcula el porcentaje de scroll
  var scrolled = (winScroll / height) * 100;
  
  // Actualiza el ancho de la barra de progreso
  document.getElementById("myBar").style.width = scrolled + "%";
}