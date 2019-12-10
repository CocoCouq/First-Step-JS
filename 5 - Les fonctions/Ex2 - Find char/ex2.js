function     to_find(str, a)
{
    var strlen = str.length;
    var i = 0;
    var res = 0;

    while(i < strlen)
    {
          if (str[i] === a)
              res++;
          i++;
    }
    return res;
}
