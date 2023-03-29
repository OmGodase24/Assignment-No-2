function ChkString(Str) {
    if (Str.indexOf("Marvellous" || "marvellous") !== -1) {
        return true;
    }
    else {
        return false;
    }
}
var str = "Pune Kothrud marvellous Infoystems ";
var iret = true;
iret = ChkString(str);
if (iret == true) {
    console.log("String Contains marvellous in it");
}
else {
    console.log("String doesn't contain Marvellous in it");
}
