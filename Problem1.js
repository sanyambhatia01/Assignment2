
    const prompt = require('prompt-sync')();
    var s = prompt("Enter the string : ");
    const stringLength = s.length;

    if (s === "" || stringLength == 0) 
    {
        console.log( s) ;
    }

    let maxLength = 1;
    let low, high;
    let start = 0;

    for (i = 1; i < stringLength; i++)
    {
       
        low = i - 1;
        high = i;

        while (low >= 0 && high < stringLength && s[low] === s[high])
        {
            if (high - low + 1 > maxLength)
            {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        }

        low = i - 1;
        high = i + 1;

        while (low >= 0 && high < stringLength && s[low] === s[high]) 
        {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        }
    }
    console.log(s.substring(start, start + maxLength));
