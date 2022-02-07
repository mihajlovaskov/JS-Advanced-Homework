let names = ["Mihajlo", "Irena", "Bisera", "Vesna", "Srgjan"];
let surnames = ["Vaskov", "Gjorgjevikj", "Vaskova", "Ivanova", "Ivanov"];

listOfFullNames=((firstNames, lastNames)=>
{let newArray = [];for(i=0; i < firstNames.length; i++){newArray[i] = ` ${firstNames[i]} ${lastNames[i]}`;} 
return document.getElementById("fullNames").innerText= `The list of full names is as follows: ${newArray}.`})(names,surnames)
