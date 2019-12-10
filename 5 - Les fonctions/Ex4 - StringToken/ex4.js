function    _strtok(str1, str2, n)
{
    var strres = [];
    var i = 0;
    var len = str1.length;
    while (n > 1 && len != 0)
    {
        if (str1[i] == str2)
            n--;
        i++;
        len--;
    }
    var j = 0;
    while (str1[i] != str2 && len != 0)
    {
        strres[j] = str1[i];
        i++;
        j++
        len--;
    }
    return strres;
}
