
function ChkString(Str :string):boolean
{
    
    if(Str.indexOf("Marvellous")!== -1)
    {
        return true
    }
    else
    {
        return false
    }
    
}

var str : string= "Pune Kothrud marvellous Infoystems "

var iret : boolean = true

iret = ChkString(str)

if(iret==true)
{
    console.log("String Contains marvellous in it")
}
else
{
    console.log("String doesn't contain Marvellous in it")
}