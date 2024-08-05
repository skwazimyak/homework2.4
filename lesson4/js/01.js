function day(){
    let number = prompt("Enter number 1-7")
    if(isNaN(number) || number === ""){
        return("This is not a number")
    }
    else if(number < 1 || number > 7){
        return("Not correct number")
    }
    const list = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    return(list[number-1])
}
document.write(day())