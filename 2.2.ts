
function Addition(Arr : number[]):number
{
    var iSum : number = 0;

    for(var iCnt= 0;iCnt<Arr.length;iCnt++)
    {
        iSum = iSum + Arr[iCnt]
    }
    return iSum
}

var arr : number[] = [23,6,7,4,5,7]

var ret = 0;

ret = Addition(arr)

console.log("Addition is:"+ret)