function RAESearchs(){
  var RAesearch= document.getElementById("RAEsearch").value;
  var FullSearch= "https://dle.rae.es/".concat('', RAesearch);
  window.location.href=(FullSearch);
}
/* Función para cambiar la clase "responsive" */
function toggleNav() {
  var navbar = document.getElementById("navbar-links");
  if (navbar.className === "navbar-links") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar-links";
  }
}