var nb1 = prompt("Entrez le premier nombre");
var nb2 = prompt("Entrez le deuxième nombre");
var oper = prompt("Quel opération voulez vous effectuer ? (+, -, * ou /)");

if (oper === "+")
  alert(parseInt(nb1) + parseInt(nb2));
else if (oper === "-")
  alert(parseInt(nb1) - parseInt(nb2));
else if (oper === "*")
  alert(parseInt(nb1) * parseInt(nb2));
else if (oper === "/" && nb2 != 0)
  alert(parseInt(nb1) / parseInt(nb2));
else
  alert("Erreur");
