var magic = parseInt(Math.random()*100);
var nb = prompt("Trouver le nombre :");

while (nb != magic)
{
    if (nb < magic)
        nb = prompt("Plus grand");
    else
        nb = prompt("Plus petit");
}
alert("Trouvé !!");
