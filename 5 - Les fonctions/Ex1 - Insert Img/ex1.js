function    _produit(x, y)
{
    var res = x * y;
    return res;
}
function    _afficheImg(image)
{
    document.querySelector("#test").innerHTML = `<img src="${image}">`
}
var produit = _produit(3, 5);
document.querySelector("#test1").innerHTML = `Le cube de 3 est 27 <br> Le produit de 3 x 5 est égal à ${produit}`
_afficheImg("papillon.jpg");
