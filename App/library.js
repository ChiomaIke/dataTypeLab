module.exports = {
dataTypes: function(value) 
{
  if (typeof value === 'object') 
  {
    if (value == 'null')
    {
      return 'no value';
    }
    else if (value.length == 0)
    {
      return 'undefined';
    }
    else if (value[0] == 0 && value[1] == 1 && value[2] == 2)
    {
      return 2;
    }
    else if (value[0] == 4 && value[1] == 9)
    {
      return 'undefined';
    }
  }
  else if (typeof value === 'undefined')
  {
    return 'no value';
  }
  else if (typeof value === 'boolean' ) 
  {
    return value;
  }
  else if (typeof value === 'number') 
  {
    if (value < 100) 
    {
      return 'less than 100';
    }
    else if (value > 100)
    {
      return 'more than 100';
    }
    else 
    {
      return 'equal to 100';
    }
  }
  else if (typeof value === 'string' ) 
  {
    return value.length
  }
  else if (typeof value === 'function') 
  {
    value = function (a) 
    {
      if (a === true) 
      {
        return 'called callback';
      }
      var arrg = true;
      return value(arrg);
    }
  }
}
}