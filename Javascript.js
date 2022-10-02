function RAESearchs(){
  var RAesearch= document.getElementById("RAEsearch").value;
  var FullSearch= "https://dle.rae.es/".concat('', RAesearch);
  window.location.href=(FullSearch);
}