var n1 = parseInt(prompt("Nombre 1 :"));
var n2 = parseInt(prompt("Nombre 2 :"));
var res = 0;

if (n1 < n2)
{
  while(n1 <= n2)
  {
    res = res + n1;
    n1++;
  }
}
else
{
  while(n2 <= n1)
  {
    res = res + n2;
    n2++;
  }
}
alert("La somme est de : " + res);
