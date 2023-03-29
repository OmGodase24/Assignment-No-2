function Maximum(Arr) {
    var iNo1 = 0;
    var iNo2 = 0;
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > iNo1) {
            iNo2 = iNo1;
            iNo1 = Arr[iCnt];
        }
        else if (Arr[iCnt] > iNo2 && Arr[iCnt] !== iNo1) {
            iNo2 = Arr[iCnt];
        }
    }
    return iNo2;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ret = 0;
ret = Maximum(arr);
console.log("Second Maximum number is:" + ret);
