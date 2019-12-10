var nom = prompt("Entrez votre nom");
var prenom = prompt("Entrez votre prénom");

if (confirm("Etes vous un homme ?"))
    var sexe = "Monsieur";
else
    var sexe  = "Madame";
alert("Bonjour " + sexe + " " + nom + " " + prenom + "\nBienvenue sur notre site web!");
