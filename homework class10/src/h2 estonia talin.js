async function getCapitalInfo(capitalCity){
    let response = await fetch(`https://restcountries.com/v3.1/capital/${capitalCity}`);
    let data = await response.json();
    data.filter(c => creatingDomOnCapitalCity(c.capitalInfo.latlng + ` are the latlng of ${capitalCity}`));
    //osven latitude i longitude za Talin, drugo nisto ne najdov kako informacija za Talin vo API -to ???
    data.filter(curr => {currency = Object.keys(curr.currencies)[0]});
    let response2 = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
    let data2 = await response2.json();
    data2.forEach(d => creatingLi(d.name.official))
}
function creatingDomOnCapitalCity(someData){
    let mySpan = document.createElement("span");
    let myOl = document.getElementsByTagName("ol")[0];
    myOl.before(mySpan);
    mySpan.textContent=`${someData}`
}
function creatingLi(someData){
    let myOl = document.getElementsByTagName("ol")[0]
    let myLi = document.createElement("li")
    myOl.appendChild(myLi);
    myLi.textContent = `${someData}`
}
getCapitalInfo("tallinn");



