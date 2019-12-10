function    _multi()
{
    var i = 0;
    var n = prompt("Nombre de multiples :");
    var x = prompt("Pour le nombre entier :");

    while(++i <= n)
        alert(i + "x" + x + "=" + (i * x));
}
function    _somme()
{
    var tab = Array();
    var som = 0;
    var i = 0;

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
}
function    _voy()
{
    var str = prompt("Entrez un mot en minuscule");
    var strlen = str.length;
    var i = 0;
    var res = 0;

    while (strlen > 0)
    {
    if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u") || (str[i] == "y"))
        res++;
    i++;
    strlen--;
    }
    alert("Il y a " + res + " voyelles");
}
function    _findchar()
{
    var str = prompt("Entrez un mot en minuscule");
    var c = prompt("Caractère à rechercher :")
    var strlen = str.length;
    var i = 0;
    var res = 0;

    while (strlen > 0)
    {
    if (str[i] == c)
        res++;
    i++;
    strlen--;
    }
    alert("Il y a " + res + " " + c);
}
var rep1;
rep1 = prompt("1- Multiples \n 2- Somme et moyenne \n 3- Recherche du nombre de voyelles \n 4- Recherche du nombre des cractères suivants \n Entrez votre choix :")
if (rep1 == 1)
    _multi();
if (rep1 == 2)
    _somme();
if (rep1 == 3)
    _voy();
if (rep1 == 4)
    _findchar();
