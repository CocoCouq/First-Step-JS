var heure1 = prompt("Entrez une heure sous la forme HH:MM:SS");
var heure2 = prompt("Entrez une heure sous la forme HH:MM:SS");

var regex = /:/g;
var h1 = regex[Symbol.split](heure1);
var h2 = regex[Symbol.split](heure2);
var minsup = 0;
var hsup = 0;

var seconde = parseInt(h1[2]) + parseInt(h2[2]);
if (seconde > 59)
{
    minsup = Math.trunc(seconde / 60);
    seconde = seconde % 60;
}
var minute = parseInt(h1[1]) + parseInt(h2[1]) + minsup;
if (minute > 59)
{
    hsup = Math.trunc(minute / 60);
    minute = minute % 60;
}
var heure = parseInt(h1[0]) + parseInt(h2[0]) + hsup;
alert("La somme est : " + heure + " heures " + minute + " minutes et " + seconde + "secondes");
