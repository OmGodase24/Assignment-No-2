function ChkArmstrong(no) {
    var iSum = 0;
    var iDigit = 0;
    var temp = no;
    while (temp > 0) {
        iDigit = temp % 10;
        iSum = iDigit * iDigit * iDigit + iSum;
        temp = Math.floor(temp / 10);
    }
    if (iSum == no) {
        return true;
    }
    else {
        return false;
    }
}
var No = 153;
var iret = true;
iret = ChkArmstrong(No);
if (iret == true) {
    console.log("It is an Armstrong number");
}
else {
    console.log("It is not an Armstrong number");
}
