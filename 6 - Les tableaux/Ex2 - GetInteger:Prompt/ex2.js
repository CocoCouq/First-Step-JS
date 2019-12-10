function    GetInteger(i)
{
    return parseInt(prompt("Entrez le nombre " + i));
}

function    InitTab(tab)
{
    var len = prompt("Quelle est la taille du tableau ?");
    tab = Array(len);
    return len;
}
function    SaisieTab(tab, len)
{
    var i = -1;

    while (++i != len)
        tab[i] = GetInteger(i + 1);
}
function    AfficheTab(tab, len)
{
    var i = -1;

    while (++i != len)
        alert(tab[i]);
}
function    RechercheTab(tab)
{
    var index = prompt("Vous souhaitez la valeur n :");

    alert(tab[index - 1]);
}
function    InfoTab(tab, len)
{
    var max = 0;
    var moy = 0;
    var i = 0;

    while (i != len)
    {
        if (tab[i] > max)
            max = tab[i];
            moy = moy + tab[i];
            i++;
    }
    moy = moy / (len);
    alert(max + '\n' + moy);
}
var tab = [];
var len = InitTab(tab);
SaisieTab(tab, len);
AfficheTab(tab, len);
RechercheTab(tab);
InfoTab(tab, len);
