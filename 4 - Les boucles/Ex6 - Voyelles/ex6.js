var res;
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
