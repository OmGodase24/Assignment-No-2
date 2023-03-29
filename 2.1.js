function Maximum(Arr) {
    var No = Arr[0];
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > No) {
            No = Arr[iCnt];
        }
    }
    return No;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ret = 0;
ret = Maximum(arr);
console.log("The Maximum number is:" + ret);
