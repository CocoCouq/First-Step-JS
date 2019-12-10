var tab = Array();
var i;
var som;
som = 0;
i = 0;

while (tab[i - 1] != 0)
{
      tab[i] = prompt("Saisissez le nombre n°" + (i + 1) + "\nSaisissez 0 pour arrêter");
      i++;
}
i = -1;
while (tab[++i] != 0)
    som = som + parseInt(tab[i]);
alert("Somme : " + som);
alert("Moyenne : " + (som / i));
