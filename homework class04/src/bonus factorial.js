factorial = num => {
    if(num == null || num == undefined || isNaN(num) || num <= 0 ){
    alert("Your input is not a valid number. Try again");
     return;}
    else if(num == 1) {return 1};
    return num*factorial(num-1);
}   

document.getElementById("calculate").addEventListener('click', () => {
    document.getElementById("resultFactorial").innerText = `Factorial of ${document.getElementById("number").value} is ${factorial(document.getElementById("number").value)}`
    document.getElementById("number").value="";
})