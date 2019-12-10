var tab = Array(parseInt(prompt("Quelle est la taille du tabelau ?")));
var len = tab.length;
var i = -1;

while (i++ < len - 1)
    tab[i] = parseInt(prompt("Entrer une valeur du tableau"));
var T;
i = 0;
while (len >= 0)
{
    while (i < len)
    {
        if (tab[i] > tab[i + 1])
        {
            T = tab[i + 1];
            tab[i + 1] = tab[i];
            tab[i] = T;
        }
        i++;
    }
    len--;
    i = 0;
}
len = tab.length;
i = -1;
while (i++ < len - 1)
    alert(tab[i]);
