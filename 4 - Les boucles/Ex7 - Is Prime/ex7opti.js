var nb;
var i;
i = 3;

nb = parseInt(prompt("Entrez un nombre"));
if (nb <= 1)
    alert("Pas premier");
else if (nb == 2 || nb == 3 || nb == 5)
    alert("Premier");
else if (nb % 2 == 0)
    alert("Pas premier");
else
{
    while((nb % i != 0) && i > Math.sqrt(nb))
    {

    if (nb % i == 0)
        alert("Pas premier");
    else
        alert("Premier");
    i += 2;
    }
}
// 101
// 1 741
// 5 023
// 49 999
// 2147483647
// 214803626941
// 1000000000177
