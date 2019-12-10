function  isPrime(nb)
{
  var x = 3;
  if (nb <= 1)
    return false;
  else if(nb === 2)
    return true;
  else if(nb % 2 === 0)
    return false;
  else
  {
    while(x < (nb / 2))
    {
      if(nb % x === 0)
        return false;
      x += 2;
    }
    return true;
  }
}

var max = parseInt(prompt("Chercher les nombres premiers jusqu'à :"));
var i = 1;

while (i < max)
{
    if (isPrime(i) === true)
        console.log(i);
    i++;
}
