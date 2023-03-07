import {} from "./jquery.js"

$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault(); // empêche la soumission du formulaire
  
      var nom = $('#nom').val();
      var prenom = $('#prenom').val();
      var dateNaissance = $('#dateNaissance').val();
      var dateNaissanceObj = new Date(dateNaissance);
      var age = new Date().getFullYear() - dateNaissanceObj.getFullYear();
  
      // Vérification des données saisies
      var erreur = false;
      if (nom === "") {
        $('#nom').css('background-color', 'red');
        erreur = true;
      } else {
        $('#nom').css('background-color', 'white');
      }
  
      if (prenom === "") {
        $('#prenom').css('background-color', 'red');
        erreur = true;
      } else {
        $('#prenom').css('background-color', 'white');
      }
  
      if (isNaN(dateNaissanceObj.getTime())) {
        $('#dateNaissance').css('background-color', 'red');
        erreur = true;
      } else {
        $('#dateNaissance').css('background-color', 'white');
      }
  
      // Affichage du résultat
      if (!erreur) {
        var result = "Nom : " + nom + "<br>";
        result += "Prénom : " + prenom + "<br>";
        result += "Âge : " + age + " ans";
        $('#result').html(result);
      }
    });
  });