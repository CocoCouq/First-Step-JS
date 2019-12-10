function    testcode()
{
    var filtre = /[0-9]{5}/;
    var CP = document.getElementById("code").value;
    var result = filtre.test(CP);
    if(!filtre.test(CP))
        alert("Rensiegner un code postal valide (exemple : 75000)");
    filtre.lastIndex;
}
