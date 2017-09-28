
if(process.argv.length != 6)
{
  // General recommendation: Remove unused code instead of commenting it out. A reader of your code has no idea why the following
  // line of comment is in your code. Was it an experiment? Is this work in progress? Source control systems like Git
  // care for storing versions, so you can always look back in time to recover old code versions.
  //console.error('Invalid number of Arguments!');
  console.log("Invalid parameters");
  process.exit(1);
}
// Why three `!`? Wouldn't one be enough?
else if(!!!parseFloat(process.argv[2]))
{
    //console.error('Not a number inserted! Usage: <number> <unit> to <unit>');
    console.log("Invalid parameters");
    process.exit(1);
}
if(!checkConvertParameters(process.argv[3], process.argv[5]))
{
    //console.log("Parameters wrong! Use: m, cm, mm or kg, g");
    console.log("Invalid parameters");
}else if(process.argv[4] !== 'to')
{
    console.log("Invalid parameters");
}
else{
    var value1 = parseFloat(process.argv[2]);
    var value2;
    value2 = convert(process.argv[3], process.argv[5], process.argv[2]);
    console.log(value1 +" "+process.argv[3]+ " are "+ value2+ " "+process.argv[5] );
}

function checkConvertParameters(param1, param2)
{
    var params = ["m", "cm", "mm", "kg", "g"];
    var includedParam1 = params.indexOf(param1) != -1;
    var includedParam2 = params.indexOf(param2) != -1;
    //console.log(includedParam1);
    //console.log(includedParam2);
    if(!includedParam1 || !includedParam2)
    {
        return false;
    }
    if((param1 === 'm' || param1 === 'cm' || param1 ==='mm') && (param2 === 'kg' || param2 === 'g'))
    {
        return false;
    }
    if((param1 === 'kg' || param1 === 'g') && (param2 === 'm' || param2 === 'cm' || param2 ==='mm'))
    {
        return false;
    }
    return true;
}

function convert(param1, param2, value)
{
    if(param1==="m")
    {
        switch(param2)
        {
            case "cm":
                value = value*100;
                break;
            case "mm":
                value = value*1000;
                break;
        }
    }else if(param1 === "cm")
    {
        switch(param2)
        {
            case "m":
                value = value/100;
                break;
            case "mm":
                value = value*10;
                break;
        }
    }else if(param1 === "mm")
    {
        switch(param2)
        {
            case "m":
                value = value/1000;
                break;

            case "cm":
                value = value/10;
                break;
        }
    }else if(param1==="kg")
    {
        value = value*1000;
    }else if(param1==="g")
    {
        value = value/1000;
    }

    return value;
}
