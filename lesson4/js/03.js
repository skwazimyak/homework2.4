let a = prompt("Enter your number")
if(isNaN(a) || a === ""){
    document.write("This is not a number")
}
else if (a>0){
    function ggg(){
        document.write("!")
    }
}
else{
    function ggg(){
        document.write("!!")
    }
}
ggg()